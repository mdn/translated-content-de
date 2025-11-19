---
title: all
slug: Web/CSS/Reference/Properties/all
l10n:
  sourceCommit: 1bfe630bd8538b64c97c7f684f5ee647a76c1a28
---

Die **`all`** [Kurznotation](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft setzt alle Eigenschaften eines Elements zurück, außer {{cssxref("unicode-bidi")}}, {{cssxref("direction")}}, und [CSS Custom Properties](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties). Sie kann Eigenschaften auf ihre initialen oder vererbten Werte setzen oder auf die Werte, die in einer anderen Cascade-Ebene oder einem anderen Stylesheet-Ursprung angegeben sind.

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

Diese Eigenschaft ist eine Kurznotation für alle CSS-Eigenschaften außer {{cssxref("unicode-bidi")}}, {{cssxref("direction")}}, und [benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties).

## Syntax

```css
/* Global values */
all: initial;
all: inherit;
all: unset;
all: revert;
all: revert-layer;
```

Die `all` Eigenschaft wird als einer der globalen CSS-Schlüsselwortwerte angegeben. Beachten Sie, dass keiner dieser Werte die Eigenschaften {{cssxref("unicode-bidi")}} und {{cssxref("direction")}} beeinflusst.

### Werte

- {{cssxref("initial")}}
  - : Gibt an, dass alle Eigenschaften des Elements auf ihre [Anfangswerte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) geändert werden sollen.
- {{cssxref("inherit")}}
  - : Gibt an, dass alle Eigenschaften des Elements auf ihre [geerbten Werte](/de/docs/Web/CSS/Guides/Cascade/Inheritance) geändert werden sollen.
- {{cssxref("unset")}}
  - : Gibt an, dass alle Eigenschaften des Elements auf ihre geerbten Werte geändert werden sollen, wenn sie standardmäßig geerbt werden, oder auf ihre Anfangswerte, wenn nicht.
- {{cssxref("revert")}}
  - : Gibt ein Verhalten an, das von dem Stylesheet-Ursprung abhängt, zu dem die Deklaration gehört:
    - Wenn die Regel zum [Autor-Ursprung](/de/docs/Web/CSS/Guides/Cascade/Introduction#author_stylesheets) gehört, setzt der `revert`-Wert die [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction) auf Benutzerebene zurück, sodass die [spezifizierten Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#specified_value) berechnet werden, als ob keine Autoren-Stufen-Regeln für das Element angegeben wären. Für `revert` gilt, dass der Autor-Ursprung die Override- und Animations-Ursprünge umfasst.
    - Wenn die Regel zum [Benutzerursprung](/de/docs/Web/CSS/Guides/Cascade/Introduction#user_stylesheets) gehört, setzt der `revert`-Wert die [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction) auf Benutzeragent-Ebene zurück, sodass die [spezifizierten Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#specified_value) berechnet werden, als ob keine Autoren- oder Benutzerebene-Regeln für das Element angegeben wären.
    - Wenn die Regel zum [Benutzeragent-Ursprung](/de/docs/Web/CSS/Guides/Cascade/Introduction#user-agent_stylesheets) gehört, verhält sich der `revert`-Wert wie `unset`.
- {{cssxref("revert-layer")}}
  - : Gibt an, dass alle Eigenschaften des Elements die Kaskade auf eine vorherige [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer) zurücksetzen sollen, falls eine existiert. Wenn keine andere Kaskadenschicht existiert, werden die Eigenschaften des Elements auf die passende Regel zurückgesetzt, falls vorhanden, in der aktuellen Schicht oder auf einen vorherigen {{Glossary("Style_origin", "Style-Ursprung")}}.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel enthält die CSS-Datei Styling für das {{HTMLElement("blockquote")}}-Element zusätzlich zu einigen Stilvorgaben für das `<body>`-Element des Elternteils. Verschiedene Ausgaben im Abschnitt Ergebnisse zeigen, wie das Styling des `<blockquote>`-Elements beeinflusst wird, wenn verschiedene Werte auf die `all` Eigenschaft innerhalb der `blockquote` Regel angewendet werden.

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

#### A. Keine `all` Eigenschaft

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

Dies ist das Szenario, in dem keine `all` Eigenschaft innerhalb der `blockquote` Regel gesetzt ist. Das {{HTMLElement("blockquote")}}-Element verwendet das Standard-Browser-Styling, das ihm einen Rand gibt, zusammen mit einem bestimmten Hintergrund und Textfarbe, wie im Stylesheet angegeben. Es verhält sich auch als ein _Block_ Element: der Text, der darauf folgt, befindet sich darunter.

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

Mit der `all` Eigenschaft auf `initial` in der `blockquote` Regel gesetzt, verwendet das {{HTMLElement("blockquote")}}-Element nicht mehr das Standard-Browser-Styling: es ist jetzt ein _Inline_ Element (Anfangswert), seine [`background-color`](/de/docs/Web/CSS/Reference/Properties/background-color#formal_definition) ist `transparent` (Anfangswert), seine [`font-size`](/de/docs/Web/CSS/Reference/Properties/font-size#formal_definition) ist `medium`, und seine [`color`](/de/docs/Web/CSS/Reference/Properties/color#formal_definition) ist `black` (Anfangswert).

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

In diesem Fall verwendet das {{HTMLElement("blockquote")}}-Element nicht das Standard-Browser-Styling. Stattdessen erbt es Stilwerte von seinem Elternteil {{HTMLElement("body")}}: es ist jetzt ein _Block_ Element (geerbter Wert), seine {{cssxref("background-color")}} ist `#F0F0F0` (geerbter Wert), seine {{cssxref("font-size")}} ist `small` (geerbter Wert), und seine {{cssxref("color")}} ist `blue` (geerbter Wert).

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

Wenn der `unset` Wert auf die `all` Eigenschaft in der `blockquote` Regel angewendet wird, verwendet das {{HTMLElement("blockquote")}}-Element nicht das Standard-Browser-Styling. Da [`background-color`](/de/docs/Web/CSS/Reference/Properties/background-color#formal_definition) eine nicht vererbte Eigenschaft ist und [`font-size`](/de/docs/Web/CSS/Reference/Properties/font-size#formal_definition) und [`color`](/de/docs/Web/CSS/Reference/Properties/color#formal_definition) vererbte Eigenschaften sind, ist das `<blockquote>` Element jetzt ein _Inline_ Element (Anfangswert), seine {{cssxref("background-color")}} ist `transparent` (Anfangswert), aber seine {{cssxref("font-size")}} ist immer noch `small` (geerbter Wert), und seine {{cssxref("color")}} ist `blue` (geerbter Wert).

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

Wenn die `all` Eigenschaft auf `revert` in der `blockquote` Regel gesetzt ist, wird die `blockquote` Regel als nicht existent betrachtet und die Stil-Eigenschaftswerte werden von denen geerbt, die auf das Elternelement `<body>` angewendet werden. So wird das `<blockquote>`-Element als _Block_ Element gestaltet, mit {{cssxref("background-color")}} `#F0F0F0`, {{cssxref("font-size")}} `small`, und {{cssxref("color")}} `blue` - alle Werte geerbt von der `body` Regel.

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

Es sind keine Kaskadenschichten in der CSS-Datei definiert, daher erbt das `<blockquote>`-Element seinen Stil von der passenden `body` Regel. Das `<blockquote>`-Element wird hier als _Block_ Element gestaltet, mit {{cssxref("background-color")}} `#F0F0F0`, {{cssxref("font-size")}} `small` und {{cssxref("color")}} `blue` - alle Werte, die von der `body` Regel geerbt wurden. Dieses Szenario ist ein Beispiel für den Fall, wenn `all` auf `revert-layer` gleich wie `all` auf `revert` gesetzt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

CSS globale Schlüsselwortwerte: {{cssxref("initial")}}, {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}}
