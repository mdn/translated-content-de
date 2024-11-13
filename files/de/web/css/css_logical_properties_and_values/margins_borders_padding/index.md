---
title: Logische Eigenschaften für Margen, Rahmen und Abstände
slug: Web/CSS/CSS_logical_properties_and_values/Margins_borders_padding
l10n:
  sourceCommit: 02cc9311b281b73322c5d13185119d2e8adf336a
---

{{CSSRef}}

Das Modul [CSS logical properties and values](/de/docs/Web/CSS/CSS_logical_properties_and_values) definiert flussbezogene Zuordnungen für die verschiedenen Margin-, Rahmen- und Abstandseigenschaften und deren Kurzfassungen. In diesem Leitfaden werfen wir einen Blick auf diese.

Wenn Sie sich das Modul [logical properties and values](/de/docs/Web/CSS/CSS_logical_properties_and_values) ansehen, können Sie feststellen, dass die Liste der Moduleigenschaften sehr lang ist. Dies liegt hauptsächlich daran, dass es für Seite-Margin-, Rahmen- und Abständeigenschaften jeweils vier Langform-Werte sowie alle Kurzform-Werte gibt.

## Zuordnungen für Margen, Rahmen und Abstände

Das Modul beschreibt die Zuordnungen für jeden logischen Wert zu einem physischen Gegenstück. Die folgende Tabelle ordnet diese Werte für den Fall zu, dass der {{cssxref("writing-mode")}} `horizontal-tb` ist – mit einer Richtung von links nach rechts. Die Inline-Richtung verläuft daher horizontal – von links nach rechts – und {{cssxref("margin-inline-start")}} wäre das Äquivalent zu {{cssxref("margin-left")}}.

Wenn Sie einen `horizontal-tb` Schreibmodus mit einer Textausrichtung von rechts nach links verwenden würden, wäre {{cssxref("margin-inline-start")}} dasselbe wie {{cssxref("margin-right")}}, und in einem vertikalen Schreibmodus wäre es dasselbe wie die Verwendung von {{cssxref("margin-top")}}.

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

Es gibt auch einige zusätzliche Kurzfassungen, die es ermöglichen, gleichzeitig beide Block- oder beide Inline-Kanten der Box anzusprechen. Diese Kurzformen haben kein physisches Äquivalent.

| Eigenschaft                        | Zweck                                                                                                                  |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| {{cssxref("border-block")}}        | Setzt {{cssxref("border-color")}}, {{cssxref("border-style")}} und {{cssxref("border-width")}} für beide Block-Ränder. |
| {{cssxref("border-block-color")}}  | Setzt `border-color` für beide Block-Ränder.                                                                           |
| {{cssxref("border-block-style")}}  | Setzt `border-style` für beide Block-Ränder.                                                                           |
| {{cssxref("border-block-width")}}  | Setzt `border-width` für beide Block-Ränder.                                                                           |
| {{cssxref("border-inline")}}       | Setzt `border-color`, `-style` und `-width` für beide Inline-Ränder.                                                   |
| {{cssxref("border-inline-color")}} | Setzt `border-color` für beide Inline-Ränder.                                                                          |
| {{cssxref("border-inline-style")}} | Setzt `border-style` für beide Inline-Ränder.                                                                          |
| {{cssxref("border-inline-width")}} | Setzt `border-width` für beide Inline-Ränder.                                                                          |
| {{cssxref("margin-block")}}        | Setzt alle Block-{{cssxref("margin")}}s.                                                                               |
| {{cssxref("margin-inline")}}       | Setzt alle Inline-`margin`s.                                                                                           |
| {{cssxref("padding-block")}}       | Setzt das Block-{{cssxref("padding")}}.                                                                                |
| {{cssxref("padding-inline")}}      | Setzt das Inline-`padding`.                                                                                            |

## Margin-Beispiele

Die zugeordneten Margin-Eigenschaften {{cssxref("margin-inline-start")}}, {{cssxref("margin-inline-end")}}, {{cssxref("margin-block-start")}} und {{cssxref("margin-inline-end")}} können anstelle ihrer physischen Gegenstücke verwendet werden.

Dieses Beispiel enthält zwei Boxen mit unterschiedlich großen Margen an jedem Rand. Ein extra Container mit einem Rahmen wurde hinzugefügt, um den Margin deutlicher zu machen.

Eine Box verwendet physische Eigenschaften und die andere logische Eigenschaften. Versuchen Sie, die Eigenschaft {{cssxref("direction")}} auf `rtl` zu ändern, um die Boxen in einer rechts-nach-links Richtung anzuzeigen; die Margen der ersten Box bleiben an derselben Stelle, während die Margen an der Inline-Dimension der zweiten Box wechseln.

Versuchen Sie auch, den `writing-mode` von `horizontal-tb` zu `vertical-rl` zu ändern. Beachten Sie, wie die Margen bei der ersten Box an derselben Stelle bleiben, sich aber um die Textrichtung in der zweiten Box drehen.

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

### Margin-Kurzformen

Es gibt Kurzformen, um entweder beide Inline-Seiten oder beide Block-Seiten anzusprechen, {{cssxref("margin-inline")}} und {{cssxref("margin-block")}}. Jede akzeptiert zwei Werte. Der erste Wert wird auf den Anfang dieser Dimension angewendet, der zweite auf das Ende. Wenn nur ein Wert gesetzt wird, wird er auf beide angewendet.

In einem horizontalen Schreibmodus würde dieses CSS `5px` Margin auf die Oberseite der Box und `10px` Margin auf die Unterseite anwenden.

```css
.box {
  margin-block: 5px 10px;
}
```

## Padding-Beispiele

Die zugeordneten Padding-Eigenschaften {{cssxref("padding-inline-start")}}, {{cssxref("padding-inline-end")}}, {{cssxref("padding-block-start")}} und {{cssxref("padding-inline-end")}} können anstelle ihrer physischen Gegenstücke verwendet werden.

In diesem Beispiel gibt es zwei Boxen. Eine hat physische Padding-Eigenschaften gesetzt und die andere verwendet logische Padding-Eigenschaften. Mit einem `writing-mode` von `horizontal-tb` sollten beide Boxen gleich aussehen.

Versuchen Sie, die `direction` Eigenschaft auf `rtl` zu ändern, um die Boxen in einer rechts-nach-links Richtung anzuzeigen. Das Padding der ersten Box bleibt an derselben Stelle, während das Padding an der Inline-Dimension der zweiten Box wechselt.

Sie können auch versuchen, den `writing-mode` von `horizontal-tb` zu `vertical-rl` zu ändern. Beachten Sie erneut, wie das Padding bei der ersten Box an derselben Stelle bleibt, sich aber um die Textrichtung in der zweiten Box dreht.

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

### Padding-Kurzformen

Wie bei Margin gibt es zweifache Kurzformen für Padding — {{cssxref("padding-inline")}} und {{cssxref("padding-block")}} — die es ermöglichen, das Padding der beiden Inline- und der beiden Blockdimensionen zu setzen.

In einem horizontalen `writing-mode` würde dieses CSS `5px` Padding oben und `10px` Padding unten auf die Box anwenden:

```css
.box {
  padding-block: 5px 10px;
}
```

## Rahmen-Beispiele

Die Rahmen-Eigenschaften sind der Hauptgrund dafür, dass dieses Modul so viele Eigenschaften zu haben scheint, da es Langform-logische Eigenschaften für die Farbe, Breite und den Stil des Rahmens auf jeder Seite einer Box bereitstellt, zusammen mit der Kurzform, um alle drei auf einmal für jede Seite zu setzen. Wie bei Margin und Padding gibt es eine zugeordnete Version jeder physischen Eigenschaft.

Das untenstehende Demo verwendet einige Langformen und drei Kurzformwerte. Wie bei den anderen Demos versuchen Sie, die `direction` Eigenschaft auf `rtl` zu ändern, um die Boxen in einer rechts-nach-links Richtung anzuzeigen, oder den `writing-mode` von `horizontal-tb` zu `vertical-rl` zu ändern.

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

### Rahmen-Kurzformen

Es gibt zweifache Kurzformen, um die Breite, den Stil und die Farbe der Block- oder Inline-Dimension zu setzen, sowie Kurzformen, um alle drei Werte in der Block- oder Inline-Dimension zu setzen. Der untenstehende Code würde Ihnen im horizontalen Schreibmodus einen `2px grünen soliden` Rahmen an der Ober- und Unterseite der Box, und einen `4px gepunkteten lila` Rahmen auf der linken und rechten Seite geben.

```css
.box {
  border-block: 2px solid green;
  border-inline-width: 4px;
  border-inline-style: dotted;
  border-inline-color: rebeccapurple;
}
```

### Flussbezogene border-radius Eigenschaften

Das Modul hat flussbezogene Entsprechungen für die Langformen von {{cssxref("border-radius")}}. Das folgende Beispiel würde im horizontalen `writing-mode` den oberen rechten Randradius auf `1em` setzen, den unteren rechten auf `0`, den unteren linken auf `20px` und den oberen linken auf `40px`.

```css
.box {
  border-end-start-radius: 1em;
  border-end-end-radius: 0;
  border-start-end-radius: 20px;
  border-start-start-radius: 40px;
}
```

## Kennzeichnung logischer Werte für die 4-Wert-Kurzform-Syntax

Die Spezifikation gibt eine Empfehlung für die vier-Wert-Kurzformen wie die `margin`-Eigenschaft, jedoch ist die endgültige Entscheidung, wie dies gekennzeichnet werden soll, noch ungelöst und wird in [dieser Diskussion](https://github.com/w3c/csswg-drafts/issues/1282) thematisiert.

Die Verwendung jeder vier-Wert-Kurzform wie `margin`, `padding` oder `border` wird derzeit die physischen Versionen verwenden, daher, wenn es wichtig ist, dem Fluss des Dokuments zu folgen, verwenden Sie vorerst die Langform-Eigenschaften.
