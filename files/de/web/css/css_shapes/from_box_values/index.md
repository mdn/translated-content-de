---
title: Formen aus Box-Werten
slug: Web/CSS/CSS_shapes/From_box_values
l10n:
  sourceCommit: 059a6501a2bf2134f81bf067adabc509ce60c118
---

{{CSSRef}}

Ein einfacher Weg, eine Form zu erstellen, ist die Verwendung eines Wertes aus dem [CSS Box Model](/de/docs/Web/CSS/CSS_box_model) Modul. Dieser Artikel erklärt, wie dies gemacht wird.

Die {{cssxref("box-edge")}}-Box-Werte, die als Formwert zulässig sind, sind:

- `content-box`
- `padding-box`
- `border-box`
- `margin-box`

Die {{cssxref("border-radius")}}-Werte werden ebenfalls unterstützt. Dies bedeutet, dass Sie einem Element einen abgerundeten Rand geben und Ihren Inhalt um die erstellte Form fließen lassen können.

## CSS Box Model

Die oben genannten Werte entsprechen den verschiedenen Teilen des CSS Box Models. Eine Box in CSS hat Inhalt, Abstand (Padding), Rand (Border) und Außenabstand (Margin).

![Das Box Model besteht aus Margin-, Border-, Padding- und Content-Boxen.](box-model.png)

Durch die Verwendung von Box-Werten für Formen können wir unseren Inhalt um die durch diese Werte definierten Kanten wickeln. In jedem der unten stehenden Beispiele verwende ich ein Element, das Abstand, Rand und Außenabstand definiert hat, damit Sie die verschiedenen Möglichkeiten sehen können, wie der Inhalt fließen wird.

### margin-box

Die `margin-box` ist die Form, die durch den äußeren Rand definiert wird und schließt die Eckradius der Form ein, sofern {{cssxref("border-radius")}} zur Definition des Elements verwendet wurde.

Im folgenden Beispiel haben wir ein kreisförmiges lila Element, das ein {{htmlelement("div")}} mit einer Höhe, Breite und Hintergrundfarbe ist. Die Eigenschaft `border-radius` wurde verwendet, um einen Kreis zu erstellen, indem `border-radius: 50%` gesetzt wurde. Da das Element einen Außenabstand hat, kann man sehen, dass der Inhalt um die kreisförmige Form und den darauf angewendeten Außenabstand herumfließt.

{{EmbedGHLiveSample("css-examples/shapes/box/margin-box.html", '100%', 800)}}

### border-box

Der `border-box`-Wert ist die Form, die durch den äußeren Rand des Rands definiert wird. Diese Form folgt allen normalen Regeln für abgerundete Ränder für das Äußere des Rands. Sie haben immer noch einen Rand, auch wenn Sie nicht die CSS-Eigenschaft {{cssxref("border")}} verwendet haben. In diesem Fall ist es dasselbe wie `padding-box`, die Form, die durch den äußeren Abstand definiert wird.

Im Beispiel unten können Sie sehen, wie der Text jetzt der durch den Rand erstellten Linie folgt. Ändern Sie die Randgröße, und der Inhalt wird ihr folgen.

{{EmbedGHLiveSample("css-examples/shapes/box/border-box.html", '100%', 800)}}

### padding-box

Der `padding-box`-Wert definiert die Form, die durch den äußeren Rand des Abstands eingeschlossen ist. Diese Form folgt allen normalen Regeln für abgerundete Ränder für das Innere des Rands. Wenn Sie keinen Abstand haben, ist `padding-box` dasselbe wie `content-box`.

{{EmbedGHLiveSample("css-examples/shapes/box/padding-box.html", '100%', 800)}}

### content-box

Der `content-box`-Wert definiert die Form, die durch den äußeren Rand des Inhalts eingeschlossen ist. Jeder Eckradius dieser Box ist der `border-radius` abzüglich der `border-width` und `padding`, oder `0`, je nachdem, welcher Wert größer ist. Das bedeutet, dass es hier unmöglich ist, einen negativen Wert zu haben.

{{EmbedGHLiveSample("css-examples/shapes/box/content-box.html", '100%', 800)}}

## Wann man Box-Werte verwenden sollte

Die Verwendung von Box-Werten ist eine einfache Methode, um Formen zu erstellen; jedoch wird dies naturgemäß nur mit sehr einfachen Formen funktionieren, die mithilfe der gut unterstützten Eigenschaft `border-radius` definiert werden können. Die oben gezeigten Beispiele zeigen einen solchen Anwendungsfall. Sie können eine kreisförmige Form mit `border-radius` erstellen und dann Text darum herum biegen.

Mit dieser einfachen Technik können Sie einige interessante Effekte erzielen. In meinem letzten Beispiel in diesem Abschnitt habe ich zwei Elemente nach links und rechts floaten lassen und jedem einen Randradius von 100% in der Richtung gegeben, die dem Text am nächsten ist.

{{EmbedGHLiveSample("css-examples/shapes/box/bottom-margin-box.html", '100%', 800)}}

Für komplexere Formen müssen Sie einen der [Grundformen](/de/docs/Web/CSS/CSS_shapes/Basic_shapes) als Wert verwenden oder Ihre Form aus einem Bild definieren, wie in anderen Leitfäden in diesem Abschnitt behandelt wird.
