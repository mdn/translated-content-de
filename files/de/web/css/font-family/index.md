---
title: font-family
slug: Web/CSS/font-family
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`font-family`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt eine priorisierte Liste von einem oder mehreren Schriftfamiliennamen und/oder generischen Familiennamen für das ausgewählte Element fest.

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

Die Werte werden durch Kommas getrennt, um anzuzeigen, dass sie Alternativen sind. Der Browser wählt die erste Schrift in der Liste aus, die installiert ist oder durch eine {{CSSxRef("@font-face")}}-Regel heruntergeladen werden kann.

Es ist oft praktisch, die Kurzschreibweiseigenschaft {{CSSxRef("font")}} zu verwenden, um `font-size` und andere schriftbezogene Eigenschaften auf einmal festzulegen.

Sie sollten immer mindestens einen generischen Familiennamen in eine `font-family`-Liste aufnehmen, da es keine Garantie gibt, dass eine bestimmte Schrift verfügbar ist. So kann der Browser bei Bedarf eine akzeptable Ersatzschrift wählen.

Die `font-family`-Eigenschaft spezifiziert eine Liste von Schriften, von der höchsten Priorität bis zur niedrigsten. Die Schriftwahl _stoppt nicht_ bei der ersten Schrift in der Liste, die auf dem System des Benutzers vorhanden ist. Stattdessen wird die Schriftwahl _Zeichen für Zeichen_ vorgenommen, sodass, wenn eine verfügbare Schrift kein Glyph für ein benötigtes Zeichen hat, die folgenden Schriften versucht werden. Wenn eine Schrift nur in einigen [Stilen](/de/docs/Web/CSS/font-style), [Varianten](/de/docs/Web/CSS/font-variant) oder [Größen](/de/docs/Web/CSS/font-size) verfügbar ist, können auch diese Eigenschaften beeinflussen, welche Schriftfamilie gewählt wird.

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

Die `font-family`-Eigenschaft listet eine oder mehrere Schriftfamilien auf, getrennt durch Kommas. Jede Schriftfamilie wird entweder als `<family-name>` oder `<generic-name>` angegeben.

Das folgende Beispiel listet zwei Schriftfamilien auf, die erste mit einem `<family-name>` und die zweite mit einem `<generic-name>`:

```css
font-family: "Gill Sans Extrabold", sans-serif;
```

### Werte

- `<family-name>`
  - : Der Name einer Schriftfamilie. Dies muss entweder ein einzelner {{cssxref("string")}}-Wert oder eine durch Leerzeichen getrennte Sequenz von {{cssxref("custom-ident")}}-Werten sein. Zeichenkettenwerte müssen in Anführungszeichen stehen, können aber beliebige Unicode-Zeichen enthalten. Benutzerdefinierte Kennungen sind nicht in Anführungszeichen, jedoch müssen bestimmte Zeichen maskiert werden.

    Es ist gute Praxis, Schriftfamiliennamen, die Leerzeichen, Ziffern oder Satzzeichen außer Bindestriche enthalten, in Anführungszeichen zu setzen.

    Siehe auch [Gültige Familiennamen](#gültige_familiennamen).

- `<generic-name>`
  - : Generische Schriftfamilien sind ein Rückfallmechanismus, ein Mittel zur Erhaltung eines Teils der Absicht des Stylesheet-Autors, wenn keine der angegebenen Schriften verfügbar ist. Generische Familiennamen sind Schlüsselwörter und dürfen nicht in Anführungszeichen gesetzt werden. Eine generische Schriftfamilie sollte der letzte Punkt in der Liste der Schriftfamiliennamen sein. Die folgenden Schlüsselwörter sind definiert:
    - `serif`
      - : Glyphen haben Endstriche, geweitete oder verjüngende Enden oder tatsächliche Serifenausführungen.

        Zum Beispiel: Lucida Bright, Lucida Fax, Palatino, Palatino Linotype, Palladio, URW Palladio, serif.

    - `sans-serif`
      - : Glyphen haben einfache Endstriche.

        Zum Beispiel: Open Sans, Fira Sans, Lucida Sans, Lucida Sans Unicode, Trebuchet MS, Liberation Sans, Nimbus Sans L, sans-serif.

    - `monospace`
      - : Alle Glyphen haben dieselbe feste Breite.

        Zum Beispiel: Fira Mono, DejaVu Sans Mono, Menlo, Consolas, Liberation Mono, Monaco, Lucida Console, monospace.

    - `cursive`
      - : Glyphen in kursiven Schriften haben in der Regel entweder verbindende Striche oder andere kursive Merkmale, die über die von kursiven Schrifttypen hinausgehen. Die Glyphen sind teilweise oder vollständig verbunden, und das Ergebnis sieht mehr nach handgeschriebenem Stift oder Pinsel aus als nach gedruckten Buchstaben.

        Zum Beispiel: Brush Script MT, Brush Script Std, Lucida Calligraphy, Lucida Handwriting, Apple Chancery, cursive.

    - `fantasy`
      - : Fantasieschriften sind hauptsächlich dekorative Schriften, die spielerische Darstellungen von Zeichen enthalten.

        Zum Beispiel: Papyrus, Herculanum, Party LET, Curlz MT, Harrington, fantasy.

    - `system-ui`
      - : Glyphen werden aus der Standardschriftart für Benutzeroberflächen auf einer bestimmten Plattform genommen. Da sich die typografischen Traditionen weltweit stark unterscheiden, wird dieses generische Konzept für Schriftarten bereitgestellt, die sich nicht gut in die anderen Genrics einordnen lassen.
    - `ui-serif`
      - : Die standardmäßige Serifenschrift der Benutzeroberfläche.
    - `ui-sans-serif`
      - : Die standardmäßige Sans-Serif-Schrift der Benutzeroberfläche.
    - `ui-monospace`
      - : Die standardmäßige Monospaced-Schrift der Benutzeroberfläche.
    - `ui-rounded`
      - : Die standardmäßige Schrift der Benutzeroberfläche, die abgerundete Merkmale aufweist.
    - `math`
      - : Dies ist für die besonderen stilistischen Anforderungen der Darstellung von Mathematik: Hochstellen und Tiefstellen, Klammern, die sich über mehrere Zeilen erstrecken, verschachtelte Ausdrücke und doppelt geschlagene Glyphen mit unterschiedlichen Bedeutungen.
    - `emoji`
      - : Schriften, die speziell für die Darstellung von Emojis entworfen wurden.
    - `fangsong`
      - : Ein bestimmter Stil chinesischer Zeichen, der zwischen dem Serif-Stil Song und dem Kursiv-Stil Kai liegt. Dieser Stil wird häufig für offizielle Dokumente verwendet.

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

Das folgende Beispiel ist technisch gültig, aber nicht empfohlen:

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
- SVG-Attribut {{SVGAttr("font-family")}}
- [Lernen: Grundlegendes zu Text- und Schriftstyling](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
