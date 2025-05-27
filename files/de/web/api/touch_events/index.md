---
title: Touch events
slug: Web/API/Touch_events
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{DefaultAPISidebar("Touch Events")}}

Um qualitativ hochwertige Unterstützung für berührungsbasierte Benutzeroberflächen zu bieten, ermöglichen Touch-Events die Interpretation von Finger- (oder Stylus-) Aktivitäten auf Touchscreens oder Trackpads.

Die Touch-Events-Schnittstellen sind relativ niedrigstufige APIs, die zur Unterstützung anwendungsspezifischer Multi-Touch-Interaktionen, wie einer Zwei-Finger-Geste, verwendet werden können. Eine Multi-Touch-Interaktion beginnt, wenn ein Finger (oder Stylus) die Kontaktoberfläche erstmals berührt. Andere Finger können daraufhin die Oberfläche berühren und optional über die Touch-Oberfläche bewegt werden. Die Interaktion endet, wenn die Finger von der Oberfläche entfernt werden. Während dieser Interaktion erhält eine Anwendung Touch-Events während der Start-, Bewegungs- und Endphasen.

Touch-Events ähneln Maus-Events, mit dem Unterschied, dass sie gleichzeitige Berührungen an verschiedenen Stellen auf der Touch-Oberfläche unterstützen. Die [`TouchEvent`](/de/docs/Web/API/TouchEvent)-Schnittstelle kapselt alle aktuell aktiven Berührungspunkte. Die [`Touch`](/de/docs/Web/API/Touch)-Schnittstelle, die einen einzelnen Berührungspunkt darstellt, enthält Informationen wie die Position des Berührungspunkts relativ zum Browser-Viewport.

## Definitionen

- Oberfläche
  - : Die berührungsempfindliche Oberfläche. Dies kann ein Bildschirm oder ein Trackpad sein.
- Berührungspunkt
  - : Ein Punkt des Kontakts mit der Oberfläche. Dies kann ein Finger (oder Ellenbogen, Ohr, Nase, was auch immer, aber typischerweise ein Finger) oder ein Stylus sein.

## Schnittstellen

- [`TouchEvent`](/de/docs/Web/API/TouchEvent)
  - : Repräsentiert ein Ereignis, das auftritt, wenn sich der Zustand der Berührungen auf der Oberfläche ändert.
- [`Touch`](/de/docs/Web/API/Touch)
  - : Stellt einen einzelnen Kontaktpunkt zwischen dem Benutzer und der Berührungsoberfläche dar.
- [`TouchList`](/de/docs/Web/API/TouchList)
  - : Stellt eine Gruppe von Berührungen dar; dies wird verwendet, wenn der Benutzer zum Beispiel mehrere Finger gleichzeitig auf der Oberfläche hat.

## Beispiel

Dieses Beispiel verfolgt mehrere Berührungspunkte gleichzeitig und ermöglicht es dem Benutzer, in einem {{HTMLElement("canvas")}} mit mehr als einem Finger gleichzeitig zu zeichnen. Es funktioniert nur in einem Browser, der Touch-Events unterstützt.

> [!NOTE]
> Im folgenden Text wird der Begriff "Finger" verwendet, um den Kontakt mit der Oberfläche zu beschreiben, aber es könnte natürlich auch ein Stylus oder eine andere Kontaktmethode sein.

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

### Einrichten der Ereignis-Handler

Wenn die Seite geladen wird, wird die unten gezeigte Funktion `startup()` aufgerufen. Diese richtet alle Event-Listener für unser {{HTMLElement("canvas")}}-Element ein, sodass wir die Touch-Events beim Eintreten behandeln können.

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

#### Verfolgen neuer Berührungen

Wir werden die in Bearbeitung befindlichen Berührungen verfolgen.

```js
const ongoingTouches = [];
```

Wenn ein [`touchstart`](/de/docs/Web/API/Element/touchstart_event)-Ereignis auftritt, das anzeigt, dass eine neue Berührung auf der Oberfläche erfolgt, wird die untenstehende `handleStart()`-Funktion aufgerufen.

```js
function handleStart(evt) {
  evt.preventDefault();
  log("touchstart.");
  const el = document.getElementById("canvas");
  const ctx = el.getContext("2d");
  const touches = evt.changedTouches;

  for (const [i, touch] of touches.entries()) {
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

Diese ruft [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf, um zu verhindern, dass der Browser das Touch-Event weiter verarbeitet (dies verhindert auch, dass ein Maus-Event zusätzlich geliefert wird). Anschließend holen wir den Kontext und ziehen die Liste der geänderten Berührungspunkte aus der [`TouchEvent.changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches)-Eigenschaft des Ereignisses heraus.

Danach iterieren wir über alle [`Touch`](/de/docs/Web/API/Touch)-Objekte in der Liste, schieben sie in ein Array aktiver Berührungspunkte und zeichnen den Startpunkt als kleinen Kreis; wir verwenden eine 4-Pixel breite Linie, sodass ein Kreis mit einem Radius von 4 Pixeln sauber angezeigt wird.

#### Zeichnen, während sich die Berührungen bewegen

Jedes Mal, wenn sich ein oder mehrere Finger bewegen, wird ein [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignis ausgelöst, woraufhin unsere `handleMove()`-Funktion aufgerufen wird. Ihre Aufgabe in diesem Beispiel ist es, die zwischengespeicherten Berührungsinformationen zu aktualisieren und eine Linie von der vorherigen Position zur aktuellen Position jeder Berührung zu zeichnen.

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

Auch hier iterieren wir über die geänderten Berührungen, aber wir suchen in unserem zwischengespeicherten Berührungsinformationsarray nach den vorherigen Informationen jeder Berührung, um den Startpunkt für jedes neue Liniensegment der Berührung zu bestimmen. Dies erfolgt durch Betrachten der [`Touch.identifier`](/de/docs/Web/API/Touch/identifier)-Eigenschaft jeder Berührung. Diese Eigenschaft ist eine eindeutige Ganzzahl für jede Berührung und bleibt während der Dauer des Kontakts jedes Fingers mit der Oberfläche für jedes Ereignis konsistent.

Dies ermöglicht es uns, die Koordinaten der vorherigen Position jeder Berührung zu erhalten und die entsprechenden Kontextmethoden zu verwenden, um ein Liniensegment zu zeichnen, das die beiden Positionen verbindet.

Nach dem Zeichnen der Linie rufen wir [`Array.splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) auf, um die vorherigen Informationen über den Berührungspunkt mit den aktuellen Informationen im `ongoingTouches`-Array zu ersetzen.

#### Bearbeitung des Endes einer Berührung

Wenn der Benutzer einen Finger von der Oberfläche hebt, wird ein [`touchend`](/de/docs/Web/API/Element/touchend_event)-Ereignis gesendet. Wir behandeln dies, indem wir die untenstehende `handleEnd()`-Funktion aufrufen. Ihre Aufgabe ist es, das letzte Liniensegment für jede beendete Berührung zu zeichnen und den Berührungspunkt aus der Liste der laufenden Berührungen zu entfernen.

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

Dies ist der vorherigen Funktion sehr ähnlich; die einzigen wirklichen Unterschiede sind, dass wir ein kleines Quadrat zeichnen, um das Ende zu markieren, und dass wir, wenn wir [`Array.splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) aufrufen, den alten Eintrag aus der laufenden Berührungsliste entfernen, ohne die aktualisierten Informationen hinzuzufügen. Das Ergebnis ist, dass wir diesen Berührungspunkt nicht mehr verfolgen.

#### Umgang mit abgebrochenen Berührungen

Wenn sich der Finger des Benutzers in die Browser-Benutzeroberfläche bewegt oder die Berührung anderweitig abgebrochen werden muss, wird das [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event)-Ereignis gesendet, und wir rufen die untenstehende `handleCancel()`-Funktion auf.

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

Da die Idee darin besteht, die Berührung sofort abzubrechen, entfernen wir sie aus der laufenden Berührungsliste, ohne ein letztes Liniensegment zu zeichnen.

### Hilfsfunktionen

Dieses Beispiel verwendet zwei Hilfsfunktionen, die kurz betrachtet werden sollten, um den Rest des Codes klarer zu machen.

#### Auswählen einer Farbe für jede Berührung

Um das Zeichnen jeder Berührung unterschiedlich aussehen zu lassen, wird die Funktion `colorForTouch()` verwendet, um eine Farbe basierend auf der eindeutigen Kennung der Berührung auszuwählen. Diese Kennung ist eine undurchsichtige Nummer, aber wir können zumindest darauf vertrauen, dass sie sich zwischen den aktuell aktiven Berührungen unterscheidet.

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

Das Ergebnis dieser Funktion ist eine Zeichenfolge, die beim Aufrufen von {{HTMLElement("canvas")}}-Funktionen zum Setzen von Zeichenfarben verwendet werden kann. Zum Beispiel ergibt sich für einen [`Touch.identifier`](/de/docs/Web/API/Touch/identifier)-Wert von 10 die Zeichenfolge "#a31".

#### Kopieren eines Berührungsobjekts

Einige Browser (zum Beispiel mobiles Safari) verwenden Berührungsobjekte zwischen Ereignissen wieder, daher ist es am besten, die Eigenschaften, die Sie interessieren, zu kopieren, anstatt das gesamte Objekt zu referenzieren.

```js
function copyTouch({ identifier, pageX, pageY }) {
  return { identifier, pageX, pageY };
}
```

#### Finden einer laufenden Berührung

Die Funktion `ongoingTouchIndexById()` unten durchläuft das `ongoingTouches`-Array, um die Berührung mit der gegebenen Kennung zu finden, und gibt dann den Index dieser Berührung im Array zurück.

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

### Ergebnis

Sie können dieses Beispiel auf Mobilgeräten testen, indem Sie die unteren Box berühren.

{{EmbedLiveSample('Example','100%', 900)}}

> [!NOTE]
> Allgemeiner gesagt, wird das Beispiel auf Plattformen funktionieren, die Touch-Events bereitstellen.
> Sie können dies auf Desktop-Plattformen testen, die solche Ereignisse simulieren können:
>
> - In Firefox aktivieren Sie die "Berührungssimulation" im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#toggling-responsive-design-mode) (möglicherweise müssen Sie die Seite neu laden).
> - In Chrome verwenden Sie den [Gerätemodus](https://developer.chrome.com/docs/devtools/device-mode/) und stellen den [Gerätetyp](https://developer.chrome.com/docs/devtools/device-mode/#type) auf einen ein, der Touch-Events sendet.

## Zusätzliche Tipps

Dieser Abschnitt bietet zusätzliche Tipps, wie Sie Touch-Events in Ihrer Webanwendung behandeln können.

### Umgang mit Klicks

Da das Aufrufen von `preventDefault()` bei einem [`touchstart`](/de/docs/Web/API/Element/touchstart_event)- oder dem ersten [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignis einer Serie verhindert, dass die entsprechenden Mausereignisse ausgelöst werden, ist es üblich, `preventDefault()` bei `touchmove` anstelle von `touchstart` aufzurufen. Auf diese Weise können Mausereignisse weiterhin ausgelöst werden, und Dinge wie Links funktionieren weiterhin. Alternativ haben einige Frameworks dazu übergegangen, Touch-Events als Mausereignisse erneut auszulösen, um denselben Zweck zu erreichen. (Dieses Beispiel ist übervereinfacht und kann merkwürdiges Verhalten zur Folge haben. Es ist nur als Leitfaden gedacht.)

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

Eine Technik, um Dinge wie `pinchZoom` auf einer Seite zu verhindern, besteht darin, `preventDefault()` bei der zweiten Berührung einer Serie aufzurufen. Dieses Verhalten ist in der Touch-Events-Spezifikation nicht klar definiert und führt zu unterschiedlichem Verhalten bei verschiedenen Browsern (z. B. wird unter iOS das Zoomen verhindert, aber es bleibt weiterhin möglich, mit beiden Fingern zu scrollen; Android erlaubt das Zoomen, jedoch nicht das Scrollen; Opera und Firefox verhindern derzeit jegliches Scrollen und Zoomen). Momentan wird nicht empfohlen, sich auf ein bestimmtes Verhalten in diesem Fall zu verlassen, sondern stattdessen auf das Meta-Viewport zu setzen, um das Zoomen zu verhindern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Touch-Events sind typischerweise auf Geräten mit Touchscreen verfügbar, aber viele Browser machen die Touch-Events-API auf allen Desktop-Geräten, selbst solchen mit Touchscreens, nicht verfügbar.

Der Grund dafür ist, dass einige Websites die Verfügbarkeit von Teilen der Touch-Events-API als Indikator dafür verwenden, dass der Browser auf einem mobilen Gerät ausgeführt wird. Wenn die Touch-Events-API verfügbar ist, nehmen diese Websites an, dass es sich um ein mobiles Gerät handelt, und liefern mobil-optimierte Inhalte. Dies kann dann für Benutzer von Desktop-Geräten mit Touchscreens zu einer schlechten Erfahrung führen.

Um sowohl Touch als auch Maus auf allen Gerätetypen zu unterstützen, verwenden Sie stattdessen [Pointer-Events](/de/docs/Web/API/Pointer_events).

{{Compat}}
