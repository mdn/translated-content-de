---
title: CSS-Counter verwenden
short-title: Counter verwenden
slug: Web/CSS/Guides/Counter_styles/Using_counters
l10n:
  sourceCommit: f60b6627900af0ba2132de74c77829fa6c189b57
---

Mit **CSS-Countern** können Sie das Erscheinungsbild von Inhalten abhängig von ihrer Position in einem Dokument anpassen. Beispielsweise können Sie damit die Überschriften einer Webseite automatisch nummerieren oder die Nummerierung geordneter Listen ändern.

Counter sind im Wesentlichen von CSS verwaltete Variablen. Ihre Werte können durch CSS-Regeln erhöht oder verringert werden. Die folgenden Faktoren beeinflussen den Wert eines Counters für ein Element:

1. Counter werden vom übergeordneten Element [geerbt](#vererbung_und_weitergabe_von_countern) oder von einem vorhergehenden Geschwisterelement übernommen.
2. Neue Counter werden mit der Eigenschaft {{cssxref("counter-reset")}} erstellt.
3. Counter werden mit der Eigenschaft {{cssxref("counter-increment")}} erhöht.
4. Counter werden mit der Eigenschaft {{cssxref("counter-set")}} direkt auf einen Wert gesetzt.

Sie können eigene benannte Counter definieren und auch den Counter `list-item` verändern, der standardmäßig für alle geordneten Listen erstellt wird.

## Counter verwenden

Bevor Sie einen Counter verwenden können, müssen Sie ihn mit der Eigenschaft {{cssxref("counter-reset")}} auf einen Wert initialisieren. Mit {{cssxref("counter-increment")}} können Sie seinen Wert erhöhen oder verringern und mit {{cssxref("counter-set")}} direkt auf einen bestimmten Wert setzen. Der aktuelle Wert eines Counters wird mit der Funktion {{cssxref("counter()")}} oder {{cssxref("counters()")}} angezeigt, üblicherweise innerhalb der Eigenschaft {{CSSxRef("content")}} eines [Pseudoelements](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements).

Counter können nur auf Elementen gesetzt, zurückgesetzt oder erhöht werden, die Boxen erzeugen. Wenn für ein Element beispielsweise `display: none` festgelegt ist, werden alle Counter-Operationen auf diesem Element ignoriert.

Mithilfe von Style Containment können Sie Counter-Eigenschaften auf bestimmte Elemente begrenzen. Dies wird bei der Eigenschaft {{cssxref("contain")}} näher beschrieben.

### Den Wert eines Counters verändern

Bevor Sie einen CSS-Counter verwenden können, müssen Sie ihn mit der Eigenschaft {{cssxref("counter-reset")}} auf einen Wert initialisieren. Mit dieser Eigenschaft können Sie den Counter-Wert auch auf eine beliebige Zahl ändern.

Die folgende Deklaration initialisiert einen Counter namens `section` mit dem Standardwert (`0`):

```css
counter-reset: section;
```

Sie können auch mehrere Counter initialisieren und dabei optional für jeden einen Anfangswert angeben. Die folgende Deklaration initialisiert die Counter `section` und `topic` mit dem Standardwert und den Counter `page` mit `3`:

```css
counter-reset: section page 3 topic;
```

Nach der Initialisierung können Sie den Wert eines Counters mit {{cssxref("counter-increment")}} erhöhen oder verringern. Die folgende Deklaration erhöht beispielsweise den Wert des Counters `section` für jedes `<h3>`-Element um `1`:

```css
h3 {
  counter-increment: section;
}
```

Sie können den Betrag, um den der Wert erhöht oder verringert wird, nach dem Counter-Namen angeben. Er kann positiv oder negativ sein. Wenn keine ganze Zahl angegeben ist, beträgt er standardmäßig `1`.

Mit der Eigenschaft {{cssxref("counter-set")}} können Sie Counter auch ausdrücklich auf einen Wert setzen, statt sie zu erhöhen oder zu verringern.

```css
.done {
  counter-set: section 20;
}
```

Der Name eines Counters darf nicht `none`, `inherit` oder `initial` sein. Andernfalls wird die Deklaration ignoriert.

### Einen Counter anzeigen

Der Wert eines Counters kann mithilfe der Funktion {{cssxref("counter()")}} oder {{cssxref("counters()")}} in einer {{cssxref("content")}}-Eigenschaft angezeigt werden.

Die folgende Deklaration verwendet beispielsweise `counter()`, um jeder `h3`-Überschrift den Text `Section <number>:` voranzustellen. Dabei ist `<number>` der dezimal dargestellte Wert des Counters (die standardmäßige Darstellungsform):

Dadurch wird auf dem {{htmlelement("body")}}-Element ein Counter namens `section` erstellt und sein Anfangswert auf `0` gesetzt. Der Counter wird bei jedem `<h3>`-Element um `1` erhöht. Vor dem Inhalt jeder `<h3>`-Überschrift wird `Section <n>:` angezeigt, wobei `<n>` der standardmäßig dezimal dargestellte Wert des Counters `section` ist.

```css
body {
  counter-reset: section;
}

h3 {
  counter-increment: section;
}

h3::before {
  content: "Section " counter(section) ": ";
}
```

### `counter()` und `counters()` vergleichen

Die Funktion {{cssxref("counter()")}} wird verwendet, wenn die Nummerierung verschachtelter Ebenen den Kontext der übergeordneten Ebenen nicht enthalten soll. Im folgenden Beispiel beginnt jede verschachtelte Ebene wieder bei eins:

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

Die Funktion {{cssxref("counters()")}} wird verwendet, wenn die Nummerierung verschachtelter Ebenen die Werte der übergeordneten Ebenen enthalten soll. Damit können Sie beispielsweise Abschnitte wie folgt gliedern:

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

Die Funktion {{cssxref("counter()")}} hat zwei Formen: `counter(<counter-name>)` und `counter(<counter-name>, <counter-style>)`. Der erzeugte Text ist der Wert des innersten Counters mit dem angegebenen Namen im Gültigkeitsbereich des Pseudoelements.

Die Funktion {{cssxref("counters()")}} hat ebenfalls zwei Formen: `counters(<counter-name>, <separator>)` und `counters(<counter-name>, <separator>, <counter-style>)`. Der erzeugte Text enthält die Werte aller Counter mit dem angegebenen Namen im Gültigkeitsbereich des Pseudoelements, vom äußersten bis zum innersten. Die Werte werden durch die angegebene Zeichenfolge (`<separator>`) getrennt.

Bei beiden Funktionen wird der Counter im angegebenen `<counter-style>` dargestellt (standardmäßig `decimal`). Sie können jeden Wert von {{cssxref("list-style-type")}} oder eigene [benutzerdefinierte Stile](/de/docs/Web/CSS/Guides/Counter_styles) verwenden.

Die Verwendung der Funktionen `counter()` und `counters()` wird weiter unten in den Abschnitten [Einfaches Beispiel](#einfaches_beispiel) beziehungsweise [Verschachtelte Counter](#verschachtelte_counter) gezeigt.

### Rückwärts zählende Counter

Ein rückwärts zählender Counter zählt abwärts (verringert seinen Wert), statt aufwärts zu zählen (seinen Wert zu erhöhen). Sie erstellen ihn, indem Sie beim Benennen des Counters in {{cssxref("counter-reset")}} die Funktionsnotation `reversed()` verwenden.

Der standardmäßige Anfangswert eines rückwärts zählenden Counters entspricht der Anzahl der Elemente. Bei normalen Countern beträgt er dagegen 0. So lässt sich ein Counter erstellen, der von der Anzahl der Elemente bis eins herunterzählt.

Um beispielsweise einen rückwärts zählenden Counter namens `section` mit dem standardmäßigen Anfangswert zu erstellen, verwenden Sie die folgende Syntax:

```css
counter-reset: reversed(section);
```

Sie können selbstverständlich auch einen beliebigen anderen Anfangswert angeben.

Der Counter-Wert wird verringert, indem Sie für {{cssxref("counter-increment")}} einen negativen Wert angeben.

> [!NOTE]
> Sie können {{cssxref("counter-increment")}} auch verwenden, um den Wert eines nicht rückwärts zählenden Counters zu verringern.
> Die wichtigsten Vorteile eines rückwärts zählenden Counters sind sein standardmäßiger Anfangswert und die Tatsache, dass der Counter `list-item` rückwärts zählende Counter automatisch verringert.

### Vererbung und Weitergabe von Countern

Jedes Element oder Pseudoelement verfügt über eine Menge von Countern in seinem Gültigkeitsbereich. Die anfänglichen Counter dieser Menge werden vom übergeordneten Element und vom vorhergehenden Geschwisterelement übernommen. Die Counter-Werte stammen vom letzten Nachkommen des vorhergehenden Geschwisterelements, vom letzten Geschwisterelement oder vom übergeordneten Element.

Wenn ein Element einen Counter deklariert, wird dieser in den gleichnamigen Counter verschachtelt, den es vom übergeordneten Element übernommen hat. Hat das übergeordnete Element keinen Counter mit demselben Namen, wird der Counter unverändert zur Counter-Menge des Elements hinzugefügt. Ein gleichnamiger Counter, der vom vorhergehenden Geschwisterelement übernommen wurde, wird aus der Counter-Menge des Elements entfernt.

Die Funktion {{cssxref("counter()")}} ruft den innersten Counter mit dem angegebenen Namen ab. Die Funktion {{cssxref("counters()")}} ruft den gesamten Counter-Baum mit diesem Namen ab.

Das folgende Beispiel zeigt einen geerbten Counter namens `primary` und einen von einem Geschwisterelement übernommenen Counter namens `secondary`. Alle `<div>`-Elemente zeigen ihre Counter mit der Funktion `counters()` an. Beachten Sie, dass alle Counter mit der Eigenschaft `counter-reset` erstellt und keine Counter erhöht wurden.

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

Wir erstellen den Counter `primary` auf dem übergeordneten Element der div-Elemente und anschließend einen neuen Counter `primary` auf `D`. Den Counter `secondary` erstellen wir auf `F`; auf `I` ersetzen wir dann den vom Geschwisterelement übernommenen Counter `secondary`.

```css
section {
  counter-reset: primary 3;
}

div::after {
  content: " ('primary' counters: " counters(primary, "-", style)
    ", 'secondary' counters: " counters(secondary, "-", style) ")";
  color: blue;
}

.same-primary-name {
  counter-reset: primary 6;
}

.new-secondary-name {
  counter-reset: secondary 5;
}

.same-secondary-name {
  counter-reset: secondary 10;
}
```

{{EmbedLiveSample("Counter inheritance and propagation", "100%", 250)}}

Das section-Element initialisiert einen Counter namens `primary` mit dem Wert `3`. Alle untergeordneten `<div>`-Elemente erben diesen Counter. Das Element „D“ erstellt einen neuen Counter `primary` mit dem Wert `6`, der in den vom übergeordneten Element übernommenen Counter verschachtelt wird. Das Element verfügt somit über zwei Counter namens `primary` mit den Werten `3` und `6`.

Das Element „F“ erstellt erstmals den Counter `secondary` mit dem Wert `5` und gibt ihn an das nächste Geschwisterelement „G“ weiter. „G“ gibt den Counter an das nächste Element „H“ weiter und so fort. Das Element „I“ erstellt anschließend einen neuen Counter mit demselben Namen `secondary` und dem Wert `10`. Dabei verwirft es den vom vorhergehenden Geschwisterelement „H“ übernommenen Counter `secondary` mit dem Wert `5` und gibt seinen eigenen Counter an „J“ weiter.

### Unterschied zwischen counter-set und counter-reset

Die Eigenschaft {{cssxref("counter-set")}} aktualisiert einen vorhandenen Counter. Gibt es keinen Counter mit diesem Namen, wird ein neuer erstellt. Die Eigenschaft {{cssxref("counter-reset")}} erstellt _immer_ einen neuen Counter.

Im folgenden Beispiel befinden sich zwei Unterlisten innerhalb einer übergeordneten Liste. Jedes Listenelement wird mit einem Counter namens „item“ nummeriert. Die erste Unterliste verwendet die Eigenschaft {{cssxref("counter-set")}}, die zweite die Eigenschaft {{cssxref("counter-reset")}}, um den Counter „item“ zu ändern.

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

Wir erstellen einen neuen Counter auf `parent`, erhöhen ihn für jedes Listenelement und zeigen die Zahlen mithilfe von generiertem Inhalt an. Auf `.sub-list-one` aktualisieren wir den vorhandenen Counter-Wert mit `counter-set`; auf `.sub-list-two` setzen wir ihn mit `counter-reset` zurück.

```css
.parent {
  counter-reset: item 0;
}

li {
  counter-increment: item;
}

li::before {
  content: counter(item) " ";
}

.sub-list-one {
  counter-set: item 10;
}

.sub-list-two {
  counter-reset: item 0;
}
```

{{EmbedLiveSample("Difference between counter-set and counter-reset", "100%", 300)}}

Beachten Sie, dass die erste Unterliste bei `11` beginnt und ihre Nummerierung in der übergeordneten Liste fortgesetzt wird. Das liegt daran, dass die Eigenschaft `counter-set` denselben Counter `item` aktualisiert, der auf `.parent` deklariert wurde. Die zweite Unterliste beginnt bei `1`, und die darauffolgenden Elemente der übergeordneten Liste setzen ihre Nummerierung nicht fort. Das liegt daran, dass die Eigenschaft `counter-reset` einen neuen Counter mit demselben Namen erstellt. Die Elemente der übergeordneten Liste verwenden daher den ursprünglichen Counter.

### Counter für Listenelemente

Geordnete Listen, die mit {{HTMLElement("ol")}}-Elementen erstellt werden, verfügen implizit über einen Counter namens `list-item`.

Wie andere Counter hat er für aufwärts zählende Counter den standardmäßigen Anfangswert 0 und für rückwärts zählende Counter den Anfangswert „Anzahl der Elemente“. Anders als eigens erstellte Counter wird `list-item` für jedes Listenelement _automatisch_ um eins erhöht oder verringert, je nachdem, ob der Counter rückwärts zählt.

Mit dem Counter `list-item` können Sie das Standardverhalten geordneter Listen per CSS ändern. Sie können beispielsweise den standardmäßigen Anfangswert ändern oder mit {{cssxref("counter-increment")}} festlegen, wie der Wert für die Listenelemente erhöht oder verringert wird.

## Beispiele

### Einfaches Beispiel

Dieses Beispiel fügt am Anfang jeder Überschrift „Section \[Wert des Counters]:“ ein.

#### HTML

Wir verwenden drei `<h3>`-Elemente.

```html
<h3>Introduction</h3>
<h3>Body</h3>
<h3>Conclusion</h3>
```

#### CSS

Wir erstellen einen Counter namens „section“ und verwenden seinen standardmäßigen Anfangswert `0`. Bei jedem `<h3>` erhöhen wir den Wert des Counters `section` um `1`. Vor dem Inhalt jedes `<h3>` zeigen wir das Wort „Section“, den Wert des Counters `section` und einen Doppelpunkt an.

```css
body {
  counter-reset: section;
}

h3::before {
  counter-increment: section;
}
h3::before {
  content: "Section " counter(section) ": ";
}
```

#### Ergebnis

{{EmbedLiveSample("Basic_example", "100%", 150)}}

### Rückwärts zählender Counter

Dieses Beispiel verwendet dasselbe HTML wie das vorherige Beispiel, aber einen rückwärts zählenden Counter. Die Elemente werden von 3 bis 1 nummeriert.

```html hidden
<h3>Introduction</h3>
<h3>Body</h3>
<h3>Conclusion</h3>
```

#### CSS

Mit der Funktion `reversed()` erstellen wir einen Counter namens „section“ und verwenden seinen standardmäßigen Anfangswert. Wenn wir den Wert des Counters `section` bei jedem `<h3>` um `1` verringern, hat der Counter beim letzten Element der Gruppe den Wert `1`. Mithilfe von [generiertem Inhalt](/de/docs/Web/CSS/Guides/Generated_content) zeigen wir das Wort „Section “ und den Counter-Wert vor dem Inhalt jedes `<h3>` an.

```css
body {
  counter-reset: reversed(section);
}

h3 {
  counter-increment: section -1;
}
h3::before {
  content: "Section " counter(section) ": ";
}
```

```css hidden
@supports not (counter-reset: reversed(section)) {
  body::before {
    content: "Your browser doesn't support the reversed() function.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

#### Ergebnis

{{EmbedLiveSample("Reversed counter", "100%", 150)}}

### Ein ausführlicheres Beispiel

Ein Counter muss nicht jedes Mal angezeigt werden, wenn er erhöht wird. Dieses Beispiel zählt alle Links, zeigt den Counter als generierten Inhalt aber nur dann an, wenn ein Link keinen Text enthält.

#### HTML

Wir verwenden drei Absätze mit jeweils einem Link. Der erste und der letzte Link enthalten keinen Text.

```html
<p>See <a href="https://www.mozilla.org/" aria-label="Mozilla"></a></p>
<p>Do not forget to <a href="contact-me.html">leave a message</a>!</p>
<p>See also <a href="https://developer.mozilla.org/" aria-label="MDN"></a></p>
```

#### CSS

Wir erstellen und initialisieren den Counter auf `:root`, erhöhen ihn für jeden Link und erzeugen nur dann Inhalt, wenn der Link {{cssxref(":empty")}} ist.

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

#### Ergebnis

{{EmbedLiveSample("A_more_elaborate_example", "100%", 150)}}

### Verschachtelte Counter

CSS-Counter sind besonders nützlich für hierarchisch gegliederte Listen, da für untergeordnete Elemente automatisch eine neue Instanz des Counters erstellt wird. Mit der Funktion {{cssxref("counters()")}} können Sie Trennzeichen zwischen den verschiedenen Ebenen verschachtelter Counter einfügen.

#### CSS

Wir erstellen bei jedem `<ol>`-Element eine neue Instanz des Counters `section` und erhöhen bei jedem `<li>` nur die aktuelle Instanz. Mit der Funktion {{cssxref("counters()")}} verbinden wir die Werte aller Instanzen des Counters `section`, getrennt durch einen Punkt.

```css
ol {
  counter-reset: section;
  list-style-type: none;
}

li {
  counter-increment: section;
}

li::before {
  content: counters(section, ".") " ";
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

{{EmbedLiveSample("Nested_counters", "100%", 350)}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{cssxref("contain")}}
- {{cssxref("counter-reset")}}
- {{cssxref("counter-set")}}
- {{cssxref("counter-increment")}}
- {{cssxref("@counter-style")}}
- Modul [CSS-Counter-Stile](/de/docs/Web/CSS/Guides/Counter_styles)
- Modul [CSS-Listen und -Counter](/de/docs/Web/CSS/Guides/Lists)
