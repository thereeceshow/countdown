# CoUnTDoWn TiMeR

This countdown timer will create a 8 digit count down timer.
The format will be **DD : HH : MM : SS**
Below the display, there will be two imput fields, one for the date, and one for the time.
These will allow custom times to be put in the field.
By default, the countdown timer will count down until 8:00 AM Monday the 22, the first day of in Person Bootcamp.
Below the input fields will be a submit button to update the timer and start the time.
It will play an sound when it reaches 0.
It will stop at zero, and not show elapsed time.

----

--Visual--

## Countdown Timer

### **DD:HH:MM:DD**


Countdown to:

| `DATE` | `TIME` |
|--- | --- |

<button>sumbit</buttom>

---

START

SET CONST display to be the area we want the display

SET VAR goalTime = The time we are couting down to
SET VAR currentTime = Time right now
SET VAR displayTime = goalTime - currentTime
    *This changes the format from JAN XX XXXX to total MS*
    *So we need to convert MS to DD:HH:MM:SS*

    MS / 1000 = Secs
    86400 Secs in Day
    3600 Secs in Hour
    60 Secs in Min

    So we need to see how many times 

FUNCTION setGoalTime
    This will run the logic to determine the INPUT for goalTime
    IF USER INPUT, INPUT; ELSE, 02/22/21 08:00 AM
FUNCTION setDisplayTime
    Update currentTime
    Update displayTime
    Load text of displayTime to page

SET AN INTERVAL to run setDisplayTime every sec (1000ms).

ON BUTTON CLICK
    Will assign RUN setGoalTime

FUNCTION SOUND
    Will play sound when countdown = 0