---
title: Multi-Touch-Interaktion
slug: Web/API/Touch_events/Multi-touch_interaction
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{DefaultAPISidebar("Touch Events")}}

Die Touch-Event-Schnittstellen unterstützen anwendungsspezifische Einzel- und Mehrfach-Touch-Interaktionen. Allerdings können diese Schnittstellen für Programmierer schwierig zu handhaben sein, da sich Touch-Events deutlich von anderen DOM-Eingabeereignissen, wie zum Beispiel [Maus-Events](/de/docs/Web/API/MouseEvent), unterscheiden. Die in diesem Leitfaden beschriebene Anwendung zeigt, wie man Touch-Events für einfache Einzel- und Mehrfach-Touch-Interaktionen verwendet, und bietet die Grundlagen, die zum Erstellen anwendungsspezifischer Gesten benötigt werden.

Eine _Live_-Version dieser Anwendung ist auf [GitHub](https://mdn.github.io/dom-examples/touchevents/Multi-touch_interaction.html) verfügbar. Der [Quellcode ist auf GitHub verfügbar](https://github.com/mdn/dom-examples/tree/main/touchevents) und Pull Requests sowie [Fehlermeldungen](https://github.com/mdn/dom-examples/issues) sind willkommen.

## Beispiel

Dieses Beispiel demonstriert die Verwendung der Touch-Events [`touchstart`](/de/docs/Web/API/Element/touchstart_event), [`touchmove`](/de/docs/Web/API/Element/touchmove_event), [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event) und [`touchend`](/de/docs/Web/API/Element/touchend_event) für die folgenden Gesten: Einzel-Touch, zwei (gleichzeitige) Berührungen, mehr als zwei gleichzeitige Berührungen, 1-Finger-Wischen und 2-Finger-Bewegen/Verkleinern/Vergrößern/Wischen.

### Touch-Ziele definieren

Die Anwendung verwendet {{HTMLElement("div")}}-Elemente, um vier Berührungsbereiche darzustellen.

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

`tpCache` wird verwendet, um Berührungspunkte zu cachen, damit sie außerhalb des Ereignisses, in dem sie ausgelöst wurden, verarbeitet werden können.

```js
// Log events flag
let logEvents = false;

// Touch Point cache
const tpCache = [];
```

### Ereignis-Handler registrieren

Ereignis-Handler werden für alle vier Touch-Event-Typen registriert. Die Event-Typen [`touchend`](/de/docs/Web/API/Element/touchend_event) und [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event) verwenden denselben Handler.

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

### Bewegung/Verkleinern/Vergrößern-Handler

Diese Funktion bietet grundlegende Unterstützung für das horizontale Bewegen/Verkleinern/Vergrößern mit 2 Berührungen. Der Code enthält keine Fehlerbehandlung oder vertikale Bewegungen. Beachten Sie, dass der _Schwellwert_ für die Erkennung von Verkleinerungs- und Vergrößerungsbewegungen anwendungsspezifisch (und geräteabhängig) ist.

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

### Touch-Start-Handler

Der [`touchstart`](/de/docs/Web/API/Element/touchstart_event)-Ereignis-Handler cached Berührungspunkte, um 2-Touch-Gesten zu unterstützen. Er ruft auch [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf, um zu verhindern, dass der Browser weitere Ereignisverarbeitungen, wie z.B. Mauserereignis-Emulation, durchführt.

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

### Touch-Bewegungs-Handler

Der [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Handler ruft aus dem oben genannten Grund [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf und ruft den Verkleinerungs-/Vergrößerungs-Handler auf.

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

### Touch-Ende-Handler

Der [`touchend`](/de/docs/Web/API/Element/touchend_event)-Handler stellt die Hintergrundfarbe des Ereignis-Ziels auf seine ursprüngliche Farbe zurück.

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

### Anwendungs-UI

Die Anwendung verwendet {{HTMLElement("div")}}-Elemente für die Berührungsbereiche und bietet Schaltflächen, um das Logging zu aktivieren und das Log zu löschen.

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

### Verschiedene Funktionen

Diese Funktionen unterstützen die Anwendung, sind aber nicht direkt in den Ereignisablauf involviert.

#### Hintergrundfarbe aktualisieren

Die Hintergrundfarbe der Berührungsbereiche ändert sich wie folgt: kein Touch ist `weiß`; eine Berührung ist `gelb`; zwei gleichzeitige Berührungen sind `rosa` und drei oder mehr gleichzeitige Berührungen sind `hellblau`. Siehe [Touch-Bewegungs-Handler](#touch-bewegungs-handler) für Informationen über die Änderung der Hintergrundfarbe, wenn eine 2-Finger-Bewegung/Verkleinerung/Vergrößerung erkannt wird.

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

#### Ereignis-Logging

Die Funktionen werden verwendet, um die Ereignisaktivität im Anwendungsfenster zu protokollieren, um das Debuggen zu unterstützen und den Ereignisfluss kennenzulernen.

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

- [Pointer Events](/de/docs/Web/API/Pointer_events)
