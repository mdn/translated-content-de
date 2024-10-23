---
title: ":not()"
slug: Web/CSS/:not
l10n:
  sourceCommit: 0efc8d558ecd35ff0613097a82c2373df7b57754
---

{{CSSRef}}

Die **`:not()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert Elemente, die nicht einer Liste von Selektoren entsprechen. Da sie verhindert, dass bestimmte Elemente ausgewählt werden, ist sie als _Negations-Pseudoklasse_ bekannt.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-not.html", "tabbed-shorter")}}

Die `:not()`-Pseudoklasse hat einige [Merkwürdigkeiten, Tricks und unerwartete Ergebnisse](#beschreibung), die Sie kennen sollten, bevor Sie sie verwenden.

## Syntax

Die `:not()`-Pseudoklasse erfordert eine [Selektorliste](/de/docs/Web/CSS/CSS_selectors/Selector_structure#selector_list), eine durch Kommas getrennte Liste von einem oder mehreren Selektoren, als Argument. Die Liste darf kein [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) enthalten, aber jeder andere einfache, zusammengesetzte und komplexe Selektor ist erlaubt.

```css-nolint
:not(<complex-selector-list>) {
  /* ... */
}
```

## Beschreibung

Es gibt mehrere ungewöhnliche Effekte und Ergebnisse bei der Verwendung von `:not()`, die Sie beachten sollten:

- Nutzlose Selektoren können mit dieser Pseudoklasse geschrieben werden. Zum Beispiel entspricht `:not(*)` jedem Element, das nicht ein Element ist, was offensichtlich Unsinn ist, daher wird die zugehörige Regel niemals angewendet.
- Diese Pseudoklasse kann die [Spezifität](/de/docs/Web/CSS/Specificity) einer Regel erhöhen. Zum Beispiel entspricht `#foo:not(#bar)` demselben Element wie der einfachere Selektor `#foo`, hat aber die höhere Spezifität von zwei `id`-Selektoren.
- Die Spezifität der `:not()`-Pseudoklasse wird durch die Spezifität des spezifischsten Selektors in ihrem durch Kommas getrennten Argument von Selektoren ersetzt; sie hat dieselbe Spezifität, als ob sie geschrieben worden wäre als [`:not(:is(argument))`](/de/docs/Web/CSS/:is).
- `:not(.foo)` entspricht allem, was nicht `.foo` ist, _einschließlich {{HTMLElement("html")}} und {{HTMLElement("body")}}._
- Dieser Selektor entspricht allem, was "kein X" ist. Dies kann überraschend sein, wenn er mit [Nachkommenkombinatoren](/de/docs/Web/CSS/Descendant_combinator) verwendet wird, da es mehrere Wege gibt, ein Zielelement auszuwählen. Zum Beispiel wird `body :not(table) a` weiterhin auf Links innerhalb eines {{HTMLElement("table")}} angewendet, da {{HTMLElement("tr")}}, {{HTMLElement("tbody")}}, {{HTMLElement("th")}}, {{HTMLElement("td")}}, {{HTMLElement("caption")}}, etc. alle mit dem Teil `:not(table)` des Selektors übereinstimmen können. Um dies zu vermeiden, können Sie stattdessen `body a:not(table a)` verwenden, das nur auf Links angewendet wird, die keine Nachkommen eines Tabelleneltern sind.
- Sie können mehrere Selektoren gleichzeitig negieren. Beispiel: `:not(.foo, .bar)` ist äquivalent zu `:not(.foo):not(.bar)`.
- Wenn ein beliebiger Selektor, der der `:not()`-Pseudoklasse übergeben wird, ungültig oder vom Browser nicht unterstützt wird, wird die gesamte Regel ungültig. Der effektive Weg, dieses Verhalten zu überwinden, besteht darin, die [`:is()`](/de/docs/Web/CSS/:is)-Pseudoklasse zu verwenden, die eine fehlertolerante Selektorliste akzeptiert. Zum Beispiel wird `:not(.foo, :invalid-pseudo-class)` eine gesamte Regel ungültig machen, aber `:not(:is(.foo, :invalid-pseudo-class))` wird auf jedes (_einschließlich {{HTMLElement("html")}} und {{HTMLElement("body")}}_) Element zutreffen, das nicht `.foo` ist.

## Beispiele

### Verwendung von :not() mit gültigen Selektoren

Dieses Beispiel zeigt einige einfache Fälle der Verwendung von `:not()`.

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

Dieses Beispiel zeigt die Verwendung von `:not()` mit ungültigen Selektoren und wie man eine Ungültigkeit vermeidet.

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

Die Regel `p:not(.foo, :invalid-pseudo-class)` ist ungültig, weil sie einen ungültigen Selektor enthält. Die `:is()`-Pseudoklasse akzeptiert eine fehlertolerante Selektorliste, sodass die Regel `:is(.foo, :invalid-pseudo-class)` gültig und gleichwertig zu `:is(.foo)` ist. Daher ist die Regel `p:not(:is(.foo, :invalid-pseudo-class))` gültig und gleichwertig zu `p:not(.foo)`.

Wenn `:invalid-pseudo-class` ein gültiger Selektor wäre, wären die ersten beiden Regeln oben immer noch gleichwertig (die letzten beiden Regeln zeigen dies). Die Verwendung von `:is()` macht die Regel robuster.

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

- [Wie :not() mehrere Selektoren verknüpft](/en-US/blog/css-not-pseudo-multiple-selectors/) im MDN-Blog (2023)
