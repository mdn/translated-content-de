---
title: "`row-rule` CSS property"
short-title: row-rule
slug: Web/CSS/Reference/Properties/row-rule
l10n:
  sourceCommit: 6354422058e438a2599e4eab71eaec8eb40850fa
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-[Kurzform](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties)-Eigenschaft **`row-rule`** legt die Breite, den Stil und die Farbe der Linie fest, die zwischen Zeilen in mehrzeiligen Grid-, Flex- und Multi-Column-Layouts gezeichnet wird.

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

Diese Eigenschaft wird als kommagetrennte Liste von Werten angegeben. Jeder Wert kann einer der folgenden Werttypen sein:

- `<gap-rule>`
  - : Wird als einer, zwei oder drei der unten aufgeführten Werte in beliebiger Reihenfolge angegeben.
    - `<'line-width'>`
      - : Ein {{cssxref("&lt;line-width&gt;")}}: eine positive {{cssxref("&lt;length&gt;")}} oder eines der drei Schlüsselwörter `thin`, `medium` oder `thick`. Der Standardwert ist `medium`. Siehe {{cssxref("row-rule-width")}}.
    - `<'line-style'>`
      - : Ein {{cssxref("&lt;line-style&gt;")}}: eines von `none`, `hidden`, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset` oder `outset`. Der Standardwert ist `none`. Siehe {{cssxref("row-rule-style")}}.
    - `<'color'>`
      - : Ein {{cssxref("&lt;color&gt;")}}-Wert, der die Farbe der Linie darstellt. Der Standardwert ist `currentcolor`. Siehe {{cssxref("row-rule-color")}}.

- `<gap-repeat-rule>`
  - : Eine {{cssxref("repeat()")}}-Funktion mit einem {{cssxref("&lt;integer&gt;")}} von `1` oder größer als erstem Argument und einem oder mehreren `<gap-rule>`-Werten als nachfolgenden Argumenten. Das `<integer>` gibt an, wie oft die Liste der `<gap-rule>`-Werte wiederholt werden soll.

- `<gap-auto-repeat-rule>`
  - : Eine {{cssxref("repeat()")}}-Funktion mit `auto` als erstem Argument und einem oder mehreren `<gap-rule>`-Werten als nachfolgenden Argumenten. Die bereitgestellte Liste von `<gap-rule>`-Werten wird so oft wie nötig wiederholt, um Werte für alle row-rules auszufüllen, die nicht explizit durch andere Komponenten des Eigenschaftswerts angegeben sind.

## Beschreibung

Die Eigenschaft `row-rule` definiert den Linienstil aller Trennlinien, die in den Lücken zwischen Zeilen in [Multi-Column-](/de/docs/Web/CSS/Guides/Multicol_layout)-, [Flex-](/de/docs/Web/CSS/Guides/Flexible_box_layout)- und [Grid-](/de/docs/Web/CSS/Guides/Grid_layout)-Containern mit mehr als einer Zeile gezeichnet werden.

`row-rule` ist eine Kurzform für {{cssxref("row-rule-color")}}, {{cssxref("row-rule-style")}} und {{cssxref("row-rule-width")}}. `row-rule` kann zusammen mit der Kurzform-Eigenschaft {{cssxref("column-rule")}} auch über die Kurzform {{cssxref("rule")}} festgelegt werden.

Der Eigenschaftswert ist eine kommagetrennte Liste von Komponenten, die die Typen `<gap-rule>`, `<gap-repeat-rule>` und `<gap-auto-repeat-rule>` enthalten kann. Jedes `<gap-rule>` definiert Breite, Farbe und Stil einer oder mehrerer Trennlinien.

Besteht der Eigenschaftswert nur aus einem `<gap-rule>`, haben alle Zeilentrenner diesen Stil. Wenn wir Folgendes deklarieren, werden alle Zeilentrenner `dashed red 3px` sein:

```css
row-rule: dashed red 3px;
```

Wenn mehr als ein `<gap-rule>` deklariert wird, werden sie in der angegebenen Reihenfolge auf row-rules angewendet. Gibt es mehr Rinnen zwischen den Zeilen als `<gap-rule>`-Werte, wird die Werteliste wiederholt, bis jede row-rule eine Lückenlinie hat. Wenn wir beispielsweise Folgendes deklarieren, wird jede ungerade Trennlinie `dashed red 3px` und jede gerade Trennlinie `dotted blue 5px` sein.

```css
row-rule:
  dashed red 3px,
  dotted blue 5px;
```

### Wiederholte Linienstile

Die Funktion `repeat()` kann mit einer Ganzzahl von `1` oder größer als erstem Argument verwendet werden, um eine gültige Liste von CSS-[`<gap-rule>`](#gap-rule)-Werten, die als nachfolgende Argumente übergeben werden, die angegebene Anzahl von Malen zu wiederholen. Dadurch kann dasselbe `<gap-rule>` eine festgelegte Anzahl von Malen wiederholt werden, ohne dass dasselbe CSS mehrfach wiederholt werden muss. Die folgenden Deklarationen sind gleichwertig:

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

Dadurch wird eine Liste von sieben Trennlinien erstellt. Wenn die Anzahl der Stile in der Stil-Liste des `row-rule`-Werts die Anzahl der Lücken zwischen Zeilen übersteigt, werden die überschüssigen Stilwerte ignoriert. Wenn der Container, auf den dies angewendet wird, drei Zeilen hat, wird die Trennlinie in der ersten Rinne `solid red 5px` und die zweite `outset blue 10px` sein.

Gibt es mehr Rinnen als Stile, wird die Stilliste wiederholt. Wenn der Container 8, 15, 22 oder 29 Zeilen hat, wird diese Stilsequenz jeweils ein-, zwei-, drei- oder viermal wiederholt, wobei die letzte Trennlinie `inset green 1px` ist.

### Automatisch wiederholte Linienstile

Die Funktion `repeat()` akzeptiert außerdem `auto` als erstes Argument anstelle einer positiven Ganzzahl. Mit `auto` als erstem Argument werden die als nachfolgende Argumente übergebenen [`<gap-rule>`](#gap-rule)-Werte so oft wie nötig wiederholt, um Werte für alle Trennlinien auszufüllen, die nicht explizit durch andere Komponenten des Eigenschaftswerts angegeben sind.

```css
row-rule:
  solid red 5px,
  repeat(auto, dotted green 1px, dashed blue 1px),
  solid red 5px;
```

In diesem Fall werden die erste und letzte row-rule `solid red 5px` sein, und alle anderen wechseln sich zwischen `dotted green 1px` und `dashed blue 1px` ab. Es spielt keine Rolle, ob der Container 3, 6, 11, 16 oder 21 Zeilen hat; die erste und letzte Rinne werden immer eine dicke durchgezogene rote Linie zwischen sich gezeichnet haben (es sei denn, {{cssxref("row-rule-visibility-items")}} führt dazu, dass keine Linie gezeichnet wird), und alle anderen row-rules werden dünne, gepunktete grüne oder gestrichelte blaue Linien sein. Bei nur 2 oder 3 Zeilen gibt es keine gepunkteten oder gestrichelten Linien.

Das Schlüsselwort `auto` innerhalb der Funktion `repeat()` erstellt einen automatischen Wiederholer, der Werte für row-rules ausfüllt, die andernfalls keine Werte aus anderen Teilen der Liste erhalten würden, und verhindert, dass die Liste zyklisch durchlaufen wird. In einem `row-rule`-Wert kann höchstens ein `repeat(auto, <gap-rule>)` vorhanden sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegendes Beispiel

In diesem Beispiel definieren wir eine einzelne Trennlinie für die zwischen Flex-Items gezeichneten Linien.

#### HTML

Wir fügen eine Liste dynamischer Sportduos ein:

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

Wir definieren die Liste als Flex-Container und erstellen Zeilen, indem wir {{cssxref("flex-direction")}} mithilfe der Kurzform {{cssxref("flex-flow")}} auf `column` setzen. Wir fügen einen {{cssxref("gap")}} von `5px` ein, um zwischen den Zeilen genügend Platz für unsere Trennlinie `3px dashed red` bereitzustellen:

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

Dieses Beispiel zeigt, wie die Werte wiederholt werden, wenn die Stil-Liste weniger Werte als row-rules enthält. Es zeigt außerdem die Standardwerte `medium`, `currentcolor` und `none` für Breite, Farbe beziehungsweise Stil.

Unter Verwendung desselben HTML und CSS wie im vorherigen Beispiel fügen wir vier kommagetrennte `<gap-rule>`-Werte als `row-rule`-Wert ein. Dabei lassen wir die Breite im ersten `<gap-rule>`, die Farbe im zweiten und den Stil im dritten weg, während das vierte alle drei Komponenten enthält:

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

Die rote Linie ist `3px` breit, die gepunktete Linie hat dieselbe Farbe wie der Text, und es gibt keine `5px` breite blaue Linie, da der Stil des dritten `<gap-rule>` standardmäßig `none` ist und daher keine Linie gezeichnet wird.

### Verwendung der Funktion `repeat()`

Dieses Beispiel zeigt die Verwendung der Funktion `repeat()` innerhalb des Eigenschaftswerts `row-rule`. Wir verwenden dasselbe HTML und CSS wie in den vorherigen Beispielen. Wir fügen eine Funktion `repeat()` ein und legen fest, dass die Liste von zwei `<gap-rule>`-Werten dreimal wiederholt wird.

```css live-sample___func live-sample___auto
ul {
  row-rule:
    3px red dashed,
    repeat(3, dotted green 1px, dashed blue 1px),
    3px red dashed;
}
```

{{EmbedLiveSample("func", "", "180")}}

Der Flex-Container hat sechs Zeilen und somit fünf Rinnen. Die Funktion `repeat()` wiederholt zwei Stilwerte dreimal und erstellt so eine Liste mit acht Stilwerten. Da es weniger Zeilenrinnen als gap-rules insgesamt gibt, werden die letzten drei Werte der Liste verworfen.

### Verwendung von `auto` innerhalb von `repeat()`

Dieses Beispiel zeigt die Verwendung des Arguments `auto` anstelle einer Ganzzahl in der Funktion `repeat()`.

Mit `repeat(auto, <gap-rule>)` setzen wir alle row-rules auf `1px dotted` und verwenden standardmäßig die aktuelle Farbe, mit Ausnahme der ersten und letzten, die wir auf `3px solid red` setzen.

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
- Kurzform {{cssxref("column-rule")}}
- Kurzform {{cssxref("rule")}}
- Modul [CSS gaps](/de/docs/Web/CSS/Guides/Gaps)
