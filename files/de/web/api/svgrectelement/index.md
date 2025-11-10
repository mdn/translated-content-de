---
title: SVGRectElement
slug: Web/API/SVGRectElement
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{APIRef("SVG")}}

Das `SVGRectElement`-Interface bietet Zugriff auf die Eigenschaften von {{SVGElement("rect")}}-Elementen sowie Methoden, um sie zu manipulieren.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem Eltern-Interface, [`SVGGeometryElement`](/de/docs/Web/API/SVGGeometryElement)._

- [`SVGRectElement.x`](/de/docs/Web/API/SVGRectElement/x) {{ReadOnlyInline}}
  - : Gibt ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) zurück, das dem {{SVGAttr("x")}}-Attribut des angegebenen {{SVGElement("rect")}}-Elements entspricht.
- [`SVGRectElement.y`](/de/docs/Web/API/SVGRectElement/y) {{ReadOnlyInline}}
  - : Gibt ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) zurück, das dem {{SVGAttr("y")}}-Attribut des angegebenen {{SVGElement("rect")}}-Elements entspricht.
- [`SVGRectElement.width`](/de/docs/Web/API/SVGRectElement/width) {{ReadOnlyInline}}
  - : Gibt ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) zurück, das dem {{SVGAttr("width")}}-Attribut des angegebenen {{SVGElement("rect")}}-Elements entspricht.
- [`SVGRectElement.height`](/de/docs/Web/API/SVGRectElement/height) {{ReadOnlyInline}}
  - : Gibt ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) zurück, das dem {{SVGAttr("height")}}-Attribut des angegebenen {{SVGElement("rect")}}-Elements entspricht.
- [`SVGRectElement.rx`](/de/docs/Web/API/SVGRectElement/rx) {{ReadOnlyInline}}
  - : Gibt ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) zurück, das dem {{SVGAttr("rx")}}-Attribut des angegebenen {{SVGElement("rect")}}-Elements entspricht.
- [`SVGRectElement.ry`](/de/docs/Web/API/SVGRectElement/ry) {{ReadOnlyInline}}
  - : Gibt ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) zurück, das dem {{SVGAttr("ry")}}-Attribut des angegebenen {{SVGElement("rect")}}-Elements entspricht.

## Instanz-Methoden

_Dieses Interface implementiert keine spezifischen Methoden, erbt jedoch Methoden von seinem Eltern-Interface [`SVGGeometryElement`](/de/docs/Web/API/SVGGeometryElement)._

## Beispiele

### Ändern der Farbe eines SVG-Rechtecks

Dieses Beispiel setzt die Füllfarbe eines `SVGRectElement` auf einen zufälligen Wert, wenn der Benutzer darauf klickt.

#### HTML

```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <rect width="300" height="100" id="myrect" />
  <text x="60" y="40" fill="white" font-size="40">Click Me</text>
</svg>
```

#### CSS

```css
#myrect {
  fill: blue;
  stroke-width: 1;
  stroke: black;
}
```

#### JavaScript

```js
const myRect = document.querySelector("#myrect");

myRect.addEventListener("click", () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  myRect.style.fill = `rgb(${r} ${g} ${b})`;
});
```

#### Ergebnis

{{EmbedLiveSample('Changing the color of an SVG rectangle')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("rect")}}
