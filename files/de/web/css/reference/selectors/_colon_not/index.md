---
title: :not()
slug: Web/CSS/Reference/Selectors/:not
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Die **`:not()`** [CSS](/de/docs/Web/CSS) [Pseudo-Klasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert Elemente, die nicht mit einer Liste von Selektoren übereinstimmen. Da sie bestimmte Elemente von der Auswahl ausschließt, ist sie als _Negations-Pseudo-Klasse_ bekannt.

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

Die `:not()` Pseudo-Klasse hat einige [Eigenheiten, Tricks und unerwartete Ergebnisse](#beschreibung), derer Sie sich bewusst sein sollten, bevor Sie sie verwenden.

## Syntax

```css-nolint
:not(<complex-selector-list>) {
  /* ... */
}
```

### Parameter

Die `:not()` Pseudo-Klasse erfordert eine [Selektor-Liste](/de/docs/Web/CSS/CSS_selectors/Selector_structure#selector_list), eine durch Kommas getrennte Liste von einem oder mehreren Selektoren, als Argument. Die Liste darf kein [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) enthalten, aber alle anderen einfachen, zusammengesetzten und komplexen Selektoren sind erlaubt.

## Beschreibung

Es gibt mehrere ungewöhnliche Effekte und Ergebnisse bei der Verwendung von `:not()`, die Sie beachten sollten:

- Nutzlose Selektoren können mit dieser Pseudo-Klasse geschrieben werden. Zum Beispiel `:not(*)` trifft auf jedes Element zu, das kein Element ist, was offensichtlich Unsinn ist, daher wird die zugehörige Regel niemals angewendet.
- Diese Pseudo-Klasse kann die [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) einer Regel erhöhen. Zum Beispiel `#foo:not(#bar)` trifft auf dasselbe Element zu wie das einfachere `#foo`, hat aber die höhere Spezifität von zwei `id` Selektoren.
- Die Spezifität der `:not()` Pseudo-Klasse wird durch die Spezifität des spezifischsten Selektors in ihrem durch Komma getrennten Argument von Selektoren ersetzt; wobei die gleiche Spezifität gegeben ist, als ob sie geschrieben worden wäre [`:not(:is(argument))`](/de/docs/Web/CSS/Reference/Selectors/:is).
- `:not(.foo)` trifft auf alles zu, was nicht `.foo` ist, _einschließlich {{HTMLElement("html")}} und {{HTMLElement("body")}}._
- Dieser Selektor trifft auf alles zu, das "kein X" ist. Dies kann überraschend sein, wenn er mit [Nachkommens-Kombinatoren](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator) verwendet wird, da es mehrere Pfade gibt, um ein Zielelement auszuwählen. Zum Beispiel gilt `body :not(table) a` dennoch für Links innerhalb einer {{HTMLElement("table")}}, da {{HTMLElement("tr")}}, {{HTMLElement("tbody")}}, {{HTMLElement("th")}}, {{HTMLElement("td")}}, {{HTMLElement("caption")}}, usw. alle den `:not(table)` Teil des Selektors erfüllen können. Um dies zu vermeiden, können Sie stattdessen `body a:not(table a)` verwenden, was nur auf Links zutrifft, die keine Nachkommen einer Tabelle sind.
- Sie können mehrere Selektoren gleichzeitig negieren. Beispiel: `:not(.foo, .bar)` ist äquivalent zu `:not(.foo):not(.bar)`.
- Wenn ein Selektor, der an die `:not()` Pseudo-Klasse übergeben wird, ungültig oder vom Browser nicht unterstützt ist, wird die gesamte Regel ungültig. Der effektive Weg, dieses Verhalten zu überwinden, ist die Verwendung der [`:is()`](/de/docs/Web/CSS/Reference/Selectors/:is) Pseudo-Klasse, die eine nachsichtige Selektorliste akzeptiert. Zum Beispiel wird `:not(.foo, :invalid-pseudo-class)` eine ganze Regel ungültig machen, aber `:not(:is(.foo, :invalid-pseudo-class))` wird jedes Element (einschließlich {{HTMLElement("html")}} und {{HTMLElement("body")}}) treffen, das nicht `.foo` ist.

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

Dieses Beispiel zeigt die Verwendung von `:not()` mit ungültigen Selektoren und wie man die Ungültigmachung verhindert.

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

Die `p:not(.foo, :invalid-pseudo-class)` Regel ist ungültig, weil sie einen ungültigen Selektor enthält. Die `:is()` Pseudo-Klasse akzeptiert eine nachsichtige Selektorliste, daher ist die `:is(.foo, :invalid-pseudo-class)` Regel gültig und entspricht `:is(.foo)`. Somit ist die `p:not(:is(.foo, :invalid-pseudo-class))` Regel gültig und entspricht `p:not(.foo)`.

Wenn `:invalid-pseudo-class` ein gültiger Selektor wäre, wären die ersten beiden Regeln oben immer noch äquivalent (die letzten beiden Regeln zeigen das). Der Einsatz von `:is()` macht die Regel robuster.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Pseudo-Klassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
- [Leitfaden: Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
- Andere funktionale CSS-Pseudo-Klassen:
  - {{cssxref(":has", ":has()")}}
  - {{cssxref(":is", ":is()")}}
  - {{cssxref(":where", ":where()")}}

- [Wie :not() mehrere Selektoren verbindet](/en-US/blog/css-not-pseudo-multiple-selectors/) auf dem MDN Blog (2023)
