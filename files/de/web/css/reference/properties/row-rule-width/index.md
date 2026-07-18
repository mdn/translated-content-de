---
title: "`row-rule-width` CSS property"
short-title: row-rule-width
slug: Web/CSS/Reference/Properties/row-rule-width
l10n:
  sourceCommit: b13ef1ff1d0914617689df9074b24d41486e91b2
---

Die **`row-rule-width`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert die Breite der Linien, die zwischen den Zeilen in mehrzeiligen Grid-, Flex- und Multi-Column-Layouts gezeichnet werden.

{{InteractiveExample("CSS Demo: row-rule-width")}}

```css interactive-example-choice
row-rule-width: thin;
```

```css interactive-example-choice
row-rule-width: thin, thick;
```

```css interactive-example-choice
row-rule-width: repeat(2, thin, thick), 10px;
```

```css interactive-example-choice
row-rule-width: thick, repeat(auto, 1px, 2px), thick;
```

```css interactive-example-choice
row-rule-width: medium;
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
  row-rule-color: magenta;
  gap: 5px;
  text-align: left;
}
```

## Syntax

```css
/* Keyword values */
row-rule-width: thin;
row-rule-width: medium;
row-rule-width: thick;
row-rule-width: thin, medium, thick;
row-rule-width: thick, repeat(5, thin), thick;
row-rule-width: thick, repeat(auto, thin, medium), thick;

/* Length values */
row-rule-width: 1px;
row-rule-width: 5px;
row-rule-width: 1px, 3px, 5px;
row-rule-width: 5px, repeat(auto, 1px), 10px, 15px;
row-rule-width: 5px, repeat(5, 1px, 3px), 5px;

/* Global values */
row-rule-width: inherit;
row-rule-width: initial;
row-rule-width: revert;
row-rule-width: revert-layer;
row-rule-width: unset;
```

### Werte

Die `row-rule-width`-Eigenschaft akzeptiert eine durch Kommas getrennte Liste von Werten, einschließlich:

- `<line-width>`
  - : Ein {{cssxref("&lt;line-width&gt;")}}: Dies kann eines der Schlüsselwörter `thin`, `medium` oder `thick` sein oder ein positiver Wert vom Typ {{cssxref("length")}}, der die Breite der Linie darstellt. Der Standardwert ist `medium`.

- `<repeat-line-width>`
  - : Eine {{cssxref("repeat()")}}-Funktion, bei der das erste Argument eine {{cssxref("&lt;integer&gt;")}} von `1` oder mehr ist und eines oder mehrere {{cssxref("&lt;line-width&gt;")}}-Werte als nachfolgende Argumente. Der Integer gibt an, wie oft die `<line-width>`-Werte wiederholt werden sollen.

- `<auto-repeat-line-width>`
  - : Eine {{cssxref("repeat()")}}-Funktion, bei der `auto` das erste Argument ist und eines oder mehrere `<line-width>`-Werte als nachfolgende Argumente. Die bereitgestellten `<line-width>`-Werte werden so oft wiederholt, wie nötig, um Werte für alle Zeilenregeln zu füllen, die nicht explizit durch andere Komponenten des Eigenschaftswerts angegeben werden.

## Beschreibung

Die `row-rule-width`-Eigenschaft definiert die Breiten der Zeilenlinien, die in den Abständen zwischen Zeilen in [mehrspaltigen](/de/docs/Web/CSS/Guides/Multicol_layout), [flexiblen](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Gitter](/de/docs/Web/CSS/Guides/Grid_layout)-Containern mit mehr als einer Zeile gezeichnet werden.

Der Wert ist eine durch Kommas getrennte Liste von Komponenten, die `<line-width>`, `<repeat-line-width>` und `<auto-repeat-line-width>`-Typen enthalten kann.

Die `row-rule-width`-Eigenschaft kann zusammen mit den Eigenschaften {{cssxref("row-rule-color")}} und {{cssxref("row-rule-style")}} mit der {{cssxref("row-rule")}}-Kurzform gesetzt werden. Die `row-rule-width` kann zusammen mit der {{cssxref("column-rule-width")}}-Eigenschaft auch mit der {{cssxref("rule-width")}}-Kurzform gesetzt werden.

Wenn der Eigenschaftswert nur aus einem `<line-width>` besteht, werden alle Zeilenregeln diese Breite haben. Wenn wir Folgendes deklarieren, werden alle Zeilenregeln `3px` sein:

```css
row-rule-width: 3px;
```

Wenn mehr als ein `<line-width>` deklariert wird, werden sie in der angegebenen Reihenfolge auf die Zeilenregeln angewendet. Wenn es mehr Zeilenregeln als `<line-width>`-Werte gibt, wird die Liste der Linienbreiten wiederholt, bis jede Regel eine Breite hat. Wenn wir zum Beispiel Folgendes deklarieren, wird jede ungerade Regel `thin` sein und jede gerade Regel `1em`.

```css
row-rule-width: thin, 1em;
```

### Wiederholte Linienbreiten

Die `repeat()`-Funktion mit einem Integer von `1` oder größer als erstem Argument kann verwendet werden, um eine gültige Liste von CSS-{{cssxref("&lt;line-width&gt;")}}-Werten, die als nachfolgende Argumente übergeben werden, die angegebene Anzahl von Malen zu wiederholen. Dies ermöglicht es, dasselbe Breitenmuster eine festgelegte Anzahl von Malen zu wiederholen, ohne die gleichen Werte mehrfach anzugeben. Die folgenden Deklarationen sind gleichwertig:

```css
row-rule-width: 1rem, thick, thin, thick, thin;
row-rule-width: 1rem, repeat(2, thick, thin);
```

Sie können beliebige `<line-width>`-Werte verwenden, einschließlich benutzerdefinierter Eigenschaften, die auf eine `<line-width>` aufgelöst werden. Die Verwendung von `repeat()` kann das Schreiben von Werten erleichtern, insbesondere bei komplexen Längenberechnungen. Es ermöglicht, ein wiederholendes Muster mit einer einzigen Funktion zu schreiben, unabhängig von der Anzahl der Zeilen.

Wenn wir `--base: 1vh` und `--secondary: 1vw` setzen, liefert das folgende ähnliche Ergebnisse wie die vorherige Deklaration:

```css
row-rule-width:
  1rem,
  repeat(
    2,
    min(calc(var(--base) - 3px), 10px),
    abs(calc(var(--secondary) - 30px))
  ),
  thin;
```

Dies erzeugt eine Liste von sechs Breiten. Wenn die Anzahl der Breiten in der `row-rule-width`-Wertliste die Anzahl der Abstände zwischen den Zeilen übersteigt, werden die überschüssigen Breiten ignoriert. Wenn der Container drei Zeilen hat, wird die Regel im ersten Abstand `1rem` breit sein, und die zweite wird durch die {{cssxref("min()")}}-Funktion bestimmt.

Wenn es mehr Abstände als Breiten gibt, wird die Liste der Breiten wiederholt. Wenn der Container 7, 13, 19 oder 25 Zeilen hat, wird diese Reihenfolge an Breiten ein, zwei, drei oder vier Mal wiederholt, wobei die letzte Regel `thin` ist.

### Auto-wiederholende Linienbreiten

Die `repeat()`-Funktion akzeptiert auch `auto` als erstes Argument anstelle eines positiven Integers. Mit `auto` als erstem Argument wird die Liste der `<line-width>`-Werte, die als nachfolgende Argumente übergeben werden, so oft wiederholt, wie nötig, um Werte für alle Zeilenregeln zu füllen, die nicht explizit durch andere Komponenten des Eigenschaftswerts angegeben werden.

```css
row-rule-width: thin, repeat(auto, medium), thin;
```

In diesem Fall spielt es keine Rolle, ob der Container 3, 6, 11, 16 oder 21 Zeilen hat; die erste und letzte Zeile werden immer `thin`, und alle anderen Zeilenregeln werden `medium` sein. Wenn es nur 2 oder 3 Zeilen gibt, gibt es keine mittelgroßen Zeilenregeln.

Das `auto`-Schlüsselwort innerhalb der `repeat()`-Funktion erstellt einen Auto-Wiederholer, der Werte für Zeilenregels hinzufügt, die andernfalls keine Werte aus anderen Teilen der Liste erhalten würden, wodurch verhindert wird, dass die Liste durchlaufen wird. Höchstens kann nur eine `repeat(auto, <width>)` in einem `row-rule-width`-Wert vorhanden sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel definieren wir eine einzelne Breite für die Linien, die zwischen Flex-Items gezeichnet werden.

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

Wir definieren die Liste als Flex-Container, indem wir die {{cssxref("flex-direction")}} mithilfe der Kurzform {{cssxref("flex-flow")}} auf `column` setzen. Wir fügen einen {{cssxref("gap")}} von `5px` hinzu, um genug Raum zwischen den Zeilen zu schaffen, um unsere `3px` gestrichelte rote Regel aufzunehmen:

```css live-sample___basic live-sample___repeat live-sample___func live-sample___auto
ul {
  display: flex;
  flex-flow: column;
  gap: 5px;
  row-rule-style: dashed;
  row-rule-color: red;
  row-rule-width: 3px;
}
```

#### Ergebnis

{{EmbedLiveSample("Basic", "", "180")}}

### Wiederholende Werte

Dieses Beispiel zeigt, wie bei weniger Werten in der Liste der Breiten als Zeilenregeln, die Werte wiederholt werden.

Unter Verwendung desselben HTMLs und CSS wie im vorherigen Beispiel fügen wir drei durch Kommas getrennte Breiten als `row-rule-width`-Wert hinzu:

```css live-sample___repeat
ul {
  row-rule-width: 1px, 3px, 5px;
}
```

{{EmbedLiveSample("Repeat", "", "180")}}

### Verwendung der `repeat()`-Funktion

Dieses Beispiel zeigt die Verwendung der `repeat()`-Funktion innerhalb des `row-rule-width`-Eigenschaftswerts und wie diese Funktion helfen kann, die Ausführlichkeit von Wertdeklarationen zu reduzieren.

Wir verwenden dasselbe HTML und CSS wie in den vorherigen Beispielen. Um zu zeigen, wie Werte ausführlich werden können und der Nutzen der `repeat()`-Funktion, deklarieren wir zwei benutzerdefinierte Eigenschaften, die wir in `repeat()`-Funktionsdeklarationen verwenden. Die `repeat()`-Funktion setzt eine Liste von zwei `<line-width>`-Werten, die drei Mal wiederholt werden.

```css live-sample___func live-sample___auto
ul {
  --base: 0.5vw;
  --secondary: 1vw;
  row-rule-width:
    15px,
    repeat(
      3,
      min(calc(var(--base) + 3px), 10px),
      abs(calc(var(--secondary) - 2px))
    ),
    15px;
}
```

{{EmbedLiveSample("func", "", "180")}}

Der Flex-Container hat sechs Zeilen, also fünf Abstände. Die `repeat()`-Funktion wiederholt zwei Breitenwerte drei Mal, wodurch eine Liste von acht Breitenwerten entsteht. Da es weniger Zeilenabstände als Gesamtbreiten gibt, werden die letzten drei Werte in der Liste verworfen.

### Verwendung von `auto` innerhalb von `repeat()`

Dieses Beispiel zeigt die Verwendung von `auto` anstelle eines Integers innerhalb der `repeat()`-Funktion.

Indem `repeat(auto, <line-width>)` verwendet wird, setzen wir alle Zeilenregeln auf `1px`, außer der ersten und letzten, die wir auf `5px` setzen.

```css live-sample___auto
ul {
  row-rule-width: 5px, repeat(auto, 1px), 5px;
}
```

{{EmbedLiveSample("auto", "", "180")}}

```css hidden live-sample___basic live-sample___repeat live-sample___func live-sample___auto
@layer no-support {
  @supports not (row-rule-width: thin, thick) {
    body::before {
      content: "Your browser doesn't support the row-rule-width property";
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

- {{cssxref("row-rule-color")}}
- {{cssxref("row-rule-style")}}
- {{cssxref("column-rule-width")}}
- {{cssxref("row-rule")}} Kurzform
- {{cssxref("rule-width")}} Kurzform
- {{cssxref("rule")}} Kurzform
- [CSS-Lücken](/de/docs/Web/CSS/Guides/Gaps) Modul
