---
title: "`rule-style` CSS property"
short-title: rule-style
slug: Web/CSS/Reference/Properties/rule-style
l10n:
  sourceCommit: e08f8e5467c3af416ca82f00bfbf19d718d6fbab
---

Die **`rule-style`**-Eigenschaft von [CSS](/de/docs/Web/CSS) definiert den Stil der Linien, die zwischen Spalten und Zeilen in mehrspaltigen Raster-, Flex- und Multi-Kolumnen-Layouts gezeichnet werden. Sie setzt den Stil der Spalten- und Zeilenregeln auf denselben Wert.

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

Diese Eigenschaft ist eine Kurzschrift für die folgenden CSS-Eigenschaften:

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

Die `rule-style`-Eigenschaft akzeptiert eine durch Kommas getrennte Liste von Werten, einschließlich:

- `<line-style>`
  - : Ein {{cssxref("&lt;line-style&gt;")}}: eines von `none`, `hidden`, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset` oder `outset`. Der Standardwert ist `none`.

- `<repeat-line-style>`
  - : Eine {{cssxref("repeat()")}}-Funktion, mit dem ersten Argument als ein {{cssxref("&lt;integer&gt;")}} von `1` oder mehr, und den nachfolgenden Argumenten als {{cssxref("&lt;line-style&gt;")}}-Werte. Die Ganzzahl gibt an, wie oft die `<line-style>`-Werte wiederholt werden sollen.

- `<auto-repeat-line-style>`
  - : Eine {{cssxref("repeat()")}}-Funktion, mit `auto` als erstem Argument und einem oder mehreren `<line-style>`-Werten als nachfolgende Argumente. Die bereitgestellten `<line-style>`-Werte werden so oft wie nötig wiederholt, um fehlende Werte für Regeln zu füllen, die nicht explizit durch andere Komponenten des Eigenschaftswerts spezifiziert werden.

## Beschreibung

Die `rule-style`-Eigenschaft definiert den Linienstil von Spalten- und Zeilenregel-Linien, die in den Lücken zwischen Spalten und Zeilen in [mehrspaltigen](/de/docs/Web/CSS/Guides/Multicol_layout) [flexiblen](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Raster-](/de/docs/Web/CSS/Guides/Grid_layout) Containern mit mehr als einer Spalte oder Zeile gezeichnet werden.

Die `rule-style` setzt sowohl die {{cssxref("column-rule-style")}}- als auch die {{cssxref("row-rule-style")}}-Eigenschaften auf denselben Wert. Die `rule-style`-Eigenschaft kann zusammen mit den Eigenschaften {{cssxref("rule-color")}} und {{cssxref("rule-width")}} auch mit der Kurzschrift {{cssxref("rule")}} festgelegt werden.

Der Wert ist eine durch Kommas getrennte Liste von Komponenten, die `<line-style>`, `<repeat-line-style>` und `<auto-repeat-line-style>`-Typen umfassen kann.

Wenn der Eigenschaftswert nur einen `<line-style>` hat, werden alle Spalten- und Zeilenregeln diesen Stil haben. Wenn wir Folgendes deklarieren, werden alle Spalten- und Zeilenregeln `double` sein:

```css
rule-style: double;
```

Wenn mehrere `<line-style>`-Werte deklariert werden, werden sie in der angegebenen Reihenfolge auf die Regeln angewendet. Wenn es mehr Regeln als `<line-style>`-Werte gibt, wird die Liste der Linienstile wiederholt, bis jede Spalten- und Zeilenregel einen Stil hat. Wenn wir Folgendes deklarieren, wird jede ungerade Regel `double` und jede gerade Regel `inset` sein.

```css
rule-style: double, inset;
```

### Wiederholte Linienstile

Die `repeat()`-Funktion mit einer Ganzzahl von `1` oder größer als das erste Argument kann verwendet werden, um eine gültige Liste von CSS{{cssxref("&lt;line-style&gt;")}}-Werten, die als nachfolgende Argumente übermittelt werden, die angegebene Anzahl von Malen zu wiederholen. Dies ermöglicht es, denselben Stil eine bestimmte Anzahl von Malen zu wiederholen, ohne denselben Wert zu duplizieren. Sie können `<line-style>`-Schlüsselwortwerte oder benutzerdefinierte Eigenschaften, die zu einem gültigen `<line-style>` aufgelöst werden, einfügen. Die Verwendung von `repeat()` kann die Wertschreibweise vereinfachen und ermöglicht es, wiederkehrende Muster mit einer einzigen Funktion zu schreiben, unabhängig von der Anzahl der Spalten oder Zeilen. Die folgenden Deklarationen sind gleichwertig:

```css
rule-style: solid, outset, inset, outset, inset, outset, inset;
rule-style: solid, repeat(3, outset, inset);
```

Dies erstellt eine Liste von sieben Stilen. Wenn die Anzahl der Stile in der `rule-style`-Wertstil-Liste die Anzahl der Lücken zwischen Spalten oder Zeilen überschreitet, werden die überschüssigen Stilwerte ignoriert. Wenn der Container drei Spalten oder Zeilen hat, wird die Regel in der ersten Lücke `solid` und die zweite `outset` sein.

Wenn es mehr Lücken als Stile gibt, wird die Liste der Stile wiederholt. Wenn der Container 8, 15, 22 oder 29 Spalten oder Zeilen hat, wird diese Abfolge von Stilen ein, zwei, drei oder viermal wiederholt, wobei die letzte Regel `inset` ist.

### Auto-wiederholende Linienstile

Die `repeat()`-Funktion akzeptiert auch `auto` als erstes Argument anstelle einer positiven Ganzzahl. Mit `auto` als erstem Argument werden die `<line-style>`-Werte, die als nachfolgende Parameter übergeben werden, so oft wiederholt, wie nötig, um fehlende Werte für Regeln zu füllen, die nicht explizit durch andere Komponenten des Eigenschaftswerts spezifiziert werden.

Das `auto`-Schlüsselwort innerhalb der `repeat()`-Funktion erstellt einen automatischen Wiederholer, der fehlende Werte für Spalten- und Zeilenregeln füllt, die sonst keine Werte von anderen Teilen der Liste erhalten würden, und verhindert, dass die Liste durchlaufen wird. Nur ein `repeat(auto, <line-style>)` ist innerhalb eines `rule-style`-Werts erlaubt.

```css
rule-style: solid, repeat(auto, dotted), solid;
```

In diesem Fall ist es egal, ob der Container 8, 15, 22 oder 29 Spalten oder Zeilen hat; die erste und letzte Regel werden immer `solid` sein, und alle anderen Regeln werden `dotted` sein. Wenn es nur 2 oder 3 Spalten und Zeilen gibt, wird es keine gepunkteten Regeln geben.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel definieren wir einen einzigen `<line-style>` für die Linien, die zwischen den Spalten und Zeilen von Elementen in einem Rastercontainer gezeichnet werden.

#### HTML

Wir erstellen eine Liste mit 75 Elementen. Der größte Teil des HTMLs ist der Kürze halber ausgeblendet.

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

Wir definieren die ungeordnete Liste als einen 10-Spalten-Container, erstellen Spalten und Zeilen mit der {{cssxref("grid-template-columns")}}-Eigenschaft; dann setzen wir {{cssxref("list-style-type")}} auf `none`, um die Aufzählungszeichen zu entfernen. Wir fügen eine {{cssxref("gap")}} von `5px` hinzu, um genügend Platz zwischen den Spalten und Zeilen für unsere `thick dashed orange`-Regel zu schaffen.

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

### Mehrfache Werte

Dieses Beispiel demonstriert die Verwendung mehrerer `<line-style>`-Werte als Eigenschaftswert und was passiert, wenn mehr `<line-style>`-Werte angegeben werden, als Lücken zum Stylen vorhanden sind.

Wir setzen die `rule-style`-Eigenschaft auf eine durch Kommas getrennte Liste aller möglichen `<line-style>`-Werte.

```css live-sample___multiple
ul {
  rule-style:
    dotted, dashed, solid, double, groove, ridge, inset, outset, none, hidden;
}
```

#### Ergebnis

{{EmbedLiveSample("Multiple", "", "600")}}

Es gibt mehr Werte als Lücken sowohl für die Zeilen als auch für die Spalten; die letzten Werte werden jeweils nicht verwendet.

### Wiederholende Werte

Dieses Beispiel zeigt, wie die Werte wiederholt werden, wenn in der Liste der Stile weniger Werte als Spalten- und Zeilenregeln vorhanden sind.

Wir verwenden dasselbe HTML und CSS wie im vorherigen Beispiel und fügen drei durch Kommas getrennte Stile als `rule-style`-Wert hinzu:

```css live-sample___repeat
ul {
  rule-style: solid, groove, double;
}
```

{{EmbedLiveSample("Repeat", "", "600")}}

### Verwendung der `repeat()`-Funktion

Dieses Beispiel zeigt die Verwendung der `repeat()`-Funktion innerhalb des `rule-style`-Eigenschaftswerts. Wir verwenden dasselbe HTML und CSS wie in den vorherigen Beispielen. Wir fügen eine `repeat()`-Funktion hinzu, die eine Liste von zwei `<line-style>`-Werten setzt, die dreimal wiederholt wird.

```css live-sample___func
ul {
  rule-style: solid, repeat(3, inset, outset), solid;
}
```

{{EmbedLiveSample("func", "", "600")}}

Die `repeat()`-Funktion wiederholt zwei Stilwerte dreimal und erstellt eine Liste von acht Stilwerten. Die Stile werden für die Spalten wiederholt; jedoch werden die letzten Werte in der Liste für die Zeilen verworfen.

### Verwendung von `auto` innerhalb von `repeat()`

Dieses Beispiel zeigt die Verwendung von `auto` anstelle einer Ganzzahl innerhalb der `repeat()`-Funktion.

Mit `repeat(auto, <line-style>)` setzen wir alle Spalten- und Zeilenregeln auf `groove`, außer die erste und letzte, die wir auf `solid` setzen.

```css live-sample___auto
ul {
  rule-style: solid, repeat(auto, groove), solid;
}
```

{{EmbedLiveSample("auto", "", "600")}}

Obwohl es mehr Spaltenregel-Linien als Zeilenregel-Linien gibt, ermöglicht das `<auto-repeat-line-color>` die Erstellung dieses symmetrischen Effekts.

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
- {{cssxref("rule")}} Kurzschrift
- {{cssxref("rule-style")}} Kurzschrift
- {{cssxref("rule")}} Kurzschrift
- [CSS-Lücken](/de/docs/Web/CSS/Guides/Gaps) Modul
