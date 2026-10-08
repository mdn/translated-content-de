---
title: "`row-rule-break` CSS property"
short-title: row-rule-break
slug: Web/CSS/Reference/Properties/row-rule-break
l10n:
  sourceCommit: d3a0fd9820ca27a3f17642841af8426735cb4ec3
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`row-rule-break`** legt fest, wie Zeilenlinien in Segmente unterteilt werden, wenn sie Spaltenabstände kreuzen.

{{InteractiveExample("CSS Demo: row-rule-break")}}

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

Diese Eigenschaft wird durch eines der folgenden Schlüsselwörter angegeben:

- `none`
  - : Zeilenlinien werden nicht unterbrochen, wenn sie Spaltenabstände kreuzen. Stattdessen wird eine durchgehende Zeilenlinie über die gesamte Breite des Containers von einem Rand zum anderen gezeichnet.
- `normal`
  - : Verhält sich in Grid-, Flex- und mehrspaltigen Layouts wie `none`. Dies ist der Standardwert.
- `intersection`
  - : Zeilenlinien werden immer unterbrochen, wenn sie Spaltenabstände kreuzen. Die Segmente beginnen und enden an den Rändern des Containers oder der Abstände.

## Beschreibung

Die Eigenschaft `row-rule-break` legt fest, ob Zeilenlinien beim Kreuzen von Spaltenabständen in Segmente unterteilt werden.

Zeilenlinien werden innerhalb eines Zeilenabstands als ein oder mehrere Segmente gezeichnet. Diese Segmente liegen zwischen benachbarten Grid-Items in verschiedenen Zeilen, zwischen Flex-Items oder Flex-Zeilen – abhängig von {{cssxref("flex-direction")}} in Flex-Layouts – oder zwischen benachbarten Spaltenreihen in mehrspaltigen Layouts, wenn {{cssxref("column-height")}} mehrere Spaltenreihen erzeugt.

Die Eigenschaft `row-rule-break` bestimmt nur, ob eine Unterbrechung auftritt. Standardmäßig entspricht die Unterbrechung beziehungsweise der Abstand zwischen den Segmenten der Breite des Spaltenabstands, da jedes Segment am Rand des Abstands oder des Containers beginnt und endet. Wenn der Abstand `0` beträgt, ist die Unterbrechung möglicherweise nicht sichtbar. Die Endpositionen lassen sich mit den {{cssxref("row-rule-inset")}}-Eigenschaften steuern.

Wenn `row-rule-break` auf `none` gesetzt ist, gibt es keine Unterbrechungen: Die Zeilenlinie verläuft durchgehend, und Werte für `row-rule-inset` wirken sich nur am linken und rechten Rand des Containers auf sie aus. Wenn Unterbrechungen vorhanden sind, beeinflussen die `row-rule-inset`-Eigenschaften den Anfang und das Ende jedes Segments.

Die Eigenschaft `row-rule-break` kann zusammen mit der Eigenschaft {{cssxref("column-rule-break")}} über die Kurzform {{cssxref("rule-break")}} festgelegt werden.

Ob eine Zeilenlinie standardmäßig aus einem einzigen durchgehenden Segment besteht oder bei Spaltenabständen unterbrochen wird, hängt vom Containertyp ab.

### Grid-Container

In Grid-Containern verlaufen Zeilenliniensegmente standardmäßig durch sichtbare Kreuzungspunkte hindurch. Mit `row-rule-break: intersection` werden die Segmente an jedem Spaltenabstand unterbrochen, den sie andernfalls kreuzen würden.

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

@layer no-support {
  @supports not (row-rule-break: intersection) {
    body::before {
      content: "Your browser doesn't support the row-rule-break property";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

{{EmbedLiveSample("grid containers", "", "240")}}

Standardmäßig werden Zeilenlinien nicht unterbrochen. Aktivieren Sie das Kontrollkästchen, um `row-rule-break` auf `intersection` zu setzen. Dadurch werden die durchgehenden Linien an jedem Kreuzungspunkt unterbrochen. Der Abstand zwischen den Segmenten entspricht standardmäßig der Breite von {{cssxref("column-gap")}}.

### Flex-Container

In Flexbox-Layouts mit horizontaler Schreibrichtung und `flex-direction` auf `row` oder `row-reverse` ist die Zeilenlinie durchgehend, während die Spaltenliniensegmente an den Rändern der Zeilenabstände beginnen und enden. Bei `flex-direction` auf `column` oder `column-reverse` ist die Spaltenlinie durchgehend, während die Zeilenliniensegmente an den Rändern der Spaltenabstände beginnen und enden.

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

@layer no-support {
  @supports not (row-rule-break: intersection) {
    body::before {
      content: "Your browser doesn't support the row-rule-break property";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

{{EmbedLiveSample("Flex containers", "", "300")}}

Bei horizontaler Schreibrichtung ist die Zeilenlinie mit `row` oder `row-reverse` standardmäßig durchgehend. Mit `column` oder `column-reverse` wird sie dagegen an jedem Spaltenabstand unterbrochen. Wird `row-rule-break` auf `intersection` gesetzt, wirkt sich das nur bei `row` und `row-reverse` auf die Zeilenlinien aus.

### Mehrspaltige Container

In mehrspaltigen Containern verhält sich der Standardwert `normal` wie `none`.

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
@layer no-support {
  @supports not (row-rule-break: intersection) {
    body::before {
      content: "Your browser doesn't support the row-rule-break property";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

{{EmbedLiveSample("multi-col containers", "", "540")}}

Wenn Sie `intersection` auswählen, wird die Zeilenlinie an jedem Spaltenabstand in Segmente unterteilt. Jedes Segment beginnt und endet am Rand des Abstands. Die Anfangs- und Endpositionen lassen sich mit den `row-rule-inset`-Eigenschaften ändern.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel verwenden wir die Eigenschaft `row-rule-break`, um die Zeilenlinien in einem Grid-Container an den Spaltenabständen in Segmente zu unterteilen. Wenn Sie die Eigenschaft `column-gap` ändern, ändert sich die Größe der Segmente.

#### HTML

Wir erstellen eine Liste mit 50 Einträgen und einen Schieberegler, mit dem sich die Breite des Spaltenabstands ändern lässt. Der Großteil des HTML-Codes ist der Kürze halber ausgeblendet.

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

Wir definieren die ungeordnete Liste als Container mit acht Spalten. Mit der Eigenschaft {{cssxref("grid-template-columns")}} erstellen wir Spalten und Zeilen; außerdem setzen wir {{cssxref("list-style-type")}} auf `none`, um die Aufzählungszeichen zu entfernen. Mit {{cssxref("gap")}} auf `20px` schaffen wir zwischen den Spalten und Zeilen genug Platz für die durchgezogenen, `20px` breiten Spalten- und Zeilenlinien. Abschließend legen wir fest, dass die Zeilenlinien an jedem Kreuzungspunkt in Segmente unterteilt werden.

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
  @supports not (row-rule-break: intersection) {
    body::before {
      content: "Your browser doesn't support the row-rule-break property";
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
  output.innerText = ul.style.columnGap = `${gap.value}px`;
});
```

#### Ergebnis

{{EmbedLiveSample("Basic", "", "600")}}

Vergrößern Sie die Spaltenabstände und beobachten Sie, wie die Unterbrechungen zwischen den Zeilenliniensegmenten wachsen. Verringern Sie die Breite des Spaltenabstands auf `0px`: Die Zeilendekoration erscheint nun durchgehend. Das ist sie jedoch nicht! Der Abstand von `0px` zwischen den Segmenten ist möglicherweise nicht sichtbar, aber die Segmente beginnen und enden weiterhin am Spaltenabstand. Daher werden mit den `row-rule-inset`-Eigenschaften festgelegte Versätze weiterhin angewendet.

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
- Modul [CSS-Abstände](/de/docs/Web/CSS/Guides/Gaps)
