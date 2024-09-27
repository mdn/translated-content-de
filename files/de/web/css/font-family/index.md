---
title: font-family
slug: Web/CSS/font-family
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`font-family`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert eine priorisierte Liste von einem oder mehreren Schriftfamiliennamen und/oder generischen Familiennamen für das ausgewählte Element.

{{EmbedInteractiveExample("pages/css/font-family.html")}}

Werte werden durch Kommata getrennt, um anzuzeigen, dass sie Alternativen sind. Der Browser wählt die erste Schrift in der Liste aus, die entweder installiert oder über eine {{CSSxRef("@font-face")}} Regel heruntergeladen werden kann.

Oft ist es praktisch, die Kurzschreibweiseigenschaft {{CSSxRef("font")}} zu verwenden, um `font-size` und andere schriftbezogene Eigenschaften auf einmal festzulegen.

Sie sollten immer mindestens einen generischen Familiennamen in einer `font-family` Liste einschließen, da es keine Garantie gibt, dass eine bestimmte Schrift verfügbar ist. Dies ermöglicht dem Browser, bei Bedarf eine akzeptable Ersatzschrift auszuwählen.

Die `font-family` Eigenschaft spezifiziert eine Liste von Schriften, von der höchsten zur niedrigsten Priorität. Die Schriftauswahl _stoppt nicht_ bei der ersten Schrift in der Liste, die auf dem System des Benutzers vorhanden ist. Vielmehr erfolgt die Schriftauswahl _zeichenweise_, sodass, wenn eine verfügbare Schrift kein Glyphe für das benötigte Zeichen hat, die nachfolgenden Schriften versucht werden. Wenn eine Schrift nur in einigen [Stilen](/de/docs/Web/CSS/font-style), [Varianten](/de/docs/Web/CSS/font-variant) oder [Größen](/de/docs/Web/CSS/font-size) verfügbar ist, können auch diese Eigenschaften beeinflussen, welche Schriftfamilie gewählt wird.

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

Die `font-family` Eigenschaft listet eine oder mehrere Schriftfamilien auf, durch Kommas getrennt. Jede Schriftfamilie wird entweder als `<family-name>` oder `<generic-name>` Wert angegeben.

Das folgende Beispiel listet zwei Schriftfamilien auf, die erste mit einem `<family-name>` und die zweite mit einem `<generic-name>`:

```css
font-family: "Gill Sans Extrabold", sans-serif;
```

### Werte

- `<family-name>`

  - : Der Name einer Schriftfamilie. Dies muss entweder ein einzelner {{cssxref("string")}} Wert oder eine Leerraum-getrennte Sequenz von {{cssxref("custom-ident")}} Werten sein. String-Werte müssen in Anführungszeichen gesetzt werden, können aber jedes Unicode-Zeichen enthalten. Benutzerdefinierte Identifikatoren sind nicht in Anführungszeichen gesetzt, aber bestimmte Zeichen müssen maskiert werden.

    Es ist ratsam, Schriftfamiliennamen, die Leerzeichen, Ziffern oder Satzzeichen außer Bindestriche enthalten, in Anführungszeichen zu setzen.

    Siehe auch [Gültige Familiennamen](#gültige_familiennamen).

- `<generic-name>`

  - : Generische Schriftfamilien sind ein Rückfallmechanismus, ein Mittel, um etwas von der Absicht des Autors des Stylesheets zu bewahren, wenn keine der angegebenen Schriften verfügbar ist. Generische Familiennamen sind Schlüsselwörter und dürfen nicht in Anführungszeichen gesetzt werden. Eine generische Schriftfamilie sollte das letzte Element in der Liste der Schriftfamiliennamen sein. Die folgenden Schlüsselwörter sind definiert:

    - `serif`

      - : Glyphen haben Abschlussstriche, sich verbreiternde oder verjüngende Enden oder haben tatsächlich serifartige Endungen.

        Zum Beispiel: Lucida Bright, Lucida Fax, Palatino, Palatino Linotype, Palladio, URW Palladio, serif.

    - `sans-serif`

      - : Glyphen haben einfache Enden.

        Zum Beispiel: Open Sans, Fira Sans, Lucida Sans, Lucida Sans Unicode, Trebuchet MS, Liberation Sans, Nimbus Sans L, sans-serif.

    - `monospace`

      - : Alle Glyphen haben die gleiche feste Breite.

        Zum Beispiel: Fira Mono, DejaVu Sans Mono, Menlo, Consolas, Liberation Mono, Monaco, Lucida Console, monospace.

    - `cursive`

      - : Glyphen in Schreibschrift-Schriften haben im Allgemeinen entweder verbindende Striche oder andere kursive Merkmale über die von Kursivschriften hinaus. Die Glyphen sind teilweise oder vollständig verbunden und das Ergebnis wirkt mehr wie handgeschriebene Feder- oder Pinselstriche als gedruckte Buchstaben.

        Zum Beispiel: Brush Script MT, Brush Script Std, Lucida Calligraphy, Lucida Handwriting, Apple Chancery, cursive.

    - `fantasy`

      - : Fantasieschriften sind hauptsächlich dekorative Schriften, die spielerische Darstellungen von Zeichen enthalten.

        Zum Beispiel: Papyrus, Herculanum, Party LET, Curlz MT, Harrington, fantasy.

    - `system-ui`
      - : Glyphen werden aus der Standard-Benutzeroberfläche-Schrift auf einer bestimmten Plattform entnommen. Da die typografischen Traditionen weltweit sehr unterschiedlich sind, wird dieser generische Stil für Schriftstile bereitgestellt, die sich nicht sauber in die anderen generischen Stile einordnen lassen.
    - `ui-serif`
      - : Die Standard-Benutzeroberfläche-Serifenschrift.
    - `ui-sans-serif`
      - : Die Standard-Benutzeroberfläche-Sans-Serif-Schrift.
    - `ui-monospace`
      - : Die Standard-Benutzeroberfläche-Monospace-Schrift.
    - `ui-rounded`
      - : Die Standard-Benutzeroberfläche-Schrift mit abgerundeten Merkmalen.
    - `math`
      - : Diese ist für die besonderen stilistischen Anforderungen der Darstellung von Mathematik: Hoch- und Tiefstellungen, mehrere Zeilen übergreifende Klammern, verschachtelte Ausdrücke und doppelt gestrichene Glyphen mit unterschiedlichen Bedeutungen.
    - `emoji`
      - : Schriften, die speziell zum Darstellen von Emoji entworfen wurden.
    - `fangsong`
      - : Ein bestimmter Stil chinesischer Zeichen, der zwischen serifartigen Song- und kursivartigen Kai-Formen liegt. Dieser Stil wird häufig in amtlichen Dokumenten verwendet.

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
- [Grundlegende Text- und Schriftgestaltung](/de/docs/Learn/CSS/Styling_text/Fundamentals)
