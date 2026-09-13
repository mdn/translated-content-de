---
title: "`row-rule-color` CSS property"
short-title: row-rule-color
slug: Web/CSS/Reference/Properties/row-rule-color
l10n:
  sourceCommit: 9b7a110e601556b82af6b5d46f01c757c5a11719
---

{{SeeCompatTable}}

Die **`row-rule-color`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert die Farben der Linien, die zwischen Reihen in mehrreihigen Grid-, Flex- und Multi-Column-Layouts gezeichnet werden.

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
  - : Ein {{cssxref("&lt;color&gt;")}}, der die Farbe der Linie darstellt.

- `<repeat-line-color>`
  - : Eine {{cssxref("repeat()")}}-Funktion, mit einem {{cssxref("&lt;integer&gt;")}} von `1` oder mehr als erstem Argument und einem oder mehreren `<color>`-Werten als folgende Argumente. Der `<integer>` gibt an, wie oft die `<color>`-Werte wiederholt werden sollen.

- `<auto-repeat-line-color>`
  - : Eine {{cssxref("repeat()")}}-Funktion mit `auto` als erstem Argument und einem oder mehreren `<color>`-Werten als folgende Argumente. Die angegebenen `<color>`-Werte werden so oft wiederholt, wie nötig, um Werte für alle Zeilenregeln zu füllen, die nicht explizit durch andere Komponenten des Eigenschaftswerts spezifiziert sind.

## Beschreibung

Die Eigenschaft `row-rule-color` definiert die Farben aller Linien, die in den Lücken zwischen den Reihen in [Mehrspalten-](/de/docs/Web/CSS/Guides/Multicol_layout), [Flex-](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Grid-](/de/docs/Web/CSS/Guides/Grid_layout) Containern mit mehr als einer Zeile gezeichnet werden.

Der Wert ist eine durch Kommas getrennte Liste von Komponenten, die `<line-color>`, `<repeat-line-color>` und `<auto-repeat-line-color>` Typen enthalten können.

Die `row-rule-color`-Eigenschaft, zusammen mit den Eigenschaften {{cssxref("row-rule-width")}} und {{cssxref("row-rule-style")}}, kann über die {{cssxref("row-rule")}}-Kurznotation gesetzt werden. Die `row-rule-color`-Eigenschaft kann ebenfalls zusammen mit der {{cssxref("column-rule-color")}}-Eigenschaft über die {{cssxref("rule-color")}}-Kurznotation gesetzt werden.

Ein `<line-color>` kann als jeder gültige CSS {{cssxref("&lt;color&gt;")}} Wert deklariert werden. Besteht der Eigenschaftswert nur aus einer `<color>`, werden alle Linien dieser Farbe sein. Wenn wir das folgende deklarieren, werden alle Linien blau:

```css
row-rule-color: blue;
```

Wenn mehr als ein `<line-color>` deklariert wird, werden sie in der angegebenen Reihenfolge auf die Zeilenregeln angewendet. Gibt es mehr Zeilenregeln als `<line-color>`-Werte, wird die Liste der Linienfarben wiederholt, bis jede Zeilenregel eine Farbe hat. Wenn wir das folgende deklarieren, wird jede ungerade Regel blau und jede gerade Regel gelb.

```css
row-rule-color: blue, yellow;
```

### Wiederholte Linienfarben

Die `repeat()`-Funktion, mit einem ganzzahligen Wert von `1` oder größer als erstem Argument, kann verwendet werden, um eine gültige Liste von CSS {{cssxref("&lt;color&gt;")}} Werten, die als spätere Argumente übergeben werden, die angegebene Anzahl von Malen zu wiederholen. Dies ermöglicht es, die gleiche Farbe eine bestimmte Anzahl von Malen zu wiederholen, ohne das gleiche `<line-color>` mehrfach zu wiederholen. Die folgenden Deklarationen sind gleichwertig:

```css
row-rule-color: blue, yellow, red, yellow, red;
row-rule-color: blue, repeat(2, yellow, red);
```

Sie können jeden gültigen Farbwert aus jedem Farbraum verwenden, einschließlich CSS-Farbfunktionen, benutzerdefinierten Eigenschaften usw. Die Verwendung von `repeat()` kann das Schreiben von Werten erleichtern, besonders wenn Ihre Farbwerte komplexer werden. Es ermöglicht ein wiederkehrendes Muster unter Verwendung einer einzigen Funktion zu schreiben, unabhängig von der Anzahl der Reihen.

Wenn wir `--base: yellow` und `--mixin: blue` setzen, liefert das folgende ähnliche Ergebnisse wie die vorherige Deklaration:

```css
row-rule-color:
  color-mix(in lch decreasing hue, var(--base) 0%, var(--mixin)),
  repeat(
    2,
    color-mix(in lch decreasing hue, var(--base) 100%, var(--mixin)),
    color-mix(in lch decreasing hue, var(--base) 58%, var(--mixin))
  );
```

Dies erzeugt eine Liste von fünf Farben. Wenn die Anzahl der Farben in der Farb-Liste des `row-rule-color`-Wertes die Anzahl der Lücken zwischen den Reihen übersteigt, werden die überschüssigen Farbwerte ignoriert. Hat der Container drei Reihen, wird die Regel im ersten Spalt blau und die im zweiten gelb sein.

Gibt es mehr Spalten als Farben, wird die Liste der Farben wiederholt, bis alle Zeilenregeln eine Farbe erhalten. Hat der Container 6, 11, 16 oder 21 Reihen, wird diese Farbfolge ein-, zwei-, drei- oder viermal, jeweils mit der letzten Farbe rot, wiederholt.

### Automatisches Wiederholen von Linienfarben

Die `repeat()`-Funktion akzeptiert auch `auto` als erstes Argument anstelle einer positiven Ganzzahl. Mit `auto` als erstem Argument werden die `<color>`-Werte, die in den folgende Argumente übermittelt werden, so oft wiederholt, wie nötig ist, um Werte für alle Zeilenregeln zu füllen, die nicht ausdrücklich durch andere Komponenten des Eigenschaftswerts vorgesehen sind, falls vorhanden.

```css
row-rule-color: blue, repeat(auto, yellow), red;
```

In diesem Fall wird die erste Zeilenregel blau sein, die letzte rot, und alle anderen werden gelb sein. Es spielt keine Rolle, ob der Container 3, 6, 11, 16 oder 21 Reihen hat; die erste wird immer blau und, solange es mindestens zwei Zeilenregeln gibt, die letzte wird immer rot sein. Alle anderen Regeln werden gelb, was bedeutet, dass, sofern es nur 2 oder 3 Reihen gibt, es keine gelben Linien geben wird.

Das `auto`-Schlüsselwort innerhalb der `repeat()`-Funktion erstellt einen automatischen Wiederholer, der Werte für die Zeilenregel-Linienfarben füllt, die sonst keine Werte von anderen Teilen der Liste erhalten, wodurch verhindert wird, dass die Liste durchlaufen wird. Ein `row-rule-color`-Wert kann höchstens ein `repeat(auto, <color>)` enthalten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegendes Beispiel

In diesem Beispiel definieren wir eine einzelne Farbe für die Linien zwischen Flex-Elementen.

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

Wir definieren die Liste als Flex-Container und erstellen Zeilen, indem wir {{cssxref("flex-direction")}} mit der {{cssxref("flex-flow")}}-Kurznotation auf `column` setzen. Wir fügen eine {{cssxref("gap")}} von `5px` hinzu, um genügend Platz zwischen den Reihen für unsere `3px` gestrichelte Regel zu schaffen:

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

Dieses Beispiel demonstriert, wie die Werte wiederholt werden, wenn es in der Liste der Farben weniger Werte als Lücken zwischen den Reihen gibt.

Mit dem gleichen HTML und CSS wie im vorherigen Beispiel fügen wir drei durch Kommas getrennte Farben als `row-rule-color`-Wert hinzu:

```css live-sample___repeat
ul {
  row-rule-color: blue, yellow, red;
}
```

{{EmbedLiveSample("Repeat", "", "180")}}

### Verwendung der `repeat()`-Funktion

Dieses Beispiel demonstriert die Verwendung der `repeat()`-Funktion innerhalb des `row-rule-color`-Eigenschaftswertes und wie diese Funktion helfen kann, komplexe Werte übersichtlich zu halten.

Wir verwenden den gleichen HTML- und CSS-Code wie in den vorherigen Beispielen. Um zu zeigen, wie kompliziert Werte werden können und den Nutzen der `repeat()`-Funktion, deklarieren wir zwei benutzerdefinierte Eigenschaften, die wir in drei {{cssxref("color-mix()")}} Farbfunktionsdeklarationen nutzen, um die gleichen blau, rot und gelb Farben wie im vorherigen Beispiel zu erzeugen. Die zweite Deklaration erfolgt innerhalb einer `repeat()`-Funktion, die auf eine dreimalige Wiederholung gesetzt ist.

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

Der Flex-Container hat sechs Reihen, also fünf Lücken. Die `repeat()`-Funktion wiederholt unsere zweite Farbe dreimal und erstellt eine Farbliste mit fünf Farben. Da es genauso viele Reihenzwischenräume wie Gesamtfarben gibt, werden die Farben nicht wiederholt.

### Verwendung von `auto` innerhalb von `repeat()`

Dieses Beispiel zeigt, wie `auto` anstelle einer Ganzzahl innerhalb der `repeat()`-Funktion verwendet wird.

Mit `repeat(auto, <color>)` setzen wir alle Linien auf fast transparentes Schwarz (`#00000033`), außer der ersten und letzten, die wir auf solid `black` setzen.

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
- {{cssxref("row-rule")}} Kurznotation
- {{cssxref("rule-color")}} Kurznotation
- {{cssxref("rule")}} Kurznotation
- [CSS Lücken](/de/docs/Web/CSS/Guides/Gaps) Modul
