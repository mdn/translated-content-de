---
title: "`rule-break` CSS property"
short-title: rule-break
slug: Web/CSS/Reference/Properties/rule-break
l10n:
  sourceCommit: d3a0fd9820ca27a3f17642841af8426735cb4ec3
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`rule-break`** legt fest, ob Spalten- und Zeilenlinien an Schnittpunkten von Zeilen- und Spaltenabständen in Segmente unterteilt werden. Sie setzt {{cssxref("column-rule-break")}} und {{cssxref("row-rule-break")}} auf denselben Wert.

{{InteractiveExample("CSS Demo: rule-break")}}

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

## Zugehörige Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("column-rule-break")}}
- {{cssxref("row-rule-break")}}

## Syntax

```css
/* Keyword values */
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

Für diese Eigenschaft wird eines der folgenden Schlüsselwörter angegeben:

- `none`
  - : An Schnittpunkten von Zeilen- und Spaltenlinien gibt es keine Unterbrechungen. Stattdessen wird eine durchgehende Linie von einem Ende des jeweiligen Abstands zum anderen gezeichnet.
- `normal`
  - : Verhält sich in Flex- und Grid-Containern wie `none`. In Multi-Column-Containern verhält sich `column-rule-break` wie `intersection` und `row-rule-break` wie `none`. Dies ist der Standardwert.
- `intersection`
  - : Linien werden immer unterbrochen, wenn sie einen Abstand kreuzen. Die Liniensegmente beginnen und enden an den Rändern des Containers und der Abstände.

## Beschreibung

Mit der Eigenschaft `rule-break` legen Sie fest, ob Linien beim Kreuzen von Abständen in Segmente unterteilt werden.

Linien innerhalb eines Abstands werden als ein oder mehrere Segmente gezeichnet, wobei zwischen jeweils zwei benachbarten Elementen Segmente auftreten. Je nach Containertyp enden diese Segmente standardmäßig entweder am Rand eines Abstands, oder die Spalten- und Zeilenlinien erstrecken sich über die gesamte Höhe beziehungsweise Breite des Containers.

Wenn eine Linie unterbrochen wird, beginnen und enden ihre Segmente standardmäßig am Rand der Abstände. Bei einer Abstandsgröße von `0` ist die Unterbrechung möglicherweise nicht sichtbar. Die Eigenschaft `rule-break` bestimmt, ob eine Unterbrechung erfolgt. Mit den `rule-inset`-Eigenschaften können Sie den Abstand zwischen den Segmenten an deren Enden steuern. Wenn keine Unterbrechungen vorhanden sind und die Linie durchgehend ist, wirken sich die `rule-inset`-Eigenschaften nur auf die Linie am Anfangs- und Endrand des Containers aus. Bei Unterbrechungen wirken sie sich auf den Anfang und das Ende jedes Liniensegments aus.

Ob eine Linie standardmäßig aus einem einzigen durchgehenden Segment besteht oder an Schnittpunkten mit Abständen unterbrochen wird, hängt vom Containertyp ab.

### Grid-Container

In Grid-Containern verlaufen Liniensegmente standardmäßig durch sichtbare kreuzförmige Schnittpunkte hindurch. Mit `rule-break: intersection` werden die Segmente an diesen Stellen unterbrochen.

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

@layer no-support {
  @supports not (rule-break: intersection) {
    body::before {
      content: "Your browser doesn't support the rule-break property";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

{{EmbedLiveSample("grid containers", "", "240")}}

Aktivieren Sie das Kontrollkästchen, um `rule-break` auf `intersection` zu setzen. Dadurch werden die durchgehenden Linien an jedem kreuzförmigen Schnittpunkt unterbrochen.

### Flex-Container

In Flexbox-Containern ist die Zeilenlinie durchgehend, wenn `flex-direction` den Wert `row` oder `row-reverse` hat. Die Spaltensegmente beginnen und enden dann am Rand der Zeilenabstände. Bei `flex-direction: column` oder `flex-direction: column-reverse` ist die Spaltenlinie durchgehend, während die Zeilensegmente am Rand der Spaltenabstände beginnen und enden.

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
@layer no-support {
  @supports not (rule-break: intersection) {
    body::before {
      content: "Your browser doesn't support the rule-break property";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

{{EmbedLiveSample("Flex containers", "", "300")}}

Beachten Sie, dass je nach `flex-direction` standardmäßig die Spalten- oder die Zeilenlinien durchgehend sind. Wenn Sie `rule-break` auf `intersection` setzen, werden diese durchgehenden Linien an jedem Schnittpunkt unterbrochen.

### Multi-Column-Container

In Multi-Column-Containern unterscheidet sich das Standardverhalten von `normal` für Zeilen- und Spaltenlinien. Spaltenliniensegmente beginnen und enden dort, wo sie einen Zeilenabstand kreuzen, entsprechend `column-rule-break: intersection`. Zeilenlinien werden dagegen beim Kreuzen eines Spaltenabstands nicht unterbrochen, entsprechend `row-rule-break: none`.

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
@layer no-support {
  @supports not (rule-break: intersection) {
    body::before {
      content: "Your browser doesn't support the rule-break property";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

{{EmbedLiveSample("multi-col containers", "", "540")}}

Wählen Sie die Optionsfelder für die einzelnen Werte aus, um deren Wirkung zu sehen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel verwenden wir die Eigenschaft `rule-break`, um die Liniensegmente in einem Grid-Container so zu unterbrechen, dass sich keine Linien kreuzen.

#### HTML

Wir erstellen eine Liste mit 50 Elementen. Der größte Teil des HTML ist der Kürze halber ausgeblendet.

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

Wir definieren die ungeordnete Liste mit der Eigenschaft {{cssxref("grid-template-columns")}} als Container mit acht Spalten und den dazugehörigen Zeilen. Außerdem setzen wir {{cssxref("list-style-type")}} auf `none`, um die Aufzählungszeichen zu entfernen. Mit einem {{cssxref("gap")}} von `20px` schaffen wir zwischen den Spalten und Zeilen genug Platz für die durchgezogenen Spalten- und Zeilenlinien mit einer Breite von `20px`. Abschließend legen wir fest, dass die Liniensegmente unterbrochen werden, statt sich zu kreuzen.

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

Der restliche CSS-Code ist der Kürze halber ausgeblendet.

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
@layer no-support {
  @supports not (rule-break: intersection) {
    body::before {
      content: "Your browser doesn't support the rule-break property";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

#### Ergebnis

{{EmbedLiveSample("Basic", "", "640")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Kurzschreibweise {{cssxref("rule-inset")}}
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- Kurzschreibweise {{cssxref("rule")}}
- Modul [CSS-Abstände](/de/docs/Web/CSS/Guides/Gaps)
