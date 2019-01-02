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
<pre>
2018-05-01 Beltaine (Summer starts),
2018-11-01 Samhain (Winter starts),
2018-12-21 Yule (Wintersonnwend),
</pre>

Don´t forget to add the comma at the end of the line!


## Developement status
Work in Progress (WIP)
Module works fine, but poor code and not hardend against input errors with the calendar file.


## Usage
To use this module, add it to the modules array in the config/config.js file:

```
modules: [
	{
		module: 'mmm-udr',
		position: 'bottom_bar', // The status indicator position
		config: {
		    // See 'Configuration options' for more information.
		    moduleName: 'module_name',
		    headerName: 'header_name',
		    updateInterval: 'interval',
		}
	}
]
```


## Configuration

| Argument | Default | Description |
|---|---|---|
| **`moduleName`** | `""` | The device id  that you've created at Amazon. |
| **`headerName`** | `""` | Name display on top of the event |
| **`updateInterval`** | `"60*60*1000"` | Interval for check entries |

<pre>60 * 60 * 1000 = 60 minutes</pre>


##  Screenshots
<br>Full screenshot (incl. default module clock)</br>
![Full screen screenshot](./screenshots/MagicMirror%C2%B2-UDR_full.png)


## Copyright 2019 CrimsonClyde

MIT License [tl;dr](https://tldrlegal.com/license/mit-license)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
