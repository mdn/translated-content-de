---
title: "`dominant-baseline` CSS property"
short-title: dominant-baseline
slug: Web/CSS/Reference/Properties/dominant-baseline
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`dominant-baseline`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die spezifische {{Glossary("Baseline/Typography", "Basislinie")}} fest, die verwendet wird, um den Text und die Inhalte auf Inline-Ebene einer Box auszurichten. Sie gibt auch die Standardausrichtungsbasislinie aller Boxen an, die an der Basislinenausrichtung im Kontext der Boxausrichtung teilnehmen. Falls vorhanden, überschreibt sie das {{SVGAttr("dominant-baseline")}}-Attribut der Form.

Basislinien werden aus der Basislinientabelle der Schriftart ausgewählt. Gibt es keine Basislinientabelle in der nominalen Schriftart oder fehlt der gewünschte Eintrag in der Basislinientabelle, darf der Browser Heuristiken verwenden, um die Position der gewünschten Basislinie zu bestimmen.

Die `dominant-baseline`-Eigenschaft wird verwendet, um eine _scaled-baseline-table_ zu bestimmen oder neu zu bestimmen. Eine scaled-baseline-table ist ein zusammengesetzter Wert mit drei Komponenten:

1. ein Basislinien-Identifikator für die dominante Basislinie,
2. eine Basislinientabelle und
3. eine Basislinien-Schriftgröße.

Einige Werte von `dominant-baseline` bestimmen alle drei Werte neu. Andere stellen nur die Schriftgröße der Basislinientabelle wieder her. Wenn der Anfangswert, `auto`, ein unerwünschtes Ergebnis liefern würde, kann diese Eigenschaft verwendet werden, um die gewünschte scaled-baseline-table explizit festzulegen.

> [!NOTE]
> Die `dominant-baseline`-Eigenschaft wirkt sich nur auf die {{SVGElement("text")}}, {{SVGElement("textPath")}} und {{SVGElement("tspan")}} SVG-Elemente aus.

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
  - : Wird diese Eigenschaft auf ein {{SVGElement("text")}}-Element angewendet, hängt der berechnete Wert vom Wert des {{SVGAttr("writing-mode")}}-Attributs ab.

    Ist der {{SVGAttr("writing-mode")}} horizontal, dann ist der Wert der dominanten Basislinien-Komponente `alphabetic`. Andernfalls, wenn der {{SVGAttr("writing-mode")}} vertikal ist, dann ist der Wert der dominanten Basislinien-Komponente `central`.

    Wird diese Eigenschaft auf ein {{SVGElement("tspan")}}- oder {{SVGElement("textPath")}}-Element angewendet, bleiben die dominanten Basislinien- und Basislinientabellen-Komponenten dieselben wie die des übergeordneten Textinhalts-Elements.

    Wenn der berechnete {{SVGAttr("baseline-shift")}}-Wert die Basislinie tatsächlich verschiebt, wird die Schriftgröße der Basislinientabelle auf den Wert des {{SVGAttr("font-size")}}-Attributs des Elements gesetzt, bei dem das `dominant-baseline`-Attribut vorkommt. Andernfalls bleibt die Schriftgröße der Basislinientabelle dieselbe wie die des Elements.

    Gibt es kein übergeordnetes Textinhalts-Element, wird der scaled-baseline-table-Wert wie für {{SVGElement("text")}}-Elemente konstruiert.

- `alphabetic`
  - : Der Basislinien-Identifikator für die dominante Basislinie wird auf `alphabetic` gesetzt. Die abgeleitete Basislinientabelle wird unter Verwendung der `alphabetic`-Basislinientabelle in der Schrift erstellt, und die Schriftgröße der Basislinientabelle wird auf den Wert des {{SVGAttr('font-size')}} SVG-Attributs oder der CSS {{cssxref('font-size')}}, falls gesetzt, geändert.
- `central`
  - : Der Basislinien-Identifikator für die dominante Basislinie wird auf `central` gesetzt. Die abgeleitete Basislinientabelle wird aus den definierten Basislinien in der Basislinientabelle der Schrift erstellt. Diese Schrift-Basislinientabelle wird anhand der folgenden Prioritätenreihenfolge von Basislinientabellennamen gewählt: `ideographic`, `alphabetic`, `hanging`, `mathematical`. Die Schriftgröße der Basislinientabelle wird auf den Wert des {{SVGAttr('font-size')}} SVG-Attributs oder des CSS {{cssxref('font-size')}}, falls gesetzt, geändert.
- `hanging`
  - : Der Basislinien-Identifikator für die dominante Basislinie wird auf `hanging` gesetzt. Die abgeleitete Basislinientabelle wird unter Verwendung der `hanging`-Basislinientabelle in der Schrift erstellt, und die Schriftgröße der Basislinientabelle wird auf den Wert des {{SVGAttr('font-size')}} SVG-Attributs der {{cssxref('font-size')}}-CSS-Eigenschaft für dieses Element geändert.
- `ideographic`
  - : Der Basislinien-Identifikator für die dominante Basislinie wird auf `ideographic` gesetzt. Die abgeleitete Basislinientabelle wird unter Verwendung der `ideographic`-Basislinientabelle in der Schrift erstellt, und die Schriftgröße der Basislinientabelle wird auf den Wert des {{SVGAttr('font-size')}} SVG-Attributs oder der CSS {{cssxref('font-size')}}, falls gesetzt, geändert.
- `mathematical`
  - : Der Basislinien-Identifikator für die dominante Basislinie wird auf `mathematical` gesetzt. Die abgeleitete Basislinientabelle wird unter Verwendung der `mathematical`-Basislinientabelle in der Schrift erstellt, und die Schriftgröße der Basislinientabelle wird auf den Wert des {{SVGAttr('font-size')}} SVG-Attributs oder der CSS {{cssxref('font-size')}}, falls gesetzt, geändert.
- `middle`
  - : Der Basislinien-Identifikator für die dominante Basislinie wird auf `middle` gesetzt. Die abgeleitete Basislinientabelle wird aus den definierten Basislinien in einer Basislinientabelle der Schrift erstellt. Diese Schrift-Basislinientabelle wird anhand der folgenden Prioritätenreihenfolge von Basislinientabellennamen gewählt: `ideographic`, `alphabetic`, `hanging`, `mathematical`. Die Schriftgröße der Basislinientabelle wird auf den Wert des {{SVGAttr('font-size')}} SVG-Attributs oder der CSS {{cssxref('font-size')}}, falls gesetzt, geändert.
- `text-bottom`
  - : Die _line-under_-Kante wird als Basislinie verwendet, die normalerweise der untere Rand der em-Box der Schrift ist.
- `text-top`
  - : Die _line-over_-Kante wird als Basislinie verwendet, die normalerweise der obere Rand der em-Box der Schrift ist.

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
