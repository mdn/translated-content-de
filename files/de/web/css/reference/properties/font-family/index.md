---
title: font-family
slug: Web/CSS/Reference/Properties/font-family
l10n:
  sourceCommit: 5a8de324f0aa3873d757f68e4fcaf6bbc0104711
---

Die **`font-family`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert eine priorisierte Liste von einem oder mehreren Schriftfamiliennamen und/oder generischen Familiennamen für das ausgewählte Element.

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

Werte werden durch Kommas getrennt, um anzuzeigen, dass sie Alternativen sind. Der Browser wird die erste Schrift in der Liste auswählen, die installiert ist oder über eine {{CSSxRef("@font-face")}}-At-Regel heruntergeladen werden kann.

Es ist oft praktisch, die Kurzform-Eigenschaft {{CSSxRef("font")}} zu verwenden, um `font-size` und andere schriftbezogene Eigenschaften auf einmal festzulegen.

Sie sollten immer mindestens einen generischen Familiennamen in einer `font-family`-Liste einschließen, da es keine Garantie gibt, dass eine bestimmte Schriftart verfügbar ist. Dies ermöglicht es dem Browser, eine akzeptable Ersatzzschrift auszuwählen, wenn nötig.

Die `font-family`-Eigenschaft gibt eine Liste von Schriftarten an, von der höchsten Priorität zur niedrigsten. Die Schriftauswahl _stoppt nicht_ bei der ersten Schriftart in der Liste, die auf dem System des Benutzers vorhanden ist. Vielmehr erfolgt die Schriftauswahl _zeichenweise_, sodass, wenn eine verfügbare Schriftart kein Glyph für ein benötigtes Zeichen aufweist, die nachfolgenden Schriftarten ausprobiert werden. Wenn eine Schriftart nur in einigen [Stilen](/de/docs/Web/CSS/Reference/Properties/font-style), [Varianten](/de/docs/Web/CSS/Reference/Properties/font-variant) oder [Größen](/de/docs/Web/CSS/Reference/Properties/font-size) verfügbar ist, können diese Eigenschaften auch beeinflussen, welche Schriftfamilie ausgewählt wird.

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

Die `font-family`-Eigenschaft listet eine oder mehrere Schriftfamilien auf, getrennt durch Kommas. Jede Schriftfamilie wird entweder als `<family-name>` oder `<generic-name>` Wert angegeben.

Das Beispiel unten listet zwei Schriftfamilien auf, die erste mit einem `<family-name>` und die zweite mit einem `<generic-name>`:

```css
font-family: "Gill Sans Extrabold", sans-serif;
```

### Werte

- `<family-name>`
  - : Der Name einer Schriftfamilie. Dies muss entweder ein einzelner {{cssxref("string")}}-Wert oder eine durch Leerzeichen getrennte Folge von {{cssxref("custom-ident")}}-Werten sein. String-Werte müssen in Anführungszeichen stehen, können aber jeden Unicode-Zeichensatz enthalten. Benutzerdefinierte Identifikatoren werden nicht in Anführungszeichen gesetzt, jedoch müssen bestimmte Zeichen maskiert werden.

    Es ist eine gute Praxis, Schriftfamiliennamen, die Leerzeichen, Ziffern oder Satzzeichen außer Bindestrichen enthalten, in Anführungszeichen zu setzen.

    Siehe auch [Gültige Familiennamen](#gültige_familiennamen).

- `<generic-name>`
  - : Generische Schriftfamilien sind ein Fallback-Mechanismus, um die Absicht des Stylesheet-Autors zu bewahren, wenn keine der angegebenen Schriftarten verfügbar sind. Generische Familiennamen sind Schlüsselwörter und dürfen nicht in Anführungszeichen gesetzt werden. Eine generische Schriftfamilie sollte der letzte Punkt in der Liste der Schriftfamiliennamen sein. Die folgenden Schlüsselwörter sind definiert:
    - `serif`
      - : Glyphen haben Endstriche, auslaufende oder verjüngende Enden oder haben tatsächliche Serifen-Endungen.

        Zum Beispiel: Lucida Bright, Lucida Fax, Palatino, Palatino Linotype, Palladio, URW Palladio, serif.

    - `sans-serif`
      - : Glyphen haben einfache Endstriche.

        Zum Beispiel: Open Sans, Fira Sans, Lucida Sans, Lucida Sans Unicode, Trebuchet MS, Liberation Sans, Nimbus Sans L, sans-serif.

    - `monospace`
      - : Alle Glyphen haben dieselbe feste Breite.

        Zum Beispiel: Fira Mono, DejaVu Sans Mono, Menlo, Consolas, Liberation Mono, Monaco, Lucida Console, monospace.

    - `cursive`
      - : Glyphen in kursiven Schriften haben in der Regel entweder verbindende Striche oder andere kursive Merkmale über die Eigenschaften von italic-Schriften hinaus. Die Glyphen sind teilweise oder vollständig verbunden und das Ergebnis sieht mehr nach handschriftlicher Feder- oder Pinselarbeit als nach gedruckter Buchstabenarbeit aus.

        Zum Beispiel: Brush Script MT, Brush Script Std, Lucida Calligraphy, Lucida Handwriting, Apple Chancery, cursive.

    - `fantasy`
      - : Fantasy-Schriften sind in erster Linie dekorative Schriften, die spielerische Darstellungen von Zeichen enthalten.

        Zum Beispiel: Papyrus, Herculanum, Party LET, Curlz MT, Harrington, fantasy.

    - `system-ui`
      - : Glyphen stammen aus der Standardschriftart der Benutzerschnittstelle auf einer gegebenen Plattform. Da sich typografische Traditionen weltweit stark unterscheiden, wird dieses generische Kürzel für Schriftarten bereitgestellt, die nicht sauber in die anderen Generika passen.
        > [!NOTE]
        > Wie der Name andeutet, ist `system-ui` dazu gedacht, UI-Elemente wie native Apps aussehen zu lassen und nicht für Satz von großen Textabschnitten. Es könnte für einige Benutzer eine unerwünschte Schriftart anzeigen—zum Beispiel könnte die Standardschriftart für Windows CJK Lateinschriften schlecht darstellen, und das `lang`-Attribut könnte die angezeigte Schriftart nicht beeinflussen. Einige Betriebssysteme erlauben keine Anpassung von `system-ui`, während Browser in der Regel die Anpassung der `sans-serif`-Schriftfamilie erlauben. Für große Absätze verwenden Sie `sans-serif` oder eine andere Nicht-UI-Schriftfamilie.
    - `ui-serif`
      - : Die Standardschriftart der Benutzeroberfläche mit Serifen.
    - `ui-sans-serif`
      - : Die Standardschriftart der Benutzeroberfläche ohne Serifen.
    - `ui-monospace`
      - : Die Standardschriftart der Benutzeroberfläche mit fester Breite.
    - `ui-rounded`
      - : Die Standardschriftart der Benutzeroberfläche mit abgerundeten Merkmalen.
    - `math`
      - : Dies ist für die besonderen stilistischen Anliegen der Darstellung von Mathematik: Hoch- und Tiefstellungen, Klammern, die über mehrere Zeilen gehen, verschachtelte Ausdrücke und doppelt geschlagene Glyphen mit unterschiedlichen Bedeutungen.
        Browser-Stylesheets können `math { font-family: math }` festlegen, damit das {{MathMLElement("math")}}-Element standardmäßig geeignete Schriftarten verwendet.
    - `fangsong`
      - : Ein besonderer Stil von chinesischen Schriftzeichen, der zwischen serif-Stil Song und kursiv-Stil Kai liegt. Dieser Stil wird oft für Regierungsdokumente verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einige gewöhnliche Schriftfamilien

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

```css hidden
div {
  margin: 0.5rem;
}
```

```html hidden
<div class="serif">This is an example of a serif font.</div>

<div class="sansserif">This is an example of a sans-serif font.</div>

<div class="monospace">This is an example of a monospace font.</div>

<div class="cursive">This is an example of a cursive font.</div>

<div class="fantasy">This is an example of a fantasy font.</div>

<div class="fangsong">This is an example of a fangsong font.</div>

<div class="math">This is an example of a math font: ℝ, ∫, ∑…</div>
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
- [Erfahren Sie: Grundlegende Text- und Schriftgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
