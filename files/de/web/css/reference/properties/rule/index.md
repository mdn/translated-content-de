---
title: "`rule` CSS property"
short-title: rule
slug: Web/CSS/Reference/Properties/rule
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

{{SeeCompatTable}}

Die **`rule`** [CSS](/de/docs/Web/CSS) [Kurzform](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) Eigenschaft legt die Breite, den Stil und die Farbe der Linie fest, die zwischen Zeilen und Spalten in Mehrzeilen-Grid-, Flex- und Mehrspalten-Layouts gezeichnet wird, wobei sowohl die Spalten- als auch die Zeilen-Regeln auf die gleichen Werte gesetzt werden.

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

## Bestanteileigenschaften

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
  - : Angegeben als ein, zwei oder drei der unten aufgeführten Werte, in beliebiger Reihenfolge.
    - `<'line-width'>`
      - : Eine {{cssxref("&lt;line-width&gt;")}}: eine positive {{cssxref("&lt;length&gt;")}} oder eines der drei Schlüsselwörter `thin`, `medium` oder `thick`. Der Standardwert ist `medium`. Siehe {{cssxref("rule-width")}}.
    - `<'line-style'>`
      - : Ein {{cssxref("&lt;line-style&gt;")}}: eines von `none`, `hidden`, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset` oder `outset`. Der Standardwert ist `none`. Siehe {{cssxref("rule-style")}}.
    - `<'color'>`
      - : Ein {{cssxref("&lt;color&gt;")}}-Wert, der die Farbe der Linie darstellt. Der Standardwert ist `currentcolor`. Siehe {{cssxref("rule-color")}}.

- `<gap-repeat-rule>`
  - : Eine {{cssxref("repeat()")}} Funktion, mit einem {{cssxref("&lt;integer&gt;")}} von `1` oder mehr als erstem Argument und einem oder mehreren `<gap-rule>` Werten als nachfolgende Argumente. Der `<integer>` gibt an, wie oft die Liste der `<gap-rule>` Werte wiederholt werden soll.

- `<gap-auto-repeat-rule>`
  - : Eine {{cssxref("repeat()")}} Funktion, mit `auto` als erstem Argument und einem oder mehreren `<gap-rule>` Werten als nachfolgende Argumente. Die angegebene Liste der `<gap-rule>` Werte wird so oft wiederholt, wie nötig, um Werte für Regeln zu füllen, die nicht explizit durch andere Bestandteile des Eigenschaftswerts spezifiziert sind.

## Beschreibung

Die `rule` Eigenschaft definiert den Linienstil von Linien, die in den Lücken zwischen Zeilen und Spalten in [Mehrspalten](/de/docs/Web/CSS/Guides/Multicol_layout), [Flex](/de/docs/Web/CSS/Guides/Flexible_box_layout), und [Grid](/de/docs/Web/CSS/Guides/Grid_layout) Containern mit mehr als einer Zeile oder Spalte gezeichnet werden.

Die `rule` ist eine Kurzform für {{cssxref("rule-color")}}, {{cssxref("rule-style")}}, und {{cssxref("rule-width")}}. Sie setzt die {{cssxref("row-rule")}} und {{cssxref("column-rule")}} Kurzform-Eigenschaften auf den gleichen Wert.

Der Eigenschaftswert ist eine durch Kommas getrennte Liste von Komponenten, die `<gap-rule>`, `<gap-repeat-rule>`, und `<gap-auto-repeat-rule>` Typen enthalten kann. Jedes `<gap-rule>` definiert die Breite, Farbe und den Stil von einer oder mehreren Linien.

Wenn der Eigenschaftswert nur aus einem `<gap-rule>` besteht, werden alle Zeilen- und Spaltenregeln diesen Stil, diese Farbe und Größe haben. Wenn wir folgendes deklarieren, werden alle Zeilen- und Spaltenregeln `dashed red 3px` sein:

```css
rule: dashed red 3px;
```

Wenn mehr als ein `<gap-rule>` deklariert wird, werden sie in der angegebenen Reihenfolge auf die Regeln angewendet. Wenn es mehr Rinnen zwischen den Zeilen und Spalten als `<gap-rule>` Werte gibt, wird die Liste der Werte wiederholt, bis jede Zeilen- und Spaltenregel eine Linienlücke hat. Wenn wir folgendes deklarieren, wird zum Beispiel jede ungerade Regel `dashed red 3px` sein und jede gerade Regel `dotted blue 5px`, in beiden Richtungen.

```css
rule:
  dashed red 3px,
  dotted blue 5px;
```

### Wiederholte Linienstile

Die `repeat()` Funktion, mit einem ganzzahligen Wert von `1` oder größer als erstem Argument, kann verwendet werden, um eine gültige Liste von CSS [`<gap-rule>`](#gap-rule) Werten, die als folgende Argumente übergeben werden, die angegebene Anzahl von Malen zu wiederholen. Dadurch kann das gleiche `<gap-rule>` wiederholt werden, ohne dass dieselbe CSS mehrmals wiederholt werden muss. Die folgenden Deklarationen sind gleichwertig:

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

Dies erzeugt eine Liste von sieben Regeln. Wenn die Anzahl der Stile in der Stil-Liste des `rule`-Wertes die Anzahl der Lücken zwischen den Zeilen und Spalten übersteigt, werden die überzähligen Stil-Werte ignoriert. Wenn der Container, auf den dies angewendet wird, drei Zeilen und Spalten hat, wird die Regel in der ersten Rinne `solid red 5px` und die zweite `outset blue 10px`, in beiden Richtungen sein.

Wenn es mehr Rinnen als Stile gibt, wird die Liste der Stile wiederholt. Wenn der Container 8, 15, 22 oder 29 Zeilen oder Spalten hat, wird diese Abfolge von Stilen in dieser Richtung ein, zwei, drei oder viermal wiederholt, wobei die letzte Regel `inset green 1px` ist.

### Auto-wiederholte Linienstile

Die `repeat()` Funktion akzeptiert auch `auto` als das erste Argument anstelle einer positiven Ganzzahl. Mit `auto` als erstem Argument werden die [`<gap-rule>`](#gap-rule) Werte, die als folgende Argumente übergeben werden, so oft wiederholt, wie nötig, um Werte für alle Zeilen- und Spaltenregeln zu füllen, die nicht explizit durch andere Komponenten des Eigenschaftswerts spezifiziert sind.

```css
rule:
  solid red 5px,
  repeat(auto, dotted green 1px, dashed blue 1px),
  solid red 5px;
```

In diesem Fall werden die ersten und letzten Zeilen- und Spaltenregeln `solid red 5px` sein, und alle anderen werden abwechselnd `dotted green 1px` und `dashed blue 1px` sein. Es spielt keine Rolle, ob der Container 3, 6, 11, 16 oder 21 Zeilen und Spalten hat; die ersten und letzten Rinnen werden immer eine dicke, solide rote Linie zwischen ihnen haben (es sei denn {{cssxref("rule-visibility-items")}} führt dazu, dass keine Linie gezeichnet wird), und alle anderen Zeilen- und Spaltenregeln werden dünne, gepunktete grüne oder gestrichelte blaue Linien sein. Wenn es nur 2 oder 3 Zeilen und Spalten gibt, wird es keine gepunkteten oder gestrichelten Linien geben.

Das `auto` Schlüsselwort innerhalb der `repeat()` Funktion erzeugt einen Auto-Repeater, der Werte für Zeilen- und Spaltenregeln füllt, die sonst keine Werte von anderen Teilen der Liste erhalten würden, und verhindert, dass die Liste zyklisch durchlaufen wird. Es kann höchstens nur ein `repeat(auto, <gap-rule>)` in einem `rule` Wert vorhanden sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel definieren wir eine einzelne Regel für die Linien, die in den Rinnen zwischen Grid-Elementen gezeichnet werden.

#### HTML

Wir erstellen eine Liste von 75 Elementen. Ein Großteil des HTMLs wird zur Vereinfachung ausgelassen.

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

Wir definieren die ungeordnete Liste als 10-Spalten-Container, erstellen Spalten und Zeilen mit der Eigenschaft {{cssxref("grid-template-columns")}} und setzen {{cssxref("list-style-type")}} auf `none`, um die Aufzählungszeichen zu entfernen. Wir fügen einen {{cssxref("gap")}} von `5px` hinzu, um ausreichend Platz zwischen den Spalten und Zeilen zu schaffen, um unsere `dashed 3px magenta` Regel aufzunehmen.

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

### Mehrere `<gap-rule>`-Werte und Standardwerte

Dieses Beispiel demonstriert die Verwendung mehrerer, durch Kommas getrennter Werte. Es zeigt auch die Standardwerte für Breite, Farbe und Stil von `medium`, `currentcolor` und `none`, jeweils.

Mit dem gleichen HTML und CSS wie im vorherigen Beispiel fügen wir vier durch Kommas getrennte `<gap-rule>` Werte als den `rule` Wert hinzu, indem wir die `<line-width>` im ersten `<gap-rule>`, die `<color>` im zweiten und den `<line-style>` aus dem dritten weglassen, wobei der vierte alle drei Komponenten enthält:

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

Die rote Linie ist `3px` breit, die gepunktete Linie hat die gleiche Farbe wie der Text, und es gibt keine `5px` breite blaue Linie, da der Stil der dritten `<gap-rule>` standardmäßig `none` ist und daher keine Linie gezeichnet wird. Da es weniger Regelstile als Rinnen gibt, wird die Liste der Regeln wiederholt, bis alle Regel-Linien gestylt sind.

### Verwendung der `repeat()` Funktion

Dieses Beispiel demonstriert die Verwendung der `repeat()` Funktion innerhalb des `rule` Eigenschaftswerts. Wir verwenden das gleiche HTML und CSS wie in den vorherigen Beispielen und überschreiben den `rule` Wert mit einer durch Kommas getrennten Liste von drei Komponenten: zwei `<gap-rule>` Werte und ein `<gap-repeat-rule>`, das eine Liste von zwei `<gap-rule>` Werten setzt, die dreimal wiederholt werden.

```css live-sample___func live-sample___auto
ul {
  rule:
    3px red dashed,
    repeat(3, dotted green 1px, dashed blue 1px),
    3px red dashed;
}
```

{{EmbedLiveSample("func", "", "600")}}

Das Grid hat zehn Spalten und acht Zeilen und daher neun Spaltenrinnen und sieben Zeilenrinnen. Die `repeat()` Funktion wiederholt zwei Stilwerte dreimal und erstellt eine Liste von acht Stilwerten. Da es weniger Zeilenrinnen als Werte gibt, wird der letzte Wert in Zeilenrichtung nicht verwendet. Da es mehr Spaltenrinnen als Werte gibt, wird die Liste in Spaltenrichtung wiederholt.

### Verwendung von `auto` innerhalb von `repeat()`

In diesem Beispiel wird die Verwendung des `auto` Argumentes anstelle einer ganzen Zahl in der `repeat()` Funktion demonstriert.

Mit `repeat(auto, <gap-rule>)` setzen wir alle Zeilen- und Spaltenregeln auf `1px dotted` (wobei die Farbe standardmäßig die aktuelle Farbe ist), außer die ersten und letzten Regeln, die wir auf `3px solid red` setzen.

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
- [CSS Lücken](/de/docs/Web/CSS/Guides/Gaps) Modul
