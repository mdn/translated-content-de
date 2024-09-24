---
title: dominant-baseline
slug: Web/CSS/dominant-baseline
l10n:
  sourceCommit: e295790b3a62baceeb832650e2c0cc9256a23156
---

{{CSSRef}}

Die **`dominant-baseline`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt die spezifische [Baseline](/de/docs/Glossary/Baseline/Typography) an, die verwendet wird, um den Text und die Inline-Inhalte der Box auszurichten. Sie gibt auch die Standard-Ausrichtungsbaseline aller Boxen an, die an der Baseline-Ausrichtung im Ausrichtungskontext der Box teilnehmen. Falls vorhanden, überschreibt sie das {{SVGAttr("dominant-baseline")}} Attribut der Form.

Baselines werden aus der Schrift-Baseline-Tabelle ausgewählt. Wenn in der Nominalschrift keine Baseline-Tabelle vorhanden ist oder die Baseline-Tabelle keinen Eintrag für die gewünschte Baseline hat, kann der Browser Heuristiken verwenden, um die Position der gewünschten Baseline zu bestimmen.

Die `dominant-baseline`-Eigenschaft wird verwendet, um eine _scaled-baseline-table_ zu bestimmen oder neu zu bestimmen. Eine scaled-baseline-table ist ein zusammengesetzter Wert mit drei Komponenten:

1. einem Baseline-Identifikator für die dominant-baseline,
2. einer Baseline-Tabelle und
3. einer Baseline-Tabellenschriftgröße.

Einige Werte von `dominant-baseline` bestimmen alle drei Werte neu. Andere stellen nur die Baseline-Tabellenschriftgröße wieder her. Wenn der Initialwert `auto` ein unerwünschtes Ergebnis liefern würde, kann diese Eigenschaft verwendet werden, um die gewünschte scaled-baseline-table explizit festzulegen.

> [!NOTE]
> Die `dominant-baseline`-Eigenschaft hat nur Auswirkungen auf die {{SVGElement("text")}}, {{SVGElement("textPath")}}, {{SVGElement("tref")}} und {{SVGElement("tspan")}} SVG-Elemente.

## Syntax

```css
/* Initialwert */
dominant-baseline: auto;

/* Schlüsselwortwerte */
dominant-baseline: alphabetic;
dominant-baseline: central;
dominant-baseline: hanging;
dominant-baseline: ideographic;
dominant-baseline: mathematical;
dominant-baseline: middle;
dominant-baseline: text-bottom;
dominant-baseline: text-top;

/* Globale Werte */
dominant-baseline: inherit;
dominant-baseline: initial;
dominant-baseline: revert;
dominant-baseline: revert-layer;
dominant-baseline: unset;
```

### Werte

- `auto`

  - : Wenn diese Eigenschaft auf ein {{SVGElement("text")}}-Element angewendet wird, hängt der berechnete Wert vom Wert des {{SVGAttr("writing-mode")}}-Attributs ab.

    Wenn der {{SVGAttr("writing-mode")}} horizontal ist, dann ist der Wert der dominant-baseline-Komponente `alphabetic`. Andernfalls, wenn der {{SVGAttr("writing-mode")}} vertikal ist, dann ist der Wert der dominant-baseline-Komponente `central`.

    Wird diese Eigenschaft auf ein {{SVGElement("tspan")}}, {{SVGElement("tref")}} oder {{SVGElement("textPath")}}-Element angewendet, so bleiben die dominant-baseline und die Baseline-Tabelle Komponenten dieselben wie die des übergeordneten Textelementes.

    Wenn der berechnete {{SVGAttr("baseline-shift")}} Wert tatsächlich die Baseline verschiebt, wird die Schriftgröße der Baseline-Tabelle auf den Wert des {{SVGAttr("font-size")}} Attributs des Elements, auf dem das `dominant-baseline` Attribut auftritt, gesetzt, andernfalls bleibt die Schriftgröße der Baseline-Tabelle dieselbe wie die des Elements.

    Wenn kein übergeordnetes Textelement existiert, wird der Wert der scaled-baseline-table konstruiert wie für {{SVGElement("text")}} Elemente.

- `alphabetic`
  - : Der Baseline-Identifikator für die dominant-baseline wird auf `alphabetic` gesetzt, die abgeleitete Baseline-Tabelle wird unter Verwendung der `alphabetic` Baseline-Tabelle der Schrift konstruiert und die Baseline-Tabellenschriftgröße wird auf den Wert des {{SVGAttr('font-size')}} SVG-Attributs des Elements oder die CSS {{cssxref('font-size')}}-Eigenschaft, falls gesetzt, geändert.
- `central`
  - : Der Baseline-Identifikator für die dominant-baseline wird auf `central` gesetzt. Die abgeleitete Baseline-Tabelle wird aus den definierten Baselines in der Baseline-Tabelle der Schrift erstellt. Diese Schrift-Baseline-Tabelle wird in der folgenden Prioritätsreihenfolge der Baseline-Tabellennamen gewählt: `ideographic`, `alphabetic`, `hanging`, `mathematical`. Die Baseline-Tabellenschriftgröße wird auf den Wert des {{SVGAttr('font-size')}} SVG-Attributs des Elements oder die CSS {{cssxref('font-size')}}-Eigenschaft, falls gesetzt, geändert.
- `hanging`
  - : Der Baseline-Identifikator für die dominant-baseline wird auf `hanging` gesetzt, die abgeleitete Baseline-Tabelle wird unter Verwendung der `hanging` Baseline-Tabelle der Schrift konstruiert und die Baseline-Tabellenschriftgröße wird auf den Wert des {{SVGAttr('font-size')}} SVG-Attributs der {{cssxref('font-size')}} CSS-Eigenschaft auf diesem Element geändert.
- `ideographic`
  - : Der Baseline-Identifikator für die dominant-baseline wird auf `ideographic` gesetzt, die abgeleitete Baseline-Tabelle wird unter Verwendung der `ideographic` Baseline-Tabelle der Schrift konstruiert und die Baseline-Tabellenschriftgröße wird auf den Wert des {{SVGAttr('font-size')}} SVG-Attributs des Elements oder die CSS {{cssxref('font-size')}}-Eigenschaft, falls gesetzt, geändert.
- `mathematical`
  - : Der Baseline-Identifikator für die dominant-baseline wird auf `mathematical` gesetzt, die abgeleitete Baseline-Tabelle wird unter Verwendung der `mathematical` Baseline-Tabelle der Schrift konstruiert und die Baseline-Tabellenschriftgröße wird auf den Wert des {{SVGAttr('font-size')}} SVG-Attributs des Elements oder die CSS {{cssxref('font-size')}}-Eigenschaft, falls gesetzt, geändert.
- `middle`
  - : Der Baseline-Identifikator für die dominant-baseline wird auf `middle` gesetzt. Die abgeleitete Baseline-Tabelle wird aus den definierten Baselines in einer Baseline-Tabelle der Schrift erstellt. Diese Schrift-Baseline-Tabelle wird in der folgenden Prioritätsreihenfolge der Baseline-Tabellennamen gewählt: `ideographic`, `alphabetic`, `hanging`, `mathematical`. Die Baseline-Tabellenschriftgröße wird auf den Wert des {{SVGAttr('font-size')}} SVG-Attributs des Elements oder die CSS {{cssxref('font-size')}}-Eigenschaft, falls gesetzt, geändert.
- `text-bottom`}
  - : Die _line-under_ Kante wird als Baseline verwendet, die normalerweise die untere Kante des Schrift-Em-Kastens ist.
- `text-top`
  - : Die _line-over_ Kante wird als Baseline verwendet, die normalerweise die obere Kante des Schrift-Em-Kastens ist.

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
- {{SVGAttr('dominant-baseline')}} SVG-Attribut
