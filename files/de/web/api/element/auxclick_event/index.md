---
title: "Element: auxclick Ereignis"
short-title: auxclick
slug: Web/API/Element/auxclick_event
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef}}

Das **`auxclick`** Ereignis wird bei einem [`Element`](/de/docs/Web/API/Element) ausgelöst, wenn eine nicht-primäre Taste eines Zeigegeräts (jede Maustaste außer der primären – normalerweise die linke Taste) innerhalb desselben Elements gedrückt und losgelassen wird.

`auxclick` wird ausgelöst, nachdem die Ereignisse [`mousedown`](/de/docs/Web/API/Element/mousedown_event) und [`mouseup`](/de/docs/Web/API/Element/mouseup_event) in dieser Reihenfolge ausgelöst wurden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandlereigenschaft.

```js
addEventListener("auxclick", (event) => {});

onauxclick = (event) => {};
```

## Ereignistyp

Ein [`PointerEvent`](/de/docs/Web/API/PointerEvent). Erbt von [`MouseEvent`](/de/docs/Web/API/MouseEvent).

{{InheritanceDiagram("PointerEvent")}}

> [!NOTE]
> In früheren Versionen der Spezifikation war der Ereignistyp für dieses Ereignis ein [`MouseEvent`](/de/docs/Web/API/MouseEvent). Überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität) für weitere Informationen.

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von [`MouseEvent`](/de/docs/Web/API/MouseEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`PointerEvent.altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) {{ReadOnlyInline}} {{experimental_inline}}
  - : Repräsentiert den Winkel zwischen der Achse eines Transducers (einem Zeigegerät oder Stift) und der X-Y-Ebene des Gerätebildschirms.
- [`PointerEvent.azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) {{ReadOnlyInline}} {{experimental_inline}}
  - : Repräsentiert den Winkel zwischen der Y-Z-Ebene und der Ebene, die sowohl die Achse des Transducers (einem Zeigegerät oder Stift) als auch die Y-Achse enthält.
- [`PointerEvent.pointerId`](/de/docs/Web/API/PointerEvent/pointerId) {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für den Zeiger, der das Ereignis verursacht.
- [`PointerEvent.width`](/de/docs/Web/API/PointerEvent/width) {{ReadOnlyInline}}
  - : Die Breite (Größe auf der X-Achse), in CSS-Pixeln, der Kontaktgeometrie des Zeigers.
- [`PointerEvent.height`](/de/docs/Web/API/PointerEvent/height) {{ReadOnlyInline}}
  - : Die Höhe (Größe auf der Y-Achse), in CSS-Pixeln, der Kontaktgeometrie des Zeigers.
- [`PointerEvent.pressure`](/de/docs/Web/API/PointerEvent/pressure) {{ReadOnlyInline}}
  - : Der normalisierte Druck der Zeigereingabe im Bereich von `0` bis `1`, wobei `0` und `1` den minimalen und maximalen Druck repräsentieren, den die Hardware erfassen kann.
- [`PointerEvent.tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure) {{ReadOnlyInline}}
  - : Der normalisierte tangentiale Druck der Zeigereingabe (auch als Barrel-Druck oder [Zylinderbelastung](https://en.wikipedia.org/wiki/Cylinder_stress) bekannt) im Bereich von `-1` bis `1`, wobei `0` die neutrale Position der Steuerung ist.
- [`PointerEvent.tiltX`](/de/docs/Web/API/PointerEvent/tiltX) {{ReadOnlyInline}}
  - : Der Winkel der Ebene (in Grad, im Bereich von `-90` bis `90`) zwischen der Y-Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z.B. Stift) als auch die Y-Achse enthält.
- [`PointerEvent.tiltY`](/de/docs/Web/API/PointerEvent/tiltY) {{ReadOnlyInline}}
  - : Der Winkel der Ebene (in Grad, im Bereich von `-90` bis `90`) zwischen der X-Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z.B. Stift) als auch die X-Achse enthält.
- [`PointerEvent.twist`](/de/docs/Web/API/PointerEvent/twist) {{ReadOnlyInline}}
  - : Die Drehung des Zeigers (z.B. Stift) rund um seine Hauptachse im Uhrzeigersinn in Grad, mit einem Wert im Bereich von `0` bis `359`.
- [`PointerEvent.pointerType`](/de/docs/Web/API/PointerEvent/pointerType) {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis verursacht hat (Maus, Stift, Touch, etc.).
- [`PointerEvent.isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary) {{ReadOnlyInline}}
  - : Gibt an, ob der Zeiger den primären Zeiger dieses Zeigertyps darstellt.

## Verhindern von Standardaktionen

Für die überwiegende Mehrheit der Browser, die den Mittelklick dem Öffnen eines Links in einem neuen Tab zuordnen, einschließlich Firefox, ist es möglich, dieses Verhalten zu unterbinden, indem [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) innerhalb eines `auxclick` Ereignisbehandlers aufgerufen wird.

Wenn Sie auf `auxclick` Ereignisse hören, die von Elementen ausgehen, die keine Eingabe oder Navigation unterstützen, sollten Sie oft explizit andere Standardaktionen verhindern, die der Abwärtsaktion der mittleren Maustaste zugeordnet sind. Unter Windows ist dies in der Regel das automatische Scrollen, auf macOS und Linux in der Regel das Einfügen von Inhalten aus der Zwischenablage. Dies kann erreicht werden, indem das Standardverhalten des [`mousedown`](/de/docs/Web/API/Element/mousedown_event) oder [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event) Ereignisses verhindert wird.

Außerdem müssen Sie möglicherweise das Öffnen eines Systemkontextmenüs nach einem Rechtsklick vermeiden. Aufgrund von Timing-Unterschieden zwischen Betriebssystemen ist dies ebenfalls kein verhinderbares Standardverhalten von `auxclick`. Stattdessen kann dies durch die Verhinderung des Standardverhaltens des [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event) Ereignisses erreicht werden.

## Beispiele

In diesem Beispiel definieren wir Funktionen für zwei Ereignisbehandler — [`onclick`](/de/docs/Web/API/Element/click_event) und `onauxclick`. Der erste ändert die Hintergrundfarbe des Buttons, während der letztere die Vordergrundfarbe (Textfarbe) des Buttons ändert. Sie können die beiden Funktionen auch in Aktion sehen, indem Sie das Demo mit einer Mehrtastenmaus ausprobieren ([siehe es live auf GitHub](https://mdn.github.io/dom-examples/auxclick/); außerdem [den Quellcode ansehen](https://github.com/mdn/dom-examples/blob/main/auxclick/index.html)).

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

Beachten Sie, dass neben dem Erfassen des `auxclick` Ereignisses mit `onauxclick` auch das [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event) Ereignis erfasst wird und [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dieses Ereignis aufgerufen wird, um zu verhindern, dass das Kontextmenü nach der Farbänderung erscheint.

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
> Wenn Sie eine Drei-Tasten-Maus verwenden, werden Sie feststellen, dass der `onauxclick` Handler ausgeführt wird, wenn eine andere Taste als die linke Maustaste betätigt wird (normalerweise einschließlich aller "Sondertasten" von Gaming-Mäusen).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lernen: Einführung zu Ereignissen](/de/docs/Learn_web_development/Core/Scripting/Events)
- [`click`](/de/docs/Web/API/Element/click_event)
- [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event)
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event)
- [`mousedown`](/de/docs/Web/API/Element/mousedown_event)
- [`mouseup`](/de/docs/Web/API/Element/mouseup_event)
- [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)
- [`pointerup`](/de/docs/Web/API/Element/pointerup_event)
