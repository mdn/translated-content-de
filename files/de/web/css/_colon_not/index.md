---
title: ":not()"
slug: Web/CSS/:not
l10n:
  sourceCommit: ea740757d4a3675326a3cb543a935febe76d16e6
---

{{CSSRef}}

Die **`:not()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert Elemente, die einer Liste von Selektoren nicht entsprechen. Da sie verhindert, dass bestimmte Elemente ausgewählt werden, wird sie als _Negations-Pseudoklasse_ bezeichnet.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-not.html", "tabbed-shorter")}}

Die `:not()` Pseudoklasse hat eine Reihe von [Eigenheiten, Tricks und unerwarteten Ergebnissen](#beschreibung), die Sie beachten sollten, bevor Sie sie verwenden.

## Syntax

Die `:not()` Pseudoklasse erfordert als Argument eine [Selektorliste](/de/docs/Web/CSS/CSS_selectors/Selector_structure#selector_list), eine durch Kommas getrennte Liste von einem oder mehreren Selektoren. Die Liste darf keinen weiteren Negationsselektor oder ein [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) enthalten, aber alle anderen einfachen, zusammengesetzten und komplexen Selektoren sind erlaubt.

```css-nolint
:not(<complex-selector-list>) {
  /* ... */
}
```

## Beschreibung

Es gibt mehrere ungewöhnliche Effekte und Ergebnisse bei der Verwendung von `:not()`, die Sie im Hinterkopf behalten sollten:

- Mit dieser Pseudoklasse können sinnlose Selektoren geschrieben werden. Zum Beispiel entspricht `:not(*)` jedem Element, das kein Element ist, was offensichtlich unsinnig ist, sodass die zugehörige Regel nie angewendet wird.
- Diese Pseudoklasse kann die [Spezifität](/de/docs/Web/CSS/Specificity) einer Regel erhöhen. Zum Beispiel entspricht `#foo:not(#bar)` demselben Element wie das einfachere `#foo`, hat aber die höhere Spezifität von zwei `id` Selektoren.
- Die Spezifität der `:not()` Pseudoklasse wird durch die Spezifität des spezifischsten Selektors in ihren durch Kommas getrennten Selectorn ersetzt; sie bietet die gleiche Spezifität, als ob sie als [`:not(:is(argument))`](/de/docs/Web/CSS/:is) geschrieben wäre.
- `:not(.foo)` entspricht allem, was nicht `.foo` ist, _einschließlich {{HTMLElement("html")}} und {{HTMLElement("body")}}._
- Dieser Selektor wird alles erfassen, was „kein X“ ist. Dies kann überraschend sein, wenn er mit [Nachkommenskombinatoren](/de/docs/Web/CSS/Descendant_combinator) verwendet wird, da es mehrere Wege gibt, ein Ziel-Element auszuwählen. Beispielsweise wird `body :not(table) a` weiterhin auf Links in einer {{HTMLElement("table")}} angewendet, da {{HTMLElement("tr")}}, {{HTMLElement("tbody")}}, {{HTMLElement("th")}}, {{HTMLElement("td")}}, {{HTMLElement("caption")}} usw. alle zum `:not(table)` Teil des Selektors passen können. Um dies zu vermeiden, können Sie stattdessen `body a:not(table a)` verwenden, was nur auf Links angewendet wird, die keine Nachfahren eines Tisches sind.
- Sie können mehrere Selektoren gleichzeitig verneinen. Beispiel: `:not(.foo, .bar)` entspricht `:not(.foo):not(.bar)`.
- Wenn ein an die `:not()` Pseudoklasse übergebener Selektor ungültig oder vom Browser nicht unterstützt wird, wird die gesamte Regel ungültig. Der effektive Weg, dieses Verhalten zu überwinden, besteht darin, die [`:is()`](/de/docs/Web/CSS/:is) Pseudoklasse zu verwenden, die eine nachsichtige Selektorliste akzeptiert. Beispielsweise wird `:not(.foo, :invalid-pseudo-class)` eine ganze Regel ungültig machen, aber `:not(:is(.foo, :invalid-pseudo-class))` entspricht jedem (_einschließlich {{HTMLElement("html")}} und {{HTMLElement("body")}}_) Element, das nicht `.foo` ist.

## Beispiele

### Verwendung von :not() mit gültigen Selektoren

Dieses Beispiel zeigt einige einfache Fälle der Verwendung von `:not()`.

#### HTML

```html
<p>Ich bin ein Absatz.</p>
<p class="fancy">Ich bin so unglaublich elegant!</p>
<div>Ich bin KEIN Absatz.</div>
<h2>
  <span class="foo">foo innerhalb von h2</span>
  <span class="bar">bar innerhalb von h2</span>
</h2>
```

#### CSS

```css
.fancy {
  text-shadow: 2px 2px 3px gold;
}

/* <p> Elemente, die keine Klasse `.fancy` haben */
p:not(.fancy) {
  color: green;
}

/* Elemente, die keine <p> Elemente sind */
body :not(p) {
  text-decoration: underline;
}

/* Elemente, die keine <div>s oder `.fancy` sind */
body :not(div):not(.fancy) {
  font-weight: bold;
}

/* Elemente, die keine <div>s oder `.fancy` sind */
body :not(div, .fancy) {
  text-decoration: overline underline;
}

/* Elemente innerhalb eines <h2>, die kein <span> mit einer Klasse von `.foo` sind */
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
<p class="foo">Ich bin ein Absatz mit .foo</p>
<p class="bar">Ich bin ein Absatz mit .bar</p>
<div>Ich bin ein div ohne Klasse</div>
<div class="foo">Ich bin ein div mit .foo</div>
<div class="bar">Ich bin ein div mit .bar</div>
<div class="foo bar">Ich bin ein div mit .foo und .bar</div>
```

#### CSS

```css
/* Ungültige Regel, tut nichts */
p:not(.foo, :invalid-pseudo-class) {
  color: red;
  font-style: italic;
}

/* Wählen Sie alle <p> Elemente ohne die `foo` Klasse aus */
p:not(:is(.foo, :invalid-pseudo-class)) {
  color: green;
  border-top: dotted thin currentcolor;
}

/* Wählen Sie alle <div> Elemente ohne die `foo` oder die `bar` Klasse aus */
div:not(.foo, .bar) {
  color: red;
  font-style: italic;
}

/* Wählen Sie alle <div> Elemente ohne die `foo` oder die `bar` Klasse aus */
div:not(:is(.foo, .bar)) {
  border-bottom: dotted thin currentcolor;
}
```

#### Ergebnis

{{EmbedLiveSample('Using_not_with_invalid_selectors', '100%', 320)}}

Die Regel `p:not(.foo, :invalid-pseudo-class)` ist ungültig, da sie einen ungültigen Selektor enthält. Die `:is()` Pseudoklasse akzeptiert eine nachsichtige Selektorliste, daher ist die Regel `:is(.foo, :invalid-pseudo-class)` gültig und äquivalent zu `:is(.foo)`. Daher ist die Regel `p:not(:is(.foo, :invalid-pseudo-class))` gültig und äquivalent zu `p:not(.foo)`.

Wenn `:invalid-pseudo-class` ein gültiger Selektor wäre, wären die beiden obigen Regeln immer noch äquivalent (die letzten beiden Regeln zeigen dies). Die Verwendung von `:is()` macht die Regel robuster.

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

- [Wie :not() mehrere Selektoren verketten](/en-US/blog/css-not-pseudo-multiple-selectors/) im MDN-Blog (2023)
