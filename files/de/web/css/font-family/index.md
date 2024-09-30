---
title: font-family
slug: Web/CSS/font-family
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`font-family`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt eine priorisierte Liste von einem oder mehreren Schriftfamiliennamen und/oder generischen Familiennamen für das ausgewählte Element fest.

{{EmbedInteractiveExample("pages/css/font-family.html")}}

Die Werte werden durch Kommata getrennt, um anzuzeigen, dass sie Alternativen sind. Der Browser wählt die erste Schrift in der Liste, die installiert ist oder die mithilfe einer {{CSSxRef("@font-face")}}-Regel heruntergeladen werden kann.

Es ist oft praktisch, die Kurzschreibweiseigenschaft {{CSSxRef("font")}} zu verwenden, um `font-size` und andere schriftbezogene Eigenschaften auf einmal festzulegen.

Sie sollten immer mindestens einen generischen Familiennamen in einer `font-family`-Liste einschließen, da keine Garantie besteht, dass eine bestimmte Schrift verfügbar ist. Dies erlaubt es dem Browser, im Bedarfsfall eine akzeptable Ersatzschrift auszuwählen.

Die `font-family`-Eigenschaft gibt eine Liste von Schriften an, von höchster Priorität bis zur niedrigsten. Die Schriftauswahl _stoppt nicht_ bei der ersten Schrift in der Liste, die auf dem System des Benutzers vorhanden ist. Vielmehr erfolgt die Schriftauswahl _zeichenweise_, sodass, wenn eine verfügbare Schrift kein Glyph für ein benötigtes Zeichen hat, die nachfolgenden Schriften versucht werden. Wenn eine Schrift nur in einigen [Stilen](/de/docs/Web/CSS/font-style), [Varianten](/de/docs/Web/CSS/font-variant) oder [Größen](/de/docs/Web/CSS/font-size) verfügbar ist, können diese Eigenschaften ebenfalls beeinflussen, welche Schriftfamilie ausgewählt wird.

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

Die `font-family`-Eigenschaft listet eine oder mehrere Schriftfamilien auf, getrennt durch Kommata. Jede Schriftfamilie wird entweder als `<family-name>` oder als `<generic-name>`-Wert angegeben.

Das folgende Beispiel listet zwei Schriftfamilien auf, die erste mit einem `<family-name>` und die zweite mit einem `<generic-name>`:

```css
font-family: "Gill Sans Extrabold", sans-serif;
```

### Werte

- `<family-name>`

  - : Der Name einer Schriftfamilie. Dies muss entweder ein einzelner {{cssxref("string")}}-Wert oder eine durch Leerzeichen getrennte Abfolge von {{cssxref("custom-ident")}}-Werten sein. Zeichenkettenwerte müssen in Anführungszeichen stehen, dürfen aber beliebige Unicode-Zeichen enthalten. Benutzerdefinierte Identifikatoren sind nicht in Anführungszeichen gesetzt, aber bestimmte Zeichen müssen maskiert werden.

    Es ist eine gute Praxis, Schriftfamiliennamen, die Leerzeichen, Ziffern oder Interpunktionszeichen außer Bindestrichen enthalten, in Anführungszeichen zu setzen.

    Siehe auch [Gültige Familiennamen](#gültige_familiennamen).

- `<generic-name>`

  - : Generische Schriftfamilien sind ein Fallback-Mechanismus, eine Möglichkeit, ein wenig von der Absicht des Stylesheet-Autors zu bewahren, wenn keine der angegebenen Schriften verfügbar ist. Generische Familiennamen sind Schlüsselwörter und dürfen nicht in Anführungszeichen gesetzt werden. Eine generische Schriftfamilie sollte der letzte Eintrag in der Liste der Schriftfamiliennamen sein. Die folgenden Schlüsselwörter sind definiert:

    - `serif`

      - : Glyphen haben Abschlussstriche, verbreiterte oder konisch zulaufende Enden oder tatsächliche serifenartige Endungen.

        Zum Beispiel: Lucida Bright, Lucida Fax, Palatino, Palatino Linotype, Palladio, URW Palladio, serif.

    - `sans-serif`

      - : Glyphen haben einfache Strichenden.

        Zum Beispiel: Open Sans, Fira Sans, Lucida Sans, Lucida Sans Unicode, Trebuchet MS, Liberation Sans, Nimbus Sans L, sans-serif.

    - `monospace`

      - : Alle Glyphen haben die gleiche feste Breite.

        Zum Beispiel: Fira Mono, DejaVu Sans Mono, Menlo, Consolas, Liberation Mono, Monaco, Lucida Console, monospace.

    - `cursive`

      - : Glyphen in Schreibschriften haben allgemein entweder verbindende Striche oder andere kalligrafische Merkmale, die über die von Kursivschriften hinausgehen. Die Glyphen sind teilweise oder vollständig verbunden, und das Ergebnis sieht eher wie handgeschriebene Schriftzüge mit Stift oder Pinsel aus als gedruckte Buchstabenarbeit.

        Zum Beispiel: Brush Script MT, Brush Script Std, Lucida Calligraphy, Lucida Handwriting, Apple Chancery, cursive.

    - `fantasy`

      - : Fantasieschriften sind in erster Linie dekorative Schriften, die verspielte Darstellungen von Zeichen enthalten.

        Zum Beispiel: Papyrus, Herculanum, Party LET, Curlz MT, Harrington, fantasy.

    - `system-ui`
      - : Glyphen werden aus der Standardschrift der Benutzeroberfläche auf einer gegebenen Plattform entnommen. Da typografische Traditionen weltweit erheblich variieren, wird dieser generische Begriff für Schriftarten bereitgestellt, die nicht klar in die anderen Kategorien passen.
    - `ui-serif`
      - : Die serifenartige Standardschrift der Benutzeroberfläche.
    - `ui-sans-serif`
      - : Die serifenlose Standardschrift der Benutzeroberfläche.
    - `ui-monospace`
      - : Die monospaced Standardschrift der Benutzeroberfläche.
    - `ui-rounded`
      - : Die Standardschrift der Benutzeroberfläche mit abgerundeten Merkmalen.
    - `math`
      - : Für die besonderen stilistischen Anliegen der Repräsentation von Mathematik: Hoch- und Tiefstellungen, Klammern, die mehrere Zeilen überbrücken, geschachtelte Ausdrücke und doppelt geschlagene Glyphen mit unterschiedlichen Bedeutungen.
    - `emoji`
      - : Schriftarten, die speziell entworfen wurden, um Emojis darzustellen.
    - `fangsong`
      - : Ein besonderer Stil von chinesischen Schriftzeichen, der zwischen serifenartigem Song und kalligrafischem Kai-Formen liegt. Dieser Stil wird oft für Regierungsdokumente verwendet.

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

Folgende Deklarationen sind gültig:

```css example-good
font-family: "Goudy Bookletter 1911", sans-serif;
```

Folgende Deklarationen sind ungültig:

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
- [Grundlegendes Text- und Schriftstyling](/de/docs/Learn/CSS/Styling_text/Fundamentals)
