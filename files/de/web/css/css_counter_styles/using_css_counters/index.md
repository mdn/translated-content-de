---
title: Verwendung von CSS-Zählern
slug: Web/CSS/CSS_counter_styles/Using_CSS_counters
l10n:
  sourceCommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{CSSRef}}

**CSS-Zähler** erlauben Ihnen, das Erscheinungsbild von Inhalten basierend auf ihrer Position in einem Dokument anzupassen.
Zum Beispiel können Sie Zähler verwenden, um die Überschriften auf einer Webseite automatisch zu nummerieren oder um die Nummerierung von geordneten Listen zu ändern.

Im Wesentlichen sind Zähler Variablen, die von CSS verwaltet werden, deren Werte durch CSS-Regeln erhöht oder verringert werden können, die verfolgen, wie oft sie verwendet werden. Folgende Dinge beeinflussen den Zählerwert eines Elements:

1. Zähler werden vom Elternelement geerbt oder von einem vorhergehenden Geschwisterelement übernommen.
2. Neue Zähler werden mit der {{cssxref("counter-reset")}} Eigenschaft instanziiert.
3. Zähler werden mit der {{cssxref("counter-increment")}} Eigenschaft erhöht.
4. Zähler werden direkt auf einen Wert mit der {{cssxref("counter-set")}} Eigenschaft gesetzt.

Sie können Ihre eigenen benannten Zähler definieren und auch den `list-item` Zähler manipulieren, der standardmäßig für alle geordneten Listen erstellt wird.

## Verwendung von Zählern

Um einen Zähler zu verwenden, muss er zuerst mit der {{cssxref("counter-reset")}} Eigenschaft auf einen Wert initialisiert werden.
Der Wert des Zählers kann mit der {{cssxref("counter-increment")}} Eigenschaft erhöht oder verringert werden und kann direkt auf einen bestimmten Wert mit der {{cssxref("counter-set")}} Eigenschaft gesetzt werden.
Der aktuelle Wert eines Zählers wird mit der {{cssxref("counter", "counter()")}} oder {{cssxref("counters", "counters()")}} Funktion angezeigt, typischerweise innerhalb einer [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) {{CSSxRef("content")}} Eigenschaft.

Zähler können nur in Elementen gesetzt, zurückgesetzt oder erhöht werden, die Boxen generieren.
Beispielsweise wird jede Zähleroperation auf einem Element ignoriert, wenn ein Element auf `display: none` gesetzt ist.

Die Eigenschaften von Zählern können auf bestimmte Elemente mit Stil-Eindämmung beschränkt werden, die im Detail in der {{cssxref("contain")}} Eigenschaft beschrieben wird.

### Manipulation des Zählerwerts

Um einen CSS-Zähler zu verwenden, muss er zuerst mit der {{cssxref("counter-reset")}} Eigenschaft auf einen Wert initialisiert werden.
Diese Eigenschaft kann auch verwendet werden, um den Zählerwert auf eine bestimmte Nummer zu ändern.

Im folgenden Beispiel initialisieren wir einen Zähler namens `section` auf den Standardwert (0).

```css
counter-reset: section;
```

Sie können auch mehrere Zähler initialisieren, indem Sie optional einen Initialwert für jeden festlegen.
Im folgenden Beispiel initialisieren wir die Zähler `section` und `topic` auf den Standardwert und den Zähler `page` auf 3.

```css
counter-reset: section page 3 topic;
```

Sobald ein Zähler initialisiert ist, kann sein Wert mit {{cssxref("counter-increment")}} erhöht oder verringert werden.
Zum Beispiel würde die folgende Deklaration den Zähler `section` bei jedem `h3` Tag um eins erhöhen.

```css
h3::before {
  counter-increment: section; /* Increment the value of section counter by 1 */
}
```

Sie können die Erhöhung oder Verringerung nach dem Zählernamen angeben. Es kann eine positive oder negative Zahl sein, standardmäßig ist es `1`, wenn keine ganze Zahl angegeben ist.

Abgesehen von der Erhöhung oder Verringerung können Zähler auch explizit auf einen Wert mit der {{cssxref("counter-set")}} Eigenschaft gesetzt werden.

```css
.done::before {
  counter-set: section 20;
}
```

Der Name des Zählers darf nicht `none`, `inherit` oder `initial` sein; andernfalls wird die Deklaration ignoriert.

### Anzeige eines Zählers

Der Wert eines Zählers kann entweder mit der {{cssxref("counter", "counter()")}} oder {{cssxref("counters", "counters()")}} Funktion in einer {{cssxref("content")}} Eigenschaft angezeigt werden.

Zum Beispiel verwendet die folgende Deklaration `counter()`, um jedem `h3` Titel den Text `Section <number>:` voranzustellen, wobei `<number>` der Wert des Zählers in Dezimal (dem Standardanzeigestil) ist:

```css
h3::before {
  counter-increment: section; /* Increment the value of section counter by 1 */
  content: "Section " counter(section) ": "; /* Display counter value in default style (decimal) */
}
```

Die Funktion {{cssxref("counter", "counter()")}} wird verwendet, wenn die Nummerierung der Verschachtelungsebenen nicht den Kontext der Elternebenen einschließt.
Zum Beispiel beginnt hier jede verschachtelte Ebene wieder bei eins:

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

Die Funktion {{cssxref("counters", "counters()")}} wird verwendet, wenn die Zählung für verschachtelte Ebenen die Zählung der Elternebenen einschließen muss.
Zum Beispiel könnten Sie dies verwenden, um Abschnitte wie folgt darzustellen:

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

Die Funktion {{cssxref("counter", "counter()")}} hat zwei Formen: `counter(<counter-name>)` und `counter(<counter-name>, <counter-style>)`.
Der generierte Text ist der Wert des innersten Zählers des angegebenen Namens im Bereich des Pseudoelements.

Die Funktion {{cssxref("counters", "counters()")}} hat auch zwei Formen: `counters(<counter-name>, <separator>)` und `counters(<counter-name>, <separator>, <counter-style>)`.
Der generierte Text ist der Wert aller Zähler mit dem angegebenen Namen im Bereich des angegebenen Pseudoelements, von außen nach innen, getrennt durch die angegebene Zeichenkette (`<separator>`).

Der Zähler wird im angegebenen `<counter-style>` für beide Methoden (standardmäßig `decimal`) dargestellt.
Sie können jeden der {{cssxref("list-style-type")}} Werte oder Ihre eigenen [benutzerdefinierten Stile](/de/docs/Web/CSS/CSS_counter_styles) verwenden.

Beispiele zur Verwendung von `counter()` und `counters()` finden Sie unten im [grundlegenden Beispiel](#grundlegendes_beispiel) und [Beispiel eines verschachtelten Zählers](#beispiel_eines_verschachtelten_zählers).

### Umgekehrte Zähler

Ein umgekehrter Zähler ist einer, der abwärts (verringert) statt aufwärts (erhöht) zählen soll.
Umgekehrte Zähler werden mit der `reversed()` Funktionsnotation erstellt, wenn der Zähler in {{cssxref("counter-reset")}} benannt wird.

Umgekehrte Zähler haben einen Standard-Initialwert, der der Anzahl der Elemente entspricht (anders als normale Zähler, die einen Standardwert von 0 haben).
Dies erleichtert die Implementierung eines Zählers, der von der Anzahl der Elemente auf eins runterzählen soll.

Zum Beispiel verwenden Sie die folgende Syntax, um einen umgekehrten Zähler namens `section` mit einem Standard-Initialwert zu erstellen:

```css
counter-reset: reversed(section);
```

Natürlich können Sie auch jeden Initialwert angeben, den Sie möchten.

Der Zählerwert wird durch das Festlegen eines negativen Wertes für {{cssxref("counter-increment")}} verringert.

> [!NOTE]
> Sie können auch {{cssxref("counter-increment")}} verwenden, um einen nicht umgekehrten Zähler zu verringern.
> Der Hauptvorteil der Verwendung eines umgekehrten Zählers ist der Standard-Initialwert, und dass der `list-item` Zähler umgekehrte Zähler automatisch verringert.

### Vererbung und Verbreitung von Zählern

Jedes Element oder Pseudoelement hat eine Reihe von Zählern im Bereich dieses Elements. Anfangszähler im Satz werden vom Elternelement und dem vorhergehenden Geschwisterelement übernommen. Die Zählerwerte werden vom letzten Nachkommen des vorhergehenden Geschwisterelements, dem letzten Geschwister oder dem Elternelement erhalten.

Wenn ein Element einen Zähler deklariert, wird der Zähler innerhalb des Zählers mit demselben Namen verschachtelt, der vom Elternelement empfangen wird. Wenn das Elternelement keinen Zähler mit demselben Namen hat, wird der Zähler zum Zählersatz des Elements hinzugefügt, wie er ist. Ein Zähler mit demselben Namen, der vom vorhergehenden Geschwisterelement empfangen wird, wird aus dem Zählersatz entfernt.

Die {{cssxref("counter", "counter()")}} Funktion ruft den innersten Zähler mit dem angegebenen Namen ab. Und die {{cssxref("counters", "counters()")}} Funktion ruft den gesamten Zählerbaum mit dem angegebenen Namen ab.

Im folgenden Beispiel zeigen wir einen geerbten Zähler namens `primary` und einen Geschwisterzähler namens `secondary`. Alle `<div>` Elemente zeigen ihre Zähler mit der `counters()` Funktion an. Beachten Sie, dass alle Zähler mit der `counter-reset` Eigenschaft erstellt wurden und keiner der Zähler inkrementiert wurde.

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

Das Abschnittselement initialisiert einen Zähler namens `primary` mit dem Wert `3`, und alle Kind-`<div>`s erhalten den geerbten `primary` Zähler. Das Element 'D' erstellt einen neuen `primary` (Wert `6`) Zähler, der im Zähler empfangen vom Elternteil verschachtelt wird, sodass das Element zwei Zähler namens `primary` mit den Werten `3` und `6` enthält.

Das Element 'F' erstellt den `secondary` (Wert `5`) Zähler zum ersten Mal und gibt den Zähler an das nächste Geschwister 'G' weiter. Das Element 'G' übergibt den Zähler an das nächste Element 'H' und so weiter. Anschließend erstellt das Element 'I' einen neuen Zähler mit demselben Namen `secondary` (Wert `10`), lässt aber den `secondary` (Wert `5`) Zähler fallen, der vom vorherigen Geschwister 'H' empfangen wurde und gibt seinen eigenen Zähler an 'J' weiter.

### Unterschied zwischen counter-set und counter-reset

Die {{cssxref("counter-set")}} Eigenschaft aktualisiert einen bestehenden Zähler, und falls kein Zähler mit dem Namen existiert, wird ein neuer Zähler instanziiert. Die {{cssxref("counter-reset")}} Eigenschaft erstellt _immer_ einen neuen Zähler.

Im folgenden Beispiel haben wir zwei Unterlisten in einer Elternliste. Jedes Listenelement wurde mit einem Zähler namens 'item' nummeriert. Die erste Unterliste verwendet die {{cssxref("counter-set")}} Eigenschaft und die zweite Unterliste verwendet die {{cssxref("counter-reset")}} Eigenschaft, um den 'item' Zähler zu ändern.

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

{{EmbedLiveSample("Unterschied zwischen counter-set und counter-reset", "100%", 300)}}

Beachten Sie, wie die ersten Unterlistenelemente beginnen, Nummern von `11` zu erhalten, und die Nummerierung in der Elternliste fortgesetzt wird. Dies liegt daran, dass die `counter-set` Eigenschaft denselben 'item' Zähler aktualisiert, der auf dem `.parent` Element deklariert wurde. Beachten Sie dann, wie die zweiten Unterlistenelemente eine neue Nummerierung ab '1' erhalten und die darauffolgenden Elemente der Elternliste die Nummerierung nicht fortsetzen. Dies liegt daran, dass die `counter-reset` Eigenschaft einen neuen Zähler mit demselben Namen erstellt hat, sodass die Elemente der Elternliste den alten Zähler weiter verwendeten.

### Zähler für Listenelemente

Geordnete Listen, die mit {{HTMLElement("ol")}} Elementen erstellt werden, haben implizit einen Zähler namens `list-item`.

Wie andere Zähler hat dieser einen Standard-Initialwert von 0 für aufwärts zählende Zähler und "Anzahl der Items" für umgekehrte Zähler.
Anders als vom Autor erstellte Zähler inkrementiert oder dekrementiert `list-item` das Zähler _automatisch_ um eins für jedes Listenelement, je nachdem, ob der Zähler umgekehrt ist oder nicht.

Der `list-item` Zähler kann verwendet werden, um das Standardverhalten von geordneten Listen mit CSS zu manipulieren.
Zum Beispiel können Sie den Standard-Initialwert ändern oder {{cssxref("counter-increment")}} verwenden, um zu ändern, wie die Listenelemente inkrementiert oder dekrementiert werden.

## Beispiele

### Grundlegendes Beispiel

Dieses Beispiel fügt `Section [value of the counter]:` an den Anfang jeder Überschrift hinzu.

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

{{EmbedLiveSample("Grundlegendes Beispiel", "100%", 150)}}

### Grundlegendes Beispiel: umgekehrter Zähler

Dieses Beispiel ist dasselbe wie das obige, verwendet jedoch einen umgekehrten Zähler.
Wenn Ihr Browser die `reversed()` Funktionsnotation unterstützt, sieht das Ergebnis so aus:

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

{{EmbedLiveSample("Grundlegendes Beispiel: umgekehrter Zähler", "100%", 150)}}

### Ein ausgefeilteres Beispiel

Ein Zähler muss nicht unbedingt jedes Mal angezeigt werden, wenn er inkrementiert wird.
Dieses Beispiel zählt alle Links, wobei der Zähler nur angezeigt wird, wenn ein Link keinen Text hat, als bequemer Ersatz.

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

{{EmbedLiveSample("Ein ausgefeilteres Beispiel", "100%", 150)}}

### Beispiel eines verschachtelten Zählers

Ein CSS-Zähler kann besonders nützlich für das Erstellen von gegliederten Listen sein, da eine neue Instanz des Zählers automatisch in Kind-Elementen erstellt wird.
Mit der {{cssxref("counters", "counters()")}} Funktion kann trennender Text zwischen verschiedenen Ebenen verschachtelter Zähler eingefügt werden.

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

{{EmbedLiveSample("Beispiel eines verschachtelten Zählers", "100%", 350)}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{cssxref("contain")}}
- {{cssxref("counter-reset")}}
- {{cssxref("counter-set")}}
- {{cssxref("counter-increment")}}
- {{cssxref("@counter-style")}}
- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
