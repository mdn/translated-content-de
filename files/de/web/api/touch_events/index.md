---
title: Touch events
slug: Web/API/Touch_events
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{DefaultAPISidebar("Touch Events")}}

Um qualitativ hochwertigen Support für berührungsbasierte Benutzeroberflächen bereitzustellen, bieten Touch-Events die Möglichkeit, Finger- (oder Stift-) Aktivitäten auf Touchscreens oder Trackpads zu interpretieren.

Die Touch-Events-Schnittstellen sind relativ niedrigstufige APIs, die verwendet werden können, um anwendungsspezifische Multi-Touch-Interaktionen wie eine Zwei-Finger-Geste zu unterstützen. Eine Multi-Touch-Interaktion beginnt, wenn ein Finger (oder Stift) zuerst die Kontaktfläche berührt. Andere Finger können anschließend die Oberfläche berühren und sich optional über die Berührungsfläche bewegen. Die Interaktion endet, wenn die Finger von der Oberfläche entfernt werden. Während dieser Interaktion erhält eine Anwendung Touch-Events während der Start-, Bewegungs- und Endphasen.

Touch-Events ähneln Maus-Events, außer dass sie gleichzeitige Berührungen an verschiedenen Positionen auf der Berührungsfläche unterstützen. Das [`TouchEvent`](/de/docs/Web/API/TouchEvent)-Interface kapselt alle derzeit aktiven Berührungspunkte. Das [`Touch`](/de/docs/Web/API/Touch)-Interface, das einen einzelnen Berührungspunkt darstellt, enthält Informationen wie die Position des Berührungspunkts relativ zur Browser-Ansicht.

## Definitionen

- Oberfläche
  - : Die berührungsempfindliche Oberfläche. Dies kann ein Bildschirm oder ein Trackpad sein.
- Berührungspunkt
  - : Ein Punkt der Berührung mit der Oberfläche. Dies kann ein Finger (oder Ellbogen, Ohr, Nase, was auch immer, aber typischerweise ein Finger) oder ein Stift sein.

## Schnittstellen

- [`TouchEvent`](/de/docs/Web/API/TouchEvent)
  - : Stellt ein Ereignis dar, das auftritt, wenn sich der Zustand der Berührungen auf der Oberfläche ändert.
- [`Touch`](/de/docs/Web/API/Touch)
  - : Stellt einen einzelnen Kontaktpunkt zwischen dem Benutzer und der Berührungsfläche dar.
- [`TouchList`](/de/docs/Web/API/TouchList)
  - : Stellt eine Gruppe von Berührungen dar; dies wird verwendet, wenn der Benutzer beispielsweise mehrere Finger gleichzeitig auf der Oberfläche hat.

## Beispiel

Dieses Beispiel verfolgt mehrere Berührungspunkte gleichzeitig und ermöglicht es dem Benutzer, in einem {{HTMLElement("canvas")}} mit mehr als einem Finger gleichzeitig zu zeichnen. Es funktioniert nur in einem Browser, der Touch-Events unterstützt.

> [!NOTE]
> Im nachfolgenden Text wird der Begriff "Finger" verwendet, um den Kontakt mit der Oberfläche zu beschreiben, es könnte natürlich auch ein Stift oder eine andere Kontaktmethode sein.

### Erstellen eines Canvas

```html
<canvas id="canvas" width="600" height="600" style="border:solid black 1px;">
  Your browser does not support canvas element.
</canvas>
<br />
Log:
<pre id="log" style="border: 1px solid #ccc;"></pre>
```

```css
#log {
  height: 200px;
  width: 600px;
  overflow: scroll;
}
```

### Einrichten der Ereignishandler

Wenn die Seite geladen wird, wird die unten gezeigte `startup()`-Funktion aufgerufen. Diese richtet alle Ereignislistener für unser {{HTMLElement("canvas")}}-Element ein, sodass wir die Touch-Events behandeln können, sobald sie auftreten.

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

#### Verfolgung neuer Berührungen

Wir werden die laufenden Berührungen verfolgen.

```js
const ongoingTouches = [];
```

Wenn ein [`touchstart`](/de/docs/Web/API/Element/touchstart_event)-Ereignis auftritt, das anzeigt, dass eine neue Berührung auf der Oberfläche erfolgt ist, wird die untenstehende `handleStart()`-Funktion aufgerufen.

```js
function handleStart(evt) {
  evt.preventDefault();
  log("touchstart.");
  const el = document.getElementById("canvas");
  const ctx = el.getContext("2d");
  const touches = evt.changedTouches;

  for (let i = 0; i < touches.length; i++) {
    log(`touchstart: ${i}.`);
    ongoingTouches.push(copyTouch(touches[i]));
    const color = colorForTouch(touches[i]);
    log(`color of touch with id ${touches[i].identifier} = ${color}`);
    ctx.beginPath();
    ctx.arc(touches[i].pageX, touches[i].pageY, 4, 0, 2 * Math.PI, false); // a circle at the start
    ctx.fillStyle = color;
    ctx.fill();
  }
}
```

Diese ruft [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf, um den Browser daran zu hindern, das Touch-Event weiter zu verarbeiten (dies verhindert auch, dass ein Maus-Event ebenfalls ausgelöst wird). Dann erhalten wir den Kontext und ziehen die Liste der geänderten Berührungspunkte aus der [`TouchEvent.changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches)-Eigenschaft des Ereignisses.

Danach iterieren wir über alle [`Touch`](/de/docs/Web/API/Touch)-Objekte in der Liste, fügen sie einem Array von aktiven Berührungspunkten hinzu und zeichnen den Startpunkt der Zeichnung als kleinen Kreis; wir verwenden eine 4 Pixel breite Linie, sodass ein Kreis mit einem Radius von 4 Pixeln ordentlich angezeigt wird.

#### Zeichnen, wenn sich die Berührungen bewegen

Jedes Mal, wenn sich ein oder mehrere Finger bewegen, wird ein [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignis ausgelöst, was dazu führt, dass unsere `handleMove()`-Funktion aufgerufen wird. Ihre Aufgabe in diesem Beispiel ist es, die zwischengespeicherte Berührungsinformation zu aktualisieren und eine Linie von der vorherigen Position zur aktuellen Position jeder Berührung zu zeichnen.

```js
function handleMove(evt) {
  evt.preventDefault();
  const el = document.getElementById("canvas");
  const ctx = el.getContext("2d");
  const touches = evt.changedTouches;

  for (let i = 0; i < touches.length; i++) {
    const color = colorForTouch(touches[i]);
    const idx = ongoingTouchIndexById(touches[i].identifier);

    if (idx >= 0) {
      log(`continuing touch ${idx}`);
      ctx.beginPath();
      log(
        `ctx.moveTo( ${ongoingTouches[idx].pageX}, ${ongoingTouches[idx].pageY} );`,
      );
      ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
      log(`ctx.lineTo( ${touches[i].pageX}, ${touches[i].pageY} );`);
      ctx.lineTo(touches[i].pageX, touches[i].pageY);
      ctx.lineWidth = 4;
      ctx.strokeStyle = color;
      ctx.stroke();

      ongoingTouches.splice(idx, 1, copyTouch(touches[i])); // swap in the new touch record
    } else {
      log("can't figure out which touch to continue");
    }
  }
}
```

Dies iteriert ebenfalls über die geänderten Berührungen, durchsucht jedoch unser zwischengespeichertes Berührungsinformationsarray nach der vorherigen Information über jede Berührung, um den Startpunkt für das neue Liniensegment jeder Berührung zu bestimmen. Dies geschieht, indem auf die [`Touch.identifier`](/de/docs/Web/API/Touch/identifier)-Eigenschaft jeder Berührung geschaut wird. Diese Eigenschaft ist eine eindeutige ganze Zahl für jede Berührung und bleibt während der Dauer des Kontakts jedes Fingers mit der Oberfläche bei jedem Ereignis gleich.

Auf diese Weise können wir die Koordinaten der vorherigen Position jeder Berührung erhalten und die entsprechenden Kontextmethoden verwenden, um ein Liniensegment zu zeichnen, das die beiden Positionen miteinander verbindet.

Nachdem wir die Linie gezeichnet haben, rufen wir [`Array.splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) auf, um die vorherigen Informationen über den Berührungspunkt durch die aktuellen Informationen im `ongoingTouches`-Array zu ersetzen.

#### Beenden einer Berührung behandeln

Wenn der Benutzer einen Finger von der Oberfläche hebt, wird ein [`touchend`](/de/docs/Web/API/Element/touchend_event)-Ereignis gesendet. Wir behandeln dies, indem wir die untenstehende `handleEnd()`-Funktion aufrufen. Ihre Aufgabe ist es, das letzte Liniensegment für jede beendete Berührung zu zeichnen und den Berührungspunkt aus der laufenden Berührungsliste zu entfernen.

```js
function handleEnd(evt) {
  evt.preventDefault();
  log("touchend");
  const el = document.getElementById("canvas");
  const ctx = el.getContext("2d");
  const touches = evt.changedTouches;

  for (let i = 0; i < touches.length; i++) {
    const color = colorForTouch(touches[i]);
    let idx = ongoingTouchIndexById(touches[i].identifier);

    if (idx >= 0) {
      ctx.lineWidth = 4;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
      ctx.lineTo(touches[i].pageX, touches[i].pageY);
      ctx.fillRect(touches[i].pageX - 4, touches[i].pageY - 4, 8, 8); // and a square at the end
      ongoingTouches.splice(idx, 1); // remove it; we're done
    } else {
      log("can't figure out which touch to end");
    }
  }
}
```

Dies ist der vorherigen Funktion sehr ähnlich; die einzigen wirklichen Unterschiede sind, dass wir ein kleines Quadrat zeichnen, um das Ende zu markieren, und dass wir, wenn wir [`Array.splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) aufrufen, den alten Eintrag aus der laufenden Berührungsliste entfernen, ohne die aktualisierten Informationen hinzuzufügen. Das Ergebnis ist, dass wir diesen Berührungspunkt nicht weiter verfolgen.

#### Umgang mit abgesagten Berührungen

Wenn der Finger des Benutzers ins Browser-UI wandert oder die Berührung aus einem anderen Grund abgebrochen werden muss, wird das [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event)-Ereignis gesendet, und wir rufen die `handleCancel()`-Funktion unten auf.

```js
function handleCancel(evt) {
  evt.preventDefault();
  log("touchcancel.");
  const touches = evt.changedTouches;

  for (let i = 0; i < touches.length; i++) {
    let idx = ongoingTouchIndexById(touches[i].identifier);
    ongoingTouches.splice(idx, 1); // remove it; we're done
  }
}
```

Da die Idee darin besteht, die Berührung sofort abzubrechen, entfernen wir sie aus der laufenden Berührungsliste, ohne ein finales Liniensegment zu zeichnen.

### Hilfsfunktionen

Dieses Beispiel verwendet zwei Hilfsfunktionen, die kurz betrachtet werden sollten, um den Rest des Codes verständlicher zu machen.

#### Eine Farbe für jede Berührung auswählen

Um das Zeichnen jeder Berührung unterschiedlich aussehen zu lassen, wird die `colorForTouch()`-Funktion verwendet, um eine Farbe basierend auf der eindeutigen Kennung der Berührung auszuwählen.
Diese Kennung ist eine undurchsichtige Zahl, aber wir können zumindest darauf vertrauen, dass sie sich bei den aktuell aktiven Berührungen unterscheidet.

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

Das Ergebnis dieser Funktion ist ein String, der beim Aufrufen von {{HTMLElement("canvas")}}-Funktionen zur Einstellung der Zeichenfarben verwendet werden kann.
Zum Beispiel ist für einen [`Touch.identifier`](/de/docs/Web/API/Touch/identifier)-Wert von 10 der resultierende String "#a31".

#### Kopieren eines Berührungsobjekts

Einige Browser (zum Beispiel mobiles Safari) verwenden Berührungsobjekte zwischen Ereignissen erneut, daher ist es am besten, die Eigenschaften, die Sie interessieren, zu kopieren, anstatt sich auf das gesamte Objekt zu beziehen.

```js
function copyTouch({ identifier, pageX, pageY }) {
  return { identifier, pageX, pageY };
}
```

#### Eine laufende Berührung finden

Die `ongoingTouchIndexById()`-Funktion unten durchläuft das `ongoingTouches`-Array, um die Berührung zu finden, die mit der angegebenen Kennung übereinstimmt, und gibt dann den Index dieser Berührung im Array zurück.

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

#### Zeigen, was passiert

```js
function log(msg) {
  const container = document.getElementById("log");
  container.textContent = `${msg} \n${container.textContent}`;
}
```

### Ergebnis

Sie können dieses Beispiel auf mobilen Geräten testen, indem Sie das untenstehende Feld berühren.

{{EmbedLiveSample('Example','100%', 900)}}

> [!NOTE]
> Allgemeiner gesagt, funktioniert das Beispiel auf Plattformen, die Touch-Events bereitstellen.
> Sie können dies auf Desktop-Plattformen testen, die solche Ereignisse simulieren können:
>
> - Aktivieren Sie in Firefox die "Touch-Simulation" im [Modus für responsives Design](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#toggling-responsive-design-mode) (möglicherweise müssen Sie die Seite neu laden).
> - Verwenden Sie in Chrome den [Gerätemodus](https://developer.chrome.com/docs/devtools/device-mode/) und setzen Sie den [Gerätetyp](https://developer.chrome.com/docs/devtools/device-mode/#type) auf einen, der Touch-Events sendet.

## Zusätzliche Tipps

Dieser Abschnitt bietet zusätzliche Tipps zum Umgang mit Touch-Events in Ihrer Webanwendung.

### Umgang mit Klicks

Da das Aufrufen von `preventDefault()` bei einem [`touchstart`](/de/docs/Web/API/Element/touchstart_event) oder dem ersten [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignis einer Serie die entsprechenden Mausereignisse daran hindert, ausgelöst zu werden, ist es üblich, `preventDefault()` bei `touchmove` und nicht bei `touchstart` aufzurufen. Auf diese Weise können Mausereignisse dennoch ausgelöst werden und Dinge wie Links funktionieren weiterhin. Alternativ haben einige Frameworks begonnen, Touch-Events erneut als Mausereignisse auszulösen, um denselben Zweck zu erreichen. (Dieses Beispiel ist vereinfacht und kann zu seltsamem Verhalten führen. Es ist nur als Leitfaden gedacht.)

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

Eine Technik zur Verhinderung von Dingen wie `pinchZoom` auf einer Seite besteht darin, `preventDefault()` bei der zweiten Berührung einer Serie aufzurufen. Dieses Verhalten ist in den Touch-Events-Spezifikationen nicht gut definiert und führt zu unterschiedlichen Verhaltensweisen in verschiedenen Browsern (d.h., iOS verhindert das Zoomen, erlaubt aber weiterhin das Schwenken mit beiden Fingern; Android erlaubt das Zoomen, aber nicht das Schwenken; Opera und Firefox verhindern derzeit sowohl Schwenken als auch Zoomen). Derzeit wird nicht empfohlen, sich auf ein bestimmtes Verhalten in diesem Fall zu verlassen, sondern auf den Meta-Viewport, um das Zoomen zu verhindern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Touch-Events sind in der Regel auf Geräten mit Touchscreen verfügbar, aber viele Browser machen die Touch-Events-API auf allen Desktop-Geräten nicht verfügbar, selbst auf denen mit Touchscreen.

Der Grund dafür ist, dass einige Websites die Verfügbarkeit von Teilen der Touch-Events-API als Indikator dafür verwenden, dass der Browser auf einem mobilen Gerät ausgeführt wird. Wenn die Touch-Events-API verfügbar ist, nehmen diese Websites an, dass ein mobiles Gerät vorhanden ist, und liefern mobiloptimierte Inhalte. Dies kann dann eine schlechte Erfahrung für Benutzer von Desktop-Geräten mit Touchscreen bieten.

Um sowohl Touch- als auch Mauserlebnisse auf allen Gerätetypen zu unterstützen, verwenden Sie stattdessen [Pointer-Events](/de/docs/Web/API/Pointer_events).

{{Compat}}
