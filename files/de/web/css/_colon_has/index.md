---
title: :has()
slug: Web/CSS/:has
l10n:
  sourceCommit: b36d73c88991881d21d7c258ad17330c292ce149
---

Die funktionale **`:has()`** CSS-[Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, wenn eines der als Argument übergebenen [relativen Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#relative_selector) mindestens ein Element trifft, wenn sie gegen dieses Element verankert werden. Diese Pseudoklasse bietet eine Möglichkeit, ein übergeordnetes Element oder ein vorheriges Geschwisterelement in Bezug auf ein Referenzelement auszuwählen, indem eine [relative Selektorliste](/de/docs/Web/CSS/Selector_list#relative_selector_list) als Argument genommen wird.

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

Wenn die `:has()`-Pseudoklasse in einem Browser nicht unterstützt wird, schlägt der gesamte Selektorblock fehl, es sei denn, `:has()` befindet sich in einer vergebenden Selektorliste wie in [`:is()`](/de/docs/Web/CSS/:is) und [`:where()`](/de/docs/Web/CSS/:where).

Die `:has()`-Pseudoklasse kann nicht innerhalb einer anderen `:has()`-Pseudoklasse verschachtelt werden.

Pseudo-Elemente sind innerhalb von `:has()` ebenfalls keine gültigen Selektoren, und Pseudo-Elemente sind keine gültigen Anker für `:has()`. Dies liegt daran, dass viele Pseudo-Elemente bedingt basierend auf der Gestaltung ihrer Vorfahren existieren, und das Erlauben, diese durch `:has()` abzufragen, kann zu zyklischen Abfragen führen.

## Beispiele

### Auswahl eines Elternelements

Sie suchen möglicherweise nach einem "Elternkombinator" [kombinator](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#combinators), der es Ihnen ermöglicht, den DOM-Baum nach oben zu gehen und das übergeordnete Element eines bestimmten Elements auszuwählen. Die `:has()`-Pseudoklasse erreicht dies durch die Verwendung von `parent:has(child)` (für ein beliebiges Elternteil) oder `parent:has(> child)` (für ein direktes Elternteil). Dieses Beispiel zeigt, wie man ein `<section>`-Element stylt, wenn es ein Kind mit der `featured`-Klasse enthält.

```html
<section>
  <article class="featured">Featured content</article>
  <article>Regular content</article>
</section>
<section>
  <article>Regular content</article>
</section>
```

```css
section:has(.featured) {
  border: 2px solid blue;
}
```

### Ergebnis

{{EmbedLiveSample('Selecting a parent element', , 200)}}

### Mit dem Geschwister-Kombinator

Die `:has()`-Stildeklaration im folgenden Beispiel passt den Abstand nach `<h1>`-Überschriften an, wenn sie unmittelbar von einer `<h2>`-Überschrift gefolgt werden.

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

Dieses Beispiel zeigt zwei ähnliche Texte nebeneinander zum Vergleich – der linke mit einer `H1`-Überschrift gefolgt von einem Absatz und der rechte mit einer `H1`-Überschrift gefolgt von einer `H2`-Überschrift und dann einem Absatz. Im Beispiel auf der rechten Seite hilft `:has()` dabei, das `H1`-Element auszuwählen, das unmittelbar von einem `H2`-Element gefolgt wird (angezeigt durch den Geschwister-Kombinator [`+`](/de/docs/Web/CSS/Next-sibling_combinator)), und die CSS-Regel reduziert den Abstand nach einem solchen `H1`-Element. Ohne die `:has()`-Pseudoklasse können CSS-Selektoren nicht verwendet werden, um ein vorhergehendes Geschwisterelement eines anderen Typs oder ein übergeordnetes Element auszuwählen.

### Mit der :is()-Pseudoklasse

Dieses Beispiel baut auf dem vorherigen Beispiel auf, um zu zeigen, wie mehrere Elemente mit `:has()` ausgewählt werden.

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

Hier wird die erste [`:is()`](/de/docs/Web/CSS/:is) Pseudoklasse verwendet, um eines der Überschriftenelemente in der Liste auszuwählen. Die zweite `:is()`-Pseudoklasse wird verwendet, um eine Liste von Geschwisterselektoren als Argument an `:has()` zu übergeben. Die `:has()`-Pseudoklasse hilft, jedes `H1`-, `H2`- oder `H3`-Element auszuwählen, das unmittelbar (angezeigt durch [`+`](/de/docs/Web/CSS/Next-sibling_combinator)) von einem `H2`-, `H3`- oder `H4`-Element gefolgt wird, und die CSS-Regel reduziert den Abstand nach solchen `H1`-, `H2`- oder `H3`-Elementen.

Dieser Selektor hätte auch so geschrieben werden können:

```css
:is(h1, h2, h3):has(+ h2, + h3, + h4) {
  margin: 0 0 0.25rem 0;
}
```

### Logische Operationen

Der `:has()`-relationale Selektor kann verwendet werden, um zu überprüfen, ob eines von mehreren Merkmalen wahr ist oder ob alle Merkmale wahr sind.

Durch die Verwendung von kommaseparierten Werten im `:has()`-relationalen Selektor überprüfen Sie, ob eines der Parameter existiert. `x:has(a, b)` wird `x` stilisieren, wenn Nachfahre `a` ODER `b` existiert.

Durch die Verkettung mehrerer `:has()`-relativer Selektoren überprüfen Sie, ob alle Parameter existieren. `x:has(a):has(b)` wird `x` stilisieren, wenn Nachfahre `a` UND `b` existieren.

```css
body:has(video, audio) {
  /* styles to apply if the content contains audio OR video */
}
body:has(video):has(audio) {
  /* styles to apply if the content contains both audio AND video */
}
```

## Analogie zwischen :has() und regulären Ausdrücken

Interessanterweise können einige CSS `:has()`-Konstrukte mit der [lookahead assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) in regulären Ausdrücken verglichen werden, da sie beide das Auswählen von Elementen (oder Zeichenfolgen in regulären Ausdrücken) basierend auf einer Bedingung ermöglichen, ohne tatsächlich das Bedingung erfüllende Element (oder Zeichenfolge) selbst auszuwählen.

### Positive Lookahead (?=pattern)

Im regulären Ausdruck `abc(?=xyz)` wird die Zeichenfolge `abc` nur dann gematcht, wenn sie unmittelbar von der Zeichenfolge `xyz` gefolgt wird. Da es sich um eine Lookahead-Operation handelt, ist `xyz` nicht im Match enthalten.

Das analoge Konstrukt in CSS wäre `.abc:has(+ .xyz)`: Es wählt das Element `.abc` nur aus, wenn ein nächstes Geschwisterelement `.xyz` existiert. Der Teil `:has(+ .xyz)` fungiert als Lookahead-Operation, da das Element `.abc` ausgewählt wird und nicht das Element `.xyz`.

### Negative Lookahead (?!pattern)

Ähnlich gilt für den Negative Lookahead-Fall: Im regulären Ausdruck `abc(?!xyz)` wird die Zeichenfolge `abc` nur gematcht, wenn sie _nicht_ gefolgt wird von `xyz`. Das analoge CSS-Konstrukt `.abc:has(+ :not(.xyz))` wählt das Element `.abc` nicht aus, wenn das nächste Element `.xyz` ist.

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
- [DOM-Elemente mit Selektoren lokalisieren](/de/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
