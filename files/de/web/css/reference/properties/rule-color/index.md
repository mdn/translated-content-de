---
title: "`rule-color` CSS property"
short-title: rule-color
slug: Web/CSS/Reference/Properties/rule-color
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

Die **`rule-color`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Farben der Linien, die zwischen Spalten und Zeilen in Mehrspalten-, Flex- und Mehrspalten-Layouts gezogen werden, und setzt die Farben der Spalten- und Zeilenregeln auf denselben Wert fest.

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

Die `rule-color` Eigenschaft akzeptiert eine kommagetrennte Liste von Werten, einschließlich:

- `<line-color>`
  - : Ein {{cssxref("&lt;color&gt;")}}, das die Farbe der Linie darstellt.

- `<repeat-line-color>`
  - : Eine {{cssxref("repeat()")}} Funktion, mit einem {{cssxref("&lt;integer&gt;")}} von `1` oder mehr als erstes Argument und einem oder mehreren `<color>` Werten als nachfolgenden Argumenten. Das `<integer>` gibt an, wie oft die `<color>` Werte wiederholt werden sollen.

- `<auto-repeat-line-color>`
  - : Eine {{cssxref("repeat()")}} Funktion, mit `auto` als erstes Argument und einem oder mehreren `<color>` Werten als nachfolgenden Argumenten. Die angegebenen `<color>` Werte werden so oft wie nötig wiederholt, um Werte für alle Regeln zu füllen, die nicht explizit von anderen Komponenten des Eigenschaftswertes angegeben sind.

## Beschreibung

Die `rule-color` Eigenschaft definiert die Farben aller Linien, die in den Lücken zwischen Spalten und Zeilen in [Mehrspalten](/de/docs/Web/CSS/Guides/Multicol_layout) -, [Flex](/de/docs/Web/CSS/Guides/Flexible_box_layout) - und [Grid](/de/docs/Web/CSS/Guides/Grid_layout)-Containern mit mehr als einer Spalte oder Zeile gezogen werden. Sie ist eine Kurzform, die sowohl die {{cssxref("row-rule-color")}} als auch die {{cssxref("column-rule-color")}} Eigenschaften auf denselben Wert setzt.

Der Wert ist eine kommagetrennte Liste von Komponenten, die `<line-color>`, `<repeat-line-color>` und `<auto-repeat-line-color>` Typen enthalten kann.
Die `rule-color` Eigenschaft kann zusammen mit den Eigenschaften {{cssxref("rule-width")}} und {{cssxref("rule-style")}} über die Kurzform {{cssxref("rule")}} gesetzt werden.

### Linienfarben

Ein `<line-color>` kann als jeder gültige CSS {{cssxref("&lt;color&gt;")}} Wert angegeben werden. Wenn der Eigenschaftswert nur aus einer `<color>` besteht, werden alle Regel-Linien in dieser Farbe sein. Wenn wir beispielsweise Folgendes deklarieren, werden die Linien in den Abständen zwischen Spalten und Zeilen alle blau sein:

```css
rule-color: blue;
```

Wenn mehrere `<line-color>` Werte deklariert werden, werden sie in der angegebenen Reihenfolge auf die Linien in den Abständen zwischen den Spalten und Zeilen angewendet. Wenn mehr Regeln vorhanden sind als `<line-color>` Werte, wird die Liste der Farben wiederholt, bis jede Spaltenregel eine Farbe hat. Wenn wir beispielsweise Folgendes deklarieren, wird jede ungerade Regel rot und jede gerade Regel gelb sein.

```css
rule-color: red, yellow;
```

### Wiederholte Linienfarben

Die `repeat()` Funktion, mit einer Ganzzahl von `1` oder größer als erstes Argument, kann verwendet werden, um eine gültige Liste von CSS {{cssxref("&lt;color&gt;")}} Werten, die als nachfolgende Argumente übergeben werden, die angegebene Anzahl von Malen zu wiederholen. Dies ermöglicht es, die Farbwerte so oft zu wiederholen, wie Sie es benötigen, ohne sie einzeln auflisten zu müssen. Die folgenden Deklarationen sind gleichwertig:

```css
rule-color: blue, yellow, red, yellow, red, yellow, red;
rule-color: blue, repeat(3, yellow, red);
```

Dies erstellt eine Liste von sieben Farben. Wenn die Anzahl der Farben in der Farbliste des `rule-color` Wertes die Anzahl der Lücken zwischen Spalten und Zeilen übersteigt, werden die überzähligen Farbwerte ignoriert. Wenn es weniger Farben als Abstände gibt, wird die Liste der Werte wiederholt, bis jede Regel eine zugeordnete Farbe hat. Zum Beispiel, wenn der Container drei Spalten und 18 Zeilen hat, wird die Regel in der ersten Spaltenlücke blau und die zweite gelb sein. Für die Zeilenregeln wiederholt sich die Sequenz, wobei die erste, achte und fünfzehnte Zeilenregel blau sind.

### Automatisch wiederholte Linienfarben

Die `repeat()` Funktion akzeptiert auch `auto` als erstes Argument anstelle einer positiven Ganzzahl. Mit `auto` als erstem Argument werden die `<color>` Werte, die als nachfolgende Argumente übergeben werden, so oft wie nötig wiederholt, um Werte für alle Spalten- und Zeilenregeln zu füllen, die nicht explizit von anderen Komponenten des Eigenschaftswertes angegeben sind.

```css
rule-color: blue, repeat(auto, yellow), red;
```

In diesem Fall werden die ersten Spalten- und Zeilenregeln blau, die letzten rot und alle anderen gelb sein. Solange es mindestens zwei Regeln in einer Richtung gibt, wird die erste Regel immer blau und die letzte immer rot sein. Alle anderen Regeln werden gelb sein, was bedeutet, dass, wenn es nur 2 oder 3 Spalten und Zeilen gibt, keine gelben Linien vorhanden sein werden.

Das `auto` Schlagwort innerhalb der `repeat()` Funktion erstellt einen Auto-Wiederholer, der Werte für die Linienregel-Farben füllt, die sonst keine Werte aus anderen Teilen der Liste erhalten würden, und verhindert, dass die Liste zyklisch wird. Ein `rule-color` Wert kann höchstens einen `repeat(auto, <color>)` enthalten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel definieren wir eine einzelne `<color>` für die zwischen den Spalten und Zeilen der Elemente in einem Grid-Container gezeichneten Linien.

#### HTML

Wir erstellen eine Liste von 75 Items. Der größte Teil des HTMLs ist der Kürze halber ausgeblendet.

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

Wir definieren die ungeordnete Liste als ein 10-Spalten-Container und erstellen Spalten und Zeilen mit der {{cssxref("grid-template-columns")}} Eigenschaft. Wir fügen einen {{cssxref("gap")}} von `5px` hinzu, um genügend Platz zwischen den Spalten und Zeilen für unsere `3px` gestrichelte Regel zu schaffen, und setzen {{cssxref("list-style-type")}} auf `none`, um die Aufzählungszeichen zu entfernen.

Wir fügen einen {{cssxref("gap")}} von `5px` hinzu, um genügend Platz zwischen den Items für unsere mittlere gestrichelte Regel zu schaffen. Wir setzen die `rule-color` auf `#22BB22`, einen grünen {{cssxref("hex-color")}} Wert:

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

Dieses Beispiel demonstriert, wie man mehr als eine Farbe deklariert und wie die Werte wiederholt werden, wenn es weniger Werte in der Farbliste gibt als Abstände zwischen Spalten und Zeilen.

Unter Verwendung des gleichen HTMLs und CSS wie im vorherigen Beispiel fügen wir drei kommagetrennte Farben als Wert für `rule-color` hinzu:

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

Es gibt neun Spaltenabstände und sechs Zeilenabstände, aber nur drei Farben in unserer Farbliste, daher wird die Liste wiederholt, wobei die erste, vierte und siebte Zeile blau sind.

### Verwendung der `repeat()` Funktion

Dieses Beispiel zeigt die Verwendung der `repeat()` Funktion im `rule-color` Eigenschaftswert und wie diese Funktion hilft, komplexe Werte handhabbar zu halten.

#### CSS

Um zu demonstrieren, wie Werte kompliziert werden können und den Nutzen der `repeat()` Funktion, deklarieren wir zwei benutzerdefinierte Eigenschaften, die wir in vier {{cssxref("color-mix()")}} Farbfunktionserklärungen verwenden, um blaue, rötliche, blaustichige und gelbe Farben zu erstellen. Die rötlichen und blaustichigen `color-mix()` Farben sind innerhalb einer `repeat()` Funktion, die auf dreimal wiederholen eingestellt ist.

Wir haben auch einen Rahmen um jedes Grid-Item hinzugefügt, damit Sie sehen können, wie die Linie in der Mitte des Abstands zwischen den Spalten und Zeilen ist.

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

Das Grid hat 10 Spalten und 7 Zeilen, wodurch 9 Spalten- und 6 Zeilenabstände entstehen. Die `repeat()` Funktion wiederholt die zwei enthaltenen gemischten Farben dreimal und erstellt eine Farbliste mit insgesamt acht Farben. Obwohl es viel CSS gibt, um die vier Farben zu erstellen, mussten wir zumindest nicht alle acht `color-mix()` Funktionen ausschreiben. Da es mehr Spaltenabstände als Listenfarben gibt, werden die Farben für die Spaltenabstände wiederholt. Da es weniger Zeilenabstände als Farben gibt, werden die letzten zwei Farben in der Liste für die Zeilenabstände nicht verwendet.

### Verwendung von `auto` innerhalb von `repeat()`

Dieses Beispiel zeigt die Verwendung von `auto` anstelle einer Ganzzahl innerhalb der `repeat()` Funktion.

Wir verwenden dasselbe HTML und CSS wie in den vorherigen Beispielen, überschreiben jedoch den `rule-color` Wert. Hier verwenden wir `repeat(auto, <color>)`, um alle Linien auf fast transparentes Schwarz (`#0003`) zu setzen, außer die erste und die letzte, die wir auf ein solides `Schwarz` setzen.

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
- [CSS Abstände](/de/docs/Web/CSS/Guides/Gaps) Modul
