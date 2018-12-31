<pre>
 _________        .__
 \_   ___ \_______|__| _____   __________   ____
 /    \  \/\_  __ \  |/     \ /  ___/  _ \ /    \
 \     \____|  | \/  |  | |  \\___ (  <_> )   |  \
  \______  /|__|  |__|__|_|  /____  >____/|___|  /
        \/                \/     \/  Clyde      \/ </pre>
        
Author: CrimsonClyde
Stardate: 35c3
Location: Somewhere deep in the assemblys

# Module name: MagicMirrorModule - Ultimate Day Reminder

# Description:
A module which will display what a special day currently is.
You can define it for yourself in udr-cal.txt file.

Calendar File is called udr-cal.txt. Simple put your events into this file.
Syntax is YYYY-MM-DD,Event.
Linebreak for new events.

The mmm-udr.js file holds a variable which is dedicated about the update intervall.
Default 1h = updateInterval: 60*60*1000

# How to use it.
Download it via git and put the folder MMM-UDR with the files into the
MagicMirror/Module folder. Last step is the module activation. Open your
config folder and edit the config.js file.

{
  module: "mmm-udr",
  position: "bottom_bar"
}

That´s it - have a lot of fun.
