---
title: "`row-rule-width` CSS property"
short-title: row-rule-width
slug: Web/CSS/Reference/Properties/row-rule-width
l10n:
  sourceCommit: 5fd3b03e9ad1ee4e8bc64d4f6888570690a7fbc8
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`row-rule-width`** legt die Breite der Linien fest, die in mehrzeiligen Grid-, Flex- und Mehrspaltenlayouts zwischen den Zeilen gezeichnet werden.

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

Die Eigenschaft `row-rule-width` akzeptiert eine durch Kommas getrennte Liste von Werten, darunter:

- `<line-width>`
  - : Ein {{cssxref("&lt;line-width&gt;")}}: Dies kann eines der Schlüsselwörter `thin`, `medium` oder `thick` oder ein positiver {{cssxref("length")}}-Wert sein. Der Wert gibt die Breite der Linie an. Der Standardwert ist `medium`.

- `<repeat-line-width>`
  - : Eine {{cssxref("repeat()")}}-Funktion mit einem {{cssxref("&lt;integer&gt;")}}-Wert von mindestens `1` als erstem Argument und einem oder mehreren {{cssxref("&lt;line-width&gt;")}}-Werten als weiteren Argumenten. Die Ganzzahl legt fest, wie oft die `<line-width>`-Werte wiederholt werden.

- `<auto-repeat-line-width>`
  - : Eine {{cssxref("repeat()")}}-Funktion mit `auto` als erstem Argument und einem oder mehreren `<line-width>`-Werten als weiteren Argumenten. Die angegebenen `<line-width>`-Werte werden so oft wiederholt, wie nötig ist, um Werte für alle Zeilentrennlinien bereitzustellen, die nicht ausdrücklich durch andere Bestandteile des Eigenschaftswerts festgelegt sind.

## Beschreibung

Die Eigenschaft `row-rule-width` legt die Breite von Zeilentrennlinien fest, die in den Abständen zwischen Zeilen von [Mehrspalten-](/de/docs/Web/CSS/Guides/Multicol_layout), [Flex-](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Grid-Containern](/de/docs/Web/CSS/Guides/Grid_layout) mit mehr als einer Zeile gezeichnet werden.

Der Wert ist eine durch Kommas getrennte Liste von Bestandteilen der Typen `<line-width>`, `<repeat-line-width>` und `<auto-repeat-line-width>`.

Die Eigenschaft `row-rule-width` kann zusammen mit {{cssxref("row-rule-color")}} und {{cssxref("row-rule-style")}} über die Kurzschreibweise {{cssxref("row-rule")}} festgelegt werden. Zusammen mit {{cssxref("column-rule-width")}} kann `row-rule-width` auch über die Kurzschreibweise {{cssxref("rule-width")}} festgelegt werden.

Besteht der Eigenschaftswert nur aus einem `<line-width>`-Wert, haben alle Zeilentrennlinien diese Breite. Bei der folgenden Deklaration sind alle Zeilentrennlinien `3px` breit:

```css
row-rule-width: 3px;
```

Werden mehrere `<line-width>`-Werte angegeben, werden sie in der festgelegten Reihenfolge auf die Zeilentrennlinien angewendet. Gibt es mehr Zeilentrennlinien als `<line-width>`-Werte, wird die Liste der Linienbreiten wiederholt, bis jeder Linie eine Breite zugewiesen ist. Bei der folgenden Deklaration ist beispielsweise jede ungerade Zeilentrennlinie `thin` und jede gerade `1em` breit:

```css
row-rule-width: thin, 1em;
```

### Wiederholte Linienbreiten

Mit der Funktion `repeat()` und einer Ganzzahl von mindestens `1` als erstem Argument können Sie eine Liste gültiger CSS-{{cssxref("&lt;line-width&gt;")}}-Werte, die als weitere Argumente übergeben werden, die angegebene Anzahl von Malen wiederholen. So lassen sich dieselben Breiten mehrfach verwenden, ohne die Werte mehrfach auszuschreiben. Die folgenden Deklarationen sind gleichwertig:

```css
row-rule-width: 1rem, thick, thin, thick, thin;
row-rule-width: 1rem, repeat(2, thick, thin);
```

Sie können beliebige `<line-width>`-Werte verwenden, einschließlich benutzerdefinierter Eigenschaften, die zu einem `<line-width>`-Wert aufgelöst werden. `repeat()` kann das Schreiben von Werten erleichtern, insbesondere bei komplexen Längenberechnungen. Damit lässt sich ein wiederkehrendes Muster unabhängig von der Anzahl der Zeilen mit einer einzigen Funktion ausdrücken.

Wenn wir `--base: 1vh` und `--secondary: 1vw` festlegen, liefert die folgende Deklaration ähnliche Ergebnisse wie die vorherige:

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

Dadurch entsteht eine Liste mit sechs Breiten. Wenn die Liste im Wert von `row-rule-width` mehr Breiten enthält, als es Abstände zwischen den Zeilen gibt, werden die überzähligen Werte ignoriert. Hat der Container drei Zeilen, ist die Trennlinie im ersten Zwischenraum `1rem` breit; die Breite der zweiten wird durch die Funktion {{cssxref("min()")}} bestimmt.

Gibt es mehr Zwischenräume als Breiten, wird die Liste der Breiten wiederholt. Hat der Container 7, 13, 19 oder 25 Zeilen, wird diese Breitenfolge entsprechend ein-, zwei-, drei- oder viermal wiederholt, wobei die letzte Trennlinie jeweils `thin` ist.

### Automatisch wiederholte Linienbreiten

Die Funktion `repeat()` akzeptiert als erstes Argument auch `auto` anstelle einer positiven Ganzzahl. Mit `auto` werden die als weitere Argumente übergebenen `<line-width>`-Werte so oft wiederholt, wie nötig ist, um Werte für alle Zeilentrennlinien bereitzustellen, die nicht ausdrücklich durch andere Bestandteile des Eigenschaftswerts festgelegt sind.

```css
row-rule-width: thin, repeat(auto, medium), thin;
```

Dabei spielt es keine Rolle, ob der Container 3, 6, 11, 16 oder 21 Zeilen hat: Die erste und die letzte Zeilentrennlinie sind immer `thin`, alle anderen `medium`. Bei nur 2 oder 3 Zeilen gibt es keine Zeilentrennlinien mittlerer Breite.

Das Schlüsselwort `auto` innerhalb der Funktion `repeat()` erzeugt eine automatische Wiederholung. Sie füllt Werte für Zeilentrennlinien auf, denen durch andere Teile der Liste kein Wert zugewiesen würde, und verhindert so, dass die Liste von vorn wiederholt wird. Ein `row-rule-width`-Wert darf höchstens ein `repeat(auto, <width>)` enthalten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel legen wir eine einheitliche Breite für die Linien zwischen Flex-Elementen fest.

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

Wir definieren die Liste als Flex-Container und erzeugen Zeilen, indem wir {{cssxref("flex-direction")}} über die Kurzschreibweise {{cssxref("flex-flow")}} auf `column` setzen. Mit einem {{cssxref("gap")}} von `5px` schaffen wir zwischen den Zeilen genug Platz für die rote, gestrichelte Trennlinie mit einer Breite von `3px`:

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

### Werte wiederholen

Dieses Beispiel zeigt, wie die Werte wiederholt werden, wenn die Liste weniger Breitenwerte als Zeilentrennlinien enthält.

#### CSS

Wir verwenden dasselbe HTML und CSS wie im vorherigen Beispiel und geben für `row-rule-width` drei durch Kommas getrennte Breiten an:

```css live-sample___repeat
ul {
  row-rule-width: 1px, 3px, 5px;
}
```

#### Ergebnis

{{EmbedLiveSample("Repeat", "", "180")}}

### Die Funktion `repeat()` verwenden

Dieses Beispiel zeigt die Verwendung der Funktion `repeat()` im Wert von `row-rule-width` und wie sie Wertdeklarationen kürzer machen kann.

#### CSS

Wir verwenden dasselbe HTML und CSS wie in den vorherigen Beispielen. Um zu zeigen, wie umfangreich Wertdeklarationen werden können und welchen Nutzen `repeat()` bietet, deklarieren wir zwei benutzerdefinierte Eigenschaften und verwenden sie in `repeat()`-Aufrufen. Die Funktion `repeat()` legt eine Liste mit zwei `<line-width>`-Werten fest, die dreimal wiederholt wird.

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

#### Ergebnis

{{EmbedLiveSample("func", "", "180")}}

Der Flex-Container hat sechs Zeilen und damit fünf Zwischenräume. Die Funktion `repeat()` wiederholt zwei Breitenwerte dreimal und erzeugt so eine Liste mit acht Breitenwerten. Da es weniger Zwischenräume als Breitenwerte gibt, werden die letzten drei Werte der Liste verworfen.

### `auto` innerhalb von `repeat()` verwenden

Dieses Beispiel zeigt, wie Sie innerhalb der Funktion `repeat()` `auto` anstelle einer Ganzzahl verwenden.

#### CSS

Mit `repeat(auto, <line-width>)` setzen wir alle Zeilentrennlinien auf `1px`, mit Ausnahme der ersten und letzten, die wir auf `5px` setzen.

```css live-sample___auto
ul {
  row-rule-width: 5px, repeat(auto, 1px), 5px;
}
```

#### Ergebnis

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
- Kurzschreibweise {{cssxref("row-rule")}}
- Kurzschreibweise {{cssxref("rule-width")}}
- Kurzschreibweise {{cssxref("rule")}}
- [CSS-Abstände definieren](/de/docs/Web/CSS/Guides/Gaps/Defining_gaps)
- Modul [CSS-Abstände](/de/docs/Web/CSS/Guides/Gaps)
