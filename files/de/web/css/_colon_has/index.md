---
title: ":has()"
slug: Web/CSS/:has
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Die funktionale **`:has()`** CSS-[Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, wenn eines der [relativen Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#relative_selector), die als Argument übergeben werden, mindestens ein Element findet, wenn sie auf dieses Element verankert sind. Diese Pseudoklasse bietet eine Möglichkeit, ein Elternelement oder ein vorangegangenes Geschwisterelement in Bezug auf ein Referenzelement auszuwählen, indem sie eine [Liste von relativen Selektoren](/de/docs/Web/CSS/Selector_list#relative_selector_list) als Argument übernimmt.

```css
/* Selects an h1 heading with a
paragraph element that immediately follows
the h1 and applies the style to h1 */
h1:has(+ p) {
  margin-bottom: 0;
}
```

Die `:has()`-Pseudoklasse übernimmt die [Spezifität](/de/docs/Web/CSS/Specificity) des spezifischsten Selektors in ihren Argumenten, genau wie {{CSSxRef(":is", ":is()")}} und {{CSSxRef(":not", ":not()")}}.

## Syntax

```css-nolint
:has(<relative-selector-list>) {
  /* ... */
}
```

Wenn die `:has()`-Pseudoklasse in einem Browser nicht unterstützt wird, schlägt der gesamte Selektorblock fehl, es sei denn, `:has()` befindet sich in einer verzeihenden Selektorliste, wie z. B. in [`:is()`](/de/docs/Web/CSS/:is) und [`:where()`](/de/docs/Web/CSS/:where).

Die `:has()`-Pseudoklasse kann nicht innerhalb einer anderen `:has()`-Pseudoklasse verschachtelt werden. Dies liegt daran, dass viele Pseudo-Elemente bedingungsabhängig auf Grundlage der Stile ihrer Vorfahren existieren, und die Möglichkeit, diese per `:has()` abzufragen, könnte zirkuläre Abfragen einführen.

Pseudo-Elemente sind auch keine gültigen Selektoren innerhalb von `:has()` und können nicht als Anker für `:has()` dienen.

## Beispiele

### Mit dem Geschwisterkombinator

Die `:has()`-Stilregel im folgenden Beispiel passt den Abstand nach `<h1>`-Überschriften an, wenn diese unmittelbar von einer `<h2>`-Überschrift gefolgt werden.

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

Dieses Beispiel zeigt zwei ähnliche Texte nebeneinander: links mit einer `H1`-Überschrift, gefolgt von einem Absatz, und rechts mit einer `H1`-Überschrift, gefolgt von einer `H2`-Überschrift und dann einem Absatz. Im rechten Beispiel hilft `:has()`, das `H1`-Element, das unmittelbar von einem `H2`-Element gefolgt wird (angezeigt durch den Geschwisterkombinator [`+`](/de/docs/Web/CSS/Next-sibling_combinator)), auszuwählen. Die CSS-Regel reduziert den Abstand nach einem solchen `H1`-Element. Ohne die `:has()`-Pseudoklasse können CSS-Selektoren kein vorhergehendes Geschwisterelement oder ein Elternelement auswählen.

### Mit der :is()-Pseudoklasse

Dieses Beispiel baut auf dem vorherigen Beispiel auf, um zu zeigen, wie mit `:has()` mehrere Elemente ausgewählt werden können.

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

Hier wird die erste [`:is()`](/de/docs/Web/CSS/:is)-Pseudoklasse verwendet, um eines der Überschriftselemente in der Liste auszuwählen. Die zweite `:is()`-Pseudoklasse wird genutzt, um `:has()` eine Liste von Nachfolge-Geschwisterselektoren als Argument zu übergeben. Die `:has()`-Pseudoklasse hilft, jedes `H1`, `H2` oder `H3`-Element auszuwählen, das unmittelbar (angezeigt durch [`+`](/de/docs/Web/CSS/Next-sibling_combinator)) von einem `H2`, `H3` oder `H4`-Element gefolgt wird, und die CSS-Regel reduziert den Abstand nach solchen `H1`, `H2` oder `H3`-Elementen.

Dieser Selektor könnte auch wie folgt geschrieben werden:

```css
:is(h1, h2, h3):has(+ h2, + h3, + h4) {
  margin: 0 0 0.25rem 0;
}
```

### Logische Operationen

Der `:has()`-relationaler Selektor kann verwendet werden, um zu überprüfen, ob eine von mehreren Bedingungen wahr ist oder ob alle Bedingungen wahr sind.

Verwenden Sie durch Kommas getrennte Werte innerhalb des `:has()`-relationalen Selektors, überprüfen Sie, ob eines der Parameter existiert. `x:has(a, b)` wird `x` stilisieren, wenn Nachkommen `a` ODER `b` existieren.

Durch das Aneinanderreihen mehrerer `:has()`-relationaler Selektoren überprüfen Sie, ob alle Parameter existieren. `x:has(a):has(b)` wird `x` stilisieren, wenn Nachkommen `a` UND `b` existieren.

```css
body:has(video, audio) {
  /* styles to apply if the content contains audio OR video */
}
body:has(video):has(audio) {
  /* styles to apply if the content contains both audio AND video */
}
```

## Analogie zwischen :has() und regulären Ausdrücken

Interessanterweise können einige CSS-`:has()`-Konstrukte mit der [Lookahead Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) in regulären Ausdrücken verglichen werden, da beide es ermöglichen, Elemente (oder Zeichenfolgen in regulären Ausdrücken) basierend auf einer Bedingung auszuwählen, ohne tatsächlich das Bedingungselement (oder die Bedingungszeichenfolge) selbst auszuwählen.

### Positive Lookahead (?=pattern)

Im regulären Ausdruck `abc(?=xyz)` wird die Zeichenfolge `abc` nur dann ausgewählt, wenn sie unmittelbar von der Zeichenfolge `xyz` gefolgt wird. Da es sich um eine Lookahead-Operation handelt, wird das `xyz` nicht in die Übereinstimmung aufgenommen.

Das analoge Konstrukt in CSS wäre `.abc:has(+ .xyz)`: Es wählt das Element `.abc` aus, nur wenn ein nächstes Geschwisterelement `.xyz` existiert. Der Teil `:has(+ .xyz)` funktioniert als Lookahead-Operation, da das Element `.abc` ausgewählt wird und nicht das Element `.xyz`.

### Negative Lookahead (?!pattern)

Ähnlich verhält es sich beim negativen Lookahead: Im regulären Ausdruck `abc(?!xyz)` wird die Zeichenfolge `abc` nur dann ausgewählt, wenn sie _nicht_ von `xyz` gefolgt wird. Das analoge CSS-Konstrukt `.abc:has(+ :not(.xyz))` wählt das Element `.abc` nicht aus, wenn das nächste Element `.xyz` ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`:is()`](/de/docs/Web/CSS/:is), [`:where()`](/de/docs/Web/CSS/:where), [`:not()`](/de/docs/Web/CSS/:not)
- [CSS-Selektoren und Kombinatoren](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators)
- [CSS-Selektorstrukturen](/de/docs/Web/CSS/CSS_selectors/Selector_structure)
- [Selektorenliste](/de/docs/Web/CSS/Selector_list)
- [CSS-Selektormodul](/de/docs/Web/CSS/CSS_selectors)
- [DOM-Elemente mittels Selektoren lokalisieren](/de/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
