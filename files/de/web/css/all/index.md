---
title: all
slug: Web/CSS/all
l10n:
  sourceCommit: 9e521726ed1d605756b73a788eaa55498d540821
---

{{CSSRef}}

Die **`all`** [Shorthand-](/de/docs/Web/CSS/Shorthand_properties) [CSS-](/de/docs/Web/CSS) Eigenschaft setzt alle Eigenschaften eines Elements zurück, außer {{cssxref("unicode-bidi")}}, {{cssxref("direction")}} und [CSS Custom Properties](/de/docs/Web/CSS/Using_CSS_custom_properties). Sie kann Eigenschaften auf ihre initialen oder vererbten Werte setzen oder auf die Werte, die in einer anderen Kaskadenschicht oder im Stylesheet-Ursprung angegeben sind.

{{EmbedInteractiveExample("pages/css/all.html")}}

## Zusammensetzende Eigenschaften

Diese Eigenschaft ist ein Shorthand für alle CSS-Eigenschaften außer {{cssxref("unicode-bidi")}}, {{cssxref("direction")}} und [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Using_CSS_custom_properties).

## Syntax

```css
/* Global values */
all: initial;
all: inherit;
all: unset;
all: revert;
all: revert-layer;
```

Die `all` Eigenschaft wird als einer der CSS-Global-Keyword-Werte spezifiziert. Beachten Sie, dass keiner dieser Werte die Eigenschaften {{cssxref("unicode-bidi")}} und {{cssxref("direction")}} beeinflusst.

### Werte

- {{cssxref("initial")}}
  - : Gibt an, dass alle Eigenschaften des Elements auf ihre [initialen Werte](/de/docs/Web/CSS/initial_value) geändert werden sollen.
- {{cssxref("inherit")}}
  - : Gibt an, dass alle Eigenschaften des Elements auf ihre [vererbten Werte](/de/docs/Web/CSS/Inheritance) geändert werden sollen.
- {{cssxref("unset")}}
  - : Gibt an, dass alle Eigenschaften des Elements auf ihre vererbten Werte geändert werden, wenn sie standardmäßig vererbt werden, oder auf ihre initialen Werte, wenn nicht.
- {{cssxref("revert")}}
  - : Bestimmt ein Verhalten, das vom Stylesheet-Ursprung abhängt, zu dem die Deklaration gehört:
    - Wenn die Regel zum [Autor-Ursprung](/de/docs/Web/CSS/Cascade#author_stylesheets) gehört, setzt der `revert` Wert die [Kaskade](/de/docs/Web/CSS/Cascade) auf die Benutzerebene zurück, sodass die [spezifizierten Werte](/de/docs/Web/CSS/specified_value) berechnet werden, als ob keine Regeln auf Autorenebene für das Element spezifiziert wären. Für Zwecke von `revert` beinhaltet der Autor-Ursprung die Override- und Animations-Ursprünge.
    - Wenn die Regel zum [Benutzer-Ursprung](/de/docs/Web/CSS/Cascade#user_stylesheets) gehört, setzt der `revert` Wert die [Kaskade](/de/docs/Web/CSS/Cascade) auf die Benutzeragentenebene zurück, sodass die [spezifizierten Werte](/de/docs/Web/CSS/specified_value) berechnet werden, als ob keine Regeln auf Autoren- oder Benutzerebene für das Element spezifiziert wären.
    - Wenn die Regel zum [Benutzeragenten-Ursprung](/de/docs/Web/CSS/Cascade#user-agent_stylesheets) gehört, wirkt `revert` wie `unset`.
- {{cssxref("revert-layer")}}
  - : Gibt an, dass alle Eigenschaften des Elements die Kaskade auf eine vorherige [Kaskadenschicht](/de/docs/Web/CSS/@layer) zurücksetzen sollen, falls eine vorhanden ist. Wenn keine andere Kaskadenschicht existiert, werden die Eigenschaften des Elements zur passenden Regel in der aktuellen Schicht oder zu einem vorherigen [Stil-Ursprung](/de/docs/Glossary/Style_origin) zurückgesetzt, falls eine existiert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel enthält die CSS-Datei Stile für das {{HTMLElement("blockquote")}} Element zusätzlich zu einigen Stilen für das übergeordnete `<body>` Element. Verschiedene Ausgaben im Ergebnisabschnitt zeigen, wie die Stilisierung des `<blockquote>` Elements beeinflusst wird, wenn unterschiedliche Werte für die `all` Eigenschaft innerhalb der `blockquote` Regel angewendet werden.

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

### Ergebnis

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

Dies ist das Szenario, in dem keinerlei `all` Eigenschaft innerhalb der `blockquote` Regel festgelegt ist. Das {{HTMLElement("blockquote")}} Element verwendet die Standard-Stilisierung des Browsers, die ihm einen Rand verleiht, zusammen mit einem spezifischen Hintergrund und einer Textfarbe, die im Stylesheet angegeben sind. Es verhält sich außerdem als Blockelement: Der Text, der ihm folgt, befindet sich darunter.

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

Mit der `all` Eigenschaft auf `initial` in der `blockquote` Regel verwendet das {{HTMLElement("blockquote")}} Element die Standard-Stilisierung des Browsers nicht mehr: Es ist nun ein Inline-Element (Anfangswert), seine [`background-color`](/de/docs/Web/CSS/background-color#formal_definition) ist `transparent` (Anfangswert), seine [`font-size`](/de/docs/Web/CSS/font-size#formal_definition) ist `medium` und seine [`color`](/de/docs/Web/CSS/color#formal_definition) ist `black` (Anfangswert).

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

In diesem Fall verwendet das {{HTMLElement("blockquote")}} Element nicht die Standard-Stilisierung des Browsers. Stattdessen erbt es Stilwerte von seinem übergeordneten {{HTMLElement("body")}} Element: es ist nun ein Blockelement (geerbter Wert), seine {{cssxref("background-color")}} ist `#F0F0F0` (geerbter Wert), seine {{cssxref("font-size")}} ist `small` (geerbter Wert), und seine {{cssxref("color")}} ist `blue` (geerbter Wert).

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

Wenn der `unset` Wert auf die `all` Eigenschaft in der `blockquote` Regel angewendet wird, verwendet das {{HTMLElement("blockquote")}} Element nicht die Standard-Stilisierung des Browsers. Da [`background-color`](/de/docs/Web/CSS/background-color#formal_definition) eine nicht-vererbte Eigenschaft ist und [`font-size`](/de/docs/Web/CSS/font-size#formal_definition) und [`color`](/de/docs/Web/CSS/color#formal_definition) vererbte Eigenschaften sind, ist das `<blockquote>` Element jetzt ein Inline-Element (Anfangswert), seine {{cssxref("background-color")}} ist `transparent` (Anfangswert), aber seine {{cssxref("font-size")}} bleibt `small` (geerbter Wert) und seine {{cssxref("color")}} ist `blue` (geerbter Wert).

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

Wenn die `all` Eigenschaft in der `blockquote` Regel auf `revert` gesetzt wird, wird die `blockquote` Regel als nicht existent betrachtet und die Stilisierungseigenschaftswerte werden von denen des übergeordneten Elements `<body>` geerbt. So wird das `<blockquote>` Element als Blockelement gestaltet, mit {{cssxref("background-color")}} `#F0F0F0`, {{cssxref("font-size")}} `small` und {{cssxref("color")}} `blue` - alle Werte geerbt aus der `body` Regel.

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

Es sind keine Kaskadenschichten in der CSS-Datei definiert, daher erbt das `<blockquote>` Element seinen Stil aus der passenden `body` Regel. Das `<blockquote>` Element hier wird als Blockelement gestaltet, mit {{cssxref("background-color")}} `#F0F0F0`, {{cssxref("font-size")}} `small` und {{cssxref("color")}} `blue` - alle Werte geerbt aus der `body` Regel. Dieses Szenario ist ein Beispiel für den Fall, wenn `all` auf `revert-layer` gesetzt wird und sich genauso verhält wie wenn `all` auf `revert` gesetzt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

CSS Global-Keyword-Werte: {{cssxref("initial")}}, {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}}
