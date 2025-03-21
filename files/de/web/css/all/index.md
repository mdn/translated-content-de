---
title: all
slug: Web/CSS/all
l10n:
  sourceCommit: 95edea913e7f0726243aff3f47b85cfd6f02d995
---

{{CSSRef}}

Die **`all`** [Abkürzungseigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) der [CSS](/de/docs/Web/CSS) setzt alle Eigenschaften eines Elements zurück, außer {{cssxref("unicode-bidi")}}, {{cssxref("direction")}} und [CSS Custom Properties](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties). Sie kann Eigenschaften auf ihre initialen oder vererbten Werte setzen oder auf die in einer anderen Kaskadenschicht oder einem Ursprungsstylesheet spezifizierten Werte.

{{InteractiveExample("CSS Demo: all")}}

```css interactive-example-choice
/*no all property*/
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

Diese Eigenschaft ist eine Abkürzung für alle CSS-Eigenschaften außer {{cssxref("unicode-bidi")}}, {{cssxref("direction")}} und [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties).

## Syntax

```css
/* Global values */
all: initial;
all: inherit;
all: unset;
all: revert;
all: revert-layer;
```

Die `all`-Eigenschaft wird als einer der globalen Schlüsselwortwerte von CSS angegeben. Beachten Sie, dass keiner dieser Werte die Eigenschaften {{cssxref("unicode-bidi")}} und {{cssxref("direction")}} beeinflusst.

### Werte

- {{cssxref("initial")}}
  - : Gibt an, dass alle Eigenschaften des Elements auf ihre [initialen Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial-value) geändert werden sollen.
- {{cssxref("inherit")}}
  - : Gibt an, dass alle Eigenschaften des Elements auf ihre [geerbten Werte](/de/docs/Web/CSS/CSS_cascade/Inheritance) geändert werden sollen.
- {{cssxref("unset")}}
  - : Gibt an, dass alle Eigenschaften des Elements auf ihre geerbten Werte geändert werden sollen, wenn sie standardmäßig vererbt werden, oder auf ihre initialen Werte, wenn nicht.
- {{cssxref("revert")}}
  - : Gibt Verhalten an, das vom Ursprungsstylesheet abhängt, zu dem die Deklaration gehört:
    - Wenn die Regel zum [Autor-Ursprung](/de/docs/Web/CSS/CSS_cascade/Cascade#author_stylesheets) gehört, versetzt der `revert`-Wert die [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) auf die Benutzerebene zurück, sodass die [spezifizierten Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#specified-value) berechnet werden, als ob keine Regeln auf Autorenebene für das Element spezifiziert wären. Zum Zweck von `revert` umfasst der Autor-Ursprung die Override- und Animation-Ursprünge.
    - Wenn die Regel zum [Benutzer-Ursprung](/de/docs/Web/CSS/CSS_cascade/Cascade#user_stylesheets) gehört, versetzt der `revert`-Wert die [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) auf die Benutzer-Agent-Ebene zurück, sodass die [spezifizierten Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#specified-value) berechnet werden, als ob keine Regeln auf Autoren- oder Benutzerebene für das Element spezifiziert wären.
    - Wenn die Regel zum [Benutzer-Agent-Ursprung](/de/docs/Web/CSS/CSS_cascade/Cascade#user-agent_stylesheets) gehört, agiert der `revert`-Wert wie `unset`.
- {{cssxref("revert-layer")}}
  - : Gibt an, dass alle Eigenschaften des Elements die Kaskade auf eine vorherige [Kaskadenschicht](/de/docs/Web/CSS/@layer) zurücksetzen sollen, falls eine existiert. Falls keine andere Kaskadenschicht existiert, werden die Eigenschaften des Elements auf die übereinstimmende Regel zurückgesetzt, falls eine existiert, in der aktuellen Schicht oder auf einen vorherigen {{Glossary("Style_origin", "Stilursprung")}}.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel enthält die CSS-Datei Styling für das {{HTMLElement("blockquote")}}-Element zusätzlich zu einigen Stylings für das Eltern-`<body>`-Element. Verschiedene Ausgaben im Abschnitt Ergebnisse zeigen, wie das Styling des `<blockquote>`-Elements beeinflusst wird, wenn verschiedene Werte auf die `all`-Eigenschaft innerhalb der `blockquote`-Regel angewendet werden.

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

Dies ist das Szenario, in dem keine `all`-Eigenschaft innerhalb der `blockquote`-Regel gesetzt ist. Das {{HTMLElement("blockquote")}}-Element verwendet das Standardstyling des Browsers, das ihm einen Rand gibt, zusammen mit einem bestimmten Hintergrund und einer Textfarbe, wie im Stylesheet angegeben. Es verhält sich auch als ein _Block_-Element: Der Text, der darauf folgt, befindet sich darunter.

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

Wenn die `all`-Eigenschaft in der `blockquote`-Regel auf `initial` gesetzt wird, verwendet das {{HTMLElement("blockquote")}}-Element nicht mehr das Standardstyling des Browsers: Es ist jetzt ein _Inline_-Element (Initialwert), seine [`background-color`](/de/docs/Web/CSS/background-color#formal_definition) ist `transparent` (Initialwert), seine [`font-size`](/de/docs/Web/CSS/font-size#formal_definition) ist `medium` und seine [`color`](/de/docs/Web/CSS/color#formal_definition) ist `black` (Initialwert).

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

In diesem Fall verwendet das {{HTMLElement("blockquote")}}-Element nicht das Standardstyling des Browsers. Stattdessen erbt es Stilwerte von seinem Eltern-{{HTMLElement("body")}}-Element: Es ist jetzt ein _Block_-Element (geerbter Wert), seine {{cssxref("background-color")}} ist `#F0F0F0` (geerbter Wert), seine {{cssxref("font-size")}} ist `small` (geerbter Wert) und seine {{cssxref("color")}} ist `blue` (geerbter Wert).

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

Wenn der `unset`-Wert auf die `all`-Eigenschaft innerhalb der `blockquote`-Regel angewendet wird, verwendet das {{HTMLElement("blockquote")}}-Element nicht das Standardstyling des Browsers. Da [`background-color`](/de/docs/Web/CSS/background-color#formal_definition) eine nicht-geerbte Eigenschaft ist und [`font-size`](/de/docs/Web/CSS/font-size#formal_definition) sowie [`color`](/de/docs/Web/CSS/color#formal_definition) geerbte Eigenschaften sind, ist das `<blockquote>`-Element jetzt ein _Inline_-Element (Initialwert), seine {{cssxref("background-color")}} ist `transparent` (Initialwert), aber seine {{cssxref("font-size")}} ist immer noch `small` (geerbter Wert), und seine {{cssxref("color")}} ist `blue` (geerbter Wert).

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

Wenn die `all`-Eigenschaft in der `blockquote`-Regel auf `revert` gesetzt ist, wird die `blockquote`-Regel als nicht existent betrachtet, und die Stileigenschaften werden von denen des Elternelements `<body>` geerbt. Somit wird das `<blockquote>`-Element als ein _Block_-Element gestylt, mit {{cssxref("background-color")}} `#F0F0F0`, {{cssxref("font-size")}} `small` und {{cssxref("color")}} `blue` - alle Werte vom `body`-Stil geerbt.

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

Es sind keine Kaskadenschichten in der CSS-Datei definiert, deshalb erbt das `<blockquote>`-Element seinen Stil von der übereinstimmenden `body`-Regel. Das `<blockquote>`-Element ist hier als ein _Block_-Element gestylt, mit {{cssxref("background-color")}} `#F0F0F0`, {{cssxref("font-size")}} `small` und {{cssxref("color")}} `blue` - alle Werte, geerbt von der `body`-Regel. Dieses Szenario ist ein Beispiel für den Fall, wenn `all` auf `revert-layer` gesetzt gleich wie `all` auf `revert` gesetzt wirkt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

CSS globale Schlüsselwortwerte: {{cssxref("initial")}}, {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}}
