---
title: CSS-Eigenschaft `all`
short-title: all
slug: Web/CSS/Reference/Properties/all
l10n:
  sourceCommit: c0c85c3dc0d6ff4247c85b0144149e584d74b625
---

Die **`all`** [Shorthand](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS)-Eigenschaft setzt alle Eigenschaften eines Elements zurück, außer {{cssxref("unicode-bidi")}}, {{cssxref("direction")}} und [CSS Custom Properties](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties). Sie kann Eigenschaften auf ihre initialen oder geerbten Werte setzen oder auf die Werte, die in einer anderen Kaskadierungsebene oder aus einem Stylesheet-Ursprung angegeben sind.

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

## Bestandteilseigenschaften

Diese Eigenschaft ist eine Shorthand-Eigenschaft für alle CSS-Eigenschaften außer {{cssxref("unicode-bidi")}}, {{cssxref("direction")}} und [custom properties](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties).

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

Die `all`-Eigenschaft wird als eines der CSS-Global-Keyword-Werte angegeben. Beachten Sie, dass keiner dieser Werte die Eigenschaften {{cssxref("unicode-bidi")}} und {{cssxref("direction")}} beeinflusst.

- {{cssxref("initial")}}
  - : Gibt an, dass alle Eigenschaften des Elements auf ihre [initialen Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) zurückgesetzt werden sollen.
- {{cssxref("inherit")}}
  - : Gibt an, dass alle Eigenschaften des Elements auf ihre [geerbten Werte](/de/docs/Web/CSS/Guides/Cascade/Inheritance) zurückgesetzt werden sollen.
- {{cssxref("unset")}}
  - : Gibt an, dass alle Eigenschaften des Elements auf ihre geerbten Werte gesetzt werden sollen, wenn sie standardmäßig vererbt werden, oder auf ihre initialen Werte, wenn sie das nicht tun.
- {{cssxref("revert")}}
  - : Gibt ein Verhalten an, das vom Stylesheet-Ursprung abhängt, zu dem die Deklaration gehört:
    - Wenn die Regel zum [Autor-Ursprung](/de/docs/Web/CSS/Guides/Cascade/Introduction#author_stylesheets) gehört, setzt der Wert `revert` die [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction) auf die Benutzer-Ebene zurück, sodass die [spezifizierten Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#specified_value) berechnet werden, als ob keine Autoren-Ebenen-Regeln für das Element angegeben wurden. Für `revert` schließt der Autoren-Ursprung die Override- und Animation-Ursprünge ein.
    - Wenn die Regel zum [Benutzer-Ursprung](/de/docs/Web/CSS/Guides/Cascade/Introduction#user_stylesheets) gehört, setzt der Wert `revert` die [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction) auf die User-Agent-Ebene zurück, sodass die [spezifizierten Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#specified_value) berechnet werden, als ob keine Autoren-Ebenen- oder Benutzer-Ebenen-Regeln für das Element angegeben wurden.
    - Wenn die Regel zum [User-Agent-Ursprung](/de/docs/Web/CSS/Guides/Cascade/Introduction#user-agent_stylesheets) gehört, wirkt der Wert `revert` wie `unset`.
- {{cssxref("revert-layer")}}
  - : Gibt an, dass alle Eigenschaften des Elements die Kaskade auf eine vorherige [Kaskadierungsebene](/de/docs/Web/CSS/Reference/At-rules/@layer) zurücksetzen sollen, wenn eine existiert. Wenn keine andere Kaskadierungsebene existiert, werden die Eigenschaften des Elements auf die übereinstimmende Regel in der aktuellen Ebene oder auf einen vorherigen {{Glossary("Style_origin", "Stil-Ursprung")}} zurückgesetzt, falls eine existiert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel enthält die CSS-Datei Stile für das {{HTMLElement("blockquote")}}-Element sowie einige Stile für das übergeordnete `<body>`-Element. Verschiedene Ausgaben im Ergebnis-Unterabschnitt zeigen, wie das Styling des `<blockquote>`-Elements beeinflusst wird, wenn unterschiedliche Werte der Eigenschaft `all` innerhalb der `blockquote`-Regel angewendet werden.

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

Dies ist das Szenario, in dem keine `all`-Eigenschaft innerhalb der `blockquote`-Regel gesetzt ist. Das {{HTMLElement("blockquote")}}-Element verwendet das Standard-Browser-Styling, das ihm einen Rand gibt, zusammen mit einer spezifischen Hintergrund- und Textfarbe, wie im Stylesheet angegeben. Es verhält sich auch wie ein _Block_-Element: Der Text, der darauf folgt, befindet sich darunter.

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

Mit der Eigenschaft `all` auf `initial` in der `blockquote`-Regel verwendet das {{HTMLElement("blockquote")}}-Element nicht mehr das Standard-Browser-Styling: Es ist jetzt ein _Inline_-Element (initialer Wert), sein [`background-color`](/de/docs/Web/CSS/Reference/Properties/background-color#formal_definition) ist `transparent` (initialer Wert), seine [`font-size`](/de/docs/Web/CSS/Reference/Properties/font-size#formal_definition) ist `medium`, und seine [`color`](/de/docs/Web/CSS/Reference/Properties/color#formal_definition) ist `black` (initialer Wert).

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

In diesem Fall verwendet das {{HTMLElement("blockquote")}}-Element nicht das Standard-Browser-Styling. Stattdessen erbt es die Stilwerte von seinem übergeordneten {{HTMLElement("body")}}-Element: Es ist jetzt ein _Block_-Element (geerbter Wert), seine {{cssxref("background-color")}} ist `#F0F0F0` (geerbter Wert), seine {{cssxref("font-size")}} ist `small` (geerbter Wert), und seine {{cssxref("color")}} ist `blue` (geerbter Wert).

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

Wenn der Wert `unset` auf die Eigenschaft `all` in der `blockquote`-Regel angewendet wird, verwendet das {{HTMLElement("blockquote")}}-Element nicht das Standard-Browser-Styling. Da [`background-color`](/de/docs/Web/CSS/Reference/Properties/background-color#formal_definition) eine nicht geerbte Eigenschaft ist und [`font-size`](/de/docs/Web/CSS/Reference/Properties/font-size#formal_definition) und [`color`](/de/docs/Web/CSS/Reference/Properties/color#formal_definition) geerbte Eigenschaften sind, ist das `<blockquote>`-Element jetzt ein _Inline_-Element (initialer Wert), seine {{cssxref("background-color")}} ist `transparent` (initialer Wert), aber seine {{cssxref("font-size")}} ist weiterhin `small` (geerbter Wert), und seine {{cssxref("color")}} ist `blue` (geerbter Wert).

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

Wenn die Eigenschaft `all` in der `blockquote`-Regel auf `revert` gesetzt ist, wird die `blockquote`-Regel als nicht existent angesehen und die Styling-Eigenschaftswerte werden von denen übernommen, die auf das übergeordnete `body`-Element angewendet werden. So wird das `<blockquote>`-Element als _Block_-Element gestylt, mit {{cssxref("background-color")}} `#F0F0F0`, {{cssxref("font-size")}} `small`, und {{cssxref("color")}} `blue` - alle Werte, die von der `body`-Regel geerbt wurden.

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

Es sind keine Kaskadierungsebenen in der CSS-Datei definiert, sodass das `<blockquote>`-Element seinen Stil von der passenden `body`-Regel erbt. Das `<blockquote>`-Element wird hier als _Block_-Element gestylt, mit {{cssxref("background-color")}} `#F0F0F0`, {{cssxref("font-size")}} `small`, und {{cssxref("color")}} `blue` - alle Werte, die von der `body`-Regel geerbt wurden. Dieses Szenario ist ein Beispiel für den Fall, wenn `all`, auf `revert-layer` gesetzt, sich genauso verhält wie wenn `all` auf `revert` gesetzt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

CSS-Globale-Keyword-Werte: {{cssxref("initial")}}, {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}}
