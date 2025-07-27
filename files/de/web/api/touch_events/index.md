---
title: Touch events
slug: Web/API/Touch_events
l10n:
  sourceCommit: dbe01951a38ff9d0c755040258c04a4d082ec119
---

{{DefaultAPISidebar("Touch Events")}}

Um qualitativ hochwertige Unterstützung für berührungsbasierte Benutzerschnittstellen bereitzustellen, bieten Touch-Events die Möglichkeit, Finger- (oder Stift-)Aktivitäten auf Touchscreens oder Trackpads zu interpretieren.

Die Touch-Events-Schnittstellen sind relativ niedrigstufige APIs, die verwendet werden können, um anwendungsspezifische Multitouch-Interaktionen zu unterstützen, wie zum Beispiel eine Zwei-Finger-Geste. Eine Multitouch-Interaktion beginnt, wenn ein Finger (oder Stift) erstmals die Kontaktfläche berührt. Andere Finger können anschließend die Oberfläche berühren und optional über die Touch-Oberfläche bewegt werden. Die Interaktion endet, wenn die Finger von der Oberfläche entfernt werden. Während dieser Interaktion erhält eine Anwendung Touch-Events während der Start-, Beweg und Endphasen.

Touch-Events sind den Maus-Events ähnlich, unterstützen jedoch gleichzeitige Berührungen an verschiedenen Stellen auf der Touch-Oberfläche. Die [`TouchEvent`](/de/docs/Web/API/TouchEvent)-Schnittstelle kapselt alle aktuell aktiven Berührungspunkte. Die [`Touch`](/de/docs/Web/API/Touch)-Schnittstelle, die einen einzelnen Berührungspunkt repräsentiert, enthält Informationen wie die Position des Berührungspunkts relativ zum Browser-Viewport.

## Definitionen

- Oberfläche
  - : Die berührungsempfindliche Oberfläche. Dies kann ein Bildschirm oder ein Trackpad sein.
- Berührungspunkt
  - : Ein Kontaktpunkt mit der Oberfläche. Dies kann ein Finger (oder Ellenbogen, Ohr, Nase, was auch immer, aber typischerweise ein Finger) oder ein Stift sein.

## Schnittstellen

- [`TouchEvent`](/de/docs/Web/API/TouchEvent)
  - : Repräsentiert ein Ereignis, das auftritt, wenn sich der Zustand der Berührungen auf der Oberfläche ändert.
- [`Touch`](/de/docs/Web/API/Touch)
  - : Repräsentiert einen einzelnen Kontaktpunkt zwischen dem Benutzer und der Berührungsoberfläche.
- [`TouchList`](/de/docs/Web/API/TouchList)
  - : Repräsentiert eine Gruppe von Berührungen; dies wird verwendet, wenn der Benutzer beispielsweise mehrere Finger gleichzeitig auf der Oberfläche hat.

## Beispiel

Dieses Beispiel verfolgt mehrere Berührungspunkte gleichzeitig und ermöglicht es dem Benutzer, mit mehr als einem Finger gleichzeitig in ein {{HTMLElement("canvas")}} zu zeichnen. Es funktioniert nur in einem Browser, der Touch-Events unterstützt.

> [!NOTE]
> Der nachfolgende Text verwendet den Begriff "Finger", um den Kontakt mit der Oberfläche zu beschreiben, es könnte jedoch natürlich auch ein Stift oder eine andere Kontaktmethode sein.

### Erstellen Sie eine Leinwand

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
  border: 1px solid #ccc;
}
```

### Einrichten der Ereignishandler

Wenn die Seite geladen wird, wird die unten gezeigte `startup()`-Funktion aufgerufen. Diese richtet alle Event-Listener für unser {{HTMLElement("canvas")}}-Element ein, damit wir die Touch-Events behandeln können, sobald sie auftreten.

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

Wir werden die laufenden Berührungen im Auge behalten.

```js
const ongoingTouches = [];
```

Wenn ein [`touchstart`](/de/docs/Web/API/Element/touchstart_event)-Ereignis auftritt, das anzeigt, dass eine neue Berührung auf der Oberfläche stattgefunden hat, wird die untenstehende `handleStart()`-Funktion aufgerufen.

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

Diese ruft [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf, um den Browser daran zu hindern, das Touch-Event weiter zu verarbeiten (dies verhindert auch, dass ein Maus-Ereignis ebenfalls ausgelöst wird). Danach holen wir den Kontext und ziehen die Liste der geänderten Berührungspunkte aus der [`TouchEvent.changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches)-Eigenschaft des Ereignisses.

Anschließend iterieren wir über alle [`Touch`](/de/docs/Web/API/Touch)-Objekte in der Liste, fügen sie einem Array aktiver Berührungspunkte hinzu und zeichnen den Startpunkt für die Zeichnung als kleinen Kreis; wir verwenden eine 4 Pixel breite Linie, sodass ein Kreis mit 4 Pixel Radius sauber angezeigt wird.

#### Zeichnen, während die Berührungen sich bewegen

Jedes Mal, wenn sich ein oder mehrere Finger bewegen, wird ein [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignis ausgelöst, das dazu führt, dass unsere `handleMove()`-Funktion aufgerufen wird. Ihre Verantwortung in diesem Beispiel besteht darin, die zwischengespeicherten Berührungsinformationen zu aktualisieren und eine Linie vom vorherigen Standort zur aktuellen Position jedes Berührungspunkts zu zeichnen.

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

Dies iteriert ebenfalls über die geänderten Berührungen, sucht jedoch in unserem zwischengespeicherten Informationsarray nach den vorherigen Informationen zu jeder Berührung, um den Startpunkt für das neue Liniensegment jeder Berührung zu bestimmen, das gezeichnet werden soll. Dies geschieht, indem auf die [`Touch.identifier`](/de/docs/Web/API/Touch/identifier)-Eigenschaft jeder Berührung geschaut wird. Diese Eigenschaft ist eine eindeutige Ganzzahl für jede Berührung und bleibt während der Dauer jedes Fingerkontakts mit der Oberfläche konsistent.

Dies ermöglicht es uns, die Koordinaten der vorherigen Position jeder Berührung zu erhalten und die geeigneten Kontextmethoden zu verwenden, um ein Liniensegment zu zeichnen, das die beiden Positionen miteinander verbindet.

Nachdem die Linie gezeichnet wurde, rufen wir [`Array.splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) auf, um die vorherigen Informationen über den Berührungspunkt durch die aktuellen Informationen im `ongoingTouches`-Array zu ersetzen.

#### Handling des Endes einer Berührung

Wenn der Benutzer einen Finger von der Oberfläche hebt, wird ein [`touchend`](/de/docs/Web/API/Element/touchend_event)-Ereignis gesendet. Wir behandeln dies, indem wir die folgende `handleEnd()`-Funktion aufrufen. Ihre Aufgabe ist es, das letzte Liniensegment für jede beendete Berührung zu zeichnen und den Berührungspunkt aus der laufenden Berührungsliste zu entfernen.

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

#### Behandlung abgebrochener Berührungen

Wenn der Finger des Benutzers in die Browser-UI gerät oder die Berührung anderweitig abgebrochen werden muss, wird das [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event)-Ereignis gesendet und wir rufen die untenstehende `handleCancel()`-Funktion auf.

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

Da die Idee darin besteht, die Berührung sofort abzubrechen, entfernen wir sie aus der laufenden Berührungsliste, ohne ein endgültiges Liniensegment zu zeichnen.

### Komfortfunktionen

Dieses Beispiel verwendet zwei Komfortfunktionen, die kurz betrachtet werden sollten, um den Rest des Codes klarer zu gestalten.

#### Auswahl einer Farbe für jede Berührung

Um das Zeichnen jeder Berührung unterschiedlich aussehen zu lassen, verwenden wir die `colorForTouch()`-Funktion, um eine Farbe basierend auf der eindeutigen Kennung der Berührung auszuwählen. Diese Kennung ist eine undurchsichtige Zahl, aber wir können zumindest darauf vertrauen, dass sie sich zwischen den derzeit aktiven Berührungen unterscheidet.

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

Das Ergebnis dieser Funktion ist ein String, der beim Aufrufen von {{HTMLElement("canvas")}}-Funktionen zur Festlegung von Zeichenfarben verwendet werden kann. Zum Beispiel ist der resultierende String für einen [`Touch.identifier`](/de/docs/Web/API/Touch/identifier)-Wert von 10 "#a31".

#### Kopieren eines Berührungsobjekts

Einige Browser (wie mobile Safari) verwenden zwischen Events dieselben Berührungsobjekte, daher ist es am besten, die Eigenschaften zu kopieren, die Sie interessieren, anstatt das gesamte Objekt zu referenzieren.

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

#### Zeigen, was vor sich geht

```js
function log(msg) {
  const container = document.getElementById("log");
  container.textContent = `${msg} \n${container.textContent}`;
}
```

### Resultat

Sie können dieses Beispiel auf mobilen Geräten testen, indem Sie das Feld unten berühren.

{{EmbedLiveSample('Example','100%', 900)}}

> [!NOTE]
> Allgemein gesagt, wird das Beispiel auf Plattformen funktionieren, die Touch-Events bereitstellen. Sie können dies auf Desktop-Plattformen testen, die solche Ereignisse simulieren können:
>
> - In Firefox aktivieren Sie die "Touch-Simulation" im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#toggling-responsive-design-mode) (möglicherweise müssen Sie die Seite neu laden).
> - In Chrome verwenden Sie den [Gerätemodus](https://developer.chrome.com/docs/devtools/device-mode/) und setzen den [Gerätetyp](https://developer.chrome.com/docs/devtools/device-mode/#type) auf einen, der Touch-Events sendet.

## Zusätzliche Tipps

Dieser Abschnitt bietet zusätzliche Tipps zur Behandlung von Touch-Events in Ihrer Webanwendung.

### Umgang mit Klicks

Da das Aufrufen von `preventDefault()` bei einem [`touchstart`](/de/docs/Web/API/Element/touchstart_event)- oder dem ersten [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignis einer Serie die entsprechenden Maus-Ereignisse daran hindert, ausgelöst zu werden, ist es üblich, `preventDefault()` beim `touchmove` anstatt beim `touchstart` aufzurufen. Dadurch können Maus-Ereignisse weiterhin ausgelöst werden und Dinge wie Links funktionieren weiterhin. Alternativ haben einige Frameworks Touch-Events erneut als Maus-Ereignisse ausgelöst, um denselben Zweck zu erfüllen. (Dieses Beispiel ist vereinfacht und kann zu seltsamem Verhalten führen. Es ist nur als ein Leitfaden gedacht.)

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

Eine Technik, um Dinge wie `pinchZoom` auf einer Seite zu verhindern, besteht darin, `preventDefault()` bei der zweiten Berührung in einer Serie aufzurufen. Dieses Verhalten ist in der Touch-Events-Spezifikation nicht gut definiert und führt zu unterschiedlichem Verhalten in verschiedenen Browsern (z.B. wird iOS das Zoomen verhindern, aber weiterhin mit beiden Fingern scrollen lassen; Android wird das Zoomen erlauben, aber nicht das Scrollen; Opera und Firefox verhindern derzeit alle Scroll- und Zoomaktionen). Derzeit wird nicht empfohlen, sich in diesem Fall auf ein bestimmtes Verhalten zu verlassen, sondern eher auf das Meta-Viewport, um das Zoomen zu verhindern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Touch-Events sind typischerweise auf Geräten mit Touchscreen verfügbar, aber viele Browser machen die Touch-Events-API auf allen Desktop-Geräten, auch denen mit Touchscreen, nicht verfügbar.

Der Grund dafür ist, dass einige Websites die Verfügbarkeit von Teilen der Touch-Events-API als Indikator dafür verwenden, dass der Browser auf einem mobilen Gerät läuft. Wenn die Touch-Events-API verfügbar ist, nehmen diese Websites an, dass es sich um ein mobiles Gerät handelt, und bieten mobiloptimierte Inhalte an. Dies kann dann zu einer schlechten Erfahrung für Benutzer von Desktop-Geräten führen, die über Touchscreens verfügen.

Um sowohl Touch- als auch Maus-Unterstützung auf allen Gerätetypen zu bieten, verwenden Sie stattdessen [Pointer-Events](/de/docs/Web/API/Pointer_events).

{{Compat}}
