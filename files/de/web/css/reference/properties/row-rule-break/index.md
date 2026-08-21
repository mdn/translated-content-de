---
title: "`row-rule-break` CSS property"
short-title: row-rule-break
slug: Web/CSS/Reference/Properties/row-rule-break
l10n:
  sourceCommit: 1474534461893381d54c502e655f334b5568e597
---

{{SeeCompatTable}}

Die **`row-rule-break`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Verhalten für das Aufbrechen von Zeilenregeln in Segmente fest, wenn Zeilenregeln auf Spaltenabstände stoßen.

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
/* Keywords */
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
  - : Es gibt keine Unterbrechungen in den Zeilenregeln, wenn sie auf Spaltenabstände stoßen; stattdessen wird eine kontinuierliche Zeilenregel über die gesamte Breite des Containers, von Rand zu Rand, gemalt.
- `normal`
  - : In Grid- und Flex-Containern verhält sich wie `none`. In Multi-Col verhält sich wie `none`. Dies ist der Standardwert.
- `intersection`
  - : Zeilenregeln brechen immer, wenn sie auf Spaltenabstände stoßen, wobei Segmente der Zeilenregel an Container- und Lückenrändern beginnen und enden.

## Beschreibung

Die Eigenschaft `row-rule-break` gibt an, ob Zeilenregeln in Segmente unterteilt werden sollen, wenn sie auf Spaltenabstände treffen.

Zeilenregeln werden innerhalb eines Zeilenabstands als ein oder mehrere Segmente gemalt, wobei Segmente zwischen benachbarten Grid-Elementen in separaten Zeilen, zwischen Flex-Elementen oder Flex-Linien, abhängig von der {{cssxref("flex-direction")}} in Flex-Layouts, oder in Abständen zwischen benachbarten Zeilen von Spalten in Multi-Col-Layouts auftreten, wenn {{cssxref("column-height")}} mehrere Zeilen von Spalten erstellt.

Die Eigenschaft `row-rule-break` bestimmt nur, ob die Unterbrechung erfolgt. Standardmäßig ist die Unterbrechung oder der Abstand zwischen Segmente von Zeilenregeln so breit wie der Spaltenabstand, da jedes Segment an den Rändern der Lücke (oder des Containers) beginnt und endet. Wenn die Lücke `0` ist, ist diese Unterbrechung möglicherweise nicht sichtbar. Die Endpositionen können mit den {{cssxref("row-rule-inset")}}-Eigenschaften gesteuert werden.

Wenn `row-rule-break` auf `none` gesetzt ist, gibt es keine Unterbrechungen, die Zeilenregel ist kontinuierlich, und alle `row-rule-inset`-Werte beeinflussen nur die Zeilenregel am linken und rechten Rand des Containers. Bei Unterbrechungen beeinflussen die `row-rule-inset`-Eigenschaften den Anfang und das Ende jedes Segments der Zeilenregel.

Die `row-rule-break`-Eigenschaft kann zusammen mit der {{cssxref("column-rule-break")}}-Eigenschaft mithilfe des {{cssxref("rule-break")}}-Kurzschreibweise gesetzt werden.

Ob eine Zeilenregel standardmäßig aus einem einzelnen kontinuierlichen Segment besteht oder aus Segmenten, die bei Schnittpunkten mit Spaltenabständen brechen, hängt vom Containertyp ab.

### Grid-Container

In Grid-Containern setzen Zeilenregel-Segmente standardmäßig durch sichtbare "Kreuzungspunkte" fort. Durch Setzen von `row-rule-break: intersection` werden die Segmente gezwungen, bei jedem Spaltenabstand zu brechen, wo sie sonst kreuzen würden.

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

Standardmäßig gibt es keine Unterbrechungen der Zeilenregel. Markieren Sie das Kontrollkästchen, um `row-rule-break` auf `intersection` zu setzen, wodurch die kontinuierlichen Regeln bei jeder "Kreuzung" brechen. Standardmäßig ist die Unterbrechung zwischen den Segmenten so breit wie der {{cssxref("column-gap")}}.

### Flex-Container

In Flexbox, wenn die `flex-direction` `row` oder `row-reverse` in horizontalen Schreibrichtungen ist, ist die Zeilenregel kontinuierlich, wobei die Spaltensegmente an den Rändern der Zeilenabstände beginnen und enden. Wenn die `flex-direction` `column` oder `column-reverse` ist, ist die Spaltenregel kontinuierlich, wobei die Zeilensegmente an den Rändern der Spaltenabstände beginnen und enden.

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

In horizontalen Schreibrichtungen, wenn auf `row` oder `row-reverse` gesetzt, ist die Zeilenregel standardmäßig kontinuierlich, während sie bei `column` oder `column-reverse` an jedem Spaltenabstand bricht. Das Setzen von `row-rule-break` auf `intersection` wirkt sich nur auf die Zeilenregeln in den `row`- und `row-reverse`-Szenarien aus.

### Multi-Col-Container

In Multi-Col-Containern verhält sich das Standardverhalten `normal` gleich wie `none`.

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

Wenn Sie `intersection` wählen, wird die Zeilenregel in Segmente unterteilt, sobald sie auf einen Spaltenabstand trifft, wobei jedes Segment an der Kante der Lücke beginnt und endet. Die Anfangs- und Endpositionen können mit den `row-rule-inset`-Eigenschaften geändert werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel verwenden wir die Eigenschaft `row-rule-break`, um jede Regel zu brechen, sodass die Zeilenregel-Segmente zwischen den Spaltenabständen entstehen. Das Ändern der `column-gap`-Eigenschaft ändert die Größe der Segmente.

#### HTML

Wir erstellen eine Liste von 50 Elementen und einen Schieberegler, um die Breite des Spaltenabstands zu ändern. Der größte Teil des HTML ist aus Gründen der Kürze verborgen.

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

Wir definieren die ungeordnete Liste als einen 8-Spalten-Container, erstellen Spalten und Zeilen mit der {{cssxref("grid-template-columns")}}-Eigenschaft und setzen {{cssxref("list-style-type")}} auf `none`, um die Aufzählungszeichen zu entfernen. Wir fügen eine {{cssxref("gap")}} von `20px` hinzu, um genügend Platz zwischen den Spalten und Zeilen zu lassen, um unsere `20px`-soliden Spalten- und Zeilenregeln unterzubringen. Zuletzt setzen wir die Zeilenregeln so, dass sie an jeder Kreuzung in Segmente gebrochen werden.

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

Der Rest des CSS ist aus Gründen der Kürze verborgen.

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

Machen Sie die Spaltenabstände breiter und beachten Sie, wie die Unterbrechungen zwischen den Zeilenabschnitten wachsen. Reduzieren Sie die Breite des Spaltenabstands auf `0px` und beachten Sie, wie die Zeilendekoration kontinuierlich erscheint. Das tut sie nicht! Die `0px`-Lücke zwischen den Segmenten ist möglicherweise nicht sichtbar, aber die Segmente beginnen und enden immer noch an der Lücke, sodass alle Versätze, die mit den `row-rule-inset`-Eigenschaften festgelegt wurden, weiterhin angewendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("column-rule-break")}}
- {{cssxref("rule-break")}} Kurzform
- {{cssxref("rule-inset")}} Kurzform
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- {{cssxref("rule")}} Kurzform
- [CSS-Abstände](/de/docs/Web/CSS/Guides/Gaps) Modul
