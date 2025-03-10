---
title: font-family
slug: Web/CSS/font-family
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`font-family`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert eine priorisierte Liste von einem oder mehreren Schriftfamiliennamen und/oder generischen Familiennamen für das ausgewählte Element.

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

Werte werden durch Kommas getrennt, um Alternativen anzugeben. Der Browser wählt die erste Schriftart in der Liste, die installiert ist oder über eine {{CSSxRef("@font-face")}} at-rule heruntergeladen werden kann.

Es ist oft praktisch, die Kurzform-Eigenschaft {{CSSxRef("font")}} zu verwenden, um `font-size` und andere schriftbezogene Eigenschaften auf einmal zu setzen.

Sie sollten immer mindestens einen generischen Familiennamen in eine `font-family` Liste aufnehmen, da nicht garantiert werden kann, dass eine bestimmte Schriftart verfügbar ist. Dies ermöglicht dem Browser, bei Bedarf eine akzeptable Ersatzschriftart auszuwählen.

Die `font-family` Eigenschaft spezifiziert eine Liste von Schriftarten, von höchster zu niedrigster Priorität. Die Schriftauswahl endet _nicht_ bei der ersten Schrift in der Liste, die auf dem Benutzer-System vorhanden ist. Vielmehr erfolgt die Schriftauswahl _zeichenweise_, sodass, wenn eine verfügbare Schriftart kein Glyph für ein benötigtes Zeichen hat, die nachfolgenden Schriftarten ausprobiert werden. Wenn eine Schriftart nur in bestimmten [Stilen](/de/docs/Web/CSS/font-style), [Varianten](/de/docs/Web/CSS/font-variant) oder [Größen](/de/docs/Web/CSS/font-size) verfügbar ist, können diese Eigenschaften ebenfalls beeinflussen, welche Schriftfamilie gewählt wird.

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

Die `font-family` Eigenschaft listet eine oder mehrere Schriftfamilien auf, getrennt durch Kommas. Jede Schriftfamilie wird als entweder ein `<family-name>` oder ein `<generic-name>` Wert angegeben.

Das untenstehende Beispiel listet zwei Schriftfamilien auf, die erste mit einem `<family-name>` und die zweite mit einem `<generic-name>`:

```css
font-family: "Gill Sans Extrabold", sans-serif;
```

### Werte

- `<family-name>`

  - : Der Name einer Schriftfamilie. Dies muss entweder ein einzelner {{cssxref("string")}} Wert oder eine durch Leerzeichen geteilte Sequenz von {{cssxref("custom-ident")}} Werten sein. Zeichenfolgenwerte müssen in Anführungszeichen stehen, können aber jedes Unicode-Zeichen enthalten. Benutzerdefinierte Identifikatoren werden nicht in Anführungszeichen gesetzt, aber bestimmte Zeichen müssen maskiert werden.

    Es ist eine gute Praxis, Schriftfamiliennamen, die Leerzeichen, Ziffern oder Satzzeichen außer Bindestrichen enthalten, in Anführungszeichen zu setzen.

    Siehe auch [Gültige Familiennamen](#gültige_familiennamen).

- `<generic-name>`

  - : Generische Schriftfamilien sind ein Rückfallmechanismus, ein Mittel, um den Stil des Autors des Stylesheets weitgehend zu bewahren, wenn keine der angegebenen Schriften verfügbar sind. Generische Familiennamen sind Schlüsselwörter und dürfen nicht in Anführungszeichen gesetzt werden. Eine generische Schriftfamilie sollte das letzte Element in der Liste der Schriftfamiliennamen sein. Die folgenden Schlüsselwörter sind definiert:

    - `serif`

      - : Glyphen haben abschließende Striche, aufgeblähte oder verjüngte Enden oder haben tatsächliche serifenförmige Enden.

        Zum Beispiel: Lucida Bright, Lucida Fax, Palatino, Palatino Linotype, Palladio, URW Palladio, serif.

    - `sans-serif`

      - : Glyphen haben schlichte Enden.

        Zum Beispiel: Open Sans, Fira Sans, Lucida Sans, Lucida Sans Unicode, Trebuchet MS, Liberation Sans, Nimbus Sans L, sans-serif.

    - `monospace`

      - : Alle Glyphen haben die gleiche feste Breite.

        Zum Beispiel: Fira Mono, DejaVu Sans Mono, Menlo, Consolas, Liberation Mono, Monaco, Lucida Console, monospace.

    - `cursive`

      - : Glyphen in Kursivschriften haben im Allgemeinen entweder verbindende Striche oder andere kursivartige Merkmale, die über die von italic-Schriften hinausgehen. Die Glyphen sind teilweise oder vollständig verbunden, und das Ergebnis sieht eher wie handgeschrieben mit einem Stift oder Pinsel als wie gedruckte Buchstabenarbeit aus.

        Zum Beispiel: Brush Script MT, Brush Script Std, Lucida Calligraphy, Lucida Handwriting, Apple Chancery, cursive.

    - `fantasy`

      - : Fantasieschriften sind vorwiegend dekorative Schriften, die spielerische Darstellungen von Zeichen enthalten.

        Zum Beispiel: Papyrus, Herculanum, Party LET, Curlz MT, Harrington, fantasy.

    - `system-ui`
      - : Glyphen werden aus der Standardbenutzeroberfläche Schrift eines bestimmten Plattform entnommen. Da die typografischen Traditionen weltweit stark variieren, wird diese generische Option für Schriften bereitgestellt, die nicht sauber in die anderen generischen Optionen passen.
    - `ui-serif`
      - : Die Standardbenutzeroberfläche Serifenschrift.
    - `ui-sans-serif`
      - : Die Standardbenutzeroberfläche Sans-Serifenschrift.
    - `ui-monospace`
      - : Die Standardbenutzeroberfläche Monospace-Schrift.
    - `ui-rounded`
      - : Die Standardbenutzeroberfläche Schrift, die abgerundete Merkmale aufweist.
    - `math`
      - : Dies ist für die speziellen stilistischen Anforderungen bei der Darstellung von Mathematik: Hoch- und Tiefstellungen, Klammern, die mehrere Zeilen umfassen, verschachtelte Ausdrücke und doppelt geschlagene Glyphen mit unterschiedlichen Bedeutungen.
    - `emoji`
      - : Schriften, die speziell für die Darstellung von Emoji entwickelt wurden.
    - `fangsong`
      - : Ein bestimmter Stil von chinesischen Zeichen, der zwischen serif-artigen Song und kursiv-artigen Kai-Formen liegt. Dieser Stil wird oft für Regierungsdokumente verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einige häufige Schriftfamilien

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
