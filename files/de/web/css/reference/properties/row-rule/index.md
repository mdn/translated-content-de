---
title: "`row-rule` CSS property"
short-title: row-rule
slug: Web/CSS/Reference/Properties/row-rule
l10n:
  sourceCommit: a9dc3374034d357cbfea717fd5d641605359e3c7
---

{{SeeCompatTable}}

Die **`row-rule`** [Shorthand](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Breite, den Stil und die Farbe der Linie fest, die zwischen den Reihen in mehrzeiligen Grid-, Flex- und Mehrspaltenlayouts gezeichnet wird.

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

## Bestandteileigenschaften

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

Die `row-rule`-Eigenschaft akzeptiert eine durch Kommata getrennte Liste von Werten, darunter:

- `<gap-rule>`
  - : Angegeben als einer, zwei oder drei der unten aufgeführten Werte in beliebiger Reihenfolge.
    - `<'line-width'>`
      - : Ein {{cssxref("&lt;line-width&gt;")}}: eine positive {{cssxref("&lt;length&gt;")}} oder eines der drei Schlüsselwörter, `thin`, `medium` oder `thick`. Der Standardwert ist `medium`. Siehe {{cssxref("row-rule-width")}}.
    - `<'line-style'>`
      - : Ein {{cssxref("&lt;line-style&gt;")}}: eines von `none`, `hidden`, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset` oder `outset`. Der Standardwert ist `none`. Siehe {{cssxref("row-rule-style")}}.
    - `<'color'>`
      - : Ein {{cssxref("&lt;color&gt;")}}-Wert, der die Farbe der Linie darstellt. Der Standardwert ist `currentcolor`. Siehe {{cssxref("row-rule-color")}}.

- `<gap-repeat-rule>`
  - : Eine {{cssxref("repeat()")}}-Funktion mit einem {{cssxref("&lt;integer&gt;")}} von `1` oder mehr als erstem Argument und einem oder mehreren `<gap-rule>`-Werten als nachfolgende Argumente. Das `<integer>` gibt an, wie oft die Liste der `<gap-rule>`-Werte wiederholt werden soll.

- `<gap-auto-repeat-rule>`
  - : Eine {{cssxref("repeat()")}}-Funktion, bei der `auto` als erstes Argument und ein oder mehrere `<gap-rule>`-Werte als nachfolgende Argumente angegeben werden. Die bereitgestellte Liste von `<gap-rule>`-Werten wird so oft wiederholt, wie nötig, um Werte für alle Zeilenregeln zu füllen, die nicht explizit durch andere Teile des Eigenschaftswertes angegeben werden.

## Beschreibung

Die `row-rule`-Eigenschaft definiert den Linienstil aller Linien, die in den Lücken zwischen den Reihen in [Mehrspalten-](/de/docs/Web/CSS/Guides/Multicol_layout), [Flex-](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Grid-](/de/docs/Web/CSS/Guides/Grid_layout)-Containern mit mehr als einer Reihe gezeichnet werden.

Die `row-rule` ist eine Kurzform für {{cssxref("row-rule-color")}}, {{cssxref("row-rule-style")}} und {{cssxref("row-rule-width")}}. Die `row-rule`, zusammen mit der Kurzform {{cssxref("column-rule")}}, kann auch mit der Kurzform {{cssxref("rule")}} festgelegt werden.

Der Eigenschaftswert ist eine durch Kommata getrennte Liste von Komponenten, die `<gap-rule>`, `<gap-repeat-rule>` und `<gap-auto-repeat-rule>`-Typen enthalten kann. Jedes `<gap-rule>` definiert die Breite, Farbe und den Stil einer oder mehrerer Linien.

Wenn der Eigenschaftswert nur aus einem `<gap-rule>` besteht, werden alle Zeilenregeln dieses Stils sein. Wenn wir das Folgende deklarieren, werden alle Zeilenregeln `dashed red 3px` sein:

```css
row-rule: dashed red 3px;
```

Wenn mehr als ein `<gap-rule>` deklariert wird, werden sie in der angegebenen Reihenfolge auf Zeilenregeln angewendet. Wenn es mehr Lücken zwischen den Reihen gibt als `<gap-rule>`-Werte, wird die Liste der Werte wiederholt, bis jede Zeilenregel eine Lücke hat. Wenn wir das Folgende deklarieren, beispielsweise, wird jede ungerade Regel `dashed red 3px` sein, und jede gerade Regel wird `dotted blue 5px` sein.

```css
row-rule:
  dashed red 3px,
  dotted blue 5px;
```

### Wiederholte Linienstile

Die `repeat()`-Funktion, mit einem Integer von `1` oder größer als erstes Argument, kann verwendet werden, um eine gültige Liste von CSS [`<gap-rule>`](#gap-rule)-Werten, die als nachfolgende Argumente übergeben werden, die angegebene Anzahl von Malen zu wiederholen. Dies ermöglicht es, dasselbe `<gap-rule>` eine bestimmte Anzahl von Malen zu wiederholen, ohne den gleichen CSS mehrfach zu wiederholen. Die folgenden Deklarationen sind gleichwertig:

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

Dies erstellt eine Liste von sieben Regeln. Wenn die Anzahl der Stile in der Stil-Liste von `row-rule` die Anzahl der Lücken zwischen den Reihen überschreitet, werden die überschüssigen Stilwerte ignoriert. Wenn der Container, auf den dies angewendet wird, drei Reihen hat, wird die Regel in der ersten Lücke `solid red 5px` und die zweite `outset blue 10px` sein.

Wenn es mehr Lücken als Stile gibt, wird die Liste der Stile wiederholt. Wenn der Container 8, 15, 22 oder 29 Reihen hat, wird diese Abfolge von Stilen entsprechend ein-, zwei-, drei- oder viermal wiederholt, wobei die letzte Regel `inset green 1px` sein wird.

### Automatisiert wiederholte Linienstile

Die `repeat()`-Funktion akzeptiert auch `auto` als erstes Argument anstelle eines positiven Integers. Mit `auto` als erstem Argument werden die [`<gap-rule>`](#gap-rule)-Werte, die als nachfolgende Argumente übergeben werden, so oft wiederholt, wie notwendig, um Werte für alle Regeln zu füllen, die nicht explizit durch andere Teile des Eigenschaftswertes angegeben werden.

```css
row-rule:
  solid red 5px,
  repeat(auto, dotted green 1px, dashed blue 1px),
  solid red 5px;
```

In diesem Fall werden die erste und letzte Zeilenregel `solid red 5px` sein, und alle anderen werden abwechselnd zwischen `dotted green 1px` und `dashed blue 1px` wechseln. Es spielt keine Rolle, ob der Container 3, 6, 11, 16 oder 21 Reihen hat; die ersten und letzten Lücken werden immer eine dicke rote Linie zwischen ihnen haben (es sei denn, {{cssxref("row-rule-visibility-items")}} führt dazu, dass keine Linie gezogen wird), und alle anderen Zeilenregeln werden dünne, punktierte grüne oder gestrichelte blaue Linien sein. Wenn es nur 2 oder 3 Reihen gibt, wird es keine gepunkteten oder gestrichelten Linien geben.

Das `auto`-Schlüsselwort innerhalb der `repeat()`-Funktion erstellt einen Auto-Wiederholer, der Werte für Zeilenregeln füllt, die sonst keine Werte von anderen Teilen der Liste erhalten würden, und verhindert, dass die Liste durchlaufen wird. Höchstens nur ein `repeat(auto, <gap-rule>)` kann in einem `row-rule`-Wert vorhanden sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel definieren wir eine einzelne Regel für die Linien, die zwischen Flex-Elementen gezeichnet werden.

#### HTML

Wir fügen eine Liste dynamischer Sportduos hinzu:

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

Wir definieren die Liste als Flex-Container und erstellen Zeilen, indem wir die {{cssxref("flex-direction")}} auf `column` mit der {{cssxref("flex-flow")}} Kurzform festlegen. Wir fügen eine {{cssxref("gap")}} von `5px` hinzu, um genügend Raum zwischen den Reihen zu lassen, um unsere `3px dashed red` Regel einzufügen:

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

### Wiederholung von Werten

Dieses Beispiel zeigt, wie die Werte wiederholt werden, wenn es weniger Werte in der Stileliste als Zeilenregeln gibt. Es zeigt auch die Standardwerte für die Breite, Farbe und den Stil von `medium`, `currentcolor` und `none`, entsprechend.

Mit dem gleichen HTML und CSS wie im vorherigen Beispiel geben wir vier durch Komma getrennte `<gap-rule>`-Werte als `row-rule`-Wert an und lassen die Breite im ersten `<gap-rule>` weg, die Farbe im zweiten und den Stil im dritten, wobei das vierte alle drei Komponenten enthält:

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

Die rote Linie ist `3px` breit, die gepunktete Linie hat die gleiche Farbe wie der Text, und es gibt keine `5px` breite blaue Linie, da der Stil des dritten `<gap-rule>` standardmäßig auf `none` gesetzt ist, sodass keine Linie gezeichnet wird.

### Verwenden der `repeat()` Funktion

Dieses Beispiel zeigt die Verwendung der `repeat()`-Funktion innerhalb des `row-rule`-Eigenschaftswerts. Wir verwenden das gleiche HTML und CSS wie in den vorherigen Beispielen. Wir fügen eine `repeat()`-Funktion ein und legen fest, dass die Liste von zwei `<gap-rule>`-Werten dreimal wiederholt wird.

```css live-sample___func live-sample___auto
ul {
  row-rule:
    3px red dashed,
    repeat(3, dotted green 1px, dashed blue 1px),
    3px red dashed;
}
```

{{EmbedLiveSample("func", "", "180")}}

Der Flex-Container hat sechs Reihen, also fünf Lücken. Die `repeat()`-Funktion wiederholt zwei Stilwerte dreimal und erstellt eine Liste von acht Stilwerten. Da es weniger Zeilenlücken als Gesamtlückenregeln gibt, werden die letzten drei Werte in der Liste verworfen.

### Die Verwendung von `auto` innerhalb von `repeat()`

Dieses Beispiel zeigt die Verwendung des `auto`-Arguments anstelle eines Integers in der `repeat()`-Funktion.

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
- [CSS-Gaps](/de/docs/Web/CSS/Guides/Gaps) Modul
