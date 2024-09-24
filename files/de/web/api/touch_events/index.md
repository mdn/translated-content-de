---
title: Touch-Ereignisse
slug: Web/API/Touch_events
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{DefaultAPISidebar("Touch Events")}}

Um eine qualitativ hochwertige Unterstützung für touchbasierte Benutzeroberflächen zu bieten, ermöglichen Touch-Ereignisse die Interpretation von Finger- (oder Stift-) Aktivitäten auf Touchscreens oder Trackpads.

Die Touch-Ereignis-Interfaces sind relativ low-level APIs, die verwendet werden können, um anwendungsspezifische Multi-Touch-Interaktionen wie eine Zwei-Finger-Geste zu unterstützen. Eine Multi-Touch-Interaktion beginnt, wenn ein Finger (oder Stift) die Kontaktfläche zum ersten Mal berührt. Weitere Finger können anschließend die Oberfläche berühren und optional über die Touch-Oberfläche bewegt werden. Die Interaktion endet, wenn die Finger von der Oberfläche entfernt werden. Während dieser Interaktion erhält eine Anwendung Touch-Ereignisse während der Start-, Bewegungs- und Endphasen.

Touch-Ereignisse ähneln Maus-Ereignissen, mit dem Unterschied, dass sie gleichzeitige Berührungen an verschiedenen Stellen auf der Touch-Oberfläche unterstützen. Das {{domxref("TouchEvent")}}-Interface kapselt alle aktuell aktiven Berührungspunkte. Das {{domxref("Touch")}}-Interface, das einen einzelnen Berührungspunkt darstellt, enthält Informationen wie die Position des Berührungspunkts relativ zum Browser-Ansichtsfenster.

## Definitionen

- Oberfläche
  - : Die berührungsempfindliche Oberfläche. Dies kann ein Bildschirm oder ein Trackpad sein.
- Berührungspunkt
  - : Ein Punkt des Kontakts mit der Oberfläche. Dies kann ein Finger (oder Ellbogen, Ohr, Nase, was auch immer, aber typischerweise ein Finger) oder ein Stift sein.

## Schnittstellen

- {{domxref("TouchEvent")}}
  - : Repräsentiert ein Ereignis, das auftritt, wenn sich der Zustand der Berührungen auf der Oberfläche ändert.
- {{domxref("Touch")}}
  - : Repräsentiert einen einzelnen Kontaktpunkt zwischen dem Benutzer und der berührungsempfindlichen Oberfläche.
- {{domxref("TouchList")}}
  - : Repräsentiert eine Gruppe von Berührungen; dies wird verwendet, wenn der Benutzer beispielsweise mehrere Finger gleichzeitig auf der Oberfläche hat.

## Beispiel

Dieses Beispiel verfolgt mehrere Berührungspunkte gleichzeitig, sodass der Benutzer mit mehr als einem Finger gleichzeitig in ein {{HTMLElement("canvas")}} zeichnen kann. Es funktioniert nur in einem Browser, der Touch-Ereignisse unterstützt.

> [!NOTE]
> Der unten stehende Text verwendet den Begriff "Finger", wenn er den Kontakt mit der Oberfläche beschreibt, aber es könnte natürlich auch ein Stift oder eine andere Kontaktmethode sein.

### Erstellen einer Leinwand

```html
<canvas id="canvas" width="600" height="600" style="border:solid black 1px;">
  Ihr Browser unterstützt das Canvas-Element nicht.
</canvas>
<br />
Protokoll:
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

Wenn die Seite geladen wird, wird die unten gezeigte Funktion `startup()` aufgerufen.
Dies richtet alle Ereignis-Listener für unser {{HTMLElement("canvas")}}-Element ein, damit wir die Touch-Ereignisse verarbeiten können, sobald sie auftreten.

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

Wir werden die laufenden Berührungen verfolgen.

```js
const ongoingTouches = [];
```

Wenn ein {{domxref("Element/touchstart_event", "touchstart")}}-Ereignis auftritt, das anzeigt, dass eine neue Berührung auf der Oberfläche erfolgt ist, wird die unten stehende Funktion `handleStart()` aufgerufen.

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
    ctx.arc(touches[i].pageX, touches[i].pageY, 4, 0, 2 * Math.PI, false); // ein Kreis am Start
    ctx.fillStyle = color;
    ctx.fill();
  }
}
```

Dies ruft {{domxref("event.preventDefault()")}} auf, um zu verhindern, dass der Browser das Touch-Ereignis weiterverarbeitet (dies verhindert auch, dass ein Maus-Ereignis ebenfalls ausgelöst wird). Dann holen wir den Kontext und ziehen die Liste der geänderten Berührungspunkte aus der {{domxref("TouchEvent.changedTouches")}}-Eigenschaft des Ereignisses.

Danach iterieren wir über alle {{domxref("Touch")}}-Objekte in der Liste, fügen sie einem Array von aktiven Berührungspunkten hinzu und zeichnen den Startpunkt des Zeichnens als kleinen Kreis; wir verwenden eine 4-Pixel-breite Linie, sodass ein Kreis mit einem Radius von 4 Pixeln ordentlich angezeigt wird.

#### Zeichnen, während sich die Berührungen bewegen

Jedes Mal, wenn sich ein oder mehrere Finger bewegen, wird ein {{domxref("Element/touchmove_event", "touchmove")}}-Ereignis ausgelöst, was zur Aufruf unserer `handleMove()`-Funktion führt. Ihre Aufgabe in diesem Beispiel ist es, die zwischengespeicherten Berührungsinformationen zu aktualisieren und eine Linie vom vorherigen Standort zur aktuellen Position jeder Berührung zu zeichnen.

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

      ongoingTouches.splice(idx, 1, copyTouch(touches[i])); // den neuen Berührungsdatensatz austauschen
    } else {
      log("can't figure out which touch to continue");
    }
  }
}
```

Dies iteriert ebenfalls über die geänderten Berührungen, sucht jedoch in unserem zwischengespeicherten Berührungsinformationsarray nach den vorherigen Informationen über jede Berührung, um den Startpunkt für das neue Liniensegment jeder Berührung zu bestimmen, das gezeichnet werden soll. Dies geschieht, indem wir die {{domxref("Touch.identifier")}}-Eigenschaft jeder Berührung betrachten. Diese Eigenschaft ist eine eindeutige ganze Zahl für jede Berührung und bleibt während der Dauer des Fingerkontakts mit der Oberfläche konsistent.

Dies ermöglicht es uns, die Koordinaten der vorherigen Position jeder Berührung zu erhalten und die entsprechenden Kontextmethoden zu verwenden, um ein Liniensegment zu zeichnen, das die beiden Positionen verbindet.

Nach dem Zeichnen der Linie rufen wir [`Array.splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) auf, um die vorherigen Informationen über den Berührungspunkt mit den aktuellen Informationen im `ongoingTouches`-Array zu ersetzen.

#### Handhabung des Endes einer Berührung

Wenn der Benutzer einen Finger von der Oberfläche hebt, wird ein {{domxref("Element/touchend_event", "touchend")}}-Ereignis gesendet. Wir verarbeiten dies, indem wir die unten stehende Funktion `handleEnd()` aufrufen. Ihre Aufgabe ist es, das letzte Liniensegment für jede beendete Berührung zu zeichnen und den Berührungspunkt aus der Liste der laufenden Berührungen zu entfernen.

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
      ctx.fillRect(touches[i].pageX - 4, touches[i].pageY - 4, 8, 8); // und ein Quadrat am Ende
      ongoingTouches.splice(idx, 1); // entfernen; wir sind fertig
    } else {
      log("can't figure out which touch to end");
    }
  }
}
```

Diese Funktion ist der vorherigen sehr ähnlich; die einzigen wirklichen Unterschiede bestehen darin, dass wir ein kleines Quadrat zeichnen, um das Ende zu markieren, und dass wir beim Aufruf von [`Array.splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) den alten Eintrag aus der Liste der laufenden Berührungen entfernen, ohne die aktualisierten Informationen hinzuzufügen. Das Ergebnis ist, dass wir diesen Berührungspunkt nicht mehr nachverfolgen.

#### Handhabung abgebrochener Berührungen

Wenn der Finger des Benutzers in die Browser-Benutzeroberfläche gelangt oder die Berührung aus anderen Gründen abgebrochen werden muss, wird das {{domxref("Element/touchcancel_event", "touchcancel")}}-Ereignis gesendet und wir rufen die unten stehende Funktion `handleCancel()` auf.

```js
function handleCancel(evt) {
  evt.preventDefault();
  log("touchcancel.");
  const touches = evt.changedTouches;

  for (let i = 0; i < touches.length; i++) {
    let idx = ongoingTouchIndexById(touches[i].identifier);
    ongoingTouches.splice(idx, 1); // entfernen; wir sind fertig
  }
}
```

Da die Idee ist, die Berührung sofort abzubrechen, entfernen wir sie aus der Liste der laufenden Berührungen, ohne ein letztes Liniensegment zu zeichnen.

### Komfortfunktionen

Dieses Beispiel verwendet zwei Komfortfunktionen, die kurz betrachtet werden sollten, um den restlichen Code klarer zu machen.

#### Auswählen einer Farbe für jede Berührung

Um das Zeichnen jeder Berührung unterschiedlich aussehen zu lassen, wird die Funktion `colorForTouch()` verwendet, um eine Farbe basierend auf dem eindeutigen Bezeichner der Berührung auszuwählen.
Dieser Bezeichner ist eine undurchsichtige Zahl, aber wir können uns zumindest darauf verlassen, dass er sich zwischen den aktuell aktiven Berührungen unterscheidet.

```js
function colorForTouch(touch) {
  let r = touch.identifier % 16;
  let g = Math.floor(touch.identifier / 3) % 16;
  let b = Math.floor(touch.identifier / 7) % 16;
  r = r.toString(16); // in eine Hexadezimalstelle umwandeln
  g = g.toString(16); // in eine Hexadezimalstelle umwandeln
  b = b.toString(16); // in eine Hexadezimalstelle umwandeln
  const color = `#${r}${g}${b}`;
  return color;
}
```

Das Resultat dieser Funktion ist eine Zeichenkette, die beim Aufrufen von {{HTMLElement("canvas")}}-Funktionen zur Festlegung der Zeichenfarben verwendet werden kann.
Zum Beispiel ergibt sich für einen {{domxref("Touch.identifier")}}-Wert von 10 die Zeichenkette "#a31".

#### Kopieren eines Touch-Objekts

Einige Browser (z. B. mobiles Safari) verwenden Touch-Objekte zwischen Ereignissen wieder, daher ist es am besten, die Eigenschaften, die Sie interessieren, zu kopieren, anstatt das gesamte Objekt zu referenzieren.

```js
function copyTouch({ identifier, pageX, pageY }) {
  return { identifier, pageX, pageY };
}
```

#### Finden einer laufenden Berührung

Die unten stehende Funktion `ongoingTouchIndexById()` durchsucht das Array `ongoingTouches`, um die Berührung zu finden, die mit dem angegebenen Bezeichner übereinstimmt, und gibt dann den Index dieser Berührung in das Array zurück.

```js
function ongoingTouchIndexById(idToFind) {
  for (let i = 0; i < ongoingTouches.length; i++) {
    const id = ongoingTouches[i].identifier;

    if (id === idToFind) {
      return i;
    }
  }
  return -1; // nicht gefunden
}
```

#### Anzeige des Geschehens

```js
function log(msg) {
  const container = document.getElementById("log");
  container.textContent = `${msg} \n${container.textContent}`;
}
```

### Ergebnis

Sie können dieses Beispiel auf mobilen Geräten testen, indem Sie den unten stehenden Kasten berühren.

{{EmbedLiveSample('Example','100%', 900)}}

> [!NOTE]
> Allgemeiner gesagt, funktioniert das Beispiel auf Plattformen, die Touch-Ereignisse bereitstellen.
> Sie können dies auf Desktop-Plattformen testen, die solche Ereignisse simulieren können:
>
> - Aktivieren Sie in Firefox die "Touch-Simulation" im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#toggling-responsive-design-mode) (möglicherweise müssen Sie die Seite neu laden).
> - Verwenden Sie in Chrome den [Gerätemodus](https://developer.chrome.com/docs/devtools/device-mode/) und setzen Sie den [Gerätetyp](https://developer.chrome.com/docs/devtools/device-mode/#type) auf einen, der Touch-Ereignisse sendet.

## Zusätzliche Tipps

Dieser Abschnitt bietet zusätzliche Tipps zum Umgang mit Touch-Ereignissen in Ihrer Webanwendung.

### Umgang mit Klicks

Da das Aufrufen von `preventDefault()` auf einem {{domxref("Element/touchstart_event", "touchstart")}}- oder dem ersten {{domxref("Element/touchmove_event", "touchmove")}}-Ereignis eines Serien eine Ausführung der entsprechenden Maus-Ereignisse verhindert, ist es üblich, `preventDefault()` auf `touchmove` anstelle von `touchstart` aufzurufen. Auf diese Weise können Maus-Ereignisse weiterhin ausgelöst werden und Dinge wie Links funktionieren weiterhin. Alternativ haben einige Frameworks damit begonnen, Touch-Ereignisse als Maus-Ereignisse neu auszulösen, um denselben Zweck zu erfüllen. (Dieses Beispiel ist vereinfacht und kann zu merkwürdigem Verhalten führen. Es ist nur als Leitfaden gedacht.)

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

### Aufruf von preventDefault() nur bei einer zweiten Berührung

Eine Technik, um Dinge wie `pinchZoom` auf einer Seite zu verhindern, besteht darin, `preventDefault()` bei der zweiten Berührung in einer Serie aufzurufen. Dieses Verhalten ist in der Touch-Ereignisse-Spezifikation nicht gut definiert und führt zu unterschiedlichen Verhalten in verschiedenen Browsern (d. h. iOS verhindert Zoom, erlaubt aber weiterhin das Verschieben mit beiden Fingern; Android erlaubt das Zoomen, aber nicht das Verschieben; Opera und Firefox verhindern derzeit sowohl das Verschieben als auch das Zoomen.) Derzeit wird nicht empfohlen, sich auf ein bestimmtes Verhalten in diesem Fall zu verlassen, sondern eher auf das Meta-Viewport, um das Zoomen zu verhindern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Touch-Ereignisse sind typischerweise auf Geräten mit einem Touchscreen verfügbar, aber viele Browser machen die Touch-Ereignis-API auf allen Desktop-Geräten unzugänglich, selbst auf solchen mit Touchscreens.

Der Grund dafür ist, dass einige Websites das Vorhandensein von Teilen der Touch-Ereignis-API als Indikator dafür verwenden, dass der Browser auf einem mobilen Gerät läuft. Wenn die Touch-Ereignis-API verfügbar ist, gehen diese Websites davon aus, dass es sich um ein mobiles Gerät handelt und liefern mobil-optimierten Inhalt. Dies kann dann zu einem schlechten Erlebnis für Benutzer von Desktop-Geräten mit Touchscreens führen.

Um sowohl Touch- als auch Mausunterstützung auf allen Gerätetypen zu bieten, verwenden Sie stattdessen [Pointer-Ereignisse](/de/docs/Web/API/Pointer_events).

{{Compat}}
