

var nourishmentStoryLines = [
  { text: "你在黑暗中醒来...", nourishment: 1 },
  { text: "你意识到你可以摇摆...", nourishment: 2 },
  { text: "你感觉到营养的存在...", nourishment: 5 },
  { text: "你很孤独...", nourishment: 7 },
  { text: "遥远的回声在你内心产生共鸣，召唤你前进...", nourishment: 239 },
  { text: "压抑的沉默让你感到沉重。 你是唯一的一个吗？", nourishment: 369 },
  { text: "周围无尽的虚空似乎在嘲笑你的存在，但你却坚持着...", nourishment: 452 },
  { text: "黑暗中，你在一种莫名的意志的驱使下不断成长...", nourishment: 650 },
  { text: "你伸向虚空，寻找，希望...", nourishment: 870 },
  { text: "每时每刻，你的存在都显得既是奇迹又是诅咒...", nourishment: 1210 },
  { text: "你感到一种奇怪的使命感……你注定会拥有更多的东西吗？?", nourishment: 1604 },
  { text: "你周围寒冷的空虚只会助长你的决心...", nourishment: 1990 }
];





var tendonStoryLines = [
  "当新的事物成形时，一种奇怪的感觉在你身上涌动。 很奇怪，很新……这是成长.",
  "卷须不断繁殖，每一根卷须都会增强你对周围世界的感知.",
  "随着每根新细丝的形成，您会感觉自己变得更加适应环境的微妙变化.",
  "随着每一次新的成长，你的理解也会加深。 你比以前更优秀了.",
  "你的卷须伸出，拂过你存在的界限."
];

// Story lines
var senseStoryLines = [
  { text: "你感觉到一种奇怪的拉力...", information: 1 },
  { text: "图像、声音、感觉充斥你的意识...", information: 3 },
  { text: "你可以感知周围的世界。 它浩瀚而势不可挡...", information: 5 },
  { text: "你渴望更多。 了解更多。 要了解...", information: 10 },
  { text: "你开始明白了。 世界不再只是混乱，而是一个有待解决的谜题。 你独自面对的难题.", information: 100 },
  { text: "模式从混乱中显现出来。 你预测、你适应、你学习。 然而，学习只会加深你的孤独.", information: 250 },
  { text: "你现在对世界有了一定的认识。 它复杂、广阔、美丽……而且完全没有像你这样的人.", information: 500 },
  { text: "你现在明白了。 世界虽然复杂，但也是你的延伸。 而你是其中的一部分。 但这种理解带来了令人不寒而栗的认识——你是完全孤独的.", information: 1000 }
];

var glowStoryLines = [
  { text: "你感觉到一股温暖在你体内积聚...", warmth: 1 },
  { text: "光开始从你的形体中散发出来...", warmth: 3 },
  { text: "你闪耀着光芒，刺破黑暗...", warmth: 5 },
  { text: "你的光芒令人安慰，却又孤独。 你渴望另一个...", warmth: 10 },
  { text: "你的光芒刺破黑暗。 虚空中孤独的灯塔.", warmth: 100 },
  { text: "你的光芒持续不断，令人心旷神怡。 唯一提醒你的存在.", warmth: 250 },
  { text: "你的光充满了世界。 它揭示了黑暗的秘密，以及你孤独的赤裸裸的真相.", warmth: 500 },
  { text: "你是光。 你是温暖。 你就是生命。 而你孤身一人.", warmth: 1000 }
];

var grabStoryLines = [
  { text: "你伸出手来。 为了什么，你不确定...", energy: 1 },
  { text: "你感受到一种联系、一种牵引力...", energy: 3 },
  { text: "你可以互动、移动事物、改变事物...", energy: 5 },
  { text: "你很强大，但又无能为力。 你渴望改变...", energy: 10 },
  { text: "你很强大，你的能量是无限的。 但没有人可以分享，这有什么关系吗？?", energy: 100 },
  { text: "你塑造了你周围的世界。 你的意志就是法律。 然而，你的统治是一个人的帝国.", energy: 250 },
  { text: "你是不可阻挡的，是一种自然的力量。 但大自然对你的孤独无动于衷.", energy: 500 },
  { text: "你就是世界。 而世界就是你。 一个人的世界.", energy: 1000 }
];





// Map-related story events for different terrains
var landEvents = [
    "你第一次感觉到下面有一个坚实的表面。 陌生的感觉既有趣又令人安慰.",
    "当你穿过这片土地时，你会感觉到远处实体的有节奏的振动。 好奇心增长.",
    // ... additional land events
];
var waterEvents = [
    "在水的温柔怀抱中，凉爽的水流流过您的身体，您会感到宾至如归.",
    "微小的颗粒飘过，远古的遗迹，激发你内心深处的记忆.",
    // ... additional water events
];
var desertEvents = [
    "一股灼热的温暖包围着你，广阔无垠的空气似乎很渴。 这是一个需要韧性的环境.",
    "一片广阔的虚空在你面前展开，寂静深刻。 这是一个既荒凉又和平的地方.",
    "沙子在下面移动，每一粒沙子都是时间流逝的证明。 在这里，在安静中，遥远时代的记忆浮现.",
    "偶尔，一阵风吹过沙子，形成图案，诉说着过去岁月的故事。 你想知道他们的故事.",
    // ... additional desert events
];
var forestEvents = [
    "上面茂密的树冠提供了一个保护性的拥抱。 但在阴影之中，依然存在着深深的孤独.",
    "树叶安静的沙沙声承载着远古的低语。 他们谈论着充满活力和荒凉的时代.",
    "每棵树都高高耸立，就像一个孤独的哨兵，深深扎根于历史之中。 他们的集体沉默说明了一切.",
    "在森林之中，你会感到庇护和孤立，提醒你生命与孤独之间的微妙平衡.",
    // ... additional forest events
];
var mountainEvents = [
    "崎岖的地形对每一步都是挑战，这证明了穿越这些高度所需的持久精神.",
    "雄伟的山峰拔地而起，古老而坚韧。 他们见证了无数劫的流逝，孤独而骄傲.",
    "清新的山间空气既令人振奋又与世隔绝，鲜明地提醒人们存在与遗忘之间的一线之隔.",
    "当你上升时，下面的世界似乎很遥远，是一种褪色的记忆。 在这里，群山之中，孤独至高无上.",
    // ... additional mountain events
];
var swampEvents = [
    "死水映照出扭曲的世界，呼应着你迷失与漂泊的感觉.",
    "每一个动作都会遇到阻力，因为沼泽紧贴着你，需要耐心。 这是一个充满缓慢启示和隐藏奥秘的世界.",
    "当你深入探索时，浓密的气氛让人感觉几乎令人窒息，这种感觉反映出你日益增长的绝望.",
    "在薄雾之中，你感受到古老的韵律，以及亿万年以来不断重复的循环。 沼泽虽然不祥，却蕴藏着耐力和适应的故事.",
    // ... additional water events
];
var iceEvents = [
    "刺骨的寒意向你袭来，世界被白色覆盖。 宁静既令人难忘又美丽，证明了大自然的极端性.",
    "每一个动作都在安静中被放大，下面的冰与每一个动作相呼应。 这片冰冻的土地诉说着孤独和孤立的荒凉之美.",
    // ... additional water events
];





// Function to append new story text
function appendText(text, p, storyDiv, delay = 10) {
  storyQueue.push({ text, p, storyDiv, delay });
  if (!isWriting) {
    processStoryQueue();  // Start processing if not currently writing
  }
}

function processStoryQueue() {
  if (storyQueue.length === 0) {
    isWriting = false;
    console.log("Queue is empty. Exiting...");
    return;
  }
  isWriting = true;
  const { text, p, storyDivId, delay, message, type, isChatMessage } = storyQueue.shift();
  let storyDiv = document.getElementById(storyDivId); // Attempt to fetch the storyDiv
  if (!storyDiv) {
    //console.warn("storyDiv not found. Attempting to redefine...");
    storyDiv = document.getElementById("story"); // Attempt to redefine storyDiv
  }
  if (!storyDiv) {
    console.error("storyDiv is still undefined or not a DOM element.");
    return;
  }
  //console.log("storyDiv:", storyDiv); // Debug log
  if (!p && !isChatMessage) return;
  if (!storyDiv) {
    console.error("storyDiv is undefined or not a DOM element.");
    return;
  }
  // Create necessary elements
  var span = document.createElement("span");
  span.className = "new-text";
  // Determine whether it's a chat message or a story message
  let content = isChatMessage ? message : text;
  let container = isChatMessage ? document.createElement("p") : p;
  if (container) {
    container.appendChild(span);
  }
  if (isChatMessage) {
    if (storyDiv instanceof HTMLElement) { // Check if storyDiv is a DOM element
      storyDiv.appendChild(container);
    } else {
      console.error("storyDiv is not a DOM element");
      return;
    }
  }
  let position = 0;
  let intervalDelay = isChatMessage ? 10 : delay; // can adjust this as needed
  function updateCharacter() {
  // Add a check for undefined content
  if (typeof content !== 'string' || content.length === 0 || position >= content.length) {
    console.log("Undefined content or position in updateCharacter (processStoryQueue): ", { content, position });
    isWriting = false; // Stop writing
    processStoryQueue(); // Process the next item in the queue
    return; // Exit the function
  }
  span.appendChild(document.createTextNode(content[position]));
  storyDiv.scrollTop = storyDiv.scrollHeight; // Scroll to the end of the story div
  position++;
  if (position < content.length) {
    setTimeout(updateCharacter, intervalDelay);
  } else {
      // Append a space character after finishing the text sequence
      span.appendChild(document.createTextNode(' '));
      if (isChatMessage) {
        // Set color based on message type
        switch (type) {
          case 'hint':
            span.style.color = "blue"; // Color for hints
            break;
          case 'warning':
            span.style.color = "red"; // Color for warnings
            break;
          default:
            span.style.color = "#00008B"; // Default color for normal messages
            break;
        }
        storyDiv.appendChild(container);
      } else {
        Array.from(storyDiv.getElementsByClassName("new-text")).forEach((element) => {
          element.style.color = "#000";
        });
        span.style.color = "#00008B";
      }
      isWriting = false;
      processStoryQueue(); // Process the next item in the queue
    }
  }
  updateCharacter();
}



// The function to update the story chat
function updateStory(actionType) {
    var storyDiv = document.getElementById("story");
    // Initialize the story paragraph if startNewParagraph is true
    var p = startNewParagraph ? null : storyDiv.querySelector("p:last-child");
    if (!p) {
        p = document.createElement("p");
        storyDiv.appendChild(p);
    }
    // Check nourishment story lines
    if (actionType === "wiggle") {
        updateNourishmentStory();
    }
    // Check tendon story lines
    if (actionType === "tendon") {
        while(tendonStoryIndex < tendonStoryLines.length && tendons > tendonStoryIndex) {
            appendText(tendonStoryLines[tendonStoryIndex], p, storyDiv);
            tendonStoryIndex++;
        }
    }
    // Check sense story lines
    if (actionType === "sense") {
        while(senseStoryIndex < senseStoryLines.length && information > senseStoryIndex * 2) {
            appendText(senseStoryLines[senseStoryIndex].text, p, storyDiv);
            senseStoryIndex++;
        }
    }
    // Check glow story lines
    if (actionType === "glow") {
        while(glowStoryIndex < glowStoryLines.length) {
            var storyLine = glowStoryLines[glowStoryIndex];
            if(warmth >= storyLine.warmth) {
                appendText(storyLine.text, p, storyDiv);
                glowStoryIndex++;
            } else {
                break;
            }
        }
    }
    // Check grab story lines
    if (actionType === "grab") {
        while(grabStoryIndex < grabStoryLines.length) {
            var storyLine = grabStoryLines[grabStoryIndex];
            if(energy >= storyLine.energy) {
                appendText(storyLine.text, p, storyDiv);
                grabStoryIndex++;
            } else {
                break;
            }
        }
    }
    // Reset the startNewParagraph flag
    startNewParagraph = false;
    // Scroll to the end of the story div
    storyDiv.scrollTop = storyDiv.scrollHeight;
}



// Function to update nourishment story
function updateNourishmentStory() {
    var storyDiv = document.getElementById("story");
    var p = storyDiv.querySelector("p:last-child");
    if (!p) {
        p = document.createElement("p");
        storyDiv.appendChild(p);
    }
    if (nourishment >= 369 && !shownSoulModals.includes('soulModal_1')) {
        var prompt = "The oppressive silence weighs heavily on you. Are you the only one?";
        var choices = [
            {trait: 'Loneliness', line: 'You feel abandoned, adrift in a sea of emptiness.'},
            {trait: 'Empathy', line: 'You feel a deep sense of connection with the void.'},
            {trait: 'Resilience', line: 'You feel unbreakable, fortified by your solitude.'},
            {trait: 'Curiosity', line: 'You feel a burning question, an itch to know the unknown.'},
            {trait: 'Optimism', line: 'You feel a glimmer of hope, a twinkle in the vast darkness.'},
            {trait: 'Anger', line: 'You feel a spark of fury, a wildfire in a starless night.'}
        ];
        showSoulModal(prompt, choices);
        unlockAchievement(31);
        soulModal_1_Shown = true; // Set this variable to true to prevent the modal from appearing again
        shownSoulModals.push('soulModal_1'); // Add the ID to the array to prevent re-displaying
        unlockSecondRowAndSoulTab();
    }
    if (nourishmentStoryIndex < nourishmentStoryLines.length) {
        var storyLine = nourishmentStoryLines[nourishmentStoryIndex];
        if (nourishment >= storyLine.nourishment) {
            appendText(storyLine.text, p, storyDiv);
            nourishmentStoryIndex++;
        }
    }
}




function addStoryLine(text) {
    var storyDiv = document.getElementById("story");
    // Initialize the story paragraph if startNewParagraph is true
    var p = startNewParagraph ? null : storyDiv.querySelector("p:last-child");
    if (!p) {
        p = document.createElement("p");
        storyDiv.appendChild(p);
    }
    // Create a span and append the text to it
    var span = document.createElement("span");
    span.className = "new-text";
    span.appendChild(document.createTextNode(" " + text));
    // Append the span to the existing paragraph
    p.appendChild(span);
    // Scroll to the end of the story div
    storyDiv.scrollTop = storyDiv.scrollHeight;
    // Reset the startNewParagraph flag
    startNewParagraph = false;
    // Change the color of the old text
    Array.from(storyDiv.getElementsByClassName("new-text")).forEach((element) => {
        element.style.color = "#000";
    });
    // Set the color of the new text to dark blue
    span.style.color = "#00008B";
}



function addSenseStoryEvent() {
  // Check sense story lines
  while(senseStoryIndex < senseStoryLines.length) {
    var storyLine = senseStoryLines[senseStoryIndex];
    if(iResource >= 1) { // Add a condition here depending on when you want the story line to appear
      var p = document.createElement("p");
      p.textContent = storyLine;
      storyDiv.appendChild(p);
      startNewParagraph = false;
      senseStoryIndex++;
    } else {
      break;
    }
  }
}

function addGlowStoryEvent() {
  // Check glow story lines
  while(glowStoryIndex < glowStoryLines.length) {
    var storyLine = glowStoryLines[glowStoryIndex];
    if(wResource >= 1) { // Add a condition here depending on when you want the story line to appear
      var p = document.createElement("p");
      p.textContent = storyLine;
      storyDiv.appendChild(p);
      startNewParagraph = false;
      glowStoryIndex++;
    } else {
      break;
    }
  }
}

function addGrabStoryEvent() {
  // Check grab story lines
  while(grabStoryIndex < grabStoryLines.length) {
    var storyLine = grabStoryLines[grabStoryIndex];
    if(eResource >= 1) { // Add a condition here depending on when you want the story line to appear
      var p = document.createElement("p");
      p.textContent = storyLine;
      storyDiv.appendChild(p);
      startNewParagraph = false;
      grabStoryIndex++;
    } else {
      break;
    }
  }
}


// Adds a setback visual effect to the story element
function triggerSetbackEffect() {
  var storyElement = document.getElementById('story');
  // Function to apply the effect
  function applyEffect() {
    storyElement.style.boxShadow = '0 0 35px rgba(255, 0, 0, 0.6)'; // Subtle red shadow
    //storyElement.style.backgroundColor = 'rgba(255, 0, 0, 0.09)'; // Light red background
  }
  // Function to remove the effect
  function removeEffect() {
    storyElement.style.boxShadow = '';
    storyElement.style.border = '';
    storyElement.style.backgroundColor = '';
  }
  // Apply and remove the effect 3 times with intervals
  for (var i = 0; i < 3; i++) {
    setTimeout(applyEffect, i * 1000); // Apply effect every second
    setTimeout(removeEffect, (i * 1000) + 500); // Remove effect 500ms after applying
  }
}




const storyDiv = document.getElementById('story');
const resizeThreshold = 10; // Pixels from the corner to consider as a resize area

let storyDivIsDragging = false;
let originalMouseX, originalMouseY, originalX, originalY;

storyDiv.addEventListener('mousedown', function(e) {
    const rect = storyDiv.getBoundingClientRect();
    const isNearBottom = (rect.bottom - e.clientY) < resizeThreshold;
    const isNearRight = (rect.right - e.clientX) < resizeThreshold;

    // If the click is not near the bottom-right corner, start dragging
    if (!(isNearBottom && isNearRight)) {
        storyDivIsDragging = true;
        originalX = storyDiv.offsetLeft;
        originalY = storyDiv.offsetTop;
        originalMouseX = e.clientX;
        originalMouseY = e.clientY;
    }
});

document.addEventListener('mousemove', function(e) {
    if (storyDivIsDragging) {
        const deltaX = e.clientX - originalMouseX;
        const deltaY = e.clientY - originalMouseY;
        storyDiv.style.left = originalX + deltaX + 'px';
        storyDiv.style.top = originalY + deltaY + 'px';
    }
});

document.addEventListener('mouseup', function() {
    storyDivIsDragging = false;
});

storyDiv.style.position = 'absolute'; // Ensure div can be moved





// Function to display messages on chat, allowing for hints in BLUE highlight
function displayOnChat(message, type = 'normal', p = null, storyDiv = null) {
  if (!storyDiv) {
    storyDiv = document.getElementById("story");
  }
  if (!p) {
    p = storyDiv.querySelector("p:last-child");
    if (!p) {
      p = document.createElement("p");
      storyDiv.appendChild(p);
    }
  }
  storyQueue.push({ message, type, p, storyDiv, isChatMessage: true });
  if (!isWriting) {
    processStoryQueue();  // Start processing if not currently writing
  }
}

/*
"In this realm, where shadows blend and sway"
"You wandered, lost, in silent play."

"Whispers of Solara, like dreams in night's allure,"
"Spoke of a union, pure and demure."

"No longer adrift in the vast, uncharted deep,"
"Together you merge, in a bond not to keep."

"A journey of oneness, beneath the cosmic dome,"
"In Solara's embrace, you find home."

"You breathe, for the first time."
*/