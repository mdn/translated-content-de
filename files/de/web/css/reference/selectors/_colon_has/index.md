---
title: :has()
slug: Web/CSS/Reference/Selectors/:has
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Die funktionale **`:has()`** [CSS](/de/docs/Web/CSS) [Pseudo-Klasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert ein Element, wenn eines der [relativen Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#relative_selector) als Argument an es gebunden, mindestens ein Element trifft. Diese Pseudo-Klasse bietet eine Möglichkeit, ein übergeordnetes Element oder ein vorheriges Geschwisterelement mit Bezug auf ein Referenzelement auszuwählen, indem eine [relative Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#relative_selector_list) als Argument genommen wird.

```css
/* Selects an h1 heading with a
paragraph element that immediately follows
the h1 and applies the style to h1 */
h1:has(+ p) {
  margin-bottom: 0;
}
```

Die `:has()` Pseudo-Klasse übernimmt die [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) des spezifischsten Selektors in ihren Argumenten auf die gleiche Weise wie {{CSSxRef(":is", ":is()")}} und {{CSSxRef(":not", ":not()")}}.

## Syntax

```css-nolint
:has(<relative-selector-list>) {
  /* ... */
}
```

Wenn die `:has()` Pseudo-Klasse selbst in einem Browser nicht unterstützt wird, schlägt der gesamte Selektorblock fehl, es sei denn, `:has()` befindet sich in einer toleranten Selektorliste, wie sie in [`:is()`](/de/docs/Web/CSS/Reference/Selectors/:is) und [`:where()`](/de/docs/Web/CSS/Reference/Selectors/:where) vorkommt.

Die `:has()` Pseudo-Klasse kann nicht innerhalb einer anderen `:has()` verschachtelt werden.

Pseudo-Elemente sind ebenfalls keine gültigen Selektoren innerhalb von `:has()` und Pseudo-Elemente sind keine gültigen Anker für `:has()`. Dies liegt daran, dass viele Pseudo-Elemente bedingt basierend auf der Gestaltung ihrer Vorfahren existieren und das Zulassen dieser Abfrage durch `:has()` zyklische Abfragen einführen kann.

## Beispiele

### Auswahl eines übergeordneten Elements

Sie könnten nach einem "Eltern[Komparator](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#combinators)" suchen, der es Ihnen ermöglicht, den DOM-Baum hinaufzugehen und das übergeordnete Element eines bestimmten Elements auszuwählen. Die `:has()` Pseudo-Klasse tut dies, indem sie `parent:has(child)` (für jedes übergeordnete Element) oder `parent:has(> child)` (für ein direktes übergeordnetes Element) verwendet. Dieses Beispiel zeigt, wie ein `<section>`-Element gestylt wird, wenn es ein Kind mit der Klasse `featured` enthält.

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

### Mit dem Geschwisterkomparator

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

Dieses Beispiel zeigt zwei ähnliche Texte nebeneinander zum Vergleich – der linke mit einer `H1` Überschrift gefolgt von einem Absatz und der rechte mit einer `H1` Überschrift gefolgt von einer `H2` Überschrift und dann einem Absatz. Im Beispiel rechts hilft `:has()`, das `H1` Element auszuwählen, das von einem `H2` Element direkt gefolgt wird (angezeigt durch den Direktanschluss-Komparator [`+`](/de/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator)), und die CSS-Regel reduziert den Abstand nach einem solchen `H1` Element. Ohne die `:has()` Pseudo-Klasse können Sie keine CSS-Selektoren verwenden, um ein vorheriges Geschwisterelement eines anderen Typs oder ein übergeordnetes Element auszuwählen.

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

Hier wird die erste [`:is()`](/de/docs/Web/CSS/Reference/Selectors/:is) Pseudo-Klasse verwendet, um eines der Überschriftenelemente in der Liste auszuwählen. Die zweite `:is()` Pseudo-Klasse wird verwendet, um eine Liste von Geschwisterselektoren als Argument an `:has()` zu übergeben. Die `:has()` Pseudo-Klasse hilft, jedes `H1`, `H2` oder `H3` Element auszuwählen, das von einem `H2`, `H3` oder `H4` Element direkt gefolgt wird (angezeigt durch [`+`](/de/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator)), und die CSS-Regel reduziert den Abstand nach solchen `H1`, `H2` oder `H3` Elementen.

Dieser Selektor hätte auch so geschrieben werden können:

```css
:is(h1, h2, h3):has(+ h2, + h3, + h4) {
  margin: 0 0 0.25rem 0;
}
```

### Logische Operationen

Der `:has()` relationale Selektor kann verwendet werden, um zu überprüfen, ob eines von mehreren Merkmalen wahr ist oder ob alle Merkmale wahr sind.

Durch die Verwendung von durch Kommas getrennten Werten im `:has()` relationalen Selektor überprüfen Sie, ob eines der Parameter existiert. `x:has(a, b)` wird `x` stylen, wenn Nachkomme `a` ODER `b` existiert.

Durch das Aneinanderhängen mehrerer `:has()` relationaler Selektoren überprüfen Sie, ob alle Parameter existieren. `x:has(a):has(b)` wird `x` stylen, wenn Nachkomme `a` UND `b` existieren.

```css
body:has(video, audio) {
  /* styles to apply if the content contains audio OR video */
}
body:has(video):has(audio) {
  /* styles to apply if the content contains both audio AND video */
}
```

## Analogie zwischen :has() und regulären Ausdrücken

Interessanterweise können wir einige CSS `:has()` Konstrukte mit der [lookahead assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) in regulären Ausdrücken in Beziehung setzen, da sie beide das Auswählen von Elementen (oder Strings in regulären Ausdrücken) basierend auf einer Bedingung erlauben, ohne tatsächlich das Bedingungselement selbst auszuwählen.

### Positives Lookahead (?=muster)

Im regulären Ausdruck `abc(?=xyz)`, wird der String `abc` nur dann gematcht, wenn er unmittelbar von dem String `xyz` gefolgt wird. Da es sich um einen Lookahead handelt, wird das `xyz` nicht in den Match einbezogen.

Das analoge Konstrukt in CSS wäre `.abc:has(+ .xyz)`: es wählt das Element `.abc` nur dann aus, wenn ein nächstes Geschwister `.xyz` existiert. Der Teil `:has(+ .xyz)` agiert als Lookahead, da das Element `.abc` ausgewählt wird und nicht das Element `.xyz`.

### Negatives Lookahead (?!muster)

Ähnlich verhält es sich mit dem negativen Lookahead. Im regulären Ausdruck `abc(?!xyz)`, wird der String `abc` nur dann gematcht, wenn er _nicht_ von `xyz` gefolgt wird. Das analoge CSS-Konstrukt `.abc:has(+ :not(.xyz))` wählt das Element `.abc` nicht aus, wenn das nächste Element `.xyz` ist.

## Leistungsüberlegungen

Bestimmte Verwendungen der `:has()` Pseudo-Klasse können die Seitenleistung erheblich beeinträchtigen, insbesondere während dynamischer Aktualisierungen (DOM-Mutationen). Browser-Engines müssen `:has()` Selektoren neu bewerten, wenn sich der DOM ändert, und komplexe oder schlecht eingegrenzte Selektoren können zu kostspieligen Berechnungen führen.

### Vermeiden Sie breite Anker

Der Ankerselektor (das `A` in `A:has(B)`) sollte kein Element sein, das zu viele Kinder hat, wie `body`, `:root` oder `*`. Das Verankern von `:has()` an sehr allgemeine Selektoren kann die Leistung verschlechtern, da jede DOM-Änderung innerhalb des gesamten Teilbaums eines breit ausgewählten Elements den Browser dazu zwingt, die `:has()` Bedingung erneut zu überprüfen.

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

### Minimieren Sie Teilbaum-Traversierungen

Der innere Selektor (das `B` in `A:has(B)`) sollte Kombinatoren wie `>` oder `+` verwenden, um die Traversierung zu begrenzen. Wenn der Selektor innerhalb von `:has()` nicht eng eingegrenzt ist, könnte der Browser den gesamten Teilbaum des Ankerelements bei jeder DOM-Mutation durchsuchen müssen, um zu überprüfen, ob die Bedingung noch erfüllt ist.

In diesem Beispiel erfordert jede Änderung innerhalb von `.ancestor` die Prüfung aller Nachkommen auf `.foo`:

```css example-bad
/* May trigger full subtree traversal */
.ancestor:has(.foo) {
  /* styles */
}
```

Durch die Verwendung von Kind- oder Geschwisterkombinatoren wird der Umfang des inneren Selektors begrenzt, wodurch die Leistungskosten von DOM-Mutationen reduziert werden. In diesem Beispiel muss der Browser nur unmittelbare Kinder oder Nachkommen eines bestimmten Geschwisterkindes überprüfen:

```css example-good
/* More constrained - limits traversal */
.ancestor:has(> .foo) {
  /* direct child */
}
.ancestor:has(+ .sibling .foo) {
  /* descendant of adjacent sibling */
}
```

Bestimmte innere Selektoren können den Browser dazu zwingen, die Ahnenkette bei jeder DOM-Mutation nach potenziellen Ankern zu durchsuchen, die aktualisiert werden müssen. Dies passiert, wenn die Struktur erfordert, dass Ahnen des mutierten Elements überprüft werden.

In diesem Beispiel erfordert jede DOM-Änderung die Überprüfung, ob das geänderte Element ein beliebiges Element (`*`) ist, das ein unmittelbares Kind von `.foo` ist und wenn sein Elternteil (oder weiter entfernte Ahnen) `.ancestor` ist.

```css example-bad
/* Might trigger ancestor traversal */
.ancestor:has(.foo > *) {
  /* styles */
}
```

Das Eingrenzen des inneren Selektors mit spezifischen Klassen oder dem direkten Kindkombi (z.B. `.specific-child` im nächsten Snippet) reduziert kostspielige Ahnen-Traversierungen, indem die Überprüfung des Browsers auf ein klar definiertes Element begrenzt wird, was die Leistung verbessert.

```css example-good
/* Constrain the inner selector to avoid ancestor traversals */
.ancestor:has(.foo > .specific-child) {
  /* styles */
}
```

> [!NOTE]
> Diese Leistungsmerkmale können sich verbessern, da Browser `:has()` Implementierungen optimieren, aber die grundlegenden Einschränkungen bleiben: `:has()` muss einen ganzen Teilbaum durchsuchen, deswegen sollten Sie die Größe des Teilbaums minimieren. In einem Selektor wie `A:has(B)`, stellen Sie sicher, dass Ihr `A` nicht zu viele Kinder hat, und stellen Sie sicher, dass Ihr `B` eng eingegrenzt ist, um unnötiges Traversieren zu vermeiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`:is()`](/de/docs/Web/CSS/Reference/Selectors/:is), [`:where()`](/de/docs/Web/CSS/Reference/Selectors/:where), [`:not()`](/de/docs/Web/CSS/Reference/Selectors/:not)
- [CSS Selektoren und Kombinatoren](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators)
- [CSS Selektorstruktur](/de/docs/Web/CSS/CSS_selectors/Selector_structure)
- [Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list)
- [CSS Selektormodul](/de/docs/Web/CSS/CSS_selectors)
- [Auswahl und Traversierung auf dem DOM-Baum](/de/docs/Web/API/Document_Object_Model/Selection_and_traversal_on_the_DOM_tree)
