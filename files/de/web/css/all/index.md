---
title: all
slug: Web/CSS/all
l10n:
  sourceCommit: 9e521726ed1d605756b73a788eaa55498d540821
---

{{CSSRef}}

Die **`all`** [Shorthand](/de/docs/Web/CSS/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft setzt alle Eigenschaften eines Elements zurück, mit Ausnahme von {{cssxref("unicode-bidi")}}, {{cssxref("direction")}} und [CSS Custom Properties](/de/docs/Web/CSS/Using_CSS_custom_properties). Sie kann Eigenschaften auf ihre initialen oder geerbten Werte setzen oder auf die Werte, die in einer anderen Kaskadenschicht oder Ursprungsstilvorlage festgelegt sind.

{{EmbedInteractiveExample("pages/css/all.html")}}

## Bestandeigenschaften

Diese Eigenschaft ist eine Kurzform für alle CSS-Eigenschaften außer {{cssxref("unicode-bidi")}}, {{cssxref("direction")}} und [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Using_CSS_custom_properties).

## Syntax

```css
/* Globale Werte */
all: initial;
all: inherit;
all: unset;
all: revert;
all: revert-layer;
```

Die `all`-Eigenschaft wird als einer der CSS-Globalschlüsselwortwerte angegeben. Beachten Sie, dass keiner dieser Werte die Eigenschaften {{cssxref("unicode-bidi")}} und {{cssxref("direction")}} beeinflusst.

### Werte

- {{cssxref("initial")}}
  - : Gibt an, dass alle Eigenschaften des Elements auf ihre [initialen Werte](/de/docs/Web/CSS/initial_value) gesetzt werden sollen.
- {{cssxref("inherit")}}
  - : Gibt an, dass alle Eigenschaften des Elements auf ihre [geerbten Werte](/de/docs/Web/CSS/Inheritance) gesetzt werden sollen.
- {{cssxref("unset")}}
  - : Gibt an, dass alle Eigenschaften des Elements auf ihre geerbten Werte gesetzt werden, wenn sie standardmäßig erben, oder auf ihre initialen Werte, wenn nicht.
- {{cssxref("revert")}}
  - : Gibt ein Verhalten an, das vom Ursprung des Stylesheets abhängt, zu dem die Deklaration gehört:
    - Wenn die Regel zum [Autor-Ursprung](/de/docs/Web/CSS/Cascade#author_stylesheets) gehört, setzt der Wert `revert` die [Kaskade](/de/docs/Web/CSS/Cascade) auf die Benutzerebene zurück, so dass die [festgelegten Werte](/de/docs/Web/CSS/specified_value) berechnet werden, als ob keine Autoren-Ebene-Regeln für das Element festgelegt wurden. Für `revert`-Zwecke umfasst der Autoren-Ursprung die Override- und Animations-Ursprünge.
    - Wenn die Regel zum [Benutzer-Ursprung](/de/docs/Web/CSS/Cascade#user_stylesheets) gehört, setzt der Wert `revert` die Kaskade auf die Benutzeragent-Ebene zurück, so dass die festgelegten Werte berechnet werden, als ob keine Autoren-Ebene- oder Benutzer-Ebene-Regeln für das Element festgelegt wurden.
    - Wenn die Regel zum [Benutzeragent-Ursprung](/de/docs/Web/CSS/Cascade#user-agent_stylesheets) gehört, verhält sich der Wert `revert` wie `unset`.
- {{cssxref("revert-layer")}}
  - : Gibt an, dass alle Eigenschaften des Elements die Kaskade zu einem vorherigen [Kaskadenschicht](/de/docs/Web/CSS/@layer) zurücksetzen sollen, falls eine existiert. Wenn keine andere Kaskadenschicht existiert, werden die Eigenschaften des Elements auf die passende Regel, falls vorhanden, in der aktuellen Schicht zurückgesetzt oder auf einen früheren [Style-Ursprung](/de/docs/Glossary/Style_origin).

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel enthält die CSS-Datei Styling für das {{HTMLElement("blockquote")}}-Element zusätzlich zu einigen Stylings für das übergeordnete `<body>`-Element. Verschiedene Ausgaben im Abschnitt Ergebnisse demonstrieren, wie das Styling des `<blockquote>`-Elements beeinflusst wird, wenn unterschiedliche Werte auf die `all`-Eigenschaft innerhalb der `blockquote`-Regel angewendet werden.

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

Dies ist das Szenario, in dem keine `all`-Eigenschaft innerhalb der `blockquote`-Regel festgelegt ist. Das {{HTMLElement("blockquote")}}-Element verwendet das Standardstyling des Browsers, das ihm einen Rand gibt, zusammen mit einer spezifischen Hintergrund- und Textfarbe, wie im Stylesheet angegeben. Es verhält sich auch wie ein _Block_-Element: Der nachfolgende Text befindet sich darunter.

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

Mit der `all`-Eigenschaft auf `initial` in der `blockquote`-Regel verwendet das {{HTMLElement("blockquote")}}-Element nicht mehr das Standardstyling des Browsers: Es ist jetzt ein _Inline_-Element (initialer Wert), sein [`background-color`](/de/docs/Web/CSS/background-color#formal_definition) ist `transparent` (initialer Wert), seine [`font-size`](/de/docs/Web/CSS/font-size#formal_definition) ist `medium`, und seine [`color`](/de/docs/Web/CSS/color#formal_definition) ist `black` (initialer Wert).

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

In diesem Fall verwendet das {{HTMLElement("blockquote")}}-Element nicht das Standardstyling des Browsers. Stattdessen erbt es Stilwerte von seinem übergeordneten {{HTMLElement("body")}}-Element: Es ist jetzt ein _Block_-Element (geerbter Wert), seine {{cssxref("background-color")}} ist `#F0F0F0` (geerbter Wert), seine {{cssxref("font-size")}} ist `small` (geerbter Wert), und seine {{cssxref("color")}} ist `blue` (geerbter Wert).

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

Wenn der `unset`-Wert auf die `all`-Eigenschaft in der `blockquote`-Regel angewendet wird, verwendet das {{HTMLElement("blockquote")}}-Element nicht das Standardstyling des Browsers. Da [`background-color`](/de/docs/Web/CSS/background-color#formal_definition) eine nicht-geerbte Eigenschaft ist und [`font-size`](/de/docs/Web/CSS/font-size#formal_definition) und [`color`](/de/docs/Web/CSS/color#formal_definition) geerbte Eigenschaften sind, ist das `<blockquote>`-Element jetzt ein _Inline_-Element (initialer Wert), seine {{cssxref("background-color")}} ist `transparent` (initialer Wert), aber seine {{cssxref("font-size")}} ist immer noch `small` (geerbter Wert), und seine {{cssxref("color")}} ist `blue` (geerbter Wert).

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

Wenn die `all`-Eigenschaft in der `blockquote`-Regel auf `revert` gesetzt ist, wird die `blockquote`-Regel als nicht-existent betrachtet und die Stylingwerte werden von denen des übergeordneten Elements `<body>` geerbt. So wird das `<blockquote>`-Element als _Block_-Element gestylt, mit {{cssxref("background-color")}} `#F0F0F0`, {{cssxref("font-size")}} `small`, und {{cssxref("color")}} `blue` - alle Werte, die von der `body`-Regel geerbt wurden.

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

Es sind keine Kaskadenschichten in der CSS-Datei definiert, daher erbt das `<blockquote>`-Element seinen Stil von der passenden `body`-Regel. Das `<blockquote>`-Element ist hier als _Block_-Element gestylt, mit {{cssxref("background-color")}} `#F0F0F0`, {{cssxref("font-size")}} `small`, und {{cssxref("color")}} `blue` - alle Werte, die von der `body`-Regel geerbt wurden. Dieses Szenario ist ein Beispiel für den Fall, wenn `all` auf `revert-layer` gesetzt das gleiche Verhalten zeigt wie `all` auf `revert` gesetzt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

CSS globale Schlüsselwortwerte: {{cssxref("initial")}}, {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}}
