---
title: font-family
slug: Web/CSS/font-family
l10n:
  sourceCommit: d2f848cb963307d3f56da84128da8cf221e4f72f
---

Die **`font-family`**-Eigenschaft von [CSS](/de/docs/Web/CSS) gibt eine priorisierte Liste von einem oder mehreren Schriftfamiliennamen und/oder generischen Familiennamen für das ausgewählte Element an.

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

Werte werden durch Kommas getrennt, um Alternativen anzugeben. Der Browser wählt die erste Schrift aus der Liste, die installiert ist oder die mithilfe einer {{CSSxRef("@font-face")}}-Regel heruntergeladen werden kann.

Es ist oft praktisch, die Kurzform-Eigenschaft {{CSSxRef("font")}} zu verwenden, um `font-size` und andere schriftbezogene Eigenschaften auf einmal festzulegen.

Sie sollten immer mindestens einen generischen Familiennamen in einer `font-family`-Liste aufnehmen, da nicht garantiert ist, dass eine bestimmte Schrift verfügbar ist. Dies ermöglicht es dem Browser, bei Bedarf eine akzeptable Ersatzschrift auszuwählen.

Die `font-family`-Eigenschaft gibt eine Liste von Schriften an, von der höchsten zur niedrigsten Priorität. Die Schriftauswahl _stoppt nicht_ bei der ersten Schrift in der Liste, die auf dem System des Benutzers vorhanden ist. Vielmehr erfolgt die Schriftauswahl _zeichenweise_, sodass, wenn eine verfügbare Schrift kein Zeichen für ein benötigtes Zeichen hat, die nachfolgenden Schriften ausprobiert werden. Wenn eine Schrift nur in einigen [Stilen](/de/docs/Web/CSS/font-style), [Varianten](/de/docs/Web/CSS/font-variant) oder [Größen](/de/docs/Web/CSS/font-size) verfügbar ist, können diese Eigenschaften ebenfalls beeinflussen, welche Schriftfamilie ausgewählt wird.

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

Die `font-family`-Eigenschaft listet eine oder mehrere Schriftfamilien auf, die durch Kommas getrennt sind. Jede Schriftfamilie wird entweder als `<family-name>` oder als `<generic-name>` Wert angegeben.

Das folgende Beispiel listet zwei Schriftfamilien auf, die erste mit einem `<family-name>` und die zweite mit einem `<generic-name>`:

```css
font-family: "Gill Sans Extrabold", sans-serif;
```

### Werte

- `<family-name>`
  - : Der Name einer Schriftfamilie. Dies muss entweder ein einzelner {{cssxref("string")}}-Wert oder eine durch Leerzeichen getrennte Folge von {{cssxref("custom-ident")}}-Werten sein. Zeichenfolgenwerte müssen in Anführungszeichen gesetzt werden, können jedoch beliebige Unicode-Zeichen enthalten. Benutzerdefinierte Bezeichner sind nicht in Anführungszeichen gesetzt, jedoch müssen bestimmte Zeichen maskiert werden.

    Es ist eine gute Praxis, Schriftfamiliennamen, die Leerzeichen, Ziffern oder Interpunktionszeichen enthalten, die keine Bindestriche sind, zu zitieren.

    Siehe auch [Gültige Familiennamen](#gültige_familiennamen).

- `<generic-name>`
  - : Generische Schriftfamilien sind ein Rückfallmechanismus, ein Mittel, um die Absicht des Autors des Stylesheets zu bewahren, wenn keine der angegebenen Schriften verfügbar ist. Generische Familiennamen sind Schlüsselwörter und dürfen nicht in Anführungszeichen gesetzt werden. Eine generische Schriftfamilie sollte das letzte Element in der Liste der Schriftfamiliennamen sein. Die folgenden Schlüsselwörter sind definiert:
    - `serif`
      - : Glyphen haben Ausläufer, flared oder verjüngte Enden oder tatsächliche serifenartige Endungen.

        Zum Beispiel: Lucida Bright, Lucida Fax, Palatino, Palatino Linotype, Palladio, URW Palladio, serif.

    - `sans-serif`
      - : Glyphen haben einfache Strichenden.

        Zum Beispiel: Open Sans, Fira Sans, Lucida Sans, Lucida Sans Unicode, Trebuchet MS, Liberation Sans, Nimbus Sans L, sans-serif.

    - `monospace`
      - : Alle Glyphen haben die gleiche feste Breite.

        Zum Beispiel: Fira Mono, DejaVu Sans Mono, Menlo, Consolas, Liberation Mono, Monaco, Lucida Console, monospace.

    - `cursive`
      - : Glyphen in kursiven Schriften haben generell entweder verbindende Striche oder andere kursive Merkmale, die über die von kursiven Schriftarten hinausgehen. Die Glyphen sind teilweise oder vollständig verbunden, und das Ergebnis sieht eher wie handgeschriebene Stift- oder Pinsel-Schrift als gedruckte Schriftarbeit aus.

        Zum Beispiel: Brush Script MT, Brush Script Std, Lucida Calligraphy, Lucida Handwriting, Apple Chancery, cursive.

    - `fantasy`
      - : Fantasy-Schriften sind in erster Linie dekorative Schriften, die spielerische Darstellungen von Zeichen enthalten.

        Zum Beispiel: Papyrus, Herculanum, Party LET, Curlz MT, Harrington, fantasy.

    - `system-ui`
      - : Glyphen werden von der Standard-Benutzeroberflächenschrift auf einer bestimmten Plattform entnommen. Da sich typografische Traditionen weltweit stark unterscheiden, wird dieser generische Begriff für Schriftarten bereitgestellt, die nicht sauber in die anderen generischen Begriffe passen.
        > [!NOTE]
        > Wie der Name schon sagt, ist `system-ui` dafür gedacht, UI-Elemente wie native Apps aussehen zu lassen und nicht für den Schriftsatz langer Textabschnitte. Es könnte dazu führen, dass die angezeigte Schriftart für einige Benutzer unerwünscht ist – zum Beispiel könnte die Standardschrift CJK in Windows lateinische Schriften schlecht darstellen, und das `lang`-Attribut könnte die angezeigte Schriftart nicht beeinflussen. Einige Betriebssysteme erlauben keine Anpassung von `system-ui`, während Browser im Allgemeinen die Anpassung der `sans-serif`-Schriftfamilie erlauben. Für lange Absätze verwenden Sie `sans-serif` oder eine andere nicht-UI-Schriftfamilie.
    - `ui-serif`
      - : Die Standard-Serifen-Schrift der Benutzeroberfläche.
    - `ui-sans-serif`
      - : Die Standard-Serifenlose-Schrift der Benutzeroberfläche.
    - `ui-monospace`
      - : Die Standard-Monospaced-Schrift der Benutzeroberfläche.
    - `ui-rounded`
      - : Die Standard-Benutzeroberflächenschrift mit abgerundeten Merkmalen.
    - `math`
      - : Dies ist für die besonderen stilistischen Anforderungen bei der Darstellung von Mathematik: Hoch- und Tiefstellungen, Klammern, die mehrere Zeilen umfassen, geschachtelte Ausdrücke und doppelt gestrichelte Glyphen mit unterschiedlichen Bedeutungen.
    - `emoji`
      - : Schriften, die speziell zum Rendern von Emoji entworfen wurden.
    - `fangsong`
      - : Ein bestimmter Stil von chinesischen Schriftzeichen, der zwischen dem Serif-Stil Song und dem Kursive-Stil Kai liegt. Dieser Stil wird häufig für Regierungsdokumente verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einige gängige Schriftfamilien

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
- [Lernen: Grundlegendes Text- und Schriftstyling](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
