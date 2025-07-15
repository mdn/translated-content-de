---
title: :not()
slug: Web/CSS/:not
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`:not()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert Elemente, die nicht mit einer Liste von Selektoren übereinstimmen. Da sie bestimmte Elemente von der Auswahl ausschließt, ist sie als _Negations-Pseudoklasse_ bekannt.

{{InteractiveExample("CSS Demo: :not", "tabbed-shorter")}}

```css interactive-example
p:not(.irrelevant) {
  font-weight: bold;
}

p > strong,
p > b.important {
  color: crimson;
}

p > :not(strong, b.important) {
  color: darkmagenta;
}
```

```html interactive-example
<p>
  <b>Mars</b> is one of the most Earth-like planets. <b>Mars</b> day is almost
  the same as an Earth day, only <strong>37 minutes</strong> longer.
</p>

<p class="irrelevant">
  <b class="important">NASA</b>'s Jet <del>Momentum</del> Propulsion Laboratory
  is designing mission concepts to survive the <b>Venus</b> extreme temperatures
  and atmospheric pressure.
</p>
```

Die `:not()`-Pseudoklasse hat einige [Eigenheiten, Tricks und unerwartete Ergebnisse](#beschreibung), die Sie beachten sollten, bevor Sie sie verwenden.

## Syntax

```css-nolint
:not(<complex-selector-list>) {
  /* ... */
}
```

### Parameter

Die `:not()`-Pseudoklasse erfordert eine [Selektorliste](/de/docs/Web/CSS/CSS_selectors/Selector_structure#selector_list), eine durch Kommas getrennte Liste von einem oder mehreren Selektoren, als Argument. Die Liste darf keine [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) enthalten, aber alle anderen einfachen, kombinierten und komplexen Selektoren sind erlaubt.

## Beschreibung

Es gibt mehrere ungewöhnliche Effekte und Ergebnisse bei der Verwendung von `:not()`, die Sie beachten sollten:

- Mit dieser Pseudoklasse können nutzlose Selektoren geschrieben werden. Zum Beispiel stimmt `:not(*)` mit jedem Element überein, das kein Element ist, was offensichtlich Unsinn ist, wodurch die entsprechende Regel niemals angewendet wird.
- Diese Pseudoklasse kann die [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) einer Regel erhöhen. Zum Beispiel stimmt `#foo:not(#bar)` mit demselben Element überein wie das einfachere `#foo`, hat jedoch die höhere Spezifität von zwei `id`-Selektoren.
- Die Spezifität der `:not()`-Pseudoklasse wird durch die Spezifität des spezifischsten Selektors in ihrem kommaseparierten Argument von Selektoren ersetzt; sie bietet die gleiche Spezifität, als ob sie als [`:not(:is(argument))`](/de/docs/Web/CSS/:is) geschrieben worden wäre.
- `:not(.foo)` stimmt mit allem überein, was nicht `.foo` ist, _einschließlich {{HTMLElement("html")}} und {{HTMLElement("body")}}._
- Dieser Selektor wird alles auswählen, was "kein X" ist. Dies kann überraschend sein, wenn er mit [Nachkommkombinatoren](/de/docs/Web/CSS/Descendant_combinator) verwendet wird, da es mehrere Wege gibt, ein Zielobjekt auszuwählen. Zum Beispiel wird `body :not(table) a` weiterhin auf Links innerhalb eines {{HTMLElement("table")}} angewendet, da {{HTMLElement("tr")}}, {{HTMLElement("tbody")}}, {{HTMLElement("th")}}, {{HTMLElement("td")}}, {{HTMLElement("caption")}}, etc. alle mit dem `:not(table)`-Teil des Selektors übereinstimmen können. Um dies zu vermeiden, können Sie `body a:not(table a)` verwenden, das nur auf Links angewendet wird, die keine Nachfahren eines Tisches sind.
- Sie können mehrere Selektoren gleichzeitig negieren. Beispiel: `:not(.foo, .bar)` ist äquivalent zu `:not(.foo):not(.bar)`.
- Wenn ein an die `:not()`-Pseudoklasse übergebener Selektor ungültig oder nicht von dem Browser unterstützt wird, wird die gesamte Regel ungültig. Der effektive Weg, dieses Verhalten zu überwinden, besteht darin, die [`:is()`](/de/docs/Web/CSS/:is)-Pseudoklasse zu verwenden, die eine tolerante Selektorliste akzeptiert. Zum Beispiel wird `:not(.foo, :invalid-pseudo-class)` eine ganze Regel ungültig machen, aber `:not(:is(.foo, :invalid-pseudo-class))` wird mit jedem (_einschließlich {{HTMLElement("html")}} und {{HTMLElement("body")}}_) Element übereinstimmen, das nicht `.foo` ist.

## Beispiele

### Verwendung von :not() mit gültigen Selektoren

Dieses Beispiel zeigt einige Beispiele zur Verwendung von `:not()`.

#### HTML

```html
<p>I am a paragraph.</p>
<p class="fancy">I am so very fancy!</p>
<div>I am NOT a paragraph.</div>
<h2>
  <span class="foo">foo inside h2</span>
  <span class="bar">bar inside h2</span>
</h2>
```

#### CSS

```css
.fancy {
  text-shadow: 2px 2px 3px gold;
}

/* <p> elements that don't have a class `.fancy` */
p:not(.fancy) {
  color: green;
}

/* Elements that are not <p> elements */
body :not(p) {
  text-decoration: underline;
}

/* Elements that are not <div>s or `.fancy` */
body :not(div):not(.fancy) {
  font-weight: bold;
}

/* Elements that are not <div>s or `.fancy` */
body :not(div, .fancy) {
  text-decoration: overline underline;
}

/* Elements inside an <h2> that aren't a <span> with a class of `.foo` */
h2 :not(span.foo) {
  color: red;
}
```

#### Ergebnis

{{EmbedLiveSample('Using_not_with_valid_selectors', '100%', 320)}}

### Verwendung von :not() mit ungültigen Selektoren

Dieses Beispiel zeigt die Verwendung von `:not()` mit ungültigen Selektoren und wie man Ungültigkeit vermeidet.

#### HTML

```html
<p class="foo">I am a paragraph with .foo</p>
<p class="bar">I am a paragraph with .bar</p>
<div>I am a div without a class</div>
<div class="foo">I am a div with .foo</div>
<div class="bar">I am a div with .bar</div>
<div class="foo bar">I am a div with .foo and .bar</div>
```

#### CSS

```css
/* Invalid rule, does nothing */
p:not(.foo, :invalid-pseudo-class) {
  color: red;
  font-style: italic;
}

/* Select all <p> elements without the `foo` class */
p:not(:is(.foo, :invalid-pseudo-class)) {
  color: green;
  border-top: dotted thin currentcolor;
}

/* Select all <div> elements without the `foo` or the `bar` class */
div:not(.foo, .bar) {
  color: red;
  font-style: italic;
}

/* Select all <div> elements without the `foo` or the `bar` class */
div:not(:is(.foo, .bar)) {
  border-bottom: dotted thin currentcolor;
}
```

#### Ergebnis

{{EmbedLiveSample('Using_not_with_invalid_selectors', '100%', 320)}}

Die Regel `p:not(.foo, :invalid-pseudo-class)` ist ungültig, da sie einen ungültigen Selektor enthält. Die `:is()`-Pseudoklasse akzeptiert eine tolerante Selektorliste, sodass die Regel `:is(.foo, :invalid-pseudo-class)` gültig und äquivalent zu `:is(.foo)` ist. Daher ist die Regel `p:not(:is(.foo, :invalid-pseudo-class))` gültig und äquivalent zu `p:not(.foo)`.

Wenn `:invalid-pseudo-class` ein gültiger Selektor wäre, wären die ersten beiden Regeln oben immer noch äquivalent (die letzten beiden Regeln zeigen dies). Die Verwendung von `:is()` macht die Regel robuster.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes)
- [Leitfaden: Pseudoklassen und Pseudoelemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
- Andere funktionale CSS-Pseudoklassen:
  - {{cssxref(":has", ":has()")}}
  - {{cssxref(":is", ":is()")}}
  - {{cssxref(":where", ":where()")}}

- [Wie :not() mehrere Selektoren verknüpft](/en-US/blog/css-not-pseudo-multiple-selectors/) im MDN-Blog (2023)
