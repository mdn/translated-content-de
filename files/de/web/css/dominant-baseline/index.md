---
title: dominant-baseline
slug: Web/CSS/dominant-baseline
l10n:
  sourceCommit: 30d512a2224b300bbc5fec3aaa07f4e48f87784e
---

{{CSSRef}}

Die **`dominant-baseline`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt die spezifische {{Glossary("Baseline/Typography", "Baseline")}} an, die verwendet wird, um den Text und die Inhalte auf Inline-Ebene der Box auszurichten. Sie gibt auch die Standard-Ausrichtungsbaseline von Boxen an, die an der Baseline-Ausrichtung im Ausrichtungskontext der Box beteiligt sind. Falls vorhanden, überschreibt sie das {{SVGAttr("dominant-baseline")}} Attribut der Form.

Baselines werden aus der Baseline-Tabelle der Schriftart ausgewählt. Falls keine Baseline-Tabelle in der nominalen Schrift vorhanden ist oder die Baseline-Tabelle keinen Eintrag für die gewünschte Baseline hat, kann der Browser Heuristiken verwenden, um die Position der gewünschten Baseline zu bestimmen.

Die `dominant-baseline` Eigenschaft wird verwendet, um eine _scaled-baseline-table_ zu bestimmen oder neu zu bestimmen. Eine scaled-baseline-table ist ein zusammengesetzter Wert mit drei Komponenten:

1. ein Baseline-Identifikator für die dominierende Baseline,
2. eine Baseline-Tabelle und
3. eine Schriftgröße der Baseline-Tabelle.

Einige Werte von `dominant-baseline` bestimmen alle drei Werte neu. Andere legen nur die Schriftgröße der Baseline-Tabelle neu fest. Wenn der Anfangswert `auto` ein unerwünschtes Ergebnis liefern würde, kann diese Eigenschaft verwendet werden, um die gewünschte scaled-baseline-table explizit festzulegen.

> [!NOTE]
> Die `dominant-baseline` Eigenschaft hat nur Auswirkungen auf die {{SVGElement("text")}}, {{SVGElement("textPath")}}, {{SVGElement("tref")}}, und {{SVGElement("tspan")}} SVG-Elemente.

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

  - : Falls diese Eigenschaft auf ein {{SVGElement("text")}} Element angewendet wird, hängt der berechnete Wert vom Wert des {{SVGAttr("writing-mode")}} Attributs ab.

    Wenn der {{SVGAttr("writing-mode")}} horizontal ist, ist der Wert der dominanten Baseline-Komponente `alphabetic`. Andernfalls, wenn der {{SVGAttr("writing-mode")}} vertikal ist, ist der Wert der dominanten Baseline-Komponente `central`.

    Falls diese Eigenschaft auf ein {{SVGElement("tspan")}}, {{SVGElement("tref")}}, oder {{SVGElement("textPath")}} Element angewendet wird, bleiben die dominante Baseline und die Baseline-Tabelle die gleichen wie bei dem Eltern-Textinhaltselement.

    Wenn der berechnete {{SVGAttr("baseline-shift")}} Wert tatsächlich die Baseline verschiebt, wird die Schriftgröße der Baseline-Tabelle auf den Wert des {{SVGAttr("font-size")}} Attributs auf dem Element gesetzt, auf dem das `dominant-baseline` Attribut vorkommt, andernfalls bleibt die Schriftgröße der Baseline-Tabelle die gleiche wie bei diesem Element.

    Wenn kein Elternelement für den Textinhalt vorhanden ist, wird der scaled-baseline-table Wert wie für {{SVGElement("text")}} Elemente konstruiert.

- `alphabetic`
  - : Der Baseline-Identifikator für die dominante Baseline wird auf `alphabetic` gesetzt, die abgeleitete Baseline-Tabelle wird unter Verwendung der `alphabetic` Baseline-Tabelle in der Schriftart konstruiert, und die Schriftgröße der Baseline-Tabelle wird auf den Wert des {{SVGAttr('font-size')}} SVG Attributs des Elements oder, falls gesetzt, des CSS {{cssxref('font-size')}} geändert.
- `central`
  - : Der Baseline-Identifikator für die dominante Baseline wird auf `central` gesetzt. Die abgeleitete Baseline-Tabelle wird aus den definierten Baselines in der Baseline-Tabelle der Schriftart konstruiert. Diese Schriftart-Baseline-Tabelle wird in folgender Prioritätsreihenfolge von Baseline-Tabellennamen gewählt: `ideographic`, `alphabetic`, `hanging`, `mathematical`. Die Schriftgröße der Baseline-Tabelle wird auf den Wert des {{SVGAttr('font-size')}} SVG-Attributs oder des CSS {{cssxref('font-size')}} des Elements geändert, falls gesetzt.
- `hanging`
  - : Der Baseline-Identifikator für die dominante Baseline wird auf `hanging` gesetzt, die abgeleitete Baseline-Tabelle wird unter Verwendung der `hanging` Baseline-Tabelle in der Schriftart konstruiert, und die Schriftgröße der Baseline-Tabelle wird auf den Wert des {{SVGAttr('font-size')}} SVG-Attributs oder des {{cssxref('font-size')}} CSS-Eigenschaft bei diesem Element geändert.
- `ideographic`
  - : Der Baseline-Identifikator für die dominante Baseline wird auf `ideographic` gesetzt, die abgeleitete Baseline-Tabelle wird unter Verwendung der `ideographic` Baseline-Tabelle in der Schriftart konstruiert, und die Schriftgröße der Baseline-Tabelle wird auf den Wert des {{SVGAttr('font-size')}} SVG-Attributs des Elements oder des CSS {{cssxref('font-size')}} geändert, falls gesetzt.
- `mathematical`
  - : Der Baseline-Identifikator für die dominante Baseline wird auf `mathematical` gesetzt, die abgeleitete Baseline-Tabelle wird unter Verwendung der `mathematical` Baseline-Tabelle in der Schriftart konstruiert, und die Schriftgröße der Baseline-Tabelle wird auf den Wert des {{SVGAttr('font-size')}} SVG-Attributs des Elements oder des CSS {{cssxref('font-size')}} geändert, falls gesetzt.
- `middle`
  - : Der Baseline-Identifikator für die dominante Baseline wird auf `middle` gesetzt. Die abgeleitete Baseline-Tabelle wird aus den definierten Baselines in einer Baseline-Tabelle in der Schriftart konstruiert. Diese Schriftart-Baseline-Tabelle wird in folgender Prioritätsreihenfolge von Baseline-Tabellennamen gewählt: `ideographic`, `alphabetic`, `hanging`, `mathematical`. Die Schriftgröße der Baseline-Tabelle wird auf den Wert des {{SVGAttr('font-size')}} SVG-Attributs des Elements oder des CSS {{cssxref('font-size')}} geändert, falls gesetzt.
- `text-bottom`
  - : Die _line-under_ Kante wird als Baseline verwendet, was normalerweise die untere Kante der Em-Box der Schrift ist.
- `text-top`
  - : Die _line-over_ Kante wird als Baseline verwendet, was normalerweise die obere Kante der Em-Box der Schrift ist.

## Formelle Definition

{{CSSInfo}}

## Formelle Syntax

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
