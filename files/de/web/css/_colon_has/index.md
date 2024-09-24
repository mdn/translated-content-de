---
title: ":has()"
slug: Web/CSS/:has
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{CSSRef}}

Die funktionale CSS-[Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) **`:has()`** repräsentiert ein Element, wenn eines der [relativen Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#relative_selector), die als Argument übergeben werden, mindestens ein Element übereinstimmend gegen dieses Element verankern kann. Diese Pseudoklasse bietet eine Möglichkeit, ein Elternelement oder ein vorheriges Geschwisterelement in Bezug auf ein Referenzelement auszuwählen, indem sie eine [Liste von relativen Selektoren](/de/docs/Web/CSS/Selector_list#relative_selector_list) als Argument übernimmt.

```css
/* Wählt eine h1-Überschrift
mit einem unmittelbar folgenden
Absatzelement und wendet den Stil auf h1 an */
h1:has(+ p) {
  margin-bottom: 0;
}
```

Die Pseudoklasse `:has()` übernimmt die [Spezifität](/de/docs/Web/CSS/Specificity) des spezifischsten Selektors in ihren Argumenten auf die gleiche Weise wie {{CSSxRef(":is", ":is()")}} und {{CSSxRef(":not", ":not()")}}.

## Syntax

```css-nolint
:has(<relative-selector-list>) {
  /* ... */
}
```

Wenn die Pseudoklasse `:has()` in einem Browser nicht unterstützt wird, wird der gesamte Selektorblock fehlschlagen, es sei denn, `:has()` befindet sich in einer nachsichtigen Selektorliste, wie zum Beispiel in [`:is()`](/de/docs/Web/CSS/:is) und [`:where()`](/de/docs/Web/CSS/:where).

Die Pseudoklasse `:has()` kann nicht innerhalb einer anderen `:has()` verschachtelt werden. Dies liegt daran, dass viele Pseudoelemente bedingt aufgrund der Stilgestaltung ihrer Vorfahren existieren, und es kann zu einem zyklischen Abfragen führen, wenn man diese durch `:has()` abfragen könnte.

Pseudoelemente sind ebenfalls keine gültigen Selektoren innerhalb von `:has()` und Pseudoelemente sind keine gültigen Anker für `:has()`.

## Beispiele

### Mit dem Geschwister-Kombinator

Die Stil-Deklaration `:has()` im folgenden Beispiel passt den Abstand nach `<h1>`-Überschriften an, wenn sie unmittelbar von einer `<h2>`-Überschrift gefolgt werden.

#### HTML

```html
<section>
  <article>
    <h1>Morning Times</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </article>
  <article>
    <h1>Morning Times</h1>
    <h2>Delivering you news every morning</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </article>
</section>
```

#### CSS

```css hidden
section {
  display: flex;
  align-items: start;
  justify-content: space-around;
}

article {
  display: inline-block;
  width: 40%;
}

h1,
h2 {
  font-size: 1.2em;
}

h2 {
  font-size: 1em;
  color: rgb(150 149 149);
}
```

```css
h1,
h2 {
  margin: 0 0 1rem 0;
}

h1:has(+ h2) {
  margin: 0 0 0.25rem 0;
}
```

#### Ergebnis

{{EmbedLiveSample('With_the_sibling_combinator', 600, 150)}}

Dieses Beispiel zeigt zwei ähnliche Texte nebeneinander zum Vergleich – den linken mit einem `H1`-Überschrift gefolgt von einem Absatz und den rechten mit einer `H1`-Überschrift gefolgt von einer `H2`-Überschrift und dann einem Absatz. Im Beispiel auf der rechten Seite hilft `:has()`, das `H1`-Element auszuwählen, das unmittelbar von einem `H2`-Element gefolgt wird (angezeigt durch den next-sibling Kombinator [`+`](/de/docs/Web/CSS/Next-sibling_combinator)), und die CSS-Regel verringert den Abstand nach einem solchen `H1`-Element. Ohne die Pseudoklasse `:has()` können Sie keine CSS-Selektoren verwenden, um ein vorheriges Geschwister eines anderen Typs oder ein Elternelement auszuwählen.

### Mit der :is() Pseudoklasse

Dieses Beispiel baut auf dem vorherigen Beispiel auf, um zu zeigen, wie mehrere Elemente mit `:has()` ausgewählt werden können.

#### HTML

```html
<section>
  <article>
    <h1>Morning Times</h1>
    <h2>Delivering you news every morning</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </article>
  <article>
    <h1>Morning Times</h1>
    <h2>Delivering you news every morning</h2>
    <h3>8:00 am</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </article>
</section>
```

#### CSS

```css hidden
section {
  display: flex;
  align-items: start;
  justify-content: space-around;
}

article {
  display: inline-block;
  width: 40%;
}

h1 {
  font-size: 1.2em;
}

h2 {
  font-size: 1em;
  color: rgb(150 149 149);
}

h3 {
  font-size: 0.9em;
  color: darkgrey;
}
```

```css
h1,
h2,
h3 {
  margin: 0 0 1rem 0;
}

:is(h1, h2, h3):has(+ :is(h2, h3, h4)) {
  margin: 0 0 0.25rem 0;
}
```

#### Ergebnis

{{EmbedLiveSample('With_the_:is()_pseudo-class', 600, 170)}}

Hier wird die erste [`:is()`](/de/docs/Web/CSS/:is) Pseudoklasse verwendet, um eines der Überschriftselemente in der Liste auszuwählen. Die zweite `:is()` Pseudoklasse wird verwendet, um eine Liste von next-sibling Selektoren als Argument an `:has()` zu übergeben. Die `:has()` Pseudoklasse hilft dabei, irgendein `H1`, `H2` oder `H3` Element auszuwählen, das unmittelbar gefolgt wird (angezeigt durch [`+`](/de/docs/Web/CSS/Next-sibling_combinator)) von einem `H2`, `H3` oder `H4` Element, und die CSS-Regel reduziert den Abstand nach solchen `H1`, `H2` oder `H3` Elementen.

Dieser Selektor könnte auch wie folgt geschrieben werden:

```css
:is(h1, h2, h3):has(+ h2, + h3, + h4) {
  margin: 0 0 0.25rem 0;
}
```

### Logische Operationen

Der `:has()` relationale Selektor kann verwendet werden, um zu überprüfen, ob eines von mehreren Merkmalen wahr ist oder ob alle Merkmale wahr sind.

Durch das Verwenden von Komma-getrennten Werten innerhalb des `:has()` relationalen Selektors prüfen Sie, ob einer der Parameter existiert. `x:has(a, b)` wird `x` gestalten, wenn ein Nachfahre `a` ODER `b` existiert.

Durch das Verkettung mehrerer `:has()` relationaler Selektoren prüfen Sie, ob alle Parameter existieren. `x:has(a):has(b)` wird `x` gestalten, wenn ein Nachfahre `a` UND `b` existiert.

```css
body:has(video, audio) {
  /* Stile, die angewendet werden, wenn der Inhalt Audio ODER Video enthält */
}
body:has(video):has(audio) {
  /* Stile, die angewendet werden, wenn der Inhalt sowohl Audio ALS AUCH Video enthält */
}
```

## Analogie zwischen :has() und regulären Ausdrücken

Interessanterweise können wir einige CSS `:has()` Konstruktionen mit dem [Lookahead-Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) in regulären Ausdrücken vergleichen, da beide es ermöglichen, Elemente (oder Strings in regulären Ausdrücken) basierend auf einer Bedingung auszuwählen, ohne tatsächlich das mit der Bedingung übereinstimmende Element (oder den String) selbst auszuwählen.

### Positive Lookahead (?=pattern)

Im regulären Ausdruck `abc(?=xyz)` wird der String `abc` nur dann übereinstimmend, wenn er unmittelbar vom String `xyz` gefolgt wird. Da es sich um eine Lookahead-Operation handelt, wird das `xyz` nicht in die Übereinstimmung einbezogen.

Die analoge Konstruktion in CSS wäre `.abc:has(+ .xyz)`: Es wählt das Element `.abc`, nur wenn es ein nächstes Geschwister `.xyz` gibt. Der Teil `:has(+ .xyz)` fungiert als Lookahead-Operation, weil das Element `.abc` ausgewählt wird und nicht das Element `.xyz`.

### Negative Lookahead (?!pattern)

Ähnlich verhält es sich mit dem negativen Lookahead-Fall. Im regulären Ausdruck `abc(?!xyz)` wird der String `abc` nur dann übereinstimmend, wenn er _nicht_ von `xyz` gefolgt wird. Die analoge CSS-Konstruktion `.abc:has(+ :not(.xyz))` wählt das Element `.abc` dann nicht aus, wenn das nächste Element `.xyz` ist.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [`:is()`](/de/docs/Web/CSS/:is), [`:where()`](/de/docs/Web/CSS/:where), [`:not()`](/de/docs/Web/CSS/:not)
- [CSS Selektoren und Kombinatoren](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators)
- [Struktur der CSS Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure)
- [Selektorliste](/de/docs/Web/CSS/Selector_list)
- [CSS Selektormodul](/de/docs/Web/CSS/CSS_selectors)
- [Positionierung von DOM-Elementen mit Selektoren](/de/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
