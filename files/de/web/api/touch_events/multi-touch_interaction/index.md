---
title: Multi-Touch-Interaktion
slug: Web/API/Touch_events/Multi-touch_interaction
l10n:
  sourceCommit: 4bb8f0d1f9cb2d0e23b9e19f798a7ff39ac34a49
---

{{DefaultAPISidebar("Touch Events")}}

Die Schnittstellen für Touch-Events unterstützen anwendungsspezifische Interaktionen mit einer oder mehreren Berührungen. Ihre Verwendung kann für Entwickler jedoch etwas schwierig sein, da sich Touch-Events stark von anderen DOM-Eingabeereignissen wie [Mausereignissen](/de/docs/Web/API/MouseEvent) unterscheiden. Die in diesem Leitfaden beschriebene Anwendung zeigt, wie Sie Touch-Events für einfache Interaktionen mit einer oder mehreren Berührungen verwenden. Sie vermittelt damit die Grundlagen für die Entwicklung anwendungsspezifischer Gesten.

Eine _Live-Version_ dieser Anwendung ist auf [GitHub](https://mdn.github.io/dom-examples/touchevents/Multi-touch_interaction.html) verfügbar. Der [Quellcode ist auf GitHub verfügbar](https://github.com/mdn/dom-examples/tree/main/touchevents); Pull Requests und [Fehlerberichte](https://github.com/mdn/dom-examples/issues) sind willkommen.

## Beispiel

Dieses Beispiel zeigt, wie die Touch-Events [`touchstart`](/de/docs/Web/API/Element/touchstart_event), [`touchmove`](/de/docs/Web/API/Element/touchmove_event), [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event) und [`touchend`](/de/docs/Web/API/Element/touchend_event) für folgende Gesten verwendet werden: eine einzelne Berührung, zwei gleichzeitige Berührungen, mehr als zwei gleichzeitige Berührungen, eine Wischgeste mit einem Finger sowie Bewegen, Zusammenziehen oder Wischen mit zwei Fingern.

### Berührungsflächen definieren

Die Anwendung verwendet {{HTMLElement("div")}}-Elemente, um vier Berührungsflächen darzustellen.

```css
div {
  margin: 0em;
  padding: 2em;
}
#target1 {
  background: white;
  border: 1px solid black;
}
#target2 {
  background: white;
  border: 1px solid black;
}
#target3 {
  background: white;
  border: 1px solid black;
}
#target4 {
  background: white;
  border: 1px solid black;
}
```

### Globaler Zustand

`tpCache` speichert Berührungspunkte zwischen, damit sie außerhalb des Events verarbeitet werden können, bei dem sie erfasst wurden.

```js
// Log events flag
let logEvents = false;

// Touch Point cache
const tpCache = [];
```

### Event-Handler registrieren

Für alle vier Touch-Event-Typen werden Event-Handler registriert. Die Event-Typen [`touchend`](/de/docs/Web/API/Element/touchend_event) und [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event) verwenden denselben Handler.

```js
function setHandlers(name) {
  // Install event handlers for the given element
  const el = document.getElementById(name);
  el.addEventListener("touchstart", startHandler);
  el.addEventListener("touchmove", moveHandler);
  // Use same handler for touchcancel and touchend
  el.addEventListener("touchcancel", endHandler);
  el.addEventListener("touchend", endHandler);
}

function init() {
  setHandlers("target1");
  setHandlers("target2");
  setHandlers("target3");
  setHandlers("target4");
}
```

### Handler für Bewegen, Zusammenziehen und Zoomen

Diese Funktion bietet eine grundlegende Unterstützung für horizontales Bewegen, Zusammenziehen und Zoomen mit zwei Berührungen. Der Code enthält weder eine Fehlerbehandlung noch eine Verarbeitung vertikaler Bewegungen. Beachten Sie, dass der _Schwellenwert_ für die Erkennung von Zusammenzieh- und Zoombewegungen von der Anwendung und vom Gerät abhängt.

```js
// This is a very basic 2-touch move/pinch/zoom handler that does not include
// error handling, only handles horizontal moves, etc.
function handlePinchZoom(ev) {
  if (ev.targetTouches.length === 2 && ev.changedTouches.length === 2) {
    // Check if the two target touches are the same ones that started
    // the 2-touch
    const point1 = tpCache.findLastIndex(
      (tp) => tp.identifier === ev.targetTouches[0].identifier,
    );
    const point2 = tpCache.findLastIndex(
      (tp) => tp.identifier === ev.targetTouches[1].identifier,
    );

    if (point1 >= 0 && point2 >= 0) {
      // Calculate the difference between the start and move coordinates
      const diff1 = Math.abs(
        tpCache[point1].clientX - ev.targetTouches[0].clientX,
      );
      const diff2 = Math.abs(
        tpCache[point2].clientX - ev.targetTouches[1].clientX,
      );

      // This threshold is device dependent as well as application specific
      const PINCH_THRESHOLD = ev.target.clientWidth / 10;
      if (diff1 >= PINCH_THRESHOLD && diff2 >= PINCH_THRESHOLD)
        ev.target.style.background = "green";
    } else {
      // empty tpCache
      tpCache.length = 0;
    }
  }
}
```

### Handler für den Beginn einer Berührung

Der Handler für das [`touchstart`](/de/docs/Web/API/Element/touchstart_event)-Event speichert Berührungspunkte zwischen, um Gesten mit zwei Berührungen zu unterstützen. Er ruft außerdem [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf, damit der Browser keine weitere Event-Verarbeitung vornimmt, beispielsweise die Emulation von Mausereignissen.

```js
function startHandler(ev) {
  // If the user makes simultaneous touches, the browser will fire a
  // separate touchstart event for each touch point. Thus if there are
  // three simultaneous touches, the first touchstart event will have
  // targetTouches length of one, the second event will have a length
  // of two, and so on.
  ev.preventDefault();
  // Cache the touch points for later processing of 2-touch pinch/zoom
  if (ev.targetTouches.length === 2) {
    for (const touch of ev.targetTouches) {
      tpCache.push(touch);
    }
  }
  if (logEvents) log("touchStart", ev, true);
  updateBackground(ev);
}
```

### Handler für die Bewegung einer Berührung

Der Handler für das [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Event ruft aus demselben Grund wie oben [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf und führt den Handler für Zusammenziehen und Zoomen aus.

```js
function moveHandler(ev) {
  // Note: if the user makes more than one "simultaneous" touches, most browsers
  // fire at least one touchmove event and some will fire several touch moves.
  // Consequently, an application might want to "ignore" some touch moves.
  //
  // This function sets the target element's border to "dashed" to visually
  // indicate the target received a move event.
  //
  ev.preventDefault();
  if (logEvents) log("touchMove", ev, false);
  // To avoid too much color flashing many touchmove events are started,
  // don't update the background if two touch points are active
  if (!(ev.touches.length === 2 && ev.targetTouches.length === 2))
    updateBackground(ev);

  // Set the target element's border to dashed to give a clear visual
  // indication the element received a move event.
  ev.target.style.border = "dashed";

  // Check this event for 2-touch Move/Pinch/Zoom gesture
  handlePinchZoom(ev);
}
```

### Handler für das Ende einer Berührung

Der Handler für das [`touchend`](/de/docs/Web/API/Element/touchend_event)-Event setzt die Hintergrundfarbe des Event-Ziels auf ihre ursprüngliche Farbe zurück.

```js
function endHandler(ev) {
  ev.preventDefault();
  if (logEvents) log(ev.type, ev, false);
  if (ev.targetTouches.length === 0) {
    // Restore background and border to original values
    ev.target.style.background = "white";
    ev.target.style.border = "1px solid black";
  }
}
```

### Benutzeroberfläche der Anwendung

Die Anwendung verwendet {{HTMLElement("div")}}-Elemente für die Berührungsflächen und stellt Schaltflächen bereit, um die Protokollierung zu aktivieren und das Protokoll zu löschen.

```html
<div id="target1">Tap, Hold or Swipe me 1</div>
<div id="target2">Tap, Hold or Swipe me 2</div>
<div id="target3">Tap, Hold or Swipe me 3</div>
<div id="target4">Tap, Hold or Swipe me 4</div>

<!-- UI for logging/debugging -->
<button id="toggle-log">Start/Stop event logging</button>
<button id="clear-log">Clear the log</button>
<output id="output"></output>
```

### Sonstige Funktionen

Diese Funktionen unterstützen die Anwendung, sind aber nicht direkt am Event-Ablauf beteiligt.

#### Hintergrundfarbe aktualisieren

Die Hintergrundfarbe der Berührungsflächen ändert sich wie folgt: Ohne Berührung ist sie `white`, bei einer Berührung `yellow`, bei zwei gleichzeitigen Berührungen `pink` und bei drei oder mehr gleichzeitigen Berührungen `lightblue`. Informationen dazu, wie sich die Hintergrundfarbe ändert, wenn eine Bewegung, ein Zusammenziehen oder ein Zoomen mit zwei Fingern erkannt wird, finden Sie unter [Handler für die Bewegung einer Berührung](#handler_für_die_bewegung_einer_berührung).

```js
function updateBackground(ev) {
  // Change background color based on the number simultaneous touches
  // in the event's targetTouches list:
  //   yellow - one tap (or hold)
  //   pink - two taps
  //   lightblue - more than two taps
  switch (ev.targetTouches.length) {
    case 1:
      // Single tap`
      ev.target.style.background = "yellow";
      break;
    case 2:
      // Two simultaneous touches
      ev.target.style.background = "pink";
      break;
    default:
      // More than two simultaneous touches
      ev.target.style.background = "lightblue";
  }
}
```

#### Event-Protokollierung

Diese Funktionen protokollieren Event-Aktivitäten im Anwendungsfenster. Das erleichtert das Debugging und hilft dabei, den Event-Ablauf nachzuvollziehen.

```js
const output = document.getElementById("output");

function toggleLog(ev) {
  logEvents = !logEvents;
}

document.getElementById("toggle-log").addEventListener("click", toggleLog);

function log(name, ev, printTargetIds) {
  let s =
    `${name}: touches = ${ev.touches.length} ; ` +
    `targetTouches = ${ev.targetTouches.length} ; ` +
    `changedTouches = ${ev.changedTouches.length}`;
  output.innerText += `${s}\n`;

  if (printTargetIds) {
    s = "";
    for (const touch of ev.targetTouches) {
      s += `... id = ${touch.identifier}\n`;
    }
    output.innerText += s;
  }
}

function clearLog(event) {
  output.textContent = "";
}

document.getElementById("clear-log").addEventListener("click", clearLog);
```

## Siehe auch

- [Pointer-Events](/de/docs/Web/API/Pointer_events)
