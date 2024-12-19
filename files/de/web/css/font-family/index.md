---
title: font-family
slug: Web/CSS/font-family
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Die **`font-family`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert eine priorisierte Liste von einem oder mehreren Schriftfamiliennamen und/oder generischen Familiennamen für das ausgewählte Element.

{{EmbedInteractiveExample("pages/css/font-family.html")}}

Werte werden durch Kommas getrennt, um Alternativen anzuzeigen. Der Browser wählt die erste Schriftart in der Liste aus, die installiert oder mithilfe eines {{CSSxRef("@font-face")}}-At-Regels heruntergeladen werden kann.

Es ist oft praktisch, die Kurzschreibweiseigenschaft {{CSSxRef("font")}} zu verwenden, um `font-size` und andere schriftbezogene Eigenschaften auf einmal festzulegen.

Sie sollten immer mindestens einen generischen Familiennamen in eine `font-family`-Liste aufnehmen, da es keine Garantie dafür gibt, dass eine bestimmte Schriftart verfügbar ist. Dies ermöglicht es dem Browser, bei Bedarf eine akzeptable Ersatzschrift auszuwählen.

Die `font-family`-Eigenschaft spezifiziert eine Liste von Schriftarten, von höchster Priorität bis zur niedrigsten. Die Schriftauswahl _hört nicht_ bei der ersten Schrift in der Liste auf, die auf dem System des Benutzers vorhanden ist. Vielmehr wird die Schriftauswahl _zeichenweise_ durchgeführt, sodass, wenn eine verfügbare Schriftart kein Glyphe für ein erforderliches Zeichen hat, die folgenden Schriftarten versucht werden. Wenn eine Schriftart nur in einigen [Stilen](/de/docs/Web/CSS/font-style), [Varianten](/de/docs/Web/CSS/font-variant) oder [Größen](/de/docs/Web/CSS/font-size) verfügbar ist, können diese Eigenschaften auch beeinflussen, welche Schriftfamilie gewählt wird.

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

Die `font-family`-Eigenschaft listet eine oder mehrere Schriftfamilien auf, getrennt durch Kommas. Jede Schriftfamilie wird entweder als `<family-name>` oder als `<generic-name>`-Wert angegeben.

Das folgende Beispiel listet zwei Schriftfamilien auf, die erste mit einem `<family-name>` und die zweite mit einem `<generic-name>`:

```css
font-family: "Gill Sans Extrabold", sans-serif;
```

### Werte

- `<family-name>`

  - : Der Name einer Schriftfamilie. Dies muss entweder ein einzelner {{cssxref("string")}}-Wert oder eine durch Leerzeichen getrennte Sequenz von {{cssxref("custom-ident")}}-Werten sein. Zeichenfolgenwerte müssen in Anführungszeichen gesetzt werden, können jedoch jedes Unicode-Zeichen enthalten. Benutzerdefinierte Bezeichner sind nicht in Anführungszeichen, aber bestimmte Zeichen müssen maskiert werden.

    Es ist eine gute Praxis, Schriftfamiliennamen, die Leerzeichen, Ziffern oder andere Interpunktionszeichen als Bindestriche enthalten, zu zitieren.

    Siehe auch [Gültige Familiennamen](#gültige_familiennamen).

- `<generic-name>`

  - : Generische Schriftfamilien sind ein Fallback-Mechanismus, eine Möglichkeit, die Absicht des Stylesheet-Autors zu bewahren, wenn keine der angegebenen Schriften verfügbar sind. Generische Familiennamen sind Schlüsselwörter und dürfen nicht in Anführungszeichen gesetzt werden. Eine generische Schriftfamilie sollte das letzte Element in der Liste der Schriftfamiliennamen sein. Die folgenden Schlüsselwörter sind definiert:

    - `serif`

      - : Glyphen haben abschließende Striche, aufgeweitete oder sich verjüngende Enden oder haben tatsächlich geschriebene Endungen.

        Zum Beispiel: Lucida Bright, Lucida Fax, Palatino, Palatino Linotype, Palladio, URW Palladio, serif.

    - `sans-serif`

      - : Glyphen haben einfache Endstriche.

        Zum Beispiel: Open Sans, Fira Sans, Lucida Sans, Lucida Sans Unicode, Trebuchet MS, Liberation Sans, Nimbus Sans L, sans-serif.

    - `monospace`

      - : Alle Glyphen haben die gleiche feste Breite.

        Zum Beispiel: Fira Mono, DejaVu Sans Mono, Menlo, Consolas, Liberation Mono, Monaco, Lucida Console, monospace.

    - `cursive`

      - : Glyphen in Kursivschriften haben allgemein entweder verbundene Striche oder andere kursive Merkmale über die von kursiven Schrifttypen hinaus. Die Glyphen sind teilweise oder vollständig verbunden und das Ergebnis sieht mehr nach handschriftlichem Schreibzeichen als nach gedruckter Schrift aus.

        Zum Beispiel: Brush Script MT, Brush Script Std, Lucida Calligraphy, Lucida Handwriting, Apple Chancery, cursive.

    - `fantasy`

      - : Fantasy-Schriften sind in erster Linie dekorative Schriften, die spielerische Darstellungen von Zeichen enthalten.

        Zum Beispiel: Papyrus, Herculanum, Party LET, Curlz MT, Harrington, fantasy.

    - `system-ui`
      - : Glyphen stammen aus der Standardschrift der Benutzeroberfläche auf einer bestimmten Plattform. Da sich die typografischen Traditionen weltweit stark unterscheiden, wird dieses Generikum für Schriften bereitgestellt, die nicht eindeutig in die anderen Generika passen.
    - `ui-serif`
      - : Die Standardschrift mit Serifen der Benutzeroberfläche.
    - `ui-sans-serif`
      - : Die Standardschrift ohne Serifen der Benutzeroberfläche.
    - `ui-monospace`
      - : Die standardmäßig feste Breite der Benutzeroberfläche.
    - `ui-rounded`
      - : Die Standardschrift der Benutzeroberfläche, die abgerundete Merkmale hat.
    - `math`
      - : Dies ist für die besonderen stilistischen Anliegen der Darstellung von Mathematik: Hoch- und Tiefstellungen, Klammern, die mehrere Zeilen überschreiten, verschachtelte Ausdrücke und doppelt gestrichene Glyphen mit unterschiedlichen Bedeutungen.
    - `emoji`
      - : Schriften, die speziell zum Rendern von Emojis entworfen wurden.
    - `fangsong`
      - : Ein besonderer Stil chinesischer Zeichen, der zwischen den Serif-Stil Song und Kursiv-Stil Kai Formen liegt. Dieser Stil wird oft für Regierungsdokumente verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einige gebräuchliche Schriftfamilien

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

Das folgende Beispiel ist technisch gültig, wird aber nicht empfohlen:

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
- [Lernen: Grundlegende Text- und Schriftgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
