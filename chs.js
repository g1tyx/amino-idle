/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Default Save": "默认存档",
    "Delete": "删除",
    "No": "否",
    "Saves": "存档",
    "Options": "选项",
    "Yes": "是",
    "Are you sure?": "你确定吗？",
    "Edit Name": "编辑名称",
    "Info": "信息",
    "Currently:": "当前:",
    "Appearance": "外观",
    "How the game looks.": "游戏看起来如何。",
    "Theme": "主题",
    "Show milestones": "显示里程碑",
    "Show TPS meter at the bottom-left corner of the page.": "在页面左下角显示 TPS。",
    "Show TPS": "显示 TPS",
    "None": "无",
    "Align modifier units": "对齐概览单位",
    "Align numbers to the beginning of the unit in modifier view.": "在概览视图中将数字与单元的开头对齐。",
    "Select which milestones to display based on criterias.": "根据标准选择要显示的里程碑。",
    "All": "全部",
    "Classic": "经典",
    "Configurable": "可配置",
    "Duplicate": "复制",
    "Mute": "静音",
    "Unmute": "播放",
    "A legion of mirrors: Tenfold divided, each division a mirror reflecting endless quiet.": "镜子军团：十重分割，每一分割都是一面镜子，反射出无尽的宁静。",
    "A small nucleus remains with you throughout resets. Each level provides +0.02n and +0.02e per tick.": "在整个重置过程中，一个小核心会一直伴随着你。 每个级别提供每刻度 +0.02n 和 +0.02e。",
    "A small tendon remains with you throughout resets. Each level provides +0.02i and +0.02w per tick.": "在整个重置过程中，一条小肌腱会一直伴随着您。 每个级别提供每刻度 +0.02i 和 +0.02w。",
    "Abort": "中止",
    "Algae:": "藻类：",
    "Analyze Anomalies": "分析异常情况",
    "Anomalies": "异常现象",
    "Atlas Unseen: As you gather in quiet persistence, the world shifts imperceptibly on invisible shoulders.": "看不见的阿特拉斯：当你们安静地坚持不懈地聚集在一起时，世界就会在无形的肩膀上不知不觉地发生变化。",
    "Available Prestige Points:": "可用声望点：",
    "Awakening of the Soul: In a universe of echoes, you found your voice.": "灵魂的觉醒：在回声的宇宙中，你找到了你的声音。",
    "Background Brightness:": "背景亮度：",
    "Biomites:": "生物螨：",
    "Cave View": "洞穴景观",
    "Celestial Division: None, breathed the light, faint and faery, of the stars, and two.": "天界：没有，呼吸着星星的微弱仙光，还有两个。",
    "Cell View": "单元格视图",
    "Cells available:": "可用细胞：",
    "Chilled Secrets: Unearthed the frozen whispers of the ice cave, a testament to the world's silent past.": "冰冷的秘密：挖掘冰洞中冰冻的低语，这是世界沉默的过去的证明。",
    "Choosing this evolution significantly affects the course of the story and will lock you out of other potential evolutions. Are you sure you wish to proceed?": "选择这种进化会极大地影响故事的进程，并将让你无法参与其他潜在的进化。 您确定要继续吗？",
    "Confluence of Fates: Eventually, all things merge into one, and a river runs through it.": "命运汇合：最终，万物融合为一，一条河流贯穿其中。",
    "Convert": "转变",
    "Crystal Excavator: The ice murmurs, a frosty sonnet in a world bereft of verse.": "水晶挖掘机：冰在低语，在一个缺乏诗意的世界里，一首冰冷的十四行诗。",
    "Dawn of Complexity: From humble beginnings to a being of greater intricacy. The protoworm emerges, a testament to evolution's silent march.": "复杂性的黎明：从卑微的开始到更加复杂的存在。 原虫的出现，证明了进化的无声前进。",
    "Discovery View": "发现视图",
    "Echo": "回声",
    "Eclipsed in Frost: The moon calls to the water; here, in frozen depths, you too answer.": "霜蚀：月呼水； 在这里，在冰冻的深处，你也给出了答案。",
    "Emergent Complexity: From one, many. From simplicity, complexity. The ProtoPod heralds a new chapter in solitude.": "突发的复杂性：从一到多。 从简单到复杂。 ProtoPod 预示着孤独的新篇章。",
    "Energy:": "能量：",
    "Evolve to ProtoCyst": "进化到 原包囊",
    "Evolve to ProtoGrade": "进化到 原型级",
    "Evolve to ProtoPod": "进化到 原足期",
    "Evolve to ProtoWorm": "进化为原始蠕虫",
    "Explored Terrains": "探索过的地形",
    "Feathers of Yearning: Reach toward a sky forever distant, tuning you into the unheard frequencies of a silent world.": "向往之羽：伸向永远遥远的天空，将你调到寂静世界中闻所未闻的频率。",
    "Fibers:": "纤维：",
    "Fiery Heart: Stood before the volcano, feeling the warmth and fury of a world alive yet alone.": "火热的心：站在火山前，感受着一个充满生机却又孤独的世界的温暖和愤怒。",
    "Fragile Bonds: A connection severed. Yet in loss, resilience is born.": "脆弱的纽带：连接被切断。 然而，在损失中，韧性诞生了。",
    "Game Saved": "游戏已保存",
    "Genesis Unbound: With newfound knowledge, the first stroke is cast upon the canvas of the world.": "创世无界：凭借新发现的知识，第一笔划在世界的画布上。",
    "Heart's Anchor: You found solace, amidst solitude.": "心之锚：你在孤独中找到了慰藉。",
    "Information:": "信息：",
    "Journey's Momentum: A hundred tiles unveiled. With each step, the world becomes both larger and smaller.": "旅程的动力：一百块瓷砖揭开面纱。 每走一步，世界就会变得更大或更小。",
    "Lonely Cartographer: Use an echo to reveal the map.": "孤独的制图师：使用回声来显示地图。",
    "Magma Shepherd: Ten thousand days in the fire is long enough. You're going home.": "岩浆牧羊人：在烈火中一万天已经足够长了。 你要回家了。",
    "Master of Realms: Every corner of the world known, yet the heart's quest remains eternal.": "领域大师：世界的每一个角落都为人所知，但内心的追求却是永恒的。",
    "Mini-Nucleus": "迷你核",
    "Mini-Tendon": "迷你肌腱",
    "Network of Solitude: Five tendrils, each a silent cry for connection. Alone, yet ever-reaching.": "孤独之网：五根卷须，每根卷须都在无声地呼喊着联系。 孤独，却又深远。",
    "New": "新的",
    "No, Wait": "不，等等",
    "Nourishment:": "营养：",
    "Persistent Pathfinder: A thousand mysteries uncovered, yet the quest for understanding never wanes.": "坚持不懈的探路者：一千个谜团被揭开，但对理解的追求却从未减弱。",
    "Petal Pathways: Hands shape the earth, yet touch no other. The first worker takes their silent post.": "花瓣路径：双手塑造大地，但不触及其他。 第一个工人开始了他们沉默的岗位。",
    "Prestige Now": "威望现在",
    "Prestige Options": "声望选项",
    "Primal Wiggle: Unlock the mystery of movement.": "原始摆动：解开运动的奥秘。",
    "Research": "研究",
    "Reset Game": "重置游戏",
    "Reset Tutorials": "重置教程",
    "Resilience Manifested: Overcame 10 major challenges or obstacles. Every setback, a lesson; every triumph, a silent victory in the void.": "表现出韧性：克服了 10 个主要挑战或障碍。 每一次挫折，都是一次教训； 每一次胜利，都是虚空中无声的胜利。",
    "Sagan's Symphony: Somewhere, something incredible is waiting to be known.": "萨根交响曲：在某个地方，有一些令人难以置信的事情等待着我们去发现。",
    "Save Game": "保存游戏",
    "Shadows of Eons: The Earth does not need new continents, but new men.": "亿万之影：地球需要的不是新大陆，而是新人类。",
    "Silent Symbiosis: In the quiet dark, a humble luminescence. Sustenance in silence.": "沉默共生：在安静的黑暗中，发出微弱的光芒。 默默地寄托。",
    "Sludge:": "污泥：",
    "Solara": "索拉拉",
    "Solara's Devotion: The falcon cannot hear the falconer; Yet love, spiraling outward, found its center.": "索拉拉的奉献：猎鹰听不到猎鹰人的声音； 然而，爱，螺旋向外，找到了它的中心。",
    "Solitary Sage: Alone with thoughts, the vast expanse of knowledge is both solace and torment.": "孤独圣人：独自思考，浩瀚的知识既是安慰也是折磨。",
    "Sorrow's Grip: Like anchors in a turbulent sea, your suction cups cling to an elusive, quiet stability.": "悲伤之握：就像汹涌大海中的锚一样，你的吸盘紧紧抓住难以捉摸、安静的稳定性。",
    "Soul": "灵魂",
    "Starlight Barbs: Glistening like constellations in a lonely sky, your spikes serve as both shield and spectacle.": "星光倒刺：你的尖刺就像孤独天空中的星座一样闪闪发光，既可以作为盾牌，也可以作为奇观。",
    "Subterranean Maestro: The cave becomes a labyrinth of connection, yet you remain apart.": "地下大师：洞穴变成了一个联系的迷宫，但你们仍然分开。",
    "Support on Patreon": "对 Patreon 的支持",
    "Tendril's Touch: You stretched out, seeking connection in a world of solitude.": "卷须之触：你伸展身体，在孤独的世界中寻求联系。",
    "Tentative Explorer: The first steps into the unknown, a mere glimpse of the vast expanse.": "尝试性探索者：踏入未知世界的第一步，只是瞥见广阔的广阔天地。",
    "Terra's Novice: Even in isolation, the world bends to will.": "泰拉的新手：即使孤立无援，世界也会屈服于意志。",
    "Terraform": "地形",
    "Theseus's Voyage: In the labyrinth of change, the string remains yet the maze is new.": "忒修斯的航行：在变化的迷宫中，绳子还在，但迷宫却是新的。",
    "Unhide": "取消隐藏",
    "v0.15": "v0.15",
    "Warmth in the Void: The fires below speak in tongues of flame, an ancient hymn sung to an empty cathedral.": "虚空中的温暖：下面的火焰用火焰的语言说话，这是一首为空荡荡的大教堂唱的古老赞美诗。",
    "Warmth:": "温暖：",
    "Web of Yearning: You ached for touch and found no comfort.": "渴望之网：你渴望触摸却找不到安慰。",
    "Whispering Waters: In the vast silence, a murmured promise.": "水语：在浩瀚的寂静中，低声的承诺。",
    "Whispers in the Wind: Sent out 500 echoes into the void, seeking, always seeking. Every silent return is a testament to perseverance.": "风中低语：向虚空发出500个回声，寻找，永远寻找。 每一次默默的回归，都是坚持的证明。",
    "Wiggle": "摆动",
    "Wipe Prestige": "抹去声望",
    "Worker Assignment": "工人分配",
    "World Discovery:": "世界探索：",
    "Yes, Evolve": "是的，进化",
    "Zoom In": "放大",
    "Zoom Out": "缩小",
    "Zoom Reset": "缩放重置",
    "Zymers:": "酶：",
    "Grow Tendon": "长肌腱",
    "Grow Tendon ": "长肌腱 ",
    "Sense": "感觉",
    "You bristle with each new addition, a growing storm against the cosmos.": "您对每增加一个新成员，对宇宙的越来越多的风暴都感到沮丧。",
    "You feel confined, each new tendril a string that ties you to solitude.": "您会感到被限制，每个新卷须都是将您与孤独联系在一起的弦。",
    "You feel your form harden, each new tendril a fortification against the relentless emptiness.": "您会感到自己的状态变硬，每个新卷须都会防御无情的空虚。",
    "You quiver in anticipation, eager to explore new textures and horizons.": "您期待着颤抖，渴望探索新的纹理和视野。",
    "You see these appendages as instruments of touch, feeling the heartbeats of a lifeless world.": "您将这些附属物视为触摸工具，感受到无生命世界的心跳。",
    "You sense a glimmering pathway opening, a bright tunnel amid perpetual shadow.": "您会感觉到一条闪闪发光的道路开口，在永久阴影中明亮的隧道。",
    "Your tendrils reach out, brushing against the boundaries of your existence. Each new addition is a fragment of possibility, a question unanswered. What does your form say about your fate?": "您的卷须伸出来，刷在您存在的边界上。 每个新增加都是可能性的片段，这是一个未解决的问题。 您对命运有何评论？",
    "The soul radar graph is a visual representation of the soul and personality you are forging through your choices. Each decision subtly impacts gameplay, affecting evolutionary paths, narrative elements, and game mechanics. This dynamic system reflects the uniqueness of your journey, creating a personalized experience shaped by your interactions and choices.": "灵魂雷达图是您通过选择锻造的灵魂和个性的视觉表现。 每个决策都会巧妙地影响游戏玩法，影响进化路径，叙事元素和游戏机制。 这个动态系统反映了您的旅程的独特性，创造了一种由您的互动和选择塑造的个性化体验。",
    "anger": "愤怒",
    "curiosity": "好奇心",
    "empathy": "共鸣",
    "loneliness": "孤独",
    "optimism": "乐观",
    "resilience": "适应力",
    "The oppressive silence weighs heavily on you. Are you the only one?": "压抑的沉默让你感到沉重。 你是唯一的一个吗？",
    "You feel a burning question, an itch to know the unknown.": "你感到一个迫切的问题，渴望了解未知的事物。",
    "You feel a deep sense of connection with the void.": "你会感受到与虚空的深刻联系。",
    "You feel a glimmer of hope, a twinkle in the vast darkness.": "你感受到一丝希望，在茫茫黑暗中闪烁。",
    "You feel a spark of fury, a wildfire in a starless night.": "你感受到一丝愤怒的火花，就像无星之夜中的野火。",
    "You feel abandoned, adrift in a sea of emptiness.": "你感到被遗弃，在空虚的海洋中漂流。",
    "You feel unbreakable, fortified by your solitude.": "你感到坚不可摧，孤独使你更加坚强。",
    "+0.01i per tendon/tick": "+0.01i 每肌腱/tick",
    "+0.04 warmth per tendon/tick": "每肌腱/tick+0.04 温暖",
    "+0.2 nourishment, +0.09 energy per tendon/tick": "每肌腱/tick +0.2 营养，+0.09 能量",
    "Description:": "描述：",
    "Each moment is a place you've never been, as you cling": "每一刻都是你从未去过的地方，因为你紧紧抓住",
    "Effect:": "影响：",
    "Glow softly, sharing warmth in your lonely existence": "温柔地发光，在孤独的存在中分享温暖",
    "Sense the world in whispers of light and shadow": "在光与影的低语中感知世界",
    "Cell Division [Action]": "细胞分裂[行动]",
    "Cell Membrane Studies": "细胞膜研究",
    "Delve into the intricacies of cellular division, exploring the complexities of mitosis.": "深入研究细胞分裂的复杂性，探索有丝分裂的复杂性。",
    "Dive deep into the structure and function of the cell membrane.": "深入研究细胞膜的结构和功能。",
    "Increases the efficiency of nutrient absorption.": "提高营养吸收的效率。",
    "Leads to:": "结果：",
    "Membrane Thickness [Evolution]": "膜厚度[进化]",
    "Mitochondria [Evolution]": "线粒体 [进化]",
    "Mitotic Studies": "有丝分裂研究",
    "Osmoregulation [Research]": "渗透调节 [研究]",
    "Requirement:": "要求：",
    "Title: Cell Membrane Studies": "标题：细胞膜研究",
    "Title: Mitotic Studies": "标题： 有丝分裂研究",
    "Unlock the ability to divide and create subordinate cells.": "解锁分裂和创建从属细胞的能力。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Glow": "发光",
    "Grab": "抓住",
    "Energy": "能量（e）",
    "Information": "信息（i）",
    "Nourishment": "营养（n）",
    "Warmth": "温暖（w）",
    "Evolution": "进化",
    "Actions": "动作",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Scientific": "科学计数法",
    "Standard": "标准",
    "Blind": "盲文",
    "Letters": "字母",
    "Mixed Engineering": "混合工程",
    "Mixed Scientific": "混合科学",
    "Chemistry": "化学",
    "Engineering": "工程符号",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'i': 'i',
    'I': 'I',
    'II': 'I',
    'III': 'III',
    'IV': 'IV',
    'V': 'V',
    'VI': 'VI',
    'VII': 'VII',
    'VIII': 'VIII',
    'X': 'X',
    'XI': 'XI',
    'XII': 'XII',
    'XIII': 'XIII',
    'XIV': 'XIV',
    'XV': 'XV',
    'XVI': 'XVI',
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'I': 'I',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    'M': 'M',
    'N': 'N',
    'O': 'O',
    'P': 'P',
    'Q': 'Q',
    'R': 'R',
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z',
    '<': '<',
    '<<': '<<',
    '>': '>',
    '>>': '>>',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀，此处可以截取语句开头部分的内容进行汉化
//例如：Coin: 13、Coin: 14、Coin: 15... 这种有相同开头的语句
//可以在这里汉化开头："Coin: ":"金币: "
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": " ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Notation: ": "符号: ",
    "Toggle Music: ": "切换声音: ",
    "Radiators (cost: ": "散热器（成本：",
    "Suction Cups (cost: ": "吸盘（成本：",
    "Synaptic Glacialis (cost: ": "突触冰（成本：",
    "Spikes (cost: ": "尖峰（成本：",
    "Sensory Pulsars (cost: ": "感官脉冲星（成本：",
    "Resonance Tendrils (cost: ": "共振卷须（成本：",
    "Mitochondria (cost: ": "线粒体（成本：",
    "Monotrichous Flagella (cost: ": "单毛鞭毛（成本：",
    "Membrane Thickness (cost: ": "膜厚度（成本：",
    "Lophotrichous Flagella (cost: ": "丛鞭毛（成本：",
    "Endoplasmic Reticulum (cost: ": "内质网（成本：",
    "Feathered Antenna (cost: ": "羽毛天线（成本：",
    "Echo Chamber (cost: ": "回声室（成本：",
    "Calorimetric Granulum (cost: ": "量热颗粒（成本：",
    "Nucleus (cost: ": "细胞核（成本：",
    "Sensors (cost: ": "传感器（成本：",
    "Grow Tendon (": "长肌腱 (",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀，此处可以截取语句结尾部分的内容进行汉化
//例如：13 Coin、14 Coin、15 Coin... 这种有相同结尾的语句
//可以在这里汉化结尾：" Coin":" 金币"
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "/sec)": "/秒)",
    "e)": "能量)",
    "n)": "营养)",
    "w)": "温暖)",
    "Maxed out)": "最大值）",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\$([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+) T$/,
    /^([\d\.]+) Qi$/,
    /^([\d\.]+) Qa$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\$([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+) \/ ([\d\.]+)e([\d\.,]+)$/,
    /^\$([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^\(cost: (.+)n (.+)i\)$/, '（成本：$1营养 $2信息）'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^([\d\.,]+) information.$/, '$1 信息。'],
    [/^([\d\.,]+)n ([\d\.,]+)$/, '$1营养 $2'],
    [/^([\d\.,]+)b ([\d\.,]+)z\)$/, '$1b $2z\)'],
    [/^([\d\.,]+)s, ([\d\.,]+)a\)$/, '$1s, $2a\)'],
    [/^([\d\.,]+)n ([\d\.,]+)i\)$/, '$1营养 $2信息\)'],
    [/^([\d\.,]+)n ([\d\.,]+)i ([\d\.,]+)$/, '$1营养 $2信息 $3'],
    [/^([\d\.,]+)n ([\d\.,]+)i ([\d\.,]+)w ([\d\.,]+)$/, '$1营养 $2信息 $3温暖 $4'],
    [/^([\d\.,]+)n ([\d\.,]+)i ([\d\.,]+)w (.+)$/, '$1营养 $2信息 $3温暖 $4'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);