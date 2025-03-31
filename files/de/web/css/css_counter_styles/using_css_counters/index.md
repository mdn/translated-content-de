---
title: Verwendung von CSS-Zählern
slug: Web/CSS/CSS_counter_styles/Using_CSS_counters
l10n:
  sourceCommit: 44f398527f2b0195a7c3b35db0a53c80aebe8e48
---

{{CSSRef}}

**CSS-Zähler** ermöglichen es Ihnen, das Erscheinungsbild von Inhalten basierend auf ihrer Position in einem Dokument anzupassen. Zum Beispiel können Sie Zähler verwenden, um Überschriften auf einer Webseite automatisch zu nummerieren oder die Nummerierung von geordneten Listen zu ändern.

Zähler sind im Wesentlichen Variablen, die von CSS verwaltet werden und deren Werte durch CSS-Regeln, die nachverfolgen, wie oft sie verwendet werden, erhöht oder verringert werden können. Folgende Faktoren beeinflussen die Zählerwerte in einem Element:

1. Zähler werden vom übergeordneten Element geerbt oder von einem vorherigen Geschwisterelement erhalten.
2. Neue Zähler werden mit der Eigenschaft {{cssxref("counter-reset")}} instanziiert.
3. Zähler werden mit der Eigenschaft {{cssxref("counter-increment")}} erhöht.
4. Zähler werden direkt auf einen Wert gesetzt, indem die Eigenschaft {{cssxref("counter-set")}} verwendet wird.

Sie können Ihre eigenen benannten Zähler definieren und den `list-item`-Zähler manipulieren, der standardmäßig für alle geordneten Listen erstellt wird.

## Verwendung von Zählern

Um einen Zähler zu verwenden, muss er zuerst mit der Eigenschaft {{cssxref("counter-reset")}} auf einen Wert initialisiert werden. Der Wert des Zählers kann mit der Eigenschaft {{cssxref("counter-increment")}} erhöht oder verringert werden und kann direkt auf einen bestimmten Wert mit der Eigenschaft {{cssxref("counter-set")}} gesetzt werden. Der aktuelle Wert eines Zählers wird mit der Funktion {{cssxref("counter", "counter()")}} oder {{cssxref("counters", "counters()")}} angezeigt, typischerweise innerhalb einer [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) {{CSSxRef("content")}}-Eigenschaft.

Zähler können nur in Elementen gesetzt, zurückgesetzt oder erhöht werden, die Boxen generieren. Zum Beispiel wird jede Zähleroperation in einem Element ignoriert, wenn dieses auf `display: none` gesetzt ist.

Die Eigenschaften von Zählern können auf spezifische Elemente mittels Stilenthaltung beschränkt werden, was in der Eigenschaft {{cssxref("contain")}} näher beschrieben wird.

### Manipulation eines Zählerwerts

Um einen CSS-Zähler zu verwenden, muss er zuerst mit der Eigenschaft {{cssxref("counter-reset")}} auf einen Wert initialisiert werden. Diese Eigenschaft kann auch verwendet werden, um den Zählerwert auf eine beliebige Zahl zu ändern.

Unten initialisieren wir einen Zähler namens `section` auf den Standardwert (0).

```css
counter-reset: section;
```

Sie können auch mehrere Zähler initialisieren und optional einen Anfangswert für jeden angeben. Unten initialisieren wir die Zähler `section` und `topic` auf den Standardwert und den Zähler `page` auf 3.

```css
counter-reset: section page 3 topic;
```

Nachdem ein Zähler initialisiert wurde, kann sein Wert mit {{cssxref("counter-increment")}} erhöht oder verringert werden. Zum Beispiel würde die folgende Deklaration den Zähler `section` bei jedem `h3`-Tag um eins erhöhen.

```css
h3::before {
  counter-increment: section; /* Increment the value of section counter by 1 */
}
```

Sie können die Erhöhungs- oder Verminderungsmenge nach dem Namen des Zählers angeben. Diese kann eine positive oder negative Zahl sein, Standardwert ist aber `1`, wenn keine Zahl angegeben wird.

Abgesehen davon, dass sie erhöht oder verringert werden, können Zähler auch explizit mit der Eigenschaft {{cssxref("counter-set")}} auf einen Wert gesetzt werden.

```css
.done::before {
  counter-set: section 20;
}
```

Der Name des Zählers darf nicht `none`, `inherit` oder `initial` sein; andernfalls wird die Deklaration ignoriert.

### Anzeigen eines Zählers

Der Wert eines Zählers kann entweder mit der Funktion {{cssxref("counter", "counter()")}} oder {{cssxref("counters", "counters()")}} in einer {{cssxref("content")}}-Eigenschaft angezeigt werden.

Zum Beispiel verwendet die folgende Deklaration `counter()`, um jedem `h3`-Überschrift den Text `Section <number>:` voranzustellen, wobei `<number>` der Wert des Zählers in Dezimal (Standardeinstellung) ist:

```css
h3::before {
  counter-increment: section; /* Increment the value of section counter by 1 */
  content: "Section " counter(section) ": "; /* Display counter value in default style (decimal) */
}
```

Die Funktion {{cssxref("counter", "counter()")}} wird verwendet, wenn die Nummerierung von Verschachtelungsebenen den Kontext der übergeordneten Ebenen nicht einbezieht. Zum Beispiel wird hier jede verschachtelte Ebene von eins neu gestartet:

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

Die Funktion {{cssxref("counters", "counters()")}} wird verwendet, wenn die Zählung für verschachtelte Ebenen die Zählung von übergeordneten Ebenen einschließen muss. Zum Beispiel könnten Sie dies verwenden, um Abschnitte wie folgt zu layouten:

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

Die Funktion {{cssxref("counter", "counter()")}} hat zwei Formen: `counter(<counter-name>)` und `counter(<counter-name>, <counter-style>)`. Der generierte Text ist der Wert des innersten Zählers des angegebenen Namens im Anwendungsbereich im Pseudo-Element.

Die Funktion {{cssxref("counters", "counters()")}} hat ebenfalls zwei Formen: `counters(<counter-name>, <separator>)` und `counters(<counter-name>, <separator>, <counter-style>)`. Der generierte Text ist der Wert aller Zähler mit dem angegebenen Namen im Anwendungsbereich im angegebenen Pseudo-Element, vom äußersten zum innersten, getrennt durch den angegebenen String (`<separator>`).

Der Zähler wird im angegebenen `<counter-style>` für beide Methoden dargestellt (`decimal` standardmäßig). Sie können jeden der {{cssxref("list-style-type")}}-Werte oder Ihre eigenen [benutzerdefinierten Stile](/de/docs/Web/CSS/CSS_counter_styles) verwenden.

Beispiele, die die Verwendung von `counter()` und `counters()` zeigen, sind unten im [grundlegenden Beispiel](#grundlegendes_beispiel) und [Beispiel eines verschachtelten Zählers](#beispiel_eines_verschachtelten_zählers) entsprechend gegeben.

### Umgekehrte Zähler

Ein umgekehrter Zähler ist einer, der herunterzählt (verringert) anstatt hochzuzählen (zu erhöhen). Umgekehrte Zähler werden erstellt, indem die `reversed()`-Funktion verwendet wird, um den Zähler in {{cssxref("counter-reset")}} zu benennen.

Umgekehrte Zähler haben einen Standardanfangswert, der der Anzahl der Elemente entspricht (im Gegensatz zu normalen Zählern, die einen Standardwert von 0 haben). Dies erleichtert die Implementierung eines Zählers, der von der Anzahl der Elemente herunter bis zu eins zählt.

Um zum Beispiel einen umgekehrten Zähler namens `section` mit einem Standardanfangswert zu erstellen, verwenden Sie die folgende Syntax:

```css
counter-reset: reversed(section);
```

Natürlich können Sie jeden gewünschten Anfangswert angeben.

Der Zählerwert wird verringert, indem Sie einen negativen Wert für {{cssxref("counter-increment")}} angeben.

> [!NOTE]
> Sie können auch {{cssxref("counter-increment")}} verwenden, um einen nicht umgekehrten Zähler zu verringern. Der Hauptvorteil der Verwendung eines umgekehrten Zählers ist der Standardanfangswert und dass der `list-item`-Zähler automatisch umgekehrte Zähler verringert.

### Vererbung und Propagation von Zählern

Jedes Element oder Pseudo-Element hat eine Menge von Zählern im Anwendungsbereich dieses Elements. Initiale Zähler im Satz werden vom übergeordneten Element und dem vorherigen Geschwisterelement übernommen. Die Zählerwerte werden vom letzten Nachkommen des vorherigen Geschwisterelements, dem letzten Geschwisterelement oder dem übergeordneten Element übernommen.

Wenn ein Element einen Zähler deklariert, wird der Zähler innerhalb des vom übergeordneten Element übernommenen Zählers mit demselben Namen verschachtelt. Wenn das übergeordnete Element keinen Zähler mit demselben Namen hat, wird der Zähler dem Zählersatz des Elements unverändert hinzugefügt. Ein Zähler mit demselben Namen, das vom vorherigen Geschwisterelement empfangen wurde, wird aus dem Zählersatz entfernt.

Die Funktion {{cssxref("counter", "counter()")}} ruft den innersten Zähler mit dem angegebenen Namen ab. Und die Funktion {{cssxref("counters", "counters()")}} ruft den gesamten Zählerbaum mit dem angegebenen Namen ab.

Im folgenden Beispiel zeigen wir einen geerbten Zähler namens `primary` und einen Geschwisterzähler namens `secondary`. Alle `<div>`-Elemente zeigen ihre Zähler mit der Funktion `counters()` an. Beachten Sie, dass alle Zähler mit der Eigenschaft `counter-reset` erstellt wurden und keiner der Zähler erhöht wurde.

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

Das Abschnittselement initialisiert einen Zähler namens `primary` mit dem Wert `3`, und alle Kind-`<div>`s erhalten den geerbten `primary`-Zähler. Das Element 'D' erstellt einen neuen `primary` (Wert `6`) Zähler, der im empfangenen Zähler vom übergeordneten Element verschachtelt wird, sodass das Element zwei Zähler namens `primary` mit den Werten `3` und `6` hat.

Das Element 'F' erstellt den `secondary` (Wert `5`) Zähler zum ersten Mal und gibt den Zähler an das nächste Geschwisterelement 'G' weiter. Das Element 'G' gibt den Zähler an das nächste Element 'H' weiter und so weiter. Danach erstellt das Element 'I' einen neuen Zähler mit demselben Namen `secondary` (Wert `10`), aber es verwirft den `secondary` (Wert `5`) Zähler, den es vom vorherigen Geschwisterelement 'H' erhalten hat, und gibt seinen eigenen Zähler an 'J' weiter.

### Unterschied zwischen counter-set und counter-reset

Die Eigenschaft {{cssxref("counter-set")}} aktualisiert einen vorhandenen Zähler und wenn kein Zähler mit dem Namen existiert, wird ein neuer Zähler erstellt. Die Eigenschaft {{cssxref("counter-reset")}} erstellt _immer_ einen neuen Zähler.

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

Beachten Sie, wie die ersten Unterlistenelemente beginnen, Zahlen von `11` zu erhalten, und die Nummerierung in der übergeordneten Liste fortgesetzt wird. Dies liegt daran, dass die `counter-set`-Eigenschaft denselben 'item'-Zähler aktualisiert, der auf dem `.parent`-Element deklariert ist. Beachten Sie dann, wie die zweiten Unterlistenelemente eine neue Nummerierung beginnend mit '1' erhalten und die darauf folgenden Listenelemente die Nummerierung nicht weiterführen. Dies liegt daran, dass die `counter-reset`-Eigenschaft einen neuen Zähler mit demselben Namen erstellt, sodass die Elemente der übergeordneten Liste den alten Zähler weiter verwenden.

### Listenelement-Zähler

Geordnete Listen, die mit {{HTMLElement("ol")}}-Elementen erstellt werden, haben implizit einen Zähler namens `list-item`.

Wie andere Zähler hat dieser einen Standardanfangswert von 0 für aufwärts zählende Zähler und "Anzahl der Elemente" für umgekehrte Zähler. Im Gegensatz zu benutzerdefiniert erstellten Zählern wird `list-item` _automatisch_ um eins erhöht oder verringert für jedes Listenelement, je nachdem, ob der Zähler umgekehrt ist oder nicht.

Der `list-item`-Zähler kann verwendet werden, um das Standardverhalten geordneter Listen mithilfe von CSS zu manipulieren. Zum Beispiel können Sie den Standardanfangswert ändern oder {{cssxref("counter-increment")}} verwenden, um die Art und Weise zu ändern, in der die Listenelemente erhöht oder verringert werden.

## Beispiele

### Grundlegendes Beispiel

Dieses Beispiel fügt jedem Überschriftselement den Text "Section \[der Wert des Zählers]:" hinzu.

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

Dieses Beispiel ist dasselbe wie das oben, verwendet aber einen umgekehrten Zähler. Wenn Ihr Browser die `reversed()`-Funktion unterstützt, sieht das Ergebnis so aus:

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

Ein Zähler muss nicht zwingend jedes Mal angezeigt werden, wenn er erhöht wird. Dieses Beispiel zählt alle Links, wobei der Zähler nur angezeigt wird, wenn ein Link keinen Text hat, als bequemer Ersatz.

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

Ein CSS-Zähler kann besonders nützlich für die Erstellung von gegliederten Listen sein, da eine neue Instanz des Zählers automatisch in Kindelementen erstellt wird. Mit der Funktion {{cssxref("counters", "counters()")}} kann trennender Text zwischen den verschiedenen Ebenen von verschachtelten Zählern eingefügt werden.

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
- [CSS Counter Styles](/de/docs/Web/CSS/CSS_counter_styles)-Modul
- [CSS Lists and Counters](/de/docs/Web/CSS/CSS_lists)-Modul
