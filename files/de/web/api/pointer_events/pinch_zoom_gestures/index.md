---
title: Pinch-Zoom-Gesten
slug: Web/API/Pointer_events/Pinch_zoom_gestures
l10n:
  sourceCommit: 5f6be198317d812626e71513bbde0385ef7e76be
---

{{DefaultAPISidebar("Pointer Events")}}

Das Hinzufügen von _Gesten_ zu einer Anwendung kann das Benutzererlebnis erheblich verbessern. Es gibt viele Arten von Gesten, von der einfachen Single-Touch-Wischgeste bis zur komplexeren Multi-Touch-Drehgeste, bei der sich die Berührungspunkte (auch _Zeiger_ genannt) in verschiedene Richtungen bewegen.

Dieses Beispiel zeigt, wie die _Pinch/Zoom_-Geste erkannt wird, bei der [Zeigervorgänge](/de/docs/Web/API/Pointer_events) verwendet werden, um festzustellen, ob der Benutzer zwei Zeiger näher zueinander oder weiter voneinander weg bewegt.

Eine _Live_-Version dieser Anwendung ist auf [GitHub](https://mdn.github.io/dom-examples/pointerevents/Pinch_zoom_gestures.html) verfügbar. Der [Quellcode ist auf GitHub verfügbar](https://github.com/mdn/dom-examples/blob/main/pointerevents/Pinch_zoom_gestures.html); Pull-Requests und [Fehlermeldungen](https://github.com/mdn/dom-examples/issues) sind willkommen.

## Beispiel

In diesem Beispiel verwenden Sie die [Zeigervorgänge](/de/docs/Web/API/Pointer_events), um gleichzeitig zwei Zeigegeräte beliebigen Typs zu erkennen, einschließlich Finger, Mäuse und Stifte. Die Pinch-In (Zoom-Out)-Geste, bei der die beiden Zeiger aufeinander zu bewegt werden, ändert die Hintergrundfarbe des Zielelements in `lightblue`. Die Pinch-Out (Zoom-In)-Geste, bei der die beiden Zeiger voneinander weg bewegt werden, ändert die Hintergrundfarbe des Zielelements in `pink`.

### Berührungsziel definieren

Die Anwendung verwendet {{HTMLElement("div")}}, um die Zielbereiche der Zeiger zu definieren.

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

### Globaler Status

Die Unterstützung einer Zwei-Zeiger-Geste erfordert die Aufrechterhaltung des Ereignisstatus eines Zeigers während verschiedener Ereignisphasen. Diese Anwendung verwendet zwei globale Variablen, um den Ereignisstatus zwischenspeichern.

```js
// Global vars to cache event state
const evCache = [];
let prevDiff = -1;
```

### Ereignis-Handler registrieren

Ereignis-Handler werden für die folgenden Zeigervorgänge registriert: [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event), [`pointermove`](/de/docs/Web/API/Element/pointermove_event) und [`pointerup`](/de/docs/Web/API/Element/pointerup_event). Der Handler für [`pointerup`](/de/docs/Web/API/Element/pointerup_event) wird für die Ereignisse [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event), [`pointerout`](/de/docs/Web/API/Element/pointerout_event) und [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event) verwendet, da diese vier Ereignisse in dieser Anwendung die gleichen Semantiken haben.

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

### Pointer Down

Das [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)-Ereignis wird ausgelöst, wenn ein Zeiger (Maus, Stift/Stylus oder Berührungspunkt auf einem Touchscreen) Kontakt mit der _Kontaktfläche_ aufnimmt. In dieser Anwendung muss der Status des Ereignisses zwischengespeichert werden, falls dieses Down-Ereignis Teil einer Zwei-Zeiger-Pinch/Zoom-Geste ist.

```js
function pointerdownHandler(ev) {
  // The pointerdown event signals the start of a touch interaction.
  // This event is cached to support 2-finger gestures
  evCache.push(ev);
  log("pointerDown", ev);
}
```

### Pointer Move

Der [`pointermove`](/de/docs/Web/API/Element/pointermove_event)-Ereignis-Handler erkennt, ob ein Benutzer eine Zwei-Zeiger-Pinch/Zoom-Geste initiiert. Wenn zwei Zeiger unten sind und der Abstand zwischen den Zeigern zunimmt (was auf eine Pinch-Out oder Zoom-In-Geste hinweist), wird die Hintergrundfarbe des Elements in `pink` geändert, und wenn der Abstand zwischen den Zeigern abnimmt (eine Pinch-In oder Zoom-Out-Geste), wird die Hintergrundfarbe in `lightblue` geändert. In einer ausgefeilteren Anwendung könnte die Bestimmung von Pinch-In oder Pinch-Out verwendet werden, um anwendungsspezifische Semantiken anzuwenden.

Wenn dieses Ereignis verarbeitet wird, wird der Rand des Ziels auf `dashed` gesetzt, um eine klare visuelle Anzeige zu bieten, dass das Element ein Bewegungsevent empfangen hat.

```js
function pointermoveHandler(ev) {
  // This function implements a 2-pointer pinch/zoom gesture.
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
    const curDiff = Math.hypot(
      evCache[0].clientX - evCache[1].clientX,
      evCache[0].clientY - evCache[1].clientY,
    );

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

### Pointer Up

Das [`pointerup`](/de/docs/Web/API/Element/pointerup_event)-Ereignis wird ausgelöst, wenn ein Zeiger von der _Kontaktfläche_ gehoben wird. Wenn dies geschieht, wird das Ereignis aus dem Ereignis-Cache entfernt und die Hintergrundfarbe und der Rand des Zielelements werden auf ihre ursprünglichen Werte zurückgesetzt.

In dieser Anwendung wird dieser Handler auch für die Ereignisse [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event), [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event) und [`pointerout`](/de/docs/Web/API/Element/pointerout_event) verwendet.

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

### Benutzeroberfläche der Anwendung

Die Anwendung verwendet ein {{HTMLElement("div")}}-Element für den Berührungsbereich und bietet Schaltflächen, um das Logging zu aktivieren und das Log zu löschen.

Um zu verhindern, dass das standardmäßige Berührungsverhalten des Browsers die Zeigerverarbeitung dieser Anwendung überschreibt, wird die {{cssxref("touch-action")}} Eigenschaft auf das {{HTMLElement("body")}}-Element angewendet.

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

Diese Funktionen unterstützen die Anwendung, sind jedoch nicht direkt am Ereignisfluss beteiligt.

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

Diese Funktionen werden verwendet, um Ereignisaktivitäten an das Anwendungsfenster zu senden (zur Unterstützung der Fehlersuche und um mehr über den Ereignisfluss zu erfahren).

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

- [Pointer Events jetzt in Firefox Nightly](https://hacks.mozilla.org/2015/08/pointer-events-now-in-firefox-nightly/); Mozilla Hacks; von Matt Brubeck und Jason Weathersby; 04. August 2015
- [jQuery Pointer Events Polyfill](https://github.com/jquery-archive/PEP)
- [Gesten](https://m2.material.io/design/interaction/gestures.html); Material Design
