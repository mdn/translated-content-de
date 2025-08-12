---
title: Touch events
slug: Web/API/Touch_events
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{DefaultAPISidebar("Touch Events")}}

Um eine qualitativ hochwertige Unterstützung für touchbasierte Benutzeroberflächen zu bieten, ermöglichen es Touch-Events, Finger- (oder Stift-) Aktivitäten auf Touchscreens oder Trackpads zu interpretieren.

Die Touch-Event-Schnittstellen sind relativ Low-Level-APIs, die verwendet werden können, um anwendungsspezifische Multi-Touch-Interaktionen wie eine Zwei-Finger-Geste zu unterstützen. Eine Multi-Touch-Interaktion beginnt, wenn ein Finger (oder ein Stift) erstmals die Kontaktfläche berührt. Weitere Finger können anschließend die Oberfläche berühren und optional über die Touch-Oberfläche bewegt werden. Die Interaktion endet, wenn die Finger von der Oberfläche entfernt werden. Während dieser Interaktion erhält eine Anwendung Touch-Events während der Start-, Bewegungs- und Endphasen.

Touch-Events ähneln Maus-Events, außer dass sie gleichzeitige Berührungen an verschiedenen Orten auf der Touch-Oberfläche unterstützen. Das [`TouchEvent`](/de/docs/Web/API/TouchEvent)-Interface kapselt alle aktuell aktiven Berührungspunkte. Das [`Touch`](/de/docs/Web/API/Touch)-Interface, das einen einzelnen Berührungspunkt darstellt, enthält Informationen wie die Position des Berührungspunkts relativ zum Browser-Viewport.

## Definitionen

- Oberfläche
  - : Die berührungsempfindliche Oberfläche. Dies kann ein Bildschirm oder ein Trackpad sein.
- Berührungspunkt
  - : Ein Punkt des Kontakts mit der Oberfläche. Dies kann ein Finger (oder Ellbogen, Ohr, Nase, was auch immer, aber typischerweise ein Finger) oder ein Stift sein.

## Schnittstellen

- [`TouchEvent`](/de/docs/Web/API/TouchEvent)
  - : Repräsentiert ein Ereignis, das auftritt, wenn sich der Zustand der Berührungen auf der Oberfläche ändert.
- [`Touch`](/de/docs/Web/API/Touch)
  - : Repräsentiert einen einzelnen Kontaktpunkt zwischen dem Benutzer und der Touch-Oberfläche.
- [`TouchList`](/de/docs/Web/API/TouchList)
  - : Repräsentiert eine Gruppe von Berührungen; dies wird verwendet, wenn der Benutzer beispielsweise mehrere Finger gleichzeitig auf der Oberfläche hat.

## Beispiel

Dieses Beispiel verfolgt mehrere Berührungspunkte gleichzeitig und ermöglicht es dem Benutzer, in einem {{HTMLElement("canvas")}} mit mehr als einem Finger gleichzeitig zu zeichnen. Es funktioniert nur in einem Browser, der Touch-Events unterstützt.

> [!NOTE]
> Der unten stehende Text verwendet den Begriff „Finger“, wenn er den Kontakt mit der Oberfläche beschreibt, aber es könnte natürlich auch ein Stift oder eine andere Kontaktmethode sein.

### Erstellen Sie ein Canvas

```html
<canvas id="canvas" width="600" height="600">
  Your browser does not support canvas element.
</canvas>
<br />
Log:
<pre id="log"></pre>
```

```css
#canvas {
  border: 1px solid black;
}

#log {
  height: 200px;
  width: 600px;
  overflow: scroll;
  border: 1px solid #cccccc;
}
```

### Einrichten der Ereignis-Handler

Wenn die Seite geladen wird, wird die unten gezeigte `startup()`-Funktion aufgerufen. Diese richtet alle Ereignis-Listener für unser {{HTMLElement("canvas")}}-Element ein, damit wir die Touch-Events beim Auftreten verarbeiten können.

```js
function startup() {
  const el = document.getElementById("canvas");
  el.addEventListener("touchstart", handleStart);
  el.addEventListener("touchend", handleEnd);
  el.addEventListener("touchcancel", handleCancel);
  el.addEventListener("touchmove", handleMove);
  log("Initialized.");
}

document.addEventListener("DOMContentLoaded", startup);
```

#### Neue Berührungen verfolgen

Wir behalten die fortlaufenden Berührungen im Auge.

```js
const ongoingTouches = [];
```

Wenn ein [`touchstart`](/de/docs/Web/API/Element/touchstart_event)-Ereignis auftritt, das anzeigt, dass eine neue Berührung auf der Oberfläche stattgefunden hat, wird die unten stehende `handleStart()`-Funktion aufgerufen.

```js
function handleStart(evt) {
  evt.preventDefault();
  log("touchstart.");
  const el = document.getElementById("canvas");
  const ctx = el.getContext("2d");
  const touches = evt.changedTouches;

  for (let i = 0; i < touches.length; i++) {
    const touch = touches[i];
    log(`touchstart: ${i}.`);
    ongoingTouches.push(copyTouch(touch));
    const color = colorForTouch(touch);
    log(`color of touch with id ${touch.identifier} = ${color}`);
    ctx.beginPath();
    ctx.arc(touch.pageX, touch.pageY, 4, 0, 2 * Math.PI, false); // a circle at the start
    ctx.fillStyle = color;
    ctx.fill();
  }
}
```

Diese ruft [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf, um zu verhindern, dass der Browser das Touch-Ereignis weiterhin verarbeitet (dies verhindert auch, dass ein Mausereignis ebenfalls ausgelöst wird). Dann holen wir den Kontext und ziehen die Liste der geänderten Berührungspunkte aus der [`TouchEvent.changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches)-Eigenschaft des Ereignisses heraus.

Danach iterieren wir über alle [`Touch`](/de/docs/Web/API/Touch)-Objekte in der Liste, fügen sie einem Array aktiver Berührungspunkte hinzu und zeichnen den Startpunkt für die Zeichnung als kleinen Kreis; wir verwenden eine 4-Pixel breite Linie, sodass ein Kreis mit einem Radius von 4 Pixeln ordentlich sichtbar wird.

#### Zeichnen, während sich die Berührungen bewegen

Jedes Mal, wenn sich ein oder mehrere Finger bewegen, wird ein [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignis ausgeliefert, wodurch unsere `handleMove()`-Funktion aufgerufen wird. Ihre Aufgabe in diesem Beispiel ist es, die zwischengespeicherten Berührungsinformationen zu aktualisieren und eine Linie von der vorherigen Position zur aktuellen Position jeder Berührung zu zeichnen.

```js
function handleMove(evt) {
  evt.preventDefault();
  const el = document.getElementById("canvas");
  const ctx = el.getContext("2d");
  const touches = evt.changedTouches;

  for (const touch of touches) {
    const color = colorForTouch(touch);
    const idx = ongoingTouchIndexById(touch.identifier);

    if (idx >= 0) {
      log(`continuing touch ${idx}`);
      ctx.beginPath();
      log(
        `ctx.moveTo( ${ongoingTouches[idx].pageX}, ${ongoingTouches[idx].pageY} );`,
      );
      ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
      log(`ctx.lineTo( ${touch.pageX}, ${touch.pageY} );`);
      ctx.lineTo(touch.pageX, touch.pageY);
      ctx.lineWidth = 4;
      ctx.strokeStyle = color;
      ctx.stroke();

      ongoingTouches.splice(idx, 1, copyTouch(touch)); // swap in the new touch record
    } else {
      log("can't figure out which touch to continue");
    }
  }
}
```

Auch hierbei wird über die geänderten Berührungen iteriert, aber es wird in unserem zwischengespeicherten Berührungsinformations-Array nach den vorherigen Informationen über jede Berührung gesucht, um den Startpunkt für das neue Liniensegment jeder Berührung zu bestimmen. Dies geschieht, indem auf jede Berührungseigenschaft [`Touch.identifier`](/de/docs/Web/API/Touch/identifier) geschaut wird. Diese Eigenschaft ist eine eindeutige Ganzzahl für jede Berührung und bleibt für jedes Ereignis während der Dauer jedes Fingerkontakts mit der Oberfläche konstant.

Damit können wir die Koordinaten der vorherigen Position jeder Berührung abrufen und die entsprechenden Kontextmethoden verwenden, um ein Liniensegment zu zeichnen, das die beiden Positionen verbindet.

Nach dem Zeichnen der Linie rufen wir [`Array.splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) auf, um die vorherigen Informationen über den Berührungspunkt durch die aktuellen Informationen im `ongoingTouches`-Array zu ersetzen.

#### Umgang mit dem Ende einer Berührung

Wenn der Benutzer einen Finger von der Oberfläche hebt, wird ein [`touchend`](/de/docs/Web/API/Element/touchend_event)-Ereignis gesendet. Wir bearbeiten dies, indem wir die `handleEnd()`-Funktion unten aufrufen. Ihre Aufgabe ist es, das letzte Liniensegment für jede endende Berührung zu zeichnen und den Berührungspunkt aus der laufenden Berührungsliste zu entfernen.

```js
function handleEnd(evt) {
  evt.preventDefault();
  log("touchend");
  const el = document.getElementById("canvas");
  const ctx = el.getContext("2d");
  const touches = evt.changedTouches;

  for (const touch of touches) {
    const color = colorForTouch(touch);
    let idx = ongoingTouchIndexById(touch.identifier);

    if (idx >= 0) {
      ctx.lineWidth = 4;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
      ctx.lineTo(touch.pageX, touch.pageY);
      ctx.fillRect(touch.pageX - 4, touch.pageY - 4, 8, 8); // and a square at the end
      ongoingTouches.splice(idx, 1); // remove it; we're done
    } else {
      log("can't figure out which touch to end");
    }
  }
}
```

Dies ist der vorherigen Funktion sehr ähnlich; der einzige wirkliche Unterschied besteht darin, dass wir ein kleines Quadrat zeichnen, um das Ende zu markieren, und dass wir beim Aufruf von [`Array.splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) den alten Eintrag aus der laufenden Berührungsliste entfernen, ohne die aktualisierten Informationen hinzuzufügen. Das Ergebnis ist, dass wir diesen Berührungspunkt nicht mehr verfolgen.

#### Handhabung abgebrochener Berührungen

Wenn der Finger des Benutzers in die Browser-Benutzeroberfläche gelangt oder die Berührung aus anderen Gründen abgebrochen werden muss, wird das [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event)-Ereignis gesendet, und wir rufen die `handleCancel()`-Funktion unten auf.

```js
function handleCancel(evt) {
  evt.preventDefault();
  log("touchcancel.");
  const touches = evt.changedTouches;

  for (const touch of touches) {
    let idx = ongoingTouchIndexById(touches[i].identifier);
    ongoingTouches.splice(idx, 1); // remove it; we're done
  }
}
```

Da die Idee darin besteht, die Berührung sofort abzubrechen, entfernen wir sie aus der laufenden Berührungsliste, ohne ein abschließendes Liniensegment zu zeichnen.

### Komfortfunktionen

Dieses Beispiel verwendet zwei Komfortfunktionen, die kurz betrachtet werden sollten, um den Rest des Codes verständlicher zu machen.

#### Auswahl einer Farbe für jede Berührung

Um das Zeichnen jeder Berührung anders aussehen zu lassen, wird die `colorForTouch()`-Funktion verwendet, um basierend auf der einzigartigen Kennung der Berührung eine Farbe auszuwählen. Diese Kennung ist eine undurchsichtige Nummer, aber wir können zumindest darauf vertrauen, dass sie sich zwischen den aktuell aktiven Berührungen unterscheidet.

```js
function colorForTouch(touch) {
  let r = touch.identifier % 16;
  let g = Math.floor(touch.identifier / 3) % 16;
  let b = Math.floor(touch.identifier / 7) % 16;
  r = r.toString(16); // make it a hex digit
  g = g.toString(16); // make it a hex digit
  b = b.toString(16); // make it a hex digit
  const color = `#${r}${g}${b}`;
  return color;
}
```

Das Ergebnis dieser Funktion ist ein String, der beim Aufruf von {{HTMLElement("canvas")}}-Funktionen zum Festlegen von Zeichenfarben verwendet werden kann. Beispielsweise ist für einen [`Touch.identifier`](/de/docs/Web/API/Touch/identifier)-Wert von 10 der resultierende String "#aa3311".

#### Kopieren eines Touch-Objekts

Einige Browser (zum Beispiel mobiles Safari) verwenden Touch-Objekte zwischen Ereignissen wieder, daher ist es am besten, die Eigenschaften, die für Sie von Bedeutung sind, zu kopieren, anstatt auf das gesamte Objekt zu verweisen.

```js
function copyTouch({ identifier, pageX, pageY }) {
  return { identifier, pageX, pageY };
}
```

#### Finden einer laufenden Berührung

Die `ongoingTouchIndexById()`-Funktion unten durchsucht das `ongoingTouches`-Array, um die Berührung zu finden, die mit der angegebenen Kennung übereinstimmt, und gibt dann den Index dieser Berührung im Array zurück.

```js
function ongoingTouchIndexById(idToFind) {
  for (let i = 0; i < ongoingTouches.length; i++) {
    const id = ongoingTouches[i].identifier;

    if (id === idToFind) {
      return i;
    }
  }
  return -1; // not found
}
```

#### Anzeige dessen, was vor sich geht

```js
function log(msg) {
  const container = document.getElementById("log");
  container.textContent = `${msg} \n${container.textContent}`;
}
```

### Ergebnis

Sie können dieses Beispiel auf mobilen Geräten testen, indem Sie die Box unten berühren.

{{EmbedLiveSample('Example','100%', 900)}}

> [!NOTE]
> Allgemeiner gesagt, funktioniert das Beispiel auf Plattformen, die Touch-Events bereitstellen.
> Sie können dies auf Desktop-Plattformen testen, die solche Ereignisse simulieren können:
>
> - In Firefox aktivieren Sie die „Berührungssimulation“ im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#toggling-responsive-design-mode) (möglicherweise muss die Seite neu geladen werden).
> - In Chrome verwenden Sie den [Gerätemodus](https://developer.chrome.com/docs/devtools/device-mode/) und legen den [Gerätetyp](https://developer.chrome.com/docs/devtools/device-mode/#type) auf einen fest, der Touch-Events sendet.

## Zusätzliche Tipps

Dieser Abschnitt gibt zusätzliche Tipps, wie Touch-Events in Ihrer Webanwendung behandelt werden können.

### Umgang mit Klicks

Da der Aufruf von `preventDefault()` auf einem [`touchstart`](/de/docs/Web/API/Element/touchstart_event)- oder dem ersten [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignis einer Serie verhindert, dass die entsprechenden Mausereignisse ausgelöst werden, ist es üblich, `preventDefault()` bei `touchmove` anstelle von `touchstart` aufzurufen. Auf diese Weise können Mausereignisse weiterhin ausgelöst werden und Dinge wie Links funktionieren weiterhin. Alternativ haben einige Frameworks die Angewohnheit, Touch-Events als Mausereignisse erneut auszulösen, um denselben Zweck zu erreichen. (Dieses Beispiel ist vereinfacht und kann zu merkwürdigem Verhalten führen. Es ist nur als Leitfaden gedacht.)

```js
function onTouch(evt) {
  evt.preventDefault();
  if (
    evt.touches.length > 1 ||
    (evt.type === "touchend" && evt.touches.length > 0)
  )
    return;

  const newEvt = document.createEvent("MouseEvents");
  let type = null;
  let touch = null;

  switch (evt.type) {
    case "touchstart":
      type = "mousedown";
      touch = evt.changedTouches[0];
      break;
    case "touchmove":
      type = "mousemove";
      touch = evt.changedTouches[0];
      break;
    case "touchend":
      type = "mouseup";
      touch = evt.changedTouches[0];
      break;
  }

  newEvt.initMouseEvent(
    type,
    true,
    true,
    evt.originalTarget.ownerDocument.defaultView,
    0,
    touch.screenX,
    touch.screenY,
    touch.clientX,
    touch.clientY,
    evt.ctrlKey,
    evt.altKey,
    evt.shiftKey,
    evt.metaKey,
    0,
    null,
  );
  evt.originalTarget.dispatchEvent(newEvt);
}
```

### Aufrufen von preventDefault() nur bei einer zweiten Berührung

Eine Technik, um Dinge wie `pinchZoom` auf einer Seite zu verhindern, besteht darin, `preventDefault()` bei der zweiten Berührung einer Serie aufzurufen. Dieses Verhalten ist in der Touch-Events-Spezifikation nicht gut definiert und führt zu unterschiedlichem Verhalten bei verschiedenen Browsern (d.h. iOS verhindert das Zoomen, erlaubt aber weiterhin das Schwenken mit beiden Fingern; Android erlaubt das Zoomen, aber nicht das Schwenken; Opera und Firefox verhindern derzeit jegliches Schwenken und Zoomen). Derzeit wird nicht empfohlen, sich auf ein bestimmtes Verhalten in diesem Fall zu verlassen, sondern vielmehr auf das Meta-Viewport, um das Zoomen zu verhindern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Touch-Events sind typischerweise auf Geräten mit Touchscreen verfügbar, aber viele Browser machen die Touch-Events-API auf allen Desktop-Geräten unzugänglich, selbst auf solchen mit Touchscreens.

Der Grund dafür ist, dass einige Websites die Verfügbarkeit von Teilen der Touch-Events-API als Indikator dafür verwenden, dass der Browser auf einem mobilen Gerät läuft. Wenn die Touch-Events-API verfügbar ist, gehen diese Websites von einem mobilen Gerät aus und liefern mobiltaugliche Inhalte aus. Dies kann dann zu einer schlechten Erfahrung für Benutzer von Desktop-Geräten führen, die Touchscreens haben.

Um sowohl Touch als auch Maus auf allen Gerätetypen zu unterstützen, verwenden Sie [Pointer-Events](/de/docs/Web/API/Pointer_events) stattdessen.

{{Compat}}
