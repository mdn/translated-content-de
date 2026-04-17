---
title: "`:not()` CSS-Pseudoklasse"
short-title: :not()
slug: Web/CSS/Reference/Selectors/:not
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

Die **`:not()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert Elemente, die nicht mit einer Liste von Selektoren übereinstimmen. Da sie verhindert, dass bestimmte Elemente ausgewählt werden, ist sie als _Negations-Pseudoklasse_ bekannt.

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

Die `:not()`-Pseudoklasse erfordert eine [Selektorliste](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#selector_list), eine durch Kommas getrennte Liste von einem oder mehreren Selektoren, als Argument. Die Liste darf kein [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) enthalten, aber alle anderen einfachen, zusammengesetzten und komplexen Selektoren sind erlaubt.

## Beschreibung

Es gibt mehrere ungewöhnliche Effekte und Ergebnisse bei der Verwendung von `:not()`, die Sie beachten sollten:

- Nutzlose Selektoren können mit dieser Pseudoklasse geschrieben werden. Zum Beispiel stimmt `:not(*)` mit jedem Element überein, das kein Element ist, was offensichtlich Unsinn ist, daher wird die begleitende Regel nie angewendet.
- Diese Pseudoklasse kann die [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) einer Regel erhöhen. Zum Beispiel wird `#foo:not(#bar)` mit demselben Element wie das einfachere `#foo` übereinstimmen, hat jedoch die höhere Spezifität von zwei `id`-Selektoren.
- Die Spezifität der `:not()`-Pseudoklasse wird durch die Spezifität des spezifischsten Selektors in ihrem durch Kommas getrennten Argument von Selektoren ersetzt; sie bietet dieselbe Spezifität, als wäre sie geschrieben [`:not(:is(argument))`](/de/docs/Web/CSS/Reference/Selectors/:is).
- `:not(.foo)` stimmt mit allem überein, das nicht `.foo` ist, _einschließlich {{HTMLElement("html")}} und {{HTMLElement("body")}}_.
- Dieser Selektor wird mit allem "nicht X" übereinstimmen. Dies kann überraschend sein, wenn er mit [Nachfahren-Kombinatoren](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator) verwendet wird, da es mehrere Wege gibt, ein Ziel-Element auszuwählen. Zum Beispiel gilt `body :not(table) a` immer noch für Links innerhalb eines {{HTMLElement("table")}}, da {{HTMLElement("tr")}}, {{HTMLElement("tbody")}}, {{HTMLElement("th")}}, {{HTMLElement("td")}}, {{HTMLElement("caption")}}, usw. alle mit dem Teil `:not(table)` des Selektors übereinstimmen können. Um dies zu vermeiden, können Sie stattdessen `body a:not(table a)` verwenden, das nur für Links gilt, die nicht Nachfahren eines Tisches sind.
- Sie können mehrere Selektoren gleichzeitig negieren. Beispiel: `:not(.foo, .bar)` entspricht `:not(.foo):not(.bar)`.
- Wenn ein nicht unterstützter Selektor an die `:not()`-Pseudoklasse übergeben wird, wird die gesamte Regel ungültig. Der effektive Weg, dieses Verhalten zu überwinden, ist die Verwendung der [`:is()`](/de/docs/Web/CSS/Reference/Selectors/:is) Pseudoklasse, die eine tolerante Selektorliste akzeptiert. Zum Beispiel wird `:not(.foo, :invalid-pseudo-class)` eine ganze Regel ungültig machen, aber `:not(:is(.foo, :invalid-pseudo-class))` wird mit jedem Element (_einschließlich {{HTMLElement("html")}} und {{HTMLElement("body")}}_) übereinstimmen, das nicht `.foo` ist.

## Beispiele

### Verwendung von :not() mit gültigen Selektoren

Dieses Beispiel zeigt einige Möglichkeiten der Verwendung von `:not()`.

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

Dieses Beispiel zeigt die Verwendung von `:not()` mit ungültigen Selektoren und wie man die Ungültigkeit verhindert.

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
  border-top: dotted thin currentColor;
}

/* Select all <div> elements without the `foo` or the `bar` class */
div:not(.foo, .bar) {
  color: red;
  font-style: italic;
}

/* Select all <div> elements without the `foo` or the `bar` class */
div:not(:is(.foo, .bar)) {
  border-bottom: dotted thin currentColor;
}
```

#### Ergebnis

{{EmbedLiveSample('Using_not_with_invalid_selectors', '100%', 320)}}

Die Regel `p:not(.foo, :invalid-pseudo-class)` ist ungültig, weil sie einen ungültigen Selektor enthält. Die `:is()`-Pseudoklasse akzeptiert eine tolerante Selektorliste, sodass die Regel `:is(.foo, :invalid-pseudo-class)` gültig und äquivalent zu `:is(.foo)` ist. Daher ist die Regel `p:not(:is(.foo, :invalid-pseudo-class))` gültig und entspricht `p:not(.foo)`.

Wenn `:invalid-pseudo-class` ein gültiger Selektor wäre, wären die ersten beiden Regeln oben immer noch äquivalent (die letzten beiden Regeln zeigen dies). Die Verwendung von `:is()` macht die Regel robuster.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
- [Lernen: Pseudoklassen und Pseudoelemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
- Andere funktionale CSS-Pseudoklassen:
  - {{cssxref(":has()")}}
  - {{cssxref(":is()")}}
  - {{cssxref(":where()")}}

- [Wie :not() mehrere Selektoren verknüpft](/en-US/blog/css-not-pseudo-multiple-selectors/) auf dem MDN-Blog (2023)
