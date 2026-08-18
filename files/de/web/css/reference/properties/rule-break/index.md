---
title: "`rule-break` CSS property"
short-title: rule-break
slug: Web/CSS/Reference/Properties/rule-break
l10n:
  sourceCommit: 65de0b20f182edef16b58da2df80112b39787a04
---

{{SeeCompatTable}}

Die **`rule-break`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Verhalten für das Brechen von Spalten- und Zeilenregeln in Segmente fest, an denen sich Reihen und Spaltenabstände schneiden, und setzt {{cssxref("column-rule-break")}} und {{cssxref("row-rule-break")}} auf denselben Wert.

{{InteractiveExample("CSS Demo: rule")}}

```css interactive-example-choice
rule-break: none;
```

```css interactive-example-choice
rule-break: normal;
```

```css interactive-example-choice
rule-break: intersection;
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
  column-rule: solid thick purple;
  gap: 10px;
}
#example-element i {
  padding: 5px;
}
```

## Bestandteil-Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("column-rule-break")}}
- {{cssxref("row-rule-break")}}

## Syntax

```css
/* Keywords */
rule-break: none;
rule-break: normal;
rule-break: intersection;

/* Global values */
rule-break: inherit;
rule-break: initial;
rule-break: revert;
rule-break: revert-layer;
rule-break: unset;
```

### Werte

Diese Eigenschaft wird als einzelnes Schlüsselwort aus der folgenden Liste angegeben:

- `none`
  - : Es gibt keine Unterbrechungen, wenn sich Zeilen- und Spaltenregeln schneiden; vielmehr wird eine kontinuierliche Dekoration von einem Ende jeder Lücke zum anderen gemalt.
- `normal`
  - : In Flex- und Grid-Containern verhält sich diese Eigenschaft wie `none`. In Mehrspalten (multi-col) verhält sich `column-rule-break` wie `intersection` und `row-rule-break` wie `none`. Dies ist der Standardwert.
- `intersection`
  - : Regeln brechen immer, wenn sie auf eine Lücke stoßen, wobei Regelabschnitte am Container- und Lückenrand beginnen und enden.

## Beschreibung

Die `rule-break` Eigenschaft wird verwendet, um das Verhalten für das Brechen von Regeln in Segmente festzulegen, wenn sie Lücken kreuzen.

Lückendekorationen werden innerhalb einer Lücke als ein oder mehrere Lückendekorationssegmente gemalt, wobei Segmente zwischen zwei benachbarten Elementen auftreten. Abhängig vom Containertyp können diese Segmente standardmäßig entweder am Rand einer Lücke enden, oder die Spalten- und Zeilenregel kann die gesamte Höhe und Breite des Containers umfassen.

Wenn es eine Unterbrechung in einer Regel gibt, beginnen und enden die Segmente standardmäßig am Rand der Lücken. Wenn die Lückengröße `0` ist, kann die Unterbrechung möglicherweise nicht sichtbar sein. Die `rule-break` Eigenschaft bestimmt, ob die Unterbrechung auftritt. Sie können die Größe der Unterbrechung am Ende jedes Segments mit den `rule-inset` Eigenschaften steuern. Wenn es keine Unterbrechungen gibt und die Linie kontinuierlich ist, beeinflussen die `rule-inset` Eigenschaften nur die Regel an den Start- und Endkanten des Containers. Wenn es Unterbrechungen gibt, beeinflussen die `rule-inset` Eigenschaften den Start und das Ende jedes Regelabschnitts.

Ob eine Regel standardmäßig aus einem einzigen kontinuierlichen Segment oder Segmenten besteht, die beim Kreuzen von Lücken brechen, hängt vom Containertyp ab.

### Grid-Container

In Grid-Containern setzen sich Regelabschnitte standardmäßig durch sichtbare "Kreuz"-Schnittstellen fort. Das Setzen von `rule-break: intersection` zwingt die Segmente dazu, dort zu brechen, wo sie sonst kreuzen würden.

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
    ><input type="checkbox" /> Set <code>rule-break: intersection</code></label
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
  rule-break: intersection;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  rule: 5px solid red;
  width: 100%;
}

.grid > div {
  border: 1px solid green;
  background-color: lime;
  height: 30px;
}
```

{{EmbedLiveSample("grid containers", "", "240")}}

Aktivieren Sie das Kontrollkästchen, um `rule-break` auf `intersection` zu setzen, was die kontinuierlichen Regeln an jeder "Kreuz"-Schnittstelle unterbrechen lässt.

### Flex-Container

In Flexbox, wenn die `flex-direction` `row` oder `row-reverse` ist, ist die Zeilenregel kontinuierlich, wobei die Spaltensegmente am Rand der Zeilenlücken beginnen und enden. Wenn die `flex-direction` `column` oder `column-reverse` ist, ist die Spaltenregel kontinuierlich, wobei die Zeilensegmente am Rand der Spaltenlücken beginnen und enden.

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
    ><input type="checkbox" /> Set <code>rule-break: intersection</code></label
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
  rule-break: intersection;
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
  rule: 5px solid red;
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

Beachten Sie, wie, abhängig von der `flex-direction`, die Spalten- oder Zeilenregeln standardmäßig kontinuierlich sind. Wenn Sie `rule-break` auf `intersection` setzen, brechen diese kontinuierlichen Regeln an jeder Schnittstelle.

### Multi-col Container

In Mehrspalten-Containern unterscheidet sich das Standardverhalten `normal` zwischen Zeilen- und Spaltenregeln. Spaltenregelabschnitte beginnen und enden, wenn sie eine Zeilenlücke kreuzen, und verhalten sich wie `column-rule-break: intersection`, während Zeilenregeln nicht brechen, wenn sie eine Spaltenlücke kreuzen, und sich wie `row-rule-break: none` verhalten.

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
  <li>Yes. Some are red.</li>
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
  <legend>Set <code>rule-break:</code></legend>
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
  rule: 5px solid red;
}
li {
  border: 1px solid green;
  background-color: lime;
  list-style-type: none;
  margin-bottom: 5px;
}
:has([value="normal"]:checked) ol {
  rule-break: normal;
}
:has([value="intersection"]:checked) ol {
  rule-break: intersection;
}
:has([value="none"]:checked) ol {
  rule-break: none;
}
label {
  margin-right: 20px;
}
```

{{EmbedLiveSample("multi-col containers", "", "540")}}

Aktivieren Sie die Optionsfelder für jeden Wert, um den Effekt des Wertes zu sehen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel verwenden wir die `rule-break` Eigenschaft, um jedes Regelsegment in einem Grid-Container zu brechen, sodass keine Regeln sich schneiden.

#### HTML

Wir erstellen eine Liste von 50 Elementen. Der Großteil des HTML ist der Übersichtlichkeit halber ausgeblendet.

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
<ul>
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

Wir definieren die ungeordnete Liste als 8-Spalten-Container, erstellen Spalten und Zeilen mit der {{cssxref("grid-template-columns")}} Eigenschaft und setzen {{cssxref("list-style-type")}} auf `none`, um die Punkte zu entfernen. Wir fügen einen {{cssxref("gap")}} von `20px` ein, um genügend Platz zwischen den Spalten und Zeilen zu schaffen, um unsere `20px` breiten, festen Spalten- und Zeilenregeln zu passen. Schließlich setzen wir die Regelabschnitte so, dass sie brechen anstatt sich zu kreuzen.

```css live-sample___basic
ul {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  list-style-type: none;
  gap: 20px;

  row-rule: 20px solid palegoldenrod;
  column-rule: 20px solid olive;

  rule-break: intersection;
}
```

Der Rest des CSS ist der Übersichtlichkeit halber ausgeblendet.

```css hidden live-sample___basic
ol {
  place-items: center;
}
li {
  text-align: center;
  aspect-ratio: 1;
  font-family: sans-serif;
  line-height: 50px;
}
```

#### Ergebnis

{{EmbedLiveSample("Basic", "", "640")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("rule-inset")}} Kurzform
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- {{cssxref("rule")}} Kurzform
- [CSS-Abstände](/de/docs/Web/CSS/Guides/Gaps) Modul
