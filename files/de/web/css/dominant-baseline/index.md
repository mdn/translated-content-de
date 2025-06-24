---
title: dominant-baseline
slug: Web/CSS/dominant-baseline
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`dominant-baseline`**-Eigenschaft von [CSS](/de/docs/Web/CSS) gibt die spezifische {{Glossary("Baseline/Typography", "Grundlinie")}} an, die verwendet wird, um den Text und die Inline-Inhalte des Box-Elements auszurichten. Sie zeigt auch die Standardausrichtungsgrundlinie jeder Box an, die in einem Box-Ausrichtungskontext an der Grundlinienausrichtung teilnimmt. Ist sie vorhanden, überschreibt sie das {{SVGAttr("dominant-baseline")}}-Attribut der Form.

Grundlinien werden aus der Grundlinentabelle der Schriftart ausgewählt. Wenn es in der nominalen Schrift keine Grundlinentabelle gibt oder die Grundlinentabelle keinen Eintrag für die gewünschte Grundlinie enthält, kann der Browser Heuristiken verwenden, um die Position der gewünschten Grundlinie zu bestimmen.

Die `dominant-baseline`-Eigenschaft wird verwendet, um eine _scaled-baseline-table_ zu bestimmen oder neu zu bestimmen. Eine scaled-baseline-table ist ein zusammengesetzter Wert mit drei Komponenten:

1. einem Grundlinien-Identifier für die dominante Grundlinie,
2. einer Grundlinentabelle, und
3. einer Schriftgröße der Grundlinentabelle.

Einige Werte von `dominant-baseline` bestimmen alle drei Werte neu. Andere setzen nur die Schriftgröße der Grundlinentabelle neu fest. Wenn der Anfangswert `auto` ein unerwünschtes Ergebnis liefert, kann diese Eigenschaft verwendet werden, um explizit die gewünschte scaled-baseline-table festzulegen.

> [!NOTE]
> Die `dominant-baseline`-Eigenschaft hat nur Auswirkungen auf die {{SVGElement("text")}}, {{SVGElement("textPath")}} und {{SVGElement("tspan")}} SVG-Elemente.

## Syntax

```css
/* Initial value */
dominant-baseline: auto;

/* Keyword values */
dominant-baseline: alphabetic;
dominant-baseline: central;
dominant-baseline: hanging;
dominant-baseline: ideographic;
dominant-baseline: mathematical;
dominant-baseline: middle;
dominant-baseline: text-bottom;
dominant-baseline: text-top;

/* Global values */
dominant-baseline: inherit;
dominant-baseline: initial;
dominant-baseline: revert;
dominant-baseline: revert-layer;
dominant-baseline: unset;
```

### Werte

- `auto`

  - : Wenn diese Eigenschaft auf ein {{SVGElement("text")}}-Element angewendet wird, hängt der berechnete Wert vom Wert des {{SVGAttr("writing-mode")}}-Attributs ab.

    Wenn der {{SVGAttr("writing-mode")}} horizontal ist, dann ist der Wert der dominanten Grundlinienkomponente `alphabetic`. Andernfalls, wenn der {{SVGAttr("writing-mode")}} vertikal ist, dann ist der Wert der dominanten Grundlinienkomponente `central`.

    Wenn diese Eigenschaft auf ein {{SVGElement("tspan")}}- oder {{SVGElement("textPath")}}-Element angewendet wird, bleiben die dominanten Grundlinien- und Grundlinentabellenkomponenten dieselben wie die des übergeordneten Textelementinhalts.

    Wenn der berechnete {{SVGAttr("baseline-shift")}}-Wert tatsächlich die Grundlinie verschiebt, wird die Schriftgröße der Grundlinentabelle auf den Wert des {{SVGAttr("font-size")}}-Attributs des Elements gesetzt, auf dem das `dominant-baseline`-Attribut vorkommt, andernfalls bleibt die Schriftgröße der Grundlinentabelle dieselbe wie die des Elements.

    Gibt es kein übergeordnetes Textelement, wird der Wert der scaled-baseline-table wie bei {{SVGElement("text")}}-Elementen konstruiert.

- `alphabetic`
  - : Der Grundlinien-Identifier für die dominante Grundlinie wird auf `alphabetic` gesetzt, die abgeleitete Grundlinentabelle wird unter Verwendung der `alphabetic` Grundlinentabelle in der Schrift konstruiert, und die Schriftgröße der Grundlinentabelle wird auf den Wert des {{SVGAttr('font-size')}} SVG-Attributs des Elements oder des CSS {{cssxref('font-size')}} geändert, falls festgelegt.
- `central`
  - : Der Grundlinien-Identifier für die dominante Grundlinie wird auf `central` gesetzt. Die abgeleitete Grundlinentabelle wird aus den in der Grundlinentabelle der Schrift definierten Grundlinien konstruiert. Diese Schriftgrundlinentabelle wird unter Verwendung der folgenden Prioritätenreihenfolge der Grundlinentabellennamen ausgewählt: `ideographic`, `alphabetic`, `hanging`, `mathematical`. Die Schriftgröße der Grundlinentabelle wird auf den Wert des {{SVGAttr('font-size')}} SVG-Attributs des Elements oder des CSS {{cssxref('font-size')}} geändert, falls festgelegt.
- `hanging`
  - : Der Grundlinien-Identifier für die dominante Grundlinie wird auf `hanging` gesetzt, die abgeleitete Grundlinentabelle wird unter Verwendung der `hanging` Grundlinentabelle in der Schrift konstruiert, und die Schriftgröße der Grundlinentabelle wird auf den Wert des {{SVGAttr('font-size')}} SVG-Attributs oder der {{cssxref('font-size')}} CSS-Eigenschaft für dieses Element geändert.
- `ideographic`
  - : Der Grundlinien-Identifier für die dominante Grundlinie wird auf `ideographic` gesetzt, die abgeleitete Grundlinentabelle wird unter Verwendung der `ideographic` Grundlinentabelle in der Schrift konstruiert, und die Schriftgröße der Grundlinentabelle wird auf den Wert des {{SVGAttr('font-size')}} SVG-Attributs des Elements oder des CSS {{cssxref('font-size')}} geändert, falls festgelegt.
- `mathematical`
  - : Der Grundlinien-Identifier für die dominante Grundlinie wird auf `mathematical` gesetzt, die abgeleitete Grundlinentabelle wird unter Verwendung der `mathematical` Grundlinentabelle in der Schrift konstruiert, und die Schriftgröße der Grundlinentabelle wird auf den Wert des {{SVGAttr('font-size')}} SVG-Attributs des Elements oder des CSS {{cssxref('font-size')}} geändert, falls festgelegt.
- `middle`
  - : Der Grundlinien-Identifier für die dominante Grundlinie wird auf `middle` gesetzt. Die abgeleitete Grundlinentabelle wird aus den in einer Grundlinentabelle der Schrift definierten Grundlinien konstruiert. Diese Schriftgrundlinentabelle wird unter Verwendung der folgenden Prioritätenreihenfolge der Grundlinentabellennamen ausgewählt: `ideographic`, `alphabetic`, `hanging`, `mathematical`. Die Schriftgröße der Grundlinentabelle wird auf den Wert des {{SVGAttr('font-size')}} SVG-Attributs des Elements oder des CSS {{cssxref('font-size')}} geändert, falls festgelegt.
- `text-bottom`
  - : Die _line-under_ Kante wird als Grundlinie verwendet, was normalerweise die untere Kante der Em-Box der Schrift ist.
- `text-top`
  - : Die _line-over_ Kante wird als Grundlinie verwendet, was normalerweise die obere Kante der Em-Box der Schrift ist.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiel

```html
<svg viewBox="0 0 450 160" width="700" height="200">
  <text x="50" y="20">alphabetic</text>
  <text x="50" y="60">central</text>
  <text x="50" y="100">hanging</text>
  <text x="50" y="140">ideographic</text>
  <text x="250" y="20">mathematical</text>
  <text x="250" y="60">middle</text>
  <text x="250" y="100">text-bottom</text>
  <text x="250" y="140">text-top</text>
  <path
    d="M   0,20 l 400,0
       m -400,40 l 400,0
       m -400,40 l 400,0
       m -400,40 l 400,0"
    stroke="grey" />
  <text x="0" y="20" fill="red">auto</text>
  <text x="0" y="60" fill="red">auto</text>
  <text x="0" y="100" fill="red">auto</text>
  <text x="0" y="140" fill="red">auto</text>
</svg>
```

```css
text {
  font-size: 20px;
}
text:nth-of-type(1) {
  dominant-baseline: alphabetic;
}
text:nth-of-type(2) {
  dominant-baseline: central;
}
text:nth-of-type(3) {
  dominant-baseline: hanging;
}
text:nth-of-type(4) {
  dominant-baseline: ideographic;
}
text:nth-of-type(5) {
  dominant-baseline: mathematical;
}
text:nth-of-type(6) {
  dominant-baseline: middle;
}
text:nth-of-type(7) {
  dominant-baseline: text-bottom;
}
text:nth-of-type(8) {
  dominant-baseline: text-top;
}
```

{{EmbedLiveSample("Example", "750", "220")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref('alignment-baseline')}}
- {{cssxref('text-anchor')}}
- {{cssxref('vertical-align')}}
- SVG {{SVGAttr('dominant-baseline')}} Attribut
