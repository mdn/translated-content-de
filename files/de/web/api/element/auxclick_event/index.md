---
title: "Element: auxclick event"
short-title: auxclick
slug: Web/API/Element/auxclick_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("UI Events")}}

Das **`auxclick`**-Ereignis wird auf einem [`Element`](/de/docs/Web/API/Element) ausgelöst, wenn eine nicht-primäre Taste eines Zeigegerätes (jede andere Maustaste als die primäre Taste – normalerweise die linke Taste) sowohl innerhalb desselben Elements gedrückt als auch losgelassen wurde.

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
> In früheren Versionen der Spezifikation war der Ereignistyp für dieses Ereignis ein [`MouseEvent`](/de/docs/Web/API/MouseEvent). Weitere Informationen finden Sie in der [Browser-Kompatibilität](#browser-kompatibilität).

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von [`MouseEvent`](/de/docs/Web/API/MouseEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`PointerEvent.altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) {{ReadOnlyInline}} {{experimental_inline}}
  - : Repräsentiert den Winkel zwischen der Achse eines Wandlers (einem Zeiger oder Stylus) und der X-Y-Ebene eines Gerätescreens.
- [`PointerEvent.azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) {{ReadOnlyInline}} {{experimental_inline}}
  - : Repräsentiert den Winkel zwischen der Y-Z-Ebene und der Ebene, die sowohl die Achse des Wandlers (einem Zeiger oder Stylus) als auch die Y-Achse enthält.
- [`PointerEvent.pointerId`](/de/docs/Web/API/PointerEvent/pointerId) {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für den Zeiger, der das Ereignis verursacht.
- [`PointerEvent.width`](/de/docs/Web/API/PointerEvent/width) {{ReadOnlyInline}}
  - : Die Breite (Ausdehnung auf der X-Achse) in CSS-Pixeln, der Kontaktgeometrie des Zeigers.
- [`PointerEvent.height`](/de/docs/Web/API/PointerEvent/height) {{ReadOnlyInline}}
  - : Die Höhe (Ausdehnung auf der Y-Achse) in CSS-Pixeln, der Kontaktgeometrie des Zeigers.
- [`PointerEvent.pressure`](/de/docs/Web/API/PointerEvent/pressure) {{ReadOnlyInline}}
  - : Der normalisierte Druck der Zeigereingabe im Bereich von `0` bis `1`, wobei `0` und `1` den minimalen und maximalen Druck darstellen, den die Hardware erkennen kann.
- [`PointerEvent.tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure) {{ReadOnlyInline}}
  - : Der normalisierte tangentiale Druck der Zeigereingabe (auch bekannt als Laufdruck oder [Zylinderbelastung](https://en.wikipedia.org/wiki/Cylinder_stress)) im Bereich von `-1` bis `1`, wobei `0` die neutrale Stellung des Bedienelements ist.
- [`PointerEvent.tiltX`](/de/docs/Web/API/PointerEvent/tiltX) {{ReadOnlyInline}}
  - : Der Flächenwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der Y-Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z.B. eines Stifts) als auch die Y-Achse enthält.
- [`PointerEvent.tiltY`](/de/docs/Web/API/PointerEvent/tiltY) {{ReadOnlyInline}}
  - : Der Flächenwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der X-Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z.B. eines Stifts) als auch die X-Achse enthält.
- [`PointerEvent.twist`](/de/docs/Web/API/PointerEvent/twist) {{ReadOnlyInline}}
  - : Die Drehung des Zeigers (z.B. eines Stifts) im Uhrzeigersinn um seine Hauptachse in Grad, mit einem Wert im Bereich von `0` bis `359`.
- [`PointerEvent.pointerType`](/de/docs/Web/API/PointerEvent/pointerType) {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis verursacht hat (Maus, Stift, Berührung, etc.).
- [`PointerEvent.isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary) {{ReadOnlyInline}}
  - : Gibt an, ob der Zeiger den primären Zeiger dieses Zeigertyps repräsentiert.

## Verhinderung von Standardaktionen

Für die überwiegende Mehrheit der Browser, die einen Mittelklick mit dem Öffnen eines Links in einem neuen Tab verknüpfen, einschließlich Firefox, ist es möglich, dieses Verhalten zu unterbinden, indem `preventDefault()` innerhalb eines `auxclick`-Ereignis-Handlers aufgerufen wird.

Wenn Sie `auxclick`-Ereignisse abhören, die von Elementen ausgehen, die keine Eingabe oder Navigation unterstützen, möchten Sie häufig andere Standardaktionen, die der Down-Aktion der Mittlertaste der Maus zugeordnet sind, explizit verhindern. Unter Windows ist dies normalerweise das Autoscrolling, und unter macOS und Linux ist dies normalerweise das Einfügen aus der Zwischenablage. Dies kann durch Verhinderung des Standardverhaltens des [`mousedown`](/de/docs/Web/API/Element/mousedown_event) oder [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)-Ereignisses erreicht werden.

Zusätzlich müssen Sie möglicherweise vermeiden, dass ein Systemkontextmenü nach einem Rechtsklick geöffnet wird. Aufgrund von Zeitunterschieden zwischen Betriebssystemen ist auch dies kein verhinderbares Standardverhalten von `auxclick`. Stattdessen kann dies durch Verhinderung des Standardverhaltens des [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event)-Ereignisses erreicht werden.

## Beispiele

In diesem Beispiel definieren wir Funktionen für zwei Ereignis-Handler — [`onclick`](/de/docs/Web/API/Element/click_event) und `onauxclick`. Ersteres ändert die Farbe des Button-Hintergrunds, während letzteres die Button-Vordergrund (Text)-Farbe ändert. Sie können die beiden Funktionen in Aktion sehen, indem Sie das Demo mit einer Mehrtasten-Maus ausprobieren ([sehen Sie es live auf GitHub](https://mdn.github.io/dom-examples/auxclick/); auch [sehen Sie sich den Quellcode an](https://github.com/mdn/dom-examples/blob/main/auxclick/index.html)).

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

Beachten Sie, dass neben dem Erfassen des `auxclick`-Ereignisses mit `onauxclick` auch das [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event)-Ereignis erfasst wird und darauf `preventDefault()` aufgerufen wird, um zu verhindern, dass sich das Kontextmenü öffnet, nachdem die Farbänderung angewendet wurde.

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
> Wenn Sie eine Drei-Tasten-Maus verwenden, werden Sie feststellen, dass der `onauxclick`-Handler ausgeführt wird, wenn eine der nicht-linken Maustasten geklickt wird (normalerweise einschließlich aller "Sonder"tasten bei Gaming-Mäusen).

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
