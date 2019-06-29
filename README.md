<pre>
 _________        .__
 \_   ___ \_______|__| _____   __________   ____
 /    \  \/\_  __ \  |/     \ /  ___/  _ \ /    \
 \     \____|  | \/  |  | |  \\___ (  <_> )   |  \
  \______  /|__|  |__|__|_|  /____  >____/|___|  /
        \/                \/     \/  Clyde      \/ </pre>


# MagicMirrorModule - Ultimate Day Reminder


| Input | Output |
| --- |---|
|Author:     | CrimsonClyde   |
|Stardate:   | 35c3 (Day3)   |
|Location:   | Somewhere deep in the Assemblies   |


<br>Module only screenshot</br>
![Module screenshot](./screenshots/MagicMirror%C2%B2-UDR_solo.png)


## Description:
Module to display the current event of the day. Since everybody has different interest you can add, delete and change events and dates very simple in the calendar.

Calendar File is called udr-cal.txt. Simple put your events into this file.
Syntax is YYYY-MM-DD Event:

Example:
```
2018-05-01 Beltaine (Summer starts),
2018-11-01 Samhain (Winter starts),
2018-12-21 Yule (Wintersonnwend),
```

Don´t forget to add the comma at the end of the line!


## Developement status
Work in Progress (WIP)
Module works fine, but poor code quality and not hardend against input errors with the calendar file.

## Installation
1. Navigate into your MagicMirror's `modules` folder and execute
```
git clone https://github.com/crimsonclyde/MMM-UDR.git
```
2. A new folder for `mmm-udr` will appear navigate into it. Execute:
```
npm install
```
This will install all dependencies required by the module.

## Update module
Navigate into your MagicMirror's `modules` folder and further on navigate into `mmm-udr` folder and execute:
```
git pull & npm install
```

## Usage
To use this module, add it to the modules array in the config/config.js file:

```
modules: [
	{
		module: 'mmm-udr',
		position: 'bottom_bar', // The status indicator position
	}
]
```


##  Screenshots
<br>Full screenshot (incl. default module clock)</br>
![Full screen screenshot](./screenshots/MagicMirror%C2%B2-UDR_full.png)

## F.A.Q.
**Question:** *Cannot update my module I get sopmething like: Your local changes to the following files would be overwritten by merge: (some file). Please, commit your changes or stash them before you can merge.*

**Answer:**
<br>This message basically give you the information that you have changed something locally and you have not submittet this to GitHub. That's fine for the moment if you have changed only the calendar file `udr-cal.txt`.<br />
Backup this file somewhere outside of the `./modules/mmm-udr/ folder`.
Now we reset the repository. Once again please backup your the files which you have changed! Otherwise they are lost.
```
cd /path/to/MagicMirror/modules/mmm-udr
git reset --hard
```







## Copyright 2019 CrimsonClyde

MIT License [tl;dr](https://tldrlegal.com/license/mit-license)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
