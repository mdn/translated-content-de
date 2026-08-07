---
title: "`rule-style` CSS property"
short-title: rule-style
slug: Web/CSS/Reference/Properties/rule-style
l10n:
  sourceCommit: 343ab51426f9279175b8f71fff911621d0a7da20
---

{{SeeCompatTable}}

Die CSS-Eigenschaft **`rule-style`** definiert den Linienstil der Linien, die zwischen Spalten und Reihen in Multi-Column-, Flex- und Multi-Col-Layouts gezeichnet werden, indem die Stile der Spalten- und Reihenlinien auf denselben Wert gesetzt werden.

{{InteractiveExample("CSS Demo: rule-style")}}

```css interactive-example-choice
rule-style: solid;
```

```css interactive-example-choice
rule-style: dashed, dotted;
```

```css interactive-example-choice
rule-style: repeat(2, inset, dashed, double);
```

```css interactive-example-choice
rule-style: solid, repeat(auto, double), solid;
```

```css interactive-example-choice
rule-style: hidden;
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
  rule: solid rebeccapurple 7px;
  gap: 7px;
}
#example-element i {
  padding: 5px;
}
```

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("column-rule-style")}}
- {{cssxref("row-rule-style")}}

## Syntax

```css
/* One value */
rule-style: none;
rule-style: hidden;
rule-style: dotted;
rule-style: dashed;
rule-style: solid;
rule-style: double;
rule-style: groove;
rule-style: ridge;
rule-style: inset;
rule-style: outset;

/* Multiple values */
rule-style: groove, double, dashed;
rule-style: solid, repeat(5, ridge), solid;
rule-style: dotted, repeat(auto, inset, outset), dotted;

/* Global values */
rule-style: inherit;
rule-style: initial;
rule-style: revert;
rule-style: revert-layer;
rule-style: unset;
```

### Werte

Die `rule-style` Eigenschaft akzeptiert eine durch Kommas getrennte Liste von Werten, einschließlich:

- `<line-style>`
  - : Ein {{cssxref("&lt;line-style&gt;")}}: einer von `none`, `hidden`, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset` oder `outset`. Der Standardwert ist `none`.

- `<repeat-line-style>`
  - : Eine {{cssxref("repeat()")}} Funktion, wobei das erste Argument ein {{cssxref("&lt;integer&gt;")}} von `1` oder mehr ist und die folgenden Argumente {{cssxref("&lt;line-style&gt;")}} Werte sind. Der ganzzahlige Wert gibt an, wie oft die `<line-style>` Werte wiederholt werden sollen.

- `<auto-repeat-line-style>`
  - : Eine {{cssxref("repeat()")}} Funktion, mit `auto` als erstem Argument und einem oder mehreren `<line-style>` Werten als folgenden Argumenten. Die angegebenen `<line-style>` Werte werden so oft wiederholt, wie nötig, um Werte für alle Linien zu füllen, die nicht explizit durch andere Komponenten des Eigenschaftswerts spezifiziert werden.

## Beschreibung

Die Eigenschaft `rule-style` definiert den Linienstil jeder Spalten- und Reihenlinie, die in den Lücken zwischen Spalten und Reihen in [multi-column](/de/docs/Web/CSS/Guides/Multicol_layout), [flex](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [grid](/de/docs/Web/CSS/Guides/Grid_layout) Containern mit mehr als einer Spalte oder einer Reihe gezeichnet werden.

Die `rule-style` Eigenschaft setzt sowohl die {{cssxref("column-rule-style")}} als auch die {{cssxref("row-rule-style")}} Eigenschaften auf denselben Wert.
Die `rule-style` Eigenschaft, zusammen mit den {{cssxref("rule-color")}} und {{cssxref("rule-width")}} Eigenschaften, kann auch mit der Kurzform {{cssxref("rule")}} gesetzt werden.

Der Wert ist eine durch Kommas getrennte Liste von Komponenten, die `<line-style>`, `<repeat-line-style>` und `<auto-repeat-line-style>` Typen enthalten können.

Wenn der Eigenschaftswert nur einen `<line-style>` enthält, haben alle Spalten- und Reihenlinien diesen Stil. Wenn wir das Folgende deklarieren, werden alle Spalten- und Reihenlinien `double` sein:

```css
rule-style: double;
```

Wenn mehrere `<line-style>` Werte deklariert werden, werden sie in der angegebenen Reihenfolge auf die Linien angewendet. Wenn es mehr Linien als `<line-style>` Werte gibt, wird die Liste der Linienstile wiederholt, bis jede Spalten- und Reihenlinie einen Stil hat. Zum Beispiel, wenn wir das Folgende deklarieren, wird jede ungerade Linie `double` und jede gerade Linie `inset` sein.

```css
rule-style: double, inset;
```

### Wiederholte Linienstile

Die `repeat()` Funktion, mit einer Ganzzahl von `1` oder mehr als erstem Argument, kann verwendet werden, um eine gültige Liste von CSS {{cssxref("&lt;line-style&gt;")}} Werten, die als folgende Argumente übergeben werden, die angegebene Anzahl von Malen zu wiederholen. Dies ermöglicht, denselben Stil mehrfach wiederholt ohne den gleichen Wert zu wiederholen. Sie können `<line-style>` Schlüsselwörter oder benutzerdefinierte Eigenschaften, die zu einem gültigen `<line-style>` aufgelöst werden, einschließen. Die Verwendung von `repeat()` kann es erleichtern, Werte zu schreiben, indem wiederkehrende Muster mit einer Funktion notiert werden, unabhängig von der Anzahl der Spalten oder Reihen. Folgende Deklarationen sind gleichwertig:

```css
rule-style: solid, outset, inset, outset, inset, outset, inset;
rule-style: solid, repeat(3, outset, inset);
```

Dies erzeugt eine Liste von sieben Stilen. Wenn die Anzahl der Stile in der Stilenliste des `rule-style` Werts die Anzahl der Lücken zwischen Spalten oder Reihen überschreitet, werden die überschüssigen Stilwerte ignoriert. Wenn der Container drei Spalten oder Reihen hat, wird die Linie in der ersten Lücke `solid` sein und die zweite `outset`.

Wenn es mehr Lücken als Stile gibt, wird die Liste der Stile wiederholt. Wenn der Container 8, 15, 22 oder 29 Spalten oder Reihen hat, wird diese Sequenz von Stilen eins, zwei, drei oder vier Mal entsprechend wiederholt, wobei die letzte Linie `inset` sein wird.

### Automatisch wiederholende Linienstile

Die `repeat()` Funktion akzeptiert auch `auto` als erstes Argument anstelle einer positiven Ganzzahl. Mit `auto` als erstem Argument werden die `<line-style>` Werte, die als folgende Parameter übergeben werden, so oft wie nötig wiederholt, um Werte für alle Linien zu füllen, die nicht explizit durch andere Komponenten des Eigenschaftswerts spezifiziert werden.

Das `auto` Schlüsselwort innerhalb der `repeat()` Funktion erzeugt einen automatischen Wiederholer, der Werte für Spalten- und Reihenlinien ausfüllt, die andernfalls keine Werte von anderen Teilen der Liste erhalten würden, und verhindert, dass die Liste durchlaufen wird. Nur eine `repeat(auto, <line-style>)` ist innerhalb eines `rule-style` Wertes erlaubt.

```css
rule-style: solid, repeat(auto, dotted), solid;
```

In diesem Fall spielt es keine Rolle, ob der Container 8, 15, 22 oder 29 Spalten oder Reihen hat; die erste und letzte Linie werden immer `solid` sein und alle anderen Linien werden `dotted` sein. Wenn es nur 2 oder 3 Spalten und Reihen gibt, wird es keine gepunktete Linie geben.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel definieren wir einen einzelnen `<line-style>` für die Linien, die zwischen den Spalten und Reihen von Elementen in einem Grid-Container gezeichnet werden.

#### HTML

Wir erstellen eine Liste von 75 Elementen. Der größte Teil des HTML ist der Übersichtlichkeit halber ausgeblendet.

```html
<ul>
  <li>1</li>
  <li>2</li>
  ...
  <li>74</li>
  <li>75</li>
</ul>
```

```html hidden live-sample___basic live-sample___multiple live-sample___repeat live-sample___func live-sample___auto
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

Wir definieren die ungeordnete Liste als einen 10-Spalten-Container, indem wir Spalten und Reihen mit der Eigenschaft {{cssxref("grid-template-columns")}} erstellen; dann setzen wir {{cssxref("list-style-type")}} auf `none`, um die Aufzählungszeichen zu entfernen. Wir fügen eine {{cssxref("gap")}} von `5px` hinzu, um genügend Platz zwischen den Spalten und Reihen zu schaffen, um unsere `thick dashed orange` Regel einzufügen.

```css live-sample___basic live-sample___multiple live-sample___repeat live-sample___func live-sample___auto
ul {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  list-style-type: none;
  gap: 5px;
  rule-width: thick;
  rule-color: orange;

  rule-style: dashed;
}
li {
  text-align: center;
  aspect-ratio: 1;
}
```

```css hidden live-sample___basic
@layer no-support {
  @supports not (rule-style: solid) {
    body::before {
      content: "Your browser doesn't support the rule-style property";
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

### Mehrere Werte

Dieses Beispiel demonstriert die Verwendung mehrerer `<line-style>` Werte als Eigenschaftswert und was passiert, wenn mehr `<line-style>` Werte angegeben werden, als es Lücken zum Stylen gibt.

Wir setzen die `rule-style` Eigenschaft auf eine durch Kommas getrennte Liste aller möglichen `<line-style>` Werte.

```css live-sample___multiple
ul {
  rule-style:
    dotted, dashed, solid, double, groove, ridge, inset, outset, none, hidden;
}
```

#### Ergebnis

{{EmbedLiveSample("Multiple", "", "600")}}

Es gibt mehr Werte als Lücken für sowohl die Reihen als auch die Spalten; die letzten Werte werden in jedem Fall nicht verwendet.

### Wiederholende Werte

Dieses Beispiel zeigt, wie, wenn es weniger Werte in der Liste der Stile gibt als Spalten- und Reihenlinien, die Werte wiederholt werden.

Verwenden Sie dasselbe HTML und CSS wie im vorherigen Beispiel, fügen wir drei durch Kommas getrennte Stile als `rule-style` Wert hinzu:

```css live-sample___repeat
ul {
  rule-style: solid, groove, double;
}
```

{{EmbedLiveSample("Repeat", "", "600")}}

### Verwendung der `repeat()` Funktion

Dieses Beispiel zeigt die Verwendung der `repeat()` Funktion innerhalb des `rule-style` Eigenschaftswerts. Wir verwenden dasselbe HTML und CSS wie in den vorherigen Beispielen. Wir fügen eine `repeat()` Funktion ein, die eine Liste von zwei `<line-style>` Werten setzt, die dreimal wiederholt werden.

```css live-sample___func
ul {
  rule-style: solid, repeat(3, inset, outset), solid;
}
```

{{EmbedLiveSample("func", "", "600")}}

Die `repeat()` Funktion wiederholt zwei Stilwerte dreimal und erstellt eine Liste von acht Stilwerten. Die Stile werden bei den Spalten wiederholt; die letzten Werte in der Liste werden jedoch bei den Reihen verworfen.

### Verwendung von `auto` innerhalb von `repeat()`

Dieses Beispiel zeigt, wie `auto` anstelle einer Ganzzahl innerhalb der `repeat()` Funktion verwendet wird.

Mit `repeat(auto, <line-style>)` setzen wir alle Spalten- und Reihenlinien auf `groove`, außer die erste und letzte, die wir auf `solid` setzen.

```css live-sample___auto
ul {
  rule-style: solid, repeat(auto, groove), solid;
}
```

{{EmbedLiveSample("auto", "", "600")}}

Obwohl es mehr Spaltenlinien als Reihenlinien gibt, ermöglicht das `<auto-repeat-line-color>` die Erstellung dieses symmetrischen Effekts.

```css hidden live-sample___multiple live-sample___repeat live-sample___func live-sample___auto
@layer no-support {
  @supports not (rule-style: solid, groove) {
    body::before {
      content: "Your browser doesn't support multiple values for the rule-style property";
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
- {{cssxref("rule-width")}}
- {{cssxref("row-rule-style")}}
- {{cssxref("rule")}} Kurzform
- {{cssxref("rule-style")}} Kurzform
- {{cssxref("rule")}} Kurzform
- [CSS gaps](/de/docs/Web/CSS/Guides/Gaps) Modul
