# alertJS Documantation
## $.alertJS Use
Variables : `$.alertJS(mode, message, status, close, id)`

```javascript
$.alertJS("mini", "Benim Mesajım", "success", 1, 5)
```
```javascript
mode      / string    -   default = "full"                -   "full", "mini"
message   / string    -   default = "Message Not Found!"  -
status    / string    -   default = "info"                -   "info", "error", "success", "alert"
close     / number    -   default = 1                     -   0 = close function, 1 = close button, 2 = close button and mask
close     / number    -   default = 1                     -   0 = close function, 1 = close button, 300 = auto close milisecond
id        / number    -   default = Random 0 - 10         -
```

## $.alertJSLoad Use
Variables : `$.alertJSLoad(mode, message, id, loadFigur, status)`

```javascript
$.alertJSLoad("full", "Yükleniyor...", 5, "refresh", "info")
```
```javascript
mode      / string    -   default = "full"                -   "full", "mini"
message   / string    -   default = "Message Not Found!"  -
id        / number    -   default = Random 0 - 10         -
loadFigur / string    -   default = "refresh"             -   "spinner", "circle-o-notch", "refresh", "cog"
status    / string    -   default = "info"                -   "info", "error", "success", "alert"
```
## $.alertJSX  Use
Variables : `$.alertJSX(id)`

```javascript
$.alertJSX(5)
```
```javascript
id        / number    -   target id number
```
