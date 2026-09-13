---
title: "`font-family` CSS property"
short-title: font-family
slug: Web/CSS/Reference/Properties/font-family
l10n:
  sourceCommit: 0631b5e26979eca4d1505d4762fd3ad77fb329de
---

Die **`font-family`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt eine priorisierte Liste von einem oder mehreren Schriftfamiliennamen und/oder generischen Familiennamen für das ausgewählte Element an.

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

Die Werte werden durch Kommata getrennt, um anzuzeigen, dass sie Alternativen darstellen. Der Browser wählt die erste Schriftart in der Liste, die installiert ist oder die mithilfe eines {{CSSxRef("@font-face")}}-At-rules heruntergeladen werden kann.

Es ist oft praktisch, die Kurzschreibweise der Eigenschaft {{CSSxRef("font")}} zu verwenden, um `font-size` und andere Schriftbezogene Eigenschaften gleichzeitig festzulegen.

Sie sollten immer mindestens einen generischen Familiennamen in einer `font-family`-Liste einschließen, da es keine Garantie gibt, dass eine bestimmte Schriftart verfügbar ist. Dies ermöglicht es dem Browser, bei Bedarf eine akzeptable Ersatzschrift auszuwählen.

Die `font-family`-Eigenschaft spezifiziert eine Liste von Schriftarten, von der höchsten bis zur niedrigsten Priorität. Die Schriftauswahl _stoppt nicht_ bei der ersten Schrift in der Liste, die sich auf dem System des Benutzers befindet. Vielmehr wird die Schriftauswahl _Zeichen für Zeichen_ vorgenommen, sodass, wenn eine verfügbare Schrift kein Glyph für ein benötigtes Zeichen hat, die nachfolgenden Schriften ausprobiert werden. Wenn eine Schriftart nur in einigen [Stilen](/de/docs/Web/CSS/Reference/Properties/font-style), [Varianten](/de/docs/Web/CSS/Reference/Properties/font-variant) oder [Größen](/de/docs/Web/CSS/Reference/Properties/font-size) verfügbar ist, können diese Eigenschaften ebenfalls beeinflussen, welche Schriftfamilie gewählt wird.

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

Die `font-family`-Eigenschaft listet eine oder mehrere Schriftfamilien auf, getrennt durch Kommata. Jede Schriftfamilie wird entweder als `<family-name>` oder als `<generic-name>` Wert angegeben.

Das folgende Beispiel listet zwei Schriftfamilien auf, die erste mit einem `<family-name>` und die zweite mit einem `<generic-name>`:

```css
font-family: "Gill Sans Extrabold", sans-serif;
```

### Werte

- `<family-name>`
  - : Der Name einer Schriftfamilie. Dies muss entweder ein einzelner {{cssxref("string")}} Wert oder eine durch Leerzeichen getrennte Folge von {{cssxref("custom-ident")}} Werten sein. Zeichenfolgenwerte müssen in Anführungszeichen stehen, können jedoch jedes Unicode-Zeichen enthalten. Benutzerdefinierte Bezeichner stehen nicht in Anführungszeichen, aber bestimmte Zeichen müssen maskiert werden.

    Es ist eine gute Praxis, Schriftfamiliennamen in Anführungszeichen zu setzen, die Leerzeichen, Ziffern oder Satzzeichen außer Bindestrichen enthalten.

    Siehe auch [Gültige Familiennamen](#gültige_familiennamen).

- `<generic-name>`
  - : Generische Schriftfamilien sind ein Rückfallmechanismus, um einige der Absichten des Autors des Stylesheets beizubehalten, wenn keine der angegebenen Schriftarten verfügbar ist. Generische Familiennamen sind Schlüsselwörter und dürfen nicht in Anführungszeichen stehen. Eine generische Schriftfamilie sollte der letzte Punkt in der Liste der Schriftfamiliennamen sein. Die folgenden Schlüsselwörter sind definiert:
    - `serif`
      - : Glyphen haben abschließende Striche, ausgedehnte oder sich verjüngende Enden oder tatsächliche Serifierungen.

        Zum Beispiel: Lucida Bright, Lucida Fax, Palatino, Palatino Linotype, Palladio, URW Palladio, serif.

    - `sans-serif`
      - : Glyphen haben schlichte Strichenden.

        Zum Beispiel: Open Sans, Fira Sans, Lucida Sans, Lucida Sans Unicode, Trebuchet MS, Liberation Sans, Nimbus Sans L, sans-serif.

    - `monospace`
      - : Alle Glyphen haben dieselbe feste Breite.

        Zum Beispiel: Fira Mono, DejaVu Sans Mono, Menlo, Consolas, Liberation Mono, Monaco, Lucida Console, monospace.

        > [!NOTE]
        > Wenn `font-family` auf das einzelne Schlüsselwort `monospace` gesetzt ist und keine `font-size` eingestellt ist, verwenden Browser die monospaced Schriftgrößeinstellung des Benutzers, die oft kleiner ist als die Größe, die für proportionale Schriftarten verwendet wird. Siehe [Monospace-Schriftgröße](#monospace-schriftgröße) für Details und wie Sie dies steuern können.

    - `cursive`
      - : Glyphen in Schreibschrift-Schriften haben im Allgemeinen entweder verbindende Striche oder andere handschrift-ähnliche Merkmale über die normalen Kursivschriftarten hinaus. Die Glyphen sind teilweise oder vollständig verbunden, und das Ergebnis sieht mehr nach handgeschriebener Feder- oder Pinselarbeit aus als nach gedruckter Schreibmaschinenarbeit.

        Zum Beispiel: Brush Script MT, Brush Script Std, Lucida Calligraphy, Lucida Handwriting, Apple Chancery, cursive.

    - `fantasy`
      - : Fantasy-Schriften sind hauptsächlich dekorative Schriftarten, die spielerische Darstellungen von Zeichen enthalten.

        Zum Beispiel: Papyrus, Herculanum, Party LET, Curlz MT, Harrington, fantasy.

    - `system-ui`
      - : Glyphen werden aus der Default-Benutzeroberflächenschriftart auf einer gegebenen Plattform genommen. Da die typografischen Traditionen weltweit sehr unterschiedlich sind, wird dieses generische Element für Schriftarten bereitgestellt, die sich nicht sauber in die anderen generischen Kategorien einordnen lassen.
        > [!NOTE]
        > Wie der Name schon sagt, soll `system-ui` UI-Elemente wie native Apps aussehen lassen und nicht für das Setzen großer Textabschnitte verwendet werden. Es kann dazu führen, dass die angezeigte Schriftart für einige Benutzer unerwünscht ist — zum Beispiel kann die Standard-CJK-Schrift von Windows lateinische Skripte schlecht darstellen, und das `lang`-Attribut kann die angezeigte Schriftart nicht beeinflussen. Einige Betriebssysteme erlauben keine Anpassung von `system-ui`, während Browser in der Regel die Anpassung der `sans-serif`-Schriftfamilie zulassen. Für große Absätze verwenden Sie `sans-serif` oder eine andere nicht-UI-Schriftfamilie.
    - `ui-serif`
      - : Die Standard-UI-serif-Schrift.
    - `ui-sans-serif`
      - : Die Standard-UI-sans-serif-Schrift.
    - `ui-monospace`
      - : Die Standard-UI-monospace-Schrift.
    - `ui-rounded`
      - : Die Standard-UI-Schrift mit abgerundeten Merkmalen.
    - `math`
      - : Schrift, die auf die speziellen stilistischen Anforderungen der Darstellung von Mathematik eingeht: Hoch- und Tiefstellungen, Klammern, die mehrere Linien überspannen, verschachtelte Ausdrücke, und doppelt geschlagene Glyphen mit unterschiedlichen Bedeutungen. UA-Stylesheets können `math { font-family: math }` so einstellen, dass das {{MathMLElement("math")}}-Element standardmäßig geeignete Schriften verwendet.
    - `fangsong`
      - : Ein bestimmter Stil chinesischer Zeichen, die zwischen serif-Stil Song und kursivem Stil Kai Formen liegen. Dieser Stil wird häufig für Regierungsdokumente verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einige häufige Schriftfamilien

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

### Monospace-Schriftgröße

Browser haben getrennte Standard-Schriftgrößenpräferenzen für proportionale Schriftarten (wie `serif` und `sans-serif`) und für Monospace-Schriftarten. Typische Standards sind `16px` für proportionale Schriftarten und `13px` für Monospace-Schriftarten.

Wenn `font-family` auf das einzelne Schlüsselwort `monospace` gesetzt ist, wenden Browser die Monospace-Größeinstellung an. Wenn Benutzer ihre Browsereinstellungen nicht geändert haben und {{cssxref("font-size")}} nicht explizit festgelegt ist, kann monospace Text kleiner als der umgebende Inhalt angezeigt werden. Die gleiche Reduktion gilt für Elemente, deren User-Agent-Stylesheet `font-family: monospace` festlegt, wie {{HTMLElement("code")}} und {{HTMLElement("pre")}}.

Enthält der `font-family` Wert mehr als eine Familie, selbst wenn der Wert `monospace, monospace` ist, wenden Browser die Monospace-Schriftgröße nicht an, und der Text wird in der geerbten `font-size` gerendert. Die Deklaration `font-family: monospace, monospace` (oder eine benannte Monospace-Schrift gefolgt von `monospace`) wird daher in der gleichen Größe wie der umgebende proportionale Text dargestellt. Dieses Verhalten ist nicht in CSS spezifiziert, aber es ist interoperabel über die großen Browser-Engines hinweg.

```html
<p class="proportional">
  This proportional text is at the default size; generally 16px.
</p>
<p class="mono-only">
  This monospace text is at the preferred size for monospace fonts; generally
  13px.
</p>
<p class="mono-list">
  This is in "monospace, monospace" font, rendered at the same size as
  proportional text; generally 16px.
</p>
```

```css
.mono-only {
  font-family: monospace;
}

.mono-list {
  font-family: monospace, monospace;
}
```

{{EmbedLiveSample("Monospace_font_size", 600, 120)}}

Wenn Sie Ihre Schriftgröße nicht in den Browsereinstellungen geändert haben, sind der erste und der letzte Absatz in der gleichen Schriftgröße gerendert, die von den Browsereinstellungen bevorzugt wird. Der mittlere Absatz wird in der bevorzugten Monospace-Schriftgröße gerendert, die im Allgemeinen kleiner eingestellt ist als die bevorzugte Schriftgröße für anderen Text.

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
