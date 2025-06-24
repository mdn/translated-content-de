---
title: font-family
slug: Web/CSS/font-family
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`font-family`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert eine priorisierte Liste von einem oder mehreren Schriftgruppen-Namen und/oder generische Schriftgruppen-Namen für das ausgewählte Element.

{{InteractiveExample("CSS Demo: font-family")}}

```css interactive-example-choice
font-family: Georgia, serif;
```

```css interactive-example-choice
font-family: "Gill Sans", sans-serif;
```

```css interactive-example-choice
font-family: sans-serif;
```

```css interactive-example-choice
font-family: serif;
```

```css interactive-example-choice
font-family: cursive;
```

```css interactive-example-choice
font-family: system-ui;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    London. Michaelmas term lately over, and the Lord Chancellor sitting in
    Lincoln's Inn Hall. Implacable November weather. As much mud in the streets
    as if the waters had but newly retired from the face of the earth, and it
    would not be wonderful to meet a Megalosaurus, forty feet long or so,
    waddling like an elephantine lizard up Holborn Hill.
  </p>
</section>
```

```css interactive-example
section {
  font-size: 1.2em;
}
```

Werte werden durch Kommata getrennt, um anzuzeigen, dass sie Alternativen sind. Der Browser wählt die erste Schrift aus der Liste aus, die installiert ist oder die mithilfe einer {{CSSxRef("@font-face")}} At-Regel heruntergeladen werden kann.

Es ist oft praktisch, die Kurzform-Eigenschaft {{CSSxRef("font")}} zu verwenden, um `font-size` und andere schriftbezogene Eigenschaften auf einmal festzulegen.

Sie sollten immer mindestens einen generischen Familiennamen in einer `font-family` Liste einschließen, da keine Garantie besteht, dass eine bestimmte Schrift verfügbar ist. Dies ermöglicht es dem Browser, bei Bedarf eine akzeptable Ersatzschrift auszuwählen.

Die `font-family` Eigenschaft spezifiziert eine Liste von Schriftarten, von höchster bis niedrigster Priorität. Die Schriftauswahl _stoppt nicht_ bei der ersten Schriftart in der Liste, die auf dem System des Benutzers vorhanden ist. Vielmehr wird die Schriftauswahl _Zeichen für Zeichen_ durchgeführt, sodass, wenn eine verfügbare Schriftart kein Glyphe für ein benötigtes Zeichen hat, die nachfolgenden Schriften versucht werden. Wenn eine Schriftart nur in einigen [Stilen](/de/docs/Web/CSS/font-style), [Varianten](/de/docs/Web/CSS/font-variant) oder [Größen](/de/docs/Web/CSS/font-size) verfügbar ist, können diese Eigenschaften ebenfalls beeinflussen, welche Schriftgruppe gewählt wird.

## Syntax

```css
/* A font family name and a generic family name */
font-family: "Gill Sans Extrabold", sans-serif;
font-family: "Goudy Bookletter 1911", sans-serif;

/* A generic family name only */
font-family: serif;
font-family: sans-serif;
font-family: monospace;
font-family: cursive;
font-family: fantasy;
font-family: system-ui;
font-family: ui-serif;
font-family: ui-sans-serif;
font-family: ui-monospace;
font-family: ui-rounded;
font-family: emoji;
font-family: math;
font-family: fangsong;

/* Global values */
font-family: inherit;
font-family: initial;
font-family: revert;
font-family: revert-layer;
font-family: unset;
```

Die `font-family` Eigenschaft listet eine oder mehrere Schriftgruppen auf, getrennt durch Kommata. Jede Schriftgruppe wird entweder als `<family-name>` oder als `<generic-name>` Wert spezifiziert.

Das folgende Beispiel listet zwei Schriftgruppen auf, die erste mit einem `<family-name>` und die zweite mit einem `<generic-name>`:

```css
font-family: "Gill Sans Extrabold", sans-serif;
```

### Werte

- `<family-name>`

  - : Der Name einer Schriftgruppe. Dies muss entweder ein einzelner {{cssxref("string")}} Wert oder eine durch Leerzeichen getrennte Sequenz von {{cssxref("custom-ident")}} Werten sein. String-Werte müssen in Anführungszeichen gesetzt sein, können jedoch jedes Unicode-Zeichen enthalten. Benutzerdefinierte Bezeichner sind nicht in Anführungszeichen gesetzt, aber bestimmte Zeichen müssen maskiert werden.

    Es ist eine gute Praxis, Schriftgruppen-Namen, die Leerzeichen, Ziffern oder Satzzeichen außer Bindestrichen enthalten, in Anführungszeichen zu setzen.

    Siehe auch [Gültige Familiennamen](#gültige_familiennamen).

- `<generic-name>`

  - : Generische Schriftgruppen sind ein Rückfallmechanismus, ein Mittel, um einige der Absichten des Stylesheet-Autors zu bewahren, wenn keine der angegebenen Schriften verfügbar ist. Generische Familiennamen sind Schlüsselwörter und dürfen nicht in Anführungszeichen gesetzt werden. Eine generische Schriftgruppe sollte das letzte Element in der Liste der Schriftgruppen-Namen sein. Die folgenden Schlüsselwörter sind definiert:

    - `serif`

      - : Glyphe haben Endstriche, ausladende oder sich verjüngende Enden oder besitzen tatsächlich serifenartige Endungen.

        Zum Beispiel: Lucida Bright, Lucida Fax, Palatino, Palatino Linotype, Palladio, URW Palladio, serif.

    - `sans-serif`

      - : Glyphe haben einfache Strichenden.

        Zum Beispiel: Open Sans, Fira Sans, Lucida Sans, Lucida Sans Unicode, Trebuchet MS, Liberation Sans, Nimbus Sans L, sans-serif.

    - `monospace`

      - : Alle Glyphe haben die gleiche feste Breite.

        Zum Beispiel: Fira Mono, DejaVu Sans Mono, Menlo, Consolas, Liberation Mono, Monaco, Lucida Console, monospace.

    - `cursive`

      - : Glyphe in kursiven Schriften haben in der Regel entweder Verbindungsstriche oder andere kursive Merkmale jenseits der von kursiven Schriften. Die Glyphe sind teilweise oder vollständig verbunden, und das Ergebnis sieht mehr wie handgeschriebene Feder- oder Pinselstriche als gedruckte Buchstaben aus.

        Zum Beispiel: Brush Script MT, Brush Script Std, Lucida Calligraphy, Lucida Handwriting, Apple Chancery, cursive.

    - `fantasy`

      - : Fantasy-Schriften sind hauptsächlich dekorative Schriften, die spielerische Darstellungen von Zeichen enthalten.

        Zum Beispiel: Papyrus, Herculanum, Party LET, Curlz MT, Harrington, fantasy.

    - `system-ui`
      - : Glyphe werden von der Standardbenutzeroberflächenschrift auf einer bestimmten Plattform entnommen. Da sich die typografischen Traditionen weltweit stark unterscheiden, wird dieses generische für Schriften bereitgestellt, die sich nicht klar in die anderen Generika einordnen lassen.
    - `ui-serif`
      - : Die Standardbenutzeroberfläche-Serifenschrift.
    - `ui-sans-serif`
      - : Die Standardbenutzeroberfläche-Sans-Serif-Schrift.
    - `ui-monospace`
      - : Die Standardbenutzeroberfläche-Monospaceschrift.
    - `ui-rounded`
      - : Die Standardbenutzeroberflächenschrift mit abgerundeten Merkmalen.
    - `math`
      - : Dies ist für die besonderen stilistischen Belange der Darstellung von Mathematik: Hoch- und Tiefstellungen, Klammern, die sich über mehrere Zeilen erstrecken, verschachtelte Ausdrücke und doppelt geschlagene Glyphe mit unterschiedlichen Bedeutungen.
    - `emoji`
      - : Schriftarten, die speziell dafür entworfen sind, Emojis darzustellen.
    - `fangsong`
      - : Ein besonderer Stil chinesischer Schriftzeichen, der zwischen serifartigen Song- und kursivartigen Kai-Formen angesiedelt ist. Dieser Stil wird oft für Regierungsdokumente verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einige gängige Schriftgruppen

```css
.serif {
  font-family: Times, "Times New Roman", Georgia, serif;
}

.sansserif {
  font-family: Verdana, Arial, Helvetica, sans-serif;
}

.monospace {
  font-family: "Lucida Console", Courier, monospace;
}

.cursive {
  font-family: cursive;
}

.fantasy {
  font-family: fantasy;
}

.emoji {
  font-family: emoji;
}

.math {
  font-family: math;
}

.fangsong {
  font-family: fangsong;
}
```

```html hidden
<div class="serif">This is an example of a serif font.</div>

<div class="sansserif">This is an example of a sans-serif font.</div>

<div class="monospace">This is an example of a monospace font.</div>

<div class="cursive">This is an example of a cursive font.</div>

<div class="fantasy">This is an example of a fantasy font.</div>

<div class="math">This is an example of a math font.</div>

<div class="emoji">This is an example of an emoji font.</div>

<div class="fangsong">This is an example of a fangsong font.</div>
```

{{EmbedLiveSample("Some_common_font_families", 600, 220)}}

### Gültige Familiennamen

Die folgenden Deklarationen sind gültig:

```css example-good
font-family: "Goudy Bookletter 1911", sans-serif;
```

Die folgenden Deklarationen sind ungültig:

```css-nolint example-bad
font-family: Goudy Bookletter 1911, sans-serif;
font-family: Red/Black, sans-serif;
font-family: "Lucida" Grande, sans-serif;
font-family: Ahem!, sans-serif;
font-family: test@foo, sans-serif;
font-family: #POUND, sans-serif;
font-family: Hawaii 5-0, sans-serif;
```

Das folgende Beispiel ist technisch gültig, wird jedoch nicht empfohlen:

```css
font-family:
  Gill Sans Extrabold,
  sans-serif;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-style")}}
- {{cssxref("font-weight")}}
- SVG {{SVGAttr("font-family")}} Attribut
- [Lernen: Grundlegende Text- und Schriftgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
