---
title: "`text-anchor` CSS property"
short-title: text-anchor
slug: Web/CSS/Reference/Properties/text-anchor
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`text-anchor`**-[CSS](/de/docs/Web/CSS)-Eigenschaft richtet eine Box, die eine Zeichenkette enthält, an einem Punkt aus, bei dem der Umwicklungsbereich durch die {{cssxref("inline-size")}}-Eigenschaft bestimmt wird. Der Text wird dann relativ zum Ankerpunkt des Elements platziert, der mithilfe der {{SVGAttr('x')}}- und {{SVGAttr('y')}}- (oder {{SVGAttr('dx')}}- und {{SVGAttr('dy')}}-) Attribute definiert ist. Falls vorhanden, überschreibt der Wert der CSS-Eigenschaft jeden Wert des {{SVGAttr("text-anchor")}}-Attributs des Elements.

Jedes einzelne Textfragment innerhalb eines Elements wird unabhängig ausgerichtet; daher wird ein mehrzeiliges {{SVGElement("text")}}-Element jede Textzeile entsprechend dem `text-anchor`-Wert ausrichten. `text-anchor`-Werte wirken sich nur auf die SVG-Elemente {{SVGElement("text")}}, {{SVGElement("textPath")}} und {{SVGElement("tspan")}} aus. `text-anchor` gilt nicht für automatisch umgebrochenen Text; dafür siehe {{cssxref('text-align')}}.

## Syntax

```css
text-anchor: start;
text-anchor: middle;
text-anchor: end;

/* Global values */
text-anchor: inherit;
text-anchor: initial;
text-anchor: revert;
text-anchor: revert-layer;
text-anchor: unset;
```

### Werte

- `start`
  - : Richtet den Text so aus, dass der Inline-Start der Textzeichenkette mit dem Ankerpunkt ausgerichtet ist. Diese Ausrichtung ist relativ zur Schreibrichtung des Textes; so wird beispielsweise bei einer Rechts-nach-Links- und von-oben-nach-unten-Schreibrichtung der Text links vom Ankerpunkt platziert. Wenn die Inline-Richtung des Textes vertikal ist, wie bei vielen asiatischen Sprachen, wird die obere Kante des Textes mit dem Ankerpunkt ausgerichtet.

- `middle`
  - : Richtet den Text so aus, dass die Mitte (Mittelpunkt) der Textzeichenkette des Inline-Boxen mit dem Ankerpunkt ausgerichtet ist.

- `end`
  - : Richtet den Text so aus, dass das Inline-Ende der Textzeichenkette mit dem Ankerpunkt ausgerichtet ist. Diese Ausrichtung ist relativ zur Schreibrichtung des Textes; so wird beispielsweise bei einer Rechts-nach-Links- und von-oben-nach-unten-Schreibrichtung der Text rechts vom Ankerpunkt platziert. Wenn die Inline-Richtung des Textes vertikal ist, wie bei vielen asiatischen Sprachen, wird die untere Kante des Textes mit dem Ankerpunkt ausgerichtet.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiel

Drei `<text>`-Elemente haben die gleiche `x`-Position, aber unterschiedliche Werte für `text-anchor`. Eine gestrichelte rote Linie markiert die x-Achsen-Position aller drei Ankerpunkte.

```html
<svg
  viewBox="0 0 200 150"
  height="150"
  width="200"
  xmlns="http://www.w3.org/2000/svg">
  <line
    x1="100"
    y1="0"
    x2="100"
    y2="150"
    stroke="red"
    stroke-dasharray="10,5" />
  <text x="100" y="40">Anchored</text>
  <text x="100" y="80">Anchored</text>
  <text x="100" y="120">Anchored</text>
</svg>
```

```css hidden
text {
  font-size: 24px;
}
```

```css
text:nth-of-type(1) {
  text-anchor: start;
}
text:nth-of-type(2) {
  text-anchor: middle;
}
text:nth-of-type(3) {
  text-anchor: end;
}
```

{{EmbedLiveSample("Example", 200, 150)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref('dominant-baseline')}}
- SVG-{{SVGElement("text")}}-Element
- SVG-{{SVGAttr("text-anchor")}}-Attribut
