---
title: "`column-rule-width` CSS property"
short-title: column-rule-width
slug: Web/CSS/Reference/Properties/column-rule-width
l10n:
  sourceCommit: 5cf8432d980cbe9b7e5611d647d8566b5c4ff3ed
---

Die **`column-rule-width`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert die Breiten der Linien, die zwischen Spalten in einem Multi-Column-Grid, Flex- und Multi-Col-Layouts gezeichnet werden.

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

- `<line-width>`
  - : Ein {{cssxref("&lt;line-width&gt;")}}: Kann eines der Schlüsselwörter `thin`, `medium` oder `thick` sein oder ein positiver {{cssxref("length")}}-Wert, der die Breite der Linie darstellt. Der Standardwert ist `medium`.

- `<repeat-line-width>`
  - : Eine {{cssxref("repeat()")}}-Funktion, bei der das erste Argument ein {{cssxref("&lt;integer&gt;")}} von `1` oder mehr ist und ein oder mehrere {{cssxref("&lt;line-width&gt;")}}-Werte als nachfolgende Argumente. Der Integer definiert, wie oft die `<line-width>`-Werte wiederholt werden sollen.

- `<auto-repeat-line-width>`
  - : Eine {{cssxref("repeat()")}}-Funktion, bei der `auto` das erste Argument ist und ein oder mehrere `<line-width>`-Werte als nachfolgende Argumente. Die angegebenen `<line-width>`-Werte werden so oft wiederholt, wie nötig, um Werte für alle Column-Rules zu füllen, die nicht explizit durch andere Komponenten des Eigenschaftswerts spezifiziert werden.

## Beschreibung

Die `column-rule-width`-Eigenschaft definiert die Breiten der Linienelemente, die in den Zwischenräumen zwischen angrenzenden Spalten in [Multi-Column](/de/docs/Web/CSS/Guides/Multicol_layout), [Flex](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Grid](/de/docs/Web/CSS/Guides/Grid_layout) Containern mit mehr als einer Spalte gezeichnet werden.

> [!NOTE]
> Die `column-rule-width` definiert nur die Breite der in den Zwischenräumen gemalten Linien. Diese Linien haben keinen Einfluss auf das [Box-Modell](/de/docs/Web/CSS/Guides/Box_model/Introduction) oder das Layout. Die Größe des Zwischenraums wird durch die {{cssxref("gap")}}-Eigenschaft definiert; mit dem Standardwert `1em` bei Multi-Column-Containern und `0` in allen anderen Kontexten. Wenn die Breite einer Linie breiter ist als die {{cssxref("gap")}}, wird die Linie hinter dem Spalteninhalt gemalt.

Der Wert ist eine durch Kommas getrennte Liste von Komponenten, die `<line-width>`, `<repeat-line-width>` und `<auto-repeat-line-width>`-Typen enthalten können.

Die `column-rule-width`, zusammen mit den {{cssxref("column-rule-color")}} und {{cssxref("column-rule-style")}}-Eigenschaften, können auch mit dem {{cssxref("column-rule")}}-Kurzform-Attribut gesetzt werden, während {{cssxref("rule-width")}} eine Kurzform ist, die sowohl die `column-rule-width` als auch die {{cssxref("row-rule-width")}}-Eigenschaften setzt.

Ein `<line-width>` kann als jeder gültige CSS {{cssxref("&lt;line-width&gt;")}}-Wert deklariert werden: die Schlüsselwörter `thin`, `medium` oder `thick`, oder ein positiver {{cssxref("length")}}-Wert. Prozentwerte sind ungültig.

Wenn der Eigenschaftswert nur aus einem `<line-width>` besteht, werden alle Column-Rules diese Breite haben. Wenn wir folgendes deklarieren, werden alle Column-Rules `2px` sein:

```css
column-rule-width: 2px;
```

Wenn mehr als ein `<line-width>` deklariert wird, werden sie in der angegebenen Reihenfolge auf die Column-Rules angewendet. Gibt es mehr Column-Rules als `<line-width>`-Werte, wird die Liste der Linienbreiten so lange wiederholt, bis jede Regel eine Breite hat. Wenn wir zum Beispiel folgendes deklarieren, wird jede ungerade Regel `thick` und jede gerade Regel `0.25rem` sein.

```css
column-rule-width: thick, 0.25rem;
```

### Wiederholte Linienbreiten

Die `repeat()`-Funktion, mit einem Integer von `1` oder mehr als erstes Argument, kann verwendet werden, um eine gültige Liste von CSS {{cssxref("&lt;line-width&gt;")}}-Werten, die als nachfolgende Argumente übergeben werden, die angegebene Anzahl von Malen zu wiederholen. Dies ermöglicht es, dieselbe Breite eine bestimmte Anzahl von Malen zu wiederholen, ohne denselben `<line-width>` mehrfach einzutragen. Die folgenden Deklarationen sind gleichwertig:

```css
column-rule-width: 1rem, thick, thin, thick, thin, thick, thin;
column-rule-width: 1rem, repeat(3, thick, thin);
```

Sie können beliebige `<line-width>`-Werte verwenden, einschließlich benutzerdefinierter Eigenschaften, die sich zu einem `<line-width>` auflösen. Die Verwendung von `repeat()` kann es erleichtern, Werte zu schreiben, insbesondere bei der Verwendung komplexer Längenberechnungen. Es ermöglicht das Schreiben eines wiederkehrenden Musters mithilfe einer einzigen Funktion, unabhängig von der Anzahl der Spalten. Die folgenden Deklarationen sind gleichwertig:

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

Dies erstellt eine Liste von 12 Breiten. Wenn die Anzahl der Breiten in der Breitenliste des `column-rule-width`-Werts die Anzahl der Spaltenzwischenräume übersteigt, werden die überschüssigen Breitenwerte ignoriert. Hat der Container drei Spalten, wird die Linie im ersten Spaltengutter `1rem` breit sein, und die zweite wird durch die {{cssxref("min()")}}-Funktion bestimmt.

Gibt es mehr Zwischenräume als Breiten, wird die Liste der Breiten wiederholt. Hat der Container 13 oder 25 Spalten, wird diese Sequenz von Breiten ein- oder zweimal wiederholt, wobei die letzte Regel `thin` ist. Bei jeder anderen Anzahl von Spalten bis zu 25 wird die letzte Regel nicht `thin` sein.

### Auto-Wiederholen von Linienbreiten

Die `repeat()`-Funktion akzeptiert auch `auto` als erstes Argument anstelle eines positiven Integers. Mit `auto` als erstem Argument werden die Liste der `<line-width>`-Werte, die als nachfolgende Argumente übergeben werden, so oft wie nötig wiederholt, um Werte für alle Column-Rules zu füllen, die nicht explizit durch andere Komponenten des Eigenschaftswerts spezifiziert werden.

```css
column-rule-width: 10px, repeat(auto, thin), 10px;
```

In diesem Fall wird die erste Column-Rule `10px` sein, die letzte `10px`, und alle anderen werden `thin` sein. Es spielt keine Rolle, ob der Container 3, 6, 11, 16 oder 21 Spalten hat, die erste und die letzte Spalte werden immer `10px` sein. Das bedeutet, dass es keine dünnen Spaltenlinien geben wird, wenn es nur 2 oder 3 Spalten gibt.

Das `auto`-Schlüsselwort in der `repeat()`-Funktion erstellt einen Auto-Repeater, der Werte für die Zeilenregelbreiten auffüllt, die sonst keine Werte von anderen Teilen der Liste erhalten würden und verhindert, dass die Liste durchlaufen wird. Ein `column-rule-width`-Wert kann höchstens einen `repeat(auto, <line-width>)` enthalten.

## Formalde Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt die Verwendung eines einzelnen Schlüsselwortwerts, indem alle Column-Rules auf dieselbe Größe gesetzt werden.

#### HTML

Wir fügen einen Absatz Text hinzu:

```html
<p>
  This is a bunch of text split into three columns. The `column-rule-width`
  property is used to change the width of the line that is drawn between
  columns. Don't you think that's wonderful?
</p>
```

#### CSS

Wir erstellen einen Multi-Column-Container mit der {{cssxref("column-count")}} Eigenschaft. Da die {{cssxref("column-rule-style")}} Eigenschaft standardmäßig auf `none` gesetzt ist, müssen wir sie auf einen sichtbaren Wert setzen, damit die Column-Rules gezeichnet werden. Wir setzen dann die `column-rule-width` auf `thick` und lassen die {{cssxref("column-rule-color")}} auf `currentcolor` standardisieren.

```css
p {
  column-count: 3;
  column-rule-style: solid;

  column-rule-width: thick;
}
```

#### Ergebnis

{{EmbedLiveSample("Basic usage")}}

In Multi-Column-Layouts ist die {{cssxref("gap")}} Eigenschaft standardmäßig auf `1em` gesetzt, was breiter ist als unsere `column-rule-width`, sodass die Linien nicht über unseren Inhalt gezeichnet werden.

### Mehrere Werte

Dieses Beispiel zeigt die Verwendung mehrerer Werte für die `column-rule-width` Eigenschaft. Es zeigt auch, dass Regeln, die Zwischenräume überschreiten, hinter dem Inhalt gemalt werden.

#### HTML

Wir fügen eine Liste von Autoren hinzu:

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

Wir definieren die Liste als Flex-Container und erstellen Spalten, indem wir die {{cssxref("flex-direction")}} auf `row` setzen, indem wir die {{cssxref("flex-flow")}} Kurzform verwenden. Wir fügen eine `column-rule-width` mit zehn `<line-width>`-Werten hinzu, die jeweils größer als der vorherige sind.

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

Die {{cssxref("gap")}} Eigenschaft hat in Flexbox standardmäßig `normal`, was sich zu `0` auflöst. Die `column-rule-width` definiert nur die Breite einer gemalten Linie und hat keinen Einfluss auf das Layout. Die Linien werden hinter dem Inhalt gezeichnet.

### Wiederholende Werte

Dieses Beispiel zeigt, wie die Werte wiederholt werden, wenn in der Liste der Breiten weniger Werte vorhanden sind als Column-Rules.

Mit dem gleichen HTML und CSS wie im vorherigen Beispiel fügen wir drei durch Kommas getrennte Breiten als `column-rule-width`-Wert hinzu:

```css live-sample___repeat
ul {
  column-rule-width: 1px, 5px, 10px;
}
```

#### Ergebnis

{{EmbedLiveSample("Repeat", "", "180")}}

### Verwendung der `repeat()`-Funktion

Dieses Beispiel zeigt, wie die `repeat()`-Funktion innerhalb des `column-rule-width` Werte und wie diese Funktion helfen kann, die Geschwätzigkeit von Wertdeklarationen zu reduzieren.

Wir verwenden das gleiche HTML und CSS wie in den vorherigen Beispielen. Um zu demonstrieren, wie Werte geschwätzig werden können und den Nutzen der `repeat()`-Funktion, deklarieren wir zwei benutzerdefinierte Eigenschaften, die wir in `repeat()`-Funktionsdeklarationen verwenden. Die `repeat()`-Funktion setzt die Liste von zwei `<line-width>`-Werten darauf, dreimal wiederholt zu werden.

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

Der Flex-Container hat neun Spalten, sodass acht Zwischenräume vorhanden sind. Die `repeat()`-Funktion wiederholt zwei Breitenwerte viermal und erstellt eine Liste von zehn Breitenwerten. Da es weniger Spaltenzwischenräume als gesamte Breiten gibt, werden die letzten beiden Werte der Liste verworfen.

### Verwendung von `auto` innerhalb von `repeat()`

Dieses Beispiel zeigt die Verwendung von `auto` anstelle eines Integers innerhalb der `repeat()`-Funktion.

Indem wir `repeat(auto, <line-width>)` verwenden, setzen wir alle Spaltenregeln auf `1px`, außer der ersten und der letzten, die wir auf `5px` setzen.

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
      content: "Your browser doesn't support the column-rule-width property";
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
- {{cssxref("column-rule")}} Kurzform
- {{cssxref("row-rule-width")}}
- {{cssxref("rule-width")}} Kurzform
- {{cssxref("rule")}} Kurzform
- [CSS Lücken](/de/docs/Web/CSS/Guides/Gaps) Modul
