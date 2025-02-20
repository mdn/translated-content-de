---
title: all
slug: Web/CSS/all
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Die **`all`** [Shorthand](/de/docs/Web/CSS/Shorthand_properties)-[CSS](/de/docs/Web/CSS)-Eigenschaft setzt alle Eigenschaften eines Elements zurück, außer {{cssxref("unicode-bidi")}}, {{cssxref("direction")}} und [CSS Custom Properties](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties). Sie kann Eigenschaften auf ihre ursprünglichen oder geerbten Werte setzen oder auf Werte, die in einer anderen Cascade-Ebene oder einem anderen Stylesheet-Ursprung angegeben sind.

{{EmbedInteractiveExample("pages/css/all.html")}}

## Bestandteile der Eigenschaft

Diese Eigenschaft ist ein Shorthand für alle CSS-Eigenschaften, außer für {{cssxref("unicode-bidi")}}, {{cssxref("direction")}} und [Custom Properties](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties).

## Syntax

```css
/* Global values */
all: initial;
all: inherit;
all: unset;
all: revert;
all: revert-layer;
```

Die `all`-Eigenschaft wird mit einem der globalen CSS-Schlüsselwortwerte angegeben. Beachten Sie, dass keiner dieser Werte die Eigenschaften {{cssxref("unicode-bidi")}} und {{cssxref("direction")}} beeinflusst.

### Werte

- {{cssxref("initial")}}
  - : Gibt an, dass alle Eigenschaften des Elements auf ihre [ursprünglichen Werte](/de/docs/Web/CSS/CSS_cascade/initial_value) zurückgesetzt werden sollen.
- {{cssxref("inherit")}}
  - : Gibt an, dass alle Eigenschaften des Elements auf ihre [geerbten Werte](/de/docs/Web/CSS/CSS_cascade/Inheritance) gesetzt werden sollen.
- {{cssxref("unset")}}
  - : Gibt an, dass alle Eigenschaften des Elements auf ihre geerbten Werte gesetzt werden sollen, wenn sie standardmäßig vererbbar sind, oder auf ihre ursprünglichen Werte, wenn nicht.
- {{cssxref("revert")}}
  - : Gibt ein Verhalten basierend auf dem Stylesheet-Ursprung an, zu dem die Deklaration gehört:
    - Wenn die Regel dem [Autor-Ursprung](/de/docs/Web/CSS/CSS_cascade/Cascade#author_stylesheets) gehört, setzt der `revert`-Wert die [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) auf Benutzerebene zurück, sodass die [spezifizierten Werte](/de/docs/Web/CSS/CSS_cascade/specified_value) so berechnet werden, als ob keine Regeln auf der Autorenebene für das Element angegeben waren. Für `revert` umfasst der Autor-Ursprung auch die Override- und Animationsursprünge.
    - Wenn die Regel dem [Benutzer-Ursprung](/de/docs/Web/CSS/CSS_cascade/Cascade#user_stylesheets) gehört, setzt der `revert`-Wert die [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) auf die Benutzeragent-Ebene zurück, sodass die [spezifizierten Werte](/de/docs/Web/CSS/CSS_cascade/specified_value) so berechnet werden, als ob keine Regeln auf der Autoren- oder Benutzerebene für das Element angegeben waren.
    - Wenn die Regel dem [Benutzeragent-Ursprung](/de/docs/Web/CSS/CSS_cascade/Cascade#user-agent_stylesheets) gehört, verhält sich der `revert`-Wert wie `unset`.
- {{cssxref("revert-layer")}}
  - : Gibt an, dass alle Eigenschaften des Elements die Kaskade auf eine vorherige [Kaskadenschicht](/de/docs/Web/CSS/@layer) zurücksetzen sollen, falls eine existiert. Wenn keine andere Kaskadenschicht existiert, werden die Eigenschaften des Elements auf die übereinstimmende Regel in der aktuellen Schicht oder auf einen vorherigen {{Glossary("Style_origin", "Stil-Ursprung")}} zurückgesetzt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel enthält die CSS-Datei Styling für das {{HTMLElement("blockquote")}}-Element sowie Styling für das übergeordnete `<body>`-Element. In den Ergebnissen wird gezeigt, wie sich das Styling des `<blockquote>`-Elements ändert, wenn verschiedene Werte für die `all`-Eigenschaft in der `blockquote`-Regel angewendet werden.

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

In diesem Szenario wird im `blockquote`-Selektor keine `all`-Eigenschaft gesetzt. Das {{HTMLElement("blockquote")}}-Element verwendet das Standardstyling des Browsers, das ihm einen Rand, eine bestimmte Hintergrundfarbe und Textfarbe verleiht, wie im Stylesheet angegeben. Es verhält sich auch wie ein _Block_-Element: Der darauf folgende Text befindet sich darunter.

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

Mit der `all`-Eigenschaft, die im `blockquote`-Selektor auf `initial` gesetzt ist, verwendet das {{HTMLElement("blockquote")}}-Element nicht mehr das Standardstyling des Browsers: Es ist jetzt ein _Inline_-Element (ursprünglicher Wert), seine [`background-color`](/de/docs/Web/CSS/background-color#formal_definition) ist `transparent` (ursprünglicher Wert), seine [`font-size`](/de/docs/Web/CSS/font-size#formal_definition) ist `medium`, und seine [`color`](/de/docs/Web/CSS/color#formal_definition) ist `black` (ursprünglicher Wert).

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

In diesem Fall verwendet das {{HTMLElement("blockquote")}}-Element nicht das Standardstyling des Browsers. Stattdessen erbt es die Stilwerte vom übergeordneten {{HTMLElement("body")}}-Element: Es ist jetzt ein _Block_-Element (geerbter Wert), seine {{cssxref("background-color")}} ist `#F0F0F0` (geerbter Wert), seine {{cssxref("font-size")}} ist `small` (geerbter Wert), und seine {{cssxref("color")}} ist `blue` (geerbter Wert).

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

Wenn der Wert `unset` auf die `all`-Eigenschaft in der `blockquote`-Regel angewendet wird, verwendet das {{HTMLElement("blockquote")}}-Element nicht das Standardstyling des Browsers. Weil [`background-color`](/de/docs/Web/CSS/background-color#formal_definition) keine geerbte Eigenschaft ist und [`font-size`](/de/docs/Web/CSS/font-size#formal_definition) und [`color`](/de/docs/Web/CSS/color#formal_definition) geerbte Eigenschaften sind, ist das `<blockquote>`-Element jetzt ein _Inline_-Element (ursprünglicher Wert), seine {{cssxref("background-color")}} ist `transparent` (ursprünglicher Wert), aber seine {{cssxref("font-size")}} ist weiterhin `small` (geerbter Wert), und seine {{cssxref("color")}} ist `blue` (geerbter Wert).

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

Wenn die `all`-Eigenschaft in der `blockquote`-Regel auf `revert` gesetzt wird, wird die `blockquote`-Regel als nicht existent angesehen, und die Stilwerte werden aus den für das übergeordnete `<body>`-Element angewendeten Werten geerbt. So wird das `<blockquote>`-Element als _Block_-Element gestaltet, mit {{cssxref("background-color")}} `#F0F0F0`, {{cssxref("font-size")}} `small` und {{cssxref("color")}} `blue` - alle Werte geerbt aus der `body`-Regel.

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

In der CSS-Datei sind keine Kaskadenschichten definiert, daher übernimmt das `<blockquote>`-Element die Stilwerte aus der passenden `body`-Regel. Das `<blockquote>`-Element wird hier als _Block_-Element gestaltet, mit {{cssxref("background-color")}} `#F0F0F0`, {{cssxref("font-size")}} `small` und {{cssxref("color")}} `blue` - alle Werte geerbt aus der `body`-Regel. Dieses Szenario ist ein Beispiel dafür, dass `all`, wenn es auf `revert-layer` gesetzt ist, sich genauso verhält, wie wenn `all` auf `revert` gesetzt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

Globale CSS-Schlüsselwortwerte: {{cssxref("initial")}}, {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}}
