---
title: Gesten für Kneifen und Zoomen
slug: Web/API/Pointer_events/Pinch_zoom_gestures
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{DefaultAPISidebar("Pointer Events")}}

Das Hinzufügen von _Gesten_ zu einer Anwendung kann die Benutzererfahrung erheblich verbessern. Es gibt viele Arten von Gesten, von der einfachen Einfinger-_Wisch_-Geste bis zur komplexeren Mehrfinger-_Dreh_Geste, bei der sich die Berührungspunkte (auch \_Zeiger_ genannt) in unterschiedliche Richtungen bewegen.

Dieses Beispiel zeigt, wie Sie die _Kneifen/Zoomen_-Geste erkennen können. Es verwendet [Pointer Events](/de/docs/Web/API/Pointer_events), um zu erkennen, ob der Benutzer zwei Zeiger näher zueinander oder weiter voneinander entfernt bewegt.

Eine _Live_-Version dieser Anwendung ist auf [GitHub](https://mdn.github.io/dom-examples/pointerevents/Pinch_zoom_gestures.html) verfügbar. Der [Quellcode ist auf GitHub verfügbar](https://github.com/mdn/dom-examples/blob/main/pointerevents/Pinch_zoom_gestures.html); Pull-Requests und [Fehlermeldungen](https://github.com/mdn/dom-examples/issues) sind willkommen.

## Beispiel

In diesem Beispiel verwenden Sie die [Pointer Events](/de/docs/Web/API/Pointer_events), um gleichzeitig zwei Zeigegeräte beliebigen Typs zu erkennen, einschließlich Finger, Maus und Stifte. Die Hereinzoomen (Verkleinern)-Geste, bei der die beiden Zeiger zueinander bewegt werden, ändert die Hintergrundfarbe des Zielelements auf `lightblue`. Die Herauszoomen (Vergrößern)-Geste, bei der die beiden Zeiger voneinander entfernt werden, ändert die Hintergrundfarbe des Zielelements auf `pink`.

### Berührungsziel definieren

Die Anwendung verwendet ein {{HTMLElement("div")}}, um die Zielbereiche der Zeiger zu definieren.

```css
div {
  margin: 0em;
  padding: 2em;
}
#target {
  background: white;
  border: 1px solid black;
}
```

### Globaler Zustand

Das Unterstützen einer Zwei-Zeiger-Geste erfordert, den Ereigniszustand eines Zeigers während verschiedener Ereignisphasen beizubehalten. Diese Anwendung verwendet zwei globale Variablen, um den Ereigniszustand zu zwischenspeichern.

```js
// Global vars to cache event state
const evCache = [];
let prevDiff = -1;
```

### Ereignishandler registrieren

Ereignishandler werden für die folgenden Pointer Events registriert: [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event), [`pointermove`](/de/docs/Web/API/Element/pointermove_event) und [`pointerup`](/de/docs/Web/API/Element/pointerup_event). Der Handler für [`pointerup`](/de/docs/Web/API/Element/pointerup_event) wird für die [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event), [`pointerout`](/de/docs/Web/API/Element/pointerout_event) und [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event) Ereignisse verwendet, da diese vier Ereignisse in dieser Anwendung dieselbe Semantik haben.

```js
// Install event handlers for the pointer target
const el = document.getElementById("target");
el.onpointerdown = pointerdownHandler;
el.onpointermove = pointermoveHandler;

// Use same handler for pointer{up,cancel,out,leave} events since
// the semantics for these events - in this app - are the same.
el.onpointerup = pointerupHandler;
el.onpointercancel = pointerupHandler;
el.onpointerout = pointerupHandler;
el.onpointerleave = pointerupHandler;
```

### Zeiger herunter

Das [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)-Ereignis wird ausgelöst, wenn ein Zeiger (Maus, Stift/Stylus oder Berührungspunkt auf einem Touchscreen) Kontakt mit der _Kontaktoberfläche_ herstellt. In dieser Anwendung muss der Zustand des Ereignisses zwischengespeichert werden, falls dieses Down-Ereignis Teil einer Zwei-Zeiger-Kneifen/Zoom-Geste ist.

```js
function pointerdownHandler(ev) {
  // The pointerdown event signals the start of a touch interaction.
  // This event is cached to support 2-finger gestures
  evCache.push(ev);
  log("pointerDown", ev);
}
```

### Zeiger bewegen

Der [`pointermove`](/de/docs/Web/API/Element/pointermove_event)-Ereignishandler erkennt, ob ein Benutzer eine Zwei-Zeiger-Kneifen/Zoom-Geste verwendet. Wenn zwei Zeiger heruntergedrückt sind und der Abstand zwischen den Zeigern zunimmt (signalisierend ein Herauszoomen oder Vergrößern), wird die Hintergrundfarbe des Elements auf `pink` geändert, und wenn der Abstand zwischen den Zeigern abnimmt (ein Hereinzoomen oder Verkleinern), wird die Hintergrundfarbe auf `lightblue` geändert. In einer anspruchsvolleren Anwendung könnte die Bestimmung des Herein- oder Herauszoomens verwendet werden, um anwendungsspezifische Semantiken anzuwenden.

Wenn dieses Ereignis verarbeitet wird, wird der Rahmen des Ziels auf `dashed` gesetzt, um eine klare visuelle Anzeige zu bieten, dass das Element ein Bewegungsereignis empfangen hat.

```js
function pointermoveHandler(ev) {
  // This function implements a 2-pointer horizontal pinch/zoom gesture.
  //
  // If the distance between the two pointers has increased (zoom in),
  // the target element's background is changed to "pink" and if the
  // distance is decreasing (zoom out), the color is changed to "lightblue".
  //
  // This function sets the target element's border to "dashed" to visually
  // indicate the pointer's target received a move event.
  log("pointerMove", ev);
  ev.target.style.border = "dashed";

  // Find this event in the cache and update its record with this event
  const index = evCache.findIndex(
    (cachedEv) => cachedEv.pointerId === ev.pointerId,
  );
  evCache[index] = ev;

  // If two pointers are down, check for pinch gestures
  if (evCache.length === 2) {
    // Calculate the distance between the two pointers
    const curDiff = Math.abs(evCache[0].clientX - evCache[1].clientX);

    if (prevDiff > 0) {
      if (curDiff > prevDiff) {
        // The distance between the two pointers has increased
        log("Pinch moving OUT -> Zoom in", ev);
        ev.target.style.background = "pink";
      }
      if (curDiff < prevDiff) {
        // The distance between the two pointers has decreased
        log("Pinch moving IN -> Zoom out", ev);
        ev.target.style.background = "lightblue";
      }
    }

    // Cache the distance for the next move event
    prevDiff = curDiff;
  }
}
```

### Zeiger hoch

Das [`pointerup`](/de/docs/Web/API/Element/pointerup_event)-Ereignis wird ausgelöst, wenn ein Zeiger von der _Kontaktoberfläche_ entfernt wird. Wenn dies geschieht, wird das Ereignis aus dem Ereigniscache entfernt und die Hintergrundfarbe und der Rahmen des Zielelements werden auf ihre ursprünglichen Werte zurückgesetzt.

In dieser Anwendung wird dieser Handler auch für [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event), [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event) und [`pointerout`](/de/docs/Web/API/Element/pointerout_event) Ereignisse verwendet.

```js
function pointerupHandler(ev) {
  log(ev.type, ev);
  // Remove this pointer from the cache and reset the target's
  // background and border
  removeEvent(ev);
  ev.target.style.background = "white";
  ev.target.style.border = "1px solid black";

  // If the number of pointers down is less than two then reset diff tracker
  if (evCache.length < 2) {
    prevDiff = -1;
  }
}
```

### Anwendungs-UI

Die Anwendung verwendet ein {{HTMLElement("div")}}-Element für den Berührungsbereich und bietet Schaltflächen zum Aktivieren eines Protokolls und zum Löschen des Protokolls.

Um zu verhindern, dass das Standard-Touch-Verhalten des Browsers die Zeigerbehandlung dieser Anwendung überschreibt, wird die {{cssxref("touch-action")}}-Eigenschaft auf das {{HTMLElement("body")}}-Element angewendet.

```html
<div id="target">
  Touch and Hold with 2 pointers, then pinch in or out.<br />
  The background color will change to pink if the pinch is opening (Zoom In) or
  changes to lightblue if the pinch is closing (Zoom out).
</div>
<!-- UI for logging/debugging -->
<button id="log">Start/Stop event logging</button>
<button id="clear-log">Clear the log</button>
<p></p>
<output></output>
```

```css
body {
  touch-action: none; /* Prevent default touch behavior */
}
```

### Verschiedene Funktionen

Diese Funktionen unterstützen die Anwendung, sind jedoch nicht direkt im Ereignisfluss beteiligt.

#### Cache-Verwaltung

Diese Funktion hilft bei der Verwaltung der globalen Ereigniscaches `evCache`.

```js
function removeEvent(ev) {
  // Remove this event from the target's cache
  const index = evCache.findIndex(
    (cachedEv) => cachedEv.pointerId === ev.pointerId,
  );
  evCache.splice(index, 1);
}
```

#### Ereignisprotokollierung

Diese Funktionen werden verwendet, um die Ereignisaktivität an das Anwendungsfenster zu senden (um das Debuggen und Erlernen des Ereignisflusses zu unterstützen).

```js
// Log events flag
let logEvents = false;

document.getElementById("log").addEventListener("click", enableLog);
document.getElementById("clear-log").addEventListener("click", clearLog);

// Logging/debugging functions
function enableLog(ev) {
  logEvents = !logEvents;
}

function log(prefix, ev) {
  if (!logEvents) return;
  const o = document.getElementsByTagName("output")[0];
  o.innerText += `${prefix}:
  pointerID   = ${ev.pointerId}
  pointerType = ${ev.pointerType}
  isPrimary   = ${ev.isPrimary}
`;
}

function clearLog(event) {
  const o = document.getElementsByTagName("output")[0];
  o.textContent = "";
}
```

## Siehe auch

- [Pointer Events jetzt im Firefox Nightly](https://hacks.mozilla.org/2015/08/pointer-events-now-in-firefox-nightly/); Mozilla Hacks; von Matt Brubeck und Jason Weathersby; 04. Aug. 2015
- [jQuery Pointer Events Polyfill](https://github.com/jquery-archive/PEP)
- [Gesten](https://m2.material.io/design/interaction/gestures.html); Material Design
