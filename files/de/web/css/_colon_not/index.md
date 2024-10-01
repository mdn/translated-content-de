---
title: ":not()"
slug: Web/CSS/:not
l10n:
  sourceCommit: ea740757d4a3675326a3cb543a935febe76d16e6
---

{{CSSRef}}

Die **`:not()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert Elemente, die einer Liste von Selektoren nicht entsprechen. Da sie bestimmte Elemente von der Auswahl ausschließt, wird sie als _Negations-Pseudoklasse_ bekannt.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-not.html", "tabbed-shorter")}}

Die `:not()` Pseudoklasse weist einige [Eigenheiten, Tricks und unerwartete Ergebnisse](#beschreibung) auf, derer Sie sich bewusst sein sollten, bevor Sie sie verwenden.

## Syntax

Die `:not()` Pseudoklasse erfordert eine [Selektorliste](/de/docs/Web/CSS/CSS_selectors/Selector_structure#selector_list), eine durch Kommas getrennte Liste von einem oder mehreren Selektoren als Argument. Die Liste darf keinen weiteren Negationsselektor oder ein [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) enthalten, jedoch sind alle anderen einfachen, zusammengesetzten und komplexen Selektoren zulässig.

```css-nolint
:not(<complex-selector-list>) {
  /* ... */
}
```

## Beschreibung

Es gibt mehrere ungewöhnliche Effekte und Ergebnisse beim Verwenden von `:not()`, die Sie im Hinterkopf behalten sollten:

- Nutzlose Selektoren können mit dieser Pseudoklasse geschrieben werden. Zum Beispiel entspricht `:not(*)` jedem Element, das kein Element ist, was offensichtlich Unsinn ist, daher wird die begleitende Regel nie angewendet.
- Diese Pseudoklasse kann die [Spezifität](/de/docs/Web/CSS/Specificity) einer Regel erhöhen. Zum Beispiel wird `#foo:not(#bar)` dasselbe Element wie der einfachere Selektor `#foo` auswählen, hat jedoch die höhere Spezifität von zwei `id`-Selektoren.
- Die Spezifität der `:not()` Pseudoklasse wird durch die Spezifität des spezifischsten Selektors in ihrem durch Kommas getrennten Selektoren-Argument ersetzt; sie bietet dieselbe Spezifität, als wäre sie geschrieben worden als [`:not(:is(argument))`](/de/docs/Web/CSS/:is).
- `:not(.foo)` wird alles entsprechen, was nicht `.foo` ist, _einschließlich {{HTMLElement("html")}} und {{HTMLElement("body")}}._
- Dieser Selektor wird allem entsprechen, das "kein X ist". Dies kann überraschend sein, wenn er mit [Nachfahrenkombinatoren](/de/docs/Web/CSS/Descendant_combinator) verwendet wird, da es mehrere Wege gibt, ein Ziel-Element auszuwählen. Zum Beispiel wird `body :not(table) a` immer noch auf Links innerhalb eines {{HTMLElement("table")}} angewendet, da {{HTMLElement("tr")}}, {{HTMLElement("tbody")}}, {{HTMLElement("th")}}, {{HTMLElement("td")}}, {{HTMLElement("caption")}}, etc. alle den `:not(table)` Teil des Selektors erfüllen können. Um dies zu vermeiden, können Sie stattdessen `body a:not(table a)` verwenden, das nur auf Links angewendet wird, die keine Nachfahren einer Tabelle sind.
- Sie können mehrere Selektoren gleichzeitig negieren. Beispiel: `:not(.foo, .bar)` ist äquivalent zu `:not(.foo):not(.bar)`.
- Wenn ein Selektor, der an die `:not()` Pseudoklasse übergeben wird, ungültig oder vom Browser nicht unterstützt wird, wird die gesamte Regel ungültig gemacht. Ein effektiver Weg, dieses Verhalten zu überwinden, ist die Verwendung der [`:is()`](/de/docs/Web/CSS/:is) Pseudoklasse, die eine tolerante Selektorliste akzeptiert. Zum Beispiel wird `:not(.foo, :invalid-pseudo-class)` eine gesamte Regel ungültig machen, aber `:not(:is(.foo, :invalid-pseudo-class))` wird jedes (einschließlich {{HTMLElement("html")}} und {{HTMLElement("body")}}\_) Element entsprechen, das nicht `.foo` ist.

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

Die Regel `p:not(.foo, :invalid-pseudo-class)` ist ungültig, da sie einen ungültigen Selektor enthält. Die `:is()` Pseudoklasse akzeptiert eine tolerantere Selektorliste, daher ist die `:is(.foo, :invalid-pseudo-class)` Regel gültig und äquivalent zu `:is(.foo)`. Somit ist die `p:not(:is(.foo, :invalid-pseudo-class))` Regel gültig und äquivalent zu `p:not(.foo)`.

Wäre `:invalid-pseudo-class` ein gültiger Selektor, wären die ersten zwei Regeln oben immer noch äquivalent (die letzten zwei Regeln zeigen das). Durch die Verwendung von `:is()` wird die Regel robuster.

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
