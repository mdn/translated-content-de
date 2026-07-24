---
title: "`column-rule-style` CSS property"
short-title: column-rule-style
slug: Web/CSS/Reference/Properties/column-rule-style
l10n:
  sourceCommit: e9c03ba87f9ff4123150d8f7dc457bd546bdab83
---

Die **`column-rule-style`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert den Linienstil der Linien, die zwischen Spalten in einem Multi-Column-, Flex- oder Grid-Layout gezeichnet werden.

{{InteractiveExample("CSS Demo: column-rule-style")}}

```css interactive-example-choice
column-rule-style: dotted;
```

```css interactive-example-choice
column-rule-style: dashed, dotted;
```

```css interactive-example-choice
column-rule-style: repeat(2, inset, outset), double;
```

```css interactive-example-choice
column-rule-style: double, repeat(auto, dashed, solid), double;
```

```css interactive-example-choice
column-rule-style: hidden;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    London. Noel term lately over, and the Lord George sitting in Lincoln's Inn
    Hall. Great May weather. As much mud in the streets as if the waters had but
    newly retired from the face of the earth, and it would not be weird to meet
    an platypus, two feet long or so, waddling like an lizard up Morgan Hill.
  </p>
</section>
```

```css interactive-example
#example-element {
  columns: 6;
  column-rule-width: thick;
  column-rule-color: teal;
  gap: 7px;
}
```

## Syntax

```css
/* Keyword values */
column-rule-style: none;
column-rule-style: hidden;
column-rule-style: dotted;
column-rule-style: dashed;
column-rule-style: solid;
column-rule-style: double;
column-rule-style: groove;
column-rule-style: ridge;
column-rule-style: inset;
column-rule-style: outset;

/* Multiple values */
column-rule-style: groove, double, dashed;
column-rule-style: solid, repeat(5, ridge), solid;
column-rule-style: dotted, repeat(auto, inset, outset), dotted;

/* Global values */
column-rule-style: inherit;
column-rule-style: initial;
column-rule-style: revert;
column-rule-style: revert-layer;
column-rule-style: unset;
```

### Werte

Die `column-rule-style`-Eigenschaft akzeptiert eine durch Kommata getrennte Liste von Werten, inklusive:

- `<line-style>`
  - : Ein {{cssxref("&lt;line-style&gt;")}}: einer von `none`, `hidden`, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset` oder `outset`. Der Standardwert ist `none`.

- `<repeat-line-style>`
  - : Eine {{cssxref("repeat()")}}-Funktion, wobei das erste Argument ein {{cssxref("&lt;integer&gt;")}} von `1` oder mehr ist und die nachfolgenden Argumente {{cssxref("&lt;line-style&gt;")}}-Werte sind. Der Integer gibt an, wie oft die `<line-style>`-Werte wiederholt werden sollen.

- `<auto-repeat-line-style>`
  - : Eine {{cssxref("repeat()")}}-Funktion, mit `auto` als erstem Argument und einem oder mehreren `<line-style>`-Werten als nachfolgende Argumente. Die bereitgestellten `<line-style>`-Werte werden so oft wiederholt, wie nötig, um Werte für jeden Spaltenregel festzulegen, die nicht explizit von anderen Komponenten des Eigenschaftswerts angegeben werden.

## Beschreibung

Die `column-rule-style`-Eigenschaft definiert den Linienstil jeder Spaltenregel-Linie, die in den Lücken zwischen Spalten in [multi-column](/de/docs/Web/CSS/Guides/Multicol_layout)-, [flex](/de/docs/Web/CSS/Guides/Flexible_box_layout)- und [grid](/de/docs/Web/CSS/Guides/Grid_layout)-Containern mit mehr als einer Spalte gezeichnet werden.

Der Wert ist eine durch Kommata getrennte Liste von Komponenten, die `<line-style>`, `<repeat-line-style>` und `<auto-repeat-line-style>`-Typen umfassen kann.

Die `column-rule-style`, zusammen mit den Eigenschaften {{cssxref("column-rule-color")}} und {{cssxref("column-rule-width")}}, kann mit der Kurzform {{cssxref("column-rule")}} gesetzt werden. Die `column-rule-style`, zusammen mit der Eigenschaft {{cssxref("row-rule-style")}}, kann auch mit der Kurzform {{cssxref("rule-style")}} gesetzt werden.

Wenn der Eigenschaftswert nur einen `<line-style>` hat, werden alle Spaltenregeln diesen Stil haben. Wenn wir folgendes erklären, werden alle Spaltenregeln `double` sein:

```css
column-rule-style: double;
```

Wenn mehr als ein `<line-style>` angegeben ist, werden sie in der angegebenen Reihenfolge auf die Spaltenregeln angewendet. Wenn es mehr Spaltenregeln als `<line-style>`-Werte gibt, wird die Liste der Linienstile wiederholt, bis jede Spaltenregel einen Stil hat. Wenn wir folgendes deklarieren, wird zum Beispiel jede ungerade Regel `double` und jede gerade Regel `groove` sein.

```css
column-rule-style: double, groove;
```

### Wiederholte Linienstile

Die `repeat()`-Funktion, mit einem Integer von `1` oder größer als erstes Argument, kann verwendet werden, um eine gültige Liste von CSS-{{cssxref("&lt;line-style&gt;")}}-Werten, die als nachfolgende Argumente übergeben werden, die angegebene Anzahl von Malen zu wiederholen. Auf diese Weise kann derselbe Stil eine bestimmte Anzahl von Malen wiederholt werden, ohne denselben Wert zu wiederholen. Sie können `<line-style>`-Schlüsselwortwerte oder benutzerdefinierte Eigenschaften, die zu einem gültigen `<line-style>` aufgelöst werden, einschließen. Die Verwendung von `repeat()` kann die Werte einfacher gestalten und wiederkehrende Muster ermöglichen, die mit einer einzigen Funktion geschrieben werden, unabhängig von der Anzahl der Spalten. Die folgenden Deklarationen sind gleichwertig:

```css
column-rule-style: solid, outset, inset, outset, inset;
column-rule-style: solid, repeat(2, outset, inset);
```

Dies erstellt eine Liste von fünf Stilen. Wenn die Anzahl der Stile in der `column-rule-style`-Wertliste die Anzahl der Lücken zwischen den Spalten übersteigt, werden die überzähligen Stilwerte ignoriert. Wenn das Container drei Spalten hat, wird die Regel in der ersten Lücke `solid` und die zweite `outset` sein.

Wenn es mehr Lücken als Stile gibt, wird die Liste der Stile wiederholt. Wenn das Container 6, 11, 16 oder 21 Spalten hat, wird diese Stilsequenz ein-, zwei-, drei- oder viermal wiederholt, wobei die letzte Regel `inset` sein wird.

### Auto-wiederholende Linienstile

Die `repeat()`-Funktion akzeptiert auch `auto` als erstes Argument anstelle eines positiven Integers. Mit `auto` als erstem Argument werden die als nachfolgende Parameter übergebenen `<line-style>`-Werte so oft wie nötig wiederholt, um Werte für Spaltenregeln zu füllen, die nicht explizit von anderen Komponenten des Eigenschaftswerts festgelegt werden.

```css
column-rule-style: solid, repeat(auto, dotted), solid;
```

In diesem Fall ist es egal, ob der Container 3, 6, 11, 16 oder 21 Spalten hat; die erste und letzte Spaltenregel wird immer `solid` sein, und alle anderen Spalten werden `dotted` sein. Wenn es nur 2 oder 3 Spalten gibt, wird es keine `dotted`-Spaltenregeln geben.

Das `auto`-Schlüsselwort innerhalb der `repeat()`-Funktion erzeugt einen automatischen Wiederholer, der Werte für Spaltenregeln füllt, die ansonsten keine Werte von anderen Teilen der Liste erhalten würden, und verhindert, dass die Liste durchlaufen wird. Nur ein `repeat(auto, <line-style>)` ist innerhalb eines `column-rule-style`-Wertes erlaubt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

#### HTML

```html
<p>
  This is a bunch of text split into three columns. The `column-rule-style`
  property is used to change the style of the line that is drawn between
  columns. Don't you think that's wonderful?
</p>
```

#### CSS

```css
p {
  column-count: 3;
  column-rule-style: dashed;
}
```

#### Ergebnis

{{ EmbedLiveSample('basic usage') }}

### Mehrere Werte

#### HTML

Wir schließen eine Liste von Autoren ein:

```html live-sample___multiple live-sample___repeat live-sample___func live-sample___auto
<ul>
  <li>Kimberlé Crenshaw</li>
  <li>Angela Y. Davis</li>
  <li>Bernardine Evaristo</li>
  <li>Audre Lorde</li>
  <li>Cathy Park Hong</li>
  <li>Zoya Patel</li>
  <li>Juno Mac</li>
  <li>Molly Smith</li>
  <li>Tara Westover</li>
</ul>
```

#### CSS

Wir definieren die Liste als Flex-Container und erstellen Spalten, indem wir die {{cssxref("flex-direction")}} auf `row` mit der {{cssxref("flex-flow")}}-Kurzform setzen. Wir fügen eine {{cssxref("gap")}} von `5px` hinzu, um genug Platz zwischen den Spalten zu schaffen, damit unsere `3px` doppelte türkisfarbene Grenze passt:

```css live-sample___multiple live-sample___repeat live-sample___func live-sample___auto
ul {
  display: flex;
  flex-flow: row;
  gap: 5px;
  column-rule-width: 3px;
  column-rule-color: teal;

  column-rule-style:
    dotted, dashed, solid, double, groove, ridge, inset, outset, none, hidden;
}
```

#### Ergebnis

{{EmbedLiveSample("Multiple", "", "180")}}

Da es mehr Werte (10) als Lücken (8) gibt, werden die `none` und `hidden` Werte nicht verwendet.

### Wiederholte Werte

Dieses Beispiel zeigt, wie Werte wiederholt werden, wenn es weniger Werte in der Liste der Stile als Spaltenregeln gibt.

Verwenden Sie das gleiche HTML und CSS wie im vorherigen Beispiel. Wir schließen drei durch Komma getrennte Stile als `column-rule-style`-Wert ein:

```css live-sample___repeat
ul {
  column-rule-style: solid, groove, double;
}
```

{{EmbedLiveSample("Repeat", "", "180")}}

### Verwendung der `repeat()`-Funktion

Dieses Beispiel demonstriert die Verwendung der `repeat()`-Funktion innerhalb des `column-rule-style`-Eigenschaftswerts. Wir verwenden das gleiche HTML und CSS wie in den vorherigen Beispielen. Wir schließen eine `repeat()`-Funktion ein und setzen die Liste von zwei `<line-style>`-Werten so, dass sie 3 Mal wiederholt wird.

```css live-sample___func live-sample___auto
ul {
  column-rule-style: solid, repeat(3, inset, outset), solid;
}
```

{{EmbedLiveSample("func", "", "180")}}

Der Flex-Container hat sechs Spalten, also fünf Lücken. Die `repeat()`-Funktion wiederholt zwei Stilwerte dreimal, wodurch eine Liste von acht Stilwerten entsteht, sodass die letzten drei Werte in der Liste verworfen werden.

### Verwendung von `auto` innerhalb von `repeat()`

Dieses Beispiel zeigt die Verwendung von `auto` anstelle eines Integers innerhalb der `repeat()`-Funktion.

Verwenden Sie `repeat(auto, <line-style>)`, um alle Spaltenregeln auf `groove` zu setzen, außer der ersten und letzten, die wir auf `solid` setzen.

```css live-sample___auto
ul {
  column-rule-style: solid, repeat(auto, groove), solid;
}
```

{{EmbedLiveSample("auto", "", "180")}}

```css hidden live-sample___multiple live-sample___repeat live-sample___func live-sample___auto
@layer no-support {
  @supports not (column-rule-style: solid, groove) {
    body::before {
      content: "Your browser doesn't support multiple values for the column-rule-style property";
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

- {{cssxref("column-rule-color")}}
- {{cssxref("column-rule-width")}}
- {{cssxref("row-rule-style")}}
- {{cssxref("column-rule")}} Kurzform
- {{cssxref("rule-style")}} Kurzform
- {{cssxref("rule")}} Kurzform
- [CSS-Gaps](/de/docs/Web/CSS/Guides/Gaps) Modul
