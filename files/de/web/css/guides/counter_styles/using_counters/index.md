---
title: Verwenden von CSS-Zählern
short-title: Verwenden von Zählern
slug: Web/CSS/Guides/Counter_styles/Using_counters
l10n:
  sourceCommit: 32bdfdb82cf91ce9942b694286dec62be2cc20aa
---

**CSS-Zähler** ermöglichen es Ihnen, das Erscheinungsbild von Inhalten basierend auf ihrer Position in einem Dokument anzupassen. Zum Beispiel können Sie Zähler verwenden, um die Überschriften auf einer Webseite automatisch zu nummerieren oder um die Nummerierung in geordneten Listen zu verändern.

Zähler sind im Wesentlichen Variablen, die von CSS verwaltet werden und deren Werte durch CSS-Regeln erhöht oder verringert werden können, die nachverfolgen, wie oft sie verwendet werden. Die folgenden Dinge beeinflussen die Zählerwerte eines Elements:

1. Zähler werden vom Elternelement [geerbt](#zählervererbung_und_-weitergabe) oder von einem vorherigen Geschwisterelement übernommen.
2. Neue Zähler werden mit der Eigenschaft {{cssxref("counter-reset")}} initialisiert.
3. Zähler werden mit der Eigenschaft {{cssxref("counter-increment")}} erhöht.
4. Zähler werden direkt auf einen Wert gesetzt, indem die Eigenschaft {{cssxref("counter-set")}} verwendet wird.

Sie können Ihre eigenen benannten Zähler definieren, und Sie können auch den `list-item` Zähler manipulieren, der standardmäßig für alle geordneten Listen erstellt wird.

## Verwenden von Zählern

Um einen Zähler zu verwenden, muss er zuerst mit der Eigenschaft {{cssxref("counter-reset")}} auf einen Wert initialisiert werden. Der Wert des Zählers kann mit der Eigenschaft {{cssxref("counter-increment")}} erhöht oder verringert werden und kann direkt auf einen bestimmten Wert mit der Eigenschaft {{cssxref("counter-set")}} gesetzt werden. Der aktuelle Wert eines Zählers wird mit der {{cssxref("counter", "counter()")}} oder {{cssxref("counters", "counters()")}} Funktion angezeigt, typischerweise innerhalb einer [Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) {{CSSxRef("content")}} Eigenschaft.

Zähler können nur in Elementen gesetzt, zurückgesetzt oder erhöht werden, die Boxen generieren. Beispiel: Wenn ein Element auf `display: none` gesetzt ist, wird jede Zähleroperation an diesem Element ignoriert.

Die Eigenschaften von Zählern können mittels Stil-Eingrenzung auf bestimmte Elemente beschränkt werden, was im Detail in der Eigenschaft {{cssxref("contain")}} beschrieben wird.

### Manipulierung des Zählerwerts

Um einen CSS-Zähler zu verwenden, muss er zuerst mit der Eigenschaft {{cssxref("counter-reset")}} auf einen Wert initialisiert werden. Die Eigenschaft kann auch verwendet werden, um den Zählerwert auf eine spezifische Nummer zu ändern.

Im Folgenden initialisieren wir einen Zähler namens `section` auf den Standardwert (0).

```css
counter-reset: section;
```

Sie können auch mehrere Zähler initialisieren, wobei Sie optional einen Startwert für jeden angeben können. Im Folgenden initialisieren wir die `section` und `topic` Zähler auf den Standardwert und den `page` Zähler auf 3.

```css
counter-reset: section page 3 topic;
```

Nachdem ein Zähler initialisiert wurde, kann sein Wert mit {{cssxref("counter-increment")}} erhöht oder verringert werden. Zum Beispiel würde die folgende Deklaration den `section` Zähler bei jedem `h3` Tag um eins erhöhen.

```css
h3::before {
  counter-increment: section; /* Increment the value of section counter by 1 */
}
```

Sie können den Inkrement- oder Dekrementbetrag nach dem Namen des Zählers angeben. Es kann eine positive oder negative Zahl sein, standardmäßig ist es `1`, wenn keine ganze Zahl angegeben wird.

Neben dem Erhöhen oder Verringern kann ein Zähler auch explizit auf einen Wert mit der Eigenschaft {{cssxref("counter-set")}} gesetzt werden.

```css
.done::before {
  counter-set: section 20;
}
```

Der Name des Zählers darf nicht `none`, `inherit` oder `initial` sein; ansonsten wird die Deklaration ignoriert.

### Anzeige eines Zählers

Der Wert eines Zählers kann entweder mit der {{cssxref("counter", "counter()")}} oder {{cssxref("counters", "counters()")}} Funktion innerhalb einer {{cssxref("content")}} Eigenschaft angezeigt werden.

Zum Beispiel verwendet die folgende Deklaration `counter()`, um jedem `h3` Überschrift den Text `Section <number>:` voranzustellen, wobei `<number>` der Wert des Zählers in Dezimal (dem Standard-Anzeigestil) ist:

```css
body {
  counter-reset: section; /* Set a counter named 'section', and its initial value is 0. */
}

h3::before {
  counter-increment: section; /* Increment the value of section counter by 1 */
  content: "Section " counter(section) ": "; /* Display counter value in default style (decimal) */
}
```

Die Funktion {{cssxref("counter", "counter()")}} wird verwendet, wenn die Nummerierung von Verschachtelungsebenen nicht den Kontext der übergeordneten Ebenen umfasst. Zum Beispiel startet hier jede verschachtelte Ebene wieder bei eins:

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

Die Funktion {{cssxref("counters", "counters()")}} wird verwendet, wenn das Zählen für verschachtelte Ebenen die Zählung von übergeordneten Ebenen umfassen muss. Zum Beispiel könnten Sie dies verwenden, um Abschnitte wie folgt anzuordnen:

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

Die Funktion {{cssxref("counter", "counter()")}} hat zwei Formen: `counter(<counter-name>)` und `counter(<counter-name>, <counter-style>)`. Der generierte Text ist der Wert des innersten Zählers des angegebenen Namens im Geltungsbereich des Pseudoelements.

Die Funktion {{cssxref("counters", "counters()")}} hat ebenfalls zwei Formen: `counters(<counter-name>, <separator>)` und `counters(<counter-name>, <separator>, <counter-style>)`. Der generierte Text ist der Wert aller Zähler mit dem angegebenen Namen im Geltungsbereich des angegebenen Pseudoelements, vom äußersten zum innersten, getrennt durch die angegebene Zeichenkette (`<separator>`).

Der Zähler wird im angegebenen `<counter-style>` für beide Methoden gerendert (`decimal` standardmäßig). Sie können jeden der {{cssxref("list-style-type")}} Werte oder Ihre eigenen [benutzerdefinierten Stile](/de/docs/Web/CSS/Guides/Counter_styles) verwenden.

Beispiele, die die Verwendung von `counter()` und `counters()` zeigen, finden Sie unten im [Grundlagenbeispiel](#grundlagenbeispiel) und [Beispiel eines verschachtelten Zählers](#beispiel_eines_verschachtelten_zählers).

### Umgekehrte Zähler

Ein umgekehrter Zähler ist einer, der dazu gedacht ist, rückwärts zu zählen (dekrementieren) anstatt vorwärts (inkrementieren). Umgekehrte Zähler werden mit der `reversed()` Funktionsnotation erstellt, wenn der Zähler in {{cssxref("counter-reset")}} benannt wird.

Umgekehrte Zähler haben einen Standard-Startwert, der der Anzahl der Elemente entspricht (im Gegensatz zu normalen Zählern, die einen Standardwert von 0 haben). Dies ermöglicht die Implementierung eines Zählers, der von der Anzahl der Elemente bis zu eins zurückzählt.

Zum Beispiel würden Sie, um einen umgekehrten Zähler namens `section` mit einem Standard-Startwert zu erstellen, die folgende Syntax verwenden:

```css
counter-reset: reversed(section);
```

Sie können natürlich jeden beliebigen Startwert angeben, den Sie möchten.

Der Zählerwert wird verringert, indem ein negativer Wert für {{cssxref("counter-increment")}} angegeben wird.

> [!NOTE]
> Sie können auch {{cssxref("counter-increment")}} verwenden, um einen nicht umgekehrten Zähler zu dekrementieren.
> Der Hauptvorteil eines umgekehrten Zählers ist der Standard-Startwert und dass der `list-item` Zähler umgekehrte Zähler automatisch dekrementiert.

### Zählervererbung und -weitergabe

Jedes Element oder Pseudoelement hat eine Menge von Zählern im Geltungsbereich dieses Elements. Anfangszähler in der Menge werden vom Elternelement und dem vorhergehenden Geschwisterelement übernommen. Die Zählerwerte werden vom letzten Nachkommen des vorherigen Geschwisterelements, dem letzten Geschwister oder dem Elternelement übernommen.

Wenn ein Element einen Zähler deklariert, wird der Zähler innerhalb des gleichen Namens, der vom Elternelement erhalten wurde, verschachtelt. Wenn das Elternelement keinen Zähler mit dem gleichen Namen hat, wird der Zähler einfach zur Zählermenge des Elements hinzugefügt. Ein Zähler mit dem gleichen Namen, der vom vorherigen Geschwisterelement erhalten wurde, wird aus der Menge entfernt.

Die Funktion {{cssxref("counter", "counter()")}} ruft den innersten Zähler mit dem angegebenen Namen ab. Und die Funktion {{cssxref("counters", "counters()")}} ruft den gesamten Zählerbaum mit dem angegebenen Namen ab.

Im folgenden Beispiel demonstrieren wir einen geerbten Zähler namens `primary` und einen Geschwisterzähler namens `secondary`. Alle `<div>`-Elemente zeigen ihre Zähler mit der `counters()` Funktion an. Beachten Sie, dass alle Zähler mit der `counter-reset` Eigenschaft erstellt wurden und keiner der Zähler erhöht wurde.

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

Das Abschnittselement initialisiert einen Zähler namens `primary` mit dem Wert `3`, und alle Kind-`<div>`s erhalten den geerbten `primary` Zähler. Das Element 'D' erstellt einen neuen `primary` (Wert `6`) Zähler, der in den vom Elternelement erhaltenen Zähler verschachtelt wird, sodass das Element zwei Zähler namens `primary` mit den Werten `3` und `6` hat.

Das Element 'F' erstellt den `secondary` (Wert `5`) Zähler zum ersten Mal und gibt den Zähler an das nächste Geschwisterelement 'G'. Das Element 'G' gibt den Zähler an das nächste Element 'H' weiter und so weiter. Danach erstellt das Element 'I' einen neuen Zähler mit dem gleichen Namen `secondary` (Wert `10`), verwirft jedoch den `secondary` (Wert `5`) Zähler, der vom vorherigen Geschwisterelement 'H' erhalten wurde, und übergibt seinen eigenen Zähler an 'J'.

### Unterschied zwischen counter-set und counter-reset

Die Eigenschaft {{cssxref("counter-set")}} aktualisiert einen bestehenden Zähler und wenn kein Zähler mit dem Namen existiert, wird ein neuer Zähler erstellt. Die Eigenschaft {{cssxref("counter-reset")}} erstellt _immer_ einen neuen Zähler.

Im folgenden Beispiel haben wir zwei Unterlisten innerhalb einer Hauptliste. Jedes Listenelement wurde mit einem Zähler namens 'item' nummeriert. Die erste Unterliste verwendet die {{cssxref("counter-set")}} Eigenschaft und die zweite Unterliste verwendet die {{cssxref("counter-reset")}} Eigenschaft, um den 'item'-Zähler zu ändern.

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

Beachten Sie, wie die ersten Elemente der Unterliste mit `11` beginnen und die Nummerierung in der Hauptliste fortgesetzt wird. Dies liegt daran, dass die `counter-set` Eigenschaft den gleichen 'item'-Zähler, der am `.parent` Element deklariert wurde, aktualisiert. Beachten Sie dann, wie die zweiten Elemente der Unterliste eine neue Nummerierung ab '1' erhalten und die Hauptlistenelemente danach die Nummerierung nicht fortführen. Dies liegt daran, dass die `counter-reset` Eigenschaft einen neuen Zähler mit dem gleichen Namen erstellt, sodass die Hauptelemente der Liste weiterhin den alten Zähler verwenden.

### Listenelementzähler

Geordnete Listen, erstellt mit {{HTMLElement("ol")}}, haben implizit einen Zähler namens `list-item`.

Wie andere Zähler hat dieser einen Standard-Startwert von 0 für aufwärts zählende Zähler und "Anzahl der Elemente" für umgekehrte Zähler. Im Gegensatz zu vom Autor erstellten Zählern wird `list-item` _automatisch_ um eins erhöht oder verringert für jedes Listenelement, je nachdem, ob der Zähler umgekehrt ist oder nicht.

Der `list-item` Zähler kann verwendet werden, um das Standardverhalten von geordneten Listen mit CSS zu manipulieren. Zum Beispiel können Sie den Standard-Startwert ändern oder {{cssxref("counter-increment")}} verwenden, um zu ändern, wie die Listenelemente inkrementiert oder dekrementiert werden.

## Beispiele

### Grundlagenbeispiel

Dieses Beispiel fügt "Section \[der Wert des Zählers]:" am Anfang jeder Überschrift hinzu.

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

### Grundlagenbeispiel: umgekehrter Zähler

Dieses Beispiel ist das gleiche wie das oben, verwendet jedoch einen umgekehrten Zähler. Wenn Ihr Browser die `reversed()` Funktionsnotation unterstützt, sieht das Ergebnis so aus:

![umgekehrter Zähler](reversed_headings_basic.png)

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

### Ein etwas ausgefeilteres Beispiel

Ein Zähler muss nicht unbedingt jedes Mal angezeigt werden, wenn er erhöht wird. In diesem Beispiel werden alle Links gezählt, wobei der Zähler nur angezeigt wird, wenn ein Link keinen Text hat, als bequemer Ersatz.

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
<p>See <a href="https://www.mozilla.org/" aria-label="Mozilla"></a></p>
<p>Do not forget to <a href="contact-me.html">leave a message</a>!</p>
<p>See also <a href="https://developer.mozilla.org/" aria-label="MDN"></a></p>
```

#### Ergebnis

{{EmbedLiveSample("A_more_sophisticated_example", "100%", 150)}}

### Beispiel eines verschachtelten Zählers

Ein CSS-Zähler kann besonders nützlich für die Erstellung von Umrißlisten sein, da eine neue Instanz des Zählers automatisch in Kindelementen erstellt wird. Mit der {{cssxref("counters", "counters()")}} Funktion kann trennender Text zwischen verschiedenen Ebenen verschachtelter Zähler eingefügt werden.

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
- [CSS-Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles) Modul
- [CSS-Listen und -Zähler](/de/docs/Web/CSS/Guides/Lists) Modul
