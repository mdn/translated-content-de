---
title: "`row-rule-style` CSS property"
short-title: row-rule-style
slug: Web/CSS/Reference/Properties/row-rule-style
l10n:
  sourceCommit: 04dfe418f2942ae739d41592c22fafa3679fc03c
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`row-rule-style`** definiert den Linienstil der Linien, die in mehrzeiligen Grid-, Flex- und Mehrspalten-Layouts zwischen den Zeilen gezeichnet werden.

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

Die Eigenschaft `row-rule-style` akzeptiert eine durch Kommas getrennte Liste von Werten, darunter:

- `<line-style>`
  - : Ein {{cssxref("&lt;line-style&gt;")}}: einer der Werte `none`, `hidden`, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset` oder `outset`. Der Standardwert ist `none`.

- `<repeat-line-style>`
  - : Eine {{cssxref("repeat()")}}-Funktion, deren erstes Argument ein {{cssxref("&lt;integer&gt;")}} mit dem Wert `1` oder größer ist. Die folgenden Argumente sind {{cssxref("&lt;line-style&gt;")}}-Werte. Die Ganzzahl gibt an, wie oft die `<line-style>`-Werte wiederholt werden.

- `<auto-repeat-line-style>`
  - : Eine {{cssxref("repeat()")}}-Funktion mit `auto` als erstem Argument und einem oder mehreren `<line-style>`-Werten als weiteren Argumenten. Die angegebenen `<line-style>`-Werte werden so oft wiederholt, wie nötig ist, um Werte für alle Zeilentrennlinien bereitzustellen, die nicht ausdrücklich durch andere Bestandteile des Eigenschaftswerts festgelegt sind.

## Beschreibung

Die Eigenschaft `row-rule-style` definiert den Linienstil von Zeilentrennlinien, die in den Zwischenräumen zwischen Zeilen von [Mehrspalten-](/de/docs/Web/CSS/Guides/Multicol_layout), [Flex-](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Grid-Containern](/de/docs/Web/CSS/Guides/Grid_layout) mit mehr als einer Zeile gezeichnet werden.

Der Wert ist eine durch Kommas getrennte Liste von Komponenten, die `<line-style>`, `<repeat-line-style>` und `<auto-repeat-line-style>` enthalten kann.

`row-rule-style` kann zusammen mit den Eigenschaften {{cssxref("row-rule-color")}} und {{cssxref("row-rule-width")}} über die Kurzschreibweise {{cssxref("row-rule")}} festgelegt werden. Zusammen mit der Eigenschaft {{cssxref("column-rule-style")}} kann `row-rule-style` auch über die Kurzschreibweise {{cssxref("rule-style")}} festgelegt werden.

Wenn der Eigenschaftswert nur einen `<line-style>` enthält, haben alle Zeilentrennlinien diesen Stil. Bei der folgenden Deklaration sind alle Zeilentrennlinien `dashed`:

```css
row-rule-style: dashed;
```

Wenn mehrere `<line-style>`-Werte deklariert werden, werden sie in der angegebenen Reihenfolge auf die Zeilentrennlinien angewendet. Gibt es mehr Zeilentrennlinien als `<line-style>`-Werte, wird die Liste der Linienstile wiederholt, bis jede Zeilentrennlinie einen Stil hat. Bei der folgenden Deklaration ist beispielsweise jede ungerade Zeilentrennlinie `dashed` und jede gerade `dotted`:

```css
row-rule-style: dashed, dotted;
```

### Wiederholte Linienstile

Mit der Funktion `repeat()` und einer Ganzzahl von `1` oder größer als erstem Argument lässt sich eine gültige Liste von CSS-{{cssxref("&lt;line-style&gt;")}}-Werten, die als weitere Argumente übergeben werden, die angegebene Anzahl von Malen wiederholen. So kann derselbe Stil mehrfach verwendet werden, ohne denselben Wert wiederholt anzugeben. Sie können `<line-style>`-Schlüsselwortwerte oder benutzerdefinierte Eigenschaften angeben, die zu einem gültigen `<line-style>` aufgelöst werden. `repeat()` kann das Schreiben von Werten erleichtern: Wiederkehrende Muster lassen sich unabhängig von der Anzahl der Zeilen mit einer einzigen Funktion angeben. Die folgenden Deklarationen sind gleichwertig:

```css
row-rule-style: solid, outset, inset, outset, inset;
row-rule-style: solid, repeat(2, outset, inset);
```

Dadurch entsteht eine Liste mit fünf Stilen. Wenn die Stilliste im Wert von `row-rule-style` mehr Stile als Zwischenräume zwischen den Zeilen enthält, werden die überschüssigen Stilwerte ignoriert. Hat der Container drei Zeilen, ist die Trennlinie im ersten Zwischenraum `solid` und die im zweiten `outset`.

Gibt es mehr Zwischenräume als Stile, wird die Stilliste wiederholt. Hat der Container 6, 11, 16 oder 21 Zeilen, wird diese Stilfolge entsprechend ein-, zwei-, drei- oder viermal wiederholt. Die letzte Trennlinie ist dabei `inset`.

### Automatisch wiederholte Linienstile

Die Funktion `repeat()` akzeptiert als erstes Argument auch `auto` anstelle einer positiven Ganzzahl. Mit `auto` als erstem Argument werden die als weitere Parameter übergebenen `<line-style>`-Werte so oft wiederholt, wie nötig ist, um Werte für alle Zeilentrennlinien bereitzustellen, die nicht ausdrücklich durch andere Bestandteile des Eigenschaftswerts festgelegt sind.

```css
row-rule-style: solid, repeat(auto, dotted), solid;
```

In diesem Fall spielt es keine Rolle, ob der Container 3, 6, 11, 16 oder 21 Zeilen hat: Die erste und die letzte Zeilentrennlinie sind immer `solid`, alle übrigen `dotted`. Bei nur 2 oder 3 Zeilen gibt es keine Zeilentrennlinien mit dem Stil `dotted`.

Das Schlüsselwort `auto` innerhalb der Funktion `repeat()` erzeugt eine automatische Wiederholung, die Werte für Zeilentrennlinien ergänzt, denen andernfalls kein Wert aus anderen Teilen der Liste zugewiesen würde. Dadurch wird verhindert, dass die Liste erneut von vorn durchlaufen wird. Innerhalb eines `row-rule-style`-Werts ist nur ein `repeat(auto, <line-style>)` zulässig.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegendes Beispiel

In diesem Beispiel definieren wir einen einzelnen Stil für die Linien zwischen Flex-Elementen.

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

Wir definieren die Liste als Flex-Container und erzeugen Zeilen, indem wir {{cssxref("flex-direction")}} über die Kurzschreibweise {{cssxref("flex-flow")}} auf `column` setzen. Mit einem {{cssxref("gap")}} von `5px` schaffen wir zwischen den Zeilen genügend Platz für die rote, gestrichelte Trennlinie mit einer Breite von `3px`:

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

Dieses Beispiel zeigt, dass die Werte wiederholt werden, wenn die Stilliste weniger Werte als Zeilentrennlinien enthält.

Wir verwenden dasselbe HTML und CSS wie im vorherigen Beispiel und geben als Wert für `row-rule-style` drei durch Kommas getrennte Stile an:

```css live-sample___repeat
ul {
  row-rule-style: solid, dotted, dashed;
}
```

{{EmbedLiveSample("Repeat", "", "180")}}

### Verwendung der Funktion `repeat()`

Dieses Beispiel zeigt, wie die Funktion `repeat()` innerhalb des Eigenschaftswerts von `row-rule-style` verwendet wird. Wir verwenden dasselbe HTML und CSS wie in den vorherigen Beispielen. Mit einer `repeat()`-Funktion legen wir fest, dass die Liste aus zwei `<line-style>`-Werten dreimal wiederholt wird.

```css live-sample___func live-sample___auto
ul {
  row-rule-style: double, repeat(3, inset, dashed), double;
}
```

{{EmbedLiveSample("func", "", "180")}}

Der Flex-Container hat sechs Zeilen und damit fünf Zwischenräume. Die Funktion `repeat()` wiederholt zwei Stilwerte dreimal und erzeugt damit eine Liste mit sechs Stilwerten. Die letzten drei Werte der Liste werden daher verworfen.

### Verwendung von `auto` innerhalb von `repeat()`

Dieses Beispiel zeigt, wie Sie innerhalb der Funktion `repeat()` `auto` anstelle einer Ganzzahl verwenden.

Mit `repeat(auto, <line-style>)` setzen wir alle Zeilentrennlinien auf `dotted`, mit Ausnahme der ersten und der letzten, die wir auf `solid` setzen.

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
- Kurzschreibweise {{cssxref("row-rule")}}
- Kurzschreibweise {{cssxref("rule-style")}}
- Kurzschreibweise {{cssxref("rule")}}
- [CSS-Abstände definieren](/de/docs/Web/CSS/Guides/Gaps/Defining_gaps)
- Modul [CSS-Abstände](/de/docs/Web/CSS/Guides/Gaps)
