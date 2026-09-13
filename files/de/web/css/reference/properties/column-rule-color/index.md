---
title: "`column-rule-color` CSS property"
short-title: column-rule-color
slug: Web/CSS/Reference/Properties/column-rule-color
l10n:
  sourceCommit: b6de98eb9cd52ce7e37f22a340352f0af4c9d597
---

Die **`column-rule-color`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Farben der Linien, die zwischen Spalten in Multi-Column-, Flex- und Multi-Col-Layouts gezeichnet werden.

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

Die `column-rule-color` Eigenschaft akzeptiert eine kommaseparierte Liste von Werten, einschließlich:

- `<line-color>`
  - : Ein {{cssxref("&lt;color&gt;")}}, das die Farbe der Linie darstellt.

- `<repeat-line-color>`
  - : Eine {{cssxref("repeat()")}}-Funktion, mit einem {{cssxref("&lt;integer&gt;")}} von `1` oder mehr als erstem Argument und einem oder mehreren `<color>`-Werten als nachfolgenden Argumenten. Das `<integer>` gibt an, wie oft die `<color>`-Werte wiederholt werden sollen.

- `<auto-repeat-line-color>`
  - : Eine {{cssxref("repeat()")}}-Funktion, mit `auto` als erstem Argument und einem oder mehreren `<color>`-Werten als nachfolgenden Argumenten. Die angegebenen `<color>`-Werte werden so oft wiederholt, wie nötig, um Werte für alle Spaltenregeln bereitzustellen, die nicht ausdrücklich durch andere Komponenten des Eigenschaftswertes spezifiziert sind.

## Beschreibung

Die `column-rule-color` Eigenschaft definiert die Farben aller Linien, die in den Lücken zwischen Spalten in [Multi-Column](/de/docs/Web/CSS/Guides/Multicol_layout), [Flex](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Grid](/de/docs/Web/CSS/Guides/Grid_layout) Containern mit mehr als einer Spalte gezeichnet werden.

Der Wert ist eine kommaseparierte Liste von Komponenten, die `<line-color>`, `<repeat-line-color>` und `<auto-repeat-line-color>` Typen enthalten können.

Die `column-rule-color`, zusammen mit den {{cssxref("column-rule-width")}} und {{cssxref("column-rule-style")}} Eigenschaften, kann mit der {{cssxref("column-rule")}} Kurzform festgelegt werden. Die `column-rule-color`, zusammen mit der {{cssxref("row-rule-color")}} Eigenschaft, kann ebenfalls mit der {{cssxref("rule-color")}} Kurzform festgelegt werden.

Ein `<line-color>` kann als jeder gültige CSS {{cssxref("&lt;color&gt;")}} Wert deklariert werden. Wenn der Eigenschaftswert nur aus einem `<color>` besteht, werden alle Linien dieser Farbe sein. Wenn wir zum Beispiel Folgendes deklarieren, werden die Linien in den Gassen zwischen den Spalten alle blau sein:

```css
column-rule-color: blue;
```

Wenn mehr als ein `<line-color>` deklariert wird, werden sie in der angegebenen Reihenfolge auf die Linien in den Spalten-Gassen angewendet. Wenn es mehr Regeln als `<line-color>` Werte gibt, wird die Liste der Farben wiederholt, bis jede Spaltenregel eine Farbe hat. Wenn wir zum Beispiel Folgendes deklarieren, wird jede ungerade Regel rot und jede gerade Regel gelb sein.

```css
column-rule-color: red, yellow;
```

### Wiederholte Linienfarben

Die `repeat()`-Funktion, mit einem ganzzahligen Wert von `1` oder größer als erstem Argument, kann verwendet werden, um eine gültige Liste von CSS {{cssxref("&lt;color&gt;")}} Werten, die als nachfolgende Argumente übergeben werden, eine festgelegte Anzahl von Malen zu wiederholen. Dies erlaubt es, die Farbwerte so oft zu wiederholen, wie benötigt wird, ohne sie einzeln aufzulisten. Die folgenden Deklarationen sind gleichwertig:

```css
column-rule-color: blue, yellow, red, yellow, red;
column-rule-color: blue, repeat(2, yellow, red);
```

Dies erstellt eine Liste von fünf Farben. Wenn die Anzahl der Farben in der `column-rule-color` Wert-Farbliste größer ist als die Anzahl der Lücken zwischen den Spalten, werden die überschüssigen Farbwerte ignoriert. Wenn der Container drei Spalten hat, wird die Regel in der ersten Gasse blau und in der zweiten gelb sein.

### Automatisches Wiederholen von Linienfarben

Die `repeat()`-Funktion akzeptiert auch `auto` als erstes Argument anstelle einer positiven Ganzzahl. Mit `auto` als erstem Argument werden die `<color>`-Werte, die als nachfolgende Argumente übergeben werden, so oft wiederholt, wie nötig, um Werte für alle Spaltenregeln bereitzustellen, die nicht ausdrücklich durch andere Komponenten des Eigenschaftswertes spezifiziert sind.

```css
column-rule-color: blue, repeat(auto, yellow), red;
```

In diesem Fall wird die erste Spaltenregel blau, die letzte wird rot und alle anderen werden gelb. Solange es mindestens zwei Spaltenregeln gibt, wird die erste immer blau und die letzte immer rot sein. Alle anderen Regeln werden gelb sein, was bedeutet, dass es keine gelben Linien geben wird, wenn es nur 2 oder 3 Spalten gibt.

Das `auto` Schlüsselwort innerhalb der `repeat()`-Funktion erstellt einen Auto-Wiederholer, der Werte für die Spaltenregel-Linienfarben ergänzt, die sonst keine Werte aus anderen Teilen der Liste erhalten würden, und verhindert so, dass die Liste durchlaufen wird. Ein `column-rule-color` Wert kann maximal ein `repeat(auto, <color>)` enthalten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel definieren wir eine einzelne Farbe für die Linien, die zwischen Spalten in einem Multi-Column-Layout gezeichnet werden.

#### HTML

Wir fügen einen Absatz Text ein.

```html
<p>
  This is a bunch of text split into three columns. The `column-rule-color`
  property is used to change the color of the line that is drawn between
  columns. Don't you think that's wonderful?
</p>
```

#### CSS

Wir definieren das {{htmlelement("p")}} Element als Multi-Column-Container. Wir fügen einen {{cssxref("gap")}} von `7px` ein, um einen Abstand für die `3px` gestrichelte Regel zwischen den Spalten bereitzustellen:

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

Dieses Beispiel zeigt, wie man mehr als eine Farbe deklariert und wie die Werte wiederholt werden, wenn es weniger Werte in der Farbliste gibt als Gassen zwischen den Spalten.

Mit demselben HTML und CSS wie im vorherigen Beispiel fügen wir drei kommaseparierte Farben als `column-rule-color` Wert hinzu:

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

Es gibt vier Gassen, aber nur drei Farben, sodass die Liste wiederholt wird, wobei die erste und die vierte Linie beide blau sind.

### Verwendung der `repeat()`-Funktion

Dieses Beispiel demonstriert die Verwendung der `repeat()`-Funktion innerhalb des `column-rule-color` Eigenschaftswerts und wie diese Funktion helfen kann, komplexe Werte weniger unhandlich zu machen.

#### HTML

Wir fügen eine Liste von Autoren ein:

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

Wir beginnen damit, die Liste als Grid-Container zu definieren und Spalten mit der {{cssxref("grid-template-columns")}} Eigenschaft zu erstellen. Wir fügen einen {{cssxref("gap")}} von `7px` ein, um genügend Platz zwischen den Spalten zu lassen, um unsere `3px` gestrichelte Regel zu passen, und entfernen die Aufzählungszeichen mit {{cssxref("list-style-type")}} auf `none` gesetzt.

Dann, um zu demonstrieren, wie Werte kompliziert werden können und den Nutzen der `repeat()`-Funktion, deklarieren wir zwei benutzerdefinierte Eigenschaften, die wir in drei {{cssxref("color-mix()")}} Farbfunktionsdeklarationen verwenden, um blaue, rote und gelbe Farben zu erstellen. Die gelbe `color-mix()` Farbe ist innerhalb einer `repeat()`-Funktion, die auf 3 Mal wiederholen eingestellt ist.

Wir haben auch einen Rand um jedes Rasterelement hinzugefügt, damit Sie sehen können, wie die Linie in der Mitte der Gasse zwischen den Spalten die Regel ist.

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

Das Raster hat neun Zellen nebeneinander, also acht Gassen. Die `repeat()`-Funktion wiederholt unsere zwei gemischten Farben dreimal, sodass eine Farbliste mit sieben Farben entsteht. Da es mehr Spaltengassen als Listenfarben gibt, wird die letzte Farbe in der Liste nicht verwendet.

### Verwendung von `auto` innerhalb von `repeat()`

Dieses Beispiel demonstriert die Verwendung von `auto`, anstatt einer Ganzzahl, innerhalb der `repeat()`-Funktion.

Wir verwenden dasselbe HTML und CSS wie in den vorherigen Beispielen, überschreiben aber den `column-rule-color` Wert. Hier verwenden wir `repeat(auto, <color>)`, um alle Linien fast transparent schwarz (`#00000033`) zu setzen, außer der ersten und letzten, die wir auf solid `black` setzen.

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

- Der {{cssxref("&lt;color&gt;")}} Datentyp
- {{cssxref("column-rule-width")}}
- {{cssxref("column-rule-style")}}
- {{cssxref("row-rule-color")}}
- {{cssxref("column-rule")}} Kurzform
- {{cssxref("rule-color")}} Kurzform
- {{cssxref("rule")}} Kurzform
- [CSS-Abstande](/de/docs/Web/CSS/Guides/Gaps) Modul
