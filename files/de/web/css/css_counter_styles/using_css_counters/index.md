---
title: Verwendung von CSS-Zählern
short-title: Verwendung von Zählern
slug: Web/CSS/CSS_counter_styles/Using_CSS_counters
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

**CSS-Zähler** ermöglichen es Ihnen, das Erscheinungsbild von Inhalten basierend auf ihrer Position in einem Dokument anzupassen. Beispielsweise können Sie Zähler verwenden, um die Überschriften auf einer Webseite automatisch zu nummerieren oder die Nummerierung von sortierten Listen zu ändern.

Zähler sind im Wesentlichen von CSS verwaltete Variablen, deren Werte durch CSS-Regeln, die verfolgen, wie oft sie verwendet werden, erhöht oder verringert werden können. Die folgenden Dinge beeinflussen die Zählerwerte eines Elements:

1. Zähler werden vom [übergeordneten Element geerbt](#zählervererbung_und_-ausbreitung) oder von einem vorherigen Geschwisterelement übernommen.
2. Neue Zähler werden mit der Eigenschaft {{cssxref("counter-reset")}} instanziiert.
3. Zähler werden mit der Eigenschaft {{cssxref("counter-increment")}} erhöht.
4. Zähler werden direkt mit der Eigenschaft {{cssxref("counter-set")}} auf einen Wert gesetzt.

Sie können eigene benannte Zähler definieren und auch den `list-item`-Zähler manipulieren, der standardmäßig für alle geordneten Listen erstellt wird.

## Verwendung von Zählern

Um einen Zähler zu verwenden, muss er zuerst mit der Eigenschaft {{cssxref("counter-reset")}} auf einen Wert initialisiert werden. Der Wert des Zählers kann mit der Eigenschaft {{cssxref("counter-increment")}} erhöht oder verringert werden und kann mit der Eigenschaft {{cssxref("counter-set")}} direkt auf einen bestimmten Wert gesetzt werden. Der aktuelle Wert eines Zählers wird mit der Funktion {{cssxref("counter", "counter()")}} oder {{cssxref("counters", "counters()")}} angezeigt, typischerweise innerhalb einer [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) {{CSSxRef("content")}}-Eigenschaft.

Zähler können nur in Elementen gesetzt, zurückgesetzt oder erhöht werden, die Boxen generieren. Beispielsweise wird jede Zähleroperation auf einem Element ignoriert, wenn es auf `display: none` gesetzt ist.

Die Eigenschaften von Zählern können auf spezifische Elemente mithilfe von Stil-Einschränkungen begrenzt werden, die ausführlicher in der Eigenschaft {{cssxref("contain")}} beschrieben sind.

### Manipulation eines Zählerwertes

Um einen CSS-Zähler zu verwenden, muss er zuerst mit der Eigenschaft {{cssxref("counter-reset")}} auf einen Wert initialisiert werden. Die Eigenschaft kann auch verwendet werden, um den Zählerwert auf eine bestimmte Zahl zu ändern.

Unten initialisieren wir einen Zähler namens `section` auf den Standardwert (0).

```css
counter-reset: section;
```

Sie können auch mehrere Zähler initialisieren und optional für jeden einen Anfangswert festlegen. Unten initialisieren wir die Zähler `section` und `topic` auf den Standardwert und den Zähler `page` auf 3.

```css
counter-reset: section page 3 topic;
```

Sobald ein Zähler initialisiert ist, kann sein Wert durch {{cssxref("counter-increment")}} erhöht oder verringert werden. Beispielsweise würde die folgende Deklaration den `section`-Zähler bei jedem `h3`-Tag um eins erhöhen.

```css
h3::before {
  counter-increment: section; /* Increment the value of section counter by 1 */
}
```

Sie können die Erhöhungs- oder Verminderungsmenge nach dem Zählernamen angeben. Es kann sich um eine positive oder negative Zahl handeln, aber es wird standardmäßig `1` verwendet, wenn keine Ganzzahl angegeben wird.

Abgesehen davon, dass sie erhöht oder verringert werden, können Zähler auch explizit auf einen Wert mit der Eigenschaft {{cssxref("counter-set")}} gesetzt werden.

```css
.done::before {
  counter-set: section 20;
}
```

Der Name des Zählers darf nicht `none`, `inherit` oder `initial` sein; andernfalls wird die Deklaration ignoriert.

### Anzeige eines Zählers

Der Wert eines Zählers kann entweder mit der Funktion {{cssxref("counter", "counter()")}} oder {{cssxref("counters", "counters()")}} in einer {{cssxref("content")}}-Eigenschaft angezeigt werden.

Zum Beispiel verwendet die folgende Deklaration `counter()`, um jedem `h3`-Überschrift den Text `Section <number>:` voranzustellen, wobei `<number>` der Wert des Zählers in Dezimal (der Standardanzeigestil) ist:

```css
body {
  counter-reset: section; /* Set a counter named 'section', and its initial value is 0. */
}

h3::before {
  counter-increment: section; /* Increment the value of section counter by 1 */
  content: "Section " counter(section) ": "; /* Display counter value in default style (decimal) */
}
```

Die Funktion {{cssxref("counter", "counter()")}} wird verwendet, wenn die Nummerierung der Verschachtelungsebenen den Kontext der übergeordneten Ebenen nicht enthält. Beispielsweise beginnt hier jede verschachtelte Ebene wieder bei eins:

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

Die Funktion {{cssxref("counters", "counters()")}} wird verwendet, wenn der Zähler für verschachtelte Ebenen die Zählung der übergeordneten Ebenen beinhalten muss. Beispielsweise könnten Sie dies verwenden, um Abschnitte wie folgt anzuzeigen:

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

Die Funktion {{cssxref("counter", "counter()")}} hat zwei Formen: `counter(<counter-name>)` und `counter(<counter-name>, <counter-style>)`. Der generierte Text ist der Wert des innersten Zählers mit dem gegebenen Namen im Gültigkeitsbereich des Pseudo-Elements.

Die Funktion {{cssxref("counters", "counters()")}} hat ebenfalls zwei Formen: `counters(<counter-name>, <separator>)` und `counters(<counter-name>, <separator>, <counter-style>)`. Der generierte Text ist der Wert aller Zähler mit dem gegebenen Namen im Gültigkeitsbereich des angegebenen Pseudo-Elements, von äußerster zur innersten Ebene, getrennt durch die angegebene Zeichenfolge (`<separator>`).

Der Zähler wird im angegebenen `<counter-style>` für beide Methoden gerendert (`decimal` standardmäßig). Sie können jeden der {{cssxref("list-style-type")}} Werte oder Ihre eigenen [benutzerdefinierten Stile](/de/docs/Web/CSS/CSS_counter_styles) verwenden.

Beispiele, die die Verwendung von `counter()` und `counters()` zeigen, finden Sie unten im [einfachen Beispiel](#einfaches_beispiel) und im [Beispiel für einen verschachtelten Zähler](#beispiel_für_einen_verschachtelten_zähler).

### Umgekehrte Zähler

Ein umgekehrter Zähler ist ein Zähler, der herunterzählen (verringern) soll, anstatt hinaufzuzählen (erhöhen). Umgekehrte Zähler werden mit der Notation `reversed()` erstellt, wenn der Zähler in {{cssxref("counter-reset")}} benannt wird.

Umgekehrte Zähler haben einen Standardanfangswert, der der Anzahl der Elemente entspricht (im Gegensatz zu normalen Zählern, die einen Standardwert von 0 haben). Dies macht es einfach, einen Zähler zu implementieren, der von der Anzahl der Elemente bis zu eins zählt.

Um beispielsweise einen umgekehrten Zähler namens `section` mit einem Standardanfangswert zu erstellen, würden Sie die folgende Syntax verwenden:

```css
counter-reset: reversed(section);
```

Natürlich können Sie auch einen beliebigen Anfangswert angeben, den Sie möchten.

Der Zählerwert wird verringert, indem ein negativer Wert für {{cssxref("counter-increment")}} angegeben wird.

> [!NOTE]
> Sie können auch {{cssxref("counter-increment")}} verwenden, um einen nicht umgekehrten Zähler zu verringern.
> Der Hauptvorteil eines umgekehrten Zählers ist der Standardanfangswert und dass der `list-item`-Zähler umgekehrte Zähler automatisch verringert.

### Zählervererbung und -ausbreitung

Jedes Element oder Pseudo-Element hat eine Reihe von Zählern im Gültigkeitsbereich dieses Elements. Ursprüngliche Zähler im Set werden vom übergeordneten Element und dem vorhergehenden Geschwister übernommen. Die Zählwerte werden vom letzten Nachkomme des vorhergehenden Geschwisters, dem letzten Geschwister oder dem übergeordneten Element empfangen.

Wenn ein Element einen Zähler deklariert, wird der Zähler innerhalb des Zählers mit demselben Namen verschachtelt, der vom übergeordneten Element empfangen wurde. Wenn das übergeordnete Element keinen Zähler mit demselben Namen hat, wird der Zähler dem Zählerset des Elements einfach hinzugefügt. Ein Zähler mit demselben Namen, der vom vorhergehenden Geschwister empfangen wurde, wird aus dem Zählerset entfernt.

Die Funktion {{cssxref("counter", "counter()")}} ruft den innersten Zähler mit dem bereitgestellten Namen ab. Und die Funktion {{cssxref("counters", "counters()")}} ruft den gesamten Zählerbaum mit dem angegebenen Namen ab.

Im folgenden Beispiel demonstrieren wir einen geerbten Zähler namens `primary` und einen Geschwisterzähler namens `secondary`. Alle `<div>`-Elemente zeigen ihre Zähler mit der Funktion `counters()` an. Beachten Sie, dass alle Zähler mit der Eigenschaft `counter-reset` erstellt wurden und keiner der Zähler erhöht wurde.

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

Das section-Element initialisiert einen Zähler namens `primary` mit dem Wert `3`, und alle Kind-`<div>`s übernehmen den geerbten `primary`-Zähler. Das Element 'D' erstellt einen neuen `primary` (Wert `6`) Zähler, der im Zähler verschachtelt wird, der vom übergeordneten Element empfangen wurde, sodass das Element zwei Zähler namens `primary` mit den Werten `3` und `6` hat.

Das Element 'F' erstellt zum ersten Mal den `secondary` (Wert `5`) Zähler und übergibt den Zähler an das nächste Geschwister 'G'. Das Element 'G' übergibt den Zähler an das nächste Element 'H' und so weiter. Als nächstes erstellt das Element 'I' einen neuen Zähler mit demselben Namen `secondary` (Wert `10`), aber es entfernt den `secondary` (Wert `5`) Zähler, der vom vorhergehenden Geschwister 'H' empfangen wurde, und gibt seinen eigenen Zähler an 'J' weiter.

### Unterschied zwischen counter-set und counter-reset

Die Eigenschaft {{cssxref("counter-set")}} aktualisiert einen vorhandenen Zähler, und wenn kein Zähler mit dem Namen existiert, wird ein neuer Zähler instanziiert. Die Eigenschaft {{cssxref("counter-reset")}} erstellt _immer_ einen neuen Zähler.

Im folgenden Beispiel haben wir zwei Unterlisten innerhalb einer übergeordneten Liste. Jedes Listenelement wurde mit einem Zähler namens 'item' nummeriert. Die erste Unterliste verwendet die Eigenschaft {{cssxref("counter-set")}}, und die zweite Unterliste verwendet die Eigenschaft {{cssxref("counter-reset")}}, um den 'item'-Zähler zu ändern.

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

Beachten Sie, wie die ersten Unterlistenelemente Zahlen ab `11` erhalten und die Nummerierung in der übergeordneten Liste fortgesetzt wird. Dies liegt daran, dass die `counter-set`-Eigenschaft denselben 'item'-Zähler aktualisiert, der auf dem `.parent`-Element deklariert wurde. Beachten Sie dann, wie die zweiten Unterlistenelemente eine neue Nummerierung ab '1' erhalten und die nachfolgenden übergeordneten Listenelemente die Nummerierung nicht fortführen. Dies liegt daran, dass die `counter-reset`-Eigenschaft einen neuen Zähler mit demselben Namen erstellt hat, sodass die übergeordneten Listenelemente weiterhin den alten Zähler verwenden.

### Listenelementzähler

Geordnete Listen, wie sie mit {{HTMLElement("ol")}}-Elementen erstellt werden, haben implizit einen Zähler namens `list-item`.

Wie andere Zähler hat dieser einen Standardanfangswert von 0 für nach oben zählende Zähler und "Anzahl der Elemente" für umgekehrte Zähler. Im Gegensatz zu benutzererstellten Zählern wird `list-item` _automatisch_ für jedes Listenelement je nach Zähler um eins erhöht oder verringert, je nachdem, ob der Zähler umgekehrt ist oder nicht.

Der `list-item`-Zähler kann verwendet werden, um das Standardverhalten von geordneten Listen mit CSS zu manipulieren. Beispielsweise können Sie den standardmäßigen Anfangswert ändern oder {{cssxref("counter-increment")}} verwenden, um zu ändern, wie die Listenelemente erhöht oder verringert werden.

## Beispiele

### Einfaches Beispiel

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

### Einfaches Beispiel: umgekehrter Zähler

Dieses Beispiel ist dasselbe wie das oben, verwendet jedoch einen umgekehrten Zähler. Wenn Ihr Browser die `reversed()`-Funktionsnotation unterstützt, sieht das Ergebnis so aus:

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

Ein Zähler muss nicht unbedingt jedes Mal angezeigt werden, wenn er erhöht wird. In diesem Beispiel werden alle Links gezählt, wobei der Zähler nur dann angezeigt wird, wenn ein Link keinen Text hat, als bequemer Ersatz.

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

Ein CSS-Zähler kann insbesondere für die Erstellung von strukturierten Listen nützlich sein, da in Kind-Elementen automatisch eine neue Instanz des Zählers erstellt wird. Mit der Funktion {{cssxref("counters", "counters()")}} kann zwischen verschiedenen Ebenen verschachtelter Zähler Text eingefügt werden.

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
- [CSS counter styles](/de/docs/Web/CSS/CSS_counter_styles) Modul
- [CSS lists and counters](/de/docs/Web/CSS/CSS_lists) Modul
