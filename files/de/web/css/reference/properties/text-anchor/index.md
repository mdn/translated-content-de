---
title: text-anchor
slug: Web/CSS/Reference/Properties/text-anchor
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`text-anchor`** [CSS](/de/docs/Web/CSS)-Eigenschaft richtet eine Box aus, die eine Textzeichenfolge enthält, wobei der Umbruchbereich aus der {{cssxref("inline-size")}}-Eigenschaft bestimmt wird. Der Text wird dann relativ zum Ankerpunkt des Elements platziert, der mit den {{SVGAttr('x')}} und {{SVGAttr('y')}} (oder {{SVGAttr('dx')}} und {{SVGAttr('dy')}}) Attributen definiert ist. Ist vorhanden, überschreibt der Wert der CSS-Eigenschaft jeden Wert des {{SVGAttr("text-anchor")}}-Attributs des Elements.

Jedes einzelne Textfragment innerhalb eines Elements wird unabhängig ausgerichtet. Daher wird ein mehrzeiliges {{SVGElement("text")}}-Element jede Textzeile gemäß dem Wert von `text-anchor` ausrichten. `text-anchor`-Werte haben nur auf die SVG-Elemente {{SVGElement("text")}}, {{SVGElement("textPath")}} und {{SVGElement("tspan")}} eine Wirkung. `text-anchor` gilt nicht für automatisch umbrochenen Text; hierfür wird {{cssxref('text-align')}} empfohlen.

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
  - : Richtet den Text so aus, dass der Inline-Start der Textzeichenfolge mit dem Ankerpunkt übereinstimmt. Diese Ausrichtung ist relativ zur Schreibrichtung des Textes. Bei einer Schreibrichtung von rechts nach links und oben nach unten wird der Text beispielsweise links vom Ankerpunkt platziert. Wenn die Inline-Richtung des Textes vertikal ist, wie bei vielen asiatischen Sprachen, wird die obere Kante des Textes mit dem Ankerpunkt ausgerichtet.

- `middle`
  - : Richtet den Text so aus, dass die Mitte (das Zentrum) des Inline-Box der Textzeichenfolge mit dem Ankerpunkt übereinstimmt.

- `end`
  - : Richtet den Text so aus, dass das Inline-Ende der Textzeichenfolge mit dem Ankerpunkt übereinstimmt. Diese Ausrichtung ist relativ zur Schreibrichtung des Textes. Bei einer Schreibrichtung von rechts nach links und oben nach unten wird der Text beispielsweise rechts vom Ankerpunkt platziert. Wenn die Inline-Richtung des Textes vertikal ist, wie bei vielen asiatischen Sprachen, wird die untere Kante des Textes mit dem Ankerpunkt ausgerichtet.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiel

Drei `<text>`-Elemente erhalten die gleiche `x`-Position, aber unterschiedliche Werte für `text-anchor`. Eine gestrichelte rote Linie markiert die x-Achsen-Position aller drei Ankerpunkte.

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
- SVG {{SVGElement("text")}}-Element
- SVG {{SVGAttr("text-anchor")}}-Attribut
