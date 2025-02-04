---
title: alignment-baseline
slug: Web/CSS/alignment-baseline
l10n:
  sourceCommit: 64d85b74ce1cce6a24ae8979da4f3f4a01a47229
---

{{CSSRef}}

Die **`alignment-baseline`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die spezifische {{Glossary("Baseline/Typography", "Grundlinie")}} fest, die verwendet wird, um den Text und den Inhalt auf Inline-Ebene der Box auszurichten. **Grundlinienausrichtung** bezieht sich auf die Beziehung zwischen den Grundlinien mehrerer Ausrichtungssubjekte innerhalb eines Ausrichtungskontextes. Bei der Ausführung der Grundlinienausrichtung gibt der Wert der Eigenschaft `alignment-baseline` an, welche Grundlinie der Box an die entsprechende Grundlinie ihres Ausrichtungskontextes ausgerichtet wird.

> [!NOTE]
> Die `alignment-baseline`-Eigenschaft hat nur Einfluss auf Boxen auf Inline-Ebene, Flex-Elemente, Grid-Elemente, Tabellenzellen und die {{SVGElement("text")}}, {{SVGElement("textPath")}}, und {{SVGElement("tspan")}} SVG-Elemente. Wenn vorhanden, überschreibt sie das {{SVGAttr("alignment-baseline")}}-Attribut der Form.

In einem Inline-Formatierungskontext teilen Inline-Level-Boxfragmente und Glyphen einen Ausrichtungskontext, der von ihrem übergeordneten Inline-Boxfragment entlang seiner Inline-Achse festgelegt wird. In der SVG-Textanordnung geben diese Werte stattdessen die Grundlinie an, die an die aktuelle Textposition des SVG ausgerichtet ist.

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

  - : Verwenden Sie den Wert {{cssxref("dominant-baseline")}} des übergeordneten Elements.

- `alphabetic`

  - : Wird beim Schreiben in lateinischen, kyrillischen, griechischen und vielen anderen Schriften verwendet; passt die alphabetische Grundlinie der Box an die des übergeordneten Elements an, entsprechend dem unteren Bereich der meisten, aber nicht aller Zeichen.

- `central`

  - : Passt die zentrale Grundlinie der Box an die zentrale Grundlinie des übergeordneten Elements an, entsprechend der ideografischen Zentralgrundlinie, die sich zwischen den ideografischen Unter- und Obergrundlinien befindet.

- `ideographic`

  - : Passt die untere Seite der ideografischen Zeichenfläche der Box an die des übergeordneten Elements an, wobei die abgeleitete Grundlinientabelle mit der ideografischen Grundlinientabelle der Schriftart erstellt wird.

- `mathematical`

  - : Passt die mathematische Grundlinie der Box an die des übergeordneten Elements an, entsprechend der zentralen Grundlinie, um die mathematische Zeichen erstellt werden.

- `middle`

  - : Richtet den vertikalen Mittelpunkt der Box mit der Grundlinie der übergeordneten Box plus die Hälfte der x-Höhe des übergeordneten Elements aus. Verwendet die x-mittleren Grundlinien; außer bei [`text-orientation: upright;`](/de/docs/Web/CSS/text-orientation) (wo die alphabetischen und x-Höhen-Grundlinien im Wesentlichen bedeutungslos sind), in diesem Fall wird stattdessen die `central`-Grundlinie verwendet.

- `text-bottom`

  - : Passt den unteren Bereich der Box an die obere Bereich des Inhaltsbereichs des übergeordneten Elements an, verwendet den unterliegenden Rand der Inline-Inhaltsbox.

- `text-top`
  - : Passt den oberen Bereich der Box an die obere Bereich des Inhaltsbereichs des übergeordneten Elements an; der überliegende Rand der Inline-Inhaltsbox.

> [!NOTE]
> In SVG2 wurden `auto`, `before-edge` und `after-edge` abgelehnt und `text-before-edge` ist ein Alias für `text-top`, und `text-after-edge` ist ein Alias für `text-bottom`. Diese Schlüsselwörter sollten nicht als Teil der {{cssxref("vertical-align")}}-Kurzform-Eigenschaft verwendet werden. Browser unterstützen `auto` als Synonym für `baseline` und `hanging`, wobei der Ausrichtungspunkt des auszurichtenden Objekts mit der "hängenden" Grundlinie des übergeordneten Textelementinhalts ausgerichtet ist, aber beide gehören nicht zur Spezifikation.

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
- [CSS Inline-Layout](/de/docs/Web/CSS/CSS_inline_layout) Modul
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
