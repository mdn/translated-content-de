---
title: Verwendung von CSS-Zählern
slug: Web/CSS/CSS_counter_styles/Using_CSS_counters
l10n:
  sourceCommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{CSSRef}}

**CSS-Zähler** ermöglichen es Ihnen, das Erscheinungsbild von Inhalten basierend auf ihrer Position in einem Dokument anzupassen. Zum Beispiel können Sie Zähler verwenden, um automatisch die Überschriften auf einer Webseite zu nummerieren oder um die Nummerierung von nummerierten Listen zu ändern.

Zähler sind im Wesentlichen Variablen, die von CSS verwaltet werden, deren Werte durch CSS-Regeln inkrementiert oder dekrementiert werden können, die verfolgen, wie oft sie verwendet werden. Folgende Dinge beeinflussen die Zählerwerte auf einem Element:

1. Zähler werden vom [übergeordneten Element](#zählervererbung_und_-weiterleitung) vererbt oder von einem vorherigen Geschwisterelement übernommen.
2. Neue Zähler werden mit der Eigenschaft {{cssxref("counter-reset")}} instanziiert.
3. Zähler werden mit der Eigenschaft {{cssxref("counter-increment")}} inkrementiert.
4. Zähler werden mit der Eigenschaft {{cssxref("counter-set")}} direkt auf einen Wert gesetzt.

Sie können Ihre eigenen benannten Zähler definieren, und Sie können auch den `list-item` Zähler manipulieren, der standardmäßig für alle nummerierten Listen erstellt wird.

## Verwendung von Zählern

Um einen Zähler zu verwenden, muss er zuerst mit der Eigenschaft {{cssxref("counter-reset")}} auf einen Wert initialisiert werden. Der Zählerwert kann mithilfe der Eigenschaft {{cssxref("counter-increment")}} erhöht oder verringert werden und kann direkt auf einen bestimmten Wert mit der Eigenschaft {{cssxref("counter-set")}} gesetzt werden. Der aktuelle Wert eines Zählers wird mit der Funktion {{cssxref("counter", "counter()")}} oder {{cssxref("counters", "counters()")}} angezeigt, typischerweise innerhalb einer [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) {{CSSxRef("content")}} Eigenschaft.

Zähler können nur in Elementen gesetzt, zurückgesetzt oder inkrementiert werden, die Boxen erzeugen. Zum Beispiel, wenn ein Element auf `display: none` gesetzt ist, dann wird jede Zähleroperation auf diesem Element ignoriert.

Die Eigenschaften von Zählern können auf spezifische Elemente mit Stil-Containment eingeschränkt werden, das im Detail in der Eigenschaft {{cssxref("contain")}} beschrieben wird.

### Manipulation eines Zählerwertes

Um einen CSS-Zähler zu verwenden, muss er zuerst mit der Eigenschaft {{cssxref("counter-reset")}} auf einen Wert initialisiert werden. Die Eigenschaft kann auch verwendet werden, um den Zählerwert auf eine bestimmte Zahl zu ändern.

Unten werden wir einen Zähler namens `section` auf den Standardwert (0) initialisieren.

```css
counter-reset: section;
```

Sie können auch mehrere Zähler initialisieren und optional einen Anfangswert für jeden angeben. Unten initialisieren wir die Zähler `section` und `topic` auf den Standardwert, und den Zähler `page` auf 3.

```css
counter-reset: section page 3 topic;
```

Einmal initialisiert, kann der Wert eines Zählers mit {{cssxref("counter-increment")}} erhöht oder verringert werden. Zum Beispiel würde die folgende Deklaration den `section` Zähler bei jedem `h3`-Tag um eins erhöhen.

```css
h3::before {
  counter-increment: section; /* Increment the value of section counter by 1 */
}
```

Sie können die Erhöhungs- oder Verminderungsmenge nach dem Namen des Zählers angeben. Es kann eine positive oder negative Zahl sein, aber defaults auf `1`, wenn keine Ganzzahl angegeben ist.

Zusätzlich zur Inkrementierung oder Dekrementierung, können Zähler auch explizit auf einen Wert mit der Eigenschaft {{cssxref("counter-set")}} gesetzt werden.

```css
.done::before {
  counter-set: section 20;
}
```

Der Name des Zählers darf nicht `none`, `inherit` oder `initial` sein; ansonsten wird die Deklaration ignoriert.

### Anzeige eines Zählers

Der Wert eines Zählers kann entweder mit der Funktion {{cssxref("counter", "counter()")}} oder {{cssxref("counters", "counters()")}} in einer {{cssxref("content")}} Eigenschaft angezeigt werden.

Zum Beispiel verwendet die folgende Deklaration `counter()`, um jedem `h3`-Titel den Text `Section <number>:` voranzustellen, wobei `<number>` der Wert des Zählers in Dezimal (dem Standardanzeigestil) ist:

```css
h3::before {
  counter-increment: section; /* Increment the value of section counter by 1 */
  content: "Section " counter(section) ": "; /* Display counter value in default style (decimal) */
}
```

Die Funktion {{cssxref("counter", "counter()")}} wird verwendet, wenn die Nummerierung der Verschachtelungsebenen nicht den Kontext der Elternebenen umfasst. Beispielsweise beginnt hier jede verschachtelte Ebene wieder bei eins:

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

Die Funktion {{cssxref("counters", "counters()")}} wird verwendet, wenn die Zählung für verschachtelte Ebenen die Zählung der Elternebenen umfassen muss. Beispielsweise könnten Sie dies verwenden, um Abschnitte wie folgt zu gestalten:

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

Die Funktion {{cssxref("counter", "counter()")}} hat zwei Formen: `counter(<counter-name>)` und `counter(<counter-name>, <counter-style>)`. Der erzeugte Text ist der Wert des innersten Zählers des angegebenen Namens im Geltungsbereich des Pseudo-Elements.

Die Funktion {{cssxref("counters", "counters()")}} hat ebenfalls zwei Formen: `counters(<counter-name>, <separator>)` und `counters(<counter-name>, <separator>, <counter-style>)`. Der erzeugte Text ist der Wert aller Zähler mit dem angegebenen Namen im Geltungsbereich des angegebenen Pseudo-Elements, von äußerster bis innerster, getrennt durch die angegebene Zeichenfolge (`<separator>`).

Der Zähler wird im angegebenen `<counter-style>` für beide Methoden gerendert (`decimal` standardmäßig). Sie können jeden der {{cssxref("list-style-type")}} Werte oder Ihre eigenen [benutzerdefinierten Stile](/de/docs/Web/CSS/CSS_counter_styles) verwenden.

Beispiele, die die Verwendung von `counter()` und `counters()` zeigen, sind unten im [Grundbeispiel](#grundbeispiel) und [Beispiel eines verschachtelten Zählers](#beispiel_eines_verschachtelten_zählers) gegeben.

### Umgekehrte Zähler

Ein umgekehrter Zähler ist einer, der beabsichtigt ist, herunterzuzählen (dekrementieren) anstatt hochzuzählen (inkrementieren). Umgekehrte Zähler werden mit der Notation `reversed()` erstellt, wenn der Zähler in {{cssxref("counter-reset")}} benannt wird.

Umgekehrte Zähler haben einen Standardanfangswert, der der Anzahl der Elemente entspricht (im Gegensatz zu normalen Zählern, die einen Standardwert von 0 haben). Dies macht es einfach, einen Zähler zu implementieren, der von der Anzahl der Elemente bis auf eins zählt.

Um beispielsweise einen umgekehrten Zähler namens `section` mit einem Standardanfangswert zu erstellen, würden Sie die folgende Syntax verwenden:

```css
counter-reset: reversed(section);
```

Natürlich können Sie auch jeden beliebigen Anfangswert angeben.

Der Zählerwert wird durch Angabe eines negativen Werts für {{cssxref("counter-increment")}} verringert.

> [!NOTE]
> Sie können {{cssxref("counter-increment")}} auch verwenden, um einen nicht umgekehrten Zähler zu dekrementieren.
> Der Hauptvorteil der Verwendung eines umgekehrten Zählers ist der Standardanfangswert und dass der `list-item` Zähler automatisch umgekehrte Zähler dekrementiert.

### Zählervererbung und -weiterleitung

Jedes Element oder Pseudo-Element hat einen Satz von Zählern im Geltungsbereich dieses Elements. Anfangszähler im Satz werden vom übergeordneten Element und dem vorherigen Geschwisterelement übernommen. Die Zählerwerte werden vom letzten Nachfahren des vorherigen Geschwisterelements, dem letzten Geschwisterelement oder dem Elternteil übernommen.

Wenn ein Element einen Zähler deklariert, wird der Zähler innerhalb des vom Elternteil übernommenen Zählers mit demselben Namen geschachtelt. Wenn das Elternteil keinen Zähler mit demselben Namen hat, wird der Zähler einfach zum Zählersatz des Elements hinzugefügt. Ein Zähler mit demselben Namen, der vom vorherigen Geschwisterelement übernommen wurde, wird aus dem Zählersatz entfernt.

Die Funktion {{cssxref("counter", "counter()")}} ruft den innersten Zähler des angegebenen Namens ab. Und die Funktion {{cssxref("counters", "counters()")}} ruft den gesamten Zählerbaum mit dem angegebenen Namen ab.

Im folgenden Beispiel demonstrieren wir einen geerbten Zähler namens `primary` und einen Geschwisterzähler namens `secondary`. Alle `<div>`-Elemente zeigen ihre Zähler mit der Funktion `counters()` an. Beachten Sie, dass alle Zähler mit der Eigenschaft `counter-reset` erstellt wurden und keiner der Zähler inkrementiert wurde.

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

Das Abschnittselement initialisiert einen Zähler namens `primary` mit dem Wert `3`, und alle untergeordneten `<div>` erhalten den geerbten `primary` Zähler. Das Element 'D' erstellt einen neuen `primary` (Wert `6`) Zähler, der im Zähler verschachtelt wird, der vom Elternteil erhalten wurde, sodass das Element zwei Zähler mit dem Namen `primary` und den Werten `3` und `6` hat.

Das Element 'F' erstellt den `secondary` (Wert `5`) Zähler zum ersten Mal und gibt den Zähler an das nächste Geschwisterelement 'G' weiter. Das Element 'G' gibt den Zähler an das nächste Element 'H' weiter und so weiter. Als nächstes erstellt das Element 'I' einen neuen Zähler mit demselben Namen `secondary` (Wert `10`), aber es entfernt den `secondary` (Wert `5`) Zähler, der vom vorherigen Geschwisterelement 'H' erhalten wurde, und gibt seinen eigenen Zähler an 'J' weiter.

### Unterschied zwischen counter-set und counter-reset

Die Eigenschaft {{cssxref("counter-set")}} aktualisiert einen vorhandenen Zähler und, wenn kein Zähler mit dem Namen existiert, wird ein neuer Zähler instanziiert. Die Eigenschaft {{cssxref("counter-reset")}} erstellt _immer_ einen neuen Zähler.

Im folgenden Beispiel haben wir zwei Unterlisten innerhalb einer Elternliste. Jedes Listenelement wurde mit einem Zähler namens 'item' nummeriert. Die erste Unterliste verwendet die Eigenschaft {{cssxref("counter-set")}} und die zweite Unterliste verwendet die Eigenschaft {{cssxref("counter-reset")}}, um den 'item' Zähler zu ändern.

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

Beachten Sie, wie die ersten Unterlistenartikel von `11` an nummeriert werden und die Nummerierung in der Elternliste fortgesetzt wird. Dies liegt daran, dass die Eigenschaft `counter-set` denselben 'item'-Zähler aktualisiert, der auf dem `.parent` Element deklariert wurde. Beachten Sie dann, wie die zweiten Unterlistenartikel eine neue Nummerierung erhalten, die bei '1' beginnt, und die Elternlistenartikel danach die Nummerierung nicht fortsetzen. Dies liegt daran, dass die Eigenschaft `counter-reset` einen neuen Zähler mit demselben Namen erstellt hat, sodass die Elternlistenartikel weiterhin den alten Zähler verwenden.

### Listenelementzähler

Geordnete Listen, die mit {{HTMLElement("ol")}} Elementen erstellt werden, haben implizit einen Zähler namens `list-item`.

Wie andere Zähler hat dieser einen Standardanfangswert von 0 für aufwärts zählende Zähler und "Anzahl der Artikel" für umgekehrte Zähler. Im Gegensatz zu vom Autor erstellten Zählern wird `list-item` _automatisch_ je nach Zählerinversion um eins für jedes Listenelement erhöht oder verringert.

Der Zähler `list-item` kann verwendet werden, um das Standardverhalten geordneter Listen mit CSS zu manipulieren. Zum Beispiel können Sie den Standardanfangswert ändern oder {{cssxref("counter-increment")}} verwenden, um die Art und Weise zu ändern, wie die Listenelemente inkrementiert oder dekrementiert werden.

## Beispiele

### Grundbeispiel

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

### Grundbeispiel: umgekehrter Zähler

Dieses Beispiel ist dasselbe wie das obige, verwendet jedoch einen umgekehrten Zähler. Wenn Ihr Browser die `reversed()` Funktionnotation unterstützt, sieht das Ergebnis so aus:

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

Ein Zähler muss nicht unbedingt jedes Mal angezeigt werden, wenn er inkrementiert wird. Dieses Beispiel zählt alle Links, wobei der Zähler nur angezeigt wird, wenn ein Link keinen Text hat, als bequemer Ersatz.

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

Ein CSS-Zähler kann insbesondere für die Erstellung von Listen mit Gliederung nützlich sein, da in Kindelementen automatisch eine neue Instanz des Zählers erstellt wird. Mit der Funktion {{cssxref("counters", "counters()")}} kann trennender Text zwischen verschiedenen Ebenen verschachtelter Zähler eingefügt werden.

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
- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
