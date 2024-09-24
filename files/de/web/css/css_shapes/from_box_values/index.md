---
title: Formen aus Boxwerten
slug: Web/CSS/CSS_shapes/From_box_values
l10n:
  sourceCommit: 059a6501a2bf2134f81bf067adabc509ce60c118
---

{{CSSRef}}

Eine einfache Möglichkeit, eine Form zu erstellen, ist die Verwendung eines Wertes aus dem [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model) Modul. Dieser Artikel erklärt, wie das geht.

Die {{cssxref("box-edge")}} Boxwerte, die als Formwert zulässig sind, sind:

- `content-box`
- `padding-box`
- `border-box`
- `margin-box`

Die {{cssxref("border-radius")}} Werte werden ebenfalls unterstützt. Das bedeutet, dass Sie einem Element einen gekrümmten Rand geben und Ihren Inhalt um die erstellte Form herumfließen lassen können.

## CSS-Box-Modell

Die oben aufgelisteten Werte entsprechen den verschiedenen Teilen des CSS-Box-Modells. Eine Box in CSS hat Inhalt, Polsterung, Rand und Außenabstand.

![Das Box-Modell besteht aus den Margin-, Border-, Padding- und Content-Boxen.](box-model.png)

Indem wir Boxwerte für Formen verwenden, können wir unseren Inhalt um die durch diese Werte definierten Kanten herum fließen lassen. In jedem der untenstehenden Beispiele verwende ich ein Element mit definierter Polsterung, Rand und Außenabstand, sodass Sie die verschiedenen Möglichkeiten sehen können, wie der Inhalt fließen wird.

### margin-box

Die `margin-box` ist die Form, die durch die äußere Randkante definiert wird, und umfasst die Eckenradius der Form, falls {{cssxref("border-radius")}} zur Definition des Elements verwendet wurde.

Im folgenden Beispiel haben wir ein kreisförmiges lila Element, das ein {{htmlelement("div")}} mit einer Höhe, Breite und Hintergrundfarbe ist. Die Eigenschaft `border-radius` wurde verwendet, um einen Kreis zu erstellen, indem `border-radius: 50%` gesetzt wurde. Da das Element einen Außenabstand hat, können Sie sehen, dass der Inhalt um die kreisförmige Form und den darauf angewendeten Außenabstand herum fließt.

{{EmbedGHLiveSample("css-examples/shapes/box/margin-box.html", '100%', 800)}}

### border-box

Der `border-box` Wert ist die Form, die durch die äußere Borderkante definiert wird. Diese Form folgt allen normalen Border-Radius-Formregeln für die Außenseite der Border. Sie haben immer noch eine Border, selbst wenn Sie die CSS {{cssxref("border")}} Eigenschaft nicht verwendet haben. In diesem Fall entspricht sie `padding-box`, der Form, die durch die äußere Polsterkante definiert wird.

Im folgenden Beispiel können Sie sehen, wie der Text jetzt der durch die Border erstellten Linie folgt. Ändern Sie die Border-Größe und der Inhalt wird ihr folgen.

{{EmbedGHLiveSample("css-examples/shapes/box/border-box.html", '100%', 800)}}

### padding-box

Der `padding-box` Wert definiert die Form, die von der äußeren Polsterkante eingeschlossen wird. Diese Form folgt allen normalen Border-Radius-Formregeln für die Innenseite der Border. Wenn Sie keine Polsterung haben, ist `padding-box` gleich `content-box`.

{{EmbedGHLiveSample("css-examples/shapes/box/padding-box.html", '100%', 800)}}

### content-box

Der `content-box` Wert definiert die Form, die von der äußeren Inhaltkante eingeschlossen wird. Jeder Eckenradius dieser Box ist der `border-radius` abzüglich der `border-width` und Polsterung oder `0`, je nachdem, was größer ist. Das bedeutet, dass es hier unmöglich ist, einen negativen Wert zu haben.

{{EmbedGHLiveSample("css-examples/shapes/box/content-box.html", '100%', 800)}}

## Wann man Boxwerte verwenden sollte

Die Verwendung von Boxwerten ist eine einfache Möglichkeit, Formen zu erstellen; dies wird jedoch naturgemäß nur mit sehr einfachen Formen funktionieren, die mit der gut unterstützten `border-radius` Eigenschaft definiert werden können. Die oben gezeigten Beispiele zeigen einen solchen Anwendungsfall. Sie können eine kreisförmige Form mit `border-radius` erstellen und dann Text darum herum biegen.

Mit dieser einfachen Technik können Sie einige interessante Effekte erzielen. In meinem letzten Beispiel in diesem Abschnitt habe ich zwei Elemente nach links und rechts floaten lassen, wobei jedem im Bereich, der dem Text am nächsten liegt, ein Border-Radius von 100% gegeben wird.

{{EmbedGHLiveSample("css-examples/shapes/box/bottom-margin-box.html", '100%', 800)}}

Für komplexere Formen müssen Sie einen der [Basic Shapes](/de/docs/Web/CSS/CSS_shapes/Basic_shapes) als Wert verwenden oder Ihre Form aus einem Bild definieren, wie in anderen Anleitungen in diesem Abschnitt behandelt wird.
