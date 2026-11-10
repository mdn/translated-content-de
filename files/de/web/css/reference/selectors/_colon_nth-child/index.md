---
title: CSS-Pseudoklasse `:nth-child()`
short-title: :nth-child()
slug: Web/CSS/Reference/Selectors/:nth-child
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Die **`:nth-child()`**-[CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) wählt Elemente anhand ihrer Position in der Liste der Kindelemente ihres Elternelements aus. Mit anderen Worten: Der Selektor `:nth-child()` wählt Kindelemente nach ihrer Position unter allen Geschwisterelementen innerhalb eines Elternelements aus.

{{InteractiveExample("CSS Demo: :nth-child", "tabbed-shorter")}}

```css interactive-example
p {
  font-weight: bold;
}

li:nth-child(-n + 3) {
  border: 2px solid orange;
  margin-bottom: 1px;
}

li:nth-child(even) {
  background-color: lightyellow;
}
```

```html interactive-example
<p>Track &amp; field champions:</p>
<ul>
  <li>Adhemar da Silva</li>
  <li>Wang Junxia</li>
  <li>Wilma Rudolph</li>
  <li>Babe Didrikson-Zaharias</li>
  <li>Betty Cuthbert</li>
  <li>Fanny Blankers-Koen</li>
  <li>Florence Griffith-Joyner</li>
  <li>Irena Szewinska</li>
  <li>Jackie Joyner-Kersee</li>
  <li>Shirley Strickland</li>
  <li>Carl Lewis</li>
  <li>Emil Zatopek</li>
  <li>Haile Gebrselassie</li>
  <li>Jesse Owens</li>
  <li>Jim Thorpe</li>
  <li>Paavo Nurmi</li>
  <li>Sergei Bubka</li>
  <li>Usain Bolt</li>
</ul>
```

> [!NOTE]
> In der Syntax `element:nth-child()` werden Geschwisterkinder jedes Elementtyps mitgezählt. Eine Übereinstimmung liegt jedoch nur vor, wenn das Element _an dieser Position_ auch den übrigen Bestandteilen des Selektors entspricht.

## Syntax

```css-nolint
:nth-child([ <An+B> | even | odd ] [of <complex-selector-list>]?) {
  /* ... */
}
```

### Parameter

`:nth-child()` nimmt ein einzelnes Argument entgegen, das ein Muster für die Positionen passender Elemente in einer Liste von Geschwistern beschreibt. Die Zählung der Elemente beginnt bei 1.

#### Schlüsselwortwerte

- `odd`
  - : Steht für Elemente an ungeraden Positionen unter Geschwistern: 1, 3, 5 usw.
- `even`
  - : Steht für Elemente an geraden Positionen unter Geschwistern: 2, 4, 6 usw.

#### Funktionale Notation

- `<An+B>`
  - : Steht für Elemente, deren Position unter Geschwistern dem Muster `An+B` entspricht, wobei `n` jede nicht negative ganze Zahl ab 0 sein kann. Dabei gilt:
    - `A` ist eine ganzzahlige Schrittweite,
    - `B` ist ein ganzzahliger Versatz,
    - `n` durchläuft alle nicht negativen ganzen Zahlen, beginnend bei 0.

    Dies lässt sich als das `An+B`-te Element einer Liste lesen. `A` und `B` müssen jeweils einen {{cssxref("&lt;integer&gt;")}}-Wert haben.

#### Die Syntax `of <selector>`

Mit einem Selektorargument lässt sich das **n-te** Element auswählen, das diesem Selektor entspricht. Der folgende Selektor wählt beispielsweise die ersten drei Listenelemente aus, bei denen `class="important"` gesetzt ist.

```css
:nth-child(-n + 3 of li.important) {
}
```

Das unterscheidet sich davon, den Selektor außerhalb der Funktion zu platzieren, etwa so:

```css
li.important:nth-child(-n + 3) {
}
```

Dieser Selektor wählt Listenelemente aus, wenn sie zu den ersten drei Kindelementen gehören und dem Selektor `li.important` entsprechen.

## Beispiele

### Beispielselektoren

- `tr:nth-child(odd)` oder `tr:nth-child(2n+1)`
  - : Steht für die ungeraden Zeilen einer HTML-Tabelle: 1, 3, 5 usw.
- `tr:nth-child(even)` oder `tr:nth-child(2n)`
  - : Steht für die geraden Zeilen einer HTML-Tabelle: 2, 4, 6 usw.
- `:nth-child(7)`
  - : Steht für das siebte Element.
- `:nth-child(5n)`
  - : Steht für die Elemente **5** \[=5×1], **10** \[=5×2], **15** \[=5×3] **usw.** Das erste Ergebnis der Formel ist **0** \[=5×0]. Es ergibt keine Übereinstimmung, da die Zählung der Elemente bei 1 beginnt, `n` jedoch bei 0. Das mag zunächst seltsam erscheinen, ist aber leichter nachvollziehbar, wenn der `B`-Teil der Formel `>0` ist, wie im nächsten Beispiel.
- `:nth-child(n+7)`
  - : Steht für das siebte und alle folgenden Elemente: **7** \[=0+7], **8** \[=1+7], **9** \[=2+7] **usw.**
- `:nth-child(3n+4)`
  - : Steht für die Elemente **4** \[=(3×0)+4], **7** \[=(3×1)+4], **10** \[=(3×2)+4], **13** \[=(3×3)+4] **usw.**
- `:nth-child(-n+3)`
  - : Steht für die ersten drei Elemente. \[=-0+3, -1+3, -2+3]
- `p:nth-child(n)`
  - : Steht für jedes `<p>`-Element in einer Gruppe von Geschwistern. Damit werden dieselben Elemente wie mit dem einfachen Selektor `p` ausgewählt, allerdings mit höherer Spezifität.
- `p:nth-child(1)` oder `p:nth-child(0n+1)`
  - : Steht für jedes `<p>`-Element, das das erste Element in einer Gruppe von Geschwistern ist. Dies entspricht dem Selektor {{cssxref(":first-child")}} und hat dieselbe Spezifität.
- `p:nth-child(n+8):nth-child(-n+15)`
  - : Steht für das achte bis fünfzehnte `<p>`-Element in einer Gruppe von Geschwistern.

### Ausführliches Beispiel

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

### Verwendung von „of &lt;selector&gt;“

In diesem Beispiel gibt es eine ungeordnete Liste mit Namen. Einige davon sind mit `class="noted"` als **hervorgehoben** markiert. Sie sind durch einen dicken unteren Rahmen gekennzeichnet.

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

Mit dem folgenden CSS wählen wir die **geraden** Listenelemente aus, die mit `class="noted"` markiert sind.

```css
li:nth-child(even of .noted) {
  background-color: tomato;
  border-bottom-color: seagreen;
}
```

#### Ergebnis

Elemente mit `class="noted"` haben einen dicken unteren Rahmen. Die Elemente 3, 10 und 17 haben einen einfarbigen Hintergrund, da sie unter den Elementen mit `class="noted"` an einer _geraden_ Position stehen.

{{EmbedLiveSample('using_of_selector', 550, 120)}}

### `of`-Selektorsyntax im Vergleich zu einem Selektor außerhalb von `nth-child`

In diesem Beispiel gibt es zwei ungeordnete Listen mit Namen. Die erste Liste zeigt die Wirkung von `li:nth-child(-n + 3 of .noted)`, die zweite die Wirkung von `li.noted:nth-child(-n + 3)`.

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

Im ersten Fall werden die ersten drei Listenelemente mit `class="noted"` formatiert, unabhängig davon, ob sie zu den ersten drei Elementen der Liste gehören.

Im zweiten Fall werden Elemente mit `class="noted"` nur dann formatiert, wenn sie zu den ersten drei Elementen der Liste gehören.

{{EmbedLiveSample('of_selector_syntax_vs_selector_nth-child', 550, 150)}}

### Verwendung von `of` für Tabellen mit abwechselnden Zeilenfarben

Eine gängige Gestaltung für Tabellen sind _Zebrastreifen_: Zeilen erhalten abwechselnd helle und dunkle Hintergrundfarben. Dadurch werden Tabellen leichter lesbar und zugänglicher. Wenn eine Zeile ausgeblendet ist, erscheinen die Streifen unmittelbar aufeinanderfolgender sichtbarer Zeilen gleichfarbig, wodurch der gewünschte Effekt verloren geht. In diesem Beispiel sehen Sie zwei Tabellen mit einer `hidden`-Zeile. Die zweite Tabelle berücksichtigt ausgeblendete Zeilen mithilfe von `of :not([hidden])`.

#### HTML

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

#### CSS

```css hidden
body {
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

In der ersten Tabelle wird nur `:nth-child(even)` verwendet; die dritte Zeile hat das Attribut `hidden`. Sie ist deshalb nicht sichtbar. Die zweite und vierte Zeile werden weiterhin als gerade Positionen gezählt. Technisch ist das korrekt, optisch entsteht jedoch nicht der gewünschte Wechsel.

In der zweiten Tabelle wird mit der _`of`-Syntax_ `:nth-child(even of :not([hidden]))` verwendet, um nur die `tr`-Elemente zu berücksichtigen, die **nicht** ausgeblendet sind.

{{EmbedLiveSample('Using_of_selector_to_fix_striped_tables', 550, 180)}}

### Eine Tabellenspalte formatieren

Um eine Tabellenspalte zu formatieren, können Sie die Formatierung nicht auf das {{HTMLElement("col")}}-Element anwenden, da die Tabellenzellen keine Kindelemente davon sind. Bei einem Zeilenelement wie {{HTMLElement("tr")}} ist das hingegen möglich. Pseudoklassen wie `:nth-child()` helfen dabei, die Zellen einer Spalte auszuwählen.

In diesem Beispiel legen wir für jede Spalte unterschiedliche Formatierungen fest.

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
- {{ Cssxref(":has", ":has()") }}: Pseudoklasse zur Auswahl eines Elternelements
- [Baumstruktur-Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#tree-structural_pseudo-classes)
- Modul [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors)
