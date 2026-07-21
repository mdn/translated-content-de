---
title: "`row-rule-style` CSS property"
short-title: row-rule-style
slug: Web/CSS/Reference/Properties/row-rule-style
l10n:
  sourceCommit: 5cf8432d980cbe9b7e5611d647d8566b5c4ff3ed
---

Die **`row-rule-style`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert den Linienstil der Linien, die zwischen Reihen in mehrreihigen Raster-, Flex- und Mehrspalten-Layouts gezeichnet werden.

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

Die `row-rule-style` Eigenschaft akzeptiert eine kommagetrennte Liste von Werten, darunter:

- `<line-style>`
  - : Ein {{cssxref("&lt;line-style&gt;")}}: einer von `none`, `hidden`, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset` oder `outset`. Der Standardwert ist `none`.

- `<repeat-line-style>`
  - : Eine {{cssxref("repeat()")}} Funktion, bei der das erste Argument ein {{cssxref("&lt;integer&gt;")}} von `1` oder mehr ist, und die nachfolgenden Argumente Werte von {{cssxref("&lt;line-style&gt;")}} sind. Der Ganzzahlwert gibt an, wie oft die `<line-style>` Werte wiederholt werden sollen.

- `<auto-repeat-line-style>`
  - : Eine {{cssxref("repeat()")}} Funktion, bei der `auto` als erstes Argument angegeben ist und ein oder mehrere `<line-style>` Werte als nachfolgende Argumente angegeben sind. Die angegebenen `<line-style>` Werte werden so oft wiederholt, wie nötig, um Werte für alle Zeilenregeln zu füllen, die nicht explizit durch andere Komponenten des Eigenschaftswerts angegeben sind.

## Beschreibung

Die `row-rule-style` Eigenschaft definiert den Linienstil von Zeilenregeln, die in den Lücken zwischen Reihen in [mehrspaltigen](/de/docs/Web/CSS/Guides/Multicol_layout), [Flex](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Raster](/de/docs/Web/CSS/Guides/Grid_layout) Containern mit mehr als einer Reihe gezeichnet werden.

Der Wert ist eine kommagetrennte Liste von Komponenten, die `<line-style>`, `<repeat-line-style>` und `<auto-repeat-line-style>` Typen enthalten kann.

Die `row-rule-style` kann zusammen mit den Eigenschaften {{cssxref("row-rule-color")}} und {{cssxref("row-rule-width")}} mit der Abkürzung {{cssxref("row-rule")}} gesetzt werden. Die `row-rule-style` kann zusammen mit der Eigenschaft {{cssxref("column-rule-style")}} auch mit der Abkürzung {{cssxref("rule-style")}} gesetzt werden.

Wenn der Eigenschaftswert nur einen `<line-style>` hat, werden alle Zeilenregeln diesen Stil haben. Wenn wir folgendes angeben, werden alle Zeilenregeln `dashed` sein:

```css
row-rule-style: dashed;
```

Wenn mehr als ein `<line-style>` angegeben wird, werden sie in der angegebenen Reihenfolge auf Zeilenregeln angewendet. Wenn es mehr Zeilenregeln als `<line-style>` Werte gibt, wird die Liste der Linienstile wiederholt, bis jede Zeilenregel einen Stil hat. Wenn wir zum Beispiel folgendes angeben, wird jede ungerade Regel `dashed` und jede gerade Regel `dotted` sein.

```css
row-rule-style: dashed, dotted;
```

### Wiederholte Linienstile

Die `repeat()` Funktion mit einer Ganzzahl von `1` oder mehr als erstes Argument kann verwendet werden, um eine gültige Liste von CSS {{cssxref("&lt;line-style&gt;")}} Werten, die als nachfolgende Argumente übergeben werden, die angegebene Anzahl von Malen zu wiederholen. Dies ermöglicht es, denselben Stil eine festgelegte Anzahl von Malen zu wiederholen, ohne denselben Wert zu wiederholen. Sie können `<line-style>` Schlüsselwortwerte oder benutzerdefinierte Eigenschaften einschließen, die sich zu einem gültigen `<line-style>` auflösen. Die Verwendung von `repeat()` kann es einfacher machen, Werte zu schreiben, indem wiederkehrende Muster mit einer einzigen Funktion geschrieben werden können, unabhängig von der Anzahl der Reihen. Die folgenden Deklarationen sind gleichwertig:

```css
row-rule-style: solid, outset, inset, outset, inset;
row-rule-style: solid, repeat(2, outset, inset);
```

Dies erstellt eine Liste von fünf Stilen. Wenn die Anzahl der Stile in der `row-rule-style` Wertliste die Anzahl der Lücken zwischen den Reihen überschreitet, werden die überschüssigen Stilwerte ignoriert. Wenn der Container drei Reihen hat, ist die Regel in der ersten Rinne `solid` und die zweite `outset`.

Wenn es mehr Rinnen als Stile gibt, wird die Liste der Stile wiederholt. Wenn der Container 6, 11, 16 oder 21 Reihen hat, wird diese Abfolge von Stilen einmal, zweimal, dreimal oder viermal wiederholt, wobei die letzte Regel `inset` ist.

### Automatisch wiederholte Linienstile

Die `repeat()` Funktion akzeptiert auch `auto` als erstes Argument anstelle einer positiven Ganzzahl. Mit `auto` als erstes Argument werden die `<line-style>` Werte, die als nachfolgende Parameter übergeben werden, so oft wiederholt, wie es nötig ist, um Werte für alle Zeilenregeln zu füllen, die nicht explizit durch andere Komponenten des Eigenschaftswerts angegeben sind.

```css
row-rule-style: solid, repeat(auto, dotted), solid;
```

In diesem Fall spielt es keine Rolle, ob der Container 3, 6, 11, 16 oder 21 Reihen hat; die erste und letzte Zeilenregel wird immer `solid` sein, und alle anderen Zeilenregeln werden `dotted` sein. Wenn es nur 2 oder 3 Reihen gibt, werden keine punktierten Zeilenregeln vorhanden sein.

Das `auto` Schlüsselwort innerhalb der `repeat()` Funktion erstellt einen automatischen Wiederholer, der Werte für Zeilenregeln füllt, die andernfalls keine Werte aus anderen Teilen der Liste erhalten würden, wodurch verhindert wird, dass die Liste durchlaufen wird. Innerhalb eines `row-rule-style` Werts ist nur ein `repeat(auto, <line-style>)` erlaubt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel definieren wir einen einzigen Stil für die Linien, die zwischen Flex-Elementen gezeichnet werden.

#### HTML

Wir fügen eine Liste dynamischer Sportduos hinzu:

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

Wir definieren die Liste als Flex-Container, indem wir Reihen erstellen, indem wir die {{cssxref("flex-direction")}} mit der Abkürzung {{cssxref("flex-flow")}} auf `column` setzen. Wir fügen einen {{cssxref("gap")}} von `5px` ein, um genügend Platz zwischen den Reihen zu schaffen, um unsere `3px` gestrichelte rote Regel zu platzieren:

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

Dieses Beispiel zeigt, wie die Werte wiederholt werden, wenn in der Liste der Stile weniger Werte vorhanden sind als Zeilenregeln.

Mit demselben HTML und CSS wie im vorherigen Beispiel fügen wir drei kommagetrennte Stile als `row-rule-style` Wert hinzu:

```css live-sample___repeat
ul {
  row-rule-style: solid, dotted, dashed;
}
```

{{EmbedLiveSample("Repeat", "", "180")}}

### Verwendung der `repeat()` Funktion

Dieses Beispiel zeigt die Verwendung der `repeat()` Funktion innerhalb des `row-rule-style` Eigenschaftswerts. Wir verwenden dasselbe HTML und CSS wie in den vorherigen Beispielen. Wir fügen eine `repeat()` Funktion hinzu, die die Liste von zwei `<line-style>` Werten auf 3 mal wiederholt.

```css live-sample___func live-sample___auto
ul {
  row-rule-style: double, repeat(3, inset, dashed), double;
}
```

{{EmbedLiveSample("func", "", "180")}}

Der Flex-Container hat sechs Reihen, also fünf Rinnen. Die `repeat()` Funktion wiederholt zwei Stilwerte dreimal und erstellt eine Liste von acht Stilwerten, sodass die letzten drei Werte in der Liste verworfen werden.

### Verwendung von `auto` innerhalb von `repeat()`

Dieses Beispiel zeigt die Verwendung von `auto` anstelle einer Ganzzahl innerhalb der `repeat()` Funktion.

Mit `repeat(auto, <line-style>)` setzen wir alle Zeilenregeln auf `dotted`, außer der ersten und der letzten, die wir auf `solid` setzen.

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
- {{cssxref("row-rule")}} Abkürzung
- {{cssxref("rule-style")}} Abkürzung
- {{cssxref("rule")}} Abkürzung
- [CSS Lücken](/de/docs/Web/CSS/Guides/Gaps) Modul
