---
title: "`row-rule-color` CSS property"
short-title: row-rule-color
slug: Web/CSS/Reference/Properties/row-rule-color
l10n:
  sourceCommit: b6de98eb9cd52ce7e37f22a340352f0af4c9d597
---

{{SeeCompatTable}}

Die **`row-rule-color`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Farben der Linien, die zwischen Zeilen in mehrzeiligen Grid-, Flex- und Multi-Spalten-Layouts gezeichnet werden.

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

Die `row-rule-color` Eigenschaft akzeptiert eine durch Kommas getrennte Liste von Werten, einschließlich:

- `<line-color>`
  - : Ein {{cssxref("&lt;color&gt;")}}, das die Farbe der Linie darstellt.

- `<repeat-line-color>`
  - : Eine {{cssxref("repeat()")}} Funktion, mit einem {{cssxref("&lt;integer&gt;")}} von `1` oder mehr als erstem Argument und einem oder mehreren `<color>` Werten als nachfolgende Argumente. Das `<integer>` gibt an, wie oft die `<color>` Werte wiederholt werden sollen.

- `<auto-repeat-line-color>`
  - : Eine {{cssxref("repeat()")}} Funktion, mit `auto` als erstem Argument und einem oder mehreren `<color>` Werten als nachfolgende Argumente. Die angegebenen `<color>` Werte werden so oft wiederholt, wie nötig ist, um Werte für alle Zeilenregeln bereitzustellen, die nicht explizit durch andere Komponenten des Eigenschaftswerts angegeben sind.

## Beschreibung

Die `row-rule-color` Eigenschaft definiert die Farben aller Linien, die in den Lücken zwischen Zeilen in [mehrspaltigen](/de/docs/Web/CSS/Guides/Multicol_layout), [flexiblen](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [grid](/de/docs/Web/CSS/Guides/Grid_layout) Containern mit mehr als einer Zeile gezeichnet werden.

Der Wert ist eine durch Kommas getrennte Liste von Komponenten, die `<line-color>`, `<repeated-line-color>` und `<auto-repeat-line-color>` Typen enthalten kann.

Die `row-rule-color` Eigenschaft, zusammen mit den Eigenschaften {{cssxref("row-rule-width")}} und {{cssxref("row-rule-style")}}, kann mithilfe des {{cssxref("row-rule")}} Shorthand festgelegt werden. Die `row-rule-color` Eigenschaft kann zusammen mit der {{cssxref("column-rule-color")}} Eigenschaft auch mit dem {{cssxref("rule-color")}} Shorthand festgelegt werden.

Ein `<line-color>` kann als jeder gültige CSS {{cssxref("&lt;color&gt;")}} Wert deklariert werden. Wenn der Eigenschaftswert nur eine `<color>` enthält, werden alle Zeilen diese Farbe haben. Wenn wir folgendes deklarieren, werden alle Linien blau sein:

```css
row-rule-color: blue;
```

Wenn mehr als eine `<line-color>` deklariert wird, werden sie in der Reihenfolge, in der sie angegeben wurden, auf die Zeilenregeln angewendet. Wenn es mehr Zeilenregeln als `<line-color>` Werte gibt, wird die Liste der Farben wiederholt, bis jede Zeilenregel eine Farbe hat. Wenn wir folgendes deklarieren, wird zum Beispiel jede ungerade Zeilenregel blau und jede gerade gelb sein.

```css
row-rule-color: blue, yellow;
```

### Wiederholte Linienfarben

Die `repeat()` Funktion, mit einer Ganzzahl von `1` oder mehr als erstem Argument, kann verwendet werden, um eine gültige Liste von CSS {{cssxref("&lt;color&gt;")}} Werten, die als nachfolgende Argumente übergeben werden, die angegebene Anzahl von Malen zu wiederholen. Dies ermöglicht es, dieselbe Farbe eine festgelegte Anzahl von Malen zu wiederholen, ohne dieselbe `<line-color>` mehrfach zu schreiben. Die folgenden Deklarationen sind gleichwertig:

```css
row-rule-color: blue, yellow, red, yellow, red;
row-rule-color: blue, repeat(2, yellow, red);
```

Sie können jeden gültigen Farbwert aus jedem Farbraum verwenden, einschließlich CSS-Farbfunktionen, benutzerdefinierte Eigenschaften usw. Die Verwendung von `repeat()` kann Werte einfacher zu schreiben machen, insbesondere wenn Ihre Farbwerte komplexer werden. Es ermöglicht, ein wiederkehrendes Muster mit einer einzigen Funktion zu schreiben, unabhängig von der Anzahl der Zeilen.

Wenn wir `--base: yellow` und `--mixin: blue` setzen, wird das folgende ähnliche Ergebnisse liefern wie die vorherige Deklaration:

```css
row-rule-color:
  color-mix(in lch decreasing hue, var(--base) 0%, var(--mixin)),
  repeat(
    2,
    color-mix(in lch decreasing hue, var(--base) 100%, var(--mixin)),
    color-mix(in lch decreasing hue, var(--base) 58%, var(--mixin))
  );
```

Dies erstellt eine Liste von fünf Farben. Wenn die Anzahl der Farben in der `row-rule-color` Farbliste die Anzahl der Lücken zwischen den Zeilen übersteigt, werden die überzähligen Farbwerte ignoriert. Wenn der Container drei Zeilen hat, wird die Regel in der ersten Spalte blau und die zweite gelb sein.

Wenn es mehr Spalten als Farben gibt, wird die Liste der Farben wiederholt, bis alle Zeilenregeln eine Farbe erhalten. Wenn der Container 6, 11, 16 oder 21 Zeilen hat, wird diese Sequenz von Farben ein-, zwei-, drei- oder viermal wiederholt, wobei die letzte rot ist.

### Automatisches Wiederholen von Linienfarben

Die `repeat()` Funktion akzeptiert auch `auto` als erstes Argument anstelle einer positiven Ganzzahl. Mit `auto` als erstem Argument werden die `<color>` Werte, die als nachfolgende Argumente übergeben werden, so oft wie nötig wiederholt, um Werte für alle Zeilenregeln bereitzustellen, die nicht explizit durch andere Komponenten des Eigenschaftswerts, falls vorhanden, angegeben werden.

```css
row-rule-color: blue, repeat(auto, yellow), red;
```

In diesem Fall wird die erste Zeilenregel blau, die letzte rot und alle anderen gelb sein. Es spielt keine Rolle, ob der Container 3, 6, 11, 16 oder 21 Zeilen hat; die erste wird immer blau sein und, solange es mindestens zwei Zeilenregeln gibt, wird die letzte immer rot sein. Alle anderen Regeln werden gelb sein, was bedeutet, dass, wenn es nur 2 oder 3 Zeilen gibt, keine gelben Linien vorhanden sein werden.

Das `auto` Schlüsselwort innerhalb der `repeat()` Funktion erstellt einen automatischen Wiederholer, der Werte für die Farben der Zeilenregel-Linien auffüllt, die sonst keine Werte aus anderen Teilen der Liste erhalten, und verhindert, dass die Liste zyklisch durchlaufen wird. Ein `row-rule-color` Wert kann höchstens ein `repeat(auto, <color>)` enthalten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel definieren wir eine einzelne Farbe für die Linien, die zwischen Flex-Elementen gezogen werden.

#### HTML

Wir fügen eine Liste dynamischer Sport-Duos ein:

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

Wir definieren die Liste als Flex-Container, erstellen Zeilen, indem wir {{cssxref("flex-direction")}} mit dem {{cssxref("flex-flow")}} Shorthand auf `column` setzen. Wir fügen eine {{cssxref("gap")}} von `5px` hinzu, um genügend Platz zwischen den Zeilen zu schaffen, um unsere `3px` gestrichelte Regel einzufügen:

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

### Wiederholende Werte

Dieses Beispiel demonstriert, wie, wenn es weniger Werte in der Liste der Farben als Lücken zwischen den Zeilen gibt, die Werte wiederholt werden.

Mit demselben HTML und CSS wie im vorherigen Beispiel fügen wir drei durch Kommata getrennte Farben als `row-rule-color` Wert hinzu:

```css live-sample___repeat
ul {
  row-rule-color: blue, yellow, red;
}
```

{{EmbedLiveSample("Repeat", "", "180")}}

### Verwendung der `repeat()` Funktion

Dieses Beispiel demonstriert die Verwendung der `repeat()` Funktion innerhalb des `row-rule-color` Eigenschaftswerts und wie diese Funktion helfen kann zu verhindern, dass komplexe Werte unhandlich werden.

Wir verwenden dasselbe HTML und CSS wie in den vorherigen Beispielen. Um zu demonstrieren, wie Werte kompliziert werden können und welche Nützlichkeit die `repeat()` Funktion bietet, deklarieren wir zwei benutzerdefinierte Eigenschaften, die wir in drei {{cssxref("color-mix()")}} Farbfunktionsdeklarationen verwenden, um die gleichen blauen, roten und gelben Farben wie im vorherigen Beispiel zu erstellen. Die zweite Deklaration befindet sich innerhalb einer `repeat()` Funktion, die auf dreimaligen Wiederholung gesetzt ist.

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

{{EmbedLiveSample("func", "", "180")}}

Der Flexcontainer hat sechs Zeilen, also fünf Lücken. Die `repeat()` Funktion wiederholt unsere zweite Farbe dreimal und erstellt eine Farbliste mit fünf Farben. Da es genauso viele Zeilenabstände wie Gesamtfarben gibt, werden die Farben nicht wiederholt.

### Verwendung von `auto` innerhalb von `repeat()`

Dieses Beispiel demonstriert die Verwendung von `auto`, anstelle einer Ganzzahl, innerhalb der `repeat()` Funktion.

Mit `repeat(auto, <color>)` setzen wir alle Linien auf fast transparentes Schwarz (`#00000033`), außer der ersten und letzten, die wir auf ein festes `black` setzen.

```css live-sample___auto
ul {
  row-rule-color: black, repeat(auto, #00000033), black;
}
```

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
- {{cssxref("row-rule")}} Shorthand
- {{cssxref("rule-color")}} Shorthand
- {{cssxref("rule")}} Shorthand
- [CSS-Abstände](/de/docs/Web/CSS/Guides/Gaps) Modul
