---
title: "`row-rule-style` CSS property"
short-title: row-rule-style
slug: Web/CSS/Reference/Properties/row-rule-style
l10n:
  sourceCommit: b13ef1ff1d0914617689df9074b24d41486e91b2
---

Die **`row-rule-style`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert den Linienstil der Linien, die zwischen Reihen in Multi-Reihen-Gittern, Flex- und Multi-Säulen-Layouts gezeichnet werden.

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

Die `row-rule-style`-Eigenschaft akzeptiert eine durch Komma getrennte Liste von Werten, einschließlich:

- `<line-style>`
  - : Ein {{cssxref("&lt;line-style&gt;")}}: einer von `none`, `hidden`, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset` oder `outset`. Der Standardwert ist `none`.

- `<repeat-line-style>`
  - : Eine {{cssxref("repeat()")}} Funktion, bei der das erste Argument ein {{cssxref("&lt;integer&gt;")}} von `1` oder mehr ist, und die nachfolgenden Argumente {{cssxref("&lt;line-style&gt;")}}-Werte sind. Das Integer gibt an, wie oft die `<line-style>`-Werte wiederholt werden sollen.

- `<auto-repeat-line-style>`
  - : Eine {{cssxref("repeat()")}} Funktion mit `auto` als erstem Argument und einem oder mehreren `<line-style>`-Werten als nachfolgende Argumente. Die angegebenen `<line-style>`-Werte werden so oft wiederholt, wie nötig, um Werte für alle Reihenregeln zu ergänzen, die nicht explizit durch andere Komponenten des Eigenschaftswertes angegeben sind.

## Beschreibung

Die `row-rule-style`-Eigenschaft definiert den Linienstil aller Reihenlinien, die in den Lücken zwischen Reihen in [Multi-Spalten](/de/docs/Web/CSS/Guides/Multicol_layout), [Flex](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Grid](/de/docs/Web/CSS/Guides/Grid_layout) Containern mit mehr als einer Reihe gezeichnet werden.

Der Wert ist eine durch Komma getrennte Liste von Komponenten, die `<line-style>`, `<repeat-line-style>` und `<auto-repeat-line-style>` Typen beinhalten kann.

Die `row-rule-style` kann zusammen mit den Eigenschaften {{cssxref("row-rule-color")}} und {{cssxref("row-rule-width")}} mit der Kurznotation {{cssxref("row-rule")}} gesetzt werden. Die `row-rule-style` kann zusammen mit der Eigenschaft {{cssxref("column-rule-style")}} auch mit der Kurznotation {{cssxref("rule-style")}} gesetzt werden.

Wenn der Eigenschaftswert nur ein `<line-style>` hat, werden alle Reihenregeln diesen Stil haben. Wenn wir folgendes deklarieren, werden alle Reihenregeln `dashed`:

```css
row-rule-style: dashed;
```

Wenn mehr als ein `<line-style>` deklariert ist, werden sie in der angegebenen Reihenfolge auf die Reihenregeln angewendet. Wenn es mehr Reihenregeln gibt als `<line-style>`-Werte, wird die Liste der Linienstile wiederholt, bis jede Reihenregel einen Stil hat. Wenn wir beispielsweise folgendes deklarieren, wird jede ungerade Regel `dashed` und jede gerade Regel `dotted` sein.

```css
row-rule-style: dashed, dotted;
```

### Wiederholte Linienstile

Die `repeat()`-Funktion, mit einem Integer von `1` oder mehr als erstem Argument, kann verwendet werden, um eine gültige Liste von CSS {{cssxref("&lt;line-style&gt;")}}-Werten zu wiederholen, die als nachfolgende Argumente übergeben werden, die angegebene Anzahl von Malen. Dies ermöglicht es, denselben Stil mehrmals zu wiederholen, ohne denselben Wert zu wiederholen. Sie können `<line-style>`-Schlüsselwortwerte oder benutzerdefinierte Eigenschaften, die zu einem gültigen `<line-style>` aufgelöst werden, einschließen. Die Verwendung von `repeat()` kann es einfacher machen, Werte zu schreiben, indem wiederkehrende Muster mit einer einzigen Funktion geschrieben werden, unabhängig von der Anzahl der Reihen. Die folgenden Deklarationen sind gleichwertig:

```css
row-rule-style: solid, outset, inset, outset, inset;
row-rule-style: solid, repeat(2, outset, inset);
```

Dies erstellt eine Liste von fünf Stilen. Wenn die Anzahl der Stile in der Stil-Liste des `row-rule-style`-Werts die Anzahl der Lücken zwischen Reihen übersteigt, werden die überschüssigen Stilwerte ignoriert. Wenn der Container drei Reihen hat, wird die Regel in der ersten Spalte `solid` und die zweite `outset`.

Falls es mehr Lücken als Stile gibt, wird die Liste der Stile wiederholt. Wenn der Container 6, 11, 16 oder 21 Reihen hat, wird diese Sequenz von Stilen einmal, zweimal, dreimal oder viermal wiederholt, wobei die letzte Regel `inset` sein wird.

### Auto-wiederholende Linienstile

Die `repeat()`-Funktion akzeptiert auch `auto` als erstes Argument anstelle eines positiven Integers. Mit `auto` als erstem Argument werden die `<line-style>`-Werte, die als nachfolgende Parameter übergeben werden, so oft wiederholt, wie es nötig ist, um Werte für alle Reihenregeln zu ergänzen, die nicht explizit durch andere Komponenten des Eigenschaftswertes angegeben sind.

```css
row-rule-style: solid, repeat(auto, dotted), solid;
```

In diesem Fall spielt es keine Rolle, ob der Container 3, 6, 11, 16 oder 21 Reihen hat; die erste und die letzte Reihenregel wird immer `solid` sein, und alle anderen Reihenregeln werden `dotted` sein. Wenn es nur 2 oder 3 Reihen gibt, wird es keine gepunkteten Reihenregeln geben.

Das `auto`-Schlüsselwort innerhalb der `repeat()`-Funktion erstellt einen Auto-Wiederholer, der Werte für Reihenregeln ergänzt, die ansonsten keine Werte von anderen Teilen der Liste erhalten würden, wodurch verhindert wird, dass die Liste zyklisch wird. Nur ein `repeat(auto, <line-style>)` ist innerhalb eines `row-rule-style`-Wertes erlaubt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundbeispiel

In diesem Beispiel definieren wir einen einzigen Stil für die Linien, die zwischen Flex-Items gezeichnet werden.

#### HTML

Wir fügen eine Liste von dynamischen Sportduos ein:

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

Wir definieren die Liste als Flex-Container, indem wir Reihen durch Setzen der {{cssxref("flex-direction")}} auf `column` mittels der {{cssxref("flex-flow")}}-Kurznotation erzeugen. Wir fügen einen {{cssxref("gap")}} von `5px` ein, um genügend Raum zwischen den Reihen für unsere `3px` gestrichelte rote Linie zu schaffen:

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

Dieses Beispiel zeigt, wie die Werte wiederholt werden, wenn es in der Liste der Stile weniger Werte als Reihenregeln gibt.

Mit demselben HTML und CSS wie im vorherigen Beispiel fügen wir drei durch Komma getrennte Stile als den `row-rule-style`-Wert ein:

```css live-sample___repeat
ul {
  row-rule-style: solid, dotted, dashed;
}
```

{{EmbedLiveSample("Repeat", "", "180")}}

### Verwendung der `repeat()`-Funktion

Dieses Beispiel zeigt die Verwendung der `repeat()`-Funktion innerhalb des `row-rule-style`-Eigenschaftswerts. Wir verwenden dasselbe HTML und CSS wie in den vorherigen Beispielen. Wir fügen eine `repeat()`-Funktion ein und setzen die Liste der beiden `<line-style>`-Werte so, dass sie dreimal wiederholt wird.

```css live-sample___func live-sample___auto
ul {
  --base: 0.5vw;
  --secondary: 1vw;
  row-rule-style: double, repeat(3, inset, dashed), double;
}
```

{{EmbedLiveSample("func", "", "180")}}

Der Flex-Container hat sechs Reihen, also fünf Lücken. Die `repeat()`-Funktion wiederholt zwei Stilwerte dreimal, wodurch eine Liste von acht Stilwerten entsteht, sodass die letzten drei Werte in der Liste verworfen werden.

### Verwendung von `auto` innerhalb von `repeat()`

Dieses Beispiel zeigt die Verwendung von `auto` anstelle eines Integers innerhalb der `repeat()`-Funktion.

Mit `repeat(auto, <line-style>)` setzen wir alle Reihenregeln auf `dotted`, außer die erste und letzte, die wir auf `solid` setzen.

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
- {{cssxref("row-rule")}} Kurznotation
- {{cssxref("rule-style")}} Kurznotation
- {{cssxref("rule")}} Kurznotation
- [CSS Lücken](/de/docs/Web/CSS/Guides/Gaps) Modul
