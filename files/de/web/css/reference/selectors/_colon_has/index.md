---
title: :has()
slug: Web/CSS/Reference/Selectors/:has
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die funktionale **`:has()`** [CSS](/de/docs/Web/CSS) [Pseudo-Klasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert ein Element, wenn eines der [relativen Selektoren](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#relative_selector), die als Argument übergeben werden, mindestens ein Element auswählt, wenn es gegen dieses Element verankert ist. Diese Pseudo-Klasse bietet eine Möglichkeit, ein Elternelement oder ein vorhergehendes Geschwisterelement im Verhältnis zu einem Referenzelement auszuwählen, indem sie eine [Liste relativer Selektoren](/de/docs/Web/CSS/Reference/Selectors/Selector_list#relative_selector_list) als Argument verwendet.

```css
/* Selects an h1 heading with a
paragraph element that immediately follows
the h1 and applies the style to h1 */
h1:has(+ p) {
  margin-bottom: 0;
}
```

Die `:has()` Pseudo-Klasse übernimmt die [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) des spezifischsten Selektors in ihren Argumenten, genauso wie {{CSSxRef(":is", ":is()")}} und {{CSSxRef(":not", ":not()")}}.

## Syntax

```css-nolint
:has(<relative-selector-list>) {
  /* ... */
}
```

Wenn die `:has()` Pseudo-Klasse selbst in einem Browser nicht unterstützt wird, schlägt der gesamte Selektorblock fehl, es sei denn, `:has()` befindet sich in einer verzeihlichen Selektorliste, zum Beispiel in [`:is()`](/de/docs/Web/CSS/Reference/Selectors/:is) und [`:where()`](/de/docs/Web/CSS/Reference/Selectors/:where).

Die `:has()` Pseudo-Klasse kann nicht innerhalb einer anderen `:has()` verschachtelt werden.

Pseudo-Elemente sind auch keine gültigen Selektoren innerhalb von `:has()` und Pseudo-Elemente sind keine gültigen Anker für `:has()`. Denn viele Pseudo-Elemente existieren bedingt aufgrund der Stilgebung ihrer Vorfahren und das Erlauben, diese durch `:has()` abzufragen, kann zu zyklischen Abfragen führen.

## Beispiele

### Auswählen eines Elternelements

Sie suchen vielleicht nach einem "Eltern-Kombinator", der es Ihnen erlaubt, den DOM-Baum hochzugehen und das Elternelement eines spezifischen Elements auszuwählen. Die `:has()` Pseudo-Klasse tut dies, indem Sie `parent:has(child)` (für jedes Elternteil) oder `parent:has(> child)` (für direktes Elternteil) verwenden. Dieses Beispiel zeigt, wie man ein `<section>` Element stylt, wenn es ein Kind mit der Klasse `featured` enthält.

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

Dieses Beispiel zeigt zwei ähnliche Texte nebeneinander zum Vergleich – der linke mit einer `H1` Überschrift gefolgt von einem Absatz und der rechte mit einer `H1` Überschrift gefolgt von einer `H2` Überschrift und dann einem Absatz. Im Beispiel rechts hilft `:has()`, das `H1` Element auszuwählen, das unmittelbar von einem `H2` Element gefolgt wird (angezeigt durch den nächsten Geschwister-Kombinator [`+`](/de/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator)), und die CSS-Regel reduziert den Abstand nach einem solchen `H1` Element. Ohne die `:has()` Pseudo-Klasse können Sie CSS-Selektoren nicht verwenden, um ein vorhergehendes Geschwisterelement eines anderen Typs oder ein Elternelement auszuwählen.

### Mit der :is() Pseudo-Klasse

Dieses Beispiel baut auf dem vorherigen Beispiel auf, um zu zeigen, wie man mit `:has()` mehrere Elemente auswählt.

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

Hier wird die erste [`:is()`](/de/docs/Web/CSS/Reference/Selectors/:is) Pseudo-Klasse verwendet, um eines der Überschriftselemente in der Liste auszuwählen. Die zweite `:is()` Pseudo-Klasse wird verwendet, um `:has()` eine Liste von nächsten Geschwisterselektoren als Argument zu übergeben. Die `:has()` Pseudo-Klasse hilft dabei, jedes `H1`, `H2` oder `H3` Element auszuwählen, das unmittelbar gefolgt wird von (angezeigt durch [`+`](/de/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator)) einem `H2`, `H3` oder `H4` Element, und die CSS-Regel reduziert den Abstand nach solchen `H1`, `H2` oder `H3` Elementen.

Dieser Selektor hätte auch wie folgt geschrieben werden können:

```css
:is(h1, h2, h3):has(+ h2, + h3, + h4) {
  margin: 0 0 0.25rem 0;
}
```

### Logische Operationen

Der `:has()` relationale Selektor kann verwendet werden, um zu überprüfen, ob eines der mehreren Merkmale wahr ist oder ob alle Merkmale wahr sind.

Wenn Sie durch Komma getrennte Werte innerhalb des `:has()` relationalen Selektors verwenden, überprüfen Sie, ob eines der Parameter existiert. `x:has(a, b)` wird `x` stylen, wenn Nachfolger `a` ODER `b` existieren.

Indem Sie mehrere `:has()` relationale Selektoren aneinanderreihen, überprüfen Sie, ob alle Parameter existieren. `x:has(a):has(b)` wird `x` stylen, wenn Nachfolger `a` UND `b` existieren.

```css
body:has(video, audio) {
  /* styles to apply if the content contains audio OR video */
}
body:has(video):has(audio) {
  /* styles to apply if the content contains both audio AND video */
}
```

## Analogie zwischen :has() und regulären Ausdrücken

Interessanterweise können wir einige CSS-`:has()`-Konstrukte mit der [lookahead Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) in regulären Ausdrücken vergleichen, da beide es Ihnen ermöglichen, Elemente (oder Strings in regulären Ausdrücken) basierend auf einer Bedingung auszuwählen, ohne tatsächlich das Bedingungselement (oder den String) selbst auszuwählen.

### Positive lookahead (?=pattern)

Im regulären Ausdruck `abc(?=xyz)` wird der String `abc` nur dann erfasst, wenn er unmittelbar von dem String `xyz` gefolgt wird. Da es sich um eine lookahead-Operation handelt, wird `xyz` nicht in die Übereinstimmung einbezogen.

Das analoge Konstrukt in CSS wäre `.abc:has(+ .xyz)`: Es wählt das Element `.abc` nur dann aus, wenn ein nächster Geschwister `.xyz` vorhanden ist. Der Teil `:has(+ .xyz)` funktioniert als lookahead-Operation, da das Element `.abc` ausgewählt wird und nicht das Element `.xyz`.

### Negative lookahead (?!pattern)

Ähnlich dazu, im Fall des negativen lookaheads, im regulären Ausdruck `abc(?!xyz)`, wird der String `abc` nur dann erfasst, wenn er _nicht_ von `xyz` gefolgt wird. Das analoge CSS-Konstrukt `.abc:has(+ :not(.xyz))` wählt das Element `.abc` nicht aus, wenn das nächste Element `.xyz` ist.

## Leistungsüberlegungen

Bestimmte Verwendungen der `:has()` Pseudo-Klasse können die Seitenleistung erheblich beeinflussen, insbesondere bei dynamischen Updates (DOM-Mutationen). Browser-Engines müssen `:has()` Selektoren erneut bewerten, wenn sich der DOM ändert, und komplexe oder schlecht begrenzte Selektoren können zu aufwändigen Berechnungen führen.

### Vermeiden Sie breite Verankerung

Der Ankerselektor (das `A` in `A:has(B)`) sollte kein Element sein, das zu viele Kinder hat, wie `body`, `:root` oder `*`. Das Verankern von `:has()` an sehr allgemeine Selektoren kann die Leistung beeinträchtigen, da jede DOM-Änderung innerhalb des gesamten Unterbaums eines allgemein ausgewählten Elements den Browser dazu zwingt, die `:has()` Bedingung erneut zu überprüfen.

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

Verankern Sie stattdessen `:has()` an spezifischen Elementen wie `.container` oder `.gallery`, um den Umfang zu reduzieren und die Leistung zu verbessern.

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

### Minimieren Sie Teilbaumdurchläufe

Der innere Selektor (das `B` in `A:has(B)`) sollte Kombinatoren wie `>` oder `+` verwenden, um den Durchlauf zu begrenzen. Wenn der Selektor innerhalb von `:has()` nicht eng begrenzt ist, könnte der Browser den gesamten Unterbaum des Ankerelements bei jeder DOM-Mutation durchlaufen müssen, um zu überprüfen, ob die Bedingung weiterhin gilt.

In diesem Beispiel erfordert jede Änderung innerhalb von `.ancestor`, dass alle Nachkommen auf `.foo` überprüft werden:

```css example-bad
/* May trigger full subtree traversal */
.ancestor:has(.foo) {
  /* styles */
}
```

Durch die Verwendung von Kinder- oder Geschwisterkombinatoren wird der Umfang des inneren Selektors begrenzt, wodurch die Leistungskosten von DOM-Mutationen reduziert werden. In diesem Beispiel muss der Browser nur direkte Kinder oder die Nachkommen eines bestimmten Geschwisters überprüfen:

```css example-good
/* More constrained - limits traversal */
.ancestor:has(> .foo) {
  /* direct child */
}
.ancestor:has(+ .sibling .foo) {
  /* descendant of adjacent sibling */
}
```

Bestimmte innere Selektoren können den Browser zwingen, bei jeder DOM-Mutation die Vorfahrenkette auf potenzielle Anker zu prüfen, die möglicherweise aktualisiert werden müssen. Dies geschieht, wenn die Struktur impliziert, dass die Vorfahren des mutierten Elements überprüft werden müssen.

In diesem Beispiel erfordert jede DOM-Änderung, dass geprüft wird, ob das geänderte Element ein beliebiges Element (`*`) ist, das ein direktes Kind von `.foo` ist und ob sein Elternteil (oder weitere Vorfahren) `.ancestor` ist.

```css example-bad
/* Might trigger ancestor traversal */
.ancestor:has(.foo > *) {
  /* styles */
}
```

Das Einschränken des inneren Selektors mit spezifischen Klassen oder direkten Kind-Kombinatoren (z.B. `.specific-child` im nächsten Ausschnitt) reduziert teure Vorfahren-Durchläufe, indem die Überprüfung des Browsers auf ein gut definiertes Element begrenzt wird, was die Leistung verbessert.

```css example-good
/* Constrain the inner selector to avoid ancestor traversals */
.ancestor:has(.foo > .specific-child) {
  /* styles */
}
```

> [!NOTE]
> Diese Leistungsmerkmale können sich verbessern, wenn Browser die Implementierungen von `:has()` optimieren, aber die grundlegenden Einschränkungen bleiben: `:has()` muss einen gesamten Teilbaum durchlaufen, also müssen Sie die Größe des Teilbaums minimieren. In einem Selektor wie `A:has(B)` stellen Sie sicher, dass Ihr `A` nicht zu viele Kinder hat und dass Ihr `B` eng begrenzt ist, um unnötige Durchläufe zu vermeiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`:is()`](/de/docs/Web/CSS/Reference/Selectors/:is), [`:where()`](/de/docs/Web/CSS/Reference/Selectors/:where), [`:not()`](/de/docs/Web/CSS/Reference/Selectors/:not)
- [CSS Selektoren und Kombinatoren](/de/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators)
- [CSS Selektor-Struktur](/de/docs/Web/CSS/Guides/Selectors/Selector_structure)
- [Selektor-Liste](/de/docs/Web/CSS/Reference/Selectors/Selector_list)
- [CSS Selektor-Modul](/de/docs/Web/CSS/Guides/Selectors)
- [Selektion und Durchlauf im DOM-Baum](/de/docs/Web/API/Document_Object_Model/Selection_and_traversal_on_the_DOM_tree)
