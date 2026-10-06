---
title: "`column-rule-break` CSS property"
short-title: column-rule-break
slug: Web/CSS/Reference/Properties/column-rule-break
l10n:
  sourceCommit: 5fd3b03e9ad1ee4e8bc64d4f6888570690a7fbc8
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`column-rule-break`** legt fest, ob Spaltenlinien dort in Segmente unterteilt werden, wo sie Zeilenabstände kreuzen.

{{InteractiveExample("CSS Demo: column-rule-break")}}

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

Für diese Eigenschaft wird eines der folgenden Schlüsselwörter angegeben:

- `none`
  - : Spaltenlinien werden nicht unterbrochen, wenn sie Zeilenabstände kreuzen. Stattdessen wird über die gesamte Höhe des Containers, von einem Rand zum anderen, eine durchgehende Spaltenlinie gezeichnet.
- `normal`
  - : Verhält sich in Grid- und Flex-Containern wie `none`, in mehrspaltigen Layouts wie `intersection`. Dies ist der Standardwert.
- `intersection`
  - : Spaltenlinien werden immer unterbrochen, wenn sie Zeilenabstände kreuzen. Die Segmente beginnen und enden an den Rändern des Containers beziehungsweise der Abstände.

## Beschreibung

Die Eigenschaft `column-rule-break` legt fest, ob Spaltenlinien beim Kreuzen von Zeilenabständen in Segmente unterteilt werden.

Spaltenlinien werden innerhalb eines Spaltenabstands als ein oder mehrere Segmente gezeichnet. Diese Segmente liegen zwischen benachbarten Grid-Elementen in verschiedenen Spalten, je nach `flex-direction` zwischen Flex-Elementen oder Flex-Zeilen in Flex-Layouts oder zwischen Spalten in mehrspaltigen Layouts.

Die Eigenschaft `column-rule-break` bestimmt lediglich, ob eine Unterbrechung erfolgt. Standardmäßig entspricht die Unterbrechung zwischen Spaltenliniensegmenten der Höhe des Zeilenabstands, da jedes Segment am Rand des Abstands oder des Containers beginnt und endet. Beträgt der Zeilenabstand `0`, ist diese Unterbrechung möglicherweise nicht sichtbar. Die Endpositionen lassen sich mit den {{cssxref("column-rule-inset")}}-Eigenschaften steuern.

Ist `column-rule-break` auf `none` gesetzt, gibt es keine Unterbrechungen. In diesem Fall ist die Spaltenlinie durchgehend, und `column-rule-inset`-Werte wirken sich nur auf ihre beiden Enden am Containerrand aus. Bei Unterbrechungen beeinflussen die `column-rule-inset`-Eigenschaften dagegen den Anfang und das Ende jedes Spaltenliniensegments.

Die Eigenschaft `column-rule-break` kann zusammen mit der Eigenschaft {{cssxref("row-rule-break")}} über die Kurzschreibweise {{cssxref("rule-break")}} festgelegt werden.

Ob eine Spaltenlinie standardmäßig aus einem einzigen durchgehenden Segment oder aus Segmenten besteht, die an Zeilenabständen unterbrochen werden, hängt vom Containertyp ab.

### Grid-Container

In Grid-Containern verlaufen Spaltenliniensegmente standardmäßig durch Kreuzungen mit Zeilenabständen hindurch. Dies entspricht `column-rule-break: none`. Mit `column-rule-break: intersection` werden die Segmente an jedem Zeilenabstand unterbrochen, den sie andernfalls kreuzen würden.

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

Standardmäßig werden Spaltenlinien nicht unterbrochen. Aktivieren Sie das Kontrollkästchen, um `column-rule-break` auf `intersection` zu setzen. Dadurch werden die ansonsten durchgehenden Linien an jeder Kreuzung unterbrochen. Die Unterbrechung zwischen den Segmenten entspricht standardmäßig der Höhe von {{cssxref("row-gap")}}, die hier auf `20px` festgelegt wurde.

### Flex-Container

In Flexbox hängt es von `flex-direction` ab, ob Spaltenlinien standardmäßig an jedem Zeilenabstand unterbrochen werden. Bei horizontalen Schreibrichtungen werden die Spaltenlinien bei `row` oder `row-reverse` an jedem Zeilenabstand unterbrochen. Dies entspricht `column-rule-break: intersection`. Bei `column` oder `column-reverse` sind sie standardmäßig durchgehend. Dies entspricht `column-rule-break: none`.

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

Bei horizontalen Schreibrichtungen wirkt sich `column-rule-break: intersection` nur in den Fällen `column` und `column-reverse` auf die Spaltenlinien aus.

### Mehrspaltige Container

In mehrspaltigen Containern verhält sich der Standardwert `normal` wie `intersection`. Während Zeilenlinien standardmäßig durchgehend sind, werden Spaltenlinien an jeder Kreuzung unterbrochen. An jedem Zeilenabstand werden sie in Segmente unterteilt, die jeweils am Rand des Abstands beginnen und enden. Diese Anfangs- und Endpositionen können mit den `column-rule-inset`-Eigenschaften geändert werden.

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

Wenn Sie `none` auswählen, wird die Spaltenlinie nicht mehr in Segmente unterteilt. Stattdessen verläuft sie vom oberen bis zum unteren Rand des Containers. Mit den `column-rule-inset`-Eigenschaften lassen sich die Enden der Linien innerhalb der Spaltenabstände verschieben.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel verwenden wir die Eigenschaft `column-rule-break`, um die Spaltenlinien in einem Grid-Container an den Zeilenabständen zu unterbrechen. Durch Ändern der Eigenschaft `row-gap` ändern Sie die Länge der Segmente.

#### HTML

Wir erstellen eine Liste mit 50 Elementen und einen Schieberegler, mit dem sich die Breite des Zeilenabstands auswählen lässt. Der Großteil des HTML-Codes ist der Kürze halber ausgeblendet.

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

Wir definieren die ungeordnete Liste als Container mit acht Spalten. Mit der Eigenschaft {{cssxref("grid-template-columns")}} erstellen wir Zeilen und Spalten und setzen {{cssxref("list-style-type")}} auf `none`, um die Aufzählungszeichen zu entfernen. Mit {{cssxref("gap")}} von `20px` schaffen wir zwischen den Zeilen und Spalten genügend Platz für die jeweils `20px` breiten, durchgezogenen Zeilen- und Spaltenlinien. Mit der Eigenschaft {{cssxref("rule-overlap")}} legen wir fest, dass die Spaltenlinien über den Zeilenlinien gezeichnet werden. Schließlich legen wir fest, dass die Spaltenlinien an jeder Kreuzung unterbrochen werden.

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

Vergrößern Sie die Zeilenabstände und beobachten Sie, wie die Unterbrechungen zwischen den Spaltenliniensegmenten größer werden. Verringern Sie den Zeilenabstand auf `0px`: Die Spaltenlinie erscheint nun durchgehend, ist es aber nicht. Der Abstand von `0px` zwischen den Segmenten ist möglicherweise nicht sichtbar. Die Segmente beginnen und enden jedoch weiterhin am Zeilenabstand, sodass mit den `column-rule-inset`-Eigenschaften festgelegte Verschiebungen weiterhin angewendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("row-rule-break")}}
- Kurzschreibweise {{cssxref("rule-break")}}
- Kurzschreibweise {{cssxref("rule-inset")}}
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- Kurzschreibweise {{cssxref("rule")}}
- Modul [CSS-Abstände](/de/docs/Web/CSS/Guides/Gaps)
