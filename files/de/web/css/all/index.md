---
title: all
slug: Web/CSS/all
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`all`** [Shorthand](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft setzt alle Eigenschaften eines Elements zurück, außer {{cssxref("unicode-bidi")}}, {{cssxref("direction")}}, und [CSS Custom Properties](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties). Sie kann Eigenschaften auf ihre ursprünglichen oder geerbten Werte setzen oder auf die Werte, die in einer anderen Kaskadenebene oder einem anderen Stylesheet-Ursprung festgelegt sind.

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

Diese Eigenschaft ist eine Shorthand für alle CSS-Eigenschaften, außer {{cssxref("unicode-bidi")}}, {{cssxref("direction")}}, und [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties).

## Syntax

```css
/* Global values */
all: initial;
all: inherit;
all: unset;
all: revert;
all: revert-layer;
```

Die `all`-Eigenschaft wird als einer der globalen CSS-Schlüsselwortwerte angegeben. Beachten Sie, dass keiner dieser Werte die Eigenschaften {{cssxref("unicode-bidi")}} und {{cssxref("direction")}} beeinflusst.

### Werte

- {{cssxref("initial")}}
  - : Gibt an, dass alle Eigenschaften des Elements auf ihre [ursprünglichen Werte](/de/docs/Web/CSS/CSS_cascade/initial_value) geändert werden sollen.
- {{cssxref("inherit")}}
  - : Gibt an, dass alle Eigenschaften des Elements auf ihre [geerbten Werte](/de/docs/Web/CSS/CSS_cascade/Inheritance) geändert werden sollen.
- {{cssxref("unset")}}
  - : Gibt an, dass alle Eigenschaften des Elements auf ihre geerbten Werte geändert werden, wenn sie standardmäßig vererbt werden, oder auf ihre ursprünglichen Werte, wenn nicht.
- {{cssxref("revert")}}
  - : Gibt ein Verhalten an, das von dem Stylesheet-Ursprung abhängt, zu dem die Deklaration gehört:
    - Wenn die Regel zum [Autor-Ursprung](/de/docs/Web/CSS/CSS_cascade/Cascade#author_stylesheets) gehört, setzt der `revert`-Wert die [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) auf die Benutzerebene zurück, sodass die [spezifizierten Werte](/de/docs/Web/CSS/CSS_cascade/specified_value) so berechnet werden, als wären keine Autorenregeln für das Element festgelegt worden. Für `revert` umfasst der Autor-Ursprung die Overrides und Animationsursprünge.
    - Wenn die Regel zum [Benutzer-Ursprung](/de/docs/Web/CSS/CSS_cascade/Cascade#user_stylesheets) gehört, setzt der `revert`-Wert die [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) auf die Benutzer-Agent-Ebene zurück, sodass die [spezifizierten Werte](/de/docs/Web/CSS/CSS_cascade/specified_value) so berechnet werden, als wären keine Autoren- oder Benutzerregeln für das Element festgelegt worden.
    - Wenn die Regel zum [Benutzer-Agent-Ursprung](/de/docs/Web/CSS/CSS_cascade/Cascade#user-agent_stylesheets) gehört, verhält sich der `revert`-Wert wie `unset`.
- {{cssxref("revert-layer")}}
  - : Gibt an, dass alle Eigenschaften des Elements die Kaskade auf eine vorherige [Kaskadenebene](/de/docs/Web/CSS/@layer) zurücksetzen sollen, falls eine vorhanden ist. Wenn keine andere Kaskadenebene existiert, werden die Eigenschaften des Elements zurückgesetzt auf die übereinstimmende Regel, falls eine vorhanden ist, in der aktuellen Ebene oder auf einen vorherigen {{Glossary("Style_origin", "Stil-Ursprung")}}.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel enthält die CSS-Datei das Styling für das {{HTMLElement("blockquote")}}-Element zusätzlich zu einigen Stilen für das übergeordnete `<body>`-Element. Verschiedene Ausgaben im Abschnitt Ergebnisse demonstrieren, wie das Styling des `<blockquote>`-Elements beeinflusst wird, wenn verschiedene Werte auf die `all`-Eigenschaft innerhalb der `blockquote`-Regel angewendet werden.

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

Dies ist das Szenario, in dem keine `all`-Eigenschaft in der `blockquote`-Regel gesetzt ist. Das {{HTMLElement("blockquote")}}-Element verwendet die Standardbrowser-Stilgebung, die ihm einen Rand gibt, zusammen mit einem spezifischen Hintergrund und Textfarbe, wie im Stylesheet angegeben. Es verhält sich auch wie ein _Block_-Element: Der nachfolgende Text befindet sich unterhalb.

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

Mit der `all`-Eigenschaft auf `initial` in der `blockquote`-Regel verwendet das {{HTMLElement("blockquote")}}-Element nicht mehr die Standardbrowser-Stilgebung: Es ist jetzt ein _Inline_-Element (ursprünglicher Wert), seine [`background-color`](/de/docs/Web/CSS/background-color#formal_definition) ist `transparent` (ursprünglicher Wert), seine [`font-size`](/de/docs/Web/CSS/font-size#formal_definition) ist `medium`, und seine [`color`](/de/docs/Web/CSS/color#formal_definition) ist `black` (ursprünglicher Wert).

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

In diesem Fall verwendet das {{HTMLElement("blockquote")}}-Element nicht die Standardbrowser-Stilgebung. Stattdessen erbt es Stilwerte von seinem übergeordneten {{HTMLElement("body")}}-Element: Es ist jetzt ein _Block_-Element (geerbter Wert), seine {{cssxref("background-color")}} ist `#F0F0F0` (geerbter Wert), seine {{cssxref("font-size")}} ist `small` (geerbter Wert), und seine {{cssxref("color")}} ist `blue` (geerbter Wert).

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

Wenn der `unset`-Wert auf die `all`-Eigenschaft in der `blockquote`-Regel angewendet wird, verwendet das {{HTMLElement("blockquote")}}-Element nicht die Standardbrowser-Stilgebung. Da [`background-color`](/de/docs/Web/CSS/background-color#formal_definition) eine nicht vererbte Eigenschaft ist und [`font-size`](/de/docs/Web/CSS/font-size#formal_definition) und [`color`](/de/docs/Web/CSS/color#formal_definition) vererbte Eigenschaften sind, ist das `<blockquote>`-Element jetzt ein _Inline_-Element (ursprünglicher Wert), seine {{cssxref("background-color")}} ist `transparent` (ursprünglicher Wert), aber seine {{cssxref("font-size")}} ist immer noch `small` (geerbter Wert), und seine {{cssxref("color")}} ist `blue` (geerbter Wert).

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

Wenn die `all`-Eigenschaft auf `revert` in der `blockquote`-Regel gesetzt ist, wird die `blockquote`-Regel als nicht existent betrachtet und die Stilwerte werden von denen des übergeordneten `<body>`-Elements übernommen. So wird das `<blockquote>`-Element als _Block_-Element gestylt, mit {{cssxref("background-color")}} `#F0F0F0`, {{cssxref("font-size")}} `small`, und {{cssxref("color")}} `blue` - alle Werte, die von der `body`-Regel geerbt wurden.

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

Es sind keine Kaskadenebenen in der CSS-Datei definiert, daher erbt das `<blockquote>`-Element seinen Stil von der passenden `body`-Regel. Das `<blockquote>`-Element wird hier als _Block_-Element gestylt, mit {{cssxref("background-color")}} `#F0F0F0`, {{cssxref("font-size")}} `small`, und {{cssxref("color")}} `blue` - alle Werte, die von der `body`-Regel geerbt wurden. Dieses Szenario ist ein Beispiel für den Fall, in dem `all` auf `revert-layer` gesetzt das gleiche Verhalten zeigt wie `all` auf `revert` gesetzt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

Globale CSS-Schlüsselwortwerte: {{cssxref("initial")}}, {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}}
