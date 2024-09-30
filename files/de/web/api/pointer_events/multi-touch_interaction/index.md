---
title: Multi-Touch-Interaktion
slug: Web/API/Pointer_events/Multi-touch_interaction
l10n:
  sourceCommit: ee846961725e36cf7bb407afe7a2df82d2860658
---

{{DefaultAPISidebar("Pointer Events")}}

Pointer Events erweitern DOM-Ereignisse, um verschiedene Zeigeeingabegeräte wie Stift/Stylus und Touchscreens sowie Maus zu unterstützen. Der _Pointer_ ist ein hardware-unabhängiges Gerät, das auf eine bestimmte Reihe von Bildschirmkoordinaten zielen kann. Ein einheitliches Ereignismodell für Zeiger kann die Erstellung von Websites und Anwendungen vereinfachen und ein gutes Benutzererlebnis bieten, unabhängig von der Hardware des Benutzers.

Pointer Events weisen viele Gemeinsamkeiten mit Mausereignissen auf, unterstützen jedoch mehrere gleichzeitige Zeiger, wie beispielsweise mehrere Finger auf einem Touchscreen. Diese zusätzliche Funktion kann verwendet werden, um reichhaltigere Benutzerinteraktionsmodelle bereitzustellen, jedoch auf Kosten zusätzlicher Komplexität bei der Handhabung von Multi-Touch-Interaktionen. Dieses Dokument demonstriert anhand von Beispielcode die Verwendung von Pointer Events für verschiedene Multi-Touch-Interaktionen.

Eine _Live_-Version dieser Anwendung ist auf [GitHub](https://mdn.github.io/dom-examples/pointerevents/Multi-touch_interaction.html) verfügbar. Der [Quellcode ist auf GitHub verfügbar](https://github.com/mdn/dom-examples/blob/main/pointerevents/Multi-touch_interaction.html); wir freuen uns über Pull-Requests und [Fehlermeldungen](https://github.com/mdn/dom-examples/issues).

## Beispiel

Dieses Beispiel demonstriert die Verwendung verschiedener Event-Typen von Pointer Events ([`pointerdown`](/de/docs/Web/API/Element/pointerdown_event), [`pointermove`](/de/docs/Web/API/Element/pointermove_event), [`pointerup`](/de/docs/Web/API/Element/pointerup_event), [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event) usw.) für unterschiedliche Multi-Touch-Interaktionen.

### Berührungsziele definieren

Die Anwendung verwendet {{HTMLElement("div")}}, um drei verschiedene Berührungszielbereiche zu definieren.

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

Um die Multi-Touch-Interaktion zu unterstützen, ist es erforderlich, den Ereigniszustand eines Pointers während verschiedener Ereignisphasen beizubehalten. Diese Anwendung verwendet drei Arrays, um den Ereigniszustand zwischenzuspeichern, ein Cache pro Ziel-Element.

```js
// Log events flag
const logEvents = false;

// Event caches, one per touch target
const evCache1 = [];
const evCache2 = [];
const evCache3 = [];
```

### Ereignishandler registrieren

Ereignishandler werden für die folgenden Pointer Events registriert: [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event), [`pointermove`](/de/docs/Web/API/Element/pointermove_event) und [`pointerup`](/de/docs/Web/API/Element/pointerup_event). Der Handler für [`pointerup`](/de/docs/Web/API/Element/pointerup_event) wird auch für die Ereignisse [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event), [`pointerout`](/de/docs/Web/API/Element/pointerout_event) und [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event) verwendet, da diese vier Ereignisse in dieser Anwendung die gleiche Semantik haben.

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

Das [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event) Ereignis wird ausgelöst, wenn ein Zeiger (Maus, Stift/Stylus oder Berührungspunkt auf einem Touchscreen) Kontakt mit der _Kontaktfläche_ aufnimmt. Der Zustand des Ereignisses muss zwischengespeichert werden, falls dieses `down`-Ereignis Teil einer Multi-Touch-Interaktion ist.

In dieser Anwendung ändert sich die Hintergrundfarbe des Elements, wenn ein Pointer auf ein Element gesetzt wird, je nach Anzahl der aktiven Berührungspunkte, die das Element hat. Weitere Details zu den Farbänderungen finden Sie in der Funktion [`update_background`](#hintergrundfarbe_aktualisieren).

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

Der [`pointermove`](/de/docs/Web/API/Element/pointermove_event) Handler wird aufgerufen, wenn der Zeiger bewegt wird. Er kann mehrfach aufgerufen werden (zum Beispiel, wenn der Benutzer den Zeiger bewegt), bevor ein anderer Ereignistyp ausgelöst wird.

In dieser Anwendung wird eine Zeigerbewegung durch das Setzen des Rahmens des Ziels auf `dashed` dargestellt, um eine klare visuelle Anzeige zu bieten, dass das Element dieses Ereignis empfangen hat.

```js
function pointermoveHandler(ev) {
  // Note: if the user makes more than one "simultaneous" touch, most browsers
  // fire at least one pointermove event and some will fire several pointermoves.
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

Das [`pointerup`](/de/docs/Web/API/Element/pointerup_event) Ereignis wird ausgelöst, wenn ein Pointer von der _Kontaktfläche_ angehoben wird. Wenn dies geschieht, wird das Ereignis aus dem zugehörigen Ereignis-Cache entfernt.

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

Um zu verhindern, dass das Standard-Touch-Verhalten des Browsers die Pointer-Verarbeitung dieser Anwendung überschreibt, wird die {{cssxref("touch-action")}}-Eigenschaft auf das {{HTMLElement("body")}}-Element angewendet.

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

Diese Funktionen unterstützen die Anwendung, sind jedoch nicht direkt am Ereignisverlauf beteiligt.

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

Die Hintergrundfarbe der Berührungsbereiche ändert sich wie folgt: keine aktiven Berührungen ist `white`; eine aktive Berührung ist `yellow`; zwei gleichzeitige Berührungen ist `pink` und drei oder mehr gleichzeitige Berührungen ist `lightblue`.

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

#### Ereignisprotokollierung

Diese Funktionen werden verwendet, um Ereignisaktivitäten an das Anwendungsfenster zu senden (um das Debuggen zu unterstützen und den Ereignisverlauf kennenzulernen).

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
