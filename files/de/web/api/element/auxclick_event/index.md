---
title: "Element: auxclick-Ereignis"
short-title: auxclick
slug: Web/API/Element/auxclick_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`auxclick`**-Ereignis wird bei einem [`Element`](/de/docs/Web/API/Element) ausgelöst, wenn eine Schaltfläche eines Zeigegeräts, die nicht die primäre ist (jedwede Maustaste außer der primären, normalerweise die linke Taste), innerhalb desselben Elements gedrückt und losgelassen wurde.

`auxclick` wird nach den [`mousedown`](/de/docs/Web/API/Element/mousedown_event)- und [`mouseup`](/de/docs/Web/API/Element/mouseup_event)-Ereignissen in dieser Reihenfolge ausgelöst.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("auxclick", (event) => { })

onauxclick = (event) => { }
```

## Ereignistyp

Ein [`PointerEvent`](/de/docs/Web/API/PointerEvent). Leitet sich von [`MouseEvent`](/de/docs/Web/API/MouseEvent) ab.

{{InheritanceDiagram("PointerEvent")}}

> [!NOTE]
> In früheren Versionen der Spezifikation war der Ereignistyp für dieses Ereignis ein [`MouseEvent`](/de/docs/Web/API/MouseEvent). Überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität) für weitere Informationen.

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von [`MouseEvent`](/de/docs/Web/API/MouseEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`PointerEvent.altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) {{ReadOnlyInline}} {{experimental_inline}}
  - : Stellt den Winkel zwischen einer Wandlerachse (einem Zeiger oder Stylus) und der X-Y-Ebene eines Geräteschirms dar.
- [`PointerEvent.azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) {{ReadOnlyInline}} {{experimental_inline}}
  - : Stellt den Winkel zwischen der Y-Z-Ebene und der Ebene, die sowohl die Wandlerachse (ein Zeiger oder Stylus) als auch die Y-Achse enthält, dar.
- [`PointerEvent.pointerId`](/de/docs/Web/API/PointerEvent/pointerId) {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für den Zeiger, der das Ereignis verursacht.
- [`PointerEvent.width`](/de/docs/Web/API/PointerEvent/width) {{ReadOnlyInline}}
  - : Die Breite (Magnitude auf der X-Achse), in CSS-Pixeln, der Kontaktgeometrie des Zeigers.
- [`PointerEvent.height`](/de/docs/Web/API/PointerEvent/height) {{ReadOnlyInline}}
  - : Die Höhe (Magnitude auf der Y-Achse), in CSS-Pixeln, der Kontaktgeometrie des Zeigers.
- [`PointerEvent.pressure`](/de/docs/Web/API/PointerEvent/pressure) {{ReadOnlyInline}}
  - : Der normalisierte Druck der Zeigereingabe im Bereich von `0` bis `1`, wobei `0` und `1` den minimalen und maximalen Druck, den die Hardware erkennen kann, darstellen.
- [`PointerEvent.tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure) {{ReadOnlyInline}}
  - : Der normalisierte tangentiale Druck der Zeigereingabe (auch als Fassdruck oder [Zylinderbelastung](https://en.wikipedia.org/wiki/Cylinder_stress) bekannt) im Bereich von `-1` bis `1`, wobei `0` die neutrale Position der Steuerung ist.
- [`PointerEvent.tiltX`](/de/docs/Web/API/PointerEvent/tiltX) {{ReadOnlyInline}}
  - : Der Ebene-Winkel (in Grad, im Bereich von `-90` bis `90`) zwischen der Y–Z-Ebene und der Ebene, die sowohl die Zeigerachse (z.B. Pen-Stylus) als auch die Y-Achse enthält.
- [`PointerEvent.tiltY`](/de/docs/Web/API/PointerEvent/tiltY) {{ReadOnlyInline}}
  - : Der Ebene-Winkel (in Grad, im Bereich von `-90` bis `90`) zwischen der X–Z-Ebene und der Ebene, die sowohl die Zeigerachse (z.B. Pen-Stylus) als auch die X-Achse enthält.
- [`PointerEvent.twist`](/de/docs/Web/API/PointerEvent/twist) {{ReadOnlyInline}}
  - : Die Drehung des Zeigers (z.B. Pen-Stylus) im Uhrzeigersinn um seine Hauptachse in Grad, mit einem Wert im Bereich von `0` bis `359`.
- [`PointerEvent.pointerType`](/de/docs/Web/API/PointerEvent/pointerType) {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis verursacht hat (Maus, Stift, Touch usw.).
- [`PointerEvent.isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary) {{ReadOnlyInline}}
  - : Gibt an, ob der Zeiger den primären Zeiger dieses Zeigertyps repräsentiert.

## Verhindern von Standardaktionen

Für die überwiegende Mehrheit der Browser, die den Mittelklick dem Öffnen eines Links in einem neuen Tab zuordnen, einschließlich Firefox, ist es möglich, dieses Verhalten zu verhindern, indem man [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) innerhalb eines `auxclick`-Ereignishandlers aufruft.

Wenn Sie für `auxclick`-Ereignisse lauschen, die von Elementen stammen, die keine Eingabe oder Navigation unterstützen, möchten Sie häufig andere Standardaktionen explizit verhindern, die der Abwärtsaktion der mittleren Maustaste zugeordnet sind. Unter Windows ist das normalerweise Autoscroll und unter macOS und Linux normalerweise das Einfügen aus der Zwischenablage. Dies kann durch das Verhindern des Standardverhaltens des [`mousedown`](/de/docs/Web/API/Element/mousedown_event)- oder [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)-Ereignisses erreicht werden.

Zusätzlich müssen Sie das Öffnen eines systemeigenen Kontextmenüs nach einem Rechtsklick vermeiden. Aufgrund von Zeitunterschieden zwischen Betriebssystemen ist dies ebenfalls kein verhinderbares Standardverhalten von `auxclick`. Stattdessen kann dies durch das Verhindern des Standardverhaltens des [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event)-Ereignisses erreicht werden.

## Beispiele

In diesem Beispiel definieren wir Funktionen für zwei Ereignishandler — [`onclick`](/de/docs/Web/API/Element/click_event) und `onauxclick`. Der erste ändert die Farbe des Schaltflächenhintergrunds, während der zweite die Farbe des Schaltflächenvordergrunds (Text) ändert. Sie können die beiden Funktionen auch in Aktion sehen, indem Sie das Demo mit einer mehrtastigen Maus ausprobieren ([live auf GitHub ansehen](https://mdn.github.io/dom-examples/auxclick/); auch [den Quellcode ansehen](https://github.com/mdn/dom-examples/blob/main/auxclick/index.html)).

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

Beachten Sie, dass neben dem Erfassen des `auxclick`-Ereignisses mithilfe von `onauxclick` auch das [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event)-Ereignis erfasst wird und [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dieses Ereignis aufgerufen wird, um zu verhindern, dass das Kontextmenü nach der Farbänderung angezeigt wird.

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
> Wenn Sie eine Drei-Tasten-Maus verwenden, werden Sie feststellen, dass der `onauxclick`-Handler ausgeführt wird, wenn eine der nicht linken Maustasten geklickt wird (in der Regel einschließlich aller "Sonder"-Tasten auf Gaming-Mäusen).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lernen: Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events)
- [`click`](/de/docs/Web/API/Element/click_event)
- [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event)
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event)
- [`mousedown`](/de/docs/Web/API/Element/mousedown_event)
- [`mouseup`](/de/docs/Web/API/Element/mouseup_event)
- [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)
- [`pointerup`](/de/docs/Web/API/Element/pointerup_event)
