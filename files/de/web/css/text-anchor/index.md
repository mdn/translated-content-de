---
title: text-anchor
slug: Web/CSS/text-anchor
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`text-anchor`** [CSS](/de/docs/Web/CSS) Eigenschaft richtet eine Box aus, die eine Textzeichenfolge enthält, wobei der Umbruchbereich von der {{cssxref("inline-size")}} Eigenschaft bestimmt wird. Der Text wird dann relativ zum Ankerpunkt des Elements platziert, der mit den {{SVGAttr('x')}} und {{SVGAttr('y')}} (oder {{SVGAttr('dx')}} und {{SVGAttr('dy')}}) Attributen definiert ist. Falls vorhanden, überschreibt der Wert der CSS-Eigenschaft jeden Wert des {{SVGAttr("text-anchor")}} Attributs des Elements.

Jedes einzelne Textfragment innerhalb eines Elements wird unabhängig ausgerichtet; daher wird ein mehrzeiliges {{SVGElement("text")}} Element jede Textzeile gemäß dem Wert von `text-anchor` ausrichten. `text-anchor` Werte haben nur Einfluss auf die SVG-Elemente {{SVGElement("text")}}, {{SVGElement("textPath")}} und {{SVGElement("tspan")}}. `text-anchor` gilt nicht für automatisch umbrochenen Text; dafür siehe {{cssxref('text-align')}}.

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
  - : Richtet den Text so aus, dass der Inline-Start der Textzeichenfolge mit dem Ankerpunkt ausgerichtet ist. Diese Ausrichtung bezieht sich auf die Schreibrichtung des Textes; so wird zum Beispiel bei rechts-nach-links und oben-nach-unten eine Schreibrichtung der Text links vom Ankerpunkt platziert. Wenn die Inline-Richtung des Textes vertikal ist, wie bei vielen asiatischen Sprachen, ist die obere Kante des Textes mit dem Ankerpunkt ausgerichtet.

- `middle`
  - : Richtet den Text so aus, dass die Mitte (Mittelpunkt) des Inline-Rahmens der Textzeichenfolge mit dem Ankerpunkt ausgerichtet ist.

- `end`
  - : Richtet den Text so aus, dass das Inline-Ende der Textzeichenfolge mit dem Ankerpunkt ausgerichtet ist. Diese Ausrichtung bezieht sich auf die Schreibrichtung des Textes; so wird beispielsweise bei rechts-nach-links und oben-nach-unten Schreibrichtung der Text rechts vom Ankerpunkt platziert. Wenn die Inline-Richtung des Textes vertikal ist, wie bei vielen asiatischen Sprachen, ist die untere Kante des Textes mit dem Ankerpunkt ausgerichtet.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiel

Drei `<text>` Elemente erhalten die gleiche `x` Position, aber unterschiedliche Werte für `text-anchor`. Eine gestrichelte rote Linie ist enthalten, um die x-Achsen-Position aller drei Ankerpunkte zu markieren.

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
- SVG {{SVGElement("text")}} Element
- SVG {{SVGAttr("text-anchor")}} Attribut
