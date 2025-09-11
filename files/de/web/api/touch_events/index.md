---
title: Touch events
slug: Web/API/Touch_events
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{DefaultAPISidebar("Touch Events")}}

Um hochwertigen Support für auf Berührungen basierende Benutzeroberflächen bereitzustellen, bieten Touch-Events die Möglichkeit, Finger- (oder Stift-)Aktivitäten auf Touchscreens oder Trackpads zu interpretieren.

Die Touch-Event-Schnittstellen sind relativ niedrige Level-APIs, die verwendet werden können, um anwendungsspezifische Multi-Touch-Interaktionen wie eine Zwei-Finger-Geste zu unterstützen. Eine Multi-Touch-Interaktion beginnt, wenn ein Finger (oder Stift) zuerst die Kontaktfläche berührt. Andere Finger können anschließend die Oberfläche berühren und sich möglicherweise über die Touch-Oberfläche bewegen. Die Interaktion endet, wenn die Finger von der Oberfläche entfernt werden. Während dieser Interaktion empfängt eine Anwendung Touch-Events während der Start-, Bewegungs- und Endphasen.

Touch-Events ähneln Maus-Events, unterstützen jedoch gleichzeitige Berührungen an verschiedenen Stellen der Touch-Oberfläche. Die [`TouchEvent`](/de/docs/Web/API/TouchEvent)-Schnittstelle kapselt alle aktuell aktiven Berührungspunkte. Die [`Touch`](/de/docs/Web/API/Touch)-Schnittstelle, die einen einzelnen Berührungspunkt darstellt, enthält Informationen wie die Position des Berührungspunkts relativ zum Browser-Viewport.

## Definitionen

- Oberfläche
  - : Die berührungsempfindliche Oberfläche. Dies kann ein Bildschirm oder ein Trackpad sein.
- Berührungspunkt
  - : Ein Kontaktpunkt mit der Oberfläche. Dies kann ein Finger (oder Ellbogen, Ohr, Nase, was auch immer, aber typischerweise ein Finger) oder ein Stift sein.

## Schnittstellen

- [`TouchEvent`](/de/docs/Web/API/TouchEvent)
  - : Repräsentiert ein Ereignis, das auftritt, wenn sich der Status der Berührungen auf der Oberfläche ändert.
- [`Touch`](/de/docs/Web/API/Touch)
  - : Repräsentiert einen einzelnen Kontaktpunkt zwischen dem Benutzer und der Touch-Oberfläche.
- [`TouchList`](/de/docs/Web/API/TouchList)
  - : Repräsentiert eine Gruppe von Berührungen; dies wird verwendet, wenn der Benutzer beispielsweise mehrere Finger gleichzeitig auf der Oberfläche hat.

## Beispiel

Dieses Beispiel verfolgt mehrere Berührungspunkte gleichzeitig, sodass der Benutzer in einem {{HTMLElement("canvas")}} mit mehr als einem Finger gleichzeitig zeichnen kann. Es funktioniert nur in einem Browser, der Touch-Events unterstützt.

> [!NOTE]
> Im folgenden Text wird der Begriff "Finger" verwendet, wenn der Kontakt mit der Oberfläche beschrieben wird, aber es könnte natürlich auch ein Stift oder eine andere Kontaktmethode sein.

### Erstellen einer Leinwand

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

### Einrichten der Ereignishandler

Der Code richtet alle Ereignis-Listener für unser {{HTMLElement("canvas")}}-Element ein, damit wir die Touch-Events verarbeiten können, sobald sie auftreten.

```js
const el = document.getElementById("canvas");
el.addEventListener("touchstart", handleStart);
el.addEventListener("touchend", handleEnd);
el.addEventListener("touchcancel", handleCancel);
el.addEventListener("touchmove", handleMove);
```

#### Nachverfolgen neuer Berührungen

Wir werden die laufenden Berührungen im Auge behalten.

```js
const ongoingTouches = [];
```

Wenn ein [`touchstart`](/de/docs/Web/API/Element/touchstart_event)-Ereignis auftritt, das anzeigt, dass eine neue Berührung auf der Oberfläche erfolgt ist, wird die unten stehende Funktion `handleStart()` aufgerufen.

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

Diese ruft [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf, um zu verhindern, dass der Browser das Touch-Ereignis weiterverarbeitet (dies verhindert auch, dass ein Mausereignis ebenfalls ausgelöst wird). Dann holen wir uns den Kontext und ziehen die Liste der geänderten Berührungspunkte aus der [`TouchEvent.changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches)-Eigenschaft des Ereignisses.

Danach iterieren wir über alle [`Touch`](/de/docs/Web/API/Touch)-Objekte in der Liste, fügen sie einem Array aktiver Berührungspunkte hinzu und zeichnen den Startpunkt für die Zeichnung als kleinen Kreis. Wir verwenden eine 4-Pixel breite Linie, daher zeigt ein 4-Pixel Radius-Kreis ordentlich an.

#### Zeichnen, während sich die Berührungen bewegen

Jedes Mal, wenn sich ein oder mehrere Finger bewegen, wird ein [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignis ausgelöst, was dazu führt, dass unsere `handleMove()`-Funktion aufgerufen wird. Ihre Aufgabe besteht in diesem Beispiel darin, die zwischengespeicherten Berührungsinformationen zu aktualisieren und eine Linie von der vorherigen Position zur aktuellen Position jeder Berührung zu zeichnen.

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

Diese durchläuft auch die geänderten Berührungen, aber sie sucht in unserem zwischengespeicherten Berührungsinformationsarray nach den vorherigen Informationen zu jeder Berührung, um den Startpunkt für jedes Berührungselement zu bestimmen, das neu gezeichnet werden soll. Dies geschieht, indem auf die [`Touch.identifier`](/de/docs/Web/API/Touch/identifier)-Eigenschaft jeder Berührung geschaut wird. Diese Eigenschaft ist eine eindeutige Nummer für jede Berührung und bleibt während des Kontakts eines jeden Fingers mit der Oberfläche für jedes Ereignis konsistent.

Dadurch können wir die Koordinaten der vorherigen Position jeder Berührung erhalten und die entsprechenden Kontextmethoden verwenden, um ein Liniensegment zu zeichnen, das die beiden Positionen verbindet.

Nachdem die Linie gezeichnet wurde, rufen wir [`Array.splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) auf, um die vorherigen Informationen über den Berührungspunkt durch die aktuellen Informationen im `ongoingTouches`-Array zu ersetzen.

#### Umgang mit dem Ende einer Berührung

Wenn der Benutzer einen Finger von der Oberfläche hebt, wird ein [`touchend`](/de/docs/Web/API/Element/touchend_event)-Ereignis gesendet. Wir handhaben dies, indem wir die unten stehende Funktion `handleEnd()` aufrufen. Ihre Aufgabe besteht darin, das letzte Liniensegment für jede beendete Berührung zu zeichnen und den Berührungspunkt aus der laufenden Berührungsliste zu entfernen.

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

Dies ist der vorherigen Funktion sehr ähnlich; die einzigen wirklichen Unterschiede bestehen darin, dass wir ein kleines Quadrat zeichnen, um das Ende zu markieren, und dass wir beim Aufruf von [`Array.splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) den alten Eintrag aus der laufenden Berührungsliste entfernen, ohne die aktualisierten Informationen hinzuzufügen. Das Ergebnis ist, dass wir diesen Berührungspunkt nicht mehr nachverfolgen.

#### Umgang mit abgebrochenen Berührungen

Wenn der Finger des Benutzers in die Browser-Benutzeroberfläche gerät oder die Berührung aus einem anderen Grund abgebrochen werden muss, wird das [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event)-Ereignis gesendet, und wir rufen die unten stehende Funktion `handleCancel()` auf.

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

### Komfortfunktionen

Dieses Beispiel verwendet zwei Komfortfunktionen, die kurz betrachtet werden sollten, um den Rest des Codes klarer zu machen.

#### Auswählen einer Farbe für jede Berührung

Um das Zeichnen jeder Berührung anders aussehen zu lassen, wird die Funktion `colorForTouch()` verwendet, um basierend auf der eindeutigen Kennung der Berührung eine Farbe auszuwählen. Diese Kennung ist eine undurchsichtige Nummer, aber wir können zumindest darauf vertrauen, dass sie sich zwischen den aktuell aktiven Berührungen unterscheidet.

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

Das Ergebnis dieser Funktion ist eine Zeichenkette, die beim Aufrufen von {{HTMLElement("canvas")}}-Funktionen verwendet werden kann, um Zeichnungsfarben festzulegen. Beispielsweise ergibt ein [`Touch.identifier`](/de/docs/Web/API/Touch/identifier)-Wert von 10 die Zeichenkette "#aa3311".

#### Kopieren eines Berührungsobjekts

Einige Browser (mobile Safari z.B.) verwenden Berührungsobjekte zwischen Ereignissen erneut, daher ist es am besten, die Eigenschaften zu kopieren, die Ihnen wichtig sind, anstatt das gesamte Objekt zu referenzieren.

```js
function copyTouch({ identifier, pageX, pageY }) {
  return { identifier, pageX, pageY };
}
```

#### Finden einer laufenden Berührung

Die unten stehende Funktion `ongoingTouchIndexById()` durchsucht das `ongoingTouches`-Array, um die Berührung zu finden, die der angegebenen Kennung entspricht, und gibt den Index dieser Berührung im Array zurück.

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

Sie können dieses Beispiel auf mobilen Geräten testen, indem Sie den nachstehenden Kasten berühren.

{{EmbedLiveSample('Example','100%', 900)}}

> [!NOTE]
> Allgemeiner funktioniert das Beispiel auf Plattformen, die Touch-Events bereitstellen.
> Sie können dies auf Desktop-Plattformen testen, die solche Ereignisse simulieren können:
>
> - In Firefox "Touch-Simulation" im [Responsive Design-Modus](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#toggling-responsive-design-mode) aktivieren (möglicherweise müssen Sie die Seite neu laden).
> - In Chrome den [Gerätemodus](https://developer.chrome.com/docs/devtools/device-mode/) verwenden und den [Gerätetyp](https://developer.chrome.com/docs/devtools/device-mode/#type) auf einen einstellen, der Touch-Events sendet.

## Zusätzliche Tipps

Dieser Abschnitt bietet zusätzliche Tipps zum Umgang mit Touch-Events in Ihrer Webanwendung.

### Umgang mit Klicks

Da das Aufrufen von `preventDefault()` bei einem [`touchstart`](/de/docs/Web/API/Element/touchstart_event)- oder dem ersten [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignis einer Serie verhindert, dass die entsprechenden Mausereignisse ausgelöst werden, ist es üblich, `preventDefault()` bei `touchmove` statt `touchstart` aufzurufen. Auf diese Weise können Mausereignisse trotzdem ausgelöst werden und Dinge wie Links funktionieren weiterhin. Alternativ haben einige Frameworks Touch-Events erneut als Mausereignisse ausgelöst, um denselben Zweck zu erreichen. (Dieses Beispiel ist vereinfacht und kann zu seltsamen Verhaltensweisen führen. Es ist nur als Leitfaden gedacht.)

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

### PreventDefault() nur bei einer zweiten Berührung aufrufen

Eine Technik, um Dinge wie `pinchZoom` auf einer Seite zu verhindern, besteht darin, `preventDefault()` bei der zweiten Berührung einer Serie aufzurufen. Dieses Verhalten ist in der Touch-Events-Spezifikation nicht gut definiert und führt zu unterschiedlichem Verhalten in verschiedenen Browsern (d.h. iOS verhindert Zoomen, erlaubt aber weiterhin das Scrollen mit beiden Fingern; Android erlaubt das Zoomen, aber nicht das Scrollen; Opera und Firefox verhindern derzeit alle Scroll- und Zoomeingaben.) Derzeit wird nicht empfohlen, sich auf ein bestimmtes Verhalten in diesem Fall zu verlassen, sondern eher auf das Meta-Viewport-Element, um Zoomen zu verhindern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Touch-Events sind in der Regel auf Geräten mit Touchscreen verfügbar, aber viele Browser machen die Touch-Events-API auf allen Desktop-Geräten unzugänglich, auch auf denen mit Touchscreens.

Der Grund dafür ist, dass einige Websites die Verfügbarkeit von Teilen der Touch-Events-API als Indikator dafür verwenden, dass der Browser auf einem mobilen Gerät ausgeführt wird. Wenn die Touch-Events-API verfügbar ist, nehmen diese Websites an, dass es sich um ein mobiles Gerät handelt und liefern mobil-optimierte Inhalte. Dies kann dann zu einer schlechten Benutzererfahrung für Benutzer von Desktop-Geräten führen, die über Touchscreens verfügen.

Um sowohl Berührungs- als auch Mausereignisse auf allen Gerätetypen zu unterstützen, verwenden Sie [Pointer-Events](/de/docs/Web/API/Pointer_events) stattdessen.

{{Compat}}
