---
title: "`rule` CSS property"
short-title: rule
slug: Web/CSS/Reference/Properties/rule
l10n:
  sourceCommit: 5fd3b03e9ad1ee4e8bc64d4f6888570690a7fbc8
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`rule`** legt Breite, Stil und Farbe der Linien fest, die in mehrzeiligen Grid-, Flex- und mehrspaltigen Layouts zwischen Zeilen und Spalten gezeichnet werden. Dabei erhalten die Zeilen- und Spaltenlinien dieselben Werte.

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

## Zugehörige Eigenschaften

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
  - : Eine {{cssxref("repeat()")}}-Funktion mit einem {{cssxref("&lt;integer&gt;")}} von `1` oder größer als erstem Argument und einem oder mehreren `<gap-rule>`-Werten als weiteren Argumenten. Der `<integer>` gibt an, wie oft die Liste der `<gap-rule>`-Werte wiederholt werden soll.

- `<gap-auto-repeat-rule>`
  - : Eine {{cssxref("repeat()")}}-Funktion mit `auto` als erstem Argument und einem oder mehreren `<gap-rule>`-Werten als weiteren Argumenten. Die angegebene Liste der `<gap-rule>`-Werte wird so oft wiederholt, wie nötig ist, um Werte für alle Linien bereitzustellen, die nicht ausdrücklich durch andere Bestandteile des Eigenschaftswerts festgelegt sind.

## Beschreibung

Die Eigenschaft `rule` definiert den Stil aller Linien, die in den Zwischenräumen zwischen Zeilen und Spalten von [mehrspaltigen](/de/docs/Web/CSS/Guides/Multicol_layout), [Flex-](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Grid-Containern](/de/docs/Web/CSS/Guides/Grid_layout) mit mehr als einer Zeile oder Spalte gezeichnet werden.

`rule` ist eine Kurzschreibweise für {{cssxref("rule-color")}}, {{cssxref("rule-style")}} und {{cssxref("rule-width")}}. Sie setzt die Kurzschreibweisen {{cssxref("row-rule")}} und {{cssxref("column-rule")}} auf denselben Wert.

Der Eigenschaftswert ist eine durch Kommas getrennte Liste von Bestandteilen, die Werte der Typen `<gap-rule>`, `<gap-repeat-rule>` und `<gap-auto-repeat-rule>` enthalten kann. Jeder `<gap-rule>`-Wert definiert Breite, Farbe und Stil einer oder mehrerer Linien.

Besteht der Eigenschaftswert aus nur einem `<gap-rule>`, haben alle Zeilen- und Spaltenlinien diesen Stil, diese Farbe und diese Breite. Bei der folgenden Deklaration erhalten alle Zeilen- und Spaltenlinien den Wert `dashed red 3px`:

```css
rule: dashed red 3px;
```

Wenn mehr als ein `<gap-rule>` deklariert wird, werden die Werte in der angegebenen Reihenfolge auf die Linien angewendet. Gibt es zwischen den Zeilen und Spalten mehr Zwischenräume als `<gap-rule>`-Werte, wird die Werteliste wiederholt, bis jeder Zeilen- und Spaltenlinie ein Wert zugewiesen ist. Bei der folgenden Deklaration erhält beispielsweise jede ungerade Linie den Wert `dashed red 3px` und jede gerade Linie den Wert `dotted blue 5px` – in beiden Richtungen.

```css
rule:
  dashed red 3px,
  dotted blue 5px;
```

### Wiederholte Linienstile

Mit der Funktion `repeat()` und einer Ganzzahl von `1` oder größer als erstem Argument können Sie eine gültige Liste von CSS-Werten des Typs [`<gap-rule>`](#gap-rule), die als weitere Argumente übergeben werden, die angegebene Anzahl von Malen wiederholen. So lässt sich derselbe `<gap-rule>`-Wert mehrfach verwenden, ohne denselben CSS-Code mehrfach schreiben zu müssen. Die folgenden Deklarationen sind gleichwertig:

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

Dadurch entsteht eine Liste mit sieben Linienwerten. Wenn die Stilliste im `rule`-Wert mehr Werte enthält, als es Zwischenräume zwischen Zeilen und Spalten gibt, werden die überschüssigen Werte ignoriert. Hat der Container, auf den dies angewendet wird, drei Zeilen und drei Spalten, erhält die Linie im ersten Zwischenraum den Wert `solid red 5px` und die im zweiten den Wert `outset blue 10px` – in beiden Richtungen.

Gibt es mehr Zwischenräume als Stilwerte, wird die Stilliste wiederholt. Hat der Container 8, 15, 22 oder 29 Zeilen oder Spalten, wird diese Stilfolge in der jeweiligen Richtung ein-, zwei-, drei- beziehungsweise viermal wiederholt. Die letzte Linie erhält dabei den Wert `inset green 1px`.

### Automatisch wiederholte Linienstile

Die Funktion `repeat()` akzeptiert als erstes Argument auch `auto` anstelle einer positiven Ganzzahl. Mit `auto` als erstem Argument werden die als weitere Argumente übergebenen Werte des Typs [`<gap-rule>`](#gap-rule) so oft wiederholt, wie nötig ist, um Werte für alle Zeilen- und Spaltenlinien bereitzustellen, die nicht ausdrücklich durch andere Bestandteile des Eigenschaftswerts festgelegt sind.

```css
rule:
  solid red 5px,
  repeat(auto, dotted green 1px, dashed blue 1px),
  solid red 5px;
```

In diesem Fall erhalten die erste und die letzte Zeilen- und Spaltenlinie den Wert `solid red 5px`. Alle anderen wechseln zwischen `dotted green 1px` und `dashed blue 1px`. Ob der Container 3, 6, 11, 16 oder 21 Zeilen und Spalten hat, spielt keine Rolle: In den ersten und letzten Zwischenräumen wird immer eine dicke, durchgezogene rote Linie gezeichnet (sofern {{cssxref("rule-visibility-items")}} nicht dazu führt, dass keine Linie gezeichnet wird). Alle übrigen Zeilen- und Spaltenlinien sind dünne, grün gepunktete oder blau gestrichelte Linien. Bei nur 2 oder 3 Zeilen und Spalten gibt es keine gepunkteten oder gestrichelten Linien.

Das Schlüsselwort `auto` innerhalb der Funktion `repeat()` erstellt eine automatische Wiederholung, die Werte für Zeilen- und Spaltenlinien bereitstellt, die andernfalls keine Werte aus anderen Teilen der Liste erhalten würden. Dadurch wird verhindert, dass die Liste zyklisch wiederholt wird. Ein `rule`-Wert darf höchstens ein `repeat(auto, <gap-rule>)` enthalten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel definieren wir einen einzigen Wert für die Linien, die in den Zwischenräumen zwischen Grid-Elementen gezeichnet werden.

#### HTML

Wir erstellen eine Liste mit 75 Elementen. Der Kürze halber ist der Großteil des HTML-Codes ausgeblendet.

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

Wir definieren die ungeordnete Liste als Container mit zehn Spalten, erzeugen mit der Eigenschaft {{cssxref("grid-template-columns")}} Spalten und Zeilen und setzen {{cssxref("list-style-type")}} auf `none`, um die Aufzählungszeichen zu entfernen. Mit einem {{cssxref("gap")}} von `5px` schaffen wir zwischen den Spalten und Zeilen genügend Platz für die Linie mit dem Wert `dashed 3px magenta`.

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

Dieses Beispiel zeigt die Verwendung mehrerer durch Kommas getrennter Werte. Es veranschaulicht außerdem die jeweiligen Standardwerte `medium`, `currentcolor` und `none` für Breite, Farbe und Stil.

#### CSS

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

#### Ergebnis

{{EmbedLiveSample("Repeat", "", "440")}}

Die rote Linie ist `3px` breit und die gepunktete Linie hat dieselbe Farbe wie der Text. Eine `5px` breite blaue Linie ist nicht zu sehen, da der Stil des dritten `<gap-rule>` standardmäßig `none` ist und daher keine Linie gezeichnet wird. Da es weniger Linienstile als Zwischenräume gibt, wird die Liste der Werte wiederholt, bis alle Linien einen Stil erhalten haben.

### Verwendung der Funktion `repeat()`

Dieses Beispiel zeigt die Verwendung der Funktion `repeat()` innerhalb des Eigenschaftswerts von `rule`.

#### CSS

Wir verwenden dasselbe HTML und CSS wie in den vorherigen Beispielen und überschreiben den Wert von `rule` mit einer durch Kommas getrennten Liste aus drei Bestandteilen: zwei `<gap-rule>`-Werten und einem `<gap-repeat-rule>`, der eine Liste aus zwei `<gap-rule>`-Werten dreimal wiederholt.

```css live-sample___func live-sample___auto
ul {
  rule:
    3px red dashed,
    repeat(3, dotted green 1px, dashed blue 1px),
    3px red dashed;
}
```

#### Ergebnis

{{EmbedLiveSample("func", "", "440")}}

Das Grid hat zehn Spalten und acht Zeilen, also neun Spaltenzwischenräume und sieben Zeilenzwischenräume. Die Funktion `repeat()` wiederholt zwei Stilwerte dreimal und erzeugt so eine Liste mit acht Stilwerten. Da es weniger Zeilenzwischenräume als Werte gibt, wird der letzte Wert in Zeilenrichtung nicht verwendet. Da es mehr Spaltenzwischenräume als Werte gibt, wird die Liste in Spaltenrichtung wiederholt.

### Verwendung von `auto` innerhalb von `repeat()`

Dieses Beispiel zeigt die Verwendung des Arguments `auto` anstelle einer Ganzzahl in der Funktion `repeat()`.

#### CSS

Mit `repeat(auto, <gap-rule>)` setzen wir alle Zeilen- und Spaltenlinien auf `1px dotted` (wobei als Farbe standardmäßig die aktuelle Textfarbe verwendet wird). Ausgenommen sind die erste und die letzte Linie, die wir auf `3px solid red` setzen.

```css live-sample___auto
ul {
  rule:
    3px red solid,
    repeat(auto, 1px dotted),
    3px red solid;
}
```

#### Ergebnis

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
