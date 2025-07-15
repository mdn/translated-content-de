---
title: Logische Eigenschaften für Größenanpassung
slug: Web/CSS/CSS_logical_properties_and_values/Sizing
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

In diesem Leitfaden erklären wir die flussrelativen Zuordnungen zwischen physikalischen Dimensionseigenschaften und logischen Eigenschaften, die zur Größenanpassung von Elementen auf unseren Seiten verwendet werden.

Wenn Sie die Größe eines Elements angeben, bietet Ihnen das [CSS Logical Properties and Values](/de/docs/Web/CSS/CSS_logical_properties_and_values)-Modul die Möglichkeit, die Größenanpassung in Bezug auf den Textfluss (inline und block) statt physikalische Größen zu definieren, die sich auf die physikalischen Dimensionen von horizontal und vertikal (z. B. links und rechts) beziehen. Während diese flussrelativen Zuordnungen für viele von uns möglicherweise zum Standard werden, können Sie in einem Design sowohl physikalische als auch logische Größenanpassungen verwenden. Es kann gewünscht sein, dass einige Funktionen immer in Bezug zu den physikalischen Dimensionen stehen, unabhängig vom Schreibmodus.

## Zuordnungen für Dimensionen

Die folgende Tabelle bietet Zuordnungen zwischen logischen und physikalischen Eigenschaften. Diese Zuordnungen gehen davon aus, dass Sie sich in einem `horizontal-tb`-Schreibmodus befinden, wie z. B. Englisch oder Arabisch, in welchem Fall {{CSSxRef("width")}} zu {{CSSxRef("inline-size")}} zugeordnet werden würde.

Wenn Sie sich in einem vertikalen Schreibmodus befinden würden, würde {{CSSxRef("inline-size")}} zu {{CSSxRef("height")}} zugeordnet werden.

| Logische Eigenschaft           | Physikalische Eigenschaft |
| ------------------------------ | ------------------------- |
| {{CSSxRef("inline-size")}}     | {{CSSxRef("width")}}      |
| {{CSSxRef("block-size")}}      | {{CSSxRef("height")}}     |
| {{CSSxRef("min-inline-size")}} | {{CSSxRef("min-width")}}  |
| {{CSSxRef("min-block-size")}}  | {{CSSxRef("min-height")}} |
| {{CSSxRef("max-inline-size")}} | {{CSSxRef("max-width")}}  |
| {{CSSxRef("max-block-size")}}  | {{CSSxRef("max-height")}} |

## Beispiel für Breite und Höhe

Die logischen Zuordnungen für {{CSSxRef("width")}} und {{CSSxRef("height")}} sind {{CSSxRef("inline-size")}}, die die Länge in der Inlinedimension festlegt, und {{CSSxRef("block-size")}}, die die Länge in der Blockdimension festlegt. Wenn Sie auf Englisch arbeiten, wird durch Ersetzen von `width` durch `inline-size` und `height` durch `block-size` dasselbe Layout erreicht.

Im folgenden Live-Beispiel ist der `writing-mode` auf `horizontal-tb` gesetzt. Ändern Sie ihn auf `vertical-rl`, und Sie werden sehen, dass das erste Beispiel — welches `width` und `height` verwendet — in beiden Dimensionen die gleiche Größe behält, obwohl der Text vertikal wird. Das zweite Beispiel — welches `inline-size` und `block-size` verwendet — folgt der Textausrichtung, als ob der gesamte Block gedreht wurde.

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

## Beispiel für Mindestbreite und Mindesthöhe

Es gibt auch Zuordnungen für {{CSSxRef("min-width")}} und {{CSSxRef("min-height")}} — diese sind {{CSSxRef("min-inline-size")}} und {{CSSxRef("min-block-size")}}. Diese funktionieren auf die gleiche Weise wie die `inline-size` und `block-size` Eigenschaften, definieren jedoch eine Mindestgröße anstatt einer festen Größe.

Versuchen Sie, das Beispiel unten auf `vertical-rl` zu ändern, wie beim ersten Beispiel, um die Wirkung zu sehen. Im ersten Beispiel verwende ich `min-height` und im zweiten `min-block-size`.

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

## Beispiel für Maximalbreite und Maximalhöhe

Schließlich können Sie {{CSSxRef("max-inline-size")}} und {{CSSxRef("max-block-size")}} als logische Ersatzwerte für {{CSSxRef("max-width")}} und {{CSSxRef("max-height")}} verwenden. Versuchen Sie, mit dem folgenden Beispiel auf die gleiche Weise zu experimentieren.

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

## Logische Schlüsselwörter für Größenanpassung

Die {{CSSxRef("resize")}} Eigenschaft legt fest, ob ein Element größenveränderbar sein soll, und hat physikalische Werte von `horizontal` und `vertical`. Die `resize` Eigenschaft hat auch logische Schlüsselwortwerte. Durch die Verwendung von `resize: inline` wird eine Größenänderung in der Inlinedimension ermöglicht, und `resize: block` erlaubt eine Größenänderung in der Blockdimension.

Der Schlüsselwortwert `both` für die Resize-Eigenschaft funktioniert, egal ob Sie physisch oder logisch denken. Er setzt beide Dimensionen gleichzeitig. Versuchen Sie, mit dem unten stehenden Beispiel zu experimentieren.

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
