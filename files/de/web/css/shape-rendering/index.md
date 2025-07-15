---
title: shape-rendering
slug: Web/CSS/shape-rendering
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`shape-rendering`** [CSS](/de/docs/Web/CSS) Eigenschaft bietet dem Renderer Hinweise darauf, welche Kompromisse beim Rendern von Formen wie Pfaden, Kreisen oder Rechtecken gemacht werden sollen. Sie hat nur Einfluss auf die {{SVGElement("circle")}}, {{SVGElement("ellipse")}}, {{SVGElement("line")}}, {{SVGElement("path")}}, {{SVGElement("polygon")}}, {{SVGElement("polyline")}}, und {{SVGElement("rect")}} Elemente. Wenn explizit deklariert, überschreibt der Wert der CSS-Eigenschaft alle Werte des {{SVGAttr("shape-rendering")}} Attributs des Elements.

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

Die {{cssxref("length")}} und {{cssxref("percentage")}} Werte bezeichnen das horizontale Zentrum des Kreises oder der Ellipse.

- `auto`
  - : Dieser Wert weist die Benutzeragenten an, Kompromisse einzugehen, um Geschwindigkeit, Kantenschärfe und geometrische Präzision auszugleichen, wobei der geometrischen Präzision mehr Bedeutung beigemessen wird als Geschwindigkeit und Kantenschärfe.
- `crispEdges`
  - : Dieser Wert weist den Benutzeragenten an, den Kontrast der Kanten gegenüber der geometrischen Präzision oder der Rendering-Geschwindigkeit zu betonen. Das endgültige Rendering wird wahrscheinlich Techniken wie Anti-Aliasing überspringen. Es kann auch die Positionen und Breiten von Linien anpassen, um Kanten mit Gerätepixels auszurichten.
- `geometricPrecision`
  - : Dieser Wert weist den Benutzeragenten an, die geometrische Präzision gegenüber Geschwindigkeit oder scharfen Kanten zu betonen. Das endgültige Rendering kann Techniken wie Anti-Aliasing einbeziehen.
- `optimizeSpeed`
  - : Dieser Wert weist den Benutzeragenten an, die Rendering-Geschwindigkeit gegenüber geometrischer Präzision oder Kantenschärfe zu betonen. Das endgültige Rendering wird wahrscheinlich Techniken wie Anti-Aliasing überspringen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiel

Um die unterschiedlichen Renderings zu zeigen, erstellen wir ein Set von vier Ellipsen gleicher Größe und Form.

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

Das resultierende SVG wird hier gezeigt. Die erste und dritte Ellipsen (von links nach rechts gezählt) zeigen wahrscheinlich eher gezackte Kanten, während die zweite ein glatteres Erscheinungsbild haben sollte. Das Erscheinungsbild der vierten und letzten Ellipse wird durch die spezifischen Kompromisse bestimmt, die der von Ihnen verwendete Benutzeragent beim Betrachten des Beispiels eingeht.

{{EmbedLiveSample("Example", "400", "240")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGAttr("shape-rendering")}} Attribut
