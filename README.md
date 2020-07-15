# Prince George's County Public School Environmental Literacy Furtherance Project
<h2>Abstract</h2>
<p>This project was started as a student initiative to jumpstart environmental awareness and community involvement throughout public schools located within the Greater Prince George's County Area. Through polling schools within the county regarding both nearby and on-campus elements that promote or maintain Green health, a comprehensive dataset was compiled and imported into a database founded on a Python variant of MySQL. This data is then able to be funneled through a pipeline to an interactive graphical user interface that allows the user to visualize the frequency and distribution of mentioned environmental elements across the entire county.<br>
  Above all else, the intent of this project is to provide a system for the county to properly catalogue the overall health of its community environment, while simultaneously providing an interface user-friendly enough to serve as a learning device to students of all ages.</p>

<b>Link to App:</b> As this project is yet to be hosted on an online server, it is necessary to run it as a standalone service on a local machine (http://localhost/).

<b>Target Browsers:</b> Google Chrome, Mozilla Firefox, Safari, Microsoft Edge

<b>Link to User Manual:</b> https://drive.google.com/file/d/1LjI_9sDoIFQuPZ-uvwSXkOOxI1i0PdIK/view?usp=sharing

<b>Link to Developer Manual:</b> See below.

## Developer Manual
<h4>How to install application and all dependencies</h4>
  <ol>
    <li>Download the source code from GitHub</li>
      <ul>git clone "https://github.com/asandin218/pgcps_enviro_literacy490.git</ul>
    <li>Install npm for your specific OS</li>
      <ul> https://nodejs.org/en/download/ </ul>
    <li>Execute 'npm install' command</li>
    <li>Execute 'pip install wheel' command</li>
    <li>Execute 'python -m pip install --upgrade pip' command</li>
    <li>Execute 'pip install express requests bs4 pymysql' command</li>
  </ol>
<h4>How to run application on a server </h4>
  <ol>
    <li>Execute 'npm start' command</li>
    <li>Open browser and connect to the local host</li>
    <li>http://localhost</li>
  </ol>
<h4>How to run tests </h4>
  <ol>
    <li>Executing npm start will test the application and return back any errors before launching it</li>
  </ol>
<h4>The API for the server application </h4>  
  <ol>
    <li>To return all of the survey data</li>
      <ul> http://localhost/getAllData</ul>
    <li>To update database with all data from Google surveys</li>
      <ul> http://localhost/updateDatabase </ul>
    <li>To return records that match the query; when calumnName equals value</li>
      <ul> http://localhost/getDataByColumnName?columnName=<column name>&value=<value to query></ul>
    <li>To return records of schools that have the same name</li>
      <ul> http://localhost/getDuplicateSchools</ul>
  </ol>
<h3>Known Bugs and Road-map for Future Development</h3>
  <p>There are currently no known bugs. If the service refuses to run after following the user manual, take care that the MySQL server password matches the password provided in the user manual (unless changed at the user's discretion).<br>
    Future development would be concerned with portability, allowing this program to be easily applicable to any other county within the United States. Unforeseen bugs may appear in relation to the size of the county, as size constraints were not a variable tested in the construction of this project. Furthermore, this project may benefit from implementing or establishing compatibility with a Geographic Information System (GIS) framework.</p>
