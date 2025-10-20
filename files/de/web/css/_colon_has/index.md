---
title: :has()
slug: Web/CSS/:has
l10n:
  sourceCommit: 277a8954951c900ef60a5175503976284c1d328d
---

Die funktionale **`:has()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, wenn eines der [relativen Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#relative_selector), die als Argument übergeben werden, bei Verankerung gegen dieses Element mindestens ein Element treffen. Diese Pseudoklasse bietet eine Möglichkeit, ein Elternelement oder ein vorheriges Geschwisterelement in Bezug auf ein Referenzelement auszuwählen, indem sie eine [relative Selektorliste](/de/docs/Web/CSS/Selector_list#relative_selector_list) als Argument verwendet.

```css
/* Selects an h1 heading with a
paragraph element that immediately follows
the h1 and applies the style to h1 */
h1:has(+ p) {
  margin-bottom: 0;
}
```

Die `:has()` Pseudoklasse nimmt die [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) des spezifischsten Selektors in ihren Argumenten genauso wie {{CSSxRef(":is", ":is()")}} und {{CSSxRef(":not", ":not()")}} an.

## Syntax

```css-nolint
:has(<relative-selector-list>) {
  /* ... */
}
```

Wenn die `:has()` Pseudoklasse in einem Browser nicht unterstützt wird, schlägt der gesamte Selektorblock fehl, es sei denn, `:has()` befindet sich in einer fehlerverzeihenden Selektorliste, wie z.B. in [`:is()`](/de/docs/Web/CSS/:is) und [`:where()`](/de/docs/Web/CSS/:where).

Die `:has()` Pseudoklasse kann nicht innerhalb einer anderen `:has()` geschachtelt werden.

Pseudoelemente sind ebenfalls keine gültigen Selektoren innerhalb von `:has()` und Pseudoelemente sind keine validen Anker für `:has()`. Dies liegt daran, dass viele Pseudoelemente bedingt basierend auf dem Styling ihrer Vorfahren existieren und das Erlauben, dass diese durch `:has()` abgefragt werden können, zu zyklischen Abfragen führen kann.

## Beispiele

### Auswahl eines Elternelements

Eventuell suchen Sie nach einem "Elternkombinator", der es Ihnen ermöglicht, den DOM-Baum hinaufzugehen und das Elternteil eines bestimmten Elements auszuwählen. Die `:has()` Pseudoklasse ermöglicht dies durch die Verwendung von `parent:has(child)` (für beliebige Eltern) oder `parent:has(> child)` (für direkte Eltern). Dieses Beispiel zeigt, wie man ein `<section>`-Element stylt, wenn es ein Kind mit der Klasse `featured` enthält.

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

Die `:has()` Stil-Deklaration im folgenden Beispiel passt den Abstand nach `<h1>` Überschriften an, wenn sie direkt von einer `<h2>` Überschrift gefolgt werden.

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

Dieses Beispiel zeigt zwei ähnliche Texte nebeneinander zum Vergleich – der linke mit einer `H1` Überschrift gefolgt von einem Absatz und der rechte mit einer `H1` Überschrift gefolgt von einer `H2` Überschrift und dann einem Absatz. Im Beispiel auf der rechten Seite hilft `:has()` dabei, das `H1` Element auszuwählen, das sofort von einem `H2` Element gefolgt wird (angezeigt durch den nachgeschalteten Geschwisterkombinator [`+`](/de/docs/Web/CSS/Next-sibling_combinator)), und die CSS-Regel reduziert den Abstand nach einem solchen `H1` Element. Ohne die `:has()` Pseudoklasse können Sie keine CSS-Selektoren verwenden, um ein vorhergehendes Geschwisterelement eines anderen Typs oder ein Elternelement auszuwählen.

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

Hierbei wird die erste [`:is()`](/de/docs/Web/CSS/:is) Pseudoklasse verwendet, um eines der Überschriftselemente in der Liste auszuwählen. Die zweite `:is()` Pseudoklasse wird verwendet, um eine Liste von nachgeschalteten Geschwisterselektoren als Argument für `:has()` zu übergeben. Die `:has()` Pseudoklasse hilft dabei, jedes `H1`, `H2` oder `H3` Element auszuwählen, das unmittelbar von einem `H2`, `H3`, oder `H4` Element gefolgt wird (angezeigt durch [`+`](/de/docs/Web/CSS/Next-sibling_combinator)) und die CSS-Regel reduziert den Abstand nach solchen `H1`, `H2` oder `H3` Elementen.

Dieser Selektor könnte auch folgendermaßen geschrieben werden:

```css
:is(h1, h2, h3):has(+ h2, + h3, + h4) {
  margin: 0 0 0.25rem 0;
}
```

### Logische Operationen

Der `:has()` relationale Selektor kann verwendet werden, um zu prüfen, ob eines von mehreren Merkmalen wahr ist oder ob alle Merkmale wahr sind.

Indem Sie Komma-getrennte Werte innerhalb des `:has()` relationalen Selektors verwenden, prüfen Sie, ob eines der Parameter existiert. `x:has(a, b)` wird `x` stylen, wenn der Nachfahre `a` ODER `b` existiert.

Indem Sie mehrere `:has()` relationale Selektoren aneinander reihen, prüfen Sie, ob alle Parameter existieren. `x:has(a):has(b)` wird `x` stylen, wenn die Nachfahren `a` UND `b` existieren.

```css
body:has(video, audio) {
  /* styles to apply if the content contains audio OR video */
}
body:has(video):has(audio) {
  /* styles to apply if the content contains both audio AND video */
}
```

## Analogie zwischen :has() und regulären Ausdrücken

Interessanterweise können wir einige CSS `:has()` Konstrukte mit der [Lookahead Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) in regulären Ausdrücken in Beziehung setzen, weil beide es Ihnen ermöglichen, Elemente (oder Strings in regulären Ausdrücken) basierend auf einer Bedingung auszuwählen, ohne tatsächlich das bedingungserfüllte Element (oder den String) selbst auszuwählen.

### Positive Lookahead (?=pattern)

Im regulären Ausdruck `abc(?=xyz)` wird der String `abc` nur dann matcht, wenn ihm der String `xyz` unmittelbar folgt. Da es sich um eine Lookahead-Operation handelt, ist das `xyz` nicht im Match enthalten.

Das analoge Konstrukt in CSS wäre `.abc:has(+ .xyz)`: es wählt das Element `.abc` nur dann aus, wenn es ein nächstes Geschwister `.xyz` gibt. Der Teil `:has(+ .xyz)` fungiert als Lookahead-Operation, weil das Element `.abc` ausgewählt wird und nicht das Element `.xyz`.

### Negative Lookahead (?!pattern)

Ähnlich gilt für den negativen Lookahead-Fall: Im regulären Ausdruck `abc(?!xyz)` wird der String `abc` nur dann gematcht, wenn er _nicht_ von `xyz` gefolgt wird. Das analoge CSS-Konstrukt `.abc:has(+ :not(.xyz))` wählt das Element `.abc` nicht aus, wenn das nächste Element `.xyz` ist.

## Leistungsüberlegungen

Bestimmte Verwendungen der `:has()` Pseudoklasse können die Leistung der Seite erheblich beeinträchtigen, insbesondere bei dynamischen Aktualisierungen (DOM-Mutationen). Browser-Engines müssen `:has()` Selektoren neu bewerten, wenn sich das DOM ändert, und komplexe oder schlecht eingeschränkte Selektoren können zu kostspieligen Berechnungen führen.

### Vermeiden Sie breite Verankerungen

Der Ankerselektor (das `A` in `A:has(B)`) sollte kein Element mit zu vielen Kindern sein, wie `body`, `:root`, oder `*`. Eine Verankerung von `:has()` an sehr allgemeine Selektoren kann die Leistung beeinträchtigen, da jede DOM-Änderung innerhalb des gesamten Teilbaums eines weit ausgesuchten Elements den Browser erfordert, die `:has()` Bedingung erneut zu überprüfen.

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

Verankern Sie stattdessen `:has()` an spezifische Elemente wie `.container` oder `.gallery`, um den Umfang zu reduzieren und die Leistung zu verbessern.

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

### Minimieren Sie Teilbaum-Durchläufe

Der innere Selektor (das `B` in `A:has(B)`) sollte Kombinatoren wie `>` oder `+` verwenden, um den Durchlauf zu begrenzen. Wenn der Selektor innerhalb von `:has()` nicht eng gefasst ist, muss der Browser möglicherweise den gesamten Teilbaum des Ankerelements bei jeder DOM-Mutation durchlaufen, um zu überprüfen, ob die Bedingung noch gilt.

In diesem Beispiel erfordert jede Änderung innerhalb von `.ancestor`, dass alle Nachkommen auf `.foo` überprüft werden:

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

Bestimmte innere Selektoren können den Browser zwingen, bei jeder DOM-Mutation die Ahnenkette nach möglichen Ankern zu durchsuchen, die aktualisiert werden müssen. Dies passiert, wenn die Struktur erfordert, die Ahnen des geänderten Elements zu überprüfen.

In diesem Beispiel erfordert jede DOM-Änderung, zu überprüfen, ob das geänderte Element ein beliebiges Element (`*`) ist, das ein direktes Kind von `.foo` ist, und ob dessen Eltern (oder weitere Vorfahren) `.ancestor` sind.

```css example-bad
/* Might trigger ancestor traversal */
.ancestor:has(.foo > *) {
  /* styles */
}
```

Das Einschränken des inneren Selektors durch spezifische Klassen oder direkte Kindkombinatoren (z.B. `.specific-child` im nächsten Snippet) reduziert teure Ahnen-Durchläufe, indem die Überprüfung des Browsers auf ein gut definiertes Element beschränkt wird, was die Leistung verbessert.

```css example-good
/* Constrain the inner selector to avoid ancestor traversals */
.ancestor:has(.foo > .specific-child) {
  /* styles */
}
```

> [!NOTE]
> Diese Leistungsmerkmale können sich verbessern, wenn Browser `:has()` Implementierungen optimieren, aber die grundlegenden Einschränkungen bleiben bestehen: `:has()` muss einen ganzen Teilbaum durchlaufen, daher sollten Sie die Größe des Teilbaums minimieren. In einem Selektor wie `A:has(B)`, stellen Sie sicher, dass `A` nicht zu viele Kinder hat und dass `B` eng gefasst ist, um unnötiges Durchlaufen zu vermeiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`:is()`](/de/docs/Web/CSS/:is), [`:where()`](/de/docs/Web/CSS/:where), [`:not()`](/de/docs/Web/CSS/:not)
- [CSS Selektoren und Kombinatoren](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators)
- [CSS Selektorstruktur](/de/docs/Web/CSS/CSS_selectors/Selector_structure)
- [Selektorliste](/de/docs/Web/CSS/Selector_list)
- [CSS Selektormodul](/de/docs/Web/CSS/CSS_selectors)
- [Auswahl und Durchlaufen auf dem DOM-Baum](/de/docs/Web/API/Document_Object_Model/Selection_and_traversal_on_the_DOM_tree)
