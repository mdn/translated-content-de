---
title: "`column-rule-break` CSS property"
short-title: column-rule-break
slug: Web/CSS/Reference/Properties/column-rule-break
l10n:
  sourceCommit: d3a0fd9820ca27a3f17642841af8426735cb4ec3
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`column-rule-break`** legt fest, ob Spaltentrennlinien dort in Segmente unterteilt werden, wo sie Zeilenabstände kreuzen.

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
  - : Spaltentrennlinien werden an Kreuzungen mit Zeilenabständen nicht unterbrochen. Stattdessen wird eine durchgehende Spaltentrennlinie über die gesamte Höhe des Containers von Rand zu Rand gezeichnet.
- `normal`
  - : Verhält sich in Grid- und Flex-Containern wie `none`, in Multi-Column-Layouts dagegen wie `intersection`. Dies ist der Standardwert.
- `intersection`
  - : Spaltentrennlinien werden an Kreuzungen mit Zeilenabständen immer unterbrochen. Die Segmente beginnen und enden an den Rändern des Containers oder des Abstands.

## Beschreibung

Die Eigenschaft `column-rule-break` legt fest, ob Spaltentrennlinien beim Kreuzen von Zeilenabständen in Segmente unterteilt werden.

Spaltentrennlinien werden innerhalb eines Spaltenabstands als ein oder mehrere Segmente gezeichnet. Je nach Layout liegen diese Segmente zwischen benachbarten Grid-Elementen in getrennten Spalten, zwischen Flex-Elementen oder Flex-Zeilen abhängig von `flex-direction` oder zwischen Spalten eines Multi-Column-Layouts.

Die Eigenschaft `column-rule-break` bestimmt nur, ob eine Unterbrechung erfolgt. Standardmäßig entspricht die Unterbrechung zwischen den Segmenten der Höhe des Zeilenabstands, da jedes Segment am Rand des Abstands oder des Containers beginnt beziehungsweise endet. Wenn der Zeilenabstand `0` beträgt, ist die Unterbrechung möglicherweise nicht sichtbar. Die Endpositionen lassen sich mit den {{cssxref("column-rule-inset")}}-Eigenschaften steuern.

Ist `column-rule-break` auf `none` gesetzt, gibt es keine Unterbrechungen. Die Spaltentrennlinie verläuft dann durchgehend, und Werte für `column-rule-inset` wirken sich nur auf den linken und rechten Rand der Spaltentrennlinie am Containerrand aus. Bei Unterbrechungen beeinflussen die `column-rule-inset`-Eigenschaften dagegen den Anfang und das Ende jedes Segments.

Die Eigenschaft `column-rule-break` kann zusammen mit {{cssxref("row-rule-break")}} über die Kurzschreibweise {{cssxref("rule-break")}} festgelegt werden.

Ob eine Spaltentrennlinie standardmäßig aus einem einzigen durchgehenden Segment besteht oder an Zeilenabständen unterbrochen wird, hängt vom Containertyp ab.

### Grid-Container

In Grid-Containern verlaufen Spaltentrennlinien standardmäßig durch Kreuzungen mit Zeilenabständen hindurch. Das entspricht `column-rule-break: none`. Mit `column-rule-break: intersection` werden die Linien an jedem Zeilenabstand unterbrochen, den sie andernfalls kreuzen würden.

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
h1,
div {
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

@layer no-support {
  @supports not (column-rule-break: intersection) {
    body::before {
      content: "Your browser doesn't support the column-rule-break property";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

{{EmbedLiveSample("grid containers", "", "240")}}

Standardmäßig werden Spaltentrennlinien nicht unterbrochen. Aktivieren Sie das Kontrollkästchen, um `column-rule-break` auf `intersection` zu setzen. Dadurch werden die ansonsten durchgehenden Linien an jeder Kreuzung unterbrochen. Die Unterbrechung zwischen den Segmenten entspricht standardmäßig der Höhe von {{cssxref("row-gap")}}, die hier auf `20px` gesetzt wurde.

### Flex-Container

Bei Flexbox hängt es von `flex-direction` ab, ob Spaltentrennlinien standardmäßig an jedem Zeilenabstand unterbrochen werden. In horizontalen Schreibrichtungen werden sie bei `row` und `row-reverse` an jedem Zeilenabstand unterbrochen, was `column-rule-break: intersection` entspricht. Bei `column` und `column-reverse` verlaufen sie standardmäßig durchgehend, was `column-rule-break: none` entspricht.

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
h1,
article {
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

@layer no-support {
  @supports not (column-rule-break: intersection) {
    body::before {
      content: "Your browser doesn't support the column-rule-break property";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

{{EmbedLiveSample("Flex containers", "", "300")}}

In horizontalen Schreibrichtungen wirkt sich `column-rule-break: intersection` nur auf die Spaltentrennlinien in den Szenarien mit `column` und `column-reverse` aus.

### Multi-Column-Container

In Multi-Column-Containern verhält sich der Standardwert `normal` wie `intersection`. Während die Zeilendekorationen standardmäßig durchgehend sind, werden Spaltentrennlinien an jeder Kreuzung unterbrochen. Sie werden an jedem Zeilenabstand in Segmente unterteilt, die jeweils am Rand des Abstands beginnen und enden. Diese Anfangs- und Endpositionen lassen sich mit den `column-rule-inset`-Eigenschaften ändern.

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
h1,
ol,
fieldset {
  font-family: sans-serif;
  text-align: center;
}
h1 {
  font-size: 1.25em;
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
@layer no-support {
  @supports not (column-rule-break: intersection) {
    body::before {
      content: "Your browser doesn't support the column-rule-break property";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

{{EmbedLiveSample("multi-col containers", "", "540")}}

Wenn Sie `none` auswählen, wird die Spaltentrennlinie nicht mehr in Segmente unterteilt. Stattdessen verläuft sie vom oberen bis zum unteren Rand des Containers. Mit den `column-rule-inset`-Eigenschaften können Sie die Enden der Spaltenabstandsdekorationen versetzen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel verwenden wir `column-rule-break`, um die Spaltentrennlinien in einem Grid-Container an den Zeilenabständen zu unterbrechen. Wenn Sie `row-gap` ändern, ändert sich die Größe der Segmente.

#### HTML

Wir erstellen eine Liste mit 50 Einträgen und einen Schieberegler zur Auswahl der Breite des Zeilenabstands. Der Großteil des HTML-Codes ist der Kürze halber ausgeblendet.

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

Wir definieren die ungeordnete Liste als Container mit acht Spalten. Mit {{cssxref("grid-template-columns")}} erstellen wir Zeilen und Spalten und setzen {{cssxref("list-style-type")}} auf `none`, um die Aufzählungszeichen zu entfernen. Ein {{cssxref("gap")}} von `20px` schafft zwischen den Zeilen und Spalten genügend Platz für die durchgezogenen, `20px` breiten Zeilen- und Spaltentrennlinien. Mit {{cssxref("rule-overlap")}} legen wir fest, dass die Spaltendekoration über etwaigen Zeilendekorationen gezeichnet wird. Schließlich sorgen wir dafür, dass die Spaltentrennlinien an jeder Kreuzung unterbrochen werden.

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
@layer no-support {
  @supports not (column-rule-break: intersection) {
    body::before {
      content: "Your browser doesn't support the column-rule-break property";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
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

Vergrößern Sie die Zeilenabstände und beobachten Sie, wie die Unterbrechungen zwischen den Spaltensegmenten wachsen. Verringern Sie den Zeilenabstand auf `0px`: Die Spaltendekoration wirkt nun durchgehend, ist es aber nicht! Der Abstand von `0px` zwischen den Segmenten ist möglicherweise nicht sichtbar. Die Segmente beginnen und enden dennoch am Rand des Abstands, sodass mit `column-rule-inset-*`-Eigenschaften festgelegte Versätze weiterhin gelten.

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
