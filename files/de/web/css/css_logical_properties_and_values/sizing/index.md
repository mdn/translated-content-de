---
title: Logische Eigenschaften für Größenanpassung
slug: Web/CSS/CSS_logical_properties_and_values/Sizing
l10n:
  sourceCommit: 86cec43154e2d0652933b14fe411ad052b6beb03
---

{{CSSRef}}

In diesem Leitfaden werden wir die flussrelativen Zuordnungen zwischen physikalischen Dimensionseigenschaften und logischen Eigenschaften erläutern, die zur Größenanpassung von Elementen auf unseren Seiten verwendet werden.

Beim Festlegen der Größe eines Elements gibt Ihnen das Modul [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) die Möglichkeit, die Größe in Bezug auf den Textfluss (in Zeilen und Blöcken) anzugeben, anstatt physikalischer Größen, die sich auf die physikalischen Dimensionen horizontal und vertikal (z.B. links und rechts) beziehen. Während diese flussrelativen Zuordnungen für viele von uns gut zur Norm werden könnten, können Sie in einem Design sowohl physikalische als auch logische Größen verwenden. Möglicherweise möchten Sie, dass einige Funktionen immer in Bezug auf die physikalischen Dimensionen stehen, unabhängig vom Schreibmodus.

## Zuordnungen für Dimensionen

Die folgende Tabelle bietet Zuordnungen zwischen logischen und physikalischen Eigenschaften. Diese Zuordnungen gehen davon aus, dass Sie sich in einem `horizontal-tb`-Schreibmodus befinden, wie etwa Englisch oder Arabisch, in welchem Fall {{CSSxRef("width")}} der {{CSSxRef("inline-size")}} zugeordnet würde.

Wenn Sie sich in einem vertikalen Schreibmodus befinden, würde {{CSSxRef("inline-size")}} der {{CSSxRef("height")}} zugeordnet.

| Logische Eigenschaft           | Physikalische Eigenschaft  |
| ------------------------------ | ------------------------- |
| {{CSSxRef("inline-size")}}     | {{CSSxRef("width")}}      |
| {{CSSxRef("block-size")}}      | {{CSSxRef("height")}}     |
| {{CSSxRef("min-inline-size")}} | {{CSSxRef("min-width")}}  |
| {{CSSxRef("min-block-size")}}  | {{CSSxRef("min-height")}} |
| {{CSSxRef("max-inline-size")}} | {{CSSxRef("max-width")}}  |
| {{CSSxRef("max-block-size")}}  | {{CSSxRef("max-height")}} |

## Beispiel für Breite und Höhe

Die logischen Zuordnungen für {{CSSxRef("width")}} und {{CSSxRef("height")}} sind {{CSSxRef("inline-size")}}, die die Länge in der Inline-Dimension festlegen, und {{CSSxRef("block-size")}}, die die Länge in der Block-Dimension festlegen. Bei Arbeiten in Englisch führt das Ersetzen von `width` durch `inline-size` und `height` durch `block-size` zum gleichen Layout.

Im folgenden Live-Beispiel ist der `writing-mode` auf `horizontal-tb` eingestellt. Ändern Sie es zu `vertical-rl`, und Sie werden sehen, dass das erste Beispiel — welches `width` und `height` verwendet — in jeder Dimension gleich groß bleibt, obwohl der Text vertikal wird. Das zweite Beispiel — welches `inline-size` und `block-size` verwendet — folgt der Textausrichtung, als ob der gesamte Block gedreht wurde.

{{EmbedGHLiveSample("css-examples/logical/size-inline-block.html", '100%', 500)}}

## Beispiel für Mindestbreite und Mindesthöhe

Es gibt auch Zuordnungen für {{CSSxRef("min-width")}} und {{CSSxRef("min-height")}} — diese sind {{CSSxRef("min-inline-size")}} und {{CSSxRef("min-block-size")}}. Diese funktionieren auf die gleiche Weise wie die Eigenschaften `inline-size` und `block-size`, legen jedoch ein Minimum anstatt einer festen Größe fest.

Versuchen Sie, das folgende Beispiel in `vertical-rl` zu ändern, wie im ersten Beispiel, um die Auswirkungen zu sehen. Ich verwende `min-height` im ersten Beispiel und `min-block-size` im zweiten.

{{EmbedGHLiveSample("css-examples/logical/size-min.html", "100%", 500)}}

## Beispiel für Maximalbreite und Maximalhöhe

Schließlich können Sie {{CSSxRef("max-inline-size")}} und {{CSSxRef("max-block-size")}} als logische Ersatzlösungen für {{CSSxRef("max-width")}} und {{CSSxRef("max-height")}} verwenden. Versuchen Sie, mit dem folgenden Beispiel auf die gleiche Weise zu spielen wie zuvor.

{{EmbedGHLiveSample("css-examples/logical/size-max.html", "100%", 500)}}

## Logische Schlüsselwörter für Größenänderung

Die {{CSSxRef("resize")}}-Eigenschaft legt fest, ob ein Element verändert werden kann, und hat physikalische Werte von `horizontal` und `vertical`. Die `resize`-Eigenschaft hat auch logische Schlüsselwortwerte. Mit `resize: inline` können Sie in der Inline-Dimension und mit `resize: block` in der Block-Dimension ändern.

Der Schlüsselwortwert `both` für die `resize`-Eigenschaft funktioniert, egal ob Sie physikalisch oder logisch denken. Er setzt beide Dimensionen auf einmal. Versuchen Sie, mit dem untenstehenden Beispiel zu experimentieren.

{{EmbedGHLiveSample("css-examples/logical/size-resize.html", "100%", 700)}}
