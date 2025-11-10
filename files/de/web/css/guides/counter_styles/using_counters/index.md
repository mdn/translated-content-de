---
title: Verwenden von CSS-Kontenzählern
short-title: Verwenden von Kontenzählern
slug: Web/CSS/Guides/Counter_styles/Using_counters
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**CSS-Kontenzähler** ermöglichen Ihnen, das Erscheinungsbild von Inhalten basierend auf ihrer Position in einem Dokument anzupassen. Zum Beispiel können Sie Kontenzähler verwenden, um die Überschriften auf einer Webseite automatisch zu nummerieren oder um die Nummerierung in geordneten Listen zu ändern.

Kontenzähler sind im Wesentlichen Variablen, die von CSS verwaltet werden und deren Werte durch CSS-Regeln erhöht oder verringert werden können, die verfolgen, wie oft sie verwendet werden. Folgende Faktoren beeinflussen die Kontenzählerwerte eines Elements:

1. Kontenzähler werden [geerbt](#vererbung_und_weitergabe_von_kontenzählern) vom Elternelement oder von einem vorherigen Geschwisterelement erhalten.
2. Neue Kontenzähler werden mit der Eigenschaft {{cssxref("counter-reset")}} instanziiert.
3. Kontenzähler werden mit der Eigenschaft {{cssxref("counter-increment")}} erhöht.
4. Kontenzähler werden direkt auf einen bestimmten Wert mit der Eigenschaft {{cssxref("counter-set")}} gesetzt.

Sie können eigene benannte Kontenzähler definieren und auch den `list-item`-Kontenzähler manipulieren, der standardmäßig für alle geordneten Listen erstellt wird.

## Verwenden von Kontenzählern

Um einen Kontenzähler zu verwenden, muss er zunächst mit der Eigenschaft {{cssxref("counter-reset")}} auf einen Wert initialisiert werden. Der Wert des Kontenzählers kann mit der Eigenschaft {{cssxref("counter-increment")}} erhöht oder verringert werden und kann mit der Eigenschaft {{cssxref("counter-set")}} direkt auf einen bestimmten Wert gesetzt werden. Der aktuelle Wert eines Kontenzählers wird normalerweise mit der Funktion {{cssxref("counter", "counter()")}} oder {{cssxref("counters", "counters()")}} innerhalb einer [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) {{CSSxRef("content")}}-Eigenschaft angezeigt.

Kontenzähler können nur in Elementen gesetzt, zurückgesetzt oder erhöht werden, die Boxen generieren. Beispielsweise wird jede Zähleroperation an einem Element ignoriert, wenn dieses Element auf `display: none` gesetzt ist.

Die Eigenschaften von Kontenzählern können auf spezifische Elemente beschränkt werden, indem Stil-Kapselung verwendet wird, die im Detail in der {{cssxref("contain")}}-Eigenschaft beschrieben ist.

### Manipulation des Wertes eines Kontenzählers

Um einen CSS-Kontenzähler zu verwenden, muss er zunächst mit der {{cssxref("counter-reset")}}-Eigenschaft auf einen Wert initialisiert werden. Diese Eigenschaft kann auch verwendet werden, um den Zählerwert auf jede beliebige Zahl zu ändern.

Im folgenden Beispiel initialisieren wir einen Kontenzähler namens `section` auf den Standardwert (0).

```css
counter-reset: section;
```

Sie können auch mehrere Kontenzähler initialisieren und dabei optional einen Anfangswert für jeden angeben. Unten initialisieren wir die `section`- und `topic`-Kontenzähler auf den Standardwert und den `page`-Kontenzähler auf 3.

```css
counter-reset: section page 3 topic;
```

Sobald ein Kontenzähler initialisiert ist, kann sein Wert mit {{cssxref("counter-increment")}} erhöht oder verringert werden. Zum Beispiel würde die folgende Deklaration den `section`-Kontenzähler bei jedem `h3`-Tag um eins erhöhen.

```css
h3::before {
  counter-increment: section; /* Increment the value of section counter by 1 */
}
```

Sie können den Betrag, um den erhöht oder verringert werden soll, nach dem Namen des Kontenzählers angeben. Es kann eine positive oder negative Zahl sein, jedoch wird standardmäßig `1` verwendet, wenn keine ganze Zahl angegeben wird.

Abgesehen von der Erhöhung oder Verringerung können Kontenzähler auch explizit mit der Eigenschaft {{cssxref("counter-set")}} auf einen Wert gesetzt werden.

```css
.done::before {
  counter-set: section 20;
}
```

Der Name des Kontenzählers darf nicht `none`, `inherit` oder `initial` sein; andernfalls wird die Deklaration ignoriert.

### Anzeige eines Kontenzählers

Der Wert eines Kontenzählers kann entweder mit der Funktion {{cssxref("counter", "counter()")}} oder {{cssxref("counters", "counters()")}} in einer {{cssxref("content")}}-Eigenschaft angezeigt werden.

Zum Beispiel verwendet die folgende Deklaration `counter()`, um jedem `h3`-Überschrift den Text `Section <number>:` voranzustellen, wobei `<number>` der Wert des Zählers in dezimaler Darstellung ist (der Standardanzeigestil):

```css
body {
  counter-reset: section; /* Set a counter named 'section', and its initial value is 0. */
}

h3::before {
  counter-increment: section; /* Increment the value of section counter by 1 */
  content: "Section " counter(section) ": "; /* Display counter value in default style (decimal) */
}
```

Die Funktion {{cssxref("counter", "counter()")}} wird verwendet, wenn die Nummerierung der Verschachtelungsebenen den Kontext der Elternebenen nicht einschließen soll. Zum Beispiel beginnt hier jede verschachtelte Ebene von eins an:

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

Die Funktion {{cssxref("counters", "counters()")}} wird verwendet, wenn der Zähler für verschachtelte Ebenen den Zähler von Elternebenen einschließen muss. Zum Beispiel könnten Sie dies verwenden, um Abschnitte wie folgt zu gestalten:

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

Die Funktion {{cssxref("counter", "counter()")}} hat zwei Formen: `counter(<counter-name>)` und `counter(<counter-name>, <counter-style>)`. Der generierte Text ist der Wert des innersten Kontenzählers mit dem angegebenen Namen im Geltungsbereich des Pseudo-Elements.

Die Funktion {{cssxref("counters", "counters()")}} hat ebenfalls zwei Formen: `counters(<counter-name>, <separator>)` und `counters(<counter-name>, <separator>, <counter-style>)`. Der generierte Text ist der Wert aller Kontenzähler mit dem angegebenen Namen im Geltungsbereich des angegebenen Pseudo-Elements, von außen nach innen, getrennt durch den angegebenen String (`<separator>`).

Der Zähler wird in dem angegebenen `<counter-style>` für beide Methoden gerendert (`decimal` ist der Standard). Sie können jeden der Werte von {{cssxref("list-style-type")}} oder Ihre eigenen [benutzerdefinierten Stile](/de/docs/Web/CSS/Guides/Counter_styles) verwenden.

Beispiele zur Verwendung von `counter()` und `counters()` finden Sie unten im [grundlegenden Beispiel](#grundlegendes_beispiel) und [Beispiel eines verschachtelten Kontenzählers](#beispiel_eines_verschachtelten_kontenzählers).

### Umgekehrte Kontenzähler

Ein umgekehrter Kontenzähler ist einer, der herunterzählen (dekrementieren) soll, anstatt hochzuzählen (inkrementieren). Umgekehrte Kontenzähler werden mit der `reversed()`-Funktion-Notation erstellt, wenn der Kontenzähler im {{cssxref("counter-reset")}} benannt wird.

Umgekehrte Kontenzähler haben einen Standardanfangswert, der der Anzahl der Elemente entspricht (anders als normale Kontenzähler, die einen Standardwert von 0 haben). Dies erleichtert das Implementieren eines Zählers, der von der Anzahl der Elemente bis auf eins herunterzählt.

Zum Beispiel würden Sie einen umgekehrten Kontenzähler namens `section` mit einem Standardanfangswert mit der folgenden Syntax erstellen:

```css
counter-reset: reversed(section);
```

Sie können natürlich auch jeden Anfangswert angeben, den Sie möchten.

Der Zählerwert wird verringert, indem ein negativer Wert für {{cssxref("counter-increment")}} angegeben wird.

> [!NOTE]
> Sie können auch {{cssxref("counter-increment")}} verwenden, um einen nicht umgekehrten Kontenzähler zu verringern.
> Der Hauptvorteil der Verwendung eines umgekehrten Kontenzählers ist der Standardanfangswert, und dass der `list-item`-Kontenzähler automatisch umgekehrte Kontenzähler dekrementiert.

### Vererbung und Weitergabe von Kontenzählern

Jedes Element oder Pseudo-Element hat eine Reihe von Kontenzählern im Geltungsbereich dieses Elements. Initiale Kontenzähler in der Menge werden vom Elternelement und dem vorherigen Geschwisterelement erhalten. Die Werte der Kontenzähler werden vom letzten Nachkommen des vorherigen Geschwisterelements, dem letzten Geschwisterelement oder dem Elternteil erhalten.

Wenn ein Element einen Kontenzähler deklariert, wird der Kontenzähler in den Kontenzähler desselben Namens geschachtelt, der vom Elternteil erhalten wurde. Falls das Elternteil keinen Kontenzähler mit demselben Namen hat, wird der Kontenzähler wie er ist zur Kontenzählermenge des Elements hinzugefügt. Ein vom vorherigen Geschwisterelement erhaltener Kontenzähler mit demselben Namen wird aus der Kontenzählermenge entfernt.

Die {{cssxref("counter", "counter()")}}-Funktion ruft den innersten Kontenzähler mit dem bereitgestellten Namen ab. Und die {{cssxref("counters", "counters()")}}-Funktion ruft den gesamten Kontenzähler-Baum mit dem gegebenen Namen ab.

Im folgenden Beispiel demonstrieren wir einen geerbten Kontenzähler namens `primary` und einen Geschwisterkontenzähler namens `secondary`. Alle `<div>`-Elemente zeigen ihre Kontenzähler mit der `counters()`-Funktion an. Beachten Sie, dass alle Kontenzähler mit der `counter-reset`-Eigenschaft erstellt wurden und keiner der Kontenzähler erhöht wurde.

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

Das Abschnittelement initialisiert einen Kontenzähler namens `primary` mit dem Wert `3`, und alle untergeordneten `<div>`-Elemente erhalten den geerbten `primary`-Kontenzähler. Das Element 'D' erstellt einen neuen `primary` (Wert `6`) Kontenzähler, der im von den Elternelementen erhaltenen Kontenzähler geschachtelt wird, sodass das Element zwei Kontenzähler namens `primary` hat mit den Werten `3` und `6`.

Das Element 'F' erstellt den `secondary` (Wert `5`) Kontenzähler zum ersten Mal, und er übergibt den Kontenzähler an das nächste Geschwisterelement 'G'. Das Element 'G' übergibt den Kontenzähler an das nächste Element 'H' und so weiter. Das Element 'I' erstellt einen neuen Kontenzähler mit demselben Namen `secondary` (Wert `10`), entfernt jedoch den `secondary` (Wert `5`) Kontenzähler, der vom vorhergehenden Geschwisterelement 'H' erhalten wurde, und übergibt seinen eigenen Kontenzähler an 'J'.

### Unterschied zwischen counter-set und counter-reset

Die {{cssxref("counter-set")}}-Eigenschaft aktualisiert einen bestehenden Kontenzähler und wenn kein Kontenzähler mit dem Namen existiert, wird ein neuer Kontenzähler instanziiert. Die {{cssxref("counter-reset")}}-Eigenschaft erstellt _immer_ einen neuen Kontenzähler.

Im folgenden Beispiel haben wir zwei Unterlisten in einer übergeordneten Liste. Jedes Listenelement wurde mit einem Kontenzähler namens 'item' nummeriert. Die erste Unterliste verwendet die {{cssxref("counter-set")}}-Eigenschaft und die zweite Unterliste verwendet die {{cssxref("counter-reset")}}-Eigenschaft, um den 'item'-Kontenzähler zu ändern.

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

Beachten Sie, wie die Elemente der ersten Unterliste mit `11` zu nummerieren beginnen, und die Nummerierung wird in der übergeordneten Liste fortgesetzt. Dies liegt daran, dass die `counter-set`-Eigenschaft denselben 'item'-Kontenzähler aktualisiert, der auf dem `.parent`-Element deklariert ist. Beachten Sie dann, wie die Elemente der zweiten Unterliste mit einer neuen Nummerierung beginnen und die übergeordnete Liste nach dieser Nummerierung nicht fortgesetzt wird. Dies liegt daran, dass die `counter-reset`-Eigenschaft einen neuen Kontenzähler mit demselben Namen erstellt, sodass die übergeordnete Liste weiterhin den alten Kontenzähler verwendet.

### Listenelement-Kontenzähler

Geordnete Listen, erstellt mit {{HTMLElement("ol")}}-Elementen, haben implizit einen Kontenzähler namens `list-item`.

Wie andere Kontenzähler hat dieser einen Standardanfangswert von 0 für aufwärtszählende Kontenzähler und "Anzahl der Elemente" für umgekehrte Kontenzähler. Im Gegensatz zu benutzererstellten Kontenzählern wird `list-item` _automatisch_ um eins erhöht oder verringert für jedes Listenelement, je nachdem, ob der Kontenzähler umgekehrt ist oder nicht.

Der `list-item`-Kontenzähler kann verwendet werden, um das Standardverhalten von geordneten Listen mit CSS zu manipulieren. Zum Beispiel können Sie den Standardanfangswert ändern oder {{cssxref("counter-increment")}} verwenden, um zu ändern, wie sich die Listenelemente erhöhen oder verringern.

## Beispiele

### Grundlegendes Beispiel

In diesem Beispiel wird jeder Überschrift der Text "Section \[der Wert des Kontenzählers]:" vorangestellt.

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

### Grundlegendes Beispiel: Umgekehrter Kontenzähler

Dieses Beispiel ist dasselbe wie das obige, verwendet jedoch einen umgekehrten Kontenzähler. Wenn Ihr Browser die `reversed()`-Funktionsnotation unterstützt, sieht das Ergebnis so aus:

![umgekehrter Kontenzähler](reversed_headings_basic.png)

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

Ein Kontenzähler muss nicht unbedingt jedes Mal angezeigt werden, wenn er erhöht wird. In diesem Beispiel werden alle Links gezählt, wobei der Zähler nur angezeigt wird, wenn ein Link keinen Text hat, als praktischer Ersatz.

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

### Beispiel eines verschachtelten Kontenzählers

Ein CSS-Kontenzähler kann besonders nützlich für das Erstellen von Gliederungslisten sein, da in den Kindelementen automatisch eine neue Instanz des Kontenzählers erstellt wird. Mithilfe der Funktion {{cssxref("counters", "counters()")}} kann zwischen verschiedenen Ebenen von verschachtelten Kontenzählern Trennungstext eingefügt werden.

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
- [CSS-Kontenzählstile](/de/docs/Web/CSS/Guides/Counter_styles) Modul
- [CSS-Listen und -Kontenzähler](/de/docs/Web/CSS/Guides/Lists) Modul
