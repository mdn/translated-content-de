---
title: Logische Eigenschaften zur Größenbestimmung
slug: Web/CSS/CSS_logical_properties_and_values/Sizing
l10n:
  sourceCommit: 02cc9311b281b73322c5d13185119d2e8adf336a
---

{{CSSRef}}

In diesem Leitfaden erklären wir die flussrelativen Zuordnungen zwischen physikalischen Dimensionseigenschaften und logischen Eigenschaften, die zur Größenbestimmung von Elementen auf unseren Seiten verwendet werden.

Bei der Angabe der Größe eines Elements ermöglicht Ihnen das Modul [CSS logical properties and values](/de/docs/Web/CSS/CSS_logical_properties_and_values), die Größe in Bezug auf den Textfluss (inline und block) anzugeben, anstatt sich auf physikalische Größen zu beziehen, die sich auf die physikalischen Maße horizontaler und vertikaler Dimensionen (z.B. links und rechts) beziehen. Obwohl diese flussrelativen Zuordnungen für viele von uns möglicherweise zum Standard werden, können Sie in einem Design sowohl physikalische als auch logische Größen verwenden. Sie könnten wollen, dass einige Merkmale sich immer auf die physikalischen Dimensionen beziehen, unabhängig vom Schreibmodus.

## Zuordnungen für Dimensionen

Die folgende Tabelle bietet Zuordnungen zwischen logischen und physikalischen Eigenschaften. Diese Zuordnungen setzen voraus, dass Sie sich in einem `horizontal-tb` Schreibmodus befinden, wie z.B. Englisch oder Arabisch, in welchem Fall {{CSSxRef("width")}} zu {{CSSxRef("inline-size")}} zugeordnet würde.

Wenn Sie sich in einem vertikalen Schreibmodus befinden, würde {{CSSxRef("inline-size")}} zu {{CSSxRef("height")}} zugeordnet werden.

| Logische Eigenschaft           | Physikalische Eigenschaft |
| ------------------------------ | ------------------------- |
| {{CSSxRef("inline-size")}}     | {{CSSxRef("width")}}      |
| {{CSSxRef("block-size")}}      | {{CSSxRef("height")}}     |
| {{CSSxRef("min-inline-size")}} | {{CSSxRef("min-width")}}  |
| {{CSSxRef("min-block-size")}}  | {{CSSxRef("min-height")}} |
| {{CSSxRef("max-inline-size")}} | {{CSSxRef("max-width")}}  |
| {{CSSxRef("max-block-size")}}  | {{CSSxRef("max-height")}} |

## Breiten- und Höhenbeispiel

Die logischen Zuordnungen für {{CSSxRef("width")}} und {{CSSxRef("height")}} sind {{CSSxRef("inline-size")}}, welches die Länge in der Inline-Dimension setzt, und {{CSSxRef("block-size")}}, welches die Länge in der Block-Dimension setzt. Beim Arbeiten in Englisch führt das Ersetzen von `width` durch `inline-size` und `height` durch `block-size` zum gleichen Layout.

Im nachfolgenden Live-Beispiel ist der `writing-mode` auf `horizontal-tb` gesetzt. Ändern Sie ihn in `vertical-rl`, und Sie werden sehen, dass das erste Beispiel – welches `width` und `height` verwendet – in jeder Dimension gleich groß bleibt, obwohl der Text vertikal wird. Das zweite Beispiel – welches `inline-size` und `block-size` verwendet – folgt der Textausrichtung, als ob der gesamte Block rotiert wäre.

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

## Min-width und Min-height Beispiel

Es gibt auch Zuordnungen für {{CSSxRef("min-width")}} und {{CSSxRef("min-height")}} — diese sind {{CSSxRef("min-inline-size")}} und {{CSSxRef("min-block-size")}}. Diese funktionieren auf die gleiche Weise wie die Eigenschaften `inline-size` und `block-size`, nur dass eine Mindestgröße anstelle einer festen Größe festgelegt wird.

Versuchen Sie, das Beispiel unten auf `vertical-rl` zu ändern, wie beim ersten Beispiel, um den Effekt zu sehen. Ich verwende `min-height` im ersten Beispiel und `min-block-size` im zweiten.

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

## Max-width und Max-height Beispiel

Schließlich können Sie {{CSSxRef("max-inline-size")}} und {{CSSxRef("max-block-size")}} als logische Ersetzungen für {{CSSxRef("max-width")}} und {{CSSxRef("max-height")}} verwenden. Versuchen Sie, mit dem untenstehenden Beispiel auf die gleiche Weise wie zuvor zu experimentieren.

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

## Logische Schlüsselwörter für das Resizing

Die {{CSSxRef("resize")}} Eigenschaft legt fest, ob ein Element in der Größe verändert werden kann, und hat physikalische Werte von `horizontal` und `vertical`. Die `resize`-Eigenschaft hat auch logische Schlüsselwortwerte. Die Verwendung von `resize: inline` ermöglicht das Resizing in der Inline-Dimension und `resize: block` erlaubt das Resizing in der Block-Dimension.

Der Schlüsselwortwert `both` für die Resizing-Eigenschaft funktioniert sowohl physikalisch als auch logisch. Er setzt beide Dimensionen gleichzeitig. Versuchen Sie, mit dem folgenden Beispiel zu experimentieren.

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
