const m = new Map([['color', 'red'], ['owner', 'Flavio'], ['age', 2]])

const JSON_KEY_TO_OPTION_NAMES = new Map([
    ["section1_time_stamp", "Time Stamp"],
    ["section1_email", "Email"],
    ["section1_school_name", "School Name"],
    ["section1_green_school_certification", "Green School Certification"],
    ["section1_active_garden_vegetable_garden", "Active Gardens: Vegetable Garden"],
    ["section1_active_garden_native_garden", "Active Gardens: Native Garden"],
    ["section1_active_garden_butterfly_garden", "Active Gardens: Butterfly Garden"],
    ["section1_active_garden_rain_garden", "Active Gardens: Rain Garden"],
    ["section1_active_garden_zen_garden", "Active Gardens: Zen Garden"],
    ["section1_active_garden_herb_garden", "Active Gardens: Herb Garden"],
    ["section1_active_garden_no_gardens_on_campus", "Active Gardens: No gardens on campus"],
    ["section1_active_garden_dont_know", "Active Gardens: I don't know"],
    ["section1_recycle_at_breakfast", "Recycle: At Breakfast"],
    ["section1_recycle_at_lunch", "Recycle: At Lunch"],
    ["section1_recycle_in_the_classroom", "Recycle: In the classroom"],
    ["section1_recycle_not_at_all", "Recycle: Not at all"],
    ["section1_recycle_dont_know", "Recycle: I don't know"],
    ["section1_recycling_program_ink_cartridge_recycling", "Recycling Program: Ink Cartridge Recycling"],
    ["section1_recycling_program_phones_batteries_other", "Recycling Program: Cellphones, Batteries, Others"],
    ["section1_recycling_program_terra_cycling", "Recycling Program: Terra Cycling"],
    ["section1_recycling_program_color_cycle_crayola", "Recycling Program: Color Cycle (Crayola)"],
    ["section1_recycling_program_pepsi_recycle_rally", "Recycling Program: Pepsi Recycle Rally"],
    ["section1_recycling_program_none_programs_activities", "Recycling Program: No Programs/Activities"],
    ["section1_recycling_program_dont_know", "Recycling Program: I don't know"],
    ["section1_composting_we_did_not_compost_at_our_school", "Composting: No compost at school"],
    ["section1_composting_vermiculture", "Composting: Vermiculture"],
    ["section1_composting_drum_compost", "Composting: Drum Compost"],
    ["section1_composting_open_frame", "Composting: Open Frame"],
    ["section1_composting_send_compost_local_facility_farm", "Composting: Send to Local Facility/Farm"],
    ["section1_composting_dont_know", "Composting: I don't know"],
    ["section1_cleanup_volunteer_effort", "Cleanup Volunteer Effort"],
    ["section1_waste_reduction_comments", "Waste Reduction Comments"],
    ["section2_reducing_water_strategy", "Reducing Water Strategy"],
    ["section2_stream", "Stream"],
    ["section2_water_prevention_stream_bank_planting", "Water Prevention: Stream Bank Planting"],
    ["section2_water_prevention_erosion_control_project", "Water Prevention: Erosion Control Project other than Stream Bank Planting"],
    ["section2_water_prevention_painted_storm_drains", "Water Prevention: Painted Storm Drains"],
    ["section2_water_prevention_raingarden_bioretention_area_planted", "Water Prevention: Raingarden/bioretention area planted"],
    ["section2_water_prevention_no_mow_zone", "Water Prevention: No-mow zone installed "],
    ["section2_water_prevention_rain_barrels", "Water Prevention: Rain barrels installed"],
    ["section2_water_prevention_stream_cleaning", "Water Prevention: Stream Cleaning"],
    ["section2_water_prevention_collected_litter", "Water Prevention: Collected litter to prevent water pollution"],
    ["section2_water_prevention_turf_eduction", "Water Prevention: Turf Eduction"],
    ["section2_water_prevention_surface_reduction", "Water Prevention: Impervious surface reduction"],
    ["section2_water_prevention_green_roof", "Water Prevention: Green Roof"],
    ["section2_water_prevention_retrofitted_sink_toilet_showers", "Water Prevention: Retrofitted sinks, toilets, showers"],
    ["section2_runoff_strategy", "Runoff Strategy"],
    ["section2_water_conservation_comments", "Water Conservation Comments"],
    ["section3_reduce_energy_strategy", "Reduce Energy Strategy"],
    ["section3_energy_conservation_installed_efficient_lighting", "Energy Conservation: Installed efficient lighting"],
    ["section3_energy_conservation_use_daylighting", "Energy Conservation: Use Daylighting most of the day"],
    ["section3_energy_conservation_delamped", "Energy Conservation: Delamped"],
    ["section3_energy_conservation_planted_tree_shading", "Energy Conservation: Planted trees to shade building"],
    ["section3_energy_conservation_use_of_blinds", "Energy Conservation: Use of blinds in the classroom"],
    ["section3_renewable_energy", "Renewable Energy"],
    ["section3_renewable_source_solar", "Renewable Source: Solar"],
    ["section3_renewable_source_wind", "Renewable Source: Wind"],
    ["section3_renewable_source_geothermal", "Renewable Source: Geothermal"],
    ["section3_energy_conservation_comments", "Energy Conservation Comments"],
    ["section4_restore_habitat", "Restore Habitat"],
    ["section4_habitat_restoration_created_bird_houses", "Habitat Restoration: Created/Installed bird houses"],
    ["section4_habitat_restoration_planted_native_trees", "Habitat Restoration: Planted Native Trees"],
    ["section4_habitat_restoration_planted_native_shrubs", "Habitat Restoration: Planted Native Shrubs"],
    ["section4_habitat_restoration_removal_invasive_species", "Habitat Restoration: Removal of invasive species"],
    ["section4_habitat_restoration_created_native_habitat", "Habitat Restoration: Native habitat - meadows, wetlands or forests"],
    ["section4_habit_restoration_comments", "Habit Restoration Comments"],
    ["section4_enviro_learning_structures", "Environmental Learning Structures"],
    ["section4_env_learn_struct_interpretive_signage", "Env. Learning Struct.: Interpretive signage"],
    ["section4_env_learn_struct_trails_pathways", "Env. Learning Struct.: Trails, pathways"],
    ["section4_env_learn_struct_boardwalk_bridges", "Env. Learning Struct.: Boardwalk, bridges"],
    ["section4_env_learn_struct_tree_plant_id_tags", "Env. Learning Struct.: Tree/Plant ID Tags"],
    ["section4_env_learn_struct_outdoor_classroom", "Env. Learning Struct.: Outdoor Classroom"],
    ["section4_env_learn_struct_outdoor_environmental_art", "Env. Learning Struct.: Outdoor environmental art"],
    ["section4_env_learn_struct_greenhouse", "Env. Learning Struct.: Greenhouse"],
    ["section4_env_learn_struct_tower_garden", "Env. Learning Struct.: Tower garden"],
    ["section4_env_learn_struct_weather_station", "Env. Learning Struct.: Weather Station"],
    ["section4_env_learn_struct_pond", "Env. Learning Struct.: Pond"],
    ["section4_env_learn_struct_hydroponics", "Env. Learning Struct.: Hydroponics "],
    ["section4_env_learn_struct_aquaponics", "Env. Learning Struct.: Aquaponics"],
    ["section4_enviro_structure_comments", "Environmental Structure Comments"],
    ["section5_no_idle_zone", "No Idle Zone"],
    ["section5_formal_carpooling", "Formal Carpooling Program"],
    ["section5_electric_hybrid_parking", "Parking for Electric, Hybrid Vehicle"],
    ["section5_grow_donate_eat_garden", "Grow/Donate Eat Food in Garden"],
    ["section5_green_cleaning_products", "Green Cleaning Products"],
    ["section5_community_science_program", "Community Science Program"],
    ["section6_enviro_awards", "Environmental Awards"],
    ["section6_actions_not_mentioned", "Actions Not Mentioned"],
    ["latitude", "Latitude"],
    ["longitude", "Longitude"]
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
     var myselect = document.getElementById("type_filters_drop_down");
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
   		
   //fetch('http://localhost/PGCPS_Enviro_Info.json')
   //fetch('http://localhost/test.json')
//   fetch('https://docs.google.com/spreadsheets/d/1w1X00YL2uV_inK-l4VVbGXOXQpW1XoXlqkHFwDcJ-kc/edit#gid=487453530')
//   .then(res => res.json())   
//   .then(res => {
//     var features = new Set(); // Prevents adding duplicate entries
//	   for(var key in res[0]) {
//		   if(!key.endsWith("_comments") && !key.endsWith("time_stamp") && 
//				   !key.endsWith("school_name") && !key.endsWith("username") &&
//				   !key.endsWith("school_id") && !key.endsWith("enviro_lit_rating") &&				   
//				   !key.endsWith("enviro_awards") && !key.endsWith("latitude") && 
//				   !key.endsWith("longitude")) {
//			   if (typeof(res[0][key]) === 'object') {
//				   for(var innerKey in res[0][key]) {
//					   features.add(key + ": " + innerKey);
//				   }
//			   } else {
//				   features.add(key);
//			   }
//		   }
//	   }
//	   
//     // Add the options to the drop-down and build the documentation page
//     var myselect = document.getElementById("type_filters_drop_down");
//     for (let feature of features) {
//        let opt = document.createElement('option');
//        opt.appendChild(document.createTextNode(feature));
//        // set value property of opt
//        opt.value = feature; 
//        // add option to the end of select box
//        myselect.appendChild(opt); 
//     }
//      return features;
//   })
//   .then(res => {
//      console.log(res);
//      return res;
//    }); 
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
   fetch('/getData')
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

function loadDataByLitterType() {
   var myselect = document.getElementById("type_filters_drop_down");
   var feature = myselect.options[myselect.selectedIndex].value;
   var subFeature = "";
   var index = feature.indexOf(": ");   
   
   if(index != -1) {
	   subFeature = feature.substring(index + 2);
	   feature = feature.substring(0, index);
   } 
   
   console.log("Filtering for Litter Type: " + feature);
   
   // NOTE: The first thing we do here is clear the markers from the layer.
   markersLayer.clearLayers();
   
   fetch('/getData')   
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

   fetch('/api')
   .then(res => res.json())
   .then(res => {
      var data = res.data;
      var litterTypes = new Set(); // Prevents adding duplicate entries
      for(let index = 0; index < data.length; index++) {
         // Add the entry in lower case format. This way we won't get
         // two entries such as: other and Other.
         // Only add the entry if one of the total is greater than zero.
         if(data[index].number_bags > 0 || data[index].total_tires > 0) {         
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