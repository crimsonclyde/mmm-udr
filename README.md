<pre>
 _________        .__
 \_   ___ \_______|__| _____   __________   ____
 /    \  \/\_  __ \  |/     \ /  ___/  _ \ /    \
 \     \____|  | \/  |  | |  \\___ (  <_> )   |  \
  \______  /|__|  |__|__|_|  /____  >____/|___|  /
        \/                \/     \/  Clyde      \/ </pre>


# MagicMirror² Module - Ultimate Day Reminder


| Input | Output |
| --- |---|
|Author:     | CrimsonClyde   |
|Stardate:   | 35c3 (Day3)   |
|Location:   | Somewhere deep in the Assemblies   |


<br>Module screenshot</br>
![Module screenshot](./screenshots/MagicMirror%C2%B2-UDR_solo.png)


## Description:
This MagicMirror² module grants you the super power displaying you your own current event of the day.
You can add everything to the calendar file what you want. the easierst way is to fork this project
and change the calendar file to your needs. We just filled it for you with some nice specials.
But it is totally up to you.

## Table of Contents

- [Table Of Contents](#table-of-contents)
- [Calendar File](#calendar-file)
- [Installation](##installation)
- [Update Module](#update-module)
- [Screenshots](#screenshots)
- [F.A.Q.](#faq)
- [Developement Status](#developement-status)
- [Copyright](#copyright)

## Calendar File
<br>Calendar File is called `udr-cal.txt`.</br>
Simple put your events into this file.

Example:
```
2019-08-28 American Race Your Mouse Around The Icons Day,
2019-08-30 Frankenstein Day (Happy Birthday Marry Wollenstone Shelley),
2019-09-13 Day of the Programmer,
2019-09-14 Hobbit Day (Birthday Bilbo/Frodo),
2019-09-19 International Talk Like a Pirate Day,
2019-09-23 Mabon (Autumn Equinox),
2019-10-01 International Coffee Day,
```
<br>Syntax is: `YYYY-MM-DD Event,`</br>

**:warning: Important!**
- **Don´t forget to add the comma at the end of each line**


## Installation
1. Navigate into your MagicMirror's `modules` folder and execute
```
git clone https://github.com/crimsonclyde/mmm-udr.git
```
2. CD into new folder called `mmm-udr`
```
npm install
```
3. To use this module, add it to the modules array in the config/config.js file:
```
modules: [
	{
		module: 'mmm-udr',
		position: 'bottom_bar', // The status indicator position
	}
]
```

## Update Module
1. Navigate into your MagicMirror's `modules` folder

2. Now further on navigate into `mmm-udr` folder and execute
```
git pull & npm install
```

##  Screenshots
<br>Full screenshot (incl. default module clock)</br>
![Full screen screenshot](./screenshots/MagicMirror%C2%B2-UDR_full.png)

## F.A.Q.
**Question:** *Cannot update my module I get something like: Your local changes to the following files would be overwritten by merge: (some file). Please, commit your changes or stash them before you can merge.*

**Answer:**
<br>This message basically tells you that you have changed something locally and you have not submittet this to GitHub. That's fine for the moment if you have changed only the calendar file `udr-cal.txt`.<br />
Backup this file somewhere outside of the `./modules/mmm-udr/ folder`.
Now we use reset on the repository.

**:warning: Important!**
- **Be sure that you have a backup of your changed files !**

```
cd /path/to/MagicMirror/modules/mmm-udr
git reset --hard
```
Now you should be able to update `mmm-udr` and copy the calendar file back into your module directory


## Developement Status
A basisc running beta gold version.
Module works fine, but it is a poor code quality and not hardend against input errors with the calendar file.
I am not sure if I ever want to improve this, reason is simple, during the developement of this module I started to hate NodeJS and JS. Not to meant personal. I seems that I am to stupid and therefore not able to get a hang of this script language. Sorry


## Copyright

`2019 by CrimsonClyde,`

MIT License [tl;dr](https://tldrlegal.com/license/mit-license)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
