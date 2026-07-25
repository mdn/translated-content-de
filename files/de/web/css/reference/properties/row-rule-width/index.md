---
title: "`row-rule-width` CSS property"
short-title: row-rule-width
slug: Web/CSS/Reference/Properties/row-rule-width
l10n:
  sourceCommit: a9dc3374034d357cbfea717fd5d641605359e3c7
---

{{SeeCompatTable}}

Die **`row-rule-width`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert die Breiten der Linien, die zwischen den Zeilen in mehrzeiligen Raster-, Flex- und Multi-Col-Layouts gezeichnet werden.

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
  - : Ein {{cssxref("&lt;line-width&gt;")}}: Dies kann eines der Schlüsselwörter `thin`, `medium` oder `thick` sein oder ein positiver {{cssxref("length")}}-Wert, der die Breite der Linie darstellt. Der Standardwert ist `medium`.

- `<repeat-line-width>`
  - : Eine {{cssxref("repeat()")}}-Funktion, wobei das erste Argument eine {{cssxref("&lt;integer&gt;")}} von `1` oder mehr ist, und eines oder mehrere {{cssxref("&lt;line-width&gt;")}}-Werte als nachfolgende Argumente. Der ganzzahlige Wert definiert, wie oft die `<line-width>`-Werte wiederholt werden sollen.

- `<auto-repeat-line-width>`
  - : Eine {{cssxref("repeat()")}}-Funktion, mit `auto` als erstem Argument und einem oder mehreren `<line-width>`-Werten als nachfolgende Argumente. Die angegebenen `<line-width>`-Werte werden so oft wie nötig wiederholt, um Werte für alle Zeilenregeln zu füllen, die nicht von anderen Komponenten des Eigenschaftswertes explizit angegeben sind.

## Beschreibung

Die `row-rule-width`-Eigenschaft definiert die Breiten der Zeilenregel-Linien, die in den Zwischenräumen zwischen Zeilen in [Mehrspalten-](/de/docs/Web/CSS/Guides/Multicol_layout), [Flex-](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Raster-](/de/docs/Web/CSS/Guides/Grid_layout) Containern mit mehr als einer Zeile gezeichnet werden.

Der Wert ist eine durch Kommas getrennte Liste von Komponenten, die `<line-width>`, `<repeat-line-width>` und `<auto-repeat-line-width>` Typen enthalten kann.

Die `row-rule-width` kann zusammen mit den Eigenschaften {{cssxref("row-rule-color")}} und {{cssxref("row-rule-style")}} über die Kurzform {{cssxref("row-rule")}} festgelegt werden. Die `row-rule-width` kann auch zusammen mit der {{cssxref("column-rule-width")}}-Eigenschaft über die Kurzform {{cssxref("rule-width")}} festgelegt werden.

Wenn der Eigenschaftswert nur aus einem `<line-width>` besteht, werden alle Zeilenregeln diese Breite haben. Wenn wir das Folgende deklarieren, werden alle Zeilenregeln `3px` sein:

```css
row-rule-width: 3px;
```

Wenn mehr als ein `<line-width>` deklariert wird, werden sie auf die Zeilenregeln in der angegebenen Reihenfolge angewendet. Gibt es mehr Zeilenregeln als `<line-width>`-Werte, wird die Liste der Linienbreiten so lange wiederholt, bis jede Regel eine Breite hat. Wenn wir das Folgende deklarieren, wird jede ungerade Regel zum Beispiel `thin` sein, und jede gerade Regel wird `1em` sein.

```css
row-rule-width: thin, 1em;
```

### Wiederholte Linienbreiten

Die `repeat()`-Funktion, mit einer Ganzzahl von `1` oder mehr als erstem Argument, kann verwendet werden, um eine gültige Liste von CSS-{{cssxref("&lt;line-width&gt;")}} Werten, die als nachfolgende Argumente übergeben werden, die angegebene Anzahl von Malen zu wiederholen. Dies ermöglicht es, dieselben Breiten mehrmals festzulegen, ohne die gleichen Werte mehrfach zu wiederholen. Die folgenden Deklarationen sind gleichwertig:

```css
row-rule-width: 1rem, thick, thin, thick, thin;
row-rule-width: 1rem, repeat(2, thick, thin);
```

Sie können beliebige `<line-width>`-Werte verwenden, einschließlich benutzerdefinierter Eigenschaften, die sich in einen `<line-width>` auflösen. Die Verwendung von `repeat()` kann Werte leichter schreibbar machen, insbesondere bei komplexen Längenberechnungen. Sie ermöglicht es, ein wiederkehrendes Muster mit einer einzigen Funktion zu schreiben, unabhängig von der Anzahl der Zeilen.

Wenn wir `--base: 1vh` und `--secondary: 1vw` festlegen, wird das Folgende ähnliche Ergebnisse wie die vorherige Deklaration liefern:

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

Dies erstellt eine Liste von sechs Breiten. Wenn die Anzahl der Breiten in der Breitenliste des `row-rule-width`-Wertes die Anzahl der Lücken zwischen den Zeilen übersteigt, werden die überschüssigen Breitenwerte ignoriert. Wenn der Container drei Zeilen hat, wird die Regel im ersten Abstand `1rem` breit sein, und die zweite wird durch die {{cssxref("min()")}}-Funktion bestimmt.

Wenn es mehr Abstände als Breiten gibt, wird die Liste der Breiten wiederholt. Wenn der Container 7, 13, 19 oder 25 Zeilen hat, wird diese Sequenz von Breiten einmal, zweimal, dreimal oder viermal wiederholt, wobei die letzte Regel `thin` ist.

### Automatisch wiederholende Linienbreiten

Die `repeat()`-Funktion akzeptiert auch `auto` als erstes Argument anstelle einer positiven Ganzzahl. Mit `auto` als erstem Argument wird die Liste der `<line-width>`-Werte, die als nachfolgende Argumente übergeben werden, so oft wie nötig wiederholt, um Werte für jede Zeilenregel zu füllen, die nicht von anderen Komponenten des Eigenschaftswertes explizit angegeben wurden.

```css
row-rule-width: thin, repeat(auto, medium), thin;
```

In diesem Fall spielt es keine Rolle, ob der Container 3, 6, 11, 16 oder 21 Zeilen hat; die erste und letzte Zeile werden immer `thin` sein, und alle anderen Zeilenregeln werden `medium` sein. Wenn es nur 2 oder 3 Zeilen gibt, wird es keine mittleren Zeilenregeln geben.

Das Schlüsselwort `auto` innerhalb der `repeat()`-Funktion erstellt einen automatischen Wiederholer, der Werte für Zeilenregeln auffüllt, die sonst keine Werte aus anderen Teilen der Liste erhalten würden, um zu verhindern, dass die Liste durchlaufen wird. Höchstens kann nur ein `repeat(auto, <width>)` in einem `row-rule-width`-Wert vorhanden sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel definieren wir eine einzelne Breite für die Linien, die zwischen Flex-Elementen gezeichnet werden.

#### HTML

Wir fügen eine Liste dynamischer Sportduos ein:

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

Wir definieren die Liste als Flex-Container, erstellen Zeilen, indem wir die {{cssxref("flex-direction")}} auf `column` mit der Kurzform {{cssxref("flex-flow")}} einstellen. Wir fügen eine {{cssxref("gap")}} von `5px` hinzu, um genügend Platz zwischen den Zeilen zu schaffen, um unsere `3px` gestrichelte rote Regel zu platzieren:

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

Dieses Beispiel demonstriert, wie, wenn es in der Liste der Breiten weniger Werte als Zeilenregeln gibt, die Werte wiederholt werden.

Wir verwenden das gleiche HTML und CSS wie im vorherigen Beispiel, fügen jedoch drei durch Kommas getrennte Breiten als `row-rule-width`-Wert hinzu:

```css live-sample___repeat
ul {
  row-rule-width: 1px, 3px, 5px;
}
```

{{EmbedLiveSample("Repeat", "", "180")}}

### Verwendung der `repeat()`-Funktion

Dieses Beispiel demonstriert die Verwendung der `repeat()`-Funktion innerhalb des `row-rule-width`-Eigenschaftswerts und wie diese Funktion helfen kann, die Ausführlichkeit von Wertdeklarationen zu reduzieren.

Wir verwenden das gleiche HTML und CSS wie in den vorherigen Beispielen. Um zu demonstrieren, wie Werte ausführlich werden können und die Nützlichkeit der `repeat()`-Funktion, deklarieren wir zwei benutzerdefinierte Eigenschaften, die wir in `repeat()`-Funktionserklärungen verwenden. Die `repeat()`-Funktion setzt eine Liste von zwei `<line-width>`-Werten, die dreimal wiederholt werden.

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

Der Flex-Container hat sechs Zeilen, also fünf Abstände. Die `repeat()`-Funktion wiederholt zwei Breitenwerte dreimal, wodurch eine Liste von acht Breitenwerten entsteht. Da es weniger Zeilenabstände als Gesamtbreiten gibt, werden die letzten drei Werte in der Liste verworfen.

### Verwendung von `auto` innerhalb von `repeat()`

Dieses Beispiel demonstriert die Verwendung von `auto` anstelle einer Ganzzahl innerhalb der `repeat()`-Funktion.

Mit `repeat(auto, <line-width>)` setzen wir alle Zeilenregeln auf `1px`, mit Ausnahme der ersten und letzten, die wir auf `5px` setzen.

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
- [CSS Lücken](/de/docs/Web/CSS/Guides/Gaps) Modul
