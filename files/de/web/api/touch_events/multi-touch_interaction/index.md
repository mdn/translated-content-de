---
title: Multi-Touch-Interaktion
slug: Web/API/Touch_events/Multi-touch_interaction
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{DefaultAPISidebar("Touch Events")}}

Die Touch-Event-Schnittstellen unterstützen anwendungsspezifische Einzel- und Multi-Touch-Interaktionen. Allerdings können diese Schnittstellen für Programmierer etwas knifflig sein, da Touch-Events sich stark von anderen DOM-Eingabeereignissen, wie [Maus-Events](/de/docs/Web/API/MouseEvent), unterscheiden. Die in diesem Leitfaden beschriebene Anwendung zeigt, wie man Touch-Events für einfache Einzel- und Multi-Touch-Interaktionen verwendet, die grundlegenden Elemente, die benötigt werden, um anwendungsspezifische Gesten zu erstellen.

Eine _live_ Version dieser Anwendung ist auf [GitHub](https://mdn.github.io/dom-examples/touchevents/Multi-touch_interaction.html) verfügbar. Der [Quellcode ist auf GitHub verfügbar](https://github.com/mdn/dom-examples/tree/main/touchevents) und Pull-Requests sowie [Fehlerberichte](https://github.com/mdn/dom-examples/issues) sind willkommen.

## Beispiel

Dieses Beispiel demonstriert die Verwendung der {{domxref("Element/touchstart_event", "touchstart")}}, {{domxref("Element/touchmove_event", "touchmove")}}, {{domxref("Element/touchcancel_event", "touchcancel")}}, und {{domxref("Element/touchend_event", "touchend")}}) Touch-Events für folgende Gesten: Einzel-Touch, zwei (gleichzeitige) Berührungen, mehr als zwei gleichzeitige Berührungen, 1-Finger-Wischbewegung und 2-Finger-Bewegung/Zoom/Wischbewegung.

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

`tpCache` wird verwendet, um Berührungspunkte für die Verarbeitung außerhalb des Ereignisses zu speichern, in dem sie ausgelöst wurden.

```js
// Log events flag
let logEvents = false;

// Touch Point cache
const tpCache = [];
```

### Ereignishandler registrieren

Ereignishandler werden für alle vier Touch-Ereignistypen registriert. Die {{domxref("Element/touchend_event", "touchend")}} und {{domxref("Element/touchcancel_event", "touchcancel")}} Ereignistypen verwenden denselben Handler.

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

### Bewegungs-/Zoom-/Pinch-Handler

Diese Funktion bietet sehr grundlegende Unterstützung für die Bearbeitung von 2-Touch horizontaler Bewegung/Pinch/Zoom. Der Code enthält weder Fehlerbehandlung noch vertikale Bewegungen. Beachten Sie, dass der _Schwellenwert_ für die Erkennung von Pinch- und Zoom-Bewegungen anwendungsspezifisch (und geräteabhängig) ist.

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

### Touch-Start-Handler

Der {{domxref("Element/touchstart_event", "touchstart")}} Event-Handler speichert Berührungspunkte im Cache, um 2-Touch-Gesten zu unterstützen. Er ruft auch {{domxref("Event.preventDefault","preventDefault()")}} auf, um den Browser daran zu hindern, weitere Ereignisverarbeitungen wie die Emulation von Mausereignissen vorzunehmen.

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
    for (let i = 0; i < ev.targetTouches.length; i++) {
      tpCache.push(ev.targetTouches[i]);
    }
  }
  if (logEvents) log("touchStart", ev, true);
  update_background(ev);
}
```

### Touch-Move-Handler

Der {{domxref("Element/touchmove_event", "touchmove")}} Handler ruft aus den oben genannten Gründen {{domxref("Event.preventDefault","preventDefault()")}} auf und aktiviert den Pinch/Zoom-Handler.

```js
function move_handler(ev) {
  // Note: if the user makes more than one "simultaneous" touches, most browsers
  // fire at least one touchmove event and some will fire several touchmoves.
  // Consequently, an application might want to "ignore" some touchmoves.
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

### Touch-End-Handler

Der {{domxref("Element/touchend_event", "touchend")}} Handler stellt die Hintergrundfarbe des Ereigniszieles auf seine ursprüngliche Farbe zurück.

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

Die Anwendung verwendet {{HTMLElement("div")}}-Elemente für die Berührungsbereiche und bietet Schaltflächen zum Aktivieren des Loggings und zum Löschen des Logs.

```html
<div id="target1">Tippen, Halten oder Wischen Sie mich 1</div>
<div id="target2">Tippen, Halten oder Wischen Sie mich 2</div>
<div id="target3">Tippen, Halten oder Wischen Sie mich 3</div>
<div id="target4">Tippen, Halten oder Wischen Sie mich 4</div>

<!-- UI für Logging/Debugging -->
<button id="log" onclick="enableLog(event);">Event-Logging starten/stoppen</button>
<button id="clearlog" onclick="clearLog(event);">Log löschen</button>
<p></p>
<output></output>
```

### Verschiedene Funktionen

Diese Funktionen unterstützen die Anwendung, sind aber nicht direkt am Ereignisfluss beteiligt.

#### Hintergrundfarbe aktualisieren

Die Hintergrundfarbe der Berührungsbereiche ändert sich wie folgt: keine Berührung ist `white`; eine Berührung ist `yellow`; zwei gleichzeitige Berührungen sind `pink`, und drei oder mehr gleichzeitige Berührungen sind `lightblue`. Siehe [Touch-Move-Handler](#touch-move-handler) für Informationen über die Hintergrundfarbänderung, wenn eine 2-Finger-Bewegung/Zoom/Pinch erkannt wird.

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

#### Ereignis-Logging

Die Funktionen werden verwendet, um Ereignisaktivitäten im Anwendungsfenster zu protokollieren, um das Debugging und das Lernen über den Ereignisfluss zu unterstützen.

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
    for (let i = 0; i < ev.targetTouches.length; i++) {
      s += `... id = ${ev.targetTouches[i].identifier}\n`;
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