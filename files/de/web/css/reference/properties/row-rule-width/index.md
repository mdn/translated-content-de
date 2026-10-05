---
title: "`row-rule-width` CSS property"
short-title: row-rule-width
slug: Web/CSS/Reference/Properties/row-rule-width
l10n:
  sourceCommit: 04dfe418f2942ae739d41592c22fafa3679fc03c
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`row-rule-width`** legt die Breite der Linien fest, die in mehrzeiligen Grid-, Flex- und mehrspaltigen Layouts zwischen den Zeilen gezeichnet werden.

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
  - : Ein {{cssxref("&lt;line-width&gt;")}}-Wert: Dies kann eines der Schlüsselwörter `thin`, `medium` oder `thick` oder ein positiver {{cssxref("length")}}-Wert sein, der die Breite der Linie angibt. Der Standardwert ist `medium`.

- `<repeat-line-width>`
  - : Eine {{cssxref("repeat()")}}-Funktion mit einem {{cssxref("&lt;integer&gt;")}}-Wert von mindestens `1` als erstem Argument und einem oder mehreren {{cssxref("&lt;line-width&gt;")}}-Werten als weiteren Argumenten. Der Integer-Wert legt fest, wie oft die `<line-width>`-Werte wiederholt werden.

- `<auto-repeat-line-width>`
  - : Eine {{cssxref("repeat()")}}-Funktion mit `auto` als erstem Argument und einem oder mehreren `<line-width>`-Werten als weiteren Argumenten. Die angegebenen `<line-width>`-Werte werden so oft wiederholt, wie nötig ist, um Werte für alle Zeilentrennlinien bereitzustellen, die nicht ausdrücklich durch andere Bestandteile des Eigenschaftswerts festgelegt sind.

## Beschreibung

Die Eigenschaft `row-rule-width` legt die Breite von Zeilentrennlinien fest, die in den Abständen zwischen Zeilen von [mehrspaltigen](/de/docs/Web/CSS/Guides/Multicol_layout), [Flex-](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Grid-Containern](/de/docs/Web/CSS/Guides/Grid_layout) mit mehr als einer Zeile gezeichnet werden.

Der Wert ist eine durch Kommas getrennte Liste von Bestandteilen der Typen `<line-width>`, `<repeat-line-width>` und `<auto-repeat-line-width>`.

`row-rule-width` kann zusammen mit den Eigenschaften {{cssxref("row-rule-color")}} und {{cssxref("row-rule-style")}} über die Kurzschreibweise {{cssxref("row-rule")}} festgelegt werden. Zusammen mit der Eigenschaft {{cssxref("column-rule-width")}} kann `row-rule-width` auch über die Kurzschreibweise {{cssxref("rule-width")}} festgelegt werden.

Besteht der Eigenschaftswert nur aus einem `<line-width>`-Wert, haben alle Zeilentrennlinien diese Breite. Mit der folgenden Deklaration sind alle Zeilentrennlinien `3px` breit:

```css
row-rule-width: 3px;
```

Werden mehrere `<line-width>`-Werte angegeben, werden sie in der angegebenen Reihenfolge auf die Zeilentrennlinien angewendet. Gibt es mehr Zeilentrennlinien als `<line-width>`-Werte, wird die Liste der Linienbreiten wiederholt, bis jeder Trennlinie eine Breite zugewiesen ist. Bei der folgenden Deklaration ist beispielsweise jede ungerade Trennlinie `thin` und jede gerade Trennlinie `1em` breit:

```css
row-rule-width: thin, 1em;
```

### Wiederholte Linienbreiten

Mit der Funktion `repeat()` und einem Integer-Wert von mindestens `1` als erstem Argument lässt sich eine gültige Liste von CSS-{{cssxref("&lt;line-width&gt;")}}-Werten, die als weitere Argumente übergeben werden, so oft wie angegeben wiederholen. Dadurch können dieselben Breiten mehrfach verwendet werden, ohne die Werte wiederholt ausschreiben zu müssen. Die folgenden Deklarationen sind gleichwertig:

```css
row-rule-width: 1rem, thick, thin, thick, thin;
row-rule-width: 1rem, repeat(2, thick, thin);
```

Sie können beliebige `<line-width>`-Werte verwenden, einschließlich benutzerdefinierter Eigenschaften, deren Wert zu einem `<line-width>`-Wert aufgelöst wird. `repeat()` kann das Schreiben von Werten vereinfachen, insbesondere bei komplexen Längenberechnungen. Damit lässt sich ein wiederkehrendes Muster unabhängig von der Anzahl der Zeilen mit einer einzigen Funktion angeben.

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

Dadurch entsteht eine Liste mit sechs Breiten. Enthält die Breitenliste des `row-rule-width`-Werts mehr Einträge als es Abstände zwischen den Zeilen gibt, werden die überschüssigen Breitenwerte ignoriert. Hat der Container drei Zeilen, ist die Trennlinie im ersten Zwischenraum `1rem` breit; die Breite der zweiten wird durch die Funktion {{cssxref("min()")}} bestimmt.

Gibt es mehr Zwischenräume als Breiten, wird die Breitenliste wiederholt. Hat der Container 7, 13, 19 beziehungsweise 25 Zeilen, wird diese Breitenfolge ein-, zwei-, drei- beziehungsweise viermal wiederholt. Die letzte Trennlinie ist dabei jeweils `thin`.

### Automatisch wiederholte Linienbreiten

Die Funktion `repeat()` akzeptiert als erstes Argument statt eines positiven Integer-Werts auch `auto`. In diesem Fall wird die als weitere Argumente übergebene Liste von `<line-width>`-Werten so oft wiederholt, wie nötig ist, um Werte für alle Zeilentrennlinien bereitzustellen, die nicht ausdrücklich durch andere Bestandteile des Eigenschaftswerts festgelegt sind.

```css
row-rule-width: thin, repeat(auto, medium), thin;
```

In diesem Fall spielt es keine Rolle, ob der Container 3, 6, 11, 16 oder 21 Zeilen hat: Die erste und die letzte Zeilentrennlinie sind immer `thin`, alle anderen Zeilentrennlinien `medium`. Bei nur 2 oder 3 Zeilen gibt es keine Zeilentrennlinien mit der Breite `medium`.

Das Schlüsselwort `auto` innerhalb der Funktion `repeat()` erzeugt eine automatische Wiederholung, die Werte für Zeilentrennlinien bereitstellt, denen andernfalls kein Wert aus anderen Teilen der Liste zugewiesen würde. Dadurch wird verhindert, dass die Liste zyklisch wiederholt wird. Ein `row-rule-width`-Wert darf höchstens ein `repeat(auto, <width>)` enthalten.

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

Wir definieren die Liste als Flex-Container und erzeugen Zeilen, indem wir {{cssxref("flex-direction")}} mithilfe der Kurzschreibweise {{cssxref("flex-flow")}} auf `column` setzen. Mit einem {{cssxref("gap")}} von `5px` schaffen wir zwischen den Zeilen genügend Platz für die rote, gestrichelte Trennlinie mit einer Breite von `3px`:

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

Dieses Beispiel zeigt, wie die Werte wiederholt werden, wenn die Breitenliste weniger Werte enthält, als Zeilentrennlinien vorhanden sind.

Wir verwenden dasselbe HTML und CSS wie im vorherigen Beispiel und geben für `row-rule-width` drei durch Kommas getrennte Breiten an:

```css live-sample___repeat
ul {
  row-rule-width: 1px, 3px, 5px;
}
```

{{EmbedLiveSample("Repeat", "", "180")}}

### Die Funktion `repeat()` verwenden

Dieses Beispiel zeigt, wie die Funktion `repeat()` innerhalb des Eigenschaftswerts von `row-rule-width` verwendet wird und wie sie Wertdeklarationen kürzer machen kann.

Wir verwenden dasselbe HTML und CSS wie in den vorherigen Beispielen. Um zu zeigen, wie lang Wertangaben werden können und welchen Nutzen die Funktion `repeat()` bietet, deklarieren wir zwei benutzerdefinierte Eigenschaften und verwenden sie in `repeat()`-Funktionsaufrufen. Die Funktion `repeat()` legt fest, dass eine Liste aus zwei `<line-width>`-Werten dreimal wiederholt wird.

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

Der Flex-Container hat sechs Zeilen und damit fünf Zwischenräume. Die Funktion `repeat()` wiederholt zwei Breitenwerte dreimal und erzeugt so eine Liste mit acht Breitenwerten. Da es weniger Zwischenräume als Breitenwerte gibt, werden die letzten drei Werte der Liste verworfen.

### `auto` innerhalb von `repeat()` verwenden

Dieses Beispiel zeigt, wie `auto` statt eines Integer-Werts innerhalb der Funktion `repeat()` verwendet wird.

Mit `repeat(auto, <line-width>)` setzen wir alle Zeilentrennlinien auf `1px`, mit Ausnahme der ersten und der letzten, die wir auf `5px` setzen.

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
- Kurzschreibweise {{cssxref("row-rule")}}
- Kurzschreibweise {{cssxref("rule-width")}}
- Kurzschreibweise {{cssxref("rule")}}
- [CSS-Abstände definieren](/de/docs/Web/CSS/Guides/Gaps/Defining_gaps)
- Modul [CSS-Abstände](/de/docs/Web/CSS/Guides/Gaps)
