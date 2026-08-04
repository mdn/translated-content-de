---
title: "`rule-color` CSS property"
short-title: rule-color
slug: Web/CSS/Reference/Properties/rule-color
l10n:
  sourceCommit: e08f8e5467c3af416ca82f00bfbf19d718d6fbab
---

Die **`rule-color`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Farben der Linien, die zwischen Spalten und Zeilen in Layouts mit mehreren Spalten, flexiblem Boxenmodell und mehrspaltigen Layouts gezeichnet werden. Sie setzt die Farben der Spalten- und Zeilenlinien auf denselben Wert.

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
  - : Ein {{cssxref("&lt;color&gt;")}} Wert, der die Farbe der Linie darstellt.

- `<repeat-line-color>`
  - : Eine {{cssxref("repeat()")}} Funktion, mit einem {{cssxref("&lt;integer&gt;")}} von `1` oder mehr als erstem Argument und einem oder mehreren `<color>`-Werten als nachfolgende Argumente. Der `<integer>` gibt an, wie oft die `<color>`-Werte wiederholt werden sollen.

- `<auto-repeat-line-color>`
  - : Eine {{cssxref("repeat()")}} Funktion, mit `auto` als erstem Argument und einem oder mehreren `<color>`-Werten als nachfolgende Argumente. Die bereitgestellten `<color>`-Werte werden so oft wiederholt, wie nötig, um Werte für alle Regeln zu füllen, die nicht explizit durch andere Komponenten des Eigenschaftswerts angegeben sind.

## Beschreibung

Die `rule-color` Eigenschaft definiert die Farben der Linien, die in den Lücken zwischen Spalten und Reihen in [multi-column](/de/docs/Web/CSS/Guides/Multicol_layout), [flex](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [grid](/de/docs/Web/CSS/Guides/Grid_layout) Containern mit mehr als einer Spalte oder Zeile gezeichnet werden. Sie ist eine Kurzform, die sowohl die {{cssxref("row-rule-color")}} als auch die {{cssxref("column-rule-color")}} Eigenschaft auf denselben Wert setzt.

Der Wert ist eine durch Kommas getrennte Liste von Komponenten, die `<line-color>`, `<repeat-line-color>` und `<auto-repeat-line-color>` Typen enthalten kann.
Die `rule-color` Eigenschaft kann zusammen mit den {{cssxref("rule-width")}} und {{cssxref("rule-style")}} Eigenschaften verwendet werden, indem die {{cssxref("rule")}} Kurzform verwendet wird.

### Linienfarben

Ein `<line-color>` kann als ein gültiger CSS {{cssxref("&lt;color&gt;")}} Wert deklariert werden. Wenn der Eigenschaftswert nur eine `<color>` enthält, werden alle Linien dieser Farbe haben. Beispielsweise, wenn wir folgendes deklarieren, werden die Linien in den Spalten- und Zeilenabständen alle blau sein:

```css
rule-color: blue;
```

Wenn mehrere `<line-color>` Werte deklariert werden, werden sie in der angegebenen Reihenfolge auf die Linien aufgetragen, die in den Spalten- und Zeilenabständen gemalt werden. Wenn es mehr Regeln als `<line-color>` Werte gibt, wird die Liste der Farben wiederholt, bis jede Spaltenregel eine Farbe hat. Wenn wir z.B. folgendes deklarieren, wird jede ungerade Regel rot sein und jede gerade Regel gelb.

```css
rule-color: red, yellow;
```

### Wiederholte Linienfarben

Die `repeat()` Funktion, mit einer Ganzzahl von `1` oder größer als erstem Argument, kann verwendet werden, um eine gültige Liste von CSS {{cssxref("&lt;color&gt;")}} Werten, die als nachfolgende Argumente übergeben werden, die angegebene Anzahl von Malen zu wiederholen. Dies ermöglicht es, dass die Farbwerte so oft wiederholt werden, wie Sie es benötigen, ohne sie einzeln auflisten zu müssen. Die folgenden Deklarationen sind äquivalent:

```css
rule-color: blue, yellow, red, yellow, red, yellow, red;
rule-color: blue, repeat(3, yellow, red);
```

Dies erzeugt eine Liste von sieben Farben. Wenn die Anzahl der Farben in der `rule-color` Werte-Farbenliste die Anzahl der Lücken zwischen Spalten und Zeilen übersteigt, werden die überschüssigen Farbwerte ignoriert. Wenn es weniger Farben als Abgrenzungen gibt, wird die Werteliste so oft wiederholt, bis jede Regel eine zugehörige Farbe hat. Zum Beispiel, wenn der Container drei Spalten und 18 Zeilen hat, wird die Regel in der ersten Spaltenabgrenzung blau und die zweite gelb. Für die Zeilenregelungen wird die Sequenz wiederholt, wobei die erste, achte und fünfzehnte Zeilenregel blau sind.

### Auto-wiederholende Linienfarben

Die `repeat()` Funktion akzeptiert auch `auto` als erstes Argument statt einer positiven Ganzzahl. Mit `auto` als erstem Argument werden die `<color>`-Werte, die als nachfolgende Argumente übergeben werden, so oft wie nötig wiederholt, um Werte für alle Spalten- und Zeilenregeln zu füllen, die nicht explizit durch andere Komponenten des Eigenschaftswerts angegeben sind.

```css
rule-color: blue, repeat(auto, yellow), red;
```

In diesem Fall werden die ersten Spalten- und Zeilenregel blau sein, die letzte rot, und alle anderen gelb. Solange es mindestens zwei Regeln in beide Richtungen gibt, wird die erste Regel immer blau und die letzte immer rot sein. Alle anderen Regeln werden gelb sein, was bedeutet, dass es, wenn es nur 2 oder 3 Spalten und Zeilen gibt, keine gelben Linien geben wird.

Das `auto` Schlüsselwort innerhalb der `repeat()` Funktion erstellt einen Auto-Wiederholer, der Werte für die Farblinienregel füllt, die sonst keine Werte von anderen Teilen der Liste erhalten würden, und verhindert, dass die Liste durchlaufen wird. Ein `rule-color` Wert kann maximal eine `repeat(auto, <color>)` enthalten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel definieren wir eine einzelne `<color>` für die Linien, die zwischen den Spalten und Zeilen von Elementen in einem Raster-Container gezeichnet werden.

#### HTML

Wir erstellen eine Liste von 75 Elementen. Der größte Teil des HTML ist der Kürze halber ausgeblendet.

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

Wir definieren die ungeordnete Liste als einen Container mit 10 Spalten, indem wir Spalten und Zeilen mit der {{cssxref("grid-template-columns")}} Eigenschaft erstellen. Wir fügen eine {{cssxref("gap")}} von `5px` hinzu, um genügend Platz zwischen den Spalten und Zeilen zu schaffen, damit unsere `3px` gestrichelte Linie passt, und setzen {{cssxref("list-style-type")}} auf `none`, um die Aufzählungszeichen zu entfernen.

Wir fügen eine {{cssxref("gap")}} von `5px` hinzu, um genügend Platz zwischen den Elementen zu schaffen, damit unsere mittlere gestrichelte Regel passt. Wir setzen die `rule-color` auf `#22BB22`, einen grünen {{cssxref("hex-color")}} Wert:

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

Dieses Beispiel zeigt die Deklaration von mehr als einer Farbe und wie die Werte wiederholt werden, wenn es weniger Werte in der Farbliste als Lücken zwischen den Spalten und Zeilen gibt.

Unter Verwendung desselben HTML und CSS wie im vorherigen Beispiel fügen wir drei durch Kommas getrennte Farben als `rule-color` Wert ein:

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

Es gibt neun Spaltenabstände und sechs Zeilenabstände, aber nur drei Farben in unserer Farbliste, so dass die Liste wiederholt wird, wobei die erste, vierte und siebte Linie blau ist.

### Verwendung der `repeat()` Funktion

Dieses Beispiel zeigt die Verwendung der `repeat()` Funktion innerhalb des `rule-color` Eigenschaftswerts und wie diese Funktion dazu beitragen kann, komplexe Werte vor Unhandlichkeit zu bewahren.

#### CSS

Um zu demonstrieren, wie Werte kompliziert werden können und den Nutzen der `repeat()` Funktion, deklarieren wir zwei benutzerdefinierte Eigenschaften, die wir in vier {{cssxref("color-mix()")}} Farbfunktionsdeklarationen verwenden, um blaue, rötliche, türkisfarbene und gelbe Farben zu erstellen. Die rötlichen und türkisfarbenen `color-mix()` Farben befinden sich innerhalb einer `repeat()` Funktion, die auf 3 Mal gesetzt ist.

Wir fügten auch eine Umrandung um jedes Rasterelement hinzu, damit Sie sehen können, wie die Linienregel in der Mitte der Lücke zwischen den Spalten und Zeilen liegt.

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

Das Raster hat 10 Spalten und 7 Zeilen, wodurch 9 Spaltenabstände und 6 Zeilenabgrenzungen entstehen. Die `repeat()` Funktion wiederholt die beiden enthaltenen Mischfarben dreimal und erstellt eine Farbliste mit insgesamt acht Farben. Obwohl es viel CSS zur Erstellung der vier Farben gibt, mussten wir nicht alle acht `color-mix()` Funktionen ausschreiben. Da es mehr Spaltenabstände als Listenfarben gibt, werden die Farben für die Spaltenabstände wiederholt. Da es weniger Zeilenabstände als Farben gibt, werden die letzten beiden Farben in der Liste nicht für die Zeilenabstände verwendet.

### Verwendung von `auto` innerhalb von `repeat()`

Dieses Beispiel zeigt die Verwendung von `auto` anstelle einer Ganzzahl innerhalb der `repeat()` Funktion.

Wir verwenden dasselbe HTML und CSS wie in den vorherigen Beispielen, überschreiben jedoch den `rule-color` Wert. Hier verwenden wir `repeat(auto, <color>)`, um alle Linien auf fast transparentes Schwarz (`#0003`) zu setzen, außer der ersten und letzten, die wir auf ein solides `black` setzen.

```css live-sample___auto
ul {
  rule-color: black, repeat(auto, #0003), black;
}
```

#### Ergebnis

{{EmbedLiveSample("auto", "", "600")}}

Obwohl es mehr Spaltenlinien als Zeilenlinien gibt, ermöglicht der `<auto-repeat-line-color>` Wert die Erstellung dieses symmetrischen Effekts.

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
- [CSS gaps](/de/docs/Web/CSS/Guides/Gaps) Modul
