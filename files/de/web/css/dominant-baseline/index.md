---
title: dominant-baseline
slug: Web/CSS/dominant-baseline
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`dominant-baseline`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die spezifische {{Glossary("Baseline/Typography", "Baseline")}} fest, die zum Ausrichten des Texts und der Inline-Inhalte der Box verwendet wird. Sie gibt auch die Standardausrichtungs-Baseline aller Boxen an, die im Ausrichtungskontext der Box an der Baseline-Ausrichtung teilnehmen. Wenn vorhanden, überschreibt sie das {{SVGAttr("dominant-baseline")}} Attribut der Form.

Baselines werden aus der Schrift-Baseline-Tabelle ausgewählt. Wenn es keine Baseline-Tabelle in der nominalen Schrift gibt oder wenn die Baseline-Tabelle keinen Eintrag für die gewünschte Baseline enthält, kann der Browser Heuristiken verwenden, um die Position der gewünschten Baseline zu bestimmen.

Die `dominant-baseline` Eigenschaft wird verwendet, um eine _scaled-baseline-table_ zu bestimmen oder neu zu bestimmen. Eine scaled-baseline-table ist ein zusammengesetzter Wert mit drei Komponenten:

1. einem Baseline-Identifikator für die dominant-baseline,
2. einer Baseline-Tabelle und
3. einer Größe der Baseline-Tabelle.

Einige Werte von `dominant-baseline` bestimmen alle drei Werte neu. Andere stellen nur die Größe der Baseline-Tabelle wieder her. Wenn der Anfangswert `auto` zu einem unerwünschten Ergebnis führen würde, kann diese Eigenschaft verwendet werden, um die gewünschte scaled-baseline-table explizit festzulegen.

> [!NOTE]
> Die `dominant-baseline` Eigenschaft wirkt sich nur auf die {{SVGElement("text")}}, {{SVGElement("textPath")}} und {{SVGElement("tspan")}} SVG-Elemente aus.

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
  - : Wenn diese Eigenschaft auf ein {{SVGElement("text")}} Element angewendet wird, hängt der berechnete Wert vom Wert des {{SVGAttr("writing-mode")}} Attributs ab.

    Ist der {{SVGAttr("writing-mode")}} horizontal, dann ist der Wert der dominant-baseline Komponente `alphabetic`. Andernfalls, wenn der {{SVGAttr("writing-mode")}} vertikal ist, ist der Wert der dominant-baseline Komponente `central`.

    Wenn diese Eigenschaft auf ein {{SVGElement("tspan")}} oder {{SVGElement("textPath")}} Element angewendet wird, bleiben die dominant-baseline und die Baseline-Tabelle Komponenten dieselben wie die des übergeordneten Textinhalts-Elements.

    Wenn der berechnete {{SVGAttr("baseline-shift")}} Wert die Baseline tatsächlich verschiebt, wird die Größe der Baseline-Tabelle auf den Wert des {{SVGAttr("font-size")}} Attributs des Elements gesetzt, auf dem das `dominant-baseline` Attribut auftritt, andernfalls bleibt die Größe der Baseline-Tabelle gleich der des Elements.

    Wenn es kein übergeordnetes Textinhaltelement gibt, wird der Wert der scaled-baseline-table so konstruiert wie für {{SVGElement("text")}} Elemente.

- `alphabetic`
  - : Der Baseline-Identifikator für die dominant-baseline wird auf `alphabetic` gesetzt, die abgeleitete Baseline-Tabelle wird unter Verwendung der `alphabetic` Baseline-Tabelle in der Schrift konstruiert, und die Größe der Baseline-Tabelle wird auf den Wert des {{SVGAttr('font-size')}} SVG-Attributs des Elements oder der CSS {{cssxref('font-size')}}, wenn gesetzt, geändert.
- `central`
  - : Der Baseline-Identifikator für die dominant-baseline wird auf `central` gesetzt. Die abgeleitete Baseline-Tabelle wird aus den in der Baseline-Tabelle der Schrift definierten Baselines konstruiert. Diese Schrift-Baseline-Tabelle wird unter Verwendung der folgenden Prioritätsreihenfolge von Baseline-Tabellennamen gewählt: `ideographic`, `alphabetic`, `hanging`, `mathematical`. Die Größe der Baseline-Tabelle wird auf den Wert des {{SVGAttr('font-size')}} SVG-Attributs des Elements oder der CSS {{cssxref('font-size')}}, wenn gesetzt, geändert.
- `hanging`
  - : Der Baseline-Identifikator für die dominant-baseline wird auf `hanging` gesetzt, die abgeleitete Baseline-Tabelle wird unter Verwendung der `hanging` Baseline-Tabelle in der Schrift konstruiert, und die Größe der Baseline-Tabelle wird auf den Wert des {{SVGAttr('font-size')}} SVG-Attributs des Elements oder der {{cssxref('font-size')}} CSS-Eigenschaft dieses Elements geändert.
- `ideographic`
  - : Der Baseline-Identifikator für die dominant-baseline wird auf `ideographic` gesetzt, die abgeleitete Baseline-Tabelle wird unter Verwendung der `ideographic` Baseline-Tabelle in der Schrift konstruiert, und die Größe der Baseline-Tabelle wird auf den Wert des SVG-Attributs {{SVGAttr('font-size')}} des Elements oder der CSS {{cssxref('font-size')}}, wenn gesetzt, geändert.
- `mathematical`
  - : Der Baseline-Identifikator für die dominant-baseline wird auf `mathematical` gesetzt, die abgeleitete Baseline-Tabelle wird unter Verwendung der `mathematical` Baseline-Tabelle in der Schrift konstruiert, und die Größe der Baseline-Tabelle wird auf den Wert des SVG-Attributs {{SVGAttr('font-size')}} des Elements oder der CSS {{cssxref('font-size')}}, wenn gesetzt, geändert.
- `middle`
  - : Der Baseline-Identifikator für die dominant-baseline wird auf `middle` gesetzt. Die abgeleitete Baseline-Tabelle wird aus den in einer Baseline-Tabelle der Schrift definierten Baselines konstruiert. Diese Schrift-Baseline-Tabelle wird unter Verwendung der folgenden Prioritätsreihenfolge von Baseline-Tabellennamen gewählt: `ideographic`, `alphabetic`, `hanging`, `mathematical`. Die Größe der Baseline-Tabelle wird auf den Wert des {{SVGAttr('font-size')}} SVG-Attributs des Elements oder der CSS {{cssxref('font-size')}}, wenn gesetzt, geändert.
- `text-bottom`
  - : Die _line-under_ Kante wird als Baseline verwendet, die normalerweise die untere Kante der em Box der Schrift ist.
- `text-top`
  - : Die _line-over_ Kante wird als Baseline verwendet, die normalerweise die obere Kante der em Box der Schrift ist.

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
