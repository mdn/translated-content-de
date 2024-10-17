---
title: Multi-Touch-Interaktion
slug: Web/API/Pointer_events/Multi-touch_interaction
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{DefaultAPISidebar("Pointer Events")}}

Pointer Events erweitern DOM-Eingabeereignisse, um verschiedene Eingabegeräte wie Stifte/Stylus und Touchscreens sowie Maus zu unterstützen. Der _Pointer_ ist ein hardwareunabhängiges Gerät, das auf einen bestimmten Satz von Bildschirmkoordinaten zielen kann. Ein einheitliches Ereignismodell für Pointer kann die Erstellung von Websites und Anwendungen vereinfachen und unabhängig von der Hardware des Benutzers eine gute Benutzererfahrung bieten.

Pointer Events weisen viele Ähnlichkeiten mit Mausereignissen auf, unterstützen jedoch mehrere gleichzeitige Pointer wie mehrere Finger auf einem Touchscreen. Dieses zusätzliche Merkmal kann verwendet werden, um reichhaltigere Benutzerinteraktionsmodelle bereitzustellen, geht jedoch mit zusätzlicher Komplexität bei der Handhabung von Multi-Touch-Interaktionen einher. Dieses Dokument demonstriert anhand von Beispielcode die Verwendung von Pointer Events mit unterschiedlichen Multi-Touch-Interaktionen.

Eine _Live_-Version dieser Anwendung ist auf [GitHub](https://mdn.github.io/dom-examples/pointerevents/Multi-touch_interaction.html) verfügbar. Der [Quellcode ist auf GitHub verfügbar](https://github.com/mdn/dom-examples/blob/main/pointerevents/Multi-touch_interaction.html); Pull-Requests und [Fehlermeldungen](https://github.com/mdn/dom-examples/issues) sind willkommen.

## Beispiel

Dieses Beispiel demonstriert die Verwendung verschiedener Ereignistypen von Pointer Events ([`pointerdown`](/de/docs/Web/API/Element/pointerdown_event), [`pointermove`](/de/docs/Web/API/Element/pointermove_event), [`pointerup`](/de/docs/Web/API/Element/pointerup_event), [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event), usw.) für verschiedene Multi-Touch-Interaktionen.

### Touch-Ziele definieren

Die Anwendung nutzt {{HTMLElement("div")}}, um drei verschiedene Touch-Zielbereiche zu definieren.

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
</style>
```

### Globaler Zustand

Um Multi-Touch-Interaktion zu unterstützen, muss der Ereigniszustand eines Pointers während verschiedener Ereignisphasen beibehalten werden. Diese Anwendung verwendet drei Arrays, um den Ereigniszustand zwischenzuspeichern, ein Cache pro Zielelement.

```js
// Log events flag
const logEvents = false;

// Event caches, one per touch target
const evCache1 = [];
const evCache2 = [];
const evCache3 = [];
```

### Ereignis-Handler registrieren

Ereignis-Handler werden für die folgenden Pointer Events registriert: [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event), [`pointermove`](/de/docs/Web/API/Element/pointermove_event) und [`pointerup`](/de/docs/Web/API/Element/pointerup_event). Der Handler für [`pointerup`](/de/docs/Web/API/Element/pointerup_event) wird auch für die Ereignisse [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event), [`pointerout`](/de/docs/Web/API/Element/pointerout_event) und [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event) verwendet, da diese vier Ereignisse in dieser Anwendung dieselbe Semantik haben.

```js
function setHandlers(name) {
  // Install event handlers for the given element
  const el = document.getElementById(name);
  el.onpointerdown = pointerdownHandler;
  el.onpointermove = pointermoveHandler;

  // Use same handler for pointer{up,cancel,out,leave} events since
  // the semantics for these events - in this app - are the same.
  el.onpointerup = pointerupHandler;
  el.onpointercancel = pointerupHandler;
  el.onpointerout = pointerupHandler;
  el.onpointerleave = pointerupHandler;
}

function init() {
  setHandlers("target1");
  setHandlers("target2");
  setHandlers("target3");
}
```

### Pointer down

Das [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event) Ereignis wird ausgelöst, wenn ein Pointer (Maus, Stift/Stylus oder Berührungspunkt auf einem Touchscreen) Kontakt mit der _Kontaktfläche_ herstellt. Der Zustand des Ereignisses muss zwischengespeichert werden, falls dieses Down-Ereignis Teil einer Multi-Touch-Interaktion ist.

In dieser Anwendung ändert sich die Hintergrundfarbe des Elements, wenn ein Pointer auf einem Element platziert wird, je nachdem, wie viele aktive Berührungspunkte das Element hat. Siehe die Funktion [`update_background`](#hintergrundfarbe_aktualisieren) für weitere Details zu den Farbänderungen.

```js
function pointerdownHandler(ev) {
  // The pointerdown event signals the start of a touch interaction.
  // Save this event for later processing (this could be part of a
  // multi-touch interaction) and update the background color
  pushEvent(ev);
  if (logEvents) {
    log(`pointerDown: name = ${ev.target.id}`, ev);
  }
  updateBackground(ev);
}
```

### Pointer move

Der [`pointermove`](/de/docs/Web/API/Element/pointermove_event) Handler wird aufgerufen, wenn der Pointer bewegt wird. Er kann mehrmals aufgerufen werden (zum Beispiel, wenn der Benutzer den Pointer bewegt), bevor ein anderes Ereignis ausgelöst wird.

In dieser Anwendung wird eine Pointer-Bewegung durch die Darstellung des Rahmens des Ziels als `gestrichelt` dargestellt, um einen klaren visuellen Hinweis darauf zu geben, dass das Element dieses Ereignis empfangen hat.

```js
function pointermoveHandler(ev) {
  // Note: if the user makes more than one "simultaneous" touch, most browsers
  // fire at least one pointermove event and some will fire several pointermove events.
  //
  // This function sets the target element's border to "dashed" to visually
  // indicate the target received a move event.
  if (logEvents) {
    log("pointerMove", ev);
  }
  updateBackground(ev);
  ev.target.style.border = "dashed";
}
```

### Pointer up

Das [`pointerup`](/de/docs/Web/API/Element/pointerup_event) Ereignis wird ausgelöst, wenn ein Pointer von der _Kontaktfläche_ entfernt wird. Wenn dies geschieht, wird das Ereignis aus dem zugehörigen Ereignis-Cache entfernt.

In dieser Anwendung wird dieser Handler auch für die Ereignisse [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event), [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event) und [`pointerout`](/de/docs/Web/API/Element/pointerout_event) verwendet.

```js
function pointerupHandler(ev) {
  if (logEvents) {
    log(ev.type, ev);
  }
  // Remove this touch point from the cache and reset the target's
  // background and border
  removeEvent(ev);
  updateBackground(ev);
  ev.target.style.border = "1px solid black";
}
```

### Anwendungs-UI

Die Anwendung verwendet {{HTMLElement("div")}}-Elemente für die Berührungsbereiche und bietet Schaltflächen zum Aktivieren des Loggings und zum Löschen des Logs.

Um zu verhindern, dass das Standard-Touch-Verhalten des Browsers die Zeigerverarbeitung dieser Anwendung überschreibt, wird die {{cssxref("touch-action")}} Eigenschaft auf das {{HTMLElement("body")}} Element angewendet.

```html
<body onload="init();" style="touch-action:none">
  <div id="target1">Tap, Hold or Swipe me 1</div>
  <div id="target2">Tap, Hold or Swipe me 2</div>
  <div id="target3">Tap, Hold or Swipe me 3</div>

  <!-- UI for logging/debugging -->
  <button id="log" onclick="enableLog(event);">Start/Stop event logging</button>
  <button id="clearlog" onclick="clearLog(event);">Clear the log</button>
  <p></p>
  <output></output>
</body>
```

### Verschiedene Funktionen

Diese Funktionen unterstützen die Anwendung, sind jedoch nicht direkt in den Ereignisfluss eingebunden.

#### Cache-Verwaltung

Diese Funktionen verwalten die globalen Ereignis-Caches `evCache1`, `evCache2` und `evCache3`.

```js
function getCache(ev) {
  // Return the cache for this event's target element
  switch (ev.target.id) {
    case "target1":
      return evCache1;
    case "target2":
      return evCache2;
    case "target3":
      return evCache3;
    default:
      log("Error with cache handling", ev);
  }
}

function pushEvent(ev) {
  // Save this event in the target's cache
  const evCache = getCache(ev);
  evCache.push(ev);
}

function removeEvent(ev) {
  // Remove this event from the target's cache
  const evCache = getCache(ev);
  const index = evCache.findIndex(
    (cachedEv) => cachedEv.pointerId === ev.pointerId,
  );
  evCache.splice(index, 1);
}
```

#### Hintergrundfarbe aktualisieren

Die Hintergrundfarbe der Berührungsbereiche ändert sich wie folgt: keine aktiven Berührungen ist `weiß`; eine aktive Berührung ist `gelb`; zwei gleichzeitige Berührungen sind `rosa` und drei oder mehr gleichzeitige Berührungen sind `hellblau`.

```js
function updateBackground(ev) {
  // Change background color based on the number of simultaneous touches/pointers
  // currently down:
  //   white - target element has no touch points i.e. no pointers down
  //   yellow - one pointer down
  //   pink - two pointers down
  //   lightblue - three or more pointers down
  const evCache = getCache(ev);
  switch (evCache.length) {
    case 0:
      // Target element has no touch points
      ev.target.style.background = "white";
      break;
    case 1:
      // Single touch point
      ev.target.style.background = "yellow";
      break;
    case 2:
      // Two simultaneous touch points
      ev.target.style.background = "pink";
      break;
    default:
      // Three or more simultaneous touches
      ev.target.style.background = "lightblue";
  }
}
```

#### Ereignis-Logging

Diese Funktionen werden verwendet, um Ereignisaktivitäten an das Anwendungsfenster zu senden (zur Unterstützung von Debugging und zum Lernen über den Ereignisfluss).

```js
// Log events flag
let logEvents = false;

function enableLog(ev) {
  logEvents = !logEvents;
}

function log(name, ev) {
  const o = document.getElementsByTagName("output")[0];
  o.innerText += `${name}:
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
