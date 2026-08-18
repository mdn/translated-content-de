---
title: "`column-rule-break` CSS property"
short-title: column-rule-break
slug: Web/CSS/Reference/Properties/column-rule-break
l10n:
  sourceCommit: 65de0b20f182edef16b58da2df80112b39787a04
---

{{SeeCompatTable}}

Die **`column-rule-break`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Verhalten für das Aufteilen von Spaltenlinien in Segmente fest, wo immer Spaltenlinien Zeilenlücken schneiden.

{{InteractiveExample("CSS Demo: rule")}}

```css interactive-example-choice
column-rule-break: none;
```

```css interactive-example-choice
column-rule-break: normal;
```

```css interactive-example-choice
column-rule-break: intersection;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">
    <i>A</i>
    <i>B</i>
    <i>C</i>
    <i>D</i>
    <i>E</i>
    <i>F</i>
    <i>G</i>
    <i>H</i>
    <i>I</i>
    <i>J</i>
    <i>K</i>
    <i>L</i>
    <i>M</i>
    <i>N</i>
    <i>O</i>
    <i>P</i>
    <i>Q</i>
    <i>R</i>
    <i>S</i>
    <i>T</i>
    <i>U</i>
    <i>V</i>
    <i>W</i>
    <i>X</i>
    <i>Y</i>
    <i>Z</i>
  </div>
</section>
```

```css interactive-example
#example-element {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-rule: solid thick orange;
  row-rule: solid thick lavender;
  gap: 15px;
  rule-overlap: column-over-row;
}
#example-element i {
  padding: 5px;
}
```

## Syntax

```css
/* Keywords */
column-rule-break: none;
column-rule-break: normal;
column-rule-break: intersection;

/* Global values */
column-rule-break: inherit;
column-rule-break: initial;
column-rule-break: revert;
column-rule-break: revert-layer;
column-rule-break: unset;
```

### Werte

Diese Eigenschaft wird als ein einzelnes Schlüsselwort aus der folgenden Liste angegeben:

- `none`
  - : Es gibt keine Unterbrechungen in Spaltenlinien, wenn sie Zeilenlücken schneiden; stattdessen wird eine kontinuierliche Spaltenlinie über die gesamte Höhe des Containers gemalt, von Rand zu Rand.
- `normal`
  - : In Raster- und Flex-Containern verhält sich wie `none`. In Multi-Col verhält sich wie `intersection`. Dies ist der Standardwert.
- `intersection`
  - : Spaltenlinien brechen immer, wenn sie Zeilenlücken schneiden, wobei Spaltenlinien-Segmente zwischen Container- und Lückenkanten beginnen und enden.

## Beschreibung

Die Eigenschaft `column-rule-break` gibt an, ob Spaltenlinien in Segmente unterteilt werden sollen, wenn sie Zeilenlücken schneiden.

Spaltenlinien werden in einer Spaltenlücke als ein oder mehrere Segmente gemalt, wobei Segmente zwischen benachbarten Rasterelementen in getrennten Spalten, zwischen Flex-Elementen oder Flex-Linien in Flex-Layouts abhängig von der `flex-direction` oder zwischen Spalten in Multi-Col-Layouts auftreten.

Die Eigenschaft `column-rule-break` bestimmt nur, ob die Unterbrechung auftritt. Standardmäßig ist die Unterbrechung zwischen Spaltenlinien-Segmenten die Höhe der Zeilenlücke, da jedes Segment an der Kante der Lücke (oder der Kante des Containers) beginnt und endet. Wenn die Zeilenlücke `0` ist, könnte diese Unterbrechung nicht sichtbar sein. Die Endpositionen können mit den {{cssxref("column-rule-inset")}} Eigenschaften gesteuert werden.

Wenn `column-rule-break` auf `none` gesetzt ist, gibt es keine Unterbrechungen. In diesem Fall ist die Spaltenlinie kontinuierlich und alle `column-rule-inset` Werte beeinflussen nur die linken und rechten Kanten der Spaltenlinie an der Kante des Containers. Wenn es Unterbrechungen gibt, beeinflussen die `column-rule-inset` Eigenschaften den Anfang und das Ende jedes Spaltenlinien-Segments.

Die Eigenschaft `column-rule-break`, zusammen mit der {{cssxref("row-rule-break")}} Eigenschaft, kann mit der {{cssxref("rule-break")}} Kurzschreibweise festgelegt werden.

Ob eine Spaltenlinie standardmäßig aus einem einzigen kontinuierlichen Segment besteht oder aus Segmenten, die bei der Kreuzung von Zeilenlücken unterbrochen werden, hängt vom Container-Typ ab.

### Raster-Container

In Raster-Containern setzen Spaltenlinien-Segmente standardmäßig durch Zeilenlücken-Kreuzungen fort, was `column-rule-break: none` entspricht. Wenn `column-rule-break: intersection` gesetzt ist, wird erzwungen, dass die Segmente bei jeder Zeilenlücke brechen, die sie sonst überschreiten würden.

```html hidden
<h1>Default rule breaks in grid</h1>
<div class="grid">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
<p>
  <label
    ><input type="checkbox" /> Set
    <code>column-rule-break: intersection</code></label
  >
</p>
```

```css hidden
body {
  font-family: sans-serif;
  text-align: center;
}
h1 {
  font-size: 1.25em;
}
h2 {
  font-size: 1em;
}

:has(:checked) .grid {
  column-rule-break: intersection;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  rule: 5px solid blue;
  row-rule-color: lightblue;
  rule-overlap: column-over-row;
  width: 100%;
}

.grid > div {
  border: 1px solid green;
  background-color: lime;
  height: 30px;
}
```

{{EmbedLiveSample("Raster-Container", "", "240")}}

Standardmäßig gibt es keine Unterbrechungen in Spaltenlinien. Aktivieren Sie das Kontrollkästchen, um den `column-rule-break` auf `intersection` zu setzen, wodurch die ansonsten kontinuierlichen Regeln bei jeder "Kreuzung" brechen. Standardmäßig ist die Unterbrechung zwischen den Segmenten die Höhe der {{cssxref("row-gap")}}, die in diesem Fall auf `20px` eingestellt wurde.

### Flex-Container

In Flexbox hängt es davon ab, ob die Spaltenlinien standardmäßig bei jeder Zeilenlücke brechen, von der `flex-direction` ab. In horizontalen Schreibmodi, wenn auf `row` oder `row-reverse` gesetzt, brechen die Spaltenlinien bei jeder Zeilenlücke, was `column-rule-break: intersection` entspricht. Wenn die `flex-direction` `column` oder `column-reverse` ist, ist die Spaltenlinie standardmäßig kontinuierlich, was `column-rule-break: none` entspricht.

```html hidden
<h1>Default rule breaks in flexbox</h1>
<article>
  <section>
    <h2>flex-direction: row</h2>
    <div class="flexbox">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </section>
  <section>
    <h2>flex-direction: column</h2>
    <div class="flexbox column">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </section>
</article>
<p>
  <label
    ><input type="checkbox" /> Set
    <code>column-rule-break: intersection</code></label
  >
</p>
```

```css hidden
body {
  font-family: sans-serif;
  text-align: center;
}
h1 {
  font-size: 1.25em;
}
h2 {
  font-size: 1em;
}

:has(:checked) .flexbox {
  column-rule-break: intersection;
}
article {
  display: flex;
  gap: 5vw;
  rule: 1px solid black;
  width: 100vw;
}
section {
  flex-basis: 45vw;
}
.flexbox {
  display: flex;
  flex-flow: balance;
  flex-line-count: 3;
  gap: 20px;
  rule: 5px solid blue;
  row-rule-color: lightblue;
  width: 100%;
}
.column {
  flex-flow: column balance;
  gap: 20px;
}

.flexbox > div {
  border: 1px solid green;
  background-color: lime;
  flex: 1 1 auto;
  height: 30px;
}
```

{{EmbedLiveSample("Flex-Container", "", "300")}}

In horizontalen Schreibmodi wirkt sich das Setzen von `column-rule-break` auf `intersection` nur auf die Spaltenlinien in den `column` und `column-reverse` Szenarien aus.

### Multi-Col-Container

In Multi-Col-Containern verhält sich der Standardwert `normal` wie `intersection`. Während die Zeilen-Dekoration standardmäßig kontinuierlich ist, brechen Spaltenlinien bei jeder Kreuzung. Spaltenlinien brechen an jeder Zeilenlücke in Segmente, wobei jedes Segment an der Kante der Lücke beginnt und endet. Diese Start- und Endpositionen können mit den `column-rule-inset` Eigenschaften verändert werden.

```html hidden
<h1>Default rule breaks in multi-col</h1>
<ol>
  <li>One fish</li>
  <li>Two fish</li>
  <li>Red fish</li>
  <li>Blue fish</li>
  <li>Black fish</li>
  <li>Blue fish</li>
  <li>Old fish</li>
  <li>New fish.</li>
  <li>This one has a little star.</li>
  <li>This one has a little car.</li>
  <li>Say! What a lot</li>
  <li>Of fish there are.</li>
  <li>Yes. Some are blue.</li>
  <li>And some are blue.</li>
  <li>Some are old.</li>
  <li>And some are new.</li>
  <li>Some are sad.</li>
  <li>And some are glad.</li>
  <li>And some are very, very bad.</li>
  <li>Why are they</li>
  <li>Sad and glad and bad?</li>
  <li>I do not know.</li>
  <li>Go ask your dad.</li>
</ol>
<fieldset>
  <legend>Set <code>column-rule-break:</code></legend>
  <label
    ><input type="radio" name="break" value="none" /> <code>none</code></label
  >
  <label
    ><input type="radio" name="break" value="normal" checked />
    <code>normal</code></label
  >
  <label
    ><input type="radio" name="break" value="intersection" />
    <code>intersection</code></label
  >
</fieldset>
```

```css hidden
body {
  font-family: sans-serif;
  text-align: center;
}
h1 {
  font-size: 1.25em;
}
h2 {
  font-size: 1em;
}
ol {
  columns: 3 / 4em;
  gap: 20px;
  rule: 5px solid blue;
  row-rule-color: lightblue;
  rule-overlap: column-over-row;
}
li {
  border: 1px solid green;
  background-color: lime;
  list-style-type: none;
  margin-bottom: 5px;
}
:has([value="normal"]:checked) ol {
  column-rule-break: normal;
}
:has([value="intersection"]:checked) ol {
  column-rule-break: intersection;
}
:has([value="none"]:checked) ol {
  column-rule-break: none;
}
label {
  margin-right: 20px;
}
```

{{EmbedLiveSample("Multi-Col-Container", "", "540")}}

Wenn Sie `none` auswählen, wird die Spaltenlinie nicht mehr in Segmente unterbrochen, sondern sie wird vom oberen Rand des Containers fortgesetzt, bis sie den unteren Rand erreicht. Die `column-rule-inset` Eigenschaften können verwendet werden, um die Enden der Spaltenlückendekorationen zu versetzen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

In diesem Beispiel verwenden wir die `column-rule-break` Eigenschaft, um jedes Regel-Segment in einem Raster-Container zu brechen, sodass Spaltenregel-Segmente zwischen Zeilenlücken erstellt werden. Das Ändern der `row-gap` Eigenschaft wird die Größe der Segmente ändern.

#### HTML

Wir erstellen eine Liste mit 50 Elementen und einen Schieberegler, um die Breite der Zeilenlücke auszuwählen. Der Großteil des HTML-Codes ist aus Gründen der Übersichtlichkeit ausgeblendet.

```html
<ul>
  <li>1</li>
  <li>2</li>
  ...
  <li>49</li>
  <li>50</li>
</ul>
```

```html hidden live-sample___basic
<p>
  <label
    >Change the width of the row gap.
    <input type="range" min="0" max="32" value="16" id="gap"
  /></label>
  <output id="o"></output>
</p>
<ul id="ul">
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
  <li>10</li>
  <li>11</li>
  <li>12</li>
  <li>13</li>
  <li>14</li>
  <li>15</li>
  <li>16</li>
  <li>17</li>
  <li>18</li>
  <li>19</li>
  <li>20</li>
  <li>21</li>
  <li>22</li>
  <li>23</li>
  <li>24</li>
  <li>25</li>
  <li>26</li>
  <li>27</li>
  <li>28</li>
  <li>29</li>
  <li>30</li>
  <li>31</li>
  <li>32</li>
  <li>33</li>
  <li>34</li>
  <li>35</li>
  <li>36</li>
  <li>37</li>
  <li>38</li>
  <li>39</li>
  <li>40</li>
  <li>41</li>
  <li>42</li>
  <li>43</li>
  <li>44</li>
  <li>45</li>
  <li>46</li>
  <li>47</li>
  <li>48</li>
  <li>49</li>
  <li>50</li>
</ul>
```

#### CSS

Wir definieren die ungeordnete Liste als einen 8-Spalten-Container, erstellen Zeilen und Spalten mit der {{cssxref("grid-template-columns")}} Eigenschaft und setzen {{cssxref("list-style-type")}} auf `none`, um die Punkte zu entfernen. Wir fügen ein {{cssxref("gap")}} von `20px` ein, um genügend Abstand zwischen den Zeilen und Spalten zu schaffen, um unsere `20px` festen Zeilen- und Spaltenregeln einzufügen. Wir fügen die Eigenschaft {{cssxref("rule-overlap")}} hinzu, um die Spalten-Dekoration über jede Zeilen-Dekoration zu malen. Schließlich setzen wir die Spaltenregeln auf Brechen bei jeder Kreuzung.

```css live-sample___basic
ul {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  list-style-type: none;
  gap: 20px;

  column-rule: 10px solid olive;
  row-rule: 10px solid palegoldenrod;
  rule-overlap: column-over-row;

  column-rule-break: intersection;
}
```

Der Rest des CSS ist aus Gründen der Übersichtlichkeit ausgeblendet.

```css hidden live-sample___basic
ol {
  place-items: center;
  width: 95vw;
}
li {
  text-align: center;
  font-family: sans-serif;
  line-height: 50px;
}
```

```js hidden live-sample___basic
const gap = document.getElementById("gap");
const ul = document.getElementById("ul");
const output = document.getElementById("o");

gap.addEventListener("input", () => {
  o.innerText = ul.style.rowGap = `${gap.value}px`;
});
```

#### Ergebnis

{{EmbedLiveSample("Basic", "", "600")}}

Machen Sie die Zeilenlücken breiter und beachten Sie, wie die Unterbrechungen zwischen den Spaltensegmenten größer werden. Verringern Sie die Breite der Zeilenlücke auf `0px`, und beachten Sie, wie die Spaltendekoration kontinuierlich erscheint. Das ist sie nicht! Der `0px`-Abstand zwischen Segmenten ist möglicherweise nicht sichtbar, aber die Segmente beginnen und enden immer noch an der Lücke, sodass alle Versätze, die mit `column-rule-inset` Eigenschaften festgelegt werden, weiterhin angewendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("row-rule-break")}}
- {{cssxref("rule-break")}} Kurzschreibweise
- {{cssxref("rule-inset")}} Kurzschreibweise
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- {{cssxref("rule")}} Kurzschreibweise
- [CSS Lücken](/de/docs/Web/CSS/Guides/Gaps) Modul
