---
title: Verwendung von CSS-Zählern
short-title: Verwendung von Zählern
slug: Web/CSS/CSS_counter_styles/Using_CSS_counters
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

**CSS-Zähler** ermöglichen die Anpassung der Darstellung von Inhalten basierend auf ihrer Position in einem Dokument.
Zum Beispiel können Sie Zähler verwenden, um die Überschriften auf einer Webseite automatisch zu nummerieren oder die Nummerierung bei geordneten Listen zu ändern.

Zähler sind im Wesentlichen Variablen, die von CSS verwaltet werden, deren Werte durch CSS-Regeln erhöht oder verringert werden können, die verfolgen, wie oft sie verwendet werden. Die folgenden Dinge beeinflussen die Zählerwerte eines Elements:

1. Zähler werden [geerbt](#zählervererbung_und_-verbreitung) vom Elternelement oder von einem vorherigen Geschwisterelement empfangen.
2. Neue Zähler werden mit der Eigenschaft {{cssxref("counter-reset")}} instanziiert.
3. Zähler werden mit der Eigenschaft {{cssxref("counter-increment")}} erhöht.
4. Zähler werden direkt auf einen Wert mit der Eigenschaft {{cssxref("counter-set")}} gesetzt.

Sie können Ihre eigenen benannten Zähler definieren und außerdem den `list-item`-Zähler manipulieren, der standardmäßig für alle geordneten Listen erstellt wird.

## Verwendung von Zählern

Um einen Zähler zu verwenden, muss er zuerst mit der Eigenschaft {{cssxref("counter-reset")}} auf einen Wert initialisiert werden.
Der Zählerwert kann mit der Eigenschaft {{cssxref("counter-increment")}} erhöht oder verringert werden und kann direkt auf einen bestimmten Wert mit der Eigenschaft {{cssxref("counter-set")}} gesetzt werden.
Der aktuelle Wert eines Zählers wird mit der Funktion {{cssxref("counter", "counter()")}} oder {{cssxref("counters", "counters()")}} angezeigt, typischerweise innerhalb einer [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) {{CSSxRef("content")}}-Eigenschaft.

Zähler können nur in Elementen gesetzt, zurückgesetzt oder erhöht werden, die Boxen erzeugen.
Wenn ein Element beispielsweise auf `display: none` gesetzt ist, wird jede Zähleroperation auf diesem Element ignoriert.

Die Eigenschaften von Zählern können auf bestimmte Elemente beschränkt werden, indem Sie die Stilenthältlichkeit verwenden, die ausführlicher in der Eigenschaft {{cssxref("contain")}} beschrieben wird.

### Manipulation eines Zählerwerts

Um einen CSS-Zähler zu verwenden, muss er zuerst mit der Eigenschaft {{cssxref("counter-reset")}} auf einen Wert initialisiert werden.
Die Eigenschaft kann auch verwendet werden, um den Zählerwert auf eine beliebige bestimmte Zahl zu ändern.

Unten initialisieren wir einen Zähler namens `section` mit dem Standardwert (0).

```css
counter-reset: section;
```

Sie können auch mehrere Zähler initialisieren und optional einen Anfangswert für jeden angeben.
Unten initialisieren wir die `section`- und `topic`-Zähler mit dem Standardwert und den `page`-Zähler auf 3.

```css
counter-reset: section page 3 topic;
```

Einmal initialisiert, kann ein Zählerwert mit {{cssxref("counter-increment")}} erhöht oder verringert werden.
Zum Beispiel würde die folgende Deklaration den `section`-Zähler bei jedem `h3`-Tag um eins erhöhen.

```css
h3::before {
  counter-increment: section; /* Increment the value of section counter by 1 */
}
```

Sie können die Erhöhung oder Verringerung nach dem Zählernamen angeben. Es kann eine positive oder negative Zahl sein, jedoch wird standardmäßig `1` angenommen, wenn keine ganze Zahl angegeben ist.

Neben der Erhöhung oder Verringerung können Zähler auch explizit auf einen Wert mittels der Eigenschaft {{cssxref("counter-set")}} gesetzt werden.

```css
.done::before {
  counter-set: section 20;
}
```

Der Zählername darf nicht `none`, `inherit` oder `initial` sein; andernfalls wird die Deklaration ignoriert.

### Anzeige eines Zählers

Der Wert eines Zählers kann entweder mit der Funktion {{cssxref("counter", "counter()")}} oder {{cssxref("counters", "counters()")}} in einer {{cssxref("content")}}-Eigenschaft angezeigt werden.

Zum Beispiel verwendet die folgende Deklaration `counter()`, um jedem `h3`-Überschrift den Text `Section <Nummer>:` voranzustellen, wobei `<Nummer>` der Wert des Zählers in Dezimalform ist (der Standardanzeigestil):

```css
body {
  counter-reset: section; /* Set a counter named 'section', and its initial value is 0. */
}

h3::before {
  counter-increment: section; /* Increment the value of section counter by 1 */
  content: "Section " counter(section) ": "; /* Display counter value in default style (decimal) */
}
```

Die Funktion {{cssxref("counter", "counter()")}} wird verwendet, wenn die Nummerierung von Verschachtelungsebenen nicht den Kontext der Elternebenen beinhaltet.
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

Die Funktion {{cssxref("counters", "counters()")}} wird verwendet, wenn der Zähler für verschachtelte Ebenen den Zähler der Elternebenen beinhalten soll.
Zum Beispiel könnten Sie dies verwenden, um Abschnitte wie folgt anzuordnen:

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
Der erzeugte Text ist der Wert des innersten Zählers mit dem angegebenen Namen im Gültigkeitsbereich am Pseudoelement.

Die Funktion {{cssxref("counters", "counters()")}} hat ebenfalls zwei Formen: `counters(<counter-name>, <separator>)` und `counters(<counter-name>, <separator>, <counter-style>)`.
Der erzeugte Text ist der Wert aller Zähler mit dem angegebenen Namen im Gültigkeitsbereich am angegebenen Pseudoelement, von außen nach innen, getrennt durch die angegebene Zeichenkette (`<separator>`).

Der Zähler wird im angegebenen `<counter-style>` für beide Methoden gerendert (standardmäßig `decimal`).
Sie können einen der {{cssxref("list-style-type")}} Werte oder Ihre eigenen [benutzerdefinierten Stile](/de/docs/Web/CSS/CSS_counter_styles) verwenden.

Beispiele, die die Verwendung von `counter()` und `counters()` zeigen, finden Sie unten im [grundlegenden Beispiel](#grundlegendes_beispiel) und im [Beispiel eines verschachtelten Zählers](#beispiel_eines_verschachtelten_zählers).

### Umgekehrte Zähler

Ein umgekehrter Zähler ist einer, der herunterzählt (verringert) statt hochzuzählen (erhöht).
Umgekehrte Zähler werden mit der Notation `reversed()` erstellt, wenn der Zähler in {{cssxref("counter-reset")}} benannt wird.

Umgekehrte Zähler haben einen Standardanfangswert, der der Anzahl der Elemente entspricht (im Gegensatz zu normalen Zählern, die einen Standardwert von 0 haben).
Dies erleichtert die Implementierung eines Zählers, der von der Anzahl der Elemente bis auf eins herunterzählt.

Um zum Beispiel einen umgekehrten Zähler namens `section` mit einem Standardanfangswert zu erstellen, würden Sie die folgende Syntax verwenden:

```css
counter-reset: reversed(section);
```

Selbstverständlich können Sie auch jeden gewünschten Anfangswert angeben.

Der Zählerwert wird verringert, indem ein negativer Wert für {{cssxref("counter-increment")}} angegeben wird.

> [!NOTE]
> Sie können auch {{cssxref("counter-increment")}} verwenden, um einen nicht umgekehrten Zähler zu verringern.
> Der Hauptvorteil der Verwendung eines umgekehrten Zählers ist der Standardanfangswert und dass der `list-item`-Zähler umgekehrte Zähler automatisch verringert.

### Zählervererbung und -verbreitung

Jedes Element oder Pseudoelement hat einen Satz von Zählern im Gültigkeitsbereich dieses Elements. Die anfänglichen Zähler im Satz werden vom Elternelement und dem vorhergehenden Geschwister empfangen. Die Zählerwerte werden vom letzten Nachkommen des vorherigen Geschwisters, dem letzten Geschwister oder dem Elternteil empfangen.

Wenn ein Element einen Zähler deklariert, wird der Zähler innerhalb des vom Elternteil mit demselben Namen empfangenen Zählers verschachtelt. Wenn das Elternteil keinen Zähler mit demselben Namen hat, wird der Zähler dem Zählersatz des Elements hinzugefügt, wie er ist. Ein Zähler mit demselben Namen, der vom vorherigen Geschwister empfangen wurde, wird aus dem Zählersatz entfernt.

Die Funktion {{cssxref("counter", "counter()")}} ruft den innersten Zähler mit dem angegebenen Namen ab. Und die Funktion {{cssxref("counters", "counters()")}} ruft den gesamten Zählerbaum mit dem angegebenen Namen ab.

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

{{EmbedLiveSample("Zählervererbung und -verbreitung", "100%", 250)}}

Das Abschnittselement initialisiert einen Zähler namens `primary` mit dem Wert `3`, und alle Kind-`<div>`s erhalten den geerbten `primary`-Zähler. Das Element 'D' erstellt einen neuen `primary`-Zähler (Wert `6`), der im vom Elternteil empfangenen Zähler verschachtelt wird, sodass das Element zwei `primary`-Zähler mit den Werten `3` und `6` hat.

Das Element 'F' erstellt den `secondary`-Zähler (Wert `5`) zum ersten Mal und gibt den Zähler an das nächste Geschwister 'G' weiter. Das Element 'G' gibt den Zähler an das nächste Element 'H' weiter und so weiter. Dann erstellt das Element 'I' einen neuen Zähler mit demselben Namen `secondary` (Wert `10`), aber es entfernt den vom vorherigen Geschwister 'H' empfangenen `secondary`-Zähler (Wert `5`) und übergibt seinen eigenen Zähler an 'J'.

### Unterschied zwischen counter-set und counter-reset

Die Eigenschaft {{cssxref("counter-set")}} aktualisiert einen bestehenden Zähler, und wenn kein Zähler mit dem Namen existiert, dann wird ein neuer Zähler instanziiert. Die Eigenschaft {{cssxref("counter-reset")}} erstellt _immer_ einen neuen Zähler.

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

{{EmbedLiveSample("Unterschied zwischen counter-set und counter-reset", "100%", 300)}}

Beachten Sie, wie die ersten Unterlisteneinträge anfangen, Nummern ab `11` zu erhalten, und die Nummerierung in der übergeordneten Liste fortgesetzt wird. Dies liegt daran, dass die `counter-set`-Eigenschaft denselben 'item'-Zähler aktualisiert, der auf dem `.parent`-Element deklariert wurde. Beachten Sie dann, wie die zweiten Unterlisteneinträge neue Nummerierungen ab '1' erhalten und die darüber liegenden Listeneinträge die Nummerierung nicht fortführen. Dies liegt daran, dass die `counter-reset`-Eigenschaft einen neuen Zähler mit demselben Namen erstellt, sodass die darüber liegenden Listeneinträge weiterhin den alten Zähler verwenden.

### Listenelement-Zähler

Geordnete Listen, wie sie mit {{HTMLElement("ol")}}-Elementen erstellt werden, haben implizit einen Zähler namens `list-item`.

Wie andere Zähler hat dieser einen Standardanfangswert von 0 für aufwärtszählende Zähler und "Anzahl der Elemente" für umgekehrte Zähler.
Anders als benutzerdefiniert erstellte Zähler wird `list-item` _automatisch_ für jedes Listenelement um eins erhöht oder verringert, abhängig davon, ob der Zähler umgekehrt ist oder nicht.

Der `list-item`-Zähler kann verwendet werden, um das Standardverhalten von geordneten Listen mit CSS zu manipulieren.
Beispielsweise können Sie den Standardanfangswert ändern oder {{cssxref("counter-increment")}} verwenden, um zu ändern, wie sich die Listenelemente erhöhen oder verringern.

## Beispiele

### Grundlegendes Beispiel

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

{{EmbedLiveSample("Grundlegendes Beispiel", "100%", 150)}}

### Grundlegendes Beispiel: umgekehrter Zähler

Dieses Beispiel ist dasselbe wie das oben genannte, verwendet jedoch einen umgekehrten Zähler.
Wenn Ihr Browser die `reversed()`-Funktionnotation unterstützt, wird das Ergebnis so aussehen:

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

### Ein anspruchsvolleres Beispiel

Ein Zähler muss nicht unbedingt jedes Mal angezeigt werden, wenn er erhöht wird.
Dieses Beispiel zählt alle Links, wobei der Zähler nur dann angezeigt wird, wenn ein Link keinen Text hat, um einen bequemen Ersatz darzustellen.

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

{{EmbedLiveSample("Ein anspruchsvolleres Beispiel", "100%", 150)}}

### Beispiel eines verschachtelten Zählers

Ein CSS-Zähler kann besonders nützlich für die Erstellung gegliederter Listen sein, da für untergeordnete Elemente automatisch eine neue Instanz des Zählers erstellt wird.
Mit der Funktion {{cssxref("counters", "counters()")}} können Trennzeichen zwischen verschiedenen Ebenen von verschachtelten Zählern eingefügt werden.

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
- [CSS-Listen und -Zähler](/de/docs/Web/CSS/CSS_lists) Modul
