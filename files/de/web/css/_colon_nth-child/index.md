---
title: ":nth-child()"
slug: Web/CSS/:nth-child
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:nth-child()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wählt Elemente basierend auf den Indizes der Elemente in der Kindliste ihrer Eltern aus. Mit anderen Worten: Der `:nth-child()`-Selektor wählt Kind-Elemente entsprechend ihrer Position unter allen Geschwisterelementen innerhalb eines Elternelements aus.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-nth-child.html", "tabbed-shorter")}}

> [!NOTE]
> Im `element:nth-child()`-Syntax werden bei der Zählung der Kinder auch Geschwisterkinder eines beliebigen Elementtyps berücksichtigt; es wird jedoch nur als Übereinstimmung angesehen, wenn das Element _an dieser Kinderposition_ mit den anderen Komponenten des Selektors übereinstimmt.

## Syntax

`:nth-child()` benötigt ein einzelnes Argument, das ein Muster zur Übereinstimmung von Elementindizes in einer Liste von Geschwistern beschreibt. Die Elementindizes beginnen bei 1.

```css-nolint
:nth-child(<nth> [of <complex-selector-list>]?) {
  /* ... */
}
```

### Schlüsselwortwerte

- `odd`
  - : Repräsentiert Elemente, deren numerische Position in einer Reihe von Geschwistern ungerade ist: 1, 3, 5, usw.
- `even`
  - : Repräsentiert Elemente, deren numerische Position in einer Reihe von Geschwistern gerade ist: 2, 4, 6, usw.

### Funktionale Notation

- `<An+B>`

  - : Repräsentiert Elemente, deren numerische Position in einer Reihe von Geschwistern dem Muster `An+B` entspricht, für jeden positiven Integer oder Nullwert von `n`, wobei:

    - `A` eine Ganzzahlschrittgröße ist,
    - `B` ein Ganzzahloffset ist,
    - `n` alle nicht-negativen ganzen Zahlen sind, beginnend bei 0.

    Man kann es als das `An+B`-te Element einer Liste lesen. Die Werte für `A` und `B` müssen beide {{cssxref("&lt;integer&gt;")}} sein.

### Die `of <selector>`-Syntax

Durch Übergabe eines Selektorarguments können wir das **n-te** Element auswählen, das diesem Selektor entspricht. Zum Beispiel entspricht der folgende Selektor den ersten drei Listenelementen mit `class="important"`.

```css
:nth-child(-n + 3 of li.important) {
}
```

Dies unterscheidet sich davon, den Selektor außerhalb der Funktion zu setzen, wie:

```css
li.important:nth-child(-n + 3) {
}
```

Dieser Selektor wählt Listenelemente aus, wenn sie sich unter den ersten drei Kindern befinden und mit dem Selektor `li.important` übereinstimmen.

## Beispiele

### Beispiel-Selektoren

- `tr:nth-child(odd)` oder `tr:nth-child(2n+1)`
  - : Repräsentiert die ungeraden Zeilen einer HTML-Tabelle: 1, 3, 5, usw.
- `tr:nth-child(even)` oder `tr:nth-child(2n)`
  - : Repräsentiert die geraden Zeilen einer HTML-Tabelle: 2, 4, 6, usw.
- `:nth-child(7)`
  - : Repräsentiert das siebte Element.
- `:nth-child(5n)`
  - : Repräsentiert Elemente **5** \[=5×1], **10** \[=5×2], **15** \[=5×3], **usw.** Das erste durch die Formel zurückgegebene Ergebnis ist **0** \[=5x0], was zu keiner Übereinstimmung führt, da die Elemente ab 1 indiziert werden, während `n` bei 0 beginnt. Dies mag zunächst merkwürdig erscheinen, macht aber mehr Sinn, wenn der `B`-Teil der Formel `>0` ist, wie im nächsten Beispiel.
- `:nth-child(n+7)`
  - : Repräsentiert das siebte und alle folgenden Elemente: **7** \[=0+7], **8** \[=1+7], **9** \[=2+7], **usw.**
- `:nth-child(3n+4)`
  - : Repräsentiert Elemente **4** \[=(3×0)+4], **7** \[=(3×1)+4], **10** \[=(3×2)+4], **13** \[=(3×3)+4], **usw.**
- `:nth-child(-n+3)`
  - : Repräsentiert die ersten drei Elemente. \[=-0+3, -1+3, -2+3]
- `p:nth-child(n)`
  - : Repräsentiert jedes `<p>`-Element in einer Gruppe von Geschwistern. Dies wählt dieselben Elemente aus wie ein einfacher `p`-Selektor (obwohl mit einer höheren Spezifität).
- `p:nth-child(1)` oder `p:nth-child(0n+1)`
  - : Repräsentiert jedes `<p>`, das das erste Element in einer Geschwistergruppe ist. Dies entspricht dem {{cssxref(":first-child")}}-Selektor (und hat dieselbe Spezifität).
- `p:nth-child(n+8):nth-child(-n+15)`
  - : Repräsentiert das achte bis fünfzehnte `<p>`-Element einer Gruppe von Geschwistern.

### Detailliertes Beispiel

#### HTML

```html
<h3>
  <code>span:nth-child(2n+1)</code>, WITHOUT an <code>&lt;em&gt;</code> among
  the child elements.
</h3>
<p>Children 1, 3, 5, and 7 are selected.</p>
<div class="first">
  <span>Span 1!</span>
  <span>Span 2</span>
  <span>Span 3!</span>
  <span>Span 4</span>
  <span>Span 5!</span>
  <span>Span 6</span>
  <span>Span 7!</span>
</div>

<br />

<h3>
  <code>span:nth-child(2n+1)</code>, WITH an <code>&lt;em&gt;</code> among the
  child elements.
</h3>
<p>
  Children 1, 5, and 7 are selected.<br />
  3 is used in the counting because it is a child, but it isn't selected because
  it isn't a <code>&lt;span&gt;</code>.
</p>
<div class="second">
  <span>Span!</span>
  <span>Span</span>
  <em>This is an `em`.</em>
  <span>Span</span>
  <span>Span!</span>
  <span>Span</span>
  <span>Span!</span>
  <span>Span</span>
</div>

<br />

<h3>
  <code>span:nth-of-type(2n+1)</code>, WITH an <code>&lt;em&gt;</code> among the
  child elements.
</h3>
<p>
  Children 1, 4, 6, and 8 are selected.<br />
  3 isn't used in the counting or selected because it is an
  <code>&lt;em&gt;</code>, not a <code>&lt;span&gt;</code>, and
  <code>nth-of-type</code> only selects children of that type. The
  <code>&lt;em&gt;</code> is completely skipped over and ignored.
</p>
<div class="third">
  <span>Span!</span>
  <span>Span</span>
  <em>This is an `em`.</em>
  <span>Span!</span>
  <span>Span</span>
  <span>Span!</span>
  <span>Span</span>
  <span>Span!</span>
</div>
```

#### CSS

```css hidden
* {
  font-family: sans-serif;
}

span,
div em {
  padding: 5px;
  border: 1px solid tomato;
  display: inline-block;
  margin-bottom: 3px;
}
```

```css
.first span:nth-child(2n + 1),
.second span:nth-child(2n + 1),
.third span:nth-of-type(2n + 1) {
  background-color: tomato;
}
```

#### Ergebnis

{{EmbedLiveSample('Detailed_example', 550, 550)}}

### Verwendung von 'of &lt;selector&gt;'

In diesem Beispiel gibt es eine ungeordnete Liste von Namen, einige davon sind mit **noted** markiert, indem `class="noted"` verwendet wird. Diese sind mit einem dicken unteren Rand hervorgehoben.

#### HTML

```html
<ul>
  <li class="noted">Diego</li>
  <li>Shilpa</li>
  <li class="noted">Caterina</li>
  <li>Jayla</li>
  <li>Tyrone</li>
  <li>Ricardo</li>
  <li class="noted">Gila</li>
  <li>Sienna</li>
  <li>Titilayo</li>
  <li class="noted">Lexi</li>
  <li>Aylin</li>
  <li>Leo</li>
  <li>Leyla</li>
  <li class="noted">Bruce</li>
  <li>Aisha</li>
  <li>Veronica</li>
  <li class="noted">Kyouko</li>
  <li>Shireen</li>
  <li>Tanya</li>
  <li class="noted">Marlene</li>
</ul>
```

#### CSS

```css hidden
* {
  font-family: sans-serif;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  font-size: 1.2rem;
  padding-left: 0;
}

li {
  margin: 0.125rem;
  padding: 0.25rem;
}

li {
  border: 1px solid tomato;
}

.noted {
  border-bottom: 5px solid tomato;
}
```

Im folgenden CSS zielen wir auf die **geraden** Listenelemente ab, die mit `class="noted"` markiert sind.

```css
li:nth-child(even of .noted) {
  background-color: tomato;
  border-bottom-color: seagreen;
}
```

#### Ergebnis

Elemente mit `class="noted"` haben einen dicken unteren Rand und die Elemente 3, 10 und 17 haben einen soliden Hintergrund, da sie die _geraden_ Listenelemente mit `class="noted"` sind.

{{EmbedLiveSample('of_selector_syntax_example', 550, 120)}}

### of-Selektor-Syntax vs Selektor-nth-child

In diesem Beispiel gibt es zwei ungeordnete Listen von Namen. Die erste Liste zeigt die Wirkung von `li:nth-child(-n + 3 of .noted)` und die zweite Liste zeigt die Wirkung von `li.noted:nth-child(-n + 3)`.

#### HTML

```html
<ul class="one">
  <li class="noted">Diego</li>
  <li>Shilpa</li>
  <li class="noted">Caterina</li>
  <li>Jayla</li>
  <li>Tyrone</li>
  <li>Ricardo</li>
  <li class="noted">Gila</li>
  <li>Sienna</li>
  <li>Titilayo</li>
  <li class="noted">Lexi</li>
</ul>
<ul class="two">
  <li class="noted">Diego</li>
  <li>Shilpa</li>
  <li class="noted">Caterina</li>
  <li>Jayla</li>
  <li>Tyrone</li>
  <li>Ricardo</li>
  <li class="noted">Gila</li>
  <li>Sienna</li>
  <li>Titilayo</li>
  <li class="noted">Lexi</li>
</ul>
```

#### CSS

```css hidden
* {
  font-family: sans-serif;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  font-size: 1.2rem;
  padding-left: 0;
}

li {
  margin: 0.125rem;
  padding: 0.25rem;
}

li {
  border: 1px solid tomato;
}

.noted {
  border-bottom: 5px solid tomato;
}
```

```css
ul.one > li:nth-child(-n + 3 of .noted) {
  background-color: tomato;
  border-bottom-color: seagreen;
}

ul.two > li.noted:nth-child(-n + 3) {
  background-color: tomato;
  border-bottom-color: seagreen;
}
```

#### Ergebnis

Im ersten Fall wird ein Stil auf die ersten drei Listenelemente mit `class="noted"` angewendet, unabhängig davon, ob sie die ersten drei Elemente in der Liste sind oder nicht.

Im zweiten Fall wird ein Stil auf die Elemente mit `class="noted"` angewendet, wenn sie sich innerhalb der ersten drei Elemente in der Liste befinden.

{{EmbedLiveSample('of_selector_syntax_vs_selector_nth-child', 550, 150)}}

### Verwendung des Selektors zur Korrektur von gestreiften Tabellen

Eine übliche Praxis bei Tabellen ist die Verwendung von _Zebra-Streifen_, wobei abwechselnd helle und dunkle Hintergrundfarben für Zeilen verwendet werden, um Tabellen lesbarer und zugänglicher zu machen. Wenn eine Zeile ausgeblendet ist, erscheinen die Streifen zusammengeführt und ändern den beabsichtigten Effekt. In diesem Beispiel sehen Sie zwei Tabellen mit einer `hidden`-Zeile. Die zweite Tabelle behandelt ausgeblendete Zeilen unter Verwendung von `of :not([hidden])`.

#### HTML

```html-nolint hidden
<div class="wrapper">
```

```html-nolint
<table class="broken">
  <thead>
    <tr><th>Name</th><th>Age</th><th>Country</th></tr>
  </thead>
  <tbody>
    <tr><td>Mamitiana</td><td>23</td><td>Madagascar</td></tr>
    <tr><td>Yuki</td><td>48</td><td>Japan</td></tr>
    <tr hidden><td>Tlayolotl</td><td>36</td><td>Mexico</td></tr>
    <tr><td>Adilah</td><td>27</td><td>Morocco</td></tr>
    <tr><td>Vieno</td><td>55</td><td>Finland</td></tr>
    <tr><td>Ricardo</td><td>66</td><td>Brazil</td></tr>
  </tbody>
</table>
<table class="fixed">
  <thead>
    <tr><th>Name</th><th>Age</th><th>Country</th></tr>
  </thead>
  <tbody>
    <tr><td>Mamitiana</td><td>23</td><td>Madagascar</td></tr>
    <tr><td>Yuki</td><td>48</td><td>Japan</td></tr>
    <tr hidden><td>Tlayolotl</td><td>36</td><td>Mexico</td></tr>
    <tr><td>Adilah</td><td>27</td><td>Morocco</td></tr>
    <tr><td>Vieno</td><td>55</td><td>Finland</td></tr>
    <tr><td>Ricardo</td><td>66</td><td>Brazil</td></tr>
  </tbody>
</table>
```

```html hidden
</div>
```

#### CSS

```css hidden
.wrapper {
  display: flex;
  justify-content: space-around;
}
td {
  padding: 0.125rem 0.5rem;
}
```

```css
.broken > tbody > tr:nth-child(even) {
  background-color: silver;
}
```

```css
.fixed > tbody > tr:nth-child(even of :not([hidden])) {
  background-color: silver;
}
```

#### Ergebnis

In der ersten Tabelle wird nur `:nth-child(even)` verwendet, die dritte Zeile hat das `hidden`-Attribut erhalten. Daher ist die dritte Zeile nicht sichtbar, und die 2. & 4. Zeilen werden als gerade gezählt, was technisch korrekt ist, aber visuell nicht der Fall ist.

In der zweiten Tabelle wird die _of-Syntax_ verwendet, um nur die `tr`s anzusprechen, die **nicht** ausgeblendet sind, unter Verwendung von `:nth-child(even of :not([hidden]))`.

{{EmbedLiveSample('Using_of_selector_to_fix_striped_tables', 550, 180)}}

### Styling einer Tabellenspalte

Um eine Tabellenspalte zu stylen, können Sie den Stil nicht auf das {{HTMLElement("col")}}-Element anwenden, da die Tabellenzellen keine Kinder davon sind (wie Sie es mit dem Zeilenelement, {{HTMLElement("tr")}}, tun können). Pseudo-Klassen wie `:nth-child()` sind nützlich, um die Zellen der Spalte auszuwählen.

In diesem Beispiel haben wir für jede der Spalten unterschiedliche Stile festgelegt.

#### HTML

```html-nolint
<table>
<caption>Student roster</caption>
<colgroup>
  <col/>
  <col/>
  <col/>
</colgroup>
  <thead>
    <tr><th>Name</th><th>Age</th><th>Country</th></tr>
  </thead>
  <tbody>
    <tr><td>Mamitiana</td><td>23</td><td>Madagascar</td></tr>
    <tr><td>Yuki</td><td>48</td><td>Japan</td></tr>
  </tbody>
</table>

```

#### CSS

```css
td {
  padding: 0.125rem 0.5rem;
  height: 3rem;
  border: 1px solid black;
}

tr :nth-child(1) {
  text-align: left;
  vertical-align: bottom;
  background-color: silver;
}

tbody tr :nth-child(2) {
  text-align: center;
  vertical-align: middle;
}

tbody tr :nth-child(3) {
  text-align: right;
  vertical-align: top;
  background-color: tomato;
}
```

#### Ergebnis

{{EmbedLiveSample('Styling_a_table_column', 100, 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ Cssxref(":nth-of-type", ":nth-of-type()") }}
- {{ Cssxref(":nth-last-child", ":nth-last-child()") }}
- {{ Cssxref(":has", ":has()") }}: Pseudoklasse zur Auswahl des Elternelements
- [Baum-strukturelle Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo-classes)
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
