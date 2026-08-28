---
title: "`row-rule` CSS property"
short-title: row-rule
slug: Web/CSS/Reference/Properties/row-rule
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

{{SeeCompatTable}}

Die **`row-rule`** [CSS](/de/docs/Web/CSS) [Kurzform](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties)-Eigenschaft legt die Breite, den Stil und die Farbe der Linie fest, die zwischen den Zeilen in Layouts mit mehreren Zeilen, wie z.B. Raster-, Flex- und Mehrspalten-Layouts, gezeichnet wird.

{{InteractiveExample("CSS Demo: row-rule")}}

```css interactive-example-choice
row-rule: solid;
```

```css interactive-example-choice
row-rule: dotted medium blue;
```

```css interactive-example-choice
row-rule:
  dotted medium blue,
  repeat(3, dashed magenta 1px, outset green 5px);
```

```css interactive-example-choice
row-rule:
  dotted medium blue,
  repeat(auto, dashed magenta 1px, dashed magenta 5px),
  dotted medium blue;
```

```css interactive-example-choice
row-rule:
  dotted medium blue,
  repeat(auto, dashed magenta 1px),
  outset green 5px;
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
  gap: 7px;
  text-align: left;
}
```

## Bestandeigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("row-rule-color")}}
- {{cssxref("row-rule-style")}}
- {{cssxref("row-rule-width")}}

## Syntax

```css
/* One value */
row-rule: dotted;
row-rule: solid 8px;
row-rule: solid blue;
row-rule: thick inset blue;

/* Multiple values */
row-rule: groove, dashed, solid;
row-rule:
  dotted medium blue,
  dashed magenta 1px,
  outset green 5px;
row-rule:
  solid #0ff,
  repeat(3, dashed magenta 1px, outset green 5px);
row-rule:
  inset 3px yellow,
  repeat(auto, dashed magenta 1px, groove green 5px);

/* Global values */
row-rule: inherit;
row-rule: initial;
row-rule: revert;
row-rule: revert-layer;
row-rule: unset;
```

### Werte

Die `row-rule`-Eigenschaft akzeptiert eine durch Kommas getrennte Liste von Werten, einschließlich:

- `<gap-rule>`
  - : Angegeben als eines, zwei oder drei der unten aufgeführten Werte, in beliebiger Reihenfolge.
    - `<'line-width'>`
      - : Ein {{cssxref("&lt;line-width&gt;")}}: eine positive {{cssxref("&lt;length&gt;")}} oder eines der drei Schlüsselwörter `thin`, `medium` oder `thick`. Der Standardwert ist `medium`. Siehe {{cssxref("row-rule-width")}}.
    - `<'line-style'>`
      - : Ein {{cssxref("&lt;line-style&gt;")}}: einer von `none`, `hidden`, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset` oder `outset`. Der Standardwert ist `none`. Siehe {{cssxref("row-rule-style")}}.
    - `<'color'>`
      - : Ein {{cssxref("&lt;color&gt;")}}-Wert, der die Farbe der Linie darstellt. Der Standardwert ist `currentcolor`. Siehe {{cssxref("row-rule-color")}}.

- `<gap-repeat-rule>`
  - : Eine {{cssxref("repeat()")}}-Funktion, mit einer {{cssxref("&lt;integer&gt;")}} von `1` oder mehr als erstem Argument und einem oder mehreren `<gap-rule>`-Werten als nachfolgenden Argumenten. Der `<integer>` gibt an, wie oft die Liste der `<gap-rule>`-Werte wiederholt werden soll.

- `<gap-auto-repeat-rule>`
  - : Eine {{cssxref("repeat()")}}-Funktion, mit `auto` als erstem Argument und einem oder mehreren `<gap-rule>`-Werten als nachfolgenden Argumenten. Die angegebene Liste von `<gap-rule>`-Werten wird so oft wiederholt, wie nötig, um Werte für alle Zeilen-Regeln, die nicht explizit durch andere Komponenten des Eigenschaftswerts festgelegt wurden, auszufüllen.

## Beschreibung

Die `row-rule`-Eigenschaft definiert den Stil der Linien in den Lücken zwischen Zeilen in [Mehrspalten-](/de/docs/Web/CSS/Guides/Multicol_layout), [Flex-](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Raster-](/de/docs/Web/CSS/Guides/Grid_layout) Containern, die mehr als eine Zeile haben.

Die `row-rule` ist eine Kurzform für {{cssxref("row-rule-color")}}, {{cssxref("row-rule-style")}}, und {{cssxref("row-rule-width")}}. Die `row-rule`, zusammen mit der {{cssxref("column-rule")}}-Kurzform, kann auch mit der {{cssxref("rule")}}-Kurzform festgelegt werden.

Der Eigenschaftswert ist eine durch Kommas getrennte Liste von Komponenten, die `<gap-rule>`, `<gap-repeat-rule>`, und `<gap-auto-repeat-rule>`-Typen enthalten kann. Jedes `<gap-rule>` definiert die Breite, Farbe und den Stil einer oder mehrerer Linien.

Wenn der Eigenschaftswert nur aus einem `<gap-rule>` besteht, werden alle Zeilenregeln in diesem Stil dargestellt. Wenn wir Folgendes deklarieren, werden alle Zeilenregeln `dashed red 3px` sein:

```css
row-rule: dashed red 3px;
```

Wenn mehr als ein `<gap-rule>` deklariert ist, werden sie in der angegebenen Reihenfolge auf Zeilenregeln angewendet. Wenn es mehr Lücken zwischen den Zeilen als `<gap-rule>`-Werte gibt, wird die Liste der Werte wiederholt, bis jede Zeilenregel eine Lücke hat. Wenn wir zum Beispiel Folgendes deklarieren, wird jede ungerade Regel `dashed red 3px` und jede gerade Regel `dotted blue 5px` sein.

```css
row-rule:
  dashed red 3px,
  dotted blue 5px;
```

### Wiederholte Linienstile

Die `repeat()`-Funktion, mit einer Ganzzahl von `1` oder mehr als erstem Argument, kann verwendet werden, um eine gültige Liste von CSS [`<gap-rule>`](#gap-rule)-Werten, die als nachfolgende Argumente übermittelt werden, die angegebene Anzahl von Malen zu wiederholen. Dies ermöglicht es, dieselbe `<gap-rule>`-Regel eine festgelegte Anzahl von Malen zu wiederholen, ohne denselben CSS-Code mehrfach zu wiederholen. Die folgenden Deklarationen sind gleichwertig:

```css
row-rule:
  solid red 5px,
  outset blue 10px,
  inset green 1px,
  outset blue 10px,
  inset green 1px,
  outset blue 10px,
  inset green 1px;
row-rule:
  solid red 5px,
  repeat(3, outset blue 10px, inset green 1px);
```

Das erstellt eine Liste von sieben Regeln. Wenn die Anzahl der Stile in der `row-rule`-Werteliste die Anzahl der Lücken zwischen den Zeilen übersteigt, werden die überschüssigen Stilwerte ignoriert. Wenn der Container, auf den dies angewendet wird, drei Zeilen hat, wird die Regel in der ersten Lücke `solid red 5px` und die zweite `outset blue 10px` sein.

Wenn es mehr Lücken als Stile gibt, wird die Liste der Stile wiederholt. Wenn der Container 8, 15, 22 oder 29 Zeilen hat, wird diese Sequenz von Stilen ein, zwei, drei oder vier Mal wiederholt und die letzte Regel wird `inset green 1px` sein.

### Automatisch wiederholte Linienstile

Die `repeat()`-Funktion akzeptiert auch `auto` als erstes Argument anstelle einer positiven Ganzzahl. Mit `auto` als erstem Argument werden die [`<gap-rule>`](#gap-rule)-Werte, die als nachfolgende Argumente übermittelt werden, so oft wiederholt, wie nötig, um Werte für alle Regeln auszufüllen, die nicht explizit durch andere Komponenten des Eigenschaftswerts festgelegt wurden.

```css
row-rule:
  solid red 5px,
  repeat(auto, dotted green 1px, dashed blue 1px),
  solid red 5px;
```

In diesem Fall werden die erste und letzte Zeilenregel `solid red 5px` sein, und alle anderen werden zwischen `dotted green 1px` und `dashed blue 1px` wechseln. Es spielt keine Rolle, ob der Container 3, 6, 11, 16 oder 21 Zeilen hat; die ersten und letzten Lücken werden immer eine dicke, feste rote Linie zwischen ihnen gemalt haben (es sei denn {{cssxref("row-rule-visibility-items")}} bewirkt, dass keine Linie gezeichnet wird), und alle anderen Zeilenregeln werden dünne, gepunktete grüne oder gestrichelte blaue Linien sein. Wenn es nur 2 oder 3 Zeilen gibt, wird es keine gepunkteten oder gestrichelten Linien geben.

Das Schlüsselwort `auto` innerhalb der `repeat()`-Funktion erzeugt einen Auto-Wiederholer, der Werte für Zeilenregeln ausfüllt, die andernfalls keine Werte aus anderen Teilen der Liste erhalten würden, und verhindert, dass die Liste zyklisch wird. Es kann höchstens ein `repeat(auto, <gap-rule>)` in einem `row-rule`-Wert vorhanden sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel definieren wir eine einzige Regel für die zwischen Flex-Elementen gezeichneten Linien.

#### HTML

Wir fügen eine Liste dynamischer Sport-Duos ein:

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

Wir definieren die Liste als Flex-Container, indem wir durch Festlegen der {{cssxref("flex-direction")}} auf `column` mit der {{cssxref("flex-flow")}}-Kurzform Zeilen erstellen. Wir fügen eine {{cssxref("gap")}} von `5px` hinzu, um genug Platz zwischen den Zeilen für unsere `3px dashed red`-Regel zu schaffen:

```css live-sample___basic live-sample___repeat live-sample___func live-sample___auto
ul {
  display: flex;
  flex-flow: column;
  gap: 5px;

  row-rule: 3px red dashed;
}
```

#### Ergebnis

{{EmbedLiveSample("Basic", "", "180")}}

### Werte wiederholen

Dieses Beispiel zeigt, wie die Werte wiederholt werden, wenn es weniger Werte in der Liste der Stile als Zeilenregeln gibt. Es zeigt auch die Standardwerte für die Breite, die Farbe und den Stil als `medium`, `currentcolor` und `none` an.

Unter Verwendung desselben HTML- und CSS-Codes wie im vorherigen Beispiel enthalten wir vier durch Kommas getrennte `<gap-rule>`-Werte als den `row-rule`-Wert, wobei wir die Breite im ersten `<gap-rule>`, die Farbe im zweiten und den Stil im dritten weglassen, wobei der vierte alle drei Komponenten enthält:

```css live-sample___repeat
ul {
  row-rule:
    red dashed,
    1px dotted,
    5px blue,
    10px magenta solid;
}
```

{{EmbedLiveSample("Repeat", "", "180")}}

Die rote Linie ist `3px` breit, die gepunktete Linie hat dieselbe Farbe wie der Text und es gibt keine `5px` breite blaue Linie, da der Stil des dritten `<gap-rule>` standardmäßig `none` ist, sodass keine Linie gezeichnet wird.

### Verwenden der `repeat()`-Funktion

Dieses Beispiel zeigt die Verwendung der `repeat()`-Funktion innerhalb des `row-rule`-Eigenschaftswerts. Wir verwenden denselben HTML- und CSS-Code wie in den vorherigen Beispielen. Wir schließen eine `repeat()`-Funktion ein und geben an, dass die Liste aus zwei `<gap-rule>`-Werten dreimal wiederholt werden soll.

```css live-sample___func live-sample___auto
ul {
  row-rule:
    3px red dashed,
    repeat(3, dotted green 1px, dashed blue 1px),
    3px red dashed;
}
```

{{EmbedLiveSample("func", "", "180")}}

Der Flex-Container hat sechs Zeilen, also fünf Lücken. Die `repeat()`-Funktion wiederholt zwei Stilwerte dreimal und erstellt eine Liste mit acht Stilwerten. Da es weniger Zeilen-Lücken als insgesamt `<gap-rule>`-Werte gibt, werden die letzten drei Werte in der Liste verworfen.

### Verwendung von `auto` innerhalb von `repeat()`

Dieses Beispiel zeigt die Verwendung des `auto`-Arguments anstelle einer Ganzzahl in der `repeat()`-Funktion.

Mit `repeat(auto, <gap-rule>)` setzen wir alle Zeilenregeln auf `1px dotted` und standardmäßig auf die aktuelle Farbe, mit Ausnahme der ersten und letzten, die wir auf `3px solid red` setzen.

```css live-sample___auto
ul {
  row-rule:
    3px red solid,
    repeat(auto, 1px dotted),
    3px red solid;
}
```

{{EmbedLiveSample("auto", "", "180")}}

```css hidden live-sample___basic live-sample___repeat live-sample___func live-sample___auto
@layer no-support {
  @supports not (row-rule: thin, thick) {
    body::before {
      content: "Your browser doesn't support the row-rule property";
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
- {{cssxref("row-rule-width")}}
- {{cssxref("row-rule-style")}}
- {{cssxref("column-rule")}} Kurzform
- {{cssxref("rule")}} Kurzform
- [CSS-Lückenmodul](/de/docs/Web/CSS/Guides/Gaps)
