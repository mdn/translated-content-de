---
title: dominant-baseline
slug: Web/CSS/dominant-baseline
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

{{CSSRef}}

Die **`dominant-baseline`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt die spezifische {{Glossary("Baseline/Typography", "Grundlinie")}} an, die verwendet wird, um den Text und die Inhalte auf Inline-Ebene des Box-Elements auszurichten. Sie gibt auch die Standard-Ausrichtungsgrundlinie aller Boxen an, die an der Grundlinenausrichtung im Ausrichtungskontext der Box teilnehmen. Wenn vorhanden, überschreibt sie das {{SVGAttr("dominant-baseline")}} Attribut der Form.

Grundlinien werden aus der Grundlinentabelle der Schriftart ausgewählt. Wenn es in der nominalen Schriftart keine Grundlinientabelle gibt oder die Grundlinientabelle keinen Eintrag für die gewünschte Grundlinie enthält, kann der Browser Heuristiken verwenden, um die Position der gewünschten Grundlinie zu bestimmen.

Die `dominant-baseline` Eigenschaft wird verwendet, um eine _skalierte-Grundlinientabelle_ zu bestimmen oder neu zu bestimmen. Eine skalierte-Grundlinientabelle ist ein zusammengesetzter Wert mit drei Komponenten:

1. ein Grundlinien-Identifikator für die dominante-Grundlinie,
2. eine Grundlinientabelle und
3. eine Grundlinientabelle-Schriftgröße.

Einige Werte von `dominant-baseline` bestimmen alle drei Werte neu. Andere stellen nur die Schriftgröße der Grundlinientabelle neu fest. Wenn der Anfangswert, `auto`, ein unerwünschtes Ergebnis liefert, kann diese Eigenschaft verwendet werden, um die gewünschte skalierte-Grundlinientabelle explizit festzulegen.

> [!NOTE]
> Die `dominant-baseline` Eigenschaft hat nur Auswirkungen auf die {{SVGElement("text")}}, {{SVGElement("textPath")}} und {{SVGElement("tspan")}} SVG-Elemente.

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

    Wenn der {{SVGAttr("writing-mode")}} horizontal ist, dann ist der Wert der dominante-Grundlinie-Komponente `alphabetic`. Andernfalls, wenn der {{SVGAttr("writing-mode")}} vertikal ist, dann ist der Wert der dominante-Grundlinie-Komponente `central`.

    Wenn diese Eigenschaft auf ein {{SVGElement("tspan")}} oder {{SVGElement("textPath")}} Element angewendet wird, bleiben die dominante-Grundlinie und die Grundlinientabellen-Komponenten dieselben wie die des übergeordneten Textelementes.

    Wenn der berechnete {{SVGAttr("baseline-shift")}} Wert tatsächlich die Grundlinie verschiebt, dann wird die Schriftgrößenkomponente der Grundlinientabelle auf den Wert des {{SVGAttr("font-size")}} Attributs des Elements gesetzt, auf dem das `dominant-baseline` Attribut auftritt, andernfalls bleibt die Schriftgrößenkomponente der Grundlinientabelle dieselbe wie die des Elements.

    Wenn es kein übergeordnetes Textelement gibt, wird der Wert der skalierten-Grundlinientabelle wie für {{SVGElement("text")}} Elemente konstruiert.

- `alphabetic`
  - : Der Grundlinien-Identifikator für die dominante-Grundlinie ist auf `alphabetic` gesetzt, die abgeleitete Grundlinientabelle wird mit der `alphabetic` Grundlinientabelle in der Schriftart konstruiert, und die Schriftgröße der Grundlinientabelle wird auf den Wert des {{SVGAttr('font-size')}} SVG Attributs oder des CSS {{cssxref('font-size')}}, wenn gesetzt, geändert.
- `central`
  - : Der Grundlinien-Identifikator für die dominante-Grundlinie ist auf `central` gesetzt. Die abgeleitete Grundlinientabelle wird aus den definierten Grundlinien in der Grundlinientabelle der Schriftart konstruiert. Diese Schrift-Grundlinientabelle wird mit folgender Prioritätsreihenfolge von Grundlinientabellennamen gewählt: `ideographic`, `alphabetic`, `hanging`, `mathematical`. Die Schriftgröße der Grundlinientabelle wird auf den Wert des {{SVGAttr('font-size')}} SVG Attributs oder des CSS {{cssxref('font-size')}}, wenn gesetzt, geändert.
- `hanging`
  - : Der Grundlinien-Identifikator für die dominante-Grundlinie ist auf `hanging` gesetzt, die abgeleitete Grundlinientabelle wird mit der `hanging` Grundlinientabelle in der Schrift konstruiert, und die Schriftgröße der Grundlinientabelle wird auf den Wert des {{SVGAttr('font-size')}} SVG Attributs des {{cssxref('font-size')}} CSS Attributs an diesem Element geändert.
- `ideographic`
  - : Der Grundlinien-Identifikator für die dominante-Grundlinie ist auf `ideographic` gesetzt, die abgeleitete Grundlinientabelle wird mit der `ideographic` Grundlinientabelle in der Schrift konstruiert, und die Schriftgröße der Grundlinientabelle wird auf den Wert des {{SVGAttr('font-size')}} SVG Attributs oder den CSS {{cssxref('font-size')}}, wenn gesetzt, geändert.
- `mathematical`
  - : Der Grundlinien-Identifikator für die dominante-Grundlinie ist auf `mathematical` gesetzt, die abgeleitete Grundlinientabelle wird mit der `mathematical` Grundlinientabelle in der Schrift konstruiert, und die Schriftgröße der Grundlinientabelle wird auf den Wert des {{SVGAttr('font-size')}} SVG Attributs oder den CSS {{cssxref('font-size')}}, wenn gesetzt, geändert.
- `middle`
  - : Der Grundlinien-Identifikator für die dominante-Grundlinie ist auf `middle` gesetzt. Die abgeleitete Grundlinientabelle wird aus den definierten Grundlinien in einer Grundlinientabelle in der Schriftart konstruiert. Diese Schrift-Grundlinientabelle wird mit folgender Prioritätsreihenfolge von Grundlinientabellennamen gewählt: `ideographic`, `alphabetic`, `hanging`, `mathematical`. Die Schriftgröße der Grundlinientabelle wird auf den Wert des {{SVGAttr('font-size')}} SVG Attributs oder des CSS {{cssxref('font-size')}}, wenn gesetzt, geändert.
- `text-bottom`
  - : Der _untere Zeilenrand_ wird als Grundlinie verwendet, was gewöhnlich die untere Kante des em-Kastens der Schriftart ist.
- `text-top`
  - : Der _obere Zeilenrand_ wird als Grundlinie verwendet, was gewöhnlich die obere Kante des em-Kastens der Schriftart ist.

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
