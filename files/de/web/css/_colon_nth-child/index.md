---
title: ":nth-child()"
slug: Web/CSS/:nth-child
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:nth-child()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wählt Elemente basierend auf den Indizes der Elemente in der Kinderliste ihrer Eltern aus. Anders ausgedrückt: Der `:nth-child()`-Selektor wählt Kindelemente entsprechend ihrer Position unter allen Geschwisterelementen innerhalb eines Elternelements aus.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-nth-child.html", "tabbed-shorter")}}

> [!NOTE]
> In der Syntax `element:nth-child()` umfasst die Zählung der Kinder Geschwisterkinder jeglichen Elementtyps; aber es wird nur dann als Treffer betrachtet, wenn das Element an dieser Kinderposition den anderen Komponenten des Selektors entspricht.

## Syntax

`:nth-child()` nimmt ein einzelnes Argument an, das ein Muster zum Abgleichen von Elementindizes in einer Liste von Geschwistern beschreibt. Elementindizes beginnen bei 1.

```css-nolint
:nth-child(<nth> [of <complex-selector-list>]?) {
  /* ... */
}
```

### Schlüsselwortwerte

- `odd`
  - : Repräsentiert Elemente, deren numerische Position in einer Serie von Geschwistern ungerade ist: 1, 3, 5, usw.
- `even`
  - : Repräsentiert Elemente, deren numerische Position in einer Serie von Geschwistern gerade ist: 2, 4, 6, usw.

### Funktionale Notation

- `<An+B>`

  - : Repräsentiert Elemente, deren numerische Position in einer Serie von Geschwistern dem Muster `An+B` entspricht, für jeden positiven ganzzahligen oder Nullwert von `n`, wobei:

    - `A` eine ganzzahlige Schrittgröße ist,
    - `B` ein ganzzahliger Offset ist,
    - `n` alle nicht-negativen ganzen Zahlen sind, beginnend bei 0.

    Es kann als `An+B`-tes Element einer Liste gelesen werden. Sowohl `A` als auch `B` müssen {{cssxref("&lt;integer&gt;")}}-Werte haben.

### Die `of <selector>`-Syntax

Durch das Übergeben eines Selektor-Arguments können wir das **nth**-Element auswählen, das diesem Selektor entspricht. Zum Beispiel entspricht der folgende Selektor den ersten drei Listenelementen, die `class="important"` gesetzt haben.

```css
:nth-child(-n + 3 of li.important) {
}
```

Dies unterscheidet sich vom Verschieben des Selektors außerhalb der Funktion, wie zum Beispiel:

```css
li.important:nth-child(-n + 3) {
}
```

Dieser Selektor wählt Listenelemente aus, wenn sie unter den ersten drei Kindern sind und dem Selektor `li.important` entsprechen.

## Beispiele

### Beispiel-Selektoren

- `tr:nth-child(odd)` oder `tr:nth-child(2n+1)`
  - : Repräsentiert die ungeraden Zeilen einer HTML-Tabelle: 1, 3, 5, usw.
- `tr:nth-child(even)` oder `tr:nth-child(2n)`
  - : Repräsentiert die geraden Zeilen einer HTML-Tabelle: 2, 4, 6, usw.
- `:nth-child(7)`
  - : Repräsentiert das siebte Element.
- `:nth-child(5n)`
  - : Repräsentiert Elemente **5** \[=5×1], **10** \[=5×2], **15** \[=5×3], **usw.** Das erste, das als Ergebnis der Formel zurückgegeben wird, ist **0** \[=5x0], was zu keinem Treffer führt, da die Elemente ab 1 indiziert sind, während `n` ab 0 startet. Das mag anfangs seltsam erscheinen, macht aber mehr Sinn, wenn der `B`-Teil der Formel `>0` ist, wie im nächsten Beispiel.
- `:nth-child(n+7)`
  - : Repräsentiert das siebte und alle folgenden Elemente: **7** \[=0+7], **8** \[=1+7], **9** \[=2+7], **usw.**
- `:nth-child(3n+4)`
  - : Repräsentiert Elemente **4** \[=(3×0)+4], **7** \[=(3×1)+4], **10** \[=(3×2)+4], **13** \[=(3×3)+4], **usw.**
- `:nth-child(-n+3)`
  - : Repräsentiert die ersten drei Elemente. \[=-0+3, -1+3, -2+3]
- `p:nth-child(n)`
  - : Repräsentiert jedes `<p>`-Element in einer Gruppe von Geschwistern. Dies wählt die gleichen Elemente wie ein einfacher `p`-Selektor aus (wenn auch mit einer höheren Spezifität).
- `p:nth-child(1)` oder `p:nth-child(0n+1)`
  - : Repräsentiert jedes `<p>`, das das erste Element in einer Gruppe von Geschwistern ist. Dies ist dasselbe wie der {{cssxref(":first-child")}}-Selektor (und hat die gleiche Spezifität).
- `p:nth-child(n+8):nth-child(-n+15)`
  - : Repräsentiert das achte bis fünfzehnte `<p>`-Element einer Gruppe von Geschwistern.

### Detailliertes Beispiel

#### HTML

```html
<h3>
  <code>span:nth-child(2n+1)</code>, OHNE ein <code>&lt;em&gt;</code> unter den
  Kindelementen.
</h3>
<p>Die Kinder 1, 3, 5 und 7 werden ausgewählt.</p>
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
  <code>span:nth-child(2n+1)</code>, MIT einem <code>&lt;em&gt;</code> unter den
  Kindelementen.
</h3>
<p>
  Die Kinder 1, 5 und 7 werden ausgewählt.<br />
  3 wird bei der Zählung verwendet, da es ein Kind ist, aber es wird nicht
  ausgewählt, da es kein <code>&lt;span&gt;</code> ist.
</p>
<div class="second">
  <span>Span!</span>
  <span>Span</span>
  <em>Dies ist ein `em`.</em>
  <span>Span</span>
  <span>Span!</span>
  <span>Span</span>
  <span>Span!</span>
  <span>Span</span>
</div>

<br />

<h3>
  <code>span:nth-of-type(2n+1)</code>, MIT einem <code>&lt;em&gt;</code> unter
  den Kindelementen.
</h3>
<p>
  Die Kinder 1, 4, 6 und 8 werden ausgewählt.<br />
  3 wird weder bei der Zählung verwendet noch ausgewählt, weil es ein
  <code>&lt;em&gt;</code> ist und kein <code>&lt;span&gt;</code>, und
  <code>nth-of-type</code> wählt nur Kinder dieses Typs aus. Das
  <code>&lt;em&gt;</code> wird komplett übersprungen und ignoriert.
</p>
<div class="third">
  <span>Span!</span>
  <span>Span</span>
  <em>Dies ist ein `em`.</em>
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

### Nutzung von 'of &lt;selector&gt;'

In diesem Beispiel gibt es eine ungeordnete Liste von Namen, einige von ihnen wurden als **notiert** mit `class="noted"` markiert. Diese wurden mit einem dicken unteren Rand hervorgehoben.

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

Elemente mit `class="noted"` haben einen dicken unteren Rand und Elemente 3, 10 und 17 haben einen durchgehenden Hintergrund, da sie die _geraden_ Listenelemente mit `class="noted"` sind.

{{EmbedLiveSample('of_selector_syntax_example', 550, 120)}}

### of-Selektor-Syntax vs. Selektor-nth-child

In diesem Beispiel gibt es zwei ungeordnete Listen von Namen. Die erste Liste zeigt den Effekt von `li:nth-child(-n + 3 of .noted)` und die zweite Liste zeigt den Effekt von `li.noted:nth-child(-n + 3)`.

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

Im zweiten Fall wird ein Stil auf die Elemente mit `class="noted"` angewendet, wenn sie innerhalb der ersten 3 Elemente in der Liste sind.

{{EmbedLiveSample('of_selector_syntax_vs_selector_nth-child', 550, 150)}}

### Nutzung des Selektors zur Verbesserung von gestreiften Tabellen

Eine gängige Praxis für Tabellen ist die Verwendung von _Zebra-Streifen_, die zwischen hellen und dunklen Hintergrundfarben für Zeilen wechseln, was Tabellen leichter lesbar und zugänglicher macht. Wenn eine Zeile verborgen ist, scheinen die Streifen zusammengeführt und der gewünschte Effekt wird verändert. In diesem Beispiel können Sie zwei Tabellen mit einer `verborgenen` Zeile sehen. Die zweite Tabelle behandelt verborgene Zeilen mit `of :not([hidden])`.

#### HTML

```html-nolint hidden
<div class="wrapper">
```

```html-nolint
<table class="broken">
  <thead>
    <tr><th>Name</th><th>Alter</th><th>Land</th></tr>
  </thead>
  <tbody>
    <tr><td>Mamitiana</td><td>23</td><td>Madagaskar</td></tr>
    <tr><td>Yuki</td><td>48</td><td>Japan</td></tr>
    <tr hidden><td>Tlayolotl</td><td>36</td><td>Mexiko</td></tr>
    <tr><td>Adilah</td><td>27</td><td>Marokko</td></tr>
    <tr><td>Vieno</td><td>55</td><td>Finnland</td></tr>
    <tr><td>Ricardo</td><td>66</td><td>Brasilien</td></tr>
  </tbody>
</table>
<table class="fixed">
  <thead>
    <tr><th>Name</th><th>Alter</th><th>Land</th></tr>
  </thead>
  <tbody>
    <tr><td>Mamitiana</td><td>23</td><td>Madagaskar</td></tr>
    <tr><td>Yuki</td><td>48</td><td>Japan</td></tr>
    <tr hidden><td>Tlayolotl</td><td>36</td><td>Mexiko</td></tr>
    <tr><td>Adilah</td><td>27</td><td>Marokko</td></tr>
    <tr><td>Vieno</td><td>55</td><td>Finnland</td></tr>
    <tr><td>Ricardo</td><td>66</td><td>Brasilien</td></tr>
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

In der ersten Tabelle, die nur `:nth-child(even)` verwendet, hat die dritte Zeile das Attribut `hidden` angewendet. In diesem Fall ist die 3. Zeile nicht sichtbar und die 2. und 4. Zeilen werden als gerade gezählt, was sie technisch sind, aber visuell nicht.

In der zweiten Tabelle wird die _of-Syntax_ verwendet, um nur die `tr`s anzusprechen, die **nicht** verborgen sind, unter Verwendung von `:nth-child(even of :not([hidden]))`.

{{EmbedLiveSample('Using_of_selector_to_fix_striped_tables', 550, 180)}}

### Eine Tabellenspalte stilisieren

Um eine Tabellenspalte zu stilisieren, können Sie den Stil nicht auf das {{HTMLElement("col")}}-Element anwenden, da Tabellenspalten keine Kinder desselben sind (wie beim Zeilenelement, {{HTMLElement("tr")}}). Pseudoklassen wie `:nth-child()` sind praktisch, um die Spaltenzellen auszuwählen.

In diesem Beispiel setzen wir verschiedene Stile für jede der Spalten.

#### HTML

```html-nolint
<table>
<caption>Schülerverzeichnis</caption>
<colgroup>
  <col/>
  <col/>
  <col/>
</colgroup>
  <thead>
    <tr><th>Name</th><th>Alter</th><th>Land</th></tr>
  </thead>
  <tbody>
    <tr><td>Mamitiana</td><td>23</td><td>Madagaskar</td></tr>
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
- {{ Cssxref(":has", ":has()") }}: Pseudoklasse für die Auswahl von Elternelementen
- [Baum-strukturelle Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo-classes)
- [CSS Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
