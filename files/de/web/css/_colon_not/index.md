---
title: ":not()"
slug: Web/CSS/:not
l10n:
  sourceCommit: 33a12980eb49cc795a41f15ec7a0181270ad3048
---

{{CSSRef}}

Die **`:not()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert Elemente, die nicht mit einer Liste von Selektoren übereinstimmen. Da sie verhindert, dass bestimmte Elemente ausgewählt werden, ist sie als _Negations-Pseudoklasse_ bekannt.

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

Die `:not()` Pseudoklasse hat einige [Eigenheiten, Tricks und unerwartete Ergebnisse](#beschreibung), die Sie kennen sollten, bevor Sie sie verwenden.

## Syntax

Die `:not()` Pseudoklasse benötigt als Argument eine [Selektorliste](/de/docs/Web/CSS/CSS_selectors/Selector_structure#selector_list), eine durch Kommas getrennte Liste von einem oder mehreren Selektoren. Die Liste darf kein [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) enthalten, aber alle anderen einfachen, zusammengesetzten und komplexen Selektoren sind erlaubt.

```css-nolint
:not(<complex-selector-list>) {
  /* ... */
}
```

## Beschreibung

Bei der Verwendung von `:not()` gibt es mehrere ungewöhnliche Effekte und Ergebnisse, die Sie beachten sollten:

- Sinnlose Selektoren können unter Verwendung dieser Pseudoklasse geschrieben werden. Zum Beispiel stimmt `:not(*)` mit jedem Element überein, das kein Element ist, was offensichtlich Unsinn ist, daher wird die zugehörige Regel niemals angewendet werden.
- Diese Pseudoklasse kann die [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) einer Regel erhöhen. Zum Beispiel wird `#foo:not(#bar)` dasselbe Element wie der einfachere `#foo` selektieren, hat aber die höhere Spezifität von zwei `id` Selektoren.
- Die Spezifität der `:not()` Pseudoklasse wird durch die Spezifität des spezifischsten Selektors in ihrem durch Kommas getrennten Argument ersetzt; es bietet die gleiche Spezifität, als wenn es geschrieben worden wäre als [`:not(:is(argument))`](/de/docs/Web/CSS/:is).
- `:not(.foo)` wird alles selektieren, das nicht `.foo` ist, _einschließlich {{HTMLElement("html")}} und {{HTMLElement("body")}}._
- Dieser Selektor wird alles selektieren, das "kein X" ist. Dies kann überraschend sein, wenn er mit [Nachfahrenkombinatoren](/de/docs/Web/CSS/Descendant_combinator) verwendet wird, da es mehrere Wege gibt, ein Ziel-Element zu selektieren. Zum Beispiel wird `body :not(table) a` trotzdem auf Links innerhalb eines {{HTMLElement("table")}} angewendet, da {{HTMLElement("tr")}}, {{HTMLElement("tbody")}}, {{HTMLElement("th")}}, {{HTMLElement("td")}}, {{HTMLElement("caption")}} usw. den `:not(table)` Teil des Selektors erfüllen können. Um dies zu vermeiden, können Sie stattdessen `body a:not(table a)` verwenden, welches nur auf Links angewendet wird, die keine Nachfahren eines Tables sind.
- Sie können mehrere Selektoren gleichzeitig negieren. Beispiel: `:not(.foo, .bar)` ist gleichbedeutend mit `:not(.foo):not(.bar)`.
- Wenn ein beliebiger Selektor, der an die `:not()` Pseudoklasse übergeben wird, ungültig oder vom Browser nicht unterstützt wird, wird die gesamte Regel ungültig. Der effektive Weg, dieses Verhalten zu umgehen, ist die Verwendung der [`:is()`](/de/docs/Web/CSS/:is) Pseudoklasse, die eine nachsichtige Selektorliste akzeptiert. Zum Beispiel wird `:not(.foo, :invalid-pseudo-class)` die gesamte Regel ungültig machen, aber `:not(:is(.foo, :invalid-pseudo-class))` wird alle (_einschließlich {{HTMLElement("html")}} und {{HTMLElement("body")}}_) Elemente selektieren, die nicht `.foo` sind.

## Beispiele

### Verwendung von :not() mit gültigen Selektoren

Dieses Beispiel zeigt einige Beispiele der Verwendung von `:not()`.

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

Dieses Beispiel zeigt die Verwendung von `:not()` mit ungültigen Selektoren und wie man eine Ungültigkeit verhindert.

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

Die Regel `p:not(.foo, :invalid-pseudo-class)` ist ungültig, weil sie einen ungültigen Selektor enthält. Die `:is()` Pseudoklasse akzeptiert eine nachsichtige Selektorliste, daher ist die Regel `:is(.foo, :invalid-pseudo-class)` gültig und gleichbedeutend mit `:is(.foo)`. Somit ist die Regel `p:not(:is(.foo, :invalid-pseudo-class))` gültig und gleichbedeutend mit `p:not(.foo)`.

Wäre `:invalid-pseudo-class` ein gültiger Selektor, wären die ersten beiden Regeln oben immer noch gleichwertig (die letzten beiden Regeln zeigen dies). Die Verwendung von `:is()` macht die Regel robuster.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes)
- [Lernen: Pseudoklassen und Pseudoelemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
- Andere funktionale CSS-Pseudoklassen:

  - {{cssxref(":has", ":has()")}}
  - {{cssxref(":is", ":is()")}}
  - {{cssxref(":where", ":where()")}}

- [Wie :not() mehrere Selektoren verknüpft](/en-US/blog/css-not-pseudo-multiple-selectors/) im MDN-Blog (2023)
