---
title: all
slug: Web/CSS/all
l10n:
  sourceCommit: 9e521726ed1d605756b73a788eaa55498d540821
---

{{CSSRef}}

Die **`all`** [Shorthand](/de/docs/Web/CSS/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft setzt alle Eigenschaften eines Elements zurück, außer {{cssxref("unicode-bidi")}}, {{cssxref("direction")}} und [CSS Custom Properties](/de/docs/Web/CSS/Using_CSS_custom_properties). Sie kann Eigenschaften auf ihre Anfangswerte oder geerbten Werte setzen oder auf die in einer anderen Kaskadenschicht oder im Ursprungsstil angegebenen Werte.

{{EmbedInteractiveExample("pages/css/all.html")}}

## Bestandeigenschaften

Diese Eigenschaft ist eine Kurzform für alle CSS-Eigenschaften, außer {{cssxref("unicode-bidi")}}, {{cssxref("direction")}} und [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Using_CSS_custom_properties).

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
  - : Gibt an, dass alle Eigenschaften des Elements auf ihre [Anfangswerte](/de/docs/Web/CSS/initial_value) gesetzt werden sollen.
- {{cssxref("inherit")}}
  - : Gibt an, dass alle Eigenschaften des Elements auf ihre [geerbten Werte](/de/docs/Web/CSS/Inheritance) gesetzt werden sollen.
- {{cssxref("unset")}}
  - : Gibt an, dass alle Eigenschaften des Elements auf ihre geerbten Werte gesetzt werden, wenn sie standardmäßig vererbt werden, oder auf ihre Anfangswerte, wenn nicht.
- {{cssxref("revert")}}
  - : Gibt ein Verhalten an, das vom Ursprungsstil abhängt, zu dem die Deklaration gehört:
    - Wenn die Regel dem [Autorursprung](/de/docs/Web/CSS/Cascade#author_stylesheets) angehört, setzt der `revert` Wert die [Kaskade](/de/docs/Web/CSS/Cascade) auf die Benutzerebene zurück, sodass die [spezifizierten Werte](/de/docs/Web/CSS/specified_value) berechnet werden, als ob keine Regeln auf Autorebene für das Element angegeben wären. Für Zwecke von `revert` umfasst der Autorursprung den Override- und Animationsursprung.
    - Wenn die Regel dem [Benutzerursprung](/de/docs/Web/CSS/Cascade#user_stylesheets) angehört, setzt der `revert` Wert die Kaskade auf die Benutzerebene zurück, sodass die spezifizierten Werte berechnet werden, als ob keine Regeln auf Autorebene oder Benutzerebene für das Element angegeben wären.
    - Wenn die Regel dem [Benutzeragent-Ursprung](/de/docs/Web/CSS/Cascade#user-agent_stylesheets) angehört, wirkt der `revert` Wert wie `unset`.
- {{cssxref("revert-layer")}}
  - : Gibt an, dass alle Eigenschaften des Elements die Kaskade auf eine vorherige [Kaskadenschicht](/de/docs/Web/CSS/@layer) zurücksetzen sollen, wenn eine existiert. Wenn keine andere Kaskadenschicht existiert, wird die Eigenschaft des Elements auf die passende Regel in der aktuellen Schicht oder auf einen vorherigen [Stilursprung](/de/docs/Glossary/Style_origin) zurückgesetzt, falls vorhanden.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel enthält die CSS-Datei Stylings für das {{HTMLElement("blockquote")}}-Element sowie etwas Styling für das übergeordnete `<body>`-Element. Verschiedene Ausgaben im Unterabschnitt Ergebnisse demonstrieren, wie das Styling des `<blockquote>`-Elements beeinflusst wird, wenn unterschiedliche Werte auf die `all` Eigenschaft innerhalb der `blockquote` Regel angewendet werden.

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

Dies ist das Szenario, in dem keine `all` Eigenschaft innerhalb der `blockquote` Regel gesetzt ist. Das {{HTMLElement("blockquote")}}-Element verwendet das Standardstyling des Browsers, das ihm einen Rand gibt, zusammen mit einem spezifischen Hintergrund und Textfarbe, wie im Stylesheet angegeben. Es verhält sich auch wie ein _Block_-Element: Der Text, der folgt, befindet sich darunter.

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

Wenn die `all` Eigenschaft in der `blockquote` Regel auf `initial` gesetzt ist, verwendet das {{HTMLElement("blockquote")}}-Element nicht mehr das Standardstyling des Browsers: Es ist jetzt ein _Inline_-Element (Anfangswert), seine [`background-color`](/de/docs/Web/CSS/background-color#formal_definition) ist `transparent` (Anfangswert), seine [`font-size`](/de/docs/Web/CSS/font-size#formal_definition) ist `medium`, und seine [`color`](/de/docs/Web/CSS/color#formal_definition) ist `black` (Anfangswert).

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

Wenn der Wert `unset` auf die `all` Eigenschaft in der `blockquote` Regel angewendet wird, verwendet das {{HTMLElement("blockquote")}}-Element nicht das Standardstyling des Browsers. Da [`background-color`](/de/docs/Web/CSS/background-color#formal_definition) eine nicht vererbte Eigenschaft ist und [`font-size`](/de/docs/Web/CSS/font-size#formal_definition) und [`color`](/de/docs/Web/CSS/color#formal_definition) vererbte Eigenschaften sind, ist das `<blockquote>`-Element jetzt ein _Inline_-Element (Anfangswert), seine {{cssxref("background-color")}} ist `transparent` (Anfangswert), aber seine {{cssxref("font-size")}} ist immer noch `small` (geerbter Wert), und seine {{cssxref("color")}} ist `blue` (geerbter Wert).

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

Wenn die `all` Eigenschaft in der `blockquote` Regel auf `revert` gesetzt ist, wird die `blockquote` Regel als nicht existent betrachtet und die Stil-Eigenschaftswerte werden von denen übernommen, die auf das übergeordnete `<body>`-Element angewendet sind. So wird das `<blockquote>`-Element als _Block_-Element gestaltet, mit {{cssxref("background-color")}} `#F0F0F0`, {{cssxref("font-size")}} `small` und {{cssxref("color")}} `blue` - alle Werte geerbt von der `body` Regel.

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

Es sind keine Kaskadenschichten in der CSS-Datei definiert, sodass das `<blockquote>`-Element seinen Stil von der passenden `body` Regel erbt. Das `<blockquote>`-Element wird hier als _Block_-Element gestaltet, mit {{cssxref("background-color")}} `#F0F0F0`, {{cssxref("font-size")}} `small` und {{cssxref("color")}} `blue` - alle Werte geerbt von der `body` Regel. Dieses Szenario ist ein Beispiel für den Fall, wenn `all` auf `revert-layer` gesetzt das gleiche Verhalten zeigt wie `all` auf `revert` gesetzt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

Globale CSS-Schlüsselwortwerte: {{cssxref("initial")}}, {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}}
