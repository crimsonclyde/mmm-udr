<pre>
 _________        .__
 \_   ___ \_______|__| _____   __________   ____
 /    \  \/\_  __ \  |/     \ /  ___/  _ \ /    \
 \     \____|  | \/  |  | |  \\___ (  <_> )   |  \
  \______  /|__|  |__|__|_|  /____  >____/|___|  /
        \/                \/     \/  Clyde      \/ </pre>
        
Author: CrimsonClyde<br />
Stardate: 35c3<br />
Location: Somewhere deep in the assemblys<br />

Module name: MagicMirrorModule - Ultimate Day Reminder


# Description:
A module which will display what a special day currently is.<br />
You can define it for yourself in udr-cal.txt file.<br />

Calendar File is called udr-cal.txt. Simple put your events into this file.<br />
Syntax is YYYY-MM-DD,Event.<br />
Linebreak for new events.<br />
<br />
The mmm-udr.js file holds a variable which is dedicated about the update intervall.<br />
Default 1h = updateInterval: 60*60*1000<br />
<br />
# How to use it.
Download it via git and put the folder MMM-UDR with the files into the
MagicMirror/Module folder. Last step is the module activation. Open your
config folder and edit the config.js file.<br />
<br />
{<br />
  module: "mmm-udr",<br />
  position: "bottom_bar"<br />
}<br />
<br /><br />
That´s it - have a lot of fun.
