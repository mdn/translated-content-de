---
title: "`column-rule-color` CSS property"
short-title: column-rule-color
slug: Web/CSS/Reference/Properties/column-rule-color
l10n:
  sourceCommit: 04dfe418f2942ae739d41592c22fafa3679fc03c
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`column-rule-color`** definiert die Farben der Linien, die zwischen Spalten in Grid-, Flex- und mehrspaltigen Layouts gezeichnet werden.

{{InteractiveExample("CSS Demo: column-rule-color")}}

```css interactive-example-choice
column-rule-color: purple;
```

```css interactive-example-choice
column-rule-color: rgb(48 125 222), rgb(222 48 125);
```

```css interactive-example-choice
column-rule-color: rgb(48 125 222), repeat(3, rgb(222 48 125));
```

```css interactive-example-choice
column-rule-color: purple, repeat(auto, orange, yellow);
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    London. Michaelmas term lately over, and the Lord Chancellor sitting in
    Lincoln's Inn Hall. Implacable November weather. As much mud in the streets
    as if the waters had but newly retired from the face of the earth, and it
    would not be wonderful to meet a Megalosaurus, forty feet long or so,
    waddling like an elephantine lizard up Holborn Hill.
  </p>
</section>
```

```css interactive-example
#example-element {
  columns: 7;
  column-rule: solid thick;
  gap: 7px;
}
```

## Syntax

```css
/* Single <color> value */
column-rule-color: purple;
column-rule-color: rgb(192 56 78);
column-rule-color: transparent;
column-rule-color: hsl(0 100% 50% / 60%);

/* Multiple values */
column-rule-color: purple, magenta;
column-rule-color: repeat(3, purple), repeat(3, transparent);
column-rule-color: repeat(3, purple), repeat(3, yellow, blue);
column-rule-color: purple, repeat(auto, transparent), purple;
column-rule-color: purple, repeat(auto, blue, yellow), purple;
column-rule-color:
  repeat(3, purple), repeat(auto, transparent), repeat(3, purple);

/* Global values */
column-rule-color: inherit;
column-rule-color: initial;
column-rule-color: revert;
column-rule-color: revert-layer;
column-rule-color: unset;
```

### Werte

Die Eigenschaft `column-rule-color` akzeptiert eine durch Kommas getrennte Liste von Werten, darunter:

- `<line-color>`
  - : Ein {{cssxref("&lt;color&gt;")}}-Wert, der die Farbe der Linie angibt.

- `<repeat-line-color>`
  - : Eine {{cssxref("repeat()")}}-Funktion mit einem {{cssxref("&lt;integer&gt;")}}-Wert von `1` oder größer als erstem Argument und einem oder mehreren `<color>`-Werten als weiteren Argumenten. Der `<integer>`-Wert gibt an, wie oft die `<color>`-Werte wiederholt werden.

- `<auto-repeat-line-color>`
  - : Eine {{cssxref("repeat()")}}-Funktion mit `auto` als erstem Argument und einem oder mehreren `<color>`-Werten als weiteren Argumenten. Die angegebenen `<color>`-Werte werden so oft wiederholt, wie nötig ist, um Werte für alle Spalten-Trennlinien bereitzustellen, die nicht ausdrücklich durch andere Bestandteile des Eigenschaftswerts festgelegt sind.

## Beschreibung

Die Eigenschaft `column-rule-color` definiert die Farben aller Linien, die in den Zwischenräumen zwischen Spalten von [mehrspaltigen](/de/docs/Web/CSS/Guides/Multicol_layout), [Flex](/de/docs/Web/CSS/Guides/Flexible_box_layout)- und [Grid](/de/docs/Web/CSS/Guides/Grid_layout)-Containern mit mehr als einer Spalte gezeichnet werden.

Der Wert ist eine durch Kommas getrennte Liste von Bestandteilen, die Werte der Typen `<line-color>`, `<repeat-line-color>` und `<auto-repeat-line-color>` enthalten kann.

`column-rule-color` kann zusammen mit den Eigenschaften {{cssxref("column-rule-width")}} und {{cssxref("column-rule-style")}} über die Kurzschreibweise {{cssxref("column-rule")}} festgelegt werden. Zusammen mit der Eigenschaft {{cssxref("row-rule-color")}} kann `column-rule-color` auch über die Kurzschreibweise {{cssxref("rule-color")}} festgelegt werden.

Für `<line-color>` kann jeder gültige CSS-{{cssxref("&lt;color&gt;")}}-Wert angegeben werden. Besteht der Eigenschaftswert aus nur einem `<color>`-Wert, haben alle Trennlinien diese Farbe. Bei der folgenden Deklaration sind beispielsweise alle Linien in den Zwischenräumen zwischen den Spalten blau:

```css
column-rule-color: blue;
```

Wenn mehrere `<line-color>`-Werte angegeben werden, werden sie in der festgelegten Reihenfolge auf die Linien in den Spaltenzwischenräumen angewendet. Gibt es mehr Trennlinien als `<line-color>`-Werte, wird die Farbliste wiederholt, bis jede Spalten-Trennlinie eine Farbe hat. Bei der folgenden Deklaration ist beispielsweise jede ungerade Trennlinie rot und jede gerade gelb:

```css
column-rule-color: red, yellow;
```

### Wiederholte Linienfarben

Mit der Funktion `repeat()` und einer Ganzzahl von `1` oder größer als erstem Argument lässt sich eine als weitere Argumente übergebene Liste gültiger CSS-{{cssxref("&lt;color&gt;")}}-Werte die angegebene Anzahl von Malen wiederholen. So können Sie Farbwerte beliebig oft wiederholen, ohne sie einzeln aufführen zu müssen. Die folgenden Deklarationen sind gleichwertig:

```css
column-rule-color: blue, yellow, red, yellow, red;
column-rule-color: blue, repeat(2, yellow, red);
```

Dadurch entsteht eine Liste mit fünf Farben. Wenn die Farbliste des `column-rule-color`-Werts mehr Farben enthält, als Zwischenräume zwischen Spalten vorhanden sind, werden die überschüssigen Farbwerte ignoriert. Hat der Container drei Spalten, ist die Trennlinie im ersten Zwischenraum blau und die im zweiten gelb.

### Automatisch wiederholte Linienfarben

Die Funktion `repeat()` akzeptiert als erstes Argument auch `auto` anstelle einer positiven Ganzzahl. Bei `auto` als erstem Argument werden die als weitere Argumente übergebenen `<color>`-Werte so oft wiederholt, wie nötig ist, um Werte für alle Spalten-Trennlinien bereitzustellen, die nicht ausdrücklich durch andere Bestandteile des Eigenschaftswerts festgelegt sind.

```css
column-rule-color: blue, repeat(auto, yellow), red;
```

In diesem Fall ist die erste Spalten-Trennlinie blau, die letzte rot und alle übrigen gelb. Solange es mindestens zwei Spalten-Trennlinien gibt, ist die erste immer blau und die letzte immer rot. Alle anderen Trennlinien sind gelb. Das bedeutet, dass bei nur zwei oder drei Spalten keine gelben Linien vorhanden sind.

Das Schlüsselwort `auto` innerhalb der Funktion `repeat()` erzeugt eine automatische Wiederholung, die Farben für Spalten-Trennlinien bereitstellt, denen andernfalls durch andere Teile der Liste keine Werte zugewiesen würden. Dadurch wird verhindert, dass die Liste erneut von vorn durchlaufen wird. Ein `column-rule-color`-Wert kann höchstens ein `repeat(auto, <color>)` enthalten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel legen wir eine einzelne Farbe für die Linien zwischen den Spalten eines mehrspaltigen Layouts fest.

#### HTML

Wir fügen einen Textabsatz ein.

```html
<p>
  This is a bunch of text split into three columns. The `column-rule-color`
  property is used to change the color of the line that is drawn between
  columns. Don't you think that's wonderful?
</p>
```

#### CSS

Wir definieren das {{htmlelement("p")}}-Element als mehrspaltigen Container. Mit einem {{cssxref("gap")}} von `7px` schaffen wir Platz für die `3px` breite gestrichelte Trennlinie zwischen den Spalten:

```css
p {
  column-count: 5;
  gap: 7px;
  column-rule-style: dashed;
  column-rule-width: 3px;

  column-rule-color: blue;
}
```

#### Ergebnis

{{EmbedLiveSample("Basic_example")}}

### Mehrere Farbwerte

Dieses Beispiel zeigt, wie mehrere Farben angegeben werden und wie sich die Werte wiederholen, wenn die Farbliste weniger Werte enthält, als Zwischenräume zwischen den Spalten vorhanden sind.

Wir verwenden dasselbe HTML und CSS wie im vorherigen Beispiel und geben für `column-rule-color` drei durch Kommas getrennte Farben an:

```html hidden
<p>
  This is a bunch of text split into three columns. The `column-rule-color`
  property is used to change the color of the line that is drawn between
  columns. Don't you think that's wonderful?
</p>
```

```css hidden
p {
  column-count: 5;
  gap: 7px;
  column-rule-style: dashed;
  column-rule-width: 3px;
}

@layer no-support {
  @supports not (column-rule-color: red, blue) {
    body::before {
      content: "Your browser doesn't support multiple values for the column-rule-color property";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

```css
p {
  column-rule-color: blue, yellow, red;
}
```

#### Ergebnis

{{EmbedLiveSample("Multiple color values", "", "180")}}

Es gibt vier Zwischenräume, aber nur drei Farben. Daher wird die Liste wiederholt, sodass die erste und die vierte Linie beide blau sind.

### Verwendung der Funktion `repeat()`

Dieses Beispiel zeigt, wie die Funktion `repeat()` innerhalb des Eigenschaftswerts von `column-rule-color` verwendet wird und wie sie verhindert, dass komplexe Werte unübersichtlich werden.

#### HTML

Wir fügen eine Liste von Autorinnen und Autoren ein:

```html live-sample___repeat live-sample___auto
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

Zunächst definieren wir die Liste als Grid-Container und erstellen mit der Eigenschaft {{cssxref("grid-template-columns")}} Spalten. Mit einem {{cssxref("gap")}} von `7px` schaffen wir zwischen den Spalten genügend Platz für unsere `3px` breite gestrichelte Trennlinie. Die Aufzählungszeichen entfernen wir, indem wir {{cssxref("list-style-type")}} auf `none` setzen.

Um zu zeigen, wie kompliziert Werte werden können und welchen Nutzen die Funktion `repeat()` bietet, deklarieren wir außerdem zwei benutzerdefinierte Eigenschaften. Diese verwenden wir in drei {{cssxref("color-mix()")}}-Farbfunktionen, um blaue, rote und gelbe Farben zu erzeugen. Der gelbe `color-mix()`-Farbwert steht innerhalb einer `repeat()`-Funktion und wird dreimal wiederholt.

Außerdem haben wir jedes Grid-Element mit einem Rahmen versehen, damit Sie sehen können, dass die Trennlinie in der Mitte des Zwischenraums zwischen den Spalten liegt.

```css live-sample___repeat live-sample___auto
ul {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 7px;
  list-style-type: none;
  column-rule-style: dashed;
  column-rule-width: 3px;

  --base: yellow;
  --mixin: blue;
  column-rule-color:
    color-mix(in lch decreasing hue, var(--base) 0%, var(--mixin)),
    repeat(3, color-mix(in lch decreasing hue, var(--base) 100%, var(--mixin))),
    color-mix(in lch decreasing hue, var(--base) 58%, var(--mixin));
}
li {
  border: 1px solid #dddddd;
}
```

#### Ergebnis

{{EmbedLiveSample("repeat", "", "180")}}

Das Grid hat neun Zellen nebeneinander und damit acht Zwischenräume. Die Funktion `repeat()` wiederholt unsere beiden gemischten Farben dreimal und erzeugt so eine Farbliste mit sieben Farben. Da es mehr Spaltenzwischenräume als Farben in der Liste gibt, wird die letzte Farbe in der Liste nicht verwendet.

### Verwendung von `auto` innerhalb von `repeat()`

Dieses Beispiel zeigt, wie innerhalb der Funktion `repeat()` anstelle einer Ganzzahl `auto` verwendet wird.

Wir verwenden dasselbe HTML und CSS wie in den vorherigen Beispielen, überschreiben aber den Wert von `column-rule-color`. Mit `repeat(auto, <color>)` setzen wir alle Linien außer der ersten und der letzten auf nahezu transparentes Schwarz (`#00000033`). Die erste und die letzte Linie setzen wir auf deckendes `black`.

```css live-sample___auto
ul {
  column-rule-color: black, repeat(auto, #00000033), black;
}
```

#### Ergebnis

{{EmbedLiveSample("auto", "", "180")}}

```css hidden live-sample___repeat live-sample___auto
@layer no-support {
  @supports not (column-rule-color: repeat(3, red)) {
    body::before {
      content: "Your browser doesn't support `repeat()` functions within a column-rule-color property value";
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

- Der Datentyp {{cssxref("&lt;color&gt;")}}
- {{cssxref("column-rule-width")}}
- {{cssxref("column-rule-style")}}
- {{cssxref("row-rule-color")}}
- Die Kurzschreibweise {{cssxref("column-rule")}}
- Die Kurzschreibweise {{cssxref("rule-color")}}
- Die Kurzschreibweise {{cssxref("rule")}}
- [CSS-Abstände definieren](/de/docs/Web/CSS/Guides/Gaps/Defining_gaps)
- Das Modul [CSS-Abstände](/de/docs/Web/CSS/Guides/Gaps)
