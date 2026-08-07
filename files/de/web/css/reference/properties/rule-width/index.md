---
title: "`rule-width` CSS property"
short-title: rule-width
slug: Web/CSS/Reference/Properties/rule-width
l10n:
  sourceCommit: 343ab51426f9279175b8f71fff911621d0a7da20
---

{{SeeCompatTable}}

Die **`rule-width`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Breiten von Linien, die in den Zwischenräumen von mehrzeiligen Raster-, Flex- und Multi-Column-Layouts gezeichnet werden, und setzt die Breiten der Spalten- und Zeilenlinien auf denselben Wert.

{{InteractiveExample("CSS Demo: rule-width")}}

```css interactive-example-choice
rule-width: thin;
```

```css interactive-example-choice
rule-width: thin, thick;
```

```css interactive-example-choice
rule-width: 1px, 10px;
```

```css interactive-example-choice
rule-width: repeat(2, thin, thick), 10px;
```

```css interactive-example-choice
rule-width: thick, repeat(auto, 1px, 2px), thick;
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
  rule: solid magenta;
}
#example-element i {
  padding: 5px;
}
```

## Zusätzliche Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("column-rule-width")}}
- {{cssxref("row-rule-width")}}

## Syntax

```css
/* Keyword values */
rule-width: thin;
rule-width: medium;
rule-width: thick;
rule-width: thin, medium, thick;
rule-width: thick, repeat(5, thin), thick;
rule-width: thick, repeat(auto, thin, medium), thick;

/* Length values */
rule-width: 1px;
rule-width: 5px;
rule-width: 1px, 3px, 5px;
rule-width: 5px, repeat(auto, 1px), 10px, 15px;
rule-width: 5px, repeat(5, 1px, 3px), 5px;

/* Global values */
rule-width: inherit;
rule-width: initial;
rule-width: revert;
rule-width: revert-layer;
rule-width: unset;
```

### Werte

Die `rule-width`-Eigenschaft akzeptiert eine durch Kommas getrennte Liste von Werten, darunter:

- `<line-width>`
  - : Ein {{cssxref("line-width")}}: Dies kann eines der Schlüsselwörter `thin`, `medium` oder `thick` sein, oder ein positiver {{cssxref("length")}}-Wert, der die Breite der Linie darstellt. Der Standardwert ist `medium`.

- `<repeat-line-width>`
  - : Eine {{cssxref("repeat()")}} Funktion, wobei das erste Argument ein {{cssxref("&lt;integer&gt;")}} von `1` oder mehr ist, und ein oder mehrere {{cssxref("&lt;line-width&gt;")}}-Werte als nachfolgende Argumente. Der Integer definiert, wie oft die `<line-width>`-Werte wiederholt werden sollen.

- `<auto-repeat-line-width>`
  - : Eine {{cssxref("repeat()")}} Funktion, mit `auto` als erstes Argument und einem oder mehreren `<line-width>`-Werten als nachfolgende Argumente. Die angegebenen `<line-width>`-Werte werden so oft wie nötig wiederholt, um Werte für alle Regeln zu füllen, die nicht explizit durch andere Komponenten des Eigenschaftswerts angegeben sind.

## Beschreibung

Die `rule-width` Kurzform-Eigenschaft definiert die Breiten der Linien, die in den Lücken zwischen Spalten und Zeilen in [Multi-Column](/de/docs/Web/CSS/Guides/Multicol_layout), [Flex](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Grid](/de/docs/Web/CSS/Guides/Grid_layout)-Containern mit mehr als einer Zeile oder Spalte gezeichnet werden.

Der Wert ist eine durch Kommas getrennte Liste von Komponenten, die `<line-width>`, `<repeat-line-width>` und `<auto-repeat-line-width>` Typen enthalten kann.

Die `rule-width`-Eigenschaft kann zusammen mit den {{cssxref("rule-color")}} und {{cssxref("rule-style")}} Eigenschaften durch die {{cssxref("rule")}} Kurzform gesetzt werden.

Besteht der Eigenschaftswert nur aus einem `<line-width>`, werden alle Zeilen- und Spaltenregeln diese Breite haben. Wenn wir folgendes deklarieren, werden alle Regeln `3px` sein:

```css
rule-width: 3px;
```

Wenn mehrere `<line-width>`-Werte deklariert werden, werden sie in der angegebenen Reihenfolge auf die Regeln angewendet. Wenn es mehr Regeln als `<line-width>`-Werte gibt, wird die Liste der Linienstärken wiederholt, bis jede Regel eine Breite hat. Wenn wir zum Beispiel folgendes deklarieren, wird jede ungerade horizontale und vertikale Regel `thin` sein und jede gerade Regel `1em`.

```css
rule-width: thin, 1em;
```

### Wiederholte Linienstärken

Die `repeat()`-Funktion, mit einem Integer von `1` oder größer als erstes Argument, kann verwendet werden, um eine gültige Liste von CSS {{cssxref("&lt;line-width&gt;")}}-Werten, die als nachfolgende Argumente übergeben werden, die angegebene Anzahl von Malen zu wiederholen. Dies ermöglicht es, die gleichen Breiten eine feste Anzahl von Malen zu wiederholen, ohne die Werte zu wiederholen. Die folgenden Deklarationen sind äquivalent:

```css
rule-width: 1rem, thick, thin, thick, thin, thick, thin;
rule-width: 1rem, repeat(3, thick, thin);
```

Sie können beliebige `<line-width>`-Werte verwenden, einschließlich benutzerdefinierter Eigenschaften, die auf eine `<line-width>` aufgelöst werden. Die Verwendung von `repeat()` kann es erleichtern, Werte zu schreiben, insbesondere bei der Verwendung komplexer Längenberechnungen. Sie ermöglicht es, ein wiederkehrendes Muster mit einer einzigen Funktion zu schreiben, unabhängig von der Anzahl der Spalten oder Zeilen.

### Automatisch wiederholte Linienstärken

Die `repeat()`-Funktion akzeptiert auch `auto` als erstes Argument anstelle eines positiven Integers. Mit `auto` als erstes Argument werden die Liste der `<line-width>`-Werte, die als nachfolgende Argumente übergeben werden, so oft wie nötig wiederholt, um Werte für alle Regeln zu füllen, die nicht explizit durch andere Komponenten des Eigenschaftswerts angegeben sind.

```css
rule-width: thin, repeat(auto, medium), thin;
```

In diesem Fall werden die erste und letzte Spalten- und Zeilenregel immer `thin` sein, und alle anderen Regeln werden `medium` sein. Wenn es nur 2 oder 3 Spalten und Zeilen gibt, wird es keine mittelgroßen Regeln geben.

Das `auto` Schlüsselwort innerhalb der `repeat()`-Funktion erstellt einen Auto-Repeater, der Werte für Spalten- und Zeilenregeln füllt, die andernfalls keine Werte von anderen Teilen der Liste erhalten würden, und verhindert, dass die Liste durchlaufen wird. Maximal kann nur ein `repeat(auto, <width>)` in einem `rule-width`-Wert vorhanden sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegendes Beispiel

In diesem Beispiel definieren wir eine einzelne Breite für die Linien, die zwischen den Spalten und Zeilen von Elementen in einem Grid-Container gezeichnet werden.

#### HTML

Wir erstellen eine Liste von 75 Elementen. Ein Großteil des HTML ist aus Gründen der Übersichtlichkeit ausgeblendet.

```html
<ul>
  <li>1</li>
  <li>2</li>
  ...
  <li>74</li>
  <li>75</li>
</ul>
```

```html hidden live-sample___basic live-sample___repeat live-sample___func live-sample___auto
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
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
  <li>51</li>
  <li>52</li>
  <li>53</li>
  <li>54</li>
  <li>55</li>
  <li>56</li>
  <li>57</li>
  <li>58</li>
  <li>59</li>
  <li>60</li>
  <li>61</li>
  <li>62</li>
  <li>63</li>
  <li>64</li>
  <li>65</li>
  <li>66</li>
  <li>67</li>
  <li>68</li>
  <li>69</li>
  <li>70</li>
  <li>71</li>
  <li>72</li>
  <li>73</li>
  <li>74</li>
  <li>75</li>
</ul>
```

#### CSS

Wir definieren die ungeordnete Liste als einen 10-Spalten-Grid-Container. Wir fügen einen {{cssxref("gap")}} von `5px` ein, um genug Platz zwischen den Elementen zu haben, damit unsere `3px` gestrichelte rote Regel passt:

```css live-sample___basic live-sample___repeat live-sample___func live-sample___auto
ul {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  list-style-type: none;
  gap: 5px;
  rule-style: dashed;
  rule-color: red;
  rule-width: 3px;
}
li {
  text-align: center;
  aspect-ratio: 1;
}
```

```css hidden live-sample___basic
@layer no-support {
  @supports not (rule-width: medium) {
    body::before {
      content: "Your browser doesn't support the rule-width property";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

#### Ergebnis

{{EmbedLiveSample("Basic", "", "600")}}

### Wiederholte Werte

Dieses Beispiel zeigt, wie die Werte wiederholt werden, wenn es weniger Werte in der Liste der Breiten als Spalten- oder Zeilenregeln gibt.

Wir verwenden dasselbe HTML und CSS wie im vorherigen Beispiel, und fügen drei durch Kommas getrennte Breiten als `rule-width` hinzu.

```css live-sample___repeat
ul {
  rule-width: thin, 6px, 12px;
}
```

{{EmbedLiveSample("Repeat", "", "600")}}

Da der Grid-Container 8 Zeilen und 10 Spalten hat, gibt es jeweils sieben und neun Rillen in jede Richtung, sodass die Sequenz von drei `<line-width>`-Werten in beide Richtungen wiederholt wird.

### Verwendung der `repeat()`-Funktion

Dieses Beispiel zeigt die Verwendung der `repeat()`-Funktion im `rule-width`-Eigenschaftswert und wie diese Funktion helfen kann, die Länge der Wertedeklarationen zu reduzieren.

Wir verwenden dasselbe HTML und CSS wie in den vorherigen Beispielen. Zusätzlich deklarieren wir zwei benutzerdefinierte Eigenschaften, die wir in einer `repeat()`-Funktion innerhalb unseres `rule-width`-Werts verwenden. Die `repeat()`-Funktion setzt eine Liste von zwei `<line-width>`-Werten, die dreimal wiederholt werden.

```css live-sample___func live-sample___auto
ul {
  --base: 0.5vw;
  --secondary: 1vw;
  rule-width:
    15px,
    repeat(
      4,
      min(calc(var(--base) + 3px), 10px),
      abs(calc(var(--secondary) - 2px))
    ),
    15px;
}
```

{{EmbedLiveSample("func", "", "600")}}

Die `repeat()`-Funktion wiederholt zwei Breitenwerte viermal, wodurch eine Liste von zehn Breitenwerten entsteht. Da es weniger Spalten- und Zeilenrillen als Gesamtbreiten gibt, werden die letzten Werte in der Liste verworfen.

### Verwendung von `auto` innerhalb von `repeat()`

Dieses Beispiel zeigt die Verwendung von `auto` anstelle eines Integers innerhalb der `repeat()`-Funktion.

Mit `repeat(auto, <line-width>)` setzen wir alle Spalten- und Zeilenregeln auf `1px`, außer der ersten und letzten, die wir auf `5px` setzen.

```css live-sample___auto
ul {
  rule-width: 5px, repeat(auto, 1px), 5px;
}
```

{{EmbedLiveSample("auto", "", "600")}}

```css hidden live-sample___basic live-sample___repeat live-sample___func live-sample___auto
@layer no-support {
  @supports not (rule-width: thin, thick) {
    body::before {
      content: "Your browser doesn't support the rule-width property";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("rule-color")}}
- {{cssxref("rule-style")}}
- {{cssxref("column-rule-width")}}
- {{cssxref("row-rule-width")}}
- {{cssxref("rule")}} Kurzform
- [CSS-Lücken](/de/docs/Web/CSS/Guides/Gaps) Modul
