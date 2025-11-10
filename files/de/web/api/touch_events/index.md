---
title: Touch events
slug: Web/API/Touch_events
l10n:
  sourceCommit: 36761819df2ebdd4e3dcc9ae6007029dec71fac0
---

{{DefaultAPISidebar("Touch Events")}}

Um qualitativ hochwertige Unterstützung für berührungsbasierte Benutzeroberflächen bereitzustellen, bieten Touch-Events die Möglichkeit, Finger- (oder Stylus-) Aktivitäten auf Touchscreens oder Trackpads zu interpretieren.

Die Schnittstellen für Touch-Events sind relativ Low-Level-APIs, die verwendet werden können, um anwendungsspezifische Multi-Touch-Interaktionen wie eine Zwei-Finger-Geste zu unterstützen. Eine Multi-Touch-Interaktion beginnt, wenn ein Finger (oder Stylus) erstmals die Kontaktfläche berührt. Weitere Finger können anschließend die Oberfläche berühren und optional über die Touch-Oberfläche bewegt werden. Die Interaktion endet, wenn die Finger von der Oberfläche entfernt werden. Während dieser Interaktion erhält eine Anwendung Touch-Events während der Start-, Bewegungs- und Endphasen.

Touch-Events ähneln Mausereignissen, unterstützen jedoch gleichzeitige Berührungen an verschiedenen Orten auf der Touch-Oberfläche. Das [`TouchEvent`](/de/docs/Web/API/TouchEvent)-Interface kapselt alle derzeit aktiven Berührungspunkte. Das [`Touch`](/de/docs/Web/API/Touch)-Interface, das einen einzelnen Berührungspunkt darstellt, enthält Informationen wie die Position des Berührungspunkts relativ zur Browseransicht.

## Definitionen

- Oberfläche
  - : Die berührungsempfindliche Oberfläche. Dies kann ein Bildschirm oder ein Trackpad sein.
- Berührungspunkt
  - : Ein Berührungspunkt mit der Oberfläche. Dies kann ein Finger (oder Ellbogen, Ohr, Nase, was auch immer, aber typischerweise ein Finger) oder ein Stylus sein.

## Schnittstellen

- [`TouchEvent`](/de/docs/Web/API/TouchEvent)
  - : Repräsentiert ein Ereignis, das auftritt, wenn sich der Zustand der Berührungen auf der Oberfläche ändert.
- [`Touch`](/de/docs/Web/API/Touch)
  - : Repräsentiert einen einzelnen Berührungspunkt zwischen dem Benutzer und der Touch-Oberfläche.
- [`TouchList`](/de/docs/Web/API/TouchList)
  - : Repräsentiert eine Gruppe von Berührungen; dies wird verwendet, wenn der Benutzer beispielsweise mehrere Finger gleichzeitig auf der Oberfläche hat.

## Beispiele

> [!NOTE]
> Der untenstehende Text verwendet den Begriff "Finger", um den Kontakt mit der Oberfläche zu beschreiben, aber es könnte natürlich auch ein Stylus oder eine andere Kontaktmethode sein.

### Zeichenanwendung

Dieses Beispiel verfolgt mehrere Berührungspunkte gleichzeitig, sodass der Benutzer in einem {{HTMLElement("canvas")}} mit mehr als einem Finger gleichzeitig zeichnen kann. Es funktioniert nur in einem Browser, der Touch-Events unterstützt.

#### Erstellen einer Leinwand

Das HTML besteht aus einem einzigen {{HTMLElement("canvas")}}-Element. Kurven werden als Reaktion auf die Berührungsgesten des Benutzers gezeichnet. Ein Button ist ebenfalls enthalten, um die Leinwand zu löschen.

```html
<canvas id="canvas" width="600" height="600">
  Your browser does not support the canvas element.
</canvas>
<button id="clear">Clear canvas</button>
```

```css
#canvas {
  border: 1px solid black;
  display: block;
}
```

#### Verfolgung neuer Berührungen

Wir werden alle laufenden Berührungen verfolgen und für jede von ihnen Linien zeichnen.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Mapping from the pointerId to the current finger position
const ongoingTouches = new Map();
```

Wenn ein [`touchstart`](/de/docs/Web/API/Element/touchstart_event)-Ereignis auftritt, das anzeigt, dass eine neue Berührung auf der Oberfläche stattgefunden hat, wird die untenstehende `handleStart()`-Funktion aufgerufen.

```js
function handleStart(event) {
  event.preventDefault();

  for (const changedTouch of event.changedTouches) {
    const touch = {
      pageX: changedTouch.pageX,
      pageY: changedTouch.pageY,
      color: colorForTouch(changedTouch),
    };
    ongoingTouches.set(changedTouch.identifier, touch);
    ctx.beginPath();
    ctx.arc(touch.pageX, touch.pageY, 4, 0, 2 * Math.PI, false);
    ctx.fillStyle = touch.color;
    ctx.fill();
  }
}

canvas.addEventListener("touchstart", handleStart);
```

Dies ruft [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf, um den Browser daran zu hindern, das Touch-Ereignis weiter zu verarbeiten (dies verhindert auch, dass ein Mausereignis ebenfalls ausgeliefert wird). Dann erhalten wir den Kontext und ziehen die Liste der geänderten Berührungspunkte aus der [`TouchEvent.changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches)-Eigenschaft des Ereignisses.

Danach iterieren wir über alle [`Touch`](/de/docs/Web/API/Touch)-Objekte in der Liste, fügen sie einem Array von aktiven Berührungspunkten hinzu und zeichnen den Startpunkt für die Zeichnung als kleinen Kreis; wir verwenden eine 4 Pixel breite Linie, sodass ein Kreis mit einem Radius von 4 Pixeln sauber angezeigt wird.

Um die Zeichnung jeder Berührung unterschiedlich aussehen zu lassen, wird die `colorForTouch()`-Funktion verwendet, um basierend auf der einzigartigen Kennung der Berührung eine Farbe zu wählen. Diese Kennung ist eine intransparente Zahl, aber wir können zumindest darauf vertrauen, dass sie sich zwischen den aktuell aktiven Berührungen unterscheidet.

```js
function colorForTouch(touch) {
  const r = touch.identifier % 16;
  const g = Math.floor(touch.identifier / 3) % 16;
  const b = Math.floor(touch.identifier / 7) % 16;
  // convert to hex digits
  return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
}
```

Das Ergebnis dieser Funktion ist ein String, der beim Aufrufen von {{HTMLElement("canvas")}}-Funktionen zum Festlegen von Zeichenfarben verwendet werden kann. Beispielsweise ergibt ein [`Touch.identifier`](/de/docs/Web/API/Touch/identifier)-Wert von 10 den String "#aa3311".

#### Umgang mit dem Ende einer Berührung

Wenn der Benutzer einen Finger von der Oberfläche hebt, wird ein [`touchend`](/de/docs/Web/API/Element/touchend_event)-Ereignis gesendet. Wir behandeln dies durch Aufruf der unten stehenden `handleEnd()`-Funktion. Ihre Aufgabe ist es, das letzte Liniensegment für jede Berührung zu zeichnen, die beendet wurde, und den Berührungspunkt aus der fortlaufenden Berührungskarte zu entfernen.

```js
function handleEnd(event) {
  event.preventDefault();

  for (const changedTouch of event.changedTouches) {
    const touch = ongoingTouches.get(changedTouch.identifier);
    if (!touch) {
      console.error(`End: Could not find touch ${changedTouch.identifier}`);
      continue;
    }
    ctx.lineWidth = 4;
    ctx.fillStyle = touch.color;
    ctx.beginPath();
    ctx.moveTo(touch.pageX, touch.pageY);
    ctx.lineTo(changedTouch.pageX, changedTouch.pageY);
    ctx.fillRect(changedTouch.pageX - 4, changedTouch.pageY - 4, 8, 8);
    ongoingTouches.delete(changedTouch.identifier);
  }
}

canvas.addEventListener("touchend", handleEnd);
```

Dies ist der vorherigen Funktion sehr ähnlich; die einzigen wirklichen Unterschiede bestehen darin, dass wir ein kleines Quadrat zeichnen, um das Ende zu markieren und dass wir beim Aufruf von [`Map.delete()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/delete) den alten Eintrag aus der fortlaufenden Berührungskarte entfernen, ohne die aktualisierten Informationen hinzuzufügen. Das Ergebnis ist, dass wir diesen Berührungspunkt nicht mehr verfolgen.

#### Umgang mit abgebrochenen Berührungen

Wenn der Finger des Benutzers in die Browser-UI wandert oder die Berührung aus einem anderen Grund abgebrochen werden muss, wird das [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event)-Ereignis gesendet, und wir rufen die untenstehende `handleCancel()`-Funktion auf.

```js
function handleCancel(event) {
  event.preventDefault();

  for (const changedTouch of event.changedTouches) {
    if (!ongoingTouches.has(changedTouch.identifier)) {
      console.error(`Cancel: Could not find touch ${changedTouch.identifier}`);
      continue;
    }
    ongoingTouches.delete(changedTouch.identifier);
  }
}

canvas.addEventListener("touchcancel", handleCancel);
```

Da die Idee darin besteht, die Berührung sofort abzubrechen, entfernen wir sie aus der fortlaufenden Berührungskarte ohne ein letztes Liniensegment zu zeichnen.

#### Zeichnen beim Bewegen der Berührungen

Jedes Mal, wenn sich ein oder mehrere Finger bewegen, wird ein [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignis ausgeliefert, was dazu führt, dass unsere `handleMove()`-Funktion aufgerufen wird. Ihre Verantwortung in diesem Beispiel besteht darin, die zwischengespeicherten Berührungsinformationen zu aktualisieren und eine Linie von der vorherigen Position zur aktuellen Position jeder Berührung zu zeichnen.

```js
function handleMove(event) {
  event.preventDefault();

  for (const changedTouch of event.changedTouches) {
    const touch = ongoingTouches.get(changedTouch.identifier);

    if (!touch) {
      console.error(`Move: Could not find touch ${changedTouch.identifier}`);
      continue;
    }

    ctx.beginPath();
    ctx.moveTo(touch.pageX, touch.pageY);
    ctx.lineTo(changedTouch.pageX, changedTouch.pageY);
    ctx.lineWidth = 4;
    ctx.strokeStyle = touch.color;
    ctx.stroke();

    const newTouch = {
      pageX: changedTouch.pageX,
      pageY: changedTouch.pageY,
      color: touch.color,
    };

    ongoingTouches.set(changedTouch.identifier, newTouch);
  }
}

canvas.addEventListener("touchmove", handleMove);
```

Dies iteriert auch über die geänderten Berührungen, sucht jedoch in unserem zwischengespeicherten Informationsarray nach den vorherigen Informationen zu jeder Berührung, um den Startpunkt für das neue Liniensegment jeder Berührung zu bestimmen. Dies erfolgt, indem die [`Touch.identifier`](/de/docs/Web/API/Touch/identifier)-Eigenschaft jeder Berührung betrachtet wird. Diese Eigenschaft ist eine eindeutige Ganzzahl für jede Berührung und bleibt während der Dauer des Kontakts jedes Fingers mit der Oberfläche für jedes Ereignis konsistent.

Dies ermöglicht es uns, die Koordinaten der vorherigen Position jeder Berührung zu erhalten und die entsprechenden Kontextmethoden zu verwenden, um ein Liniensegment zu zeichnen, das die beiden Positionen miteinander verbindet.

Nach dem Zeichnen der Linie rufen wir [`Map.set()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/set) auf, um die vorherigen Informationen über den Berührungspunkt durch die aktuellen Informationen in der `touches`-Karte zu ersetzen.

#### Löschbutton

Fügen Sie schließlich eine Löschfunktion hinzu.

```js
document.getElementById("clear").addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
```

### Ergebnis

Sie können dieses Beispiel auf Mobilgeräten testen, indem Sie das Feld unten berühren.

{{EmbedLiveSample('drawing application','100%', 900)}}

> [!NOTE]
> Im Allgemeinen wird das Beispiel auf Plattformen funktionieren, die Touch-Events bieten.
> Sie können dies auf Desktop-Plattformen testen, die solche Ereignisse simulieren können:
>
> - Aktivieren Sie in Firefox die "Touch-Simulation" im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#toggling-responsive-design-mode) (es kann sein, dass Sie die Seite neu laden müssen).
> - Verwenden Sie in Chrome den [Gerätemodus](https://developer.chrome.com/docs/devtools/device-mode/) und setzen Sie den [Gerätetyp](https://developer.chrome.com/docs/devtools/device-mode/#type) auf einen, der Touch-Events sendet.

## Zusätzliche Tipps

Dieser Abschnitt bietet zusätzliche Tipps, wie Sie Touch-Events in Ihrer Webanwendung handhaben können.

### Umgang mit Klicks

Da der Aufruf von `preventDefault()` bei einem [`touchstart`](/de/docs/Web/API/Element/touchstart_event)- oder dem ersten [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignis einer Serie die entsprechenden Mausereignisse verhindert, ist es üblich, `preventDefault()` bei `touchmove` anstelle von `touchstart` aufzurufen. Auf diese Weise können Mausereignisse weiterhin ausgelöst werden und Dinge wie Links funktionieren weiter. Alternativ haben einige Frameworks begonnen, Touch-Events als Mausereignisse erneut auszulösen, um denselben Zweck zu erreichen. (Dieses Beispiel ist vereinfacht und kann zu seltsamem Verhalten führen. Es ist nur als Leitfaden gedacht.)

```js
function onTouch(event) {
  event.preventDefault();

  if (
    event.touches.length > 1 ||
    (event.type === "touchend" && event.touches.length > 0)
  )
    return;

  let type;
  let touch;

  switch (event.type) {
    case "touchstart":
      type = "mousedown";
      touch = event.changedTouches[0];
      break;
    case "touchmove":
      type = "mousemove";
      touch = event.changedTouches[0];
      break;
    case "touchend":
      type = "mouseup";
      touch = event.changedTouches[0];
      break;
  }

  const newEvent = new MouseEvent(type, {
    bubbles: true,
    cancelable: true,
    view: event.originalTarget.ownerDocument.defaultView,
    detail: 0,
    screenX: touch.screenX,
    screenY: touch.screenY,
    clientX: touch.clientX,
    clientY: touch.clientY,
    ctrlKey: event.ctrlKey,
    altKey: event.altKey,
    shiftKey: event.shiftKey,
    metaKey: event.metaKey,
    button: 0,
    relatedTarget: null,
  });

  event.originalTarget.dispatchEvent(newEvent);
}
```

### Aufruf von preventDefault() nur bei einer zweiten Berührung

Eine Technik zur Vermeidung von Aktionen wie `pinchZoom` auf einer Seite besteht darin, `preventDefault()` bei der zweiten Berührung einer Serie aufzurufen. Dieses Verhalten ist in der Touch-Events-Spezifikation nicht gut definiert und führt zu unterschiedlichen Verhaltensweisen in verschiedenen Browsern (d.h. iOS wird das Zoomen verhindern, erlaubt jedoch das Scrollen mit beiden Fingern; Android erlaubt Zoomen, jedoch nicht das Scrollen; Opera und Firefox verhindern derzeit alle Scroll- und Zoomvorgänge.) Derzeit wird nicht empfohlen, sich auf ein bestimmtes Verhalten in diesem Fall zu verlassen, sondern vielmehr auf das Meta Viewport, um das Zoomen zu verhindern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Touch-Events sind in der Regel auf Geräten mit Touchscreen verfügbar, aber viele Browser machen die Touch-Events-API auf allen Desktop-Geräten, auch auf solchen mit Touchscreens, nicht verfügbar.

Der Grund dafür ist, dass einige Websites die Verfügbarkeit von Teilen der Touch-Events-API als Indikator dafür verwenden, dass der Browser auf einem mobilen Gerät läuft. Wenn die Touch-Events-API verfügbar ist, gehen diese Websites davon aus, dass es sich um ein mobiles Gerät handelt und liefern mobil optimierte Inhalte. Dies kann dann zu einer schlechten Benutzererfahrung für Nutzer von Desktop-Geräten mit Touchscreens führen.

Um sowohl Touch- als auch Maus-Eingaben auf allen Gerätetypen zu unterstützen, verwenden Sie stattdessen [Pointer-Events](/de/docs/Web/API/Pointer_events).

{{Compat}}
