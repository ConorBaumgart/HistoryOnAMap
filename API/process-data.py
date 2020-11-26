import sys
import geopandas
from shapely.geometry import MultiPolygon
import json
import matplotlib
from os import path

def toPoints(geometry):
    points = []
    for mpoly in geometry:
        if isinstance(mpoly, MultiPolygon):
            polys = list(mpoly)
        else:
            polys = [mpoly]
        for polygon in polys:
            for point in polygon.exterior.coords:
                points.append({
                    'lat': point[1],
                    'lng': point[0]
                })
    return points            

country_name = input('Country name, as declared in /countrydata/: ')

country_shp_path = './countrydata/' + country_name + '/' + country_name + '.shp'
if not path.exists(country_shp_path):
    print('That shapefile doesn\'t exist. Please ensure that it is located inside the countrydata folder and the file ends in the .shp extension.')
    sys.exit()

country = geopandas.read_file(country_shp_path)
points = toPoints(country.geometry)

f = open('./countrydata/' + country_name + '/' + country_name + '.json', 'w')
json.dump(points, f)