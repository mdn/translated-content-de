---
title: "`font-family` CSS property"
short-title: font-family
slug: Web/CSS/Reference/Properties/font-family
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`font-family`** [CSS](/de/docs/Web/CSS) Eigenschaft legt eine priorisierte Liste von einem oder mehreren Schriftfamiliennamen und/oder generischen Familiennamen für das ausgewählte Element fest.

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

Die Werte werden durch Kommas getrennt, um anzuzeigen, dass es sich um Alternativen handelt. Der Browser wählt die erste Schrift in der Liste aus, die installiert ist oder die mithilfe einer {{CSSxRef("@font-face")}}-Regel heruntergeladen werden kann.

Es ist oft bequem, die Kurzform-Eigenschaft {{CSSxRef("font")}} zu verwenden, um `font-size` und andere schriftbezogene Eigenschaften auf einmal festzulegen.

Sie sollten immer mindestens einen generischen Familiennamen in eine `font-family`-Liste aufnehmen, da es keine Garantie gibt, dass eine bestimmte Schriftart verfügbar ist. So kann der Browser bei Bedarf eine akzeptable Ersatzschrift auswählen.

Die `font-family` Eigenschaft spezifiziert eine Liste von Schriftarten, von höchster Priorität zu niedrigster. Die Schriftauswahl _stoppt nicht_ bei der ersten Schrift in der Liste, die auf dem System des Benutzers vorhanden ist. Vielmehr erfolgt die Schriftauswahl _zeichenweise_, sodass wenn eine verfügbare Schriftart kein Glyphe für eines benötigtes Zeichen hat, die späteren Schriften ausprobiert werden. Wenn eine Schriftart nur in bestimmten [Stilen](/de/docs/Web/CSS/Reference/Properties/font-style), [Varianten](/de/docs/Web/CSS/Reference/Properties/font-variant) oder [Größen](/de/docs/Web/CSS/Reference/Properties/font-size) verfügbar ist, können diese Eigenschaften ebenfalls beeinflussen, welche Schriftfamilie gewählt wird.

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

Die `font-family`-Eigenschaft listet eine oder mehrere Schriftfamilien auf, getrennt durch Kommas. Jede Schriftfamilie wird entweder als `<family-name>` oder als `<generic-name>` Wert spezifiziert.

Das untenstehende Beispiel listet zwei Schriftfamilien auf, die erste mit einem `<family-name>` und die zweite mit einem `<generic-name>`:

```css
font-family: "Gill Sans Extrabold", sans-serif;
```

### Werte

- `<family-name>`
  - : Der Name einer Schriftfamilie. Dies muss entweder ein einziger {{cssxref("string")}} Wert oder eine durch Leerzeichen getrennte Sequenz von {{cssxref("custom-ident")}} Werten sein. String-Werte müssen in Anführungszeichen gesetzt werden, können jedoch jedes Unicode-Zeichen enthalten. Benutzerdefinierte Bezeichner werden nicht zitiert, aber bestimmte Zeichen müssen entkommen werden.

    Es ist gute Praxis, Schriftfamiliennamen, die Leerzeichen, Ziffern oder Satzzeichen außer Bindestrichen enthalten, zu zitieren.

    Siehe auch [Gültige Familiennamen](#gültige_familiennamen).

- `<generic-name>`
  - : Generische Schriftfamilien sind ein Fallback-Mechanismus, ein Mittel, um einige der Absichten des Autors des Stylesheets zu bewahren, wenn keine der angegebenen Schriftarten verfügbar ist. Generische Familiennamen sind Schlüsselwörter und dürfen nicht zitiert werden. Eine generische Schriftfamilie sollte der letzte Punkt in der Liste der Schriftfamiliennamen sein. Die folgenden Schlüsselwörter sind definiert:
    - `serif`
      - : Glyphen haben Endstriche, auslaufende oder verjüngende Enden oder haben tatsächliche serifenartige Endungen.

        Zum Beispiel: Lucida Bright, Lucida Fax, Palatino, Palatino Linotype, Palladio, URW Palladio, serif.

    - `sans-serif`
      - : Glyphen haben schlichte Endungen.

        Zum Beispiel: Open Sans, Fira Sans, Lucida Sans, Lucida Sans Unicode, Trebuchet MS, Liberation Sans, Nimbus Sans L, sans-serif.

    - `monospace`
      - : Alle Glyphen haben die gleiche feste Breite.

        Zum Beispiel: Fira Mono, DejaVu Sans Mono, Menlo, Consolas, Liberation Mono, Monaco, Lucida Console, monospace.

    - `cursive`
      - : Glyphen in Kursivschriftarten haben generell entweder verbundene Striche oder andere Merkmale, die über die von kursiven Schriftarten hinausgehen. Die Glyphen sind teilweise oder vollständig verbunden und das Ergebnis sieht mehr nach handgeschriebener Stift- oder Pinsel-Schrift aus als nach gedruckter Buchstabenschrift.

        Zum Beispiel: Brush Script MT, Brush Script Std, Lucida Calligraphy, Lucida Handwriting, Apple Chancery, cursive.

    - `fantasy`
      - : Fantasy-Schriften sind hauptsächlich dekorative Schriftarten, die verspielte Darstellungen von Zeichen enthalten.

        Zum Beispiel: Papyrus, Herculanum, Party LET, Curlz MT, Harrington, fantasy.

    - `system-ui`
      - : Glyphen werden von der Standard-Benutzeroberflächenschrift auf einer bestimmten Plattform übernommen. Da typografische Traditionen weltweit stark variieren, wird diese Generik für Schriftarten bereitgestellt, die nicht sauber in die anderen Generika passen.
        > [!NOTE]
        > Wie der Name schon sagt, ist `system-ui` dafür gedacht, UI-Elemente wie native Apps aussehen zu lassen und nicht um große Textabsätze zu setzen. Es kann dazu führen, dass die angezeigte Schriftart für einige Benutzer unerwünscht ist - zum Beispiel kann die Standardschriftart für Windows CJK Lateinschriften schlecht darstellen, und das `lang`-Attribut beeinflusst möglicherweise nicht die angezeigte Schriftart. Einige Betriebssysteme erlauben es nicht, `system-ui` anzupassen, während Browser im Allgemeinen die Anpassung der `sans-serif`-Schriftfamilie ermöglichen. Für große Absätze sollten Sie `sans-serif` oder eine andere Nicht-UI-Schriftfamilie verwenden.
    - `ui-serif`
      - : Die Standard-Serif-Benutzeroberflächenschrift.
    - `ui-sans-serif`
      - : Die Standard-Sans-Serif-Benutzeroberflächenschrift.
    - `ui-monospace`
      - : Die Standard-Monospace-Benutzeroberflächenschrift.
    - `ui-rounded`
      - : Die Standard-Benutzeroberflächenschrift mit abgerundeten Merkmalen.
    - `math`
      - : Schriftart, die die besonderen stilistischen Anforderungen der Darstellung von Mathematik anspricht: hoch- und tiefgestellte Zeichen, Klammern, die mehrere Zeilen überspannen, verschachtelte Ausdrücke und doppelt gestrichelte Glyphen mit unterschiedlichen Bedeutungen.
        UA-Stylesheets können `math { font-family: math }` setzen, damit das {{MathMLElement("math")}}-Element standardmäßig geeignete Schriftarten verwendet.
    - `fangsong`
      - : Ein bestimmter Stil chinesischer Zeichen, der zwischen Serif-Stil-Song und Kursiv-Stil-Kai-Formen liegt. Dieser Stil wird häufig für Regierungsdokumente verwendet.

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
- SVG {{SVGAttr("font-family")}} Attribut
- [Lernen: Grundlegende Text- und Schriftstilisierung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
