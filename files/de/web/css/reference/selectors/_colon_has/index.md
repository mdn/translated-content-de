---
title: :has()
slug: Web/CSS/Reference/Selectors/:has
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

Die funktionale **`:has()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert ein Element, wenn eines der [relativen Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#relative_selector), das als Argument übergeben wird, mindestens ein Element trifft, wenn es gegen dieses Element verankert ist. Diese Pseudoklasse bietet eine Möglichkeit, ein Elternelement oder ein vorheriges Geschwisterelement in Bezug auf ein Referenzelement zu selektieren, indem eine [relative Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#relative_selector_list) als Argument genommen wird.

```css
/* Selects an h1 heading with a
paragraph element that immediately follows
the h1 and applies the style to h1 */
h1:has(+ p) {
  margin-bottom: 0;
}
```

Die `:has()` Pseudoklasse übernimmt die [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) des spezifischsten Selektors in ihren Argumenten auf die gleiche Weise wie {{CSSxRef(":is", ":is()")}} und {{CSSxRef(":not", ":not()")}}.

## Syntax

```css-nolint
:has(<relative-selector-list>) {
  /* ... */
}
```

Wenn die `:has()` Pseudoklasse in einem Browser nicht unterstützt wird, schlägt der gesamte Selektorblock fehl, es sei denn, `:has()` befindet sich in einer toleranten Selektorliste, wie z.B. in [`:is()`](/de/docs/Web/CSS/Reference/Selectors/:is) und [`:where()`](/de/docs/Web/CSS/Reference/Selectors/:where).

Die `:has()` Pseudoklasse kann nicht innerhalb einer anderen `:has()` geschachtelt werden.

Pseudo-Elemente sind auch keine gültigen Selektoren innerhalb von `:has()` und dürfen nicht als Anker für `:has()` verwendet werden. Dies liegt daran, dass viele Pseudo-Elemente bedingt basierend auf dem Styling ihrer Vorfahren existieren und die Abfrage dieser durch `:has()` zu zyklischen Abfragen führen kann.

## Beispiele

### Auswahl eines Elternelements

Sie suchen möglicherweise nach einem "Eltern-[Kombinator](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#combinators)", der es Ihnen ermöglicht, im DOM-Baum nach oben zu gehen und das übergeordnete Element eines bestimmten Elements zu selektieren. Die `:has()` Pseudoklasse tut dies, indem sie `parent:has(child)` (für ein beliebiges übergeordnetes Element) oder `parent:has(> child)` (für direktes übergeordnetes Element) verwendet. Dieses Beispiel zeigt, wie ein `<section>`-Element gestylt wird, wenn es ein Kind mit der Klasse `featured` enthält.

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

### Mit dem Geschwisterknoten-Kombinator

Die `:has()` Stil-Deklaration im folgenden Beispiel passt den Abstand nach `<h1>` Überschriften an, wenn sie unmittelbar von einer `<h2>` Überschrift gefolgt werden.

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

Dieses Beispiel zeigt zwei ähnliche Texte nebeneinander zum Vergleich – den linken mit einer `H1`-Überschrift gefolgt von einem Absatz und den rechten mit einer `H1`-Überschrift gefolgt von einer `H2`-Überschrift und dann einem Absatz. Im rechten Beispiel hilft `:has()`, das `H1`-Element auszuwählen, das unmittelbar von einem `H2`-Element gefolgt wird (angezeigt durch den nächsten Geschwisterkombiator [`+`](/de/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator)), und die CSS-Regel reduziert den Abstand nach einem solchen `H1`-Element. Ohne die `:has()` Pseudoklasse können Sie keine CSS-Selektoren verwenden, um ein vorangehendes Geschwisterelement eines anderen Typs oder ein übergeordnetes Element zu selektieren.

### Mit der :is() Pseudo-Klasse

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

Hier wird die erste [`:is()`](/de/docs/Web/CSS/Reference/Selectors/:is) Pseudoklasse verwendet, um eines der Überschriftselemente in der Liste auszuwählen. Die zweite `:is()` Pseudoklasse wird verwendet, um eine Liste von Geschwisterselektoren als Argument an `:has()` zu übergeben. Die `:has()` Pseudoklasse hilft, jedes `H1`, `H2` oder `H3` Element auszuwählen, das unmittelbar von (angezeigt durch [`+`](/de/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator)) einem `H2`, `H3` oder `H4`-Element gefolgt wird und die CSS-Regel reduziert den Abstand nach solchen `H1`, `H2` oder `H3` Elementen.

Dieser Selektor könnte auch so geschrieben werden:

```css
:is(h1, h2, h3):has(+ h2, + h3, + h4) {
  margin: 0 0 0.25rem 0;
}
```

### Logische Operationen

Der `:has()` relationale Selektor kann verwendet werden, um zu überprüfen, ob eines der mehreren Merkmale wahr ist oder ob alle Merkmale wahr sind.

Durch die Verwendung von kommagetrennten Werten innerhalb des relationalen `:has()` Selektors überprüfen Sie, ob eines der Parameter existiert. `x:has(a, b)` wird `x` stylen, wenn Nachfahre `a` ODER `b` existiert.

Durch das Aneinanderreihen mehrerer relationaler `:has()` Selektoren prüfen Sie, ob alle Parameter existieren. `x:has(a):has(b)` wird `x` stylen, wenn Nachfahre `a` UND `b` existieren.

```css
body:has(video, audio) {
  /* styles to apply if the content contains audio OR video */
}
body:has(video):has(audio) {
  /* styles to apply if the content contains both audio AND video */
}
```

## Analogie zwischen :has() und regulären Ausdrücken

Interessanterweise können wir einige CSS `:has()` Konstrukte mit der [Lookahead Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) in regulären Ausdrücken in Verbindung bringen, da beide es ermöglichen, Elemente (oder Zeichenfolgen in regulären Ausdrücken) basierend auf einer Bedingung auszuwählen, ohne tatsächlich das der Bedingung entsprechende Element (oder die Zeichenfolge) selbst auszuwählen.

### Positiver Lookahead (?=pattern)

Im regulären Ausdruck `abc(?=xyz)` wird die Zeichenfolge `abc` nur dann gematcht, wenn sie unmittelbar von der Zeichenfolge `xyz` gefolgt wird. Da es sich um eine Lookahead-Operation handelt, wird `xyz` nicht in den Match einbezogen.

Das analoge Konstrukt in CSS wäre `.abc:has(+ .xyz)`: es selektiert das Element `.abc`, nur wenn es ein nächstes Geschwister `.xyz` gibt. Der Teil `:has(+ .xyz)` wirkt wie eine Lookahead-Operation, weil das Element `.abc` ausgewählt wird und nicht das Element `.xyz`.

### Negativer Lookahead (?!pattern)

Ähnlich verhält es sich beim negativen Lookahead. Im regulären Ausdruck `abc(?!xyz)` wird die Zeichenfolge `abc` nur dann gematcht, wenn sie _nicht_ von `xyz` gefolgt wird. Das analoge CSS-Konstrukt `.abc:has(+ :not(.xyz))` selektiert das Element `.abc` nicht, wenn das nächste Element `.xyz` ist.

## Leistungsüberlegungen

Bestimmte Verwendungen der `:has()` Pseudoklasse können die Leistung der Seite erheblich beeinträchtigen, insbesondere während dynamischer Aktualisierungen (DOM-Mutationen). Browser-Engines müssen `:has()` Selektoren neu bewerten, wenn sich das DOM ändert, und komplexe oder schlecht eingeschränkte Selektoren können zu teuren Berechnungen führen.

### Vermeiden Sie breite Anker

Der Ankerselektor (das `A` in `A:has(B)`) sollte kein Element sein, das zu viele Kinder hat, wie `body`, `:root` oder `*`. Die Verankerung von `:has()` an sehr allgemeinen Selektoren kann die Leistung verschlechtern, da jede DOM-Änderung innerhalb des gesamten Teilbaums eines breit ausgewählten Elements den Browser erfordert, die `:has()` Bedingung erneut zu überprüfen.

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

Stattdessen sollten Sie `:has()` an spezifische Elemente wie `.container` oder `.gallery` verankern, um den Umfang zu reduzieren und die Leistung zu verbessern.

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

### Minimieren Sie die Traversal von Teilbäumen

Der innere Selektor (das `B` in `A:has(B)`) sollte Kombinatoren wie `>` oder `+` verwenden, um die Traversierung zu begrenzen. Wenn der Selektor innerhalb von `:has()` nicht eng eingeschränkt ist, muss der Browser möglicherweise den gesamten Teilbaum des Ankerelements bei jeder DOM-Änderung durchqueren, um zu überprüfen, ob die Bedingung noch zutrifft.

In diesem Beispiel erfordert jede Änderung innerhalb von `.ancestor`, dass alle Nachkommen auf `.foo` überprüft werden:

```css example-bad
/* May trigger full subtree traversal */
.ancestor:has(.foo) {
  /* styles */
}
```

Die Verwendung von Kinder- oder Geschwisterkombiatoren begrenzt den Umfang des inneren Selektors und reduziert die Leistungskosten von DOM-Mutationen. In diesem Beispiel muss der Browser nur direkte Kinder oder die Nachkommen eines bestimmten Geschwisters überprüfen:

```css example-good
/* More constrained - limits traversal */
.ancestor:has(> .foo) {
  /* direct child */
}
.ancestor:has(+ .sibling .foo) {
  /* descendant of adjacent sibling */
}
```

Bestimmte innere Selektoren können den Browser zwingen, bei jeder DOM-Änderung die Ahnenkette nach potenziellen Ankern zu durchlaufen, die möglicherweise aktualisiert werden müssen. Dies geschieht, wenn die Struktur impliziert, dass die Ahnen des mutierten Elements überprüft werden müssen.

In diesem Beispiel erfordert jede DOM-Änderung, dass geprüft wird, ob das geänderte Element ein beliebiges Element (`*`) ist, das ein direktes Kind von `.foo` ist, und ob sein Elternteil (oder weitere Vorfahren) `.ancestor` ist.

```css example-bad
/* Might trigger ancestor traversal */
.ancestor:has(.foo > *) {
  /* styles */
}
```

Das Einschränken des inneren Selektors mit spezifischen Klassen oder direkten Kinder-Kombinatoren (z. B. `.specific-child` im nächsten Snippet) reduziert teure Ahnen-Traversalen, indem die Überprüfung des Browsers auf ein klar definiertes Element beschränkt wird, was die Leistung verbessert.

```css example-good
/* Constrain the inner selector to avoid ancestor traversals */
.ancestor:has(.foo > .specific-child) {
  /* styles */
}
```

> [!NOTE]
> Diese Leistungseigenschaften können sich verbessern, wenn Browser die `:has()` Implementierungen optimieren, aber die grundlegenden Einschränkungen bleiben bestehen: `:has()` muss einen ganzen Teilbaum durchqueren, daher sollten Sie die Größe des Teilbaums minimieren. In einem Selektor wie `A:has(B)`, stellen Sie sicher, dass Ihr `A` nicht zu viele Kinder hat und dass Ihr `B` streng eingeschränkt ist, um unnötige Traversalen zu vermeiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`:is()`](/de/docs/Web/CSS/Reference/Selectors/:is), [`:where()`](/de/docs/Web/CSS/Reference/Selectors/:where), [`:not()`](/de/docs/Web/CSS/Reference/Selectors/:not)
- [CSS Selektoren und Kombinatoren](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators)
- [Struktur von CSS Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure)
- [Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list)
- [CSS Selektormodul](/de/docs/Web/CSS/CSS_selectors)
- [Selektion und Traversierung auf dem DOM-Baum](/de/docs/Web/API/Document_Object_Model/Selection_and_traversal_on_the_DOM_tree)
