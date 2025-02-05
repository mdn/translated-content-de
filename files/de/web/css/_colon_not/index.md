---
title: ":not()"
slug: Web/CSS/:not
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Die **`:not()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert Elemente, die nicht mit einer Liste von Selektoren übereinstimmen. Da sie spezifische Elemente von der Auswahl ausschließt, ist sie als _Negationspseudoklasse_ bekannt.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-not.html", "tabbed-shorter")}}

Die `:not()`-Pseudoklasse hat eine Reihe von [Eigenheiten, Tricks und unerwarteten Ergebnissen](#beschreibung), die Sie kennen sollten, bevor Sie sie verwenden.

## Syntax

Die `:not()`-Pseudoklasse erfordert eine [Selektor-Liste](/de/docs/Web/CSS/CSS_selectors/Selector_structure#selector_list), eine durch Kommas getrennte Liste von einem oder mehreren Selektoren, als Argument. Die Liste darf keine [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) enthalten, aber alle anderen einfachen, zusammengesetzten und komplexen Selektoren sind erlaubt.

```css-nolint
:not(<complex-selector-list>) {
  /* ... */
}
```

## Beschreibung

Es gibt mehrere ungewöhnliche Effekte und Ergebnisse bei der Verwendung von `:not()`, die Sie im Hinterkopf behalten sollten:

- Nutzlose Selektoren können mit dieser Pseudoklasse geschrieben werden. Zum Beispiel stimmt `:not(*)` mit jedem Element überein, das kein Element ist, was offensichtlich keinen Sinn ergibt. Daher wird die zugehörige Regel nie angewendet.
- Diese Pseudoklasse kann die [Spezifität](/de/docs/Web/CSS/Specificity) einer Regel erhöhen. Zum Beispiel stimmt `#foo:not(#bar)` mit demselben Element wie der einfachere Selektor `#foo` überein, hat jedoch die höhere Spezifität von zwei `id`-Selektoren.
- Die Spezifität der `:not()`-Pseudoklasse wird durch die Spezifität des spezifischsten Selektors in ihrem durch Kommas getrennten Selektor-Argument ersetzt; sie hat dieselbe Spezifität, als ob sie als [`:not(:is(argument))`](/de/docs/Web/CSS/:is) geschrieben wäre.
- `:not(.foo)` stimmt mit allem überein, was nicht `.foo` ist, _einschließlich {{HTMLElement("html")}} und {{HTMLElement("body")}}._
- Dieser Selektor stimmt mit allem überein, das „kein X“ ist. Das kann überraschen, wenn er mit [Nachfahrenkombinatoren](/de/docs/Web/CSS/Descendant_combinator) verwendet wird, da es mehrere Wege gibt, ein Ziel-Element auszuwählen. Zum Beispiel wird `body :not(table) a` weiterhin auf Links innerhalb einer {{HTMLElement("table")}} angewendet, da {{HTMLElement("tr")}}, {{HTMLElement("tbody")}}, {{HTMLElement("th")}}, {{HTMLElement("td")}}, {{HTMLElement("caption")}} usw. alle auf den `:not(table)`-Teil des Selektors passen können. Um dies zu vermeiden, können Sie `body a:not(table a)` verwenden, was nur auf Links angewendet wird, die keine Nachfahren von Tabellen sind.
- Sie können mehrere Selektoren gleichzeitig ausschließen. Beispiel: `:not(.foo, .bar)` ist gleichwertig mit `:not(.foo):not(.bar)`.
- Wenn ein beliebiger Selektor, der an die `:not()`-Pseudoklasse übergeben wird, ungültig oder nicht vom Browser unterstützt ist, wird die gesamte Regel ungültig. Eine wirksame Methode, um dieses Verhalten zu umgehen, ist die Verwendung der [`:is()`](/de/docs/Web/CSS/:is)-Pseudoklasse, die eine tolerante Selektorliste akzeptiert. Zum Beispiel wird `:not(.foo, :invalid-pseudo-class)` eine ganze Regel ungültig machen, aber `:not(:is(.foo, :invalid-pseudo-class))` stimmt mit jedem (_einschließlich {{HTMLElement("html")}} und {{HTMLElement("body")}}_) Element überein, das nicht `.foo` ist.

## Beispiele

### Verwenden von :not() mit gültigen Selektoren

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

### Verwenden von :not() mit ungültigen Selektoren

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

Die Regel `p:not(.foo, :invalid-pseudo-class)` ist ungültig, da sie einen ungültigen Selektor enthält. Die `:is()`-Pseudoklasse akzeptiert eine tolerante Selektorliste, sodass die Regel `:is(.foo, :invalid-pseudo-class)` gültig und gleichwertig zu `:is(.foo)` ist. Somit ist die Regel `p:not(:is(.foo, :invalid-pseudo-class))` gültig und gleichwertig zu `p:not(.foo)`.

Wenn `:invalid-pseudo-class` ein gültiger Selektor wäre, wären die ersten beiden oben genannten Regeln dennoch gleichwertig (die letzten beiden Regeln zeigen dies). Die Verwendung von `:is()` macht die Regel robuster.

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

- [Wie :not() mehrere Selektoren kombiniert](/en-US/blog/css-not-pseudo-multiple-selectors/) auf dem MDN-Blog (2023)
