---
title: :has()
slug: Web/CSS/:has
l10n:
  sourceCommit: a29769d6d10261f771321eb60f3990029c160924
---

{{CSSRef}}

Die funktionale **`:has()`** CSS-[Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, wenn eines der [relativen Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#relative_selector), die als Argument übergeben werden, mindestens ein Element findet, wenn es an diesem Element verankert ist. Diese Pseudoklasse bietet eine Möglichkeit, ein übergeordnetes Element oder ein vorheriges Geschwisterelement in Bezug auf ein Referenzelement auszuwählen, indem eine [relative Selektorliste](/de/docs/Web/CSS/Selector_list#relative_selector_list) als Argument verwendet wird.

```css
/* Selects an h1 heading with a
paragraph element that immediately follows
the h1 and applies the style to h1 */
h1:has(+ p) {
  margin-bottom: 0;
}
```

Die `:has()`-Pseudoklasse übernimmt die [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) des spezifischsten Selektors in ihren Argumenten auf die gleiche Weise wie {{CSSxRef(":is", ":is()")}} und {{CSSxRef(":not", ":not()")}}.

## Syntax

```css-nolint
:has(<relative-selector-list>) {
  /* ... */
}
```

Wenn die `:has()`-Pseudoklasse in einem Browser nicht unterstützt wird, schlägt der gesamte Selektorblock fehl, es sei denn, `:has()` befindet sich in einer toleranten Selektorliste, wie zum Beispiel in [`:is()`](/de/docs/Web/CSS/:is) und [`:where()`](/de/docs/Web/CSS/:where).

Die `:has()`-Pseudoklasse kann nicht in eine andere `:has()` eingebettet werden. Dies liegt daran, dass viele Pseudo-Elemente bedingt basierend auf dem Stil ihrer Vorfahren existieren, und wenn diese durch `:has()` abgefragt werden könnten, könnte dies zu zyklischen Abfragen führen.

Pseudo-Elemente sind außerdem keine gültigen Selektoren innerhalb von `:has()` und keine gültigen Anker für `:has()`.

## Beispiele

### Mit dem Geschwister-Kombinator

Die `:has()`-Stilregel im folgenden Beispiel passt den Abstand nach `<h1>`-Überschriften an, wenn sie direkt von einer `<h2>`-Überschrift gefolgt werden.

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

Dieses Beispiel zeigt zwei ähnliche Texte nebeneinander zum Vergleich – der linke mit einer `H1`-Überschrift, gefolgt von einem Absatz, und der rechte mit einer `H1`-Überschrift, gefolgt von einer `H2`-Überschrift und dann einem Absatz. In dem Beispiel rechts hilft `:has()`, das `H1`-Element auszuwählen, das unmittelbar von einem `H2`-Element gefolgt wird (angegeben durch den Kombinator [`+`](/de/docs/Web/CSS/Next-sibling_combinator)), und die CSS-Regel reduziert den Abstand nach einem solchen `H1`-Element. Ohne die `:has()`-Pseudoklasse können Sie keine CSS-Selektoren verwenden, um ein vorheriges Geschwisterelement eines anderen Typs oder ein übergeordnetes Element auszuwählen.

### Mit der :is()-Pseudoklasse

Dieses Beispiel baut auf dem vorherigen auf, um zu zeigen, wie mehrere Elemente mit `:has()` ausgewählt werden können.

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

Hier wird die erste [`:is()`](/de/docs/Web/CSS/:is)-Pseudoklasse verwendet, um eines der Überschriftselemente in der Liste auszuwählen. Die zweite `:is()`-Pseudoklasse wird verwendet, um eine Liste von Geschwisterselektoren als Argument an `:has()` zu übergeben. Die `:has()`-Pseudoklasse hilft, jedes `H1`, `H2` oder `H3`-Element auszuwählen, das unmittelbar von einem (angezeigt durch [`+`](/de/docs/Web/CSS/Next-sibling_combinator)) `H2`, `H3` oder `H4`-Element gefolgt wird, und die CSS-Regel reduziert den Abstand nach solchen `H1`, `H2` oder `H3`-Elementen.

Dieser Selektor hätte auch so geschrieben werden können:

```css
:is(h1, h2, h3):has(+ h2, + h3, + h4) {
  margin: 0 0 0.25rem 0;
}
```

### Logische Operationen

Der relationale Selektor `:has()` kann verwendet werden, um zu überprüfen, ob eines von mehreren Kriterien wahr ist, oder ob alle Kriterien wahr sind.

Durch die Verwendung von durch Kommas getrennten Werten innerhalb des relationalen Selektors `:has()` prüfen Sie, ob eines der Parameter existiert. `x:has(a, b)` gestaltet `x`, wenn Nachkommen `a` ODER `b` existieren.

Wenn mehrere relationale Selektoren `:has()` verkettet werden, überprüfen Sie, ob alle Parameter existieren. `x:has(a):has(b)` gestaltet `x`, wenn Nachkommen `a` UND `b` existieren.

```css
body:has(video, audio) {
  /* styles to apply if the content contains audio OR video */
}
body:has(video):has(audio) {
  /* styles to apply if the content contains both audio AND video */
}
```

## Analogie zwischen :has() und regulären Ausdrücken

Interessanterweise können einige CSS-`:has()`-Konstrukte mit der [Lookahead-Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) in regulären Ausdrücken verglichen werden, da beide es ermöglichen, Elemente (oder Zeichenfolgen bei regulären Ausdrücken) basierend auf einer Bedingung auszuwählen, ohne tatsächlich das die Bedingung erfüllende Element (oder die Zeichenfolge) selbst auszuwählen.

### Positive Lookahead (?=pattern)

Im regulären Ausdruck `abc(?=xyz)` wird die Zeichenfolge `abc` nur dann gematcht, wenn sie unmittelbar von der Zeichenfolge `xyz` gefolgt wird. Da es sich um eine Lookahead-Operation handelt, wird `xyz` nicht in den Match einbezogen.

Das analoge Konstrukt in CSS wäre `.abc:has(+ .xyz)`: Es wählt das Element `.abc` nur dann aus, wenn ein direktes Geschwister `.xyz` vorhanden ist. Der Teil `:has(+ .xyz)` fungiert als Lookahead-Operation, da das Element `.abc` ausgewählt wird und nicht das Element `.xyz`.

### Negative Lookahead (?!pattern)

Ähnlich wird in dem regulären Ausdruck `abc(?!xyz)` die Zeichenfolge `abc` nur dann gematcht, wenn sie _nicht_ von `xyz` gefolgt wird. Das analoge CSS-Konstrukt `.abc:has(+ :not(.xyz))` wählt das Element `.abc` nicht aus, wenn das nächste Element `.xyz` ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`:is()`](/de/docs/Web/CSS/:is), [`:where()`](/de/docs/Web/CSS/:where), [`:not()`](/de/docs/Web/CSS/:not)
- [CSS-Selektoren und Kombinatoren](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators)
- [CSS-Selektorstruktur](/de/docs/Web/CSS/CSS_selectors/Selector_structure)
- [Selektorliste](/de/docs/Web/CSS/Selector_list)
- [CSS-Selektormodul](/de/docs/Web/CSS/CSS_selectors)
- [DOM-Elemente mit Selektoren finden](/de/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
