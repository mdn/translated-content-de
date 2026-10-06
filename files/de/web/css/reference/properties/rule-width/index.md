---
title: "`rule-width` CSS property"
short-title: rule-width
slug: Web/CSS/Reference/Properties/rule-width
l10n:
  sourceCommit: 5fd3b03e9ad1ee4e8bc64d4f6888570690a7fbc8
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`rule-width`** definiert die Breite von Linien in den Zwischenräumen mehrzeiliger Grid-, Flex- und Mehrspaltenlayouts. Dabei erhalten die Linien zwischen Spalten und Zeilen dieselbe Breite.

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

## Zugehörige Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

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

Die Eigenschaft `rule-width` akzeptiert eine durch Kommas getrennte Liste von Werten, darunter:

- `<line-width>`
  - : Ein {{cssxref("line-width")}}-Wert: Dies kann eines der Schlüsselwörter `thin`, `medium` oder `thick` oder ein positiver {{cssxref("length")}}-Wert sein, der die Breite der Linie angibt. Der Standardwert ist `medium`.

- `<repeat-line-width>`
  - : Eine {{cssxref("repeat()")}}-Funktion mit einem {{cssxref("&lt;integer&gt;")}}-Wert von `1` oder mehr als erstem Argument und einem oder mehreren {{cssxref("&lt;line-width&gt;")}}-Werten als weiteren Argumenten. Die Ganzzahl legt fest, wie oft die `<line-width>`-Werte wiederholt werden.

- `<auto-repeat-line-width>`
  - : Eine {{cssxref("repeat()")}}-Funktion mit `auto` als erstem Argument und einem oder mehreren `<line-width>`-Werten als weiteren Argumenten. Die angegebenen `<line-width>`-Werte werden so oft wiederholt, wie es nötig ist, um Werte für alle Linien bereitzustellen, die nicht ausdrücklich durch andere Bestandteile des Eigenschaftswerts festgelegt sind.

## Beschreibung

Die Kurzschreibweise `rule-width` definiert die Breite von Linien, die in den Zwischenräumen zwischen Spalten und Zeilen von [Mehrspalten-](/de/docs/Web/CSS/Guides/Multicol_layout), [Flex-](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Grid-Containern](/de/docs/Web/CSS/Guides/Grid_layout) mit mehr als einer Zeile oder Spalte gezeichnet werden.

Der Wert ist eine durch Kommas getrennte Liste von Bestandteilen, die Werte der Typen `<line-width>`, `<repeat-line-width>` und `<auto-repeat-line-width>` enthalten kann.

Die Eigenschaft `rule-width` kann zusammen mit den Eigenschaften {{cssxref("rule-color")}} und {{cssxref("rule-style")}} über die Kurzschreibweise {{cssxref("rule")}} festgelegt werden.

Besteht der Eigenschaftswert nur aus einem `<line-width>`-Wert, erhalten alle Linien zwischen Zeilen und Spalten diese Breite. Mit der folgenden Deklaration sind alle Linien `3px` breit:

```css
rule-width: 3px;
```

Wenn mehrere `<line-width>`-Werte angegeben werden, werden sie in der angegebenen Reihenfolge auf die Linien angewendet. Gibt es mehr Linien als `<line-width>`-Werte, wird die Liste der Linienbreiten wiederholt, bis jede Linie eine Breite hat. Mit der folgenden Deklaration ist beispielsweise jede ungerade horizontale und vertikale Linie `thin` und jede gerade Linie `1em` breit.

```css
rule-width: thin, 1em;
```

### Wiederholte Linienbreiten

Mit der Funktion `repeat()` und einer Ganzzahl von mindestens `1` als erstem Argument können Sie eine als weitere Argumente übergebene Liste gültiger CSS-{{cssxref("&lt;line-width&gt;")}}-Werte die angegebene Anzahl von Malen wiederholen. So lassen sich dieselben Breiten mehrfach verwenden, ohne die Werte erneut aufzuführen. Die folgenden Deklarationen sind gleichwertig:

```css
rule-width: 1rem, thick, thin, thick, thin, thick, thin;
rule-width: 1rem, repeat(3, thick, thin);
```

Sie können beliebige `<line-width>`-Werte verwenden, einschließlich benutzerdefinierter Eigenschaften, die zu einem `<line-width>`-Wert aufgelöst werden. `repeat()` kann die Angabe von Werten vereinfachen, insbesondere bei komplexen Längenberechnungen. Damit lässt sich ein wiederkehrendes Muster unabhängig von der Anzahl der Spalten oder Zeilen mit einer einzigen Funktion ausdrücken.

### Automatisch wiederholte Linienbreiten

Die Funktion `repeat()` akzeptiert als erstes Argument auch `auto` anstelle einer positiven Ganzzahl. Bei `auto` werden die als weitere Argumente übergebenen `<line-width>`-Werte so oft wiederholt, wie es nötig ist, um Werte für alle Linien bereitzustellen, die nicht ausdrücklich durch andere Bestandteile des Eigenschaftswerts festgelegt sind.

```css
rule-width: thin, repeat(auto, medium), thin;
```

In diesem Fall sind die jeweils erste und letzte Linie zwischen Spalten und Zeilen immer `thin` und alle übrigen Linien `medium`. Bei nur zwei oder drei Spalten und Zeilen gibt es keine Linien mit der Breite `medium`.

Das Schlüsselwort `auto` innerhalb der Funktion `repeat()` erzeugt eine automatische Wiederholung. Sie weist Spalten- und Zeilenlinien Werte zu, die andernfalls durch keinen anderen Teil der Liste einen Wert erhalten würden, und verhindert so, dass die Liste erneut von vorn durchlaufen wird. Ein `rule-width`-Wert darf höchstens ein `repeat(auto, <width>)` enthalten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel legen wir eine einheitliche Breite für die Linien zwischen den Spalten und Zeilen eines Grid-Containers fest.

#### HTML

Wir erstellen eine Liste mit 75 Elementen. Der größte Teil des HTML-Codes ist der Kürze halber ausgeblendet.

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

Wir definieren die ungeordnete Liste als Grid-Container mit 10 Spalten. Ein {{cssxref("gap")}} von `5px` schafft zwischen den Elementen genügend Platz für die rote, gestrichelte Linie mit einer Breite von `3px`:

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

{{EmbedLiveSample("Basic", "", "440")}}

### Werte wiederholen

Dieses Beispiel zeigt, wie die Werte wiederholt werden, wenn die Liste weniger Breitenwerte enthält, als es Linien zwischen Spalten oder Zeilen gibt.

#### CSS

Wir verwenden dasselbe HTML und CSS wie im vorherigen Beispiel und geben für `rule-width` drei durch Kommas getrennte Breiten an.

```css live-sample___repeat
ul {
  rule-width: thin, 6px, 12px;
}
```

#### Ergebnis

{{EmbedLiveSample("Repeat", "", "440")}}

Da der Grid-Container 8 Zeilen und 10 Spalten hat, gibt es in den beiden Richtungen sieben beziehungsweise neun Zwischenräume. Daher wird die Folge der drei `<line-width>`-Werte in beiden Richtungen wiederholt.

### Die Funktion `repeat()` verwenden

Dieses Beispiel zeigt, wie Sie die Funktion `repeat()` im Wert der Eigenschaft `rule-width` verwenden und damit kürzere Wertangaben schreiben können.

#### CSS

Wir verwenden dasselbe HTML und CSS wie in den vorherigen Beispielen. Zusätzlich deklarieren wir zwei benutzerdefinierte Eigenschaften, die wir in einer `repeat()`-Funktion innerhalb des `rule-width`-Werts verwenden. Die Funktion `repeat()` legt fest, dass eine Liste aus zwei `<line-width>`-Werten dreimal wiederholt wird.

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

#### Ergebnis

{{EmbedLiveSample("func", "", "440")}}

Die Funktion `repeat()` wiederholt zwei Breitenwerte viermal und erzeugt so eine Liste mit zehn Breitenwerten. Da es weniger Zwischenräume zwischen Spalten und Zeilen als Breitenwerte gibt, werden die letzten Werte der Liste verworfen.

### `auto` innerhalb von `repeat()` verwenden

Dieses Beispiel zeigt, wie Sie innerhalb der Funktion `repeat()` `auto` anstelle einer Ganzzahl verwenden.

#### CSS

Mit `repeat(auto, <line-width>)` setzen wir alle Linien zwischen Spalten und Zeilen auf `1px`, mit Ausnahme der jeweils ersten und letzten Linie, die wir auf `5px` setzen.

```css live-sample___auto
ul {
  rule-width: 5px, repeat(auto, 1px), 5px;
}
```

#### Ergebnis

{{EmbedLiveSample("auto", "", "440")}}

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
- Kurzschreibweise {{cssxref("rule")}}
- [CSS-Zwischenräume definieren](/de/docs/Web/CSS/Guides/Gaps/Defining_gaps)
- Modul [CSS-Zwischenräume](/de/docs/Web/CSS/Guides/Gaps)
