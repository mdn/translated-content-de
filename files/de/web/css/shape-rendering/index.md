---
title: shape-rendering
slug: Web/CSS/shape-rendering
l10n:
  sourceCommit: 10c719061d0f21f1b6ff4457a624e9dd49083d3f
---

{{CSSRef}}

Die **`shape-rendering`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt dem Renderer Hinweise darauf, welche Kompromisse beim Rendern von Formen wie Pfaden, Kreisen oder Rechtecken einzugehen sind. Sie wirkt sich nur auf die {{SVGElement("circle")}}, {{SVGElement("ellipse")}}, {{SVGElement("line")}}, {{SVGElement("path")}}, {{SVGElement("polygon")}}, {{SVGElement("polyline")}}, und {{SVGElement("rect")}} Elemente aus. Wird sie explizit deklariert, überschreibt der Wert der CSS-Eigenschaft alle Werte des {{SVGAttr("shape-rendering")}} Attributs des Elements.

## Syntax

```css
shape-rendering: auto;
shape-rendering: crispEdges;
shape-rendering: geometricPrecision;
shape-rendering: optimizeSpeed;

/* Globale Werte */
shape-rendering: inherit;
shape-rendering: initial;
shape-rendering: revert;
shape-rendering: revert-layer;
shape-rendering: unset;
```

### Werte

Die {{cssxref("length")}} und {{cssxref("percentage")}} Werte geben das horizontale Zentrum des Kreises oder der Ellipse an.

- `auto`
  - : Dieser Wert weist die Benutzeragenten an, Kompromisse einzugehen, um Geschwindigkeit, Kantenpräzision und geometrische Genauigkeit auszugleichen, wobei der geometrischen Genauigkeit mehr Bedeutung beigemessen wird als der Geschwindigkeit und Kantenpräzision.
- `crispEdges`
  - : Dieser Wert weist den Benutzeragenten an, den Kantenkontrast über die geometrische Genauigkeit oder die Rendegeschwindigkeit zu betonen. Das endgültige Rendering überspringt wahrscheinlich Techniken wie Kantenglättung. Es kann auch Linienpositionen und Linienbreiten anpassen, um Kanten mit Gerätepixeln auszurichten.
- `geometricPrecision`
  - : Dieser Wert weist den Benutzeragenten an, die geometrische Genauigkeit über Geschwindigkeit oder scharfe Kanten zu betonen. Das endgültige Rendering kann Techniken wie Kantenglättung umfassen.
- `optimizeSpeed`
  - : Dieser Wert weist den Benutzeragenten an, die Rendegeschwindigkeit über geometrische Genauigkeit oder Kantenpräzision zu betonen. Das endgültige Rendering überspringt wahrscheinlich Techniken wie Kantenglättung.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiel

Um die verschiedenen Renderings zu zeigen, erstellen wir ein Set von vier Ellipsen gleicher Größe und Form.

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

Das resultierende SVG wird hier gezeigt. Die erste und dritte Ellipse (von links nach rechts gezählt) zeigen wahrscheinlich eher gezackte Kanten, während die zweite eine glattere Erscheinung haben sollte. Das Aussehen der vierten und letzten Ellipse wird von den spezifischen Kompromissen bestimmt, die der von Ihnen verwendete Benutzeragent beim Anzeigen des Beispiels macht.

{{EmbedLiveSample("Example", "400", "240")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGAttr("shape-rendering")}} Attribut
