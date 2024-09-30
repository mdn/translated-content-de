---
title: ":has()"
slug: Web/CSS/:has
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{CSSRef}}

Die funktionale **`:has()`** CSS-[Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, wenn einer der [relativen Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#relative_selector), die als Argument übergeben werden, mindestens ein Element findet, wenn sie an diesem Element verankert sind. Diese Pseudoklasse bietet eine Möglichkeit, ein übergeordnetes Element oder ein vorhergehendes Geschwisterelement mit Bezug auf ein Referenzelement auszuwählen, indem sie eine [Liste relativer Selektoren](/de/docs/Web/CSS/Selector_list#relative_selector_list) als Argument entgegennimmt.

```css
/* Selects an h1 heading with a
paragraph element that immediately follows
the h1 and applies the style to h1 */
h1:has(+ p) {
  margin-bottom: 0;
}
```

Die `:has()`-Pseudoklasse nimmt die [Spezifität](/de/docs/Web/CSS/Specificity) des spezifischsten Selektors in ihren Argumenten an, ebenso wie {{CSSxRef(":is", ":is()")}} und {{CSSxRef(":not", ":not()")}}.

## Syntax

```css-nolint
:has(<relative-selector-list>) {
  /* ... */
}
```

Wenn die `:has()`-Pseudoklasse selbst in einem Browser nicht unterstützt wird, schlägt der gesamte Selektorblock fehl, es sei denn, `:has()` befindet sich in einer fehlerverzeihenden Selektorliste, wie zum Beispiel in [`:is()`](/de/docs/Web/CSS/:is) und [`:where()`](/de/docs/Web/CSS/:where).

Die `:has()`-Pseudoklasse kann nicht innerhalb einer anderen `:has()` verschachtelt werden. Dies liegt daran, dass viele Pseudoelemente bedingt basierend auf dem Styling ihrer Vorfahren existieren und deren Abfrage durch `:has()` zyklische Abfragen einführen könnte.

Pseudoelemente sind auch keine gültigen Selektoren innerhalb von `:has()` und Pseudoelemente sind keine gültigen Anker für `:has()`.

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

Dieses Beispiel zeigt zwei ähnliche Texte nebeneinander zum Vergleich - links eine `H1`-Überschrift gefolgt von einem Absatz und rechts eine `H1`-Überschrift gefolgt von einer `H2`-Überschrift und dann einem Absatz. Im Beispiel rechts hilft `:has()`, das `H1`-Element auszuwählen, das direkt von einem `H2`-Element gefolgt wird (angegeben durch den nächsten Geschwisterkombinator [`+`](/de/docs/Web/CSS/Next-sibling_combinator)), und die CSS-Regel reduziert den Abstand nach einem solchen `H1`-Element. Ohne die `:has()`-Pseudoklasse können Sie keine CSS-Selektoren verwenden, um ein vorhergehendes Geschwisterelement eines anderen Typs oder ein übergeordnetes Element auszuwählen.

### Mit der :is()-Pseudoklasse

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

Hier wird die erste [`:is()`](/de/docs/Web/CSS/:is)-Pseudoklasse verwendet, um eines der Überschriftenelemente in der Liste auszuwählen. Die zweite `:is()`-Pseudoklasse wird verwendet, um eine Liste von Geschwisterselektoren als Argument an `:has()` zu übergeben. Die `:has()`-Pseudoklasse hilft, jedes `H1`-, `H2`- oder `H3`-Element auszuwählen, das direkt (angegeben durch [`+`](/de/docs/Web/CSS/Next-sibling_combinator)) von einem `H2`-, `H3`- oder `H4`-Element gefolgt wird, und die CSS-Regel reduziert den Abstand nach solchen `H1`, `H2` oder `H3`-Elementen.

Dieser Selektor hätte auch so geschrieben werden können:

```css
:is(h1, h2, h3):has(+ h2, + h3, + h4) {
  margin: 0 0 0.25rem 0;
}
```

### Logische Operationen

Der `:has()`-relationale Selektor kann verwendet werden, um zu prüfen, ob eines der mehreren Merkmale wahr ist oder ob alle Merkmale wahr sind.

Durch die Verwendung von durch Komma getrennten Werten im `:has()`-relationalen Selektor prüfen Sie, ob eines der Parameter existiert. `x:has(a, b)` wird `x` stylen, wenn Nachkomme `a` ODER `b` existiert.

Durch das Verketten mehrerer `:has()`-relationaler Selektoren prüfen Sie, ob alle Parameter existieren. `x:has(a):has(b)` wird `x` stylen, wenn Nachkomme `a` UND `b` existieren.

```css
body:has(video, audio) {
  /* styles to apply if the content contains audio OR video */
}
body:has(video):has(audio) {
  /* styles to apply if the content contains both audio AND video */
}
```

## Analogie zwischen :has() und regulären Ausdrücken

Interessanterweise können wir einige CSS `:has()`-Konstruktionen mit der [Lookahead Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) in regulären Ausdrücken vergleichen, da beide es ermöglichen, Elemente (oder Strings in regulären Ausdrücken) basierend auf einer Bedingung auszuwählen, ohne tatsächlich das bedingungserfüllende Element (oder String) selbst auszuwählen.

### Positiver Lookahead (?=pattern)

Im regulären Ausdruck `abc(?=xyz)` wird der String `abc` nur dann gematcht, wenn er unmittelbar von dem String `xyz` gefolgt wird. Da es sich um einen Lookahead-Vorgang handelt, ist das `xyz` nicht im Match enthalten.

Das analoge Konstrukt in CSS wäre `.abc:has(+ .xyz)`: Es wählt das `.abc`-Element nur dann aus, wenn es ein nächstes Geschwister `.xyz` gibt. Der Teil `:has(+ .xyz)` fungiert als Lookahead-Operation, weil das `.abc`-Element ausgewählt wird und nicht das `.xyz`-Element.

### Negativer Lookahead (?!pattern)

Ähnlich verhält es sich beim negativen Lookahead. Im regulären Ausdruck `abc(?!xyz)` wird der String `abc` nur dann gematcht, wenn er _nicht_ von `xyz` gefolgt wird. Das analoge CSS-Konstrukt `.abc:has(+ :not(.xyz))` wählt das `.abc`-Element nicht aus, wenn das nächste Element `.xyz` ist.

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
