---
title: font-family
slug: Web/CSS/font-family
l10n:
  sourceCommit: 64d85b74ce1cce6a24ae8979da4f3f4a01a47229
---

{{CSSRef}}

Die **`font-family`** [CSS](/de/docs/Web/CSS) Eigenschaft legt eine priorisierte Liste von einem oder mehreren Schriftfamiliennamen und/oder generischen Familiennamen für das ausgewählte Element fest.

{{EmbedInteractiveExample("pages/css/font-family.html")}}

Werte sind durch Kommas getrennt, um anzuzeigen, dass sie Alternativen sind. Der Browser wählt die erste Schriftart in der Liste, die installiert ist oder die durch eine {{CSSxRef("@font-face")}} Regel heruntergeladen werden kann.

Es ist oft praktisch, die Kurzschreibweise {{CSSxRef("font")}} zu verwenden, um `font-size` und andere schriftbezogene Eigenschaften auf einmal festzulegen.

Sie sollten immer mindestens einen generischen Familiennamen in einer `font-family` Liste einschließen, da es keine Garantie gibt, dass eine bestimmte Schriftart verfügbar ist. Dies ermöglicht es dem Browser, bei Bedarf eine akzeptable Ersatzschriftart auszuwählen.

Die `font-family` Eigenschaft gibt eine Liste von Schriftarten an, von höchster zu niedrigster Priorität. Die Schriftauswahl _stoppt nicht_ bei der ersten Schriftart in der Liste, die auf dem System des Benutzers vorhanden ist. Vielmehr erfolgt die Schriftauswahl _ein Zeichen nach dem anderen_, sodass, wenn eine verfügbare Schriftart kein Glyphe für ein benötigtes Zeichen hat, die nachfolgenden Schriftarten ausprobiert werden. Wenn eine Schriftart nur in einigen [Stilen](/de/docs/Web/CSS/font-style), [Varianten](/de/docs/Web/CSS/font-variant) oder [Größen](/de/docs/Web/CSS/font-size) verfügbar ist, können diese Eigenschaften auch beeinflussen, welche Schriftfamilie gewählt wird.

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

Die `font-family` Eigenschaft listet eine oder mehrere Schriftfamilien auf, getrennt durch Kommas. Jede Schriftfamilie wird entweder als `<family-name>` oder `<generic-name>` Wert angegeben.

Das folgende Beispiel listet zwei Schriftfamilien auf, die erste mit einem `<family-name>` und die zweite mit einem `<generic-name>`:

```css
font-family: "Gill Sans Extrabold", sans-serif;
```

### Werte

- `<family-name>`

  - : Der Name einer Schriftfamilie. Dieser muss entweder ein einzelner {{cssxref("string")}} Wert oder eine durch Leerzeichen getrennte Folge von {{cssxref("custom-ident")}} Werten sein. Zeichenfolgenwerte müssen in Anführungszeichen stehen, dürfen jedoch jedes Unicode-Zeichen enthalten. Benutzerdefinierte Identifikatoren werden nicht in Anführungszeichen gesetzt, aber bestimmte Zeichen müssen entkommen werden.

    Es ist eine gute Praxis, Schriftfamiliennamen, die Leerzeichen, Ziffern oder Satzzeichen außer Bindestrichen enthalten, in Anführungszeichen zu setzen.

    Siehe auch [Gültige Familiennamen](#gültige_familiennamen).

- `<generic-name>`

  - : Generische Schriftfamilien sind ein Rückfallmechanismus, ein Mittel, um einen Teil der Absicht des Stylesheet-Autors zu bewahren, wenn keine der angegebenen Schriftarten verfügbar ist. Generische Familiennamen sind Schlüsselwörter und dürfen nicht in Anführungszeichen gesetzt werden. Eine generische Schriftfamilie sollte das letzte Element in der Liste der Schriftfamiliennamen sein. Die folgenden Schlüsselwörter sind definiert:

    - `serif`

      - : Glyphen haben abschließende Striche, gebogene oder sich verjüngende Enden oder haben tatsächliche serifenartige Endungen.

        Zum Beispiel: Lucida Bright, Lucida Fax, Palatino, Palatino Linotype, Palladio, URW Palladio, serif.

    - `sans-serif`

      - : Glyphen haben Strichenden, die schlicht sind.

        Zum Beispiel: Open Sans, Fira Sans, Lucida Sans, Lucida Sans Unicode, Trebuchet MS, Liberation Sans, Nimbus Sans L, sans-serif.

    - `monospace`

      - : Alle Glyphen haben die gleiche feste Breite.

        Zum Beispiel: Fira Mono, DejaVu Sans Mono, Menlo, Consolas, Liberation Mono, Monaco, Lucida Console, monospace.

    - `cursive`

      - : Glyphen in kursiven Schriften haben normalerweise entweder verbindende Striche oder andere kursivartige Merkmale über die von Schrägschrift-Typen hinaus. Die Glyphen sind teilweise oder vollständig verbunden, und das Ergebnis sieht mehr nach handgeschriebenem Stift- oder Pinseltext als nach gedrucktem Buchstabenwerk aus.

        Zum Beispiel: Brush Script MT, Brush Script Std, Lucida Calligraphy, Lucida Handwriting, Apple Chancery, cursive.

    - `fantasy`

      - : Fantasy-Schriften sind hauptsächlich dekorative Schriften, die spielerische Darstellungen von Zeichen enthalten.

        Zum Beispiel: Papyrus, Herculanum, Party LET, Curlz MT, Harrington, fantasy.

    - `system-ui`
      - : Glyphen stammen von der Standardschriftart für Benutzeroberflächen auf einer bestimmten Plattform. Da sich typografische Traditionen weltweit stark unterscheiden, wird dieses generische für Schriften bereitgestellt, die sich nicht eindeutig in die anderen Generika einordnen lassen.
    - `ui-serif`
      - : Die Standardschriftart der Benutzeroberfläche für Serifen.
    - `ui-sans-serif`
      - : Die Standardschriftart der Benutzeroberfläche für serifenlose Schriftarten.
    - `ui-monospace`
      - : Die Standardschriftart der Benutzeroberfläche für Monospace.
    - `ui-rounded`
      - : Die Standardschriftart der Benutzeroberfläche mit abgerundeten Merkmalen.
    - `math`
      - : Dies ist für die besonderen stilistischen Anforderungen der Darstellung von Mathematik: Hoch- und Tiefstellungen, Klammern, die mehrere Zeilen umfassen, verschachtelte Ausdrücke und doppel-strichige Glyphe mit unterschiedlichen Bedeutungen.
    - `emoji`
      - : Schriften, die speziell für die Darstellung von Emoji entworfen wurden.
    - `fangsong`
      - : Ein bestimmter Stil chinesischer Zeichen, der zwischen serifenartigem Song- und kursivem Kai-Stil liegt. Dieser Stil wird häufig für Regierungsdokumente verwendet.

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
