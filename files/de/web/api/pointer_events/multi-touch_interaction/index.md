---
title: Multi-Touch-Interaktion
slug: Web/API/Pointer_events/Multi-touch_interaction
l10n:
  sourceCommit: ee846961725e36cf7bb407afe7a2df82d2860658
---

{{DefaultAPISidebar("Pointer Events")}}

Pointer-Events erweitern DOM-Eingabeereignisse, um verschiedene Zeige-Eingabegeräte wie Stift/Stylus und Touchscreens sowie Maus zu unterstützen. Der _Pointer_ ist ein hardwareunabhängiges Gerät, das auf einen bestimmten Bildschirmkoordinatensatz abzielt. Ein einheitliches Ereignismodell für Pointer kann die Erstellung von Websites und Anwendungen vereinfachen und ein gutes Benutzererlebnis unabhängig vom verwendeten Hardware bieten.

Pointer-Events haben viele Ähnlichkeiten mit Mausereignissen, unterstützen jedoch mehrere gleichzeitige Pointer, wie mehrere Finger auf einem Touchscreen. Diese zusätzliche Funktionalität kann verwendet werden, um reichhaltigere Benutzerinteraktionsmodelle bereitzustellen, jedoch auf Kosten zusätzlicher Komplexität bei der Handhabung der Multi-Touch-Interaktion. Dieses Dokument demonstriert anhand von Beispielcode die Verwendung von Pointer-Events mit verschiedenen Multi-Touch-Interaktionen.

Eine _Live_-Version dieser Anwendung ist auf [GitHub](https://mdn.github.io/dom-examples/pointerevents/Multi-touch_interaction.html) verfügbar. Der [Quellcode ist auf GitHub verfügbar](https://github.com/mdn/dom-examples/blob/main/pointerevents/Multi-touch_interaction.html); Pull Requests und [Fehlermeldungen](https://github.com/mdn/dom-examples/issues) sind willkommen.

## Beispiel

Dieses Beispiel demonstriert die Verwendung verschiedener Ereignistypen der Pointer-Events ({{domxref("Element/pointerdown_event", "pointerdown")}}, {{domxref("Element/pointermove_event", "pointermove")}}, {{domxref("Element/pointerup_event", "pointerup")}} {{domxref("Element/pointercancel_event", "pointercancel")}}, etc.) für unterschiedliche Multi-Touch-Interaktionen.

### Touch-Ziele definieren

Die Anwendung verwendet {{HTMLElement("div")}}, um drei verschiedene Touch-Zielbereiche zu definieren.

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

Um die Multi-Touch-Interaktion zu unterstützen, muss der Ereigniszustand eines Pointers während verschiedener Ereignisphasen erhalten bleiben. Diese Anwendung verwendet drei Arrays, um den Ereigniszustand zu zwischenspeichern, einen Cache pro Zielelement.

```js
// Ereignisprotokollierung Flag
const logEvents = false;

// Ereignis-Caches, einer pro Touch-Ziel
const evCache1 = [];
const evCache2 = [];
const evCache3 = [];
```

### Ereignis-Handler registrieren

Ereignis-Handler werden für die folgenden Pointer-Events registriert: {{domxref("Element/pointerdown_event", "pointerdown")}}, {{domxref("Element/pointermove_event", "pointermove")}} und {{domxref("Element/pointerup_event", "pointerup")}}. Der Handler für {{domxref("Element/pointerup_event", "pointerup")}} wird für die {{domxref("Element/pointercancel_event", "pointercancel")}}, {{domxref("Element/pointerout_event", "pointerout")}} und {{domxref("Element/pointerleave_event", "pointerleave")}} Ereignisse verwendet, da diese vier Ereignisse in dieser Anwendung die gleiche Semantik haben.

```js
function setHandlers(name) {
  // Ereignis-Handler für das gegebene Element installieren
  const el = document.getElementById(name);
  el.onpointerdown = pointerdownHandler;
  el.onpointermove = pointermoveHandler;

  // Verwenden Sie denselben Handler für pointer{up,cancel,out,leave} Ereignisse, da
  // die Semantik dieser Ereignisse - in dieser App - die gleiche ist.
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

### Pointer herunter

Das {{domxref("Element/pointerdown_event", "pointerdown")}} Ereignis wird ausgelöst, wenn ein Pointer (Maus, Stift/Stylus oder Berührungspunkt auf einem Touchscreen) Kontakt mit der _Kontaktfläche_ aufnimmt. Der Zustand des Ereignisses muss zwischengespeichert werden, falls dieses Herunter-Ereignis Teil einer Multi-Touch-Interaktion ist.

In dieser Anwendung, wenn ein Pointer auf ein Element gesetzt wird, ändert sich die Hintergrundfarbe des Elements, abhängig von der Anzahl der aktiven Touchpunkte, die das Element hat. Weitere Details zu den Farbänderungen finden Sie in der [`update_background`](#hintergrundfarbe_aktualisieren) Funktion.

```js
function pointerdownHandler(ev) {
  // Das pointerdown Ereignis signalisiert den Beginn einer Touch-Interaktion.
  // Speichern Sie dieses Ereignis zur späteren Verarbeitung (dies könnte Teil einer
  // Multi-Touch-Interaktion sein) und aktualisieren Sie die Hintergrundfarbe
  pushEvent(ev);
  if (logEvents) {
    log(`pointerDown: name = ${ev.target.id}`, ev);
  }
  updateBackground(ev);
}
```

### Pointer bewegen

Der {{domxref("Element/pointermove_event", "pointermove")}} Handler wird aufgerufen, wenn der Pointer bewegt wird. Er kann mehrmals aufgerufen werden (zum Beispiel, wenn der Benutzer den Pointer bewegt), bevor ein anderer Ereignistyp ausgelöst wird.

In dieser Anwendung wird eine Pointer-Bewegung durch die Umrandung des Ziels als `dashed` dargestellt, um einen klaren visuellen Hinweis zu geben, dass das Element dieses Ereignis erhalten hat.

```js
function pointermoveHandler(ev) {
  // Hinweis: Wenn der Benutzer mehr als eine "gleichzeitige" Berührung ausführt, feuern die
  // meisten Browser mindestens ein pointermove Ereignis ab und einige werden mehrere Pointermoves abfeuern.
  //
  // Diese Funktion setzt die Rahmen des Ziel-Elements auf "dashed", um visuell anzuzeigen,
  // dass das Ziel ein move Ereignis empfangen hat.
  if (logEvents) {
    log("pointerMove", ev);
  }
  updateBackground(ev);
  ev.target.style.border = "dashed";
}
```

### Pointer hoch

Das {{domxref("Element/pointerup_event", "pointerup")}} Ereignis wird ausgelöst, wenn ein Pointer von der _Kontaktfläche_ entfernt wird. Beim Auftreten wird das Ereignis aus dem zugehörigen Ereigniscache entfernt.

In dieser Anwendung wird dieser Handler auch für {{domxref("Element/pointercancel_event", "pointercancel")}}, {{domxref("Element/pointerleave_event", "pointerleave")}} und {{domxref("Element/pointerout_event", "pointerout")}} Ereignisse verwendet.

```js
function pointerupHandler(ev) {
  if (logEvents) {
    log(ev.type, ev);
  }
  // Entfernen Sie diesen Berührungspunkt aus dem Cache und setzen Sie Hintergrund und Rahmen
  // des Ziel-Elements zurück
  removeEvent(ev);
  updateBackground(ev);
  ev.target.style.border = "1px solid black";
}
```

### Anwendungs-UI

Die Anwendung benutzt {{HTMLElement("div")}} Elemente für die Berührungsflächen und bietet Schaltflächen zum Aktivieren der Protokollierung und zum Löschen des Protokolls.

Um zu verhindern, dass das Standardberührungsverhalten des Browsers die Zeigerbearbeitung dieser Anwendung überschreibt, wird die {{cssxref("touch-action")}} Eigenschaft auf das {{HTMLElement("body")}} Element angewendet.

```html
<body onload="init();" style="touch-action:none">
  <div id="target1">Tippen, Halten oder Streichen Sie mich 1</div>
  <div id="target2">Tippen, Halten oder Streichen Sie mich 2</div>
  <div id="target3">Tippen, Halten oder Streichen Sie mich 3</div>

  <!-- UI für Protokollierung/Fehlersuche -->
  <button id="log" onclick="enableLog(event);">Ereignisprotokollierung Start/Stop</button>
  <button id="clearlog" onclick="clearLog(event);">Protokoll löschen</button>
  <p></p>
  <output></output>
</body>
```

### Verschiedene Funktionen

Diese Funktionen unterstützen die Anwendung, sind jedoch nicht direkt in den Ereignisablauf involviert.

#### Cache-Verwaltung

Diese Funktionen verwalten die globalen Ereignis-Caches `evCache1`, `evCache2` und `evCache3`.

```js
function getCache(ev) {
  // Gibt den Cache für das Ziel-Element dieses Ereignisses zurück
  switch (ev.target.id) {
    case "target1":
      return evCache1;
    case "target2":
      return evCache2;
    case "target3":
      return evCache3;
    default:
      log("Fehler bei der Cache-Verwaltung", ev);
  }
}

function pushEvent(ev) {
  // Speichern Sie dieses Ereignis im Cache des Ziels
  const evCache = getCache(ev);
  evCache.push(ev);
}

function removeEvent(ev) {
  // Entfernen Sie dieses Ereignis aus dem Cache des Ziels
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
  // Ändert die Hintergrundfarbe basierend auf der Anzahl der gleichzeitigen Berührungen/Pointer,
  // die momentan unten sind:
  //   white - Ziel-Element hat keine Berührungspunkte, d.h. keine Pointer unten
  //   yellow - ein Pointer unten
  //   pink - zwei Pointer unten
  //   lightblue - drei oder mehr Pointer unten
  const evCache = getCache(ev);
  switch (evCache.length) {
    case 0:
      // Ziel-Element hat keine Berührungspunkte
      ev.target.style.background = "white";
      break;
    case 1:
      // Einzelner Berührungspunkt
      ev.target.style.background = "yellow";
      break;
    case 2:
      // Zwei gleichzeitige Berührungspunkte
      ev.target.style.background = "pink";
      break;
    default:
      // Drei oder mehr gleichzeitige Berührungen
      ev.target.style.background = "lightblue";
  }
}
```

#### Ereignisprotokollierung

Diese Funktionen werden verwendet, um Ereignisaktivitäten an das Anwendungsfenster zu senden (um Debugging und das Lernen über den Ereignisfluss zu unterstützen).

```js
// Ereignisprotokollierung Flag
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
