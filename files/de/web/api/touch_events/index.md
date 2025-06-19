---
title: Touch events
slug: Web/API/Touch_events
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{DefaultAPISidebar("Touch Events")}}

Um eine qualitativ hochwertige Unterstützung für berührungsbasierte Benutzeroberflächen bereitzustellen, bieten Touch-Events die Möglichkeit, Finger- (oder Stylus-) Aktivitäten auf Touchscreens oder Trackpads zu interpretieren.

Die Touch-Event-Schnittstellen sind relativ niedrigstufige APIs, die verwendet werden können, um anwendungsspezifische Multi-Touch-Interaktionen wie eine Zwei-Finger-Geste zu unterstützen. Eine Multi-Touch-Interaktion beginnt, wenn ein Finger (oder ein Stylus) die Kontaktfläche zum ersten Mal berührt. Andere Finger können anschließend die Oberfläche berühren und optional über die Touch-Oberfläche bewegt werden. Die Interaktion endet, wenn die Finger von der Oberfläche entfernt werden. Während dieser Interaktion empfängt eine Anwendung Touch-Events während der Start-, Bewegungs- und Endphase.

Touch-Events sind ähnlich wie Mausereignisse, außer dass sie gleichzeitige Berührungen an verschiedenen Stellen der Berührungsoberfläche unterstützen. Die [`TouchEvent`](/de/docs/Web/API/TouchEvent)-Schnittstelle kapselt alle aktuell aktiven Berührungspunkte. Die [`Touch`](/de/docs/Web/API/Touch)-Schnittstelle, die einen einzelnen Berührungspunkt darstellt, enthält Informationen wie die Position des Berührungspunkts relativ zum Browser-Viewport.

## Definitionen

- Oberfläche
  - : Die berührungsempfindliche Oberfläche. Dies kann ein Bildschirm oder ein Trackpad sein.
- Berührungspunkt
  - : Ein Kontaktpunkt mit der Oberfläche. Dies kann ein Finger (oder Ellbogen, Ohr, Nase, was auch immer, aber typischerweise ein Finger) oder ein Stylus sein.

## Schnittstellen

- [`TouchEvent`](/de/docs/Web/API/TouchEvent)
  - : Stellt ein Ereignis dar, das auftritt, wenn sich der Status der Berührungen auf der Oberfläche ändert.
- [`Touch`](/de/docs/Web/API/Touch)
  - : Repräsentiert einen einzelnen Kontaktpunkt zwischen dem Benutzer und der Berührungsoberfläche.
- [`TouchList`](/de/docs/Web/API/TouchList)
  - : Stellt eine Gruppe von Berührungen dar; dies wird verwendet, wenn der Benutzer zum Beispiel mehrere Finger gleichzeitig auf der Oberfläche hat.

## Beispiel

Dieses Beispiel verfolgt mehrere Berührungspunkte und ermöglicht es dem Benutzer, mit mehr als einem Finger gleichzeitig in einem {{HTMLElement("canvas")}} zu zeichnen. Es funktioniert nur in einem Browser, der Touch-Events unterstützt.

> [!NOTE]
> Der untenstehende Text verwendet den Begriff "Finger" zur Beschreibung des Kontakts mit der Oberfläche, es könnte jedoch natürlich auch ein Stylus oder eine andere Kontaktmethode sein.

### Ein Canvas erstellen

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

Wenn die Seite geladen wird, wird die unten gezeigte `startup()`-Funktion aufgerufen. Diese richtet alle Event-Listener für unser {{HTMLElement("canvas")}}-Element ein, sodass wir die Touch-Events bei ihrem Auftreten handhaben können.

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

Wir werden die in Bearbeitung befindlichen Berührungen verfolgen.

```js
const ongoingTouches = [];
```

Wenn ein [`touchstart`](/de/docs/Web/API/Element/touchstart_event)-Ereignis auftritt, das anzeigt, dass eine neue Berührung auf der Oberfläche stattgefunden hat, wird die untenstehende Funktion `handleStart()` aufgerufen.

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

Diese ruft [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf, um den Browser davon abzuhalten, das Touch-Event weiterhin zu verarbeiten (dies verhindert auch, dass ein Mausereignis ebenfalls ausgeliefert wird). Anschließend erhalten wir den Kontext und extrahieren die Liste der geänderten Berührungspunkte aus der [`TouchEvent.changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches)-Eigenschaft des Ereignisses.

Danach iterieren wir über alle [`Touch`](/de/docs/Web/API/Touch)-Objekte in der Liste, fügen sie einem Array aktiver Berührungspunkte hinzu und zeichnen den Startpunkt für die Zeichnung als kleinen Kreis; wir verwenden eine 4-Pixel breite Linie, also wird ein Kreis mit 4 Pixel Radius ordentlich angezeigt.

#### Zeichnen, wenn sich die Berührungen bewegen

Jedes Mal, wenn sich ein oder mehrere Finger bewegen, wird ein [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignis ausgeliefert, wodurch unsere `handleMove()`-Funktion aufgerufen wird. Ihre Verantwortung in diesem Beispiel besteht darin, die zwischengespeicherten Berührungsinformationen zu aktualisieren und eine Linie vom vorherigen Standort zur aktuellen Position jeder Berührung zu zeichnen.

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

Dies iteriert ebenfalls über die geänderten Berührungen, sucht jedoch in unserem zwischengespeicherten Berührungsinformationsarray nach den vorherigen Informationen zu jeder Berührung, um den Startpunkt für jedes neue Linienstück der Berührung zu bestimmen. Dies geschieht, indem die [`Touch.identifier`](/de/docs/Web/API/Touch/identifier)-Eigenschaft jeder Berührung angesehen wird. Diese Eigenschaft ist eine eindeutige Ganzzahl für jede Berührung und bleibt während der Dauer des Kontakts jedes Fingers mit der Oberfläche konstant.

Dies ermöglicht es uns, die Koordinaten der vorherigen Position jeder Berührung zu erhalten und die entsprechenden Kontextmethoden zu verwenden, um ein Linienstück zu zeichnen, das die beiden Positionen verbindet.

Nach dem Zeichnen der Linie rufen wir [`Array.splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) auf, um die vorherigen Informationen zum Berührungspunkt im `ongoingTouches`-Array durch die aktuellen Informationen zu ersetzen.

#### Umgang mit dem Ende einer Berührung

Wenn der Benutzer einen Finger von der Oberfläche hebt, wird ein [`touchend`](/de/docs/Web/API/Element/touchend_event)-Ereignis gesendet. Wir handhaben dies, indem wir die untenstehende Funktion `handleEnd()` aufrufen. Ihre Aufgabe besteht darin, das letzte Linienstück für jede beendete Berührung zu zeichnen und den Berührungspunkt aus der Liste der laufenden Berührungen zu entfernen.

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

Dies ist sehr ähnlich wie die vorherige Funktion; die einzigen wirklichen Unterschiede bestehen darin, dass wir ein kleines Quadrat zeichnen, um das Ende zu markieren, und dass, wenn wir [`Array.splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) aufrufen, den alten Eintrag aus der Liste der laufenden Berührungen entfernen, ohne die aktualisierten Informationen hinzuzufügen. Das Ergebnis ist, dass wir diesen Berührungspunkt nicht mehr verfolgen.

#### Umgang mit abgebrochenen Berührungen

Wenn der Finger des Benutzers in die Browser-UI wandert oder die Berührung aus anderen Gründen abgebrochen werden muss, wird das [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event)-Ereignis gesendet, und wir rufen die untenstehende Funktion `handleCancel()` auf.

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

Da die Idee darin besteht, die Berührung sofort abzubrechen, entfernen wir sie aus der Liste der laufenden Berührungen, ohne ein endgültiges Linienstück zu zeichnen.

### Convenience-Funktionen

Dieses Beispiel verwendet zwei Convenience-Funktionen, die kurz angesehen werden sollten, um den Rest des Codes verständlicher zu machen.

#### Eine Farbe für jede Berührung auswählen

Um das Zeichnen jeder Berührung anders aussehen zu lassen, wird die `colorForTouch()`-Funktion verwendet, um basierend auf der eindeutigen Kennung der Berührung eine Farbe auszuwählen. Diese Kennung ist eine undurchsichtige Zahl, aber wir können zumindest darauf vertrauen, dass sie sich zwischen den derzeit aktiven Berührungen unterscheidet.

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

Das Ergebnis dieser Funktion ist ein String, der beim Aufruf von {{HTMLElement("canvas")}}-Funktionen verwendet werden kann, um Farbwerte festzulegen. Beispielsweise wird für einen [`Touch.identifier`](/de/docs/Web/API/Touch/identifier)-Wert von 10 der resultierende String "#a31" sein.

#### Kopieren eines Berührungsobjekts

Einige Browser (mobile Safari, um einen zu nennen) verwenden Berührungsobjekte zwischen Ereignissen erneut, weshalb es am besten ist, die Eigenschaften, die Sie interessieren, zu kopieren, anstatt das gesamte Objekt zu referenzieren.

```js
function copyTouch({ identifier, pageX, pageY }) {
  return { identifier, pageX, pageY };
}
```

#### Finden einer laufenden Berührung

Die Funktion `ongoingTouchIndexById()` unten durchsucht das `ongoingTouches`-Array, um die Berührung mit der gegebenen Kennung zu finden, und gibt dann den Index dieser Berührung im Array zurück.

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
> - In Firefox aktivieren Sie "touch simulation" im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#toggling-responsive-design-mode) (möglicherweise müssen Sie die Seite neu laden).
> - In Chrome verwenden Sie den [Device mode](https://developer.chrome.com/docs/devtools/device-mode/) und legen den [Device type](https://developer.chrome.com/docs/devtools/device-mode/#type) auf einen fest, der Touch-Events sendet.

## Zusätzliche Tipps

Dieser Abschnitt bietet zusätzliche Tipps, wie Sie Touch-Events in Ihrer Webanwendung handhaben können.

### Umgang mit Klicks

Da das Aufrufen von `preventDefault()` bei einem [`touchstart`](/de/docs/Web/API/Element/touchstart_event) oder dem ersten [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignis einer Serie verhindert, dass die entsprechenden Mausereignisse ausgelöst werden, ist es üblich, `preventDefault()` bei `touchmove` statt `touchstart` aufzurufen. Auf diese Weise können Mausereignisse weiterhin ausgelöst werden und Dinge wie Links funktionieren weiter. Alternativ haben einige Frameworks die Angewohnheit, Touch-Events für denselben Zweck erneut als Mausereignisse abzufeuern. (Dieses Beispiel ist vereinfacht und kann zu seltsamem Verhalten führen. Es ist nur als Leitfaden gedacht.)

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

### preventDefault() nur bei einer zweiten Berührung aufrufen

Eine Technik, um Dinge wie `pinchZoom` auf einer Seite zu verhindern, besteht darin, `preventDefault()` bei der zweiten Berührung in einer Serie aufzurufen. Dieses Verhalten ist in der Touch-Events-Spezifikation nicht gut definiert und führt zu unterschiedlichen Verhalten in verschiedenen Browsern (z.B. wird auf iOS das Zoomen verhindert, jedoch nicht das Schwenken mit beiden Fingern erlaubt; Android erlaubt das Zoomen, jedoch nicht das Schwenken; Opera und Firefox verhindern derzeit jegliches Schwenken und Zoomen). Derzeit wird nicht empfohlen, sich auf ein bestimmtes Verhalten in diesem Fall zu verlassen, sondern eher auf das Meta-Viewport-Attribut, um das Zoomen zu verhindern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Touch-Events sind in der Regel auf Geräten mit Touchscreen verfügbar, aber viele Browser machen die Touch-Events-API auf allen Desktop-Geräten nicht verfügbar, selbst auf denen mit Touchscreen.

Der Grund dafür ist, dass einige Webseiten die Verfügbarkeit von Teilen der Touch-Events-API als Anzeichen dafür verwenden, dass der Browser auf einem mobilen Gerät läuft. Wenn die Touch-Events-API verfügbar ist, nehmen diese Webseiten an, dass es sich um ein Mobilgerät handelt, und liefern mobiloptimierte Inhalte aus. Dies kann dann für Benutzer von Desktop-Geräten mit Touchscreen zu einer schlechten Erfahrung führen.

Um sowohl Touch als auch Maus auf allen Gerätetypen zu unterstützen, verwenden Sie stattdessen [Pointer-Events](/de/docs/Web/API/Pointer_events).

{{Compat}}
