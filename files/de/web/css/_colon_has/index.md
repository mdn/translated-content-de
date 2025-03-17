---
title: ":has()"
slug: Web/CSS/:has
l10n:
  sourceCommit: b3889ca5cc39bc857e9d1ca0cf35220e9a1db271
---

{{CSSRef}}

Die funktionale **`:has()`** CSS-[Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, wenn eines der [relativen Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#relative_selector), die als Argument übergeben werden, mit mindestens einem Element übereinstimmt, wenn es an diesem Element verankert ist. Diese Pseudoklasse bietet eine Möglichkeit, ein Elternelement oder ein vorheriges Geschwisterelement in Bezug auf ein Referenzelement auszuwählen, indem sie eine [Liste relativer Selektoren](/de/docs/Web/CSS/Selector_list#relative_selector_list) als Argument annimmt.

```css
/* Selects an h1 heading with a
paragraph element that immediately follows
the h1 and applies the style to h1 */
h1:has(+ p) {
  margin-bottom: 0;
}
```

Die `:has()`-Pseudoklasse übernimmt die [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) des spezifischsten Selektors in ihren Argumenten, genau wie {{CSSxRef(":is", ":is()")}} und {{CSSxRef(":not", ":not()")}}.

## Syntax

```css-nolint
:has(<relative-selector-list>) {
  /* ... */
}
```

Wenn die `:has()`-Pseudoklasse in einem Browser nicht unterstützt wird, schlägt der gesamte Selektorblock fehl, es sei denn, `:has()` befindet sich in einer toleranten Selektorliste, wie in [`:is()`](/de/docs/Web/CSS/:is) und [`:where()`](/de/docs/Web/CSS/:where).

Die `:has()`-Pseudoklasse kann nicht innerhalb einer anderen `:has()` verschachtelt werden.

Pseudoelemente sind auch keine gültigen Selektoren innerhalb von `:has()`, und Pseudoelemente sind keine gültigen Anker für `:has()`. Dies liegt daran, dass viele Pseudoelemente bedingt basierend auf dem Styling ihrer Vorfahren existieren, und deren Abfrage durch `:has()` könnte zu zirkulären Abfragen führen.

## Beispiele

### Mit dem Geschwisterkombinator

Die `:has()`-Stildeklaration im folgenden Beispiel passt den Abstand nach `<h1>`-Überschriften an, wenn sie direkt von einer `<h2>`-Überschrift gefolgt werden.

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

Dieses Beispiel zeigt zwei ähnliche Texte nebeneinander zum Vergleich – den linken mit einer `H1`-Überschrift gefolgt von einem Absatz und den rechten mit einer `H1`-Überschrift gefolgt von einer `H2`-Überschrift und dann einem Absatz. Im Beispiel auf der rechten Seite hilft `:has()`, das `H1`-Element auszuwählen, das direkt von einem `H2`-Element gefolgt wird (angezeigt durch den Geschwisterkombinator [`+`](/de/docs/Web/CSS/Next-sibling_combinator)), und die CSS-Regel verringert den Abstand nach einem solchen `H1`-Element. Ohne die `:has()`-Pseudoklasse können Sie keine CSS-Selektoren verwenden, um ein vorhergehendes Geschwisterelement eines anderen Typs oder ein Elternelement auszuwählen.

### Mit der :is() Pseudoklasse

Dieses Beispiel baut auf dem vorherigen Beispiel auf, um zu zeigen, wie man mehrere Elemente mit `:has()` auswählt.

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

Hier wird die erste [`:is()`](/de/docs/Web/CSS/:is)-Pseudoklasse verwendet, um eines der Überschriftselemente in der Liste auszuwählen. Die zweite `:is()`-Pseudoklasse wird verwendet, um eine Liste von Geschwisterselektoren als Argument an `:has()` zu übergeben. Die `:has()`-Pseudoklasse hilft, jedes `H1`, `H2` oder `H3`-Element auszuwählen, das direkt von einem `H2`, `H3` oder `H4`-Element gefolgt wird (angezeigt durch [`+`](/de/docs/Web/CSS/Next-sibling_combinator)), und die CSS-Regel verringert den Abstand nach solchen `H1`, `H2` oder `H3`-Elementen.

Dieser Selektor könnte auch wie folgt geschrieben werden:

```css
:is(h1, h2, h3):has(+ h2, + h3, + h4) {
  margin: 0 0 0.25rem 0;
}
```

### Logische Operationen

Der `:has()` relationale Selektor kann verwendet werden, um zu überprüfen, ob eines der Merkmale wahr ist oder ob alle Merkmale wahr sind.

Indem Sie durch Kommas getrennte Werte innerhalb des `:has()` relationalen Selektors verwenden, überprüfen Sie, ob eines der Parameter existiert. `x:has(a, b)` wird `x` stilisieren, wenn der Nachkomme `a` ODER `b` existiert.

Indem Sie mehrere `:has()` relationale Selektoren zusammenfügen, überprüfen Sie, ob alle Parameter existieren. `x:has(a):has(b)` wird `x` stilisieren, wenn der Nachkomme `a` UND `b` existieren.

```css
body:has(video, audio) {
  /* styles to apply if the content contains audio OR video */
}
body:has(video):has(audio) {
  /* styles to apply if the content contains both audio AND video */
}
```

## Analogie zwischen :has() und regulären Ausdrücken

Interessanterweise können wir einige CSS `:has()`-Konstrukte mit der [Lookahead-Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) in regulären Ausdrücken in Verbindung bringen, da beide es ermöglichen, Elemente (oder Zeichenketten in regulären Ausdrücken) basierend auf einer Bedingung auszuwählen, ohne die Bedingung selbst als übereinstimmendes Element (oder Zeichenkette) auszuwählen.

### Positiver Lookahead (?=pattern)

Im regulären Ausdruck `abc(?=xyz)` wird die Zeichenkette `abc` nur dann erkannt, wenn sie direkt von der Zeichenkette `xyz` gefolgt wird. Da es sich um eine Lookahead-Operation handelt, ist `xyz` nicht im Match enthalten.

Das analoge Konstrukt in CSS wäre `.abc:has(+ .xyz)`: es wählt das Element `.abc` nur dann aus, wenn es ein nächstes Geschwister `.xyz` gibt. Der Part `:has(+ .xyz)` agiert als Lookahead-Operation, da das Element `.abc` ausgewählt wird und nicht das Element `.xyz`.

### Negativer Lookahead (?!pattern)

Ähnlich dazu wird im Fall der negativen Lookahead-Bedingung im regulären Ausdruck `abc(?!xyz)` die Zeichenkette `abc` nur dann erkannt, wenn sie _nicht_ von `xyz` gefolgt wird. Das analoge CSS-Konstrukt `.abc:has(+ :not(.xyz))` wählt das Element `.abc` nicht aus, wenn das nächste Element `.xyz` ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`:is()`](/de/docs/Web/CSS/:is), [`:where()`](/de/docs/Web/CSS/:where), [`:not()`](/de/docs/Web/CSS/:not)
- [CSS-Selektoren und Kombinatoren](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators)
- [CSS-Selektorstruktur](/de/docs/Web/CSS/CSS_selectors/Selector_structure)
- [Selektorliste](/de/docs/Web/CSS/Selector_list)
- [CSS Selektormodul](/de/docs/Web/CSS/CSS_selectors)
- [DOM-Elemente mit Selektoren lokalisieren](/de/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
