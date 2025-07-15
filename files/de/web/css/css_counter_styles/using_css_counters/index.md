---
title: Verwendung von CSS-Zählern
short-title: Verwendung von Zählern
slug: Web/CSS/CSS_counter_styles/Using_CSS_counters
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**CSS-Zähler** ermöglichen es Ihnen, das Erscheinungsbild von Inhalten basierend auf ihrer Position in einem Dokument anzupassen. Zum Beispiel können Sie Zähler verwenden, um die Überschriften auf einer Webseite automatisch zu nummerieren oder um die Nummerierung in geordneten Listen zu ändern.

Zähler sind im Wesentlichen Variablen, die von CSS verwaltet werden und deren Werte durch CSS-Regeln, die verfolgen, wie oft sie verwendet werden, erhöht oder verringert werden können. Die folgenden Faktoren beeinflussen die Zählerwerte eines Elements:

1. Zähler werden vom Eltern-Element [geerbt](#erbschaft_und_verbreitung_von_zählern) oder von einem vorherigen Geschwister-Element übernommen.
2. Neue Zähler werden mit der Eigenschaft {{cssxref("counter-reset")}} erstellt.
3. Zähler werden mit der Eigenschaft {{cssxref("counter-increment")}} erhöht.
4. Zähler werden mit der Eigenschaft {{cssxref("counter-set")}} direkt auf einen bestimmten Wert gesetzt.

Sie können eigene benannte Zähler definieren und den `list-item` Zähler manipulieren, der standardmäßig für alle geordneten Listen erstellt wird.

## Verwendung von Zählern

Um einen Zähler zu verwenden, muss er zuerst mit der Eigenschaft {{cssxref("counter-reset")}} auf einen Wert initialisiert werden. Der Wert des Zählers kann mit der Eigenschaft {{cssxref("counter-increment")}} erhöht oder verringert und mit der Eigenschaft {{cssxref("counter-set")}} direkt auf einen bestimmten Wert gesetzt werden. Der aktuelle Wert eines Zählers wird mit der Funktion {{cssxref("counter", "counter()")}} oder {{cssxref("counters", "counters()")}} angezeigt, typischerweise innerhalb einer [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) {{CSSxRef("content")}}-Eigenschaft.

Zähler können nur in Elementen gesetzt, zurückgesetzt oder erhöht werden, die Boxen erzeugen. Beispielsweise wird jede Zähleroperation bei einem Element ignoriert, wenn dieses Element auf `display: none` gesetzt ist.

Die Eigenschaften von Zählern können durch Stil-Eingrenzung auf bestimmte Elemente beschränkt werden, die im Detail in der Eigenschaft {{cssxref("contain")}} beschrieben werden.

### Manipulation des Wertes eines Zählers

Um einen CSS-Zähler zu verwenden, muss er zuerst mit der Eigenschaft {{cssxref("counter-reset")}} auf einen Wert initialisiert werden. Diese Eigenschaft kann auch verwendet werden, um den Zählerwert auf eine bestimmte Zahl zu ändern.

Im folgenden Beispiel initialisieren wir einen Zähler namens `section` mit dem Standardwert (0).

```css
counter-reset: section;
```

Sie können auch mehrere Zähler initialisieren, wobei optional für jeden ein Anfangswert angegeben wird. Im unteren Beispiel initialisieren wir die Zähler `section` und `topic` mit dem Standardwert und den Zähler `page` mit dem Wert 3.

```css
counter-reset: section page 3 topic;
```

Sobald ein Zähler initialisiert ist, kann sein Wert mit {{cssxref("counter-increment")}} erhöht oder verringert werden. Zum Beispiel würde die folgende Deklaration den `section` Zähler bei jedem `h3` Tag um eins erhöhen.

```css
h3::before {
  counter-increment: section; /* Increment the value of section counter by 1 */
}
```

Sie können die Betrag der Erhöhung oder Verringerung nach dem Zählernamen angeben. Es kann eine positive oder negative Zahl sein, der Standardwert ist jedoch `1`, wenn keine Zahl angegeben ist.

Neben der Erhöhung oder Verringerung können Zähler auch explizit mit der Eigenschaft {{cssxref("counter-set")}} auf einen Wert gesetzt werden.

```css
.done::before {
  counter-set: section 20;
}
```

Der Name des Zählers darf nicht `none`, `inherit` oder `initial` sein; andernfalls wird die Deklaration ignoriert.

### Anzeige eines Zählers

Der Wert eines Zählers kann entweder durch die Funktion {{cssxref("counter", "counter()")}} oder {{cssxref("counters", "counters()")}} in einer {{cssxref("content")}}-Eigenschaft angezeigt werden.

Zum Beispiel verwendet die folgende Deklaration `counter()`, um jedem `h3`-Überschrift den Text `Section <number>:` voranzustellen, wobei `<number>` den Zählerwert im Dezimalsystem (der Standardanzeigestil) darstellt:

```css
body {
  counter-reset: section; /* Set a counter named 'section', and its initial value is 0. */
}

h3::before {
  counter-increment: section; /* Increment the value of section counter by 1 */
  content: "Section " counter(section) ": "; /* Display counter value in default style (decimal) */
}
```

Die Funktion {{cssxref("counter", "counter()")}} wird verwendet, wenn die Nummerierung von Verschachtelungsebenen nicht den Kontext von Elternebenen einschließt. Zum Beispiel beginnt hier jede verschachtelte Ebene erneut bei eins:

```plain
1 One
  1 Nested one
  2 Nested two
2 Two
  1 Nested one
  2 Nested two
  3 Nested three
3 Three
```

Die Funktion {{cssxref("counters", "counters()")}} wird verwendet, wenn der Zähler für verschachtelte Ebenen die Zählung von Elternebenen einbeziehen muss. Zum Beispiel könnten Sie dies verwenden, um Abschnitte wie folgt darzustellen:

```plain
1 One
  1.1 Nested one
  1.2 Nested two
2 Two
  2.1 Nested one
  2.2 Nested two
  2.3 Nested three
3 Three
```

Die Funktion {{cssxref("counter", "counter()")}} hat zwei Formate: `counter(<counter-name>)` und `counter(<counter-name>, <counter-style>)`. Der generierte Text ist der Wert des innersten Zählers mit dem gegebenen Namen im Bereich des Pseudoelements.

Die Funktion {{cssxref("counters", "counters()")}} hat ebenfalls zwei Formate: `counters(<counter-name>, <separator>)` und `counters(<counter-name>, <separator>, <counter-style>)`. Der generierte Text ist der Wert aller Zähler mit dem gegebenen Namen im Bereich des gegebenen Pseudoelements, vom äußeren zum innersten, getrennt durch die angegebene Zeichenfolge (`<separator>`).

Der Zähler wird im angegebenen `<counter-style>` für beide Methoden gerendert (`decimal` standardmäßig). Sie können jeden der {{cssxref("list-style-type")}}-Werte oder Ihre eigenen [benutzerdefinierten Stile](/de/docs/Web/CSS/CSS_counter_styles) verwenden.

Beispiele für die Verwendung von `counter()` und `counters()` finden sich unten im [Grundlagen-Beispiel](#grundlagen-beispiel) und [Beispiel eines verschachtelten Zählers](#beispiel_eines_verschachtelten_zählers).

### Umgekehrte Zähler

Ein umgekehrter Zähler ist einer, der abwärts (dekrementiert) anstatt aufwärts (inkrementiert) zählen soll. Umgekehrte Zähler werden mit der Notation `reversed()` erstellt, wenn der Zähler im `counter-reset` benannt wird.

Umgekehrte Zähler haben einen Standardanfangswert, der der Anzahl der Elemente entspricht (im Gegensatz zu normalen Zählern, die einen Standardwert von 0 haben). Dies macht es einfach, einen Zähler zu implementieren, der von der Anzahl der Elemente bis eins herunterzählt.

Zum Beispiel, um einen umgekehrten Zähler namens `section` mit einem Standardanfangswert zu erstellen, würden Sie die folgende Syntax verwenden:

```css
counter-reset: reversed(section);
```

Natürlich können Sie jeden gewünschten Anfangswert angeben.

Der Zählerwert wird durch die Angabe eines negativen Werts für {{cssxref("counter-increment")}} verringert.

> [!NOTE]
> Sie können {{cssxref("counter-increment")}} auch verwenden, um einen nicht umgekehrten Zähler zu verringern.
> Der Hauptvorteil eines umgekehrten Zählers ist der Standardanfangswert, und dass der `list-item` Zähler automatisch umgekehrte Zähler verringert.

### Erbschaft und Verbreitung von Zählern

Jedes Element oder Pseudoelement hat eine Gruppe von Zählern im Bereich dieses Elements. Initiale Zähler in der Gruppe werden vom Elternelement und dem vorhergehenden Geschwisterelement übernommen. Die Zählerwerte werden vom letzten Nachkommen des vorherigen Geschwisterelements, dem letzten Geschwister oder dem Elternteil übernommen.

Wenn ein Element einen Zähler deklariert, wird der Zähler in den Zähler mit demselben Namen, der vom Elternteil übernommen wurde, verschachtelt. Wenn der Elternteil keinen Zähler mit demselben Namen hat, wird der Zähler zur Zählergruppe des Elements hinzugefügt, wie er ist. Ein Zähler mit demselben Namen, der vom vorherigen Geschwister übernommen wurde, wird aus der Zählergruppe entfernt.

Die Funktion {{cssxref("counter", "counter()")}} ruft den innersten Zähler mit dem angegebenen Namen ab. Und die Funktion {{cssxref("counters", "counters()")}} ruft den gesamten Zählerbaum mit dem gegebenen Namen ab.

Im folgenden Beispiel demonstrieren wir einen geerbten Zähler namens `primary` und einen Geschwisterzähler namens `secondary`. Alle `<div>`-Elemente zeigen ihre Zähler mit der `counters()`-Funktion an. Beachten Sie, dass alle Zähler mit der `counter-reset`-Eigenschaft erstellt wurden und keiner der Zähler erhöht wurde.

```html
<section>
  counter-reset: primary 3
  <div>A</div>
  <div>B</div>
  <div>C</div>
  <div class="same-primary-name">D</div>
  <span> counter-reset: primary 6</span>
  <div>E</div>
  <div class="new-secondary-name">F</div>
  <span> counter-reset: secondary 5</span>
  <div>G</div>
  <div>H</div>
  <div class="same-secondary-name">I&nbsp;</div>
  <span> counter-reset: secondary 10</span>
  <div>J&nbsp;</div>
  <div>K</div>
  <section></section>
</section>
```

```css hidden
.same-primary-name,
.new-secondary-name,
.same-secondary-name {
  display: inline-block;
}

@counter-style style {
  system: numeric;
  symbols: "" "1" "2" "3" "4" "5" "6" "7" "8" "9" "10";
}
```

```css
/* create 'primary' counter on divs' parent */
section {
  counter-reset: primary 3;
}

div::after {
  content: " ('primary' counters: " counters(primary, "-", style)
    ", 'secondary' counters: " counters(secondary, "-", style) ")";
  color: blue;
}

/* create new 'primary' counter */
.same-primary-name {
  counter-reset: primary 6;
}

/* create 'secondary' counter on div 'F' */
.new-secondary-name {
  counter-reset: secondary 5;
}

/* override the sibling 'secondary' counter */
.same-secondary-name {
  counter-reset: secondary 10;
}
```

{{EmbedLiveSample("Counter inheritance and propagation", "100%", 250)}}

Das Abschnittselement initialisiert einen Zähler namens `primary` mit dem Wert `3`, und alle untergeordneten `<div>`-Elemente erhalten den geerbten `primary` Zähler. Das Element 'D' erstellt einen neuen `primary` (Wert `6`) Zähler, der im vom Elternteil übernommenen Zähler verschachtelt wird, sodass das Element zwei Zähler namens `primary` mit den Werten `3` und `6` hat.

Das Element 'F' erstellt den `secondary` (Wert `5`) Zähler zum ersten Mal und gibt den Zähler an das nächste Geschwister 'G' weiter. Das Element 'G' gibt den Zähler an das nächste Element 'H' weiter und so weiter. Danach erstellt das Element 'I' einen neuen Zähler mit demselben Namen `secondary` (Wert `10`), aber es entfernt den `secondary` (Wert `5`) Zähler, der von dem vorherigen Geschwister 'H' übernommen wurde, und gibt seinen eigenen Zähler an 'J' weiter.

### Unterschied zwischen counter-set und counter-reset

Die Eigenschaft {{cssxref("counter-set")}} aktualisiert einen vorhandenen Zähler und wenn kein Zähler mit dem Namen existiert, wird ein neuer Zähler erstellt. Die Eigenschaft {{cssxref("counter-reset")}} erstellt _immer_ einen neuen Zähler.

Im folgenden Beispiel haben wir zwei Unterlisten innerhalb einer übergeordneten Liste. Jedes Listenelement wurde mit einem Zähler namens 'item' nummeriert. Die erste Unterliste verwendet die Eigenschaft {{cssxref("counter-set")}} und die zweite Unterliste verwendet die Eigenschaft {{cssxref("counter-reset")}}, um den 'item' Zähler zu ändern.

```html
<ul class="parent">
  <li>A</li>
  <li>B</li>
  <li>
    C (the counter updated using `counter-set`)
    <ul class="sub-list-one">
      <li>sub-A</li>
      <li>sub-B</li>
    </ul>
  </li>
  <li>D</li>
  <li>
    E (a new counter created using `counter-reset`)
    <ul class="sub-list-two">
      <li>sub-A</li>
      <li>sub-B</li>
      <li>sub-C</li>
    </ul>
  </li>
  <li>F</li>
  <li>G</li>
</ul>
```

```css hidden
ul {
  list-style: none;
}
```

```css
/* create a new counter for the first time */
.parent {
  counter-reset: item 0;
}

/* increment the counter on each list item */
li {
  counter-increment: item;
}

/* show numbers on list items */
li::before {
  content: counter(item) " ";
}

/* change the existing counter value */
.sub-list-one {
  counter-set: item 10;
}

/* change the counter value */
.sub-list-two {
  counter-reset: item 0;
}
```

{{EmbedLiveSample("Difference between counter-set and counter-reset", "100%", 300)}}

Beachten Sie, wie die Elemente der ersten Unterliste ab `11` nummeriert werden und die Nummerierung in der übergeordneten Liste fortgesetzt wird. Dies liegt daran, dass die `counter-set` Eigenschaft den gleichen 'item' Zähler aktualisiert, der auf dem `.parent` Element deklariert wurde. Beachten Sie dann, wie die Elemente der zweiten Unterliste eine neue Nummerierung ab '1' erhalten und die nachfolgenden Elemente der übergeordneten Liste die Nummerierung nicht fortsetzen. Dies liegt daran, dass die `counter-reset` Eigenschaft einen neuen Zähler mit demselben Namen erstellt, sodass die übergeordneten Listenelemente den alten Zähler weiterhin verwenden.

### Listenelementzähler

Geordnete Listen, die mit den {{HTMLElement("ol")}}-Elementen erstellt werden, haben implizit einen Zähler namens `list-item`.

Wie andere Zähler hat dieser einen Standardanfangswert von 0 für aufwärts zählende Zähler und "Anzahl der Elemente" für umgekehrte Zähler. Im Gegensatz zu vom Autor erstellten Zählern erhöht oder verringert der `list-item` Zähler _automatisch_ um eins für jedes Listenelement, je nachdem, ob der Zähler umgekehrt ist oder nicht.

Der `list-item` Zähler kann verwendet werden, um das Standardverhalten von geordneten Listen mithilfe von CSS zu manipulieren. Zum Beispiel können Sie den Standardanfangswert ändern oder {{cssxref("counter-increment")}} verwenden, um zu ändern, wie die Listenelemente erhöht oder verringert werden.

## Beispiele

### Grundlagen-Beispiel

Dieses Beispiel fügt "Section \[der Wert des Zählers]:" an den Anfang jeder Überschrift hinzu.

#### CSS

```css
body {
  counter-reset: section; /* Set a counter named 'section', and its initial value is 0. */
}

h3::before {
  counter-increment: section; /* Increment the value of section counter by 1 */
  content: "Section " counter(section) ": "; /* Display the word 'Section ', the value of
                                                section counter, and a colon before the content
                                                of each h3 */
}
```

#### HTML

```html
<h3>Introduction</h3>
<h3>Body</h3>
<h3>Conclusion</h3>
```

#### Ergebnis

{{EmbedLiveSample("Basic_example", "100%", 150)}}

### Grundlagen-Beispiel: Umgekehrter Zähler

Dieses Beispiel ist dasselbe wie das oben, verwendet jedoch einen umgekehrten Zähler. Wenn Ihr Browser die Notation der `reversed()`-Funktion unterstützt, wird das Ergebnis wie folgt aussehen:

![reversed counter](reversed_headings_basic.png)

#### CSS

```css
body {
  counter-reset: reversed(
    section
  ); /* Set a counter named 'section', and its initial value is 0. */
}

h3::before {
  counter-increment: section -1; /* Decrement the value of section counter by 1 */
  content: "Section " counter(section) ": "; /* Display the word 'Section ', the value of
                                                section counter, and a colon before the content
                                                of each h3 */
}
```

#### HTML

```html
<h3>Introduction</h3>
<h3>Body</h3>
<h3>Conclusion</h3>
```

#### Ergebnis

{{EmbedLiveSample("Basic example: reversed counter", "100%", 150)}}

### Ein ausgefeilteres Beispiel

Ein Zähler muss nicht unbedingt jedes Mal angezeigt werden, wenn er erhöht wird. Dieses Beispiel zählt alle Links, dabei wird der Zähler nur angezeigt, wenn ein Link keinen Text hat, als bequemer Ersatz.

#### CSS

```css
:root {
  counter-reset: link;
}

a[href] {
  counter-increment: link;
}

a[href]:empty::after {
  content: "[" counter(link) "]";
}
```

#### HTML

```html
<p>See <a href="https://www.mozilla.org/"></a></p>
<p>Do not forget to <a href="contact-me.html">leave a message</a>!</p>
<p>See also <a href="https://developer.mozilla.org/"></a></p>
```

#### Ergebnis

{{EmbedLiveSample("A_more_sophisticated_example", "100%", 150)}}

### Beispiel eines verschachtelten Zählers

Ein CSS-Zähler kann besonders nützlich für die Erstellung von gegliederten Listen sein, da eine neue Instanz des Zählers automatisch in Kindelementen erstellt wird. Mit der Funktion {{cssxref("counters", "counters()")}} kann Text zwischen verschiedenen Ebenen verschachtelter Zähler eingefügt werden.

#### CSS

```css
ol {
  counter-reset: section; /* Creates a new instance of the
                             section counter with each ol
                             element */
  list-style-type: none;
}

li::before {
  counter-increment: section; /* Increments only this instance
                                            of the section counter */
  content: counters(section, ".") " "; /* Combines the values of all instances
                                          of the section counter, separated
                                          by a period */
}
```

#### HTML

```html-nolint
<ol>
  <li>item</li>          <!-- 1     -->
  <li>item               <!-- 2     -->
    <ol>
      <li>item</li>      <!-- 2.1   -->
      <li>item</li>      <!-- 2.2   -->
      <li>item           <!-- 2.3   -->
        <ol>
          <li>item</li>  <!-- 2.3.1 -->
          <li>item</li>  <!-- 2.3.2 -->
        </ol>
        <ol>
          <li>item</li>  <!-- 2.3.1 -->
          <li>item</li>  <!-- 2.3.2 -->
          <li>item</li>  <!-- 2.3.3 -->
        </ol>
      </li>
      <li>item</li>      <!-- 2.4   -->
    </ol>
  </li>
  <li>item</li>          <!-- 3     -->
  <li>item</li>          <!-- 4     -->
</ol>
<ol>
  <li>item</li>          <!-- 1     -->
  <li>item</li>          <!-- 2     -->
</ol>
```

#### Ergebnis

{{EmbedLiveSample("Example_of_a_nested_counter", "100%", 350)}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{cssxref("contain")}}
- {{cssxref("counter-reset")}}
- {{cssxref("counter-set")}}
- {{cssxref("counter-increment")}}
- {{cssxref("@counter-style")}}
- [CSS Counter Styles](/de/docs/Web/CSS/CSS_counter_styles) Modul
- [CSS Lists and Counters](/de/docs/Web/CSS/CSS_lists) Modul
