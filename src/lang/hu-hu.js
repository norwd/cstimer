var OK_LANG = 'OK';
var CANCEL_LANG = 'Mégse';
var RESET_LANG = 'Visszaállít';
var ABOUT_LANG = 'Rólunk';
var ZOOM_LANG = 'Nagyítás';
var COPY_LANG = 'Copy';
var BUTTON_TIME_LIST = 'IDŐK<br>MUTATÁSA';
var BUTTON_OPTIONS = 'BEÁLLÍTÁSOK';
var BUTTON_EXPORT = 'EXPORTÁLÁS';
var BUTTON_DONATE = 'ADOMÁNYOZÁS';
var PROPERTY_SR = 'Időszakkal';
var PROPERTY_USEINS = 'WCA memorizációs ideje';
var PROPERTY_USEINS_STR = 'Always (down)|Always (up)|Except BLD (down)|Except BLD (up)|Never';
var PROPERTY_SHOWINS = 'Show an icon when inspection is enabled';
var PROPERTY_VOICEINS = 'WCA megnézési figyelmeztetés hangja';
var PROPERTY_VOICEINS_STR = 'nincs|férfi hang|női hang';
var PROPERTY_VOICEVOL = 'Hang hangereje';
var PROPERTY_PHASES = 'több fázis';
var PROPERTY_TIMERSIZE = 'időmérő mérete';
var PROPERTY_USEMILLI = 'milliszekundum használata';
var PROPERTY_SMALLADP = 'kisebb számok használata a tizedespont után';
var PROPERTY_SCRSIZE = 'keverés mérete';
var PROPERTY_SCRMONO = 'Keverés megjelenítése monospace betűtípussal';
var PROPERTY_SCRLIM = 'Keverési terület magasságának korlátozása';
var PROPERTY_SCRALIGN = 'Keverési terület elhelyezése';
var PROPERTY_SCRALIGN_STR = 'közép|bal|jobb';
var PROPERTY_SCRWRAP = 'Scramble Wrap';
var PROPERTY_SCRWRAP_STR = 'Balanced|Normal';
var PROPERTY_SCRNEUT = 'Color neutral';
var PROPERTY_SCRNEUT_STR = 'None|Single face|Double faces|Six faces';
var PROPERTY_SCREQPR = 'Probabilities for training-scramble states';
var PROPERTY_SCREQPR_STR = 'Actual|Equal|Random order';
var PROPERTY_SCRFAST = 'Gyors keverés használata 4x4x4-hez (nem hivatalos)';
var PROPERTY_SCRKEYM = 'Fő mozdulat(ok) megjelölése a keverésben';
var PROPERTY_SCRCLK = 'Akció a keverésre kattintáskor';
var PROPERTY_SCRCLK_STR = 'Semmi|Másolás|Következő keverés';
var PROPERTY_WNDSCR = 'Keverési panel stílusa';
var PROPERTY_WNDSTAT = 'Statisztikai panel stílusa';
var PROPERTY_WNDTOOL = 'Eszközök panel stílusa';
var PROPERTY_WND_STR = 'Normál|Lapos';
var EXPORT_DATAEXPORT = 'Adatok importálása/exportálása';
var EXPORT_TOFILE = 'Exportálás file-ba';
var EXPORT_FROMFILE = 'Importálás file-ból';
var EXPORT_TOSERV = 'Exportálás a szerverre';
var EXPORT_FROMSERV = 'Importálás a szerverről';
var EXPORT_FROMOTHER = 'Szakasz(ok) importálása más időmérőkből';
var EXPORT_USERID = 'Kérlek, add meg a fiókod (csak betűk és számok)';
var EXPORT_INVID = 'Csak betűk és számok megengedettek!';
var EXPORT_ERROR = 'Néhány probléma lépett fel...';
var EXPORT_NODATA = 'Nem található adat a fiókodon';
var EXPORT_UPLOADED = 'Sikeresen feltöltve';
var EXPORT_CODEPROMPT = 'Mentsd el ezt a kódot, vagy írj be mentett kódot az importáláshoz';
var EXPORT_ONLYOPT = 'Csak a beállítások exportálása/importálása';
var EXPORT_ACCOUNT = 'Fiókok exportálása';
var EXPORT_LOGINGGL = 'Belépés Google Fiókkal';
var EXPORT_LOGINWCA = 'Belépés WCA Fiókkal';
var EXPORT_LOGOUTCFM = 'Biztosan kilépsz?';
var EXPORT_LOGINAUTHED = 'Engedélyezve<br>Adatok letöltése...';
var EXPORT_AEXPALERT = 'More than %d solves since last backup';
var EXPORT_WHICH = 'You have %d file(s), which one should be imported?';
var EXPORT_WHICH_ITEM = '%s solve(s), uploaded at %t';
var IMPORT_FINAL_CONFIRM = 'Ez minden helyi adatot felülír! Módosítani fog %d időszakot, hozzáad legalább %a és töröl legalább %r megoldást. Biztosan folytatja az importálást?';
var BUTTON_SCRAMBLE = 'KEVE-<br>RÉS';
var BUTTON_TOOLS = 'ESZ-<br>KÖZÖK';
var IMAGE_UNAVAILABLE = 'Nem elérhető ebben a keverési típusban';
var TOOLS_SELECTFUNC = 'Funkció';
var TOOLS_CROSS = 'kereszt megoldása';
var TOOLS_EOLINE = 'EOLine megoldása';
var TOOLS_ROUX1 = 'Roux S1 megoldása';
var TOOLS_222FACE = '2x2x2 oldal';
var TOOLS_GIIKER = 'Giiker kocka';
var TOOLS_IMAGE = 'Keverés mutatása';
var TOOLS_STATS = 'Statisztikák';
var TOOLS_HUGESTATS = 'több szakasz statisztikái';
var TOOLS_DISTRIBUTION = 'idő megoszlása';
var TOOLS_TREND = 'idő trend';
var TOOLS_METRONOME = 'metronóm';
var TOOLS_RECONS = 'Reconstruct';
var TOOLS_RECONS_NODATA = 'No solution found.';
var TOOLS_RECONS_TITLE = 'insp|exec|turn|tps';
var TOOLS_TRAINSTAT = 'Training Stat.';
var TOOLS_BLDHELPER = 'BLD Helper';
var TOOLS_CFMTIME = 'Idő megerősítése';
var TOOLS_SOLVERS = 'Kirakók';
var TOOLS_DLYSTAT = 'Daily Statistics';
var TOOLS_DLYSTAT1 = 'Period|Start of Day|Week';
var TOOLS_DLYSTAT_OPT1 = 'day|week|month|year';
var TOOLS_DLYSTAT_OPT2 = 'Sun|Mon|Tue|Wed|Thu|Fri|Sat';
var TOOLS_SYNCSEED = 'Közös keverés';
var TOOLS_SYNCSEED_SEED = 'Kezdőérték';
var TOOLS_SYNCSEED_INPUT = 'Kezdőérték megadása';
var TOOLS_SYNCSEED_30S = '30s kezdőérték használata';
var TOOLS_SYNCSEED_HELP = 'If enabled, scramble will only depend on the seed and scramble settings.';
var TOOLS_SYNCSEED_DISABLE = 'Kikapcsolod a jelenlegi kezdőértéket?';
var TOOLS_SYNCSEED_INPUTA = 'Adj meg egy kezdőértéket (a-zA-Z0-9)';
var TOOLS_BATTLE = 'Online battle';
var TOOLS_BATTLE_HEAD = 'Room|Join Room';
var TOOLS_BATTLE_TITLE = 'Rank|Status|Time';
var TOOLS_BATTLE_STATUS = 'Ready|Inspect|Solving|Solved|Lost';
var TOOLS_BATTLE_INFO = 'Join a battle room with your friend, then you will battle together.';
var TOOLS_BATTLE_JOINALERT = 'Please input the room ID';
var TOOLS_BATTLE_LEAVEALERT = 'Leave current room';
var OLCOMP_UPDATELIST = 'Verseny lista frissítése';
var OLCOMP_VIEWRESULT = 'Eredmény megtekintése';
var OLCOMP_VIEWMYRESULT = 'Előzményeim';
var OLCOMP_START = 'Start!';
var OLCOMP_SUBMIT = 'Beküldés!';
var OLCOMP_SUBMITAS = 'Beküldés mint: ';
var OLCOMP_WCANOTICE = 'Beküldés a WCA fiókodként? (Lépj be újra, ha beküldés után nem ismer fel)';
var OLCOMP_OLCOMP = 'Online verseny';
var OLCOMP_ANONYM = 'Névtelen';
var OLCOMP_ME = 'Én';
var OLCOMP_WCAACCOUNT = 'WCA Fiók';
var OLCOMP_ABORT = 'Megszakítod a versenyt és megnézed az eredményeket?';
var OLCOMP_WITHANONYM = 'Névtelennel';
var PROPERTY_IMGSIZE = 'Keverési kép mérete';
var PROPERTY_IMGREP = 'Show virtual cube animation when clicking scramble image';
var TIMER_INSPECT = 'megfigyelés';
var TIMER_SOLVE = 'megoldás';
var PROPERTY_USEMOUSE = 'egér használata időmérőként';
var PROPERTY_TIMEU = 'időmérő beállítása';
var PROPERTY_TIMEU_STR = 'frissítés|0.1s|másodpercek|megnézés|nincs';
var PROPERTY_PRETIME = 'a szóköz lenttartásának az ideje (másodpercben)';
var PROPERTY_ENTERING = 'eredmény bevitele';
var PROPERTY_ENTERING_STR = 'időmérővel|gépeléssel|stackmattel|MoYuTimer|virtuálisan|Bluetooth Cube|qCube|Bluetooth Timer|last layer training';
var PROPERTY_INTUNIT = 'Mértékegység egész megadásakor';
var PROPERTY_INTUNIT_STR = 'másodperc|századmásodperc|ezredmásodperc';
var PROPERTY_COLOR = 'színséma választása';
var PROPERTY_COLORS = 'betűszín|háttérszín|tábla színe|gomb színe|link színe|logó színe|logó háttérszíne';
var PROPERTY_VIEW = 'A felület stílusa';
var PROPERTY_VIEW_STR = 'Automatikus|Mobil|Asztali';
var PROPERTY_UIDESIGN = 'Az oldal stílusa';
var PROPERTY_UIDESIGN_STR = 'Normál|Material dizájn|Normál árnyékok nélkül|Material dizájn árnyékok nélkül';
var COLOR_EXPORT = 'Kérlek, mentsd el a szöveget importáláshoz!';
var COLOR_IMPORT = 'Kérlek, add meg az exportált szöveget!';
var COLOR_FAIL = 'Helytelen adatok, importálás sikertelen';
var PROPERTY_FONTCOLOR_STR = 'fekete|fehér';
var PROPERTY_COLOR_STR = 'manual|import/export...|random|1-es stílus|2-es stílus|3-as stílus|fekete|fehér|6-os stílus|solarized dark|solarized light';
var PROPERTY_FONT = 'időmérő betűtípusa';
var PROPERTY_FONT_STR = 'random digitális|normál|1-es digitális|2-es digitális|3-as digitális|4-es digitális|5-ös digitális';
var PROPERTY_FORMAT = 'idő formátum';
var PROPERTY_USEKSC = 'billentyűparancsok használata';
var PROPERTY_USEGES = 'use gesture control';
var PROPERTY_NTOOLS = 'eszközök száma';
var PROPERTY_AHIDE = 'Összes elem elrejtése mérés közben';
var SCRAMBLE_LAST = 'utolsó';
var SCRAMBLE_NEXT = 'következő';
var SCRAMBLE_SCRAMBLE = ' keverés';
var SCRAMBLE_SCRAMBLING = 'Scrambling';
var SCRAMBLE_LENGTH = 'hosszúság';
var SCRAMBLE_INPUT = 'keverések bevitele';
var SCRAMBLE_INPUTTYPE = 'Scramble type';
var PROPERTY_VRCSPEED = 'VRC alap sebessége (tps)';
var PROPERTY_VRCORI = 'Virtual cube orientation';
var PROPERTY_VRCMP = 'többfázisú';
var PROPERTY_VRCMPS = 'Nincs|CFOP|CF+OP|CFFFFOP|CFFFFOOPP|Roux';
var PROPERTY_GIIKERVRC = 'Virtuális Giiker kocka mutatása';
var PROPERTY_GIISOK_DELAY = 'Megjelőlés kevertként ekkor:';
var PROPERTY_GIISOK_DELAYS = '2s|3s|4s|5s|Soha|Helyes keverésnél';
var PROPERTY_GIISOK_KEY = 'Megjelőlés kevertként szóközzel';
var PROPERTY_GIISOK_MOVE = 'Megjelelés keverként a következővel';
var PROPERTY_GIISOK_MOVES = 'U4, R4, stb|(U U\')2, (U\' U)2, stb|Soha';
var PROPERTY_GIISBEEP = 'Hangjelzés kevertnek jelöléskor';
var PROPERTY_GIIRST = 'Giiker kocka visszaállítása csatlakozáskor';
var PROPERTY_GIIRSTS = 'mindig|rákérdezés|soha';
var PROPERTY_GIIMODE = 'Bluetooth Cube Mode';
var PROPERTY_GIIMODES = 'Normal|Training|Continuous training';
var PROPERTY_VRCAH = 'Useless pieces in huge cube';
var PROPERTY_VRCAHS = 'Hide|Border|Color|Show';
var CONFIRM_GIIRST = 'Giiker kocka visszaállítása kirakottra?';
var PROPERTY_GIIAED = 'Automatikus hardver hiba érzékelés';
var scrdata = [
	['WCA', [
		['3x3x3', "333", 0],
		['2x2x2', "222so", 0],
		['4x4x4', "444wca", -40],
		['5x5x5', "555wca", -60],
		['6x6x6', "666wca", -80],
		['7x7x7', "777wca", -100],
		['3x3 bld (vakon)', "333ni", 0],
		['3x3 FM', "333fm", 0],
		['3x3 oh (egykezes)', "333oh", 0],
		['óra', "clkwca", 0],
		['megaminx', "mgmp", -70],
		['pyraminx', "pyrso", -10],
		['skewb', "skbso", 0],
		['sq1', "sqrs", 0],
		['4x4 BLD', "444bld", -40],
		['5x5 BLD', "555bld", -60],
		['3x3 MBLD', "r3ni", 5]
	]],
	['Bevitel', [
		['外部', "input", 0],
		['Verseny', "remoteComp", 0],
		['Online battle', "remoteBattle", 0],
		['Remote', "remoteOther", 0]
	]],
	['===WCA===', [
		['--', "blank", 0]
	]],
	['3x3x3', [
		["véletlen állapot (WCA)", "333", 0],
		['véletlen mozdulat', "333o", 25],
		['3x3x3 kezdőknek', "333noob", 25],
		['csak élek', "edges", 0],
		['csak sarkok', "corners", 0],
		['BLD Helper', "nocache_333bldspec", 0],
		['Pattern Tool', "nocache_333patspec", 0],
		['3x3 ft (lábbal)', "333ft", 0],
		['Custom', "333custom", 0]
	]],
	['3x3x3 CFOP', [
		['PLL', "pll", 0],
		['OLL', "oll", 0],
		['utolsó pár + utolsó réteg', "lsll2", 0],
		['utolsó réteg', "ll", 0],
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
		['kereszt megoldva', "f2l", 0],
		['EOLine', "eoline", 0],
		['EO Cross', "eocross", 0],
		['könnyű kereszt', "easyc", 3],
		['easy xcross', "easyxc", 4]
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
		["véletlen állapot (WCA)", "222so", 0],
		['optimális', "222o", 0],
		['3-gen', "2223", 25],
		['EG', "222eg", 0],
		['CLL', "222eg0", 0],
		['EG1', "222eg1", 0],
		['EG2', "222eg2", 0],
		['TCLL+', "222tcp", 0],
		['TCLL-', "222tcn", 0],
		['TCLL', "222tc", 0],
		['LS', "222lsall", 0],
		['Oszlop nélkül', "222nb", 0]
	]],
	['4x4x4', [
		["WCA", "444wca", -40],
		['véletlen mozdulatok', "444m", 40],
		['SiGN', "444", 40],
		['YJ', "444yj", 40],
		['4x4x4 élek', "4edge", 0],
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
		['5x5x5 élek', "5edge", 8]
	]],
	['6x6x6', [
		["WCA", "666wca", 80],
		['SiGN', "666si", 80],
		['előtag', "666p", 80],
		['utótag', "666s", 80],
		['6x6x6 élek', "6edge", 8]
	]],
	['7x7x7', [
		["WCA", "777wca", 100],
		['SiGN', "777si", 100],
		['előtag', "777p", 100],
		['utótag', "777s", 100],
		['7x7x7 élek', "7edge", 8]
	]],
	['Óra', [
		['WCA', "clkwca", 0],
		['wca (old)', "clkwcab", 0],
		['WCA w/o y2', "clknf", 0],
		['jaap', "clk", 0],
		['optimális', "clko", 0],
		['tömör', "clkc", 0],
		['hatékony pöcök sorrend', "clke", 0]
	]],
	['Megaminx', [
		["WCA", "mgmp", 70],
		['Répa', "mgmc", 70],
		['régi stílus', "mgmo", 70],
		['2-gen R,U', "minx2g", 30],
		['utolsó pár + utolsó réteg', "mlsll", 0],
		['PLL', "mgmpll", 0],
		['Last Layer', "mgmll", 0]
	]],
	['Pyraminx', [
		["véletlen állapot (WCA)", "pyrso", 10],
		['optimális', "pyro", 0],
		['véletlen mozdulat', "pyrm", 25],
		['L4E', "pyrl4e", 0],
		['4 tips', "pyr4c", 0],
		['No bar', "pyrnb", 0]
	]],
	['Skewb', [
		["véletlen állapot (WCA)", "skbso", 0],
		['optimális', "skbo", 0],
		['véletlen mozdulat', "skb", 25],
		['No bar', "skbnb", 0]
	]],
	['Square-1', [
		["véletlen állapot (WCA)", "sqrs", 0],
		["CSP", "sqrcsp", 0],
		["PLL", "sq1pll", 0],
		['oldal fordítási rendszer', "sq1h", 40],
		['tekerési rendszer', "sq1t", 20]
	]],
	['===EGYÉB===', [
		['--', "blank", 0]
	]],
	['15 puzzle', [
		['véletlen állapot URLD', "15prp", 0],
		['véletlen állapot ^<>v', "15prap", 0],
		['véletlen állapot Blank', "15prmp", 0],
		['véletlen mozdulat URLD', "15p", 80],
		['véletlen mozdulat ^<>v', "15pat", 80],
		['véletlen mozdulat Blank', "15pm", 80]
	]],
	['8 puzzle', [
		['véletlen állapot URLD', "8prp", 0],
		['véletlen állapot ^<>v', "8prap", 0],
		['véletlen állapot Blank', "8prmp", 0]
	]],
	['LxMxN', [
		['1x3x3 (Floppy Cube)', "133", 0],
		['2x2x3 (Torony kocka)', "223", 0],
		['2x3x3 (Dominó)', "233", 25],
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
	['Gear kocka', [
		['véletlen állapot', "gearso", 0],
		['optimális', "gearo", 0],
		['véletlen mozdulat', "gear", 10]
	]],
	['Kilominx', [
		['véletlen állapot', "klmso", 0],
		['Pochmann', "klmp", 30]
	]],
	['Gigaminx', [
		['Pochmann', "giga", 300]
	]],
	['Crazy Puzzle', [
		['Crazy 3x3x3', "crz3a", 30]
	]],
	['Cmetrick', [
		['Cmetrick', "cm3", 25],
		['Cmetrick Mini', "cm2", 25]
	]],
	['Helicopter kocka', [
		['Heli copter', "heli", 40],
		['Curvy copter', "helicv", 40],
		['2x2 Heli random move', "heli2x2", 70],
		['2x2 Heli by group', "heli2x2g", 5]
	]],
	['Redi kocka', [
		['véletlen állapot', "rediso", 0],
		['MoYu', "redim", 8],
		['véletlen mozdulat', "redi", 20]
	]],
	['Dino Cube', [
		['véletlen állapot', "dinoso", 0],
		['optimális', "dinoo", 0]
	]],
	['Ivy kocka', [
		['véletlen állapot', "ivyso", 0],
		['optimális', "ivyo", 0],
		['véletlen mozdulat', "ivy", 10]
	]],
	['Master Pyraminx', [
		['véletlen állapot', "mpyrso", 0],
		['véletlen mozdulat', "mpyr", 42]
	]],
	['Pyraminx Crystal', [
		['Pochmann', "prcp", 70],
		['régi stílus', "prco", 70]
	]],
	['Sziámi kocka', [
		['1x1x3-as blokk', "sia113", 25],
		['1x2x3-as blokk', "sia123", 25],
		['2x2x2-es blokk', "sia222", 25]
	]],
	['Square', [
		['Square-2', "sq2", 20],
		['Super Square-1', "ssq1t", 20]
	]],
	['Super Floppy', [
		[' ', "sfl", 25]
	]],
	['UFO', [
		['Jaap stílus', "ufo", 25]
	]],
	['FTO (Oldalain forduló oktaéder)', [
		['véletlen állapot', "ftoso", 0],
		['véletlen mozdulat', "fto", 30],
		['L3T', "ftol3t", 0],
		['L3T+LBT', "ftol4t", 0],
		['TCP', "ftotcp", 0],
		['edges only', "ftoedge", 0],
		['centers only', "ftocent", 0],
		['corners only', "ftocorn", 0],
		['Diamond véletlen állapot', "dmdso", 0]
	]],
	['Icosahedron', [
		['Icosamate véletlen mozdulat', "ctico", 60]
	]],
	['===KÜLÖNLEGES===', [
		['--', "blank", 0]
	]],
	['3x3x3 alegységek', [
		['2-gen R,U', "2gen", 0],
		['2-gen L,U', "2genl", 0],
		['Roux-gen M,U', "roux", 0],
		['3-gen F,R,U', "3gen_F", 0],
		['3-gen R,U,L', "3gen_L", 0],
		['3-gen R,r,U', "RrU", 0],
		['Domino Subgroup', "333drud", 0],
		['csak fél fordulatok', "half", 0],
		['utolsó pár + utolsó réteg (régi)', "lsll", 15]
	]],
	['Bandaged kocka', [
		['Bicube', "bic", 30],
		['Square-1 /,(1,0)', "bsq", 25]
	]],
	['Váltók', [
		['rengeteg 3x3x3-as', "r3", 5],
		['234 váltó', "r234", 0],
		['2345 váltó', "r2345", 0],
		['23456 váltó', "r23456", 0],
		['234567 váltó', "r234567", 0],
		['234 váltó (WCA)', "r234w", 0],
		['2345 váltó (WCA)', "r2345w", 0],
		['23456 váltó (WCA)', "r23456w", 0],
		['234567 váltó (WCA)', "r234567w", 0],
		['Mini Guildford', "rmngf", 0]
	]],
	['===POÉN===', [
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
	['fordítsd a felső oldalt', 'fordítsd az alsó oldalt'],
	['fordítsd a jobb oldalt', 'fordítsd a bal oldalt'],
	['fordítsd az első oldalt', 'fordítsd a hátsó oldalt']
];
var SCRAMBLE_NOOBSS = ' 90 fokkal óramutató járásval megegyezően,| 90 fokkal óramutató járásával ellenkezően,| 180 fokot,';
var SCROPT_TITLE = 'Scramble Options';
var SCROPT_BTNALL = 'Full';
var SCROPT_BTNNONE = 'Clear';
var SCROPT_EMPTYALT = 'Please select at least one case';
var STATS_CFM_RESET = 'Időszak eredményeinek törlése??';
var STATS_CFM_DELSS = 'Törlöd [%s] időszakot?';
var STATS_CFM_DELMUL = 'Hány értéket szeretnél törölni a jelenlegi időszakból?';
var STATS_CFM_DELETE = 'Eredmény törlése?';
var STATS_COMMENT = 'Megjegyzés';
var STATS_REVIEW = 'Áttekintés';
var STATS_DATE = 'Dátum';
var STATS_SSSTAT = '1 kirakás statisztikája';
var STATS_SSRETRY = 'Retry';
var STATS_CURROUND = 'Jelen forduló statisztikái';
var STATS_CURSESSION = 'Jelen időszak statisztikái';
var STATS_CURSPLIT = 'A jelenlegi időszak %d fázisának statisztikái';
var STATS_EXPORTCSV = 'CSV exportálása';
var STATS_SSMGR_TITLE = 'Időszak kezelő';
var STATS_SSMGR_NAME = 'Név';
var STATS_SSMGR_DETAIL = 'Időszak részletek';
var STATS_SSMGR_OPS = 'Átnvezés|Létrehozás|Szétválasztás|Egybevonás|Törlés|Sort|Merge&Dedupe';
var STATS_SSMGR_ORDER = 'Rendezés keverés szerint';
var STATS_SSMGR_ODCFM = 'Az összes időszakot rendezed keverés szerint?';
var STATS_SSMGR_SORTCFM = '%d kirakás újra lesz rendezve. Folytatod?';
var STATS_ALERTMG = 'Egybevonod az összes időt a(z) [%f] időszakban a(z) [%t] időszak végéig?';
var STATS_PROMPTSPL = 'Hány időt szeretnél leválasztani a(z) [%s] időszakról?';
var STATS_ALERTSPL = 'Szétválasszon vagy legalább egy időt hagyjon';
var STATS_AVG = 'átlag';
var STATS_SUM = 'sum';
var STATS_SOLVE = 'megoldás';
var STATS_TIME = 'eredmény';
var STATS_SESSION = 'Időszak';
var STATS_SESSION_NAME = 'Időszak átnevezése';
var STATS_SESSION_NAMEC = 'Az új időszak neve';
var STATS_STRING = 'legjobb|pillanatnyi|legrosszabb|csTimer által generálva  %év-%hó-%napján|megoldások/összes: %d|egyedüli|mean of %mk|avg of %mk|Átlag: %v{ (σ = %sgm)}|Mean: %v|Idő lista:|solving from %s to %e|Totally spent: %d|target';
var STATS_PREC = 'Idő kijelzés pontossága';
var STATS_PREC_STR = 'automatikus|0.1s|0.2s|0.5s|1s|2s|5s|10s|20s|50s|100s';
var STATS_TYPELEN = '%d típus listázása|%d hossz listázása|átlag|medián';
var STATS_STATCLR = 'Az időszak kiürítésének engedélyezése';
var STATS_ABSIDX = 'Abszolút index mutatása a statisztikákban';
var STATS_XSESSION_DATE = 'bármely időpont|elmúlt 24 óra|elmúlt 7 nap|elmúlt 30 nap|elmúlt 365 nap';
var STATS_XSESSION_NAME = 'bármely név';
var STATS_XSESSION_SCR = 'bármely keverés';
var STATS_XSESSION_CALC = 'Számítás';
var STATS_RSFORSS = 'A kirakás számra kattintva mutassa a statisztikát';
var PROPERTY_PRINTSCR = 'Keverések nyomtatása a statisztikában';
var PROPERTY_PRINTCOMM = 'print comment(s) in statistics';
var PROPERTY_PRINTDATE = 'megoldási dátum megjelenítése a statisztikákban';
var PROPERTY_SUMMARY = 'összegzés mutatása az időlista előtt';
var PROPERTY_IMRENAME = 'a létrehozott időszak azonnali átnevezése';
var PROPERTY_SCR2SS = 'keverés váltásakor új időszak létrehozása';
var PROPERTY_SS2SCR = 'időszak váltásakor állítsa vissza a keverés típusát';
var PROPERTY_SS2PHASES = 'időszak váltásakor állítsa vissza a többfázisú időzítést';
var PROPERTY_STATINV = 'Időlista megfordítása';
var PROPERTY_STATSSUM = 'Show sum in time list';
var PROPERTY_STATTHRES = 'Show target time for session best';
var PROPERTY_STATBPA = 'Show best possible average (BPA)';
var PROPERTY_STATWPA = 'Show worst possible average (WPA)';
var PROPERTY_STATAL = 'Statisztikai jelölők';
var PROPERTY_STATALU = 'Személyre szabott statisztikai jelölők';
var PROPERTY_HLPBS = 'Highlight PBs';
var PROPERTY_HLPBS_STR = 'Dark orange as WCA|As link color|Bolder|None';
var PROPERTY_DELMUL = 'Több elem törlésének engedélyezése';
var PROPERTY_TOOLSFUNC = 'Kiválasztott Funkciók';
var PROPERTY_TRIM = 'A kétoldalt levágott megoldások száma';
var PROPERTY_TRIMR = 'Number of solves trimmed at worse side';
var PROPERTY_TRIM_MED = 'Medián';
var PROPERTY_STKHEAD = 'A Stackmat státuszának használata';
var PROPERTY_TOOLPOS = 'Tools panel position';
var PROPERTY_TOOLPOS_STR = 'Bottom|Float|Top';
var PROPERTY_HIDEFULLSOL = 'A megoldás lépésenkénti mutatása';
var PROPERTY_IMPPREV = 'A régebbi adatok importálása';
var PROPERTY_AUTOEXP = 'Automatikus exportálás (100 kirakásonként)';
var PROPERTY_AUTOEXP_OPT = 'Soha|File-ba|csTimer ID-val|WCA fiókkal|Google fiókkal|Alert Only';
var PROPERTY_SCRASIZE = 'Automatikus keverésméret';
var MODULE_NAMES = {
	"kernel": 'globális',
	"ui": 'kijelző',
	"color": 'szín',
	"timer": 'időmérő',
	"scramble": 'keverés',
	"stats": 'statisztikák',
	"tools": 'eszközök',
	"vrc": 'virtuális és<br>bluetooth'
};
var BGIMAGE_URL = 'Kérlek másold be a kép URL-jét.';
var BGIMAGE_INVALID = 'érvénytelen URL';
var BGIMAGE_OPACITY = 'háttérkép halványsága';
var BGIMAGE_IMAGE = 'háttérkép';
var BGIMAGE_IMAGE_STR = 'nincs|kézi|CCT';
var SHOW_AVG_LABEL = 'Avg Label mutatása';
var SHOW_DIFF_LABEL = 'Show Difference Label';
var SHOW_DIFF_LABEL_STR = '-Green+Red|-Red+Green|Normal|None';
var USE_LOGOHINT = 'Tippek a logóban';
var TOOLS_SCRGEN = 'KeverésGenerátor';
var SCRGEN_NSCR = 'Keverések száma';
var SCRGEN_PRE = 'előtag';
var SCRGEN_GEN = 'Keverések Generálása!';
var VRCREPLAY_TITLE = 'Virtual Replay';
var VRCREPLAY_ORI = 'raw ori|auto ori';
var VRCREPLAY_SHARE = 'share link';
var GIIKER_CONNECT = 'Click to connect';
var GIIKER_RESET = 'Reset (Mark Solved)';
var GIIKER_REQMACMSG = 'Please enter the MAC address of your smart hardware (xx:xx:xx:xx:xx:xx). You can find the MAC address through chrome://bluetooth-internals/#devices, or modify following options to let csTimer automatically obtain it:\nChrome: Turn on chrome://flags/#enable-experimental-web-platform-features\nBluefy: Turn on Enable BLE Advertisements';
var GIIKER_NOBLEMSG = 'Bluetooth API is not available. Ensure https access, check bluetooth is enabled on your device, and try chrome with chrome://flags/#enable-experimental-web-platform-features enabled';
var PROPERTY_SHOWAD = 'Show advertisements (take effect after reload)';
var PROPERTY_GIIORI = 'Cube orientation';
var LGHINT_INVALID = 'Invalid Value!';
var LGHINT_NETERR = 'Network Error!';
var LGHINT_SERVERR = 'Server Error!';
var LGHINT_SUBMITED = 'Submitted';
var LGHINT_SSBEST = 'Session best %s!';
var LGHINT_SCRCOPY = 'Scramble copied';
var LGHINT_LINKCOPY = 'Share link copied';
var LGHINT_SOLVCOPY = 'Solve copied';
var LGHINT_SORT0 = 'Already sorted';
var LGHINT_IMPORTED = 'Import %d session(s)';
var LGHINT_IMPORT0 = 'No session imported';
var LGHINT_BTCONSUC = 'Bluetooth successfully connected';
var LGHINT_BTDISCON = 'Bluetooth disconnected';
var LGHINT_BTNOTSUP = 'Not support your smart cube';
var LGHINT_BTINVMAC = 'Not a valid mac address, cannot connect to your smart cube';
var LGHINT_AEXPABT = 'Auto export abort';
var LGHINT_AEXPSUC = 'Auto export success';
var LGHINT_AEXPFAL = 'Auto export failed';
var EASY_SCRAMBLE_HINT = 'Change length to limit upper bound of solution length, input 2 digits to limit both lower (<= 8) and upper bound';
