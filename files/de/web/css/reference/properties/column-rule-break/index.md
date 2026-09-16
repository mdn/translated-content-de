---
title: "`column-rule-break` CSS property"
short-title: column-rule-break
slug: Web/CSS/Reference/Properties/column-rule-break
l10n:
  sourceCommit: 880c2c4b113c6fe127ca3ae3603a56ef7a2eb9a6
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`column-rule-break`** legt das Verhalten zum Unterteilen von Spaltenlinien in Segmente fest, wo immer Spaltenlinien Zeilenlücken kreuzen.

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
/* Keyword values */
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

Diese Eigenschaft wird als einzelnes Schlüsselwort aus der folgenden Liste angegeben:

- `none`
  - : Es gibt keine Unterbrechungen in Spaltenlinien, wenn sie Zeilenlücken kreuzen; stattdessen wird eine durchgehende Spaltenlinie über die gesamte Höhe des Containers, von Kante zu Kante, gezeichnet.
- `normal`
  - : In Grid- und Flex-Containern verhält sich dies wie `none`. In Multi-Col-Layouts verhält es sich wie `intersection`. Dies ist der Standardwert.
- `intersection`
  - : Spaltenlinien werden immer unterbrochen, wenn sie Zeilenlücken kreuzen, wobei Spaltenliniensegmente an Container- und Lückenkanten beginnen und enden.

## Beschreibung

Die Eigenschaft `column-rule-break` legt fest, ob Spaltenlinien in Segmente unterteilt werden, wenn sie Zeilenlücken kreuzen.

Spaltenlinien werden innerhalb einer Spaltenlücke als ein oder mehrere Segmente gezeichnet. Segmente befinden sich zwischen benachbarten Grid-Items in getrennten Spalten, zwischen Flex-Items oder Flex-Zeilen in Flex-Layouts abhängig von `flex-direction` oder zwischen Spalten in Multi-Col-Layouts.

Die Eigenschaft `column-rule-break` bestimmt nur, ob die Unterbrechung erfolgt. Standardmäßig entspricht die Unterbrechung zwischen Spaltenliniensegmenten der Höhe der Zeilenlücke, da jedes Segment an der Kante der Lücke (oder der Kante des Containers) beginnt und endet. Wenn die Zeilenlücke `0` beträgt, ist diese Unterbrechung möglicherweise nicht sichtbar. Die Endpositionen können mit den Eigenschaften {{cssxref("column-rule-inset")}} gesteuert werden.

Wenn `column-rule-break` auf `none` gesetzt ist, gibt es keine Unterbrechungen. In diesem Fall ist die Spaltenlinie durchgehend, und alle Werte von `column-rule-inset` wirken sich nur auf die linke und rechte Kante der Spaltenlinie an der Kante des Containers aus. Wenn Unterbrechungen vorhanden sind, wirken sich die Eigenschaften `column-rule-inset` auf den Anfang und das Ende jedes Spaltenliniensegments aus.

Die Eigenschaft `column-rule-break` kann zusammen mit der Eigenschaft {{cssxref("row-rule-break")}} über die Kurzform {{cssxref("rule-break")}} gesetzt werden.

Ob eine Spaltenlinie standardmäßig aus einem einzigen durchgehenden Segment oder aus Segmenten besteht, die beim Kreuzen von Zeilenlücken unterbrochen werden, hängt vom Containertyp ab.

### Grid-Container

In Grid-Containern verlaufen Spaltenliniensegmente standardmäßig durch Kreuzungen mit Zeilenlücken hindurch, entsprechend `column-rule-break: none`. Durch Setzen von `column-rule-break: intersection` werden die Segmente gezwungen, an jeder Zeilenlücke unterbrochen zu werden, die sie andernfalls kreuzen würden.

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

{{EmbedLiveSample("grid containers", "", "240")}}

Standardmäßig gibt es keine Unterbrechungen von Spaltenlinien. Aktivieren Sie das Kontrollkästchen, um `column-rule-break` auf `intersection` zu setzen, wodurch die ansonsten durchgehenden Linien an jeder „Kreuz“-Kreuzung unterbrochen werden. Standardmäßig entspricht die Unterbrechung zwischen Segmenten der Höhe von {{cssxref("row-gap")}}, die in diesem Fall auf `20px` gesetzt wurde.

### Flex-Container

In Flexbox hängt es von `flex-direction` ab, ob die Spaltenlinien standardmäßig an jeder Zeilenlücke unterbrochen werden. In horizontalen Schreibrichtungen wird die Spaltenlinie bei `row` oder `row-reverse` an jeder Zeilenlücke unterbrochen, entsprechend `column-rule-break: intersection`. Wenn `flex-direction` auf `column` oder `column-reverse` gesetzt ist, ist die Spaltenlinie standardmäßig durchgehend, entsprechend `column-rule-break: none`.

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

{{EmbedLiveSample("Flex containers", "", "300")}}

In horizontalen Schreibrichtungen wirkt sich das Setzen von `column-rule-break` auf `intersection` nur auf die Spaltenlinien in den Szenarien `column` und `column-reverse` aus.

### Multi-Col-Container

In Multi-Col-Containern verhält sich der Standardwert `normal` genauso wie `intersection`. Während die Zeilendekorationen standardmäßig durchgehend sind, werden Spaltenlinien an jeder Kreuzung unterbrochen. Spaltenlinien werden an jeder Zeilenlücke in Segmente unterteilt, wobei jedes Segment an der Kante der Lücke beginnt und endet. Diese Start- und Endpositionen können mit den Eigenschaften `column-rule-inset` geändert werden.

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

{{EmbedLiveSample("multi-col containers", "", "540")}}

Wenn Sie `none` auswählen, wird die Spaltenlinie nicht länger in Segmente unterteilt; stattdessen verläuft sie vom oberen Rand des Containers bis zum unteren Rand. Die Eigenschaften `column-rule-inset` können verwendet werden, um die Enden der Spaltenlückendekorationen zu versetzen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel verwenden wir die Eigenschaft `column-rule-break`, um jedes Liniensegment in einem Grid-Container zu unterbrechen, sodass Spaltenliniensegmente zwischen Zeilenlücken erstellt werden. Das Ändern der Eigenschaft `row-gap` verändert die Größe der Segmente.

#### HTML

Wir erstellen eine Liste mit 50 Elementen und einen Schieberegler, um die Breite der Zeilenlücke auszuwählen. Der Großteil des HTML ist der Kürze halber ausgeblendet.

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

Wir definieren die unsortierte Liste als 8-Spalten-Container, erstellen mit der Eigenschaft {{cssxref("grid-template-columns")}} Zeilen und Spalten und setzen {{cssxref("list-style-type")}} auf `none`, um die Aufzählungszeichen zu entfernen. Wir fügen eine {{cssxref("gap")}} von `20px` ein, um genug Platz zwischen den Zeilen und Spalten für unsere durchgehenden Zeilen- und Spaltenlinien von `20px` zu schaffen. Wir verwenden die Eigenschaft {{cssxref("rule-overlap")}}, um die Spaltendekoration über allen Zeilendekorationen zu zeichnen. Abschließend legen wir fest, dass die Spaltenlinien an jeder Kreuzung unterbrochen werden.

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

Der restliche CSS-Code ist der Kürze halber ausgeblendet.

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
  output.innerText = ul.style.rowGap = `${gap.value}px`;
});
```

#### Ergebnis

{{EmbedLiveSample("Basic", "", "600")}}

Vergrößern Sie die Zeilenlücken und beachten Sie, wie die Unterbrechungen zwischen Spaltensegmenten wachsen. Verringern Sie die Breite der Zeilenlücke auf `0px` und beachten Sie, wie die Spaltendekoration durchgehend erscheint. Sie ist es nicht! Die Lücke von `0px` zwischen den Segmenten ist möglicherweise nicht sichtbar, aber die Segmente beginnen und enden weiterhin an der Lücke. Daher werden weiterhin alle mit Eigenschaften `column-rule-inset` festgelegten Versätze angewendet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("row-rule-break")}}
- Kurzform {{cssxref("rule-break")}}
- Kurzform {{cssxref("rule-inset")}}
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- Kurzform {{cssxref("rule")}}
- Modul [CSS-Lücken](/de/docs/Web/CSS/Guides/Gaps)
