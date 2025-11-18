---
title: Logische Eigenschaften für Ränder, Rahmen und Abstände
short-title: Für Ränder, Rahmen und Abstände
slug: Web/CSS/Guides/Logical_properties_and_values/Margins_borders_padding
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das Modul der [CSS-logischen Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values) definiert flussbezogene Zuordnungen für die verschiedenen Rand-, Rahmen- und Abstandseigenschaften und deren Kurzformen. In diesem Leitfaden werfen wir einen Blick darauf.

Wenn Sie sich das Modul der [logischen Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values) ansehen, werden Sie feststellen, dass die Liste der Moduleigenschaften sehr lang ist. Dies liegt hauptsächlich daran, dass es für jede Seite von Rand, Rahmen und Abstand vier ausführliche Werte gibt, zuzüglich aller Kurzformen.

## Zuordnungen für Ränder, Rahmen und Abstände

Das Modul beschreibt Zuordnungen für jeden logischen Wert zu einem physischen Gegenstück. Die Tabelle unten ordnet diese Werte für den Fall zu, dass der {{cssxref("writing-mode")}} `horizontal-tb` ist — mit einer Lese-Richtung von links nach rechts. Die Inline-Richtung verläuft somit horizontal — von links nach rechts — und {{cssxref("margin-inline-start")}} wäre gleichbedeutend mit {{cssxref("margin-left")}}.

Wenn Sie einen `horizontal-tb` Schreibrichtung mit einer Lese-Richtung von rechts nach links verwenden würden, wäre {{cssxref("margin-inline-start")}} gleichbedeutend mit {{cssxref("margin-right")}}, und in einem vertikalen Schriftsystem wäre es gleichbedeutend mit der Verwendung von {{cssxref("margin-top")}}.

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

Es gibt auch einige zusätzliche Kurzformen, die möglich sind, weil wir sowohl die Block- als auch die Inline-Ränder der Box gleichzeitig anvisieren können. Diese Kurzformen haben kein physisches Äquivalent.

| Eigenschaft                        | Zweck                                                                                                                      |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| {{cssxref("border-block")}}        | Legt {{cssxref("border-color")}}, {{cssxref("border-style")}} und {{cssxref("border-width")}} für beide Block-Ränder fest. |
| {{cssxref("border-block-color")}}  | Legt `border-color` für beide Block-Ränder fest.                                                                           |
| {{cssxref("border-block-style")}}  | Legt `border-style` für beide Block-Ränder fest.                                                                           |
| {{cssxref("border-block-width")}}  | Legt `border-width` für beide Block-Ränder fest.                                                                           |
| {{cssxref("border-inline")}}       | Legt `border-color`, `-style` und `-width` für beide Inline-Ränder fest.                                                   |
| {{cssxref("border-inline-color")}} | Legt `border-color` für beide Inline-Ränder fest.                                                                          |
| {{cssxref("border-inline-style")}} | Legt `border-style` für beide Inline-Ränder fest.                                                                          |
| {{cssxref("border-inline-width")}} | Legt `border-width` für beide Inline-Ränder fest.                                                                          |
| {{cssxref("margin-block")}}        | Legt alle Block-Ränder von {{cssxref("margin")}} fest.                                                                     |
| {{cssxref("margin-inline")}}       | Legt alle Inline-`margin`s fest.                                                                                           |
| {{cssxref("padding-block")}}       | Legt die Block-{{cssxref("padding")}} fest.                                                                                |
| {{cssxref("padding-inline")}}      | Legt die Inline-`padding` fest.                                                                                            |

## Beispiel für Ränder

Die zugeordneten Rand-Eigenschaften von {{cssxref("margin-inline-start")}}, {{cssxref("margin-inline-end")}}, {{cssxref("margin-block-start")}} und {{cssxref("margin-inline-end")}} können anstelle ihrer physischen Gegenstücke verwendet werden.

Dieses Beispiel zeigt zwei Boxen mit unterschiedlich großen Rändern an jedem Rand. Ein zusätzlicher Behälter mit einem Rahmen wurde hinzugefügt, um den Rand deutlicher zu machen.

Eine Box verwendet physische Eigenschaften und die andere logische Eigenschaften. Versuchen Sie, die {{cssxref("direction")}}-Eigenschaft auf `rtl` zu ändern, um die Boxen in einer Rechts-nach-Links-Richtung anzuzeigen; die Ränder der ersten Box bleiben an derselben Stelle, während die Ränder in der Inline-Dimension der zweiten Box wechseln.

Versuchen Sie auch, den `writing-mode` von `horizontal-tb` auf `vertical-rl` zu ändern. Beachten Sie, wie die Ränder an derselben Stelle für die erste Box bleiben, aber in der zweiten Box der Schreibrichtung folgen.

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

### Kurzformen für Ränder

Es gibt Kurzformen, um entweder beide Inline-Seiten oder beide Block-Seiten anzusteuern: {{cssxref("margin-inline")}} und {{cssxref("margin-block")}}. Jede akzeptiert zwei Werte. Der erste Wert wird am Anfang dieser Dimension angewendet, der zweite am Ende. Wenn nur ein Wert festgelegt wird, wird er auf beide angewendet.

In einem horizontalen Schriftsystem würde dieses CSS einen `5px` Rand oben und einen `10px` Rand unten an der Box anwenden.

```css
.box {
  margin-block: 5px 10px;
}
```

## Beispiel für Abstände

Die zugeordneten Abstandseigenschaften von {{cssxref("padding-inline-start")}}, {{cssxref("padding-inline-end")}}, {{cssxref("padding-block-start")}} und {{cssxref("padding-inline-end")}} können anstelle ihrer physischen Gegenstücke verwendet werden.

In diesem Beispiel gibt es zwei Boxen. Eine hat physische Abständeigenschaften festgelegt und die andere verwendet logische Abständeigenschaften. Mit einem `writing-mode` von `horizontal-tb` sollten beide Boxen gleich erscheinen.

Versuchen Sie, die `direction`-Eigenschaft auf `rtl` zu ändern, um die Boxen in einer Rechts-nach-Links-Richtung darzustellen. Die Abstände der ersten Box bleiben an derselben Stelle, während sich die Abstände in der Inline-Dimension der zweiten Box ändern.

Sie können auch versuchen, den `writing-mode` von `horizontal-tb` auf `vertical-rl` zu ändern. Beachten Sie erneut, wie die Abstände der ersten Box an derselben Stelle bleiben, sich jedoch in der zweiten Box der Textausrichtung anpassen.

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

### Kurzformen für Abstände

Wie bei den Rändern gibt es Zweiwert-Kurzformen für Abstände — {{cssxref("padding-inline")}} und {{cssxref("padding-block")}} —, mit denen Sie den Abstand der zwei Inline- und zwei Blockdimensionen festlegen können.

In einem horizontalen `writing-mode` würde dieses CSS der Box `5px` Abstand oben und `10px` Abstand unten geben:

```css
.box {
  padding-block: 5px 10px;
}
```

## Beispiel für Rahmen

Die Rahmen-Eigenschaften sind der Hauptgrund, warum dieses Modul so viele Eigenschaften hat, da es ausführliche logische Eigenschaften für die Farbe, Breite und den Stil des Rahmens auf jeder Seite einer Box bietet, zusammen mit der Kurzform, um alle drei auf einmal für jede Seite festzulegen. Wie bei Rändern und Abständen gibt es eine zugeordnete Version jeder physischen Eigenschaft.

Das folgende Beispiel verwendet einige ausführliche und drei Kurzformwerte. Wie bei den anderen Beispielen können Sie versuchen, die `direction`-Eigenschaft auf `rtl` zu ändern, um die Boxen in einer Rechts-nach-Links-Richtung darzustellen, oder den `writing-mode` von `horizontal-tb` auf `vertical-rl` zu ändern.

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

### Kurzformen für Rahmen

Es gibt Zweiwert-Kurzformen, um die Breite, den Stil und die Farbe der Block- oder Inline-Dimension festzulegen, sowie Kurzformen, um alle drei Werte in der Block- oder Inline-Dimension festzulegen. Der unten stehende Code würde Ihnen in einem horizontalen Schreibmodus einen `2px grün soliden` Rahmen oben und unten an der Box geben, und einen `4px gepunktet purpurnen` Rahmen links und rechts.

```css
.box {
  border-block: 2px solid green;
  border-inline-width: 4px;
  border-inline-style: dotted;
  border-inline-color: rebeccapurple;
}
```

### Flussbezogene Border-Radius-Eigenschaften

Das Modul hat flussbezogene Äquivalente für die {{cssxref("border-radius")}}-Langhandeigenschaften. Das folgende Beispiel würde im horizontalen `writing-mode` den oberen rechten Eckradius auf `1em` setzen, den unteren rechten auf `0`, den unteren linken auf `20px` und den oberen linken auf `40px`.

```css
.box {
  border-end-start-radius: 1em;
  border-end-end-radius: 0;
  border-start-end-radius: 20px;
  border-start-start-radius: 40px;
}
```

## Angabe logischer Werte für die Vierwert-Kurzform-Syntax

Die Spezifikation macht einen Vorschlag für die Vierwert-Kurzformen wie die `margin`-Eigenschaft, jedoch ist die endgültige Entscheidung darüber, wie dies angezeigt werden soll, noch nicht gelöst und wird in [diesem Problem](https://github.com/w3c/csswg-drafts/issues/1282) diskutiert.

Die Verwendung einer beliebigen Vierwert-Kurzform wie `margin`, `padding` oder `border` wird derzeit die physischen Versionen verwenden, daher sollten, wenn die Flussrichtung des Dokuments wichtig ist, vorerst die ausführlichen Eigenschaften verwendet werden.
