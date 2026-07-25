---
title: "`row-rule-style` CSS property"
short-title: row-rule-style
slug: Web/CSS/Reference/Properties/row-rule-style
l10n:
  sourceCommit: a9dc3374034d357cbfea717fd5d641605359e3c7
---

{{SeeCompatTable}}

Die **`row-rule-style`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert den Linienstil der Linien, die zwischen Zeilen in mehrzeiligen Grid-, Flex- und Mehrspalten-Layouts gezeichnet werden.

{{InteractiveExample("CSS Demo: row-rule-style")}}

```css interactive-example-choice
row-rule-style: solid;
```

```css interactive-example-choice
row-rule-style: inset, outset;
```

```css interactive-example-choice
row-rule-style: repeat(2, dashed, dotted), solid;
```

```css interactive-example-choice
row-rule-style: solid, repeat(auto, dashed, dotted), solid;
```

```css interactive-example-choice
row-rule-style: hidden;
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
  row-rule-width: thick;
  row-rule-color: magenta;
  gap: 7px;
  text-align: left;
}
```

## Syntax

```css
/* One value */
row-rule-style: none;
row-rule-style: hidden;
row-rule-style: dotted;

/* Multiple values */
row-rule-style: groove, dashed, solid;
row-rule-style: double, repeat(5, ridge), double;
row-rule-style: solid, repeat(auto, inset, outset), solid;

/* Global values */
row-rule-style: inherit;
row-rule-style: initial;
row-rule-style: revert;
row-rule-style: revert-layer;
row-rule-style: unset;
```

### Werte

Die Eigenschaft `row-rule-style` akzeptiert eine durch Kommas getrennte Liste von Werten, einschließlich:

- `<line-style>`
  - : Ein {{cssxref("&lt;line-style&gt;")}}: einer der Werte `none`, `hidden`, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset` oder `outset`. Der Standardwert ist `none`.

- `<repeat-line-style>`
  - : Eine {{cssxref("repeat()")}} Funktion, wobei das erste Argument eine {{cssxref("&lt;integer&gt;")}} von `1` oder mehr ist und die nachfolgenden Argumente {{cssxref("&lt;line-style&gt;")}} Werte sind. Die ganze Zahl gibt an, wie oft die `<line-style>` Werte wiederholt werden sollen.

- `<auto-repeat-line-style>`
  - : Eine {{cssxref("repeat()")}} Funktion, mit `auto` als erstem Argument und einem oder mehreren `<line-style>` Werten als nachfolgenden Argumenten. Die angegebenen `<line-style>` Werte werden so oft wie nötig wiederholt, um Werte für alle Zeilenregeln zu füllen, die nicht explizit von anderen Komponenten des Eigenschaftswerts spezifiziert werden.

## Beschreibung

Die Eigenschaft `row-rule-style` definiert den Linienstil der Zeilenregel-Linien, die in den Abständen zwischen den Zeilen in [Mehrspalten](/de/docs/Web/CSS/Guides/Multicol_layout), [Flex](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Grid](/de/docs/Web/CSS/Guides/Grid_layout) Containern mit mehr als einer Zeile gezeichnet werden.

Der Wert ist eine durch Kommas getrennte Liste von Komponenten, die `<line-style>`, `<repeat-line-style>` und `<auto-repeat-line-style>` Typen enthalten können.

Das `row-rule-style`, zusammen mit den Eigenschaften {{cssxref("row-rule-color")}} und {{cssxref("row-rule-width")}}, kann mit der Kurzform {{cssxref("row-rule")}} gesetzt werden. Das `row-rule-style`, zusammen mit der Eigenschaft {{cssxref("column-rule-style")}}, kann auch mit der Kurzform {{cssxref("rule-style")}} gesetzt werden.

Wenn der Eigenschaftswert nur einen `<line-style>` hat, werden alle Zeilenregeln diesen Stil haben. Wenn wir folgendes deklarieren, werden alle Zeilenregeln `dashed` sein:

```css
row-rule-style: dashed;
```

Wenn mehr als ein `<line-style>` deklariert wird, werden diese in der angegebenen Reihenfolge auf Zeilenregeln angewendet. Wenn es mehr Zeilenregeln gibt als `<line-style>` Werte, wird die Liste der Linienstile wiederholt, bis jede Zeilenregel einen Stil hat. Wenn wir beispielsweise folgendes deklarieren, wird jede ungerade Regel `dashed` und jede gerade Regel `dotted` sein.

```css
row-rule-style: dashed, dotted;
```

### Wiederholte Linienstile

Die `repeat()` Funktion, mit einer ganzen Zahl von `1` oder größer als erstes Argument, kann verwendet werden, um eine gültige Liste von CSS {{cssxref("&lt;line-style&gt;")}} Werten, die als nachfolgende Argumente übergeben werden, die angegebene Anzahl von Malen zu wiederholen. Dies ermöglicht es, denselben Stil eine bestimmte Anzahl von Malen zu wiederholen, ohne denselben Wert zu wiederholen. Sie können `<line-style>` Schlüsselwortwerte oder benutzerdefinierte Eigenschaften einbeziehen, die sich in einen gültigen `<line-style>` auflösen. Die Verwendung von `repeat()` kann es einfacher machen, Werte zu schreiben, indem wiederkehrende Muster mit einer einzigen Funktion geschrieben werden können, unabhängig von der Anzahl der Zeilen. Die folgenden Deklarationen sind gleichwertig:

```css
row-rule-style: solid, outset, inset, outset, inset;
row-rule-style: solid, repeat(2, outset, inset);
```

Dies erzeugt eine Liste von fünf Stilen. Wenn die Anzahl der Stile in der `row-rule-style` Wertstil-Liste die Anzahl der Lücken zwischen den Zeilen übersteigt, werden die überschüssigen Stilwerte ignoriert. Wenn der Container drei Zeilen hat, wird die Regel in der ersten Lücke `solid` und die zweite `outset`.

Wenn es mehr Lücken als Stile gibt, wird die Liste der Stile wiederholt. Wenn der Container 6, 11, 16 oder 21 Zeilen hat, wird diese Abfolge von Stilen ein-, zwei-, drei- oder viermal wiederholt, wobei die letzte Regel `inset` ist.

### Auto-wiederholende Linienstile

Die `repeat()` Funktion akzeptiert auch `auto` als erstes Argument anstelle einer positiven ganzen Zahl. Mit `auto` als erstem Argument werden die `<line-style>` Werte, die als nachfolgende Parameter übergeben werden, so oft wiederholt, wie nötig, um Werte für alle Zeilenregeln zu füllen, die nicht ausdrücklich von anderen Komponenten des Eigenschaftswerts spezifiziert werden.

```css
row-rule-style: solid, repeat(auto, dotted), solid;
```

In diesem Fall spielt es keine Rolle, ob der Container 3, 6, 11, 16 oder 21 Zeilen hat; die erste und die letzte Zeilenregel werden immer `solid` und alle anderen Zeilenregeln werden `dotted` sein. Wenn es nur 2 oder 3 Zeilen gibt, wird es keine `dotted` Zeilenregeln geben.

Das Schlüsselwort `auto` innerhalb der `repeat()` Funktion erstellt einen Auto-Wiederholer, der Werte für Zeilenregeln füllt, die sonst keine Werte aus anderen Teilen der Liste erhalten würden, und verhindert, dass die Liste wiederholt wird. Innerhalb eines `row-rule-style` Wertes ist nur ein `repeat(auto, <line-style>)` erlaubt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel definieren wir einen einzelnen Stil für die Linien, die zwischen Flex-Elementen gezogen werden.

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

Wir definieren die Liste als einen Flex-Container, indem wir die {{cssxref("flex-direction")}} auf `column` setzen, mithilfe der Kurzform {{cssxref("flex-flow")}}. Wir fügen eine {{cssxref("gap")}} von `5px` hinzu, um genügend Platz zwischen den Zeilen zu schaffen, um unsere `3px` gestrichelte rote Regel anzupassen:

```css live-sample___basic live-sample___repeat live-sample___func live-sample___auto
ul {
  display: flex;
  flex-flow: column;
  gap: 5px;
  row-rule-width: 3px;
  row-rule-color: red;

  row-rule-style: dashed;
}
```

#### Ergebnis

{{EmbedLiveSample("Basic", "", "180")}}

### Wiederholte Werte

Dieses Beispiel zeigt, wie, wenn es weniger Werte in der Liste der Stile gibt als Zeilenregeln, die Werte wiederholt werden.

Unter Verwendung des gleichen HTML und CSS wie im vorherigen Beispiel, fügen wir drei durch Kommata getrennte Stile als `row-rule-style` Wert ein:

```css live-sample___repeat
ul {
  row-rule-style: solid, dotted, dashed;
}
```

{{EmbedLiveSample("Repeat", "", "180")}}

### Verwendung der `repeat()` Funktion

Dieses Beispiel zeigt, wie die `repeat()` Funktion innerhalb des `row-rule-style` Eigenschaftswertes verwendet wird. Wir verwenden dasselbe HTML und CSS wie in den vorherigen Beispielen. Wir fügen eine `repeat()` Funktion ein, die die Liste von zwei `<line-style>` Werten enthält, die dreimal wiederholt werden sollen.

```css live-sample___func live-sample___auto
ul {
  row-rule-style: double, repeat(3, inset, dashed), double;
}
```

{{EmbedLiveSample("func", "", "180")}}

Der Flexcontainer hat sechs Zeilen, also fünf Lücken. Die `repeat()` Funktion wiederholt zwei Stilwerte dreimal und erstellt eine Liste von acht Stilwerten, sodass die letzten drei Werte in der Liste verworfen werden.

### Verwendung von `auto` in `repeat()`

Dieses Beispiel zeigt die Verwendung von `auto` anstelle einer ganzen Zahl innerhalb der `repeat()` Funktion.

Mit `repeat(auto, <line-style>)` setzen wir alle Zeilenregeln auf `dotted`, außer der ersten und letzten, die wir auf `solid` setzen.

```css live-sample___auto
ul {
  row-rule-style: solid, repeat(auto, dotted), solid;
}
```

{{EmbedLiveSample("auto", "", "180")}}

```css hidden live-sample___basic live-sample___repeat live-sample___func live-sample___auto
@layer no-support {
  @supports not (row-rule-style: solid, dotted) {
    body::before {
      content: "Your browser doesn't support the row-rule-style property";
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
- {{cssxref("row-rule-width")}}
- {{cssxref("column-rule-style")}}
- {{cssxref("row-rule")}} Kurzform
- {{cssxref("rule-style")}} Kurzform
- {{cssxref("rule")}} Kurzform
- [CSS Lücken](/de/docs/Web/CSS/Guides/Gaps) Modul
