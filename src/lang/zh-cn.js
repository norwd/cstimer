var OK_LANG = '确定';
var CANCEL_LANG = '取消';
var RESET_LANG = '重置';
var ABOUT_LANG = '关于';
var ZOOM_LANG = '缩放';
var COPY_LANG = '复制';
var BUTTON_TIME_LIST = '成绩<br>列表';
var BUTTON_OPTIONS = '设置';
var BUTTON_EXPORT = '导出';
var BUTTON_DONATE = '捐赠';
var PROPERTY_SR = '跟随分组';
var PROPERTY_USEINS = '使用WCA观察';
var PROPERTY_USEINS_STR = '总是(倒数)|总是(正数)|盲拧除外(倒数)|盲拧除外(正数)|从不';
var PROPERTY_SHOWINS = '当观察启用时显示小图标';
var PROPERTY_VOICEINS = 'WCA观察语音提示';
var PROPERTY_VOICEINS_STR = '无|男声|女声';
var PROPERTY_VOICEVOL = '语音音量';
var PROPERTY_PHASES = '多阶段测速';
var PROPERTY_TIMERSIZE = '计时器大小';
var PROPERTY_USEMILLI = '显示到0.001秒';
var PROPERTY_SMALLADP = '小数点后使用小字体';
var PROPERTY_SCRSIZE = '打乱字体大小';
var PROPERTY_SCRMONO = '等宽字体打乱';
var PROPERTY_SCRLIM = '限制打乱区的高度';
var PROPERTY_SCRALIGN = '打乱区对齐方式';
var PROPERTY_SCRALIGN_STR = '居中|左对齐|右对齐';
var PROPERTY_SCRWRAP = '打乱公式换行';
var PROPERTY_SCRWRAP_STR = '平衡|正常';
var PROPERTY_SCRNEUT = '六色底';
var PROPERTY_SCRNEUT_STR = '禁用|单色|双色|六色';
var PROPERTY_SCREQPR = '训练打乱状态出现概率';
var PROPERTY_SCREQPR_STR = '实际|等概率|随机顺序';
var PROPERTY_SCRFAST = '四阶魔方使用快速打乱（非官方）';
var PROPERTY_SCRKEYM = '标记打乱中的关键转动';
var PROPERTY_SCRCLK = '点击打乱时的动作';
var PROPERTY_SCRCLK_STR = '无|复制|下一个打乱';
var PROPERTY_WNDSCR = '打乱区显示样式';
var PROPERTY_WNDSTAT = '统计区显示样式';
var PROPERTY_WNDTOOL = '工具区显示样式';
var PROPERTY_WND_STR = '正常|平面';
var EXPORT_DATAEXPORT = '数据导入导出';
var EXPORT_TOFILE = '导出到文件';
var EXPORT_FROMFILE = '从文件导入';
var EXPORT_TOSERV = '导出到服务器';
var EXPORT_FROMSERV = '从服务器导入';
var EXPORT_FROMOTHER = '从其他计时器导入分组';
var EXPORT_USERID = '请输入帐号（限字母或数字）';
var EXPORT_INVID = '帐号名只能包含字母或数字！';
var EXPORT_ERROR = '出错了，我也想知道为什么……';
var EXPORT_NODATA = '此帐号还没有上传数据';
var EXPORT_UPLOADED = '上传成功';
var EXPORT_CODEPROMPT = '请保存该码，或粘贴其他码以导入设置';
var EXPORT_ONLYOPT = '仅导入导出设置';
var EXPORT_ACCOUNT = '导出帐号';
var EXPORT_LOGINGGL = '使用Google帐号登录';
var EXPORT_LOGINWCA = '使用WCA帐号登录';
var EXPORT_LOGOUTCFM = '确认注销登录？';
var EXPORT_LOGINAUTHED = '已获授权<br>正在获取数据...';
var EXPORT_AEXPALERT = '自上次备份已有%d次还原';
var EXPORT_WHICH = '你有%d个导出的文件，想要导入哪一个？';
var EXPORT_WHICH_ITEM = '%s个还原，上传于%t';
var IMPORT_FINAL_CONFIRM = '这将会覆盖所有本地数据！将至少修改%d个分组，添加%a并删除%r个成绩。确认导入数据？';
var BUTTON_SCRAMBLE = '打乱<br>公式';
var BUTTON_TOOLS = '工具';
var IMAGE_UNAVAILABLE = '不支持此打乱类型';
var TOOLS_SELECTFUNC = '选择功能';
var TOOLS_CROSS = '十字';
var TOOLS_EOLINE = 'EOLine';
var TOOLS_ROUX1 = '桥式S1';
var TOOLS_222FACE = '二阶一面';
var TOOLS_GIIKER = '蓝牙魔方';
var TOOLS_IMAGE = '打乱图案';
var TOOLS_STATS = '统计数据';
var TOOLS_HUGESTATS = '跨分组统计';
var TOOLS_DISTRIBUTION = '时间分布';
var TOOLS_TREND = '时间趋势';
var TOOLS_METRONOME = '节拍器';
var TOOLS_RECONS = '解法复盘';
var TOOLS_RECONS_NODATA = '未找到解法。';
var TOOLS_RECONS_TITLE = '观察|转动|步数|手速';
var TOOLS_TRAINSTAT = '训练统计';
var TOOLS_BLDHELPER = '盲拧助手';
var TOOLS_CFMTIME = '确认成绩';
var TOOLS_SOLVERS = '求解器';
var TOOLS_DLYSTAT = '逐日统计';
var TOOLS_DLYSTAT1 = '周期|分天时刻|周';
var TOOLS_DLYSTAT_OPT1 = '天|周|月|年';
var TOOLS_DLYSTAT_OPT2 = '日|一|二|三|四|五|六';
var TOOLS_SYNCSEED = '公共打乱';
var TOOLS_SYNCSEED_SEED = '种子';
var TOOLS_SYNCSEED_INPUT = '输入种子';
var TOOLS_SYNCSEED_30S = '使用30秒种子';
var TOOLS_SYNCSEED_HELP = '如果启用，打乱将只取决于种子和打乱设置。';
var TOOLS_SYNCSEED_DISABLE = '禁用当前种子？';
var TOOLS_SYNCSEED_INPUTA = '输入一个值（a-zA-Z0-9）作为种子';
var TOOLS_BATTLE = '在线对战';
var TOOLS_BATTLE_HEAD = '房间|加入房间';
var TOOLS_BATTLE_TITLE = '排名|状态|时间';
var TOOLS_BATTLE_STATUS = '就绪|观察|还原|完成|掉线';
var TOOLS_BATTLE_INFO = '和朋友们加入同一个房间，你们就可以进行对战。';
var TOOLS_BATTLE_JOINALERT = '请输入房间ID';
var TOOLS_BATTLE_LEAVEALERT = '离开当前房间';
var OLCOMP_UPDATELIST = '更新比赛列表';
var OLCOMP_VIEWRESULT = '查看结果';
var OLCOMP_VIEWMYRESULT = '我的历史';
var OLCOMP_START = '开始！';
var OLCOMP_SUBMIT = '提交！';
var OLCOMP_SUBMITAS = '提交ID：';
var OLCOMP_WCANOTICE = '以WCA帐号提交？（如果提交后未识别，重新登录即可）';
var OLCOMP_OLCOMP = '线上比赛';
var OLCOMP_ANONYM = '匿名';
var OLCOMP_ME = '我';
var OLCOMP_WCAACCOUNT = 'WCA帐号';
var OLCOMP_ABORT = '中止比赛并显示结果？';
var OLCOMP_WITHANONYM = '含匿名';
var PROPERTY_IMGSIZE = '打乱图案大小';
var PROPERTY_IMGREP = '点击打乱图案时显示虚拟魔方动画';
var TIMER_INSPECT = '观察';
var TIMER_SOLVE = '还原';
var PROPERTY_USEMOUSE = '启用鼠标计时';
var PROPERTY_TIMEU = '计时器更新方式';
var PROPERTY_TIMEU_STR = '实时|0.1秒|到秒|仅观察|隐藏';
var PROPERTY_PRETIME = '开始前按住空格时间（秒）';
var PROPERTY_ENTERING = '产生成绩通过';
var PROPERTY_ENTERING_STR = '计时器|手动输入|stackmat|MoYuTimer|虚拟魔方|蓝牙魔方|qCube|蓝牙计时器|顶层训练';
var PROPERTY_INTUNIT = '输入整数时的单位';
var PROPERTY_INTUNIT_STR = '秒|百分秒|毫秒';
var PROPERTY_COLOR = '选择颜色主题';
var PROPERTY_COLORS = '字体颜色|背景颜色|面板颜色|按钮颜色|链接颜色|Logo颜色|Logo背景';
var PROPERTY_VIEW = '界面风格显示为';
var PROPERTY_VIEW_STR = '自动|手机版|桌面版';
var PROPERTY_UIDESIGN = '界面设计为';
var PROPERTY_UIDESIGN_STR = '传统|材料设计|传统无阴影|材料设计无阴影';
var COLOR_EXPORT = '请保存以下字符串用于导入';
var COLOR_IMPORT = '请输入之前导出的字符串';
var COLOR_FAIL = '数据出错，导入失败';
var PROPERTY_FONTCOLOR_STR = '黑色|白色';
var PROPERTY_COLOR_STR = '自定义|导入/导出…|随机切换|春意盎然|金风玉露|血腥玛丽|水墨青华|银装素裹|荷塘月色|solarized dark|solarized light';
var PROPERTY_FONT = '选择计时器字体';
var PROPERTY_FONT_STR = '随机数码管|常规|数码管1|数码管2|数码管3|数码管4|数码管5';
var PROPERTY_FORMAT = '时间格式';
var PROPERTY_USEKSC = '使用键盘快捷键';
var PROPERTY_USEGES = '使用手势控制';
var PROPERTY_NTOOLS = '工具栏数量';
var PROPERTY_AHIDE = '计时过程中隐藏所有元素';
var SCRAMBLE_LAST = '上一条';
var SCRAMBLE_NEXT = '下一条';
var SCRAMBLE_SCRAMBLE = '打乱公式';
var SCRAMBLE_SCRAMBLING = '打乱中';
var SCRAMBLE_LENGTH = '长度';
var SCRAMBLE_INPUT = '输入打乱公式';
var SCRAMBLE_INPUTTYPE = '打乱类型';
var PROPERTY_VRCSPEED = 'VRC基础速度 (tps)';
var PROPERTY_VRCORI = '虚拟魔方视角';
var PROPERTY_VRCMP = '多阶段测速';
var PROPERTY_VRCMPS = '无|CFOP|CF+OP|CFFFFOP|CFFFFOOPP|桥式';
var PROPERTY_GIIKERVRC = '显示虚拟蓝牙魔方';
var PROPERTY_GIISOK_DELAY = '保持几秒后标记已打乱';
var PROPERTY_GIISOK_DELAYS = '2s|3s|4s|5s|从不|正确打乱';
var PROPERTY_GIISOK_KEY = '使用空格标记已打乱';
var PROPERTY_GIISOK_MOVE = '使用转动标记已打乱';
var PROPERTY_GIISOK_MOVES = 'U4, R4, 等|(U U\')2, (U\' U)2, 等|从不';
var PROPERTY_GIISBEEP = '标记已打乱时发出嘀声';
var PROPERTY_GIIRST = '连接时重置蓝牙魔方';
var PROPERTY_GIIRSTS = '总是|询问|从不';
var PROPERTY_GIIMODE = '蓝牙魔方模式';
var PROPERTY_GIIMODES = '正常|训练|连续训练';
var PROPERTY_VRCAH = '高阶魔方无用块';
var PROPERTY_VRCAHS = '隐藏|仅边框|仅色块|显示';
var CONFIRM_GIIRST = '重置蓝牙魔方为已还原？';
var PROPERTY_GIIAED = '自动硬件错误检测';
var scrdata = [
	['WCA', [
		['三阶速拧', "333", 0],
		['二阶速拧', "222so", 0],
		['四阶速拧', "444wca", -40],
		['五阶速拧', "555wca", -60],
		['六阶速拧', "666wca", -80],
		['七阶速拧', "777wca", -100],
		['三阶盲拧', "333ni", 0],
		['三阶最少步', "333fm", 0],
		['三阶单手', "333oh", 0],
		['魔表', "clkwca", 0],
		['五魔方', "mgmp", -70],
		['金字塔', "pyrso", -10],
		['斜转魔方', "skbso", 0],
		['Square-1', "sqrs", 0],
		['四阶盲拧', "444bld", -40],
		['五阶盲拧', "555bld", -60],
		['三阶多盲', "r3ni", 5]
	]],
	['输入', [
		['手动输入', "input", 0],
		['比赛', "remoteComp", 0],
		['在线对战', "remoteBattle", 0],
		['Remote', "remoteOther", 0]
	]],
	['===WCA===', [
		['--', "blank", 0]
	]],
	['3x3x3', [
		["随机状态 (WCA)", "333", 0],
		['随机转动', "333o", 25],
		['傻瓜', "333noob", 25],
		['棱块训练', "edges", 0],
		['角块训练', "corners", 0],
		['盲拧助手', "nocache_333bldspec", 0],
		['Pattern Tool', "nocache_333patspec", 0],
		['三阶脚拧', "333ft", 0],
		['自定义', "333custom", 0]
	]],
	['3x3x3 CFOP', [
		['PLL', "pll", 0],
		['OLL', "oll", 0],
		['F2L单组', "lsll2", 0],
		['顶层训练', "ll", 0],
		['ZBLL', "zbll", 0],
		['COLL', "coll", 0],
		['CLL', "cll", 0],
		['ELL', "ell", 0],
		['2GLL', "2gll", 0],
		['ZZLL', "zzll", 0],
		['ZBLS', "zbls", 0],
		['EOLS', "eols", 0],
		['WVLS', "wvls", 0],
		['VLS', "vls", 0],
		['F2L训练', "f2l", 0],
		['EOLine', "eoline", 0],
		['EO Cross', "eocross", 0],
		['简单十字', "easyc", 3],
		['简单XCross', "easyxc", 4]
	]],
	['3x3x3 Roux', [
		['2nd Block', "sbrx", 0],
		['CMLL', "cmll", 0],
		['LSE', "lse", 0],
		['LSE &lt;M, U&gt;', "lsemu", 0]
	]],
	['3x3x3 Mehta', [
		['3QB', "mt3qb", 0],
		['EOLE', "mteole", 0],
		['TDR', "mttdr", 0],
		['6CP', "mt6cp", 0],
		['CDRLL', "mtcdrll", 0],
		['L5EP', "mtl5ep", 0],
		['TTLL', "ttll", 0]
	]],
	['2x2x2', [
		["随机状态 (WCA)", "222so", 0],
		['最少步', "222o", 0],
		['3-gen', "2223", 25],
		['EG', "222eg", 0],
		['CLL', "222eg0", 0],
		['EG1', "222eg1", 0],
		['EG2', "222eg2", 0],
		['TCLL+', "222tcp", 0],
		['TCLL-', "222tcn", 0],
		['TCLL', "222tc", 0],
		['LS', "222lsall", 0],
		['无连色', "222nb", 0]
	]],
	['4x4x4', [
		["WCA", "444wca", -40],
		['随机转动', "444m", 40],
		['SiGN', "444", 40],
		['YJ', "444yj", 40],
		['对棱训练', "4edge", 0],
		['R,r,U,u', "RrUu", 40],
		['Last layer', "444ll", 0],
		['ELL', "444ell", 0],
		['Edge only', "444edo", 0],
		['Center only', "444cto", 0]
	]],
	['4x4x4 Yau/Hoya', [
		['UD center solved', "444ctud", 0],
		['UD+3E solved', "444ud3c", 0],
		['Last 8 dedges', "444l8e", 0],
		['RL center solved', "444ctrl", 0],
		['RLDX center solved', "444rlda", 0],
		['RLDX cross solved', "444rlca", 0]
	]],
	['5x5x5', [
		["WCA", "555wca", 60],
		['SiGN', "555", 60],
		['对棱训练', "5edge", 8]
	]],
	['6x6x6', [
		["WCA", "666wca", 80],
		['SiGN', "666si", 80],
		['prefix', "666p", 80],
		['suffix', "666s", 80],
		['对棱训练', "6edge", 8]
	]],
	['7x7x7', [
		["WCA", "777wca", 100],
		['SiGN', "777si", 100],
		['prefix', "777p", 100],
		['suffix', "777s", 100],
		['对棱训练', "7edge", 8]
	]],
	['魔表', [
		['WCA', "clkwca", 0],
		['wca (old)', "clkwcab", 0],
		['WCA w/o y2', "clknf", 0],
		['jaap', "clk", 0],
		['最少步', "clko", 0],
		['concise', "clkc", 0],
		['高效顺序', "clke", 0]
	]],
	['五魔方', [
		["WCA", "mgmp", 70],
		['Carrot', "mgmc", 70],
		['传统', "mgmo", 70],
		['2-generator R,U', "minx2g", 30],
		['last slot + last layer', "mlsll", 0],
		['PLL', "mgmpll", 0],
		['Last Layer', "mgmll", 0]
	]],
	['金字塔', [
		["随机状态 (WCA)", "pyrso", 10],
		['最少步', "pyro", 0],
		['随机转动', "pyrm", 25],
		['L4E', "pyrl4e", 0],
		['4 tips', "pyr4c", 0],
		['No bar', "pyrnb", 0]
	]],
	['Skewb', [
		["随机状态 (WCA)", "skbso", 0],
		['最少步', "skbo", 0],
		['随机转动', "skb", 25],
		['No bar', "skbnb", 0]
	]],
	['Square-1', [
		["随机状态 (WCA)", "sqrs", 0],
		["CSP", "sqrcsp", 0],
		["PLL", "sq1pll", 0],
		['ftm', "sq1h", 40],
		['ttm', "sq1t", 20]
	]],
	['===其他===', [
		['--', "blank", 0]
	]],
	['15 puzzle', [
		['随机状态 URLD', "15prp", 0],
		['随机状态 ^<>v', "15prap", 0],
		['随机状态 Blank', "15prmp", 0],
		['随机转动 URLD', "15p", 80],
		['随机转动 ^<>v', "15pat", 80],
		['随机转动 Blank', "15pm", 80]
	]],
	['8 puzzle', [
		['随机状态 URLD', "8prp", 0],
		['随机状态 ^<>v', "8prap", 0],
		['随机状态 Blank', "8prmp", 0]
	]],
	['LxMxN', [
		['1x3x3', "133", 0],
		['2x2x3', "223", 0],
		['2x3x3', "233", 25],
		['3x3x4', "334", 40],
		['3x3x5', "335", 25],
		['3x3x6', "336", 40],
		['3x3x7', "337", 40],
		['8x8x8', "888", 120],
		['9x9x9', "999", 120],
		['10x10x10', "101010", 120],
		['11x11x11', "111111", 120],
		['NxNxN', "cubennn", 12]
	]],
	['齿轮魔方', [
		['随机状态', "gearso", 0],
		['最少步', "gearo", 0],
		['随机转动', "gear", 10]
	]],
	['Kilominx', [
		['随机状态', "klmso", 0],
		['Pochmann', "klmp", 30]
	]],
	['五阶五魔', [
		['Pochmann', "giga", 300]
	]],
	['Crazy Puzzle', [
		['Crazy 3x3x3', "crz3a", 30]
	]],
	['Cmetrick', [
		['Cmetrick', "cm3", 25],
		['Cmetrick Mini', "cm2", 25]
	]],
	['Helicopter Cube', [
		['Heli copter', "heli", 40],
		['Curvy copter', "helicv", 40],
		['2x2 Heli random move', "heli2x2", 70],
		['2x2 Heli by group', "heli2x2g", 5]
	]],
	['Redi Cube', [
		['随机状态', "rediso", 0],
		['MoYu', "redim", 8],
		['随机转动', "redi", 20]
	]],
	['Dino Cube', [
		['随机状态', "dinoso", 0],
		['最少步', "dinoo", 0]
	]],
	['枫叶魔方', [
		['随机状态', "ivyso", 0],
		['最少步', "ivyo", 0],
		['随机转动', "ivy", 10]
	]],
	['Master Pyraminx', [
		['随机状态', "mpyrso", 0],
		['随机转动', "mpyr", 42]
	]],
	['Pyraminx Crystal', [
		['Pochmann', "prcp", 70],
		['传统', "prco", 70]
	]],
	['Siamese Cube', [
		['1x1x3 block', "sia113", 25],
		['1x2x3 block', "sia123", 25],
		['2x2x2 block', "sia222", 25]
	]],
	['Square', [
		['Square-2', "sq2", 20],
		['Super Square-1', "ssq1t", 20]
	]],
	['Super Floppy', [
		[' ', "sfl", 25]
	]],
	['UFO', [
		['Jaap style', "ufo", 25]
	]],
	['FTO (Face-Turning Octahedron)', [
		['随机状态', "ftoso", 0],
		['随机转动', "fto", 30],
		['L3T', "ftol3t", 0],
		['L3T+LBT', "ftol4t", 0],
		['TCP', "ftotcp", 0],
		['edges only', "ftoedge", 0],
		['centers only', "ftocent", 0],
		['corners only', "ftocorn", 0],
		['Diamond 随机状态', "dmdso", 0]
	]],
	['Icosahedron', [
		['Icosamate 随机转动', "ctico", 60]
	]],
	['===训练===', [
		['--', "blank", 0]
	]],
	['3x3x3子集', [
		['2-generator R,U', "2gen", 0],
		['2-generator L,U', "2genl", 0],
		['Roux-generator M,U', "roux", 0],
		['3-generator F,R,U', "3gen_F", 0],
		['3-generator R,U,L', "3gen_L", 0],
		['3-generator R,r,U', "RrU", 0],
		['Domino Subgroup', "333drud", 0],
		['half turns only', "half", 0],
		['last slot + last layer (old)', "lsll", 15]
	]],
	['捆绑魔方', [
		['Bicube', "bic", 30],
		['Square-1 /,(1,0)', "bsq", 25]
	]],
	['连拧', [
		['N个三阶', "r3", 5],
		['2到4阶', "r234", 0],
		['2到5阶', "r2345", 0],
		['2到6阶', "r23456", 0],
		['2到7阶', "r234567", 0],
		['2到4阶 (WCA)', "r234w", 0],
		['2到5阶 (WCA)', "r2345w", 0],
		['2到6阶 (WCA)', "r23456w", 0],
		['2到7阶 (WCA)', "r234567w", 0],
		['Mini Guildford', "rmngf", 0]
	]],
	['===213===', [
		['--', "blank", 0]
	]],
	['1x1x1', [
		['x y z', "111", 25]
	]],
	['-1x-1x-1', [
		[' ', "-1", 25]
	]],
	['1x1x2', [
		[' ', "112", 25]
	]],
	['LOL', [
		[' ', "lol", 25]
	]],
	['Derrick Eide', [
		[' ', "eide", 25]
	]]
];
var SCRAMBLE_NOOBST = [
	['上面', '下面'],
	['左面', '右面'],
	['前面', '后面']
];
var SCRAMBLE_NOOBSS = '顺时针转90度,|逆时针转90度,|转180度,';
var SCROPT_TITLE = '打乱选项';
var SCROPT_BTNALL = '全选';
var SCROPT_BTNNONE = '清空';
var SCROPT_EMPTYALT = '请至少选择一个情况';
var STATS_CFM_RESET = '确认清空该组所有数据？';
var STATS_CFM_DELSS = '确认删除分组[%s]？';
var STATS_CFM_DELMUL = '从当前位置开始删除几个成绩？';
var STATS_CFM_DELETE = '确认删除该成绩？';
var STATS_COMMENT = '注释';
var STATS_REVIEW = '回顾';
var STATS_DATE = '日期';
var STATS_SSSTAT = '单还原统计';
var STATS_SSRETRY = '重试打乱';
var STATS_CURROUND = '本轮统计信息';
var STATS_CURSESSION = '本组统计信息';
var STATS_CURSPLIT = '本组分段%d统计信息';
var STATS_EXPORTCSV = '导出CSV';
var STATS_SSMGR_TITLE = '分组管理';
var STATS_SSMGR_NAME = '名称';
var STATS_SSMGR_DETAIL = '分组详情';
var STATS_SSMGR_OPS = '重命名|新建|分割|合并|删除|排序|合并去重';
var STATS_SSMGR_ORDER = '根据打乱重排';
var STATS_SSMGR_ODCFM = '将所有分组根据打乱重排？';
var STATS_SSMGR_SORTCFM = '将会重排%d个成绩，确定？';
var STATS_ALERTMG = '将分组[%f]的所有成绩合并至分组[%t]的末尾？';
var STATS_PROMPTSPL = '从分组[%s]分割最新的几个成绩？';
var STATS_ALERTSPL = '至少需要分割或保留1个成绩';
var STATS_AVG = '平均';
var STATS_SUM = '总和';
var STATS_SOLVE = '还原';
var STATS_TIME = '时间';
var STATS_SESSION = '分组';
var STATS_SESSION_NAME = '修改分组名称';
var STATS_SESSION_NAMEC = '新分组的名称';
var STATS_STRING = '最快|当前|最慢|该统计信息由csTimer自动生成于%Y年%M月%D日|还原/总数：%d|单次时间|%mk次平均|%mk次去尾|总去尾：%v{ (σ = %sgm)}|总平均：%v|详细时间：|还原于%s至%e|总耗时：%d|目标';
var STATS_PREC = '时间分布显示精度';
var STATS_PREC_STR = '自动|0.1s|0.2s|0.5s|1s|2s|5s|10s|20s|50s|100s';
var STATS_TYPELEN = '滚动列表%d类型|滚动列表%d长度|去尾平均|平均';
var STATS_STATCLR = '启用分组清空';
var STATS_ABSIDX = '在统计报告中显示绝对索引';
var STATS_XSESSION_DATE = '任意日期|24小时内|7天内|30天内|365天内';
var STATS_XSESSION_NAME = '任意名称';
var STATS_XSESSION_SCR = '任意打乱';
var STATS_XSESSION_CALC = '计算';
var STATS_RSFORSS = '点击还原序号时显示统计';
var PROPERTY_PRINTSCR = '成绩统计中显示打乱';
var PROPERTY_PRINTCOMM = '成绩统计中显示注释';
var PROPERTY_PRINTDATE = '成绩统计中显示日期';
var PROPERTY_SUMMARY = '成绩列表前显示摘要';
var PROPERTY_IMRENAME = '新建分组时重命名';
var PROPERTY_SCR2SS = '改变打乱类型时新建分组';
var PROPERTY_SS2SCR = '改变分组时自动选择打乱类型';
var PROPERTY_SS2PHASES = '改变分组时自动设置多阶段测速';
var PROPERTY_STATINV = '倒序显示成绩列表';
var PROPERTY_STATSSUM = '在成绩列表中显示总和';
var PROPERTY_STATTHRES = '显示创造最快所需的目标时间';
var PROPERTY_STATBPA = '显示最好可能平均（BPA）';
var PROPERTY_STATWPA = '显示最坏可能平均（WPA）';
var PROPERTY_STATAL = '统计指标';
var PROPERTY_STATALU = '自定义的统计指标';
var PROPERTY_HLPBS = '高亮个人最好成绩';
var PROPERTY_HLPBS_STR = '深橙色同WCA|同链接颜色|加粗|无';
var PROPERTY_DELMUL = '启用批量删除';
var PROPERTY_TOOLSFUNC = '选择的功能';
var PROPERTY_TRIM = '删去几个最好成绩';
var PROPERTY_TRIMR = '删去几个最坏成绩';
var PROPERTY_TRIM_MED = '中位数';
var PROPERTY_STKHEAD = '使用Stackmat状态信息';
var PROPERTY_TOOLPOS = '工具面板位置';
var PROPERTY_TOOLPOS_STR = '下面|浮动|上面';
var PROPERTY_HIDEFULLSOL = '逐步显示解法';
var PROPERTY_IMPPREV = '导入非最新数据';
var PROPERTY_AUTOEXP = '自动导出（每100次还原）';
var PROPERTY_AUTOEXP_OPT = '从不|到文件|用csTimer账号|用WCA账号|用Google账号|仅警告';
var PROPERTY_SCRASIZE = '自动打乱字体大小';
var MODULE_NAMES = {
	"kernel": '全局',
	"ui": '界面',
	"color": '配色',
	"timer": '计时',
	"scramble": '打乱',
	"stats": '统计',
	"tools": '工具',
	"vrc": '虚拟&<br>蓝牙魔方'
};
var BGIMAGE_URL = '请输入图片地址(url)';
var BGIMAGE_INVALID = '无效地址';
var BGIMAGE_OPACITY = '背景图片不透明度';
var BGIMAGE_IMAGE = '背景图片';
var BGIMAGE_IMAGE_STR = '无|自定义|CCT';
var SHOW_AVG_LABEL = '显示平均标签';
var SHOW_DIFF_LABEL = '显示对比标签';
var SHOW_DIFF_LABEL_STR = '-绿+红|-红+绿|正常|无';
var USE_LOGOHINT = '在Logo中提示信息';
var TOOLS_SCRGEN = '打乱生成器';
var SCRGEN_NSCR = '打乱个数';
var SCRGEN_PRE = '前缀';
var SCRGEN_GEN = '生成打乱！';
var VRCREPLAY_TITLE = '虚拟魔方回放';
var VRCREPLAY_ORI = '原始朝向|自动朝向';
var VRCREPLAY_SHARE = '分享链接';
var GIIKER_CONNECT = '点击连接';
var GIIKER_RESET = '重置（置为还原）';
var GIIKER_REQMACMSG = '请输入智能硬件的MAC地址（xx:xx:xx:xx:xx:xx），你可以通过这个链接 chrome://bluetooth-internals/#devices 找到MAC地址，或者修改以下配置让csTimer自动获取蓝牙地址：\nChrome：在浏览器设置里打开chrome://flags/#enable-experimental-web-platform-features\nBluefy：在浏览器设置里开启Enable BLE Advertisements';
var GIIKER_NOBLEMSG = '蓝牙API不可用。请确认使用https访问，检查蓝牙功能开启，并在chrome浏览器上打开 chrome://flags/#enable-experimental-web-platform-features';
var PROPERTY_SHOWAD = '显示广告（刷新后生效）';
var PROPERTY_GIIORI = '魔方朝向';
var LGHINT_INVALID = '无效值！';
var LGHINT_NETERR = '网络错误！';
var LGHINT_SERVERR = '服务器错误！';
var LGHINT_SUBMITED = '已提交';
var LGHINT_SSBEST = '分组最快%s！';
var LGHINT_SCRCOPY = '打乱已复制';
var LGHINT_LINKCOPY = '分享链接已复制';
var LGHINT_SOLVCOPY = '还原已复制';
var LGHINT_SORT0 = '已经有序';
var LGHINT_IMPORTED = '导入%d个分组';
var LGHINT_IMPORT0 = '未导入分组';
var LGHINT_BTCONSUC = '蓝牙连接成功';
var LGHINT_BTDISCON = '蓝牙连接已断开';
var LGHINT_BTNOTSUP = '不支持你的智能魔方';
var LGHINT_BTINVMAC = '无效的MAC地址，无法连接你的智能魔方';
var LGHINT_AEXPABT = '自动导出中止';
var LGHINT_AEXPSUC = '自动导出成功';
var LGHINT_AEXPFAL = '自动导出失败';
var EASY_SCRAMBLE_HINT = '更改长度可以限制解法长度的上限，输入2个数字可以同时限制下限（<= 8）和上限';
