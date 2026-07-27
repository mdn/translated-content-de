---
title: "`alignment-baseline` CSS property"
short-title: alignment-baseline
slug: Web/CSS/Reference/Properties/alignment-baseline
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

Die **`alignment-baseline`** [CSS](/de/docs/Web/CSS)-Eigenschaft spezifiziert die spezifische {{Glossary("Baseline/Typography", "Baseline")}}, die verwendet wird, um den Text und die Inhalte auf Inline-Ebene der Box auszurichten. Die **Baseline-Ausrichtung** ist die Beziehung zwischen den Baselines mehrerer Ausrichtungsobjekte innerhalb eines Ausrichtungskontexts. Bei der Durchführung einer Baseline-Ausrichtung gibt der Wert der `alignment-baseline`-Eigenschaft an, welche Baseline der Box an die entsprechende Baseline ihres Ausrichtungskontexts ausgerichtet ist.

> [!NOTE]
> Die `alignment-baseline`-Eigenschaft hat nur eine Wirkung auf Inline-Level-Boxen, Flex-Items, Grid-Items, Tabellenzellen sowie die SVG-Elemente {{SVGElement("text")}}, {{SVGElement("textPath")}} und {{SVGElement("tspan")}}. Wenn vorhanden, überschreibt sie das Attribut {{SVGAttr("alignment-baseline")}} der Form.

In einem Inline-Formatierungskontext teilen Inline-Level-Boxfragmente und Glyphen einen durch ihr übergeordnetes Inline-Boxfragment entlang ihrer Inline-Achse etablierten Ausrichtungskontext. Im SVG-Textlayout geben diese Werte stattdessen die Baseline an, die mit der aktuellen SVG-Textposition ausgerichtet ist.

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

Diese Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben:

- `baseline`
  - : Verwenden Sie den Wert {{cssxref("dominant-baseline")}} des übergeordneten Elements.

- `alphabetic`
  - : Wird beim Schreiben in lateinischen, kyrillischen, griechischen und vielen anderen Schriften verwendet; gleicht die alphabetische Baseline der Box an die des übergeordneten Elements an, entsprechend dem unteren Rand der meisten, aber nicht aller Zeichen.

- `central`
  - : Gleicht die zentrale Baseline der Box an die zentrale Baseline des übergeordneten Elements an, entsprechend der ideografischen zentralen Baseline, auf halbem Weg zwischen der ideografischen-unteren und ideografischen-oberen Baseline.

- `ideographic`
  - : Gleicht die ideografische Zeichenfläche Unterseite der Box an die des übergeordneten Elements an, wobei die abgeleitete Baseline-Tabelle unter Verwendung der ideografischen Baseline-Tabelle in der Schriftart konstruiert wird.

- `mathematical`
  - : Gleicht die mathematische Baseline der Box an die des übergeordneten Elements an, entsprechend der mittleren Baseline, um die mathematische Zeichen herum gestaltet sind.

- `middle`
  - : Richtet den vertikalen Mittelpunkt der Box mit der Baseline der übergeordneten Box plus der halben x-Höhe der übergeordneten Box aus. Nutzt die x-mittel-Baselines; außer unter [`text-orientation: upright;`](/de/docs/Web/CSS/Reference/Properties/text-orientation) (wo die alphabetische und x-Höhe Baselines im Wesentlichen bedeutungslos sind), in diesem Fall wird stattdessen die `central` Baseline verwendet.

- `text-bottom`
  - : Gleicht die Unterseite der Box an die Oberseite des Inhaltsbereichs des übergeordneten Elements an, indem die Linie-unter Kante der Inline-Inhaltsbox verwendet wird.

- `text-top`
  - : Gleicht die Oberseite der Box an die Oberseite des Inhaltsbereichs des übergeordneten Elements an; die Linie-über Kante einer Inline-Inhaltsbox.

> [!NOTE]
> In SVG2 wurden `auto`, `before-edge` und `after-edge` veraltet und `text-before-edge` ist ein Alias für `text-top`, und `text-after-edge` ist ein Alias für `text-bottom`. Diese Schlüsselwörter sollten nicht als Teil der Kurzform-Eigenschaft {{cssxref("vertical-align")}} verwendet werden. Browser unterstützen `auto` als Synonym für `baseline` und `hanging`, wobei der Ausrichtungspunkt des ausgerichteten Objekts mit der "hängenden" Baseline des übergeordneten Textinhalts-Elements ausgerichtet ist, aber keines davon ist Teil der Spezifikation.

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
