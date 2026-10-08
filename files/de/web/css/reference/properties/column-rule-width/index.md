---
title: "`column-rule-width` CSS property"
short-title: column-rule-width
slug: Web/CSS/Reference/Properties/column-rule-width
l10n:
  sourceCommit: d3a0fd9820ca27a3f17642841af8426735cb4ec3
---

Die [CSS-Eigenschaft](/de/docs/Web/CSS) **`column-rule-width`** definiert die Breite der Linien zwischen Spalten in mehrspaltigen Grid-, Flex- und Multi-Column-Layouts.

{{InteractiveExample("CSS Demo: column-rule-width")}}

```css interactive-example-choice
column-rule-width: thin;
```

```css interactive-example-choice
column-rule-width: 4px;
```

```css interactive-example-choice
column-rule-width: thin, medium, thick;
```

```css interactive-example-choice
column-rule-width: repeat(2, 1px, thick), 10px;
```

```css interactive-example-choice
column-rule-width: 10px, repeat(auto, 1px, 2px), 10px;
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
  column-rule-style: solid;
  column-rule-color: teal;
  gap: 7px;
}
```

## Syntax

```css
/* Keyword values */
column-rule-width: thin;
column-rule-width: medium;
column-rule-width: thick;
column-rule-width: thin, medium, thick;
column-rule-width: thick, repeat(5, thin), thick;
column-rule-width: thick, repeat(auto, thin, medium), thick;

/* Length values */
column-rule-width: 0.1em;
column-rule-width: 5px;
column-rule-width: 1px, 3px, 5px;
column-rule-width: 0.1rem, repeat(auto, 1px), 10px, 0.5rem;
column-rule-width: 5px, repeat(5, 1px, 3px), 5px;

/* Global values */
column-rule-width: inherit;
column-rule-width: initial;
column-rule-width: revert;
column-rule-width: revert-layer;
column-rule-width: unset;
```

### Werte

Die Eigenschaft `column-rule-width` akzeptiert eine durch Kommas getrennte Liste von Werten, darunter:

- {{cssxref("&lt;line-width&gt;")}}
  - : Definiert die Breite der Linie, entweder als expliziten, nicht negativen {{cssxref("&lt;length&gt;")}}-Wert oder mit einem der Schlüsselwörter `thin`, `medium` oder `thick`. Der Standardwert ist `medium`.
- `<repeat-line-width>`
  - : Eine {{cssxref("repeat()")}}-Funktion, deren erstes Argument ein {{cssxref("&lt;integer&gt;")}}-Wert von mindestens `1` ist und auf den ein oder mehrere {{cssxref("&lt;line-width&gt;")}}-Werte folgen. Die Ganzzahl gibt an, wie oft die `<line-width>`-Werte wiederholt werden.
- `<auto-repeat-line-width>`
  - : Eine {{cssxref("repeat()")}}-Funktion mit `auto` als erstem Argument und einem oder mehreren `<line-width>`-Werten als weiteren Argumenten. Die angegebenen `<line-width>`-Werte werden so oft wiederholt, wie es nötig ist, um Werte für alle column-rules bereitzustellen, die nicht durch andere Bestandteile des Eigenschaftswerts ausdrücklich festgelegt sind.

## Beschreibung

Die Eigenschaft `column-rule-width` definiert die Breite der Linien in den Zwischenräumen zwischen benachbarten Spalten von [mehrspaltigen](/de/docs/Web/CSS/Guides/Multicol_layout), [Flex-](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Grid-Containern](/de/docs/Web/CSS/Guides/Grid_layout) mit mehr als einer Spalte.

> [!NOTE]
> `column-rule-width` definiert nur die Breite der Linien, die in den Zwischenräumen gezeichnet werden. Diese Linien wirken sich weder auf das [Box-Modell](/de/docs/Web/CSS/Guides/Box_model/Introduction) noch auf das Layout aus. Die Größe des Zwischenraums wird durch die Eigenschaft {{cssxref("gap")}} bestimmt. Ihr Standardwert beträgt in mehrspaltigen Containern `1em` und in allen anderen Kontexten `0`. Ist eine Linie breiter als der durch {{cssxref("gap")}} festgelegte Zwischenraum, wird sie hinter dem Spalteninhalt gezeichnet.

Der Wert ist eine durch Kommas getrennte Liste von Bestandteilen der Typen `<line-width>`, `<repeat-line-width>` und `<auto-repeat-line-width>`.

`column-rule-width` kann zusammen mit den Eigenschaften {{cssxref("column-rule-color")}} und {{cssxref("column-rule-style")}} auch über die Kurzschreibweise {{cssxref("column-rule")}} festgelegt werden. {{cssxref("rule-width")}} ist eine Kurzschreibweise, die sowohl `column-rule-width` als auch {{cssxref("row-rule-width")}} festlegt.

Für `<line-width>` kann jeder gültige CSS-Wert des Typs {{cssxref("&lt;line-width&gt;")}} angegeben werden: eines der Schlüsselwörter `thin`, `medium` oder `thick` oder ein positiver {{cssxref("length")}}-Wert. Prozentwerte sind ungültig.

Besteht der Eigenschaftswert nur aus einem `<line-width>`-Wert, erhalten alle Linien zwischen den Spalten diese Breite. Bei der folgenden Deklaration sind alle Linien `2px` breit:

```css
column-rule-width: 2px;
```

Werden mehrere `<line-width>`-Werte angegeben, gelten sie für die Linien zwischen den Spalten in der angegebenen Reihenfolge. Gibt es mehr Linien als `<line-width>`-Werte, wird die Liste der Breiten wiederholt, bis jeder Linie eine Breite zugewiesen ist. Bei der folgenden Deklaration ist beispielsweise jede ungerade Linie `thick` und jede gerade Linie `0.25rem` breit:

```css
column-rule-width: thick, 0.25rem;
```

### Wiederholte Linienbreiten

Mit der Funktion `repeat()` und einer Ganzzahl von mindestens `1` als erstem Argument lässt sich eine Liste gültiger CSS-{{cssxref("&lt;line-width&gt;")}}-Werte, die als weitere Argumente übergeben werden, eine festgelegte Anzahl von Malen wiederholen. So kann dieselbe Breite mehrfach verwendet werden, ohne denselben `<line-width>`-Wert mehrfach anzugeben. Die folgenden Deklarationen sind gleichwertig:

```css
column-rule-width: 1rem, thick, thin, thick, thin, thick, thin;
column-rule-width: 1rem, repeat(3, thick, thin);
```

Sie können beliebige `<line-width>`-Werte verwenden, einschließlich benutzerdefinierter Eigenschaften, die zu einem `<line-width>`-Wert aufgelöst werden. `repeat()` kann die Angabe von Werten vereinfachen, insbesondere bei komplexen Längenberechnungen. Damit lässt sich ein wiederkehrendes Muster unabhängig von der Anzahl der Spalten mit einer einzigen Funktion schreiben. Die folgenden Deklarationen sind gleichwertig:

```css
column-rule-width:
  1rem, min(calc(var(--base) - 3px), 10px), abs(calc(var(--secondary) - 30px)),
  min(calc(var(--base) - 3px), 10px), abs(calc(var(--secondary) - 30px)),
  min(calc(var(--base) - 3px), 10px), abs(calc(var(--secondary) - 30px)),
  min(calc(var(--base) - 3px), 10px), abs(calc(var(--secondary) - 30px)),
  min(calc(var(--base) - 3px), 10px), abs(calc(var(--secondary) - 30px)), thin;
column-rule-width:
  1rem,
  repeat(
    5,
    min(calc(var(--base) - 3px), 10px),
    abs(calc(var(--secondary) - 30px))
  ),
  thin;
```

Dadurch entsteht eine Liste mit 12 Breiten. Enthält die Breitenliste des `column-rule-width`-Werts mehr Werte als Zwischenräume zwischen den Spalten vorhanden sind, werden die überzähligen Werte ignoriert. Hat der Container drei Spalten, ist die Linie im ersten Zwischenraum `1rem` breit; die Breite der zweiten wird durch die Funktion {{cssxref("min()")}} bestimmt.

Gibt es mehr Zwischenräume als Breiten, wird die Breitenliste wiederholt. Hat der Container 13 oder 25 Spalten, wird diese Breitenfolge entsprechend ein- oder zweimal wiederholt, und die letzte Linie hat den Wert `thin`. Bei jeder anderen Spaltenanzahl bis 25 hat die letzte Linie nicht den Wert `thin`.

### Automatisch wiederholte Linienbreiten

Die Funktion `repeat()` akzeptiert als erstes Argument auch `auto` anstelle einer positiven Ganzzahl. Bei `auto` werden die als weitere Argumente übergebenen `<line-width>`-Werte so oft wiederholt, wie es nötig ist, um Werte für alle Linien zwischen den Spalten bereitzustellen, die nicht durch andere Bestandteile des Eigenschaftswerts ausdrücklich festgelegt sind.

```css
column-rule-width: 10px, repeat(auto, thin), 10px;
```

In diesem Fall sind die erste und die letzte Linie zwischen den Spalten jeweils `10px` breit, alle anderen haben den Wert `thin`. Unabhängig davon, ob der Container 3, 6, 11, 16 oder 21 Spalten hat, sind die erste und die letzte Linie stets `10px` breit. Bei nur 2 oder 3 Spalten gibt es somit keine Linien mit dem Wert `thin`.

Das Schlüsselwort `auto` innerhalb der Funktion `repeat()` erzeugt einen automatischen Wiederholungsmechanismus. Er ergänzt Werte für die Breiten der Linien zwischen den Spalten, denen andernfalls durch andere Teile der Liste kein Wert zugewiesen würde, und verhindert so, dass die Liste erneut von vorn durchlaufen wird. Ein `column-rule-width`-Wert kann höchstens ein `repeat(auto, <line-width>)` enthalten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie ein einzelnes Schlüsselwort allen Linien zwischen den Spalten dieselbe Breite zuweist.

#### HTML

Wir fügen einen Textabsatz ein:

```html
<p>
  This is a bunch of text split into three columns. The `column-rule-width`
  property is used to change the width of the line that is drawn between
  columns. Don't you think that's wonderful?
</p>
```

#### CSS

Mit der Eigenschaft {{cssxref("column-count")}} erstellen wir einen mehrspaltigen Container. Da die Eigenschaft {{cssxref("column-rule-style")}} standardmäßig den Wert `none` hat, müssen wir sie auf einen Wert setzen, bei dem die Linien sichtbar sind. Anschließend setzen wir `column-rule-width` auf `thick` und belassen {{cssxref("column-rule-color")}} beim Standardwert `currentcolor`.

```css
p {
  column-count: 3;
  column-rule-style: solid;

  column-rule-width: thick;
}
```

#### Ergebnis

{{EmbedLiveSample("Basic usage")}}

In mehrspaltigen Layouts hat die Eigenschaft {{cssxref("gap")}} standardmäßig den Wert `1em`. Dieser ist größer als unsere `column-rule-width`, sodass die Linien nicht über den Inhalt gezeichnet werden.

### Mehrere Werte

Dieses Beispiel zeigt die Verwendung mehrerer Werte für die Eigenschaft `column-rule-width`. Es zeigt außerdem, dass Linien, die über die Zwischenräume hinausragen, hinter dem Inhalt gezeichnet werden.

#### HTML

Wir fügen eine Liste von Autoren ein:

```html live-sample___basic live-sample___repeat live-sample___func live-sample___auto
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

Wir definieren die Liste als Flex-Container und erzeugen Spalten, indem wir {{cssxref("flex-direction")}} über die Kurzschreibweise {{cssxref("flex-flow")}} auf `row` setzen. Für `column-rule-width` geben wir zehn `<line-width>`-Werte an, von denen jeder größer ist als der vorherige.

```css live-sample___basic live-sample___repeat live-sample___func live-sample___auto
ul {
  display: flex;
  flex-flow: row;
  list-style-type: none;
  column-rule-style: solid;
  column-rule-color: teal;

  column-rule-width: 1px, 2px, 3px, 4px, 5px, 6px, 7px, 8px, 9px, 10px;
}
```

#### Ergebnis

{{EmbedLiveSample("Basic", "", "180")}}

Da es mehr Werte (10) als Zwischenräume (8) gibt, werden die Werte `9px` und `10px` nicht verwendet.

Die Eigenschaft {{cssxref("gap")}} hat standardmäßig den Wert `normal`, der in Flexbox zu `0` aufgelöst wird. `column-rule-width` definiert nur die Breite einer gezeichneten Linie und beeinflusst das Layout nicht. Die Linien werden hinter dem Inhalt gezeichnet.

### Wiederholte Werte

Dieses Beispiel zeigt, dass die Werte wiederholt werden, wenn die Breitenliste weniger Werte enthält, als Linien zwischen den Spalten vorhanden sind.

Wir verwenden dasselbe HTML und CSS wie im vorherigen Beispiel und geben für `column-rule-width` drei durch Kommas getrennte Breiten an:

```css live-sample___repeat
ul {
  column-rule-width: 1px, 5px, 10px;
}
```

#### Ergebnis

{{EmbedLiveSample("Repeat", "", "180")}}

### Verwendung der Funktion `repeat()`

Dieses Beispiel zeigt die Verwendung der Funktion `repeat()` im Wert der Eigenschaft `column-rule-width` und wie sie Wertangaben kürzer machen kann.

Wir verwenden dasselbe HTML und CSS wie in den vorherigen Beispielen. Um zu zeigen, wie umfangreich Wertangaben werden können und welchen Nutzen die Funktion `repeat()` bietet, deklarieren wir zwei benutzerdefinierte Eigenschaften und verwenden sie in `repeat()`-Aufrufen. Die Funktion `repeat()` sorgt dafür, dass die Liste aus zwei `<line-width>`-Werten dreimal wiederholt wird.

```css live-sample___func live-sample___auto
ul {
  --base: 0.5vw;
  --secondary: 1vw;
  column-rule-width:
    15px,
    repeat(
      4,
      min(calc(var(--secondary) + 3px), 10px),
      abs(calc(var(--base) - 2px))
    ),
    15px;
}
```

#### Ergebnis

{{EmbedLiveSample("func", "", "180")}}

Der Flex-Container hat neun Spalten und damit acht Zwischenräume. Die Funktion `repeat()` wiederholt zwei Breitenwerte viermal und erzeugt so eine Liste mit zehn Breitenwerten. Da es weniger Zwischenräume zwischen den Spalten als Breitenwerte gibt, werden die letzten beiden Werte der Liste verworfen.

### Verwendung von `auto` innerhalb von `repeat()`

Dieses Beispiel zeigt die Verwendung von `auto` anstelle einer Ganzzahl innerhalb der Funktion `repeat()`.

Mit `repeat(auto, <line-width>)` setzen wir alle Linien zwischen den Spalten auf `1px`, mit Ausnahme der ersten und der letzten, die wir auf `5px` setzen.

```css live-sample___auto
ul {
  column-rule-width: 5px, repeat(auto, 1px), 5px;
}
```

#### Ergebnis

{{EmbedLiveSample("auto", "", "180")}}

```css hidden live-sample___basic live-sample___repeat live-sample___func live-sample___auto
@layer no-support {
  @supports not (column-rule-width: thin, thick) {
    body::before {
      content: "Your browser doesn't support multiple values for the column-rule-width property";
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
- {{cssxref("column-rule-style")}}
- {{cssxref("column-rule")}}-Kurzschreibweise
- {{cssxref("row-rule-width")}}
- {{cssxref("rule-width")}}-Kurzschreibweise
- {{cssxref("rule")}}-Kurzschreibweise
- [CSS-Zwischenräume definieren](/de/docs/Web/CSS/Guides/Gaps/Defining_gaps)
- Modul [CSS gaps](/de/docs/Web/CSS/Guides/Gaps)
