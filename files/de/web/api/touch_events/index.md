---
title: Touch events
slug: Web/API/Touch_events
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{DefaultAPISidebar("Touch Events")}}

Um hochwertige Unterstützung für berührungsbasierte Benutzeroberflächen bereitzustellen, bieten Touch-Events die Fähigkeit, die Aktivität von Fingern (oder Stiften) auf Touchscreens oder Trackpads zu interpretieren.

Die Touch-Events-Schnittstellen sind relativ niedrigstufige APIs, die verwendet werden können, um anwendungsspezifische Multi-Touch-Interaktionen wie eine Zwei-Finger-Geste zu unterstützen. Eine Multi-Touch-Interaktion beginnt, wenn ein Finger (oder Stift) erstmals die Kontaktfläche berührt. Andere Finger können anschließend die Oberfläche berühren und sich optional über die Touch-Oberfläche bewegen. Die Interaktion endet, wenn die Finger von der Oberfläche entfernt werden. Während dieser Interaktion empfängt eine Anwendung Touch-Events während der Start-, Bewegungs- und Endphasen.

Touch-Events sind den Maus-Events ähnlich, unterstützen jedoch gleichzeitige Berührungen an verschiedenen Positionen auf der Touch-Oberfläche. Die [`TouchEvent`](/de/docs/Web/API/TouchEvent)-Schnittstelle kapselt alle aktuell aktiven Berührungspunkte. Die [`Touch`](/de/docs/Web/API/Touch)-Schnittstelle, die einen einzelnen Berührungspunkt darstellt, enthält Informationen wie die Position des Berührungspunkts relativ zur Browser-Ansicht.

## Definitionen

- Oberfläche
  - : Die berührungsempfindliche Oberfläche. Dies kann ein Bildschirm oder Trackpad sein.
- Berührungspunkt
  - : Ein Kontaktpunkt mit der Oberfläche. Dies kann ein Finger (oder Ellbogen, Ohr, Nase, was auch immer, aber typischerweise ein Finger) oder ein Stift sein.

## Schnittstellen

- [`TouchEvent`](/de/docs/Web/API/TouchEvent)
  - : Repräsentiert ein Ereignis, das auftritt, wenn sich der Zustand der Berührungen auf der Oberfläche ändert.
- [`Touch`](/de/docs/Web/API/Touch)
  - : Repräsentiert einen einzigen Kontaktpunkt zwischen dem Benutzer und der Berührungsoberfläche.
- [`TouchList`](/de/docs/Web/API/TouchList)
  - : Repräsentiert eine Gruppe von Berührungen; dies wird verwendet, wenn der Benutzer beispielsweise mehrere Finger gleichzeitig auf der Oberfläche hat.

## Beispiel

Dieses Beispiel verfolgt mehrere Berührungspunkte gleichzeitig und ermöglicht es dem Benutzer, mit mehr als einem Finger gleichzeitig in einem {{HTMLElement("canvas")}} zu zeichnen. Es funktioniert nur in einem Browser, der Touch-Events unterstützt.

> [!NOTE]
> Der untenstehende Text verwendet den Begriff "Finger", wenn der Kontakt mit der Oberfläche beschrieben wird, aber es könnte natürlich auch ein Stift oder eine andere Kontaktmethode sein.

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

Wenn die Seite geladen wird, wird die unten gezeigte `startup()`-Funktion aufgerufen.
Diese richtet alle Ereignis-Listener für unser {{HTMLElement("canvas")}}-Element ein, damit wir die Touch-Events behandeln können, sobald sie auftreten.

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

#### Nachverfolgen neuer Berührungen

Wir behalten den Überblick über die laufenden Berührungen.

```js
const ongoingTouches = [];
```

Wenn ein [`touchstart`](/de/docs/Web/API/Element/touchstart_event)-Ereignis auftritt, das anzeigt, dass eine neue Berührung auf der Oberfläche erfolgt ist, wird die folgende `handleStart()`-Funktion aufgerufen.

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

Dies ruft [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf, um zu verhindern, dass der Browser das Touch-Event weiterhin verarbeitet (dies verhindert auch, dass ein Maus-Event ebenfalls ausgeliefert wird). Dann holen wir den Kontext und ziehen die Liste der geänderten Berührungspunkte aus der [`TouchEvent.changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches)-Eigenschaft des Ereignisses heraus.

Danach iterieren wir über alle [`Touch`](/de/docs/Web/API/Touch)-Objekte in der Liste, fügen sie zu einem Array aktiver Berührungspunkte hinzu und zeichnen den Startpunkt für das Zeichnen als kleinen Kreis; wir verwenden eine 4-Pixel breite Linie, also wird ein Kreis mit 4-Pixel-Radius sauber angezeigt.

#### Zeichnen, während sich die Berührungen bewegen

Jedes Mal, wenn sich ein oder mehrere Finger bewegen, wird ein [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignis ausgeliefert, was dazu führt, dass unsere `handleMove()`-Funktion aufgerufen wird. Ihre Verantwortung in diesem Beispiel ist es, die zwischengespeicherten Berührungsinformationen zu aktualisieren und eine Linie vom vorherigen zum aktuellen Standpunkt jeder Berührung zu zeichnen.

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

Auch dies iteriert über die geänderten Berührungen, sucht jedoch in unserem zwischengespeicherten Berührungsinformationsarray nach den vorherigen Informationen zu jeder Berührung, um den Startpunkt jedes neuen Liniensegments der Berührung zu bestimmen. Dies geschieht, indem auf jede Berührungseigenschaft [`Touch.identifier`](/de/docs/Web/API/Touch/identifier) geschaut wird. Diese Eigenschaft ist eine eindeutige ganze Zahl für jede Berührung und bleibt während der Dauer des Kontakts jedes Fingers mit der Oberfläche konsistent.

Das ermöglicht es uns, die Koordinaten der vorherigen Position jeder Berührung zu erhalten und die entsprechenden Kontextmethoden zu verwenden, um ein Liniensegment zu zeichnen, das die beiden Positionen verbindet.

Nachdem die Linie gezeichnet wurde, rufen wir [`Array.splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) auf, um die vorherigen Informationen über den Berührungspunkt mit den aktuellen Informationen im `ongoingTouches`-Array zu ersetzen.

#### Umgang mit dem Ende einer Berührung

Wenn der Benutzer einen Finger von der Oberfläche hebt, wird ein [`touchend`](/de/docs/Web/API/Element/touchend_event)-Ereignis gesendet. Wir behandeln dies, indem wir die nachfolgende `handleEnd()`-Funktion aufrufen. Ihre Aufgabe ist es, das letzte Liniensegment für jede Berührung zu zeichnen, die beendet wurde, und den Berührungspunkt aus der laufenden Berührungsliste zu entfernen.

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

Dies ist der vorherigen Funktion sehr ähnlich; die einzigen wirklichen Unterschiede sind, dass wir ein kleines Quadrat zeichnen, um das Ende zu markieren, und dass wir, wenn wir [`Array.splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) aufrufen, den alten Eintrag aus der laufenden Berührungsliste entfernen, ohne die aktualisierten Informationen hinzuzufügen. Das Ergebnis ist, dass wir diesen Berührungspunkt nicht mehr verfolgen.

#### Umgang mit abgebrochenen Berührungen

Wenn der Finger des Benutzers in die Browser-Benutzeroberfläche wandert oder die Berührung anderweitig abgebrochen werden muss, wird das [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event)-Ereignis gesendet und wir rufen die nachfolgende `handleCancel()`-Funktion auf.

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

Da die Idee darin besteht, die Berührung sofort abzubrechen, entfernen wir sie aus der laufenden Berührungsliste, ohne ein letztes Liniensegment zu zeichnen.

### Hilfsfunktionen

Dieses Beispiel verwendet zwei Hilfsfunktionen, die kurz betrachtet werden sollten, um den restlichen Code verständlicher zu machen.

#### Auswählen einer Farbe für jede Berührung

Um das Zeichnen jeder Berührung unterschiedlich aussehen zu lassen, wird die Funktion `colorForTouch()` verwendet, um basierend auf der eindeutigen Identifikationsnummer der Berührung eine Farbe auszuwählen.
Diese Kennung ist eine undurchsichtige Zahl, aber wir können zumindest darauf vertrauen, dass sie sich zwischen den derzeit aktiven Berührungen unterscheidet.

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

Das Ergebnis dieser Funktion ist ein String, der bei Aufrufen von {{HTMLElement("canvas")}}-Funktionen verwendet werden kann, um Zeichnungsfarben festzulegen.
Zum Beispiel ergibt sich aus einem [`Touch.identifier`](/de/docs/Web/API/Touch/identifier)-Wert von 10 der resultierende String "#a31".

#### Kopieren eines Berührungsobjekts

Einige Browser (z.B. mobiles Safari) verwenden Berührungsobjekte zwischen Ereignissen erneut, daher ist es am besten, die Eigenschaften zu kopieren, die Sie interessieren, anstatt das gesamte Objekt zu referenzieren.

```js
function copyTouch({ identifier, pageX, pageY }) {
  return { identifier, pageX, pageY };
}
```

#### Finden einer laufenden Berührung

Die `ongoingTouchIndexById()`-Funktion unten durchsucht das `ongoingTouches`-Array, um die Berührung zu finden, die der gegebenen Kennung entspricht und gibt dann den Index dieser Berührung im Array zurück.

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

Sie können dieses Beispiel auf mobilen Geräten testen, indem Sie das Feld unten berühren.

{{EmbedLiveSample('Example','100%', 900)}}

> [!NOTE]
> Allgemeiner funktioniert das Beispiel auf Plattformen, die Touch-Events bereitstellen.
> Sie können dies auf Desktop-Plattformen testen, die solche Ereignisse simulieren können:
>
> - In Firefox aktivieren Sie "Touch-Simulation" im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#toggling-responsive-design-mode) (möglicherweise müssen Sie die Seite neu laden).
> - In Chrome verwenden Sie den [Gerätemodus](https://developer.chrome.com/docs/devtools/device-mode/) und stellen den [Gerätetyp](https://developer.chrome.com/docs/devtools/device-mode/#type) auf einen ein, der Touch-Events sendet.

## Zusätzliche Tipps

Dieser Abschnitt bietet zusätzliche Tipps zum Umgang mit Touch-Events in Ihrer Webanwendung.

### Umgang mit Klicks

Da der Aufruf von `preventDefault()` bei einem [`touchstart`](/de/docs/Web/API/Element/touchstart_event)- oder dem ersten [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignis einer Serie die entsprechenden Mausereignisse daran hindert, ausgelöst zu werden, ist es üblich, `preventDefault()` bei `touchmove` statt `touchstart` aufzurufen. Auf diese Weise können Mausereignisse weiterhin ausgelöst werden und Dinge wie Links funktionieren weiterhin. Alternativ haben einige Frameworks begonnen, Touch-Events als Mausereignisse für den gleichen Zweck neu auszulösen. (Dieses Beispiel ist übervereinfacht und kann zu merkwürdigem Verhalten führen. Es ist nur als Leitfaden gedacht.)

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

Eine Technik, um Dinge wie `pinchZoom` auf einer Seite zu verhindern, besteht darin, `preventDefault()` bei der zweiten Berührung in einer Serie aufzurufen. Dieses Verhalten ist in der Spezifikation für Touch-Events nicht gut definiert und führt zu verschiedenen Verhalten bei verschiedenen Browsern (d.h. iOS verhindert das Zoomen, erlaubt aber weiterhin ein Scrollen mit beiden Fingern; Android erlaubt Zoomen, aber nicht Scrollen; Opera und Firefox verhindern derzeit jegliches Scrollen und Zoomen.) Derzeit wird nicht empfohlen, sich in diesem Fall auf ein bestimmtes Verhalten zu verlassen, sondern auf den Meta-Viewport, um das Zoomen zu verhindern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Touch-Events sind typischerweise auf Geräten mit Touchscreen verfügbar, aber viele Browser machen die Touch-Events-API auf allen Desktops nicht verfügbar, selbst auf denen mit Touchscreens.

Der Grund dafür ist, dass einige Websites die Verfügbarkeit von Teilen der Touch-Events-API als Indikator nutzen, dass der Browser auf einem mobilen Gerät läuft. Wenn die Touch-Events-API verfügbar ist, gehen diese Websites davon aus, dass es sich um ein mobiles Gerät handelt und liefern mobile-optimierten Inhalt. Dies kann dann ein schlechtes Erlebnis für Benutzer von Desktops mit Touchscreens verursachen.

Um sowohl Touch als auch Maus auf allen Gerätetypen zu unterstützen, verwenden Sie stattdessen [Pointer Events](/de/docs/Web/API/Pointer_events).

{{Compat}}
