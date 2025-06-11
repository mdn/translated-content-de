---
title: Logische Eigenschaften zur Größenbestimmung
slug: Web/CSS/CSS_logical_properties_and_values/Sizing
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

In diesem Leitfaden erläutern wir die flussrelativen Zuordnungen zwischen physischen Dimensionseigenschaften und logischen Eigenschaften, die zur Größenbestimmung von Elementen auf unseren Seiten verwendet werden.

Beim Festlegen der Größe eines Elements ermöglicht Ihnen das Modul [CSS logical properties and values](/de/docs/Web/CSS/CSS_logical_properties_and_values), die Größe in Bezug auf den Fluss des Textes (inline und block) anzugeben und nicht in physischer Größenbestimmung, die sich auf die physischen Dimensionen von horizontal und vertikal (z.B. links und rechts) bezieht. Während diese flussrelativen Zuordnungen möglicherweise für viele von uns zum Standard werden, können Sie in einem Design sowohl physische als auch logische Größenangaben verwenden. Einige Funktionen sollen möglicherweise immer in Bezug auf die physischen Dimensionen sein, unabhängig vom Schreibmodus.

## Zuordnungen für Dimensionen

Die folgende Tabelle bietet Zuordnungen zwischen logischen und physischen Eigenschaften. Diese Zuordnungen gehen davon aus, dass Sie sich in einem `horizontal-tb`-Schreibmodus befinden, wie zum Beispiel Englisch oder Arabisch, in welchem Fall {{CSSxRef("width")}} auf {{CSSxRef("inline-size")}} abgebildet werden würde.

Wenn Sie sich in einem vertikalen Schreibmodus befinden, wird {{CSSxRef("inline-size")}} auf {{CSSxRef("height")}} abgebildet.

| Logische Eigenschaft           | Physische Eigenschaft     |
| ------------------------------ | ------------------------- |
| {{CSSxRef("inline-size")}}     | {{CSSxRef("width")}}      |
| {{CSSxRef("block-size")}}      | {{CSSxRef("height")}}     |
| {{CSSxRef("min-inline-size")}} | {{CSSxRef("min-width")}}  |
| {{CSSxRef("min-block-size")}}  | {{CSSxRef("min-height")}} |
| {{CSSxRef("max-inline-size")}} | {{CSSxRef("max-width")}}  |
| {{CSSxRef("max-block-size")}}  | {{CSSxRef("max-height")}} |

## Breiten- und Höhenbeispiel

Die logischen Zuordnungen für {{CSSxRef("width")}} und {{CSSxRef("height")}} sind {{CSSxRef("inline-size")}}, das die Länge in der Inline-Dimension festlegt, und {{CSSxRef("block-size")}}, das die Länge in der Block-Dimension festlegt. Wenn Sie mit Englisch arbeiten, führt das Ersetzen von `width` durch `inline-size` und `height` durch `block-size` zum gleichen Layout.

Im folgenden Live-Beispiel ist der `writing-mode` auf `horizontal-tb` gesetzt. Ändern Sie ihn zu `vertical-rl`, und Sie werden sehen, dass das erste Beispiel — das `width` und `height` verwendet — in jeder Dimension gleich groß bleibt, obwohl der Text vertikal wird. Das zweite Beispiel — das `inline-size` und `block-size` verwendet — folgt der Textausrichtung, als ob der gesamte Block rotiert wäre.

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

Es gibt auch Zuordnungen für {{CSSxRef("min-width")}} und {{CSSxRef("min-height")}} — diese sind {{CSSxRef("min-inline-size")}} und {{CSSxRef("min-block-size")}}. Diese funktionieren auf die gleiche Weise wie die `inline-size` und `block-size` Eigenschaften, setzen aber ein Minimum statt einer festen Größe.

Versuchen Sie, das folgende Beispiel auf `vertical-rl` zu ändern, wie beim ersten Beispiel, um den Effekt zu sehen. Im ersten Beispiel verwende ich `min-height` und im zweiten Beispiel `min-block-size`.

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

Schließlich können Sie {{CSSxRef("max-inline-size")}} und {{CSSxRef("max-block-size")}} als logische Ersatz für {{CSSxRef("max-width")}} und {{CSSxRef("max-height")}} verwenden. Versuchen Sie, mit dem unten stehenden Beispiel ebenso zu experimentieren.

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

Die {{CSSxRef("resize")}}-Eigenschaft legt fest, ob ein Element vergrößert oder verkleinert werden kann, und hat die physischen Werte `horizontal` und `vertical`. Die `resize`-Eigenschaft verfügt auch über logische Schlüsselwortwerte. Mit `resize: inline` kann in der Inline-Dimension und mit `resize: block` in der Block-Dimension vergrößert oder verkleinert werden.

Der Schlüsselwortwert `both` für die Resize-Eigenschaft funktioniert sowohl in physischer als auch in logischer Hinsicht. Er setzt beide Dimensionen gleichzeitig fest. Versuchen Sie, das untenstehende Beispiel zu verwenden.

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
