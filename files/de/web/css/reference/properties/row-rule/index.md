---
title: "`row-rule` CSS property"
short-title: row-rule
slug: Web/CSS/Reference/Properties/row-rule
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

{{SeeCompatTable}}

Die **`row-rule`** [Kurzform](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft legt die Breite, den Stil und die Farbe der Linie fest, die zwischen den Reihen in einem mehrzeiligen Raster-, Flex- und Mehrspalten-Layout gezeichnet wird.

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

## Bestandteile der Eigenschaft

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
  - : Angegeben als ein, zwei oder drei der unten aufgeführten Werte, in beliebiger Reihenfolge.
    - `<'line-width'>`
      - : Ein {{cssxref("&lt;line-width&gt;")}}: eine positive {{cssxref("&lt;length&gt;")}} oder eines der drei Schlüsselwörter, `thin`, `medium` oder `thick`. Der Standardwert ist `medium`. Siehe {{cssxref("row-rule-width")}}.
    - `<'line-style'>`
      - : Ein {{cssxref("&lt;line-style&gt;")}}: eines von `none`, `hidden`, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset` oder `outset`. Der Standardwert ist `none`. Siehe {{cssxref("row-rule-style")}}.
    - `<'color'>`
      - : Ein {{cssxref("&lt;color&gt;")}} Wert, der die Farbe der Linie darstellt. Der Standardwert ist `currentcolor`. Siehe {{cssxref("row-rule-color")}}.

- `<gap-repeat-rule>`
  - : Eine {{cssxref("repeat()")}} Funktion, mit einem {{cssxref("&lt;integer&gt;")}} von `1` oder mehr als erstem Argument und einem oder mehreren `<gap-rule>` Werten als nachfolgende Argumente. Der `<integer>` gibt an, wie oft die Liste der `<gap-rule>` Werte wiederholt werden soll.

- `<gap-auto-repeat-rule>`
  - : Eine {{cssxref("repeat()")}} Funktion, mit `auto` als erstem Argument und einem oder mehreren `<gap-rule>` Werten als nachfolgende Argumente. Die bereitgestellte Liste von `<gap-rule>` Werten wird so oft wie nötig wiederholt, um Werte für alle Reihenregeln zu liefern, die nicht explizit von anderen Komponenten des Eigenschaftswerts spezifiziert sind.

## Beschreibung

Die `row-rule`-Eigenschaft definiert den Linienstil der Linien, die in den Lücken zwischen Reihen in [mehrspaltigen](/de/docs/Web/CSS/Guides/Multicol_layout), [flexiblen](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Raster-](/de/docs/Web/CSS/Guides/Grid_layout) Containern mit mehr als einer Reihe gezeichnet werden.

Die `row-rule` ist eine Kurzform für {{cssxref("row-rule-color")}}, {{cssxref("row-rule-style")}}, und {{cssxref("row-rule-width")}}. Die `row-rule`, zusammen mit der {{cssxref("column-rule")}} Kurzform, kann auch mit der {{cssxref("rule")}} Kurzform eingestellt werden.

Der Eigenschaftswert ist eine durch Kommas getrennte Liste von Komponenten, die `<gap-rule>`, `<gap-repeat-rule>`, und `<gap-auto-repeat-rule>` Typen enthalten kann. Jedes `<gap-rule>` definiert die Breite, Farbe und den Stil einer oder mehrerer Linien.

Besteht der Eigenschaftswert nur aus einem `<gap-rule>`, werden alle Reihenregeln diesen Stil haben. Wenn wir Folgendes deklarieren, werden alle Reihenregeln `dashed red 3px` sein:

```css
row-rule: dashed red 3px;
```

Wenn mehr als ein `<gap-rule>` deklariert wird, werden sie in der festgelegten Reihenfolge auf die Reihenregeln angewendet. Wenn es mehr Lücken zwischen den Reihen gibt als `<gap-rule>` Werte, wird die Liste der Werte wiederholt, bis jede Reihenregel eine Lückenlinie hat. Wenn wir Folgendes deklarieren, wird zum Beispiel jede ungerade Regel `dashed red 3px` und jede gerade Regel `dotted blue 5px` sein.

```css
row-rule:
  dashed red 3px,
  dotted blue 5px;
```

### Wiederholte Linienstile

Die `repeat()` Funktion, mit einem Integer von `1` oder größer als erstem Argument, kann verwendet werden, um eine gültige Liste von CSS [`<gap-rule>`](#gap-rule) Werten, die als nachfolgende Argumente übergeben werden, die angegebene Anzahl von Malen zu wiederholen. Dadurch kann dasselbe `<gap-rule>` mehrfach wiederholt werden, ohne dass derselbe CSS-Code mehrfach wiedergegeben wird. Die folgenden Deklarationen sind äquivalent:

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

Dies erstellt eine Liste von sieben Regeln. Wenn die Anzahl der Stile in der Listen der Stile des `row-rule`-Werts die Anzahl der Lücken zwischen den Reihen überschreitet, werden die überschüssigen Stilwerte ignoriert. Wenn der Container, auf dem dies angewendet wird, drei Reihen hat, wird die Regel in der ersten Lücke `solid red 5px` sein und die zweite `outset blue 10px`.

Wenn es mehr Lücken als Stile gibt, wird die Liste der Stile wiederholt. Wenn der Container 8, 15, 22 oder 29 Reihen hat, wird diese Sequenz von Stilen ein-, zwei-, drei- oder viermal wiederholt, wobei die letzte Regel `inset green 1px` sein wird.

### Automatisch wiederholende Linienstile

Die `repeat()` Funktion akzeptiert auch `auto` als erstes Argument anstelle eines positiven Integers. Mit `auto` als erstes Argument werden die [`<gap-rule>`](#gap-rule) Werte, die als nachfolgende Argumente übergeben werden, so oft wiederholt, wie erforderlich, um Werte für alle Regeln zu liefern, die nicht von anderen Komponenten des Eigenschaftswerts explizit angegeben sind.

```css
row-rule:
  solid red 5px,
  repeat(auto, dotted green 1px, dashed blue 1px),
  solid red 5px;
```

In diesem Fall werden die erste und letzte Reihenregel `solid red 5px` sein, und alle anderen wechseln sich zwischen `dotted green 1px` und `dashed blue 1px` ab. Es spielt keine Rolle, ob der Container 3, 6, 11, 16 oder 21 Reihen hat; die ersten und letzten Lücken werden immer eine dicke, solide rote Linie dazwischen haben (es sei denn, {{cssxref("row-rule-visibility-items")}} führt dazu, dass keine Linie gezeichnet wird), und alle anderen Reihenregeln werden dünne, gepunktete grüne oder gestrichelte blaue Linien sein. Wenn es nur 2 oder 3 Reihen gibt, wird es keine gepunkteten oder gestrichelten Linien geben.

Das `auto`-Schlüsselwort innerhalb der `repeat()` Funktion erstellt einen automatischen Wiederholer, der Werte für Reihenregeln auffüllt, die sonst keine Werte aus anderen Teilen der Liste erhalten würden, und verhindert, dass die Liste durchlaufen wird. Maximal kann nur eine `repeat(auto, <gap-rule>)` in einem `row-rule` Wert vorhanden sein.

## Formale Definition

{{cssinfo}}

## Formaler Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel definieren wir eine einzelne Regel für die Linien, die zwischen Flex-Elementen gezeichnet werden.

#### HTML

Wir fügen eine Liste dynamischer Sport-Duos hinzu:

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

Wir definieren die Liste als ein Flex-Container, indem wir Reihen erstellen, indem wir die {{cssxref("flex-direction")}} mittels der {{cssxref("flex-flow")}} Kurzform auf `column` setzen. Wir fügen eine {{cssxref("gap")}} von `5px` hinzu, um genügend Platz zwischen den Reihen zu bieten, um unsere `3px dashed red` Regel unterzubringen:

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

### Wiederholte Werte

Dieses Beispiel zeigt, wie die Werte wiederholt werden, wenn es weniger Werte in der Liste der Stile als Reihenregeln gibt. Es zeigt auch die Standardwerte für die Breite, Farbe und den Stil von `medium`, `currentcolor` und `none`.

Mit dem gleichen HTML und CSS wie im vorherigen Beispiel, fügen wir vier durch Kommas getrennte `<gap-rule>` Werte als den `row-rule` Wert hinzu, wobei wir die Breite im ersten `<gap-rule>`, die Farbe im zweiten, und den Stil des dritten weglassen, wobei der vierte alle drei Komponenten einschließt:

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

Die rote Linie ist `3px` breit, die gepunktete Linie hat die gleiche Farbe wie der Text, und es gibt keine `5px` breite blaue Linie, da der Stil des dritten `<gap-rule>` auf `none` standardmäßig eingestellt ist, sodass keine Linie gezeichnet wird.

### Verwendung der `repeat()` Funktion

Dieses Beispiel zeigt die Verwendung der `repeat()` Funktion innerhalb des `row-rule` Eigenschaftswerts. Wir verwenden das gleiche HTML und CSS wie in den vorherigen Beispielen. Wir fügen eine `repeat()` Funktion hinzu und setzen die Liste von zwei `<gap-rule>` Werten, um sie 3 Mal zu wiederholen.

```css live-sample___func live-sample___auto
ul {
  row-rule:
    3px red dashed,
    repeat(3, dotted green 1px, dashed blue 1px),
    3px red dashed;
}
```

{{EmbedLiveSample("func", "", "180")}}

Der Flex-Container hat sechs Reihen, also fünf Lücken. Die `repeat()` Funktion wiederholt zwei Stilwerte dreimal und erstellt eine Liste von acht Stilwerten. Da es weniger Reihenlücken als gesamte Lücken-Regeln gibt, werden die letzten drei Werte in der Liste verworfen.

### Verwendung von `auto` innerhalb von `repeat()`

Dieses Beispiel zeigt die Verwendung des `auto` Arguments anstelle eines Integers in der `repeat()` Funktion.

Mit `repeat(auto, <gap-rule>)` setzen wir alle Reihenregeln auf `1px dotted` und standardmäßig auf die aktuelle Farbe ein, außer der ersten und letzten, die wir auf `3px solid red` setzen.

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
- [CSS-Lücken](/de/docs/Web/CSS/Guides/Gaps) Modul
