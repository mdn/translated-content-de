---
title: Zoom-Gesten mit Kneifen
slug: Web/API/Pointer_events/Pinch_zoom_gestures
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{DefaultAPISidebar("Pointer Events")}}

Das Hinzufügen von _Gesten_ zu einer Anwendung kann das Benutzererlebnis erheblich verbessern. Es gibt viele Arten von Gesten, von der einfachen Ein-Finger-Wischgeste bis zur komplexeren Mehrfinger-Drehgeste, bei der sich die Berührungspunkte (auch _Zeiger_ genannt) in verschiedene Richtungen bewegen.

Dieses Beispiel zeigt, wie Sie die _Kneif-/Zoom-Geste_ erkennen, die [Pointer Events](/de/docs/Web/API/Pointer_events) verwendet, um zu erkennen, ob der Benutzer zwei Zeiger näher zusammen oder weiter auseinander bewegt.

Eine _Live_-Version dieser Anwendung ist auf [GitHub](https://mdn.github.io/dom-examples/pointerevents/Pinch_zoom_gestures.html) verfügbar. Der [Quellcode ist auf GitHub verfügbar](https://github.com/mdn/dom-examples/blob/main/pointerevents/Pinch_zoom_gestures.html); Pull-Anfragen und [Fehlermeldungen](https://github.com/mdn/dom-examples/issues) sind willkommen.

## Beispiel

In diesem Beispiel verwenden Sie [Pointer Events](/de/docs/Web/API/Pointer_events), um gleichzeitig zwei Zeigegeräte beliebigen Typs, einschließlich Finger, Mäuse und Stifte, zu erkennen. Die Geste „Kneifen zum Verkleinern“ (Zoom-Out), bei der die beiden Zeiger aufeinander zu bewegt werden, ändert die Hintergrundfarbe des Zielelements in `hellblau`. Die Geste „Kneifen zum Vergrößern“ (Zoom-In), bei der die beiden Zeiger voneinander weg bewegt werden, ändert die Hintergrundfarbe des Zielelements in `rosa`.

### Berührungsziel definieren

Die Anwendung verwendet {{HTMLElement("div")}}, um die Zielbereiche der Zeiger zu definieren.

```html
<style>
  div {
    margin: 0em;
    padding: 2em;
  }
  #target {
    background: white;
    border: 1px solid black;
  }
</style>
```

### Globaler Zustand

Die Unterstützung einer Zwei-Zeiger-Geste erfordert, dass der Ereigniszustand eines Zeigers während der verschiedenen Ereignisphasen erhalten bleibt. Diese Anwendung verwendet zwei globale Variablen, um den Ereigniszustand zwischenspeichern.

```js
// Globale Variablen zum Zwischenspeichern des Ereigniszustands
const evCache = [];
let prevDiff = -1;
```

### Ereignishandler registrieren

Ereignishandler sind für die folgenden Pointer Events registriert: {{domxref("Element/pointerdown_event", "pointerdown")}}, {{domxref("Element/pointermove_event", "pointermove")}} und {{domxref("Element/pointerup_event", "pointerup")}}. Der Handler für {{domxref("Element/pointerup_event", "pointerup")}} wird für die Ereignisse {{domxref("Element/pointercancel_event", "pointercancel")}}, {{domxref("Element/pointerout_event", "pointerout")}} und {{domxref("Element/pointerleave_event", "pointerleave")}} verwendet, da diese vier Ereignisse in dieser Anwendung die gleiche Semantik haben.

```js
function init() {
  // Ereignishandler für das Zeigerziel installieren
  const el = document.getElementById("target");
  el.onpointerdown = pointerdownHandler;
  el.onpointermove = pointermoveHandler;

  // Verwenden Sie denselben Handler für pointer{up,cancel,out,leave}-Ereignisse, da
  // die Semantik für diese Ereignisse - in dieser App - dieselbe ist.
  el.onpointerup = pointerupHandler;
  el.onpointercancel = pointerupHandler;
  el.onpointerout = pointerupHandler;
  el.onpointerleave = pointerupHandler;
}
```

### Zeiger nach unten

Das {{domxref("Element/pointerdown_event", "pointerdown")}}-Ereignis wird ausgelöst, wenn ein Zeiger (Maus, Stift oder Berührungspunkt auf einem Touchscreen) mit der _Kontaktoberfläche_ in Berührung kommt. In dieser Anwendung muss der Ereigniszustand zwischengespeichert werden, falls dieses down-Ereignis Teil einer Zwei-Zeiger-Kneif-/Zoom-Geste ist.

```js
function pointerdownHandler(ev) {
  // Das Pointer-Down-Ereignis signalisiert den Beginn einer Berührungsinteraktion.
  // Dieses Ereignis wird zwischengespeichert, um 2-Finger-Gesten zu unterstützen
  evCache.push(ev);
  log("pointerDown", ev);
}
```

### Zeiger bewegen

Der {{domxref("Element/pointermove_event", "pointermove")}}-Ereignishandler erkennt, ob ein Benutzer eine Zwei-Zeiger-Kneif-/Zoom-Geste ausführt. Wenn zwei Zeiger nach unten gedrückt sind und der Abstand zwischen den Zeigern zunimmt (Signalisierung einer Kneif-Out- oder Zoom-In-Geste), wird die Hintergrundfarbe des Elements in `rosa` geändert, und wenn der Abstand zwischen den Zeigern abnimmt (eine Kneif-In- oder Zoom-Out-Geste), wird die Hintergrundfarbe in `hellblau` geändert. In einer anspruchsvolleren Anwendung könnte die Bestimmung der Kneifbewegung zum Ein- oder Auszoomen verwendet werden, um anwendungsspezifische Semantiken anzuwenden.

Wenn dieses Ereignis verarbeitet wird, wird der Rahmen des Ziels auf `gestrichelt` gesetzt, um eine klare visuelle Anzeige dafür zu bieten, dass das Element ein Bewegungsereignis empfangen hat.

```js
function pointermoveHandler(ev) {
  // Diese Funktion implementiert eine 2-Zeiger-Horizontale Kneif-/Zoom-Geste.
  //
  // Wenn der Abstand zwischen den beiden Zeigern zugenommen hat (Zoom-In),
  // wird der Hintergrund des Zielelements auf „rosa“ geändert und wenn der
  // Abstand abnimmt (Zoom-Out), wird die Farbe auf „hellblau“ geändert.
  //
  // Diese Funktion setzt den Rahmen des Zielelements auf „gestrichelt“,
  // um visuell anzuzeigen, dass das Zeigerziel ein Move-Ereignis erhalten hat.
  log("pointerMove", ev);
  ev.target.style.border = "dashed";

  // Suchen Sie dieses Ereignis im Cache und aktualisieren Sie dessen Aufzeichnung mit diesem Ereignis
  const index = evCache.findIndex(
    (cachedEv) => cachedEv.pointerId === ev.pointerId,
  );
  evCache[index] = ev;

  // Wenn zwei Zeiger nach unten gedrückt sind, prüfen Sie auf Kneifbewegungen
  if (evCache.length === 2) {
    // Berechnen Sie den Abstand zwischen den beiden Zeigern
    const curDiff = Math.abs(evCache[0].clientX - evCache[1].clientX);

    if (prevDiff > 0) {
      if (curDiff > prevDiff) {
        // Der Abstand zwischen den beiden Zeigern hat zugenommen
        log("Pinch moving OUT -> Zoom in", ev);
        ev.target.style.background = "pink";
      }
      if (curDiff < prevDiff) {
        // Der Abstand zwischen den beiden Zeigern hat abgenommen
        log("Pinch moving IN -> Zoom out", ev);
        ev.target.style.background = "lightblue";
      }
    }

    // Cachen Sie den Abstand für das nächste Bewegungsereignis
    prevDiff = curDiff;
  }
}
```

### Zeiger nach oben

Das {{domxref("Element/pointerup_event", "pointerup")}}-Ereignis wird ausgelöst, wenn ein Zeiger von der _Kontaktoberfläche_ abgehoben wird. Wenn dies geschieht, wird das Ereignis aus dem Ereignis-Cache entfernt und die Hintergrundfarbe und der Rahmen des Zielelements werden auf ihre ursprünglichen Werte zurückgesetzt.

In dieser Anwendung wird dieser Handler auch für die Ereignisse {{domxref("Element/pointercancel_event", "pointercancel")}}, {{domxref("Element/pointerleave_event", "pointerleave")}} und {{domxref("Element/pointerout_event", "pointerout")}} verwendet.

```js
function pointerupHandler(ev) {
  log(ev.type, ev);
  // Entfernen Sie diesen Zeiger aus dem Cache und setzen Sie
  // den Hintergrund und den Rahmen des Ziels zurück
  removeEvent(ev);
  ev.target.style.background = "white";
  ev.target.style.border = "1px solid black";

  // Wenn die Anzahl der Zeiger nach unten weniger als zwei ist, dann setzen Sie den Diff-Tracker zurück
  if (evCache.length < 2) {
    prevDiff = -1;
  }
}
```

### Benutzeroberfläche der Anwendung

Die Anwendung verwendet ein {{HTMLElement("div")}}-Element für den Berührungsbereich und bietet Schaltflächen zum Aktivieren des Protokolls und zum Löschen des Protokolls.

Um zu verhindern, dass das Standard-Touch-Verhalten des Browsers die Zeigerbehandlung dieser Anwendung überschreibt, wird die {{cssxref("touch-action")}}-Eigenschaft auf das {{HTMLElement("body")}}-Element angewendet.

```html
<body onload="init();" style="touch-action:none">
  <div id="target">
    Berühren und halten Sie mit 2 Zeigern und dann kneifen Sie rein oder raus.<br />
    Die Hintergrundfarbe wird rosa, wenn die Kneifbewegung sich öffnet (Zoom-In)
    oder ändert sich zu hellblau, wenn die Kneifbewegung sich schließt (Zoom-Out).
  </div>
  <!-- UI für Protokollierung/Fehlersuche -->
  <button id="log" onclick="enableLog(event);">Start/Stop Ereignisprotokollierung</button>
  <button id="clearlog" onclick="clearLog(event);">Protokoll löschen</button>
  <p></p>
  <output></output>
</body>
```

### Sonstige Funktionen

Diese Funktionen unterstützen die Anwendung, sind aber nicht direkt an der Ereignisfluss beteiligt.

#### Cache-Verwaltung

Diese Funktion hilft bei der Verwaltung der globalen Ereignis-Caches `evCache`.

```js
function removeEvent(ev) {
  // Entfernen Sie dieses Ereignis aus dem Cache des Ziels
  const index = evCache.findIndex(
    (cachedEv) => cachedEv.pointerId === ev.pointerId,
  );
  evCache.splice(index, 1);
}
```

#### Ereignisprotokollierung

Diese Funktionen werden verwendet, um die Ereignisaktivität im Fenster der Anwendung zu senden (um die Fehlersuche und das Lernen über den Ereignisfluss zu unterstützen).

```js
// Ereignisprotokollierungsflag
let logEvents = false;

// Protokollierungs-/Fehlersuchfunktionen
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

- [Pointer Events now in Firefox Nightly](https://hacks.mozilla.org/2015/08/pointer-events-now-in-firefox-nightly/); Mozilla Hacks; von Matt Brubeck und Jason Weathersby; 2015-Aug-04
- [jQuery Pointer Events Polyfill](https://github.com/jquery-archive/PEP)
- [Gesten](https://m2.material.io/design/interaction/gestures.html); Material Design
