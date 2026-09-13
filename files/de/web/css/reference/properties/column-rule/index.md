---
title: "`column-rule` CSS-Eigenschaft"
short-title: column-rule
slug: Web/CSS/Reference/Properties/column-rule
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

Die **`column-rule`** [CSS](/de/docs/Web/CSS) [Kurznotation](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) setzt die Breite, den Stil und die Farbe der Linien, die zwischen Spalten in Mehrspalten-Layouts, Flex- und Grid-Layouts gezeichnet werden.

{{InteractiveExample("CSS Demo: column-rule")}}

```css interactive-example-choice
column-rule: solid;
```

```css interactive-example-choice
column-rule: groove 0.8em teal;
```

```css interactive-example-choice
column-rule:
  dotted thick teal,
  repeat(3, dashed pink 1px, outset olive 5px);
```

```css interactive-example-choice
column-rule:
  dotted thick teal,
  repeat(auto, dashed pink 1px, dashed pink 5px),
  dotted thick teal;
```

```css interactive-example-choice
column-rule:
  dashed medium olive,
  repeat(auto, dotted pink 1px),
  inset orange 5px;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    London. Lady Catnip sitting in Lincoln's Inn Hall. Nice May weather. As much
    mud in the streets as if the waters had but newly retired from the face of
    the earth, and it would not be great to meet a Fred, two feet long or so,
    waddling like an iguana up Holborn Hill.
  </p>
</section>
```

```css interactive-example
#example-element {
  columns: 7;
}
```

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurznotation für die folgenden CSS-Eigenschaften:

- {{Cssxref("column-rule-color")}}
- {{Cssxref("column-rule-style")}}
- {{Cssxref("column-rule-width")}}

## Syntax

```css
/* One value */
column-rule: dashed;
column-rule: inset 8px;
column-rule: solid teal;
column-rule: thick outset rgb(18 122 67);

/* Multiple values */
column-rule: groove, dashed, solid;
column-rule:
  dotted medium teal,
  dashed pink 0.5em,
  outset olive 1px;
column-rule:
  solid #0ff,
  repeat(3, dashed pink 1px, outset olive 5px);
column-rule:
  inset 3px yellow,
  repeat(auto, dashed pink 1px, groove olive 5px);

/* Global values */
column-rule: inherit;
column-rule: initial;
column-rule: revert;
column-rule: revert-layer;
column-rule: unset;
```

### Werte

Diese Eigenschaft wird als kommagetrennte Liste von Werten angegeben. Jeder Wert kann eine der folgenden Werttypen sein:

- `<gap-rule>`
  - : Angegeben als einer, zwei oder drei der unten aufgeführten Werte, in beliebiger Reihenfolge.
    - `<'line-width'>`
      - : Eine {{cssxref("&lt;line-width&gt;")}}: Dies kann eines der Schlüsselwörter `thin`, `medium` oder `thick` sein oder ein positiver {{cssxref("length")}}-Wert, der die Breite der Linie darstellt. Der Standardwert ist `medium`.
    - `<'line-style'>`
      - : Ein {{cssxref("&lt;line-style&gt;")}}: einer von `none`, `hidden`, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset` oder `outset`. Der Standardwert ist `none`. Siehe {{cssxref("column-rule-style")}}.
    - `<'color'>`
      - : Ein {{cssxref("&lt;color&gt;")}}-Wert, der die Farbe der Linie darstellt. Der Standardwert ist `currentcolor`. Siehe {{cssxref("column-rule-color")}}.

- `<gap-repeat-rule>`
  - : Eine {{cssxref("repeat()")}}-Funktion, mit einer {{cssxref("&lt;integer&gt;")}} von `1` oder mehr als erstem Argument und einem oder mehreren `<gap-rule>` Werten als nachfolgende Argumente. Die `<integer>` gibt an, wie oft die Liste der `<gap-rule>` Werte wiederholt werden soll.

- `<gap-auto-repeat-rule>`
  - : Eine {{cssxref("repeat()")}}-Funktion, mit `auto` als erstem Argument und einem oder mehreren `<gap-rule>` Werten als nachfolgende Argumente. Die bereitgestellte Liste der `<gap-rule>` Werte wird so oft wiederholt, wie nötig, um Werte für alle Spaltenregeln zu füllen, die nicht explizit von anderen Komponenten des Eigenschaftswerts angegeben werden.

## Beschreibung

Die `column-rule`-Eigenschaft definiert den Linienstil aller Linien, die in den Lücken zwischen Spalten in [Mehrspalten-](/de/docs/Web/CSS/Guides/Multicol_layout), [Flex-](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Grid-](/de/docs/Web/CSS/Guides/Grid_layout) Containern mit mehr als einer Spalte gezeichnet werden.

`column-rule` ist eine Kurznotation für {{cssxref("column-rule-color")}}, {{cssxref("column-rule-style")}}, und {{cssxref("column-rule-width")}}. Die `column-rule`, zusammen mit der {{cssxref("row-rule")}}-Kurznotation, kann auch mit der {{cssxref("rule")}}-Kurznotation gesetzt werden.

Der Eigenschaftswert ist eine kommagetrennte Liste von Komponenten, die `<gap-rule>`, `<gap-repeat-rule>` und `<gap-auto-repeat-rule>` Typen enthalten kann. Jede `<gap-rule>` definiert die Breite, die Farbe und den Stil von einer oder mehreren Linienelementen.

Wenn der Eigenschaftswert nur aus einer `<gap-rule>` besteht, werden alle Spaltenregeln diesen Stil haben. Wenn wir folgendes deklarieren, werden alle Spaltenregeln `dashed maroon 3px` sein:

```css
column-rule: dashed maroon 3px;
```

Wenn mehr als eine `<gap-rule>` deklariert wird, werden sie in der angegebenen Reihenfolge auf die Spaltenregeln angewendet. Wenn es mehr Zwischenräume zwischen Spalten als `<gap-rule>` Werte gibt, wird die Liste der Werte wiederholt, bis jede Spaltenregel eine Lücke hat. Wenn wir das Folgende deklarieren, wird zum Beispiel jede ungerade Regel `dashed maroon 3px` sein und jede gerade Regel `dotted navy 5px`.

```css
column-rule:
  dashed maroon 3px,
  dotted navy 5px;
```

### Wiederholte Linienstile

Die `repeat()`-Funktion, mit einer Ganzzahl von `1` oder höher als erstem Argument, kann verwendet werden, um eine gültige Liste von CSS [`<gap-rule>`](#gap-rule)-Werten, die als nachfolgende Argumente übergeben werden, die angegebene Anzahl von Malen zu wiederholen. Dies ermöglicht das wiederholte Anwenden der gleichen `<gap-rule>` ohne die gleiche CSS mehrmals anzugeben. Die folgenden Deklarationen sind gleichwertig:

```css
column-rule:
  solid maroon 5px,
  outset navy 10px,
  inset olive 1px,
  outset navy 10px,
  inset olive 1px,
  outset navy 10px,
  inset olive 1px;
column-rule:
  solid maroon 5px,
  repeat(3, outset navy 10px, inset olive 1px);
```

Dies erstellt eine Liste von sieben Regeln. Wenn die Anzahl der Stile in der `column-rule`-Wertstil-Liste die Anzahl der Lücken zwischen den Spalten überschreitet, werden die überzähligen Stilwerte ignoriert. Wenn der Container, auf den dies angewendet wird, drei Spalten hat, wird die Regel im ersten Zwischenraum `solid maroon 5px` und die zweite `outset navy 10px` sein.

Wenn es mehr Zwischenräume als Stile gibt, wird die Liste der Stile wiederholt. Wenn der Container 8, 15, 22 oder 29 Spalten hat, wird diese Sequenz von Stilen ein-, zwei-, drei- oder viermal wiederholt, wobei die letzte Regel `inset olive 1px` sein wird.

### Auto-wiederholende Linienstile

Die `repeat()`-Funktion akzeptiert auch `auto` als erstes Argument anstelle einer positiven Ganzzahl. Mit `auto` als erstem Argument werden die [`<gap-rule>`](#gap-rule)-Werte, die als nachfolgende Argumente übergeben werden, so oft wiederholt, wie nötig, um Werte für alle Regeln zu füllen, die nicht explizit von anderen Komponenten des Eigenschaftswerts angegeben werden.

```css
column-rule:
  solid maroon 5px,
  repeat(auto, dotted olive 1px, dashed navy 1px),
  solid maroon 5px;
```

In diesem Fall werden die ersten und letzten Spaltenregeln `solid maroon 5px` sein, und alle anderen werden zwischen `dotted olive 1px` und `dashed navy 1px` wechseln. Es spielt keine Rolle, ob der Container 3, 6, 11, 16 oder 21 Spalten hat; die ersten und letzten Zwischenräume werden immer eine dicke, solide, kastanienbraune Linie als Trennlinie haben (sofern {{cssxref("column-rule-visibility-items")}} nicht dazu führt, dass keine Linie gezeichnet wird), und alle anderen Spaltenregeln werden dünne, gepunktete olivgrüne oder gestrichelte marineblaue Linien sein. Wenn es nur 2 oder 3 Spalten gibt, gibt es keine gepunkteten oder gestrichelten Linien.

Das `auto`-Schlüsselwort innerhalb der `repeat()`-Funktion erstellt einen Auto-Wiederholer, der Werte für Spaltenregeln füllt, die sonst keine Werte von anderen Teilen der Liste erhalten würden, um zu verhindern, dass die Liste umkreist wird. Höchstens kann nur ein `repeat(auto, <gap-rule>)` in einem `column-rule`-Wert vorhanden sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel definieren wir eine einzelne Regel für die Linien zwischen Flex-Elementen.

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

Wir definieren die Liste als Flex-Container und erzeugen Spalten, indem wir die {{cssxref("flex-direction")}} auf `row` setzen, unter Verwendung der {{cssxref("flex-flow")}} Kurznotation. Wir fügen eine {{cssxref("gap")}} von `12px` hinzu, um genügend Platz zwischen den Spalten für unsere `10px groove maroon` Regel zu schaffen:

```css live-sample___basic live-sample___repeat live-sample___func live-sample___auto
ul {
  display: flex;
  flex-flow: row;
  gap: 12px;
  list-style-type: none;

  column-rule: 10px groove maroon;
}
```

#### Ergebnis

{{EmbedLiveSample("Basic", "", "180")}}

### Wiederholung von Werten

Dieses Beispiel zeigt, wie die Werte wiederholt werden, wenn es weniger Werte in der Liste der Stile gibt als Spaltenregeln. Es zeigt auch die Standardwerte für die Breite, Farbe und den Stil von `medium`, `currentcolor` und `none`.

Mit dem gleichen HTML und CSS wie im vorherigen Beispiel fügen wir vier kommagetrennte `<gap-rule>` Werte als `column-rule`-Wert hinzu, wobei die Breite in der ersten `<gap-rule>`, die Farbe in der zweiten und der Stil in der dritten ausgelassen werden, wobei die vierte alle drei Komponenten enthält:

```css live-sample___repeat
ul {
  column-rule:
    maroon dashed,
    1px dotted,
    5px teal,
    10px orange solid;
}
```

{{EmbedLiveSample("Repeat", "", "180")}}

Die kastanienbraune Linie ist `3px` breit. Die gepunktete Linie hat die gleiche Farbe wie der Text. Es gibt keine türkisfarbenen Linien, da das `<line-style>` der dritten `<gap-rule>` standardmäßig `none` ist, sodass keine Linie gezeichnet wird. Es gibt mehr Zwischenräume als `<gap-rule>` Werte, sodass die Liste der Werte wiederholt wird.

### Verwendung der `repeat()`-Funktion

Dieses Beispiel zeigt die Verwendung der `repeat()`-Funktion innerhalb des `column-rule` Eigenschaftswerts. Wir verwenden das gleiche HTML und CSS wie in den vorherigen Beispielen. Wir fügen eine `repeat()`-Funktion hinzu und setzen die Liste von zwei `<gap-rule>` Werten, um sie viermal zu wiederholen.

```css live-sample___func live-sample___auto
ul {
  column-rule:
    10px maroon dashed,
    repeat(4, dotted olive 3px, dashed teal 3px),
    10px maroon dashed;
}
```

{{EmbedLiveSample("func", "", "180")}}

Der Flex-Container hat neun Spalten, also acht Zwischenräume. Die `repeat()`-Funktion wiederholt zwei Stilwerte viermal, wodurch eine Liste von zehn `<gap-rule>` Werten entsteht. Da es weniger Spaltenzwischenräume als `<gap-rule>` Werte gibt, werden die letzten beiden Werte in der Liste verworfen.

### Verwendung von `auto` innerhalb von `repeat()`

Dieses Beispiel zeigt die Verwendung des `auto`-Arguments anstelle einer Ganzzahl in der `repeat()`-Funktion.

Durch die Verwendung von `repeat(auto, <gap-rule>)` setzen wir alle Spaltenregeln auf `1px` gepunktet und standardmäßig die aktuelle Farbe, außer den ersten und letzten, die wir auf `10px groove maroon` setzen.

```css live-sample___auto
ul {
  column-rule:
    10px groove maroon,
    repeat(auto, 3px dotted maroon),
    10px groove maroon;
}
```

{{EmbedLiveSample("auto", "", "180")}}

```css hidden live-sample___basic live-sample___repeat live-sample___func live-sample___auto
@layer no-support {
  @supports not (column-rule: thin, thick) {
    body::before {
      content: "Your browser doesn't support multiple values for the column-rule property";
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
- {{cssxref("column-rule-style")}}
- {{cssxref("row-rule")}} Kurznotation
- {{cssxref("rule")}} Kurznotation
- [CSS Abstand](/de/docs/Web/CSS/Guides/Gaps) Modul
