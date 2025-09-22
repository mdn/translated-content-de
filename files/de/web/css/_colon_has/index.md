---
title: :has()
slug: Web/CSS/:has
l10n:
  sourceCommit: 8283ec699c1c79e570daa5217d0c9fba7c94f21c
---

Die funktionelle CSS-**`:has()`**-[Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, wenn eines der als Argument übergebenen [relativen Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#relative_selector) mindestens ein Element trifft, wenn es an diesem Element verankert ist. Diese Pseudoklasse ermöglicht das Auswählen eines Elternelements oder eines vorherigen Geschwisterelements in Bezug auf ein Referenzelement, indem sie eine [Liste von relativen Selektoren](/de/docs/Web/CSS/Selector_list#relative_selector_list) als Argument nimmt.

```css
/* Selects an h1 heading with a
paragraph element that immediately follows
the h1 and applies the style to h1 */
h1:has(+ p) {
  margin-bottom: 0;
}
```

Die `:has()`-Pseudoklasse übernimmt die [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) des spezifischsten Selektors in ihren Argumenten, genauso wie {{CSSxRef(":is", ":is()")}} und {{CSSxRef(":not", ":not()")}}.

## Syntax

```css-nolint
:has(<relative-selector-list>) {
  /* ... */
}
```

Wenn die `:has()`-Pseudoklasse selbst in einem Browser nicht unterstützt wird, schlägt der gesamte Selektorblock fehl, es sei denn, `:has()` befindet sich in einer nachsichtigen Selektorliste, wie z.B. in [`:is()`](/de/docs/Web/CSS/:is) und [`:where()`](/de/docs/Web/CSS/:where).

Die `:has()`-Pseudoklasse kann nicht innerhalb einer anderen `:has()` verschachtelt werden.

Pseudoelemente sind innerhalb von `:has()` ebenfalls keine gültigen Selektoren und Pseudoelemente sind keine gültigen Anker für `:has()`. Dies liegt daran, dass viele Pseudoelemente bedingt basierend auf dem Styling ihrer Vorfahren existieren und das Zulassen dieser zur Abfrage durch `:has()` kann zu zyklischen Abfragen führen.

## Beispiele

### Auswahl eines Elternelements

Möglicherweise suchen Sie nach einem „Eltern-Kombinator“, der es Ihnen ermöglicht, den DOM-Baum hinaufzugehen und das Elternelement eines bestimmten Elements auszuwählen. Die `:has()`-Pseudoklasse tut dies, indem sie `parent:has(child)` (für jedes Elternelement) oder `parent:has(> child)` (für direktes Elternelement) verwendet. Dieses Beispiel zeigt, wie ein `<section>`-Element gestaltet wird, wenn es ein Kind mit der Klasse `featured` enthält.

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

Die `:has()`-Stildeklaration im folgenden Beispiel passt den Abstand nach `<h1>`-Überschriften an, wenn diese unmittelbar von einer `<h2>`-Überschrift gefolgt werden.

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

Dieses Beispiel zeigt zwei ähnliche Texte nebeneinander zum Vergleich – der linke mit einer `H1`-Überschrift gefolgt von einem Absatz und der rechte mit einer `H1`-Überschrift gefolgt von einer `H2`-Überschrift und dann einem Absatz. Im Beispiel rechts hilft `:has()` dabei, das `H1`-Element auszuwählen, das direkt von einem `H2`-Element gefolgt wird (angezeigt durch den nächsten Geschwister-Kombinator [`+`](/de/docs/Web/CSS/Next-sibling_combinator)) und die CSS-Regel reduziert den Abstand nach einem solchen `H1`-Element. Ohne die `:has()`-Pseudoklasse können Sie keine CSS-Selektoren verwenden, um ein vorhergehendes Geschwisterelement eines anderen Typs oder ein Elternelement auszuwählen.

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

Hier wird die erste [`:is()`](/de/docs/Web/CSS/:is) Pseudoklasse verwendet, um eines der Überschriften-Elemente in der Liste auszuwählen. Die zweite `:is()`-Pseudoklasse wird verwendet, um eine Liste von nächsten Geschwisterselektoren als Argument an `:has()` zu übergeben. Die `:has()`-Pseudoklasse hilft dabei, jedes `H1`, `H2` oder `H3`-Element auszuwählen, das direkt von einem `H2`, `H3` oder `H4`-Element gefolgt wird (angezeigt durch [`+`](/de/docs/Web/CSS/Next-sibling_combinator)), und die CSS-Regel reduziert den Abstand nach solchen `H1`, `H2` oder `H3`-Elementen.

Dieser Selektor hätte auch so geschrieben werden können:

```css
:is(h1, h2, h3):has(+ h2, + h3, + h4) {
  margin: 0 0 0.25rem 0;
}
```

### Logische Operationen

Der `:has()`-Relationale Selektor kann verwendet werden, um zu überprüfen, ob eines der mehreren Merkmale wahr ist oder ob alle Merkmale wahr sind.

Indem Sie Komma-getrennte Werte innerhalb des `:has()`-Relationalen Selektors verwenden, überprüfen Sie, ob eines der Parameter existiert. `x:has(a, b)` wird `x` gestalten, wenn Nachkomme `a` ODER `b` existiert.

Indem Sie mehrere `:has()`-Relationale Selektoren hintereinander ketten, überprüfen Sie, ob alle Parameter existieren. `x:has(a):has(b)` wird `x` gestalten, wenn Nachkomme `a` UND `b` existieren.

```css
body:has(video, audio) {
  /* styles to apply if the content contains audio OR video */
}
body:has(video):has(audio) {
  /* styles to apply if the content contains both audio AND video */
}
```

## Analogie zwischen :has() und regulären Ausdrücken

Interessanterweise können wir einige CSS-`:has()`-Konstrukte mit der [Lookahead Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) in regulären Ausdrücken vergleichen, weil sie es beide ermöglichen, Elemente (oder Zeichenfolgen in regulären Ausdrücken) basierend auf einer Bedingung auszuwählen, ohne tatsächlich das Bedingungselement (oder die Zeichenfolge) selbst auszuwählen.

### Positive Lookahead (?=pattern)

Im regulären Ausdruck `abc(?=xyz)` wird die Zeichenfolge `abc` nur dann getroffen, wenn sie unmittelbar von der Zeichenfolge `xyz` gefolgt wird. Da es sich um eine Lookahead-Operation handelt, ist das `xyz` nicht in der Übereinstimmung enthalten.

Das analoge Konstrukt in CSS wäre `.abc:has(+ .xyz)`: es wählt das Element `.abc` nur dann aus, wenn es ein nächstes Geschwister `.xyz` gibt. Der Teil `:has(+ .xyz)` wirkt als Lookahead-Operation, da das Element `.abc` ausgewählt wird und nicht das Element `.xyz`.

### Negative Lookahead (?!pattern)

Ebenso wird im Fall des negativen Lookahead im regulären Ausdruck `abc(?!xyz)` die Zeichenfolge `abc` nur dann getroffen, wenn sie _nicht_ von `xyz` gefolgt wird. Das analoge CSS-Konstrukt `.abc:has(+ :not(.xyz))` wählt das Element `.abc` nicht aus, wenn das nächste Element `.xyz` ist.

## Leistungsüberlegungen

Bestimmte Verwendungen der `:has()`-Pseudoklasse können die Seitenleistung erheblich beeinträchtigen, insbesondere bei dynamischen Updates (DOM-Mutationen). Browser-Engines müssen `:has()`-Selektoren neu bewerten, wenn sich das DOM ändert, und komplexe oder schlecht eingeschränkte Selektoren können zu kostspieligen Berechnungen führen.

### Breites Verankern vermeiden

Der Ankerselektor (das `A` in `A:has(B)`) sollte kein Element mit zu vielen Kindern sein, wie `body`, `:root` oder `*`. Das Verankern von `:has()` an sehr allgemeinen Selektoren kann die Leistung verschlechtern, da jede DOM-Änderung innerhalb des gesamten Unterbaums eines breit ausgewählten Elements den Browser zwingt, die `:has()`-Bedingung erneut zu überprüfen.

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

Verankern Sie stattdessen `:has()` an spezifische Elemente wie `.container` oder `.gallery`, um den Bereich zu reduzieren und die Leistung zu verbessern.

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

### Minimierung von Unterbaumbesuchen

Der innere Selektor (das `B` in `A:has(B)`) sollte Kombinatoren wie `>` oder `+` verwenden, um den Durchlauf zu begrenzen. Wenn der Selektor innerhalb von `:has()` nicht streng eingeschränkt ist, muss der Browser möglicherweise den gesamten Unterbaum des Ankerelements bei jeder DOM-Änderung durchlaufen, um zu überprüfen, ob die Bedingung noch erfüllt ist.

In diesem Beispiel erfordert jede Änderung innerhalb von `.ancestor`, dass alle Nachkommen auf `.foo` geprüft werden:

```css example-bad
/* May trigger full subtree traversal */
.ancestor:has(.foo) {
  /* styles */
}
```

Die Verwendung von Kind- oder Geschwisterkombinatoren begrenzt den Bereich des inneren Selektors und reduziert die Leistungskosten von DOM-Mutationen. In diesem Beispiel muss der Browser nur direkte Kinder oder Nachkommen eines spezifischen Geschwisters prüfen:

```css example-good
/* More constrained - limits traversal */
.ancestor:has(> .foo) {
  /* direct child */
}
.ancestor:has(+ .sibling .foo) {
  /* descendant of adjacent sibling */
}
```

Bestimmte innere Selektoren können den Browser zwingen, bei jeder DOM-Änderung die Ahnenkette hinaufzufahren, um nach potenziellen Ankerpunkten zu suchen, die aktualisiert werden müssen. Dies geschieht, wenn die Struktur nahelegt, dass Ahnen des mutierten Elements überprüft werden müssen.

In diesem Beispiel erfordert jede DOM-Änderung, dass geprüft wird, ob das geänderte Element ein beliebiges Element (`*`) ist, das ein direktes Kind von `.foo` ist, und ob sein Elternteil (oder weitere Vorfahren) `.ancestor` ist.

```css example-bad
/* Might trigger ancestor traversal */
.ancestor:has(.foo > *) {
  /* styles */
}
```

Die Einschränkung des inneren Selektors mit bestimmten Klassen oder direkten Kindkombinatoren (z. B. `.specific-child` im nächsten Snippet) reduziert kostspielige Ahnen-Durchläufe, indem die Überprüfung des Browsers auf ein klar definiertes Element beschränkt wird, was die Leistung verbessert.

```css example-good
/* Constrain the inner selector to avoid ancestor traversals */
.ancestor:has(.foo > .specific-child) {
  /* styles */
}
```

> [!NOTE]
> Diese Leistungsmerkmale können sich verbessern, wenn Browser `:has()`-Implementierungen optimieren, aber die grundlegenden Einschränkungen bleiben: `:has()` muss einen ganzen Unterbaum durchlaufen, daher sollten Sie die Größe des Unterbaums minimieren. In einem Selektor wie `A:has(B)` stellen Sie sicher, dass Ihr `A` nicht zu viele Kinder hat, und stellen Sie sicher, dass Ihr `B` eng eingeschränkt ist, um unnötige Durchläufe zu vermeiden.

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
