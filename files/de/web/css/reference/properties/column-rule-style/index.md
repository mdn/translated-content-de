---
title: "`column-rule-style` CSS property"
short-title: column-rule-style
slug: Web/CSS/Reference/Properties/column-rule-style
l10n:
  sourceCommit: 5cf8432d980cbe9b7e5611d647d8566b5c4ff3ed
---

Die **`column-rule-style`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert den Linienstil der Linien, die zwischen den Spalten in Mehrspalten-, Flexbox- und Grid-Layouts gezogen werden.

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
/* One value */
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

Die `column-rule-style`-Eigenschaft akzeptiert eine durch Kommas getrennte Liste von Werten, einschließlich:

- `<line-style>`
  - : Ein {{cssxref("&lt;line-style&gt;")}}: einer von `none`, `hidden`, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset` oder `outset`. Der Standardwert ist `none`.

- `<repeat-line-style>`
  - : Eine {{cssxref("repeat()")}}-Funktion, bei der das erste Argument ein {{cssxref("&lt;integer&gt;")}} von `1` oder mehr ist und die nachfolgenden Argumente {{cssxref("&lt;line-style&gt;")}}-Werte sind. Die Ganzzahl gibt an, wie oft die `<line-style>`-Werte wiederholt werden sollen.

- `<auto-repeat-line-style>`
  - : Eine {{cssxref("repeat()")}}-Funktion mit `auto` als erstem Argument und einem oder mehreren `<line-style>`-Werten als nachfolgende Argumente. Die angegebenen `<line-style>`-Werte werden so oft wiederholt, wie nötig, um Werte für alle Spaltenregeln zu füllen, die nicht explizit durch andere Komponenten des Eigenschaftswerts festgelegt sind.

## Beschreibung

Die `column-rule-style`-Eigenschaft definiert den Linienstil von jeglichen Spaltenregel-Linien, die in den Lücken zwischen den Spalten in [Mehrspalten-](/de/docs/Web/CSS/Guides/Multicol_layout), [Flexbox-](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Grid-](/de/docs/Web/CSS/Guides/Grid_layout) Containern mit mehr als einer Spalte gezeichnet werden.

Der Wert ist eine durch Kommas getrennte Liste von Komponenten, die `<line-style>`, `<repeat-line-style>` und `<auto-repeat-line-style>`-Typen enthalten kann.

Die `column-rule-style`-Eigenschaft, zusammen mit den Eigenschaften {{cssxref("column-rule-color")}} und {{cssxref("column-rule-width")}}, kann mit dem Kurzschreibwert {{cssxref("column-rule")}} gesetzt werden. Die `column-rule-style` kann zusammen mit der Eigenschaft {{cssxref("row-rule-style")}} auch mit dem Kurzschreibwert {{cssxref("rule-style")}} gesetzt werden.

Hat der Eigenschaftswert nur einen `<line-style>`, werden alle Spaltenregeln diesen Stil haben. Wenn wir folgendes deklarieren, werden alle Spaltenregeln `double`:

```css
column-rule-style: double;
```

Wenn mehr als ein `<line-style>` deklariert ist, werden sie in der angegebenen Reihenfolge auf die Spaltenregeln angewendet. Gibt es mehr Spaltenregeln als `<line-style>`-Werte, wird die Liste der Linienstile wiederholt, bis jede Spalte einen Stil hat. Wenn wir folgendes deklarieren, wird jede ungerade Regel `double` und jede gerade Regel `groove`.

```css
column-rule-style: double, groove;
```

### Wiederholte Linienstile

Die `repeat()`-Funktion, bei der eine Ganzzahl von `1` oder größer als erstes Argument verwendet wird, kann verwendet werden, um eine gültige Liste von CSS-{{cssxref("&lt;line-style&gt;")}}-Werten, die als nachfolgende Argumente übergeben werden, die angegebene Anzahl von Malen zu wiederholen. Dies ermöglicht das Wiederholen desselben Stils eine festgelegte Anzahl von Malen, ohne denselben Wert zu wiederholen. Sie können `<line-style>`-Schlüsselwortwerte oder benutzerdefinierte Eigenschaften einschließen, die auf einen gültigen `<line-style>` aufgelöst werden. Die Verwendung von `repeat()` kann es erleichtern, Werte zu schreiben, da wiederkehrende Muster mit einer einzigen Funktion geschrieben werden können, unabhängig von der Anzahl der Spalten. Die folgenden Deklarationen sind äquivalent:

```css
column-rule-style: solid, outset, inset, outset, inset;
column-rule-style: solid, repeat(2, outset, inset);
```

Dies erstellt eine Liste von fünf Stilen. Wenn die Anzahl der Stile in der Stilliste des `column-rule-style`-Werts die Anzahl der Spaltenlücken übersteigt, werden die überflüssigen Stilwerte ignoriert. Wenn der Container drei Spalten hat, wird die Regel in der ersten Lücke `solid` und die zweite `outset`.

Gibt es mehr Lücken als Stile, wird die Stilenliste wiederholt. Wenn der Container 6, 11, 16 oder 21 Spalten hat, wird diese Sequenz von Stilen ein-, zwei-, drei- oder viermal wiederholt, wobei die letzte Regel `inset` ist.

### Automatisch wiederholte Linienstile

Die `repeat()`-Funktion akzeptiert auch `auto` als erstes Argument anstelle einer positiven Ganzzahl. Mit `auto` als erstes Argument werden die `<line-style>`-Werte, die als nachfolgende Parameter übergeben werden, so oft wiederholt, wie nötig, um die Werte für alle Spaltenregeln zu füllen, die nicht explizit durch andere Komponenten des Eigenschaftswerts festgelegt sind.

```css
column-rule-style: solid, repeat(auto, dotted), solid;
```

In diesem Fall spielt es keine Rolle, ob der Container 3, 6, 11, 16 oder 21 Spalten hat; die erste und letzte Spaltenregel wird immer `solid` sein, und alle anderen Spaltenregeln werden `dotted` sein. Gibt es nur 2 oder 3 Spalten, gibt es keine gepunkteten Spaltenregeln.

Das `auto`-Schlüsselwort innerhalb der `repeat()`-Funktion erstellt einen automatischen Wiederholer, der Werte für Spaltenregeln auffüllt, die sonst keine Werte von anderen Teilen der Liste erhalten würden, und verhindert, dass die Liste durchlaufen wird. Es ist nur ein `repeat(auto, <line-style>)` innerhalb eines `column-rule-style`-Werts erlaubt.

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

Wir fügen eine Liste von Autoren hinzu:

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

Wir definieren die Liste als Flex-Container, indem wir Spalten erstellen, indem wir die {{cssxref("flex-direction")}} auf `row` mit der Kurzschreibweise {{cssxref("flex-flow")}} setzen. Wir fügen eine {{cssxref("gap")}} von `5px` hinzu, um genügend Platz zwischen den Spalten zu schaffen, um unsere `3px` doppelte Teal-Regel zu integrieren:

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

### Wiederholende Werte

Dieses Beispiel zeigt, wie bei weniger Werten in der Stilenliste als Spaltenregeln die Werte wiederholt werden.

Mit demselben HTML und CSS wie im vorherigen Beispiel fügen wir drei durch Kommas getrennte Stile als `column-rule-style`-Wert hinzu:

```css live-sample___repeat
ul {
  column-rule-style: solid, groove, double;
}
```

{{EmbedLiveSample("Repeat", "", "180")}}

### Verwendung der `repeat()`-Funktion

Dieses Beispiel zeigt die Verwendung der `repeat()`-Funktion innerhalb des `column-rule-style`-Eigenschaftswerts. Wir verwenden dasselbe HTML und CSS wie in den vorherigen Beispielen. Wir fügen eine `repeat()`-Funktion hinzu und legen fest, dass die Liste von zwei `<line-style>`-Werten dreimal wiederholt werden soll.

```css live-sample___func live-sample___auto
ul {
  column-rule-style: solid, repeat(3, inset, outset), solid;
}
```

{{EmbedLiveSample("func", "", "180")}}

Der Flex-Container hat sechs Spalten, also fünf Lücken. Die `repeat()`-Funktion wiederholt zwei Stilwerte dreimal und erstellt eine Liste von acht Stilwerten, daher werden die letzten drei Werte in der Liste verworfen.

### Verwendung von `auto` innerhalb von `repeat()`

Dieses Beispiel zeigt die Verwendung von `auto` anstelle einer Ganzzahl innerhalb der `repeat()`-Funktion.

Indem wir `repeat(auto, <line-style>)` verwenden, setzen wir alle Spaltenregeln auf `groove`, außer der ersten und der letzten, die wir auf `solid` setzen.

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
- {{cssxref("column-rule")}} Kurzschreibweise
- {{cssxref("rule-style")}} Kurzschreibweise
- {{cssxref("rule")}} Kurzschreibweise
- [CSS Lücken](/de/docs/Web/CSS/Guides/Gaps) Modul
