---
title: Multi-Touch-Interaktion
slug: Web/API/Pointer_events/Multi-touch_interaction
l10n:
  sourceCommit: ee846961725e36cf7bb407afe7a2df82d2860658
---

{{DefaultAPISidebar("Pointer Events")}}

Pointer-Ereignisse erweitern DOM-Eingabe-Ereignisse, um verschiedene Zeige-Eingabegeräte wie Stift/Stylus und Touchscreens sowie die Maus zu unterstützen. Der _Pointer_ ist ein hardwareunabhängiges Gerät, das einen bestimmten Satz von Bildschirmkoordinaten anvisieren kann. Ein einheitliches Ereignismodell für Pointer kann die Erstellung von Websites und Anwendungen vereinfachen und eine gute Benutzererfahrung bieten, unabhängig von der Hardware des Nutzers.

Pointer-Ereignisse weisen viele Ähnlichkeiten mit Mausereignissen auf, unterstützen jedoch mehrere gleichzeitige Pointer wie mehrere Finger auf einem Touchscreen. Diese zusätzliche Funktion kann genutzt werden, um reichhaltigere Benutzer-Interaktionsmodelle bereitzustellen, jedoch auf Kosten zusätzlicher Komplexität in der Handhabung von Multi-Touch-Interaktionen. Dieses Dokument demonstriert anhand von Beispielcode, wie man Pointer-Ereignisse mit verschiedenen Multi-Touch-Interaktionen verwendet.

Eine _Live_-Version dieser Anwendung ist auf [GitHub](https://mdn.github.io/dom-examples/pointerevents/Multi-touch_interaction.html) verfügbar. Der [Quellcode ist auf GitHub verfügbar](https://github.com/mdn/dom-examples/blob/main/pointerevents/Multi-touch_interaction.html); Pull-Anfragen und [Fehlermeldungen](https://github.com/mdn/dom-examples/issues) sind willkommen.

## Beispiel

Dieses Beispiel demonstriert die Verwendung verschiedener Ereignistypen von Pointer-Ereignissen ([`pointerdown`](/de/docs/Web/API/Element/pointerdown_event), [`pointermove`](/de/docs/Web/API/Element/pointermove_event), [`pointerup`](/de/docs/Web/API/Element/pointerup_event), [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event) usw.) für verschiedene Multi-Touch-Interaktionen.

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

Um die Multi-Touch-Interaktion zu unterstützen, muss der Ereignisstatus eines Pointers während verschiedener Ereignisphasen beibehalten werden. Diese Anwendung verwendet drei Arrays, um den Ereignisstatus zu zwischenspeichern, ein Cache pro Ziel-Element.

```js
// Log events flag
const logEvents = false;

// Event caches, one per touch target
const evCache1 = [];
const evCache2 = [];
const evCache3 = [];
```

### Ereignis-Handler registrieren

Ereignis-Handler werden für die folgenden Pointer-Ereignisse registriert: [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event), [`pointermove`](/de/docs/Web/API/Element/pointermove_event) und [`pointerup`](/de/docs/Web/API/Element/pointerup_event). Der Handler für [`pointerup`](/de/docs/Web/API/Element/pointerup_event) wird auch für die Ereignisse [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event), [`pointerout`](/de/docs/Web/API/Element/pointerout_event) und [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event) verwendet, da diese vier Ereignisse in dieser Anwendung die gleichen Semantiken haben.

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

Das [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)-Ereignis wird ausgelöst, wenn ein Pointer (Maus, Stift/Stylus oder Berührungspunkt auf einem Touchscreen) Kontakt mit der _Kontaktfläche_ macht. Der Status des Ereignisses muss zwischengespeichert werden, falls dieses Down-Ereignis Teil einer Multi-Touch-Interaktion ist.

In dieser Anwendung ändert sich die Hintergrundfarbe des Elements, wenn ein Pointer auf einem Element platziert wird, abhängig von der Anzahl der aktiven Berührungspunkte, die das Element hat. Weitere Einzelheiten zu den Farbänderungen finden Sie in der Funktion [`update_background`](#hintergrundfarbe_aktualisieren).

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

Der [`pointermove`](/de/docs/Web/API/Element/pointermove_event)-Handler wird aufgerufen, wenn sich der Pointer bewegt. Er kann mehrmals aufgerufen werden (z. B. wenn der Benutzer den Pointer bewegt), bevor ein anderer Ereignistyp ausgelöst wird.

In dieser Anwendung wird eine Pointer-Bewegung dadurch dargestellt, dass der Rand des Ziels auf `dashed` gesetzt wird, um eine klare visuelle Anzeige zu bieten, dass das Element dieses Ereignis erhalten hat.

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

Das [`pointerup`](/de/docs/Web/API/Element/pointerup_event)-Ereignis wird ausgelöst, wenn ein Pointer von der _Kontaktfläche_ abgehoben wird. Wenn dies geschieht, wird das Ereignis aus dem zugehörigen Ereignis-Cache entfernt.

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

Die Anwendung verwendet {{HTMLElement("div")}}-Elemente für die Berührungsbereiche und bietet Schaltflächen zum Aktivieren des Logging und zum Löschen des Logs.

Um zu verhindern, dass das Standardverhalten des Browsers bei Berührungen die Zeigersteuerung dieser Anwendung überschreibt, wird die {{cssxref("touch-action")}}-Eigenschaft auf das {{HTMLElement("body")}}-Element angewendet.

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

Diese Funktionen unterstützen die Anwendung, sind jedoch nicht direkt am Ereignisfluss beteiligt.

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

Die Hintergrundfarbe der Berührungsbereiche ändert sich wie folgt: keine aktiven Berührungen sind `weiß`; eine aktive Berührung ist `gelb`; zwei gleichzeitige Berührungen sind `rosa` und drei oder mehr gleichzeitige Berührungen sind `hellblau`.

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

Diese Funktionen werden verwendet, um Ereignisaktivitäten an das Anwendungsfenster zu senden (um das Debugging und das Lernen über den Ereignisfluss zu unterstützen).

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
