---
title: "`rule` CSS property"
short-title: rule
slug: Web/CSS/Reference/Properties/rule
l10n:
  sourceCommit: 714b29574d287b6501ca3ebffb5f0f5ace0c6368
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`rule`** legt Breite, Stil und Farbe der Linien fest, die zwischen Zeilen und Spalten in mehrzeiligen Grid-, Flex- und mehrspaltigen Layouts gezeichnet werden. Dabei erhalten die Linien zwischen Spalten und Zeilen dieselben Werte.

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

## Bestandteile

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

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

Die Eigenschaft `rule` akzeptiert eine durch Kommas getrennte Liste von Werten, darunter:

- `<gap-rule>`
  - : Wird durch einen, zwei oder drei der unten aufgeführten Werte in beliebiger Reihenfolge angegeben.
    - `<'line-width'>`
      - : Ein {{cssxref("&lt;line-width&gt;")}}: eine positive {{cssxref("&lt;length&gt;")}} oder eines der drei Schlüsselwörter `thin`, `medium` oder `thick`. Der Standardwert ist `medium`. Siehe {{cssxref("rule-width")}}.
    - `<'line-style'>`
      - : Ein {{cssxref("&lt;line-style&gt;")}}: einer der Werte `none`, `hidden`, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset` oder `outset`. Der Standardwert ist `none`. Siehe {{cssxref("rule-style")}}.
    - `<'color'>`
      - : Ein {{cssxref("&lt;color&gt;")}}-Wert, der die Farbe der Linie angibt. Der Standardwert ist `currentcolor`. Siehe {{cssxref("rule-color")}}.

- `<gap-repeat-rule>`
  - : Eine {{cssxref("repeat()")}}-Funktion mit einem {{cssxref("&lt;integer&gt;")}} von `1` oder mehr als erstem Argument und einem oder mehreren `<gap-rule>`-Werten als weiteren Argumenten. Der `<integer>` gibt an, wie oft die Liste der `<gap-rule>`-Werte wiederholt werden soll.

- `<gap-auto-repeat-rule>`
  - : Eine {{cssxref("repeat()")}}-Funktion mit `auto` als erstem Argument und einem oder mehreren `<gap-rule>`-Werten als weiteren Argumenten. Die angegebene Liste von `<gap-rule>`-Werten wird so oft wiederholt, wie nötig ist, um Werte für alle Linien bereitzustellen, die nicht ausdrücklich durch andere Bestandteile des Eigenschaftswerts festgelegt sind.

## Beschreibung

Die Eigenschaft `rule` definiert den Linienstil für alle Linien, die in den Abständen zwischen Zeilen und Spalten von [mehrspaltigen](/de/docs/Web/CSS/Guides/Multicol_layout), [Flex-](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Grid-Containern](/de/docs/Web/CSS/Guides/Grid_layout) mit mehr als einer Zeile oder Spalte gezeichnet werden.

`rule` ist eine Kurzschreibweise für {{cssxref("rule-color")}}, {{cssxref("rule-style")}} und {{cssxref("rule-width")}}. Sie setzt die Kurzschreibweisen {{cssxref("row-rule")}} und {{cssxref("column-rule")}} auf denselben Wert.

Der Eigenschaftswert ist eine durch Kommas getrennte Liste von Bestandteilen, die `<gap-rule>`, `<gap-repeat-rule>` und `<gap-auto-repeat-rule>` enthalten kann. Jeder `<gap-rule>` definiert Breite, Farbe und Stil einer oder mehrerer Linien.

Besteht der Eigenschaftswert nur aus einem `<gap-rule>`, erhalten alle Linien zwischen Zeilen und Spalten diesen Stil, diese Farbe und diese Breite. Bei der folgenden Deklaration erhalten alle diese Linien `dashed red 3px`:

```css
rule: dashed red 3px;
```

Werden mehrere `<gap-rule>`-Werte angegeben, werden sie in der angegebenen Reihenfolge auf die Linien angewendet. Gibt es zwischen Zeilen und Spalten mehr Abstände als `<gap-rule>`-Werte, wird die Werteliste wiederholt, bis jedem Abstand eine Linie zugewiesen ist. Bei der folgenden Deklaration erhält beispielsweise jede ungerade Linie `dashed red 3px` und jede gerade Linie `dotted blue 5px` – in beiden Richtungen.

```css
rule:
  dashed red 3px,
  dotted blue 5px;
```

### Wiederholte Linienstile

Mit der Funktion `repeat()` und einer Ganzzahl von `1` oder mehr als erstem Argument lässt sich eine gültige Liste von CSS-[`<gap-rule>`](#gap-rule)-Werten, die als weitere Argumente übergeben werden, die angegebene Anzahl von Malen wiederholen. So kann derselbe `<gap-rule>` mehrfach verwendet werden, ohne denselben CSS-Code mehrfach anzugeben. Die folgenden Deklarationen sind gleichwertig:

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

Dadurch entsteht eine Liste mit sieben Linien-Stilen. Übersteigt die Anzahl der Stile in der Stileliste des `rule`-Werts die Anzahl der Abstände zwischen Zeilen und Spalten, werden die überzähligen Stilwerte ignoriert. Hat der Container, auf den dies angewendet wird, drei Zeilen und drei Spalten, erhält die Linie im ersten Abstand `solid red 5px` und die im zweiten `outset blue 10px` – in beiden Richtungen.

Gibt es mehr Abstände als Stile, wird die Stileliste wiederholt. Hat der Container 8, 15, 22 oder 29 Zeilen oder Spalten, wird diese Stilfolge in der jeweiligen Richtung ein-, zwei-, drei- beziehungsweise viermal wiederholt. Die letzte Linie erhält dabei `inset green 1px`.

### Automatisch wiederholte Linienstile

Die Funktion `repeat()` akzeptiert als erstes Argument statt einer positiven Ganzzahl auch `auto`. Mit `auto` als erstem Argument werden die als weitere Argumente übergebenen [`<gap-rule>`](#gap-rule)-Werte so oft wiederholt, wie nötig ist, um Werte für alle Linien zwischen Zeilen und Spalten bereitzustellen, die nicht ausdrücklich durch andere Bestandteile des Eigenschaftswerts festgelegt sind.

```css
rule:
  solid red 5px,
  repeat(auto, dotted green 1px, dashed blue 1px),
  solid red 5px;
```

In diesem Fall erhalten die jeweils erste und letzte Linie zwischen Zeilen und Spalten `solid red 5px`; alle anderen wechseln zwischen `dotted green 1px` und `dashed blue 1px`. Dabei spielt es keine Rolle, ob der Container 3, 6, 11, 16 oder 21 Zeilen und Spalten hat: In den jeweils ersten und letzten Abständen wird immer eine dicke, durchgezogene rote Linie gezeichnet (sofern {{cssxref("rule-visibility-items")}} nicht dazu führt, dass keine Linie gezeichnet wird). Alle anderen Linien zwischen Zeilen und Spalten sind dünn und entweder grün gepunktet oder blau gestrichelt. Gibt es nur 2 oder 3 Zeilen und Spalten, werden keine gepunkteten oder gestrichelten Linien gezeichnet.

Das Schlüsselwort `auto` innerhalb der Funktion `repeat()` erzeugt eine automatische Wiederholung, die Werte für Linien zwischen Zeilen und Spalten bereitstellt, denen andernfalls kein Wert aus anderen Teilen der Liste zugewiesen würde. Dadurch wird verhindert, dass die Liste zyklisch wiederholt wird. Ein `rule`-Wert darf höchstens ein `repeat(auto, <gap-rule>)` enthalten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel definieren wir eine einzelne Vorgabe für die Linien in den Abständen zwischen Grid-Elementen.

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

Wir definieren die ungeordnete Liste als Container mit zehn Spalten. Mit der Eigenschaft {{cssxref("grid-template-columns")}} erzeugen wir Spalten und Zeilen und setzen {{cssxref("list-style-type")}} auf `none`, um die Aufzählungszeichen zu entfernen. Außerdem legen wir einen {{cssxref("gap")}} von `5px` fest, damit zwischen Spalten und Zeilen genügend Platz für die Linie `dashed 3px magenta` bleibt.

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

{{EmbedLiveSample("Basic", "", "440")}}

### Mehrere `<gap-rule>`-Werte und Standardwerte

Dieses Beispiel zeigt die Verwendung mehrerer durch Kommas getrennter Werte. Außerdem zeigt es die Standardwerte `medium`, `currentcolor` und `none` für Breite, Farbe beziehungsweise Stil.

Wir verwenden dasselbe HTML und CSS wie im vorherigen Beispiel und geben für `rule` vier durch Kommas getrennte `<gap-rule>`-Werte an. Beim ersten `<gap-rule>` lassen wir `<line-width>` weg, beim zweiten `<color>` und beim dritten `<line-style>`. Der vierte enthält alle drei Bestandteile:

```css live-sample___repeat
ul {
  rule:
    red dashed,
    1px dotted,
    5px blue,
    10px magenta solid;
}
```

{{EmbedLiveSample("Repeat", "", "440")}}

Die rote Linie ist `3px` breit, die gepunktete Linie hat dieselbe Farbe wie der Text, und eine `5px` breite blaue Linie ist nicht zu sehen. Der Stil des dritten `<gap-rule>` hat nämlich den Standardwert `none`, sodass keine Linie gezeichnet wird. Da es weniger Linienstile als Abstände gibt, wird die Liste wiederholt, bis allen Linien ein Stil zugewiesen ist.

### Die Funktion `repeat()` verwenden

Dieses Beispiel zeigt die Verwendung der Funktion `repeat()` innerhalb des Eigenschaftswerts von `rule`. Wir verwenden dasselbe HTML und CSS wie in den vorherigen Beispielen und überschreiben den `rule`-Wert mit einer durch Kommas getrennten Liste aus drei Bestandteilen: zwei `<gap-rule>`-Werten und einem `<gap-repeat-rule>`, der eine Liste mit zwei `<gap-rule>`-Werten dreimal wiederholt.

```css live-sample___func live-sample___auto
ul {
  rule:
    3px red dashed,
    repeat(3, dotted green 1px, dashed blue 1px),
    3px red dashed;
}
```

{{EmbedLiveSample("func", "", "440")}}

Das Grid hat zehn Spalten und acht Zeilen, also neun Abstände zwischen Spalten und sieben zwischen Zeilen. Die Funktion `repeat()` wiederholt zwei Stilwerte dreimal und erzeugt so eine Liste mit acht Stilwerten. Da es weniger Abstände zwischen Zeilen als Werte gibt, wird der letzte Wert in Zeilenrichtung nicht verwendet. Da es mehr Abstände zwischen Spalten als Werte gibt, wird die Liste in Spaltenrichtung wiederholt.

### `auto` innerhalb von `repeat()` verwenden

Dieses Beispiel zeigt, wie Sie in der Funktion `repeat()` das Argument `auto` anstelle einer Ganzzahl verwenden.

Mit `repeat(auto, <gap-rule>)` setzen wir alle Linien zwischen Zeilen und Spalten auf `1px dotted` (wobei die Farbe standardmäßig der aktuellen Farbe entspricht). Ausgenommen sind die jeweils erste und letzte Linie, die wir auf `3px solid red` setzen.

```css live-sample___auto
ul {
  rule:
    3px red solid,
    repeat(auto, 1px dotted),
    3px red solid;
}
```

{{EmbedLiveSample("auto", "", "440")}}

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
- Kurzschreibweise {{cssxref("column-rule")}}
- Kurzschreibweise {{cssxref("row-rule")}}
- Modul [CSS gaps](/de/docs/Web/CSS/Guides/Gaps)
