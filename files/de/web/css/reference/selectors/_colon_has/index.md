---
title: "`:has()` CSS-Pseudoklasse"
short-title: :has()
slug: Web/CSS/Reference/Selectors/:has
l10n:
  sourceCommit: ebc0a01b494e58ada6d89a5f94141cdcba7efbc7
---

Die funktionale **`:has()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert ein Element, wenn einer der als Argument übergebenen [relativen Selektoren](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#relative_selector) mindestens ein Element trifft, wenn er gegen dieses Element verankert ist. Diese Pseudoklasse bietet eine Möglichkeit, ein Elternelement oder ein früheres Geschwisterelement in Bezug auf ein Referenzelement auszuwählen, indem es eine [relative Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#relative_selector_list) als Argument verwendet.

```css
/* Selects an h1 heading with a
paragraph element that immediately follows
the h1 and applies the style to h1 */
h1:has(+ p) {
  margin-bottom: 0;
}
```

Die `:has()` Pseudoklasse übernimmt die [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) des spezifischsten Selektors in ihren Argumenten auf die gleiche Weise wie {{cssxref(":is()")}} und {{cssxref(":not()")}}.

## Syntax

```css-nolint
:has(<relative-selector-list>) {
  /* ... */
}
```

Wenn die `:has()` Pseudoklasse selbst in einem Browser nicht unterstützt wird, schlägt der gesamte Selektorblock fehl, es sei denn, `:has()` befindet sich in einer nachsichtigen Selektorliste, wie in [`:is()`](/de/docs/Web/CSS/Reference/Selectors/:is) und [`:where()`](/de/docs/Web/CSS/Reference/Selectors/:where).

Die `:has()` Pseudoklasse kann nicht innerhalb einer anderen `:has()` verschachtelt werden.

Pseudoelemente sind auch keine gültigen Selektoren innerhalb von `:has()` und Pseudoelemente sind keine gültigen Anker für `:has()`. Dies liegt daran, dass viele Pseudoelemente bedingt basierend auf dem Styling ihrer Vorfahren existieren und es zu zyklischen Abfragen führen kann, wenn diese durch `:has()` abgefragt würden.

## Beispiele

### Auswahl eines Elternelements

Sie suchen möglicherweise nach einem "Eltern-[Kombinator](/de/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators#combinators)", der es Ihnen ermöglicht, den DOM-Baum aufwärts zu gehen und das Elternelement eines bestimmten Elements auszuwählen. Die `:has()` Pseudoklasse erledigt dies, indem sie `parent:has(child)` (für jedes Elternelement) oder `parent:has(> child)` (für direktes Elternelement) verwendet. Dieses Beispiel zeigt, wie ein `<section>` Element gestaltet wird, wenn es ein Kind mit der Klasse `featured` enthält.

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

Die `:has()` Stil-Deklaration im folgenden Beispiel passt den Abstand nach `<h1>` Überschriften an, wenn diesen sofort eine `<h2>` Überschrift folgt.

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

Dieses Beispiel zeigt zwei ähnliche Texte nebeneinander zum Vergleich – links mit einer `H1` Überschrift gefolgt von einem Absatz und rechts mit einer `H1` Überschrift gefolgt von einer `H2` Überschrift und dann einem Absatz. Im Beispiel rechts hilft `:has()` dabei, das `H1` Element auszuwählen, das unmittelbar von einem `H2` Element gefolgt wird (angedeutet durch den nächsten Geschwister-Kombinator [`+`](/de/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator)) und die CSS-Regel reduziert den Abstand nach einem solchen `H1` Element. Ohne die `:has()` Pseudoklasse können Sie keine CSS-Selektoren verwenden, um ein vorhergehendes Geschwister eines anderen Typs oder ein Elternelement auszuwählen.

Diese Verwendung von `:has()` ist analog zu einem [Lookahead Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) in regulären Ausdrücken, da beide es ermöglichen, Elemente (oder Zeichenfolgen in regulären Ausdrücken) basierend auf dem auszuwählen, was _danach_ folgt, was nur möglich ist, wenn der Prozessor "zurückspulen" kann. Im regulären Ausdruck `abc(?=xyz)` wird die Zeichenkette `abc` nur dann abgeglichen, wenn sie unmittelbar von der Zeichenkette `xyz` gefolgt wird. Da es sich um eine Lookahead-Operation handelt, wird das `xyz` nicht in den Abgleich einbezogen. Die analoge Konstruktion in CSS wäre `.abc:has(+ .xyz)`: sie wählt das Element `.abc` nur dann aus, wenn ein nächstes Geschwister `.xyz` vorhanden ist. Der Teil `:has(+ .xyz)` sucht nach dem nächsten Element `.xyz`, wählt dann aber stattdessen das vorherige Element `.abc` aus. Ähnlich können Sie eine negative Lookahead-Bedingung wie `abc(?!xyz)` implementieren, indem Sie das `:has()` negieren: `.abc:not(:has(+ .xyz))` stimmt nur mit `.abc` Elementen überein, die nicht von `.xyz` gefolgt werden (entweder weil das nächste Geschwister nicht mit `.xyz` übereinstimmt oder weil es das letzte Kindknoten ist).

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

Hier wird die erste [`:is()`](/de/docs/Web/CSS/Reference/Selectors/:is) Pseudoklasse verwendet, um eines der Überschriftselemente in der Liste auszuwählen. Die zweite `:is()` Pseudoklasse wird verwendet, um eine Liste von nächsten Geschwister-Selektoren als Argument an `:has()` zu übergeben. Die `:has()` Pseudoklasse hilft, jedes `H1`, `H2` oder `H3` Element auszuwählen, das unmittelbar gefolgt wird (angezeigt durch [`+`](/de/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator)) von einem `H2`, `H3` oder `H4` Element und die CSS-Regel reduziert den Abstand nach solchen `H1`, `H2` oder `H3` Elementen.

Dieser Selektor hätte auch geschrieben werden können als:

```css
:is(h1, h2, h3):has(+ h2, + h3, + h4) {
  margin: 0 0 0.25rem 0;
}
```

### Logische Operationen

Der `:has()` relationale Selektor kann verwendet werden, um zu überprüfen, ob eins der mehreren Merkmale zutrifft oder ob alle Merkmale zutreffen.

Durch die Verwendung von kommagetrennten Werten innerhalb des `:has()` relationalen Selektors überprüfen Sie, ob eines der Parameter existiert. `x:has(a, b)` wird `x` gestalten, wenn das Nachkomme `a` ODER `b` existiert.

Indem Sie mehrere `:has()` relationale Selektoren aneinanderreihen, überprüfen Sie, ob alle Parameter existieren. `x:has(a):has(b)` wird `x` gestalten, wenn das Nachkomme `a` UND `b` existiert.

```css
body:has(video, audio) {
  /* styles to apply if the content contains audio OR video */
}
body:has(video):has(audio) {
  /* styles to apply if the content contains both audio AND video */
}
```

## Leistungserwägungen

Bestimmte Verwendungen der `:has()` Pseudoklasse können einen erheblichen Einfluss auf die Seitenleistung haben, insbesondere während dynamischer Updates (DOM-Mutationen). Browser-Engines müssen `:has()` Selektoren neu evaluieren, wenn sich das DOM ändert, und komplexe oder schlecht eingeschränkte Selektoren können zu teuren Berechnungen führen.

### Vermeiden Sie breite Verankerung

Der Anker-Selektor (das `A` in `A:has(B)`) sollte kein Element sein, das zu viele Kinder hat, wie `body`, `:root` oder `*`. Die Verankerung von `:has()` an sehr allgemeinen Selektoren kann die Leistung beeinträchtigen, da jede DOM-Änderung innerhalb des gesamten Teilbaums eines breit ausgewählten Elements den Browser dazu zwingt, die `:has()` Bedingung erneut zu überprüfen.

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

### Minimieren Sie Teilbaumdurchquerungen

Der innere Selektor (das `B` in `A:has(B)`) sollte Kombinatoren wie `>` oder `+` verwenden, um die Durchquerung zu begrenzen. Wenn der Selektor innerhalb von `:has()` nicht streng eingeschränkt ist, muss der Browser möglicherweise den gesamten Teilbaum des Ankerelements bei jeder DOM-Mutation durchlaufen, um zu überprüfen, ob die Bedingung noch zutrifft.

In diesem Beispiel erfordert jede Änderung innerhalb von `.ancestor` das Überprüfen aller Nachkommen auf `.foo`:

```css example-bad
/* May trigger full subtree traversal */
.ancestor:has(.foo) {
  /* styles */
}
```

Die Verwendung von Kind- oder Geschwister-Kombinatoren begrenzt den Umfang des inneren Selektors und reduziert die Leistungskosten von DOM-Mutationen. In diesem Beispiel muss der Browser nur direkte Kinder oder Nachkommen eines bestimmten Geschwisters überprüfen:

```css example-good
/* More constrained - limits traversal */
.ancestor:has(> .foo) {
  /* direct child */
}
.ancestor:has(+ .sibling .foo) {
  /* descendant of adjacent sibling */
}
```

Bestimmte innere Selektoren können den Browser dazu zwingen, bei jeder DOM-Mutation die Ahnenkette nach potenziellen Ankern zu durchlaufen, die ein Update benötigen könnten. Dies geschieht, wenn die Struktur impliziert, dass die Ahnen des mutierten Elements überprüft werden müssen.

In diesem Beispiel erfordert jede DOM-Änderung das Überprüfen, ob das geänderte Element ein beliebiges Element (`*`) ist, das ein direktes Kind von `.foo` ist, und ob sein Elternelement (oder weitere Vorfahren) `.ancestor` ist.

```css example-bad
/* Might trigger ancestor traversal */
.ancestor:has(.foo > *) {
  /* styles */
}
```

Das Einschränken des inneren Selektors mit spezifischen Klassen oder direkten Kind-Kombinatoren (z. B. `.specific-child` im nächsten Snippet) reduziert teure Ahnen-Durchquerungen, indem es die Überprüfung des Browsers auf ein gut definiertes Element begrenzt und die Leistung verbessert.

```css example-good
/* Constrain the inner selector to avoid ancestor traversals */
.ancestor:has(.foo > .specific-child) {
  /* styles */
}
```

> [!NOTE]
> Diese Leistungsmerkmale können sich verbessern, da Browser die `:has()` Implementierungen optimieren, aber die grundlegenden Einschränkungen bleiben bestehen: `:has()` muss einen ganzen Teilbaum durchqueren, daher müssen Sie die Größe des Teilbaums minimieren. In einem Selektor wie `A:has(B)` stellen Sie sicher, dass Ihr `A` nicht zu viele Kinder hat und dass Ihr `B` streng eingeschränkt ist, um unnötige Durchquerungen zu vermeiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`:is()`](/de/docs/Web/CSS/Reference/Selectors/:is), [`:where()`](/de/docs/Web/CSS/Reference/Selectors/:where), [`:not()`](/de/docs/Web/CSS/Reference/Selectors/:not)
- [CSS Selektoren und Kombinatoren](/de/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators)
- [CSS Selektor-Struktur](/de/docs/Web/CSS/Guides/Selectors/Selector_structure)
- [Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list)
- [CSS Selektormodul](/de/docs/Web/CSS/Guides/Selectors)
- [Selektion und Durchquerung des DOM-Baums](/de/docs/Web/API/Document_Object_Model/Selection_and_traversal_on_the_DOM_tree)
