---
title: CSS-Pseudoklasse `:not()`
short-title: :not()
slug: Web/CSS/Reference/Selectors/:not
l10n:
  sourceCommit: 3fb9ea0187429234b47cb0385a9515a69757fe63
---

Die **`:not()`**-[CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert Elemente, die nicht mit einer Liste von Selektoren übereinstimmen. Da sie verhindert, dass bestimmte Elemente ausgewählt werden, wird sie als _Negations-Pseudoklasse_ bezeichnet.

Die Pseudoklasse `:not()` weist eine Reihe von [Eigenheiten, Tricks und unerwarteten Ergebnissen](#beschreibung) auf, die Sie vor ihrer Verwendung kennen sollten.

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

## Syntax

```css-nolint
:not(<complex-selector-list>) {
  /* ... */
}
```

### Parameter

Die Pseudoklasse `:not()` erfordert als Argument eine [Selektorliste](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#selector_list), also eine durch Kommas getrennte Liste aus einem oder mehreren Selektoren. Die Liste darf kein [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) enthalten, aber alle anderen einfachen, zusammengesetzten und komplexen Selektoren sind zulässig.

## Beschreibung

Bei der Verwendung von `:not()` gibt es mehrere ungewöhnliche Effekte und Ergebnisse, die Sie beachten sollten:

- Mit dieser Pseudoklasse können nutzlose Selektoren geschrieben werden. Beispielsweise entspricht `:not(*)` jedem Element, das kein Element ist, was offensichtlich unsinnig ist; daher wird die zugehörige Regel niemals angewendet.
- Diese Pseudoklasse kann die [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) einer Regel erhöhen. Beispielsweise entspricht `#foo:not(#bar)` demselben Element wie das einfachere `#foo`, besitzt jedoch die höhere Spezifität von zwei `id`-Selektoren.
- Die Spezifität der Pseudoklasse `:not()` wird durch die Spezifität des spezifischsten Selektors in ihrem durch Kommas getrennten Selektorargument ersetzt; sie hat damit dieselbe Spezifität, als wäre [`:not(:is(argument))`](/de/docs/Web/CSS/Reference/Selectors/:is) geschrieben worden.
- `:not(.foo)` entspricht allem, was nicht `.foo` ist, _einschließlich {{HTMLElement("html")}} und {{HTMLElement("body")}}._
- Dieser Selektor entspricht allem, was „kein X“ ist. Dies kann bei der Verwendung mit [Nachfahren-Kombinatoren](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator) überraschend sein, da es mehrere Wege gibt, ein Zielelement auszuwählen. Beispielsweise wird `body :not(table) a` weiterhin auf Links innerhalb eines {{HTMLElement("table")}} angewendet, da {{HTMLElement("tr")}}, {{HTMLElement("tbody")}}, {{HTMLElement("th")}}, {{HTMLElement("td")}}, {{HTMLElement("caption")}} usw. alle dem Teil `:not(table)` des Selektors entsprechen können. Um dies zu vermeiden, können Sie stattdessen `body a:not(table a)` verwenden, das nur auf Links angewendet wird, die keine Nachfahren einer Tabelle sind.
- Sie können mehrere Selektoren gleichzeitig negieren. Beispiel: `:not(.foo, .bar)` entspricht `:not(.foo):not(.bar)`.
- Wenn ein an die Pseudoklasse `:not()` übergebener Selektor ungültig ist oder vom Browser nicht unterstützt wird, wird die gesamte Regel ungültig. Eine wirksame Methode, dieses Verhalten zu umgehen, ist die Verwendung der Pseudoklasse [`:is()`](/de/docs/Web/CSS/Reference/Selectors/:is), die eine fehlertolerante Selektorliste akzeptiert. Beispielsweise macht `:not(.foo, :invalid-pseudo-class)` eine gesamte Regel ungültig, aber `:not(:is(.foo, :invalid-pseudo-class))` entspricht jedem (_einschließlich {{HTMLElement("html")}} und {{HTMLElement("body")}}_) Element, das nicht `.foo` ist.

## Beispiele

### Verwendung von :not() mit gültigen Selektoren

Dieses Beispiel zeigt einige Möglichkeiten zur Verwendung von `:not()`.

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

Dieses Beispiel zeigt die Verwendung von `:not()` mit ungültigen Selektoren und wie eine Ungültigmachung verhindert werden kann.

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

Die Regel `p:not(.foo, :invalid-pseudo-class)` ist ungültig, weil sie einen ungültigen Selektor enthält. Die Pseudoklasse `:is()` akzeptiert eine fehlertolerante Selektorliste, daher ist die Regel `:is(.foo, :invalid-pseudo-class)` gültig und entspricht `:is(.foo)`. Somit ist die Regel `p:not(:is(.foo, :invalid-pseudo-class))` gültig und entspricht `p:not(.foo)`.

Wäre `:invalid-pseudo-class` ein gültiger Selektor, wären die ersten beiden obigen Regeln weiterhin gleichwertig (die letzten beiden Regeln veranschaulichen dies). Die Verwendung von `:is()` macht die Regel robuster.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
- [Lernen: Pseudoklassen und Pseudoelemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
- Weitere funktionale CSS-Pseudoklassen:
  - {{cssxref(":has()")}}
  - {{cssxref(":is()")}}
  - {{cssxref(":where()")}}

- [Wie :not() mehrere Selektoren verkettet](/en-US/blog/css-not-pseudo-multiple-selectors/) im MDN-Blog (2023)
