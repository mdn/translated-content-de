---
title: shape-rendering
slug: Web/CSS/Reference/Properties/shape-rendering
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`shape-rendering`**-Eigenschaft von [CSS](/de/docs/Web/CSS) gibt dem Renderer Hinweise darauf, welche Abwägungen beim Rendern von Formen wie Pfaden, Kreisen oder Rechtecken zu treffen sind. Sie hat nur Auswirkungen auf die Elemente {{SVGElement("circle")}}, {{SVGElement("ellipse")}}, {{SVGElement("line")}}, {{SVGElement("path")}}, {{SVGElement("polygon")}}, {{SVGElement("polyline")}} und {{SVGElement("rect")}}. Wenn ausdrücklich deklariert, überschreibt der Wert der CSS-Eigenschaft jegliche Werte des {{SVGAttr("shape-rendering")}}-Attributs des Elements.

## Syntax

```css
shape-rendering: auto;
shape-rendering: crispEdges;
shape-rendering: geometricPrecision;
shape-rendering: optimizeSpeed;

/* Global values */
shape-rendering: inherit;
shape-rendering: initial;
shape-rendering: revert;
shape-rendering: revert-layer;
shape-rendering: unset;
```

### Werte

Die Werte {{cssxref("length")}} und {{cssxref("percentage")}} bezeichnen das horizontale Zentrum des Kreises oder der Ellipse.

- `auto`
  - : Dieser Wert weist die Benutzeragenten an, Abwägungen zu treffen, um eine Balance zwischen Geschwindigkeit, Kantenschärfe und geometrischer Präzision zu erreichen, wobei der geometrischen Präzision mehr Bedeutung beigemessen wird als der Geschwindigkeit und der Kantenschärfe.
- `crispEdges`
  - : Dieser Wert weist den Benutzeragenten an, den Kontrast der Kanten gegenüber der geometrischen Präzision oder der Rendering-Geschwindigkeit zu betonen. Das endgültige Rendering wird wahrscheinlich auf Techniken wie Anti-Aliasing verzichten. Es kann auch die Positionen und Breiten der Linien anpassen, um die Kanten mit den Gerätepixeln auszurichten.
- `geometricPrecision`
  - : Dieser Wert weist den Benutzeragenten an, die geometrische Präzision gegenüber Geschwindigkeit oder scharfen Kanten zu betonen. Das endgültige Rendering kann Techniken wie Anti-Aliasing umfassen.
- `optimizeSpeed`
  - : Dieser Wert weist den Benutzeragenten an, die Rendereffizienz über die geometrische Präzision oder die Kantenschärfe zu betonen. Das endgültige Rendering wird wahrscheinlich auf Techniken wie Anti-Aliasing verzichten.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiel

Um die unterschiedlichen Renderings zu zeigen, erstellen wir eine Gruppe von vier Ellipsen gleicher Größe und Form.

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 120">
  <ellipse cx="50" cy="60" rx="40" ry="60" />
  <ellipse cx="150" cy="60" rx="40" ry="60" />
  <ellipse cx="250" cy="60" rx="40" ry="60" />
  <ellipse cx="350" cy="60" rx="40" ry="60" />
</svg>
```

Wir wenden dann die vier Werte von `shape-rendering` an, jeweils einen pro Ellipse.

```css
ellipse:nth-of-type(1) {
  shape-rendering: crispEdges;
}
ellipse:nth-of-type(2) {
  shape-rendering: geometricPrecision;
}
ellipse:nth-of-type(3) {
  shape-rendering: optimizeSpeed;
}
ellipse:nth-of-type(4) {
  shape-rendering: auto;
}
```

Das resultierende SVG wird hier gezeigt. Die erste und dritte Ellipse (von links nach rechts gezählt) zeigen eher gezackte Kanten, während die zweite ein glatteres Erscheinungsbild haben sollte. Das Erscheinungsbild der vierten und letzten Ellipse wird von den spezifischen Abwägungen bestimmt, die der Benutzeragent vornimmt, den Sie zur Ansicht des Beispiels verwenden.

{{EmbedLiveSample("Example", "400", "240")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGAttr("shape-rendering")}}-Attribut
