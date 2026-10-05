---
title: "`rule-color` CSS property"
short-title: rule-color
slug: Web/CSS/Reference/Properties/rule-color
l10n:
  sourceCommit: 04dfe418f2942ae739d41592c22fafa3679fc03c
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`rule-color`** legt die Farben der Linien fest, die in mehrspaltigen, Grid- und Flex-Layouts zwischen Spalten und Zeilen gezeichnet werden. Dabei setzt sie die Farben der Spalten- und Zeilenlinien auf denselben Wert.

{{InteractiveExample("CSS Demo: rule-color")}}

```css interactive-example-choice
rule-color: purple;
```

```css interactive-example-choice
rule-color: rgb(48 125 222), rgb(222 48 125);
```

```css interactive-example-choice
rule-color: rgb(48 125 222), repeat(3, rgb(222 48 125));
```

```css interactive-example-choice
rule-color: purple, repeat(auto, red, yellow);
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
  rule: solid thick;
}
#example-element i {
  padding: 5px;
}
```

## Zugehörige Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("column-rule-color")}}
- {{cssxref("row-rule-color")}}

## Syntax

```css
/* Single <color> value */
rule-color: purple;
rule-color: rgb(192 56 78);
rule-color: transparent;
rule-color: hsl(0 100% 50% / 60%);

/* Multiple values */
rule-color: purple, magenta;
rule-color: repeat(3, purple), repeat(3, transparent);
rule-color: repeat(3, purple), repeat(3, yellow, blue);
rule-color: purple, repeat(auto, transparent), purple;
rule-color: purple, repeat(auto, blue, yellow), purple;
rule-color: repeat(3, purple), repeat(auto, transparent), repeat(3, purple);

/* Global values */
rule-color: inherit;
rule-color: initial;
rule-color: revert;
rule-color: revert-layer;
rule-color: unset;
```

### Werte

Die Eigenschaft `rule-color` akzeptiert eine durch Kommas getrennte Liste von Werten, darunter:

- `<line-color>`
  - : Ein {{cssxref("&lt;color&gt;")}}-Wert, der die Farbe der Linie angibt.

- `<repeat-line-color>`
  - : Eine {{cssxref("repeat()")}}-Funktion mit einer {{cssxref("&lt;integer&gt;")}} von mindestens `1` als erstem Argument und einem oder mehreren `<color>`-Werten als weiteren Argumenten. Die `<integer>` gibt an, wie oft die `<color>`-Werte wiederholt werden.

- `<auto-repeat-line-color>`
  - : Eine {{cssxref("repeat()")}}-Funktion mit `auto` als erstem Argument und einem oder mehreren `<color>`-Werten als weiteren Argumenten. Die angegebenen `<color>`-Werte werden so oft wie nötig wiederholt, um Werte für alle Linien bereitzustellen, die nicht ausdrücklich durch andere Bestandteile des Eigenschaftswerts festgelegt sind.

## Beschreibung

Die Eigenschaft `rule-color` legt die Farben aller Linien fest, die in den Zwischenräumen zwischen Spalten und Zeilen von [mehrspaltigen](/de/docs/Web/CSS/Guides/Multicol_layout), [Flex](/de/docs/Web/CSS/Guides/Flexible_box_layout)- und [Grid](/de/docs/Web/CSS/Guides/Grid_layout)-Containern mit mehr als einer Spalte oder Zeile gezeichnet werden. Sie ist eine Kurzschreibweise, die sowohl {{cssxref("row-rule-color")}} als auch {{cssxref("column-rule-color")}} auf denselben Wert setzt.

Der Wert ist eine durch Kommas getrennte Liste von Bestandteilen, die Werte der Typen `<line-color>`, `<repeat-line-color>` und `<auto-repeat-line-color>` enthalten kann.
Die Eigenschaft `rule-color` kann zusammen mit den Eigenschaften {{cssxref("rule-width")}} und {{cssxref("rule-style")}} über die Kurzschreibweise {{cssxref("rule")}} festgelegt werden.

### Linienfarben

Für `<line-color>` kann jeder gültige CSS-{{cssxref("&lt;color&gt;")}}-Wert angegeben werden. Besteht der Eigenschaftswert nur aus einem `<color>`-Wert, haben alle Linien diese Farbe. Bei der folgenden Deklaration sind beispielsweise alle Linien in den Zwischenräumen zwischen Spalten und Zeilen blau:

```css
rule-color: blue;
```

Wenn mehrere `<line-color>`-Werte angegeben werden, werden sie in der angegebenen Reihenfolge auf die Linien in den Zwischenräumen zwischen Spalten und Zeilen angewendet. Gibt es mehr Linien als `<line-color>`-Werte, wird die Farbliste wiederholt, bis jede Spaltenlinie eine Farbe hat. Bei der folgenden Deklaration ist beispielsweise jede ungerade Linie rot und jede gerade Linie gelb:

```css
rule-color: red, yellow;
```

### Wiederholte Linienfarben

Mit der Funktion `repeat()` und einer Ganzzahl von mindestens `1` als erstem Argument kann eine Liste gültiger CSS-{{cssxref("&lt;color&gt;")}}-Werte, die als weitere Argumente übergeben werden, eine festgelegte Anzahl von Malen wiederholt werden. So lassen sich Farbwerte beliebig oft wiederholen, ohne sie einzeln aufzuführen. Die folgenden Deklarationen sind gleichwertig:

```css
rule-color: blue, yellow, red, yellow, red, yellow, red;
rule-color: blue, repeat(3, yellow, red);
```

Dadurch entsteht eine Liste mit sieben Farben. Wenn die Farbliste im Wert von `rule-color` mehr Farben enthält, als es Zwischenräume zwischen Spalten und Zeilen gibt, werden die überzähligen Farbwerte ignoriert. Gibt es weniger Farben als Zwischenräume, wird die Werteliste wiederholt, bis jeder Linie eine Farbe zugeordnet ist. Hat der Container beispielsweise drei Spalten und 18 Zeilen, ist die Linie im ersten Spaltenzwischenraum blau und die im zweiten gelb. Bei den Zeilenlinien wiederholt sich die Reihenfolge, sodass die erste, achte und fünfzehnte Zeilenlinie blau sind.

### Automatisch wiederholte Linienfarben

Die Funktion `repeat()` akzeptiert als erstes Argument auch `auto` anstelle einer positiven Ganzzahl. Bei `auto` als erstem Argument werden die als weitere Argumente übergebenen `<color>`-Werte so oft wie nötig wiederholt, um Werte für alle Spalten- und Zeilenlinien bereitzustellen, die nicht ausdrücklich durch andere Bestandteile des Eigenschaftswerts festgelegt sind.

```css
rule-color: blue, repeat(auto, yellow), red;
```

In diesem Fall sind die jeweils ersten Spalten- und Zeilenlinien blau, die jeweils letzten rot und alle übrigen gelb. Solange es in einer Richtung mindestens zwei Linien gibt, ist die erste Linie immer blau und die letzte immer rot. Alle anderen Linien sind gelb. Das bedeutet, dass bei nur zwei oder drei Spalten und Zeilen keine gelben Linien auftreten.

Das Schlüsselwort `auto` innerhalb der Funktion `repeat()` erzeugt eine automatische Wiederholung, die Farbwerte für Linien bereitstellt, denen durch andere Teile der Liste keine Werte zugewiesen würden. Dadurch wird verhindert, dass die Liste erneut von vorn durchlaufen wird. Ein `rule-color`-Wert darf höchstens ein `repeat(auto, <color>)` enthalten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel legen wir einen einzelnen `<color>`-Wert für die Linien zwischen den Spalten und Zeilen der Elemente in einem Grid-Container fest.

#### HTML

Wir erstellen eine Liste mit 75 Elementen. Der Großteil des HTML-Codes ist der Kürze halber ausgeblendet.

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

Wir definieren die ungeordnete Liste mithilfe der Eigenschaft {{cssxref("grid-template-columns")}} als Container mit zehn Spalten und den entsprechenden Zeilen. Mit einem {{cssxref("gap")}} von `5px` schaffen wir zwischen den Spalten und Zeilen genügend Platz für die gestrichelte Linie mit einer Breite von `3px`. Außerdem setzen wir {{cssxref("list-style-type")}} auf `none`, um die Aufzählungszeichen zu entfernen.

Wir verwenden einen {{cssxref("gap")}} von `5px`, damit zwischen den Elementen genügend Platz für die gestrichelte Linie mittlerer Breite ist. Für `rule-color` legen wir `#22BB22` fest, einen grünen {{cssxref("hex-color")}}-Wert:

```css live-sample___basic live-sample___multiple live-sample___repeat live-sample___func live-sample___auto
ul {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  list-style-type: none;
  gap: 5px;
  rule-style: dashed;
  rule-width: medium;

  rule-color: #22bb22;
}
li {
  text-align: center;
  aspect-ratio: 1;
}
```

```css hidden live-sample___basic
@layer no-support {
  @supports not (rule-color: red) {
    body::before {
      content: "Your browser doesn't support the rule-color property";
      background-color: wheat;
      text-align: center;
      padding: 1rem 0;

      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
    }
  }
}
```

#### Ergebnis

{{EmbedLiveSample("Basic", "", "440")}}

### Mehrere Farbwerte

Dieses Beispiel zeigt, wie mehrere Farben angegeben und die Werte wiederholt werden, wenn die Farbliste weniger Werte enthält, als es Zwischenräume zwischen Spalten und Zeilen gibt.

Wir verwenden dasselbe HTML und CSS wie im vorherigen Beispiel und geben für `rule-color` drei durch Kommas getrennte Farben an:

```css hidden live-sample___multiple
@layer no-support {
  @supports not (rule-color: red, blue) {
    body::before {
      content: "Your browser doesn't support multiple values for the rule-color property";
      background-color: wheat;
      text-align: center;
      padding: 1rem 0;

      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
    }
  }
}
```

```css live-sample___multiple
ul {
  rule-color: blue, yellow, red;
}
```

#### Ergebnis

{{EmbedLiveSample("Multiple", "", "440")}}

Es gibt neun Spalten- und sechs Zeilenzwischenräume, aber nur drei Farben in unserer Farbliste. Daher wird die Liste wiederholt, sodass die erste, vierte und siebte Linie blau sind.

### Verwendung der Funktion `repeat()`

Dieses Beispiel zeigt, wie die Funktion `repeat()` im Wert der Eigenschaft `rule-color` verwendet wird und wie sie verhindert, dass komplexe Werte unübersichtlich werden.

#### CSS

Um zu zeigen, wie kompliziert Werte werden können und welchen Nutzen die Funktion `repeat()` hat, deklarieren wir zwei benutzerdefinierte Eigenschaften. Diese verwenden wir in vier {{cssxref("color-mix()")}}-Farbfunktionen, um blaue, rötliche, blaugrüne und gelbe Farben zu erzeugen. Die rötlichen und blaugrünen `color-mix()`-Farben stehen innerhalb einer `repeat()`-Funktion, die sie dreimal wiederholt.

Außerdem haben wir jedem Grid-Element einen Rahmen hinzugefügt, damit Sie sehen können, dass die Linie mittig im Zwischenraum zwischen den Spalten und Zeilen verläuft.

```css live-sample___repeat
ul {
  --base: yellow;
  --mixin: blue;

  rule-color:
    color-mix(in lch decreasing hue, var(--base) 0%, var(--mixin)),
    repeat(
      3,
      color-mix(in lch decreasing hue, var(--base) 58%, var(--mixin)),
      color-mix(in lch increasing hue, var(--base) 58%, var(--mixin))
    ),
    color-mix(in lch decreasing hue, var(--base) 100%, var(--mixin));
}
```

#### Ergebnis

{{EmbedLiveSample("Repeat", "", "440")}}

Das Grid hat zehn Spalten und sieben Zeilen, wodurch neun Spalten- und sechs Zeilenzwischenräume entstehen. Die Funktion `repeat()` wiederholt die beiden enthaltenen Mischfarben dreimal und erzeugt so eine Farbliste mit insgesamt acht Farben. Für die Erzeugung der vier Farben ist zwar viel CSS nötig, aber zumindest müssen wir nicht alle acht `color-mix()`-Funktionen ausschreiben. Da es mehr Spaltenzwischenräume als Farben in der Liste gibt, werden die Farben für die Spaltenzwischenräume wiederholt. Da es weniger Zeilenzwischenräume als Farben gibt, werden die letzten beiden Farben der Liste für die Zeilenzwischenräume nicht verwendet.

### Verwendung von `auto` innerhalb von `repeat()`

Dieses Beispiel zeigt, wie innerhalb der Funktion `repeat()` `auto` anstelle einer Ganzzahl verwendet wird.

Wir verwenden dasselbe HTML und CSS wie in den vorherigen Beispielen, überschreiben aber den Wert von `rule-color`. Hier verwenden wir `repeat(auto, <color>)`, um alle Linien außer der ersten und letzten nahezu transparent schwarz (`#00000033`) zu färben. Für die erste und letzte Linie legen wir ein deckendes `black` fest.

```css live-sample___auto
ul {
  rule-color: black, repeat(auto, #00000033), black;
}
```

#### Ergebnis

{{EmbedLiveSample("auto", "", "440")}}

Obwohl es mehr Spaltenlinien als Zeilenlinien gibt, ermöglicht der Wert `<auto-repeat-line-color>` diesen symmetrischen Effekt.

```css hidden live-sample___repeat live-sample___auto
@layer no-support {
  @supports not (rule-color: repeat(3, red)) {
    body::before {
      content: "Your browser doesn't support `repeat()` functions within a rule-color property value";
      background-color: wheat;
      text-align: center;
      padding: 1rem 0;

      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
    }
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Der Datentyp {{cssxref("&lt;color&gt;")}}
- {{cssxref("rule-width")}}
- {{cssxref("rule-style")}}
- {{cssxref("row-rule-color")}}
- {{cssxref("column-rule-color")}}
- Die Kurzschreibweise {{cssxref("rule")}}
- [CSS-Abstände definieren](/de/docs/Web/CSS/Guides/Gaps/Defining_gaps)
- Das Modul [CSS-Abstände](/de/docs/Web/CSS/Guides/Gaps)
