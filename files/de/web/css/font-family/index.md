---
title: font-family
slug: Web/CSS/font-family
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`font-family`** [CSS](/de/docs/Web/CSS) Eigenschaft legt eine priorisierte Liste von einem oder mehreren Schriftnamen und/oder generischen Familiennamen für das ausgewählte Element fest.

{{EmbedInteractiveExample("pages/css/font-family.html")}}

Werte werden durch Kommata getrennt, um anzuzeigen, dass sie Alternativen sind. Der Browser wählt die erste Schrift in der Liste, die installiert ist oder die über eine {{CSSxRef("@font-face")}}-Regel heruntergeladen werden kann.

Es ist oft praktisch, die Kurzform-Eigenschaft {{CSSxRef("font")}} zu verwenden, um `font-size` und andere schriftbezogene Eigenschaften gleichzeitig festzulegen.

Sie sollten immer mindestens einen generischen Familiennamen in eine `font-family`-Liste aufnehmen, da es keine Garantie gibt, dass eine bestimmte Schriftart verfügbar ist. Dies ermöglicht es dem Browser, eine akzeptable Ersatzschrift auszuwählen, wenn dies erforderlich ist.

Die `font-family`-Eigenschaft legt eine Liste von Schriften fest, von der höchsten Priorität zur niedrigsten. Die Schriftauswahl _stoppt nicht_ bei der ersten Schrift in der Liste, die auf dem System des Benutzers vorhanden ist. Vielmehr erfolgt die Schriftauswahl _zeichengenau_, sodass, wenn eine verfügbare Schriftart kein Zeichen für ein benötigtes Zeichen hat, die nachfolgenden Schriften ausprobiert werden. Wenn eine Schriftart nur in einigen [Styles](/de/docs/Web/CSS/font-style), [Varianten](/de/docs/Web/CSS/font-variant) oder [Größen](/de/docs/Web/CSS/font-size) verfügbar ist, können diese Eigenschaften auch die Wahl der Schriftfamilie beeinflussen.

## Syntax

```css
/* Ein Schriftfamilienname und ein generischer Familienname */
font-family: "Gill Sans Extrabold", sans-serif;
font-family: "Goudy Bookletter 1911", sans-serif;

/* Nur ein generischer Familienname */
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

/* Globale Werte */
font-family: inherit;
font-family: initial;
font-family: revert;
font-family: revert-layer;
font-family: unset;
```

Die `font-family`-Eigenschaft listet eine oder mehrere Schriftfamilien auf, die durch Kommata getrennt sind. Jede Schriftfamilie wird entweder als `<family-name>` oder `<generic-name>`-Wert angegeben.

Das folgende Beispiel listet zwei Schriftfamilien auf, die erste mit einem `<family-name>` und die zweite mit einem `<generic-name>`:

```css
font-family: "Gill Sans Extrabold", sans-serif;
```

### Werte

- `<family-name>`

  - : Der Name einer Schriftfamilie. Dies muss entweder ein einzelner {{cssxref("string")}}-Wert oder eine leerzeichengetrennte Sequenz von {{cssxref("custom-ident")}}-Werten sein. String-Werte müssen in Anführungszeichen stehen, dürfen jedoch beliebige Unicode-Zeichen enthalten. Benutzerdefinierte Bezeichner werden nicht in Anführungszeichen gesetzt, aber bestimmte Zeichen müssen maskiert werden.

    Es ist eine gute Praxis, Schriftfamiliennamen, die Leerzeichen, Ziffern oder Satzzeichen außer Bindestrichen enthalten, in Anführungszeichen zu setzen.

    Siehe auch [Gültige Familiennamen](#gültige_familiennamen).

- `<generic-name>`

  - : Generische Schriftfamilien sind ein Ersatzmechanismus, ein Mittel zur Erhaltung einiger Absichten des Autors des Stylesheets, wenn keine der angegebenen Schriften verfügbar ist. Generische Familiennamen sind Schlüsselwörter und dürfen nicht in Anführungszeichen gesetzt werden. Eine generische Schriftfamilie sollte der letzte Punkt in der Liste der Schriftnamen sein. Die folgenden Schlüsselwörter sind definiert:

    - `serif`

      - : Zeichen haben Abschlussstriche, ausladende oder konische Enden oder tatsächliche Serifen-Endungen.

        Zum Beispiel: Lucida Bright, Lucida Fax, Palatino, Palatino Linotype, Palladio, URW Palladio, serif.

    - `sans-serif`

      - : Zeichen haben schlichte Enden.

        Zum Beispiel: Open Sans, Fira Sans, Lucida Sans, Lucida Sans Unicode, Trebuchet MS, Liberation Sans, Nimbus Sans L, sans-serif.

    - `monospace`

      - : Alle Zeichen haben die gleiche feste Breite.

        Zum Beispiel: Fira Mono, DejaVu Sans Mono, Menlo, Consolas, Liberation Mono, Monaco, Lucida Console, monospace.

    - `cursive`

      - : Zeichen in kursiven Schriften haben im Allgemeinen entweder Verbundstriche oder andere kursive Merkmale, die über die von kursiven Schriftarten hinausgehen. Die Zeichen sind teilweise oder vollständig verbunden, und das Ergebnis sieht mehr wie handgeschriebene Schrift mit Stift oder Pinsel aus als gedrucktes Schriftgut.

        Zum Beispiel: Brush Script MT, Brush Script Std, Lucida Calligraphy, Lucida Handwriting, Apple Chancery, cursive.

    - `fantasy`

      - : Fantasieschriften sind hauptsächlich dekorative Schriften, die spielerische Darstellungen von Zeichen enthalten.

        Zum Beispiel: Papyrus, Herculanum, Party LET, Curlz MT, Harrington, fantasy.

    - `system-ui`
      - : Zeichen werden aus der Standardschriftart der Benutzeroberfläche auf einer bestimmten Plattform entnommen. Da die typografischen Traditionen weltweit stark variieren, wird dieser Generic für Schriftarten bereitgestellt, die nicht eindeutig in die anderen Generics passen.
    - `ui-serif`
      - : Die serifenbetonte Standardschriftart der Benutzeroberfläche.
    - `ui-sans-serif`
      - : Die serifenlose Standardschriftart der Benutzeroberfläche.
    - `ui-monospace`
      - : Die monospaced Standardschriftart der Benutzeroberfläche.
    - `ui-rounded`
      - : Die Standardschriftart der Benutzeroberfläche, die abgerundete Merkmale aufweist.
    - `math`
      - : Dies ist für die besonderen stilistischen Belange der Darstellung von Mathematik: hoch- und tiefgestellte Zeichen, Klammern, die sich über mehrere Zeilen erstrecken, verschachtelte Ausdrücke und doppelstrichige Zeichen mit unterschiedlichen Bedeutungen.
    - `emoji`
      - : Schriften, die speziell zum Rendern von Emojis entworfen wurden.
    - `fangsong`
      - : Ein besonderer Stil von chinesischen Schriftzeichen, der zwischen serif-Stil Song und kursiv-Stil Kai Formen liegt. Dieser Stil wird häufig für Regierungsdokumente verwendet.

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
<div class="serif">Dies ist ein Beispiel für eine Serifenschrift.</div>

<div class="sansserif">Dies ist ein Beispiel für eine serifenlose Schrift.</div>

<div class="monospace">Dies ist ein Beispiel für eine Monospace-Schrift.</div>

<div class="cursive">Dies ist ein Beispiel für eine Kursive-Schrift.</div>

<div class="fantasy">Dies ist ein Beispiel für eine Fantasy-Schrift.</div>

<div class="math">Dies ist ein Beispiel für eine Mathe-Schrift.</div>

<div class="emoji">Dies ist ein Beispiel für eine Emoji-Schrift.</div>

<div class="fangsong">Dies ist ein Beispiel für eine Fangsong-Schrift.</div>
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
- [Grundlegendes zu Text- und Schriftformatierung](/de/docs/Learn/CSS/Styling_text/Fundamentals)
