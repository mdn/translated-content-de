---
title: "`all` CSS-Eigenschaft"
short-title: all
slug: Web/CSS/Reference/Properties/all
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

Die **`all`** [CSS](/de/docs/Web/CSS)[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) setzt alle Eigenschaften eines Elements zurück, außer {{cssxref("unicode-bidi")}}, {{cssxref("direction")}} und [CSS Custom Properties](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties). Sie kann Eigenschaften auf ihre initialen oder geerbten Werte oder auf die in einer anderen Kaskadenschicht oder einem Stylesheet-Ursprung angegebenen Werte setzen.

{{InteractiveExample("CSS Demo: all")}}

```css interactive-example-choice
/* no all property */
```

```css interactive-example-choice
all: initial;
```

```css interactive-example-choice
all: inherit;
```

```css interactive-example-choice
all: unset;
```

```css interactive-example-choice
all: revert;
```

```html interactive-example
<section id="default-example">
  <div class="example-container-bg">
    <div class="example-container">
      <p id="example-element">
        This paragraph has a font size of 1.5rem and a color of gold. It also
        has 1rem of vertical margin set by the user-agent. The parent of the
        paragraph is a &lt;div&gt; with a dashed blue border.
      </p>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  color: gold;
  padding: 10px;
  font-size: 1.5rem;
  text-align: left;
  width: 100%;
}

.example-container {
  border: 2px dashed #2d5ae1;
}

.example-container-bg {
  background-color: #77767b;
  padding: 20px;
}
```

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzform für alle CSS-Eigenschaften, mit Ausnahme von {{cssxref("unicode-bidi")}}, {{cssxref("direction")}} und [benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties).

## Syntax

```css
/* Global values */
all: initial;
all: inherit;
all: unset;
all: revert;
all: revert-layer;
```

### Werte

Die `all`-Eigenschaft wird als einer der globalen CSS-Schlüsselwortwerte angegeben. Beachten Sie, dass keiner dieser Werte die Eigenschaften {{cssxref("unicode-bidi")}} und {{cssxref("direction")}} beeinflusst.

- {{cssxref("initial")}}
  - : Gibt an, dass alle Eigenschaften des Elements auf ihre [anfänglichen Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) gesetzt werden sollen.
- {{cssxref("inherit")}}
  - : Gibt an, dass alle Eigenschaften des Elements auf ihre [geerbten Werte](/de/docs/Web/CSS/Guides/Cascade/Inheritance) gesetzt werden sollen.
- {{cssxref("unset")}}
  - : Gibt an, dass alle Eigenschaften des Elements auf ihre geerbten Werte gesetzt werden sollen, wenn diese standardmäßig geerbt werden, oder auf ihre anfänglichen Werte, wenn nicht.
- {{cssxref("revert")}}
  - : Gibt ein Verhalten an, das vom Stylesheet-Ursprung abhängt, zu dem die Deklaration gehört:
    - Wenn die Regel dem [Autoren-Ursprung](/de/docs/Web/CSS/Guides/Cascade/Introduction#author_stylesheets) angehört, setzt der `revert`-Wert die [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction) auf die Benutzer-Ebene zurück, so dass die [spezifizierten Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#specified_value) berechnet werden, als ob keine Autorregelungen für das Element festgelegt wären. Für Zwecke von `revert`, umfasst der Autoren-Ursprung die Override- und Animation-Ursprünge.
    - Wenn die Regel dem [Benutzer-Ursprung](/de/docs/Web/CSS/Guides/Cascade/Introduction#user_stylesheets) angehört, setzt der `revert`-Wert die [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction) auf die Benutzeragenten-Ebene zurück, so dass die [spezifizierten Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#specified_value) berechnet werden, als ob keine Autor- oder Benutzerregeln für das Element festgelegt wären.
    - Wenn die Regel dem [Benutzeragenten-Ursprung](/de/docs/Web/CSS/Guides/Cascade/Introduction#user-agent_stylesheets) angehört, wirkt der `revert`-Wert wie `unset`.
- {{cssxref("revert-layer")}}
  - : Gibt an, dass alle Eigenschaften des Elements die Kaskade auf eine vorherige [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer) zurücksetzen sollen, wenn eine vorhanden ist. Falls keine andere Kaskadenschicht existiert, setzen die Eigenschaften des Elements auf die übereinstimmende Regel zurück, falls eine vorhanden ist, in der aktuellen Schicht oder auf einen vorherigen {{Glossary("Style_origin", "Stil-Ursprung")}}.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel enthält die CSS-Datei Stile für das {{HTMLElement("blockquote")}}-Element sowie einige Stile für das übergeordnete `<body>`-Element. Verschiedene Ergebnisse in der Ergebniss-Teilabschnitt demonstrieren, wie sich die Stilgebung des `<blockquote>`-Elements ändert, wenn unterschiedliche Werte auf die `all`-Eigenschaft innerhalb der `blockquote`-Regel angewendet werden.

### HTML

```html
<blockquote id="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</blockquote>
Phasellus eget velit sagittis.
```

### CSS

```css
body {
  font-size: small;
  background-color: #f0f0f0;
  color: blue;
  margin: 0;
  padding: 0;
}

blockquote {
  background-color: skyblue;
  color: red;
}
```

### Ergebnisse

#### A. Keine `all`-Eigenschaft

```html hidden
<blockquote id="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</blockquote>
Phasellus eget velit sagittis.
```

```css hidden
body {
  font-size: small;
  background-color: #f0f0f0;
  color: blue;
}
blockquote {
  background-color: skyblue;
  color: red;
}
```

{{EmbedLiveSample("a._no_all_property", "200", "125")}}

Dies ist das Szenario, in dem keine `all`-Eigenschaft innerhalb der `blockquote`-Regel gesetzt ist. Das {{HTMLElement("blockquote")}}-Element verwendet die Standardstilvorlagen des Browsers, die ihm einen Rand sowie eine bestimmte Hintergrund- und Textfarbe wie im Stylesheet angegeben geben. Es verhält sich auch als _Block_-Element: Der nachfolgende Text befindet sich darunter.

#### B. `all: initial`

```html hidden
<blockquote id="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</blockquote>
Phasellus eget velit sagittis.
```

```css hidden
body {
  font-size: small;
  background-color: #f0f0f0;
  color: blue;
}
blockquote {
  background-color: skyblue;
  color: red;
  all: initial;
}
```

{{EmbedLiveSample("b._all_initial", "200", "125")}}

Wird die `all`-Eigenschaft auf `initial` in der `blockquote`-Regel gesetzt, verwendet das {{HTMLElement("blockquote")}}-Element nicht mehr die Standardstilvorlagen des Browsers: Es ist nun ein _Inline_-Element (initialer Wert), seine [`background-color`](/de/docs/Web/CSS/Reference/Properties/background-color#formal_definition) ist `transparent` (initialer Wert), seine [`font-size`](/de/docs/Web/CSS/Reference/Properties/font-size#formal_definition) ist `medium`, und seine [`color`](/de/docs/Web/CSS/Reference/Properties/color#formal_definition) ist `black` (initialer Wert).

#### C. `all: inherit`

```html hidden
<blockquote id="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</blockquote>
Phasellus eget velit sagittis.
```

```css hidden
body {
  font-size: small;
  background-color: #f0f0f0;
  color: blue;
}
blockquote {
  background-color: skyblue;
  color: red;
  all: inherit;
}
```

{{EmbedLiveSample("c._all_inherit", "200", "125")}}

In diesem Fall verwendet das {{HTMLElement("blockquote")}}-Element nicht die Standardstilvorlagen des Browsers. Stattdessen erbt es Stilwerte von seinem übergeordneten {{HTMLElement("body")}}-Element: Es ist nun ein _Block_-Element (geerbter Wert), seine {{cssxref("background-color")}} ist `#F0F0F0` (geerbter Wert), seine {{cssxref("font-size")}} ist `small` (geerbter Wert), und seine {{cssxref("color")}} ist `blue` (geerbter Wert).

#### D. `all: unset`

```html hidden
<blockquote id="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</blockquote>
Phasellus eget velit sagittis.
```

```css hidden
body {
  font-size: small;
  background-color: #f0f0f0;
  color: blue;
}
blockquote {
  background-color: skyblue;
  color: red;
  all: unset;
}
```

{{EmbedLiveSample("d._all_unset", "200", "125")}}

Wenn der `unset`-Wert auf die `all`-Eigenschaft in der `blockquote`-Regel angewendet wird, verwendet das {{HTMLElement("blockquote")}}-Element nicht die Standardstilvorlagen des Browsers. Weil [`background-color`](/de/docs/Web/CSS/Reference/Properties/background-color#formal_definition) eine nicht-geerbte Eigenschaft ist und [`font-size`](/de/docs/Web/CSS/Reference/Properties/font-size#formal_definition) und [`color`](/de/docs/Web/CSS/Reference/Properties/color#formal_definition) geerbte Eigenschaften sind, ist das `<blockquote>`-Element nun ein _Inline_-Element (anfänglicher Wert), seine {{cssxref("background-color")}} ist `transparent` (anfänglicher Wert), aber seine {{cssxref("font-size")}} ist immer noch `small` (geerbter Wert), und seine {{cssxref("color")}} ist `blue` (geerbter Wert).

#### E. `all: revert`

```html hidden
<blockquote id="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</blockquote>
Phasellus eget velit sagittis.
```

```css hidden
body {
  font-size: small;
  background-color: #f0f0f0;
  color: blue;
}
blockquote {
  background-color: skyblue;
  color: red;
  all: revert;
}
```

{{EmbedLiveSample("e._all_revert", "200", "125")}}

Wenn die `all`-Eigenschaft in der `blockquote`-Regel auf `revert` gesetzt ist, wird die `blockquote`-Regel als nicht existent betrachtet, und die Stilwerte werden von denen geerbt, die auf das übergeordnete `<body>`-Element angewendet werden. So wird das `<blockquote>`-Element als _Block_-Element gestylt, mit {{cssxref("background-color")}} `#F0F0F0`, {{cssxref("font-size")}} `small` und {{cssxref("color")}} `blue` - alle Werte, die von der `body`-Regel geerbt werden.

#### F. `all: revert-layer`

```html hidden
<blockquote id="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</blockquote>
Phasellus eget velit sagittis.
```

```css hidden
body {
  font-size: small;
  background-color: #f0f0f0;
  color: blue;
}
blockquote {
  background-color: skyblue;
  color: red;
  all: revert-layer;
}
```

{{EmbedLiveSample("f._all_revert-layer", "200", "125")}}

Im CSS-Datei sind keine Kaskadenschichten definiert, so dass das `<blockquote>`-Element seinen Stil von der übereinstimmenden `body`-Regel erbt. Das `<blockquote>`-Element ist hier als _Block_-Element gestylt, mit {{cssxref("background-color")}} `#F0F0F0`, {{cssxref("font-size")}} `small` und {{cssxref("color")}} `blue` - alle Werte, die von der `body`-Regel geerbt werden. Dieses Szenario ist ein Beispiel für den Fall, wenn `all` auf `revert-layer` gesetzt wird und sich genauso verhält wie `all` auf `revert` gesetzt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

CSS globale Schlüsselwortwerte: {{cssxref("initial")}}, {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}}
