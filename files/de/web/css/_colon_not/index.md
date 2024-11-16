---
title: ":not()"
slug: Web/CSS/:not
l10n:
  sourceCommit: 632289fcc10e926d166e1b49e5ba3505de182856
---

{{CSSRef}}

Die **`:not()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert Elemente, die nicht einer Liste von Selektoren entsprechen. Da sie verhindert, dass bestimmte Elemente ausgewählt werden, ist sie als _Negationspseudoklasse_ bekannt.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-not.html", "tabbed-shorter")}}

Die `:not()`-Pseudoklasse hat eine Reihe von [Eigenheiten, Tricks und unerwarteten Ergebnissen](#beschreibung), die Sie beachten sollten, bevor Sie sie verwenden.

## Syntax

Die `:not()`-Pseudoklasse erfordert als Argument eine [Selektorenliste](/de/docs/Web/CSS/CSS_selectors/Selector_structure#selector_list), eine durch Kommas getrennte Liste von einem oder mehreren Selektoren. Diese Liste darf kein [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) enthalten, aber alle anderen einfachen, zusammengesetzten und komplexen Selektoren sind erlaubt.

```css-nolint
:not(<complex-selector-list>) {
  /* ... */
}
```

## Beschreibung

Es gibt mehrere ungewöhnliche Effekte und Ergebnisse bei der Verwendung von `:not()`, die Sie beachten sollten:

- Nutzlose Selektoren können mit dieser Pseudoklasse geschrieben werden. Zum Beispiel entspricht `:not(*)` jedem Element, das kein Element ist, was offensichtlich unsinnig ist, daher wird die begleitende Regel niemals angewendet.
- Diese Pseudoklasse kann die [Spezifität](/de/docs/Web/CSS/Specificity) einer Regel erhöhen. Zum Beispiel wird `#foo:not(#bar)` dasselbe Element wie der einfachere Selektor `#foo` erfassen, hat jedoch die höhere Spezifität von zwei `id`-Selektoren.
- Die Spezifität der `:not()`-Pseudoklasse wird durch die Spezifität des spezifischsten Selektors in ihrem durch Kommas getrennten Argument von Selektoren ersetzt; bietet dieselbe Spezifität, als wäre es als [`:not(:is(argument))`](/de/docs/Web/CSS/:is) geschrieben worden.
- `:not(.foo)` würde alles erfassen, was nicht `.foo` ist, _einschließlich {{HTMLElement("html")}} und {{HTMLElement("body")}}._
- Dieser Selektor erfasst alles, was "kein X" ist. Dies könnte überraschen, wenn er mit [Nachfahrenkombinatoren](/de/docs/Web/CSS/Descendant_combinator) verwendet wird, da es mehrere Möglichkeiten gibt, ein Zielelement auszuwählen. Zum Beispiel wird `body :not(table) a` immer noch auf Links innerhalb einer {{HTMLElement("table")}} angewendet, da {{HTMLElement("tr")}}, {{HTMLElement("tbody")}}, {{HTMLElement("th")}}, {{HTMLElement("td")}}, {{HTMLElement("caption")}}, etc. alle den `:not(table)`-Teil des Selektors erfüllen können. Um dies zu vermeiden, können Sie stattdessen `body a:not(table a)` verwenden, das nur auf Links angewendet wird, die keine Nachfahren einer Tabelle sind.
- Sie können mehrere Selektoren gleichzeitig negieren. Beispiel: `:not(.foo, .bar)` ist gleichwertig mit `:not(.foo):not(.bar)`.
- Wenn ein Selektor, der der `:not()`-Pseudoklasse übergeben wird, ungültig ist oder vom Browser nicht unterstützt wird, wird die gesamte Regel ungültig. Der effektive Weg, dieses Verhalten zu überwinden, besteht darin, die [`:is()`](/de/docs/Web/CSS/:is) Pseudoklasse zu verwenden, die eine nachsichtige Selektorenliste akzeptiert. Zum Beispiel wird `:not(.foo, :invalid-pseudo-class)` eine ganze Regel ungültig machen, aber `:not(:is(.foo, :invalid-pseudo-class))` entspricht jedem (_einschließlich {{HTMLElement("html")}} und {{HTMLElement("body")}}_) Element, das nicht `.foo` ist.

## Beispiele

### Verwendung von :not() mit gültigen Selektoren

Dieses Beispiel zeigt einige Beispiele für die Verwendung von `:not()`.

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

Dieses Beispiel zeigt die Verwendung von `:not()` mit ungültigen Selektoren und wie man Ungültigmachung verhindert.

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

Die Regel `p:not(.foo, :invalid-pseudo-class)` ist ungültig, weil sie einen ungültigen Selektor enthält. Die `:is()`-Pseudoklasse akzeptiert eine nachsichtige Selektorenliste, daher ist die Regel `:is(.foo, :invalid-pseudo-class)` gültig und gleichwertig mit `:is(.foo)`. Daher ist die Regel `p:not(:is(.foo, :invalid-pseudo-class))` gültig und gleichwertig mit `p:not(.foo)`.

Wenn `:invalid-pseudo-class` ein gültiger Selektor wäre, wären die ersten beiden oben genannten Regeln immer noch gleichwertig (die letzten beiden Regeln zeigen dies). Die Verwendung von `:is()` macht die Regel robuster.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes)
- [Pseudoklassen und Pseudoelemente](/de/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
- Andere funktionale CSS-Pseudoklassen:

  - {{cssxref(":has", ":has()")}}
  - {{cssxref(":is", ":is()")}}
  - {{cssxref(":where", ":where()")}}

- [Wie :not() mehrere Selektoren verknüpft](/en-US/blog/css-not-pseudo-multiple-selectors/) auf dem MDN-Blog (2023)
