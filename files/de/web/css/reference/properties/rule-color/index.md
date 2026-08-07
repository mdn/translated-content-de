---
title: "`rule-color` CSS property"
short-title: rule-color
slug: Web/CSS/Reference/Properties/rule-color
l10n:
  sourceCommit: 343ab51426f9279175b8f71fff911621d0a7da20
---

{{SeeCompatTable}}

Die **`rule-color`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Farben der Linien, die zwischen Spalten und Zeilen in Multi-Column-Grid, Flex- und Multi-Column-Layouts gezeichnet werden, und setzt die Farben der Spalten- und Zeilenlinien auf denselben Wert.

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

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

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

Die `rule-color` Eigenschaft akzeptiert eine durch Kommas getrennte Liste von Werten, einschließlich:

- `<line-color>`
  - : Ein {{cssxref("&lt;color&gt;")}} der die Farbe der Linie repräsentiert.

- `<repeat-line-color>`
  - : Eine {{cssxref("repeat()")}} Funktion, mit einem {{cssxref("&lt;integer&gt;")}} von `1` oder mehr als erstem Argument und einem oder mehreren `<color>` Werten als nachfolgende Argumente. Der `<integer>` gibt an, wie oft die `<color>` Werte wiederholt werden sollen.

- `<auto-repeat-line-color>`
  - : Eine {{cssxref("repeat()")}} Funktion, mit `auto` als erstem Argument und einem oder mehreren `<color>` Werten als nachfolgende Argumente. Die bereitgestellten `<color>` Werte werden so oft wie nötig wiederholt, um fehlende Werte für Regeln zu füllen, die nicht explizit von anderen Komponenten des Eigenschaftswerts angegeben sind.

## Beschreibung

Die `rule-color` Eigenschaft definiert die Farben von Linien, die in den Lücken zwischen Spalten und Zeilen in [multi-column](/de/docs/Web/CSS/Guides/Multicol_layout), [flex](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [grid](/de/docs/Web/CSS/Guides/Grid_layout) Containern mit mehr als einer Spalte oder Zeile gezeichnet werden. Es ist eine Kurzform, die sowohl die {{cssxref("row-rule-color")}} als auch die {{cssxref("column-rule-color")}} Eigenschaften auf denselben Wert setzt.

Der Wert ist eine durch Kommas getrennte Liste von Komponenten, die `<line-color>`, `<repeat-line-color>` und `<auto-repeat-line-color>` Typen enthalten kann. Die `rule-color` Eigenschaft kann zusammen mit den Eigenschaften {{cssxref("rule-width")}} und {{cssxref("rule-style")}} mit der Kurzform {{cssxref("rule")}} festgelegt werden.

### Linienfarben

Ein `<line-color>` kann als jeder gültige CSS {{cssxref("&lt;color&gt;")}} Wert deklariert werden. Wenn der Eigenschaftswert nur aus einer `<color>` besteht, sind alle Regel-Linien in dieser Farbe. Wenn wir zum Beispiel das Folgende deklarieren, werden die Linien in den Abständen zwischen Spalten und Zeilen alle blau sein:

```css
rule-color: blue;
```

Wenn mehrere `<line-color>` Werte deklariert sind, werden sie in der angegebenen Reihenfolge auf die Linien in den Spalten- und Zeilenabständen angewendet. Wenn es mehr Regeln als `<line-color>` Werte gibt, wird die Liste der Farben wiederholt, bis jede Spaltenregel eine Farbe hat. Wenn wir zum Beispiel das Folgende deklarieren, ist jede ungerade Regel rot und jede gerade Regel gelb.

```css
rule-color: red, yellow;
```

### Wiederholte Linienfarben

Die `repeat()` Funktion, mit einem Integer von `1` oder größer als erstem Argument, kann verwendet werden, um eine gültige Liste von CSS {{cssxref("&lt;color&gt;")}} Werten, die als nachfolgende Argumente übergeben werden, die angegebene Anzahl von Zeiten zu wiederholen. Dies ermöglicht es, die Farbwerte so oft wie nötig zu wiederholen, ohne sie einzeln auflisten zu müssen. Die folgenden Deklarationen sind äquivalent:

```css
rule-color: blue, yellow, red, yellow, red, yellow, red;
rule-color: blue, repeat(3, yellow, red);
```

Dies erstellt eine Liste von sieben Farben. Wenn die Anzahl der Farben in der `rule-color` Farbliste die Anzahl der Lücken zwischen Spalten und Zeilen übersteigt, werden die überschüssigen Farbwerte ignoriert. Wenn es weniger Farben als Abstände gibt, wird die Liste der Werte wiederholt, bis jede Regel mit einer Farbe assoziiert ist. Zum Beispiel, wenn der Container drei Spalten und 18 Zeilen hat, wird die Regel im ersten Spaltenabstand blau und die zweite gelb sein. Für die Zeilenregeln wird die Sequenz wiederholt, wobei die erste, achte, und fünfzehnte Zeilenregel blau sind.

### Auto-wiederholende Linienfarben

Die `repeat()` Funktion akzeptiert auch `auto` als erstes Argument anstelle eines positiven Integers. Mit `auto` als erstem Argument werden die `<color>` Werte, die als nachfolgende Argumente übergeben werden, so oft wie nötig wiederholt, um Werte für alle Spalten- und Zeilenregeln zu füllen, die nicht explizit von anderen Komponenten des Eigenschaftswerts angegeben werden.

```css
rule-color: blue, repeat(auto, yellow), red;
```

In diesem Fall werden die erste Spalten- und Zeilenregel blau, die letzte rot und alle anderen gelb sein. Solange es mindestens zwei Regeln in jeder Richtung gibt, wird die erste Regel immer blau und die letzte immer rot sein. Alle anderen Regeln werden gelb, was bedeutet, dass es bei nur 2 oder 3 Spalten und Zeilen keine gelben Linien geben wird.

Das `auto` Schlüsselwort innerhalb der `repeat()` Funktion erstellt einen Auto-Wiederholer, der Werte für die Farben der Regel-Linien füllt, die ansonsten keine Werte von anderen Teilen der Liste erhalten würden, und verhindert, dass die Liste zyklisch wird. Ein `rule-color` Wert kann höchstens eine `repeat(auto, <color>)` enthalten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel definieren wir eine einzelne `<color>` für die Linien, die zwischen den Spalten und Zeilen der Elemente in einem Grid-Container gezeichnet werden.

#### HTML

Wir erstellen eine Liste von 75 Elementen. Der Großteil des HTMLs ist zur Übersichtlichkeit ausgeblendet.

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

Wir definieren die ungeordnete Liste als einen Container mit 10 Spalten, erstellen Spalten und Zeilen mit der {{cssxref("grid-template-columns")}} Eigenschaft. Wir fügen eine {{cssxref("gap")}} von `5px` hinzu, um genug Platz zwischen den Spalten und Zeilen für unsere `3px` gestrichelte Regel zu bieten, und setzen {{cssxref("list-style-type")}} auf `none`, um die Aufzählungszeichen zu entfernen.

Wir fügen eine {{cssxref("gap")}} von `5px` hinzu, um genügend Platz zwischen den Elementen für unsere mittlere gestrichelte Regel zu bieten. Wir setzen die `rule-color` auf `#22BB22`, einen grünen {{cssxref("hex-color")}} Wert:

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

{{EmbedLiveSample("Basic", "", "600")}}

### Mehrere Farbwerte

Dieses Beispiel demonstriert die Deklaration von mehr als einer Farbe und, wie die Werte wiederholt werden, wenn es weniger Werte in der Farbliste als Abstände zwischen Spalten und Zeilen gibt.

Wir verwenden das gleiche HTML und CSS wie im vorherigen Beispiel, fügen jedoch drei durch Kommas getrennte Farben als `rule-color` Wert hinzu:

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

{{EmbedLiveSample("Multiple", "", "600")}}

Es gibt neun Spaltenabstände und sechs Zeilenabstände, aber nur drei Farben in unserer Farbliste, daher wird die Liste wiederholt, wobei die erste, vierte und siebte Linie blau sind.

### Verwendung der `repeat()` Funktion

Dieses Beispiel demonstriert die Verwendung der `repeat()` Funktion innerhalb des `rule-color` Eigenschaftswerts und wie diese Funktion helfen kann, komplexe Werte handhabbar zu machen.

#### CSS

Um zu demonstrieren, wie Werte kompliziert werden können und der Nutzen der `repeat()` Funktion, deklarieren wir zwei benutzerdefinierte Eigenschaften, die wir in vier {{cssxref("color-mix()")}} Farbfunktionserklärungen verwenden, um blaue, rötliche, tealfarbene und gelbe Farben zu erstellen. Die rötlichen und tealfarbenen `color-mix()` Farben befinden sich innerhalb einer `repeat()` Funktion, die auf dreimaliges Wiederholen gesetzt ist.

Wir haben auch eine Umrandung um jedes Gitterelement hinzugefügt, damit Sie sehen können, wie die Linie in der Mitte des Abstands zwischen den Spalten und Zeilen verläuft.

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

{{EmbedLiveSample("repeat", "", "600")}}

Das Gitter hat 10 Spalten und 7 Zeilen, wodurch 9 Spalten- und 6 Zeilenabstände entstehen. Die `repeat()` Funktion wiederholt die beiden enthaltenen gemischten Farben dreimal, wodurch eine Farbliste mit insgesamt acht Farben entsteht. Obwohl es viel CSS gibt, um die vier Farben zu erstellen, mussten wir wenigstens nicht alle acht `color-mix()` Funktionen ausschreiben. Da es mehr Spaltenabstände als Listenfarben gibt, werden die Farben für die Spaltenabstände wiederholt. Da es weniger Zeilenabstände als Farben gibt, werden die letzten beiden Farben in der Liste nicht für die Zeilenabstände verwendet.

### Verwendung von `auto` innerhalb von `repeat()`

Dieses Beispiel zeigt die Verwendung von `auto`, anstelle eines Integers, innerhalb der `repeat()` Funktion.

Wir verwenden dasselbe HTML und CSS wie in den vorherigen Beispielen, überschreiben jedoch den `rule-color` Wert. Hier verwenden wir `repeat(auto, <color>)`, um alle Linien fast transparent schwarz (`#0003`) zu setzen, außer der ersten und letzten, die wir auf ein festes `schwarz` setzen.

```css live-sample___auto
ul {
  rule-color: black, repeat(auto, #0003), black;
}
```

#### Ergebnis

{{EmbedLiveSample("auto", "", "600")}}

Obwohl es mehr Spaltenregel-Linien als Zeilenregel-Linien gibt, ermöglicht der `<auto-repeat-line-color>` Wert die Erstellung dieses symmetrischen Effekts.

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

- Der {{cssxref("&lt;color&gt;")}} Datentyp
- {{cssxref("rule-width")}}
- {{cssxref("rule-style")}}
- {{cssxref("row-rule-color")}}
- {{cssxref("column-rule-color")}}
- {{cssxref("rule")}} Kurzform
- [CSS Lückenmodul](/de/docs/Web/CSS/Guides/Gaps)
