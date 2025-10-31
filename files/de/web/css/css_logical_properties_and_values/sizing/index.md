---
title: Logische Eigenschaften für die Größenbestimmung
slug: Web/CSS/CSS_logical_properties_and_values/Sizing
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

In diesem Leitfaden erklären wir die flussbezogenen Zuordnungen zwischen physikalischen Dimensionseigenschaften und logischen Eigenschaften, die zur Größenbestimmung von Elementen auf unseren Seiten verwendet werden.

Beim Festlegen der Größe eines Elements ermöglicht Ihnen das Modul [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values), die Größenbestimmung in Bezug auf den Textfluss (inline und block) zu definieren, anstatt auf physikalische Größen, die sich auf die physikalischen Dimensionen von horizontal und vertikal (z. B. links und rechts) beziehen. Während diese flussbezogenen Zuordnungen für viele von uns durchaus der Standard werden könnten, können in einem Design sowohl physikalische als auch logische Größen verwendet werden. Möglicherweise möchten Sie, dass einige Merkmale unabhängig vom Schreibmodus immer auf die physikalischen Dimensionen bezogen sind.

## Zuordnungen für Dimensionen

Die folgende Tabelle bietet Zuordnungen zwischen logischen und physikalischen Eigenschaften. Diese Zuordnungen gehen davon aus, dass Sie sich in einem `horizontal-tb` Schreibmodus befinden, wie zum Beispiel Englisch oder Arabisch, in welchem Fall {{CSSxRef("width")}} auf {{CSSxRef("inline-size")}} abgebildet wird.

Wenn Sie sich in einem vertikalen Schreibmodus befinden, würde {{CSSxRef("inline-size")}} auf {{CSSxRef("height")}} abgebildet werden.

| Logische Eigenschaft           | Physikalische Eigenschaft |
| ------------------------------ | ------------------------- |
| {{CSSxRef("inline-size")}}     | {{CSSxRef("width")}}      |
| {{CSSxRef("block-size")}}      | {{CSSxRef("height")}}     |
| {{CSSxRef("min-inline-size")}} | {{CSSxRef("min-width")}}  |
| {{CSSxRef("min-block-size")}}  | {{CSSxRef("min-height")}} |
| {{CSSxRef("max-inline-size")}} | {{CSSxRef("max-width")}}  |
| {{CSSxRef("max-block-size")}}  | {{CSSxRef("max-height")}} |

## Beispiel für Breite und Höhe

Die logischen Zuordnungen für {{CSSxRef("width")}} und {{CSSxRef("height")}} sind {{CSSxRef("inline-size")}}, was die Länge in der Inline-Dimension festlegt, und {{CSSxRef("block-size")}}, was die Länge in der Block-Dimension festlegt. Bei englischen Texten führt das Ersetzen von `width` durch `inline-size` und `height` durch `block-size` zum selben Layout.

Im Live-Beispiel unten ist der `writing-mode` auf `horizontal-tb` gesetzt. Ändern Sie ihn auf `vertical-rl` und Sie werden sehen, dass das erste Beispiel — das `width` und `height` verwendet — in jeder Dimension die gleiche Größe behält, obwohl der Text vertikal wird. Das zweite Beispiel — das `inline-size` und `block-size` verwendet — wird der Textausrichtung folgen, als ob der gesamte Block rotiert wäre.

```html live-sample___size-inline-block
<div class="container">
  <div class="physical box">I have a width of 200px and a height of 100px.</div>

  <div class="logical box">
    I have an inline-size of 200px and a block-size of 100px.
  </div>
</div>
```

```css hidden live-sample___size-inline-block
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
  padding: 10px;
  margin: 10px;
}
```

```css live-sample___size-inline-block
.box {
  writing-mode: horizontal-tb;
}

.physical {
  width: 200px;
  height: 100px;
}

.logical {
  inline-size: 200px;
  block-size: 100px;
}
```

{{EmbedLiveSample("size-inline-block")}}

## Beispiel für Min-width und Min-height

Es gibt auch Zuordnungen für {{CSSxRef("min-width")}} und {{CSSxRef("min-height")}} — dies sind {{CSSxRef("min-inline-size")}} und {{CSSxRef("min-block-size")}}. Diese funktionieren auf die gleiche Weise wie die Eigenschaften `inline-size` und `block-size`, aber sie legen eine Mindestgröße anstelle einer festen Größe fest.

Versuchen Sie, das Beispiel unten auf `vertical-rl` zu ändern, wie im ersten Beispiel, um den Effekt zu sehen. Ich verwende `min-height` im ersten Beispiel und `min-block-size` im zweiten.

```html live-sample___size-min
<div class="container">
  <div class="physical box">
    I have a width of 200px and a min-height of 5em.
  </div>

  <div class="logical box">
    I have an inline-size of 200px and a min-block-size of 5em.
  </div>
</div>
```

```css hidden live-sample___size-min
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
  padding: 10px;
  margin: 10px;
}
```

```css live-sample___size-min
.box {
  writing-mode: horizontal-tb;
}

.physical {
  width: 200px;
  min-height: 5em;
}

.logical {
  inline-size: 200px;
  min-block-size: 5em;
}
```

{{EmbedLiveSample("size-min")}}

## Beispiel für Max-width und Max-height

Schließlich können Sie {{CSSxRef("max-inline-size")}} und {{CSSxRef("max-block-size")}} als logische Ersatzwerte für {{CSSxRef("max-width")}} und {{CSSxRef("max-height")}} verwenden. Versuchen Sie, mit dem folgenden Beispiel auf die gleiche Weise zu experimentieren wie zuvor.

```html live-sample___size-max
<div class="container">
  <div class="physical box">I have a max-width of 200px.</div>

  <div class="logical box">I have a max-inline-size of 200px.</div>
</div>
```

```css hidden live-sample___size-max
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
  padding: 10px;
  margin: 10px;
}
```

```css live-sample___size-max
.box {
  writing-mode: horizontal-tb;
}

.physical {
  max-width: 200px;
}

.logical {
  max-inline-size: 200px;
}
```

{{EmbedLiveSample("size-max")}}

## Logische Schlüsselwörter für Resize

Die Eigenschaft {{CSSxRef("resize")}} legt fest, ob ein Element in der Größe geändert werden kann und hat physikalische Werte wie `horizontal` und `vertical`. Die `resize` Eigenschaft hat auch logische Schlüsselwortwerte. Die Verwendung von `resize: inline` ermöglicht das Ändern der Größe in der Inline-Dimension und `resize: block` ermöglicht das Ändern der Größe in der Block-Dimension.

Das Schlüsselwort `both` für die Resize-Eigenschaft funktioniert sowohl physikalisch als auch logisch. Es legt beide Dimensionen auf einmal fest. Versuchen Sie, mit dem untenstehenden Beispiel zu experimentieren.

```html live-sample___size-resize
<div class="container">
  <div class="physical box">
    I have a width of 200px and a height of 100px. I can be resized
    horizontally.
  </div>

  <div class="logical box">
    I have an inline-size of 200px and a block-size of 100px. I can be resized
    in the inline direction.
  </div>
</div>
```

```css hidden live-sample___size-resize
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
  padding: 10px;
  margin: 10px;
}
```

```css live-sample___size-resize
.box {
  writing-mode: horizontal-tb;
  overflow: scroll;
}

.physical {
  width: 200px;
  height: 100px;
  resize: horizontal;
}

.logical {
  inline-size: 200px;
  block-size: 100px;
  resize: inline;
}
```

{{EmbedLiveSample("size-resize")}}
