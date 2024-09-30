---
title: dominant-baseline
slug: Web/CSS/dominant-baseline
l10n:
  sourceCommit: e295790b3a62baceeb832650e2c0cc9256a23156
---

{{CSSRef}}

Die **`dominant-baseline`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert die spezifische [Baseline](/de/docs/Glossary/Baseline/Typography), die verwendet wird, um den Text des Rahmens und die inline-level Inhalte auszurichten. Sie gibt auch die Standardausrichtungs-Baseline aller Boxen an, die an der Baseline-Ausrichtung im Ausrichtungskontext der Box teilnehmen. Falls vorhanden, überschreibt sie das {{SVGAttr("dominant-baseline")}} Attribut der Form.

Baselines werden aus der Baseline-Tabelle der Schrift ausgewählt. Gibt es in der üblicherweise verwendeten Schrift keine Baseline-Tabelle oder fehlt ein Eintrag für die gewünschte Baseline, kann der Browser Heuristiken verwenden, um die Position der gewünschten Baseline zu bestimmen.

Die `dominant-baseline` Eigenschaft wird verwendet, um eine _scaled-baseline-table_ zu bestimmen oder neu zu bestimmen. Eine scaled-baseline-table ist ein zusammengesetzter Wert mit drei Komponenten:

1. ein Baseline-Identifikator für die dominant-baseline,
2. eine Baseline-Tabelle, und
3. eine Schriftgröße der Baseline-Tabelle.

Einige Werte der `dominant-baseline` bestimmen alle drei Werte neu. Andere stellen nur die Baseline-Tabelle-Schriftgröße wieder her. Wenn der Initialwert `auto` ein unerwünschtes Ergebnis liefern würde, kann diese Eigenschaft verwendet werden, um die gewünschte scaled-baseline-table explizit festzulegen.

> [!NOTE]
> Die `dominant-baseline` Eigenschaft hat nur eine Wirkung auf die {{SVGElement("text")}}, {{SVGElement("textPath")}}, {{SVGElement("tref")}} und {{SVGElement("tspan")}} SVG-Elemente.

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

    Ist der {{SVGAttr("writing-mode")}} horizontal, dann ist der Wert der dominant-baseline-Komponente `alphabetic`. Andernfalls, wenn der {{SVGAttr("writing-mode")}} vertikal ist, dann ist der Wert der dominant-baseline-Komponente `central`.

    Wenn diese Eigenschaft auf ein {{SVGElement("tspan")}}, {{SVGElement("tref")}} oder {{SVGElement("textPath")}} Element angewendet wird, bleiben die dominant-baseline und die Baseline-Tabelle Komponenten dieselben wie die des übergeordneten Textinhalt-Elements.

    Wenn der berechnet {{SVGAttr("baseline-shift")}} Wert die Baseline tatsächlich verschiebt, dann wird die Baseline-Tabelle-Schriftgröße-Komponente auf den Wert des {{SVGAttr("font-size")}} Attributs des Elements gesetzt, auf dem das `dominant-baseline` Attribut vorkommt, andernfalls bleibt die Baseline-Tabelle-Schriftgröße dieselbe wie die des Elements.

    Gibt es kein übergeordnetes Textinhalt-Element, wird der scaled-baseline-table Wert wie für {{SVGElement("text")}} Elemente konstruiert.

- `alphabetic`
  - : Der Baseline-Identifikator für die dominant-baseline wird auf `alphabetic` gesetzt. Die abgeleitete Baseline-Tabelle wird unter Verwendung der `alphabetic` Baseline-Tabelle der Schrift konstruiert und die Schriftgröße der Baseline-Tabelle wird auf den Wert des {{SVGAttr('font-size')}} SVG-Attributs oder des CSS {{cssxref('font-size')}}, falls gesetzt, geändert.
- `central`
  - : Der Baseline-Identifikator für die dominant-baseline wird auf `central` gesetzt. Die abgeleitete Baseline-Tabelle wird aus den definierten Baselines in der Baseline-Tabelle der Schrift konstruiert. Diese Schrift-Baseline-Tabelle wird unter Verwendung der folgenden Prioritätsreihenfolge von Baseline-Tabelle-Namen gewählt: `ideographic`, `alphabetic`, `hanging`, `mathematical`. Die Schriftgröße der Baseline-Tabelle wird auf den Wert des {{SVGAttr('font-size')}} SVG-Attributs oder des CSS {{cssxref('font-size')}}, falls gesetzt, geändert.
- `hanging`
  - : Der Baseline-Identifikator für die dominant-baseline wird auf `hanging` gesetzt. Die abgeleitete Baseline-Tabelle wird unter Verwendung der `hanging` Baseline-Tabelle der Schrift konstruiert und die Schriftgröße der Baseline-Tabelle wird auf den Wert des {{SVGAttr('font-size')}} SVG-Attributs der {{cssxref('font-size')}} CSS-Eigenschaft auf diesem Element geändert.
- `ideographic`
  - : Der Baseline-Identifikator für die dominant-baseline wird auf `ideographic` gesetzt. Die abgeleitete Baseline-Tabelle wird unter Verwendung der `ideographic` Baseline-Tabelle der Schrift konstruiert und die Schriftgröße der Baseline-Tabelle wird auf den Wert des {{SVGAttr('font-size')}} SVG-Attributs oder des CSS {{cssxref('font-size')}}, falls gesetzt, geändert.
- `mathematical`
  - : Der Baseline-Identifikator für die dominant-baseline wird auf `mathematical` gesetzt. Die abgeleitete Baseline-Tabelle wird unter Verwendung der `mathematical` Baseline-Tabelle der Schrift konstruiert und die Schriftgröße der Baseline-Tabelle wird auf den Wert des {{SVGAttr('font-size')}} SVG-Attributs oder des CSS {{cssxref('font-size')}}, falls gesetzt, geändert.
- `middle`
  - : Der Baseline-Identifikator für die dominant-baseline wird auf `middle` gesetzt. Die abgeleitete Baseline-Tabelle wird aus den definierten Baselines in einer Baseline-Tabelle der Schrift konstruiert. Diese Schrift-Baseline-Tabelle wird unter Verwendung der folgenden Prioritätsreihenfolge von Baseline-Tabelle-Namen gewählt: `ideographic`, `alphabetic`, `hanging`, `mathematical`. Die Schriftgröße der Baseline-Tabelle wird auf den Wert des {{SVGAttr('font-size')}} SVG-Attributs oder des CSS {{cssxref('font-size')}}, falls gesetzt, geändert.
- `text-bottom`
  - : Die _line-under_ Kante wird als Baseline verwendet, die normalerweise die untere Kante der Schrift em-Box ist.
- `text-top`
  - : Die _line-over_ Kante wird als Baseline verwendet, die normalerweise die obere Kante der Schrift em-Box ist.

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
