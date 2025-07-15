---
title: alignment-baseline
slug: Web/CSS/alignment-baseline
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`alignment-baseline`** [CSS](/de/docs/Web/CSS)-Eigenschaft spezifiziert die spezifische {{Glossary("Baseline/Typography", "Baseline")}}, die verwendet wird, um den Text und die Inhalte auf Inline-Ebene des Box zu alignieren. **Baseline-Ausrichtung** ist die Beziehung zwischen den Baselines mehrerer Ausrichtungsobjekte innerhalb eines Ausrichtungskontextes. Bei der Durchführung einer Baseline-Ausrichtung gibt der Wert der `alignment-baseline`-Eigenschaft an, welche Baseline des Boxes zur entsprechenden Baseline ihres Ausrichtungskontextes ausgerichtet wird.

> [!NOTE]
> Die `alignment-baseline`-Eigenschaft hat nur eine Wirkung auf Inline-Level-Boxen, Flex-Items, Grid-Items, Tabellzellen und die {{SVGElement("text")}}, {{SVGElement("textPath")}} und {{SVGElement("tspan")}} SVG-Elemente. Falls vorhanden, überschreibt sie das {{SVGAttr("alignment-baseline")}} Attribut der Form.

In einem Inline-Formatierungs-Kontext teilen Inline-Level-Boxfragmente und Glyphen einen Ausrichtungskontext, der von ihrem übergeordneten Inline-Boxfragment entlang seiner Inline-Achse eingerichtet wird. In SVG-Text-Layouts geben diese Werte stattdessen die Baseline an, die an die aktuelle Textposition von SVG ausgerichtet wird.

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
  - : Verwenden Sie den {{cssxref("dominant-baseline")}}-Wert des Elternteils.

- `alphabetic`
  - : Wird beim Schreiben in lateinischen, kyrillischen, griechischen und vielen anderen Schriften verwendet; passt die alphabetische Baseline des Box an die des Elternteils an und entspricht dem unteren Rand der meisten, aber nicht aller Zeichen.

- `central`
  - : Passt die zentrale Baseline des Box an die zentrale Baseline des Elternteils an, entsprechend der ideographischen zentralen Baseline, die sich auf halbem Weg zwischen den ideographischen-unteren und ideographischen-oberen Baselines befindet.

- `ideographic`
  - : Passt die ideographische Zeichenseiten-Unterseiten-Baseline des Box an die des Elternteils an, wobei die abgeleitete Baseline-Tabelle unter Verwendung der ideographischen Baseline-Tabelle in der Schriftart erstellt wird.

- `mathematical`
  - : Passt die mathematische Baseline des Box an die des Elternteils an und entspricht der zentralen Baseline, um die mathematische Zeichen gestaltet sind.

- `middle`
  - : Richtet den vertikalen Mittelpunkt des Box mit der Baseline des Eltern-Boxes plus der halben x-Höhe des Elternteils aus. Verwendet die x-Mittelpunkt-Baselines; außer unter [`text-orientation: upright;`](/de/docs/Web/CSS/text-orientation) (wo die alphabetischen und x-Höhen-Baselines im Wesentlichen sinnlos sind), verwendet es stattdessen die `central` Baseline.

- `text-bottom`
  - : Passt den unteren Rand der Box an den oberen Rand des Inhaltsbereichs des Elternteils an, unter Verwendung der Linien-Unterkante eines Inline-Inhalts-Box.

- `text-top`
  - : Passt den oberen Rand der Box an den oberen Rand des Inhaltsbereichs des Elternteils an; die Linien-Überkante eines Inline-Inhalts-Box.

> [!NOTE]
> In SVG2 wurden `auto`, `before-edge` und `after-edge` veraltet und `text-before-edge` ist ein Alias für `text-top`, und `text-after-edge` ist ein Alias für `text-bottom`. Diese Schlüsselwörter sollten nicht als Teil der {{cssxref("vertical-align")}} Kurzschreibweise verwendet werden. Browser unterstützten `auto` als Synonym für `baseline` und `hanging`, wobei der Ausrichtungspunkt des ausgerichteten Objekts mit der "hängenden" Baseline des übergeordneten Textelementinhalts ausgerichtet ist, aber keiner ist Teil der Spezifikation.

## Formal definition

{{CSSInfo}}

## Formal syntax

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
- [CSS Inline-Layout](/de/docs/Web/CSS/CSS_inline_layout) Modul
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
