---
title: "`column-rule-color` CSS property"
short-title: column-rule-color
slug: Web/CSS/Reference/Properties/column-rule-color
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

Die **`column-rule-color`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Farben der Linien, die zwischen Spalten in Multi-Column-Grid-, Flex- und Multi-Col-Layouts gezeichnet werden.

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

Die Eigenschaft `column-rule-color` akzeptiert eine durch Komma getrennte Liste von Werten, einschließlich:

- `<line-color>`
  - : Ein {{cssxref("&lt;color&gt;")}}, das die Farbe der Linie darstellt.

- `<repeat-line-color>`
  - : Eine {{cssxref("repeat()")}} Funktion, mit einer {{cssxref("&lt;integer&gt;")}} von `1` oder mehr als erstes Argument und einem oder mehreren `<color>` Werten als nachfolgende Argumente. Die `<integer>` gibt an, wie oft die `<color>` Werte wiederholt werden sollen.

- `<auto-repeat-line-color>`
  - : Eine {{cssxref("repeat()")}} Funktion, mit `auto` als erstes Argument und einem oder mehreren `<color>` Werten als nachfolgende Argumente. Die bereitgestellten `<color>` Werte werden so oft wie nötig wiederholt, um Werte für alle Spaltenregeln zu füllen, die nicht explizit durch andere Komponenten des Eigenschaftswertes spezifiziert sind.

## Beschreibung

Die Eigenschaft `column-rule-color` definiert die Farben der Linien, die in den Lücken zwischen Spalten in [Multi-Column](/de/docs/Web/CSS/Guides/Multicol_layout), [Flex](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Grid](/de/docs/Web/CSS/Guides/Grid_layout) Containern mit mehr als einer Spalte gezeichnet werden.

Der Wert ist eine durch Komma getrennte Liste von Komponenten, die `<line-color>`, `<repeat-line-color>` und `<auto-repeat-line-color>` Typen enthalten kann.

Die `column-rule-color` kann zusammen mit den Eigenschaften {{cssxref("column-rule-width")}} und {{cssxref("column-rule-style")}} mithilfe der Kurzform {{cssxref("column-rule")}} gesetzt werden. Die `column-rule-color` kann zusammen mit der Eigenschaft {{cssxref("row-rule-color")}} auch mit der Kurzform {{cssxref("rule-color")}} gesetzt werden.

Ein `<line-color>` kann als jeder gültige CSS-Wert für {{cssxref("&lt;color&gt;")}} deklariert werden. Wenn der Eigenschaftswert nur aus einem `<color>` besteht, werden alle Linien diese Farbe haben. Wenn wir zum Beispiel das Folgende deklarieren, werden die Linien in den Zwischenräumen zwischen den Spalten alle blau sein:

```css
column-rule-color: blue;
```

Wenn mehr als ein `<line-color>` deklariert ist, werden sie in der angegebenen Reihenfolge auf Linien in den Spaltenzwischenräumen angewendet. Wenn es mehr Regeln als `<line-color>` Werte gibt, wird die Liste der Farben wiederholt, bis jede Spaltenregel eine Farbe hat. Wenn wir zum Beispiel das Folgende deklarieren, wird jede ungerade Regel rot und jede gerade Regel gelb sein.

```css
column-rule-color: red, yellow;
```

### Wiederholte Linienfarben

Die `repeat()` Funktion, mit einer Ganzzahl von `1` oder größer als erstes Argument, kann verwendet werden, um eine gültige Liste von CSS {{cssxref("&lt;color&gt;")}} Werten, die als nachfolgende Argumente übergeben werden, die angegebene Anzahl von Malen zu wiederholen. Dadurch können die Farbwerte so oft wie nötig wiederholt werden, ohne sie einzeln auflisten zu müssen. Die folgenden Deklarationen sind äquivalent:

```css
column-rule-color: blue, yellow, red, yellow, red;
column-rule-color: blue, repeat(2, yellow, red);
```

Dies erstellt eine Liste von fünf Farben. Wenn die Anzahl der Farben in der `column-rule-color` Wert-Farbliste die Anzahl der Lücken zwischen den Spalten übersteigt, werden die überschüssigen Farbwerte ignoriert. Wenn der Container drei Spalten hat, wird die Regel im ersten Zwischenraum blau und die im zweiten gelb sein.

### Automatisch wiederholende Linienfarben

Die `repeat()` Funktion akzeptiert auch `auto` als erstes Argument anstelle einer positiven Ganzzahl. Mit `auto` als erstem Argument werden die `<color>` Werte, die als nachfolgende Argumente übergeben werden, so oft wie nötig wiederholt, um Werte für alle Spaltenregeln zu füllen, die nicht explizit durch andere Komponenten des Eigenschaftswertes spezifiziert sind.

```css
column-rule-color: blue, repeat(auto, yellow), red;
```

In diesem Fall wird die erste Spaltenregel blau, die letzte wird rot, und alle anderen werden gelb. Solange es mindestens zwei Spaltenregeln gibt, wird die erste immer blau und die letzte immer rot sein. Alle anderen Regeln werden gelb, was bedeutet, dass, wenn es nur 2 oder 3 Spalten gibt, es keine gelben Linien geben wird.

Das `auto` Schlüsselwort innerhalb der `repeat()` Funktion erstellt einen automatischen Wiederholer, der Werte für die Spaltenregel-Linienfarben füllt, die sonst keine Werte von anderen Teilen der Liste erhalten würden, wodurch verhindert wird, dass die Liste durchlaufen wird. Ein `column-rule-color` Wert kann höchstens ein `repeat(auto, <color>)` enthalten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel definieren wir eine einzige Farbe für die Linien, die zwischen Spalten in einem Multi-Column-Layout gezeichnet werden.

#### HTML

Wir enthalten einen Absatz Text.

```html
<p>
  This is a bunch of text split into three columns. The `column-rule-color`
  property is used to change the color of the line that is drawn between
  columns. Don't you think that's wonderful?
</p>
```

#### CSS

Wir definieren das {{htmlelement("p")}} Element als Multi-Column-Container. Wir fügen eine {{cssxref("gap")}} von `7px` ein, um Platz für die `3px` gestrichelte Regel zwischen den Spalten zu schaffen:

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

Dieses Beispiel zeigt die Deklaration von mehr als einer Farbe und wie die Werte wiederholt werden, wenn es weniger Werte in der Farbliste gibt als Lücken zwischen den Spalten.

Unter Verwendung desselben HTML und CSS wie im vorherigen Beispiel fügen wir drei durch Komma getrennte Farben als den `column-rule-color` Wert ein:

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

Es gibt vier Zwischenräume, aber nur drei Farben, sodass die Liste wiederholt wird, wobei die erste und die vierte Linie jeweils blau sind.

### Verwendung der `repeat()` Funktion

Dieses Beispiel zeigt die Verwendung der `repeat()` Funktion innerhalb des `column-rule-color` Eigenschaftswertes und wie diese Funktion helfen kann, komplexe Werte handhabbar zu machen.

#### HTML

Wir enthalten eine Liste von Autoren:

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

Wir beginnen damit, die Liste als Grid-Container zu definieren, indem wir Spalten mit der Eigenschaft {{cssxref("grid-template-columns")}} erstellen. Wir fügen eine {{cssxref("gap")}} von `7px` hinzu, um genügend Platz zwischen den Spalten zu schaffen, um unsere `3px` gestrichelte Regel zu passen, und entfernen die Aufzählungszeichen durch Setzen von {{cssxref("list-style-type")}} auf `none`.

Um zu demonstrieren, wie Werte kompliziert werden können und den Nutzen der `repeat()` Funktion, deklarieren wir zwei benutzerdefinierte Eigenschaften, die wir in drei {{cssxref("color-mix()")}} Farbfunktionsdeklarationen verwenden, um blaue, rote und gelbe Farben zu erstellen. Die gelbe `color-mix()` Farbe befindet sich innerhalb einer `repeat()` Funktion, die auf drei Wiederholungen eingestellt ist.

Wir haben jedem Grid-Element auch einen Rahmen hinzugefügt, damit Sie sehen können, wie die Linie in der Mitte des Zwischenraums zwischen den Spalten verläuft.

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

Das Grid hat neun Zellen über die Breite, also acht Zwischenräume. Die `repeat()` Funktion wiederholt unsere zwei gemischten Farben dreimal und erstellt eine Farbliste mit sieben Farben. Da es mehr Spaltenzwischenräume als Listenfarben gibt, wird die letzte Farbe in der Liste nicht verwendet.

### Verwendung von `auto` innerhalb von `repeat()`

Dieses Beispiel demonstriert die Verwendung von `auto` anstelle einer Ganzzahl innerhalb der `repeat()` Funktion.

Wir verwenden dasselbe HTML und CSS wie in den vorherigen Beispielen, überschreiben jedoch den `column-rule-color` Wert. Hier verwenden wir `repeat(auto, <color>)`, um alle Linien fast transparent schwarz (`#0003`) zu setzen, außer der ersten und letzten, die wir auf voll decking schwarz setzen.

```css live-sample___auto
ul {
  column-rule-color: black, repeat(auto, #0003), black;
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
- [CSS Gaps](/de/docs/Web/CSS/Guides/Gaps) Modul
