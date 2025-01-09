---
title: alignment-baseline
slug: Web/CSS/alignment-baseline
l10n:
  sourceCommit: 169f071e7bdff5e9b03cc56259e93907c5ea4f1d
---

{{CSSRef}}

Die **`alignment-baseline`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert die spezifische {{Glossary("Baseline/Typography", "Baseline")}}, die verwendet wird, um den Text des Box-Elements und inline-Level-Inhalte auszurichten. **Baseline-Ausrichtung** ist die Beziehung zwischen den Baselines mehrerer Ausrichtungsobjekte innerhalb eines Ausrichtungskontextes. Bei der Durchführung der Baseline-Ausrichtung gibt der Wert der Eigenschaft `alignment-baseline` an, welche Baseline des Box-Elements an die entsprechende Baseline seines Ausrichtungskontextes ausgerichtet wird.

> [!NOTE]
> Die `alignment-baseline`-Eigenschaft hat nur Auswirkungen auf Inline-Level-Boxen, Flex-Elemente, Grid-Elemente, Tabellenzellen und die {{SVGElement("text")}}, {{SVGElement("textPath")}} und {{SVGElement("tspan")}} SVG-Elemente. Falls vorhanden, überschreibt sie das {{SVGAttr("alignment-baseline")}} Attribut der Form.

In einem Inline-Formatierkontext teilen sich Inline-Level-Boxfragmente und Glyphen einen Ausrichtungskontext, der durch ihr übergeordnetes Inline-Boxfragment entlang seiner Inline-Achse etabliert wird. Im SVG-Textlayout geben diese Werte stattdessen die Baseline an, die an der aktuellen SVG-Textposition ausgerichtet wird.

## Syntax

```css
/* Initial value */
alignment-baseline: baseline;

/* Keyword values */
alignment-baseline: alphabetic;
alignment-baseline: central;
alignment-baseline: ideographic;
alignment-baseline: mathematical;
alignment-baseline: middle;
alignment-baseline: text-bottom;
alignment-baseline: text-top;

/* Mapped values */
alignment-baseline: text-before-edge; /* text-top */
alignment-baseline: text-after-edge; /* text-bottom */

/* Deprecated values  */
alignment-baseline: auto;
alignment-baseline: before-edge;
alignment-baseline: after-edge;
alignment-baseline: hanging;

/* Global values */
alignment-baseline: inherit;
alignment-baseline: initial;
alignment-baseline: revert;
alignment-baseline: revert-layer;
alignment-baseline: unset;
```

### Werte

- `baseline`

  - : Verwenden Sie den Wert von {{cssxref("dominant-baseline")}} des übergeordneten Elements.

- `alphabetic`

  - : Wird beim Schreiben in lateinisch, kyrillisch, griechisch und vielen anderen Schriftsystemen verwendet; gleicht die alphabetische Baseline der Box mit der ihres übergeordneten Elements ab, entsprechend dem unteren Rand der meisten, aber nicht aller Zeichen.

- `central`

  - : Gleicht die zentrale Baseline der Box mit der zentralen Baseline ihres übergeordneten Elements ab, entsprechend der ideographischen zentralen Baseline, zur Hälfte zwischen der ideographischen-Unter- und der ideographischen-Über-Baseline.

- `ideographic`

  - : Gleicht die ideographische Unterkante der Zeichenfläche der Box mit der ihres übergeordneten Elements ab, wobei die abgeleitete Baselinetabelle mit der ideographischen Baselinetabelle der Schrift konstruiert wird.

- `mathematical`

  - : Gleicht die mathematische Baseline der Box mit der ihres übergeordneten Elements ab, entsprechend der zentralen Baseline, um die mathematische Zeichen gestaltet sind.

- `middle`

  - : Richtet den vertikalen Mittelpunkt der Box mit der Baseline der übergeordneten Box plus der Hälfte der x-Höhe des übergeordneten Elements aus. Verwendet die x-Mitten-Baselines; außer unter [`text-orientation: upright;`](/de/docs/Web/CSS/text-orientation) (wo die alphabetischen und x-Höhen-Baselines im Wesentlichen bedeutungslos sind), in welchem Fall stattdessen die `central` Baseline verwendet wird.

- `text-bottom`

  - : Gleicht den Boden der Box mit dem oberen Rand des Inhaltsbereichs des übergeordneten Elements ab, unter Verwendung des unteren Linienrandes der Inhaltsbox eines Inline-Elements.

- `text-top`
  - : Gleicht den oberen Rand der Box mit dem oberen Rand des Inhaltsbereichs des übergeordneten Elements ab; der obere Linienrand der Inhaltsbox eines Inline-Elements.

> [!NOTE]
> In SVG2 wurden `auto`, `before-edge` und `after-edge` veraltet und `text-before-edge` ist ein Alias für `text-top`, und `text-after-edge` ist ein Alias für `text-bottom`. Diese Schlüsselwörter sollten nicht als Teil der {{cssxref("vertical-align")}} Kurzform-Eigenschaft verwendet werden. Browser unterstützen `auto` als Synonym für `baseline` und `hanging`, wobei der Ausrichtungspunkt des auszurichtenden Objekts mit der "hängenden" Baseline des übergeordneten Textelement-Inhalts ausgerichtet wird, aber keiner der beiden ist Teil der Spezifikation.

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
  <text x="0" y="20" fill="red">baseline</text>
  <text x="0" y="60" fill="red">baseline</text>
  <text x="0" y="100" fill="red">baseline</text>
  <text x="0" y="140" fill="red">baseline</text>
</svg>
```

```css
text {
  font-size: 20px;
  alignment-baseline: baseline;
}
text:nth-of-type(1) {
  alignment-baseline: alphabetic;
}
text:nth-of-type(2) {
  alignment-baseline: central;
}
text:nth-of-type(3) {
  alignment-baseline: hanging;
}
text:nth-of-type(4) {
  alignment-baseline: ideographic;
}
text:nth-of-type(5) {
  alignment-baseline: mathematical;
}
text:nth-of-type(6) {
  alignment-baseline: middle;
}
text:nth-of-type(7) {
  alignment-baseline: text-bottom;
}
text:nth-of-type(8) {
  alignment-baseline: text-top;
}
```

{{EmbedLiveSample("Example", "750", "220")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("dominant-baseline")}}
- {{SVGAttr("alignment-baseline")}} SVG-Attribut
- [CSS Inline Layout](/de/docs/Web/CSS/CSS_inline_layout) Modul
- [CSS Box Alignment](/de/docs/Web/CSS/CSS_box_alignment) Modul
