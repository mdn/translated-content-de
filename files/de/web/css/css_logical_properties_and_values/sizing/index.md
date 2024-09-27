---
title: Logische Eigenschaften für Größenanpassung
slug: Web/CSS/CSS_logical_properties_and_values/Sizing
l10n:
  sourceCommit: 86cec43154e2d0652933b14fe411ad052b6beb03
---

{{CSSRef}}

In diesem Leitfaden erklären wir die flussrelativen Zuordnungen zwischen physikalischen Dimensionseigenschaften und logischen Eigenschaften, die zur Größenanpassung von Elementen auf unseren Seiten verwendet werden.

Beim Angeben der Größe eines Elements bietet Ihnen das Modul [CSS logical properties and values](/de/docs/Web/CSS/CSS_logical_properties_and_values) die Möglichkeit, die Größe in Bezug auf den Fluss des Textes (inline und block) anzugeben, anstatt physikalische Größen zu verwenden, die sich auf die physikalischen Dimensionen horizontal und vertikal (z. B. links und rechts) beziehen. Während diese flussrelativen Zuordnungen für viele von uns zum Standard werden mögen, können Sie in einem Design sowohl physikalische als auch logische Größen verwenden. Sie möchten möglicherweise, dass einige Funktionen immer in Bezug auf die physikalischen Dimensionen bezogen werden, unabhängig von der Schreibrichtung.

## Zuordnungen für Dimensionen

Die folgende Tabelle bietet Zuordnungen zwischen logischen und physikalischen Eigenschaften. Diese Zuordnungen gehen davon aus, dass Sie sich in einem `horizontal-tb` Schreibmodus befinden, wie Englisch oder Arabisch, in diesem Fall würde {{CSSxRef("width")}} in {{CSSxRef("inline-size")}} abgebildet.

Wenn Sie sich in einem vertikalen Schreibmodus befinden, würde {{CSSxRef("inline-size")}} in {{CSSxRef("height")}} abgebildet werden.

| Logische Eigenschaft           | Physikalische Eigenschaft |
| ------------------------------ | ------------------------- |
| {{CSSxRef("inline-size")}}     | {{CSSxRef("width")}}      |
| {{CSSxRef("block-size")}}      | {{CSSxRef("height")}}     |
| {{CSSxRef("min-inline-size")}} | {{CSSxRef("min-width")}}  |
| {{CSSxRef("min-block-size")}}  | {{CSSxRef("min-height")}} |
| {{CSSxRef("max-inline-size")}} | {{CSSxRef("max-width")}}  |
| {{CSSxRef("max-block-size")}}  | {{CSSxRef("max-height")}} |

## Breite- und Höhe-Beispiel

Die logischen Zuordnungen für {{CSSxRef("width")}} und {{CSSxRef("height")}} sind {{CSSxRef("inline-size")}}, das die Länge in der Inline-Dimension setzt, und {{CSSxRef("block-size")}}, das die Länge in der Block-Dimension setzt. Wenn Sie auf Englisch arbeiten, ergibt das Ersetzen von `width` durch `inline-size` und `height` durch `block-size` das gleiche Layout.

Im untenstehenden Live-Beispiel ist der `writing-mode` auf `horizontal-tb` gesetzt. Ändern Sie ihn zu `vertical-rl`, und Sie werden sehen, dass das erste Beispiel — das `width` und `height` verwendet — in jeder Dimension gleich groß bleibt, obwohl der Text vertikal wird. Das zweite Beispiel — das `inline-size` und `block-size` verwendet — folgt der Textausrichtung, als ob der gesamte Block rotiert wäre.

{{EmbedGHLiveSample("css-examples/logical/size-inline-block.html", '100%', 500)}}

## Min-width und Min-height Beispiel

Es gibt auch Zuordnungen für {{CSSxRef("min-width")}} und {{CSSxRef("min-height")}} — diese sind {{CSSxRef("min-inline-size")}} und {{CSSxRef("min-block-size")}}. Diese funktionieren genauso wie die `inline-size` und `block-size` Eigenschaften, setzen jedoch eine Mindestgröße anstatt einer festen Größe.

Versuchen Sie, das untenstehende Beispiel zu `vertical-rl` zu ändern, wie beim ersten Beispiel, um die Wirkung zu sehen, die es hat. Ich verwende `min-height` im ersten Beispiel und `min-block-size` im zweiten.

{{EmbedGHLiveSample("css-examples/logical/size-min.html", "100%", 500)}}

## Max-width und Max-height Beispiel

Schließlich können Sie {{CSSxRef("max-inline-size")}} und {{CSSxRef("max-block-size")}} als logische Ersetzungen für {{CSSxRef("max-width")}} und {{CSSxRef("max-height")}} verwenden. Versuchen Sie, mit dem untenstehenden Beispiel wie zuvor zu experimentieren.

{{EmbedGHLiveSample("css-examples/logical/size-max.html", "100%", 500)}}

## Logische Schlüsselwörter für Resize

Die {{CSSxRef("resize")}} Eigenschaft legt fest, ob ein Element größenveränderbar ist und hat physikalische Werte wie `horizontal` und `vertical`. Die `resize`-Eigenschaft hat auch logische Schlüsselwortwerte. Die Nutzung von `resize: inline` erlaubt das Ändern der Größe in der Inline-Dimension und `resize: block` erlaubt das Ändern der Größe in der Block-Dimension.

Der Schlüsselwortwert `both` für die resize Eigenschaft funktioniert sowohl physikalisch als auch logisch. Er setzt beide Dimensionen gleichzeitig. Versuchen Sie, mit dem untenstehenden Beispiel zu experimentieren.

{{EmbedGHLiveSample("css-examples/logical/size-resize.html", "100%", 700)}}
