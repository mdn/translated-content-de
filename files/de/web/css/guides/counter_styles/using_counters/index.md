---
title: CSS-Zähler verwenden
short-title: Zähler verwenden
slug: Web/CSS/Guides/Counter_styles/Using_counters
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

Mit **CSS-Zählern** können Sie das Erscheinungsbild von Inhalten abhängig von ihrer Position in einem Dokument anpassen.
Sie können beispielsweise Überschriften auf einer Webseite automatisch nummerieren oder die Nummerierung geordneter Listen ändern.

Zähler sind im Wesentlichen von CSS verwaltete Variablen, deren Werte durch CSS-Regeln erhöht oder verringert werden können. Die folgenden Faktoren beeinflussen die Zählerwerte eines Elements:

1. Zähler werden vom übergeordneten Element [geerbt](#vererbung_und_weitergabe_von_zählern) oder von einem vorhergehenden Geschwisterelement übernommen.
2. Neue Zähler werden mit der Eigenschaft {{cssxref("counter-reset")}} erstellt.
3. Zähler werden mit der Eigenschaft {{cssxref("counter-increment")}} erhöht.
4. Zähler werden mit der Eigenschaft {{cssxref("counter-set")}} direkt auf einen Wert gesetzt.

Sie können eigene benannte Zähler definieren und auch den Zähler `list-item` verändern, der standardmäßig für alle geordneten Listen erstellt wird.

## Zähler verwenden

Um einen Zähler zu verwenden, müssen Sie ihn zunächst mit der Eigenschaft {{cssxref("counter-reset")}} auf einen Wert initialisieren.
Mit der Eigenschaft {{cssxref("counter-increment")}} können Sie seinen Wert erhöhen oder verringern. Mit der Eigenschaft {{cssxref("counter-set")}} können Sie ihn direkt auf einen bestimmten Wert setzen.
Der aktuelle Wert eines Zählers wird mit der Funktion {{cssxref("counter()")}} oder {{cssxref("counters()")}} angezeigt, üblicherweise in der Eigenschaft {{CSSxRef("content")}} eines [Pseudoelements](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements).

Zähler können nur auf Elementen gesetzt, zurückgesetzt oder erhöht werden, die Boxen erzeugen.
Wenn für ein Element beispielsweise `display: none` festgelegt ist, werden sämtliche Zähleroperationen auf diesem Element ignoriert.

Mithilfe von Style Containment können Zählereigenschaften auf bestimmte Elemente begrenzt werden. Dies wird bei der Eigenschaft {{cssxref("contain")}} näher beschrieben.

### Den Wert eines Zählers verändern

Um einen CSS-Zähler zu verwenden, müssen Sie ihn zunächst mit der Eigenschaft {{cssxref("counter-reset")}} auf einen Wert initialisieren.
Mit dieser Eigenschaft können Sie den Zählerwert auch auf eine beliebige Zahl ändern.

Die folgende Deklaration initialisiert einen Zähler namens `section` mit dem Standardwert (`0`):

```css
counter-reset: section;
```

Sie können auch mehrere Zähler initialisieren und dabei optional für jeden einen Anfangswert angeben.
Die folgende Deklaration initialisiert die Zähler `section` und `topic` mit dem Standardwert und den Zähler `page` mit `3`:

```css
counter-reset: section page 3 topic;
```

Nach der Initialisierung können Sie den Wert eines Zählers mit {{cssxref("counter-increment")}} erhöhen oder verringern.
Die folgende Deklaration erhöht beispielsweise den Wert des Zählers `section` bei jedem `<h3>`-Element um `1`:

```css
h3 {
  counter-increment: section;
}
```

Sie können nach dem Zählernamen angeben, um welchen Betrag der Wert erhöht oder verringert werden soll. Dieser Betrag kann positiv oder negativ sein. Wird keine Ganzzahl angegeben, beträgt er standardmäßig `1`.

Zähler können nicht nur erhöht oder verringert, sondern mit der Eigenschaft {{cssxref("counter-set")}} auch ausdrücklich auf einen Wert gesetzt werden.

```css
.done {
  counter-set: section 20;
}
```

Der Name des Zählers darf nicht `none`, `inherit` oder `initial` sein; andernfalls wird die Deklaration ignoriert.

### Einen Zähler anzeigen

Der Wert eines Zählers kann mit der Funktion {{cssxref("counter()")}} oder {{cssxref("counters()")}} in einer {{cssxref("content")}}-Eigenschaft angezeigt werden.

Die folgende Deklaration verwendet beispielsweise `counter()`, um jeder `h3`-Überschrift den Text `Section <number>:` voranzustellen. Dabei ist `<number>` der Zählerwert im Dezimalsystem, dem standardmäßigen Anzeigestil:

Dadurch wird auf dem {{htmlelement("body")}}-Element ein Zähler namens `section` erstellt und sein Anfangswert auf `0` gesetzt. Der Zähler wird bei jedem `<h3>`-Element um `1` erhöht. Vor dem Inhalt jeder `<h3>`-Überschrift wird `Section <n>:` angezeigt, wobei `<n>` der standardmäßig dezimal dargestellte Wert des Zählers `section` ist.

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

Die Funktion {{cssxref("counter()")}} wird verwendet, wenn die Nummerierung verschachtelter Ebenen die übergeordneten Ebenen nicht einbeziehen soll.
Hier beginnt beispielsweise jede verschachtelte Ebene wieder bei eins:

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

Die Funktion {{cssxref("counters()")}} wird verwendet, wenn die Nummerierung verschachtelter Ebenen auch die Nummerierung der übergeordneten Ebenen enthalten soll.
Damit können Sie beispielsweise Abschnitte wie folgt gliedern:

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

Die Funktion {{cssxref("counter()")}} hat zwei Formen: `counter(<counter-name>)` und `counter(<counter-name>, <counter-style>)`.
Der erzeugte Text ist der Wert des innersten Zählers mit dem angegebenen Namen, der im Gültigkeitsbereich des Pseudoelements liegt.

Auch die Funktion {{cssxref("counters()")}} hat zwei Formen: `counters(<counter-name>, <separator>)` und `counters(<counter-name>, <separator>, <counter-style>)`.
Der erzeugte Text enthält die Werte aller Zähler mit dem angegebenen Namen, die im Gültigkeitsbereich des jeweiligen Pseudoelements liegen. Die Werte werden vom äußersten bis zum innersten Zähler ausgegeben und durch die angegebene Zeichenfolge (`<separator>`) getrennt.

Bei beiden Funktionen wird der Zähler im angegebenen `<counter-style>` dargestellt, standardmäßig als `decimal`.
Sie können jeden der {{cssxref("list-style-type")}}-Werte oder eigene [benutzerdefinierte Stile](/de/docs/Web/CSS/Guides/Counter_styles) verwenden.

Die Verwendung der Funktionen `counter()` und `counters()` wird weiter unten in den Abschnitten [Einfaches Beispiel](#einfaches_beispiel) beziehungsweise [Verschachtelte Zähler](#verschachtelte_zähler) gezeigt.

### Rückwärtszählende Zähler

Ein rückwärtszählender Zähler zählt abwärts (wird verringert), statt aufwärts zu zählen (erhöht zu werden).
Rückwärtszählende Zähler werden erstellt, indem bei der Benennung des Zählers in {{cssxref("counter-reset")}} die Funktionsschreibweise `reversed()` verwendet wird.

Ihr standardmäßiger Anfangswert entspricht der Anzahl der Elemente (anders als bei gewöhnlichen Zählern, deren Standardwert 0 ist).
So lässt sich ein Zähler erstellen, der von der Anzahl der Elemente bis eins herunterzählt.

Um beispielsweise einen rückwärtszählenden Zähler namens `section` mit dem standardmäßigen Anfangswert zu erstellen, verwenden Sie die folgende Syntax:

```css
counter-reset: reversed(section);
```

Sie können selbstverständlich auch einen beliebigen anderen Anfangswert angeben.

Der Zählerwert wird verringert, indem Sie für {{cssxref("counter-increment")}} einen negativen Wert angeben.

> [!NOTE]
> Sie können auch {{cssxref("counter-increment")}} verwenden, um einen gewöhnlichen Zähler zu verringern.
> Der Hauptvorteil eines rückwärtszählenden Zählers liegt in seinem standardmäßigen Anfangswert. Außerdem wird der Zähler `list-item` bei rückwärtszählenden Zählern automatisch verringert.

### Vererbung und Weitergabe von Zählern

Jedes Element und jedes Pseudoelement verfügt über eine Menge von Zählern in seinem Gültigkeitsbereich. Die anfänglich in dieser Menge enthaltenen Zähler stammen vom übergeordneten Element und vom vorhergehenden Geschwisterelement. Die Zählerwerte werden vom letzten Nachkommen des vorhergehenden Geschwisterelements, vom letzten Geschwisterelement oder vom übergeordneten Element übernommen.

Wenn ein Element einen Zähler deklariert, wird dieser in den gleichnamigen Zähler verschachtelt, den es vom übergeordneten Element übernommen hat. Hat das übergeordnete Element keinen gleichnamigen Zähler, wird der Zähler unverändert zur Zählermenge des Elements hinzugefügt. Ein gleichnamiger Zähler, der vom vorhergehenden Geschwisterelement übernommen wurde, wird aus der Zählermenge des Elements entfernt.

Die Funktion {{cssxref("counter()")}} ruft den innersten Zähler mit dem angegebenen Namen ab. Die Funktion {{cssxref("counters()")}} ruft den gesamten Zählerbaum mit diesem Namen ab.

Das folgende Beispiel zeigt einen geerbten Zähler namens `primary` und einen von Geschwisterelementen übernommenen Zähler namens `secondary`. Alle `<div>`-Elemente zeigen ihre Zähler mit der Funktion `counters()` an. Beachten Sie, dass alle Zähler mit der Eigenschaft `counter-reset` erstellt wurden und keiner der Zähler erhöht wurde.

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

Wir erstellen den Zähler `primary` auf dem übergeordneten Element der divs und anschließend einen neuen Zähler `primary` auf `D`. Den Zähler `secondary` erstellen wir auf `F`; auf `I` ersetzen wir dann den vom Geschwisterelement übernommenen Zähler `secondary`.

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

Das section-Element initialisiert einen Zähler namens `primary` mit dem Wert `3`. Alle untergeordneten `<div>`-Elemente erben diesen Zähler. Das Element „D“ erstellt einen neuen Zähler `primary` (Wert `6`), der in den vom übergeordneten Element übernommenen Zähler verschachtelt wird. Damit hat das Element zwei Zähler namens `primary` mit den Werten `3` und `6`.

Das Element „F“ erstellt erstmals den Zähler `secondary` (Wert `5`) und gibt ihn an das nächste Geschwisterelement „G“ weiter. Das Element „G“ gibt den Zähler an das nächste Element „H“ weiter und so fort. Anschließend erstellt das Element „I“ einen neuen gleichnamigen Zähler `secondary` (Wert `10`). Dabei verwirft es den vom vorhergehenden Geschwisterelement „H“ übernommenen Zähler `secondary` (Wert `5`) und gibt seinen eigenen Zähler an „J“ weiter.

### Unterschied zwischen counter-set und counter-reset

Die Eigenschaft {{cssxref("counter-set")}} aktualisiert einen vorhandenen Zähler. Wenn kein Zähler mit diesem Namen vorhanden ist, wird ein neuer erstellt. Die Eigenschaft {{cssxref("counter-reset")}} erstellt dagegen _immer_ einen neuen Zähler.

Im folgenden Beispiel befinden sich zwei Unterlisten in einer übergeordneten Liste. Jedes Listenelement wurde mithilfe eines Zählers namens „item“ nummeriert. Die erste Unterliste verwendet die Eigenschaft {{cssxref("counter-set")}}, die zweite die Eigenschaft {{cssxref("counter-reset")}}, um den Zähler „item“ zu ändern.

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

Wir erstellen einen neuen Zähler auf `parent` und erhöhen ihn bei jedem Listenelement. Anschließend zeigen wir die Zahlen mithilfe generierter Inhalte bei den Listenelementen an. Auf `.sub-list-one` aktualisieren wir den vorhandenen Zählerwert mit `counter-set`; auf `.sub-list-two` setzen wir ihn mit `counter-reset` zurück.

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

Beachten Sie, dass die erste Unterliste bei `11` beginnt und ihre Nummerierung in der übergeordneten Liste fortgesetzt wird. Das liegt daran, dass die Eigenschaft `counter-set` denselben Zähler `item` aktualisiert, der auf `.parent` deklariert wurde. Die zweite Unterliste beginnt bei `1`, und die Listenelemente der übergeordneten Liste nach ihr führen ihre Nummerierung nicht fort. Das liegt daran, dass die Eigenschaft `counter-reset` einen neuen Zähler mit demselben Namen erstellt, sodass die Listenelemente der übergeordneten Liste den ursprünglichen Zähler verwenden.

### Zähler für Listenelemente

Geordnete Listen, die mit {{HTMLElement("ol")}}-Elementen erstellt werden, verfügen implizit über einen Zähler namens `list-item`.

Wie andere Zähler hat er bei aufwärtszählenden Zählern den standardmäßigen Anfangswert 0 und bei rückwärtszählenden Zählern den Anfangswert „Anzahl der Listenelemente“.
Anders als selbst erstellte Zähler wird `list-item` für jedes Listenelement _automatisch_ um eins erhöht oder verringert, je nachdem, ob der Zähler rückwärtszählt.

Mit dem Zähler `list-item` können Sie das Standardverhalten geordneter Listen per CSS verändern.
Sie können beispielsweise den standardmäßigen Anfangswert ändern oder mit {{cssxref("counter-increment")}} festlegen, wie die Werte der Listenelemente erhöht oder verringert werden.

## Beispiele

### Einfaches Beispiel

Dieses Beispiel fügt am Anfang jeder Überschrift „Section \[Wert des Zählers]:“ ein.

#### HTML

Wir fügen drei `<h3>`-Elemente ein.

```html
<h3>Introduction</h3>
<h3>Body</h3>
<h3>Conclusion</h3>
```

#### CSS

Wir erstellen einen Zähler namens „section“ und belassen seinen Anfangswert beim Standardwert `0`. Bei jedem `<h3>` erhöhen wir den Wert des Zählers `section` um `1`. Vor dem Inhalt jedes `<h3>` zeigen wir das Wort „Section“, den Wert des Zählers `section` und einen Doppelpunkt an.

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

### Rückwärtszählender Zähler

Dieses Beispiel verwendet dasselbe HTML wie das vorherige, aber einen rückwärtszählenden Zähler, der die Elemente von 3 bis 1 nummeriert.

```html hidden
<h3>Introduction</h3>
<h3>Body</h3>
<h3>Conclusion</h3>
```

#### CSS

Wir verwenden die Funktion `reversed()`, um einen Zähler namens „section“ zu erstellen, und belassen seinen Anfangswert beim Standardwert. Wenn wir den Wert des Zählers `section` bei jedem `<h3>` um `1` verringern, hat der Zähler beim letzten Element der Gruppe den Wert `1`. Mithilfe [generierter Inhalte](/de/docs/Web/CSS/Guides/Generated_content) zeigen wir das Wort „Section “ und den Zählerwert vor dem Inhalt jedes `<h3>` an.

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

Ein Zähler muss nicht bei jeder Erhöhung angezeigt werden.
Dieses Beispiel zählt alle Links, zeigt den Zähler aber nur dann als generierten Inhalt an, wenn ein Link keinen Text enthält.

#### HTML

Wir fügen drei Absätze mit jeweils einem Link ein. Der erste und der letzte Link enthalten jedoch keinen Text.

```html
<p>See <a href="https://www.mozilla.org/" aria-label="Mozilla"></a></p>
<p>Do not forget to <a href="contact-me.html">leave a message</a>!</p>
<p>See also <a href="https://developer.mozilla.org/" aria-label="MDN"></a></p>
```

#### CSS

Wir erstellen und initialisieren den Zähler auf `:root`, erhöhen ihn bei jedem Link und erzeugen nur dann Inhalt, wenn der Link {{cssxref(":empty")}} ist.

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

### Verschachtelte Zähler

Ein CSS-Zähler eignet sich besonders für hierarchisch nummerierte Listen, da in untergeordneten Elementen automatisch eine neue Instanz des Zählers erstellt wird.
Mit der Funktion {{cssxref("counters()")}} können Sie Trennzeichen zwischen den verschiedenen Ebenen verschachtelter Zähler einfügen.

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

#### CSS

Wir erstellen bei jedem `<ol>`-Element eine neue Instanz des Zählers `section` und erhöhen bei jedem `<li>` nur die aktuelle Instanz. Mit der Funktion {{cssxref("counters()")}} verbinden wir die Werte aller Instanzen des Zählers `section`, getrennt durch einen Punkt.

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
- Modul [CSS-Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles)
- Modul [CSS-Listen und -Zähler](/de/docs/Web/CSS/Guides/Lists)
