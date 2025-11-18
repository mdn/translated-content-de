---
title: alignment-baseline
slug: Web/CSS/Reference/Properties/alignment-baseline
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`alignment-baseline`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die spezifische {{Glossary("Baseline/Typography", "Grundlinie")}} fest, die verwendet wird, um den Text und die Inline-Inhalte der Box auszurichten. **Grundlinienausrichtung** ist das Verhältnis zwischen den Grundlinien mehrerer Ausrichtungsobjekte innerhalb eines Ausrichtungskontexts. Bei der Durchführung der Grundlinienausrichtung gibt der Wert der `alignment-baseline` Eigenschaft an, welche Grundlinie der Box zur entsprechenden Grundlinie ihres Ausrichtungskontexts ausgerichtet ist.

> [!NOTE]
> Die `alignment-baseline` Eigenschaft hat nur Auswirkungen auf Inline-Level-Boxen, Flex-Elemente, Grid-Elemente, Tabellzellen und die {{SVGElement("text")}}, {{SVGElement("textPath")}} und {{SVGElement("tspan")}} SVG-Elemente. Falls vorhanden, überschreibt sie das {{SVGAttr("alignment-baseline")}} Attribut der Form.

In einem Inline-Formatierungskontext teilen Inline-Level-Box-Fragmente und Glyphen sich einen Ausrichtungskontext, der von ihrem übergeordneten Inline-Box-Fragment entlang seiner Inline-Achse festgelegt wird. Im SVG-Textlayout geben diese Werte stattdessen die Grundlinie an, die zur aktuellen SVG-Textposition ausgerichtet ist.

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
  - : Verwende den {{cssxref("dominant-baseline")}} Wert des Elternteils.

- `alphabetic`
  - : Wird beim Schreiben in lateinischen, kyrillischen, griechischen und vielen anderen Schriftsystemen verwendet; passt die alphabetische Grundlinie der Box an die des Elternteils an, entsprechend dem unteren Bereich der meisten, aber nicht aller Zeichen.

- `central`
  - : Passt die zentrale Grundlinie der Box an die zentrale Grundlinie ihres Elternteils an, entsprechend der ideografischen zentralen Grundlinie, auf halbem Weg zwischen den ideografisch-unteren und ideografisch-obereren Grundlinien.

- `ideographic`
  - : Passt die ideografische Zeichenflächenunterkanten-Grundlinie der Box an die des Elternteils an, wobei die abgeleitete Grundlinientabelle unter Verwendung der ideografischen Grundlinientabelle in der Schriftart konstruiert wird.

- `mathematical`
  - : Passt die mathematische Grundlinie der Box an die ihres Elternteils an, entsprechend der zentralen Grundlinie, um die mathematische Zeichen entworfen sind.

- `middle`
  - : Richtet den vertikalen Mittelpunkt der Box mit der Grundlinie der Elternbox plus der halben x-Höhe des Elternteils aus. Verwendet die x-middle Grundlinien; außer unter [`text-orientation: upright;`](/de/docs/Web/CSS/Reference/Properties/text-orientation) (wo die alphabetische und x-Höhen-Grundlinien im Wesentlichen bedeutungslos sind), in diesem Fall wird stattdessen die `central` Grundlinie verwendet.

- `text-bottom`
  - : Passt die Unterkante der Box an die Oberkante des Inhaltsbereichs des Elternteils an, unter Verwendung der Kante unter einer Inline-Inhaltsbox.

- `text-top`
  - : Passt die Oberkante der Box an die Oberkante des Inhaltsbereichs des Elternteils an; die obere Kante einer Inline-Inhaltsbox.

> [!NOTE]
> In SVG2 wurden `auto`, `before-edge`, und `after-edge` als veraltet erklärt und `text-before-edge` ist ein Alias für `text-top`, und `text-after-edge` ist ein Alias für `text-bottom`. Diese Schlüsselwörter sollten nicht als Teil der {{cssxref("vertical-align")}} Kurzschreibweise verwendet werden. Browser unterstützen `auto` als Synonym für `baseline` und `hanging`, wobei der Ausrichtungspunkt des auszurichtenden Objekts mit der "hängenden" Grundlinie des übergeordneten Textinhalts-Elements ausgerichtet wird, aber keines davon ist Teil der Spezifikation.

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
