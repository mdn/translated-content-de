---
title: "`rule-style` CSS property"
short-title: rule-style
slug: Web/CSS/Reference/Properties/rule-style
l10n:
  sourceCommit: 04dfe418f2942ae739d41592c22fafa3679fc03c
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`rule-style`** definiert den Linienstil der Linien zwischen Spalten und Zeilen in mehrspaltigen Grid-, Flex- und Multicol-Layouts. Sie setzt die Stile der Spalten- und Zeilenlinien auf denselben Wert.

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

## Zugehörige Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

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

Die Eigenschaft `rule-style` akzeptiert eine durch Kommas getrennte Liste von Werten, darunter:

- `<line-style>`
  - : Ein {{cssxref("&lt;line-style&gt;")}}: einer der Werte `none`, `hidden`, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset` oder `outset`. Der Standardwert ist `none`.

- `<repeat-line-style>`
  - : Eine {{cssxref("repeat()")}}-Funktion, deren erstes Argument ein {{cssxref("&lt;integer&gt;")}} mit dem Wert `1` oder größer ist und deren weitere Argumente {{cssxref("&lt;line-style&gt;")}}-Werte sind. Die Ganzzahl gibt an, wie oft die `<line-style>`-Werte wiederholt werden.

- `<auto-repeat-line-style>`
  - : Eine {{cssxref("repeat()")}}-Funktion mit `auto` als erstem Argument und einem oder mehreren `<line-style>`-Werten als weiteren Argumenten. Die angegebenen `<line-style>`-Werte werden so oft wiederholt, wie nötig ist, um Werte für alle Linien bereitzustellen, die nicht ausdrücklich durch andere Bestandteile des Eigenschaftswerts festgelegt sind.

## Beschreibung

Die Eigenschaft `rule-style` definiert den Linienstil aller Spalten- und Zeilenlinien, die in den Abständen zwischen Spalten und Zeilen von [Multicol-](/de/docs/Web/CSS/Guides/Multicol_layout), [Flex-](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Grid-](/de/docs/Web/CSS/Guides/Grid_layout)Containern mit mehr als einer Spalte oder Zeile gezeichnet werden.

`rule-style` setzt sowohl {{cssxref("column-rule-style")}} als auch {{cssxref("row-rule-style")}} auf denselben Wert. Die Eigenschaft `rule-style` kann zusammen mit {{cssxref("rule-color")}} und {{cssxref("rule-width")}} auch über die Kurzschreibweise {{cssxref("rule")}} gesetzt werden.

Der Wert ist eine durch Kommas getrennte Liste von Komponenten, die `<line-style>`, `<repeat-line-style>` und `<auto-repeat-line-style>` enthalten kann.

Enthält der Eigenschaftswert nur einen `<line-style>`-Wert, haben alle Spalten- und Zeilenlinien diesen Stil. Bei der folgenden Deklaration sind alle Spalten- und Zeilenlinien `double`:

```css
rule-style: double;
```

Werden mehrere `<line-style>`-Werte angegeben, werden sie in der festgelegten Reihenfolge auf die Linien angewendet. Gibt es mehr Linien als `<line-style>`-Werte, wird die Liste der Linienstile wiederholt, bis jede Spalten- und Zeilenlinie einen Stil hat. Bei der folgenden Deklaration ist beispielsweise jede ungerade Linie `double` und jede gerade Linie `inset`:

```css
rule-style: double, inset;
```

### Wiederholte Linienstile

Mit der Funktion `repeat()` und einer Ganzzahl von `1` oder größer als erstem Argument lässt sich eine als weitere Argumente übergebene Liste gültiger CSS-{{cssxref("&lt;line-style&gt;")}}-Werte entsprechend oft wiederholen. So können Sie denselben Stil mehrfach verwenden, ohne denselben Wert wiederholt anzugeben. Sie können `<line-style>`-Schlüsselwortwerte oder benutzerdefinierte Eigenschaften einfügen, die zu einem gültigen `<line-style>` aufgelöst werden. `repeat()` kann die Angabe von Werten vereinfachen, da sich wiederkehrende Muster unabhängig von der Anzahl der Spalten oder Zeilen mit einer einzigen Funktion ausdrücken lassen. Die folgenden Deklarationen sind gleichwertig:

```css
rule-style: solid, outset, inset, outset, inset, outset, inset;
rule-style: solid, repeat(3, outset, inset);
```

Dadurch entsteht eine Liste mit sieben Stilen. Enthält die Stileliste des `rule-style`-Werts mehr Stile als Abstände zwischen Spalten oder Zeilen vorhanden sind, werden die überzähligen Stilwerte ignoriert. Hat der Container drei Spalten oder Zeilen, ist die Linie im ersten Zwischenraum `solid` und die im zweiten `outset`.

Gibt es mehr Zwischenräume als Stile, wird die Stileliste wiederholt. Hat der Container 8, 15, 22 oder 29 Spalten oder Zeilen, wird diese Stilfolge entsprechend ein-, zwei-, drei- oder viermal wiederholt; die letzte Linie ist dabei `inset`.

### Automatisch wiederholte Linienstile

Die Funktion `repeat()` akzeptiert als erstes Argument auch `auto` statt einer positiven Ganzzahl. Bei `auto` als erstem Argument werden die als weitere Parameter übergebenen `<line-style>`-Werte so oft wiederholt, wie nötig ist, um Werte für alle Linien bereitzustellen, die nicht ausdrücklich durch andere Bestandteile des Eigenschaftswerts festgelegt sind.

Das Schlüsselwort `auto` innerhalb der Funktion `repeat()` erzeugt eine automatische Wiederholung. Sie liefert Werte für Spalten- und Zeilenlinien, die andernfalls keine Werte aus anderen Teilen der Liste erhalten würden, und verhindert so, dass die Liste zyklisch wiederholt wird. Innerhalb eines `rule-style`-Werts ist nur ein `repeat(auto, <line-style>)` zulässig.

```css
rule-style: solid, repeat(auto, dotted), solid;
```

In diesem Fall spielt es keine Rolle, ob der Container 8, 15, 22 oder 29 Spalten oder Zeilen hat: Die erste und die letzte Linie sind immer `solid`, alle anderen Linien sind `dotted`. Bei nur 2 oder 3 Spalten und Zeilen gibt es keine `dotted`-Linien.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel definieren wir einen einzelnen `<line-style>` für die Linien zwischen den Spalten und Zeilen der Elemente in einem Grid-Container.

#### HTML

Wir erstellen eine Liste mit 75 Elementen. Der Kürze halber ist der größte Teil des HTML ausgeblendet.

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

Wir definieren die ungeordnete Liste als Container mit 10 Spalten und erzeugen die Spalten und Zeilen mit der Eigenschaft {{cssxref("grid-template-columns")}}. Anschließend setzen wir {{cssxref("list-style-type")}} auf `none`, um die Aufzählungszeichen zu entfernen. Mit einem {{cssxref("gap")}} von `5px` schaffen wir zwischen den Spalten und Zeilen genügend Platz für die Linie mit dem Wert `thick dashed orange`.

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

{{EmbedLiveSample("Basic", "", "440")}}

### Mehrere Werte

Dieses Beispiel zeigt, wie mehrere `<line-style>`-Werte als Eigenschaftswert verwendet werden und was geschieht, wenn mehr `<line-style>`-Werte angegeben werden, als Zwischenräume gestaltet werden können.

Wir setzen die Eigenschaft `rule-style` auf eine durch Kommas getrennte Liste aller möglichen `<line-style>`-Werte.

```css live-sample___multiple
ul {
  rule-style:
    dotted, dashed, solid, double, groove, ridge, inset, outset, none, hidden;
}
```

#### Ergebnis

{{EmbedLiveSample("Multiple", "", "440")}}

Sowohl für die Zeilen als auch für die Spalten gibt es mehr Werte als Zwischenräume. Die letzten Werte werden daher jeweils nicht verwendet.

### Werte wiederholen

Dieses Beispiel zeigt, dass Werte wiederholt werden, wenn die Stileliste weniger Werte enthält, als Spalten- und Zeilenlinien vorhanden sind.

Wir verwenden dasselbe HTML und CSS wie im vorherigen Beispiel und geben für `rule-style` drei durch Kommas getrennte Stile an:

```css live-sample___repeat
ul {
  rule-style: solid, groove, double;
}
```

{{EmbedLiveSample("Repeat", "", "440")}}

### Die Funktion `repeat()` verwenden

Dieses Beispiel zeigt die Verwendung der Funktion `repeat()` innerhalb des Eigenschaftswerts von `rule-style`. Wir verwenden dasselbe HTML und CSS wie in den vorherigen Beispielen. Die Funktion `repeat()` legt fest, dass eine Liste mit zwei `<line-style>`-Werten dreimal wiederholt wird.

```css live-sample___func
ul {
  rule-style: solid, repeat(3, inset, outset), solid;
}
```

{{EmbedLiveSample("func", "", "440")}}

Die Funktion `repeat()` wiederholt zwei Stilwerte dreimal und erzeugt so eine Liste mit acht Stilwerten. Für die Spalten werden die Stile wiederholt; bei den Zeilen werden die letzten Werte der Liste jedoch verworfen.

### `auto` innerhalb von `repeat()` verwenden

Dieses Beispiel zeigt, wie `auto` anstelle einer Ganzzahl innerhalb der Funktion `repeat()` verwendet wird.

Mit `repeat(auto, <line-style>)` setzen wir alle Spalten- und Zeilenlinien auf `groove`, mit Ausnahme der ersten und letzten Linie, die wir auf `solid` setzen.

```css live-sample___auto
ul {
  rule-style: solid, repeat(auto, groove), solid;
}
```

{{EmbedLiveSample("auto", "", "440")}}

Obwohl es mehr Spaltenlinien als Zeilenlinien gibt, ermöglicht `<auto-repeat-line-color>` diesen symmetrischen Effekt.

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
- {{cssxref("column-rule-style")}}
- {{cssxref("row-rule-style")}}
- Kurzschreibweise {{cssxref("rule")}}
- [CSS-Abstände definieren](/de/docs/Web/CSS/Guides/Gaps/Defining_gaps)
- Modul [CSS-Abstände](/de/docs/Web/CSS/Guides/Gaps)
