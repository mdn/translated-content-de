---
title: text-anchor
slug: Web/CSS/text-anchor
l10n:
  sourceCommit: 58313eeb2415546be9763dc691b6d519433c6dbb
---

{{CSSRef}}

Die **`text-anchor`** [CSS](/de/docs/Web/CSS) Eigenschaft richtet ein Feld aus, das eine Textzeichenfolge enthält, wobei der Umbruchbereich über die {{cssxref("inline-size")}} Eigenschaft bestimmt wird. Der Text wird dann relativ zu dem Ankerpunkt des Elements platziert, der durch die {{SVGAttr('x')}} und {{SVGAttr('y')}} (oder {{SVGAttr('dx')}} und {{SVGAttr('dy')}}) Attribute definiert ist. Wenn vorhanden, überschreibt der Wert der CSS-Eigenschaft jeden Wert des {{SVGAttr("text-anchor")}} Attributs des Elements.

Jedes einzelne Textfragment innerhalb eines Elements wird unabhängig ausgerichtet; daher wird ein mehrzeiliges {{SVGElement("text")}} Element jede Textzeile gemäß dem Wert von `text-anchor` ausrichten. `text-anchor` Werte wirken sich nur auf die {{SVGElement("text")}}, {{SVGElement("textPath")}}, {{SVGElement("tref")}} und {{SVGElement("tspan")}} SVG-Elemente aus. `text-anchor` gilt nicht für automatisch umbrochenen Text; dafür siehe {{cssxref('text-align')}}.

## Syntax

```css
text-anchor: start;
text-anchor: middle;
text-anchor: end;

/* Globale Werte */
text-anchor: inherit;
text-anchor: initial;
text-anchor: revert;
text-anchor: revert-layer;
text-anchor: unset;
```

### Werte

- `start`

  - : Richtet den Text so aus, dass der Start der Textzeichenfolge mit dem Ankerpunkt ausgerichtet ist. Diese Ausrichtung erfolgt relativ zur Schreibrichtung des Textes; zum Beispiel wird im Fall der Schreibrichtung von rechts nach links von oben nach unten der Text links vom Ankerpunkt platziert. Wenn die Inline-Richtung des Textes vertikal ist, wie bei vielen asiatischen Sprachen, wird die obere Kante des Textes mit dem Ankerpunkt ausgerichtet.

- `middle`

  - : Richtet den Text so aus, dass die Mitte des Inline-Box der Textzeichenfolge mit dem Ankerpunkt ausgerichtet ist.

- `end`

  - : Richtet den Text so aus, dass das Ende der Textzeichenfolge mit dem Ankerpunkt ausgerichtet ist. Diese Ausrichtung erfolgt relativ zur Schreibrichtung des Textes; zum Beispiel wird im Fall der Schreibrichtung von rechts nach links von oben nach unten der Text rechts vom Ankerpunkt platziert. Wenn die Inline-Richtung des Textes vertikal ist, wie bei vielen asiatischen Sprachen, wird die untere Kante des Textes mit dem Ankerpunkt ausgerichtet.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiel

Drei `<text>` Elemente erhalten die gleiche `x` Position, aber unterschiedliche Werte für `text-anchor`. Eine gestrichelte rote Linie wird hinzugefügt, um die x-Achse-Position aller drei Ankerpunkte zu markieren.

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{cssxref('dominant-baseline')}}
- SVG {{SVGElement("text")}} Element
- SVG {{SVGAttr("text-anchor")}} Attribut
