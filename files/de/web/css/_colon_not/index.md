---
title: :not()
slug: Web/CSS/:not
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`:not()`** [CSS](/de/docs/Web/CSS)-[Pseudo-Klasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert Elemente, die nicht einer Liste von Selektoren entsprechen. Da sie verhindert, dass bestimmte Elemente ausgewählt werden, ist sie als _Negations-Pseudo-Klasse_ bekannt.

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

Die `:not()` Pseudo-Klasse besitzt mehrere [Eigenheiten, Tricks und unerwartete Ergebnisse](#beschreibung), die Sie kennen sollten, bevor Sie sie verwenden.

## Syntax

Die `:not()` Pseudo-Klasse erfordert eine [Selektoren-Liste](/de/docs/Web/CSS/CSS_selectors/Selector_structure#selector_list), eine durch Kommata getrennte Liste von einem oder mehreren Selektoren, als Argument. Die Liste darf keine [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) enthalten, aber alle anderen einfachen, zusammengesetzten und komplexen Selektoren sind erlaubt.

```css-nolint
:not(<complex-selector-list>) {
  /* ... */
}
```

## Beschreibung

Es gibt mehrere ungewöhnliche Effekte und Ergebnisse bei der Verwendung von `:not()`, die Sie bei der Verwendung berücksichtigen sollten:

- Nutzlose Selektoren können mit dieser Pseudo-Klasse geschrieben werden. Zum Beispiel, `:not(*)` entspricht jedem Element, das kein Element ist, was offensichtlich Unsinn ist, sodass die begleitende Regel niemals angewendet wird.
- Diese Pseudo-Klasse kann die [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) einer Regel erhöhen. Zum Beispiel, `#foo:not(#bar)` wird dasselbe Element ansprechen wie das einfachere `#foo`, hat aber die höhere Spezifität von zwei `id` Selektoren.
- Die Spezifität der `:not()` Pseudo-Klasse wird durch die Spezifität des spezifischsten Selektors in ihrem durch Kommata getrennten Argument von Selektoren ersetzt; sie bietet die gleiche Spezifität, als ob sie geschrieben worden wäre [`:not(:is(argument))`](/de/docs/Web/CSS/:is).
- `:not(.foo)` wird alles, was nicht `.foo` ist, ansprechen, _einschließlich {{HTMLElement("html")}} und {{HTMLElement("body")}}._
- Dieser Selektor wird alles ansprechen, das "kein X" ist. Dies kann überraschend sein, wenn er mit [Nachfahrenkombinatoren](/de/docs/Web/CSS/Descendant_combinator) verwendet wird, da es mehrere Wege gibt, ein Ziel-Element auszuwählen. Zum Beispiel wird `body :not(table) a` immer noch auf Links innerhalb eines {{HTMLElement("table")}} angewendet, da {{HTMLElement("tr")}}, {{HTMLElement("tbody")}}, {{HTMLElement("th")}}, {{HTMLElement("td")}}, {{HTMLElement("caption")}}, etc. alle den `:not(table)` Teil des Selektors treffen können. Um dies zu vermeiden, können Sie stattdessen `body a:not(table a)` verwenden, welches nur auf Links angewendet wird, die keine Nachfahren einer Tabelle sind.
- Sie können mehrere Selektoren gleichzeitig negieren. Beispiel: `:not(.foo, .bar)` ist gleichwertig zu `:not(.foo):not(.bar)`.
- Wenn ein Selektor, der an die `:not()` Pseudo-Klasse übergeben wird, ungültig oder vom Browser nicht unterstützt wird, wird die gesamte Regel ungültig. Der effektive Weg, um dieses Verhalten zu umgehen, ist die Verwendung der Pseudo-Klasse [`:is()`](/de/docs/Web/CSS/:is), die eine nachsichtige Selektoren-Liste akzeptiert. Zum Beispiel wird `:not(.foo, :invalid-pseudo-class)` eine ganze Regel ungültig machen, aber `:not(:is(.foo, :invalid-pseudo-class))` wird jedes Element (einschließlich {{HTMLElement("html")}} und {{HTMLElement("body")}}) ansprechen, das nicht `.foo` ist.

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

Dieses Beispiel zeigt die Verwendung von `:not()` mit ungültigen Selektoren und wie deren Ungültigmachung verhindert werden kann.

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

Die Regel `p:not(.foo, :invalid-pseudo-class)` ist ungültig, da sie einen ungültigen Selektor enthält. Die `:is()` Pseudo-Klasse akzeptiert eine nachsichtige Selektoren-Liste, sodass die Regel `:is(.foo, :invalid-pseudo-class)` gültig und gleichwertig zu `:is(.foo)` ist. Somit ist die Regel `p:not(:is(.foo, :invalid-pseudo-class))` gültig und gleichwertig zu `p:not(.foo)`.

Wenn `:invalid-pseudo-class` ein gültiger Selektor wäre, wären die ersten beiden Regeln oben immer noch gleichwertig (die letzten beiden Regeln zeigen das). Die Verwendung von `:is()` macht die Regel robuster.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes)
- [Leitfaden: Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
- Andere funktionelle CSS-Pseudo-Klassen:

  - {{cssxref(":has", ":has()")}}
  - {{cssxref(":is", ":is()")}}
  - {{cssxref(":where", ":where()")}}

- [Wie :not() mehrere Selektoren verbindet](/en-US/blog/css-not-pseudo-multiple-selectors/) im MDN-Blog (2023)
