---
title: "`:has()` CSS-Pseudoklasse"
short-title: :has()
slug: Web/CSS/Reference/Selectors/:has
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

Die funktionale **`:has()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert ein Element, wenn irgendeiner der [relativen Selektoren](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#relative_selector) als Argument mindestens ein Element trifft, wenn es gegen dieses Element verankert ist. Diese Pseudoklasse bietet eine Möglichkeit, ein Elternelement oder ein vorheriges Geschwisterelement relativ zu einem Referenzelement auszuwählen, indem eine [relative Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#relative_selector_list) als Argument genommen wird.

```css
/* Selects an h1 heading with a
paragraph element that immediately follows
the h1 and applies the style to h1 */
h1:has(+ p) {
  margin-bottom: 0;
}
```

Die `:has()`-Pseudoklasse übernimmt die [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) des spezifischsten Selektors in ihren Argumenten auf die gleiche Weise wie {{cssxref(":is()")}} und {{cssxref(":not()")}}.

## Syntax

```css-nolint
:has(<relative-selector-list>) {
  /* ... */
}
```

Wenn die `:has()`-Pseudoklasse in einem Browser nicht unterstützt wird, schlägt der gesamte Selektorblock fehl, es sei denn, `:has()` befindet sich in einer verzeihenden Selektorliste, wie in [`:is()`](/de/docs/Web/CSS/Reference/Selectors/:is) und [`:where()`](/de/docs/Web/CSS/Reference/Selectors/:where).

Die `:has()`-Pseudoklasse kann nicht verschachtelt in einer anderen `:has()` sein.

Pseudoelemente sind ebenfalls keine gültigen Selektoren innerhalb von `:has()`, und Pseudoelemente sind keine gültigen Anker für `:has()`. Dies liegt daran, dass viele Pseudoelemente bedingt basierend auf dem Styling ihrer Vorfahren existieren und deren Abfrage durch `:has()` zyklische Abfragen einführen könnte.

## Beispiele

### Auswahl eines Elternelements

Sie könnten nach einem "Elternkombinator" ([combinator](/de/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators#combinators)) suchen, der es Ihnen ermöglicht, den DOM-Baum hinaufzugehen und das Elternelement eines bestimmten Elements auszuwählen. Die `:has()`-Pseudoklasse ermöglicht dies durch die Verwendung von `parent:has(child)` (für jedes Elternteil) oder `parent:has(> child)` (für das direkte Elternteil). Dieses Beispiel zeigt, wie ein `<section>`-Element gestylt wird, wenn es ein Kind mit der Klasse `featured` enthält.

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

Dieses Beispiel zeigt zwei ähnliche Texte nebeneinander zum Vergleich – links eine `H1`-Überschrift gefolgt von einem Absatz und rechts eine `H1`-Überschrift gefolgt von einer `H2`-Überschrift und dann einem Absatz. Im Beispiel rechts hilft `:has()`, das `H1`-Element auszuwählen, das sofort von einem `H2`-Element gefolgt wird (angezeigt durch den Geschwisterkombinator [`+`](/de/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator)), und die CSS-Regel reduziert den Abstand nach einem solchen `H1`-Element. Ohne die `:has()`-Pseudoklasse können Sie CSS-Selektoren nicht verwenden, um ein vorheriges Geschwisterelement eines anderen Typs oder ein Elternelement auszuwählen.

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

Hier wird die erste [`:is()`](/de/docs/Web/CSS/Reference/Selectors/:is)-Pseudoklasse verwendet, um eines der Überschriftelemente in der Liste auszuwählen. Die zweite `:is()`-Pseudoklasse wird verwendet, um eine Liste von Geschwisterselektoren als Argument für `:has()` zu übergeben. Die `:has()`-Pseudoklasse hilft, jedes `H1`-, `H2`- oder `H3`-Element auszuwählen, das sofort gefolgt wird (angezeigt durch [`+`](/de/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator)) von einem `H2`-, `H3`- oder `H4`-Element, und die CSS-Regel reduziert den Abstand nach solchen `H1`-, `H2`- oder `H3`-Elementen.

Dieser Selektor könnte auch geschrieben werden als:

```css
:is(h1, h2, h3):has(+ h2, + h3, + h4) {
  margin: 0 0 0.25rem 0;
}
```

### Logische Operationen

Der `:has()`-relationale Selektor kann verwendet werden, um zu prüfen, ob eines der Merkmale wahr ist oder ob alle Merkmale wahr sind.

Durch die Verwendung von durch Komma getrennten Werten innerhalb des `:has()`-relationalen Selektors prüfen Sie, ob einer der Parameter existiert. `x:has(a, b)` wird `x` stylen, wenn Nachkomme `a` ODER `b` existiert.

Indem Sie mehrere `:has()`-relationale Selektoren miteinander verketten, prüfen Sie, ob alle Parameter existieren. `x:has(a):has(b)` wird `x` stylen, wenn Nachkomme `a` UND `b` existiert.

```css
body:has(video, audio) {
  /* styles to apply if the content contains audio OR video */
}
body:has(video):has(audio) {
  /* styles to apply if the content contains both audio AND video */
}
```

## Analogie zwischen :has() und regulären Ausdrücken

Interessanterweise können wir einige CSS-`:has()`-Konstrukte mit der [Lookahead Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) in regulären Ausdrücken in Verbindung bringen, da beide es ermöglichen, Elemente (oder Zeichenfolgen in regulären Ausdrücken) basierend auf einer Bedingung auszuwählen, ohne tatsächlich das Bedingungsmatchingelement (oder die Zeichenfolge) selbst auszuwählen.

### Positive Lookahead (?=pattern)

Im regulären Ausdruck `abc(?=xyz)` wird die Zeichenfolge `abc` nur dann gematcht, wenn sie unmittelbar von der Zeichenfolge `xyz` gefolgt wird. Da es sich um eine Lookahead-Operation handelt, wird `xyz` nicht im Match eingeschlossen.

Das analoge Konstrukt in CSS wäre `.abc:has(+ .xyz)`: Es wählt das Element `.abc` nur aus, wenn ein nächstes Geschwister `.xyz` vorhanden ist. Der Teil `:has(+ .xyz)` fungiert als Lookahead-Operation, da das `.abc`-Element ausgewählt wird und nicht das `.xyz`-Element.

### Negative Lookahead (?!pattern)

Ähnlich verhält es sich bei der negativen Lookahead-Situation, im regulären Ausdruck `abc(?!xyz)` wird die Zeichenfolge `abc` nur dann gematcht, wenn sie _nicht_ von `xyz` gefolgt wird. Das analoge CSS-Konstrukt `.abc:has(+ :not(.xyz))` wählt das Element `.abc` nicht aus, wenn das nächste Element `.xyz` ist.

## Leistungserwägungen

Bestimmte Verwendungen der `:has()`-Pseudoklasse können die Seitenleistung erheblich beeinträchtigen, insbesondere bei dynamischen Updates (DOM-Mutationen). Browser-Engines müssen `:has()`-Selektoren neu bewerten, wenn sich der DOM ändert, und komplexe oder schlecht eingeschränkte Selektoren können zu teuren Berechnungen führen.

### Vermeiden Sie breite Anker

Der Ankerselektor (das `A` in `A:has(B)`) sollte kein Element sein, das zu viele Kinder hat, wie `body`, `:root` oder `*`. Das Ankern von `:has()` an sehr allgemeine Selektoren kann die Leistung beeinträchtigen, da jede DOM-Änderung innerhalb des gesamten Unterbaums eines breit ausgewählten Elements erfordert, dass der Browser die `:has()`-Bedingung erneut überprüft.

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

### Minimieren Sie Unterbaumbesichtigungen

Der innere Selektor (das `B` in `A:has(B)`) sollte Kombinatoren wie `>` oder `+` verwenden, um die Traversierung einzuschränken. Wenn der Selektor innerhalb von `:has()` nicht stark eingeschränkt ist, muss der Browser möglicherweise bei jeder DOM-Mutation den gesamten Unterbaum des Ankerelements durchlaufen, um zu überprüfen, ob die Bedingung weiterhin erfüllt ist.

In diesem Beispiel erfordert jede Änderung innerhalb von `.ancestor`, dass alle Nachkommen auf `.foo` geprüft werden:

```css example-bad
/* May trigger full subtree traversal */
.ancestor:has(.foo) {
  /* styles */
}
```

Durch die Verwendung von Kind- oder Geschwisterkombinatoren wird der Umfang des inneren Selektors eingeschränkt, wodurch die Leistungskosten von DOM-Mutationen reduziert werden. In diesem Beispiel muss der Browser nur die direkten Kinder oder die Nachkommen eines bestimmten Geschwisters überprüfen:

```css example-good
/* More constrained - limits traversal */
.ancestor:has(> .foo) {
  /* direct child */
}
.ancestor:has(+ .sibling .foo) {
  /* descendant of adjacent sibling */
}
```

Bestimmte innere Selektoren können den Browser zwingen, für jede DOM-Mutation die Vorfahrenkette nach potenziellen Ankern zu durchsuchen, die aktualisiert werden müssen. Dies geschieht, wenn die Struktur impliziert, dass die Vorfahren des mutierten Elements überprüft werden müssen.

In diesem Beispiel erfordert jede DOM-Änderung zu prüfen, ob das geänderte Element ein beliebiges Element (`*`) ist, das ein direktes Kind von `.foo` ist, und ob sein Elternteil (oder weitere Vorfahren) `.ancestor` ist.

```css example-bad
/* Might trigger ancestor traversal */
.ancestor:has(.foo > *) {
  /* styles */
}
```

Die Eingrenzung des inneren Selektors mit spezifischen Klassen oder direkten Kindkombinatoren (z.B. `.specific-child` im nächsten Schnipsel) reduziert teure Vorfahrensdurchsuchungen, indem die Überprüfung des Browsers auf ein wohldefiniertes Element beschränkt wird, und verbessert die Leistung.

```css example-good
/* Constrain the inner selector to avoid ancestor traversals */
.ancestor:has(.foo > .specific-child) {
  /* styles */
}
```

> [!NOTE]
> Diese Leistungsmerkmale können sich verbessern, wenn Browser `:has()`-Implementierungen optimieren, aber die grundlegenden Einschränkungen bleiben bestehen: `:has()` muss einen ganzen Unterbaum durchlaufen, daher sollten Sie die Größe des Unterbaums minimieren. In einem Selektor wie `A:has(B)` stellen Sie sicher, dass Ihr `A` nicht zu viele Kinder hat und dass Ihr `B` eng eingeschränkt ist, um unnötige Traversierungen zu vermeiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`:is()`](/de/docs/Web/CSS/Reference/Selectors/:is), [`:where()`](/de/docs/Web/CSS/Reference/Selectors/:where), [`:not()`](/de/docs/Web/CSS/Reference/Selectors/:not)
- [CSS-Selektoren und Kombinatoren](/de/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators)
- [CSS-Selektorstruktur](/de/docs/Web/CSS/Guides/Selectors/Selector_structure)
- [Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list)
- [CSS-Selektormodul](/de/docs/Web/CSS/Guides/Selectors)
- [Auswahl und Navigation im DOM-Baum](/de/docs/Web/API/Document_Object_Model/Selection_and_traversal_on_the_DOM_tree)
