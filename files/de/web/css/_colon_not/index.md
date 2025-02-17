---
title: ":not()"
slug: Web/CSS/:not
l10n:
  sourceCommit: a29769d6d10261f771321eb60f3990029c160924
---

{{CSSRef}}

Die **`:not()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert Elemente, die nicht mit einer Liste von Selektoren übereinstimmen. Da sie verhindert, dass bestimmte Elemente ausgewählt werden, wird sie als _Negations-Pseudoklasse_ bezeichnet.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-not.html", "tabbed-shorter")}}

Die `:not()`-Pseudoklasse kann einige [Merkmale, Tricks und unerwartete Ergebnisse](#beschreibung) aufweisen, die Sie kennen sollten, bevor Sie sie verwenden.

## Syntax

Die `:not()`-Pseudoklasse benötigt als Argument eine [Selektorenliste](/de/docs/Web/CSS/CSS_selectors/Selector_structure#selector_list), eine kommagetrennte Liste von einem oder mehreren Selektoren. Die Liste darf keinen [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) enthalten, aber alle anderen einfachen, zusammengesetzten und komplexen Selektoren sind zulässig.

```css-nolint
:not(<complex-selector-list>) {
  /* ... */
}
```

## Beschreibung

Es gibt einige ungewöhnliche Effekte und Ergebnisse bei der Verwendung von `:not()`, die Sie beachten sollten:

- Sinnlose Selektoren können mit dieser Pseudoklasse geschrieben werden. Zum Beispiel entspricht `:not(*)` jedem Element, das kein Element ist. Das ist offensichtlich Unsinn und die zugehörige Regel wird nie angewendet.
- Diese Pseudoklasse kann die [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) einer Regel erhöhen. Zum Beispiel entspricht `#foo:not(#bar)` demselben Element wie das einfachere `#foo`, hat jedoch die höhere Spezifität von zwei `id`-Selektoren.
- Die Spezifität der `:not()`-Pseudoklasse wird durch die Spezifität des spezifischsten Selektors in ihrem kommagetrennten Argument von Selektoren ersetzt; sie bietet dieselbe Spezifität, als ob sie [`:not(:is(argument))`](/de/docs/Web/CSS/:is) geschrieben worden wäre.
- `:not(.foo)` wird alles auswählen, was nicht `.foo` ist, _einschließlich {{HTMLElement("html")}} und {{HTMLElement("body")}}._
- Dieser Selektor wird alles auswählen, das "kein X" ist. Dies kann überraschend sein, wenn er mit [Nachfahr-Kombinatoren](/de/docs/Web/CSS/Descendant_combinator) verwendet wird, da es mehrere Wege gibt, ein Zielelement auszuwählen. Beispielsweise wird `body :not(table) a` weiterhin auf Links innerhalb einer {{HTMLElement("table")}} angewendet, da {{HTMLElement("tr")}}, {{HTMLElement("tbody")}}, {{HTMLElement("th")}}, {{HTMLElement("td")}}, {{HTMLElement("caption")}} usw. den `:not(table)`-Teil des Selektors erfüllen können. Um dies zu vermeiden, können Sie stattdessen `body a:not(table a)` verwenden, das nur auf Links angewendet wird, die keine Nachfahren einer Tabelle sind.
- Sie können mehrere Selektoren gleichzeitig negieren. Beispiel: `:not(.foo, .bar)` ist äquivalent zu `:not(.foo):not(.bar)`.
- Wenn ein beliebiger Selektor, der an die `:not()`-Pseudoklasse übergeben wird, ungültig oder vom Browser nicht unterstützt ist, wird die gesamte Regel ungültig. Ein effektiver Weg, dieses Verhalten zu umgehen, ist die Verwendung der [`:is()`-Pseudoklasse](/de/docs/Web/CSS/:is), die eine tolerante Selektorenliste akzeptiert. Zum Beispiel macht `:not(.foo, :invalid-pseudo-class)` eine gesamte Regel ungültig, während `:not(:is(.foo, :invalid-pseudo-class))` jedes Element (einschließlich {{HTMLElement("html")}} und {{HTMLElement("body")}}) auswählt, das nicht `.foo` ist.

## Beispiele

### Verwendung von :not() mit gültigen Selektoren

Dieses Beispiel zeigt einige Anwendungsfälle von `:not()`.

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

Die Regel `p:not(.foo, :invalid-pseudo-class)` ist ungültig, da sie einen ungültigen Selektor enthält. Die `:is()`-Pseudoklasse akzeptiert eine tolerante Selektorenliste, sodass die Regel `:is(.foo, :invalid-pseudo-class)` gültig und äquivalent zu `:is(.foo)` ist. Daher ist die Regel `p:not(:is(.foo, :invalid-pseudo-class))` gültig und äquivalent zu `p:not(.foo)`.

Wenn `:invalid-pseudo-class` ein gültiger Selektor wäre, wären die ersten beiden oben genannten Regeln immer noch äquivalent (die letzten beiden Regeln zeigen das). Die Verwendung von `:is()` macht die Regel robuster.

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

- [Wie :not() mehrere Selektoren verknüpft](/en-US/blog/css-not-pseudo-multiple-selectors/) auf dem MDN Blog (2023)
