---
title: :has()
slug: Web/CSS/Reference/Selectors/:has
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die funktionale **`:has()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert ein Element, wenn einer der als Argument übergebenen [relativen Selektoren](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#relative_selector) mindestens ein Element selektiert, wenn er an diesem Element verankert ist. Diese Pseudoklasse bietet eine Möglichkeit, ein Elternelement oder ein vorheriges Geschwisterelement in Bezug auf ein Bezugselement zu selektieren, indem sie eine [relative Selektorenliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#relative_selector_list) als Argument verwendet.

```css
/* Selects an h1 heading with a
paragraph element that immediately follows
the h1 and applies the style to h1 */
h1:has(+ p) {
  margin-bottom: 0;
}
```

Die `:has()`-Pseudoklasse übernimmt die [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) des spezifischsten Selektors in ihren Argumenten, genauso wie {{cssxref(":is()")}} und {{cssxref(":not()")}} dies tun.

## Syntax

```css-nolint
:has(<relative-selector-list>) {
  /* ... */
}
```

Falls die `:has()`-Pseudoklasse in einem Browser nicht unterstützt wird, schlägt der gesamte Selektorblock fehl, es sei denn, `:has()` befindet sich in einer toleranten Selektorenliste, wie in [`:is()`](/de/docs/Web/CSS/Reference/Selectors/:is) und [`:where()`](/de/docs/Web/CSS/Reference/Selectors/:where).

Die `:has()`-Pseudoklasse kann nicht in einer anderen `:has()` eingebettet werden.

Pseudoelemente sind ebenfalls keine gültigen Selektoren innerhalb von `:has()` und Pseudoelemente sind keine gültigen Anker für `:has()`. Dies liegt daran, dass viele Pseudoelemente bedingt existieren, basierend auf dem Styling ihrer Vorfahren, und das Zulassen dieser zur Abfrage durch `:has()` kann zirkuläre Abfragen einführen.

## Beispiele

### Selektieren eines Elternelements

Sie suchen möglicherweise nach einem "Eltern-[Kombinator](/de/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators#combinators)", der es Ihnen ermöglicht, im DOM-Baum nach oben zu gehen und das Elternelement eines spezifischen Elements auszuwählen. Die `:has()`-Pseudoklasse tut dies, indem sie `parent:has(child)` (für jedes Elternteil) oder `parent:has(> child)` (für direkte Elternteile) verwendet. Dieses Beispiel zeigt, wie ein `<section>`-Element gestylt wird, wenn es ein Kind mit der `featured`-Klasse enthält.

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

Dieses Beispiel zeigt zwei ähnliche Texte nebeneinander zum Vergleich – den linken mit einer `H1`-Überschrift gefolgt von einem Absatz und den rechten mit einer `H1`-Überschrift gefolgt von einer `H2`-Überschrift und dann einem Absatz. Im Beispiel rechts hilft `:has()`, das `H1`-Element auszuwählen, das unmittelbar von einem `H2`-Element (angezeigt durch den nächsten Geschwister-Kombinator [`+`](/de/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator)) gefolgt wird, und die CSS-Regel verringert den Abstand nach einem solchen `H1`-Element. Ohne die `:has()`-Pseudoklasse können Sie keine CSS-Selektoren verwenden, um ein vorhergehendes Geschwisterelement eines anderen Typs oder ein Elternelement auszuwählen.

### Mit der :is() Pseudoklasse

Dieses Beispiel baut auf dem vorherigen auf, um zu zeigen, wie man mehrere Elemente mit `:has()` auswählt.

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

Hier wird die erste [`:is()`](/de/docs/Web/CSS/Reference/Selectors/:is) Pseudoklasse verwendet, um eines der Überschriftelemente in der Liste auszuwählen. Die zweite `:is()`-Pseudoklasse wird verwendet, um eine Liste von nächsten Geschwisterselektoren als Argument an `:has()` zu übergeben. Die `:has()`-Pseudoklasse hilft, jedes `H1`, `H2` oder `H3`-Element auszuwählen, das unmittelbar von (angezeigt durch [`+`](/de/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator)) einem `H2`, `H3` oder `H4`-Element gefolgt wird, und die CSS-Regel verringert den Abstand nach solchen `H1`, `H2` oder `H3`-Elementen.

Dieser Selektor könnte auch so geschrieben werden:

```css
:is(h1, h2, h3):has(+ h2, + h3, + h4) {
  margin: 0 0 0.25rem 0;
}
```

### Logische Operationen

Der `:has()` relationale Selektor kann verwendet werden, um zu überprüfen, ob eines von mehreren Merkmalen zutrifft oder ob alle Merkmale zutreffen.

Indem Sie Komma-getrennte Werte innerhalb des `:has()` relationalen Selektors verwenden, prüfen Sie, ob eines der Parameter existiert. `x:has(a, b)` wird `x` stylen, wenn Nachkommen `a` ODER `b` existieren.

Indem Sie mehrere `:has()` relationale Selektoren miteinander verknüpfen, prüfen Sie, ob alle Parameter existieren. `x:has(a):has(b)` wird `x` stylen, wenn Nachkommen `a` UND `b` existieren.

```css
body:has(video, audio) {
  /* styles to apply if the content contains audio OR video */
}
body:has(video):has(audio) {
  /* styles to apply if the content contains both audio AND video */
}
```

## Analogie zwischen :has() und regulären Ausdrücken

Interessanterweise können wir einige CSS `:has()`-Konstrukte mit der [Lookahead Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) in regulären Ausdrücken in Zusammenhang bringen, da beide es Ihnen ermöglichen, Elemente (oder Zeichenfolgen in regulären Ausdrücken) basierend auf einer Bedingung auszuwählen, ohne tatsächlich das die Bedingung erfüllende Element (oder Zeichenfolge) selbst auszuwählen.

### Positiver Lookahead (?=pattern)

Im regulären Ausdruck `abc(?=xyz)` wird die Zeichenfolge `abc` nur dann übereinstimmend gefunden, wenn sie unmittelbar von der Zeichenfolge `xyz` gefolgt wird. Da es sich um eine Lookahead-Operation handelt, ist `xyz` nicht in der Übereinstimmung enthalten.

Das analoge Konstrukt in CSS wäre `.abc:has(+ .xyz)`: es selektiert das Element `.abc` nur, wenn ein nächstes Geschwisterelement `.xyz` vorhanden ist. Der Teil `:has(+ .xyz)` fungiert als Lookahead-Operation, da das Element `.abc` und nicht das Element `.xyz` ausgewählt wird.

### Negativer Lookahead (?!pattern)

Ähnlich verhält es sich im Fall des negativen Lookaheads, im regulären Ausdruck `abc(?!xyz)`, wird die Zeichenfolge `abc` nur dann übereinstimmend gefunden, wenn sie _nicht_ von `xyz` gefolgt wird. Das analoge CSS-Konstrukt `.abc:has(+ :not(.xyz))` selektiert das Element `.abc` nicht, wenn das nächste Element `.xyz` ist.

## Leistungserwägungen

Bestimmte Verwendungen der `:has()`-Pseudoklasse können die Seitenleistung erheblich beeinflussen, insbesondere bei dynamischen Updates (DOM-Mutationen). Browser-Engines müssen die `:has()`-Selektoren neu bewerten, wenn sich das DOM ändert, und komplexe oder schlecht eingeschränkte Selektoren können zu kostenintensiven Berechnungen führen.

### Vermeiden Sie breite Verankerung

Der Ankerselektor (das `A` in `A:has(B)`) sollte kein Element sein, das zu viele Kinder hat, wie `body`, `:root` oder `*`. Das Verankern von `:has()` an sehr allgemeinen Selektoren kann die Leistung beeinträchtigen, weil jede DOM-Änderung innerhalb des gesamten Unterbaums eines breit ausgewählten Elements den Browser zwingt, die `:has()`-Bedingung erneut zu überprüfen.

```css example-bad
/* Avoid anchoring :has() to broad elements */
body:has(.sidebar) {
  /* styles */
}
:root:has(.content) {
  /* styles */
}
*:has(.item) {
  /* styles */
}
```

Stattdessen sollte `:has()` an spezifische Elemente wie `.container` oder `.gallery` verankert werden, um den Umfang zu reduzieren und die Leistung zu verbessern.

```css example-good
/* Use specific containers to limit scope */
.container:has(.sidebar-expanded) {
  /* styles */
}
.content-wrapper:has(> article[data-priority="high"]) {
  /* styles */
}
.gallery:has(> img[data-loaded="false"]) {
  /* styles */
}
```

### Minimieren von Unterbaum-Traversalen

Der innere Selektor (das `B` in `A:has(B)`) sollte Kombinatoren wie `>` oder `+` verwenden, um die Traversierung zu begrenzen. Wenn der Selektor innerhalb von `:has()` nicht eng eingeschränkt ist, muss der Browser möglicherweise den gesamten Unterbaum des Ankerelements bei jeder DOM-Änderung durchlaufen, um zu überprüfen, ob die Bedingung noch zutrifft.

In diesem Beispiel erfordert jede Änderung innerhalb von `.ancestor` die Überprüfung aller Nachkommen auf `.foo`:

```css example-bad
/* May trigger full subtree traversal */
.ancestor:has(.foo) {
  /* styles */
}
```

Die Verwendung von Kind- oder Geschwisterkombinatoren begrenzt den Umfang des inneren Selektors und reduziert die Leistungskosten von DOM-Mutationen. In diesem Beispiel muss der Browser nur direkte Kinder oder die Nachkommen eines bestimmten Geschwisters überprüfen:

```css example-good
/* More constrained - limits traversal */
.ancestor:has(> .foo) {
  /* direct child */
}
.ancestor:has(+ .sibling .foo) {
  /* descendant of adjacent sibling */
}
```

Bestimmte innere Selektoren können den Browser zwingen, bei jeder DOM-Änderung die Ahnenkette nach potenziellen Ankern zu durchsuchen, die aktualisiert werden müssen. Dies passiert, wenn die Struktur impliziert, dass Ahnen der geänderten Elemente überprüft werden müssen.

In diesem Beispiel erfordert jede DOM-Änderung die Überprüfung, ob das geänderte Element ein beliebiges Element (`*`) ist, das ein direkter Nachkomme von `.foo` ist und ob sein Elternteil (oder weitere Vorfahren) `.ancestor` sind.

```css example-bad
/* Might trigger ancestor traversal */
.ancestor:has(.foo > *) {
  /* styles */
}
```

Das Einschränken des inneren Selektors mit spezifischen Klassen oder direkten Kind-Kombinatoren (z. B. `.specific-child` im nächsten Snippet) reduziert teure Ahnen-Traversalen, indem die Überprüfung des Browsers auf ein gut definiertes Element beschränkt wird und so die Leistung verbessert wird.

```css example-good
/* Constrain the inner selector to avoid ancestor traversals */
.ancestor:has(.foo > .specific-child) {
  /* styles */
}
```

> [!NOTE]
> Diese Leistungsmerkmale können sich verbessern, wenn Browser `:has()`-Implementierungen optimieren, aber die grundlegenden Einschränkungen bleiben: `:has()` muss einen ganzen Unterbaum durchlaufen, daher ist die Minimierung der Größe des Unterbaums erforderlich. In einem Selektor wie `A:has(B)` stellen Sie sicher, dass Ihr `A` nicht zu viele Kinder hat und dass Ihr `B` eng gefasst ist, um unnötige Traversierungen zu vermeiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`:is()`](/de/docs/Web/CSS/Reference/Selectors/:is), [`:where()`](/de/docs/Web/CSS/Reference/Selectors/:where), [`:not()`](/de/docs/Web/CSS/Reference/Selectors/:not)
- [CSS-Selektoren und Kombinatoren](/de/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators)
- [CSS-Selektorstruktur](/de/docs/Web/CSS/Guides/Selectors/Selector_structure)
- [Selektorenliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list)
- [CSS-Selektormodul](/de/docs/Web/CSS/Guides/Selectors)
- [Selektion und Traversierung im DOM-Baum](/de/docs/Web/API/Document_Object_Model/Selection_and_traversal_on_the_DOM_tree)
