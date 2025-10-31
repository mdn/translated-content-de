---
title: dominant-baseline
slug: Web/CSS/Reference/Properties/dominant-baseline
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`dominant-baseline`**-Eigenschaft von [CSS](/de/docs/Web/CSS) gibt die spezifische {{Glossary("Baseline/Typography", "Grundlinie")}} an, die verwendet wird, um den Text und die Inhalte auf Inline-Ebene der Box auszurichten. Sie gibt auch die Standard-Ausrichtungsgrundlinie aller Boxen an, die an der Grundlinienausrichtung im Ausrichtungskontext der Box teilnehmen. Wenn vorhanden, überschreibt sie das {{SVGAttr("dominant-baseline")}}-Attribut der Form.

Grundlinien werden aus der Schriftart-Grundlinientabelle ausgewählt. Wenn die nominelle Schriftart keine Grundlinientabelle hat oder die Grundlinientabelle keinen Eintrag für die gewünschte Grundlinie enthält, kann der Browser Heuristiken verwenden, um die Position der gewünschten Grundlinie zu bestimmen.

Die `dominant-baseline`-Eigenschaft wird verwendet, um eine _Skalierte-Grundlinientabelle_ zu bestimmen oder neu zu bestimmen. Eine skalierte Grundlinientabelle ist ein zusammengesetzter Wert mit drei Komponenten:

1. einem Grundlinien-Identifikator für die dominante Grundlinie,
2. einer Grundlinientabelle und
3. einer Schriftgröße der Grundlinientabelle.

Einige Werte von `dominant-baseline` bestimmen alle drei Werte neu. Andere stellen nur die Schriftgröße der Grundlinientabelle wieder her. Wenn der Anfangswert `auto` ein unerwünschtes Ergebnis liefern würde, kann diese Eigenschaft verwendet werden, um die gewünschte skalierte Grundlinientabelle explizit festzulegen.

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
  - : Wenn diese Eigenschaft auf ein {{SVGElement("text")}}-Element angewendet wird, hängt der berechnete Wert von dem Wert des {{SVGAttr("writing-mode")}}-Attributs ab.

    Wenn der {{SVGAttr("writing-mode")}} horizontal ist, ist der Wert der Komponenten der dominanten Grundlinie `alphabetic`. Andernfalls, wenn der {{SVGAttr("writing-mode")}} vertikal ist, ist der Wert der Komponenten der dominanten Grundlinie `central`.

    Wenn diese Eigenschaft auf ein {{SVGElement("tspan")}}- oder {{SVGElement("textPath")}}-Element angewendet wird, bleiben die dominanten Grundlinien- und die Grundlinientabellen-Komponenten dieselben wie die des übergeordneten Textinhaltselements.

    Wenn der berechnete {{SVGAttr("baseline-shift")}}-Wert tatsächlich die Grundlinie verschiebt, wird die Schriftgröße der Grundlinientabelle auf den Wert des {{SVGAttr("font-size")}}-Attributs des Elements gesetzt, auf das sich das `dominant-baseline`-Attribut bezieht. Andernfalls bleibt die Schriftgröße der Grundlinientabelle dieselbe wie die des Elements.

    Wenn es kein übergeordnetes Textinhaltselement gibt, wird der Wert der skalierten Grundlinientabelle wie bei {{SVGElement("text")}}-Elementen konstruiert.

- `alphabetic`
  - : Der Grundlinien-Identifikator für die dominante Grundlinie wird auf `alphabetic` gesetzt, die abgeleitete Grundlinientabelle wird unter Verwendung der `alphabetic` Grundlinientabelle in der Schriftart konstruiert, und die Schriftgröße der Grundlinientabelle wird auf den Wert des {{SVGAttr('font-size')}} SVG-Attributs des Elements oder auf die CSS {{cssxref('font-size')}} geändert, falls gesetzt.
- `central`
  - : Der Grundlinien-Identifikator für die dominante Grundlinie wird auf `central` gesetzt. Die abgeleitete Grundlinientabelle wird aus den definierten Grundlinien in der Grundlinientabelle der Schriftart konstruiert. Diese Grundlinientabelle wird in der folgenden Prioritätenreihenfolge der Namen der Grundlinientabellen gewählt: `ideographic`, `alphabetic`, `hanging`, `mathematical`. Die Schriftgröße der Grundlinientabelle wird auf den Wert des {{SVGAttr('font-size')}} SVG-Attributs des Elements oder auf die CSS {{cssxref('font-size')}} geändert, falls gesetzt.
- `hanging`
  - : Der Grundlinien-Identifikator für die dominante Grundlinie wird auf `hanging` gesetzt. Die abgeleitete Grundlinientabelle wird unter Verwendung der `hanging` Grundlinientabelle in der Schriftart konstruiert, und die Schriftgröße der Grundlinientabelle wird auf den Wert des {{SVGAttr('font-size')}} SVG-Attributs auf diesem Element oder der CSS {{cssxref('font-size')}}-Eigenschaft geändert.
- `ideographic`
  - : Der Grundlinien-Identifikator für die dominante Grundlinie wird auf `ideographic` gesetzt. Die abgeleitete Grundlinientabelle wird unter Verwendung der `ideographic` Grundlinientabelle in der Schriftart konstruiert, und die Schriftgröße der Grundlinientabelle wird auf den Wert des {{SVGAttr('font-size')}} SVG-Attributs des Elements oder auf die CSS {{cssxref('font-size')}} geändert, falls gesetzt.
- `mathematical`
  - : Der Grundlinien-Identifikator für die dominante Grundlinie wird auf `mathematical` gesetzt. Die abgeleitete Grundlinientabelle wird unter Verwendung der `mathematical` Grundlinientabelle in der Schriftart konstruiert, und die Schriftgröße der Grundlinientabelle wird auf den Wert des {{SVGAttr('font-size')}} SVG-Attributs des Elements oder auf die CSS {{cssxref('font-size')}} geändert, falls gesetzt.
- `middle`
  - : Der Grundlinien-Identifikator für die dominante Grundlinie wird auf `middle` gesetzt. Die abgeleitete Grundlinientabelle wird aus den definierten Grundlinien in einer Grundlinientabelle in der Schriftart konstruiert. Diese Grundlinientabelle wird in der folgenden Prioritätenreihenfolge der Namen der Grundlinientabellen gewählt: `ideographic`, `alphabetic`, `hanging`, `mathematical`. Die Schriftgröße der Grundlinientabelle wird auf den Wert des {{SVGAttr('font-size')}} SVG-Attributs des Elements oder auf die CSS {{cssxref('font-size')}} geändert, falls gesetzt.
- `text-bottom`
  - : Die _Line-Under_ Kante wird als Baseline verwendet, was normalerweise die untere Kante der Em-Box der Schriftart ist.
- `text-top`
  - : Die _Line-Over_ Kante wird als Baseline verwendet, was normalerweise die obere Kante der Em-Box der Schriftart ist.

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
- SVG-Attribut {{SVGAttr('dominant-baseline')}}
