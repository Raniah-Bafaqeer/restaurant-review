## Project Name
Restaurant Review Website

### Description
 **Restaurant Reviews** is a website that display an information of restaurants and some details of each one including: 
   * Address
   * Location 
   * Review
   * Work schedule

### Browsers & Devices
All content is responsive and display on Google Chrome, Fire Fox and all display devices sizes, includes:
   * Desktop
   * Mobile: Google Nexus 5
   * Tablet: Apple iPad

### Specification

 * Responsive design and images
 * Accessibility : by using Aria roles to get the website accessible to blind 
   people , tab-index and skip links. 
 * Offline use: by using Service-worker to cache requests to all of the site’s assets so that any page that has been visited by a user will be accessible when 
   the user is offline.
 * Using [MapBox API key](https://www.mapbox.com/install/) application to mark the location of restaurants 
   on it

### Run the Application
To run the application, you have to do the following:
   1. Download as .zip file or clone this project:

      ``` $ git clone https://github.com/Raniah-Bafaqeer/restaurant-review.git ```

   2. In a terminal, change the root directory into the project root folder to start up a simple HTTP server to serve up the site files on your local computer by using Python.
   3. In a terminal, check the version of Python you have: `python -V`. then launch a local client server using Python from your terminal:

      Python 2.x:  `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) 
      Python 3.x:  `python3 -m http.server 8000`. 

   **Note**: If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
   4. With your server running, visit the site: `http://localhost:8000`



