---
title: "Element: auxclick-Ereignis"
short-title: auxclick
slug: Web/API/Element/auxclick_event
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef}}

Das **`auxclick`**-Ereignis wird bei einem [`Element`](/de/docs/Web/API/Element) ausgelöst, wenn eine nicht-primäre Zeigegerätetaste (jede Maustaste außer der primären – normalerweise am weitesten links befindlichen – Taste) innerhalb desselben Elements gedrückt und losgelassen wurde.

`auxclick` wird nach den [`mousedown`](/de/docs/Web/API/Element/mousedown_event) und [`mouseup`](/de/docs/Web/API/Element/mouseup_event) Ereignissen in dieser Reihenfolge ausgelöst.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

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
  - : Stellt den Winkel zwischen einer Achse eines Transducers (einem Zeiger oder Stift) und der X-Y-Ebene eines Gerätescreens dar.
- [`PointerEvent.azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) {{ReadOnlyInline}} {{experimental_inline}}
  - : Stellt den Winkel zwischen der Y-Z-Ebene und der Ebene dar, die sowohl die Achse des Transducers (einem Zeiger oder Stift) als auch die Y-Achse enthält.
- [`PointerEvent.pointerId`](/de/docs/Web/API/PointerEvent/pointerId) {{ReadOnlyInline}}
  - : Ein eindeutiger Bezeichner für den Zeiger, der das Ereignis verursacht.
- [`PointerEvent.width`](/de/docs/Web/API/PointerEvent/width) {{ReadOnlyInline}}
  - : Die Breite (Größe auf der X-Achse), in CSS-Pixeln, der Kontaktgeometrie des Zeigers.
- [`PointerEvent.height`](/de/docs/Web/API/PointerEvent/height) {{ReadOnlyInline}}
  - : Die Höhe (Größe auf der Y-Achse), in CSS-Pixeln, der Kontaktgeometrie des Zeigers.
- [`PointerEvent.pressure`](/de/docs/Web/API/PointerEvent/pressure) {{ReadOnlyInline}}
  - : Der normalisierte Druck der Zeigereingabe im Bereich von `0` bis `1`, wobei `0` und `1` den minimalen bzw. maximalen Druck darstellen, den die Hardware erkennen kann.
- [`PointerEvent.tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure) {{ReadOnlyInline}}
  - : Der normalisierte tangentiale Druck der Zeigereingabe (auch bekannt als Barrel-Druck oder [Zylinderstress](https://en.wikipedia.org/wiki/Cylinder_stress)) im Bereich von `-1` bis `1`, wobei `0` die Neutralstellung der Steuerung ist.
- [`PointerEvent.tiltX`](/de/docs/Web/API/PointerEvent/tiltX) {{ReadOnlyInline}}
  - : Der Ebene-Winkel (in Grad, im Bereich von `-90` bis `90`) zwischen der Y–Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z.B. Stift) als auch die Y-Achse enthält.
- [`PointerEvent.tiltY`](/de/docs/Web/API/PointerEvent/tiltY) {{ReadOnlyInline}}
  - : Der Ebene-Winkel (in Grad, im Bereich von `-90` bis `90`) zwischen der X–Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z.B. Stift) als auch die X-Achse enthält.
- [`PointerEvent.twist`](/de/docs/Web/API/PointerEvent/twist) {{ReadOnlyInline}}
  - : Die Drehung des Zeigers (z.B. Stift) im Uhrzeigersinn um seine Hauptachse in Grad, mit einem Wert im Bereich von `0` bis `359`.
- [`PointerEvent.pointerType`](/de/docs/Web/API/PointerEvent/pointerType) {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis verursacht hat (Maus, Stift, Berührung usw.).
- [`PointerEvent.isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary) {{ReadOnlyInline}}
  - : Gibt an, ob der Zeiger den primären Zeiger dieses Zeigertyps darstellt.

## Verhindern von Standardaktionen

Für die überwiegende Mehrheit der Browser, die mit einem mittleren Klick das Öffnen eines Links in einem neuen Tab markieren, einschließlich Firefox, ist es möglich, dieses Verhalten zu unterbinden, indem [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) innerhalb eines `auxclick`-Ereignis-Handlers aufgerufen wird.

Wenn Sie `auxclick`-Ereignisse überwachen, die von Elementen stammen, die keine Eingabe oder Navigation unterstützen, möchten Sie oft andere Standardaktionen ausdrücklich unterbinden, die der Abwärtsaktion der mittleren Maustaste zugeordnet sind. Unter Windows ist dies in der Regel das automatische Scrollen, und unter macOS und Linux ist dies in der Regel das Einfügen aus der Zwischenablage. Dies kann erreicht werden, indem das Standardverhalten des [`mousedown`](/de/docs/Web/API/Element/mousedown_event) oder [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event) Ereignisses verhindert wird.

Darüber hinaus müssen Sie möglicherweise das Öffnen eines System-Kontextmenüs nach einem Rechtsklick verhindern. Aufgrund von Timing-Unterschieden zwischen Betriebssystemen ist dies auch kein verhinderbares Standardverhalten von `auxclick`. Stattdessen kann dies erreicht werden, indem das Standardverhalten des [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event) Ereignisses verhindert wird.

## Beispiele

In diesem Beispiel definieren wir Funktionen für zwei Ereignis-Handler – [`onclick`](/de/docs/Web/API/Element/click_event) und `onauxclick`. Der erstere ändert die Farbe des Hintergrunds der Schaltfläche, während der letztere die Vordergrundfarbe (Text) der Schaltfläche ändert. Sie können die beiden Funktionen auch ausprobieren, indem Sie die Demo mit einer Mehrtastenmaus testen ([sehen Sie es live auf GitHub](https://mdn.github.io/dom-examples/auxclick/); sehen Sie sich auch den [Quellcode](https://github.com/mdn/dom-examples/blob/main/auxclick/index.html) an).

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

Beachten Sie, dass zusätzlich zum Erfassen des `auxclick`-Ereignisses mit `onauxclick` auch das [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event) Ereignis erfasst wird und [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) für dieses Ereignis aufgerufen wird, um zu verhindern, dass das Kontextmenü angezeigt wird, nachdem die Farbänderung angewendet wurde.

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
> Wenn Sie eine Drei-Tasten-Maus verwenden, werden Sie feststellen, dass der `onauxclick`-Handler ausgeführt wird, wenn eine der nicht linken Maustasten geklickt wird (in der Regel einschließlich aller "speziellen" Tasten auf Gaming-Mäusen).

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
