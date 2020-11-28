# HistoryOnAMap

## Project Goal
The goal of this project is to let users view historical sovereign states overlayed on modern borders. Though currently limited in scope to changing African borders in the latter half of the 20th century, the long term goal is view shifting empires, nations, and political entities on a global scale.

## Project Structure
Code-wise, the project is broken into two main elements. The first is an API set up with Python's Flask framework, pulling map metadata from a MySQL database and aligning it with a prebuilt json file containing lat/long points of that state's borders. The second element is a React Google Map component calling the aforementioned API and overlaying the returned borders on a map instance.

## Viewing the project
This project is not currently in production on a public domain, but can easily be run locally. Simply clone the project to your local machine and drill first into the API folder in your favorite CLI. Ensure Flask is installed and run `python3 api.py` to start the API. Then in a separate tab drill down into Map and run `npm start`. This should open the project in localhost:3000.