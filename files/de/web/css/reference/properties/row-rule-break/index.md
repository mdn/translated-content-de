---
title: "`row-rule-break` CSS property"
short-title: row-rule-break
slug: Web/CSS/Reference/Properties/row-rule-break
l10n:
  sourceCommit: 880c2c4b113c6fe127ca3ae3603a56ef7a2eb9a6
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`row-rule-break`** legt das Verhalten für das Aufteilen von Zeilenregeln in Segmente fest, wenn Zeilenregeln Spaltenlücken kreuzen.

{{InteractiveExample("CSS Demo: rule")}}

```css interactive-example-choice
row-rule-break: none;
```

```css interactive-example-choice
row-rule-break: normal;
```

```css interactive-example-choice
row-rule-break: intersection;
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
  row-rule: solid thick orange;
  column-rule: solid thick lavender;
  gap: 15px;
}
#example-element i {
  padding: 5px;
}
```

## Syntax

```css
/* Keyword values */
row-rule-break: none;
row-rule-break: normal;
row-rule-break: intersection;

/* Global values */
row-rule-break: inherit;
row-rule-break: initial;
row-rule-break: revert;
row-rule-break: revert-layer;
row-rule-break: unset;
```

### Werte

Diese Eigenschaft wird als einzelnes Schlüsselwort aus der folgenden Liste angegeben:

- `none`
  - : Es gibt keine Unterbrechungen in Zeilenregeln, wenn sie Spaltenlücken kreuzen; stattdessen wird eine durchgehende Zeilenregel über die gesamte Breite des Containers von Kante zu Kante gezeichnet.
- `normal`
  - : Verhält sich in Grid- und Flex-Containern wie `none`. Verhält sich in Multi-Col wie `none`. Dies ist der Standardwert.
- `intersection`
  - : Zeilenregeln werden immer unterbrochen, wenn sie Spaltenlücken kreuzen, wobei Zeilenregelsegmente an Container- und Lückenkanten beginnen und enden.

## Beschreibung

Die Eigenschaft `row-rule-break` legt fest, ob Zeilenregeln beim Kreuzen von Spaltenlücken in Segmente aufgeteilt werden oder nicht.

Zeilenregeln werden innerhalb einer Zeilenlücke als ein oder mehrere Segmente gezeichnet, wobei Segmente zwischen benachbarten Grid-Elementen in getrennten Zeilen, zwischen Flex-Elementen oder Flex-Linien abhängig von {{cssxref("flex-direction")}} in Flex-Layouts oder in Lücken zwischen benachbarten Spaltenzeilen in Multi-Col-Layouts auftreten, wenn {{cssxref("column-height")}} mehrere Spaltenzeilen erzeugt.

Die Eigenschaft `row-rule-break` bestimmt nur, ob die Unterbrechung erfolgt. Standardmäßig entspricht die Unterbrechung oder der Abstand zwischen Zeilenregelsegmenten der Breite der Spaltenlücke, da jedes Segment an der Kante der Lücke (oder der Kante des Containers) beginnt und endet. Wenn die Lücke `0` beträgt, ist diese Unterbrechung möglicherweise nicht sichtbar. Die Endpositionen können mit den Eigenschaften {{cssxref("row-rule-inset")}} gesteuert werden.

Wenn `row-rule-break` auf `none` gesetzt ist, gibt es keine Unterbrechungen, die Zeilenregellinie ist durchgehend, und alle Werte von `row-rule-inset` wirken sich nur auf die Zeilenregel an der linken und rechten Kante des Containers aus. Wenn Unterbrechungen vorhanden sind, wirken sich die Eigenschaften `row-rule-inset` auf den Anfang und das Ende jedes Zeilenregelsegments aus.

Die Eigenschaft `row-rule-break` kann zusammen mit der Eigenschaft {{cssxref("column-rule-break")}} mithilfe der Kurzform {{cssxref("rule-break")}} gesetzt werden.

Ob eine Zeilenregel standardmäßig aus einem einzelnen durchgehenden Segment oder aus Segmenten besteht, die beim Kreuzen von Spaltenlücken unterbrochen werden, hängt vom Containertyp ab.

### Grid-Container

In Grid-Containern verlaufen Zeilenregelsegmente standardmäßig durch sichtbare „Kreuz“-Schnittpunkte hindurch. Durch das Setzen von `row-rule-break: intersection` werden die Segmente an jeder Spaltenlücke unterbrochen, an der sie ansonsten kreuzen würden.

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
    <code>row-rule-break: intersection</code></label
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
  row-rule-break: intersection;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  rule: 5px solid blue;
  column-rule-color: lightblue;
  width: 100%;
}

.grid > div {
  border: 1px solid green;
  background-color: lime;
  height: 30px;
}
```

{{EmbedLiveSample("grid containers", "", "240")}}

Standardmäßig gibt es keine Unterbrechungen der Zeilenregeln. Aktivieren Sie das Kontrollkästchen, um `ow-rule-break` auf `intersection` zu setzen, wodurch die durchgehenden Regeln an jedem „Kreuz“-Schnittpunkt unterbrochen werden. Standardmäßig entspricht die Unterbrechung zwischen Segmenten der Breite von {{cssxref("column-gap")}}.

### Flex-Container

In Flexbox ist die Zeilenregel bei `flex-direction` `row` oder `row-reverse` in horizontalen Schreibrichtungen durchgehend, wobei die Spaltensegmente an den Kanten der Zeilenlücken beginnen und enden. Bei `flex-direction` `column` oder `column-reverse` ist die Spaltenregel durchgehend, wobei die Zeilensegmente an den Kanten der Spaltenlücken beginnen und enden.

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
    <code>row-rule-break: intersection</code></label
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
  row-rule-break: intersection;
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
  column-rule-color: lightblue;
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

In horizontalen Schreibrichtungen ist die Zeilenregel bei `row` oder `row-reverse` standardmäßig durchgehend, während die Zeilenregel bei `column` oder `column-reverse` an jeder Spaltenlücke unterbrochen wird. Das Setzen von `row-rule-break` auf `intersection` wirkt sich nur auf die Zeilenregeln in den Szenarien `row` und `row-reverse` aus.

### Multi-Col-Container

In Multi-Col-Containern verhält sich das Standardverhalten `normal` genauso wie `none`.

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
  <legend>Set <code>row-rule-break:</code></legend>
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
  column-rule-color: lightblue;
}
li {
  border: 1px solid green;
  background-color: lime;
  list-style-type: none;
  margin-bottom: 5px;
}
:has([value="normal"]:checked) ol {
  row-rule-break: normal;
}
:has([value="intersection"]:checked) ol {
  row-rule-break: intersection;
}
:has([value="none"]:checked) ol {
  row-rule-break: none;
}
label {
  margin-right: 20px;
}
```

{{EmbedLiveSample("multi-col containers", "", "540")}}

Wenn Sie `intersection` auswählen, wird die Zeilenregel immer dann in Segmente unterbrochen, wenn sie eine Spaltenlücke erreicht, wobei jedes Segment an der Kante der Lücke beginnt und endet. Die Anfangs- und Endpositionen können mit den Eigenschaften `row-rule-inset` geändert werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel verwenden wir die Eigenschaft `row-rule-break`, um jedes Regelsegment in einem Grid-Container zu unterbrechen, sodass Zeilenregelsegmente zwischen Spaltenlücken erstellt werden. Das Ändern der Eigenschaft `column-gap` verändert die Größe der Segmente.

#### HTML

Wir erstellen eine Liste mit 50 Elementen und einen Schieberegler, um die Breite der Spaltenlücke zu ändern. Der Großteil des HTML ist der Kürze halber ausgeblendet.

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
    >Change the width of the column gap.
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

Wir definieren die ungeordnete Liste als Container mit 8 Spalten, erstellen mit der Eigenschaft {{cssxref("grid-template-columns")}} Spalten und Zeilen und setzen {{cssxref("list-style-type")}} auf `none`, um die Aufzählungszeichen zu entfernen. Wir fügen ein {{cssxref("gap")}} von `20px` ein, um genügend Platz zwischen den Spalten und Zeilen für unsere durchgehenden Spalten- und Zeilenregeln mit `20px` Breite zu schaffen. Abschließend legen wir fest, dass die Zeilenregeln an jedem Schnittpunkt in Segmente unterbrochen werden.

```css live-sample___basic
ul {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  list-style-type: none;
  gap: 20px;

  row-rule: 10px solid olive;
  column-rule: 10px solid palegoldenrod;

  row-rule-break: intersection;
}
```

Der Rest des CSS ist der Kürze halber ausgeblendet.

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
  output.innerText = ul.style.columnGap = `${gap.value}px`;
});
```

#### Ergebnis

{{EmbedLiveSample("Basic", "", "600")}}

Vergrößern Sie die Spaltenlücken und beachten Sie, wie die Unterbrechungen zwischen Zeilensegmenten größer werden. Verringern Sie die Breite der Spaltenlücke auf `0px` und beachten Sie, wie die Zeilendekoration durchgehend erscheint. Sie ist es nicht! Die `0px`-Lücke zwischen Segmenten ist möglicherweise nicht sichtbar, aber die Segmente beginnen und enden weiterhin an der Lücke, sodass alle mit den Eigenschaften `row-rule-inset` festgelegten Versätze weiterhin angewendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("column-rule-break")}}
- Kurzform {{cssxref("rule-break")}}
- Kurzform {{cssxref("rule-inset")}}
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- Kurzform {{cssxref("rule")}}
- Modul [CSS-Lücken](/de/docs/Web/CSS/Guides/Gaps)
