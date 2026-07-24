---
title: "`column-rule-width` CSS property"
short-title: column-rule-width
slug: Web/CSS/Reference/Properties/column-rule-width
l10n:
  sourceCommit: e9c03ba87f9ff4123150d8f7dc457bd546bdab83
---

Die **`column-rule-width`**-Eigenschaft von [CSS](/de/docs/Web/CSS) definiert die Breiten der Linien, die zwischen den Spalten in Multi-Column-, Flex- und Multi-Column-Layouts gezogen werden.

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

Die `column-rule-width`-Eigenschaft akzeptiert eine komma-separierte Liste von Werten, darunter:

- {{cssxref("&lt;line-width&gt;")}}
  - : Definiert die Breite der Linie, entweder als explizite nicht-negative {{cssxref("&lt;length&gt;")}} oder über die Schlüsselwörter: `thin`, `medium` oder `thick`. Der Standard ist `medium`.
- `<repeat-line-width>`
  - : Eine {{cssxref("repeat()")}} Funktion, bei der das erste Argument ein {{cssxref("&lt;integer&gt;")}} von `1` oder mehr ist und als nachfolgende Argumente ein oder mehrere {{cssxref("&lt;line-width&gt;")}} Werte angegeben sind. Der Integer definiert, wie oft die `<line-width>`-Werte wiederholt werden sollen.

- `<auto-repeat-line-width>`
  - : Eine {{cssxref("repeat()")}} Funktion, bei der `auto` das erste Argument ist und ein oder mehrere `<line-width>`-Werte als nachfolgende Argumente angegeben werden. Die bereitgestellten `<line-width>`-Werte werden so oft wie nötig wiederholt, um Werte für alle Spaltenlinien zu füllen, die nicht explizit durch andere Komponenten des Eigenschaftswerts spezifiziert sind.

## Beschreibung

Die `column-rule-width`-Eigenschaft definiert die Breiten aller Spaltenlinien, die in den Zwischenspalten zwischen benachbarten Spalten in [multi-column](/de/docs/Web/CSS/Guides/Multicol_layout), [flex](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [grid](/de/docs/Web/CSS/Guides/Grid_layout) Containern mit mehr als einer Spalte gezeichnet werden.

> [!NOTE]
> Die `column-rule-width` definiert nur die Breite der in den Abständen gezeichneten Linien. Diese Linien haben keinen Einfluss auf das [Box-Modell](/de/docs/Web/CSS/Guides/Box_model/Introduction) oder das Layout. Die Größe des Abstands wird durch die {{cssxref("gap")}}-Eigenschaft definiert; mit dem Standardwert `1em` für Multi-Column-Container und `0` in allen anderen Kontexten. Wenn die Breite einer Regel breiter als das {{cssxref("gap")}} ist, wird die Linie hinter dem Spalteninhalt gezeichnet.

Der Wert ist eine komma-separierte Liste von Komponenten, die `<line-width>`, `<repeat-line-width>` und `<auto-repeat-line-width>` Typen enthalten kann.

Die `column-rule-width` kann zusammen mit den {{cssxref("column-rule-color")}} und {{cssxref("column-rule-style")}} Eigenschaften auch mit dem {{cssxref("column-rule")}} Kurzschreibweise eingestellt werden, während {{cssxref("rule-width")}} eine Kurzschreibweise ist, die sowohl die `column-rule-width` als auch die {{cssxref("row-rule-width")}} Eigenschaften setzt.

Ein `<line-width>` kann als jeder gültige CSS {{cssxref("&lt;line-width&gt;")}} Wert deklariert werden: die Schlüsselwörter `thin`, `medium` oder `thick`, oder ein positiver {{cssxref("length")}} Wert. Prozentwerte sind ungültig.

Wenn der Eigenschaftswert nur aus einem `<line-width>` besteht, sind alle Spaltenregeln diese Breite. Wenn wir das Folgende deklarieren, werden alle Spaltenregeln `2px` sein:

```css
column-rule-width: 2px;
```

Wenn mehr als ein `<line-width>` deklariert wird, werden sie in der angegebenen Reihenfolge auf die Spaltenregeln angewendet. Wenn es mehr Spaltenregeln als `<line-width>` Werte gibt, wird die Liste der Linienbreiten wiederholt, bis jede Regel eine Breite hat. Wenn wir das Folgende deklarieren, wird zum Beispiel jede ungerade Regel `thick` sein, und jede gerade Regel wird `0.25rem` sein.

```css
column-rule-width: thick, 0.25rem;
```

### Wiederholte Linienbreiten

Die `repeat()` Funktion mit einem Integer von `1` oder größer als erstes Argument kann verwendet werden, um eine gültige Liste von CSS {{cssxref("&lt;line-width&gt;")}} Werten in den nachfolgenden Argumenten die angegebene Anzahl von Malen zu wiederholen. Dies ermöglicht es, die gleiche Breite eine festgelegte Anzahl von Malen zu wiederholen, ohne dass die gleiche `<line-width>` mehrfach wiederholt wird. Die folgenden Deklarationen sind gleichwertig:

```css
column-rule-width: 1rem, thick, thin, thick, thin, thick, thin;
column-rule-width: 1rem, repeat(3, thick, thin);
```

Sie können jede `<line-width>`-Werte verwenden, einschließlich benutzerdefinierte Eigenschaften, die zu einem `<line-width>` aufgelöst werden. Die Verwendung von `repeat()` kann es einfacher machen, Werte zu schreiben, insbesondere bei der Verwendung komplexer Längenberechnungen. Es ermöglicht, ein wiederkehrendes Muster mit einer einzigen Funktion zu schreiben, unabhängig von der Anzahl der Spalten. Die folgenden Deklarationen sind gleichwertig:

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

Dies erzeugt eine Liste von 12 Breiten. Wenn die Anzahl der Breiten in der Werteliste von `column-rule-width` die Anzahl der Spaltenabstände übersteigt, werden die überschüssigen Breitenwerte ignoriert. Wenn der Container drei Spalten hat, wird die Regel im ersten Abstand `1rem` breit sein, und die zweite wird durch die {{cssxref("min()")}} Funktion bestimmt.

Wenn es mehr Abstände als Breiten gibt, wird die Liste der Breiten wiederholt. Wenn der Container 13 oder 25 Spalten hat, wird diese Sequenz von Breiten ein- oder zweimal wiederholt, wobei die letzte Regel `thin` sein wird. Für jede andere Anzahl von Spalten bis zu 25 wird die letzte Regel nicht `thin` sein.

### Automatisch wiederholende Linienbreiten

Die `repeat()` Funktion akzeptiert auch `auto` als das erste Argument anstelle eines positiven Integers. Mit `auto` als das erste Argument wird die Liste von `<line-width>` Werten, die als nachfolgende Argumente übergeben werden, so oft wie nötig wiederholt, um Werte für alle Spaltenregeln zu füllen, die nicht explizit durch andere Komponenten des Eigenschaftswertes spezifiziert sind.

```css
column-rule-width: 10px, repeat(auto, thin), 10px;
```

In diesem Fall wird die erste Spaltenregel `10px` sein, die letzte wird `10px` sein und alle anderen werden `thin` sein. Es spielt keine Rolle, ob der Container 3, 6, 11, 16 oder 21 Spalten hat, die erste und letzte Spalten werden immer `10px` sein. Das bedeutet, dass es, wenn es nur 2 oder 3 Spalten gibt, keine dünngroßen Spaltenregeln geben wird.

Das `auto`-Schlüsselwort innerhalb der `repeat()` Funktion erzeugt einen automatischen Wiederholer, der Werte für die Zeilenregel-Breiten füllt, die ansonsten keine Werte von anderen Teilen der Liste erhalten würden, und verhindert, dass die Liste durchläuft. Ein `column-rule-width`-Wert kann höchstens ein `repeat(auto, <line-width>)` enthalten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel demonstriert die Verwendung eines einzigen Schlüsselwortwertes, um alle Spaltenregeln auf die gleiche Größe zu setzen.

#### HTML

Wir fügen einen Absatz von Text ein:

```html
<p>
  This is a bunch of text split into three columns. The `column-rule-width`
  property is used to change the width of the line that is drawn between
  columns. Don't you think that's wonderful?
</p>
```

#### CSS

Wir erstellen einen Multi-Column-Container mit der {{cssxref("column-count")}}-Eigenschaft. Da die {{cssxref("column-rule-style")}}-Eigenschaft standardmäßig `none` ist, müssen wir sie auf einen sichtbaren Wert setzen, damit die Spaltenregeln gezeichnet werden. Dann setzen wir die `column-rule-width` auf `thick`, wodurch die {{cssxref("column-rule-color")}} zu `currentcolor` standardisiert.

```css
p {
  column-count: 3;
  column-rule-style: solid;

  column-rule-width: thick;
}
```

#### Ergebnis

{{EmbedLiveSample("Basic usage")}}

In Multi-Column-Layouts ist die {{cssxref("gap")}}-Eigenschaft standardmäßig `1em`, was breiter als unsere `column-rule-width` ist, sodass die Linien nicht über unseren Inhalt gezeichnet werden.

### Mehrere Werte

Dieses Beispiel demonstriert die Verwendung mehrerer Werte für die `column-rule-width`-Eigenschaft. Es zeigt auch, dass Regeln, die über die Abstände hinausgehen, hinter dem Inhalt gezeichnet werden.

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

Wir definieren die Liste als Flex-Container und erstellen Spalten, indem wir die {{cssxref("flex-direction")}} auf `row` mit der {{cssxref("flex-flow")}}-Kurzschreibweise setzen. Wir fügen eine `column-rule-width` mit zehn `<line-width>`-Werten ein, die jeweils größer als der vorherige sind.

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

Da es mehr Werte (10) als Abstände (8) gibt, werden die Werte `9px` und `10px` nicht verwendet.

Die {{cssxref("gap")}} standardisiert zu `normal`, was in Flexbox zu `0` aufgelöst wird. Die `column-rule-width` definiert nur die Breite einer gezeichneten Linie und hat keinen Einfluss auf das Layout. Die Linien werden hinter dem Inhalt gezeichnet.

### Wiederholende Werte

Dieses Beispiel zeigt, wie, wenn es weniger Werte in der Liste der Breiten als Spaltenregeln gibt, die Werte wiederholt werden.

Mit dem gleichen HTML und CSS wie im vorherigen Beispiel fügen wir drei komma-separierte Breiten als `column-rule-width`-Wert ein:

```css live-sample___repeat
ul {
  column-rule-width: 1px, 5px, 10px;
}
```

#### Ergebnis

{{EmbedLiveSample("Repeat", "", "180")}}

### Verwendung der `repeat()`-Funktion

Dieses Beispiel demonstriert die Verwendung der `repeat()`-Funktion innerhalb des `column-rule-width`-Eigenschaftswertes und wie diese Funktion helfen kann, die Ausführlichkeit der Wertedeklarationen zu reduzieren.

Wir verwenden das gleiche HTML und CSS wie in den vorherigen Beispielen. Um zu demonstrieren, wie Werte ausführlich werden können und den Nutzen der `repeat()`-Funktion, deklarieren wir zwei benutzerdefinierte Eigenschaften, die wir in `repeat()`-Funktionsdeklarationen verwenden. Die `repeat()`-Funktion setzt die Liste von zwei `<line-width>`-Werten, um 3 Mal wiederholt zu werden.

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

Der Flex-Container hat neun Spalten, also acht Abstände. Die `repeat()`-Funktion wiederholt zwei Breitenwerte vier Mal und erstellt eine Liste von zehn Breitenwerten. Da es weniger Spaltenabstände als Breiten insgesamt gibt, werden die letzten beiden Werte in der Liste verworfen.

### Verwenden von `auto` innerhalb von `repeat()`

Dieses Beispiel zeigt die Verwendung von `auto` anstelle eines Integers innerhalb der `repeat()`-Funktion.

Mit `repeat(auto, <line-width>)` setzen wir alle Spaltenregeln auf `1px`, außer der ersten und der letzten, die wir auf `5px` setzen.

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
- {{cssxref("column-rule")}} Kurzschreibweise
- {{cssxref("row-rule-width")}}
- {{cssxref("rule-width")}} Kurzschreibweise
- {{cssxref("rule")}} Kurzschreibweise
- [CSS-Abstände](/de/docs/Web/CSS/Guides/Gaps) Modul
