<h1>csTimer phiên bản <?php echo $version;?> - Chuyên Nghiệp Đồng hồ đếm giờ cho việc luyện tập speedcubing</h1>
<?php include('lang.php') ?>
<h2>Giới thiệu</h2>
<p>csTimer là một chương trình đếm giờ chuyên nghiệp được thiết kế cho những người giải khối vuông Rubik chuyên nghiệp; chương trình này cung cấp:</p>
<ul>
<li>Amounts of scramble algorithms, including <strong>all WCA official events</strong>, varieties of twisty puzzles, <strong>training scramble</strong> for specific sub steps (e.g. <strong>F2L, OLL, PLL, ZBLL</strong>, and can filter cases), etc</li>
<li>Plenty of statistics functions, it supports <strong>time-split timing</strong>; <strong>Any number of sessions</strong>, session split/merge, etc.</li>
<li>Varieties of solver, such as <strong>Cross, Xcross, 2x2x2 face, Skewb Face, SQ1 shape</strong>, for learning or training these sub steps.</li>
<li>Other auxiliary tools, such as scramble image, 8-second inspection (voice) alert, metronome, batch-scramble generator, etc.</li>
<li>Backup function, For avoiding data missing, you can backup your solves to local files, csTimer's server or Google storage.</li>
</ul>
<p>csTimer supports most of modern desktop browsers, on mobile phone and tablet PC, you can add csTimer to your home screen, and it will work as a native APP.</p>
<p>csTimer takes advantage of browser cache, which consumes traffic only when you open it for the first time, after that, csTimer is able to work without network connection (except for functions like backup)</p>
<h3>Copyright</h3>
<p>csTimer is an open source software that follows the GPLv3. If you have any suggestions or comments on csTimer, please submit it <a class="click" href="https://github.com/cs0x7f/cstimer/issues" title="">here</a></p>
<p>Written by: <a href="mailto:cs0x7f@gmail.com">Shuang Chen (cs0x7f@gmail.com)</a></p>
<p>UI designed by: <a href="mailto:liebe7@126.com">Yue Zhang (liebe7@126.com)</a></p>
<h2>Basic functions</h2>
<ul>
<li><strong>How to start timing</strong> - Hold the space bar (or both of left and right Ctrl keys, or touch the screen on mobile devices) and wait for the timer to turn green, the timer will start timing once the space bar is released, press any key to stop timing and the solving time will be record.</li>
<li><strong>UI description</strong> - There are 6 buttons near the logo of csTimer: option, export, scramble, list times, donate, tools, click on the <strong>scramble</strong>, <strong>list times</strong>, <strong>tool</strong> to open the corresponding function panel.</li>
<li><strong>Scramble panel</strong> - In the Scramble panel, you can select scramble type, set scramble length and case filter (if available), review previous scramble, generate next scramble.</li>
<li><strong>List times panel</strong> - In the list times panel, you can open session manager by clicking "Session", select/add/delete sessions, empty session by the selector and the button next to, then you can view the current single/average, best single/average, and the full time list.</li>
<li><strong>Tools panel</strong> - In the tool panel, you can select specific auxiliary functions, including scramble image, scramble generators, solvers, other kinds of statistics, etc.</li>
</ul>
<h2>Keyboard shortcut</h2>
<table class="table" style="display: inline-block;">
<tr><th>Key</th><td>Function</td></tr>
<tr><th>Alt + 1</th><td>Scramble type to Square-1</td></tr>
<tr><th>Alt + 2 ~ 7</th><td>Scramble type to 2x2x2~7x7x7</td></tr>
<tr><th>Alt + p/m/c/s</th><td>Scramble type to pyra/megaminx/clock/skewb</td></tr>
<tr><th>Alt + i</th><td>Scramble type to input</td></tr>
<tr><th>Alt + d</th><td>Remove all solves in current session</td></tr>
<tr><th>Ctrl/Alt + z</th><td>Remove the latest solve</td></tr>
<tr><th>Alt + up/down</th><td>To next/last session</td></tr>
<tr><th>Alt + left/right</th><td>Display last/next scramble</td></tr>
<tr><th>Ctrl + 1/2/3</th><td>The latest solve is OK/+2/DNF</td></tr>
<tr><th>Ctrl + Alt + t/i/s/v/g/q/b/l</th><td>Entering in times with timer/typing/stackmat/virtual/bluetooth cube/qcube/bluetooth timer/last layer</td></tr>
</table>

<table class="table" style="display: inline-block;">
<tr><th>Gesture</th><td>Function</td></tr>
<tr><th>Up left</th><td>The latest solve is DNF</td></tr>
<tr><th>Up</th><td>The latest solve is +2</td></tr>
<tr><th>Up right</th><td>The latest solve is OK</td></tr>
<tr><th>Left</th><td>Last scramble</td></tr>
<tr><th>Right</th><td>Next scramble</td></tr>
<tr><th>Down left</th><td>Add comment to the latest solve</td></tr>
<tr><th>Down</th><td>Remove the latest solve</td></tr>
<tr><th>Down right</th><td>Check the latest solve</td></tr>
</table>

<table class="table" id="vrckey" style="display: inline-block;">
<tr><th colspan=10>Virtual Cube Key Map</th></tr>
</table>

<h2>Option details</h2>
<ul>
<li><strong data="opt_ahide">ẩn tất cả khi giải</strong>. Hide logo and all panels when timing.</li>
<li><strong data="opt_useMilli">sử dụng 0.001s</strong>. Display the millisecond digit, no matter whether it is checked, the internal timing accuracy of csTimer is 1 millisecond.</li>
<li><strong data="opt_timeFormat">Thể loại thời gian</strong>. Time format to display.</li>
<li><strong data="opt_atexpa">Tự Động Xuất (mỗi 100 lượt giải)</strong>. If checked, csTimer will export the solves automatically per 100 solves to the specified place, local file, csTimer server, or Google Storage.</li>
<li><strong data="opt_expp">Thêm vào dữ liệu cũ</strong>. If you've uploaded multiple backups, you can import from one of the up to 10 most recently uploaded backups, if you accidentally upload an empty backup, this option will help you retrieve your solves.</li>
<li><strong data="opt_useLogo">Hint messages in logo</strong>. csTimer's Logo will serve as an information display panel that prompts for a variety of information you may be interested in, such as breaking PB.</li>
<li><strong data="opt_showAvg">cho xem avg ở dưới timer</strong>. Two lines of labels are displayed below the the main timer, the current two averages, ao5 and ao12 by default.</li>
<li><strong data="opt_zoom">Phóng to</strong>. You can adjust sizes of all elements by this option.</li>
<li><strong data="opt_font">Kiểu chữ timer</strong>. Font of the main timer.</li>
<li><strong data="opt_uidesign">Thiết kế giao diện</strong>. You can switch ui design to material-like, or hide shadows by this option.</li>
<li><strong data="opt_view">Kiểu giao diện người dùng</strong>. Switch between desktop and mobile views.</li>
<li><strong data="opt_wndScr">Cách hiển thị thanh công thức tráo</strong>. Make scramble panel embedded into background.</li>
<li><strong data="opt_wndStat">Cách hiển thị thanh thống kê thời gian</strong>. Make list times panel embedded into background.</li>
<li><strong data="opt_wndTool">Cách hiển thị bảng công cụ</strong>. Make tool panel embedded into background.</li>
<li><strong data="opt_bgImgO">Background</strong>. Opacity of the background image.</li>
<li><strong data="opt_bgImgS">background</strong>. You can select your own image as the background image, however, only https urls are available due to security constraint of the browser.</li>
<li><strong data="opt_timerSize">kích cớ của timer</strong>. Set the size of main timer.</li>
<li><strong data="opt_smallADP">Sử dụng font nhỏ hơn cho chữ số hàng thập phân</strong>. Use a smaller font size after the digital point in main timer.</li>
<li><strong data="opt_color">Chọn màu nền</strong>. Select color schemes of csTimer. Click csTimer's logo to show more color schemes.</li>
<li><strong data="opt_useMouse">sử dụng chuột</strong>. Use mouse to start timer, keyboard-trigger will also be available.</li>
<li><strong data="opt_useIns">dử dụng thời gian chuẩn bị của WCA</strong>. Enable WCA inspection procedure, which is a 15-second countdown, auto +2/DNF penalty will also be enabled if you inspecting more than 15 seconds.</li>
<li><strong data="opt_voiceIns">Giọng nói cho thời gian chuẩn bị của WCA</strong>. Alert at 8s/12s of inspection, to simulate the alert from judge in WCA competitions.</li>
<li><strong data="opt_voiceVol">Voice volume</strong>. Voice level of the alert above.</li>
<li><strong data="opt_input">Nhập thời gian với</strong>. csTimer is able to add solves by several ways, it supports manually input, automatically record from a stackmat timer, connect to a bluetooth smart cube or play virtual Rubik's cube, besides keyboard timing.</li>
<li><strong data="opt_intUN">Unit when entering an integer</strong>. When you type an integer XXX in the input box, what does it mean, XXX second or XXX centisecond or XXX millisecond?</li>
<li><strong data="opt_timeU">cập nhập thời gian</strong>. How timer is updated when timing.</li>
<li><strong data="opt_preTime">Thời gian giữ (Giây(s))</strong>. How long the space bar should be held before the timer turns green.</li>
<li><strong data="opt_phases">nhiều đợt</strong>. Number of phases, press any key to mark a split point when timing.</li>
<li><strong data="opt_stkHead">Use Stackmat Status Information</strong>. Stackmat will report its state, e.g. whether left or right area is touched, then csTimer is able to use these information, however, the data error might occur and cause unexpected behavior.</li>
<li><strong data="opt_scrSize">kích cớ của scramble</strong>. Size of the scramble text.</li>
<li><strong data="opt_scrASize">Auto scramble size</strong>. The size of the scramble text will be automatically adjusted by the length of the scramble, which works with together previous option.</li>
<li><strong data="opt_scrMono">Khoảng cách của các chữ scramble</strong>. Use monospaced font for scramble text.</li>
<li><strong data="opt_scrLim">Giới hạn chiều cao của vùng scramble</strong>. When the scramble area is too high, a scroll bar will occur to avoid the raising of the scramble panel.</li>
<li><strong data="opt_scrAlign">Vị trí của scramble</strong>. Alignment of the whole scramble area, include scramble type selector.</li>
<li><strong data="opt_preScr">pre-scramble</strong>. Pre moves before scramble, which is used for virtual Rubik's cube and scramble image.</li>
<li><strong data="opt_scrNeut">Color neutral</strong>. If turned on, the position/first-layer color of some training scrambles will be random.</li>
<li><strong data="opt_scrEqPr">Probabilities for training-scramble states</strong>. For training scrambles, the probability of each case can be set to: follow the probability of the actual solving process; or let all cases appear with equal probability; or let all cases appear randomly in sequence (that is, to ensure that all N cases appear at least once in the next 2 N scrambles).</li>
<li><strong data="opt_scrFast">Dùng công thức tráo nhanh cho 4x4x4 (không chính thức)</strong>. WCA official 4x4x4 scramble requires huge computation resources, select this option to use a random-move scramble for 4x4x4 instead.</li>
<li><strong data="opt_scrKeyM">Đánh dấu (các) bước xoay quan trọng trong công thức tráo</strong>. Mark a key move in the scramble, e.g. the move that take the state away from square shape in SQ1 scrambles.</li>
<li><strong data="opt_scrClk">Hành động khi bấm vào một cách tráo</strong>. Behavior when you click on the scramble text, copy scramble or generate next scramble.</li>
<li><strong data="opt_trim">Number of solves trimmed at better side</strong>. Number of solves trimmed at head and tail of solves when calculating average.</li>
<li><strong data="opt_statsum">cho xem bảng thành tích	</strong>. Show the statistics table before time list.</li>
<li><strong data="opt_statthres">Show target time for session best</strong>. In the statistics table, the time required to refresh personal best after next solve is displayed. "N/A" means the next solve will not refresh PB no matter how fast it is, "&#8734;" means any time except DNF will refresh PB.</li>
<li><strong data="opt_printScr">In scramble trong thành tích</strong>. Print scramble in round statistics dialog.</li>
<li><strong data="opt_printDate">in ngày giải trong thống kê</strong>. Print solving date in round statistics dialog.</li>
<li><strong data="opt_imrename">yêu cầu đặt tên ngay sau khi tạo 1 mục</strong>. Immediately rename a session after creating it.</li>
<li><strong data="opt_scr2ss">tạo ngay 1 mục khi chuyển sang scramble khác</strong>. When switching scramble type, a new session will be created.</li>
<li><strong data="opt_statinv">Inverse time list</strong>. Invert the time list, thus, latest solves will at the bottom of the time list.</li>
<li><strong data="opt_statclr">Enable session emptying</strong>. When disabled, an '+' button (for session creating) will replace the 'X' button besides the session selector, thus, when clicked, a new empty session will be created instead of clearing the whole session.</li>
<li><strong data="opt_absidx">Hiển thị chỉ số tuyệt đối trong thống kê</strong>. Show absolute index in the session instead of 1 to number of solves (e.g. 1/2/3 for mo3) in round statistics.</li>
<li><strong data="opt_rsfor1s">Hiện thông tin khi nhấn vào STT của lượt giải</strong>. When click the first row of the time list, show a round statistics for a single solve.</li>
<li><strong data="opt_statal">Statistical indicators</strong>. Statistical indicator for the statistics table, when customizing, aoX and moX are available.</li>
<li><strong data="opt_delmul">cho phép xóa thời gian cùng 1 lúc</strong>. Able to delete multiple solves starts from a solve, for avoid misunderstand, the selected solve will be the oldest solve to delete.</li>
<li><strong data="opt_disPrec">time distribution precision</strong>. Time interval for the time distribution tool.</li>
<li><strong data="opt_solSpl">Hiện cách giải theo thứ tự</strong>. If selected, only the length of a solution from a solver is displayed, and you can view the solution one move by one move, otherwise, the whole solution is displayed.</li>
<li><strong data="opt_imgSize">kích cớ hình vẽ scramble</strong>. Set the size of scramble image.</li>
<li><strong data="opt_NTools">số công cụ</strong>. csTimer is able to show up to 4 tools simultaneously.</li>
<li><strong data="opt_useKSC">Sử dụng nút tắt</strong>. Use keyboard shortcut to switch scramble type, generate next scramble, switch between sessions. Click csTimer's logo to show details.</li>
<li><strong data="opt_useGES">điều khiển bằng cử chỉ</strong>. Use gestures (swiping in different directions) to switch OK/+2/DNF, add comments, generate next scramble, etc. Also available on non-touch screen devices when mouse timer is enabled. Click csTimer's logo to show details.</li>
<li><strong data="opt_vrcSpeed">Tốc độ ban đầu của rubik ảo (tốc độ xoay ban đầu)</strong>. Base turn speed of the virtual Rubik's cube, the turn will be speed up if there are multiple moves to turn.</li>
<li><strong data="opt_vrcMP">nhiều đợt</strong>. Automatic multi-phase split for virtual Rubik's cube and bluetooth cube.</li>
<li><strong data="opt_giiMode">Chế độ cho các khối Bluetooth</strong>. Usage mode of smart cube: In normal mode, you need to manually scramble the cube until it is consistent with the scrambled state; in training mode, after pressing the space (or touching the screen on the touch screen), the virtual cube will directly change to the scrambled state. You need to solve virtual cube partially (depends on scramble, e.g. permutation of last layer is not checked in oll training) instead of physical cube; In continuous training mode, in addition to training mode, once the virtual cube is solved, you will directly enter the next solve without pressing space. You can also press ESC (on a touch screen, hold the screen for 2 seconds) to exit the solve.</li>
<li><strong data="opt_giiVRC">Hiển thị rubik bluetooth ảo</strong>. Show a virtual Rubik's cube in the main timer when connecting to a bluetooth cube.</li>
<li><strong data="opt_giiSD">Xem như đã tráo rubik nếu đứng yên trong</strong>. For a bluetooth cube, csTimer cannot know whether a move is from for scrambling or solving.</li>
<li><strong data="opt_giiSK">Xem như đã tráo bằng cách nhấn phím cách</strong>. When the space bar is pressed, the bluetooth cube is marked scrambled, any turns after that will treated as the start of timing.</li>
<li><strong data="opt_giiSM">Xem như đã tráo bằng cách thực hiện</strong>. Use specific move sequences on the bluetooth cube to mark scrambled.</li>
<li><strong data="opt_giiBS">Phát tiếng bíp khi tráo xong</strong>. Beep when some of scramble-finish signal is triggered.</li>
<li><strong data="opt_giiRST">Khởi động lại rubik bluetooth khi kết nối</strong>. When connecting to a bluetooth cube, csTimer will detect whether it is solved, if not, there might be some hardware problems or the cube is really unsolved.</li>
<li><strong data="opt_giiAED">Tự động phát hiện lỗi phần cứng</strong>. Some bluetooth cubes will loss some of moves due to hardware failure, csTimer will try to detect such case.</li>
</ul>
<h2>Tools detail</h2>
<ul>
<li><strong data="tool_scrgen">ScrambleGenerator</strong>. You are able to generate up to 999 scrambles with one click by this tool.</li>
<li><strong data="tool_cfm">Xác nhận</strong>. Tool to view current solves with its comment, scramble, solving date and reconstruction if available, which is also the dialog when you click on a solve.</li>
<li><strong data="tool_hugestats">bắt đầu dấu cộng</strong>. You are able to do cross-session statistics with this tool.</li>
<li><strong data="tool_stats">Thành tích ( kiểu 1)</strong>. Statistic table similar with the table in the list times panel.</li>
<li><strong data="tool_distribution">Thành tích ( kiểu 2)</strong>. Time distribution and stability analysis, &lt;X Y/Z means there are totally Z solves less than X seconds, and all of the latest Y solves are less than X seconds in the session.</li>
<li><strong data="tool_trend">Thành tích ( kiểu 3)</strong>. Shows a trend curve of all solves in current session.</li>
<li><strong data="tool_dlystat">Daily Statistics</strong>. Count number of solves each day/week/month/year.</li>
<li><strong data="tool_image">vẽ scramble</strong>. Scramble image to verify a correct scramble, all WCA puzzles are supported.</li>
<li><strong data="tool_roux1">Công cụ giải &gt; giải Roux S1</strong>. Roux 1st step solver, which solves a 1x2x3 block.</li>
<li><strong data="tool_eoline">Công cụ giải &gt; giải EOLine</strong>. EO line solver, which solves orientations of all 12 edges, and positions of DF and DB edges.</li>
<li><strong data="tool_cross">Công cụ giải &gt; giải cross</strong>. Cross solver, which solve DF, DL, DR, DB edges.</li>
<li><strong data="tool_222face">Công cụ giải &gt; 2x2x2 face</strong>. 2x2x2 face solver, which solves a face of 2x2x2 cube.</li>
<li><strong data="tool_333cf">Công cụ giải &gt; Cross + F2L</strong>. Cross and F2L solver, which solves Cross and 4 F2Ls with computer search, so the solution might be far from human solutions.</li>
<li><strong data="tool_333roux">Công cụ giải &gt; Roux S1 + S2</strong>. Roux 1st and 2nd step solver, which firstly solves a 1x2x3 block on the left face and then expend another 1x2x3 block on the right face with R, M, r, U.</li>
<li><strong data="tool_333petrus">Công cụ giải &gt; 2x2x2 + 2x2x3</strong>. Petrus 1st and 2nd step solver, which firstly solves an 2x2x2 block on the left and then expend it to a 2x2x3 on the left.</li>
<li><strong data="tool_333zz">Công cụ giải &gt; EOLine + ZZF2L</strong>. Eoline and ZZF2L solver, which firstly solves the EOLine and then solve one of left 1x2x3 or right 1x2x3 and the solve the other 2x2x3.</li>
<li><strong data="tool_sq1cs">Công cụ giải &gt; SQ1 S1 + S2</strong>. SQ1 1st and 2nd step solver, which firstly solves the shape of SQ1 and then split U pieces and D pieces.</li>
<li><strong data="tool_pyrv">Công cụ giải &gt; Pyraminx V</strong>. Pyraminx V solver, which solves three corners and two edges to shape into a 'V' pattern for pyraminx.</li>
<li><strong data="tool_skbl1">Công cụ giải &gt; Skewb Face</strong>. Skewb face solver, which solves a layer of skewb, more specifically, 1 center and 4 neighbor corners.</li>
<li><strong data="tool_giikerutil">Rubik có kết nối Bluetooth</strong>. Auxiliary tool for bluetooth cube, which is able to show current state, battery power, real-time reconstruction etc.</li>
<li><strong data="tool_mtrnm">Đếm nhịp</strong>. Metronome, besides beeping at specific frequency, you make it beep at specific time after starting solve as well.</li>
<li><strong data="tool_syncseed">Common Scramble</strong>. Using same scrambles with friends by setting a common seed.</li>
<li><strong data="tool_stackmatutil">stackmat</strong>. Auxiliary tool for Stackmat, which is able to view the status, power and noise level of the signal, etc.</li>
</ul>
<h2>Links</h2>
<ul>
<li><a class="click" href="https://cubingchina.com/" title="">Cubing China</a></li>
<li><a class="click" href="/new/" title="">csTimer beta version</a></li>
<li><a class="click" href="/src/" title="">csTimer beta version with uncompressed files</a></li>
<li><a class="click" href="https://github.com/cs0x7f/cstimer" title="">csTimer source code</a></li>
<li><a class="click" href="/2019.12.24/" title="">csTimer version 2019.12.24</a></li>
<li><a class="click" href="/2018.11.05/" title="">csTimer version 2018.11.05</a></li>
<li><a class="click" href="/2015.12.12/" title="">csTimer version 2015.12.12</a></li>
<li><a class="click" href="/2012.03.15/" title="">csTimer version 2012.03.15</a></li>
<li><a class="click" href="/2012.02.29/" title="">csTimer version 2012.02.29</a></li>
</ul>
<h2>Color schemes</h2>
<?php include('color.php') ?>
<div class="donate helptable" style="line-height:1.5em;">
<h2>Hardware compatible with csTimer</h2>
<p>In addition to timing by keyboard, csTimer also supports Bluetooth Smart Cubes and Smart Timers.</p>
<p>If you use a smart cube, csTimer will record the detailed solution of each of your solves and provide more statistics and practice functions (e.g. CFOP automatic segmentation, etc.)</p>
<ul>
<li><a class="click" href="https://www.amazon.com/dp/B0CGDHVJBL?tag=cstimer-20#" title="">Gan 12 ui FreePlay</a></li>
<li><a class="click" href="https://www.amazon.com/dp/B083TW9WFT?tag=cstimer-20#" title="">Gan Halo Bluetooth Timer</a></li>
</ul>
<h2>Recommended products</h2>
<p>Here are some professional cubes or hardwares.</p>
<ul>
<li><a class="click" href="https://www.amazon.com/dp/B0182KR2LO?tag=cstimer-20#" title="">G5 Stackmat</a></li>
<li><a class="click" href="https://www.amazon.com/dp/B086PNKX2P?tag=cstimer-20#" title="">Gan 356 M</a></li>
</ul>
<h2>Donate directly</h2>
<p>Thank you for your willingness to support csTimer! Your donation will be used to support our development and maintenance costs.</p>
<p>If you would like to offer us a donation through PayPal, please click the button below or through <a class="click" href="https://www.paypal.me/cs0x7f" title="">PayPal.me</a>.</p>
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="NW25HME3QUEZY">
<input type="image" src="data:image/gif;base64,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" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
</form>
<p>You can also fund us by Alipay, scan the next two-dimensional code or please pay to the account: cs0x7f@gmail.com</p>
<p><img style="display:inline-block; width:10em; height:10em;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABsCAIAAAAABMCaAAABoklEQVR42u3aUY6DMAwFQO5/6e0JViq1XwjO5LOqIAxSHJ5z/RnlcSGACHEk4hUY/974i/9/83vlXl3PBREixPmIpYX25oNVrl95GV3PBREixLMQ05OuXD9RoG5fByJEiBCfnDREiBAhDkashAulTTJEiBAhbhJAJIKM41IciBAhLkOMNHQ2+P313T6IECEuQ9z60FBTcYjMDSJEiCMRKx//K4tMYvNcOkwAESLEoxBXNukTwW1XKAsRIsRzEZ9CqUAkClQpxYEIEeIYxApo1+b2qeK2xRcLRIgQH0dMLPaVSVeg080piBAhzkdMB59dQWn6BTxWnSFChLgtYrqAlCYdPmwVCWUhQoQ4HjFRZBIHCBIbeIgQIUJs/WhPLPDhxhlEiBDPQkyPdIFKo99OtiFChPhqxHRzZ+Xho3SwAhEixLMQ0wt/2wOEN+dtoSxEiBDHIO7QhFrZtLr94iFChAgx1AzqKmgrwwiIECFC7ERMh69dG2yIECFCXBFAVIpAegP/mhQHIkSIUcSVjar0hjkeJEOECHEkovFjIUUAEeKU8QE0apeVMce/LwAAAABJRU5ErkJggg=="></p>
<p>Thank you again for your donation!</p>
</div>
<div class="instruction">
<p><strong>In case of failure check that Bluetooth is enabled on your system!</strong></p>
<p>Browser you are using must support Web Bluetooth API. Consider using compatible browser, the best choice is:</p>
<ul>
<li>Chrome on macOS, Linux, Android or Windows</li>
<li>Bluefy on iOS</li>
</ul>
<p>Also you can check complete list of <a class="click" href="https://github.com/WebBluetoothCG/web-bluetooth/blob/main/implementation-status.md" title="">supported browsers</a>.</p>
<p>For some bluetooth cubes, we need you to provide the MAC address of your cube to decrypt the data. <strong>csTimer is able to automatically read MAC address of the cube if you properly setup your browser:</strong></p>
<ul>
<li>Chrome: enable chrome://flags/#enable-experimental-web-platform-features flag in browser settings.</li>
<li>Bluefy: turn on Enable BLE Advertisements option in browser settings.</li>
</ul>
<p>If you have difficulties with cube MAC address, you may read <a class="click" href="https://gist.github.com/afedotov/52057533a8b27a0277598160c384ae71" title="">GAN Smart Cubes MAC address FAQ</a>.</p>
</div>