---
title: "Element: auxclick Ereignis"
short-title: auxclick
slug: Web/API/Element/auxclick_event
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef}}

Das **`auxclick`** Ereignis wird bei einem [`Element`](/de/docs/Web/API/Element) ausgelöst, wenn eine nicht-primäre Taste eines Zeigegeräts (jede Maustaste außer der primären, normalerweise links) gedrückt und innerhalb desselben Elements wieder losgelassen wurde.

`auxclick` wird nach den Ereignissen [`mousedown`](/de/docs/Web/API/Element/mousedown_event) und [`mouseup`](/de/docs/Web/API/Element/mouseup_event) in dieser Reihenfolge ausgelöst.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignisbehandlungs-Eigenschaft fest.

```js
addEventListener("auxclick", (event) => {});

onauxclick = (event) => {};
```

## Ereignistyp

Ein [`PointerEvent`](/de/docs/Web/API/PointerEvent). Erbt von [`MouseEvent`](/de/docs/Web/API/MouseEvent).

{{InheritanceDiagram("PointerEvent")}}

> [!NOTE]
> In früheren Versionen der Spezifikation war der Ereignistyp für dieses Ereignis ein [`MouseEvent`](/de/docs/Web/API/MouseEvent), und dies ist immer noch der Typ, der in Firefox und Safari übergeben wird.

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von [`MouseEvent`](/de/docs/Web/API/MouseEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`PointerEvent.altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) {{ReadOnlyInline}} {{experimental_inline}}
  - : Repräsentiert den Winkel zwischen einer Transducer-Achse (einem Zeiger oder Stylus) und der X-Y-Ebene eines Geräteschirms.
- [`PointerEvent.azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) {{ReadOnlyInline}} {{experimental_inline}}
  - : Repräsentiert den Winkel zwischen der Y-Z-Ebene und der Ebene, die sowohl die Transducer-Achse (einem Zeiger oder Stylus) als auch die Y-Achse enthält.
- [`PointerEvent.pointerId`](/de/docs/Web/API/PointerEvent/pointerId) {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für den Zeiger, der das Ereignis verursacht.
- [`PointerEvent.width`](/de/docs/Web/API/PointerEvent/width) {{ReadOnlyInline}}
  - : Die Breite (Größe auf der X-Achse) in CSS-Pixeln der Kontaktgeometrie des Zeigers.
- [`PointerEvent.height`](/de/docs/Web/API/PointerEvent/height) {{ReadOnlyInline}}
  - : Die Höhe (Größe auf der Y-Achse) in CSS-Pixeln der Kontaktgeometrie des Zeigers.
- [`PointerEvent.pressure`](/de/docs/Web/API/PointerEvent/pressure) {{ReadOnlyInline}}
  - : Der normalisierte Druck der Zeigereingabe im Bereich von `0` bis `1`, wobei `0` und `1` den minimalen bzw. maximalen Druck darstellen, den die Hardware erkennen kann.
- [`PointerEvent.tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure) {{ReadOnlyInline}}
  - : Der normalisierte tangentiale Druck der Zeigereingabe (auch bekannt als Fassdruck oder [Zylinderspannung](https://en.wikipedia.org/wiki/Cylinder_stress)) im Bereich von `-1` bis `1`, wobei `0` die neutrale Position der Steuerung ist.
- [`PointerEvent.tiltX`](/de/docs/Web/API/PointerEvent/tiltX) {{ReadOnlyInline}}
  - : Der Ebenenwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der Y-Z-Ebene und der Ebene, die sowohl die Zeigerachse (z.B. eines Stiftes) als auch die Y-Achse enthält.
- [`PointerEvent.tiltY`](/de/docs/Web/API/PointerEvent/tiltY) {{ReadOnlyInline}}
  - : Der Ebenenwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der X-Z-Ebene und der Ebene, die sowohl die Zeigerachse (z.B. eines Stiftes) als auch die X-Achse enthält.
- [`PointerEvent.twist`](/de/docs/Web/API/PointerEvent/twist) {{ReadOnlyInline}}
  - : Die Drehung des Zeigers (z.B. eines Stiftes) im Uhrzeigersinn um seine Hauptachse in Grad, mit einem Wert im Bereich von `0` bis `359`.
- [`PointerEvent.pointerType`](/de/docs/Web/API/PointerEvent/pointerType) {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis verursacht hat (Maus, Stift, Berührung usw.).
- [`PointerEvent.isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary) {{ReadOnlyInline}}
  - : Gibt an, ob der Zeiger den primären Zeiger dieses Zeigertyps darstellt.

## Verhindern von Standardaktionen

Für die überwiegende Mehrheit der Browser, die einen Mittelklick darauf abbilden, einen Link in einem neuen Tab zu öffnen, einschließlich Firefox, ist es möglich, dieses Verhalten zu verhindern, indem Sie [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) innerhalb eines `auxclick`-Ereignishandlers aufrufen.

Wenn Sie `auxclick`-Ereignisse abhorchen, die von Elementen stammen, die keine Eingabe oder Navigation unterstützen, möchten Sie oft andere Standardaktionen explizit verhindern, die der Abwärtsaktion der mittleren Maustaste zugeordnet sind. Unter Windows ist dies üblicherweise der automatische Bildlauf, und unter macOS und Linux ist dies üblicherweise das Einfügen aus der Zwischenablage. Dies kann durch Verhindern des Standardverhaltens des [`mousedown`](/de/docs/Web/API/Element/mousedown_event) oder [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event) Ereignisses geschehen.

Zusätzlich sollten Sie vermeiden, dass nach einem Rechtsklick ein systemeigenes Kontextmenü geöffnet wird. Aufgrund von Zeitunterschieden zwischen Betriebssystemen ist dies ebenfalls kein vermeidbares Standardverhalten von `auxclick`. Stattdessen kann dies durch Verhindern des Standardverhaltens des [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event) Ereignisses erreicht werden.

## Beispiele

In diesem Beispiel definieren wir Funktionen für zwei Ereignishandler — [`onclick`](/de/docs/Web/API/Element/click_event) und `onauxclick`. Ersteres ändert die Hintergrundfarbe des Buttons, während letzteres die Vordergrundfarbe (Text) des Buttons ändert. Sie können die beiden Funktionen auch in Aktion sehen, indem Sie die Demo mit einer Maus mit mehreren Tasten ausprobieren ([Live-Demo auf GitHub ansehen](https://mdn.github.io/dom-examples/auxclick/); außerdem [Quellcode ansehen](https://github.com/mdn/dom-examples/blob/main/auxclick/index.html)).

### JavaScript

```js
let button = document.querySelector("button");
let html = document.querySelector("html");

function random(number) {
  return Math.floor(Math.random() * number);
}

function randomColor() {
  return `rgb(${random(255)} ${random(255)} ${random(255)})`;
}

button.onclick = () => {
  button.style.backgroundColor = randomColor();
};

button.onauxclick = (e) => {
  e.preventDefault();
  button.style.color = randomColor();
};

button.oncontextmenu = (e) => {
  e.preventDefault();
};
```

Beachten Sie, dass zusätzlich zum Erfassen des `auxclick`-Ereignisses mit `onauxclick`, auch das [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event) Ereignis erfasst wird, und [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) für dieses Ereignis aufgerufen wird, um zu verhindern, dass das Kontextmenü erscheint, nachdem die Farbänderung angewandt wurde.

### HTML

```html
<button><h1>Click me!</h1></button>
```

```css hidden
html {
  height: 100%;
  overflow: hidden;
}

body {
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}

button {
  border: 0;
  background-color: white;
  font-size: 8vw;
  display: block;
  width: 100%;
  height: 100%;
}

h1 {
  letter-spacing: 0.5rem;
}
```

{{EmbedLiveSample("Examples", 640, 300)}}

> [!NOTE]
> Wenn Sie eine Dreitasten-Maus verwenden, werden Sie feststellen, dass der `onauxclick`-Handler ausgeführt wird, wenn eine der nicht linken Maustasten geklickt wird (normalerweise inklusive aller "Spezial"-Tasten auf Gaming-Mäusen).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einführung in Ereignisse](/de/docs/Learn/JavaScript/Building_blocks/Events)
- [`click`](/de/docs/Web/API/Element/click_event)
- [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event)
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event)
- [`mousedown`](/de/docs/Web/API/Element/mousedown_event)
- [`mouseup`](/de/docs/Web/API/Element/mouseup_event)
- [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)
- [`pointerup`](/de/docs/Web/API/Element/pointerup_event)
