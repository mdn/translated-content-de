---
title: all
slug: Web/CSS/all
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`all`** [Kurznotation](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS)-Eigenschaft setzt alle Eigenschaften eines Elements zurück, außer {{cssxref("unicode-bidi")}}, {{cssxref("direction")}} und [CSS-Custom-Properties](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties). Es kann Eigenschaften auf ihre initialen oder geerbten Werte setzen oder auf die in einer anderen Kaskadenschicht oder Stylesheet-Ursprung angegebenen Werte.

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

## Konstituierende Eigenschaften

Diese Eigenschaft ist eine Kurznotation für alle CSS-Eigenschaften, außer für {{cssxref("unicode-bidi")}}, {{cssxref("direction")}} und [custom properties](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties).

## Syntax

```css
/* Global values */
all: initial;
all: inherit;
all: unset;
all: revert;
all: revert-layer;
```

Die `all`-Eigenschaft wird als einer der CSS-Global-Keyword-Werte angegeben. Beachten Sie, dass keiner dieser Werte die Eigenschaften {{cssxref("unicode-bidi")}} und {{cssxref("direction")}} beeinflusst.

### Werte

- {{cssxref("initial")}}
  - : Gibt an, dass alle Eigenschaften des Elements auf ihre [Initialwerte](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) geändert werden sollen.
- {{cssxref("inherit")}}
  - : Gibt an, dass alle Eigenschaften des Elements auf ihre [geerbten Werte](/de/docs/Web/CSS/CSS_cascade/Inheritance) geändert werden sollen.
- {{cssxref("unset")}}
  - : Gibt an, dass alle Eigenschaften des Elements auf ihre geerbten Werte geändert werden sollen, wenn sie standardmäßig geerbt werden, oder auf ihre Initialwerte, wenn nicht.
- {{cssxref("revert")}}
  - : Gibt ein Verhalten an, das vom Stylesheet-Ursprung abhängt, zu dem die Deklaration gehört:
    - Wenn die Regel zum [Author Origin](/de/docs/Web/CSS/CSS_cascade/Cascade#author_stylesheets) gehört, setzt der `revert`-Wert die [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) auf die Benutzerebene zurück, sodass die [spezifizierten Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#specified_value) berechnet werden, als ob keine Autor-Regeln für das Element angegeben wurden. Für Zwecke von `revert` umfasst der Autor-Ursprung die Override- und Animations-Ursprünge.
    - Wenn die Regel zum [User Origin](/de/docs/Web/CSS/CSS_cascade/Cascade#user_stylesheets) gehört, setzt der `revert`-Wert die [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) auf die User-Agent-Ebene zurück, sodass die [spezifizierten Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#specified_value) berechnet werden, als ob keine Regeln auf Autoren- oder Benutzerebene für das Element angegeben wurden.
    - Wenn die Regel zum [User-Agent Origin](/de/docs/Web/CSS/CSS_cascade/Cascade#user-agent_stylesheets) gehört, wirkt der `revert`-Wert wie `unset`.
- {{cssxref("revert-layer")}}
  - : Gibt an, dass alle Eigenschaften des Elements die Kaskade auf eine vorherige [Kaskadenschicht](/de/docs/Web/CSS/@layer) zurücksetzen sollen, falls eine existiert. Falls keine weitere Kaskadenschicht existiert, setzen die Eigenschaften des Elements auf die übereinstimmende Regel in der aktuellen Schicht oder auf einen vorherigen {{Glossary("Style_origin", "Style-Origin")}} zurück, falls eine existiert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel enthält die CSS-Datei Stile für das {{HTMLElement("blockquote")}}-Element sowie einige Stile für das übergeordnete `<body>`-Element. Verschiedene Ausgaben im Abschnitt Ergebnisse zeigen, wie die Formatierung des `<blockquote>`-Elements beeinflusst wird, wenn verschiedene Werte auf die `all`-Eigenschaft innerhalb der Blockquote-Regel angewendet werden.

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

Dies ist das Szenario, in dem keine `all`-Eigenschaft innerhalb der Blockquote-Regel gesetzt ist. Das {{HTMLElement("blockquote")}}-Element verwendet das Standard-Styling des Browsers, das ihm einen Rand sowie einen bestimmten Hintergrund- und Textfarbe gemäß dem Stylesheet verleiht. Es verhält sich auch wie ein _Block_-Element: Der folgende Text befindet sich darunter.

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

Mit der `all`-Eigenschaft, die in der Blockquote-Regel auf `initial` gesetzt ist, verwendet das {{HTMLElement("blockquote")}}-Element nicht mehr das Standard-Styling des Browsers: Es ist jetzt ein _Inline_-Element (Initialwert), seine [`background-color`](/de/docs/Web/CSS/background-color#formal_definition) ist `transparent` (Initialwert), seine [`font-size`](/de/docs/Web/CSS/font-size#formal_definition) ist `medium`, und seine [`color`](/de/docs/Web/CSS/color#formal_definition) ist `black` (Initialwert).

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

In diesem Fall verwendet das {{HTMLElement("blockquote")}}-Element nicht mehr das Standard-Styling des Browsers. Stattdessen erbt es Stilwerte vom übergeordneten {{HTMLElement("body")}}-Element: Es ist jetzt ein _Block_-Element (vererbter Wert), seine {{cssxref("background-color")}} ist `#F0F0F0` (vererbter Wert), seine {{cssxref("font-size")}} ist `small` (vererbter Wert), und seine {{cssxref("color")}} ist `blue` (vererbter Wert).

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

Wenn der `unset`-Wert auf die `all`-Eigenschaft in der Blockquote-Regel angewendet wird, verwendet das {{HTMLElement("blockquote")}}-Element nicht mehr das Standard-Styling des Browsers. Da [`background-color`](/de/docs/Web/CSS/background-color#formal_definition) eine nicht-vererbte Eigenschaft ist und [`font-size`](/de/docs/Web/CSS/font-size#formal_definition) und [`color`](/de/docs/Web/CSS/color#formal_definition) vererbte Eigenschaften sind, ist das `<blockquote>`-Element jetzt ein _Inline_-Element (Initialwert), seine {{cssxref("background-color")}} ist `transparent` (Initialwert), aber seine {{cssxref("font-size")}} ist immer noch `small` (vererbter Wert), und seine {{cssxref("color")}} ist `blue` (vererbter Wert).

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

Wenn die `all`-Eigenschaft in der Blockquote-Regel auf `revert` gesetzt ist, wird die Blockquote-Regel als nicht existent betrachtet und die Stil-Eigenschaftswerte werden von denen geerbt, die auf das übergeordnete Element `<body>` angewendet wurden. So wird das `<blockquote>`-Element als ein _Block_-Element mit {{cssxref("background-color")}} `#F0F0F0`, {{cssxref("font-size")}} `small` und {{cssxref("color")}} `blue` gestaltet - alle Werte, die von der `body`-Regel geerbt wurden.

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

Es sind keine Kaskadenschichten in der CSS-Datei definiert, daher erbt das `<blockquote>`-Element seinen Stil von der passenden `body`-Regel. Das `<blockquote>`-Element ist hier als _Block_-Element gestaltet, mit {{cssxref("background-color")}} `#F0F0F0`, {{cssxref("font-size")}} `small` und {{cssxref("color")}} `blue` - alle Werte, die von der `body`-Regel geerbt wurden. Dieses Szenario ist ein Beispiel für den Fall, wenn `all` auf `revert-layer` gesetzt ist, das gleiche Verhalten zeigt wie `all`, das auf `revert` gesetzt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

CSS-Global-Schlüsselwortwerte: {{cssxref("initial")}}, {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}}
