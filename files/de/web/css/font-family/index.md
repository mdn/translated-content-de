---
title: font-family
slug: Web/CSS/font-family
l10n:
  sourceCommit: a3eec14af0580dad6eae65980686cee6cafc2c68
---

Die **`font-family`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert eine priorisierte Liste von einem oder mehreren Schriftfamiliennamen und/oder generischen Schriftfamiliennamen für das ausgewählte Element.

{{InteractiveExample("CSS Demo: font-family")}}

```css interactive-example-choice
font-family: "Georgia", serif;
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

Werte werden durch Kommas getrennt, um anzuzeigen, dass sie Alternativen sind. Der Browser wählt die erste Schrift in der Liste, die installiert ist oder die mithilfe einer {{CSSxRef("@font-face")}} Regel heruntergeladen werden kann.

Es ist oft praktisch, die Kurzform-Eigenschaft {{CSSxRef("font")}} zu verwenden, um `font-size` und andere schriftbezogene Eigenschaften auf einmal festzulegen.

Sie sollten immer mindestens einen generischen Schriftfamiliennamen in einer `font-family` Liste aufnehmen, da es keine Garantie dafür gibt, dass eine bestimmte Schriftart verfügbar ist. Dies ermöglicht es dem Browser, bei Bedarf eine akzeptable Fallback-Schriftart auszuwählen.

Die `font-family` Eigenschaft spezifiziert eine Liste von Schriftarten, von der höchsten Priorität zur niedrigsten. Die Schriftartauswahl _stoppt nicht_ bei der ersten Schriftart in der Liste, die auf dem System des Benutzers vorhanden ist. Vielmehr wird die Schriftartauswahl _zeichenweise_ durchgeführt, sodass, wenn eine verfügbare Schriftart kein Glyph für ein benötigtes Zeichen hat, die nachfolgenden Schriftarten versucht werden. Wenn eine Schriftart nur in einigen [Stilen](/de/docs/Web/CSS/font-style), [Varianten](/de/docs/Web/CSS/font-variant) oder [Größen](/de/docs/Web/CSS/font-size) verfügbar ist, können diese Eigenschaften die Auswahl der Schriftfamilie ebenfalls beeinflussen.

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
font-family: math;
font-family: fangsong;

/* Global values */
font-family: inherit;
font-family: initial;
font-family: revert;
font-family: revert-layer;
font-family: unset;
```

Die `font-family` Eigenschaft listet eine oder mehrere Schriftfamilien, getrennt durch Kommas, auf. Jede Schriftfamilie wird entweder als `<family-name>` oder `<generic-name>` Wert spezifiziert.

Das Beispiel unten listet zwei Schriftfamilien auf, die erste mit einem `<family-name>` und die zweite mit einem `<generic-name>`:

```css
font-family: "Gill Sans Extrabold", sans-serif;
```

### Werte

- `<family-name>`
  - : Der Name einer Schriftfamilie. Dies muss entweder ein einzelner {{cssxref("string")}} Wert oder eine durch Leerzeichen getrennte Sequenz von {{cssxref("custom-ident")}} Werten sein. String-Werte müssen in Anführungszeichen stehen, können jedoch jedes Unicode-Zeichen enthalten. Benutzerdefinierte Identifikatoren sind nicht in Anführungszeichen, aber bestimmte Zeichen müssen escaped werden.

    Es ist eine gute Praxis, Schriftfamiliennamen, die Leerzeichen, Ziffern oder Satzzeichen außer Bindestrichen enthalten, in Anführungszeichen zu setzen.

    Siehe auch [Gültige Familiennamen](#gültige_familiennamen).

- `<generic-name>`
  - : Generische Schriftfamilien sind ein Fallback-Mechanismus, ein Mittel, um die Absicht des Autors des Stylesheets zu bewahren, wenn keine der angegebenen Schriften verfügbar ist. Generische Familiennamen sind Schlüsselwörter und dürfen nicht in Anführungszeichen gesetzt werden. Eine generische Schriftfamilie sollte das letzte Element in der Liste der Schriftfamiliennamen sein. Die folgenden Schlüsselwörter sind definiert:
    - `serif`
      - : Glyphen haben Abschlussstriche, konische Enden oder tatsächliche serifenartige Endungen.

        Zum Beispiel: Lucida Bright, Lucida Fax, Palatino, Palatino Linotype, Palladio, URW Palladio, serif.

    - `sans-serif`
      - : Glyphen haben einfache Strichenden.

        Zum Beispiel: Open Sans, Fira Sans, Lucida Sans, Lucida Sans Unicode, Trebuchet MS, Liberation Sans, Nimbus Sans L, sans-serif.

    - `monospace`
      - : Alle Glyphen haben die gleiche feste Breite.

        Zum Beispiel: Fira Mono, DejaVu Sans Mono, Menlo, Consolas, Liberation Mono, Monaco, Lucida Console, monospace.

    - `cursive`
      - : Glyphen in Schreibschriftarten haben in der Regel zusammenhängende Striche oder andere kursivschriftliche Merkmale, die über die der kursive Schrift hinausgehen. Die Glyphen sind teilweise oder vollständig verbunden und wirken mehr wie handgeschriebene Stift- oder Pinselarbeiten als gedrucktes Schriftmaterial.

        Zum Beispiel: Brush Script MT, Brush Script Std, Lucida Calligraphy, Lucida Handwriting, Apple Chancery, cursive.

    - `fantasy`
      - : Fantasy-Schriften sind in erster Linie dekorative Schriften, die verspielte Darstellungen von Zeichen enthalten.

        Zum Beispiel: Papyrus, Herculanum, Party LET, Curlz MT, Harrington, fantasy.

    - `system-ui`
      - : Glyphen stammen aus der standardmäßigen Benutzerschnittstellenschrift auf einer bestimmten Plattform. Da die typografischen Traditionen weltweit stark variieren, wird dieses Generic für Schriftarten bereitgestellt, die nicht einfach in die anderen Generics abgebildet werden können.
        > [!NOTE]
        > Wie der Name schon sagt, ist `system-ui` dazu gedacht, UI-Elemente so aussehen zu lassen, wie native Apps, und nicht zum Schriftsetzen großer Textabsätze. Es könnte dazu führen, dass die angezeigte Schriftart für einige Benutzer unerwünscht ist – zum Beispiel könnte die Standard-CJK-Schriftart von Windows lateinische Schriften schlecht rendern, und das `lang` Attribut könnte die dargestellte Schriftart nicht beeinflussen. Einige Betriebssysteme erlauben keine Anpassung von `system-ui`, während Browser generell die Anpassung der `sans-serif` Schriftfamilie erlauben. Für große Absätze verwenden Sie `sans-serif` oder eine andere nicht-UI-Schriftfamilie.
    - `ui-serif`
      - : Die standardmäßige Serifenschrift der Benutzeroberfläche.
    - `ui-sans-serif`
      - : Die standardmäßige Sans-Serif-Schrift der Benutzeroberfläche.
    - `ui-monospace`
      - : Die standardmäßige Monospace-Schrift der Benutzeroberfläche.
    - `ui-rounded`
      - : Die standardmäßige Benutzeroberflächenschrift, die abgerundete Merkmale aufweist.
    - `math`
      - : Dies ist für die besonderen stilistischen Anforderungen zur Darstellung von Mathematik: Hoch- und Tiefstellungen, Klammern, die sich über mehrere Zeilen erstrecken, verschachtelte Ausdrücke und doppelt gestrichene Glyphen mit individuellen Bedeutungen.
    - `fangsong`
      - : Ein besonderer Stil chinesischer Schriftzeichen, die zwischen Serifen-Stil Song und kursivem Stil Kai formen. Dieser Stil wird oft für Regierungsdokumente verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einige gängige Schriftfamilien

```css
.serif {
  font-family: "Times", "Times New Roman", "Georgia", serif;
}

.sansserif {
  font-family: "Verdana", "Helvetica", "Arial", sans-serif;
}

.monospace {
  font-family: "Lucida Console", "Courier New", monospace;
}

.cursive {
  font-family: cursive;
}

.fantasy {
  font-family: fantasy;
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
- {{cssxref("font-variant-emoji")}}
- SVG {{SVGAttr("font-family")}} Attribut
- [Lernen: Grundlegendes zu Text- und Schriftformatierung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
