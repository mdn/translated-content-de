---
title: Verwendung von CSS-Zählern
slug: Web/CSS/CSS_counter_styles/Using_CSS_counters
l10n:
  sourceCommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{CSSRef}}

**CSS-Zähler** ermöglichen es Ihnen, das Erscheinungsbild von Inhalten basierend auf ihrer Position in einem Dokument anzupassen.
Zum Beispiel können Sie Zähler verwenden, um die Überschriften auf einer Webseite automatisch zu nummerieren oder die Nummerierung in geordneten Listen zu ändern.

Zähler sind im Wesentlichen Variablen, die von CSS verwaltet werden, deren Werte durch CSS-Regeln erhöht oder verringert werden können, die nachverfolgen, wie oft sie verwendet werden. Die folgenden Dinge beeinflussen die Zählerwerte eines Elements:

1. Zähler werden [geerbt](#zählererbschaft_und_propagation) vom Elternelement oder vom vorherigen Geschwisterelement empfangen.
2. Neue Zähler werden mittels der Eigenschaft {{cssxref("counter-reset")}} instanziiert.
3. Zähler werden mit der Eigenschaft {{cssxref("counter-increment")}} erhöht.
4. Zähler werden direkt mit einem Wert mittels der Eigenschaft {{cssxref("counter-set")}} gesetzt.

Sie können eigene benannte Zähler definieren und auch den `list-item` Zähler manipulieren, der standardmäßig für alle geordneten Listen erstellt wird.

## Verwendung von Zählern

Um einen Zähler zu verwenden, muss er zuerst mit der Eigenschaft {{cssxref("counter-reset")}} initialisiert werden.
Der Wert des Zählers kann mit der Eigenschaft {{cssxref("counter-increment")}} erhöht oder verringert werden und kann direkt mit einem spezifischen Wert durch die Eigenschaft {{cssxref("counter-set")}} gesetzt werden.
Der aktuelle Wert eines Zählers wird unter Verwendung der Funktion {{cssxref("counter", "counter()")}} oder {{cssxref("counters", "counters()")}} angezeigt, typischerweise innerhalb einer [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) {{CSSxRef("content")}} Eigenschaft.

Zähler können nur in Elementen gesetzt, zurückgesetzt oder inkrementiert werden, die Boxen generieren.
Wenn ein Element beispielsweise auf `display: none` gesetzt ist, wird jede Zähleroperation auf diesem Element ignoriert.

Die Eigenschaften von Zählern können auf spezifische Elemente mithilfe von Stil-Containment beschränkt werden, was im Detail in der {{cssxref("contain")}} Eigenschaft beschrieben ist.

### Manipulation des Zählerwertes

Um einen CSS-Zähler zu verwenden, muss er zuerst mit der Eigenschaft {{cssxref("counter-reset")}} initialisiert werden.
Die Eigenschaft kann auch verwendet werden, um den Zählerwert auf eine bestimmte Zahl zu ändern.

Im Folgenden initialisieren wir einen Zähler namens `section` mit dem Standardwert (0).

```css
counter-reset: section;
```

Sie können auch mehrere Zähler initialisieren und optional einen Startwert für jeden angeben.
Im Folgenden initialisieren wir die `section` und `topic` Zähler mit dem Standardwert und den `page` Zähler mit 3.

```css
counter-reset: section page 3 topic;
```

Sobald initialisiert, kann der Wert eines Zählers mit {{cssxref("counter-increment")}} erhöht oder verringert werden.
Zum Beispiel würde die folgende Deklaration den `section` Zähler bei jedem `h3` Tag um eins erhöhen.

```css
h3::before {
  counter-increment: section; /* Erhöht den Wert des section-Zählers um 1 */
}
```

Sie können die Inkrement- oder Dekrementmenge nach dem Zählernamen angeben. Es kann eine positive oder negative Zahl sein, aber standardmäßig `1`, wenn keine Ganzzahl bereitgestellt wird.

Abgesehen vom Erhöhen oder Verringern können Zähler auch explizit auf einen Wert gesetzt werden, indem die {{cssxref("counter-set")}} Eigenschaft verwendet wird.

```css
.done::before {
  counter-set: section 20;
}
```

Der Name des Zählers darf nicht `none`, `inherit` oder `initial` sein; andernfalls wird die Deklaration ignoriert.

### Anzeige eines Zählers

Der Wert eines Zählers kann entweder durch die Funktion {{cssxref("counter", "counter()")}} oder {{cssxref("counters", "counters()")}} in einer {{cssxref("content")}} Eigenschaft angezeigt werden.

Zum Beispiel verwendet die folgende Deklaration `counter()`, um jedem `h3`-Kopf den Text `Section <number>:` voranzustellen, wobei `<number>` der Wert der Zählung in Dezimalzahlen ist (der Standardanzeigestil):

```css
h3::before {
  counter-increment: section; /* Erhöht den Wert des section-Zählers um 1 */
  content: "Section " counter(section) ": "; /* Zeigt Zählerwert im Standardstil (dezimal) an */
}
```

Die Funktion {{cssxref("counter", "counter()")}} wird verwendet, wenn die Nummerierung der Verschachtelungsebenen den Kontext der übergeordneten Ebenen nicht einschließt.
Zum Beispiel, hier beginnt jede verschachtelte Ebene erneut bei eins:

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

Die Funktion {{cssxref("counters", "counters()")}} wird verwendet, wenn die Zählung für verschachtelte Ebenen die Zählung der übergeordneten Ebenen einschließen muss.
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
Der generierte Text ist der Wert des innersten Zählers des gegebenen Namens im Geltungsbereich des Pseudoelements.

Die Funktion {{cssxref("counters", "counters()")}} hat ebenfalls zwei Formen: `counters(<counter-name>, <separator>)` und `counters(<counter-name>, <separator>, <counter-style>)`.
Der generierte Text ist der Wert aller Zähler mit dem gegebenen Namen im Geltungsbereich des gegebenen Pseudoelements, von außen nach innen, getrennt durch den angegebenen String (`<separator>`).

Der Zähler wird im angegebenen `<counter-style>` für beide Methoden dargestellt (`decimal` als Standard).
Sie können jeden der {{cssxref("list-style-type")}} Werte oder Ihre eigenen [benutzerdefinierten Stile](/de/docs/Web/CSS/CSS_counter_styles) verwenden.

Beispiele, die die Verwendung von `counter()` und `counters()` zeigen, werden unten im [grundlegenden Beispiel](#grundlegendes_beispiel) und [Beispiel für einen verschachtelten Zähler](#beispiel_eines_verschachtelten_zählers) gegeben.

### Umgekehrte Zähler

Ein umgekehrter Zähler ist ein Zähler, der dazu gedacht ist, herunterzuzählen (zu verringern) anstatt hochzuzählen (zu erhöhen).
Umgekehrte Zähler werden mit der `reversed()` Funktionsnotation erstellt, wenn der Zähler in {{cssxref("counter-reset")}} benannt wird.

Umgekehrte Zähler haben einen Standardstartwert, der der Anzahl der Elemente entspricht (im Gegensatz zu normalen Zählern, die einen Standardwert von 0 haben).
Dies macht es einfach, einen Zähler zu implementieren, der von der Anzahl der Elemente bis zu eins herunterzählt.

Zum Beispiel, um einen umgekehrten Zähler namens `section` mit einem Standardstartwert zu erstellen, würden Sie die folgende Syntax verwenden:

```css
counter-reset: reversed(section);
```

Sie können natürlich jeden Startwert angeben, den Sie möchten.

Der Zählerwert wird verringert, indem ein negativer Wert für {{cssxref("counter-increment")}} angegeben wird.

> [!NOTE]
> Sie können auch {{cssxref("counter-increment")}} verwenden, um einen nicht umgekehrten Zähler zu verringern.
> Der Hauptvorteil bei der Verwendung eines umgekehrten Zählers ist der Standardstartwert und dass der `list-item` Zähler umgekehrte Zähler automatisch verringert.

### Zählererbschaft und Propagation

Jedes Element oder Pseudoelement hat eine Menge von Zählern im Wirkungsbereich dieses Elements. Anfangszähler werden von der Elternkomponente und dem vorherigen Geschwisterelement empfangen. Die Zählwerte werden vom letzten Nachkommen des vorherigen Geschwisterelements, dem letzten Geschwisterelement oder dem Elternelement empfangen.

Wenn ein Element einen Zähler deklariert, wird der Zähler innerhalb des mit demselben Namen vom Elternelement empfangenen Zähler verschachtelt. Wenn das Elternelement keinen Zähler mit demselben Namen hat, wird der Zähler zur Zählermenge des Elements so hinzugefügt, wie er ist. Ein Zähler mit demselben Namen, der vom vorherigen Geschwisterempfangen wird, wird aus der Zählermenge entfernt.

Die Funktion {{cssxref("counter", "counter()")}} ruft den innersten Zähler mit dem bereitgestellten Namen ab. Und die Funktion {{cssxref("counters", "counters()")}} ruft den gesamten Zählerbaum mit dem gegebenen Namen ab.

Im folgenden Beispiel zeigen wir einen geerbten Zähler namens `primary` und einen Geschwisterzähler namens `secondary`. Alle `<div>`-Elemente zeigen ihre Zähler unter Verwendung der Funktion `counters()` an. Beachten Sie, dass alle Zähler mit der Eigenschaft `counter-reset` erstellt wurden und keiner der Zähler erhöht wurde.

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
/* Erstellen eines 'primary' Zählers beim übergeordneten Element divs */
section {
  counter-reset: primary 3;
}

div::after {
  content: " ('primary' counters: " counters(primary, "-", style)
    ", 'secondary' counters: " counters(secondary, "-", style) ")";
  color: blue;
}

/* Erstellen eines neuen 'primary' Zählers */
.same-primary-name {
  counter-reset: primary 6;
}

/* Erstellen eines 'secondary' Zählers beim div 'F' */
.new-secondary-name {
  counter-reset: secondary 5;
}

/* Überschreiben des Geschwister- 'secondary' Zählers */
.same-secondary-name {
  counter-reset: secondary 10;
}
```

{{EmbedLiveSample("Counter inheritance and propagation", "100%", 250)}}

Das Abschnittselement initialisiert einen Zähler namens `primary` mit dem Wert `3`, und alle Kind-`<div>`s erhalten den geerbten `primary` Zähler. Das Element 'D' erstellt einen neuen `primary`-Zähler (Wert `6`), der im vom Elternelement empfangenen Zähler verschachtelt wird, sodass das Element zwei Zähler namens `primary` mit den Werten `3` und `6` hat.

Das Element 'F' erstellt den `secondary` (Wert `5`) Zähler zum ersten Mal und gibt den Zähler an das nächste Geschwister 'G' weiter. Das Element 'G' gibt den Zähler an das nächste Element 'H' weiter und so weiter. Als nächstes erstellt das Element 'I' einen neuen Zähler mit demselben Namen `secondary` (Wert `10`), aber es entfernt den `secondary` (Wert `5`) Zähler, der vom vorherigen Geschwister 'H' empfangen wurde, und gibt seinen eigenen Zähler an 'J' weiter.

### Unterschied zwischen counter-set und counter-reset

Die Eigenschaft {{cssxref("counter-set")}} aktualisiert einen bestehenden Zähler und wenn kein Zähler mit dem Namen existiert, wird ein neuer Zähler instanziiert. Die Eigenschaft {{cssxref("counter-reset")}} erstellt _immer_ einen neuen Zähler.

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
/* Erstellen eines neuen Zählers das erste Mal */
.parent {
  counter-reset: item 0;
}

/* Erhöhen des Zählers bei jedem Listenelement */
li {
  counter-increment: item;
}

/* Anzeigen der Nummern auf Listenelementen */
li::before {
  content: counter(item) " ";
}

/* Ändern des bestehenden Zählwertes */
.sub-list-one {
  counter-set: item 10;
}

/* Ändern des Zählwertes */
.sub-list-two {
  counter-reset: item 0;
}
```

{{EmbedLiveSample("Difference between counter-set and counter-reset", "100%", 300)}}

Beachten Sie, wie die ersten Unterlistenelemente beginnen, Nummern ab `11` zu erhalten und die Nummerierung in der übergeordneten Liste fortgesetzt wird. Dies liegt daran, dass die `counter-set` Eigenschaft denselben 'item'-Zähler aktualisiert, der am `.parent` Element deklariert wurde. Beachten Sie dann, wie die zweiten Unterlistenelemente eine neue Nummerierung erhalten, beginnend bei '1', und die übergeordneten Listenelemente danach die Nummerierung nicht fortführen. Dies liegt daran, dass die `counter-reset` Eigenschaft einen neuen Zähler mit demselben Namen erstellt, sodass die übergeordneten Listenelemente weiterhin den alten Zähler verwendeten.

### Listenelementzähler

Geordnete Listen, erstellt mit {{HTMLElement("ol")}} Elementen, haben implizit einen Zähler namens `list-item`.

Wie andere Zähler hat dieser einen Standardstartwert von 0 für aufsteigende Zähler und "Anzahl der Elemente" für umgekehrte Zähler.
Im Gegensatz zu benutzererstellten Zählern wird der `list-item` Zähler _automatisch_ um eins erhöht oder verringert, abhängig davon, ob der Zähler umgekehrt ist oder nicht.

Der `list-item` Zähler kann verwendet werden, um das Standardverhalten von geordneten Listen mit CSS zu manipulieren.
Zum Beispiel können Sie den Standardstartwert ändern oder {{cssxref("counter-increment")}} verwenden, um die Art zu ändern, in der die Listenelemente erhöht oder verringert werden.

## Beispiele

### Grundlegendes Beispiel

Dieses Beispiel fügt am Anfang jedes Kopfes "Section \[der Wert des Zählers]:" hinzu.

#### CSS

```css
body {
  counter-reset: section; /* Setzt einen Zähler namens 'section' und dessen Startwert ist 0. */
}

h3::before {
  counter-increment: section; /* Erhöht den Wert des section-Zählers um 1 */
  content: "Section " counter(section) ": "; /* Zeigt das Wort 'Section ', den Wert des
                                                section-Zählers und einen Doppelpunkt vor dem
                                                Inhalt eines jeden h3 an */
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

Dieses Beispiel ist dasselbe wie das oben, verwendet jedoch einen umgekehrten Zähler.
Wenn Ihr Browser die `reversed()` Funktionsnotation unterstützt, wird das Ergebnis so aussehen:

![reversed counter](reversed_headings_basic.png)

#### CSS

```css
body {
  counter-reset: reversed(
    section
  ); /* Setzt einen Zähler namens 'section', und sein Standardwert ist 0. */
}

h3::before {
  counter-increment: section -1; /* Verringert den Wert des section-Zählers um 1 */
  content: "Section " counter(section) ": "; /* Zeigt das Wort 'Section ', den Wert des
                                                section-Zählers und einen Doppelpunkt vor dem
                                                Inhalt eines jeden h3 an */
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

Ein Zähler muss nicht unbedingt jedes Mal angezeigt werden, wenn er erhöht wird.
In diesem Beispiel werden alle Links gezählt, wobei der Zähler nur angezeigt wird, wenn ein Link keinen Text hat, als bequemer Ersatz.

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

Ein CSS-Zähler kann besonders nützlich für das Erstellen von Umrisslisten sein, da eine neue Instanz des Zählers automatisch in Kindelementen erstellt wird.
Mit der Funktion {{cssxref("counters", "counters()")}} können trennende Texte zwischen verschiedenen Ebenen verschachtelter Zähler eingefügt werden.

#### CSS

```css
ol {
  counter-reset: section; /* Erzeugt eine neue Instanz des
                             section-Zählers mit jedem ol
                             Element */
  list-style-type: none;
}

li::before {
  counter-increment: section; /* Erhöht nur diese Instanz
                                            des section-Zählers */
  content: counters(section, ".") " "; /* Kombiniert die Werte aller Instanzen
                                          des section-Zählers, getrennt
                                          durch einen Punkt */
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
