---
title: "`rule` CSS property"
short-title: rule
slug: Web/CSS/Reference/Properties/rule
l10n:
  sourceCommit: f4d39e4f5a6f426bff5f91cccb5b6fadff094e27
---

{{SeeCompatTable}}

Die **`rule`** [Shorthand](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft legt die Breite, den Stil und die Farbe der Linie fest, die zwischen den Zeilen und Spalten in Multi-Row-Grid-, Flex- und Multi-Col-Layouts gezeichnet wird, und setzt sowohl die Spalten- als auch die Zeilenregeln auf dieselben Werte.

{{InteractiveExample("CSS Demo: rule")}}

```css interactive-example-choice
rule: solid;
```

```css interactive-example-choice
rule: dotted medium blue;
```

```css interactive-example-choice
rule:
  dotted medium blue,
  repeat(3, dotted red 2px, double orange 5px);
```

```css interactive-example-choice
rule:
  dashed medium magenta,
  repeat(auto, dotted blue 2px, dotted blue 5px),
  dashed medium magenta;
```

```css interactive-example-choice
rule:
  dashed medium magenta,
  repeat(auto, dotted blue 2px),
  outset goldenrod 5px;
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

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("rule-color")}}
- {{cssxref("rule-style")}}
- {{cssxref("rule-width")}}

## Syntax

```css
/* One value */
rule: dotted;
rule: solid 8px;
rule: solid blue;
rule: thick inset blue;

/* Multiple values */
rule: groove, dashed, solid;
rule:
  dotted medium blue,
  dashed magenta 1px,
  outset green 5px;
rule:
  solid #0ff,
  repeat(3, dashed magenta 1px, outset green 5px);
rule:
  inset 3px yellow,
  repeat(auto, dashed magenta 1px, groove green 5px),
  inset 3px yellow;

/* Global values */
rule: inherit;
rule: initial;
rule: revert;
rule: revert-layer;
rule: unset;
```

### Werte

Die `rule` Eigenschaft akzeptiert eine durch Kommas getrennte Liste von Werten, einschließlich:

- `<gap-rule>`
  - : Angegeben als eins, zwei oder drei der unten aufgeführten Werte, in beliebiger Reihenfolge.
    - `<'line-width'>`
      - : Ein {{cssxref("&lt;line-width&gt;")}}: eine positive {{cssxref("&lt;length&gt;")}} oder eines der drei Schlüsselwörter `thin`, `medium` oder `thick`. Der Standardwert ist `medium`. Siehe {{cssxref("rule-width")}}.
    - `<'line-style'>`
      - : Ein {{cssxref("&lt;line-style&gt;")}}: eines von `none`, `hidden`, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset` oder `outset`. Der Standardwert ist `none`. Siehe {{cssxref("rule-style")}}.
    - `<'color'>`
      - : Ein {{cssxref("&lt;color&gt;")}}-Wert, der die Farbe der Linie darstellt. Der Standardwert ist `currentcolor`. Siehe {{cssxref("rule-color")}}.

- `<gap-repeat-rule>`
  - : Eine {{cssxref("repeat()")}} Funktion, mit einem {{cssxref("&lt;integer&gt;")}} von `1` oder mehr als erstem Argument und einem oder mehreren `<gap-rule>` Werten als nachfolgende Argumente. Der `<integer>` gibt an, wie oft die Liste der `<gap-rule>` Werte wiederholt werden soll.

- `<gap-auto-repeat-rule>`
  - : Eine {{cssxref("repeat()")}} Funktion, mit `auto` als erstem Argument und einem oder mehreren `<gap-rule>` Werten als nachfolgende Argumente. Die bereitgestellte Liste der `<gap-rule>` Werte wird so oft wie nötig wiederholt, um Werte für alle Regeln zu füllen, die nicht explizit durch andere Komponenten des Eigenschaftswertes angegeben sind.

## Beschreibung

Die `rule` Eigenschaft definiert den Linienstil von Regel-Linien, die in den Lücken zwischen Zeilen und Spalten in [multi-column](/de/docs/Web/CSS/Guides/Multicol_layout), [flex](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [grid](/de/docs/Web/CSS/Guides/Grid_layout) Containern mit mehr als einer Zeile oder Spalte gezeichnet werden.

Die `rule` ist eine Kurzform für {{cssxref("rule-color")}}, {{cssxref("rule-style")}}, und {{cssxref("rule-width")}}. Sie setzt die {{cssxref("row-rule")}} und {{cssxref("column-rule")}} Shorthand-Eigenschaften auf denselben Wert.

Der Eigenschaftswert ist eine durch Kommas getrennte Liste von Komponenten, die `<gap-rule>`, `<gap-repeat-rule>`, und `<gap-auto-repeat-rule>` Typen enthalten kann. Jeder `<gap-rule>` definiert die Breite, die Farbe und den Stil von einem oder mehreren Regel-Linien.

Wenn der Eigenschaftswert nur aus einem `<gap-rule>` besteht, werden alle Zeilen- und Spaltenregeln diesen Stil, diese Farbe und diese Größe haben. Wenn wir das folgende deklarieren, werden alle Zeilen- und Spaltenregeln `dashed red 3px` sein:

```css
rule: dashed red 3px;
```

Wenn mehr als ein `<gap-rule>` deklariert wird, werden diese in der angegebenen Reihenfolge auf die Regeln angewendet. Wenn es mehr Lücken zwischen Zeilen und Spalten als `<gap-rule>` Werte gibt, wird die Liste der Werte wiederholt, bis jede Zeilen- und Spaltenregel eine Lücke hat. Wenn wir das Folgende deklarieren, wird zum Beispiel jede ungerade Regel `dashed red 3px` sein, und jede gerade Regel wird `dotted blue 5px` sein, in beide Richtungen.

```css
rule:
  dashed red 3px,
  dotted blue 5px;
```

### Wiederholte Linienstile

Die `repeat()` Funktion, mit einem Integer von `1` oder größer als erstem Argument, kann verwendet werden, um eine gültige Liste von CSS [`<gap-rule>`](#gap-rule) Werten, die als nachfolgende Argumente übergeben werden, die angegebene Anzahl von Malen zu wiederholen. Dies erlaubt es, denselben `<gap-rule>` eine festgelegte Anzahl von Malen zu wiederholen, ohne denselben CSS-Code mehrfach zu wiederholen. Die folgenden Deklarationen sind äquivalent:

```css
rule:
  solid red 5px,
  outset blue 10px,
  inset green 1px,
  outset blue 10px,
  inset green 1px,
  outset blue 10px,
  inset green 1px;
rule:
  solid red 5px,
  repeat(3, outset blue 10px, inset green 1px);
```

Dies erzeugt eine Liste von sieben Regeln. Wenn die Anzahl der Stile in der `rule`-Wert-Stilliste die Anzahl der Lücken zwischen Zeilen und Spalten übersteigt, werden die überschüssigen Stilwerte ignoriert. Wenn der Container, auf den dies angewendet wird, drei Zeilen und Spalten hat, wird die Regel in der ersten Lücke `solid red 5px` sein und die zweite `outset blue 10px`, in beide Richtungen.

Wenn es mehr Lücken als Stile gibt, wird die Liste der Stile wiederholt. Wenn der Container 8, 15, 22, oder 29 Zeilen oder Spalten hat, wird diese Abfolge von Stilen in dieser Richtung ein-, zwei-, drei- oder viermal wiederholt, wobei die letzte Regel `inset green 1px` ist.

### Auto-wiederholte Linienstile

Die `repeat()` Funktion akzeptiert auch `auto` als erstes Argument anstelle eines positiven Integers. Mit `auto` als erstem Argument werden die [`<gap-rule>`](#gap-rule) Werte, die als nachfolgende Argumente übergeben werden, so oft wiederholt, wie nötig, um Werte für alle Zeilen- und Spaltenregeln zu füllen, die nicht explizit durch andere Komponenten des Eigenschaftswertes angegeben sind.

```css
rule:
  solid red 5px,
  repeat(auto, dotted green 1px, dashed blue 1px),
  solid red 5px;
```

In diesem Fall werden die ersten und letzten Zeilen- und Spaltenregeln `solid red 5px` sein, und alle anderen werden zwischen `dotted green 1px` und `dashed blue 1px` wechseln. Es spielt keine Rolle, ob der Container 3, 6, 11, 16 oder 21 Zeilen und Spalten hat; die ersten und letzten Lücken werden immer eine dicke rote Linie dazwischen haben (es sei denn, {{cssxref("rule-visibility-items")}} führt dazu, dass keine Linie gezeichnet wird), und alle anderen Zeilen- und Spaltenregeln werden dünne, gepunktete grüne oder gestrichelte blaue Linien sein. Wenn es nur 2 oder 3 Zeilen und Spalten gibt, wird es keine gepunkteten oder gestrichelten Linien geben.

Das `auto` Schlüsselwort innerhalb der `repeat()` Funktion erzeugt einen Auto-Repeater, der Werte für Zeilen- und Spaltenregeln füllt, die sonst keine Werte von anderen Teilen der Liste erhalten würden, um zu verhindern, dass die Liste durchläuft. Höchstens kann in einem `rule`-Wert nur ein `repeat(auto, <gap-rule>)` vorkommen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegendes Beispiel

In diesem Beispiel definieren wir eine einzelne Regel für die Linien, die in den Lücken zwischen Rasterelementen gezeichnet werden.

#### HTML

Wir erstellen eine Liste von 75 Elementen. Der größte Teil des HTML ist aus Gründen der Kürze ausgeblendet.

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

Wir definieren die ungeordnete Liste als 10-Spalten-Container und erstellen Spalten und Zeilen mit der {{cssxref("grid-template-columns")}} Eigenschaft und setzen {{cssxref("list-style-type")}} auf `none`, um die Aufzählungszeichen zu entfernen. Wir fügen eine {{cssxref("gap")}} von `5px` hinzu, um genügend Platz zwischen den Spalten und Zeilen zu lassen, damit unsere `dashed 3px magenta` Regel passt.

```css live-sample___basic live-sample___multiple live-sample___repeat live-sample___func live-sample___auto
ul {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  list-style-type: none;
  gap: 5px;

  rule: dashed 3px magenta;
}
li {
  text-align: center;
  aspect-ratio: 1;
}
```

#### Ergebnis

{{EmbedLiveSample("Basic", "", "600")}}

### Mehrere Gap-Regeln und Standardwerte

Dieses Beispiel zeigt die Verwendung mehrerer, durch Kommas getrennter Werte. Es demonstriert auch die Standardwerte für die Breite, die Farbe und den Stil von `medium`, `currentcolor` und `none`, jeweils.

Mit demselben HTML und CSS wie im vorherigen Beispiel fügen wir vier durch Kommas getrennte `<gap-rule>` Werte als `rule`-Wert hinzu, wobei wir das `<line-width>` im ersten `<gap-rule>`, die `<color>` im zweiten und den `<line-style>` aus dem dritten weglassen, mit dem vierten, das alle drei Komponenten enthält:

```css live-sample___repeat
ul {
  rule:
    red dashed,
    1px dotted,
    5px blue,
    10px magenta solid;
}
```

{{EmbedLiveSample("Repeat", "", "600")}}

Die rote Linie ist `3px` breit, die gepunktete Linie hat die gleiche Farbe wie der Text, und es gibt keine `5px` breite blaue Linie, da der Stil der dritten `<gap-rule>` standardmäßig `none` ist, sodass keine Linie gezeichnet wird. Da es weniger Regelstile als Lücken gibt, wird die Liste der Regeln wiederholt, bis alle Regel-Linien stilisiert sind.

### Verwendung der `repeat()` Funktion

Dieses Beispiel zeigt die Verwendung der `repeat()` Funktion innerhalb des `rule` Eigenschaftswertes. Wir verwenden dasselbe HTML und CSS wie in den vorherigen Beispielen und überschreiben den `rule` Wert mit einer durch Kommas getrennten Liste aus drei Komponenten: zwei `<gap-rule>` Werten und einem `<gap-repeat-rule>`, der eine Liste aus zwei `<gap-rule>` Werten definiert, die dreimal wiederholt werden.

```css live-sample___func live-sample___auto
ul {
  rule:
    3px red dashed,
    repeat(3, dotted green 1px, dashed blue 1px),
    3px red dashed;
}
```

{{EmbedLiveSample("func", "", "600")}}

Das Raster hat zehn Spalten und acht Reihen, also neun Spaltenlücken und sieben Zeilenlücken. Die `repeat()` Funktion wiederholt zwei Stilwerte dreimal, wodurch eine Liste von acht Stilwerten entsteht. Da es weniger Zeilenlücken als Werte gibt, wird der letzte Wert in der Zeilenrichtung nicht benutzt. Da es mehr Spaltenlücken als Werte gibt, wird die Liste in der Spaltenrichtung wiederholt.

### Verwendung von `auto` innerhalb von `repeat()`

Dieses Beispiel zeigt die Verwendung des `auto` Arguments anstelle eines Integers in der `repeat()` Funktion.

Mit `repeat(auto, <gap-rule>)` setzen wir alle Zeilen- und Spaltenregeln auf `1px dotted` (wobei die Farbe standardmäßig auf die aktuelle Farbe gesetzt wird), außer den ersten und letzten Regeln, die wir auf `3px solid red` setzen.

```css live-sample___auto
ul {
  rule:
    3px red solid,
    repeat(auto, 1px dotted),
    3px red solid;
}
```

{{EmbedLiveSample("auto", "", "600")}}

```css hidden live-sample___basic live-sample___repeat live-sample___func live-sample___auto
@layer no-support {
  @supports not (rule: thin, thick) {
    body::before {
      content: "Your browser doesn't support the rule property";
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
- {{cssxref("rule-style")}}
- {{cssxref("column-rule")}} Kurzform
- {{cssxref("row-rule")}} Kurzform
- [CSS-Gaps](/de/docs/Web/CSS/Guides/Gaps) Modul
