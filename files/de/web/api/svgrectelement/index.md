---
title: SVGRectElement
slug: Web/API/SVGRectElement
l10n:
  sourceCommit: 005cc1fd55aadcdcbd9aabbed7d648a275f8f23a
---

{{APIRef("SVG")}}

Das `SVGRectElement` Interface bietet Zugriff auf die Eigenschaften von {{SVGElement("rect")}}-Elementen sowie Methoden zu deren Manipulation.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem übergeordneten Interface [`SVGGeometryElement`](/de/docs/Web/API/SVGGeometryElement)._

- [`SVGRectElement.x`](/de/docs/Web/API/SVGRectElement/x) {{ReadOnlyInline}}
  - : Gibt ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) zurück, das dem {{SVGAttr("x")}} Attribut des gegebenen {{SVGElement("rect")}} Elements entspricht.
- [`SVGRectElement.y`](/de/docs/Web/API/SVGRectElement/y) {{ReadOnlyInline}}
  - : Gibt ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) zurück, das dem {{SVGAttr("y")}} Attribut des gegebenen {{SVGElement("rect")}} Elements entspricht.
- [`SVGRectElement.width`](/de/docs/Web/API/SVGRectElement/width) {{ReadOnlyInline}}
  - : Gibt ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) zurück, das dem {{SVGAttr("width")}} Attribut des gegebenen {{SVGElement("rect")}} Elements entspricht.
- [`SVGRectElement.height`](/de/docs/Web/API/SVGRectElement/height) {{ReadOnlyInline}}
  - : Gibt ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) zurück, das dem {{SVGAttr("height")}} Attribut des gegebenen {{SVGElement("rect")}} Elements entspricht.
- [`SVGRectElement.rx`](/de/docs/Web/API/SVGRectElement/rx) {{ReadOnlyInline}}
  - : Gibt ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) zurück, das dem {{SVGAttr("rx")}} Attribut des gegebenen {{SVGElement("rect")}} Elements entspricht.
- [`SVGRectElement.ry`](/de/docs/Web/API/SVGRectElement/ry) {{ReadOnlyInline}}
  - : Gibt ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) zurück, das dem {{SVGAttr("ry")}} Attribut des gegebenen {{SVGElement("rect")}} Elements entspricht.

## Instanzmethoden

_Dieses Interface implementiert keine spezifischen Methoden, erbt aber Methoden von seinem übergeordneten Interface [`SVGGeometryElement`](/de/docs/Web/API/SVGGeometryElement)._

## Beispiele

### Die Farbe eines SVG-Rechtecks ändern

Dieses Beispiel setzt die Füllfarbe eines `SVGRectElement` auf einen zufälligen Wert, wann immer der Benutzer darauf klickt.

#### HTML

```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <rect
    width="300"
    height="100"
    id="myrect"
    style="fill:rgb(0 0 255);stroke-width:1;stroke:rgb(0 0 0)" />
  <text x="60" y="40" fill="white" font-size="40">Click Me</text>
</svg>
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
