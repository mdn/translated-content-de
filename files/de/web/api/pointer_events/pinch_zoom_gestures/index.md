---
title: Pinch-Zoom-Gesten
slug: Web/API/Pointer_events/Pinch_zoom_gestures
l10n:
  sourceCommit: 47b1321d6cac5c7093583162c4cf73e015cc4905
---

{{DefaultAPISidebar("Pointer Events")}}

Das Hinzufügen von _Gesten_ zu einer Anwendung kann die Benutzererfahrung erheblich verbessern. Es gibt viele Arten von Gesten: von der einfachen _Wischgeste_ mit einem Berührungspunkt bis zur komplexeren _Drehgeste_ mit mehreren Berührungspunkten, bei der sich die Berührungspunkte (auch _Pointer_ genannt) in unterschiedliche Richtungen bewegen.

Dieses Beispiel zeigt, wie Sie eine _Pinch-Zoom-Geste_ erkennen. Dabei wird mithilfe von [Pointer Events](/de/docs/Web/API/Pointer_events) festgestellt, ob die nutzende Person zwei Pointer aufeinander zu oder voneinander weg bewegt.

Eine _Live-Version_ dieser Anwendung ist auf [GitHub](https://mdn.github.io/dom-examples/pointerevents/Pinch_zoom_gestures.html) verfügbar. Der [Quellcode ist auf GitHub verfügbar](https://github.com/mdn/dom-examples/blob/main/pointerevents/Pinch_zoom_gestures.html); Pull Requests und [Fehlermeldungen](https://github.com/mdn/dom-examples/issues) sind willkommen.

## Beispiel

In diesem Beispiel verwenden Sie [Pointer Events](/de/docs/Web/API/Pointer_events), um zwei Zeigegeräte beliebiger Art gleichzeitig zu erkennen, darunter Finger, Mäuse und Stifte. Bei der Pinch-in-Geste (Verkleinern), bei der sich die beiden Pointer aufeinander zubewegen, ändert sich die Hintergrundfarbe des Zielelements zu `lightblue`. Bei der Pinch-out-Geste (Vergrößern), bei der sich die beiden Pointer voneinander entfernen, ändert sich die Hintergrundfarbe des Zielelements zu `pink`.

### Berührungsziel definieren

Die Anwendung verwendet {{HTMLElement("div")}}, um die Zielbereiche für die Pointer zu definieren.

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

Um eine Geste mit zwei Pointern zu unterstützen, muss der Ereigniszustand eines Pointers über verschiedene Ereignisphasen hinweg erhalten bleiben. Diese Anwendung verwendet zwei globale Variablen, um den Ereigniszustand zwischenzuspeichern.

```js
// Global vars to cache event state
const evCache = [];
let prevDiff = -1;
```

### Event-Handler registrieren

Event-Handler werden für die folgenden Pointer Events registriert: [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event), [`pointermove`](/de/docs/Web/API/Element/pointermove_event) und [`pointerup`](/de/docs/Web/API/Element/pointerup_event). Der Handler für [`pointerup`](/de/docs/Web/API/Element/pointerup_event) wird auch für die Ereignisse [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event), [`pointerout`](/de/docs/Web/API/Element/pointerout_event) und [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event) verwendet, da diese vier Ereignisse in dieser Anwendung dieselbe Bedeutung haben.

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

### Pointer-Kontakt beginnt

Das Ereignis [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event) wird ausgelöst, wenn ein Pointer (Maus, Stift oder Berührungspunkt auf einem Touchscreen) mit der _Kontaktfläche_ in Berührung kommt. In dieser Anwendung muss der Ereigniszustand zwischengespeichert werden, falls dieses Ereignis Teil einer Pinch-Zoom-Geste mit zwei Pointern ist.

```js
function pointerdownHandler(ev) {
  // The pointerdown event signals the start of a touch interaction.
  // This event is cached to support 2-finger gestures
  evCache.push(ev);
  log("pointerDown", ev);
}
```

### Pointer-Bewegung

Der Event-Handler für [`pointermove`](/de/docs/Web/API/Element/pointermove_event) erkennt, ob eine Pinch-Zoom-Geste mit zwei Pointern ausgeführt wird. Wenn zwei Pointer die Kontaktfläche berühren und der Abstand zwischen ihnen zunimmt (Pinch-out oder Vergrößern), ändert sich die Hintergrundfarbe des Elements zu `pink`. Nimmt der Abstand ab (Pinch-in oder Verkleinern), ändert sich die Hintergrundfarbe zu `lightblue`. In einer komplexeren Anwendung könnte die Unterscheidung zwischen Pinch-in und Pinch-out für anwendungsspezifische Funktionen genutzt werden.

Bei der Verarbeitung dieses Ereignisses wird der Rahmen des Zielelements auf `dashed` gesetzt. So wird deutlich sichtbar, dass das Element ein Bewegungsereignis empfangen hat.

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

### Pointer-Kontakt endet

Das Ereignis [`pointerup`](/de/docs/Web/API/Element/pointerup_event) wird ausgelöst, wenn ein Pointer von der _Kontaktfläche_ abgehoben wird. In diesem Fall wird das Ereignis aus dem Ereignis-Cache entfernt, und die Hintergrundfarbe sowie der Rahmen des Zielelements werden auf ihre ursprünglichen Werte zurückgesetzt.

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

Die Anwendung verwendet ein {{HTMLElement("div")}}-Element als Berührungsfläche und stellt Schaltflächen bereit, um die Protokollierung zu aktivieren und das Protokoll zu löschen.

Damit das standardmäßige Berührungsverhalten des Browsers die Pointer-Verarbeitung dieser Anwendung nicht übersteuert, wird die Eigenschaft {{cssxref("touch-action")}} auf das {{HTMLElement("body")}}-Element angewendet.

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

### Weitere Funktionen

Diese Funktionen unterstützen die Anwendung, sind aber nicht direkt am Ereignisablauf beteiligt.

#### Cache-Verwaltung

Diese Funktion hilft bei der Verwaltung des globalen Ereignis-Caches `evCache`.

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

Diese Funktionen geben Informationen über Ereignisaktivitäten im Fenster der Anwendung aus, um das Debugging und das Verständnis des Ereignisablaufs zu unterstützen.

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

- [Pointer Events jetzt in Firefox Nightly](https://hacks.mozilla.org/2015/08/pointer-events-now-in-firefox-nightly/); Mozilla Hacks; von Matt Brubeck und Jason Weathersby; 04.08.2015
- [Gesten](https://m2.material.io/design/interaction/gestures.html); Material Design
