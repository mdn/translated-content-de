---
title: "`row-rule-color` CSS property"
short-title: row-rule-color
slug: Web/CSS/Reference/Properties/row-rule-color
l10n:
  sourceCommit: 5fd3b03e9ad1ee4e8bc64d4f6888570690a7fbc8
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`row-rule-color`** legt die Farben der Linien fest, die in mehrzeiligen Grid-, Flex- und mehrspaltigen Layouts zwischen den Zeilen gezeichnet werden.

{{InteractiveExample("CSS Demo: row-rule-color")}}

```css interactive-example-choice
row-rule-color: magenta;
```

```css interactive-example-choice
row-rule-color: magenta, goldenrod;
```

```css interactive-example-choice
row-rule-color: repeat(2, magenta), goldenrod;
```

```css interactive-example-choice
row-rule-color: goldenrod, repeat(auto, magenta), goldenrod;
```

```css interactive-example-choice
row-rule-color: currentColor;
```

```html interactive-example
<section id="default-example">
  <ul id="example-element">
    <li>One fish</li>
    <li>Two fish</li>
    <li>Red fish</li>
    <li>Blue fish</li>
  </ul>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-flow: column;
  row-rule-style: solid;
  row-rule-width: 5px;
  gap: 5px;
  text-align: left;
}
```

## Syntax

```css
/* Single value */
row-rule-color: red;
row-rule-color: rgb(192 56 78);
row-rule-color: transparent;
row-rule-color: hsl(0 100% 50% / 60%);
row-rule-color: var(--primaryColor);

/* Multiple values */
row-rule-color: red, transparent;
row-rule-color: repeat(3, red), repeat(3, transparent);
row-rule-color: repeat(3, red), repeat(3, yellow, blue);
row-rule-color: red, repeat(auto, transparent), red;
row-rule-color: red, repeat(auto, blue, yellow), red;
row-rule-color: repeat(3, red), repeat(auto, transparent), repeat(3, red);

/* Global values */
row-rule-color: inherit;
row-rule-color: initial;
row-rule-color: revert;
row-rule-color: revert-layer;
row-rule-color: unset;
```

### Werte

Die Eigenschaft `row-rule-color` akzeptiert eine durch Kommas getrennte Liste von Werten, darunter:

- `<line-color>`
  - : Ein {{cssxref("&lt;color&gt;")}}-Wert, der die Farbe der Linie angibt.

- `<repeat-line-color>`
  - : Eine {{cssxref("repeat()")}}-Funktion mit einem {{cssxref("&lt;integer&gt;")}}-Wert von mindestens `1` als erstem Argument und einem oder mehreren `<color>`-Werten als weiteren Argumenten. Der `<integer>`-Wert gibt an, wie oft die `<color>`-Werte wiederholt werden.

- `<auto-repeat-line-color>`
  - : Eine {{cssxref("repeat()")}}-Funktion mit `auto` als erstem Argument und einem oder mehreren `<color>`-Werten als weiteren Argumenten. Die angegebenen `<color>`-Werte werden so oft wiederholt, wie nötig ist, um Werte für alle Zeilentrennlinien bereitzustellen, die nicht ausdrücklich durch andere Bestandteile des Eigenschaftswerts festgelegt sind.

## Beschreibung

Die Eigenschaft `row-rule-color` legt die Farben der Linien fest, die in den Abständen zwischen Zeilen von [mehrspaltigen](/de/docs/Web/CSS/Guides/Multicol_layout), [Flex-](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Grid-Containern](/de/docs/Web/CSS/Guides/Grid_layout) mit mehr als einer Zeile gezeichnet werden.

Der Wert ist eine durch Kommas getrennte Liste von Bestandteilen, die Werte der Typen `<line-color>`, `<repeat-line-color>` und `<auto-repeat-line-color>` enthalten kann.

`row-rule-color` kann zusammen mit den Eigenschaften {{cssxref("row-rule-width")}} und {{cssxref("row-rule-style")}} über die Kurzschreibweise {{cssxref("row-rule")}} festgelegt werden. Zusammen mit der Eigenschaft {{cssxref("column-rule-color")}} kann `row-rule-color` auch über die Kurzschreibweise {{cssxref("rule-color")}} festgelegt werden.

Für `<line-color>` kann jeder gültige CSS-Wert vom Typ {{cssxref("&lt;color&gt;")}} angegeben werden. Besteht der Eigenschaftswert nur aus einem einzigen `<color>`-Wert, erhalten alle Trennlinien diese Farbe. Bei der folgenden Deklaration sind beispielsweise alle Linien blau:

```css
row-rule-color: blue;
```

Werden mehrere `<line-color>`-Werte angegeben, werden sie in der angegebenen Reihenfolge auf die Zeilentrennlinien angewendet. Gibt es mehr Zeilentrennlinien als `<line-color>`-Werte, wird die Liste der Linienfarben wiederholt, bis jede Zeilentrennlinie eine Farbe hat. Bei der folgenden Deklaration ist beispielsweise jede ungerade Trennlinie blau und jede gerade gelb:

```css
row-rule-color: blue, yellow;
```

### Wiederholte Linienfarben

Mit der Funktion `repeat()` und einer Ganzzahl von mindestens `1` als erstem Argument lässt sich eine Liste gültiger CSS-Werte vom Typ {{cssxref("&lt;color&gt;")}}, die als weitere Argumente übergeben werden, die angegebene Anzahl von Malen wiederholen. So kann dieselbe Farbe mehrfach verwendet werden, ohne denselben `<line-color>`-Wert mehrmals anzugeben. Die folgenden Deklarationen sind gleichwertig:

```css
row-rule-color: blue, yellow, red, yellow, red;
row-rule-color: blue, repeat(2, yellow, red);
```

Sie können jeden gültigen Farbwert aus jedem Farbraum verwenden, einschließlich CSS-Farbfunktionen und benutzerdefinierter Eigenschaften. `repeat()` kann das Schreiben von Werten erleichtern, insbesondere wenn die Farbwerte komplexer werden. Mit der Funktion lässt sich ein wiederkehrendes Muster unabhängig von der Anzahl der Zeilen in einer einzigen Funktion ausdrücken.

Wenn `--base: yellow` und `--mixin: blue` festgelegt sind, liefert die folgende Deklaration ein ähnliches Ergebnis wie die vorherige:

```css
row-rule-color:
  color-mix(in lch decreasing hue, var(--base) 0%, var(--mixin)),
  repeat(
    2,
    color-mix(in lch decreasing hue, var(--base) 100%, var(--mixin)),
    color-mix(in lch decreasing hue, var(--base) 58%, var(--mixin))
  );
```

Dadurch entsteht eine Liste mit fünf Farben. Enthält die Farbliste des `row-rule-color`-Werts mehr Farben als Abstände zwischen den Zeilen vorhanden sind, werden die überschüssigen Farbwerte ignoriert. Hat der Container drei Zeilen, ist die Trennlinie im ersten Zwischenraum blau und die im zweiten gelb.

Gibt es mehr Zwischenräume als Farben, wird die Farbliste wiederholt, bis alle Zeilentrennlinien eine Farbe erhalten haben. Hat der Container 6, 11, 16 oder 21 Zeilen, wird diese Farbfolge entsprechend ein-, zwei-, drei- oder viermal wiederholt; die letzte Trennlinie ist jeweils rot.

### Automatisch wiederholte Linienfarben

Die Funktion `repeat()` akzeptiert als erstes Argument auch `auto` anstelle einer positiven Ganzzahl. Bei `auto` werden die als weitere Argumente übergebenen `<color>`-Werte so oft wiederholt, wie nötig ist, um Werte für alle Zeilentrennlinien bereitzustellen, die nicht bereits durch andere Bestandteile des Eigenschaftswerts festgelegt sind.

```css
row-rule-color: blue, repeat(auto, yellow), red;
```

In diesem Fall ist die erste Zeilentrennlinie blau, die letzte rot und alle übrigen gelb. Dabei spielt es keine Rolle, ob der Container 3, 6, 11, 16 oder 21 Zeilen hat: Die erste Trennlinie ist immer blau und, sofern es mindestens zwei Zeilentrennlinien gibt, die letzte immer rot. Alle anderen Trennlinien sind gelb. Bei nur 2 oder 3 Zeilen gibt es daher keine gelben Linien.

Das Schlüsselwort `auto` innerhalb der Funktion `repeat()` erzeugt eine automatische Wiederholung, die Farben für diejenigen Zeilentrennlinien bereitstellt, die sonst keine Werte aus anderen Teilen der Liste erhalten würden. Dadurch wird verhindert, dass die gesamte Liste wiederholt wird. Ein `row-rule-color`-Wert darf höchstens ein `repeat(auto, <color>)` enthalten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel legen wir eine einzige Farbe für die Linien zwischen Flex-Elementen fest.

#### HTML

Wir verwenden eine Liste dynamischer Sportduos:

```html live-sample___basic live-sample___repeat live-sample___func live-sample___auto
<ul>
  <li>Simone Biles + Jonathan Owens</li>
  <li>Serena Williams + Venus Williams</li>
  <li>Aaron Judge + Giancarlo Stanton</li>
  <li>LeBron James + Dwyane Wade</li>
  <li>Xavi Hernandez + Andres Iniesta</li>
  <li>Kerri Walsh + Misty May Treanor</li>
</ul>
```

#### CSS

Wir definieren die Liste als Flex-Container und erzeugen Zeilen, indem wir {{cssxref("flex-direction")}} über die Kurzschreibweise {{cssxref("flex-flow")}} auf `column` setzen. Mit einem {{cssxref("gap")}} von `5px` schaffen wir zwischen den Zeilen genügend Platz für die `3px` breite gestrichelte Trennlinie:

```css live-sample___basic live-sample___repeat live-sample___func live-sample___auto
ul {
  display: flex;
  flex-flow: column;
  gap: 5px;
  row-rule-style: dashed;
  row-rule-width: 3px;
  row-rule-color: blue;
}
```

#### Ergebnis

{{EmbedLiveSample("Basic", "", "180")}}

### Werte wiederholen

Dieses Beispiel zeigt, dass die Werte wiederholt werden, wenn die Farbliste weniger Werte enthält, als Zwischenräume zwischen den Zeilen vorhanden sind.

#### CSS

Wir verwenden dasselbe HTML und CSS wie im vorherigen Beispiel und geben für `row-rule-color` drei durch Kommas getrennte Farben an:

```css live-sample___repeat
ul {
  row-rule-color: blue, yellow, red;
}
```

#### Ergebnis

{{EmbedLiveSample("Repeat", "", "180")}}

### Die Funktion `repeat()` verwenden

Dieses Beispiel zeigt, wie die Funktion `repeat()` im Wert der Eigenschaft `row-rule-color` verwendet wird und wie sie verhindert, dass komplexe Werte unübersichtlich werden.

#### CSS

Wir verwenden dasselbe HTML und CSS wie in den vorherigen Beispielen. Um zu zeigen, wie kompliziert Werte werden können und welchen Nutzen die Funktion `repeat()` bietet, deklarieren wir zwei benutzerdefinierte Eigenschaften. Diese verwenden wir in drei Deklarationen der Farbfunktion {{cssxref("color-mix()")}}, um dieselben blauen, roten und gelben Farben wie im vorherigen Beispiel zu erzeugen. Die zweite Deklaration steht innerhalb einer `repeat()`-Funktion und wird dreimal wiederholt.

```css live-sample___func live-sample___auto
ul {
  --base: yellow;
  --mixin: blue;
  row-rule-color:
    color-mix(in lch decreasing hue, var(--base) 0%, var(--mixin)),
    repeat(3, color-mix(in lch decreasing hue, var(--base) 100%, var(--mixin))),
    color-mix(in lch decreasing hue, var(--base) 58%, var(--mixin));
}
```

#### Ergebnis

{{EmbedLiveSample("func", "", "180")}}

Der Flex-Container hat sechs Zeilen und damit fünf Zwischenräume. Die Funktion `repeat()` wiederholt unsere zweite Farbe dreimal, sodass eine Farbliste mit fünf Farben entsteht. Da es genauso viele Zwischenräume zwischen den Zeilen wie Farben gibt, werden die Farben nicht erneut wiederholt.

### `auto` innerhalb von `repeat()` verwenden

Dieses Beispiel zeigt, wie `auto` anstelle einer Ganzzahl innerhalb der Funktion `repeat()` verwendet wird.

#### CSS

Mit `repeat(auto, <color>)` setzen wir alle Linien auf nahezu transparentes Schwarz (`#00000033`). Nur die erste und die letzte Linie setzen wir auf deckendes `black`.

```css live-sample___auto
ul {
  row-rule-color: black, repeat(auto, #00000033), black;
}
```

#### Ergebnis

{{EmbedLiveSample("auto", "", "180")}}

```css hidden live-sample___basic live-sample___repeat live-sample___func live-sample___auto
@layer no-support {
  @supports not (row-rule-color: red, blue) {
    body::before {
      content: "Your browser doesn't support the row-rule-color property";
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

- {{cssxref("row-rule-width")}}
- {{cssxref("row-rule-style")}}
- {{cssxref("column-rule-color")}}
- Kurzschreibweise {{cssxref("row-rule")}}
- Kurzschreibweise {{cssxref("rule-color")}}
- Kurzschreibweise {{cssxref("rule")}}
- [CSS-Abstände definieren](/de/docs/Web/CSS/Guides/Gaps/Defining_gaps)
- Modul [CSS-Abstände](/de/docs/Web/CSS/Guides/Gaps)
