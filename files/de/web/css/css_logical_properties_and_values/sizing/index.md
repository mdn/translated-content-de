---
title: Logische Eigenschaften für die Größenbestimmung
slug: Web/CSS/CSS_logical_properties_and_values/Sizing
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}

In diesem Leitfaden erklären wir die flussrelativen Abbildungen zwischen physikalischen Dimensionseigenschaften und logischen Eigenschaften, die zur Größenbestimmung von Elementen auf unseren Seiten verwendet werden.

Wenn Sie die Größe eines Elements festlegen, bietet Ihnen das [CSS Logical Properties and Values](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul die Möglichkeit, die Größe in Bezug auf den Textfluss (inline und block) anzugeben, anstatt auf die physikalische Größe, die sich auf die physikalischen Abmessungen von horizontal und vertikal (z. B. links und rechts) bezieht. Diese flussrelativen Abbildungen könnten für viele von uns gut zum Standard werden, aber in einem Design verwenden Sie möglicherweise sowohl physikalische als auch logische Größenbestimmungen. Sie möchten möglicherweise, dass einige Merkmale immer mit den physikalischen Abmessungen in Beziehung stehen, unabhängig vom Schreibmodus.

## Abbildungen für Dimensionen

Die folgende Tabelle bietet Abbildungen zwischen logischen und physikalischen Eigenschaften. Diese Abbildungen gehen davon aus, dass Sie sich in einem `horizontal-tb` Schreibmodus befinden, wie Englisch oder Arabisch, wobei {{CSSxRef("width")}} auf {{CSSxRef("inline-size")}} abgebildet würde.

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

Die logischen Abbildungen für {{CSSxRef("width")}} und {{CSSxRef("height")}} sind {{CSSxRef("inline-size")}}, die die Länge in der Inline-Dimension festlegt, und {{CSSxRef("block-size")}}, die die Länge in der Block-Dimension festlegt. Wenn Sie mit Englisch arbeiten, erhalten Sie das gleiche Layout, wenn Sie `width` durch `inline-size` und `height` durch `block-size` ersetzen.

Im folgenden Live-Beispiel ist der `writing-mode` auf `horizontal-tb` eingestellt. Ändern Sie es zu `vertical-rl` und Sie werden sehen, dass das erste Beispiel — das `width` und `height` verwendet — in jeder Dimension die gleiche Größe behält, obwohl der Text vertikal wird. Das zweite Beispiel — das `inline-size` und `block-size` verwendet — wird der Textausrichtung folgen, als ob der gesamte Block gedreht wurde.

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

Es gibt auch Abbildungen für {{CSSxRef("min-width")}} und {{CSSxRef("min-height")}} — diese sind {{CSSxRef("min-inline-size")}} und {{CSSxRef("min-block-size")}}. Diese arbeiten auf die gleiche Weise wie die `inline-size` und `block-size` Eigenschaften, setzen jedoch eine Mindestgröße anstelle einer festen Größe.

Versuchen Sie, das untenstehende Beispiel wie im ersten Beispiel auf `vertical-rl` zu ändern, um die Auswirkung zu sehen. Ich verwende `min-height` im ersten Beispiel und `min-block-size` im zweiten.

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

Schließlich können Sie {{CSSxRef("max-inline-size")}} und {{CSSxRef("max-block-size")}} als logische Ersatzwerte für {{CSSxRef("max-width")}} und {{CSSxRef("max-height")}} verwenden. Versuchen Sie, mit dem untenstehenden Beispiel wie zuvor zu experimentieren.

```html live-sample___size-max
<div class="container">
  <div class="physical box">I have a max-width of 200px.</div>

  <div class="logical box">I have an max-inline-size of 200px.</div>
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

## Logische Schlüsselwörter für die Größenänderung

Die {{CSSxRef("resize")}} Eigenschaft legt fest, ob ein Element in der Größe verändert werden kann oder nicht, und hat physikalische Werte wie `horizontal` und `vertical`. Die `resize` Eigenschaft hat auch logische Schlüsselwortwerte. Die Verwendung von `resize: inline` ermöglicht das Ändern der Größe in der Inline-Dimension und `resize: block` erlaubt das Ändern der Größe in der Block-Dimension.

Der Schlüsselwortwert `both` für die Eigenschaft resize funktioniert, egal ob Sie physikalisch oder logisch denken. Es setzt beide Dimensionen gleichzeitig. Versuchen Sie, mit dem untenstehenden Beispiel zu experimentieren.

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
