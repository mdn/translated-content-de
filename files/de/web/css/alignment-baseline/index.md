---
title: alignment-baseline
slug: Web/CSS/alignment-baseline
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`alignment-baseline`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die spezifische {{Glossary("Baseline/Typography", "Baseline")}} fest, die zur Ausrichtung des Textes und der Inhalte auf Inline-Ebene eines Rahmens verwendet wird. **Baseline-Ausrichtung** bezeichnet die Beziehung zwischen den Baselines mehrerer Ausrichtungsobjekte innerhalb eines Ausrichtungskontexts. Bei der Baseline-Ausrichtung gibt der `alignment-baseline`-Eigenschaftswert an, welche Baseline des Rahmens an die entsprechende Baseline seines Ausrichtungskontexts ausgerichtet wird.

> [!NOTE]
> Die `alignment-baseline`-Eigenschaft hat nur Auswirkungen auf Boxen auf Inline-Ebene, Flex-Elemente, Grid-Elemente, Tabellenzellen und die SVG-Elemente {{SVGElement("text")}}, {{SVGElement("textPath")}} und {{SVGElement("tspan")}}. Falls vorhanden, setzt sie das {{SVGAttr("alignment-baseline")}}-Attribut der Form außer Kraft.

In einem Inline-Formatierungskontext teilen sich Fragmente von Boxen auf Inline-Ebene und Glyphen einen Ausrichtungskontext, der durch das übergeordnete Fragment der Inline-Box entlang ihrer Inline-Achse festgelegt wird. Im SVG-Textlayout geben diese Werte stattdessen die Baseline an, die an die aktuelle Textposition von SVG ausgerichtet wird.

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

  - : Verwendet den {{cssxref("dominant-baseline")}}-Wert des übergeordneten Elements.

- `alphabetic`

  - : Wird beim Schreiben in Latein, Kyrillisch, Griechisch und vielen anderen Schriftsystemen verwendet; stimmt die alphabetische Baseline des Rahmens mit der des übergeordneten Elements überein, entsprechend dem unteren Rand der meisten, jedoch nicht aller Zeichen.

- `central`

  - : Stimmt die zentrale Baseline des Rahmens mit der zentralen Baseline seines übergeordneten Elements überein, entsprechend der ideografischen zentralen Baseline, die sich auf halbem Weg zwischen den ideografisch-unteren und ideografisch-obersten Baselines befindet.

- `ideographic`

  - : Stimmt die ideografische Zeichengesicht-Unterkante-Baseline des Rahmens mit der seines übergeordneten Elements überein, wobei die abgeleitete Baseline-Tabelle mit der ideografischen Baseline-Tabelle in der Schriftart konstruiert wird.

- `mathematical`

  - : Stimmt die mathematische Baseline des Rahmens mit der seines übergeordneten Elements überein, entsprechend der zentralen Baseline, um die mathematische Zeichen entworfen sind.

- `middle`

  - : Richtet die vertikale Mitte des Rahmens mit der Baseline des übergeordneten Rahmens plus der halben x-Höhe des übergeordneten Rahmens aus. Verwendet die x-Mittel-Baselines; außer unter [`text-orientation: upright;`](/de/docs/Web/CSS/text-orientation) (wo die alphabetischen und x-Höhen-Baselines im Wesentlichen bedeutungslos sind), in welchem Fall es stattdessen die `central`-Baseline verwendet.

- `text-bottom`

  - : Stimmt den unteren Rand des Rahmens mit dem oberen Rand des Inhaltsbereichs des übergeordneten Elements überein, wobei die Unterkante der Linie eines Inline-Inhaltsrahmens verwendet wird.

- `text-top`
  - : Stimmt den oberen Rand des Rahmens mit dem oberen Rand des Inhaltsbereichs des übergeordneten Elements überein; die Überkante der Linie eines Inline-Inhaltsrahmens.

> [!NOTE]
> In SVG2 wurden `auto`, `before-edge` und `after-edge` als veraltet erklärt, und `text-before-edge` ist ein Alias für `text-top`, und `text-after-edge` ist ein Alias für `text-bottom`. Diese Schlüsselwörter sollten nicht als Teil der {{cssxref("vertical-align")}}-Shorthand-Eigenschaft verwendet werden. Browser unterstützen `auto` als Synonym für `baseline` und `hanging`, wobei der Ausrichtungspunkt des auszurichtenden Objekts mit der "hängenden" Baseline des übergeordneten Textelement-Inhalts ausgerichtet wird, aber keiner ist Teil der Spezifikation.

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
- [CSS Inline Layout](/de/docs/Web/CSS/CSS_inline_layout)-Modul
- [CSS Box Alignment](/de/docs/Web/CSS/CSS_box_alignment)-Modul
