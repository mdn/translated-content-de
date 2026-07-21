---
title: "`column-rule-color` CSS property"
short-title: column-rule-color
slug: Web/CSS/Reference/Properties/column-rule-color
l10n:
  sourceCommit: 5cf8432d980cbe9b7e5611d647d8566b5c4ff3ed
---

Die CSS-Eigenschaft **`column-rule-color`** legt die Farben der Linien fest, die zwischen Spalten in einem Layout mit mehreren Spalten, einem Flex- oder Grid-Layout gezeichnet werden.

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

Die Eigenschaft `column-rule-color` akzeptiert eine kommagetrennte Liste von Werten, darunter:

- `<line-color>`
  - : Ein {{cssxref("&lt;color&gt;")}}, das die Farbe der Linie repräsentiert.

- `<repeat-line-color>`
  - : Eine {{cssxref("repeat()")}} Funktion, bei der ein {{cssxref("&lt;integer&gt;")}} von `1` oder mehr als erstes Argument und ein oder mehrere `<color>`-Werte als nachfolgende Argumente angegeben werden. Das `<integer>` gibt an, wie oft die `<color>`-Werte wiederholt werden sollen.

- `<auto-repeat-line-color>`
  - : Eine {{cssxref("repeat()")}} Funktion mit `auto` als erstem Argument und einem oder mehreren `<color>`-Werten als nachfolgende Argumente. Die angegebenen `<color>`-Werte werden so oft wiederholt, wie nötig, um Werte für alle Spaltentrennlinien zu füllen, die nicht explizit durch andere Komponenten des Eigenschaftswerts angegeben sind.

## Beschreibung

Die Eigenschaft `column-rule-color` definiert die Farben der Linien, die in den Lücken zwischen Spalten in [Mehrspalten-](/de/docs/Web/CSS/Guides/Multicol_layout), [Flex-](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Grid-](/de/docs/Web/CSS/Guides/Grid_layout) Containern mit mehr als einer Spalte gezeichnet werden.

Der Wert ist eine kommagetrennte Liste von Komponenten, die `<line-color>`, `<repeat-line-color>` und `<auto-repeat-line-color>` Typen enthalten kann.

Die `column-rule-color`, zusammen mit den Eigenschaften {{cssxref("column-rule-width")}} und {{cssxref("column-rule-style")}}, kann mit dem {{cssxref("column-rule")}} Kurzschreibweise festgelegt werden. Die `column-rule-color`, zusammen mit der Eigenschaft {{cssxref("row-rule-color")}}, kann auch mit der {{cssxref("rule-color")}} Kurzschreibweise festgelegt werden.

Ein `<line-color>` kann als jeder gültige CSS {{cssxref("&lt;color&gt;")}} Wert deklariert werden. Besteht der Eigenschaftswert nur aus einer `<color>`, werden alle Trennlinien diese Farbe haben. Wenn wir zum Beispiel das Folgende deklarieren, sind die Linien in den Lücken zwischen den Spalten alle blau:

```css
column-rule-color: blue;
```

Wenn mehr als eine `<line-color>` deklariert wird, werden sie in der Reihenfolge, wie sie angegeben sind, auf die Linien in den Spaltenlücken angewendet. Gibt es mehr Regeln als `<line-color>`-Werte, wird die Liste der Farben wiederholt, bis jede Trennlinie eine Farbe hat. Wenn wir zum Beispiel das Folgende deklarieren, wird jede ungerade Regel rot und jede gerade Regel gelb sein.

```css
column-rule-color: red, yellow;
```

### Wiederholte Linienfarben

Die Funktion `repeat()`, mit einem ganzzahligen Wert von `1` oder größer als erstes Argument, kann verwendet werden, um eine gültige Liste von CSS {{cssxref("&lt;color&gt;")}} Werten, die als nachfolgende Argumente übergeben werden, die angegebene Anzahl von Malen zu wiederholen. Dies ermöglicht es, dass die Farbwerte so oft wiederholt werden, wie Sie sie benötigen, ohne sie einzeln auflisten zu müssen. Die folgenden Deklarationen sind gleichwertig:

```css
column-rule-color: blue, yellow, red, yellow, red;
column-rule-color: blue, repeat(2, yellow, red);
```

Dies erzeugt eine Liste von fünf Farben. Wenn die Anzahl der Farben in der Farb-Liste des `column-rule-color`-Wertes die Anzahl der Lücken zwischen den Spalten übersteigt, werden die überschüssigen Farbwerte ignoriert. Hat der Container drei Spalten, wird die Regel in der ersten Lücke blau und die zweite gelb sein.

### Automatisch wiederholende Linienfarben

Die Funktion `repeat()` akzeptiert auch `auto` als erstes Argument anstelle eines positiven ganzzahligeren Wertes. Mit `auto` als erstem Argument werden die `<color>`-Werte, die als nachfolgende Argumente übergeben werden, so oft wiederholt, wie erforderlich, um Werte für alle Spaltentrennlinien zu füllen, die durch andere Komponenten des Eigenschaftswertes nicht explizit angegeben sind.

```css
column-rule-color: blue, repeat(auto, yellow), red;
```

In diesem Fall wird die erste Spaltentrennlinie blau, die letzte rot und alle anderen werden gelb sein. Solange es mindestens zwei Spaltentrennlienen gibt, wird die erste immer blau und die letzte immer rot sein. Alle anderen Linien werden gelb sein, was bedeutet, dass es bei nur 2 oder 3 Spalten keine gelben Linien geben wird.

Das `auto` Schlüsselwort innerhalb der `repeat()` Funktion erstellt einen automatischen Wiederholer, der Werte für die Spaltentrennlinienfarben ausfüllt, die sonst keine Werte von anderen Teilen der Liste erhalten würden und verhindert, dass die Liste zyklisch fortläuft. Ein `column-rule-color` Wert kann höchstens ein `repeat(auto, <color>)` enthalten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel definieren wir eine einzelne Farbe für die Linien, die zwischen Spalten in einem Mehrspalten-Layout gezeichnet werden.

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

Wir definieren das {{htmlelement("p")}} Element als Mehrspalten-Container. Wir fügen einen {{cssxref("gap")}} von `7px` hinzu, um Platz für die `3px` gestrichelte Linie zu schaffen, die zwischen den Spalten gezeichnet wird:

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

Dieses Beispiel demonstriert, wie man mehr als eine Farbe deklariert und wie die Werte wiederholt werden, wenn es weniger Werte in der Liste der Farben als Lücken zwischen den Spalten gibt.

Mit demselben HTML und CSS wie im vorherigen Beispiel fügen wir der `column-rule-color` Eigenschaft drei durch Kommas getrennte Farben hinzu:

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

Es gibt vier Lücken, aber nur drei Farben, sodass die Liste wiederholt wird, wobei die erste und die vierte Linie beide blau sind.

### Nutzung der `repeat()` Funktion

Dieses Beispiel demonstriert, wie die `repeat()` Funktion innerhalb des `column-rule-color` Wertes verwendet wird und wie diese Funktion hilft, komplexe Werte überschaubar zu halten.

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

Wir beginnen damit, die Liste als Grid-Container zu definieren, erstellen Spalten mit der Eigenschaft {{cssxref("grid-template-columns")}}. Wir fügen einen {{cssxref("gap")}} von `7px` hinzu, um ausreichend Platz zwischen den Spalten für unsere `3px` gestrichelte Linie zu bieten, und entfernen die Aufzählungszeichen mit {{cssxref("list-style-type")}} auf `none` gesetzt.

Um zu demonstrieren, wie Werte kompliziert werden können und der Nutzen der `repeat()` Funktion, deklarieren wir zwei benutzerdefinierte Eigenschaften, die wir in drei {{cssxref("color-mix()")}} Farbfunktionserklärungen verwenden, um blaue, rote und gelbe Farben zu erstellen. Die gelbe `color-mix()` Farbe ist innerhalb einer `repeat()` Funktion, die auf 3 Wiederholungen eingestellt ist.

Wir haben auch jedem Grid-Element eine Umrandung hinzugefügt, damit Sie sehen können, wie die Linie in der Mitte der Lücke zwischen den Spalten verläuft.

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
  border: 1px solid #ddd;
}
```

#### Ergebnis

{{EmbedLiveSample("repeat", "", "180")}}

Das Grid hat neun Zellen quer, also acht Lücken. Die `repeat()` Funktion wiederholt unsere zwei gemischten Farben dreimal und erstellt eine Farb-Liste mit sieben Farben. Da es mehr Spaltenlücken als Listfarben gibt, wird die letzte Farbe in der Liste nicht verwendet.

### Nutzung von `auto` innerhalb von `repeat()`

Dieses Beispiel demonstriert die Nutzung von `auto` anstelle einer Ganzzahl innerhalb der `repeat()` Funktion.

Wir verwenden den gleichen HTML- und CSS-Code wie in den vorherigen Beispielen, überschreiben aber den `column-rule-color` Wert. Hier verwenden wir `repeat(auto, <color>)`, um alle Linien fast transparent schwarz (`#0003`) zu setzen, außer der ersten und letzten, die wir auf ein solides `black` setzen.

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
- {{cssxref("column-rule")}} Kurzschreibweise
- {{cssxref("rule-color")}} Kurzschreibweise
- {{cssxref("rule")}} Kurzschreibweise
- [CSS Lücken](/de/docs/Web/CSS/Guides/Gaps) Modul
