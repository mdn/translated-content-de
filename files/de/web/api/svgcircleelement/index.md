---
title: SVGCircleElement
slug: Web/API/SVGCircleElement
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{APIRef("SVG")}}

Die **`SVGCircleElement`**-Schnittstelle ist eine Schnittstelle für das {{SVGElement("circle")}}-Element.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem übergeordneten Element, [`SVGGeometryElement`](/de/docs/Web/API/SVGGeometryElement)._

- [`SVGCircleElement.cx`](/de/docs/Web/API/SVGCircleElement/cx) {{ReadOnlyInline}}
  - : Diese Eigenschaft definiert die x-Koordinate des Mittelpunkts des {{SVGElement("circle")}}-Elements. Sie wird durch das {{SVGAttr("cx")}}-Attribut des Elements angegeben.
- [`SVGCircleElement.cy`](/de/docs/Web/API/SVGCircleElement/cy) {{ReadOnlyInline}}
  - : Diese Eigenschaft definiert die y-Koordinate des Mittelpunkts des `<circle>`-Elements. Sie wird durch das {{SVGAttr("cy")}}-Attribut des Elements angegeben.
- [`SVGCircleElement.r`](/de/docs/Web/API/SVGCircleElement/r) {{ReadOnlyInline}}
  - : Diese Eigenschaft definiert den Radius des `<circle>`-Elements. Sie wird durch das {{SVGAttr("r")}}-Attribut des Elements angegeben.

## Instanz-Methoden

_Erbt Methoden von seiner übergeordneten Schnittstelle, [`SVGGeometryElement`](/de/docs/Web/API/SVGGeometryElement)._

## Beispiele

### Ändern der Größe eines Kreises

In diesem Beispiel zeichnen wir einen Kreis und vergrößern oder verkleinern zufällig seinen Radius, wenn Sie darauf klicken.

#### HTML

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 250 250"
  width="250"
  height="250">
  <circle cx="100" cy="100" r="50" fill="gold" id="circle" />
</svg>
```

#### JavaScript

```js
const circle = document.getElementById("circle");

function clickCircle() {
  // Randomly determine if the circle radius will increase or decrease
  const change = Math.random() > 0.5 ? 10 : -10;
  // Clamp the circle radius to a minimum of 10 and a maximum of 250,
  // so it won't disappear or get bigger than the viewport
  const newValue = Math.min(Math.max(circle.r.baseVal.value + change, 10), 250);
  circle.setAttribute("r", newValue);
}

circle.addEventListener("click", clickCircle);
```

{{EmbedLiveSample('Resizing a circle', '', '300')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("circle")}} SVG-Element
