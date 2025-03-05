---
title: all
slug: Web/CSS/all
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die **`all`** [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft setzt alle Eigenschaften eines Elements zurück, außer {{cssxref("unicode-bidi")}}, {{cssxref("direction")}}, und [CSS Custom Properties](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties). Sie kann Eigenschaften auf ihre initialen oder vererbten Werte setzen oder auf die Werte, die in einer anderen Cascade-Ebene oder einem anderen Stylesheet-Ursprung angegeben sind.

{{EmbedInteractiveExample("pages/css/all.html")}}

## Bestandteile der Eigenschaften

Diese Eigenschaft ist eine Kurzform für alle CSS-Eigenschaften außer {{cssxref("unicode-bidi")}}, {{cssxref("direction")}}, und [benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties).

## Syntax

```css
/* Global values */
all: initial;
all: inherit;
all: unset;
all: revert;
all: revert-layer;
```

Die `all` Eigenschaft wird als einer der CSS globalen Schlüsselwort-Werte angegeben. Beachten Sie, dass keiner dieser Werte die Eigenschaften {{cssxref("unicode-bidi")}} und {{cssxref("direction")}} beeinflusst.

### Werte

- {{cssxref("initial")}}
  - : Gibt an, dass alle Eigenschaften des Elements auf ihre [Initialwerte](/de/docs/Web/CSS/CSS_cascade/initial_value) gesetzt werden sollen.
- {{cssxref("inherit")}}
  - : Gibt an, dass alle Eigenschaften des Elements auf ihre [geerbten Werte](/de/docs/Web/CSS/CSS_cascade/Inheritance) gesetzt werden sollen.
- {{cssxref("unset")}}
  - : Gibt an, dass alle Eigenschaften des Elements auf ihre geerbten Werte gesetzt werden sollen, wenn sie standardmäßig geerbt werden, oder auf ihre initialen Werte, wenn nicht.
- {{cssxref("revert")}}
  - : Gibt ein Verhalten an, das vom Stylesheet-Ursprung abhängt, zu dem die Deklaration gehört:
    - Wenn die Regel zum [Autorenursprung](/de/docs/Web/CSS/CSS_cascade/Cascade#author_stylesheets) gehört, setzt der `revert` Wert die [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) auf die Benutzerebene zurück, sodass die [angegebenen Werte](/de/docs/Web/CSS/CSS_cascade/specified_value) berechnet werden, als ob keine Autorenregeln für das Element festgelegt wären. Für Zwecke von `revert` umfasst der Autorenursprung die Override- und Animationsursprünge.
    - Wenn die Regel zum [Benutzerursprung](/de/docs/Web/CSS/CSS_cascade/Cascade#user_stylesheets) gehört, setzt der `revert` Wert die [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) auf die Benutzeragentenebene zurück, sodass die [angegebenen Werte](/de/docs/Web/CSS/CSS_cascade/specified_value) berechnet werden, als ob keine Autoren- oder Benutzerregeln für das Element festgelegt wären.
    - Wenn die Regel zum [Benutzeragentenursprung](/de/docs/Web/CSS/CSS_cascade/Cascade#user-agent_stylesheets) gehört, wirkt der `revert` Wert wie `unset`.
- {{cssxref("revert-layer")}}
  - : Gibt an, dass alle Eigenschaften des Elements die Kaskade auf eine vorherige [Cascade-Schicht](/de/docs/Web/CSS/@layer), wenn vorhanden, zurücksetzen sollen. Wenn keine andere Kaskadenschicht existiert, werden die Eigenschaften des Elements auf die übereinstimmende Regel, falls vorhanden, in der aktuellen Schicht oder auf einen vorherigen {{Glossary("Style_origin", "Stilorigin")}} zurückgesetzt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel enthält die CSS-Datei Styling für das {{HTMLElement("blockquote")}}-Element zusätzlich zu etwas Styling für das übergeordnete `<body>`-Element. Verschiedene Ausgaben im Abschnitt Ergebnisse demonstrieren, wie das Styling des `<blockquote>`-Elements beeinflusst wird, wenn im `blockquote`-Regel verschiedene Werte auf die `all` Eigenschaft angewendet werden.

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

Dies ist das Szenario, in dem keine `all` Eigenschaft im `blockquote`-Regel gesetzt ist. Das {{HTMLElement("blockquote")}}-Element verwendet das Standardstyling des Browsers, das ihm einen Rand gibt, zusammen mit einer spezifischen Hintergrundfarbe und Textfarbe, wie im Stylesheet angegeben. Es verhält sich außerdem als _Block_ Element: der nachfolgende Text befindet sich darunter.

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

Mit der `all` Eigenschaft auf `initial` in der `blockquote`-Regel gesetzt, verwendet das {{HTMLElement("blockquote")}}-Element nicht mehr das Standardstyling des Browsers: es ist jetzt ein _Inline_ Element (Anfangswert), seine [`background-color`](/de/docs/Web/CSS/background-color#formal_definition) ist `transparent` (Anfangswert), seine [`font-size`](/de/docs/Web/CSS/font-size#formal_definition) ist `medium`, und seine [`color`](/de/docs/Web/CSS/color#formal_definition) ist `black` (Anfangswert).

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

In diesem Fall verwendet das {{HTMLElement("blockquote")}}-Element nicht das Standardstyling des Browsers. Stattdessen erbt es Stilwerte von seinem übergeordneten {{HTMLElement("body")}}-Element: es ist jetzt ein _Block_ Element (vererbter Wert), seine {{cssxref("background-color")}} ist `#F0F0F0` (vererbter Wert), seine {{cssxref("font-size")}} ist `small` (vererbter Wert), und seine {{cssxref("color")}} ist `blue` (vererbter Wert).

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

Wenn der `unset` Wert auf die `all`-Eigenschaft in der `blockquote`-Regel angewendet wird, verwendet das {{HTMLElement("blockquote")}}-Element nicht das Standardstyling des Browsers. Da [`background-color`](/de/docs/Web/CSS/background-color#formal_definition) eine nicht vererbte Eigenschaft ist und [`font-size`](/de/docs/Web/CSS/font-size#formal_definition) und [`color`](/de/docs/Web/CSS/color#formal_definition) vererbte Eigenschaften sind, ist das `<blockquote>`-Element jetzt ein _Inline_ Element (Anfangswert), seine {{cssxref("background-color")}} ist `transparent` (Anfangswert), aber seine {{cssxref("font-size")}} ist immer noch `small` (vererbter Wert), und seine {{cssxref("color")}} ist `blue` (vererbter Wert).

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

Wenn die `all`-Eigenschaft in der `blockquote`-Regel auf `revert` gesetzt ist, wird die `blockquote`-Regel als nicht existent angesehen und die Stileigenschaftswerte werden von den auf das übergeordnete Element `<body>` angewendeten geerbt. So wird das `<blockquote>`-Element als _Block_ Element gestylt, mit {{cssxref("background-color")}} `#F0F0F0`, {{cssxref("font-size")}} `small`, und {{cssxref("color")}} `blue` - alle Werte geerbt aus der `body`-Regel.

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

Es sind keine Kaskadenschichten in der CSS-Datei definiert, daher erbt das `<blockquote>`-Element seinen Stil von der übereinstimmenden `body`-Regel. Das `<blockquote>`-Element wird hier als _Block_ Element gestylt, mit {{cssxref("background-color")}} `#F0F0F0`, {{cssxref("font-size")}} `small`, und {{cssxref("color")}} `blue` - alle Werte geerbt aus der `body`-Regel. Dieses Szenario ist ein Beispiel für den Fall, wenn `all` auf `revert-layer` gesetzt, sich so verhält wie wenn `all` auf `revert` gesetzt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

CSS globale Schlüsselwortwerte: {{cssxref("initial")}}, {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}}
