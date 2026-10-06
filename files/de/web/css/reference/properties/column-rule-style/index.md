---
title: "`column-rule-style` CSS property"
short-title: column-rule-style
slug: Web/CSS/Reference/Properties/column-rule-style
l10n:
  sourceCommit: 5fd3b03e9ad1ee4e8bc64d4f6888570690a7fbc8
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`column-rule-style`** legt den Linienstil der Linien fest, die zwischen Spalten in Grid-, Flex- und mehrspaltigen Layouts gezeichnet werden.

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

Die Eigenschaft `column-rule-style` akzeptiert eine kommagetrennte Liste von Werten, darunter:

- `<line-style>`
  - : Ein {{cssxref("&lt;line-style&gt;")}}: `none`, `hidden`, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset` oder `outset`. Der Standardwert ist `none`.

- `<repeat-line-style>`
  - : Eine {{cssxref("repeat()")}}-Funktion, deren erstes Argument ein {{cssxref("&lt;integer&gt;")}} mit dem Wert `1` oder höher ist. Die nachfolgenden Argumente sind {{cssxref("&lt;line-style&gt;")}}-Werte. Der ganzzahlige Wert gibt an, wie oft die `<line-style>`-Werte wiederholt werden.

- `<auto-repeat-line-style>`
  - : Eine {{cssxref("repeat()")}}-Funktion mit `auto` als erstem Argument und einem oder mehreren `<line-style>`-Werten als nachfolgenden Argumenten. Die angegebenen `<line-style>`-Werte werden so oft wiederholt, wie nötig ist, um Werte für alle Linien zwischen Spalten bereitzustellen, die nicht ausdrücklich durch andere Bestandteile des Eigenschaftswerts festgelegt sind.

## Beschreibung

Die Eigenschaft `column-rule-style` legt den Linienstil aller Linien fest, die in den Zwischenräumen zwischen Spalten von [mehrspaltigen](/de/docs/Web/CSS/Guides/Multicol_layout), [Flex-](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Grid-Containern](/de/docs/Web/CSS/Guides/Grid_layout) mit mehr als einer Spalte gezeichnet werden.

Der Wert ist eine kommagetrennte Liste von Bestandteilen, die `<line-style>`, `<repeat-line-style>` und `<auto-repeat-line-style>` enthalten kann.

`column-rule-style` kann zusammen mit den Eigenschaften {{cssxref("column-rule-color")}} und {{cssxref("column-rule-width")}} über die Kurzschreibweise {{cssxref("column-rule")}} festgelegt werden. Zusammen mit der Eigenschaft {{cssxref("row-rule-style")}} kann `column-rule-style` auch über die Kurzschreibweise {{cssxref("rule-style")}} festgelegt werden.

Enthält der Eigenschaftswert nur einen `<line-style>`, erhalten alle Linien zwischen den Spalten diesen Stil. Bei der folgenden Deklaration sind alle diese Linien `double`:

```css
column-rule-style: double;
```

Wenn mehrere `<line-style>`-Werte angegeben werden, werden sie in der angegebenen Reihenfolge auf die Linien zwischen den Spalten angewendet. Gibt es mehr Linien als `<line-style>`-Werte, wird die Liste der Linienstile wiederholt, bis jede Linie einen Stil hat. Bei der folgenden Deklaration ist beispielsweise jede ungerade Linie `double` und jede gerade Linie `groove`.

```css
column-rule-style: double, groove;
```

### Wiederholte Linienstile

Mit der Funktion `repeat()` und einer Ganzzahl von `1` oder höher als erstem Argument lässt sich eine gültige Liste von CSS-{{cssxref("&lt;line-style&gt;")}}-Werten, die als nachfolgende Argumente übergeben werden, die angegebene Anzahl von Malen wiederholen. So kann derselbe Stil mehrfach verwendet werden, ohne denselben Wert mehrfach anzugeben. Sie können `<line-style>`-Schlüsselwortwerte oder benutzerdefinierte Eigenschaften verwenden, die zu einem gültigen `<line-style>` aufgelöst werden. Mit `repeat()` lassen sich Werte einfacher schreiben, da wiederkehrende Muster unabhängig von der Anzahl der Spalten mit einer einzigen Funktion angegeben werden können. Die folgenden Deklarationen sind gleichwertig:

```css
column-rule-style: solid, outset, inset, outset, inset;
column-rule-style: solid, repeat(2, outset, inset);
```

Dadurch entsteht eine Liste mit fünf Stilen. Wenn die Anzahl der Stile in der Stilliste des `column-rule-style`-Werts die Anzahl der Zwischenräume zwischen den Spalten übersteigt, werden die überschüssigen Stilwerte ignoriert. Hat der Container drei Spalten, ist die Linie im ersten Zwischenraum `solid` und die im zweiten `outset`.

Gibt es mehr Zwischenräume als Stile, wird die Stilliste wiederholt. Hat der Container 6, 11, 16 oder 21 Spalten, wird diese Stilfolge entsprechend ein-, zwei-, drei- oder viermal wiederholt; die letzte Linie ist jeweils `inset`.

### Automatisch wiederholte Linienstile

Die Funktion `repeat()` akzeptiert als erstes Argument auch `auto` statt einer positiven Ganzzahl. Bei `auto` als erstem Argument werden die als nachfolgende Parameter übergebenen `<line-style>`-Werte so oft wiederholt, wie nötig ist, um Werte für alle Linien zwischen Spalten bereitzustellen, die nicht ausdrücklich durch andere Bestandteile des Eigenschaftswerts festgelegt sind.

```css
column-rule-style: solid, repeat(auto, dotted), solid;
```

In diesem Fall spielt es keine Rolle, ob der Container 3, 6, 11, 16 oder 21 Spalten hat: Die erste und die letzte Linie zwischen den Spalten sind immer `solid`, alle anderen sind `dotted`. Bei nur 2 oder 3 Spalten gibt es keine Linien mit dem Stil `dotted`.

Das Schlüsselwort `auto` innerhalb der Funktion `repeat()` erzeugt eine automatische Wiederholung, die Werte für Linien zwischen Spalten ergänzt, die andernfalls durch keinen anderen Teil der Liste einen Wert erhalten würden. Dadurch wird verhindert, dass die Liste von vorn durchlaufen wird. Innerhalb eines `column-rule-style`-Werts ist nur ein `repeat(auto, <line-style>)` zulässig.

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

Wir legen die Liste als Flex-Container fest und erzeugen Spalten, indem wir {{cssxref("flex-direction")}} mithilfe der Kurzschreibweise {{cssxref("flex-flow")}} auf `row` setzen. Mit einem {{cssxref("gap")}} von `5px` schaffen wir zwischen den Spalten genügend Platz für unsere doppelte, blaugrüne Linie mit einer Breite von `3px`:

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

Da es mehr Werte (10) als Zwischenräume (8) gibt, werden die Werte `none` und `hidden` nicht verwendet.

### Werte wiederholen

Dieses Beispiel zeigt, wie Werte wiederholt werden, wenn die Stilliste weniger Werte enthält, als es Linien zwischen den Spalten gibt.

#### CSS

Wir verwenden dasselbe HTML und CSS wie im vorherigen Beispiel und geben für `column-rule-style` drei kommagetrennte Stile an:

```css live-sample___repeat
ul {
  column-rule-style: solid, groove, double;
}
```

#### Ergebnis

{{EmbedLiveSample("Repeat", "", "180")}}

### Die Funktion `repeat()` verwenden

Dieses Beispiel zeigt die Verwendung der Funktion `repeat()` innerhalb des Eigenschaftswerts von `column-rule-style`.

#### CSS

Wir verwenden dasselbe HTML und CSS wie in den vorherigen Beispielen. Mit der Funktion `repeat()` legen wir fest, dass die Liste aus zwei `<line-style>`-Werten dreimal wiederholt wird.

```css live-sample___func live-sample___auto
ul {
  column-rule-style: solid, repeat(3, inset, outset), solid;
}
```

#### Ergebnis

{{EmbedLiveSample("func", "", "180")}}

Der Flex-Container hat sechs Spalten und somit fünf Zwischenräume. Die Funktion `repeat()` wiederholt zwei Stilwerte dreimal. Dadurch entsteht eine Liste mit acht Stilwerten, deren letzte drei Werte verworfen werden.

### `auto` innerhalb von `repeat()` verwenden

Dieses Beispiel zeigt die Verwendung von `auto` statt einer Ganzzahl innerhalb der Funktion `repeat()`.

#### CSS

Mit `repeat(auto, <line-style>)` setzen wir alle Linien zwischen den Spalten auf `groove`, mit Ausnahme der ersten und der letzten, die wir auf `solid` setzen.

```css live-sample___auto
ul {
  column-rule-style: solid, repeat(auto, groove), solid;
}
```

#### Ergebnis

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
- {{cssxref("column-rule")}}-Kurzschreibweise
- {{cssxref("rule-style")}}-Kurzschreibweise
- {{cssxref("rule")}}-Kurzschreibweise
- [CSS-Zwischenräume definieren](/de/docs/Web/CSS/Guides/Gaps/Defining_gaps)
- Modul [CSS-Zwischenräume](/de/docs/Web/CSS/Guides/Gaps)
