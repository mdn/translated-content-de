---
title: SVGEllipseElement
slug: Web/API/SVGEllipseElement
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{APIRef("SVG")}}

Das **`SVGEllipseElement`**-Interface bietet Zugriff auf die Eigenschaften von {{SVGElement("ellipse")}}-Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Methoden von seinem Eltern-Interface, [`SVGGeometryElement`](/de/docs/Web/API/SVGGeometryElement)._

- [`SVGEllipseElement.cx`](/de/docs/Web/API/SVGEllipseElement/cx) {{ReadOnlyInline}}
  - : Diese Eigenschaft gibt ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) zurück, das das {{SVGAttr("cx")}}-Attribut des gegebenen {{SVGElement("ellipse")}}-Elements widerspiegelt.
- [`SVGEllipseElement.cy`](/de/docs/Web/API/SVGEllipseElement/cy) {{ReadOnlyInline}}
  - : Diese Eigenschaft gibt ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) zurück, das das {{SVGAttr("cy")}}-Attribut des gegebenen {{SVGElement("ellipse")}}-Elements widerspiegelt.
- [`SVGEllipseElement.rx`](/de/docs/Web/API/SVGEllipseElement/rx) {{ReadOnlyInline}}
  - : Diese Eigenschaft gibt ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) zurück, das das {{SVGAttr("rx")}}-Attribut des gegebenen {{SVGElement("ellipse")}}-Elements widerspiegelt.
- [`SVGEllipseElement.ry`](/de/docs/Web/API/SVGEllipseElement/ry) {{ReadOnlyInline}}
  - : Diese Eigenschaft gibt ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) zurück, das das {{SVGAttr("ry")}}-Attribut des gegebenen {{SVGElement("ellipse")}}-Elements widerspiegelt.

## Instanz-Methoden

_Erbt Methoden von seinem Eltern-Interface, [`SVGGeometryElement`](/de/docs/Web/API/SVGGeometryElement)._

## Beispiel

### SVG

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="100" cy="100" rx="100" ry="60" id="ellipse" />
</svg>
```

### JavaScript

```js
const ellipse = document.getElementById("ellipse");

function outputSize() {
  // Outputs "horizontal radius: 100 vertical radius: 60"
  console.log(
    `horizontal radius: ${ellipse.rx.baseVal.valueAsString}`,
    `vertical radius: ${ellipse.ry.baseVal.valueAsString}`,
  );
}

ellipse.addEventListener("click", outputSize);
```

### Ergebnis

{{EmbedLiveSample("Example", 220, 220)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("ellipse")}} SVG-Element
