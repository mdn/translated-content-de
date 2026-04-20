---
title: "`alignment-baseline` CSS property"
short-title: alignment-baseline
slug: Web/CSS/Reference/Properties/alignment-baseline
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`alignment-baseline`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die spezifische {{Glossary("Baseline/Typography", "Baseline")}} fest, die verwendet wird, um den Text und die Inhalte auf Inline-Ebene der Box auszurichten. **Baseline-Ausrichtung** beschreibt die Beziehung zwischen den Baselines mehrerer Ausrichtungsobjekte innerhalb eines Ausrichtungskontexts. Bei der Durchführung der Baseline-Ausrichtung gibt der Wert der `alignment-baseline`-Eigenschaft an, welche Baseline der Box an die entsprechende Baseline ihres Ausrichtungskontexts ausgerichtet wird.

> [!NOTE]
> Die `alignment-baseline`-Eigenschaft hat nur Auswirkungen auf Boxen auf Inline-Ebene, Flex-Elemente, Grid-Elemente, Tabellenzellen und die {{SVGElement("text")}}, {{SVGElement("textPath")}} und {{SVGElement("tspan")}} SVG-Elemente. Wenn vorhanden, überschreibt sie das {{SVGAttr("alignment-baseline")}} Attribut der Form.

In einem Inline-Formatierungskontext teilen sich Inline-Level-Boxfragmente und Glyphen einen Ausrichtungskontext, der von ihren übergeordneten Inline-Boxfragmenten entlang ihrer Inline-Achse festgelegt wird. Im SVG-Textlayout geben diese Werte stattdessen die Baseline an, die an die aktuelle SVG-Textposition ausgerichtet wird.

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
  - : Verwenden Sie den {{cssxref("dominant-baseline")}} Wert des Elternteils.

- `alphabetic`
  - : Wird beim Schreiben in Latein, Kyrillisch, Griechisch und vielen anderen Schriftsystemen verwendet; stimmt die alphabetische Baseline der Box mit der ihres Elternteils ab, entsprechend der Unterkante der meisten, aber nicht aller Zeichen.

- `central`
  - : Stimmt die zentrale Baseline der Box mit der zentralen Baseline ihres Elternteils ab, entsprechend der ideographischen zentralen Baseline, auf halbem Weg zwischen den ideographischen Unter- und Über-Baselines.

- `ideographic`
  - : Stimmt die untere Baseline der ideographischen Zeichenflächen der Box mit der ihres Elternteils ab, wobei die abgeleitete Baseline-Tabelle unter Verwendung der ideographischen Baseline-Tabelle in der Schriftart erstellt wird.

- `mathematical`
  - : Stimmt die mathematische Baseline der Box mit der ihres Elternteils ab, entsprechend der zentralen Baseline, um die herum mathematische Zeichen gestaltet sind.

- `middle`
  - : Richtet den vertikalen Mittelpunkt der Box mit der Baseline der Elternbox plus die Hälfte der x-Höhe des Elternteils aus. Verwendet die x-mittleren Baselines; außer bei [`text-orientation: upright;`](/de/docs/Web/CSS/Reference/Properties/text-orientation) (wo die alphabetische und x-Höhen-Baseline im Wesentlichen bedeutungslos sind), in diesem Fall wird stattdessen die `central` Baseline verwendet.

- `text-bottom`
  - : Stimmt die Unterkante der Box mit der Oberseite des Inhaltsbereichs der Eltern ab, indem die Unterkante der Zeile eines Inline-Inhaltsbox verwendet wird.

- `text-top`
  - : Stimmt die Oberkante der Box mit der Oberkante des Inhaltsbereichs der Eltern ab; die obere Kante der Zeile eines Inline-Inhaltsbox.

> [!NOTE]
> In SVG2 wurden `auto`, `before-edge` und `after-edge` veraltet, und `text-before-edge` ist ein Alias für `text-top`, und `text-after-edge` ist ein Alias für `text-bottom`. Diese Schlüsselwörter sollten nicht als Teil der {{cssxref("vertical-align")}} Kurzschreibweise verwendet werden. Browser unterstützen `auto` als Synonym für `baseline` und `hanging`, wobei der Ausrichtungspunkt des auszurichtenden Objekts mit der "hängenden" Baseline des übergeordneten Textelements ausgerichtet wird, aber keiner ist Teil der Spezifikation.

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
- SVG {{SVGAttr("alignment-baseline")}} Attribut
- [CSS Inline-Layout](/de/docs/Web/CSS/Guides/Inline_layout) Modul
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment) Modul
