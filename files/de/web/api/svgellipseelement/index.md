---
title: SVGEllipseElement
slug: Web/API/SVGEllipseElement
l10n:
  sourceCommit: 9141131402c7d36e368e52b850fd8f903a11f585
---

{{APIRef("SVG")}}

Die **`SVGEllipseElement`** Schnittstelle bietet Zugriff auf die Eigenschaften von {{SVGElement("ellipse")}}-Elementen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Methoden von der übergeordneten Schnittstelle [`SVGGeometryElement`](/de/docs/Web/API/SVGGeometryElement)._

- [`SVGEllipseElement.cx`](/de/docs/Web/API/SVGEllipseElement/cx) {{ReadOnlyInline}}
  - : Diese Eigenschaft gibt ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) zurück, das das {{SVGAttr("cx")}}-Attribut des angegebenen {{SVGElement("ellipse")}}-Elements widerspiegelt.
- [`SVGEllipseElement.cy`](/de/docs/Web/API/SVGEllipseElement/cy) {{ReadOnlyInline}}
  - : Diese Eigenschaft gibt ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) zurück, das das {{SVGAttr("cy")}}-Attribut des angegebenen {{SVGElement("ellipse")}}-Elements widerspiegelt.
- [`SVGEllipseElement.rx`](/de/docs/Web/API/SVGEllipseElement/rx) {{ReadOnlyInline}}
  - : Diese Eigenschaft gibt ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) zurück, das das {{SVGAttr("rx")}}-Attribut des angegebenen {{SVGElement("ellipse")}}-Elements widerspiegelt.
- [`SVGEllipseElement.ry`](/de/docs/Web/API/SVGEllipseElement/ry) {{ReadOnlyInline}}
  - : Diese Eigenschaft gibt ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) zurück, das das {{SVGAttr("ry")}}-Attribut des angegebenen {{SVGElement("ellipse")}}-Elements widerspiegelt.

## Instanzmethoden

_Erbt Methoden von der übergeordneten Schnittstelle [`SVGGeometryElement`](/de/docs/Web/API/SVGGeometryElement)._

## Beispiel

### SVG

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <ellipse
    cx="100"
    cy="100"
    rx="100"
    ry="60"
    id="ellipse"
    onclick="outputSize();" />
</svg>
```

### JavaScript

```js
function outputSize() {
  const ellipse = document.getElementById("ellipse");

  // Outputs "horizontal radius: 100 vertical radius: 60"
  console.log(
    `horizontal radius: ${ellipse.rx.baseVal.valueAsString}`,
    `vertical radius: ${ellipse.ry.baseVal.valueAsString}`,
  );
}
```

### Ergebnis

{{EmbedLiveSample("Example", 220, 220)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("ellipse")}} SVG-Element
