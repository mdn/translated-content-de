---
title: font-family
slug: Web/CSS/font-family
l10n:
  sourceCommit: 11ece47da8e1e4ef0ceba62d44c763fd29b5992f
---

Die **`font-family`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert eine priorisierte Liste von einem oder mehreren Schriftfamiliennamen und/oder generischen Familiennamen für das ausgewählte Element.

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

Werte werden durch Kommas getrennt, um anzuzeigen, dass sie Alternativen sind. Der Browser wählt die erste Schriftart in der Liste, die installiert ist oder die mit einer {{CSSxRef("@font-face")}} Regel heruntergeladen werden kann.

Es ist oft praktisch, die Kurzschreibweise der Eigenschaft {{CSSxRef("font")}} zu verwenden, um `font-size` und andere schriftbezogene Eigenschaften auf einmal festzulegen.

Sie sollten immer mindestens einen generischen Familiennamen in einer `font-family` Liste einschließen, da es keine Garantie dafür gibt, dass eine bestimmte Schriftart verfügbar ist. Dies ermöglicht es dem Browser, eine akzeptable Ersatzschriftart auszuwählen, wenn erforderlich.

Die `font-family` Eigenschaft spezifiziert eine Liste von Schriftarten, von höchster Priorität zur niedrigsten. Die Schriftauswahl stoppt _nicht_ bei der ersten Schriftart in der Liste, die auf dem Benutzer-System vorhanden ist. Vielmehr erfolgt die Schriftauswahl _zeichenweise_, sodass, wenn eine verfügbare Schriftart kein Glyph für ein benötigtes Zeichen hat, die nachfolgenden Schriftarten versucht werden. Wenn eine Schriftart nur in einigen [Styles](/de/docs/Web/CSS/font-style), [Varianten](/de/docs/Web/CSS/font-variant) oder [Größen](/de/docs/Web/CSS/font-size) verfügbar ist, können diese Eigenschaften auch beeinflussen, welche Schriftfamilie gewählt wird.

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

Die `font-family` Eigenschaft listet eine oder mehrere Schriftfamilien auf, getrennt durch Kommas. Jede Schriftfamilie wird entweder als `<family-name>` oder als `<generic-name>` Wert angegeben.

Im folgenden Beispiel werden zwei Schriftfamilien aufgelistet, die erste mit einem `<family-name>` und die zweite mit einem `<generic-name>`:

```css
font-family: "Gill Sans Extrabold", sans-serif;
```

### Werte

- `<family-name>`
  - : Der Name einer Schriftfamilie. Dies muss entweder ein einzelner {{cssxref("string")}} Wert oder eine durch Leerzeichen getrennte Folge von {{cssxref("custom-ident")}} Werten sein. Zeichenfolgenwerte müssen in Anführungszeichen gesetzt werden, können jedoch jedes Unicode-Zeichen enthalten. Benutzerdefinierte Bezeichner sind nicht in Anführungszeichen gesetzt, aber bestimmte Zeichen müssen maskiert werden.

    Es ist eine gute Praxis, Schriftfamiliennamen, die Leerzeichen, Ziffern oder andere Satzzeichen als Bindestriche enthalten, in Anführungszeichen zu setzen.

    Siehe auch [Gültige Familiennamen](#gültige_familiennamen).

- `<generic-name>`
  - : Generische Schriftfamilien sind ein Fallback-Mechanismus, ein Mittel, um einen Teil der Absicht des Autoren des Stylesheets zu bewahren, wenn keine der angegebenen Schriftarten verfügbar ist. Generische Familiennamen sind Schlüsselwörter und dürfen nicht in Anführungszeichen gesetzt werden. Eine generische Schriftfamilie sollte der letzte Punkt in der Liste der Schriftfamiliennamen sein. Die folgenden Schlüsselwörter sind definiert:
    - `serif`
      - : Glyphen haben beendende Striche, abgerundete oder sich verjüngende Enden oder haben tatsächlich Serifen-Enden.

        Zum Beispiel: Lucida Bright, Lucida Fax, Palatino, Palatino Linotype, Palladio, URW Palladio, serif.

    - `sans-serif`
      - : Glyphen haben einfache Strichenden.

        Zum Beispiel: Open Sans, Fira Sans, Lucida Sans, Lucida Sans Unicode, Trebuchet MS, Liberation Sans, Nimbus Sans L, sans-serif.

    - `monospace`
      - : Alle Glyphen haben die gleiche feste Breite.

        Zum Beispiel: Fira Mono, DejaVu Sans Mono, Menlo, Consolas, Liberation Mono, Monaco, Lucida Console, monospace.

    - `cursive`
      - : Glyphen in Kursivschrift haben im Allgemeinen entweder verbindende Striche oder andere kursive Merkmale, die über die von kursiven Schrifttypen hinausgehen. Die Glyphen sind teilweise oder vollständig verbunden, und das Ergebnis sieht eher wie handgeschriebenes Stift- oder Pinselwerk aus als gedruckte Buchstabengruppe.

        Zum Beispiel: Brush Script MT, Brush Script Std, Lucida Calligraphy, Lucida Handwriting, Apple Chancery, cursive.

    - `fantasy`
      - : Fantasy-Schriften sind primär dekorative Schriften, die verspielte Darstellungen von Zeichen enthalten.

        Zum Beispiel: Papyrus, Herculanum, Party LET, Curlz MT, Harrington, fantasy.

    - `system-ui`
      - : Glyphen stammen aus der standardmäßigen Benutzeroberflächenschrift auf einer bestimmten Plattform. Da die typografischen Traditionen weltweit stark variieren, wird diese generische Schriftart für Schrifttypen bereitgestellt, die sich nicht eindeutig in die anderen generischen Schriftarten einordnen lassen.
        > [!NOTE]
        > Wie der Name vermuten lässt, soll `system-ui` UI-Elemente wie native Apps aussehen lassen und nicht für das Setzen von großen Textabschnitten verwendet werden. Es kann dazu führen, dass die angezeigte Schriftart für einige Benutzer unerwünscht ist—zum Beispiel kann die Standard-CJK-Schriftart von Windows lateinische Schriften schlecht darstellen, und das `lang` Attribut kann sich nicht auf die angezeigte Schrift auswirken. Einige Betriebssysteme erlauben keine Anpassung von `system-ui`, während Browser in der Regel eine Anpassung der `sans-serif` Schriftfamilie erlauben. Für große Absätze verwenden Sie `sans-serif` oder eine andere Nicht-UI-Schriftfamilie.
    - `ui-serif`
      - : Die Standard-Serifenschrift der Benutzeroberfläche.
    - `ui-sans-serif`
      - : Die Standard-Sans-Serifenschrift der Benutzeroberfläche.
    - `ui-monospace`
      - : Die standardmäßige Monospace-Schrift der Benutzeroberfläche.
    - `ui-rounded`
      - : Die Standard-Schrift der Benutzeroberfläche, die abgerundete Merkmale aufweist.
    - `math`
      - : Dies gilt für die besonderen stilistischen Belange der Darstellung von Mathematik: Hoch- und Tiefstellungen, Klammern, die mehrere Zeilen umfassen, verschachtelte Ausdrücke und doppelt geschlagene Glyphen mit unterschiedlicher Bedeutung.
    - `fangsong`
      - : Ein bestimmter Stil chinesischer Schriftzeichen, der zwischen serifenartigem Song und kursivem Kai liegt. Dieser Stil wird häufig für offizielle Dokumente verwendet.

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
- [Lernen: Grundlegende Text- und Schriftgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
