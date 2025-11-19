---
title: Logische Eigenschaften für Größenanpassung
short-title: Für Größenanpassung
slug: Web/CSS/Guides/Logical_properties_and_values/Sizing
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

In diesem Leitfaden erklären wir die flussrelativen Zuordnungen zwischen physikalischen Dimensionseigenschaften und logischen Eigenschaften, die zur Größenanpassung von Elementen auf unseren Seiten verwendet werden.

Wenn Sie die Größe eines Elements angeben, bietet Ihnen das Modul [CSS logical properties and values](/de/docs/Web/CSS/Guides/Logical_properties_and_values) die Möglichkeit, die Größenanpassung in Bezug auf den Textfluss (inline und block) anzugeben, anstatt physikalische Größenangaben zu verwenden, die sich auf die physikalischen Dimensionen von horizontal und vertikal (z.B. links und rechts) beziehen. Während diese flussrelativen Zuordnungen für viele von uns wohl zum Standard werden, kann es in einem Design gut sein, sowohl physikalische als auch logische Größenanpassungen zu verwenden. Möglicherweise möchten Sie, dass sich einige Merkmale stets auf die physikalischen Dimensionen beziehen, unabhängig vom Schreibmodus.

## Zuordnungen für Dimensionen

Die folgende Tabelle bietet Zuordnungen zwischen logischen und physikalischen Eigenschaften. Diese Zuordnungen gehen davon aus, dass Sie sich in einem `horizontal-tb`-Schreibmodus befinden, wie zum Beispiel Englisch oder Arabisch, in welchem Fall {{CSSxRef("width")}} auf {{CSSxRef("inline-size")}} abgebildet wird.

Wenn Sie sich in einem vertikalen Schreibmodus befinden würden, würde {{CSSxRef("inline-size")}} auf {{CSSxRef("height")}} abgebildet werden.

| Logische Eigenschaft           | Physikalische Eigenschaft |
| ------------------------------ | ------------------------- |
| {{CSSxRef("inline-size")}}     | {{CSSxRef("width")}}      |
| {{CSSxRef("block-size")}}      | {{CSSxRef("height")}}     |
| {{CSSxRef("min-inline-size")}} | {{CSSxRef("min-width")}}  |
| {{CSSxRef("min-block-size")}}  | {{CSSxRef("min-height")}} |
| {{CSSxRef("max-inline-size")}} | {{CSSxRef("max-width")}}  |
| {{CSSxRef("max-block-size")}}  | {{CSSxRef("max-height")}} |

## Beispiel für Breite und Höhe

Die logischen Zuordnungen für {{CSSxRef("width")}} und {{CSSxRef("height")}} sind {{CSSxRef("inline-size")}}, was die Länge in der Inline-Dimension einstellt, und {{CSSxRef("block-size")}}, was die Länge in der Block-Dimension einstellt. Bei der Arbeit in Englisch ergibt das Ersetzen von `width` durch `inline-size` und `height` durch `block-size` dasselbe Layout.

Im folgenden Live-Beispiel ist der `writing-mode` auf `horizontal-tb` eingestellt. Ändern Sie ihn zu `vertical-rl` und Sie werden sehen, dass das erste Beispiel — welches `width` und `height` verwendet — in jeder Dimension gleich groß bleibt, obwohl der Text vertikal wird. Das zweite Beispiel — welches `inline-size` und `block-size` verwendet — folgt der Textrichtung, als ob der gesamte Block rotiert wurde.

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

## Beispiel für min-width und min-height

Es gibt auch Zuordnungen für {{CSSxRef("min-width")}} und {{CSSxRef("min-height")}} — diese sind {{CSSxRef("min-inline-size")}} und {{CSSxRef("min-block-size")}}. Diese funktionieren auf die gleiche Weise wie die Eigenschaften `inline-size` und `block-size`, jedoch wird eine Mindestgröße statt einer festen Größe festgelegt.

Versuchen Sie, das Beispiel unten zu `vertical-rl` zu ändern, wie im ersten Beispiel, um den Effekt zu sehen. Im ersten Beispiel verwende ich `min-height` und im zweiten `min-block-size`.

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

## Beispiel für max-width und max-height

Schließlich können Sie {{CSSxRef("max-inline-size")}} und {{CSSxRef("max-block-size")}} als logische Ersetzungen für {{CSSxRef("max-width")}} und {{CSSxRef("max-height")}} verwenden. Versuchen Sie, mit dem untenstehenden Beispiel auf die gleiche Weise zu experimentieren wie zuvor.

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

## Logische Schlüsselwörter zur Größenänderung

Die Eigenschaft {{CSSxRef("resize")}} legt fest, ob ein Element vergrößert werden kann oder nicht, und hat physikalische Werte von `horizontal` und `vertical`. Die Eigenschaft `resize` verfügt auch über logische Schlüsselwortwerte. Die Verwendung von `resize: inline` erlaubt die Größenänderung in der Inline-Dimension und `resize: block` erlaubt die Größenänderung in der Block-Dimension.

Der Schlüsselwortwert `both` für die Resize-Eigenschaft funktioniert unabhängig davon, ob Sie physikalisch oder logisch denken. Er setzt beide Dimensionen gleichzeitig. Versuchen Sie, mit dem untenstehenden Beispiel zu spielen.

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
