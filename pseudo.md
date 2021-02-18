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

SET VAR goalTime = IF USER INPUT, INPUT; ELSE, 02/22/21 08:00 AM
SET VAR currentTime = Time right now
SET VAR displayTime = goalTime - currentTime

FUNCTION setGoalTime
    This will run the logic to determine the INPUT for goalTime
FUNCTION setDisplayTime
    Update currentTime
    Update displayTime

SET AN INTERVAL to run setDisplayTime every sec (1000ms).