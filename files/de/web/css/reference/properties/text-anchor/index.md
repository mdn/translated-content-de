---
title: "`text-anchor` CSS property"
short-title: text-anchor
slug: Web/CSS/Reference/Properties/text-anchor
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

Die **`text-anchor`** [CSS](/de/docs/Web/CSS) Eigenschaft richtet eine Box aus, die eine Textzeichenfolge enthält, wobei der Umschlagbereich anhand der {{cssxref("inline-size")}} Eigenschaft bestimmt wird. Der Text wird dann relativ zum Ankerpunkt des Elements platziert, der mithilfe der {{SVGAttr('x')}} und {{SVGAttr('y')}} (oder {{SVGAttr('dx')}} und {{SVGAttr('dy')}}) Attribute definiert wird. Ist ein Wert vorhanden, so überschreibt der Wert der CSS-Eigenschaft jeden Wert des {{SVGAttr("text-anchor")}} Attributs des Elements.

Jedes einzelne Textfragment innerhalb eines Elements wird unabhängig ausgerichtet; daher wird ein mehrzeiliges {{SVGElement("text")}} Element jede Textzeile entsprechend dem Wert von `text-anchor` ausrichten. `text-anchor` Werte haben nur eine Wirkung auf die {{SVGElement("text")}}, {{SVGElement("textPath")}} und {{SVGElement("tspan")}} SVG-Elemente. `text-anchor` gilt nicht für automatisch umbrochenen Text; dafür siehe {{cssxref('text-align')}}.

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

Diese Eigenschaft wird als eines der folgenden Schlüsselwortwerte angegeben:

- `start`
  - : Richtet den Text so aus, dass der Inline-Start der Textzeichenfolge mit dem Ankerpunkt ausgerichtet ist. Diese Ausrichtung ist relativ zur Schreibrichtung des Textes; beispielsweise wird beim Schreiben von rechts nach links, von oben nach unten der Text links vom Ankerpunkt platziert. Ist die Inline-Richtung des Textes vertikal, wie bei vielen asiatischen Sprachen, wird die obere Kante des Textes mit dem Ankerpunkt ausgerichtet.

- `middle`
  - : Richtet den Text so aus, dass die Mitte der Inline-Box der Textzeichenfolge mit dem Ankerpunkt übereinstimmt.

- `end`
  - : Richtet den Text so aus, dass das Inline-Ende der Textzeichenfolge mit dem Ankerpunkt ausgerichtet ist. Diese Ausrichtung ist relativ zur Schreibrichtung des Textes; beispielsweise wird beim Schreiben von rechts nach links, von oben nach unten der Text rechts vom Ankerpunkt platziert. Ist die Inline-Richtung des Textes vertikal, wie bei vielen asiatischen Sprachen, wird die untere Kante des Textes mit dem Ankerpunkt ausgerichtet.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiel

Drei `<text>` Elemente haben dieselbe `x` Position, aber unterschiedliche Werte für `text-anchor`. Eine gestrichelte rote Linie markiert die x-Achsenposition aller drei Ankerpunkte.

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
