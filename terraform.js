const terraformTooltips = {
    "Microbial Mounts": "Generates biomites, zymers, fibers, sludge, algae (1x efficiency)",
    "Bio-Luminescent Zone": "Generates sludge, algae (2x efficiency)",
    "Solar Sponges": "Generates zymers (4x efficiency)",
    "Floral Bridges": "Generates Fibers (4x efficiency)",
    "Spore Towers": "Generates biomites, sludge (2x efficiency)",
    "Thermal Vents": "Speeds up terraform cycles, with diminishing returns",
    "Resonance Pools": "Generates algae (4x effiency)",
    "Cave Excavation Station": "Enables cave excavation"
};



// Generic function to help generate terraform projects/options
function createTerraformButton(terraformProject, buttonId, title, tooltipContent) {
    let terraformDiv = document.getElementById("Terraform");
    // Check if button already exists
    if (document.getElementById(buttonId)) return;
    // Create tooltip container
    let tooltipContainer = document.createElement("div");
    tooltipContainer.className = "tooltip";
    terraformDiv.appendChild(tooltipContainer);
    // Create terraform button
    let terraformButton = document.createElement("button");
    terraformButton.className = "terraformButton";
    terraformButton.id = buttonId;
    terraformButton.innerText = title;
    tooltipContainer.appendChild(terraformButton);
    // Create tooltip text
    let tooltipText = document.createElement("span");
    tooltipText.className = "tooltiptext";
    tooltipText.innerHTML = tooltipContent;
    tooltipContainer.appendChild(tooltipText);
    // Event listeners for tooltip
    terraformButton.addEventListener('mousemove', function(e) {
        let tooltip = tooltipContainer.querySelector('.tooltiptext');
        tooltip.style.left = "120px";
        tooltip.style.top = "60px";
    });

    terraformButton.addEventListener('mouseenter', function() {
        let tooltip = tooltipContainer.querySelector('.tooltiptext');
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';
    });

    terraformButton.addEventListener('mouseleave', function() {
        let tooltip = tooltipContainer.querySelector('.tooltiptext');
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = '0';
    });

    // Progress bar inside button
    let progressBar = document.createElement("div");
    progressBar.className = "progressBar";
    terraformButton.appendChild(progressBar);
    
    // On click event for terraforming
    terraformButton.onclick = function() {
        if (terraformProject.isActive || !terraformProject.hasRequiredTiles()) {
            // If the player does not have enough resources, turn the button red briefly
            terraformButton.style.backgroundColor = "red";
            setTimeout(function() {
                terraformButton.style.backgroundColor = "";
            }, 300);
            return;
        }
        terraformButton.style.backgroundColor = "#999";
        terraformProject.progressBar = progressBar;
        terraformProject.start();
    }
}


// Function to help populate terraform work/assing widgets
function createWorkerAssignmentWidget(id, name, assignButtonId, unassignButtonId) {
    const workerAssignmentWidget = document.getElementById("worker-assignment-widget");

    // Create tooltip container
    let tooltipContainer = document.createElement("div");
    tooltipContainer.className = "tooltip";
    
    // Create worker assignment row inside the tooltip container
    const workerAssignmentRow = document.createElement("div");
    workerAssignmentRow.className = "worker-assignment-row";
    tooltipContainer.appendChild(workerAssignmentRow);

    const projectName = document.createTextNode(`${name}: `);
    workerAssignmentRow.appendChild(projectName);

    const workerCount = document.createElement("span");
    workerCount.id = id;
    workerCount.textContent = "0";
    workerAssignmentRow.appendChild(workerCount);

    const unassignButton = document.createElement("button");
    unassignButton.id = unassignButtonId; // Unique ID for the unassign button
    unassignButton.textContent = "-";
    workerAssignmentRow.appendChild(unassignButton);

    const assignButton = document.createElement("button");
    assignButton.id = assignButtonId; // Unique ID for the assign button
    assignButton.textContent = "+";
    workerAssignmentRow.appendChild(assignButton);

    // Create tooltip text
    let tooltipText = document.createElement("span");
    tooltipText.className = "tooltiptext";
    tooltipText.innerHTML = terraformTooltips[name] || "No tooltip available";
    tooltipContainer.appendChild(tooltipText);

    // Event listeners for tooltip
    tooltipContainer.addEventListener('mousemove', function(e) {
        let tooltip = tooltipContainer.querySelector('.tooltiptext');
        tooltip.style.left = "130px";  // Fixed left position
        tooltip.style.top = "2px";    // Fixed top position
    });

    tooltipContainer.addEventListener('mouseenter', function() {
        let tooltip = tooltipContainer.querySelector('.tooltiptext');
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';
    });

    tooltipContainer.addEventListener('mouseleave', function() {
        let tooltip = tooltipContainer.querySelector('.tooltiptext');
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = '0';
    });

    workerAssignmentWidget.appendChild(tooltipContainer);
}


// Create the microbial mounts project
let microbialMounts = new TerraformProject(
    "Microbial Mounts",       // name
    5000,                     // totalTime (5 seconds)
    {land: 5},                // tileCosts (5 land tiles)
    onMicrobialMountsCompletion // onCompletion function
);

// Create the Bio-Luminescent Zone project
let bioLuminescentZone = new TerraformProject(
    "Bio-Luminescent Zone",      // name
    8000,                        // totalTime (8 seconds)
    {water: 5},                  // tileCosts (5 water tiles)
    onBioLuminescentZoneCompletion // onCompletion function
);

let solarSponges = new TerraformProject(
    "Solar Sponges",            // name
    10000,                      // totalTime (10 seconds)
    {desert: 5, water: 5},      // tileCosts (5 desert tiles, 5 water tiles)
    onSolarSpongesCompletion    // onCompletion function
);

let floralBridges = new TerraformProject(
    "Floral Bridges",           // name
    7000,                       // totalTime (7 seconds)
    {land: 26},                  // tileCosts (6 land tiles)
    onFloralBridgesCompletion   // onCompletion function
);

let sporeTowers = new TerraformProject(
    "Spore Towers",             // name
    12000,                      // totalTime (12 seconds)
    {forest: 3},                // tileCosts (3 forest tiles)
    onSporeTowersCompletion     // onCompletion function
);

let thermalVents = new TerraformProject(
    "Thermal Vents",            // name
    8000,                       // totalTime (8 seconds)
    {icy_land: 15, desert: 15}, // tileCosts (15 icy_land tile, 15 desert tile)
    onThermalVentsCompletion    // onCompletion function
);

let resonancePools = new TerraformProject(
    "Resonance Pools",          // name
    9000,                       // totalTime (9 seconds)
    {water: 25},                // tileCosts (1 water tile)
    onResonancePoolsCompletion  // onCompletion function
);

let caveExcavationStation = new TerraformProject(
    "Cave Excavation Station",  // name
    4000,                      // totalTime (10 seconds)
    {icy_land: 1},              // tileCosts (1 icy_land tile)
    onCaveExcavationCompletion  // onCompletion function
);





// This function is used by every terraform completion to setup the widget and worker assignment pieces. It is also used by save/load functionalities.
// The onAssignCallback is currently only by Thermal Vents/Cave Excavation Station
function setupWorkerAssignment(projectName, workerVariable, resourceRate, resourcesAffected, assignButtonId, unassignButtonId, workerCountId, onAssignCallback = null, onUnassignCallback = null, maxActiveWorkers = null) {
    console.log("A worker assignment function is called for project:" + projectName + " and assignButtonId:" + assignButtonId);
    console.log("Max Active Workers:", maxActiveWorkers);
    console.log("Current Active Workers:", window[workerVariable]);
    
    // Only create the widget if it doesn't exist yet
    if (!document.getElementById(workerCountId)) {
        createWorkerAssignmentWidget(workerCountId, projectName, assignButtonId, unassignButtonId);
        const workerAssignmentWidget = document.getElementById("worker-assignment-widget");
        workerAssignmentWidget.style.display = "block";
    }
    
    const assignButton = document.getElementById(assignButtonId);
    const unassignButton = document.getElementById(unassignButtonId);

    const onAssignClick = function() {
        if (cellworkers > 0 && (maxActiveWorkers === null || window[workerVariable] < maxActiveWorkers)) {
            window[workerVariable]++;
            updateTerraformResourceRates(resourceRate, resourcesAffected);
            const workerElem = document.getElementById(workerCountId);
            workerElem.textContent = window[workerVariable];
            populateInfoWidget();
            if (onAssignCallback) {
                onAssignCallback();
            }
        }
    };

    const onUnassignClick = function() {
        if (window[workerVariable] > 0) {
            window[workerVariable]--;
            updateTerraformResourceRates(-resourceRate, resourcesAffected);
            const workerElem = document.getElementById(workerCountId);
            workerElem.textContent = window[workerVariable];
            populateInfoWidget();
            if (onUnassignCallback) {
                onUnassignCallback();
            }
        }
    };

    // Store the previous listeners in the element itself to keep track of them.
    if (assignButton.prevListener) {
        assignButton.removeEventListener("click", assignButton.prevListener);
        console.log("removed an old listener from:"+assignButton);
    }
    if (unassignButton.prevListener) {
        unassignButton.removeEventListener("click", unassignButton.prevListener);
        console.log("removed an old listener from:"+unassignButton);
    }

    assignButton.addEventListener("click", onAssignClick);
    console.log("Assign click listener attached to:", assignButtonId);
    unassignButton.addEventListener("click", onUnassignClick);

    // Update the stored previous listeners.
    assignButton.prevListener = onAssignClick;
    console.log("Assign button disabled status:", assignButton.disabled);
    unassignButton.prevListener = onUnassignClick;
}







// Define the onCompletion function for the microbial mounts project
function onMicrobialMountsCompletion() {
    console.log("Microbial mounts project completed!");
    // Increment the count of MicrobialMountsCompleted
    MicrobialMountsCompleted += 1;
    document.getElementById("terraformResourcesDisplay").style.display = "block"; // unhide the terraform resources data
    // Hide the microbial mounts button and show the worker assignment widget
    const microbialMountsButton = document.getElementById("microbialMountsButton");
    if (microbialMountsButton) microbialMountsButton.style.display = "none";
    terraformWidgetRepopulation(); // Handles the widget population - used for any terraform project
}


// Define the onCompletion function for the Bio-Luminescent Zone project
function onBioLuminescentZoneCompletion() {
    console.log("Bio-Luminescent Zone project completed!");
    BioLuminescentZonesCompleted += 1;
    document.getElementById("terraformResourcesDisplay").style.display = "block";
    const bioLuminescentZoneButton = document.getElementById("bioLuminescentZoneButton");
    if (bioLuminescentZoneButton) bioLuminescentZoneButton.style.display = "none";
    terraformWidgetRepopulation(); // Handles the widget population - used for any terraform project
}


function onSolarSpongesCompletion() {
    console.log("Solar Sponges project completed!");
    SolarSpongesCompleted += 1;
    document.getElementById("terraformResourcesDisplay").style.display = "block";
    const solarSpongesButton = document.getElementById("solarSpongeButton");
    if (solarSpongesButton) solarSpongesButton.style.display = "none";  
    terraformWidgetRepopulation(); // Handles the widget population - used for any terraform project
}


function onFloralBridgesCompletion() {
    console.log("Floral Bridges project completed!");
    FloralBridgesCompleted += 1;
    document.getElementById("terraformResourcesDisplay").style.display = "block";
    const floralBridgesButton = document.getElementById("floralBridgesButton");
    if (floralBridgesButton) floralBridgesButton.style.display = "none";
    terraformWidgetRepopulation(); // Handles the widget population - used for any terraform project;
}

function onSporeTowersCompletion() {
    console.log("Spore Towers project completed!");
    SporeTowersCompleted += 1;
    document.getElementById("terraformResourcesDisplay").style.display = "block";
    const sporeTowersButton = document.getElementById("sporeTowersButton");
    if (sporeTowersButton) sporeTowersButton.style.display = "none";
    terraformWidgetRepopulation(); // Handles the widget population - used for any terraform project
}


function onThermalVentsCompletion() {
    console.log("Thermal Vents project completed!");
    ThermalVentsCompleted += 1;
    document.getElementById("terraformResourcesDisplay").style.display = "block";
    const thermalVentsButton = document.getElementById("thermalVentsButton");
    if (thermalVentsButton) thermalVentsButton.style.display = "none";
    terraformWidgetRepopulation(); // Handles the widget population - used for any terraform project
}


function onResonancePoolsCompletion() {
    console.log("Resonance Pools project completed!");
    ResonancePoolsCompleted += 1;
    document.getElementById("terraformResourcesDisplay").style.display = "block";
    const resonancePoolsButton = document.getElementById("resonancePoolsButton");
    if (resonancePoolsButton) resonancePoolsButton.style.display = "none";
    terraformWidgetRepopulation(); // Handles the widget population - used for any terraform project
}


function onCaveExcavationCompletion() {
    console.log("Cave Excavation Station project completed!");
    maxActiveDiggers += 1; // enable 1 active max digger
    CaveExcavationCompleted += 1; 
    researchQueue.push('AdvancedTunnelingI');
    researchQueue.push('Flocking');
    populateResearchTab(); // Unlocks above new research
    document.getElementById("terraformResourcesDisplay").style.display = "block";
    const caveExcavationStationButton = document.getElementById("caveExcavationStationButton");
    if (caveExcavationStationButton) caveExcavationStationButton.style.display = "none";
    terraformWidgetRepopulation(); // Handles the widget population - used for any terraform project
    // Here you could also add logic to enable digger assignments if needed.
}



// Function to handle re-population of terraform widget
function terraformWidgetRepopulation(){
  if (MicrobialMountsCompleted > 0) {
      console.log("Microbial mounts (greater than 0), going to setup the widget!");
      setupWorkerAssignment("Microbial Mounts", "microbialMountsWorkers", 1, ["biomites", "zymers", "fibers", "sludge", "algae"], 
                            "assign-worker-microbial-mounts", "unassign-worker-microbial-mounts", "microbial-mounts-workers", null, null, 100);
  }
  if (BioLuminescentZonesCompleted > 0) {
    console.log("Bio luminescent are completed (greater than 0), going to setup the widget!");
      setupWorkerAssignment("Bio-Luminescent Zone", "bioLuminescentZonesWorkers", 2, ["sludge", "algae"],
                            "assign-worker-bio-luminescent-zones", "unassign-worker-bio-luminescent-zones", "bio-luminescent-zones-workers", null, null, 100);
  }
  if (SolarSpongesCompleted > 0) {
      console.log("Solar sponges are completed (greater than 0), going to setup the widget!");
      setupWorkerAssignment("Solar Sponges", "solarSpongesWorkers", 4, ["zymers"],
                            "assign-worker-solar-sponges", "unassign-worker-solar-sponges", "solar-sponges-workers", null, null, 100);
  }
  if (FloralBridgesCompleted > 0) {
      setupWorkerAssignment("Floral Bridges", "floralBridgesWorkers", 4, ["fibers"], 
                            "assign-worker-floral-bridges", "unassign-worker-floral-bridges", "floral-bridges-workers", null, null, 100);
  }
  if (SporeTowersCompleted > 0) {
      setupWorkerAssignment("Spore Towers", "sporeTowersWorkers", 2, ["biomites", "sludge"],
                            "assign-worker-spore-towers", "unassign-worker-spore-towers", "spore-towers-workers", null, null, 100);
  }
  if (ThermalVentsCompleted > 0) {
    setupWorkerAssignment("Thermal Vents", "thermalVentsWorkers", 1, [], 
                        "assign-worker-thermal-vents", "unassign-worker-thermal-vents", "thermal-vents-workers", function() {
      if (thermalVentsWorkers <= 7) {
          CYCLE_RATE -= 500;
          startOrRestartTerraformInterval();
      } else {
          const reductionFactor = Math.pow(0.9, thermalVentsWorkers - 7);
          CYCLE_RATE -= 500 * reductionFactor;
          startOrRestartTerraformInterval();
      }
      CYCLE_RATE = Math.max(CYCLE_RATE, 2500);
    }, null, 25);
  }
  if (ResonancePoolsCompleted > 0) {
        setupWorkerAssignment("Resonance Pools", "resonancePoolsWorkers", 4, ["algae"], 
                              "assign-worker-resonance-pools", "unassign-worker-resonance-pools", "resonance-pools-workers", null, null, 100);
  }
  if (CaveExcavationCompleted > 0) {
    setupWorkerAssignment("Cave Excavation Station", "caveExcavationStationWorkers", 1, [],
                          "assign-worker-cave-excavation-station", 
                          "unassign-worker-cave-excavation-station", 
                          "cave-excavation-station-workers", 
                          function() {  // + function, called when worker is assigned
                            console.log("cave plus+ clicked");
                            terraformAssignedDiggers++;
                          },
                          function() {  // - function, called when worker is unassigned
                            terraformAssignedDiggers--;
                          },
                          maxActiveDiggers
    );
  }
  updateWorkerCountsInHTML(); // sets assigned workers to correct imported values
}


// Function to help unlock Microbial Mounts terraforming project
function createMicrobialMountsButton() {
    let tooltiptext = `
        <strong>Title: Microbial Mounts</strong>
        <br>
        <b>Description:</b> Harnessing the planet's native microbial communities, you've engineered the Microbial Mounts. These structures, pulsating with life, serve as incubation chambers where carefully selected microbes thrive. Once matured, they're released into the surrounding terrain, reshaping it molecule by molecule. As they work tirelessly, breaking down the land, they release rare materials, previously locked away in the planet's crust. With these mounts you're unlocking the planet's hidden potential, making it more suited to your needs and desires.
        <br>
        <b>Effect:</b> Generates: Biomites, Zymers, Fibers.
        <br>
        <b>Requirement:</b> 5 Land tiles.
    `;
    createTerraformButton(
        microbialMounts,
        "microbialMountsButton",
        "Microbial Mounts",
        tooltiptext
    );
}



// Function to help unlock Bio-Luminescent Zone terraforming project
function createBioLuminescentZoneButton() {
    let tooltiptext = `
        <strong>Title: Bio-Luminescent Zone</strong>
        <br>
        <b>Description:</b> In the depths of the ocean lies a secret; a hidden world alive with color, a dance of light. The Bio-Luminescent Zone is more than a spectacle; it's a manifestation of your longing for connection. By harnessing its bioluminescent capabilities, you transform the landscape into a living, glowing tapestry, an inviting beacon in the hope of attracting companionship. The glowing zone becomes a complex, thriving ecosystem of one, a symbol of the harmony between technology and nature, but also a poignant reminder of the cell's solitude. This zone is not just a scientific marvel; it's a testament to your ability to create beauty in isolation, a beacon of resilience in the face of unending loneliness.
        <br>
        <b>Effect:</b> Generates: Sludge, Algae.
        <br>
        <b>Requirement:</b> 5 Water tiles.
    `;
    createTerraformButton(
        bioLuminescentZone,
        "bioLuminescentZoneButton",
        "Bio-Luminescent Zone",
        tooltiptext
    );
}


// Function to help unlock Solar Sponge terraforming project
function createSolarSpongeButton() {
    let tooltiptext = `
        <strong>Title: Solar Sponge</strong>
        <br>
        <b>Description:</b> In the arid vastness of the desert, where water is but a distant memory, the Solar Sponge rises. A marvel of isolation and innovation, it marries the harshness of the desert with the life-giving essence of water. With its intricate network of fibers, it soaks up the relentless rays of the sun, while drawing from a rare water source, efficiently turning raw elements into zymers. The Solar Sponge's existence in such a juxtaposition of environments reflects your own struggle: thriving in isolation, making the most of scarce resources, and yet perpetually yearning for something more. It's a beacon of hope and despair, a lonely entity that creates and sustains, yet remains forever apart.
        <br>
        <b>Effect:</b> Generates: Zymers.
        <br>
        <b>Requirement:</b> 5 Desert tiles, 5 water tiles.
    `;
    createTerraformButton(
        solarSponges,
        "solarSpongeButton",
        "Solar Sponge",
        tooltiptext
    );
}

// Function to help unlock Floral Bridges terraforming project
function createFloralBridgesButton() {
    let tooltiptext = `
        <strong>Title: Floral Bridges</strong>
        <br>
        <b>Description:</b> Amid the desolation, a glimmer of beauty emerges. The Floral Bridges are a creation born of longing, an attempt to bridge the gap between your existence and the world outside. The graceful structures connect disparate parts of the landscape, turning decoration into something functional, yet their true purpose lies deeper. They are a cry for connection, a desperate hope that something beautiful can draw others near. But as the bridges reach out, they touch nothing but emptiness. The fibers they produce are a material gain, but the true desire for companionship remains unfulfilled. The Floral Bridges are a haunting reminder that even the most beautiful creations can't fill the void of loneliness.
        <br>
        <b>Effect:</b> Generates: Fibers.
        <br>
        <b>Requirement:</b> Discovery of flowers, 26 land tiles.
    `;
    createTerraformButton(
        floralBridges,
        "floralBridgesButton",
        "Floral Bridges",
        tooltiptext
    );
}


// Function to help unlock Spore Towers terraforming project
function createSporeTowersButton() {
    let tooltiptext = `
        <strong>Title: Spore Towers</strong>
        <br>
        <b>Description:</b> Nestled within the dense foliage of the forest, where fungi form a hidden, mystical world, the Spore Towers stand tall. Inspired by the very essence of the fungal kingdom, these towers are a manifestation of adaptation and symbiosis. With their wide-reaching spores, they unlock the forest's potential, converting its complex biology into Biomites and Sludge. The Spore Towers symbolize your deep connection with the world around you, even in your isolation. They are a testament to your ability to draw inspiration from the smallest of things, to see beauty where others see insignificance, and to create life where there was none.
        <br>
        <b>Effect:</b> Generates: Biomites and Sludge.
        <br>
        <b>Requirement:</b> 29 Forest tiles, Discovery of Fungus.
    `;
    createTerraformButton(
        sporeTowers,
        "sporeTowersButton",
        "Spore Towers",
        tooltiptext
    );
}


// Function to help unlock Thermal Vents terraforming project
function createThermalVentsButton() {
    let tooltiptext = `
        <strong>Title: Thermal Vents</strong>
        <br>
        <b>Description:</b> Where heat meets the icy chill, a paradox is born: the Thermal Vents. These geological wonders harness the contrasting forces of hot and cold to optimize the efficiency of all terraforming structures. By venting excess heat and maintaining an ideal balance, they enhance the harmony of your world, a silent conductor orchestrating a symphony of creation. The Thermal Vents are a reminder of your ability to find equilibrium in disparity, to make sense of contradictions, and to use contrasts to fuel growth. They do not create; they enhance, reflecting your constant pursuit of perfection and efficiency.
        <br>
        <b>Effect:</b> Increases the overall efficiency of all terraforming buildings.
        <br>
        <b>Requirement:</b> Discovery of volcano, 15 desert tiles, 15 icy land tiles.
    `;
    createTerraformButton(
        thermalVents,
        "thermalVentsButton",
        "Thermal Vents",
        tooltiptext
    );
}

// Function to help unlock Resonance Pools terraforming project
function createResonancePoolsButton() {
    let tooltiptext = `
        <strong>Title: Resonance Pools</strong>
        <br>
        <b>Description:</b> In the tranquil waters, where pebbles lie scattered, a thought blossoms, a vision takes shape: the Resonance Pools. These harmonious bodies of water echo with the gentle resonance of life, a symphony of creation that nurtures algae. Each ripple is a reflection of your inner world, each wave a reminder of your solitude and strength. The Resonance Pools are more than a source of sustenance; they are a mirror to your soul, a peaceful oasis in a world of chaos. They are a testament to your ability to find inspiration in the mundane and to see beauty in simplicity.
        <br>
        <b>Effect:</b> Generates: Algae.
        <br>
        <b>Requirement:</b> 25 Water tiles, Discovery of Pebble.
    `;
    createTerraformButton(
        resonancePools,
        "resonancePoolsButton",
        "Resonance Pools",
        tooltiptext
    );
}


// Function to help unlock Cave Excavation Station terraforming project
function createCaveExcavationStationButton() {
  let tooltiptext = `
    <strong>Title: Cave Excavation Station</strong>
    <br>
    <b>Description:</b> Deep within the icy caves lies a world of untapped potential, a sanctuary for mysteries yet to be uncovered. By establishing the Cave Excavation Station, you take a step into this abyss, lighting it up with the spirit of exploration and the promise of resources. From the solitude of these caves, the diggers carve out paths that might just lead you to understand the depth of your own existence. These subterranean endeavors serve not just as a means to acquire resources, but as an experience that shapes your world from below, adding layers to your journey.
    <br>
    <b>Effect:</b> Enables digger assignments, initiating the cave excavation process. Each digger consumes 15w/s while active. Initially limited to one worker.
    <br>
    <b>Requirement:</b> Discovery of the ice cave.
  `;

  createTerraformButton(
    caveExcavationStation,
    "caveExcavationStationButton",
    "Cave Excavation Station",
    tooltiptext
  );
}





function checkTerraformUnlocks() {
    // Check if the microbial mounts project can be unlocked
    if (terrainCounts.land >= 2 && MicrobialMountsCompleted === 0) {
        createMicrobialMountsButton();
    }
    // Check if the Bio-Luminescent Zone project can be unlocked
    if (terrainCounts.water >= 2 && BioLuminescentZonesCompleted === 0) {
        createBioLuminescentZoneButton();
    }
    // Check if the Solar Sponge project can be unlocked
    if (terrainCounts.desert >= 2 && terrainCounts.water >= 2 && SolarSpongesCompleted === 0) {
        createSolarSpongeButton();
    }
    // Check if the Floral Bridges project can be unlocked
    if (firstflowerdiscovery && FloralBridgesCompleted === 0) {
        createFloralBridgesButton();
    }
    // Check if the Spore Towers project can be unlocked
    if (firstfungusdiscovery && SporeTowersCompleted === 0) {
        createSporeTowersButton();
    }
    // Check if the Excavation Station project can be unlocked
    if (caveInitialized && CaveExcavationCompleted === 0) {
        createCaveExcavationStationButton();
    }
    // Check if the Thermal Vents project can be unlocked
    if (volcanoDiscovered && ThermalVentsCompleted === 0) {
        createThermalVentsButton();
    }
    // Check if the Resonance Pools project can be unlocked
    if (firstpebblediscovery && ResonancePoolsCompleted === 0) {
        createResonancePoolsButton();
    }
}



// Generic function to update terraform resource rates
function updateTerraformResourceRates(change, resources) {
    if (change > 0 && cellworkers > 0) {
        cellworkers--;
    } else if (change < 0) {
        cellworkers++;
    } else {
        return; // Invalid change, do nothing
    }
    resources.forEach(resource => {
        switch (resource) {
            case "biomites":
                biomitesRate += change;
                break;
            case "zymers":
                zymersRate += change;
                break;
            case "fibers":
                fibersRate += change;
                break;
            case "sludge":
                sludgeRate += change;
                break;
            case "algae":
                algaeRate += change;
                break;
        }
    });
    // Update other UI elements as needed (e.g., worker displays)
    populateInfoWidget();
}


// Dev helper function
function boostTF() {
    biomites = 30000;
    zymers = 30000;
    fibers = 30000;
    sludge = 30000;
    algae = 30000;
}



// Populates the terraforming info widget
function populateInfoWidget() {
    const terrainList = document.getElementById('terrain-list');
    const availableCellsElem = document.getElementById('available-cells');
    // Clear the list first
    terrainList.innerHTML = '';
    // Populate the terrain data only if they've been discovered
    for (const [terrain, count] of Object.entries(terrainCounts)) {
        if (count > 0) { // Only show discovered terrains
            const listItem = document.createElement('li');
            listItem.textContent = `${terrain.charAt(0).toUpperCase() + terrain.slice(1).replace('_', ' ')}: ${count}`;
            terrainList.appendChild(listItem);
        }
    }
    // Update available cells for work
    availableCellsElem.textContent = cellworkers;
}

// Populates the terraforming anomaly widget
function populateAnomalyWidget() {
    const anomalyList = document.getElementById('anomaly-list');
    const currentProgress = {};
    // Store current progress values
    anomalyList.querySelectorAll('progress').forEach(progress => {
        const anomalyType = progress.getAttribute('data-anomaly-type');
        currentProgress[anomalyType] = progress.value;
    });
    anomalyList.innerHTML = '';  // Clear the list first
    for (const [anomaly, count] of Object.entries(decorationCounts)) {
        if (count > 0) {  // Only show discovered anomalies
            const listItem = document.createElement('li');
            const anomalyName = `${anomaly.charAt(0).toUpperCase() + anomaly.slice(1).replace('_', ' ')}`;
            //const anomalyType = progressBar.previousSibling.nodeValue.trim().split(':')[0].replace(' ', '_').toLowerCase();
            listItem.innerHTML = `${anomalyName}: ${count} `;
            const progressBar = document.createElement('progress');
            progressBar.setAttribute('max', '100');
            progressBar.value = currentProgress[anomaly] || 0;  // Get saved progress or initialize at 0%
            progressBar.setAttribute('data-anomaly-type', anomaly);
            progressBar.classList.add('anomaly-progress');  // Add the class to the progress bar
            listItem.appendChild(progressBar);
            anomalyList.appendChild(listItem);
            if (progressBar.value === 100) {
                progressBar.classList.add('completed');
                //analyseDecs(anomalyType);
            }
        }
    }
}

document.getElementById('analyze-all-anomalies').addEventListener('click', function() {
    const progressBars = document.querySelectorAll('#anomaly-list .anomaly-progress');
    const savedPercentages = savedTerraformAnomalyPercentages;
    autoExploreCountdown += 10;
    for (const progressBar of progressBars) {
        const anomalyType = progressBar.previousSibling.nodeValue.trim().split(':')[0].replace(' ', '_').toLowerCase();
        const count = decorationCounts[anomalyType] || 0;
        const totalAnomalies = decorations.filter(deco => deco.type === anomalyType).length;
        const percentDiscovered = (count / totalAnomalies) * 100;

        // Logging the starting process for each progress bar
        console.log(`Starting animation for ${anomalyType}: Current value: ${progressBar.value}, Target: ${percentDiscovered}`);

        const currentValue = progressBar.value;
        if (currentValue < percentDiscovered) {
            let step = (percentDiscovered - currentValue) / 50;  // Increment in small steps

            const animateProgressBar = () => {
                if (progressBar.value < percentDiscovered) {
                    progressBar.value += step;
                    requestAnimationFrame(animateProgressBar);
                } else {
                    progressBar.value = percentDiscovered;
                    if (progressBar.value === 100) {
                        progressBar.classList.add('completed');
                        analyseDecs(anomalyType);
                        console.log(`Anomaly ${anomalyType} analysis completed.`);
                    }
                }
            };

            requestAnimationFrame(animateProgressBar);
        } else {
            progressBar.value = percentDiscovered;
            if (progressBar.value === 100) {
                progressBar.classList.add('completed');
                analyseDecs(anomalyType);
                console.log(`Anomaly ${anomalyType} analysis completed.`);
            }
        }

        savedPercentages[anomalyType] = percentDiscovered;
    }

    localStorage.setItem('anomalyPercentages', JSON.stringify(savedPercentages));
    document.getElementById('analyze-all-anomalies').disabled = true;
    setTimeout(checkAndUpdateAnomalyProgressBars, 3000);
});


function checkAndUpdateAnomalyProgressBars() {
    const progressBars = document.querySelectorAll('#anomaly-list .anomaly-progress');
    let allBarsUpdated = true;
    for (const progressBar of progressBars) {
        const anomalyType = progressBar.previousSibling.nodeValue.trim().split(':')[0].replace(' ', '_').toLowerCase();
        const expectedPercentage = savedTerraformAnomalyPercentages[anomalyType];
        const currentPercentage = progressBar.value;
        //console.log(`Checking progress bar for ${anomalyType}. Current: ${currentPercentage}, Expected: ${expectedPercentage}`);
        if (currentPercentage !== expectedPercentage) {
            console.log(`Updating progress bar for ${anomalyType}.`);
            progressBar.value = expectedPercentage;
            if (progressBar.value === 100) {
                progressBar.classList.add('completed');
                //console.log(`Marking ${anomalyType} as completed.`);
            }
            allBarsUpdated = false;
        }
    }

    if (!allBarsUpdated) {
        //console.log("Some progress bars were updated. Rechecking in 3 seconds.");
        setTimeout(checkAndUpdateAnomalyProgressBars, 3000); // Check again after 3 seconds
    } 
}


function loadSavedTFAnomalyPercentages() {
    const savedPercentages = savedTerraformAnomalyPercentages
    const progressBars = document.querySelectorAll('#anomaly-list .anomaly-progress');
    for (const progressBar of progressBars) {
        const anomalyType = progressBar.previousSibling.nodeValue.trim().split(':')[0].replace(' ', '_').toLowerCase();
        if (savedPercentages[anomalyType]) {
            progressBar.value = savedPercentages[anomalyType];
        }
    }
}


function analyseDecs(anomalyType) {
  if (anomalyType === 'solara' && !solaraAnalysed) {
    solaraAnalysed = true;
    unlockSolaraTab();
    displayOnChat("一种独特的温暖触动你的感官。 你尝试着伸展新形成的肌腱，寻找起源。 在你面前矗立着一棵孤独的仙人掌，骄傲地开着一朵光芒四射的花朵，它的颜色与你的颜色相呼应。 一种莫名其妙的联系牵引着你，让你们更加亲近。 触摸它精致的花瓣，一股共享能量的浪潮将您吞没。 这是你以前从未感受过的——深厚的联系、相互的理解。 这一刻，你不再感到孤立。 从你内心发出的轻柔的低语称她为“索拉拉”。 她，你荒凉世界中的发光绿洲，令人心酸地提醒你，你所缺少的一切，却又是你所珍惜的一切。");
  }
  if (anomalyType === 'river' && !riverAnalysed) {
    riverAnalysed = true;
    researchQueue.push('AutoConstructiveSynapses'); // enables cave highway auto-construction
    console.log("Auto Constructive Synapses research pushed to queue");
    populateResearchTab();
    displayOnChat("在河流永恒智慧的指引下，您将揭开大自然的秘密蓝图。 它柔和的水流，蜿蜒而深思熟虑，反映了一个更大的真理：路径可以从直觉中出现，而不仅仅是意图。 理解的触须伸得更深，解锁了自我形成管道的艺术。 正如河流雕刻着风景一样，你的突触也会塑造出看不见的领域。");
    displayOnChat("自动构造突触研究现已推出。", "hint");
  }
  if (anomalyType === 'fungi' && !fungusAnalysed) {
    fungusAnalysed = true;
    addToResearchQueue('MycorrhizalNetwork');
    addToResearchQueue('SporeDispersalMechanics');
    populateResearchTab();
    displayOnChat("当你与神秘的真菌交织在一起时，古老智慧的光环笼罩着你。 菌丝网在您的核心脉搏下和谐共生，分享共同成长和广泛影响的宝贵秘密。 无形的生命之网不断扩张，投下充满希望的阴影。 在这里，在这个充满孢子和菌丝的秘密世界中，你会发现到达更远、联系更深的方法。");
    displayOnChat("菌根网络和孢子传播力学研究已经可用。", "hint");
  }
  if (anomalyType === 'ice_cave' && !iceCaveAnalysed) {
    iceCaveAnalysed = true;
    checkForThermogenicResonance();
    if (volcanoDiscovered) {
      displayOnChat("分析冰洞，你会感受到一种神秘的能量，仿佛两个世界正在相遇——极冷和酷热。 巧妙地，您的形态与振荡频率产生共鸣。 这种理解是一种启示：你可以利用冰与火的互补力量来解锁热共振研究。 当你的进化跃入新的、未开发的领域时，灵光乍现会扩展你的意识。");
    } else {
      displayOnChat("在冰洞里，你会感受到一股安静的能量，带着某种……温暖的味道。 你体内潜藏着潜在的潜力，低声诉说着热力掌握的秘密。 然而，拼图的各个部分仍然不完整。 你的直觉告诉你存在一个更热的对应物——一种平衡热能阴阳的力量。 在那之前，进一步研究的希望仍在等待中。");
    }
  }
  if (anomalyType === 'pebble' && !pebblesAnalysed) {
    pebblesAnalysed = true;
    applyTemporaryMultiplier('information', 1, 5 * 60 * 1000);  
    applyTemporaryMultiplier('energy', 1, 5 * 120 * 1000);
    applyTemporaryMultiplier('warmth', 1, 5 * 60 * 1000);
    displayOnChat("当您完成对最后一块鹅卵石的分析时，您的脑海中瞬间清晰起来。 每一颗鹅卵石，曾经是存在的碎片，现在都作为潜力的源泉产生共鸣。 有了新发现的知识，你体内的能量就会涌动，散发出一种温暖，渗透到你存在的每一根纤维中。 曾经冷漠的宇宙，现在变得更加紧密相连。 你收集信息、能量和温暖的速度将会暂时增加，作为你对理解的追求的证明。");
  } 
  if (anomalyType === 'wave' && !wavesAnalysed) {
    wavesAnalysed = true;
    applyTemporaryMultiplier('information', 1, 5 * 60 * 1000);  
    applyTemporaryMultiplier('energy', 1, 5 * 60 * 1000);
    applyTemporaryMultiplier('algae', 1, 5 * 180 * 1000);
    displayOnChat("当最后一波辐射出最后的振荡时，你内心深处的某些东西就会发生变化。 就好像宇宙本身也在点头认可。 你对世界错综复杂能量的理解将绽放出新的可能性。 您突然发现收集能量、处理信息和繁殖藻类变得更容易。 生命与土地的协同作用由你掌控； 新的黎明时代正在召唤。");
  }
  if (anomalyType === 'muddy_patch' && !muddyPatchesAnalysed) {
    muddyPatchesAnalysed = true;
    researchQueue.push('MitoticAmplificationI');
    displayOnChat("最后一片泥泞的土地向你揭开了它的秘密，当你从潮湿、原始的丰富中汲取见解时，一种启示就形成了。 在淤泥和污垢中，你可以看到一些规律——生命、出生和重生的循环。 每一个泥泞的脚印都讲述着一个成长的故事，讲述着曾经存在过、也可能再次存在过的事物。 当你领悟到也许，只是也许，一个部门可以产生更多成果时，你的本质就充满了潜力。 您的新认识激发了您对有丝分裂放大研究的追求。");
  }
  if (anomalyType === 'crystal' && !crystalsAnalysed) {
    crystalsAnalysed = true;
    displayOnChat("你感觉到晶格和你体内脉动的生命之间有着不可磨灭的联系。 这些水晶曾经是这片土地上神秘的哨兵，现在却与你的地球化之心一致地跳动。 这种理解的交响乐增强了你编织生活的能力。 改造资源更容易屈服于你的意志，这是对你所发掘的团结的持久致敬。 你的生物螨、酶、纤维、污泥和藻类现在以看不见的活力蓬勃发展，永久证明了你与这个世界的水晶奇迹所实现的共鸣。");
    biomitesMultiplier += 0.2;
    zymersMultiplier += 0.2;
    fibersMultiplier += 0.2;
    sludgeMultiplier += 0.2;
    algaeMultiplier += 0.2;
  }
  if (anomalyType === 'reed' && !reedsAnalysed) {
    reedsAnalysed = true;
    addToResearchQueue('AutotrophicAdaptation');
    displayOnChat("沼泽地的智慧渗透到你的意识中。 芦苇是从黑暗深处汲取营养的大师，它们激发了你的工人细胞自我维持活力的愿景。");
    displayOnChat("自养适应研究现已推出。", "hint");
  }
  if (anomalyType === 'snow_cap' && !snowCapsAnalysed) {
    snowCapsAnalysed = true;
    // Logic to enable the new evolution for information generation
    displayOnChat("在雪盖的寂静威严中，你的细胞工作者揭开了晶体计算的秘密。 冰冷的格子，既朴素又美丽，激发了信息综合的激增。 “突触冰川”进化变得可用，每个细胞工作者都是思想的堡垒，随着发现的节奏而脉动。");
  }

  // Check if all sand dunes have been analyzed
  if (anomalyType === 'sand_dune' && !sandDunesAnalysed) {
    sandDunesAnalysed = true;
    // Logic to enable the new evolution for warmth generation
    displayOnChat("当沙丘的最后一粒沙粒从你的薄膜中滑过时，一股理解的暖流渗透到你的存在中。 “量热颗粒”进化出现，每个细胞都可以充当微型太阳，不知疲倦地温暖你微观世界的深处。");
  }
  if (anomalyType === 'flower' && !flowersAnalysed) {
    flowersAnalysed = true;
    resourceConversionCap = 5000; // Increase the resource conversion cap
    displayOnChat("在对最后一朵花的本质的安静沉思中，忧郁的真相在你内心展开。 这些花朵在世界阴暗的画布上生机勃勃，象征着广阔而冷漠的宇宙中转瞬即逝的美丽。 然而，在他们的分析中，你会发现一种平静的韧性。 花瓣随风翩翩起舞，低声诉说着丰富和转变的秘密。 当你吸收这些知识时，你自己的能力范围就会扩大。 资源的转化曾经是涓涓细流，现在已成为溪流，反映了花朵自身生命周期的沉默、持久的绽放。");
  }
  if (anomalyType === 'salt_flat' && !saltflatsAnalysed) {
    saltflatsAnalysed = true;
    addToResearchQueue('CryohalineExcavation');
    displayOnChat("一丝希望。 盐滩是孤立和生存的象征，向您低语着尚未踏上的道路。 盐的晶体结构锋利而坚韧，揭示了耐力和转变的秘密。 这些新发现的知识融合成冰盐挖掘的愿景，一种利用盐的能力来缓和冰的寒冷拥抱的方法。");
    displayOnChat("冰盐挖掘研究现已推出。", "hint");
  }
  if (anomalyType === 'rock' && !rocksAnalysed) {
    rocksAnalysed = true;
    displayOnChat("岩石向您讲述着它们的故事，一个千古忍耐的故事。 这些沉默的石头哨兵经受住了时间的风吹，它们坚定不移的存在与转瞬即逝的存在形成了鲜明的对比。 在他们不屈的本性中，你会发现一种奇怪的亲缘关系； 当他们坚持时，你也必须坚持。 岩石的韧性增强了您的决心，让更多的挖掘者加入您的挖掘洞穴之旅。");
    updateMaxActiveDiggers(maxActiveDiggers+5);
    setupWorkerAssignment("Cave Excavation Station", "caveExcavationStationWorkers", 1, [],
      "assign-worker-cave-excavation-station", 
      "unassign-worker-cave-excavation-station", 
      "cave-excavation-station-workers", 
      function() {  // + function, called when worker is assigned
        console.log("cave plus+ clicked");
        terraformAssignedDiggers++;
      },
      function() {  // - function, called when worker is unassigned
        terraformAssignedDiggers--;
      },
      maxActiveDiggers
    );
  }
  if (anomalyType === 'rocky_outcrop' && !rockyOutcropsAnalysed) {
    rockyOutcropsAnalysed = true;
    displayOnChat("随着对岩石露头的分析完成，它们的坚忍力量会渗透到你的身体结构中。 这些古代世界的堡垒屹立不倒，是时间无情流逝的证明。 他们的坚定不移赋予你一份无声的礼物：扩大你的影响力的能力，让更多的挖掘者听从你的指挥，深入探索未知的洞穴。");
    updateMaxActiveDiggers(maxActiveDiggers+5);
    setupWorkerAssignment("Cave Excavation Station", "caveExcavationStationWorkers", 1, [],
      "assign-worker-cave-excavation-station", 
      "unassign-worker-cave-excavation-station", 
      "cave-excavation-station-workers", 
      function() {  // + function, called when worker is assigned
        console.log("cave plus+ clicked");
        terraformAssignedDiggers++;
      },
      function() {  // - function, called when worker is unassigned
        terraformAssignedDiggers--;
      },
      maxActiveDiggers
    );
  }
}

// Function to update worker counts in HTML - mainly used with loading savegames
function updateWorkerCountsInHTML() {
    for (const [workerVariable, domId] of Object.entries(workerVariableToDomIdMapping)) {
        const elem = document.getElementById(domId);
        if (elem) {
            elem.textContent = window[workerVariable];
        }
    }
}




