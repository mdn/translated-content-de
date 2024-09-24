---
title: Logische Eigenschaften für die Größenbestimmung
slug: Web/CSS/CSS_logical_properties_and_values/Sizing
l10n:
  sourceCommit: 86cec43154e2d0652933b14fe411ad052b6beb03
---

{{CSSRef}}

In diesem Leitfaden erklären wir die flussbezogenen Zuordnungen zwischen physischen Dimensionseigenschaften und logischen Eigenschaften, die zur Größenbestimmung von Elementen auf unseren Seiten verwendet werden.

Bei der Angabe der Größe eines Elements bietet Ihnen das Modul [CSS-Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) die Möglichkeit, die Größe in Bezug auf den Textfluss (inline und block) anzugeben, anstatt auf die physische Größe, die sich auf die physischen Dimensionen horizontal und vertikal bezieht (z. B. links und rechts). Während diese flussbezogenen Zuordnungen für viele von uns gut die Standardeinstellung werden könnten, können Sie in einem Design sowohl physische als auch logische Größen verwenden. Sie möchten möglicherweise, dass einige Funktionen stets in Bezug zu den physischen Dimensionen stehen, unabhängig vom Schreibmodus.

## Zuordnungen für Dimensionen

Die folgende Tabelle bietet Zuordnungen zwischen logischen und physischen Eigenschaften. Diese Zuordnungen gehen davon aus, dass Sie sich in einem Schreibmodus `horizontal-tb` befinden, wie etwa Englisch oder Arabisch, in welchem {{CSSxRef("width")}} der {{CSSxRef("inline-size")}} zugeordnet wird.

Wenn Sie sich in einem vertikalen Schreibmodus befinden, würde die {{CSSxRef("inline-size")}} der {{CSSxRef("height")}} zugeordnet werden.

| Logische Eigenschaft           | Physische Eigenschaft     |
| ------------------------------ | ------------------------- |
| {{CSSxRef("inline-size")}}     | {{CSSxRef("width")}}      |
| {{CSSxRef("block-size")}}      | {{CSSxRef("height")}}     |
| {{CSSxRef("min-inline-size")}} | {{CSSxRef("min-width")}}  |
| {{CSSxRef("min-block-size")}}  | {{CSSxRef("min-height")}} |
| {{CSSxRef("max-inline-size")}} | {{CSSxRef("max-width")}}  |
| {{CSSxRef("max-block-size")}}  | {{CSSxRef("max-height")}} |

## Beispiel für Breite und Höhe

Die logischen Zuordnungen für {{CSSxRef("width")}} und {{CSSxRef("height")}} sind {{CSSxRef("inline-size")}}, die die Länge in der Inline-Dimension festlegen, und {{CSSxRef("block-size")}}, die die Länge in der Block-Dimension festlegen. Bei der Arbeit in Englisch erhalten Sie durch Ersetzen von `width` durch `inline-size` und `height` durch `block-size` das gleiche Layout.

Im untenstehenden Live-Beispiel ist der `writing-mode` auf `horizontal-tb` eingestellt. Ändern Sie ihn zu `vertical-rl`, und Sie werden sehen, dass das erste Beispiel — das `width` und `height` verwendet — in jeder Dimension gleich groß bleibt, obwohl der Text vertikal wird. Das zweite Beispiel — das `inline-size` und `block-size` verwendet — wird der Textausrichtung folgen, als ob der gesamte Block gedreht wurde.

{{EmbedGHLiveSample("css-examples/logical/size-inline-block.html", '100%', 500)}}

## Beispiel für Min-Breite und Min-Höhe

Es gibt auch Zuordnungen für {{CSSxRef("min-width")}} und {{CSSxRef("min-height")}} — diese sind {{CSSxRef("min-inline-size")}} und {{CSSxRef("min-block-size")}}. Diese funktionieren auf die gleiche Weise wie die Eigenschaften `inline-size` und `block-size`, jedoch wird eine Mindestgröße anstelle einer festen Größe festgelegt.

Versuchen Sie, das untenstehende Beispiel zu `vertical-rl` zu ändern, wie im ersten Beispiel, um die Auswirkung zu sehen. Im ersten Beispiel verwende ich `min-height` und im zweiten `min-block-size`.

{{EmbedGHLiveSample("css-examples/logical/size-min.html", "100%", 500)}}

## Beispiel für Max-Breite und Max-Höhe

Schließlich können Sie {{CSSxRef("max-inline-size")}} und {{CSSxRef("max-block-size")}} als logische Ersatzwerte für {{CSSxRef("max-width")}} und {{CSSxRef("max-height")}} verwenden. Versuchen Sie, mit dem unten stehenden Beispiel auf die gleiche Weise wie zuvor zu spielen.

{{EmbedGHLiveSample("css-examples/logical/size-max.html", "100%", 500)}}

## Logische Schlüsselwörter für das Ändern der Größe

Die {{CSSxRef("resize")}}-Eigenschaft legt fest, ob ein Element in der Größe verändert werden kann, und hat physische Werte von `horizontal` und `vertical`. Die `resize`-Eigenschaft hat auch logische Schlüsselwortwerte. Mit `resize: inline` wird die Größenänderung in der Inline-Dimension erlaubt und `resize: block` erlaubt die Größenänderung in der Block-Dimension.

Der Schlüsselwortwert `both` für die Resize-Eigenschaft funktioniert, egal ob Sie physikalisch oder logisch denken. Es setzt beide Dimensionen gleichzeitig. Versuchen Sie, mit dem unten stehenden Beispiel zu spielen.

{{EmbedGHLiveSample("css-examples/logical/size-resize.html", "100%", 700)}}
