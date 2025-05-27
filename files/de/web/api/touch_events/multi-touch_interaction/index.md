---
title: Multi-Touch-Interaktion
slug: Web/API/Touch_events/Multi-touch_interaction
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{DefaultAPISidebar("Touch Events")}}

Die Touch-Event-Schnittstellen unterstützen anwendungsspezifische Einzel- und Multi-Touch-Interaktionen. Für Programmierer können die Schnittstellen jedoch etwas knifflig sein, da Touch-Events sich stark von anderen DOM-Eingabeereignissen, wie zum Beispiel [Mausereignissen](/de/docs/Web/API/MouseEvent), unterscheiden. Die in diesem Leitfaden beschriebene Anwendung zeigt, wie Touch-Events für einfache Einzel- und Multi-Touch-Interaktionen genutzt werden, was die Grundlagen darstellt, die zur Erstellung anwendungsspezifischer Gesten notwendig sind.

Eine _Live_-Version dieser Anwendung ist auf [GitHub](https://mdn.github.io/dom-examples/touchevents/Multi-touch_interaction.html) verfügbar. Der [Quellcode ist auf GitHub verfügbar](https://github.com/mdn/dom-examples/tree/main/touchevents) und Pull-Anfragen sowie [Fehlermeldungen](https://github.com/mdn/dom-examples/issues) sind willkommen.

## Beispiel

Dieses Beispiel demonstriert die Verwendung der Touch-Events [`touchstart`](/de/docs/Web/API/Element/touchstart_event), [`touchmove`](/de/docs/Web/API/Element/touchmove_event), [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event) und [`touchend`](/de/docs/Web/API/Element/touchend_event) für die folgenden Gesten: Einzel-Touch, zwei (gleichzeitige) Berührungen, mehr als zwei gleichzeitige Berührungen, 1-Finger-Wischen und 2-Finger-Bewegung/Zoom/Wischen.

### Touch-Ziele definieren

Die Anwendung verwendet {{HTMLElement("div")}}-Elemente, um vier Berührungsbereiche darzustellen.

```html
<style>
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
</style>
```

### Globaler Zustand

`tpCache` wird verwendet, um Berührungspunkte zu zwischenspeichern, damit sie außerhalb des Ereignisses verarbeitet werden können, in dem sie ausgelöst wurden.

```js
// Log events flag
let logEvents = false;

// Touch Point cache
const tpCache = [];
```

### Ereignis-Handler registrieren

Ereignis-Handler werden für alle vier Touch-Event-Typen registriert. Die Ereignistypen [`touchend`](/de/docs/Web/API/Element/touchend_event) und [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event) verwenden denselben Handler.

```js
function set_handlers(name) {
  // Install event handlers for the given element
  const el = document.getElementById(name);
  el.ontouchstart = start_handler;
  el.ontouchmove = move_handler;
  // Use same handler for touchcancel and touchend
  el.ontouchcancel = end_handler;
  el.ontouchend = end_handler;
}

function init() {
  set_handlers("target1");
  set_handlers("target2");
  set_handlers("target3");
  set_handlers("target4");
}
```

### Bewegung/Zoom/Pinch-Handler

Diese Funktion bietet sehr grundlegende Unterstützung für 2-Touch-Horizontalbewegung/Zoom/Pinch-Behandlung. Der Code enthält keine Fehlerbehandlung oder vertikale Bewegungen. Beachten Sie, dass die _Schwelle_ für die Erkennung von Zoom- und Pinch-Bewegungen anwendungsspezifisch (und geräteabhängig) ist.

```js
// This is a very basic 2-touch move/pinch/zoom handler that does not include
// error handling, only handles horizontal moves, etc.
function handle_pinch_zoom(ev) {
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

### Touchstart-Handler

Der [`touchstart`](/de/docs/Web/API/Element/touchstart_event) Ereignis-Handler speichert Berührungspunkte für die Unterstützung von 2-Touch-Gesten zwischen. Er ruft auch [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf, um zu verhindern, dass der Browser weiteres Event-Handling anwendet (zum Beispiel die Emulation von Mausereignissen).

```js
function start_handler(ev) {
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
  update_background(ev);
}
```

### Touchmove-Handler

Der [`touchmove`](/de/docs/Web/API/Element/touchmove_event) Handler ruft [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aus demselben Grund wie oben erwähnt auf und startet den Pinch/Zoom-Handler.

```js
function move_handler(ev) {
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
    update_background(ev);

  // Set the target element's border to dashed to give a clear visual
  // indication the element received a move event.
  ev.target.style.border = "dashed";

  // Check this event for 2-touch Move/Pinch/Zoom gesture
  handle_pinch_zoom(ev);
}
```

### Touchend-Handler

Der [`touchend`](/de/docs/Web/API/Element/touchend_event) Handler stellt die Hintergrundfarbe des Ereignisziels zurück auf ihre ursprüngliche Farbe.

```js
function end_handler(ev) {
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

Die Anwendung verwendet {{HTMLElement("div")}}-Elemente für die Berührungsbereiche und bietet Schaltflächen zum Aktivieren der Protokollierung und zum Löschen des Protokolls.

```html
<div id="target1">Tap, Hold or Swipe me 1</div>
<div id="target2">Tap, Hold or Swipe me 2</div>
<div id="target3">Tap, Hold or Swipe me 3</div>
<div id="target4">Tap, Hold or Swipe me 4</div>

<!-- UI for logging/debugging -->
<button id="log" onclick="enableLog(event);">Start/Stop event logging</button>
<button id="clearlog" onclick="clearLog(event);">Clear the log</button>
<p></p>
<output></output>
```

### Sonstige Funktionen

Diese Funktionen unterstützen die Anwendung, sind jedoch nicht direkt in den Ereignisfluss eingebunden.

#### Aktualisierung der Hintergrundfarbe

Die Hintergrundfarbe der Berührungsbereiche ändert sich wie folgt: keine Berührung ist `weiß`; eine Berührung ist `gelb`; zwei gleichzeitige Berührungen sind `pink` und drei oder mehr gleichzeitige Berührungen sind `hellblau`. Siehe [Touchmove-Handler](#touchmove-handler) für Informationen zum Ändern der Hintergrundfarbe, wenn eine 2-Finger-Bewegung/Zoom/Pinch erkannt wird.

```js
function update_background(ev) {
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

#### Ereignisprotokollierung

Die Funktionen werden verwendet, um die Ereignisaktivität im Anwendungsfenster zu protokollieren, um das Debuggen und das Lernen über den Ereignisfluss zu unterstützen.

```js
function enableLog(ev) {
  logEvents = !logEvents;
}

function log(name, ev, printTargetIds) {
  const o = document.getElementsByTagName("output")[0];
  let s =
    `${name}: touches = ${ev.touches.length} ; ` +
    `targetTouches = ${ev.targetTouches.length} ; ` +
    `changedTouches = ${ev.changedTouches.length}`;
  o.innerText += `${s}\n`;

  if (printTargetIds) {
    s = "";
    for (const touch of ev.targetTouches) {
      s += `... id = ${touch.identifier}\n`;
    }
    o.innerText += s;
  }
}

function clearLog(event) {
  const o = document.getElementsByTagName("output")[0];
  o.textContent = "";
}
```

## Siehe auch

- [Pointer Events](/de/docs/Web/API/Pointer_events)
