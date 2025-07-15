---
title: Logische Eigenschaften für Margins, Borders und Padding
slug: Web/CSS/CSS_logical_properties_and_values/Margins_borders_padding
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das Modul [CSS logical properties and values](/de/docs/Web/CSS/CSS_logical_properties_and_values) definiert flussbezogene Zuordnungen für die verschiedenen Eigenschaften von Margins, Borders und Padding und deren Kurzformen. In diesem Leitfaden werfen wir einen Blick auf diese.

Wenn Sie sich das Modul [logical properties and values](/de/docs/Web/CSS/CSS_logical_properties_and_values) ansehen, werden Sie möglicherweise feststellen, dass die Liste der Moduleigenschaften sehr lang ist. Dies liegt vor allem daran, dass es jeweils vier Langformen für jede Seitenrand-, Rand- und Auffüllungseigenschaft gibt, plus alle Abkürzungswerte.

## Zuordnungen für Margins, Borders und Padding

Das Modul beschreibt Zuordnungen für jeden logischen Wert zu einem physischen Gegenstück. Die folgende Tabelle zeigt diese Zuordnungen, wenn der {{cssxref("writing-mode")}} `horizontal-tb` ist — mit einer links-nach-rechts-Richtung. Die Inline-Richtung verläuft daher horizontal — von links nach rechts — und {{cssxref("margin-inline-start")}} wäre gleichbedeutend mit {{cssxref("margin-left")}}.

Wenn Sie einen Schreibmodus `horizontal-tb` mit einer Rechts-nach-Links-Textausrichtung verwenden würden, dann wäre {{cssxref("margin-inline-start")}} dasselbe wie {{cssxref("margin-right")}}, und in einem vertikalen Schreibmodus wäre es dasselbe wie die Verwendung von {{cssxref("margin-top")}}.

| {{Glossary("Logical_properties", "Logische Eigenschaft")}} | {{Glossary("Physical_properties", "Physische Eigenschaft")}} |
| ---------------------------------------------------------- | ------------------------------------------------------------ |
| {{cssxref("border-block-end")}}                            | {{cssxref("border-bottom")}}                                 |
| {{cssxref("border-block-end-color")}}                      | {{cssxref("border-bottom-color")}}                           |
| {{cssxref("border-block-end-style")}}                      | {{cssxref("border-bottom-style")}}                           |
| {{cssxref("border-block-end-width")}}                      | {{cssxref("border-bottom-width")}}                           |
| {{cssxref("border-block-start")}}                          | {{cssxref("border-top")}}                                    |
| {{cssxref("border-block-start-color")}}                    | {{cssxref("border-top-color")}}                              |
| {{cssxref("border-block-start-style")}}                    | {{cssxref("border-top-style")}}                              |
| {{cssxref("border-block-start-width")}}                    | {{cssxref("border-top-width")}}                              |
| {{cssxref("border-inline-end")}}                           | {{cssxref("border-right")}}                                  |
| {{cssxref("border-inline-end-color")}}                     | {{cssxref("border-right-color")}}                            |
| {{cssxref("border-inline-end-style")}}                     | {{cssxref("border-right-style")}}                            |
| {{cssxref("border-inline-end-width")}}                     | {{cssxref("border-right-width")}}                            |
| {{cssxref("border-inline-start")}}                         | {{cssxref("border-left")}}                                   |
| {{cssxref("border-inline-start-color")}}                   | {{cssxref("border-left-color")}}                             |
| {{cssxref("border-inline-start-style")}}                   | {{cssxref("border-left-style")}}                             |
| {{cssxref("border-inline-start-width")}}                   | {{cssxref("border-left-width")}}                             |
| {{cssxref("border-start-start-radius")}}                   | {{cssxref("border-top-left-radius")}}                        |
| {{cssxref("border-end-start-radius")}}                     | {{cssxref("border-bottom-left-radius")}}                     |
| {{cssxref("border-start-end-radius")}}                     | {{cssxref("border-top-right-radius")}}                       |
| {{cssxref("border-end-end-radius")}}                       | {{cssxref("border-bottom-right-radius")}}                    |
| {{cssxref("margin-block-end")}}                            | {{cssxref("margin-bottom")}}                                 |
| {{cssxref("margin-block-start")}}                          | {{cssxref("margin-top")}}                                    |
| {{cssxref("margin-inline-end")}}                           | {{cssxref("margin-right")}}                                  |
| {{cssxref("margin-inline-start")}}                         | {{cssxref("margin-left")}}                                   |
| {{cssxref("padding-block-end")}}                           | {{cssxref("padding-bottom")}}                                |
| {{cssxref("padding-block-start")}}                         | {{cssxref("padding-top")}}                                   |
| {{cssxref("padding-inline-end")}}                          | {{cssxref("padding-right")}}                                 |
| {{cssxref("padding-inline-start")}}                        | {{cssxref("padding-left")}}                                  |

Es gibt auch einige zusätzliche Abkürzungen, die möglich sind, weil wir sowohl die Block- als auch die Inline-Kanten des Kastens gleichzeitig anvisieren können. Diese Abkürzungen haben kein physisches Pendant.

| Eigenschaft                        | Zweck                                                                                                                   |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| {{cssxref("border-block")}}        | Setzt {{cssxref("border-color")}}, {{cssxref("border-style")}} und {{cssxref("border-width")}} für beide Block-Borders. |
| {{cssxref("border-block-color")}}  | Setzt `border-color` für beide Block-Borders.                                                                           |
| {{cssxref("border-block-style")}}  | Setzt `border-style` für beide Block-Borders.                                                                           |
| {{cssxref("border-block-width")}}  | Setzt `border-width` für beide Block-Borders.                                                                           |
| {{cssxref("border-inline")}}       | Setzt `border-color`, `-style` und `-width` für beide Inline-Borders.                                                   |
| {{cssxref("border-inline-color")}} | Setzt `border-color` für beide Inline-Borders.                                                                          |
| {{cssxref("border-inline-style")}} | Setzt `border-style` für beide Inline-Borders.                                                                          |
| {{cssxref("border-inline-width")}} | Setzt `border-width` für beide Inline-Borders.                                                                          |
| {{cssxref("margin-block")}}        | Setzt alle Block-{{cssxref("margin")}}s.                                                                                |
| {{cssxref("margin-inline")}}       | Setzt alle Inline-`margin`s.                                                                                            |
| {{cssxref("padding-block")}}       | Setzt den Block-{{cssxref("padding")}}.                                                                                 |
| {{cssxref("padding-inline")}}      | Setzt den Inline-`padding`.                                                                                             |

## Margin-Beispiele

Die zugeordneten Margin-Eigenschaften von {{cssxref("margin-inline-start")}}, {{cssxref("margin-inline-end")}}, {{cssxref("margin-block-start")}} und {{cssxref("margin-inline-end")}} können anstelle ihrer physischen Gegenstücke verwendet werden.

Dieses Beispiel hat zwei Boxen mit unterschiedlich großen Rändern an jeder Kante. Ein zusätzlicher Container mit einem Rand wurde hinzugefügt, um den Rand deutlicher zu machen.

Eine Box verwendet physische Eigenschaften und die andere logische Eigenschaften. Versuchen Sie, die {{cssxref("direction")}}-Eigenschaft zu `rtl` zu ändern, um die Boxen in einer Rechts-nach-Links-Richtung anzuzeigen; Die Ränder der ersten Box bleiben an der gleichen Stelle, während sich die Ränder im Inline-Dimension der zweiten Box verschieben.

Versuchen Sie auch, den `writing-mode` von `horizontal-tb` zu `vertical-rl` zu ändern. Beachten Sie, wie die Ränder für die erste Box an der gleichen Stelle bleiben, sich aber entsprechend der Textausrichtung in der zweiten verschieben.

```html live-sample___margin-longhands
<div class="container">
  <div class="inner">
    <div class="physical box">
      margin-top: 5px<br />
      margin-right: 0<br />
      margin-bottom: 2em<br />
      margin-left: 50px
    </div>
  </div>
  <div class="inner">
    <div class="logical box">
      margin-block-start: 5px<br />
      margin-inline-end: 0<br />
      margin-block-end: 2em<br />
      margin-inline-start: 50px
    </div>
  </div>
</div>
```

```css hidden live-sample___margin-longhands
body {
  font: 1.2em / 1.5 sans-serif;
}
.container {
  display: flex;
}
.inner {
  border: 2px dotted grey;
}
.box {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
  width: 220px;
  height: 220px;
}
```

```css live-sample___margin-longhands
.box {
  writing-mode: horizontal-tb;
  direction: ltr;
}

.physical {
  margin-top: 5px;
  margin-right: 0;
  margin-bottom: 2em;
  margin-left: 50px;
}

.logical {
  margin-block-start: 5px;
  margin-inline-end: 0;
  margin-block-end: 2em;
  margin-inline-start: 50px;
}
```

{{EmbedLiveSample("margin-longhands", "", "300px")}}

### Margin-Abkürzungen

Es gibt Abkürzungen, die entweder beide Inline-Seiten oder beide Block-Seiten anvisieren, {{cssxref("margin-inline")}} und {{cssxref("margin-block")}} jeweils. Jede akzeptiert zwei Werte. Der erste Wert wird auf den Anfang dieser Dimension angewendet, der zweite auf das Ende. Wenn nur ein Wert festgelegt ist, wird er auf beide angewendet.

In einem horizontalen Schreibmodus würde dieses CSS einen `5px` Margin oben an der Box und einen `10px` Margin unten anwenden.

```css
.box {
  margin-block: 5px 10px;
}
```

## Padding-Beispiele

Die zugeordneten Padding-Eigenschaften von {{cssxref("padding-inline-start")}}, {{cssxref("padding-inline-end")}}, {{cssxref("padding-block-start")}} und {{cssxref("padding-inline-end")}} können anstelle ihrer physischen Gegenstücke verwendet werden.

In diesem Beispiel gibt es zwei Boxen. Eine hat physische Padding-Eigenschaften gesetzt, und die andere verwendet logische Padding-Eigenschaften. Mit einem `writing-mode` von `horizontal-tb` sollten beide Boxen gleich aussehen.

Versuchen Sie, die `direction`-Eigenschaft zu `rtl` zu ändern, um die Boxen in einer Rechts-nach-Links-Richtung anzuzeigen. Das Padding der ersten Box bleibt an der gleichen Stelle, während sich das Padding im Inline-Dimension der zweiten Box verschiebt.

Sie können auch versuchen, den `writing-mode` von `horizontal-tb` zu `vertical-rl` zu ändern. Auch hier, beachten Sie, wie das Padding für die erste Box an der gleichen Stelle bleibt, sich aber entsprechend der Textausrichtung in der zweiten verschiebt.

```html live-sample___padding-longhands
<div class="container">
  <div class="physical box">
    padding-top: 5px<br />
    padding-right: 0<br />
    padding-bottom: 2em<br />
    padding-left: 50px
  </div>

  <div class="logical box">
    padding-block-start: 5px<br />
    padding-inline-end: 0<br />
    padding-block-end: 2em<br />
    padding-inline-start: 50px
  </div>
</div>
```

```css hidden live-sample___padding-longhands
body {
  font: 1.2em / 1.5 sans-serif;
}

.container {
  display: flex;
}
.box {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  margin: 10px;
  width: 220px;
  height: 220px;
}
```

```css live-sample___padding-longhands
.box {
  writing-mode: horizontal-tb;
  direction: ltr;
}

.physical {
  padding-top: 5px;
  padding-right: 0;
  padding-bottom: 2em;
  padding-left: 50px;
}

.logical {
  padding-block-start: 5px;
  padding-inline-end: 0;
  padding-block-end: 2em;
  padding-inline-start: 50px;
}
```

{{EmbedLiveSample("padding-longhands", "", "300px")}}

### Padding-Abkürzungen

Wie bei Margins gibt es auch für Padding zwei-Wert-Kurzformen — {{cssxref("padding-inline")}} und {{cssxref("padding-block")}} — mit denen Sie das Padding der beiden Inline- und der beiden Block-Dimensionen einstellen können.

In einem horizontalen `writing-mode` würde dieses CSS der Box `5px` Padding oben und `10px` Padding unten zuweisen:

```css
.box {
  padding-block: 5px 10px;
}
```

## Border-Beispiele

Die Border-Eigenschaften sind der Hauptgrund, warum dieses Modul so viele Eigenschaften scheint zu haben, da es Langform-logische Eigenschaften für die Farbe, Breite und den Stil des Randes auf jeder Seite einer Box bereitstellt, zusammen mit der Kurzform, um alle drei auf einmal für jede Seite festzulegen. Wie bei Margin und Padding gibt es für jede physische Eigenschaft eine zugeordnete Version.

Die folgende Demo verwendet einige Langformen und drei Kurzformwerte. Wie bei den anderen Demos versuchen Sie, die `direction`-Eigenschaft zu `rtl` zu ändern, um die Boxen in einer Rechts-nach-Links-Richtung anzuzeigen, oder den `writing-mode` von `horizontal-tb` zu `vertical-rl` zu ändern.

```html live-sample___border-longhands
<div class="container">
  <div class="physical box">Borders using physical properties.</div>
  <div class="logical box">Borders using logical properties.</div>
</div>
```

```css hidden live-sample___border-longhands
body {
  font: 1.2em / 1.5 sans-serif;
}

.container {
  display: flex;
}
.box {
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  margin: 10px;
  width: 220px;
  height: 220px;
}
```

```css live-sample___border-longhands
.box {
  writing-mode: horizontal-tb;
  direction: ltr;
}

.physical {
  border-top: 2px solid hotpink;
  border-right-style: dotted;
  border-right-color: goldenrod;
  border-right-width: 5px;
  border-bottom: 4px double black;
  border-left: none;
}

.logical {
  border-block-start: 2px solid hotpink;
  border-inline-end-style: dotted;
  border-inline-end-color: goldenrod;
  border-inline-end-width: 5px;
  border-block-end: 4px double black;
  border-inline-start: none;
}
```

{{EmbedLiveSample("border-longhands", "", "260px")}}

### Border-Abkürzungen

Es gibt zwei-Wert-Kurzformen, um die Breite, den Stil und die Farbe der Block- oder Inline-Dimension festzulegen, und Kurzformen, um alle drei Werte in der Block- oder Inline-Dimension festzulegen. Der unten stehende Code würde Ihnen in einem horizontalen Schreibmodus einen `2px green solid` Rand oben und unten sowie einen `4px dotted purple` Rand links und rechts geben.

```css
.box {
  border-block: 2px solid green;
  border-inline-width: 4px;
  border-inline-style: dotted;
  border-inline-color: rebeccapurple;
}
```

### Flussbezogene Border-Radius-Eigenschaften

Das Modul hat flussbezogene Äquivalente für die {{cssxref("border-radius")}}-Langformen. Das folgende Beispiel würde in einem horizontalen `writing-mode` den oberen rechten Border-Radius auf `1em`, den unteren rechten auf `0`, den unteren linken auf `20px` und den oberen linken auf `40px` setzen.

```css
.box {
  border-end-start-radius: 1em;
  border-end-end-radius: 0;
  border-start-end-radius: 20px;
  border-start-start-radius: 40px;
}
```

## Angabe logischer Werte für die 4-Wert-Kurzformsyntax

Die Spezifikation macht einen Vorschlag für die Vier-Wert-Kurzformen wie die `margin`-Eigenschaft, jedoch ist die endgültige Entscheidung, wie dies angezeigt werden soll, noch ungelöst und wird in [diesem Issue](https://github.com/w3c/csswg-drafts/issues/1282) diskutiert.

Die Verwendung einer Vier-Wert-Kurzform wie `margin`, `padding` oder `border` wird derzeit die physischen Versionen verwenden. Wenn es wichtig ist, dem Fluss des Dokuments zu folgen, verwenden Sie vorerst die Langform-Eigenschaften.
