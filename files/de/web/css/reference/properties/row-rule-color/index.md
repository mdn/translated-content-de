---
title: "`row-rule-color` CSS property"
short-title: row-rule-color
slug: Web/CSS/Reference/Properties/row-rule-color
l10n:
  sourceCommit: 9cf3002bd29376c15d49df6fab2e6a264285abf6
---

{{SeeCompatTable}}

Die **`row-rule-color`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Farben der Linien, die zwischen Reihen in Mehrzeilen-Raster-, Flex- und Mehrspalten-Layouts gezeichnet werden.

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

Die `row-rule-color`-Eigenschaft akzeptiert eine durch Kommas getrennte Liste von Werten, einschließlich:

- `<line-color>`
  - : Ein {{cssxref("&lt;color&gt;")}}, der die Farbe der Linie darstellt.

- `<repeat-line-color>`
  - : Eine {{cssxref("repeat()")}}-Funktion, mit einem {{cssxref("&lt;integer&gt;")}} von `1` oder mehr als erstes Argument und einem oder mehreren `<color>`-Werten als nachfolgende Argumente. Der `<integer>` gibt an, wie oft die `<color>`-Werte wiederholt werden sollen.

- `<auto-repeat-line-color>`
  - : Eine {{cssxref("repeat()")}}-Funktion, mit `auto` als erstes Argument und einem oder mehreren `<color>`-Werten als nachfolgende Argumente. Die angegebenen `<color>`-Werte werden so oft wiederholt, wie es nötig ist, um Werte für alle Zeilenregeln zu füllen, die nicht explizit durch andere Komponenten des Eigenschaftswertes angegeben sind.

## Beschreibung

Die `row-rule-color`-Eigenschaft definiert die Farben der Linien, die in den Lücken zwischen Reihen in [Mehrspalten-](/de/docs/Web/CSS/Guides/Multicol_layout), [Flex-](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Raster-](/de/docs/Web/CSS/Guides/Grid_layout) Containern mit mehr als einer Reihe gezeichnet werden.

Der Wert ist eine durch Kommas getrennte Liste von Komponenten, die `<line-color>`, `<repeated-line-color>` und `<auto-repeat-line-color>` Typen enthalten kann.

Die `row-rule-color`, zusammen mit den Eigenschaften {{cssxref("row-rule-width")}} und {{cssxref("row-rule-style")}}, kann mithilfe der {{cssxref("row-rule")}} Kurzform festgelegt werden. Die `row-rule-color`, zusammen mit der {{cssxref("column-rule-color")}} Eigenschaft, kann auch mithilfe der {{cssxref("rule-color")}} Kurzform festgelegt werden.

Ein `<line-color>` kann als jeder gültige CSS {{cssxref("&lt;color&gt;")}} Wert deklariert werden. Wenn der Eigenschaftswert nur aus einer `<color>` besteht, werden alle Linien dieser Farbe sein. Wenn wir Folgendes deklarieren, werden alle Linien blau sein:

```css
row-rule-color: blue;
```

Wenn mehr als ein `<line-color>` deklariert ist, werden sie in der angegebenen Reihenfolge auf Zeilenregeln angewendet. Wenn es mehr Zeilenregeln als `<line-color>`-Werte gibt, wird die Liste der Linienfarben wiederholt, bis jede Zeilenregel eine Farbe hat. Wenn wir zum Beispiel Folgendes deklarieren, wird jede ungerade Regel blau sein und jede gerade Regel gelb.

```css
row-rule-color: blue, yellow;
```

### Wiederholte Linienfarben

Die `repeat()`-Funktion, mit einem ganzzahligen Wert von `1` oder größer als erstem Argument, kann verwendet werden, um eine gültige Liste von CSS {{cssxref("&lt;color&gt;")}} Werten, die als nachfolgende Argumente übergeben wurden, die angegebene Anzahl von Malen zu wiederholen. Dies ermöglicht es, denselben Farbwert eine festgelegte Anzahl von Malen zu wiederholen, ohne dass dieselben `<line-color>` mehrfach wiederholt werden müssen. Die folgenden Deklarationen sind gleichwertig:

```css
row-rule-color: blue, yellow, red, yellow, red;
row-rule-color: blue, repeat(2, yellow, red);
```

Sie können jeden gültigen Farbwert aus jedem Farbraum verwenden, einschließlich CSS-Farbfunktionen, benutzerdefinierte Eigenschaften usw. Die Verwendung von `repeat()` kann Werte leichter lesbar machen, insbesondere wenn Ihre Farbwerte komplexer werden. Es ermöglicht, ein wiederkehrendes Muster mit einer einzigen Funktion zu schreiben, unabhängig von der Anzahl der Reihen.

Wenn wir `--base: yellow` und `--mixin: blue` setzen, wird Folgendes ähnliche Ergebnisse wie die vorherige Deklaration liefern:

```css
row-rule-color:
  color-mix(in lch decreasing hue, var(--base) 0%, var(--mixin)),
  repeat(
    2,
    color-mix(in lch decreasing hue, var(--base) 100%, var(--mixin)),
    color-mix(in lch decreasing hue, var(--base) 58%, var(--mixin))
  );
```

Dies erstellt eine Liste von fünf Farben. Wenn die Anzahl der Farben in der `row-rule-color`-Wertfarbliste die Anzahl der Lücken zwischen den Reihen übersteigt, werden die überzähligen Farbwerte ignoriert. Wenn der Container drei Reihen hat, wird die Regel in der ersten Lücke blau und die zweite gelb sein.

Wenn es mehr Lücken als Farben gibt, wird die Liste der Farben wiederholt, bis alle Zeilenregeln eine Farbe erhalten. Wenn der Container 6, 11, 16 oder 21 Reihen hat, wird diese Farbfolge ein, zwei, drei oder vier Mal wiederholt, wobei die letzte rot ist.

### Auto-wiederholende Linienfarben

Die `repeat()`-Funktion akzeptiert auch `auto` als erstes Argument anstelle einer positiven Ganzzahl. Mit `auto` als erstem Argument werden die `<color>`-Werte, die als nachfolgende Argumente übergeben werden, so oft wiederholt, wie es notwendig ist, um Werte für alle Zeilenregeln zu füllen, die nicht explizit durch andere Komponenten des Eigenschaftswertes angegeben sind, sofern vorhanden.

```css
row-rule-color: blue, repeat(auto, yellow), red;
```

In diesem Fall wird die erste Zeilenregel blau sein, die letzte rot und alle anderen gelb. Es spielt keine Rolle, ob der Container 3, 6, 11, 16 oder 21 Reihen hat; die erste wird immer blau sein und solange es mindestens zwei Zeilenregeln gibt, wird die letzte immer rot sein. Alle anderen Regeln werden gelb sein, was bedeutet, dass es bei nur 2 oder 3 Reihen keine gelben Linien gibt.

Das `auto`-Schlüsselwort innerhalb der `repeat()`-Funktion erstellt einen Auto-Wiederholer, der Werte für die Linienfarben der Zeilenregel füllt, die ansonsten keine Werte von anderen Teilen der Liste erhalten würden, um zu verhindern, dass die Liste durchläuft. Ein `row-rule-color` Wert kann höchstens ein `repeat(auto, <color>)` enthalten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel definieren wir eine einzelne Farbe für die Linien, die zwischen Flex-Elementen gezeichnet werden.

#### HTML

Wir umfassen eine Liste dynamischer Sportduos:

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

Wir definieren die Liste als Flex-Container, der durch Einstellen von {{cssxref("flex-direction")}} auf `column` mit der {{cssxref("flex-flow")}} Kurzform Reihen erstellt. Wir fügen einen {{cssxref("gap")}} von `5px` hinzu, um genügend Platz zwischen den Reihen zu schaffen, um unsere `3px` gestrichelte Linie zu platzieren:

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

Dieses Beispiel demonstriert, wie, wenn es weniger Werte in der Liste der Farben als Lücken zwischen den Reihen gibt, die Werte wiederholt werden.

Mit demselben HTML und CSS wie im vorherigen Beispiel fügen wir drei durch Kommas getrennte Farben als `row-rule-color` Wert hinzu:

```css live-sample___repeat
ul {
  row-rule-color: blue, yellow, red;
}
```

{{EmbedLiveSample("Repeat", "", "180")}}

### Verwendung der `repeat()`-Funktion

Dieses Beispiel demonstriert die Verwendung der `repeat()`-Funktion innerhalb des `row-rule-color` Eigenschaftswertes und wie diese Funktion helfen kann, zu verhindern, dass komplexe Werte unhandlich werden.

Wir verwenden dasselbe HTML und CSS wie in den vorherigen Beispielen. Um zu demonstrieren, wie Werte kompliziert werden können und den Nutzen der `repeat()`-Funktion, deklarieren wir zwei benutzerdefinierte Eigenschaften, die wir in drei {{cssxref("color-mix()")}} Farbfunktionsdeklarationen verwenden, um dieselben blau, rot und gelb Farben wie im vorherigen Beispiel zu erstellen. Die zweite Deklaration ist innerhalb einer `repeat()`-Funktion gesetzt, um 3 Mal wiederholt zu werden.

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

Der Flex-Container hat sechs Reihen, also fünf Lücken. Die `repeat()`-Funktion wiederholt unsere zweite Farbe dreimal, wodurch eine Farbliste mit fünf Farben erstellt wird. Da es so viele Zeilenlücken wie Gesamtsummen von Farben gibt, werden die Farben nicht wiederholt.

### Verwendung von `auto` innerhalb von `repeat()`

Dieses Beispiel demonstriert die Verwendung von `auto`, anstelle einer Ganzzahl, innerhalb der `repeat()`-Funktion.

Mit `repeat(auto, <color>)` setzen wir alle Linien auf fast transparentes Schwarz (`#0003`), mit Ausnahme der ersten und letzten, die wir auf ein solides `schwarz` setzen.

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
