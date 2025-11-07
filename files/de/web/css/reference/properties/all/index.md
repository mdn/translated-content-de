---
title: all
slug: Web/CSS/Reference/Properties/all
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`all`** [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS)-Eigenschaft setzt alle Eigenschaften eines Elements zurück, mit Ausnahme von {{cssxref("unicode-bidi")}}, {{cssxref("direction")}} und [CSS-Custom Properties](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties). Sie kann Eigenschaften auf ihre anfänglichen oder geerbten Werte setzen oder auf die Werte, die in einer anderen Kaskadenebene oder stylesheet Herkunft angegeben wurden.

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

Diese Eigenschaft ist eine Kurzschreibweise für alle CSS-Eigenschaften mit Ausnahme von {{cssxref("unicode-bidi")}}, {{cssxref("direction")}} und [custom properties](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties).

## Syntax

```css
/* Global values */
all: initial;
all: inherit;
all: unset;
all: revert;
all: revert-layer;
```

Die `all`-Eigenschaft wird als einer der globalen CSS-Schlüsselwortwerte spezifiziert. Beachten Sie, dass keiner dieser Werte die Eigenschaften {{cssxref("unicode-bidi")}} und {{cssxref("direction")}} beeinflusst.

### Werte

- {{cssxref("initial")}}
  - : Gibt an, dass alle Eigenschaften des Elements auf ihre [anfänglichen Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) gesetzt werden sollen.
- {{cssxref("inherit")}}
  - : Gibt an, dass alle Eigenschaften des Elements auf ihre [geerbten Werte](/de/docs/Web/CSS/Guides/Cascade/Inheritance) gesetzt werden sollen.
- {{cssxref("unset")}}
  - : Gibt an, dass alle Eigenschaften des Elements auf ihre geerbten Werte gesetzt werden sollen, wenn sie standardmäßig geerbt werden, oder auf ihre anfänglichen Werte, wenn nicht.
- {{cssxref("revert")}}
  - : Gibt ein Verhalten an, das von der Herkunft des Stylesheets abhängt, zu dem die Deklaration gehört:
    - Wenn die Regel zur [Author-Herkunft](/de/docs/Web/CSS/Guides/Cascade/Introduction#author_stylesheets) gehört, stellt der `revert`-Wert die [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction) auf die Benutzerebene zurück, sodass die [angegebenen Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#specified_value) berechnet werden, als ob keine Regeln auf Autorenebene für das Element angegeben wurden. Für die Zwecke von `revert` umfasst die Autorenherkunft die Override- und Animationsherkünfte.
    - Wenn die Regel zur [Benutzer-Herkunft](/de/docs/Web/CSS/Guides/Cascade/Introduction#user_stylesheets) gehört, stellt der `revert`-Wert die [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction) auf die Benutzerebene des User-Agents zurück, sodass die [angegebenen Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#specified_value) berechnet werden, als ob keine Regeln auf Autoren- oder Benutzerebene für das Element angegeben wurden.
    - Wenn die Regel zur [User-Agent-Herkunft](/de/docs/Web/CSS/Guides/Cascade/Introduction#user-agent_stylesheets) gehört, wirkt der `revert`-Wert wie `unset`.
- {{cssxref("revert-layer")}}
  - : Gibt an, dass alle Eigenschaften des Elements die Kaskade auf eine vorherige [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer) zurücksetzen sollen, falls eine existiert. Wenn keine andere Kaskadenschicht existiert, werden die Eigenschaften des Elements auf die übereinstimmende Regel in der aktuellen Schicht oder zu einer vorherigen {{Glossary("Style_origin", "Stilherkunft")}} zurückgesetzt, falls eine existiert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel enthält die CSS-Datei Stilregeln für das {{HTMLElement("blockquote")}}-Element zusätzlich zu einigen Stilregeln für das übergeordnete `<body>`-Element. Verschiedene Ausgaben im Abschnitt Ergebnisse demonstrieren, wie die Stilgebung des `<blockquote>`-Elements beeinflusst wird, wenn verschiedene Werte auf die `all`-Eigenschaft innerhalb der `blockquote`-Regel angewendet werden.

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

Dies ist das Szenario, in dem keine `all`-Eigenschaft innerhalb der `blockquote`-Regel gesetzt ist. Das {{HTMLElement("blockquote")}}-Element verwendet die Standardstilgebung des Browsers, die ihm einen Rand verleiht, zusammen mit einem spezifischen Hintergrund und einer Textfarbe, wie im Stylesheet angegeben. Es verhält sich auch als _Block_-Element: Der darauf folgende Text steht darunter.

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

Mit der `all`-Eigenschaft, die in der `blockquote`-Regel auf `initial` gesetzt ist, verwendet das {{HTMLElement("blockquote")}}-Element nicht mehr die Standardstilgebung des Browsers: Es ist jetzt ein _Inline_-Element (Anfangswert), sein [`background-color`](/de/docs/Web/CSS/Reference/Properties/background-color#formal_definition) ist `transparent` (Anfangswert), seine [`font-size`](/de/docs/Web/CSS/Reference/Properties/font-size#formal_definition) ist `medium`, und seine [`color`](/de/docs/Web/CSS/Reference/Properties/color#formal_definition) ist `black` (Anfangswert).

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

In diesem Fall verwendet das {{HTMLElement("blockquote")}}-Element nicht die Standardstilgebung des Browsers. Stattdessen erbt es Stilwerte von seinem übergeordneten {{HTMLElement("body")}}-Element: Es ist jetzt ein _Block_-Element (geerbter Wert), seine {{cssxref("background-color")}} ist `#F0F0F0` (geerbter Wert), seine {{cssxref("font-size")}} ist `small` (geerbter Wert), und seine {{cssxref("color")}} ist `blue` (geerbter Wert).

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

Wenn der `unset`-Wert in der `blockquote`-Regel auf die `all`-Eigenschaft angewendet wird, verwendet das {{HTMLElement("blockquote")}}-Element nicht die Standardstilgebung des Browsers. Da [`background-color`](/de/docs/Web/CSS/Reference/Properties/background-color#formal_definition) eine nicht vererbte Eigenschaft ist und [`font-size`](/de/docs/Web/CSS/Reference/Properties/font-size#formal_definition) und [`color`](/de/docs/Web/CSS/Reference/Properties/color#formal_definition) vererbte Eigenschaften sind, ist das `<blockquote>`-Element jetzt ein _Inline_-Element (Anfangswert), seine {{cssxref("background-color")}} ist `transparent` (Anfangswert), aber seine {{cssxref("font-size")}} ist immer noch `small` (geerbter Wert), und seine {{cssxref("color")}} ist `blue` (geerbter Wert).

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

Wenn die `all`-Eigenschaft in der `blockquote`-Regel auf `revert` gesetzt ist, wird die `blockquote`-Regel als nicht existent betrachtet und die Stilregelwerte werden von denen übernommen, die auf das übergeordnete Element `<body>` angewendet werden. So wird das `<blockquote>`-Element als _Block_-Element gestylt, mit {{cssxref("background-color")}} `#F0F0F0`, {{cssxref("font-size")}} `small`, und {{cssxref("color")}} `blue` – alle Werte, die von der `body`-Regel geerbt werden.

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

Im CSS ist keine Kaskadenschicht definiert, sodass das `<blockquote>`-Element seinen Stil von der übereinstimmenden `body`-Regel erbt. Das `<blockquote>`-Element wird hier als _Block_-Element gestylt, mit {{cssxref("background-color")}} `#F0F0F0`, {{cssxref("font-size")}} `small`, und {{cssxref("color")}} `blue` – alle Werte, die von der `body`-Regel geerbt werden. Dieses Szenario ist ein Beispiel für den Fall, in dem `all` mit `revert-layer` das gleiche Verhalten zeigt wie `all` gesetzt auf `revert`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

Globale CSS-Schlüsselwortwerte: {{cssxref("initial")}}, {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}}
