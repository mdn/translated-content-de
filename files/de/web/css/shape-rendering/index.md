---
title: shape-rendering
slug: Web/CSS/shape-rendering
l10n:
  sourceCommit: 10c719061d0f21f1b6ff4457a624e9dd49083d3f
---

{{CSSRef}}

Die **`shape-rendering`**-Eigenschaft von [CSS](/de/docs/Web/CSS) gibt dem Renderer Hinweise darauf, welche Kompromisse beim Rendern von Formen wie Pfaden, Kreisen oder Rechtecken eingegangen werden sollen. Sie hat nur Auswirkungen auf die Elemente {{SVGElement("circle")}}, {{SVGElement("ellipse")}}, {{SVGElement("line")}}, {{SVGElement("path")}}, {{SVGElement("polygon")}}, {{SVGElement("polyline")}} und {{SVGElement("rect")}}. Wenn diese Eigenschaft explizit deklariert wird, überschreibt der Wert der CSS-Eigenschaft alle Werte des `{{SVGAttr("shape-rendering")}}`-Attributs des Elements.

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

Die Werte {{cssxref("length")}} und {{cssxref("percentage")}} geben den horizontalen Mittelpunkt des Kreises oder der Ellipse an.

- `auto`
  - : Dieser Wert weist die Benutzeragenten an, Kompromisse einzugehen, um Geschwindigkeit, Kantenschärfe und geometrische Präzision auszubalancieren, wobei der geometrischen Präzision mehr Bedeutung beigemessen wird als Geschwindigkeit und Kantenschärfe.
- `crispEdges`
  - : Dieser Wert weist den Benutzeragenten an, den Kontrast der Kanten gegenüber geometrischer Präzision oder Rendergeschwindigkeit zu betonen. Das endgültige Rendering wird wahrscheinlich Techniken wie Anti-Aliasing auslassen. Es kann auch die Position und Breite der Linien anpassen, um die Kanten an die Gerätepixel anzupassen.
- `geometricPrecision`
  - : Dieser Wert weist den Benutzeragenten an, die geometrische Präzision über Geschwindigkeit oder scharfe Kanten zu betonen. Das endgültige Rendering kann Techniken wie Anti-Aliasing beinhalten.
- `optimizeSpeed`
  - : Dieser Wert weist den Benutzeragenten an, die Rendergeschwindigkeit über geometrische Präzision oder Kantenschärfe zu betonen. Das endgültige Rendering wird wahrscheinlich Techniken wie Anti-Aliasing auslassen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiel

Um die verschiedenen Renderings zu zeigen, erstellen wir eine Reihe von vier Ellipsen gleicher Größe und Form.

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

Das resultierende SVG wird hier gezeigt. Die erste und dritte Ellipse (von links nach rechts gezählt) haben eher gezackte Kanten, während die zweite eine glattere Erscheinung haben sollte. Das Erscheinungsbild der vierten und letzten Ellipse wird durch die spezifischen Kompromisse bestimmt, die der Benutzeragent eingeht, den Sie verwenden, um das Beispiel anzusehen.

{{EmbedLiveSample("Example", "400", "240")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-Attribut {{SVGAttr("shape-rendering")}}
