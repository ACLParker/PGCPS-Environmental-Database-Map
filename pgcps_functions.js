const m = new Map([['color', 'red'], ['owner', 'Flavio'], ['age', 2]])

const JSON_KEY_TO_OPTION_NAMES = new Map([
    ["section1_time_stamp", ["Section 1: Time Stamp", "NA"]],
    ["section1_email", ["Section 1: Email", "NA"]],
    ["section1_school_name", ["Section 1: School Name", "NA"]],
    ["section1_green_school_certification", ["Section 1: Green School Certification", "Displays schools that are certified"]],
    ["section1_active_garden_vegetable_garden", ["Section 1: Active Gardens: Vegetable Garden", "Displays schools that have a vegetable garden"]],
    ["section1_active_garden_native_garden", ["Section 1: Active Gardens: Native Garden", "Displays schools that have a native garden"]],
    ["section1_active_garden_butterfly_garden", ["Section 1: Active Gardens: Butterfly Garden", "Displays schools that have a butterfly garden"]],
    ["section1_active_garden_rain_garden", ["Section 1: Active Gardens: Rain Garden", "Displays schools that have a rain garden"]],
    ["section1_active_garden_zen_garden", ["Section 1: Active Gardens: Zen Garden", "Displays schools that have a zen garden"]],
    ["section1_active_garden_herb_garden", ["Section 1: Active Gardens: Herb Garden", "Displays schools that have a herb garden"]],
    ["section1_active_garden_no_gardens_on_campus", ["Section 1: Active Gardens: No gardens on campus", "Displays schools that have no gardens"]],
    ["section1_active_garden_dont_know", ["Section 1: Active Gardens: I don't know", "Displays schools that don't know whether they have a garden"]],
    ["section1_recycle_at_breakfast", ["Section 1: Recycle: At Breakfast", "Displays schools that recycle at breakfast"]],
    ["section1_recycle_at_lunch", ["Section 1: Recycle: At Lunch", "Displays schools that recycle at lunch"]],
    ["section1_recycle_in_the_classroom", ["Section 1: Recycle: In the classroom", "Displays schools that recycle in the classroom"]],
    ["section1_recycle_not_at_all", ["Section 1: Recycle: Not at all", "Displays schools that don't recycle"]],
    ["section1_recycle_dont_know", ["Section 1: Recycle: I don't know", "Displays schools that don't know whether they recycle"]],
    ["section1_recycling_program_ink_cartridge_recycling", ["Section 1: Recycling Program: Ink Cartridge Recycling", "Displays schools that participate in ink cartridge recycling program/activity"]],
    ["section1_recycling_program_phones_batteries_other", ["Section 1: Recycling Program: Cellphones, Batteries, Others", "Displays schools that participate in cell phone/batteries/others recycling program/activity"]],
    ["section1_recycling_program_terra_cycling", ["Section 1: Recycling Program: Terra Cycling", "Displays schools that participate in terra cycling program/activity"]],
    ["section1_recycling_program_color_cycle_crayola", ["Section 1: Recycling Program: Color Cycle (Crayola)", "Displays schools that participate in color cycle recycling program/activity"]],
    ["section1_recycling_program_pepsi_recycle_rally", ["Section 1: Recycling Program: Pepsi Recycle Rally", "Displays schools that participate in Pepsi rally recycling program/activity"]],
    ["section1_recycling_program_none_programs_activities", ["Section 1: Recycling Program: No Programs/Activities", "Displays schools that participate in no recycling program/activity"]],
    ["section1_recycling_program_dont_know", ["Section 1: Recycling Program: I don't know", "Displays schools that don't know whether they participate in recycling program/activity"]],
    ["section1_composting_we_did_not_compost_at_our_school", ["Section 1: Composting: No compost at school", "Displays schools that don't compost"]],
    ["section1_composting_vermiculture", ["Section 1: Composting: Vermiculture", "Displays schools that perform vermiculture composting"]],
    ["section1_composting_drum_compost", ["Section 1: Composting: Drum Compost", "Displays schools that perform drum composting"]],
    ["section1_composting_open_frame", ["Section 1: Composting: Open Frame", "Displays schools that perform open frame composting"]],
    ["section1_composting_send_compost_local_facility_farm", ["Section 1: Composting: Send to Local Facility/Farm", "Displays schools that compost by sending to local facility/farm"]],
    ["section1_composting_dont_know", ["Section 1: Composting: I don't know", "Displays schools that don't know whether they compost"]],
    ["section1_cleanup_volunteer_effort", ["Section 1: Cleanup Volunteer Effort", "Displays schools that participate in cleanup volunteer efforts"]],
    ["section1_waste_reduction_comments", ["Section 1: Waste Reduction Comments", "NA"]],
    ["section2_reducing_water_strategy", ["Section 2: Reducing Water Strategy", "Displays schools that implement water reducing strategies"]],
    ["section2_stream", ["Section 2: Stream", "Displays schools that have a stream"]],
    ["section2_water_prevention_stream_bank_planting", ["Section 2: Water Prevention: Stream Bank Planting", "Displays schools that perfrom stream bank planting"]],
    ["section2_water_prevention_erosion_control_project", ["Section 2: Water Prevention: Erosion Control Project other than Stream Bank Planting", "Displays schools that participate in some other erosion control project"]],
    ["section2_water_prevention_painted_storm_drains", ["Section 2: Water Prevention: Painted Storm Drains", "Displays schools that paint storm drains"]],
    ["section2_water_prevention_raingarden_bioretention_area_planted", ["Section 2: Water Prevention: Raingarden/bioretention area planted", "Displays schools that plant a raingarden/bioretention area"]],
    ["section2_water_prevention_no_mow_zone", ["Section 2: Water Prevention: No-mow zone installed ", "Displays schools that have a no-mow zone installed"]],
    ["section2_water_prevention_rain_barrels", ["Section 2: Water Prevention: Rain barrels installed", "Displays schools that have rain barrels installed"]],
    ["section2_water_prevention_stream_cleaning", ["Section 2: Water Prevention: Stream Cleaning", "Displays schools that clean their stream"]],
    ["section2_water_prevention_collected_litter", ["Section 2: Water Prevention: Collected litter to prevent water pollution", "Displays schools that collect litter to prevent water pollution"]],
    ["section2_water_prevention_turf_eduction", ["Section 2: Water Prevention: Turf Eduction", "Displays schools that implement turf eduction"]],
    ["section2_water_prevention_surface_reduction", ["Section 2: Water Prevention: Impervious surface reduction", "Displays schools that implement impervious surface reduction"]],
    ["section2_water_prevention_green_roof", ["Section 2: Water Prevention: Green Roof", "Displays schools that have implemented a green roof"]],
    ["section2_water_prevention_retrofitted_sink_toilet_showers", ["Section 2: Water Prevention: Retrofitted sinks, toilets, showers", "Displays schools that have implemented retrofitted sinks/toilets/showers"]],
    ["section2_runoff_strategy", ["Section 2: Runoff Strategy", "Displays schools that have implemented strategies to reduce runoff"]],
    ["section2_water_conservation_comments", ["Section 2: Water Conservation Comments", "NA"]],
    ["section3_reduce_energy_strategy", ["Section 3: Reduce Energy Strategy", "Displays schools that have implemented strategies to reduce energy use"]],
    ["section3_energy_conservation_installed_efficient_lighting", ["Section 3: Energy Conservation: Installed efficient lighting", "Displays schools that have installed efficient lighting"]],
    ["section3_energy_conservation_use_daylighting", ["Section 3: Energy Conservation: Use Daylighting most of the day", "Displays schools that use daylight most of the day"]],
    ["section3_energy_conservation_delamped", ["Section 3: Energy Conservation: Delamped", "Displays schools that delamp"]],
    ["section3_energy_conservation_planted_tree_shading", ["Section 3: Energy Conservation: Planted trees to shade building", "Displays schools that plant trees to shade building"]],
    ["section3_energy_conservation_use_of_blinds", ["Section 3: Energy Conservation: Use of blinds in the classroom", "Displays schools that use blinds in the classroom"]],
    ["section3_renewable_energy", ["Section 3: Renewable Energy", "Displays schools that use renewable energy sources"]],
    ["section3_renewable_source_solar", ["Section 3: Renewable Source: Solar", "Displays schools that use solar energy"]],
    ["section3_renewable_source_wind", ["Section 3: Renewable Source: Wind", "Displays schools that use wind energy"]],
    ["section3_renewable_source_geothermal", ["Section 3: Renewable Source: Geothermal", "Displays schools that use geothermal energy"]],
    ["section3_energy_conservation_comments", ["Section 3: Energy Conservation Comments", "NA"]],
    ["section4_restore_habitat", ["Section 4: Restore Habitat", "Displays schools that have restored habitat on school ground"]],
    ["section4_habitat_restoration_created_bird_houses", ["Section 4: Habitat Restoration: Created/Installed bird houses", "Displays schools that have created/installed bird houses"]],
    ["section4_habitat_restoration_planted_native_trees", ["Section 4: Habitat Restoration: Planted Native Trees", "Displays schools that have planted native trees"]],
    ["section4_habitat_restoration_planted_native_shrubs", ["Section 4: Habitat Restoration: Planted Native Shrubs", "Displays schools that have planted native shrubs"]],
    ["section4_habitat_restoration_removal_invasive_species", ["Section 4: Habitat Restoration: Removal of invasive species", "Displays schools that remove invasive species"]],
    ["section4_habitat_restoration_created_native_habitat", ["Section 4: Habitat Restoration: Native habitat - meadows, wetlands or forests", "Displays schools that have created a native habitat"]],
    ["section4_habit_restoration_comments", ["Section 4: Habit Restoration Comments", "NA"]],
    ["section4_enviro_learning_structures", ["Section 4: Environmental Learning Structures", "Displays schools that have structures for environmental learning"]],
    ["section4_env_learn_struct_interpretive_signage", ["Section 4: Env. Learning Struct.: Interpretive signage", "Displays schools that have interpretive signage"]],
    ["section4_env_learn_struct_trails_pathways", ["Section 4: Env. Learning Struct.: Trails, pathways", "Displays schools that have trails/pathways"]],
    ["section4_env_learn_struct_boardwalk_bridges", ["Section 4: Env. Learning Struct.: Boardwalk, bridges", "Displays schools that have boardwalk/bridges"]],
    ["section4_env_learn_struct_tree_plant_id_tags", ["Section 4: Env. Learning Struct.: Tree/Plant ID Tags", "Displays schools that tag trees/plants"]],
    ["section4_env_learn_struct_outdoor_classroom", ["Section 4: Env. Learning Struct.: Outdoor Classroom", "Displays schools that have an outdoor classroom"]],
    ["section4_env_learn_struct_outdoor_environmental_art", ["Section 4: Env. Learning Struct.: Outdoor environmental art", "Displays schools that have outdoor environmental art"]],
    ["section4_env_learn_struct_greenhouse", ["Section 4: Env. Learning Struct.: Greenhouse", "Displays schools that have a greenhouse"]],
    ["section4_env_learn_struct_tower_garden", ["Section 4: Env. Learning Struct.: Tower garden", "Displays schools that have a tower garden"]],
    ["section4_env_learn_struct_weather_station", ["Section 4: Env. Learning Struct.: Weather Station", "Displays schools that have a weather station"]],
    ["section4_env_learn_struct_pond", ["Section 4: Env. Learning Struct.: Pond", "Displays schools that have a pond"]],
    ["section4_env_learn_struct_hydroponics", ["Section 4: Env. Learning Struct.: Hydroponics", "Displays schools that implement hydroponics"]],
    ["section4_env_learn_struct_aquaponics", ["Section 4: Env. Learning Struct.: Aquaponics", "Displays schools that implement aquaponics"]],
    ["section4_enviro_structure_comments", ["Section 4: Environmental Structure Comments", "NA"]],
    ["section5_no_idle_zone", ["Section 5: No Idle Zone", "Displays schools that have a no idle zone"]],
    ["section5_formal_carpooling", ["Section 5: Formal Carpooling Program", "Displays schools that have a formal carpooling program"]],
    ["section5_electric_hybrid_parking", ["Section 5: Parking for Electric, Hybrid Vehicle", "Displays schools that have parking for hybrid/energy efficient vehicles "]],
    ["section5_grow_donate_eat_garden", ["Section 5: Grow/Donate Eat Food in Garden", "Displays schools that grow, donate, or eat from school garden"]],
    ["section5_green_cleaning_products", ["Section 5: Green Cleaning Products", "Displays schools that utilize green cleaning products"]],
    ["section5_community_science_program", ["Section 5: Community Science Program", "Displays schools that participate in one or more community science programs"]],
    ["section6_enviro_awards", ["Section 6: Environmental Awards", "NA"]],
    ["section6_actions_not_mentioned", ["Section 6: Actions Not Mentioned", "NA"]],
    ["latitude", ["Latitude", "Latitude coordinate for school"]],
    ["longitude", ["Longitude", "Longitude coordinate for school"]]
]);

var mymap;
var markersLayer;

function loadMap() {
   mymap = L.map('mapid').setView([38.8162729,-76.7523043], 13);   
   L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
       attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
       maxZoom: 18,
       id: 'mapbox/streets-v11',
       accessToken: 'pk.eyJ1IjoiYXNhbmRpbjIxOCIsImEiOiJjazNwZm5kZDEwMm5qM3BwZTVwcmJvNGtpIn0.Omg_ZXfDgjgWA2-Lukxfow'
   }).addTo(mymap);
   markersLayer = new L.LayerGroup();
}

function updateDatabase() {
	console.log("Updating database with Google data.");
	
	fetch('/updateDatabase')
		.then(res => {
		      console.log("Database updated.");
		      return res;
		});
}

function populateLitterTypeDropDown() {
   console.log("Populating Litter Type drop-down list.");
   fetch('/getAllData')
    .then(res => res.json())   
   	.then(res => {   		
     var features = new Set(); // Prevents adding duplicate entries
	   for(var key in res[0]) {
		   if(!key.endsWith("_comments") && !key.endsWith("section1_time_stamp") && 
			   !key.endsWith("section1_school_name") && !key.endsWith("section1_email") &&
			   !key.endsWith("school_id") && !key.endsWith("enviro_lit_rating") &&				   
			   !key.endsWith("section6_enviro_awards") && !key.endsWith("section6_actions_not_mentioned") && 
			   !key.endsWith("latitude") && !key.endsWith("longitude")) {
			   features.add(key);
		   }
	   }
	   
     // Add the options to the drop-down and build the documentation page
     var myselect = document.getElementById("feature_filters_drop_down");
     for (let feature of features) {
        let opt = document.createElement('option');
        opt.appendChild(document.createTextNode(JSON_KEY_TO_OPTION_NAMES.get(feature)));
        // set value property of opt
        opt.value = feature; 
        // add option to the end of select box
        myselect.appendChild(opt); 
     }
      return features;
   })
   .then(res => {
      console.log(res);
      return res;
    });
}

function populateSchoolRatingsDropDown() {
	   console.log("Populating School Name drop-down list.");

	   //fetch('http://localhost/PGCPS_Enviro_Info.json')
//	   fetch('http://localhost/test.json')
//	   .then(res => res.json())   
//	   .then(res => {
//		   var schoolNames = new Set(); // Prevents adding duplicate entries
//		   for(var index = 0; index < res.length; index++) {
//			   schoolNames.add(res[index]['school_name']);
//		   }
//		   
//	     // Add the options to the drop-down and build the documentation page
//	     var myselect = document.getElementById("school_name_filters_drop_down");
//	     for (let name of schoolNames) {
//	        let opt = document.createElement('option');
//	        opt.appendChild(document.createTextNode(name));
//	        // set value property of opt
//	        opt.value = name; 
//	        // add option to the end of select box
//	        myselect.appendChild(opt); 
//	     }
//	      return schoolNames;
//	   })
//	   .then(res => {
//	      console.log(res);
//	      return res;
//	    }); 
	}

function populateSchoolNameDropDown() {
   console.log("Populating School Name drop-down list.");

   //fetch('http://localhost/PGCPS_Enviro_Info.json')
   fetch('/getAllData')
   .then(res => res.json())   
   .then(res => {
	   var schoolNames = new Set(); // Prevents adding duplicate entries
	   for(var index = 0; index < res.length; index++) {
		   schoolNames.add(res[index]['school_name']);
	   }
	   
     // Add the options to the drop-down and build the documentation page
     var myselect = document.getElementById("school_name_filters_drop_down");
     for (let name of schoolNames) {
        let opt = document.createElement('option');
        opt.appendChild(document.createTextNode(name));
        // set value property of opt
        opt.value = name; 
        // add option to the end of select box
        myselect.appendChild(opt); 
     }
      return schoolNames;
   })
   .then(res => {
      console.log(res);
      return res;
    }); 
}

function loadDataByFeature() {
   var myselect = document.getElementById("feature_filters_drop_down");
   var feature = myselect.options[myselect.selectedIndex].value;
   var index = feature.indexOf(": ");   
   
   if(index != -1) {
	   subFeature = feature.substring(index + 2);
	   feature = feature.substring(0, index);
   } 
   
   console.log("Filtering for Litter Type: " + feature);
   
   // NOTE: The first thing we do here is clear the markers from the layer.
   markersLayer.clearLayers();
   
   fetch('/getAllData')   
      .then(res => res.json())      
      .then(res => {
    	  for(var index = 0; index < res.length; index++) {
    		  var latitude = res[index].latitude;
    		  var longitude = res[index].longitude;    		  
    		  
    		  if(feature.toLowerCase().length > 0) {
		          if((subFeature.length == 0 && res[index][feature].toLowerCase() == "yes") || 
		        		  (subFeature.length != 0 && res[index][feature][subFeature].toLowerCase() == "yes")) {
			          // Create a marker
			          var marker = L.marker([latitude, longitude]);
			          // Add a popup to the marker
			          marker.bindPopup(
			                "<b>" + res[index]['school_name'] + "</b><br>"
			          ).openPopup();
			          // Add marker to the layer. Not displayed yet.
			          markersLayer.addLayer(marker);
			       }
    		  }
	     }
	     // Display all the markers.
	     markersLayer.addTo(mymap);
	     return res;
      })
      .then(res => {
    	  console.log(res);
    	  return res;
      });      
}

function loadDataBySchoolName() {
   var myselect = document.getElementById("school_name_filters_drop_down");
   var schoolName = myselect.options[myselect.selectedIndex].value;
   
   console.log("Filtering for School Name: " + schoolName);
   
   // NOTE: The first thing we do here is clear the markers from the layer.
   markersLayer.clearLayers();
   
   //fetch('/api')
   fetch('http://localhost/test.json')
      .then(res => res.json())      
      .then(res => {
    	  for(var index = 0; index < res.length; index++) {
    		  var latitude = res[index].latitude;
    		  var longitude = res[index].longitude;    		  
    		  
    		  if(schoolName.toLowerCase().length > 0) {
		          if(schoolName == "all" || res[index]['school_name'] == schoolName) {
			          // Create a marker
			          var marker = L.marker([latitude, longitude]);
			          // Add a popup to the marker
			          marker.bindPopup(
			                "<b>" + res[index]['school_name'] + "</b><br>"
			          ).openPopup();
			          // Add marker to the layer. Not displayed yet.
			          markersLayer.addLayer(marker);
			       }
    		  }
	     }
	     // Display all the markers.
	     markersLayer.addTo(mymap);
	     return res;
      })
      .then(res => {
    	  console.log(res);
    	  return res;
      });      
}

function loadDataBySchoolRatings() {
   var myselect = document.getElementById("school_ratings_filters_drop_down");
   var ratingSection = myselect.options[myselect.selectedIndex].value;
   
   console.log("Filtering for School Rating By: " + ratingSection);
   
   // NOTE: The first thing we do here is clear the markers from the layer.
   markersLayer.clearLayers();
   
   //fetch('/api')
   fetch('http://localhost/test.json')
      .then(res => res.json())      
      .then(res => {
    	  for(var index = 0; index < res.length; index++) {
    		  var latitude = res[index].latitude;
    		  var longitude = res[index].longitude;    		  
    		  
    		  if(schoolName.toLowerCase().length > 0) {
    			  circle = L.circle([latitude, longitude], {
                      color: 'red',
                      fillColor: '#f03',
                      fillOpacity: 0.5,
                      radius: data[index].number_bags * 50
                   });
                   
                   // Add a popup to the circle
                   circle.bindPopup(
                         "<b>" + data[index].organization + "</b><br>" +
                         "Total Bags: " + data[index].number_bags
                   ).openPopup();
                   
                   // Add marker to the layer. Not displayed yet.
                   markersLayer.addLayer(circle);
    			  
    			  
    			  
    			  
    			  
    			  
    			  
    			  
		          if(schoolName == "all" || res[index]['school_name'] == schoolName) {
			          // Create a marker
			          var marker = L.marker([latitude, longitude]);
			          // Add a popup to the marker
			          marker.bindPopup(
			                "<b>" + res[index]['school_name'] + "</b><br>"
			          ).openPopup();
			          // Add marker to the layer. Not displayed yet.
			          markersLayer.addLayer(marker);
			       }
    		  }
	     }
	     // Display all the markers.
	     markersLayer.addTo(mymap);
	     return res;
      })
      .then(res => {
    	  console.log(res);
    	  return res;
      });      
}

function loadDataByTotalLitter(totalLitterType) {
   console.log("Filtering for Total Bags Litter: " + totalLitterType);
   
   // NOTE: The first thing we do here is clear the markers from the layer.
   markersLayer.clearLayers();
   
   fetch('/api')
      .then(res => res.json())      
      .then(res => {
         var data = res.data;
         for(var index = 0; index < data.length; index++) {
            var circle;
            var latitude = data[index].latitude;
            var longitude = data[index].longitude;
            
            if(totalLitterType == 'number_bags' || totalLitterType == 'all') {
               if(data[index].number_bags > 0) {
                  circle = L.circle([longitude, latitude], {
                     color: 'red',
                     fillColor: '#f03',
                     fillOpacity: 0.5,
                     radius: data[index].number_bags * 50
                  });
                  
                  // Add a popup to the circle
                  circle.bindPopup(
                        "<b>" + data[index].organization + "</b><br>" +
                        "Total Bags: " + data[index].number_bags
                  ).openPopup();
                  
                  // Add marker to the layer. Not displayed yet.
                  markersLayer.addLayer(circle);
               }
            } 
            
            if(totalLitterType == 'total_tires' || totalLitterType == 'all') {
               if(data[index].total_tires > 0) {
                  circle = L.circle([longitude, latitude], {
                     color: 'blue',
                     fillColor: '#00f',
                     fillOpacity: 0.5,
                     radius: data[index].total_tires * 50
                  });
                  
                  // Add a popup to the circle
                  circle.bindPopup(
                        "<b>" + data[index].organization + "</b><br>" +
                        "Total Tires: " + data[index].total_tires
                  ).openPopup();
                  
                  // Add marker to the layer. Not displayed yet.
                  markersLayer.addLayer(circle);
               }
            }
         }
         // Display all the markers.
         markersLayer.addTo(mymap);
         return data;
      })
      .then(res => {
    	  console.log(res);
    	  return res;
      });
}

function populateLitterTypeDocumentation() {
   console.log("Populating Litter Type documentation.");

   fetch('/getAllData')
   .then(res => res.json())
   .then(res => {
      var litterTypes = new Set(); // Prevents adding duplicate entries
      for(let index = 0; index < res.length; index++) {                  
            litterTypes.add(data[index].type_litter.toLowerCase());
         }
      }
      
      var mydocumentation = document.getElementById("Type of Litter");
      for (let litterType of litterTypes) {

         let heading = document.createElement("h5");
         let text = document.createTextNode(litterType);
         heading.appendChild(text);
         mydocumentation.appendChild(heading);
         
         let para = document.createElement("p");
         para.className += "text-grey";
         text = document.createTextNode("Represents " + litterType + " litter");
         para.appendChild(text);
         mydocumentation.appendChild(para);
         
         let mybreak = document.createElement("br");
         mydocumentation.appendChild(mybreak);
      }
      return litterTypes;
   })
   .then(res => {
      console.log(res);
      return res;
    }); 
}

function loadDataForLitterPerimeter() {
   fetch('/api')
   .then(res => res.json())  
   .then(res => {
      var data = res.data;
      // Initialize all points to the center of Prince George's County
      var northPoint = {longitude: 38.8162729, latitude: -76.7523043};
      var southPoint = {longitude: 38.8162729, latitude: -76.7523043};
      var westPoint = {longitude: 38.8162729, latitude: -76.7523043};
      var eastPoint = {longitude: 38.8162729, latitude: -76.7523043};
      
      for(let index = 0; index < data.length; index++) {         
         var latitude = data[index].latitude;
         var longitude = data[index].longitude;
         
         // Find the highest point to the north
         if(longitude > northPoint.longitude) {
            northPoint.longitude = longitude;
            northPoint.latitude = latitude;
         }
         // Find the lowest point to the south
         if(longitude < southPoint.longitude) {
            southPoint.longitude = longitude;
            southPoint.latitude = latitude;
         }
         // Find the highest point to the right
         if(latitude > eastPoint.latitude) {
            eastPoint.longitude = longitude;
            eastPoint.latitude = latitude;
         }
         // Find the lowest point to the left
         if(latitude < westPoint.latitude) {
            westPoint.longitude = longitude;
            westPoint.latitude = latitude;
         }
      }
      var polygon = L.polygon([
         [northPoint.longitude, northPoint.latitude],
         [eastPoint.longitude, eastPoint.latitude],
         [southPoint.longitude, southPoint.latitude],         
         [westPoint.longitude, westPoint.latitude]
         ]);
     markersLayer.addLayer(polygon);
     // Display all the markers.
     markersLayer.addTo(mymap);
   }); 
}

function openHome() {
   var tabcontent = document.getElementById("about");   
   tabcontent.style.display = "none";
   tabcontent = document.getElementById("documentation");
   tabcontent.style.display = "none";
   
   tabcontent = document.getElementById("wrapper");
   tabcontent.style.display = "block";
   tabcontent = document.getElementById("map");
   tabcontent.style.display = "block";
}

function openAbout() {
   var tabcontent = document.getElementById("wrapper");
   tabcontent.style.display = "none";
   tabcontent = document.getElementById("map");
   tabcontent.style.display = "none";   
   tabcontent = document.getElementById("documentation");
   tabcontent.style.display = "none";
   
   tabcontent = document.getElementById("about");
   tabcontent.style.display = "block";
   
   loadAboutPage(); 
}

function openDocumentation() {
   var tabcontent = document.getElementById("wrapper");
   tabcontent.style.display = "none";
   tabcontent = document.getElementById("map");
   tabcontent.style.display = "none";
   tabcontent = document.getElementById("about");
   tabcontent.style.display = "none";
   
   tabcontent = document.getElementById("documentation");
   tabcontent.style.display = "block";
   
   loadDocumentationPage();
}

function loadAboutPage() {
   document.getElementById("about").innerHTML='<object type="text/html" data="about.html" width="100%"></object>';   
}

function loadDocumentationPage() {
   document.getElementById("documentation").innerHTML='<object type="text/html" data="documentation.html" width="100%" height="400px"></object>';
}