---
title: "`shape-rendering` CSS property"
short-title: shape-rendering
slug: Web/CSS/Reference/Properties/shape-rendering
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`shape-rendering`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt dem Renderer Hinweise darauf, welche Kompromisse beim Rendern von Formen wie Pfaden, Kreisen oder Rechtecken eingegangen werden sollten. Sie hat nur Auswirkungen auf die {{SVGElement("circle")}}, {{SVGElement("ellipse")}}, {{SVGElement("line")}}, {{SVGElement("path")}}, {{SVGElement("polygon")}}, {{SVGElement("polyline")}} und {{SVGElement("rect")}} Elemente. Wenn explizit deklariert, überschreibt der Wert der CSS-Eigenschaft alle Werte des {{SVGAttr("shape-rendering")}}-Attributs des Elements.

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

Die {{cssxref("length")}} und {{cssxref("percentage")}} Werte bestimmen das horizontale Zentrum des Kreises oder der Ellipse.

- `auto`
  - : Dieser Wert weist die Benutzeragenten an, Kompromisse einzugehen, um Geschwindigkeit, Kantenpräzision und geometrische Präzision auszugleichen, wobei der geometrischen Präzision mehr Bedeutung beigemessen wird als Geschwindigkeit und Kantenpräzision.
- `crispEdges`
  - : Dieser Wert weist den Benutzeragenten an, den Kantenkontrast gegenüber der geometrischen Präzision oder der Rendergeschwindigkeit zu betonen. Das endgültige Rendering überspringt wahrscheinlich Techniken wie Anti-Aliasing. Es kann auch die Positionen und Breiten von Linien anpassen, um Kanten mit Gerätepixeln auszurichten.
- `geometricPrecision`
  - : Dieser Wert weist den Benutzeragenten an, die geometrische Präzision gegenüber Geschwindigkeit oder scharfen Kanten zu betonen. Das endgültige Rendering kann Techniken wie Anti-Aliasing beinhalten.
- `optimizeSpeed`
  - : Dieser Wert weist den Benutzeragenten an, die Rendergeschwindigkeit gegenüber der geometrischen Präzision oder Kantenpräzision zu betonen. Das endgültige Rendering überspringt wahrscheinlich Techniken wie Anti-Aliasing.

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

Dann wenden wir die vier Werte von `shape-rendering` jeweils auf eine Ellipse an.

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

Das resultierende SVG wird hier gezeigt. Die erste und dritte Ellipse (von links nach rechts gezählt) zeigen wahrscheinlich eher gezackte Kanten, während die zweite ein glatteres Erscheinungsbild haben sollte. Das Aussehen der vierten und letzten Ellipse wird durch die spezifischen Kompromisse bestimmt, die der Benutzeragent eingeht, mit dem Sie das Beispiel betrachten.

{{EmbedLiveSample("Example", "400", "240")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-{{SVGAttr("shape-rendering")}}-Attribut
