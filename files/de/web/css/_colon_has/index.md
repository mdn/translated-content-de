---
title: :has()
slug: Web/CSS/:has
l10n:
  sourceCommit: 7e1296fc0722c86fb7e15487b5e9626597c7a2a0
---

Die funktionale **`:has()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, wenn einer der [relativen Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#relative_selector), die als Argument übergeben werden, mindestens ein Element trifft, wenn sie an diesem Element verankert sind. Diese Pseudoklasse bietet eine Möglichkeit, ein Elternelement oder ein vorhergehendes Geschwisterelement in Bezug auf ein Referenzelement auszuwählen, indem sie eine [Liste relativer Selektoren](/de/docs/Web/CSS/Selector_list#relative_selector_list) als Argument verwendet.

```css
/* Selects an h1 heading with a
paragraph element that immediately follows
the h1 and applies the style to h1 */
h1:has(+ p) {
  margin-bottom: 0;
}
```

Die `:has()`-Pseudoklasse übernimmt die [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) des spezifischsten Selektors in ihren Argumenten, auf die gleiche Weise wie {{CSSxRef(":is", ":is()")}} und {{CSSxRef(":not", ":not()")}}.

## Syntax

```css-nolint
:has(<relative-selector-list>) {
  /* ... */
}
```

Wenn die `:has()`-Pseudoklasse selbst in einem Browser nicht unterstützt wird, schlägt der gesamte Selektorblock fehl, es sei denn, `:has()` befindet sich in einer toleranten Selektorliste, wie in [`:is()`](/de/docs/Web/CSS/:is) und [`:where()`](/de/docs/Web/CSS/:where).

Die `:has()`-Pseudoklasse kann nicht innerhalb einer anderen `:has()` verschachtelt werden.

Pseudo-Elemente sind ebenfalls keine gültigen Selektoren innerhalb von `:has()` und Pseudo-Elemente sind keine gültigen Anker für `:has()`. Dies liegt daran, dass viele Pseudo-Elemente bedingt basierend auf dem Styling ihrer Vorfahren existieren und deren Abfrage durch `:has()` zyklische Abfragen einführen könnte.

## Beispiele

### Auswahl eines Elternelements

Sie suchen möglicherweise nach einem „Eltern-Kombinator“, der es Ihnen ermöglicht, im DOM-Baum nach oben zu gehen und das Elternelement eines bestimmten Elements auszuwählen. Die `:has()`-Pseudoklasse ermöglicht dies mit `parent:has(child)` (für beliebige Eltern) oder `parent:has(> child)` (für direkte Eltern). Dieses Beispiel zeigt, wie ein `<section>`-Element formatiert wird, wenn es ein Kind mit der Klasse `featured` enthält.

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

Die `:has()`-Stildeklaration im folgenden Beispiel passt den Abstand nach `<h1>`-Überschriften an, wenn direkt danach eine `<h2>`-Überschrift folgt.

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

Dieses Beispiel zeigt zwei ähnliche Texte nebeneinander zum Vergleich – der linke mit einer `H1`-Überschrift gefolgt von einem Absatz und der rechte mit einer `H1`-Überschrift gefolgt von einer `H2`-Überschrift und dann einem Absatz. Im rechten Beispiel hilft `:has()`, das `H1`-Element auszuwählen, das direkt von einem `H2`-Element gefolgt wird (angezeigt durch den nächsten Geschwister-Kombinator [`+`](/de/docs/Web/CSS/Next-sibling_combinator)), und die CSS-Regel reduziert den Abstand nach einem solchen `H1`-Element. Ohne die `:has()`-Pseudoklasse können Sie keine CSS-Selektoren verwenden, um ein vorhergehendes Geschwisterelement eines anderen Typs oder ein Elternelement auszuwählen.

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

Hier wird die erste [`:is()`](/de/docs/Web/CSS/:is)-Pseudoklasse verwendet, um eines der Heading-Elemente in der Liste auszuwählen. Die zweite `:is()`-Pseudoklasse wird verwendet, um `:has()` eine Liste von nächsten Geschwisterselektoren als Argument zu übergeben. Die `:has()`-Pseudoklasse hilft dabei, jedes `H1`, `H2` oder `H3`-Element auszuwählen, das sofort von (angegeben durch [`+`](/de/docs/Web/CSS/Next-sibling_combinator)) einem `H2`, `H3` oder `H4`-Element gefolgt wird, und die CSS-Regel reduziert den Abstand nach solchen `H1`, `H2` oder `H3`-Elementen.

Dieser Selektor könnte auch geschrieben werden als:

```css
:is(h1, h2, h3):has(+ h2, + h3, + h4) {
  margin: 0 0 0.25rem 0;
}
```

### Logische Operationen

Der `:has()`-relationale Selektor kann verwendet werden, um zu prüfen, ob eine von mehreren Bedingungen wahr ist oder ob alle Bedingungen wahr sind.

Durch die Verwendung von kommagetrennten Werten innerhalb des `:has()`-relationalen Selektors prüfen Sie, ob einer der Parameter existiert. `x:has(a, b)` wird `x` formatieren, wenn der Nachfahre `a` ODER `b` existiert.

Durch das Verketten mehrerer `:has()`-relationaler Selektoren überprüfen Sie, ob alle Parameter existieren. `x:has(a):has(b)` wird `x` formatieren, wenn der Nachfahre `a` UND `b` existiert.

```css
body:has(video, audio) {
  /* styles to apply if the content contains audio OR video */
}
body:has(video):has(audio) {
  /* styles to apply if the content contains both audio AND video */
}
```

## Analoge zwischen :has() und regulären Ausdrücken

Interessanterweise können wir einige CSS-`:has()`-Konstruktionen mit der [Lookahead Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) in regulären Ausdrücken in Beziehung setzen, da beide es ermöglichen, Elemente (oder Zeichenfolgen in regulären Ausdrücken) basierend auf einer Bedingung auszuwählen, ohne das Bedingungselement (oder die Bedingungszeichenfolge) selbst tatsächlich auszuwählen.

### Positiver Lookahead (?=pattern)

Im regulären Ausdruck `abc(?=xyz)` wird die Zeichenfolge `abc` nur dann gematcht, wenn sie sofort von der Zeichenfolge `xyz` gefolgt wird. Da es sich um eine Lookahead-Operation handelt, ist das `xyz` nicht im Match enthalten.

Das entsprechende Konstrukt in CSS wäre `.abc:has(+ .xyz)`: Es wählt das Element `.abc` nur dann aus, wenn ein nächstes Geschwisterelement `.xyz` existiert. Der Teil `:has(+ .xyz)` fungiert als Lookahead-Operation, weil das Element `.abc` ausgewählt wird und nicht das Element `.xyz`.

### Negativer Lookahead (?!pattern)

Ähnlich verhält es sich beim negativen Lookahead. Im regulären Ausdruck `abc(?!xyz)` wird die Zeichenfolge `abc` nur gematcht, wenn sie _nicht_ von `xyz` gefolgt wird. Das analoge CSS-Konstrukt `.abc:has(+ :not(.xyz))` wählt das Element `.abc` nicht aus, wenn das nächste Element `.xyz` ist.

## Leistungserwägungen

Bestimmte Anwendungen der `:has()`-Pseudoklasse können die Seitenleistung erheblich beeinträchtigen, insbesondere bei dynamischen Updates (DOM-Mutationen). Browser-Engines müssen `:has()`-Selektoren neu bewerten, wenn sich das DOM ändert, und komplexe oder schlecht eingrenzte Selektoren können zu aufwendigen Berechnungen führen.

### Vermeiden Sie eine breite Verankerung

Der Anker-Selektor (das `A` in `A:has(B)`) sollte kein Element mit zu vielen Kindern sein, wie `body`, `:root` oder `*`. Wenn `:has()` an sehr allgemeine Selektoren verankert ist, kann dies die Leistung beeinträchtigen, da jede Änderung im DOM innerhalb des gesamten Unterbaums eines allgemein ausgewählten Elements den Browser dazu zwingt, die `:has()`-Bedingung erneut zu überprüfen.

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

### Minimieren Sie Unterbaumdurchläufe

Der innere Selektor (das `B` in `A:has(B)`) sollte Kombinatoren wie `>` oder `+` verwenden, um den Durchlauf zu begrenzen. Wenn der Selektor innerhalb von `:has()` nicht eng eingegrenzt ist, muss der Browser möglicherweise den gesamten Unterbaum des Ankerelements bei jeder DOM-Änderung durchlaufen, um zu prüfen, ob die Bedingung weiterhin gilt.

In diesem Beispiel erfordert jede Änderung innerhalb von `.ancestor` die Überprüfung aller Nachfahren für `.foo`:

```css example-bad
/* May trigger full subtree traversal */
.ancestor:has(.foo) {
  /* styles */
}
```

Durch die Verwendung von Kinder- oder Geschwisterkombinatoren wird der Umfang des inneren Selektors begrenzt, wodurch die Leistungskosten von DOM-Änderungen reduziert werden. In diesem Beispiel muss der Browser nur direkte Kinder oder Nachfahren eines bestimmten Geschwisters überprüfen:

```css example-good
/* More constrained - limits traversal */
.ancestor:has(> .foo) {
  /* direct child */
}
.ancestor:has(+ .sibling .foo) {
  /* descendant of adjacent sibling */
}
```

Bestimmte innere Selektoren können den Browser dazu zwingen, bei jeder DOM-Änderung die Ahnenkette nach potenziellen Ankern zu durchsuchen, die aktualisiert werden müssen. Dies passiert, wenn die Struktur nahelegt, dass Vorfahren des mutierten Elements überprüft werden müssen.

In diesem Beispiel erfordert jede DOM-Änderung die Überprüfung, ob das geänderte Element ein bestimmtes Element (`*`) ist, das ein direktes Kind von `.foo` ist, und ob sein Elternteil (oder weitere Vorfahren) `.ancestor` ist.

```css example-bad
/* Might trigger ancestor traversal */
.ancestor:has(.foo > *) {
  /* styles */
}
```

Die Eingrenzung des inneren Selektors durch spezifische Klassen oder direkte Kinderkombinatoren (z. B. `.specific-child` im nächsten Snippet) reduziert teure Vorfahren-Durchläufe, indem die Browserprüfung auf ein gut definiertes Element begrenzt wird und die Leistung verbessert.

```css example-good
/* Constrain the inner selector to avoid ancestor traversals */
.ancestor:has(.foo > .specific-child) {
  /* styles */
}
```

> [!NOTE]
> Diese Leistungsmerkmale können sich verbessern, wenn Browser die `:has()`-Implementierungen optimieren, aber die grundlegenden Einschränkungen bleiben bestehen: `:has()` muss einen gesamten Unterbaum durchlaufen, daher sollten Sie die Größe des Unterbaums minimieren. In einem Selektor wie `A:has(B)`, stellen Sie sicher, dass Ihr `A` nicht zu viele Kinder hat, und stellen Sie sicher, dass Ihr `B` eng eingegrenzt ist, um unnötiges Durchlaufen zu vermeiden.

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
