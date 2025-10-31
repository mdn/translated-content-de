---
title: alignment-baseline
slug: Web/CSS/Reference/Properties/alignment-baseline
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`alignment-baseline`**-[CSS](/de/docs/Web/CSS)-Eigenschaft legt die spezifische {{Glossary("Baseline/Typography", "Grundlinie")}} fest, die verwendet wird, um den Text und die Inhalte auf Inline-Ebene der Box auszurichten. **Grundlinienausrichtung** ist die Beziehung zwischen den Grundlinien mehrerer Ausrichtungsobjekte innerhalb eines Ausrichtungskontexts. Bei der Durchführung der Grundlinienausrichtung gibt der Wert der `alignment-baseline`-Eigenschaft an, welche Grundlinie der Box mit der entsprechenden Grundlinie ihres Ausrichtungskontexts ausgerichtet wird.

> [!NOTE]
> Die `alignment-baseline`-Eigenschaft wirkt sich nur auf Boxen auf Inline-Ebene, Flex-Elemente, Grid-Elemente, Tabellenzellen und die {{SVGElement("text")}}, {{SVGElement("textPath")}} und {{SVGElement("tspan")}} SVG-Elemente aus. Falls vorhanden, überschreibt sie das {{SVGAttr("alignment-baseline")}}-Attribut der Form.

In einem Inline-Formatierungskontext teilen Inline-Box-Fragmente und Glyphen einen Ausrichtungskontext, der durch ihr übergeordnetes Inline-Box-Fragment entlang seiner Inline-Achse festgelegt wird. Im SVG-Textlayout geben diese Werte stattdessen die Grundlinie an, die an die aktuelle Textposition von SVG ausgerichtet ist.

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
  - : Verwenden Sie den {{cssxref("dominant-baseline")}}-Wert des übergeordneten Elements.

- `alphabetic`
  - : Wird beim Schreiben von Latein, Kyrillisch, Griechisch und vielen anderen Schriften verwendet; bringt die alphabetische Grundlinie der Box mit der des übergeordneten Elements in Einklang, entsprechend dem unteren Rand der meisten, aber nicht aller, Zeichen.

- `central`
  - : Bringt die zentrale Grundlinie der Box mit der zentralen Grundlinie ihres übergeordneten Elements in Einklang, entsprechend der ideographischen zentralen Grundlinie, die sich auf halbem Weg zwischen der ideographisch-unteren und der ideographisch-obersten Grundlinie befindet.

- `ideographic`
  - : Bringt die Grundlinie der ideographischen Zeichenunterseite der Box mit der des übergeordneten Elements in Einklang, wobei die abgeleitete Grundlinientabelle mit der ideographischen Grundlinientabelle in der Schriftart konstruiert wird.

- `mathematical`
  - : Bringt die mathematische Grundlinie der Box mit der des übergeordneten Elements in Einklang, entsprechend der mittleren Grundlinie, um die mathematische Zeichen gestaltet sind.

- `middle`
  - : Richtet den vertikalen Mittelpunkt der Box mit der Grundlinie der übergeordneten Box plus der halben x-Höhe des übergeordneten Elements aus. Verwenden Sie die x-Mittelpunktsgrundlinien; außer unter [`text-orientation: upright;`](/de/docs/Web/CSS/Reference/Properties/text-orientation) (wo die alphabetische und die x-Höhe-Grundlinien im Wesentlichen bedeutungslos sind), in diesem Fall wird stattdessen die `central`-Grundlinie verwendet.

- `text-bottom`
  - : Bringt die Unterseite der Box mit der Oberseite des Inhaltsbereichs des übergeordneten Elements in Einklang, unter Verwendung der unteren Randkante des Inhaltsbereichs eines Inline-Elements.

- `text-top`
  - : Bringt die Oberseite der Box mit der Oberseite des Inhaltsbereichs des übergeordneten Elements in Einklang; die obere Randkante des Inhaltsbereichs eines Inline-Elements.

> [!NOTE]
> In SVG2 wurden `auto`, `before-edge` und `after-edge` als veraltet betrachtet und `text-before-edge` ist ein Alias für `text-top`, und `text-after-edge` ist ein Alias für `text-bottom`. Diese Schlüsselwörter sollten nicht als Teil der {{cssxref("vertical-align")}}-Kurzschreibweise verwendet werden. Browser unterstützen `auto` als Synonym für `baseline` und `hanging`, wobei der Ausrichtungspunkt des auszurichtenden Objekts mit der "hängenden" Grundlinie des Elterntextelements ausgerichtet wird, aber keins ist Teil der Spezifikation.

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
- SVG-Attribut {{SVGAttr("alignment-baseline")}}
- [CSS Inline-Layout](/de/docs/Web/CSS/CSS_inline_layout)-Modul
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment)-Modul
