---
title: :not()
slug: Web/CSS/Reference/Selectors/:not
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`:not()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert Elemente, die nicht mit einer Liste von Selektoren übereinstimmen. Da sie bestimmte Elemente von der Auswahl ausschließt, ist sie als _Negationspseudoklasse_ bekannt.

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

Die `:not()` Pseudoklasse hat eine Reihe von [Eigenheiten, Tricks und unerwarteten Ergebnissen](#beschreibung), derer Sie sich bewusst sein sollten, bevor Sie sie verwenden.

## Syntax

```css-nolint
:not(<complex-selector-list>) {
  /* ... */
}
```

### Parameter

Die `:not()` Pseudoklasse erfordert eine [Selektor-Liste](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#selector_list), eine durch Kommas getrennte Liste von einem oder mehreren Selektoren, als Argument. Die Liste darf kein [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) enthalten, aber alle anderen einfachen, zusammengesetzten und komplexen Selektoren sind erlaubt.

## Beschreibung

Es gibt mehrere ungewöhnliche Effekte und Ergebnisse bei der Verwendung von `:not()`, die Sie berücksichtigen sollten:

- Nutzlose Selektoren können mit dieser Pseudoklasse geschrieben werden. Zum Beispiel passt `:not(*)` auf jedes Element, das kein Element ist, was offensichtlich unsinnig ist, also wird die zugehörige Regel niemals angewendet.
- Diese Pseudoklasse kann die [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) einer Regel erhöhen. Zum Beispiel wird `#foo:not(#bar)` auf dasselbe Element passen wie das einfachere `#foo`, hat aber die höhere Spezifität von zwei `id` Selektoren.
- Die Spezifität der `:not()` Pseudoklasse wird durch die Spezifität des spezifischsten Selektors in ihrem durch Kommas getrennten Argument von Selektoren ersetzt; sie bietet die gleiche Spezifität, als wäre sie geschrieben worden [`:not(:is(argument))`](/de/docs/Web/CSS/Reference/Selectors/:is).
- `:not(.foo)` stimmt mit allem überein, was nicht `.foo` ist, _einschließlich {{HTMLElement("html")}} und {{HTMLElement("body")}}._
- Dieser Selektor wird alles auswählen, was "nicht ein X" ist. Dies kann überraschend sein, wenn er mit [Nachkommenskombinatoren](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator) verwendet wird, da es mehrere Wege gibt, um ein Zielelement auszuwählen. Beispielsweise wird `body :not(table) a` weiterhin auf Links innerhalb einer {{HTMLElement("table")}} angewendet, da {{HTMLElement("tr")}}, {{HTMLElement("tbody")}}, {{HTMLElement("th")}}, {{HTMLElement("td")}}, {{HTMLElement("caption")}} usw. alle zum `:not(table)`-Teil des Selektors passen können. Um dies zu vermeiden, können Sie stattdessen `body a:not(table a)` verwenden, welches nur auf Links angewendet wird, die keine Nachkommen eines Tisches sind.
- Sie können mehrere Selektoren gleichzeitig negieren. Beispiel: `:not(.foo, .bar)` ist äquivalent zu `:not(.foo):not(.bar)`.
- Wenn ein beliebiger Selektor, der an die `:not()` Pseudoklasse übergeben wird, ungültig oder nicht vom Browser unterstützt wird, wird die gesamte Regel ungültig. Um dieses Verhalten effektiv zu umgehen, können Sie die [`:is()`](/de/docs/Web/CSS/Reference/Selectors/:is) Pseudoklasse verwenden, welche eine fehlertolerante Selektorliste akzeptiert. Zum Beispiel wird `:not(.foo, :ungültige-pseudo-klasse)` eine gesamte Regel ungültig machen, aber `:not(:is(.foo, :ungültige-pseudo-klasse))` wird auf jedes (einschließlich {{HTMLElement("html")}} und {{HTMLElement("body")}}) Element passen, welches nicht `.foo` ist.

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

Dieses Beispiel zeigt die Verwendung von `:not()` mit ungültigen Selektoren und wie man Ungültigkeiten verhindert.

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

Die Regel `p:not(.foo, :ungültige-pseudo-klasse)` ist ungültig, weil sie einen ungültigen Selektor enthält. Die `:is()` Pseudoklasse akzeptiert eine fehlertolerante Selektorliste, so dass die Regel `:is(.foo, :ungültige-pseudo-klasse)` gültig und äquivalent zu `:is(.foo)` ist. Daher ist die Regel `p:not(:is(.foo, :ungültige-pseudo-klasse))` gültig und äquivalent zu `p:not(.foo)`.

Wenn `:ungültige-pseudo-klasse` ein gültiger Selektor wäre, wären die ersten beiden Regeln oben immer noch äquivalent (die letzten beiden Regeln zeigen das). Die Verwendung von `:is()` macht die Regel robuster.

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
