---
title: "`row-rule-color` CSS property"
short-title: row-rule-color
slug: Web/CSS/Reference/Properties/row-rule-color
l10n:
  sourceCommit: c2b19ba089e2aa91491254bb76b9cbfcc27d7826
---

Die **`row-rule-color`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Farben der Linien, die zwischen den Zeilen in Layouts mit mehreren Zeilen von Grid, Flex und Multi-Col gezogen werden.

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
  - : Ein {{cssxref("&lt;color&gt;")}}, das die Farbe der Linie darstellt.

- `<repeat-line-color>`
  - : Eine {{cssxref("repeat()")}} Funktion, mit einem {{cssxref("&lt;integer&gt;")}} von `1` oder mehr als erstem Argument und einem oder mehreren `<color>` Werten als nachfolgende Argumente. Der `<integer>` gibt an, wie oft die `<color>` Werte wiederholt werden sollen.

- `<auto-repeat-line-color>`
  - : Eine {{cssxref("repeat()")}} Funktion, mit `auto` als erstem Argument und einem oder mehreren `<color>` Werten als nachfolgende Argumente. Die angegebenen `<color>` Werte werden so oft wiederholt, wie nötig, um Werte für jede Zeilenregel zu füllen, die nicht explizit durch andere Komponenten des Eigenschaftswerts festgelegt sind.

## Beschreibung

Die Eigenschaft `row-rule-color` definiert die Farben aller Linien, die in den Lücken zwischen den Zeilen in [Multi-Column](/de/docs/Web/CSS/Guides/Multicol_layout), [Flex](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Grid](/de/docs/Web/CSS/Guides/Grid_layout) Containern mit mehr als einer Zeile gezeichnet werden.

Der Wert ist eine durch Kommas getrennte Liste von Komponenten, die `<line-color>`, `<repeated-line-color>` und `<auto-repeat-line-color>` Typen enthalten können.

Die `row-rule-color`, zusammen mit den Eigenschaften {{cssxref("row-rule-width")}} und {{cssxref("row-rule-style")}}, kann mit der {{cssxref("row-rule")}} Kurzform festgelegt werden. Die `row-rule-color`, zusammen mit der Eigenschaft {{cssxref("column-rule-color")}}, kann auch mit der {{cssxref("rule-color")}} Kurzform festgelegt werden.

Ein `<line-color>` kann als jeder gültige CSS {{cssxref("&lt;color&gt;")}} Wert deklariert werden. Wenn der Eigenschaftswert nur aus einem `<color>` besteht, werden alle Linien in dieser Farbe sein. Wenn wir Folgendes deklarieren, werden alle Linien blau sein:

```css
row-rule-color: blue;
```

Wenn mehr als ein `<line-color>` deklariert ist, werden sie den Zeilenregeln in der angegebenen Reihenfolge zugewiesen. Wenn es mehr Zeilenregeln als `<line-color>` Werte gibt, wird die Liste der Linienfarben wiederholt, bis jede Zeilenregel eine Farbe hat. Wenn wir zum Beispiel Folgendes deklarieren, wird jede ungerade Regel blau und jede gerade Regel gelb sein.

```css
row-rule-color: blue, yellow;
```

### Wiederholte Linienfarben

Die `repeat()` Funktion, mit einer Ganzzahl von `1` oder größer als erstem Argument, kann verwendet werden, um eine gültige Liste von CSS {{cssxref("&lt;color&gt;")}} Werten, die als nachfolgende Argumente übergeben werden, die angegebene Anzahl von Malen zu wiederholen. Dies ermöglicht es, dieselbe Farbe eine bestimmte Anzahl von Malen zu wiederholen, ohne dass dasselbe `<line-color>` mehrmals wiederholt wird. Die folgenden Deklarationen sind gleichwertig:

```css
row-rule-color: blue, yellow, red, yellow, red;
row-rule-color: blue, repeat(2, yellow, red);
```

Sie können jeden gültigen Farbwert aus jedem Farbraum verwenden, einschließlich CSS-Farbfunktionen, benutzerdefinierte Eigenschaften usw. Die Verwendung von `repeat()` kann Werte leichter lesbar machen, insbesondere wenn Ihre Farbwerte komplexer werden. Es ermöglicht, ein wiederkehrendes Muster mit einer einzigen Funktion zu schreiben, unabhängig von der Anzahl der Zeilen.

Wenn wir `--base: yellow` und `--mixin: blue` setzen, wird das Folgende ähnliche Ergebnisse wie die vorherige Deklaration liefern:

```css
row-rule-color:
  color-mix(in lch decreasing hue, var(--base) 0%, var(--mixin)),
  repeat(
    2,
    color-mix(in lch decreasing hue, var(--base) 100%, var(--mixin)),
    color-mix(in lch decreasing hue, var(--base) 58%, var(--mixin))
  );
```

Dies erstellt eine Liste von fünf Farben. Wenn die Anzahl der Farben in der Farbliste des `row-rule-color` Wertes die Anzahl der Lücken zwischen den Zeilen übersteigt, werden die überzähligen Farbwerte ignoriert. Wenn der Container drei Zeilen hat, wird die Regel in der ersten Lücke blau und die zweite gelb sein.

Wenn es mehr Lücken als Farben gibt, wird die Liste der Farben wiederholt, bis alle Zeilenregeln eine Farbe erhalten haben. Wenn der Container 6, 11, 16 oder 21 Zeilen hat, wird diese Farbfolge ein-, zwei-, drei- oder viermal entsprechend wiederholt, wobei die letzte rot ist.

### Auto-wiederholende Linienfarben

Die `repeat()` Funktion akzeptiert auch `auto` als erstes Argument anstelle einer positiven Ganzzahl. Mit `auto` als erstem Argument werden die in den nachfolgenden Argumenten übergebenen `<color>` Werte so oft wiederholt, wie nötig, um Werte für jede Zeilenregel zu füllen, die nicht durch andere Komponenten des Eigenschaftswerts explizit festgelegt sind, falls vorhanden.

```css
row-rule-color: blue, repeat(auto, yellow), red;
```

In diesem Fall wird die erste Zeilenregel blau, die letzte rot und alle anderen gelb sein. Es spielt keine Rolle, ob der Container 3, 6, 11, 16 oder 21 Zeilen hat; die erste wird immer blau sein und, solange es mindestens zwei Zeilenregeln gibt, wird die letzte immer rot sein. Alle anderen Regeln werden gelb sein, was bedeutet, dass, wenn es nur 2 oder 3 Zeilen gibt, es keine gelben Linien geben wird.

Das `auto` Schlüsselwort innerhalb der `repeat()` Funktion erstellt einen Auto-Wiederholer, der Werte für die Zeilenregellinienfarben füllt, die sonst keine Werte aus anderen Teilen der Liste erhalten würden und verhindert, dass die Liste erneut durchlaufen wird. Ein `row-rule-color` Wert kann höchstens ein `repeat(auto, <color>)` enthalten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel definieren wir eine einzelne Farbe für die Linien, die zwischen Flex-Items gezogen werden.

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

Wir definieren die Liste als Flex-Container und erstellen Zeilen, indem wir {{cssxref("flex-direction")}} mit der {{cssxref("flex-flow")}} Kurzform auf `column` setzen. Wir fügen eine {{cssxref("gap")}} von `5px` ein, um genug Platz zwischen den Zeilen für unsere `3px` gestrichelte Linie zu haben:

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

### Wiederholte Werte

Dieses Beispiel zeigt, wie die Werte in der Farbliste wiederholt werden, wenn weniger Werte in der Farbliste als Lücken zwischen den Zeilen vorhanden sind.

Mit demselben HTML und CSS wie im vorherigen Beispiel fügen wir drei durch Kommas getrennte Farben als `row-rule-color` Wert hinzu:

```css live-sample___repeat
ul {
  row-rule-color: blue, yellow, red;
}
```

{{EmbedLiveSample("Repeat", "", "180")}}

### Verwendung der `repeat()` Funktion

Dieses Beispiel zeigt die Verwendung der `repeat()` Funktion innerhalb des `row-rule-color` Eigenschaftswertes und wie diese Funktion helfen kann, zu verhindern, dass komplexe Werte unhandlich werden.

Wir verwenden dasselbe HTML und CSS wie in den vorherigen Beispielen. Um zu zeigen, wie Werte kompliziert werden können und den Nutzen der `repeat()` Funktion, deklarieren wir zwei benutzerdefinierte Eigenschaften, die wir in drei {{cssxref("color-mix()")}} Farbfunktionserklärungen verwenden, um dieselben blauen, roten und gelben Farben wie im vorherigen Beispiel zu erstellen. Die zweite Deklaration erfolgt innerhalb einer `repeat()` Funktion, die so eingestellt ist, dass sie dreimal wiederholt wird.

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

Der Flex-Container hat sechs Zeilen, also fünf Lücken. Die `repeat()` Funktion wiederholt unsere zweite Farbe dreimal und erstellt eine Farbliste mit fünf Farben. Da es genauso viele Zeilenlücken wie Gesamtfarben gibt, werden die Farben nicht wiederholt.

### Verwendung von `auto` innerhalb `repeat()`

Dieses Beispiel zeigt die Verwendung von `auto`, anstelle einer Ganzzahl, innerhalb der `repeat()` Funktion.

Mit `repeat(auto, <color>)` setzen wir alle Linien auf fast transparentes Schwarz (`#0003`), außer die erste und letzte, die wir auf ein solides `black` setzen.

```css live-sample___auto
ul {
  row-rule-color: black, repeat(auto, #0003), black;
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
- {{cssxref("row-rule")}} Kurzform
- {{cssxref("rule-color")}} Kurzform
- {{cssxref("rule")}} Kurzform
- [CSS Lücken](/de/docs/Web/CSS/Guides/Gaps) Modul
