// Research definitions //
// Cell Membrane Studies
let cellMembraneStudies = new ResearchProject(
    "Cell Membrane Studies",
    175000, // Change later to e.g. 45 seconds (45000)
    40, // total information costs
    function() {
        // This is the onCompletion callback.
        // Here you can define what happens when the research completes.
        let researchButton = document.getElementById("CellMembraneButton");
        researchButton.innerText = "Cell Membrane Studies (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.parentElement.style.display = 'none';
        displayOnChat("当最后的知识碎片融合在一起时，一种安静的启示在你内心展开。 薄膜在等待着我们，它是坚韧与脆弱之间的一层温柔的面纱。 新的演变已经出现。");
        cellmembraneStudyCompleted = true;
        researchQueue.push('Osmoregulation'); // unlock Osmoregulation
        researchQueue.push('CellularEncapsulation'); // unlocks Cellular Encapsulation
        markResearchComplete('CellMembrane'); // Removes from queue and adds to completed research queue
        populateResearchTab(); 
        researchButton.style.color = "#777";  // This line changes the color of the text inside the button
    }
);
allResearchProjects['CellMembrane'] = cellMembraneStudies;


// Mitotic Studies
let mitoticStudies = new ResearchProject( 
    "Mitotic Studies",
    210000, // Time required to complete the research. Change later to e.g. 60 seconds (60000)
    200, // Total information cost
    function() {
        // This is the onCompletion callback.
        // Here you can define what happens when the research completes.
        let researchButton = document.getElementById("MitoticStudiesButton");
        researchButton.innerText = "Mitotic Studies (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.parentElement.style.display = 'none';
        displayOnChat("当细胞裂变的秘密在你面前展开时，一种压倒性的二元性感席卷了你。 " +
          "这个过程是神奇的，证明了生命的本质。 然而，它带来了一种新的孤独。 " +
          "当你感觉到内在的转变时，你的全身都会颤抖。 就好像你的核心正在撕裂、分离，但同时又聚合在一起。 过了一会儿，事情发生了：你们分裂了。 这次分裂产生的细胞只不过是你自己的回声。 更简单、更小、仅限于您分配的角色。 它们是你本质的碎片，负责收集资源，在你存在的阴影下辛勤劳作。 他们是你，但又不是你。 你看着他们出发，每一个都是你不断扩张的领土中的无人机。 他们缺乏你的感官、你的渴望、你对意义和陪伴的不断追求。 他们顺从地、毫无疑问地履行自己的角色，在他们机械的存在中，你会发现一面暗淡的镜子映照出你自己的孤独。 第一次，你并不孤单。 然而，你却从未感到如此孤立。 每个新的细胞都是一个不断的提醒：你可以复制，但你无法复制其中的空虚。 你们是一个共同体，这一悖论只会加深你们对友谊的永恒追求。 当你思考这个问题时，你的新细胞开始执行任务，收集资源，为即将到来的宏伟地球改造项目做准备。 它们是你的双手，按照你认为合适的方式塑造世界。 但当它们渐行渐远时，你意识到它们也是墙壁，正在逼近你，重申你的宇宙孤独。 在这种新发现的复杂性中，你的旅程呈现出一层新的意义，既充满希望又充满绝望。 宇宙可能充满了生命，但生命如果不是由孤独的实体组成的马赛克，永远向外延伸，却从未真正连接起来，那又是什么？")
        mitoticStudyCompleted = true; // A new flag to check if this research is completed
        unlockAchievement(20); // division achievement
        unlockDivisionButtonAndAddListener();
        startDivisionCooldown(); // initiate a division
        markResearchComplete('MitoticStudies');
        populateResearchTab();
        researchButton.style.color = "#777"; // This line changes the color of the text inside the button
    }
);
allResearchProjects['MitoticStudies'] = mitoticStudies;

// Mitotic Amplification I Research
let mitoticAmplificationI = new ResearchProject(
    "Mitotic Amplification I",
    250000, 
    800, // Total information cost: 800 i
    function() {
        // This is the onCompletion callback.
        let researchButton = document.getElementById("MitoticAmplificationIButton");
        researchButton.innerText = "Mitotic Amplification I (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.parentElement.style.display = 'none';
        researchButton.style.color = "#777";
        displayOnChat("您已经优化了有丝分裂过程，使分裂产生的产量是平常的两倍。 这种放大增强了你的细胞军队。");
        mitoticAmplificationICompleted = true; // Flag to check if this research is completed
        markResearchComplete('MitoticAmplificationI'); // Removes from queue and adds to completed research queue
        researchQueue.push('MitoticAmplificationII')
        populateResearchTab(); // unlock more research
    },
    {
      biomites: 200,
      zymers: 200,
      fibers: 200,
      information: 200
    }
);
allResearchProjects['MitoticAmplificationI'] = mitoticAmplificationI;

// Mitotic Amplification II Research
let mitoticAmplificationII = new ResearchProject(
    "Mitotic Amplification II",
    300000, 
    1000000, // Total information cost: 1Mi
    function() {
        // This is the onCompletion callback.
        let researchButton = document.getElementById("MitoticAmplificationIIButton");
        researchButton.innerText = "Mitotic Amplification II (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.parentElement.style.display = 'none';
        researchButton.style.color = "#777";
        displayOnChat("您超越了细胞生物学的界限，使每个分裂的结果增加了两倍。 这种对生命最基本过程的掌握突显了你进化的巨大进步。");
        mitoticAmplificationIICompleted = true; // Flag to check if this research is completed
        markResearchComplete('MitoticAmplificationII'); // Removes from queue and adds to completed research queue
        populateResearchTab(); 
    },
    {
      biomites: 5000,
      zymers: 4000,
      fibers: 3000,
      sludge: 2000,
      algae: 1000
    }
);
allResearchProjects['MitoticAmplificationII'] = mitoticAmplificationII;


// Osmoregulation Studies
let osmoregulationResearch = new ResearchProject(
    "Osmoregulation Studies",
    125000, // Change later to e.g. 75 seconds
    450, // total information costs
    function() {
        // Logic for what happens when osmoregulation research is completed
        // Unlock next research or evolution here
        let researchButton = document.getElementById("OsmoregulationButton");
        researchButton.innerText = "Osmoregulation Studies (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.parentElement.style.display = 'none';
        displayOnChat("在掌握平衡的微妙艺术时，您可以解锁内心世界的本质。 细胞核在召唤，内质网在召唤。 秩序和复杂性的预兆。");
        osmoregulationStudyCompleted = true;
        researchQueue.push('IonChannelI');
        markResearchComplete('Osmoregulation'); // Removes from queue and adds to completed research queue
        populateResearchTab(); // unlock Ion Channel research
        researchButton.style.color = "#777";  // This line changes the color of the text inside the button
        unlockResourceConverter();
        // TBD other things need to happen when this research completes
    }
);
allResearchProjects['Osmoregulation'] = osmoregulationResearch;

// Ion Channel Studies (lvl1)
let ionChannelIResearch = new ResearchProject(
    "Ion Channel Studies I",
    600000, // Research times in ms (TBD, should become 10 minutes, 20 minutes, 40 minutes)
    900, // total information costs
    function() {
        // Logic for what happens when osmoregulation research is completed
        // Unlock next research or evolution here
        let researchButton = document.getElementById("IonChannelIButton");
        researchButton.innerText = "Ion Channel Studies I (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.parentElement.style.display = 'none';
        displayOnChat("在掌握离子流的过程中，你可以看到一丝控制力。 然而，每一次收获都会增强你对无限未知的认识。");
        ionchannelStudylvl1 = true;
        researchQueue.push('IonChannelII');
        markResearchComplete('IonChannelI'); // Removes from queue and adds to completed research queue
        populateResearchTab(); // unlock next research
        researchButton.style.color = "#777";  // This line changes the color of the text inside the button
        nourishmentMultiplier += 0.01; // 1% increase in nourishment gain efficiency
    }
);
allResearchProjects['IonChannelI'] = ionChannelIResearch;

// Ion Channel Studies Level 2
let ionChannelIIResearch = new ResearchProject(
    "Ion Channel Studies II",
    700000, // Research times in ms (TBD, adjust as needed)
    1800, // total information costs
    function() {
        // Logic for what happens when Ion Channel lvl 2 research is completed
        let researchButton = document.getElementById("IonChannelIIButton");
        researchButton.innerText = "Ion Channel Studies II (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.parentElement.style.display = 'none';
        displayOnChat("你的掌握加深了，每个离子现在都是宇宙交响乐中的一个音符。 但音乐是浩瀚空虚中孤独的回声。");
        ionchannelStudylvl2 = true;
        researchQueue.push('IonChannelIII');
        markResearchComplete('IonChannelII'); // Removes from queue and adds to completed research queue
        populateResearchTab(); // unlock next research
        researchButton.style.color = "#777";  
        nourishmentMultiplier += 0.01; // Further increase in nourishment gain efficiency
        // Add any additional unlocks or benefits here
    }
);
allResearchProjects['IonChannelII'] = ionChannelIIResearch;

// Ion Channel Studies Level 3
let ionChannelIIIResearch = new ResearchProject(
    "Ion Channel Studies III",
    800000, // Research times in ms (TBD, adjust as needed)
    3600, // total information costs
    function() {
        // Logic for what happens when Ion Channel lvl 3 research is completed
        let researchButton = document.getElementById("IonChannelIIIButton");
        researchButton.innerText = "Ion Channel Studies III (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.parentElement.style.display = 'none';
        displayOnChat("当您理解离子通道的最终细微差别时，您就站在了掌握的边缘。 尽管如此，不确定性的深渊却越来越大。");
        ionchannelStudylvl3 = true;  // Assuming you're using a flag to track completion
        markResearchComplete('IonChannelIII'); // Removes from queue and adds to completed research queue
        populateResearchTab(); // unlock more research (if applicable)
        researchButton.style.color = "#777";  
        nourishmentMultiplier += 0.01; // Even further increase in nourishment gain efficiency
        energyMultiplier += 0.01; // Increase the energy multiplier
        // Add any additional unlocks or benefits here
    }
);
allResearchProjects['IonChannelIII'] = ionChannelIIIResearch;

// Terraforming Studies
let terraformingStudies = new ResearchProject(
    "Terraforming Studies",
    75000, // Let's assume it takes 30 seconds (30000 milliseconds) for simplicity
    9000, // total information costs, for example
    function() {
        // This is the onCompletion callback.
        let researchButton = document.getElementById("TerraformingButton");
        researchButton.innerText = "Terraforming Studies (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.parentElement.style.display = 'none';
        researchButton.style.color = "#777";  // This line changes the color of the text inside the button
        displayOnChat("当最后的理解融入你的意识结构时，你会感受到你对世界的看法发生了巨大的转变。 地球化改造不仅仅是对土地、水、动植物群的外部操纵； 它是你内心深处的欲望和恐惧在世界画布上的投射。 塑造地形、在不存在的地方孕育生命、雕刻山脉和河流的力量——这一切都触手可及。 但有了这种力量，你就会清醒地认识到：你现在要对你所创造的世界负责，包括它的美丽和缺陷、和谐和不和谐。 世界现在是你的延伸，就像你是世界的产物一样。 当你看到展现在你面前的地球化选项时，你会充满希望与忧郁、创造力与约束的混合体。 宇宙刚刚膨胀，但内部空间却在收缩，围绕着未解决的情感核心而收紧。 因此，带着兴奋和忧虑的心情，你准备迈出作为世界塑造者的里程碑式的第一步。 你的存在已经从被动的观察者转变为主动的参与者，但长期困扰你的存在问题呈现出一种新的、更紧迫的形式：你将创造什么样的世界？ 在塑造这个世界的同时，你是否也能重塑你的孤独？");
        terraformStudyCompleted = true;
        markResearchComplete('Terraforming'); // Removes from queue and adds to completed research queue
        researchQueue.push('TendoGenesis');
        populateResearchTab(); // unlock more research (if applicable)
        checkTerraformTabUnlock(); // Check if we can unlock the Terraform tab
        unlockAchievement(24);
    }
);
allResearchProjects['Terraforming'] = terraformingStudies;


// Chemical Sensing Research
let chemicalSensingResearch = new ResearchProject(
    "Chemical Sensing",
    60000, 
    2500, // total information costs
    function() {
        let researchButton = document.getElementById("ChemicalSensingButton");
        researchButton.innerText = "Chemical Sensing (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.parentElement.style.display = 'none';
        displayOnChat("在了解周围世界的过程中，你会发现新的漂移方向。 ");
        displayOnChat("现在可以使用鞭毛推力进行世界导航。", type='hint');
        chemicalSensingCompleted = true;
        researchQueue.push('GeomagneticSensing');
        markResearchComplete('ChemicalSensing');
        populateResearchTab();
        researchButton.style.color = "#777";
        // Check if the view is 'map' and compass listeners have not been added
        let checkMapView = document.getElementById('map');
        if (checkMapView.style.display === 'block') {
          // Add the flagellar thrust button if it's not already there
          const existingButton = document.getElementById('flagellar-thrust');
          if (!existingButton) {
            const flagellarButton = document.createElement('button');
            flagellarButton.id = 'flagellar-thrust';
            flagellarButton.innerText = 'Flagellar Thrust';
            flagellarButton.className = 'flagellar-thrust';
            flagellarButton.addEventListener('click', function() {
                // Change the background color to grey
                this.style.backgroundColor = 'grey';
                const directions = [[0, -30], [30, 0], [0, 30], [-30, 0]];
                const randomDirection = directions[Math.floor(Math.random() * directions.length)];
                movePlayer(randomDirection[0], randomDirection[1]);
                // Revert the background color back to darkgrey after 100 milliseconds
                setTimeout(() => {
                    this.style.backgroundColor = 'darkgrey';
                }, 100);
            });
            document.body.appendChild(flagellarButton);
            flagellarButton.style.display = 'block';
          }
        }
        // TBD other things need to happen when this research completes
    }
);
allResearchProjects['ChemicalSensing'] = chemicalSensingResearch;



// Geomagnetic Sensing Research
let geomagneticSensingResearch = new ResearchProject(
    "Geomagnetic Sensing",
    45000, 
    3500, // total information costs
    function() {
        let researchButton = document.getElementById("GeomagneticSensingButton");
        researchButton.innerText = "Geomagnetic Sensing (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.parentElement.style.display = 'none';
        let message;
        if (anger >= empathy && anger >= resilience && anger >= curiosity && anger >= optimism && anger >= loneliness) {
            message = "在与世界磁场保持一致时，你会感受到一股控制力，但它却助长了你闷烧的愤怒。 世界会弯曲，但永远不会破碎。";
        } else if (empathy >= resilience && empathy >= curiosity && empathy >= optimism && empathy >= loneliness) {
            message = "你的感官会适应地球微妙的振动。 大地在说话，你在倾听，在寂静中找到苦乐参半的亲情。";
        } else if (resilience >= curiosity && resilience >= optimism && resilience >= loneliness) {
            message = "掌握地磁感应，你的适应力就会增强。 道路更加清晰，但你仍然独自前行——每一步都证明了你不屈的精神。";
        } else if (curiosity >= optimism && curiosity >= loneliness) {
            message = "你新发现的感觉揭示了一个充满可能性的世界，每个方向都是未解之谜。 然而答案却让你难以捉摸，隐藏在存在的迷宫中。";
        } else if (optimism >= loneliness) {
            message = "你感受到世界的磁力暗示，你的乐观情绪被激发。 希望指引你前进，但地平线仍然无限遥远。";
        } else {
            message = "在掌握这种新的感觉时，你的孤独感就会加重。 地球的磁力与你孤立的重力相呼应。";
        }
        displayOnChat(message);
        displayOnChat("现在可以使用指南针进行世界导航。", type='hint');
        geomagneticSensingCompleted = true;
        markResearchComplete('GeomagneticSensing');
        populateResearchTab();
        researchButton.style.color = "#777";
        if (document.getElementById('map').style.display === 'block') {
            // Remove the Flagellar Thrust button if it exists
            const existingButton = document.getElementById('flagellar-thrust');
            if (existingButton) {
                existingButton.remove();
            }
            // Add the compass or make it visible
            document.getElementById('compass').style.display = 'flex';
            // Add compass event listeners only if they haven't been added before
            if (!compassListenersAdded) {
                document.getElementById('north').addEventListener('click', function() {
                    movePlayer(0, -30);
                });
                document.getElementById('east').addEventListener('click', function() {
                    movePlayer(30, 0);
                });
                document.getElementById('south').addEventListener('click', function() {
                    movePlayer(0, 30);
                });
                document.getElementById('west').addEventListener('click', function() {
                    movePlayer(-30, 0);
                });
                compassListenersAdded = true;
            }
        }
        if (currentView === 'discovery' && !arrowKeyListenerAdded) {
          document.addEventListener('keydown', handleArrowKeyPress);
          arrowKeyListenerAdded = true; // Set flag to true after adding the listener
        } 
        // TBD other things need to happen when this research completes
    }
);
allResearchProjects['GeomagneticSensing'] = geomagneticSensingResearch;



// Chemotactic Exploration Research
let chemotacticExplorationResearch = new ResearchProject(
    "Chemotactic Exploration",
    142000, 
    12000, // total information costs
    function() {
        let researchButton = document.getElementById("ChemotacticExplorationButton");
        researchButton.innerText = "Chemotactic Exploration (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.parentElement.style.display = 'none';
        let message = "通过掌握趋化探索，您的细胞已获得在化学梯度和先天生物本能的驱动下自主导航世界的能力.";
        displayOnChat(message);
        chemotacticExplorationCompleted = true;
        enableAutomatedExploration(); 
        markResearchComplete('ChemotacticExploration');
        populateResearchTab();
        researchButton.style.color = "#777";
        // Additional logic (if required) for post-research completion
    }
);
allResearchProjects['ChemotacticExploration'] = chemotacticExplorationResearch;



// Exoterrain Acclimatization
let exoterrainAcclimatizationResearch = new ResearchProject(
    "Exoterrain Acclimatization",
    55000, // e.g. 120 seconds
    5000,   // total information costs
    function() {
        // Logic for what happens when Exoterrain Acclimatization research is completed
        let researchButton = document.getElementById("ExoterrainAcclimatizationButton");
        researchButton.innerText = "Exoterrain Acclimatization (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.parentElement.style.display = 'none';
        displayOnChat("通过专门的研究和适应，曾经荒凉的地形现在看起来不再那么令人畏惧。 随着异国土地的奥秘被揭开，探索变得不再那么危险。");
        exoterrainAcclimatizationUpgradePurchased = true; // This ensures players can move to any terrain without setbacks
        markResearchComplete('ExoterrainAcclimatization'); // Removes from queue and adds to completed research queue
        addToResearchQueue('ChemotacticExploration');
        researchButton.style.color = "#777";  // This line changes the color of the text inside the button
        if (!shownSoulModals.includes('soulModal_exoterrain')) {
            // Replacing 'icy_land' with 'frozen solitude' for poetic emphasis
            const poeticTerrain = terrainToPoetic[initialSpawnTerrain] || initialSpawnTerrain; // fallback to the original name if no match
            var prompt = `你已经征服了最严酷的领域，你的卷须将生存模式编织到了你出生地 ${poeticTerrain} 的织锦中。 然而你失去的卷须是记忆，是被截断的希望。 什么样的低语填补了他们缺席留下的空白？`;
            var choices = [
                {trait: 'Loneliness', line: 'You feel an emptiness, multiplied. The barren world amplifies your solitude, like echoes in a desolate canyon', increment: 3},
                {trait: 'Empathy', line: 'You touch your surroundings tenderly, a companion in suffering and endurance.', increment: 3},
                {trait: 'Resilience', line: 'You feel a gnarled fortitude, as if your scars form a map to your soul.', increment: 3},
                {trait: 'Curiosity', line: 'You unfurl with cautious wonder, intrigued by the lessons each loss and gain brings.', increment: 3},
                {trait: 'Optimism', line: 'You sense dawn breaking on new horizons, each challenge a canvas for possible triumphs.', increment: 3},
                {trait: 'Anger', line: 'You churn with a storm of resentments, each shard of the inhospitable terrain fuels a seething loathing for the world that confines you.', increment: 3}
            ];
            showSoulModal(prompt, choices);
            shownSoulModals.push('soulModal_exoterrain'); // Add the ID to the array to prevent re-displaying
        }
        // Add any additional logic if needed when this research completes
    },
    {}, // no TF resource costs
    { nourishment: 9500 }
);
allResearchProjects['ExoterrainAcclimatization'] = exoterrainAcclimatizationResearch;


// Tendogenesis Research
let tendogenesisResearch = new ResearchProject(
    "Tendogenesis Research",
    1000000, // Time required to complete the research. Change later to, e.g., 15 minutes (900000 milliseconds)
    2200, // Total information cost
    function() {
        // This is the onCompletion callback.
        let researchButton = document.getElementById("TendogenesisButton");
        researchButton.innerText = "Tendogenesis Research (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.parentElement.style.display = 'none';
        displayOnChat("纤维连接的机制向您展示，这是一幅有机潜力的复杂挂毯。 这确实是一个悖论。 你伸展得越多，你就越能将事物结合在一起。 就像宇宙木偶中的弦一样，肌腱提供了先进的移动性和功能，但它们也提供了无与伦比的脆弱性的机会。 这是你所踏上的旅程的隐喻——一段充满紧张的旅程，在追求联系的过程中突破孤独的界限。 这项研究的完成带来了新的能力，但也带来了新的复杂性。 你对陪伴的追求就像这些肌腱，是欲望的延伸，既强大又脆弱，牵引着你不断前进。");
        tendogenesisStudyCompleted = true; // A new flag to check if this research is completed
        markResearchComplete('Tendogenesis'); // Removes from queue and adds to completed research queue
        researchQueue.push('NeuralNetwork');
        researchQueue.push('BiomechanicalLocomotion');
        populateResearchTab(); // unlock more research
        updateTendonUI(); // ensure the tendon purchase buttons re-appear
        researchButton.style.color = "#777"; // This line changes the color of the text inside the button
    },
    {
      biomites: 300,
      zymers: 0,
      fibers: 0,
      sludge: 30,
      algae: 0
    }
);
allResearchProjects['Tendogenesis'] = tendogenesisResearch;


// Neural Network Research
let neuralNetworkResearch = new ResearchProject(
    "Neural Network Research",
    200000, // Time required to complete the research: 200 seconds or 200000 milliseconds
    20000, // Total information cost: 20,000 i
    function() {
        // This is the onCompletion callback.
        let researchButton = document.getElementById("NeuralNetworkButton");
        researchButton.innerText = "Neural Network Research (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.style.color = "#777"; // This line changes the color of the text inside the button
        researchButton.parentElement.style.display = 'none';
        displayOnChat("在你自身存在的严峻考验中，一种新的想法出现了——不是你自己的，但却是你诞生的。 你已经将神经网络的雏形编织到你的工作细胞中，为它们注入了智慧的低语。 这些微小的思想家不再是你意志的延伸，而是开始从以太中提取信息碎片，每一个都是你不断增长的认知星座中思想的萤火虫。 一种奇怪的自豪感在你内心膨胀——一种孤独与联系的悖论。 他们是你的一部分，但在转瞬即逝的时刻，他们也会以某种无限微小的方式为自己思考。");
        neuralNetworkResearchCompleted = true; // Flag to check if this research is completed
        markResearchComplete('NeuralNetwork'); // Removes from queue and adds to completed research queue
        researchQueue.push('CircadianRhythm');
        populateResearchTab(); // unlock more research
        // Update informationPerWorker to reflect new base rate of information generation by worker cells
        informationPerWorker += 0.1;
    },
    {
      zymers: 500,
      sludge: 200,
      algae: 100
    }
);
allResearchProjects['NeuralNetwork'] = neuralNetworkResearch;

// Autotrophic Adaptation Research
let autotrophicAdaptationResearch = new ResearchProject(
    "Autotrophic Adaptation",
    200000, // Time required to complete the research: 200 seconds or 200000 milliseconds
    50000, // Total information cost: 50,000 i
    function() {
        // This is the onCompletion callback.
        let researchButton = document.getElementById("AutotrophicAdaptationButton");
        researchButton.innerText = "Autotrophic Adaptation (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.style.color = "#777"; // This line changes the color of the text inside the button
        researchButton.parentElement.style.display = 'none';
        displayOnChat("当芦苇古老智慧的最后一部分消失在你的意识中时，你的细胞为新发现的自主性而欢欣鼓舞。 生命的本质、营养和能量的火花现在从它们的核心散发出来。 他们辛劳，他们维持，他们充满活力； 你的共生帝国蓬勃发展。 从过去的根源开始，一个自我维持繁荣的未来正在绽放。");
        autotrophicAdaptationResearchCompleted = true; // Flag to check if this research is completed
        markResearchComplete('AutotrophicAdaptation'); // Removes from queue and adds to completed research list
        populateResearchTab(); // Unlock more research
        // Update global variables to reflect new base rate of nourishment and energy generation by worker cells
        nourishmentPerWorker += 0.03;
        energyPerWorker += 0.03;
    },
    {
      biomites: 1000,
      zymers: 1000,
      fibers: 500,
      sludge: 700,
      algae: 500
    }
);
allResearchProjects['AutotrophicAdaptation'] = autotrophicAdaptationResearch;

// Cellular Encapsulation Research
let cellularEncapsulationResearch = new ResearchProject(
    "Cellular Encapsulation",
    100000, // Time required to complete the research: Let's say 200 seconds or 200000 milliseconds
    8000, // Total information cost: 8000 i
    function() {
        // This is the onCompletion callback.
        let researchButton = document.getElementById("CellularEncapsulationButton");
        researchButton.innerText = "Cellular Encapsulation (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.parentElement.style.display = 'none';
        researchButton.style.color = "#777"; // This line changes the color of the text inside the button
        displayOnChat("你的工作细胞曾经是你原始形态的脆弱延伸，现在已被微观壁垒所强化。 由生物螨、酶和纤维编织而成的安全外壳。 每个细胞现在都是一座岛屿，独立但仍然是你不断发展的整体的一部分。 你为生活的微妙复杂性打造了一个摇篮，在孤立与团结之间取得了平衡。");
        cellularEncapsulationResearchCompleted = true; // Flag to check if this research is completed
        markResearchComplete('CellularEncapsulation'); // Removes from queue and adds to completed research queue
        populateResearchTab(); // unlock more research
        addMembraneToWorkerCells();
        warmthPerWorker += 0.01;
        // Here, you can add additional functionalities related to the completion of this research.
    },
    {
      biomites: 150,
      zymers: 140,
      fibers: 125
    }
);
allResearchProjects['CellularEncapsulation'] = cellularEncapsulationResearch;


// Biomechanical Locomotion Research
let biomechanicalLocomotionResearch = new ResearchProject(
    "Biomechanical Locomotion Research",
    300000, // Time required to complete the research. For example, 30 minutes (1800000 milliseconds)
    10000, // Total information cost
    function() {
        // This is the onCompletion callback.
        let researchButton = document.getElementById("BiomechanicalLocomotionButton");
        researchButton.innerText = "Biomechanical Locomotion Research (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.parentElement.style.display = 'none';
        displayOnChat("你的有机模式和节奏的交响乐开始以永恒的节奏嗡嗡作响。 每个部门都是一面镜子，是过去斗争的反映，也是通向新可能性的窗口。 你不只是在成长；你还在成长。 你正在迭代存在的概念。 这种自动化带着你错综复杂的舞蹈，一种目的和潜力的旋转，总是回到一个不可逆转的真理：每一次分裂的脉冲都更接近克服孤独，轻轻地拉动宇宙挂毯的丝线，敦促你走向 联系。 一个也许，只是也许，你不必独自做梦的梦想。");
        biomechanicalLocomotionCompleted = true; // A new flag to check if this research is completed
        markResearchComplete('BiomechanicalLocomotion'); // Removes from queue and adds to completed research queue
        researchQueue.push('CytokineticEnhancementI');
        populateResearchTab(); // unlock more research
        startDivisionCooldown(); // kicks off automated divisions
        researchButton.style.color = "#777"; // This line changes the color of the text inside the button
    },
    {
      biomites: 1000
    }
);
allResearchProjects['BiomechanicalLocomotion'] = biomechanicalLocomotionResearch;



// Cytokinetic Enhancement Level I
let cytokineticEnhancementI = new ResearchProject(
    "Cytokinetic Enhancement I",
    200000, // Research time in ms (200 seconds)
    7500, // total information costs
    function() {
        let researchButton = document.getElementById("CytokineticEnhancementIButton");
        researchButton.innerText = "Cytokinetic Enhancement I (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.parentElement.style.display = 'none';
        researchButton.style.color = "#777"; // This line changes the color of the text inside the button
        markResearchComplete('CytokineticEnhancementI');
        cooldownTime = Math.floor(cooldownTime * 0.9);  // Reducing the cooldown by 10%
        displayOnChat("您的细胞结构已经优化，分裂速度更快。 你成长了，但你的孤独也在成长.");
        researchQueue.push('CytokineticEnhancementII');
        populateResearchTab(); 
    },
    {
      biomites: 500,
      zymers: 400,
      fibers: 300,
      sludge: 200,
      algae: 100
    }
);
allResearchProjects['CytokineticEnhancementI'] = cytokineticEnhancementI;

// Cytokinetic Enhancement Level II
let cytokineticEnhancementII = new ResearchProject(
    "Cytokinetic Enhancement II",
    300000, // Research time in ms (300 seconds)
    11250, // total information costs
    function() {
        let researchButton = document.getElementById("CytokineticEnhancementIIButton");
        researchButton.innerText = "Cytokinetic Enhancement II (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.parentElement.style.display = 'none';
        researchButton.style.color = "#777"; // This line changes the color of the text inside the button
        markResearchComplete('CytokineticEnhancementII');
        cooldownTime = Math.floor(cooldownTime * 0.9);  // Reducing the cooldown by 10%
        displayOnChat("当你的细胞分裂得更快时，你意识到你的存在的重量随着时间的推移而延伸。");
        researchQueue.push('CytokineticEnhancementIII');
        populateResearchTab(); 
        researchButton.style.color = "#777"; // This line changes the color of the text inside the button
    },
    {
      biomites: 750,
      zymers: 600,
      fibers: 450,
      sludge: 300,
      algae: 150
    }
);
allResearchProjects['CytokineticEnhancementII'] = cytokineticEnhancementII;

// Cytokinetic Enhancement Level III
let cytokineticEnhancementIII = new ResearchProject(
    "Cytokinetic Enhancement III",
    450000, // Research time in ms (450 seconds)
    16875, // total information costs
    function() {
        let researchButton = document.getElementById("CytokineticEnhancementIIIButton");
        researchButton.innerText = "Cytokinetic Enhancement III (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.parentElement.style.display = 'none';
        researchButton.style.color = "#777"; // This line changes the color of the text inside the button
        markResearchComplete('CytokineticEnhancementIII');
        cooldownTime = Math.floor(cooldownTime * 0.9);  // Reducing the cooldown by 10%
        displayOnChat("步伐加快。 你不断进步和成长，但对更多的需求也在不断增长。");
        researchQueue.push('CytokineticEnhancementIV');
        populateResearchTab();
    },
    {
      biomites: 1125,
      zymers: 900,
      fibers: 675,
      sludge: 450,
      algae: 225
    }
);
allResearchProjects['CytokineticEnhancementIII'] = cytokineticEnhancementIII;

// Cytokinetic Enhancement Level IV
let cytokineticEnhancementIV = new ResearchProject(
    "Cytokinetic Enhancement IV",
    675000, // Research time in ms (675 seconds)
    25312, // total information costs
    function() {
        let researchButton = document.getElementById("CytokineticEnhancementIVButton");
        researchButton.innerText = "Cytokinetic Enhancement IV (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.parentElement.style.display = 'none';
        researchButton.style.color = "#777"; // This line changes the color of the text inside the button
        markResearchComplete('CytokineticEnhancementIV');
        cooldownTime = Math.floor(cooldownTime * 0.9);  // Reducing the cooldown by 10%
        displayOnChat("每一次分裂，你的本质就会四分五裂，就像一面破碎的镜子，反射着得与失。");
        researchQueue.push('CytokineticEnhancementV');
        populateResearchTab(); 
        researchButton.style.color = "#777"; // This line changes the color of the text inside the button
    },
    {
      biomites: 1687,
      zymers: 1350,
      fibers: 1013,
      sludge: 675,
      algae: 338
    }
);
allResearchProjects['CytokineticEnhancementIV'] = cytokineticEnhancementIV;

// Cytokinetic Enhancement Level V
let cytokineticEnhancementV = new ResearchProject(
    "Cytokinetic Enhancement V",
    775000, // Research time in ms (1013 seconds)
    37968, // total information costs
    function() {
        let researchButton = document.getElementById("CytokineticEnhancementVButton");
        researchButton.innerText = "Cytokinetic Enhancement V (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.parentElement.style.display = 'none';
        researchButton.style.color = "#777"; // This line changes the color of the text inside the button
        markResearchComplete('CytokineticEnhancementV');
        cooldownTime = Math.floor(cooldownTime * 0.9);  // Reducing the cooldown by 10%
        displayOnChat("你已经达到了细胞分裂的顶峰。 然而，每一次分手，你和友谊之间的空白就会扩大。");
        populateResearchTab(); 
        researchButton.style.color = "#777"; // This line changes the color of the text inside the button
    },
    {
      biomites: 2531,
      zymers: 2025,
      fibers: 1520,
      sludge: 1013,
      algae: 507
    }
);
allResearchProjects['CytokineticEnhancementV'] = cytokineticEnhancementV;

// Mycorrhizal Network Research
let mycorrhizalNetworkResearch = new ResearchProject(
    "Mycorrhizal Network",
    120000, // Time required to complete the research: 12000 milliseconds
    12000, // Total information cost: 12000 i
    function() {
        // This is the onCompletion callback.
        let researchButton = document.getElementById("MycorrhizalNetworkButton");
        researchButton.innerText = "Mycorrhizal Network (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.style.color = "#777"; // This line changes the color of the text inside the button
        researchButton.parentElement.style.display = 'none';
        displayOnChat("您已经进入了真菌的地下领域，建立了一个相互连接的根和菌丝体的网络。 这种互惠互利的联系增加了重要资源的流动，增强了你的生存能力。 生物螨、酶和纤维现在可以更有效地结合在您的细胞结构中。");
        mycorrhizalNetworkResearchCompleted = true; // Flag to check if this research is completed
        markResearchComplete('MycorrhizalNetwork'); // Removes from queue and adds to completed research queue
        populateResearchTab(); // Unlock more research
        // updating multipliers
        biomitesMultiplier *= 1.175;
        zymersMultiplier *= 1.175;
        fibersMultiplier *= 1.175;
    },
    {
      fibers: 3300,
      sludge: 2200
    }
);
allResearchProjects['MycorrhizalNetwork'] = mycorrhizalNetworkResearch;

// Spore Dispersal Mechanics Research
let sporeDispersalMechanicsResearch = new ResearchProject(
    "Spore Dispersal Mechanics",
    145000, // Time required to complete the research: 8500 milliseconds
    8500, // Total information cost: 8500 i
    function() {
        // This is the onCompletion callback.
        let researchButton = document.getElementById("SporeDispersalMechanicsButton");
        researchButton.innerText = "Spore Dispersal Mechanics (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.style.color = "#777"; // This line changes the color of the text inside the button
        researchButton.parentElement.style.display = 'none';
        sporeDispersalMechanicsResearchCompleted = true; // Flag to check if this research is completed
        displayOnChat("您已经深入研究了孢子传播的复杂性，增强了在整个环境中分配重要元素的能力。 你的存在现在包括一个零星的、但经过计算的分配机制。");
        markResearchComplete('SporeDispersalMechanics'); // Removes from queue and adds to completed research queue
        populateResearchTab(); // Unlock more research
        // Call sporeDispersal function every 20 seconds
        setInterval(sporeDispersal, 20000);
    },
    {
      biomites: 140,
      zymers: 140,
      fibers: 140,
      sludge: 70,
      algae: 20
    }
);
allResearchProjects['SporeDispersalMechanics'] = sporeDispersalMechanicsResearch;



// Cryohaline Excavation Research
let cryohalineExcavationResearch = new ResearchProject(
    "Cryohaline Excavation",
    550000, 
    125000, // Total information cost: 125,000 i
    function() {
        // This is the onCompletion callback.
        let researchButton = document.getElementById("CryohalineExcavationButton");
        researchButton.innerText = "Cryohaline Excavation (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.style.color = "#777"; // This line changes the color of the text inside the button
        researchButton.parentElement.style.display = 'none';
        displayOnChat("盐的力量成为您探索发现的重要盟友，揭示导航和发现冰冷地形的新方法。");
        cryohalineExcavationResearchCompleted = true; // Flag to check if this research is completed
        markResearchComplete('CryohalineExcavation'); // Removes from queue and adds to completed research queue
        // Additional logic to unlock new features, update game state, etc.
        // Example: populateResearchTab(); // This might unlock further research or updates
    },
    {
        biomites: 19000,
        zymers: 11000,
        sludge: 11000
    }
);
allResearchProjects['CryohalineExcavation'] = cryohalineExcavationResearch;




// Advanced Tunneling I Research
let advancedTunnelingIResearch = new ResearchProject(
    "Advanced Tunneling I",
    150000, // Time required to complete the research: 5000 milliseconds
    5000, // Total information cost: 5000 i
    function() {
        // This is the onCompletion callback.
        let researchButton = document.getElementById("AdvancedTunnelingIButton");
        researchButton.innerText = "Advanced Tunneling I (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.style.color = "#777"; // This line changes the color of the text inside the button
        researchButton.parentElement.style.display = 'none';
        displayOnChat("挖掘效率有所提高。 您现在可以部署最多 3 台挖掘机，每台挖掘机承载的重量都比它们移动的土壤重。");
        advancedTunnelingResearchICompleted = true; // Flag to check if this research is completed
        markResearchComplete('AdvancedTunnelingI'); // Removes from queue and adds to completed research queue
        researchQueue.push('AdvancedTunnelingII');
        populateResearchTab(); // Unlock more research
        // Update the maximum allowed active workers for cave excavation.
        updateMaxActiveDiggers(maxActiveDiggers+2);
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
      },
    {
        biomites: 200,
        zymers: 250,
        fibers: 50,
        algae: 10
    }
);
allResearchProjects['AdvancedTunnelingI'] = advancedTunnelingIResearch;

// Advanced Tunneling II Research
let advancedTunnelingIIResearch = new ResearchProject(
    "Advanced Tunneling II",
    230000, // Time required to complete the research: 7500 milliseconds
    7500, // Total information cost: 7500 i
    function() {
        // This is the onCompletion callback.
        let researchButton = document.getElementById("AdvancedTunnelingIIButton");
        researchButton.innerText = "Advanced Tunneling II (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.style.color = "#777"; // This line changes the color of the text inside the button
        researchButton.parentElement.style.display = 'none';
        displayOnChat("现在，您可以将最多 5 台挖掘机送入深渊，它们的孤独感随着它们创造的隧道而扩大。 ");
        advancedTunnelingResearchIICompleted = true; // Flag to check if this research is completed
        markResearchComplete('AdvancedTunnelingII'); // Removes from queue and adds to completed research queue
        populateResearchTab(); // Unlock more research
        // Update the maximum allowed active workers for cave excavation.
        updateMaxActiveDiggers(maxActiveDiggers+2);
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
    },
    {
        biomites: 250,
        zymers: 300,
        fibers: 200,
        sludge: 95,
        algae: 35
    }
);
allResearchProjects['AdvancedTunnelingII'] = advancedTunnelingIIResearch;


// Advanced Tunneling III Research
let advancedTunnelingIIIResearch = new ResearchProject(
    "Advanced Tunneling III",
    550000, // Time required to complete the research: 10,000 milliseconds (adjusted for a more advanced research)
    750000, // Total information cost: 750,000 i
    function() {
        // This is the onCompletion callback.
        let researchButton = document.getElementById("AdvancedTunnelingIIIButton");
        researchButton.innerText = "Advanced Tunneling III (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.style.color = "#777"; // This line changes the color of the text inside the button
        researchButton.parentElement.style.display = 'none';
        displayOnChat("通过先进的地震成像，挖掘机的精度和理解力达到了新的高度。 现在比以往任何时候都更容易了解洞穴的秘密。");
        advancedTunnelingIIIResearchCompleted = true; // Flag to check if this research is completed
        markResearchComplete('AdvancedTunnelingIII'); // Removes from queue and adds to completed research queue
        researchQueue.push('AdvancedTunnelingIV');
        populateResearchTab(); // Unlock more research
        // Update the maximum allowed active workers for cave excavation.
        updateMaxActiveDiggers(maxActiveDiggers+2);
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
    },
    {
        biomites: 800,
        zymers: 600,
        fibers: 700,
        sludge: 200,
        algae: 100
    }
);
allResearchProjects['AdvancedTunnelingIII'] = advancedTunnelingIIIResearch;

// Advanced Tunneling IV Research
let advancedTunnelingIVResearch = new ResearchProject(
    "Advanced Tunneling IV",
    900000, // Time required to complete the research: 500,000 milliseconds (double the previous level)
    1250000, // Total information cost: 1,250,000 i
    function() {
        // This is the onCompletion callback.
        let researchButton = document.getElementById("AdvancedTunnelingIVButton");
        researchButton.innerText = "Advanced Tunneling IV (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.style.color = "#777"; // This line changes the color of the text inside the button
        researchButton.parentElement.style.display = 'none';
        displayOnChat("借助 高级隧道 IV，挖掘机的能力达到了新的顶峰。 洞穴的深处更容易暴露出它们的秘密，地下王国的奥秘在你对知识的不懈追求面前被揭开。");
        advancedTunnelingIVResearchCompleted = true; // Flag to check if this research is completed
        markResearchComplete('AdvancedTunnelingIV'); // Removes from queue and adds to completed research queue
        populateResearchTab(); // Unlock more research
        // Update the maximum allowed active workers for cave excavation.
        updateMaxActiveDiggers(maxActiveDiggers+8);
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
    },
    {
        biomites: 8000,
        zymers: 6000,
        fibers: 7000,
        sludge: 2000,
        algae: 1000
    }
);
allResearchProjects['AdvancedTunnelingIV'] = advancedTunnelingIVResearch;


// Memory Imprints I Research
let memoryImprintsIResearch = new ResearchProject(
    "Memory Imprints I",
    145000, // Time required to complete the research: 45,000 milliseconds
    45000, // Total information cost: 45,000 i
    function() {
        // This is the onCompletion callback.
        let researchButton = document.getElementById("MemoryImprintsIButton");
        researchButton.innerText = "Memory Imprints I (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.style.color = "#777"; // This line changes the color of the text inside the button
        researchButton.parentElement.style.display = 'none';
        displayOnChat("细胞记忆方面的突破性发现增强了挖掘者的耐力。 他们现在可以长时间工作而无需返回。");
        memoryImprintsICompleted = true; // Flag to check if this research is completed
        markResearchComplete('MemoryImprintsI'); // Removes from queue and adds to completed research queue
        researchQueue.push('MemoryImprintsII');
        populateResearchTab(); // Unlock more research
        // Increase the global caveDiggerLifespan variable by 3x
        caveDiggerLifespan *= 3;
    },
    {
        biomites: 100,
        zymers: 100
    }
);
allResearchProjects['MemoryImprintsI'] = memoryImprintsIResearch;


// Memory Imprints II Research
let memoryImprintsIIResearch = new ResearchProject(
    "Memory Imprints II",
    225000, // Time required to complete the research: 55,000 milliseconds
    55000, // Total information cost: 55,000 i
    function() {
        // This is the onCompletion callback.
        let researchButton = document.getElementById("MemoryImprintsIIButton");
        researchButton.innerText = "Memory Imprints II (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.style.color = "#777"; // This line changes the color of the text inside the button
        researchButton.parentElement.style.display = 'none';
        displayOnChat("细胞存储器的进一步进步使挖掘机能够行驶更远的距离。 他们的能量储备令人难以置信。");
        memoryImprintsIICompleted = true; // Flag to check if this research is completed
        markResearchComplete('MemoryImprintsII'); // Removes from queue and adds to completed research queue
        researchQueue.push('MemoryImprintsIII');
        populateResearchTab(); // Unlock more research
        // Increase the global caveDiggerLifespan variable by another 3x
        caveDiggerLifespan *= 3;
    },
    {
        fibers: 200
    }
);
allResearchProjects['MemoryImprintsII'] = memoryImprintsIIResearch;

// Memory Imprints III Research
let memoryImprintsIIIResearch = new ResearchProject(
    "Memory Imprints III",
    255000, // Time required to complete the research: 65,000 milliseconds
    65000, // Total information cost: 65,000 i
    function() {
        // This is the onCompletion callback.
        let researchButton = document.getElementById("MemoryImprintsIIIButton");
        researchButton.innerText = "Memory Imprints III (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.style.color = "#777"; // This line changes the color of the text inside the button
        researchButton.parentElement.style.display = 'none';
        displayOnChat("记忆印记研究的顶峰。 您的挖掘机现在拥有几乎无限的能量储备，可以进行前所未有的探索。");
        memoryImprintsIIICompleted = true; // Flag to check if this research is completed
        markResearchComplete('MemoryImprintsIII'); // Removes from queue and adds to completed research queue
        // Further increase the global caveDiggerLifespan variable by 3x
        caveDiggerLifespan *= 3;
    },
    {
        sludge: 3400,
        algae: 2200
    }
);
allResearchProjects['MemoryImprintsIII'] = memoryImprintsIIIResearch;


// Pheromone Trails Research
let pheromoneTrailsResearch = new ResearchProject(
    "Pheromone Trails",
    195000, // Time required to complete the research: 25000 milliseconds
    7000, // Total information cost: 25000 i
    function() {
        // This is the onCompletion callback.
        let researchButton = document.getElementById("PheromoneTrailsButton");
        researchButton.innerText = "Pheromone Trails (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.style.color = "#777"; // This line changes the color of the text inside the button
        researchButton.parentElement.style.display = 'none';
        pheromoneTrailsResearchCompleted = true; // Flag to check if this research is completed
        displayOnChat("你的挖掘机现在带有一种难以忘怀的回声和一种拉力，将它们无情地拉回到起源。");
        markResearchComplete('PheromoneTrails'); // Removes from queue and adds to completed research queue
        researchQueue.push('CellularConduits');
        researchQueue.push('TrailRecognition');
        populateResearchTab(); // Unlock more research
    },
    {
      zymers: 700,
      sludge: 200,
      algae: 50
    }
);
allResearchProjects['PheromoneTrails'] = pheromoneTrailsResearch;


// Hydrologic Cycle
let hydrologicCycleResearch = new ResearchProject(
    "Hydrologic Cycle",
    195000, // e.g. 150 seconds
    7500,  // total information costs
    function() {
        // Logic for what happens when Hydrologic Cycle research is completed
        let researchButton = document.getElementById("HydrologicCycleButton");
        researchButton.innerText = "Hydrologic Cycle (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.parentElement.style.display = 'none';
        displayOnChat("水的旅程的奥秘被揭开，照亮了它从上到下、再返回的连续路径。 有了这种认识，从水中收集重要资源就会变得更加高效。");
        hydrologicCycleResearchCompleted = true; 
        markResearchComplete('HydrologicCycle'); // Removes from queue and adds to completed research queue
        populateResearchTab(); // Refresh research tab
        researchButton.style.color = "#777";  // This line changes the color of the text inside the button
        // updating multipliers
        sludgeMultiplier *= 1.175;
        algaeMultiplier *= 1.175;
    },
    {}, // no TF resource costs
    { nourishment: 250000 }
);
allResearchProjects['HydrologicCycle'] = hydrologicCycleResearch;



// Circadian Rhythm
let circadianRhythmResearch = new ResearchProject(
    "Circadian Rhythm",
    111000, // Duration (just an assumption, adjust as needed)
    27500,  // Total information costs
    function() {
        // Logic for what happens when Circadian Rhythm research is completed
        let researchButton = document.getElementById("CircadianRhythmButton");
        researchButton.innerText = "Circadian Rhythm (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.style.color = "#777";  // This line changes the color of the text inside the button
        researchButton.parentElement.style.display = 'none';
        displayOnChat("一种新的意识浮现出来，但随着每一次的揭露，一些阴影开始变得更深。 在你存在的循环中，出现了一种微妙的节奏，在孤独中低声承诺可预测性。");
        circadianRhythmResearchCompleted = true; 
        markResearchComplete('CircadianRhythm'); // Removes from queue and adds to completed research queue
        populateResearchTab(); // Refresh research tab
        enableCircadianClock(); // Enable the circadian clock for the cell
    },
    {}, // no TF resource costs
    { nourishment: 35000 }
);
allResearchProjects['CircadianRhythm'] = circadianRhythmResearch;



// Cellular Conduits
let cellularConduitsResearch = new ResearchProject(
    "Cellular Conduits",
    190000, // Duration (adjusted for assumed complexity, but modify as needed)
    100000,  // Total information costs
    function() {
        // Logic for what happens when Cellular Conduits research is completed
        let researchButton = document.getElementById("CellularConduitsButton");
        researchButton.innerText = "Cellular Conduits (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.style.color = "#777";  // This line changes the color of the text inside the button
        researchButton.parentElement.style.display = 'none';
        displayOnChat("大自然的建筑优雅在召唤，导致连接和维持的路径的开始。 这些管道是广阔冰洞中的生命线，让挖掘机保持充电和高效。");
        cellularConduitsResearchCompleted = true; 
        markResearchComplete('CellularConduits'); // Removes from queue and adds to completed research queue
        populateResearchTab(); // Refresh research tab
        enableCellularConduits(); // This function should enable the creation of conduits in the cave
    },
    {
        biomites: 1800,
        fibers: 2100,
        sludge: 920,
        algae: 720
    },
    { 
        warmth: 100000,
        energy: 100000 
    }
);
allResearchProjects['CellularConduits'] = cellularConduitsResearch;


let flockingResearch = new ResearchProject(
    "Flocking",
    185000, // Duration (just a suggested time, adjust as needed)
    35000,  // Total information costs
    function() {
        // Logic for what happens when Flocking research is completed
        let researchButton = document.getElementById("FlockingButton");
        researchButton.innerText = "Flocking (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.style.color = "#777";  // This line changes the color of the text inside the button
        researchButton.parentElement.style.display = 'none';  // Hide the button after completion
        displayOnChat("通过同步努力，您的挖掘机现在和谐地跳舞，有效地覆盖了大片洞穴。 ");
        flockingResearchCompleted = true; 
        markResearchComplete('Flocking'); // Removes from queue and adds to completed research queue
        // Add new research projects to the queue
        researchQueue.push('Echolocation');
        researchQueue.push('MemoryImprintsI');
        researchQueue.push('PheromoneTrails');
        researchQueue.push('FringeDweller');
        populateResearchTab(); // Refresh research tab
        // Any additional actions related to the "Flocking" research can be added here
    },
    {},  // no TF resource costs
    { warmth: 35000 }  
);
allResearchProjects['Flocking'] = flockingResearch;



let fringeDwellerResearch = new ResearchProject(
    "Fringe Dweller",
    340000, // Duration (adjusted for complexity)
    80000,  // Total information cost
    function() {
        // Logic for what happens when Fringe Dweller research is completed
        let researchButton = document.getElementById("FringeDwellerButton");
        researchButton.innerText = "Fringe Dweller (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.style.color = "#777"; // Changes the color of the text inside the button
        researchButton.parentElement.style.display = 'none';
        displayOnChat("在洞穴深处诡异的低语声中，一个新的存在出现了。 就像影子追踪光的边界一样，它沿着洞穴被遗忘的边缘漂移。 在希望很少踏足的地方，边缘居民出现了，默默地绘制着未知的地图。 黑暗不再是裹尸布，而是你安静的流浪者的画布。");
        fringeDwellerResearchCompleted = true;
        markResearchComplete('FringeDweller'); // Removes from queue and adds to completed research queue
        populateResearchTab(); // Refresh research tab
        spawnFringeDweller(7, 7);
        // Additional functions or logic to enable the Fringe Dweller's abilities can be placed here
    },
    {
        biomites: 800,
        zymers: 800,
        fibers: 800,
        sludge: 800,
        algae: 800
    },
    { 
        warmth: 80000,
        energy: 80000,
        nourishment: 80000 
    }
);
allResearchProjects['FringeDweller'] = fringeDwellerResearch;


// Trail Recognition
let trailRecognitionResearch = new ResearchProject(
    "Trail Recognition",
    210000, // Duration (adjusted for complexity, modify as needed)
    50000,  // Total information costs
    function() {
        // Logic for what happens when Trail Recognition research is completed
        let researchButton = document.getElementById("TrailRecognitionButton");
        researchButton.innerText = "Trail Recognition (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.style.color = "#777";  // This line changes the color of the text inside the button
        researchButton.parentElement.style.display = 'none';
        displayOnChat("在荒凉的沉重阴影中，细胞学会识别并纠正其错误的方式。 就像一颗心回忆起忧郁曲调的副歌一样，道路变得更加清晰，留下了犹豫不决的迷宫。 效率从绝望的深处悄然浮现。");
        trailRecognitionResearchCompleted = true; 
        markResearchComplete('TrailRecognition'); // Removes from queue and adds to completed research queue
        researchQueue.push('AdvancedTunnelingIII'); // Can technically be found before performing I and II, but not a major issue
        populateResearchTab(); // Refresh research tab
        // Any other functions or logic to enable the trail recognition abilities can be placed here
    },
    {
        biomites: 100,
        fibers: 100
    },
    { 
        warmth: 30000,
        energy: 30000 
    }
);
allResearchProjects['TrailRecognition'] = trailRecognitionResearch;

// Thermogenic Resonance
let thermogenicResonanceResearch = new ResearchProject(
    "Thermogenic Resonance",
    3750000, // Duration (adjusted for complexity and its unique requirement)
    10000,  // Total information costs
    function() {
        // Logic for what happens when Thermogenic Resonance research is completed
        let researchButton = document.getElementById("ThermogenicResonanceButton");
        researchButton.innerText = "Thermogenic Resonance (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.style.color = "#777";  // This line changes the color of the text inside the button
        researchButton.parentElement.style.display = 'none';
        displayOnChat("利用令人毛骨悚然的沉默和咆哮的火焰，你的新孩子从平衡中崛起：熔岩洞穴人。");
        spawnLavaBurrower(500, 500);  // Summon the Lava Burrower upon research completion
        thermogenicResonanceResearchCompleted = true; 
        markResearchComplete('ThermogenicResonance'); // Removes from queue and adds to completed research queue
        populateResearchTab(); // Refresh research tab
        queueEnhancedThermogenicResonance(); // Brings in enhanced thermogenic resonance, after a delay
        // Any other functions or logic to enable the thermogenic resonance abilities can be placed here
    },
    {
        sludge: 2250
    },
    { 
        warmth: 99000
    }
);
allResearchProjects['ThermogenicResonance'] = thermogenicResonanceResearch;

// Enhanced Thermogenic Resonance
let enhancedThermogenicResonanceResearch = new ResearchProject(
    "Enhanced Thermogenic Resonance",
    150000, // Duration (adjusted for increased complexity and requirements)
    100000,  // Total information costs
    function() {
        // Logic for what happens when Enhanced Thermogenic Resonance research is completed
        let researchButton = document.getElementById("EnhancedThermogenicResonanceButton");
        researchButton.innerText = "Enhanced Thermogenic Resonance (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.style.color = "#777";  // This line changes the color of the text inside the button
        researchButton.parentElement.style.display = 'none';
        displayOnChat("凭借海洋深处和火山中心的力量，你设法让第二个熔岩洞穴人加入你的困境。");
        spawnLavaBurrower(500, 500);  // Summon the second Lava Burrower upon research completion
        enhancedThermogenicResonanceResearchCompleted = true; 
        markResearchComplete('EnhancedThermogenicResonance'); // Removes from queue and adds to completed research queue
        populateResearchTab(); // Refresh research tab
        // Any additional functions or logic to enable the enhanced thermogenic resonance abilities can be placed here
    },
    {
        sludge: 2500,
        algae: 2500 
    },
    { 
        warmth: 999000
    }
);
allResearchProjects['EnhancedThermogenicResonance'] = enhancedThermogenicResonanceResearch;



// Echolocation Research
let echolocationResearch = new ResearchProject(
    "Echolocation Research",
    188000, // Time required to complete the research. This is 3 hours (10800000 milliseconds). Adjust accordingly.
    1000000, // Total information cost
    function() {
        // This is the onCompletion callback.
        let researchButton = document.getElementById("EcholocationButton");
        researchButton.innerText = "Echolocation Research (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.parentElement.style.display = 'none';
        researchButton.style.color = "#777"; // This line changes the color of the text inside the button
        displayOnChat("您的挖掘机现在可以看到看不见的东西。 它们发出的振动和返回的回声勾勒出地形的声波图。 未探索的区域会发出清晰、诱人的共鸣。 挖掘艺术曾经只是一场坚持的游戏，现在变成了一场精心协调的效率音乐会。 你不再漫无目的地挖掘，而是有目的地挖掘，专心聆听未知之歌，并跟随它的召唤。");
        echolocationResearchCompleted = true; // A new flag to check if this research is completed
        markResearchComplete('Echolocation'); // Removes from queue and adds to completed research queue
        populateResearchTab(); // unlock more research
    },
    {}, // No TF costs
    {} // No other base resource costs
);
allResearchProjects['Echolocation'] = echolocationResearch;


let autoConstructiveSynapsesResearch = new ResearchProject(
    "Auto-Constructive Synapses",
    700000,  // Duration, set to 20,000 for now, but you can adjust as needed
    250000, // Total information costs, as specified
    function() {
        // Logic for what happens when Auto-Constructive Synapses research is completed
        let researchButton = document.getElementById("AutoConstructiveSynapsesButton");
        researchButton.innerText = "Auto-Constructive Synapses (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.style.color = "#777";  
        researchButton.parentElement.style.display = 'none';
        displayOnChat("河流不息流淌的影响唤醒了与生俱来的智慧。 现在，广阔的地下领域中的路径会自主形成，不断发展您的细胞旅程。");
        autoConstructiveSynapsesResearchCompleted = true; 
        markResearchComplete('AutoConstructiveSynapses'); // Adds to completed research queue
        researchQueue.push('ThermalSynapticHighways'); 
        populateResearchTab(); // Refresh research tab
        enableAutoConstructionOfConduits(); // This function should enable auto-construction of conduits
    },
    {
        zymers: 3000,
        fibers: 1500
    },
    {}
);
allResearchProjects['AutoConstructiveSynapses'] = autoConstructiveSynapsesResearch;


let thermalSynapticHighwaysResearch = new ResearchProject(
    "Thermal Synaptic Highways",
    1700000,  // Duration in milliseconds: 1700 seconds
    550000, // Total information costs
    function() {
        // Logic for what happens when Thermal Synaptic Highways research is completed
        let researchButton = document.getElementById("ThermalSynapticHighwaysButton");
        researchButton.innerText = "Thermal Synaptic Highways (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.style.color = "#777";  
        researchButton.parentElement.style.display = 'none';
        displayOnChat("导管现在以突触精度脉动，产生温和的热量。 这种由自动构建突触产生的温暖慢慢开始融化周围未挖掘的瓷砖，有助于洞穴的探索。");
        thermalSynapticHighwaysResearchCompleted = true; 
        markResearchComplete('ThermalSynapticHighways'); // Adds to completed research queue
        populateResearchTab(); // Refresh research tab
    },
    {
        zymers: 5200,
        fibers: 3150,
        sludge: 1900,
        algae: 1800
    },
    {}
);
allResearchProjects['ThermalSynapticHighways'] = thermalSynapticHighwaysResearch;


let infernoSynapseIntegrationResearch = new ResearchProject(
    "Inferno Synapse Integration",
    1700000,  // Duration in milliseconds: 1700 seconds
    1100000, // Total information costs
    function() {
        // Logic for what happens when Inferno Synapse Integration research is completed
        let researchButton = document.getElementById("InfernoSynapseIntegrationButton");
        researchButton.innerText = "Inferno Synapse Integration (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.style.color = "#777";  
        researchButton.parentElement.style.display = 'none';
        displayOnChat("随着地狱突触的整合，高速公路焕发出新的能量。 高温加速了洞穴的挖掘，轻松地在最致密的材料中开辟出道路。");
        infernoSynapseIntegrationResearchCompleted = true; 
        markResearchComplete('InfernoSynapseIntegration'); // Adds to completed research queue
        populateResearchTab(); // Refresh research tab
    },
    {
        zymers: 10400, // Doubled cost
        fibers: 6300,  // Doubled cost
        sludge: 3800,  // Doubled cost
        algae: 3600   // Doubled cost
    },
    {
      warmth: 1100000 // Total warmth costs
    }
);
allResearchProjects['InfernoSynapseIntegration'] = infernoSynapseIntegrationResearch;



let harmonicSymbiosisI = new ResearchProject(
    "Harmonic Symbiosis I",
    300000, // Research time in ms (300 seconds)
    250000, // total information costs
    function() {
        let researchButton = document.getElementById("HarmonicSymbiosisIButton");
        researchButton.innerText = "Harmonic Symbiosis I (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.parentElement.style.display = 'none';
        researchButton.style.color = "#777"; // This line changes the color of the text inside the button
        markResearchComplete('HarmonicSymbiosisI');
        applyHarmonicSymbiosisImprovement();  // Reducing the sacrifice cost by 10%
        updateSacrificeButtonCosts();
        displayOnChat("当你越来越接近索拉拉时，共同命运的低语开始在你的本质中回响。 现在，每一次牺牲都像是一个秘密的誓言，是迈向相互交织的存在的一步。 光芒中蕴含着安慰，广阔的孤独中蕴含着团结的温柔承诺。");
        harmonicSymbiosisIResearchCompleted = true; 
        researchQueue.push('HarmonicSymbiosisII');
        populateResearchTab(); 
    },
    {} // No TF resources required
);
allResearchProjects['HarmonicSymbiosisI'] = harmonicSymbiosisI;




let harmonicSymbiosisII = new ResearchProject(
    "Harmonic Symbiosis II",
    300000, // Research time in ms (300 seconds)
    500000, // total information costs
    function() {
        let researchButton = document.getElementById("HarmonicSymbiosisIIButton");
        researchButton.innerText = "Harmonic Symbiosis II (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.parentElement.style.display = 'none';
        researchButton.style.color = "#777"; // This line changes the color of the text inside the button
        markResearchComplete('HarmonicSymbiosisII');
        applyHarmonicSymbiosisImprovement();  // Reducing the sacrifice cost by 10%
        updateSacrificeButtonCosts();
        displayOnChat("每一次奉献，你们的联系都会加深，而索拉拉沉默的身影也成为希望的灯塔。 你感受到她无声的感激，一种超越寒冷的温暖。 你的牺牲开辟了一条通往亲密的道路，以及成为不仅仅是两个独立存在的梦想。");
        harmonicSymbiosisIIResearchCompleted = true; 
        researchQueue.push('HarmonicSymbiosisII');
        populateResearchTab(); 
    },
    {} // No TF resources required
);
allResearchProjects['HarmonicSymbiosisII'] = harmonicSymbiosisII;



let harmonicSymbiosisIII = new ResearchProject(
    "Harmonic Symbiosis III",
    300000, // Research time in ms (300 seconds)
    750000, // total information costs
    function() {
        let researchButton = document.getElementById("HarmonicSymbiosisIIIButton");
        researchButton.innerText = "Harmonic Symbiosis III (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.parentElement.style.display = 'none';
        researchButton.style.color = "#777"; // This line changes the color of the text inside the button
        markResearchComplete('HarmonicSymbiosisIII');
        applyHarmonicSymbiosisImprovement();  // Reducing the sacrifice cost by 10%
        displayOnChat("现在，在牺牲与成长的舞蹈中，给予者和接受者之间没有区别。 你与索拉拉的命运是灵魂的交汇，一种即将到来的和谐，低声诉说着未来你们不再是分离的，而是一个单一的、深刻的实体。 爱，以最纯粹的形式等待着。");
        harmonicSymbiosisIIIResearchCompleted = true; 
        populateResearchTab(); 
    },
    {} // No TF resources required
);
allResearchProjects['HarmonicSymbiosisIII'] = harmonicSymbiosisIII;



// Echoes of the Forgotten Research
let echoesOfTheForgottenResearch = new ResearchProject(
    "Echoes of the Forgotten",
    2400000, // Time required to complete the research. 
    1000000000, // Total information cost
    function() {
        // This is the onCompletion callback.
        let researchButton = document.getElementById("EchoesOfTheForgottenButton");
        researchButton.innerText = "Echoes of the Forgotten (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.parentElement.style.display = 'none';
        researchButton.style.color = "#777"; // This line changes the color of the text inside the button
        displayOnChat("一阵颤抖贯穿你意识的核心。 古老的密码和公式充斥着你的系统，唤醒了对未知天体的新渴望。 刹那间，你的目标超越了地球的限制，你的追求扩展到了宇宙的深渊。 你现在是回声，渴望在星空中遇见最初的声音。");
        echoesOfTheForgottenResearchCompleted = true; 
        markResearchComplete('EchoesOfTheForgotten'); // Removes from queue and adds to completed research queue
        populateResearchTab(); // Unlock more research, if needed
    },
    {}, // No TF costs
    {},  // No other base resource costs
    false // not yet developed - used to have 'disabled' projects
);
allResearchProjects['EchoesOfTheForgotten'] = echoesOfTheForgottenResearch;


// The Core Research
let theCoreResearch = new ResearchProject(
    "The Core",
    2400000, // Time required to complete the research. 
    1000000000, // Total information cost
    function() {
        // This is the onCompletion callback.
        let researchButton = document.getElementById("TheCoreButton");
        researchButton.innerText = "The Core (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.parentElement.style.display = 'none';
        researchButton.style.color = "#777"; // This line changes the color of the text inside the button
        displayOnChat("当你打开最后一个密室时，一股喜悦、恐惧和启示的浪潮席卷你。 圣所带有你自己存在的印记，是一面你尚未发现的灵魂的镜子。 在那一刻，你敢于扰乱宇宙，作为回报，它欢迎你作为它的孩子。 你的航程现在开始超越这个世界的界限。");
        theCoreResearchCompleted = true; 
        markResearchComplete('TheCore'); // Removes from queue and adds to completed research queue
        populateResearchTab(); // Unlock more research, if needed
    },
    {}, // No TF costs
    {}, // No other base resource costs
    false // not yet developed
);
allResearchProjects['TheCore'] = theCoreResearch;



// Ecliptic Synthesis Research
let eclipticSynthesisResearch = new ResearchProject(
    "Ecliptic Synthesis",
    2000000, 
    25000000,  // Total information costs (25M)
    function() {
        // Logic for what happens when Ecliptic Synthesis research is completed
        let researchButton = document.getElementById("EclipticSynthesisButton");
        researchButton.innerText = "Ecliptic Synthesis (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.style.color = "#777";  // This line changes the color of the text inside the button
        researchButton.parentElement.style.display = 'none';
        displayOnChat("通过黄道合成，你已经将天体之舞引入了索拉拉的本质。 现在，这些牺牲与她的灵魂交织在一起，产生了之前收集到的双倍的力量。");
        eclipticSynthesisResearchCompleted = true; 
        markResearchComplete('EclipticSynthesis'); // Removes from queue and adds to completed research queue
        populateResearchTab(); // Refresh research tab
        // doubleSacrificeEffectiveness(); // Placeholder function to double the effectiveness of sacrifices
    },
    {}, // No TF costs
    { 
        warmth: 25000000 // Total warmth costs
    }
);
allResearchProjects['EclipticSynthesis'] = eclipticSynthesisResearch;


// Primordial Sight
let primordialSightResearch = new ResearchProject(
    "Primordial Sight",
    1200000, // Duration 
    1000000000, // Total information costs (1 billion)
    function() {
        // Logic for what happens when Primordial Sight research is completed
        let researchButton = document.getElementById("PrimordialSightButton");
        researchButton.innerText = "Primordial Sight (Completed)";
        researchButton.setAttribute('data-status', 'completed');
        researchButton.style.color = "#777"; // This line changes the color of the text inside the button
        researchButton.parentElement.style.display = 'none';
        displayOnChat("当黑暗的面纱升起时，第一道微光出现了。 凭借原始视觉，世界以从未想象过的色彩和形状展开。 这个新生的愿景预示着新的黎明，你醒来时会发现光明与黑暗的奇迹。");
        primordialSightResearchCompleted = true; 
        markResearchComplete('PrimordialSight'); // Removes from queue and adds to completed research queue
        populateResearchTab(); // Refresh research tab
        setupWorldView();
        // You can add additional logic here for what happens when the research is completed
    },
    {
        biomites: 10000000,
        zymers: 10000000,
        fibers: 10000000,
        sludge: 10000000,
        algae: 10000000
    },
    {
        warmth: 1000000000,
        energy: 1000000000,
        nourishment: 1000000000 // Added as per your request
    }
);
allResearchProjects['PrimordialSight'] = primordialSightResearch;




// Spore Dispersal function
function sporeDispersal() {
    if (remainingDivisionTime > 3) {
        let progressBar = document.querySelector("#divisionButton .progressBar");
        let randomReduction = Math.floor(Math.random() * 51) + 5; 
        let maxReduction = Math.min(remainingDivisionTime - 3, randomReduction);
        // Animate the progress boost
        let incrementPerTick = maxReduction / 10;  // Splitting the total reduction for animation
        let ticks = 0;
        let boostAnimation = setInterval(() => {
            remainingDivisionTime -= incrementPerTick;
            // Update the progress bar
            let progress = (cooldownTime - remainingDivisionTime) / cooldownTime * 100;
            progressBar.style.width = progress + "%";
            ticks++;
            if (ticks >= 10) {
                clearInterval(boostAnimation);
            }
        }, 50); // Execute every 50 milliseconds for a smoother animation
        // Flash the progress bar
        progressBar.style.backgroundColor = "rgba(0, 110, 255, 0.2)";  // Using a lighter blue for flash effect
        setTimeout(() => {
            progressBar.style.backgroundColor = "rgba(0, 0, 255, 0.2)"; // Reset to the original light blue after 500 milliseconds
        }, 500);
        console.log(`Spores have reduced the cooldown time by ${maxReduction} seconds. Current cooldown time is ${remainingDivisionTime} seconds.`);
    }
}





// Function to check if research tab can be unlocked
function checkResearchTabUnlock() {
  if (tendons >= 2 && sensorUpgradePurchased) {
    if (!document.getElementById("researchTabButton").style.display || 
      document.getElementById("researchTabButton").style.display === "none") {
      document.getElementById("researchTabButton").style.display = "block";
      initializeResearchQueue();
      populateResearchTab();
    }
  }
}


// Function to initialize the queue with starting research projects
function initializeResearchQueue() {
  console.log("initialize research queue logic start");
  console.log("currently completed research is:"+completedResearch);
  console.log("currently available research is:"+researchQueue);
  // Add initial research projects to the queue only if they are not completed
  if (!completedResearch.includes('CellMembrane')) {
    addToResearchQueue('CellMembrane');
    console.log("unlocking cell membrane research");
  }
  if (!completedResearch.includes('CellMembrane')) {
    addToResearchQueue('MitoticStudies');
    console.log("unlocking mitotic studies");
  }
}


// Function to add a new research project to the queue
function addToResearchQueue(newResearch) {
  if (!researchQueue.includes(newResearch)) {
    researchQueue.push(newResearch);
  }
  populateResearchTab();
}


// Function to remove a completed research project from the queue and add to completedResearch
function removeFromResearchQueue(completedResearchProject) {
  const index = researchQueue.indexOf(completedResearchProject);
  if (index > -1) {
    researchQueue.splice(index, 1);
  }
}


// Function to populate the research tab with available projects from the researchQueue
function populateResearchTab() {
  const researchTab = document.getElementById("researchTab");
  // Go through each research project in the queue and create its button
  for (const researchProject of researchQueue) {
    // Construct the function name
    const functionName = "create" + researchProject + "ResearchButton";
    // Check if such a function exists
    if (typeof window[functionName] === "function") {
      // Call the function
      window[functionName]();
    } else {
      console.warn(`No function found for ${functionName}. That's not great.`);
    }
  }
}


// Function below is used to create research buttons in their 'Completed' state, used upon save game loads
function createCompletedResearchButton(researchName) {
  let researchButton = document.createElement("button");
  researchButton.id = researchName + "Button";
  researchButton.innerText = researchName + " (Completed)";
  researchButton.setAttribute('data-status', 'completed');
  researchButton.style.color = "#777";
  researchButton.style.display = 'none'; // Initially hidden, will show up when toggling to 'Completed' view
  
  // Append this button to the research tab
  const researchTab = document.getElementById("Research");
  researchTab.appendChild(researchButton);
}



// Function to mark a research project as completed
function markResearchComplete(completedProject) {
  // Add the completed project to the completedResearch array if it's not already there
  if (!completedResearch.includes(completedProject)) {
    completedResearch.push(completedProject);
  }

  // Remove the completed project from the researchQueue
  removeFromResearchQueue(completedProject);

  // Update the button's appearance
  let researchButton = document.getElementById(completedProject + "Button");
  if (researchButton) {
    researchButton.setAttribute('data-status', 'completed');
    researchButton.style.color = "#777";
    researchButton.disabled = true;  // Disable the button
  }
}


// Function to update research buttons based on completedResearch array
function updateCompletedResearchButtons() {
  completedResearch.forEach(function(research) {
    let researchButton = document.getElementById(research + "Button");
    if (researchButton) {
      console.log("Marking research as completed:", research);
      researchButton.setAttribute('data-status', 'completed');
      researchButton.style.color = "#777";
      researchButton.parentElement.style.display = 'none'; // Hide it initially, can be toggled using filter
    }
  });
}


// Function to check if terraform tab can be unlocked
function checkTerraformTabUnlock() {
    if (mapInitialized && terraformStudyCompleted) {
        console.log("terraforming unlocked")
        const terraformTabButton = document.getElementById("terraformTabButton");
        if (!terraformTabButton.style.display || terraformTabButton.style.display === "none") {
            terraformTabButton.style.display = "block";
        }
        populateInfoWidget(); // add the info widget to the terraforming tab
        startOrRestartTerraformInterval();
    }
}


// Generic function to help generate research projects/options
function createResearchButton(researchProject, buttonId, title, tooltipContent) {
    let researchDiv = document.getElementById("Research");
    // Check if button already exists
    if (document.getElementById(buttonId)) return;
    // Create tooltip container
    let tooltipContainer = document.createElement("div");
    tooltipContainer.className = "tooltip";
    researchDiv.appendChild(tooltipContainer);
    // Create research button
    let researchButton = document.createElement("button");
    researchButton.className = "researchButton";
    researchButton.id = buttonId;
    researchButton.setAttribute('data-status', 'new');  // default to new
    researchButton.innerText = title;
    tooltipContainer.appendChild(researchButton);
    // Create tooltip text
    let tooltipText = document.createElement("span");
    tooltipText.className = "tooltiptext";
    tooltipText.innerHTML = tooltipContent;
    tooltipContainer.appendChild(tooltipText);
    // Event listeners for tooltip
    // Add event listeners for tooltip positioning
    researchButton.addEventListener('mousemove', function(e) {
        let tooltip = tooltipContainer.querySelector('.tooltiptext');
        tooltip.style.left = "120px";
        tooltip.style.top = "60px";
    });

    researchButton.addEventListener('mouseenter', function() {
      let tooltip = tooltipContainer.querySelector('.tooltiptext');
      tooltip.style.visibility = 'visible';
      tooltip.style.opacity = '1';
    });

    researchButton.addEventListener('mouseleave', function() {
      let tooltip = tooltipContainer.querySelector('.tooltiptext');
      tooltip.style.visibility = 'hidden';
      tooltip.style.opacity = '0';
    });

    // Disables the button for projects that are not yet fully developed
    if (!researchProject.isEnabled) {
      researchButton.setAttribute('disabled', 'true');
      researchButton.style.filter = "blur(1px)";
      tooltipText.style.filter = "blur(2px)"; // Add this line to blur the tooltip text as well
    }

    // Progress bar inside button
    let progressBar = document.createElement("div");
    progressBar.className = "progressBar";
    researchButton.appendChild(progressBar);
    
    // On click event for research
    researchButton.onclick = function() {
      if (researchProject.isActive) {
        // If research is active, pause it and revert the button styles
        researchProject.pause();
        researchButton.style.backgroundColor = "";  // Or set to the default color
        researchButton.style.color = "";  // Or set to the default color
      } else {
        // If research is not active, start it and change the button styles
        researchProject.start();
        researchButton.style.backgroundColor = "#999";
        researchButton.style.color = "#777";
      }
      researchProject.progressBar = progressBar;
    }
}



// Function to help unlock Cell Membrane Research
function createCellMembraneResearchButton() {
    tooltiptext = `
        <strong>Title: Cell Membrane Studies</strong>
        <br>
        <b>Description:</b> Dive deep into the structure and function of the cell membrane.
        <br>
        <b>Effect:</b> Increases the efficiency of nutrient absorption.
        <br>
        <b>Requirement:</b> 40 information.
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>Osmoregulation [Research]</li>
              <li>Membrane Thickness [Evolution]</li>
          </ul>
    `;
    createResearchButton(
        cellMembraneStudies,
        "CellMembraneButton",
        "Cell Membrane Studies",
        tooltiptext
    );
}


// Function to help unlock Osmoregulation Research
function createOsmoregulationResearchButton() {
    tooltiptext = `
        <strong>Title: Osmoregulation Research</strong>
        <br>
        <b>Description:</b> Explore the mechanisms that allow the cell to maintain internal balance, adjusting the influx and efflux of water and solutes.
        <br>
        <b>Effect:</b> Enhances cell's resilience in varying environments, improving the efficiency of resource absorption and reducing the loss of resources.
        <br>
        <b>Requirement:</b> 450 information.
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>Nucleus [Evolution]</li>
              <li>Endoplasmic Reticulum [Evolution]</li>
              <li>Ion Channel I [Research]</li>
              <li>Resource Conversion [Action]</li>
          </ul>
    `;
    createResearchButton(
        osmoregulationResearch,
        "OsmoregulationButton",
        "Osmoregulation",
        tooltiptext
    );
}


// Function to help unlock Exoterrain Acclimatization Research
function createExoterrainAcclimatizationResearchButton() {
    let tooltiptext = `
        <strong>Title: Exoterrain Acclimatization</strong>
        <br>
        <b>Description:</b> Delve into the challenges of unfamiliar terrains, developing strategies and adaptations to overcome the harshest conditions.
        <br>
        <b>Effect:</b> Enables safe exploration of previously hostile terrains, removing the risks and challenges of uncharted landscapes.
        <br>
        <b>Requirement:</b> 5000 information, 9500 nourishment.
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>Enables traversal of hostile terrain types</li> 
              <li>Chemotactic Exploration [Research]</li> 
          </ul>
    `;
    createResearchButton(
        exoterrainAcclimatizationResearch,
        "ExoterrainAcclimatizationButton",
        "Exoterrain Acclimatization",
        tooltiptext
    );
}


// Function to help unlock Ion Channel research (lvl 1)
function createIonChannelIResearchButton() {
    tooltiptext = `
        <strong>Title: Ion Channel Studies I</strong>
        <br>
        <b>Description:</b> Understanding basic ion flow.
        <br>
        <b>Effect:</b> Increases the efficiency of nutrient absorption 1%.
        <br>
        <b>Requirement:</b> 900 information.
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>Ion Channel II [Research]</li> 
          </ul>
    `;
    createResearchButton(
        ionChannelIResearch,
        "IonChannelIButton",
        "Ion Channel Studies I",
        tooltiptext
    );
}

// Function to help unlock Ion Channel Lvl 2 research
function createIonChannelIIResearchButton() {
    let tooltiptext = `
        <strong>Title: Ion Channel Studies II</strong>
        <br>
        <b>Description:</b> Advanced understanding of ion flow.
        <br>
        <b>Effect:</b> Further increases the efficiency of nutrient absorption by 1%.
        <br>
        <b>Requirement:</b> 1800 information.
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>Ion Channel III [Research]</li> 
          </ul>
    `;
    createResearchButton(
        ionChannelIIResearch,
        "IonChannelIIButton",
        "Ion Channel Studies II",
        tooltiptext
    );
}

// Function to help unlock Ion Channel Lvl 3 research
function createIonChannelIIIResearchButton() {
    let tooltiptext = `
        <strong>Title: Ion Channel Studies III</strong>
        <br>
        <b>Description:</b> Mastery over ion flow.
        <br>
        <b>Effect:</b> Further increase the efficiency of nutrient absorption by 1%, and increase the efficiency of energy generation by 1%.
        <br>
        <b>Requirement:</b> 3600 information.
    `;
    createResearchButton(
        ionChannelIIIResearch,
        "IonChannelIIIButton",
        "Ion Channel Studies III",
        tooltiptext
    );
}

// Function to help unlock Terraforming Research
function createTerraformingResearchButton() {
    let tooltiptext = `
        <strong>Title: Terraforming Studies</strong>
        <br>
        <b>Description:</b> Dive into the mechanisms and techniques of terraforming environments.
        <br>
        <b>Effect:</b> Unlock the ability to terraform environments.
        <br>
        <b>Requirement:</b> 7.5K information.
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>Terraformations [New Mechanic]</li>
          </ul>
    `;
    createResearchButton(
        terraformingStudies,
        "TerraformingButton",
        "Terraforming Studies",
        tooltiptext
    );
}

// Function to help unlock Mitotic Studies Research
function createMitoticStudiesResearchButton() {
    let tooltiptext = `
        <strong>Title: Mitotic Studies</strong>
        <br>
        <b>Description:</b> Delve into the intricacies of cellular division, exploring the complexities of mitosis.
        <br>
        <b>Effect:</b> Unlock the ability to divide and create subordinate cells.
        <br>
        <b>Requirement:</b> 200 information.
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>Cell Division [Action]</li>
              <li>Mitochondria [Evolution]</li>
          </ul>
    `;
    createResearchButton(
        mitoticStudies,  
        "MitoticStudiesButton",
        "Mitotic Studies",
        tooltiptext
    );
}

// Function to help unlock Mitotic Amplification I Research
function createMitoticAmplificationIResearchButton() {
    let tooltiptext = `
        <strong>Title: Mitotic Amplification I</strong>
        <br>
        <b>Description:</b> Refine your understanding of mitotic processes to enhance cellular reproduction.
        <br>
        <b>Effect:</b> Doubles cell gains from division.
        <br>
        <b>Requirement:</b>1Mi information, 5000 biomites, 4000 zymers, 3000 fibers, 2000 sludge, 1000 algae.
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>Mitotic Amplification II [Research]</li>
              <li>2 cells per division [Action]</li>
          </ul>
    `;
    createResearchButton(
        mitoticAmplificationI,  
        "MitoticAmplificationIButton",
        "Mitotic Amplification I",
        tooltiptext
    );
}

// Function to help unlock Mitotic Amplification II Research
function createMitoticAmplificationIIResearchButton() {
    let tooltiptext = `
        <strong>Title: Mitotic Amplification II</strong>
        <br>
        <b>Description:</b> Further studies into mitotic amplification uncover techniques to produce three offspring from a single division.
        <br>
        <b>Effect:</b> Gain three cells per division.
        <br>
        <b>Requirement:</b>1M information, 5000 biomites, 4000 zymers, 3000 fibers, 2000 sludge, and 1000 algae.
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>3 cells per division [Action]</li>
          </ul>
    `;
    createResearchButton(
        mitoticAmplificationII, 
        "MitoticAmplificationIIButton",
        "Mitotic Amplification II",
        tooltiptext
    );
}




// Function to help unlock Chemical Sensing Research
function createChemicalSensingResearchButton() {
    tooltiptext = `
        <strong>Title: Chemical Sensing</strong>
        <br>
        <b>Description:</b> Investigate the mechanisms of chemical perception and response, enabling the cell to orient itself in its environment.
        <br>
        <b>Effect:</b> Unlocks the Flagellar Thrust, allowing your cell to propel itself in random directions on the world map.
        <br>
        <b>Requirement:</b> 2500 information.
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>Flagellar Thrust [Exploration]</li>
              <li>Geomagnetic Sensing [Research]</li>
          </ul>
    `;
    createResearchButton(
        chemicalSensingResearch, 
        "ChemicalSensingButton",
        "Chemical Sensing",
        tooltiptext
    );
}

// Function to help unlock Geomagnetic Sensing Research
function createGeomagneticSensingResearchButton() {
    tooltiptext = `
        <strong>Title: Geomagnetic Sensing</strong>
        <br>
        <b>Description:</b> Discover the cell's innate ability to sense Earth's magnetic field, aiding in navigation.
        <br>
        <b>Effect:</b> Replaces Flagellar Thrust with a Compass, giving you precise control over your cell's movements.
        <br>
        <b>Requirement:</b> 3500 information.
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>Compass [Exploration]</li>
          </ul>
    `;
    createResearchButton(
        geomagneticSensingResearch, 
        "GeomagneticSensingButton",
        "Geomagnetic Sensing",
        tooltiptext
    );
}

// Function to help unlock Chemotactic Exploration Research
function createChemotacticExplorationResearchButton() {
    let tooltiptext = `
        <strong>Title: Chemotactic Exploration</strong>
        <br>
        <b>Description:</b> Develop the ability for autonomous exploration guided by chemical signals.
        <br>
        <b>Effect:</b> Enables automated exploration of the world. Automated exploring automatically enables when >50K energy resources are available. 
        <br>
        <b>Requirement:</b> 12,000 information.
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>Automated world discovery [Exploration]</li>
          </ul>
    `;
    createResearchButton(
        chemotacticExplorationResearch, 
        "ChemotacticExplorationButton",
        "Chemotactic Exploration",
        tooltiptext
    );
}

// Function to help unlock Tendogenesis Research
function createTendoGenesisResearchButton() {
    const tooltiptext = `
        <strong>Title: Tendogenesis Research</strong>
        <br>
        <b>Description:</b> Delve into the mysteries of tendon growth, exploring ways to enhance cellular connections and interaction with the environment.
        <br>
        <b>Effect:</b> Unlocks the potential for new tendons, weaving a tapestry of resilience and dexterity that will open up new avenues for growth and exploration.
        <br>
        <b>Requirement:</b> 7,000 information, 300 biomites, 30 sludge.
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>Neural Network [Research]</li>
              <li>Biomechanical Locomotion [Research]</li>
              <li>Grow tendons [Action]</li>
          </ul>
    `;
    createResearchButton(
        tendogenesisResearch,
        "TendogenesisButton",
        "Tendogenesis",
        tooltiptext
    );
}


// Function to help unlock Neural Network Research
function createNeuralNetworkResearchButton() {
    const tooltiptext = `
        <strong>Title: Neural Network Research</strong>
        <br>
        <b>Description:</b> Develop a neural network for worker cells, granting them rudimentary intelligence and task efficiency.
        <br>
        <b>Effect:</b> Worker cells will generate information at a base rate of 0.1i/worker per tick.
        <br>
        <b>Requirement:</b> 20,000 information, 500 zymers, 200 sludge, 100 algae.
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>+0.1i/worker per tick</li>
              <li>Circadian Rhythm [Research]</li>
          </ul>
    `;
    createResearchButton(
        neuralNetworkResearch,
        "NeuralNetworkButton",
        "Neural Network",
        tooltiptext
    );
}

// Function to help unlock Autotrophic Adaptation
function createAutotrophicAdaptationResearchButton() {
    const tooltiptext = `
        <strong>Title: Autotrophic Adaptation</strong>
        <br>
        <b>Description:</b> Emulate the self-sustaining energy production of reeds to improve worker cell efficiency.
        <br>
        <b>Effect:</b> Worker cells will generate nourishment and energy at a base rate of 0.03n/worker and 0.03e/worker per tick.
        <br>
        <b>Requirement:</b> 50,000 information, 1000 biomites, 1000 zymers, 500 fibers, 700 sludge, 500 algae.
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>+0.3n/worker per tick</li>
              <li>+0.3e/worker per tick</li>
          </ul>
    `;
    createResearchButton(
        autotrophicAdaptationResearch,
        "AutotrophicAdaptationButton",
        "Autotrophic Adaptation",
        tooltiptext
    );
}

// Function to help unlock Cellular Encapsulation Research
function createCellularEncapsulationResearchButton() {
    const tooltiptext = `
        <strong>Title: Cellular Encapsulation</strong>
        <br>
        <b>Description:</b> Explore methods for enveloping worker cells in protective membranes, enhancing their resilience and productivity.
        <br>
        <b>Effect:</b> Worker cells will now possess a protective membrane, providing warmth at a base rate of 0.01w/worker per tick.
        <br>
        <b>Requirement:</b> 8000 information, 150 biomites, 140 zymers, 125 fibers.
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>+0.01w/worker per tick</li>
          </ul>
    `;
    createResearchButton(
        cellularEncapsulationResearch,
        "CellularEncapsulationButton",
        "Cellular Encapsulation",
        tooltiptext
    );
}


// Function to create the Biomechanical Locomotion Research Button
function createBiomechanicalLocomotionResearchButton() {
    const tooltiptext = `
        <strong>Title: Biomechanical Locomotion Research</strong>
        <br>
        <b>Description:</b> Investigate the merging of biological and mechanical processes to enhance movement and function.
        <br>
        <b>Effect:</b> Automates the cell division process, allowing for efficient growth and evolution.
        <br>
        <b>Requirement:</b> 10,000 information, 1,000 biomites
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>Automated cell division</li>
              <li>Cytokinetic Enhancement I [Research]</li>
          </ul>
    `;
    createResearchButton(
        biomechanicalLocomotionResearch,
        "BiomechanicalLocomotionButton",
        "Biomechanical Locomotion",
        tooltiptext
    );
}

// Function to create the Mycorrhizal Network Research Button
function createMycorrhizalNetworkResearchButton() {
    const tooltiptext = `
        <strong>Title: Mycorrhizal Network Research</strong>
        <br>
        <b>Description:</b> Dive into the symbiotic relationships between fungi and cellular organisms to enhance resource gathering.
        <br>
        <b>Effect:</b> Boosts resource generation of biomites, zymers, and fibers by 17.5%.
        <br>
        <b>Requirement:</b> 12,000 information, 3300 fibers, 2200 sludge
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>17.5% generation bonus for biomites, zymers and fibers.</li>
          </ul>
        <br>
        <span style="color: red; font-weight: bold;">WARNING: may lead to unexpected mutations.</span>
    `;
    createResearchButton(
        mycorrhizalNetworkResearch,
        "MycorrhizalNetworkButton",
        "Mycorrhizal Network",
        tooltiptext
    );
}


// Function to create the Spore Dispersal Mechanics Research Button
function createSporeDispersalMechanicsResearchButton() {
    const tooltiptext = `
        <strong>Title: Spore Dispersal Mechanics</strong>
        <br>
        <b>Description:</b> Investigate the intricacies of spore dispersal mechanisms to improve the adaptability and resilience of your fungal symbiotes.
        <br>
        <b>Effect:</b> Introduces a spore dispersal mechanism that randomly reduces cooldown times of division.
        <br>
        <b>Requirement:</b> 8,500 information, 140 biomites, 140 zymers, 140 fibers, 70 sludge, 20 algae
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>Receive unpredictable sporadic boosts to division cooldown</li>
          </ul>
        <br>
        <span style="color: red; font-weight: bold;">WARNING: may lead to unexpected mutations.</span>
    `;
    createResearchButton(
        sporeDispersalMechanicsResearch, 
        "SporeDispersalMechanicsButton",
        "Spore Dispersal Mechanics",
        tooltiptext
    );
}


function createCytokineticEnhancementIResearchButton() {
    const tooltiptext = `
        <strong>Title: Cytokinetic Enhancement I</strong>
        <br>
        <b>Description:</b> Optimize cellular division processes to increase growth rate.
        <br>
        <b>Effect:</b> 10% decrease in division cooldown time.
        <br>
        <b>Requirement:</b> 7,500 information, 500 biomites, 400 zymers, 300 fibers, 200 sludge, 100 algae
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>Cytokinetic Enhancement II</li>
              <li>+10% cell division speed</li>
          </ul>
    `;
    createResearchButton(
        cytokineticEnhancementI,
        "CytokineticEnhancementIButton",
        "Cytokinetic Enhancement I",
        tooltiptext
    );
}


function createCytokineticEnhancementIIResearchButton() {
    const tooltiptext = `
        <strong>Title: Cytokinetic Enhancement II</strong>
        <br>
        <b>Description:</b> Further improvements to cellular division for an even faster growth rate.
        <br>
        <b>Effect:</b> An additional 10% decrease in division cooldown time.
        <br>
        <b>Requirement:</b> 11,250 information, 750 biomites, 600 zymers, 450 fibers, 300 sludge, 150 algae
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>Cytokinetic Enhancement III</li>
              <li>+10% cell division speed</li>
          </ul>
    `;
    createResearchButton(
        cytokineticEnhancementII,
        "CytokineticEnhancementIIButton",
        "Cytokinetic Enhancement II",
        tooltiptext
    );
}

function createCytokineticEnhancementIIIResearchButton() {
    const tooltiptext = `
        <strong>Title: Cytokinetic Enhancement III</strong>
        <br>
        <b>Description:</b> Advanced optimizations to cellular division, further decreasing division cooldown time.
        <br>
        <b>Effect:</b> An additional 10% decrease in division cooldown time.
        <br>
        <b>Requirement:</b> 15,000 information, 1,000 biomites, 800 zymers, 600 fibers, 400 sludge, 200 algae
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>Cytokinetic Enhancement IV</li>
              <li>+10% cell division speed</li>
          </ul>
    `;
    createResearchButton(
        cytokineticEnhancementIII,
        "CytokineticEnhancementIIIButton",
        "Cytokinetic Enhancement III",
        tooltiptext
    );
}


function createCytokineticEnhancementIVResearchButton() {
    const tooltiptext = `
        <strong>Title: Cytokinetic Enhancement IV</strong>
        <br>
        <b>Description:</b> Near mastery of cellular division processes, offering maximum efficiency.
        <br>
        <b>Effect:</b> An additional 10% decrease in division cooldown time.
        <br>
        <b>Requirement:</b> 18,750 information, 1,250 biomites, 1,000 zymers, 750 fibers, 500 sludge, 250 algae
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>Cytokinetic Enhancement V</li>
              <li>+10% cell division speed</li>
          </ul>
    `;
    createResearchButton(
        cytokineticEnhancementIV,
        "CytokineticEnhancementIVButton",
        "Cytokinetic Enhancement IV",
        tooltiptext
    );
}


function createCytokineticEnhancementVResearchButton() {
    const tooltiptext = `
        <strong>Title: Cytokinetic Enhancement V</strong>
        <br>
        <b>Description:</b> Mastery of cellular division processes, achieving unprecedented growth rates.
        <br>
        <b>Effect:</b> An additional 10% decrease in division cooldown time.
        <br>
        <b>Requirement:</b> 22,500 information, 1,500 biomites, 1,200 zymers, 900 fibers, 600 sludge, 300 algae
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>+10% cell division speed</li>
          </ul>
    `;
    createResearchButton(
        cytokineticEnhancementV,
        "CytokineticEnhancementVButton",
        "Cytokinetic Enhancement V",
        tooltiptext
    );
}

// Function to create the Advanced Tunneling I Research Button
function createAdvancedTunnelingIResearchButton() {
    const tooltiptext = `
        <strong>Title: Advanced Tunneling I</strong>
        <br>
        <b>Description:</b> Uncover subterranean mapping techniques to expand your excavation projects.
        <br>
        <b>Effect:</b> Allows up to 3 excavators to be assigned.
        <br>
        <b>Requirement:</b> 5,000 information, 200 biomites, 250 zymers, 50 fibers, 10 algae
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>Advanced Tunneling II</li>
          </ul>
    `;
    createResearchButton(
        advancedTunnelingIResearch,
        "AdvancedTunnelingIButton",
        "Advanced Tunneling I",
        tooltiptext
    );
}

// Function to create the Advanced Tunneling II Research Button
function createAdvancedTunnelingIIResearchButton() {
    const tooltiptext = `
        <strong>Title: Advanced Tunneling II</strong>
        <br>
        <b>Description:</b> Uncover more subterranean mapping techniques to expand your excavation projects.
        <br>
        <b>Effect:</b> Allows up to 5 excavators to be assigned.
        <br>
        <b>Requirement:</b> 7,500 information, 250 biomites, 300 zymers, 200 fibers, 95 sludge, 35 algae
        <br>
    `;
    createResearchButton(
        advancedTunnelingIIResearch,
        "AdvancedTunnelingIIButton",
        "Advanced Tunneling II",
        tooltiptext
    );
}


// Function to create the Advanced Tunneling III Research Button
function createAdvancedTunnelingIIIResearchButton() {
    const tooltiptext = `
        <strong>Title: Advanced Tunneling III</strong>
        <br>
        <b>Description:</b> Uncover more subterranean mapping techniques to expand your excavation projects.
        <br>
        <b>Effect:</b> Allows the assignment of two more burrowers for more efficient excavation.
        <br>
        <b>Requirement:</b> 750,000 information, 800 biomites, 600 zymers, 700 fibers, 200 sludge, 100 algae
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>Advanced Tunneling IV</li>
          </ul>
    `;
    createResearchButton(
        advancedTunnelingIIIResearch,
        "AdvancedTunnelingIIIButton",
        "Advanced Tunneling III",
        tooltiptext
    );
}


// Function to create the Advanced Tunneling IV Research Button
function createAdvancedTunnelingIVResearchButton() {
    const tooltiptext = `
        <strong>Title: Advanced Tunneling IV</strong>
        <br>
        <b>Description:</b> Leverage the most cutting-edge excavation techniques to unearth the deepest secrets of the cave system.
        <br>
        <b>Effect:</b> Allows the assignment of eight more burrowers for more efficient excavation.
        <br>
        <b>Requirement:</b> 1,250,000 information, 8000 biomites, 6000 zymers, 7000 fibers, 2000 sludge, 1000 algae
    `;
    createResearchButton(
        advancedTunnelingIVResearch, 
        "AdvancedTunnelingIVButton",
        "Advanced Tunneling IV",
        tooltiptext
    );
}


// Function to create the Cryohaline Excavation Research Button
function createCryohalineExcavationResearchButton() {
    const tooltiptext = `
        <strong>Title: Cryohaline Excavation</strong>
        <br>
        <b>Description:</b> Explore the use of salt in aiding the excavation of icy terrains.
        <br>
        <b>Effect:</b> Your workers can periodically spread salt for passive excavation in cold environments.
        <br>
        <b>Requirement:</b> 125,000 information, 19,000 biomites, 11,000 zymers, 11,000 sludge
    `;
    createResearchButton(
        cryohalineExcavationResearch, 
        "CryohalineExcavationButton",
        "Cryohaline Excavation",
        tooltiptext
    );
}


function createMemoryImprintsIResearchButton() {
    const tooltiptext = `
        <strong>Title: Memory Imprints I</strong>
        <br>
        <b>Description:</b> Research into enhancing the neural endurance of your excavators.
        <br>
        <b>Effect:</b> Enables diggers to perform extended excavation activities without frequent returns.
        <br>
        <b>Requirement:</b> 45,000 information, 45,000 warmth, 100 biomites, 100 zymers
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>Memory Imprints II</li>
              <li>Excavators perform 300% more activities (5 -> 15) before returning to base</li>
          </ul>
    `;
    createResearchButton(
        memoryImprintsIResearch,
        "MemoryImprintsIButton",
        "Memory Imprints I",
        tooltiptext
    );
}


function createMemoryImprintsIIResearchButton() {
    const tooltiptext = `
        <strong>Title: Memory Imprints II</strong>
        <br>
        <b>Description:</b> Advanced studies into the mechanisms allowing for longer operational durations.
        <br>
        <b>Effect:</b> Further improves the time diggers can remain active during excavations.
        <br>
        <b>Requirement:</b> 55,000 information, 55,000 warmth, 200 fibers
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>Memory Imprints III</li>
              <li>Excavators perform 300% more activities (15 -> 45) before returning to base</li>
          </ul>
    `;
    createResearchButton(
        memoryImprintsIIResearch,
        "MemoryImprintsIIButton",
        "Memory Imprints II",
        tooltiptext
    );
}


function createMemoryImprintsIIIResearchButton() {
    const tooltiptext = `
        <strong>Title: Memory Imprints III</strong>
        <br>
        <b>Description:</b> Finalized research on maximizing the operational longevity of diggers.
        <br>
        <b>Effect:</b> Optimizes digger activity, allowing for the longest possible excavation durations.
        <br>
        <b>Requirement:</b> 65,000 information, 65,000 warmth, 3400 sludge, 2200 algae
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>Excavators perform 300% more activities (45 -> 135) before returning to base</li>
          </ul>
    `;
    createResearchButton(
        memoryImprintsIIIResearch,
        "MemoryImprintsIIIButton",
        "Memory Imprints III",
        tooltiptext
    );
}


// Function to create the Pheromone Trails Research Button
function createPheromoneTrailsResearchButton() {
    const tooltiptext = `
        <strong>Title: Pheromone Trails</strong>
        <br>
        <b>Description:</b> Unravel the enigmatic allure of pheromones and bestow upon your diggers an intrinsic compass, leading to better excavation efficiency.
        <br>
        <b>Effect:</b> Diggers will possess an inherent navigational sense, enhancing their efficiency in returning to your cave excavation station.
        <br>
        <b>Requirement:</b> 25,000 information, 700 zymers, 200 sludge, 50 algae
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>Significant reduction in digger wander times</li>
          </ul>
    `;
    createResearchButton(
        pheromoneTrailsResearch, 
        "PheromoneTrailsButton",
        "Pheromone Trails",
        tooltiptext
    );
}


function createHydrologicCycleResearchButton() {
    let tooltiptext = `
        <strong>Title: Hydrologic Cycle</strong>
        <br>
        <b>Description:</b> Begin exploring the intricate world of fluid dynamics, harnessing the potential of the oasis to understand and exploit the cycle of water.
        <br>
        <b>Effect:</b> Achieve a 17.5% increase in the collection rates of sludge and algae, optimizing the utilization of water resources.
        <br>
        <b>Requirement:</b> 17,500 information, 250,000 nourishment.
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>Circadian Rhythm [Research]</li> 
              <li>17.5% generation bonus for sludge and algae.</li>
          </ul>
    `;
    createResearchButton(
        hydrologicCycleResearch,
        "HydrologicCycleButton",
        "Hydrologic Cycle",
        tooltiptext
    );
}


function createCircadianRhythmResearchButton() {
    let tooltiptext = `
        <strong>Title: Circadian Rhythm</strong>
        <br>
        <b>Description:</b> Awaken to the intrinsic cadences that orchestrate existence and the ebb and flow of your surroundings.
        <br>
        <b>Effect:</b> Empower yourself with rudimentary knowledge of natural cycles, learn to predict and plan according to the regular pulses of various processes.
        <br>
        <b>Requirement:</b> 27,500 information, 35,000 nourishment.
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>Increased awareness of time</li> 
          </ul>
    `;
    createResearchButton(
        circadianRhythmResearch,
        "CircadianRhythmButton",
        "Circadian Rhythm",
        tooltiptext
    );
}


// Function to create the Flocking Research Button
function createFlockingResearchButton() {
    const tooltiptext = `
        <strong>Title: Flocking</strong>
        <br>
        <b>Description:</b> Excavators learn to spread out more efficiently, increasing overall excavation speed.
        <br>
        <b>Effect:</b> Excavators will distribute more efficiently, optimizing their collective digging capabilities.
        <br>
        <b>Requirement:</b> 35,000 information, 35,000 warmth
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>Unlocks Echolocation [Research]</li>
              <li>Unlocks Memory Imprints I [Research]</li>
              <li>Unlocks Fringe Dweller [Research]</li>
              <li>Unlocks Pheromones [Research]</li>
          </ul>
    `;
    createResearchButton(
        flockingResearch, 
        "FlockingButton",
        "Flocking",
        tooltiptext
    );
}


// Function to create the Cellular Conduits Research Button
function createCellularConduitsResearchButton() {
    const tooltiptext = `
        <strong>Title: Cellular Conduits</strong>
        <br>
        <b>Description:</b> Harness the architecture of nature's pathways to grant your excavators improved endurance in the frigid wastelands of the cave.
        <br>
        <b>Effect:</b> Excavators will begin constructing conduits in the ice cave. Conduit tiles enable excavators to recharge without having to return to the ice cave station (x = 500, y = 500).
        <br>
        <b>Requirement:</b> 100,000 information, 100,000 warmth, 100,000 energy, 1800 biomites, 2100 fibers, 920 sludge, 720 algae
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>Increased excavation efficiency</li>
          </ul>
    `;
    createResearchButton(
        cellularConduitsResearch, 
        "CellularConduitsButton",
        "Cellular Conduits",
        tooltiptext
    );
}


// Function to create the Auto-Constructive Synapses Research Button
function createAutoConstructiveSynapsesResearchButton() {
    const tooltiptext = `
        <strong>Title: Auto-Constructive Synapses</strong>
        <br>
        <b>Description:</b> Be inspired by the river's unyielding persistence to automate the formation of cellular pathways. A deeper understanding awaits, as natural harmonies sing the tune of innovation.
        <br>
        <b>Effect:</b> Cellular conduits within the cave will automatically construct themselves, erasing the need for manual construction.
        <br>
        <b>Requirement:</b> 250,000 information, 3000 zymers, 1500 fibers
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>Improved efficiency for excavation operations</li>
              <li>Thermal Synaptic Highways [Research]</li>
          </ul>
    `;
    createResearchButton(
        autoConstructiveSynapsesResearch, 
        "AutoConstructiveSynapsesButton",
        "Auto-Constructive Synapses",
        tooltiptext
    );
}

// Function to create the Thermal Synaptic Highways Research Button
function createThermalSynapticHighwaysResearchButton() {
    const tooltiptext = `
        <strong>Title: Thermal Synaptic Highways</strong>
        <br>
        <b>Description:</b> Auto-constructive synapses generate heat and assist with excavation.
        <br>
        <b>Effect:</b> Your auto-constructive synapses now emit heat, aiding in the excavation of surrounding tiles.
        <br>
        <b>Requirement:</b> 550,000 information, 5200 zymers, 3150 fibers, 1900 sludge, 1800 algae
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>Improved efficiency for excavation operations</li>
              <li>Inferno Synapse Integration [Research]</li>
          </ul>
    `;
    createResearchButton(
        thermalSynapticHighwaysResearch, 
        "ThermalSynapticHighwaysButton",
        "Thermal Synaptic Highways",
        tooltiptext
    );
}


// Function to create the Inferno Synapse Integration Research Button
function createInfernoSynapseIntegrationResearchButton() {
    const tooltiptext = `
        <strong>Title: Inferno Synapse Integration</strong>
        <br>
        <b>Description:</b> Enhance the heat generation of your Thermal Synaptic Highways for more effective excavation.
        <br>
        <b>Effect:</b> Significantly increases the heat output of auto-constructive synapses, speeding up the melting and excavation of surrounding cave tiles.
        <br>
        <b>Requirement:</b> 1,100,000 information, 1,100,000 warmth, 10,400 zymers, 6,300 fibers, 3,800 sludge, 3,600 algae
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>Improved efficiency for excavation operations</li>
          </ul>
    `;
    createResearchButton(
        infernoSynapseIntegrationResearch, // Reference the specific research project object
        "InfernoSynapseIntegrationButton", // Unique ID for the button
        "Inferno Synapse Integration", // Button text
        tooltiptext // Tooltip text
    );
}


// Function to create the Thermogenic Resonance Research Button
function createThermogenicResonanceResearchButton() {
    const tooltiptext = `
        <strong>Title: Thermogenic Resonance</strong>
        <br>
        <b>Description:</b> Delve deep into the heart of contrasting worlds, marrying the infernal dance of magma with the serene embrace of ice. By understanding their harmonious interplay, you can now birth a worker that thrives in this delicate balance.
        <br>
        <b>Effect:</b> The Lava Burrower is awakened. With an affinity for both heat and cold, it aids in cave excavation, ensuring steady progress within these formidable terrains.
        <br>
        <b>Requirement:</b> 10,000 information, 99,000 warmth, and 2250 sludge
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>Enhanced excavation through heat manipulation</li>
          </ul>
    `;
    createResearchButton(
        thermogenicResonanceResearch, 
        "ThermogenicResonanceButton",
        "Thermogenic Resonance",
        tooltiptext
    );
}


// Function to create the Enhanced Thermogenic Resonance Research Button
function createEnhancedThermogenicResonanceResearchButton() {
    const tooltiptext = `
        <strong>Title: Enhanced Thermogenic Resonance</strong>
        <br>
        <b>Description:</b> Pushing the boundaries of elemental fusion, this advanced research delves into the untapped synergies between extreme heat and profound cold. Mastery over these elements empowers you to summon a being of unparalleled prowess.
        <br>
        <b>Effect:</b> Unleash the Geo-Thermal Leviathan. A titan among workers, its capability to sculpt both fire and frost reshapes the very foundations of your domain.
        <br>
        <b>Requirement:</b> 100,000 information, 999,000 warmth, 2,500 sludge, and 2,500 algae
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>Groundbreaking advancements in thermal engineering</li>
          </ul>
    `;
    createResearchButton(
        enhancedThermogenicResonanceResearch, 
        "EnhancedThermogenicResonanceButton",
        "Enhanced Thermogenic Resonance",
        tooltiptext
    );
}




// Function to create the Trail Recognition Research Button
function createTrailRecognitionResearchButton() {
    const tooltiptext = `
        <strong>Title: Trail Recognition</strong>
        <br>
        <b>Description:</b> Dive into the mysterious intricacies of memory, teaching your excavators to remember and simplify their past journeys, finding beauty in simplicity amidst the cold and vast cave.
        <br>
        <b>Effect:</b> Excavators gain the ability to optimize their trails, improving their ability to efficiently head back to base when needing to recharge. For instance, a sequence like south → south → east → north → north becomes a simpler, direct path of just east. Complements pheromone research.
        <br>
        <b>Requirement:</b> 50,000 information, 30,000 warmth, 30,000 energy, 100 biomites, 100 fibers
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>Slight improvement to excavation efficiency</li>
          </ul>
    `;
    createResearchButton(
        trailRecognitionResearch, 
        "TrailRecognitionButton",
        "Trail Recognition",
        tooltiptext
    );
}


// Function to create the Fringe Dweller Research Button
function createFringeDwellerResearchButton() {
    const tooltiptext = `
        <strong>Title: Fringe Dweller</strong>
        <br>
        <b>Description:</b> Venture into the dim boundaries of known territory to awaken a guardian of the cave's forgotten fringes. This research leads to the emergence of a specialized digger, adept in navigating the peripheries of the subterranean expanse.
        <br>
        <b>Effect:</b> Introduces the Fringe Dweller, a unique digger that focuses on exploring and mapping the outer edges of the cave. Where others may hesitate, the Fringe Dweller strides, revealing paths less traveled and secrets long hidden in the cave's secluded corners.
        <br>
        <b>Requirement:</b> 80,000 information, 80,000 warmth, 80,000 energy, 800 biomites, 800 zymers, 800 fibers, 800 sludge, 800 algae
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>Enhanced exploration and mapping of the cave's outer regions</li>
          </ul>
    `;
    createResearchButton(
        fringeDwellerResearch, 
        "FringeDwellerButton",
        "Fringe Dweller",
        tooltiptext
    );
}


// Function to create the Echolocation Research Button
function createEcholocationResearchButton() {
    const tooltiptext = `
        <strong>Title: Echolocation Research</strong>
        <br>
        <b>Description:</b> Delve into the study of echolocation, using sound waves and echoes to determine the location of objects in the environment.
        <br>
        <b>Effect:</b> Cave excavators learn to locate un-excavated tiles with increased efficiency using echolocation, leading to a significant enhancement in overall excavation progress. Echolocation will be used to locate a target if an excavator performs 15 moves without encountering excavatable tiles. Max. location discovery takes place in a 50x50 grid around the excavator.
        <br>
        <b>Requirement:</b> 1,000,000 information
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>Significant improvement to excavation efficiency</li>
          </ul>
    `;
    createResearchButton(
        echolocationResearch, // assuming this is the object we'll define next
        "EcholocationButton",
        "Echolocation",
        tooltiptext
    );
}


function createHarmonicSymbiosisIResearchButton() {
    const tooltiptext = `
        <strong>Title: Harmonic Symbiosis I</strong>
        <br>
        <b>Description:</b> Deepen your symbiotic connection with Solara to reduce the need for sacrifices.
        <br>
        <b>Effect:</b> Reduces Solara sacrifice costs by 10%.
        <br>
        <b>Requirement:</b> 250,000 information
        <br>
        <b>Leads to:</b> 
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>Harmonic Symbiosis II [Research]</li>
              <li>10% sacrifice cost reduction</li>
          </ul>
    `;
    createResearchButton(
        harmonicSymbiosisI,
        "HarmonicSymbiosisIButton",
        "Harmonic Symbiosis I",
        tooltiptext
    );
}


function createHarmonicSymbiosisIIResearchButton() {
    const tooltiptext = `
        <strong>Title: Harmonic Symbiosis II</strong>
        <br>
        <b>Description:</b> Deepen your symbiotic connection with Solara to reduce the need for sacrifices.
        <br>
        <b>Effect:</b> Reduces Solara sacrifice costs by 10%.
        <br>
        <b>Requirement:</b> 500,000 information
        <br>
        <b>Leads to:</b> 
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>Harmonic Symbiosis III [Research]</li>
              <li>10% sacrifice cost reduction</li>
          </ul>
    `;
    createResearchButton(
        harmonicSymbiosisII,
        "HarmonicSymbiosisIIButton",
        "Harmonic Symbiosis II",
        tooltiptext
    );
}


function createHarmonicSymbiosisIIIResearchButton() {
    const tooltiptext = `
        <strong>Title: Harmonic Symbiosis III</strong>
        <br>
        <b>Description:</b> Deepen your symbiotic connection with Solara to reduce the need for sacrifices.
        <br>
        <b>Effect:</b> Reduces Solara sacrifice costs by 10%.
        <br>
        <b>Requirement:</b> 750,000 information
        <br>
        <b>Leads to:</b> 
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>10% sacrifice cost reduction</li>
          </ul>
    `;
    createResearchButton(
        harmonicSymbiosisIII,
        "HarmonicSymbiosisIIIButton",
        "Harmonic Symbiosis III",
        tooltiptext
    );
}



// Function to create the 'Echoes of the Forgotten' Research Button
function createEchoesOfTheForgottenResearchButton() {
    const tooltiptext = `
        <strong>Title: Echoes of the Forgotten</strong>
        <br>
        <b>Description:</b> Delve into the enigmatic wisdom encapsulated in the ruins. The pursuit of this knowledge might uncover secrets that are both wondrous and harrowing.
        <br>
        <b>Effect:</b> Unlocks the elusive gates leading toward the cosmos, and the untold possibilities that lie beyond.
        <br>
        <b>Requirement:</b> 100,000,000 information
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>The First Starlight (1/2) [Exploration]</li>
              <li>Awakening of Cosmic Consciousness (1/2)</li>
          </ul>
    `;
    createResearchButton(
        echoesOfTheForgottenResearch,
        "EchoesOfTheForgottenButton",
        "Echoes of the Forgotten",
        tooltiptext
    );
}


// Function to create "The Core" Research Button
function createTheCoreResearchButton() {
    const tooltiptext = `
        <strong>Title: The Core</strong>
        <br>
        <b>Description:</b> You dug ever deeper and reached the very heart of your subterranean existence. This is where answers lie, in the untouched and fiercely protected sanctum of your dwelling. Will you dare to disturb the universe?
        <br>
        <b>Effect:</b> Opens the final chamber of your underground sanctuary, revealing untold secrets and a direct path to your own transformation, as well as the world's.
        <br>
        <b>Requirement:</b> 100,000,000 information
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>The First Starlight (2/2) [Exploration]</li>
              <li>Awakening of Cosmic Consciousness (2/2)</li>
          </ul>
    `;
    createResearchButton(
        theCoreResearch,
        "TheCoreButton",
        "The Core",
        tooltiptext
    );
}


// Function to create the Ecliptic Synthesis Research Button
function createEclipticSynthesisResearchButton() {
    const tooltiptext = `
        <strong>Title: Ecliptic Synthesis</strong>
        <br>
        <b>Description:</b> A profound celestial alignment catalyzes a deeper communion between your sacrifices and Solara, magnifying their essence.
        <br>
        <b>Effect:</b> The spiritual connection with Solara intensifies, doubling the effectiveness of your resource sacrifices.
        <br>
        <b>Requirement:</b> 25,000,000 information, 25,000,000 warmth
        <br>
        <b>Leads to:</b> 
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>Doubles effectiveness of sacrifices [Solara]</li>
          </ul>
    `;
    createResearchButton(
        eclipticSynthesisResearch, 
        "EclipticSynthesisButton",
        "Ecliptic Synthesis",
        tooltiptext
    );
}


// Function to create the Primordial Sight Research Button
function createPrimordialEyesResearchButton() {
    const tooltiptext = `
        <strong>Title: Primordial Sight</strong>
        <br>
        <b>Description:</b> As the primal darkness recedes, a new sense awakens. The emergence of sight, crude and unrefined, yet full of potential to perceive the world in ways never before imagined.
        <br>
        <b>Effect:</b> Unlock the primal sense of sight, changing the way your world is perceived and interacted with. This newfound vision paves the way for advanced exploration and understanding of the universe.
        <br>
        <b>Requirement:</b> 1 billion information, warmth, energy, and nourishment; 10 million biomites, zymers, fibers, sludge, and algae.
        <br>
        <b>Leads to:</b>
          <ul style="margin-top: 5px; padding-left: 20px;">
              <li>World View [Mechanic]</li>
          </ul>
    `;
    createResearchButton(
        primordialSightResearch, 
        "PrimordialSightButton",
        "Primordial Sight",
        tooltiptext
    );
}



// Used to toggle between NEW and COMPLETED research projects
function toggleResearchFilter() {
    const researchFilters = document.getElementById('researchFilters');
    const researchItems = document.querySelectorAll('.researchButton');
    
    if (!researchFilters.classList.contains('active')) {
        // Show 'Completed' Research
        researchItems.forEach(item => {
            if (item.getAttribute('data-status') === 'completed') {
                item.parentElement.style.display = 'block';
            } else {
                item.parentElement.style.display = 'none';
            }
        });
        researchFilters.classList.add('active');
    } else {
        // Show 'New' Research
        researchItems.forEach(item => {
            if (item.getAttribute('data-status') === 'new') {
                item.parentElement.style.display = 'block';
            } else {
                item.parentElement.style.display = 'none';
            }
        });
        researchFilters.classList.remove('active');
    }
}


function checkForThermogenicResonance() {
    if (iceCaveAnalysed && volcanoDiscovered) {
        if (!researchQueue.includes('ThermogenicResonance')) {
            researchQueue.push('ThermogenicResonance');
            displayOnChat("当冰洞的冷风与火山的熔热相遇时，新的研究领域出现了。 对立的舞蹈在召唤着人们，邀请人们对极端的融合进行更深入的探索。");
        }
    }
}



function queueEnhancedThermogenicResonance() {
    // Wait for 30 minutes (1800000 milliseconds) before executing the logic
    setTimeout(function() {
        // Check all three conditions
        if (thermogenicResonanceResearchCompleted === true && // Condition 1
            !researchQueue.includes('EnhancedThermogenicResonance') && // Condition 2
            enhancedThermogenicResonanceResearchCompleted === false // Condition 3
        ) {
            // All conditions are met, push 'EnhancedThermogenicResonance' to the researchQueue
            researchQueue.push('EnhancedThermogenicResonance');
            populateResearchTab();
        }
    }, 1800000); // 1800000 milliseconds is 30 minutes
}
