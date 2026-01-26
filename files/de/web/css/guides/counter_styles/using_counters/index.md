---
title: Verwenden von CSS-Zählern
short-title: Verwenden von Zählern
slug: Web/CSS/Guides/Counter_styles/Using_counters
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**CSS-Zähler** ermöglichen es Ihnen, das Erscheinungsbild von Inhalten basierend auf ihrer Position in einem Dokument anzupassen.
Zum Beispiel können Sie Zähler verwenden, um die Überschriften auf einer Webseite automatisch zu nummerieren oder um die Nummerierung in nummerierten Listen zu ändern.

Zähler sind im Wesentlichen Variablen, die von CSS verwaltet werden und deren Werte durch CSS-Regeln, die verfolgen, wie oft sie verwendet werden, erhöht oder verringert werden können. Die folgenden Dinge beeinflussen die Zählerwerte eines Elements:

1. Zähler werden vom Elternelement [geerbt](#vererbung_und_weitergabe_von_zählern) oder von einem vorherigen Geschwisterelement übernommen.
2. Neue Zähler werden mit der Eigenschaft {{cssxref("counter-reset")}} instanziiert.
3. Zähler werden mit der Eigenschaft {{cssxref("counter-increment")}} erhöht.
4. Zähler werden mit der Eigenschaft {{cssxref("counter-set")}} direkt auf einen Wert festgelegt.

Sie können eigene benannte Zähler definieren und auch den `list-item`-Zähler manipulieren, der standardmäßig für alle nummerierten Listen erstellt wird.

## Verwenden von Zählern

Um einen Zähler zu verwenden, muss er zuerst mit der Eigenschaft {{cssxref("counter-reset")}} auf einen Wert initialisiert werden.
Der Wert des Zählers kann mit der Eigenschaft {{cssxref("counter-increment")}} erhöht oder verringert werden und kann mit der Eigenschaft {{cssxref("counter-set")}} direkt auf einen bestimmten Wert festgelegt werden.
Der aktuelle Wert eines Zählers wird durch die {{cssxref("counter()")}}- oder {{cssxref("counters()")}}-Funktion angezeigt, typischerweise innerhalb einer [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) {{CSSxRef("content")}}-Eigenschaft.

Zähler können nur in Elementen gesetzt, zurückgesetzt oder erhöht werden, die Boxen generieren.
Zum Beispiel, wenn ein Element auf `display: none` gesetzt ist, wird jede Zähleroperation auf diesem Element ignoriert.

Die Eigenschaften von Zählern können auf bestimmte Elemente mit Stilcontainment beschränkt werden, was in der Eigenschaft {{cssxref("contain")}} genauer beschrieben wird.

### Manipulation eines Zählerwertes

Um einen CSS-Zähler zu verwenden, muss er zuerst mit der Eigenschaft {{cssxref("counter-reset")}} auf einen Wert initialisiert werden.
Die Eigenschaft kann auch verwendet werden, um den Zählerwert auf eine bestimmte Zahl zu ändern.

Im Folgenden initialisieren wir einen Zähler namens `section` auf den Standardwert (0).

```css
counter-reset: section;
```

Sie können auch mehrere Zähler initialisieren und optional einen Anfangswert für jeden angeben.
Im Folgenden initialisieren wir die Zähler `section` und `topic` auf den Standardwert und den Zähler `page` auf 3.

```css
counter-reset: section page 3 topic;
```

Nachdem sie initialisiert wurden, kann der Wert eines Zählers mit {{cssxref("counter-increment")}} erhöht oder verringert werden.
Zum Beispiel würde die folgende Anweisung den `section`-Zähler bei jedem `h3`-Tag um eins erhöhen.

```css
h3::before {
  counter-increment: section; /* Increment the value of section counter by 1 */
}
```

Sie können den Erhöhungs- oder Verringerungsbetrag nach dem Zählernamen angeben. Es kann eine positive oder negative Zahl sein, standardmäßig `1`, wenn keine ganze Zahl angegeben ist.

Neben der Erhöhung oder Verringerung können Zähler mit der Eigenschaft {{cssxref("counter-set")}} auch explizit auf einen Wert gesetzt werden.

```css
.done::before {
  counter-set: section 20;
}
```

Der Name des Zählers darf nicht `none`, `inherit` oder `initial` sein, sonst wird die Anweisung ignoriert.

### Anzeigen eines Zählers

Der Wert eines Zählers kann entweder mit der {{cssxref("counter()")}}- oder {{cssxref("counters()")}}-Funktion in einer {{cssxref("content")}}-Eigenschaft angezeigt werden.

Zum Beispiel verwendet die folgende Anweisung `counter()`, um jedem `h3`-Überschrift den Text `Section <number>:` voranzustellen, wobei `<number>` den Wert des Zählers in Dezimaldarstellung (der Standardanzeigestil) darstellt:

```css
body {
  counter-reset: section; /* Set a counter named 'section', and its initial value is 0. */
}

h3::before {
  counter-increment: section; /* Increment the value of section counter by 1 */
  content: "Section " counter(section) ": "; /* Display counter value in default style (decimal) */
}
```

Die {{cssxref("counter()")}}-Funktion wird verwendet, wenn die Nummerierung von Verschachtelungsebenen den Kontext der Elternebenen nicht einschließt.
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

Die {{cssxref("counters()")}}-Funktion wird verwendet, wenn der Zähler für verschachtelte Ebenen die Zählung aus Elternebenen einschließen muss.
Zum Beispiel können Sie dies verwenden, um Abschnitte wie folgt darzustellen:

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

Die {{cssxref("counter()")}}-Funktion hat zwei Formen: `counter(<counter-name>)` und `counter(<counter-name>, <counter-style>)`.
Der erzeugte Text ist der Wert des innersten Zählers mit dem angegebenen Namen im Geltungsbereich beim Pseudo-Element.

Die {{cssxref("counters()")}}-Funktion hat ebenfalls zwei Formen: `counters(<counter-name>, <separator>)` und `counters(<counter-name>, <separator>, <counter-style>)`.
Der erzeugte Text ist der Wert aller Zähler mit dem angegebenen Namen im Geltungsbereich beim angegebenen Pseudo-Element, vom äußersten bis zum innersten, getrennt durch die angegebene Zeichenkette (`<separator>`).

Der Zähler wird in dem angegebenen `<counter-style>` für beide Methoden gerendert (`decimal` ist der Standard).
Sie können jeden der {{cssxref("list-style-type")}}-Werte oder Ihre eigenen [benutzerdefinierten Stile](/de/docs/Web/CSS/Guides/Counter_styles) verwenden.

Beispiele für die Verwendung von `counter()` und `counters()` finden sich unten im [Grundlegenden Beispiel](#grundlegendes_beispiel) und im [Beispiel für einen verschachtelten Zähler](#beispiel_für_einen_verschachtelten_zähler).

### Umgekehrte Zähler

Ein umgekehrter Zähler ist einer, der dazu gedacht ist, herunterzuzählen (zu verringern) statt hochzuzählen (zu erhöhen).
Umgekehrte Zähler werden mit der Notation `reversed()` erstellt, wenn der Zähler in {{cssxref("counter-reset")}} benannt wird.

Umgekehrte Zähler haben einen Standardanfangswert, der der Anzahl der Elemente entspricht (im Gegensatz zu normalen Zählern, die einen Standardwert von 0 haben).
Dies ermöglicht die Implementierung eines Zählers, der von der Anzahl der Elemente bis zu eins herunterzählt.

Zum Beispiel, um einen umgekehrten Zähler namens `section` mit einem Standardanfangswert zu erstellen, würden Sie die folgende Syntax verwenden:

```css
counter-reset: reversed(section);
```

Natürlich können Sie jeden gewünschten Anfangswert angeben.

Der Zählerwert wird durch die Angabe eines negativen Werts für {{cssxref("counter-increment")}} verringert.

> [!NOTE]
> Sie können {{cssxref("counter-increment")}} auch verwenden, um einen nicht umgekehrten Zähler zu verringern.
> Der Hauptvorteil der Verwendung eines umgekehrten Zählers ist der Standardanfangswert, und dass der `list-item`-Zähler umgekehrte Zähler automatisch verringert.

### Vererbung und Weitergabe von Zählern

Jedes Element oder Pseudo-Element hat eine Reihe von Zählern im Geltungsbereich dieses Elements. Anfangszähler im Set werden vom Elter-Element und dem vorhergehenden Geschwisterelement übernommen. Die Zählerwerte werden vom letzten Nachkommen des vorherigen Geschwisterelements, dem letzten Geschwisterelement oder dem Elter-Element übernommen.

Wenn ein Element einen Zähler deklariert, wird der Zähler innerhalb des Zählers mit demselben Namen verschachtelt, der vom Elter-Element empfangen wurde. Wenn das Elter-Element keinen Zähler mit demselben Namen hat, wird der Zähler so wie er ist zum Zählerset des Elements hinzugefügt. Ein Zähler mit demselben Namen, der vom vorherigen Geschwisterelement empfangen wurde, wird aus dem Zählerset entfernt.

Die {{cssxref("counter()")}}-Funktion ruft den innersten Zähler mit dem angegebenen Namen ab. Und die {{cssxref("counters()")}}-Funktion ruft den gesamten Zählerbaum mit dem angegebenen Namen ab.

Im folgenden Beispiel demonstrieren wir einen geerbten Zähler namens `primary` und einen Geschwisterzähler namens `secondary`. Alle `<div>`-Elemente zeigen ihre Zähler mit der `counters()`-Funktion an. Beachten Sie, dass alle Zähler mit der Eigenschaft `counter-reset` erstellt wurden und keiner der Zähler inkrementiert wurde.

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

Das Abschnittselement initialisiert einen Zähler namens `primary` mit dem Wert `3`, und alle Kind-`<div>`s erhalten den geerbten `primary`-Zähler. Das Element 'D' erstellt einen neuen `primary`-Zähler (Wert `6`), der im vom Elter-Element empfangenen Zähler verschachtelt wird, sodass das Element zwei Zähler namens `primary` mit den Werten `3` und `6` hat.

Das Element 'F' erstellt den `secondary`-Zähler (Wert `5`) zum ersten Mal und gibt den Zähler an das nächste Geschwisterelement 'G' weiter. Das Element 'G' gibt den Zähler an das nächste Element 'H' weiter und so weiter. Als nächstes erstellt das Element 'I' einen neuen Zähler mit demselben Namen `secondary` (Wert `10`), aber es verwirft den `secondary` (Wert `5`)-Zähler, den es vom vorherigen Geschwisterelement 'H' erhalten hat, und gibt seinen eigenen Zähler an 'J' weiter.

### Unterschied zwischen counter-set und counter-reset

Die Eigenschaft {{cssxref("counter-set")}} aktualisiert einen vorhandenen Zähler und falls kein Zähler mit diesem Namen existiert, wird ein neuer Zähler instanziiert. Die Eigenschaft {{cssxref("counter-reset")}} erstellt _immer_ einen neuen Zähler.

Im folgenden Beispiel haben wir zwei Unterlisten innerhalb einer übergeordneten Liste. Jedes Listenelement wurde mit einem Zähler namens 'item' nummeriert. Die erste Unterliste verwendet die Eigenschaft {{cssxref("counter-set")}} und die zweite Unterliste verwendet die Eigenschaft {{cssxref("counter-reset")}}, um den 'item'-Zähler zu ändern.

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

Beachten Sie, wie die Elemente der ersten Unterliste mit `11` nummeriert werden und die Nummerierung in der übergeordneten Liste fortgesetzt wird. Dies liegt daran, dass die Eigenschaft `counter-set` denselben 'item'-Zähler aktualisiert, der auf dem `.parent`-Element deklariert wurde. Beachten Sie dann, wie die Elemente der zweiten Unterliste eine neue Nummerierung ab '1' erhalten und die übergeordneten Listenelemente danach die Nummerierung nicht fortsetzen. Dies liegt daran, dass die Eigenschaft `counter-reset` einen neuen Zähler mit demselben Namen erstellt hat, sodass die übergeordneten Listenelemente weiterhin den alten Zähler verwenden.

### Listeneintrag-Zähler

Nummerierte Listen, die mit {{HTMLElement("ol")}}-Elementen erstellt wurden, haben implizit einen Zähler namens `list-item`.

Wie andere Zähler hat dieser einen Standardanfangswert von 0 für aufwärtszählende Zähler und "Anzahl der Elemente" für umgekehrte Zähler.
Im Gegensatz zu vom Autor erstellten Zählern wird `list-item` _automatisch_ um eins für jedes Listenelement inkrementiert oder dekrementiert, abhängig davon, ob der Zähler umgekehrt ist oder nicht.

Der `list-item`-Zähler kann verwendet werden, um das Standardverhalten von nummerierten Listen mit CSS zu manipulieren.
Zum Beispiel können Sie den Standardanfangswert ändern oder {{cssxref("counter-increment")}} verwenden, um die Art zu ändern, in der die Listenelemente inkrementiert oder dekrementiert werden.

## Beispiele

### Grundlegendes Beispiel

Dieses Beispiel fügt den Text "Section \[der Wert des Zählers]:" an den Anfang jeder Überschrift hinzu.

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

### Grundlegendes Beispiel: umgekehrter Zähler

Dieses Beispiel ist dasselbe wie das obige, verwendet jedoch einen umgekehrten Zähler.
Wenn Ihr Browser die `reversed()`-Funktionalität unterstützt, sieht das Ergebnis wie folgt aus:

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

### Ein anspruchsvolleres Beispiel

Ein Zähler muss nicht unbedingt jedes Mal angezeigt werden, wenn er inkrementiert wird.
Dieses Beispiel zählt alle Links mit dem Zähler, der nur angezeigt wird, wenn ein Link keinen Text hat, als praktische Ersatzdarstellung.

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

### Beispiel für einen verschachtelten Zähler

Ein CSS-Zähler kann besonders nützlich für die Erstellung von Gliederungslisten sein, da eine neue Instanz des Zählers automatisch in Kindelementen erstellt wird.
Mit der {{cssxref("counters()")}}-Funktion kann Trenntext zwischen verschiedenen Ebenen verschachtelter Zähler eingefügt werden.

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
- [CSS-Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles)-Modul
- [CSS-Listen und -Zähler](/de/docs/Web/CSS/Guides/Lists)-Modul
