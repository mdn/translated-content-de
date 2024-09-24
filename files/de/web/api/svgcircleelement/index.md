---
title: SVGCircleElement
slug: Web/API/SVGCircleElement
l10n:
  sourceCommit: 9141131402c7d36e368e52b850fd8f903a11f585
---

{{APIRef("SVG")}}

Die **`SVGCircleElement`**-Schnittstelle ist eine Schnittstelle für das {{SVGElement("circle")}}-Element.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem übergeordneten Element, {{domxref("SVGGeometryElement")}}._

- {{domxref("SVGCircleElement.cx")}} {{ReadOnlyInline}}
  - : Diese Eigenschaft definiert die x-Koordinate des Mittelpunkts des {{SVGElement("circle")}}-Elements. Sie wird durch das {{SVGAttr("cx")}}-Attribut des Elements angegeben.
- {{domxref("SVGCircleElement.cy")}} {{ReadOnlyInline}}
  - : Diese Eigenschaft definiert die y-Koordinate des Mittelpunkts des `<circle>`-Elements. Sie wird durch das {{SVGAttr("cy")}}-Attribut des Elements angegeben.
- {{domxref("SVGCircleElement.r")}} {{ReadOnlyInline}}
  - : Diese Eigenschaft definiert den Radius des `<circle>`-Elements. Sie wird durch das {{SVGAttr("r")}}-Attribut des Elements angegeben.

## Instanzmethoden

_Erbt Methoden von der übergeordneten Schnittstelle, {{domxref("SVGGeometryElement")}}._

## Beispiele

### Größe eines Kreises ändern

In diesem Beispiel zeichnen wir einen Kreis, dessen Radius bei einem Klick zufällig vergrößert oder verkleinert wird.

#### HTML

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 250 250"
  width="250"
  height="250">
  <circle
    cx="100"
    cy="100"
    r="50"
    fill="gold"
    id="circle"
    onclick="clickCircle();" />
</svg>
```

#### JavaScript

```js
function clickCircle() {
  const circle = document.getElementById("circle");
  // Zufällig bestimmen, ob der Kreisradius vergrößert oder verkleinert wird
  const change = Math.random() > 0.5 ? 10 : -10;
  // Begrenzen Sie den Kreisradius auf ein Minimum von 10 und ein Maximum von 250,
  // damit er nicht verschwindet oder größer als der Ansichtsbereich wird
  const newValue = Math.min(Math.max(circle.r.baseVal.value + change, 10), 250);
  circle.setAttribute("r", newValue);
}
```

{{EmbedLiveSample('Größe eines Kreises ändern', '', '300')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("circle")}} SVG-Element
