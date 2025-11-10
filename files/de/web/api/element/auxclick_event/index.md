---
title: "Element: auxclick Ereignis"
short-title: auxclick
slug: Web/API/Element/auxclick_event
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{APIRef("UI Events")}}

Das **`auxclick`** Ereignis wird auf einem [`Element`](/de/docs/Web/API/Element) ausgelöst, wenn eine Taste eines Zeigegeräts, die nicht die primäre Taste ist (also jede Maustaste außer der primären—normalerweise am weitesten links gelegenen—Taste), gedrückt und losgelassen wird, und zwar innerhalb desselben Elements.

`auxclick` wird ausgelöst, nachdem die Ereignisse [`mousedown`](/de/docs/Web/API/Element/mousedown_event) und [`mouseup`](/de/docs/Web/API/Element/mouseup_event) in dieser Reihenfolge ausgelöst wurden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("auxclick", (event) => { })

onauxclick = (event) => { }
```

## Ereignistyp

Ein [`PointerEvent`](/de/docs/Web/API/PointerEvent). Erbt von [`MouseEvent`](/de/docs/Web/API/MouseEvent).

{{InheritanceDiagram("PointerEvent")}}

> [!NOTE]
> In früheren Versionen der Spezifikation war der Ereignistyp für dieses Ereignis ein [`MouseEvent`](/de/docs/Web/API/MouseEvent). Überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität) für weitere Informationen.

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von [`MouseEvent`](/de/docs/Web/API/MouseEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`PointerEvent.altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) {{ReadOnlyInline}} {{experimental_inline}}
  - : Repräsentiert den Winkel zwischen einer Transducer-Achse (ein Zeiger oder Stift) und der X-Y-Ebene eines Geräteschirms.
- [`PointerEvent.azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) {{ReadOnlyInline}} {{experimental_inline}}
  - : Repräsentiert den Winkel zwischen der Y-Z-Ebene und der Ebene, die sowohl die Transducer-Achse (ein Zeiger oder Stift) als auch die Y-Achse enthält.
- [`PointerEvent.pointerId`](/de/docs/Web/API/PointerEvent/pointerId) {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für den Zeiger, der das Ereignis verursacht.
- [`PointerEvent.width`](/de/docs/Web/API/PointerEvent/width) {{ReadOnlyInline}}
  - : Die Breite (Größe auf der X-Achse) in CSS-Pixeln der Kontaktgeometrie des Zeigers.
- [`PointerEvent.height`](/de/docs/Web/API/PointerEvent/height) {{ReadOnlyInline}}
  - : Die Höhe (Größe auf der Y-Achse) in CSS-Pixeln der Kontaktgeometrie des Zeigers.
- [`PointerEvent.pressure`](/de/docs/Web/API/PointerEvent/pressure) {{ReadOnlyInline}}
  - : Der normalisierte Druck des Zeigereingangs im Bereich von `0` bis `1`, wobei `0` und `1` den minimalen und maximalen Druck darstellen, den die Hardware erkennen kann.
- [`PointerEvent.tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure) {{ReadOnlyInline}}
  - : Der normalisierte tangentiale Druck des Zeigereingangs (auch bekannt als Fassdruck oder [Zylinderstress](https://de.wikipedia.org/wiki/Zylinderstress)) im Bereich von `-1` bis `1`, wobei `0` die Neutralstellung der Kontrolle ist.
- [`PointerEvent.tiltX`](/de/docs/Web/API/PointerEvent/tiltX) {{ReadOnlyInline}}
  - : Der Ebenenwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der Y-Z-Ebene und der Ebene, die sowohl die Zeigerachse (z.B. ein Stift) als auch die Y-Achse enthält.
- [`PointerEvent.tiltY`](/de/docs/Web/API/PointerEvent/tiltY) {{ReadOnlyInline}}
  - : Der Ebenenwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der X-Z-Ebene und der Ebene, die sowohl die Zeigerachse (z.B. ein Stift) als auch die X-Achse enthält.
- [`PointerEvent.twist`](/de/docs/Web/API/PointerEvent/twist) {{ReadOnlyInline}}
  - : Die Drehung des Zeigers im Uhrzeigersinn (z.B. ein Stift) um seine Hauptachse in Grad, mit einem Wert im Bereich von `0` bis `359`.
- [`PointerEvent.pointerType`](/de/docs/Web/API/PointerEvent/pointerType) {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis verursacht hat (Maus, Stift, Berührung, etc.).
- [`PointerEvent.isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary) {{ReadOnlyInline}}
  - : Gibt an, ob der Zeiger den primären Zeiger dieses Zeigertyps darstellt.

## Standardaktionen verhindern

Für die überwiegende Mehrheit der Browser, die einen Mittelklick darauf abbilden, einen Link in einem neuen Tab zu öffnen, einschließlich Firefox, ist es möglich, dieses Verhalten zu verhindern, indem [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) innerhalb eines `auxclick`-Ereignis-Handlers aufgerufen wird.

Wenn Sie `auxclick`-Ereignisse überwachen, die auf Elemente zurückzuführen sind, die keine Eingabe oder Navigation unterstützen, sollten Sie oft ausdrücklich andere Standardaktionen verhindern, die dem Drücken der mittleren Maustaste zugewiesen sind. Unter Windows ist dies normalerweise der automatische Bildlauf, und unter macOS und Linux handelt es sich normalerweise um das Einfügen der Zwischenablage. Dies kann erreicht werden, indem das Standardverhalten des [`mousedown`](/de/docs/Web/API/Element/mousedown_event) oder [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event) Ereignisses verhindert wird.

Darüber hinaus müssen Sie möglicherweise verhindern, dass nach einem Rechtsklick ein Systemkontextmenü geöffnet wird. Aufgrund von zeitlichen Unterschieden zwischen Betriebssystemen ist dies ebenfalls kein verhinderbares Standardverhalten von `auxclick`. Stattdessen kann dies durch Verhinderung des Standardverhaltens des [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event) Ereignisses erreicht werden.

## Beispiele

In diesem Beispiel definieren wir Funktionen für zwei Ereignis-Handler — [`onclick`](/de/docs/Web/API/Element/click_event) und `onauxclick`. Der erste ändert die Farbe des Schaltflächenhintergrunds, während der zweite die Textfarbe der Schaltfläche ändert. Sie können die beiden Funktionen auch in Aktion sehen, indem Sie das Demo mit einer Mehrtasten-Maus ausprobieren ([siehe es live auf GitHub](https://mdn.github.io/dom-examples/auxclick/); auch [den Quellcode ansehen](https://github.com/mdn/dom-examples/blob/main/auxclick/index.html)).

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

Beachten Sie, dass zusätzlich zum Erfassen des `auxclick`-Ereignisses mit `onauxclick` auch das [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event) Ereignis erfasst wird und [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dieses Ereignis angewendet wird, um zu verhindern, dass das Kontextmenü nach der Farbänderung angezeigt wird.

### HTML

```html
<button>Click me!</button>
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
  letter-spacing: 0.5rem;
}
```

{{EmbedLiveSample("Examples", 640, 300)}}

> [!NOTE]
> Wenn Sie eine Drei-Tasten-Maus verwenden, werden Sie feststellen, dass der `onauxclick`-Handler ausgeführt wird, wenn eine der nicht linken Maustasten geklickt wird (einschließlich aller "Spezial"-Tasten auf Gaming-Mäusen).

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
