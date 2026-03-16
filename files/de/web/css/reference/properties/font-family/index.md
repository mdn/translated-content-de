---
title: font-family
slug: Web/CSS/Reference/Properties/font-family
l10n:
  sourceCommit: 3ea29f3443256eb763b957f2eb8d9c597f039add
---

Die **`font-family`**-Eigenschaft von [CSS](/de/docs/Web/CSS) gibt eine priorisierte Liste von einem oder mehreren Schriftartnamen und/oder generischen Schriftfamiliennamen für das ausgewählte Element an.

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

Werte werden durch Kommas getrennt, um anzuzeigen, dass sie Alternativen sind. Der Browser wählt die erste Schriftart in der Liste aus, die installiert ist oder die mithilfe einer {{CSSxRef("@font-face")}}-Regel heruntergeladen werden kann.

Es ist oft praktisch, die Kurzform-Eigenschaft {{CSSxRef("font")}} zu verwenden, um `font-size` und andere schriftenbezogene Eigenschaften gleichzeitig festzulegen.

Sie sollten immer mindestens einen generischen Familiennamen in einer `font-family`-Liste einschließen, da es keine Garantie gibt, dass eine bestimmte Schriftart verfügbar ist. Dies ermöglicht dem Browser, bei Bedarf eine akzeptable Ersatzschriftart auszuwählen.

Die `font-family`-Eigenschaft gibt eine Liste von Schriftarten von höchster zu niedrigster Priorität an. Die Schriftartauswahl endet _nicht_ bei der ersten Schriftart in der Liste, die auf dem System des Benutzers vorhanden ist. Vielmehr wird die Schriftart _zeichenweise_ ausgewählt, sodass, wenn eine verfügbare Schriftart kein Glyph für ein benötigtes Zeichen hat, die nachfolgenden Schriftarten ausprobiert werden. Wenn eine Schriftart nur in einigen [Stilen](/de/docs/Web/CSS/Reference/Properties/font-style), [Varianten](/de/docs/Web/CSS/Reference/Properties/font-variant) oder [Größen](/de/docs/Web/CSS/Reference/Properties/font-size) verfügbar ist, können auch diese Eigenschaften beeinflussen, welche Schriftfamilie ausgewählt wird.

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

Das untenstehende Beispiel listet zwei Schriftfamilien auf, die erste mit einem `<family-name>` und die zweite mit einem `<generic-name>`:

```css
font-family: "Gill Sans Extrabold", sans-serif;
```

### Werte

- `<family-name>`
  - : Der Name einer Schriftfamilie. Dies muss entweder ein einzelner {{cssxref("string")}}-Wert oder eine durch Leerzeichen getrennte Sequenz von {{cssxref("custom-ident")}}-Werten sein. String-Werte müssen in Anführungszeichen gesetzt werden, können jedoch jedes Unicode-Zeichen enthalten. Benutzerdefinierte Identifikatoren werden nicht in Anführungszeichen gesetzt, aber bestimmte Zeichen müssen maskiert werden.

    Es ist eine gute Praxis, Schriftartnamen, die Leerzeichen, Ziffern oder andere Satzzeichen als Bindestriche enthalten, in Anführungszeichen zu setzen.

    Siehe auch [Gültige Familiennamen](#gültige_familiennamen).

- `<generic-name>`
  - : Generische Schriftfamilien sind ein Mechanismus für Ausweichen, ein Mittel, um die Absicht des Autors des Stylesheets zu bewahren, wenn keine der angegebenen Schriftarten verfügbar ist. Generische Familiennamen sind Schlüsselwörter und dürfen nicht in Anführungszeichen gesetzt werden. Eine generische Schriftartfamilie sollte das letzte Element in der Liste der Schriftfamiliennamen sein. Die folgenden Schlüsselwörter sind definiert:
    - `serif`
      - : Glyphen haben Endstriche, aufgeweitete oder sich verjüngende Enden oder tatsächliche Serifenenden.

        Zum Beispiel: Lucida Bright, Lucida Fax, Palatino, Palatino Linotype, Palladio, URW Palladio, serif.

    - `sans-serif`
      - : Glyphen haben einfache Endungen.

        Zum Beispiel: Open Sans, Fira Sans, Lucida Sans, Lucida Sans Unicode, Trebuchet MS, Liberation Sans, Nimbus Sans L, sans-serif.

    - `monospace`
      - : Alle Glyphen haben die gleiche feste Breite.

        Zum Beispiel: Fira Mono, DejaVu Sans Mono, Menlo, Consolas, Liberation Mono, Monaco, Lucida Console, monospace.

    - `cursive`
      - : Glyphen in kursiven Schriftarten haben im Allgemeinen entweder verbindende Striche oder andere kursive Merkmale über diese von kursiven Schriftarten hinaus. Die Glyphen sind teilweise oder vollständig verbunden, und das Ergebnis sieht eher wie handgeschriebenes Stift- oder Pinsel-Schreiben aus als wie gedruckte Schriftarbeit.

        Zum Beispiel: Brush Script MT, Brush Script Std, Lucida Calligraphy, Lucida Handwriting, Apple Chancery, cursive.

    - `fantasy`
      - : Fantasieschriftarten sind hauptsächlich dekorative Schriften, die spielerische Darstellungen von Zeichen enthalten.

        Zum Beispiel: Papyrus, Herculanum, Party LET, Curlz MT, Harrington, fantasy.

    - `system-ui`
      - : Glyphen werden aus der Standardschrift der Benutzeroberfläche auf einer bestimmten Plattform übernommen. Da typografische Traditionen weltweit stark variieren, wird dieser Generic für Schriften bereitgestellt, die nicht sauber in die anderen Generics einzuordnen sind.
        > [!NOTE]
        > Wie der Name schon sagt, soll `system-ui` UI-Elemente wie native Apps aussehen lassen und nicht für das Setzen von großen Textabsätzen verwendet werden. Es kann dazu führen, dass die angezeigte Schriftart für einige Benutzer unattraktiv ist—zum Beispiel könnte die Standardschriftart in Windows für CJK die lateinischen Schriften schlecht darstellen, und das `lang`-Attribut könnte die angezeigte Schriftart nicht beeinflussen. Einige Betriebssysteme erlauben keine Anpassung von `system-ui`, während Browser im Allgemeinen die Anpassung der `sans-serif`-Schriftfamilie erlauben. Für große Textabsätze sollten Sie `sans-serif` oder eine andere Nicht-UI-Schriftfamilie verwenden.
    - `ui-serif`
      - : Die Standardschrift der Benutzeroberfläche mit Serifen.
    - `ui-sans-serif`
      - : Die Standardschrift der Benutzeroberfläche ohne Serifen.
    - `ui-monospace`
      - : Die Standardschrift der Benutzeroberfläche mit fester Breite.
    - `ui-rounded`
      - : Die Standardschrift der Benutzeroberfläche mit abgerundeten Merkmalen.
    - `math`
      - : Schriftart, die die speziellen stilistischen Anforderungen der Darstellung von Mathematik berücksichtigt: Hoch- und Tiefstellungen, Klammern über mehrere Zeilen, verschachtelte Ausdrücke und doppelt ausgeschlagene Glyphen mit spezifischen Bedeutungen.
        UA-Stylesheets können `math { font-family: math }` setzen, sodass das {{MathMLElement("math")}}-Element standardmäßig geeignete Schriften verwendet.
    - `fangsong`
      - : Ein besonderer Stil chinesischer Zeichen, der zwischen serif-Stil Song und kursiv-Stil Kai Formen liegt. Dieser Stil wird oft für Regierungsdokumente verwendet.

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
- SVG {{SVGAttr("font-family")}}-Attribut
- [Lernen: Grundlegende Text- und Schriftformatierung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
