---
title: "`row-rule` CSS property"
short-title: row-rule
slug: Web/CSS/Reference/Properties/row-rule
l10n:
  sourceCommit: b13ef1ff1d0914617689df9074b24d41486e91b2
---

Die **`row-rule`** [Shorthand](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft legt die Breite, den Stil und die Farbe der Linie fest, die zwischen den Reihen in Layouts mit mehreren Zeilen in Grid-, Flex- und Multi-Column-Layouts gezeichnet wird.

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

## Zugehörige Eigenschaften

Diese Eigenschaft ist eine Shorthand für die folgenden CSS-Eigenschaften:

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

Die `row-rule` Eigenschaft akzeptiert eine durch Kommas getrennte Liste von Werten, einschließlich:

- `<gap-rule>`
  - : Wird als einer, zwei oder drei der unten aufgeführten Werte angegeben, in beliebiger Reihenfolge.
    - `<'line-width'>`
      - : Ein {{cssxref("&lt;line-width&gt;")}}: eine positive {{cssxref("&lt;length&gt;")}} oder eines der drei Schlüsselwörter `thin`, `medium` oder `thick`. Der Standardwert ist `medium`. Siehe {{cssxref("row-rule-width")}}.
    - `<'line-style'>`
      - : Ein {{cssxref("&lt;line-style&gt;")}}: eines von `none`, `hidden`, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset` oder `outset`. Der Standardwert ist `none`. Siehe {{cssxref("row-rule-style")}}.
    - `<'color'>`
      - : Ein {{cssxref("&lt;color&gt;")}} Wert, der die Farbe der Linie darstellt. Der Standardwert ist `currentcolor`. Siehe {{cssxref("row-rule-color")}}.

- `<gap-repeat-rule>`
  - : Eine {{cssxref("repeat()")}} Funktion, mit einem {{cssxref("&lt;integer&gt;")}} von `1` oder mehr als erstem Argument und einem oder mehreren `<gap-rule>` Werten als nachfolgende Argumente. Der `<integer>` gibt an, wie oft die Liste der `<gap-rule>` Werte wiederholt werden soll.

- `<gap-auto-repeat-rule>`
  - : Eine {{cssxref("repeat()")}} Funktion, mit `auto` als erstem Argument und einem oder mehreren `<gap-rule>` Werten als nachfolgende Argumente. Die bereitgestellte Liste der `<gap-rule>` Werte wird so oft wie nötig wiederholt, um alle nicht explizit durch andere Komponenten des Eigenschaftswerts spezifizierten Zeilenregeln zu füllen.

## Beschreibung

Die `row-rule` Eigenschaft definiert den Linienstil aller Regel-Linien, die in den Zwischenräumen zwischen den Reihen in [Multi-Column](/de/docs/Web/CSS/Guides/Multicol_layout), [Flex](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Grid](/de/docs/Web/CSS/Guides/Grid_layout) Containern mit mehr als einer Reihe gezeichnet werden.

Die `row-rule` ist eine Shorthand für {{cssxref("row-rule-color")}}, {{cssxref("row-rule-style")}}, und {{cssxref("row-rule-width")}}. Die `row-rule`, zusammen mit der {{cssxref("column-rule")}} Shorthand-Eigenschaft, kann auch mit der {{cssxref("rule")}} Shorthand festgelegt werden.

Der Eigenschaftswert ist eine durch Kommas getrennte Liste von Komponenten, die `<gap-rule>`, `<gap-repeat-rule>`, und `<gap-auto-repeat-rule>` Typen enthalten kann. Jedes `<gap-rule>` definiert die Breite, Farbe und den Stil einer oder mehrerer Regel-Linien.

Wenn der Eigenschaftswert nur ein `<gap-rule>` enthält, werden alle Zeilenregeln diesen Stil haben. Wenn wir das Folgende deklarieren, werden alle Zeilenregeln `dashed red 3px` sein:

```css
row-rule: dashed red 3px;
```

Wenn mehr als ein `<gap-rule>` deklariert ist, werden sie in der angegebenen Reihenfolge auf Zeilenregeln angewendet. Wenn es mehr Zwischenräume zwischen den Reihen gibt als `<gap-rule>` Werte, wird die Liste der Werte wiederholt, bis jede Zeilenregel eine Regel-Linie hat. Wenn wir zum Beispiel das Folgende deklarieren, wird jede ungerade Regel `dashed red 3px` sein und jede gerade Regel `dotted blue 5px`.

```css
row-rule:
  dashed red 3px,
  dotted blue 5px;
```

### Wiederholte Linienstile

Die `repeat()` Funktion, mit einer Ganzzahl von `1` oder mehr als erstem Argument, kann verwendet werden, um eine gültige Liste von CSS [`<gap-rule>`](#gap-rule) Werten, die als nachfolgende Argumente übergeben werden, die angegebene Anzahl von Malen zu wiederholen. Dies ermöglicht es, das gleiche `<gap-rule>` eine festgelegte Anzahl von Malen zu wiederholen, ohne dass das gleiche CSS mehrmals wiederholt werden muss. Die folgenden Deklarationen sind gleichwertig:

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

Dies erzeugt eine Liste von sieben Regeln. Wenn die Anzahl der Stile in der `row-rule` Werteliste größer ist als die Anzahl der Zwischenräume zwischen den Reihen, werden die überzähligen Stilwerte ignoriert. Wenn der Container, auf den dies angewandt wird, drei Reihen hat, wird die Regel im ersten Zwischenraum `solid red 5px` sein und die zweite `outset blue 10px`.

Wenn es mehr Zwischenräume als Stile gibt, wird die Liste der Stile wiederholt. Wenn der Container 8, 15, 22 oder 29 Reihen hat, wird diese Abfolge von Stilen ein, zwei, drei oder viermal wiederholt, wobei die letzte Regel `inset green 1px` sein wird.

### Automatisch wiederholte Linienstile

Die `repeat()` Funktion akzeptiert auch `auto` als erstes Argument anstelle einer positiven Ganzzahl. Mit `auto` als erstem Argument werden die [`<gap-rule>`](#gap-rule) Werte, die als nachfolgende Argumente übergeben werden, so oft wie nötig wiederholt, um alle Regeln zu füllen, die von anderen Komponenten des Eigenschaftswerts nicht explizit spezifiziert sind.

```css
row-rule:
  solid red 5px,
  repeat(auto, dotted green 1px, dashed blue 1px),
  solid red 5px;
```

In diesem Fall werden die erste und letzte Zeilenregel `solid red 5px` sein, und alle anderen werden abwechselnd `dotted green 1px` und `dashed blue 1px` sein. Es spielt keine Rolle, ob der Container 3, 6, 11, 16 oder 21 Reihen hat; die ersten und letzten Zwischenräume werden immer eine dicke, feste rote Linie dazwischen haben (es sei denn, {{cssxref("row-rule-visibility-items")}} führt dazu, dass keine Linie gezeichnet wird), und alle anderen Zeilenregeln werden dünne, gepunktete grüne oder gestrichelte blaue Linien sein. Wenn es nur 2 oder 3 Reihen gibt, werden keine punktierten oder gestrichelten Linien vorhanden sein.

Das `auto` Schlüsselwort innerhalb der `repeat()` Funktion erzeugt einen Auto-Repeater, der Werte für Zeilenregeln füllt, die sonst keine Werte aus anderen Teilen der Liste erhalten würden, und verhindert, dass die Liste zyklisch wird. Maximal kann nur ein `repeat(auto, <gap-rule>)` in einem `row-rule` Wert vorhanden sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegendes Beispiel

In diesem Beispiel definieren wir eine einzige Regel für die Linien, die zwischen Flex-Items gezeichnet werden.

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

Wir definieren die Liste als Flex-Container, indem wir die {{cssxref("flex-direction")}} auf `column` setzen, unter Verwendung der {{cssxref("flex-flow")}} Shorthand, und fügen einen {{cssxref("gap")}} von `5px` hinzu, um ausreichend Platz für unsere `3px dashed red` Regel zu schaffen:

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

Dieses Beispiel demonstriert, wie die Werte wiederholt werden, wenn es weniger Werte in der Liste der Stile als Zeilenregeln gibt. Es demonstriert auch die Standardwerte für die Breite, Farbe und den Stil als `medium`, `currentcolor` und `none`, entsprechend.

Mit dem gleichen HTML und CSS wie im vorherigen Beispiel fügen wir vier durch Kommas getrennte `<gap-rule>` Werte als `row-rule` Wert hinzu, wobei wir die Breite im ersten `<gap-rule>`, die Farbe im zweiten und den Stil vom dritten auslassen, wobei das vierte alle drei Komponenten enthält:

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

Die rote Linie ist `3px` breit, die gepunktete Linie hat die gleiche Farbe wie der Text, und es gibt keine `5px` breite blaue Linie, da der Stil des dritten `<gap-rule>` standardmäßig `none` ist, so dass keine Linie gezeichnet wird.

### Verwendung der `repeat()` Funktion

Dieses Beispiel demonstriert die Verwendung der `repeat()` Funktion innerhalb des `row-rule` Eigenschaftswerts. Wir verwenden das gleiche HTML und CSS wie in den vorherigen Beispielen. Wir fügen eine `repeat()` Funktion hinzu und setzen die Liste von zwei `<gap-rule>` Werten dreimal zu wiederholen.

```css live-sample___func live-sample___auto
ul {
  row-rule:
    3px red dashed,
    repeat(3, dotted green 1px, dashed blue 1px),
    3px red dashed;
}
```

{{EmbedLiveSample("func", "", "180")}}

Der Flex-Container hat sechs Reihen, also fünf Zwischenräume. Die `repeat()` Funktion wiederholt zwei Stilwerte dreimal und erstellt eine Liste von acht Stilwerten. Da es weniger Reihenränder als Gesamtanzahl von `<gap-rule>` gibt, werden die letzten drei Werte in der Liste verworfen.

### Verwendung von `auto` innerhalb von `repeat()`

Dieses Beispiel zeigt die Verwendung des `auto` Arguments anstelle einer Ganzzahl in der `repeat()` Funktion.

Unter Verwendung von `repeat(auto, <gap-rule>)`, setzen wir alle Zeilenregeln auf `1px dotted` und standardmäßig auf die aktuelle Farbe, außer der ersten und letzten, die wir auf `3px solid red` setzen.

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
- {{cssxref("column-rule")}} Shorthand
- {{cssxref("rule")}} Shorthand
- [CSS Lücken](/de/docs/Web/CSS/Guides/Gaps) Modul
