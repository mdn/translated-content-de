---
title: Formen aus Box-Werten
slug: Web/CSS/CSS_shapes/From_box_values
l10n:
  sourceCommit: 059a6501a2bf2134f81bf067adabc509ce60c118
---

{{CSSRef}}

Eine unkomplizierte Möglichkeit, eine Form zu erstellen, besteht darin, einen Wert aus dem [CSS Box Model](/de/docs/Web/CSS/CSS_box_model)-Modul zu verwenden. Dieser Artikel erklärt, wie dies funktioniert.

Die {{cssxref("box-edge")}} Box-Werte, die als Formwert zulässig sind, sind:

- `content-box`
- `padding-box`
- `border-box`
- `margin-box`

Die Werte von {{cssxref("border-radius")}} werden ebenfalls unterstützt. Das bedeutet, Sie können einem Element eine gebogene Umrandung geben und Ihren Inhalt um die erzeugte Form herum fließen lassen.

## CSS-Box-Modell

Die oben aufgeführten Werte entsprechen den verschiedenen Teilen des CSS-Box-Modells. Eine Box in CSS hat Inhalt, Auffüllung, Rand und Umrandung.

![Das Box-Modell besteht aus den Margen-, Rahmen-, Auffüllungs- und Inhalts-Boxen.](box-model.png)

Durch die Verwendung von Box-Werten für Formen können wir unseren Inhalt um die durch diese Werte definierten Kanten herumwickeln. In jedem der untenstehenden Beispiele verwende ich ein Element, das Auffüllung, Rand und Umrandung definiert hat, damit Sie die verschiedenen Möglichkeiten sehen können, wie der Inhalt fließt.

### margin-box

Die `margin-box` ist die Form, die durch die äußere Margenkante definiert wird und den Eckradius der Form einschließt, falls {{cssxref("border-radius")}} zur Definition des Elements verwendet wurde.

Im Beispiel unten haben wir ein kreisförmiges lila Objekt, das ein {{htmlelement("div")}} mit einer Höhe, Breite und Hintergrundfarbe ist. Die Eigenschaft `border-radius` wurde verwendet, um einen Kreis zu erstellen, indem `border-radius: 50%` gesetzt wurde. Da das Element eine Umrandung hat, können Sie sehen, dass der Inhalt um die kreisförmige Form und die darauf angewandte Umrandung herumfließt.

{{EmbedGHLiveSample("css-examples/shapes/box/margin-box.html", '100%', 800)}}

### border-box

Der `border-box`-Wert ist die Form, die durch die äußere Rahmenkante definiert wird. Diese Form folgt allen normalen Regeln zur Rahmenschaffung für die Außenseite des Rahmens. Sie haben noch einen Rahmen, selbst wenn Sie die CSS-{{cssxref("border")}}-Eigenschaft nicht verwendet haben. In diesem Fall entspricht er der `padding-box`, der Form, die durch die äußere Auffüllungskante definiert wird.

Im Beispiel unten können Sie sehen, wie der Text jetzt der Linie folgt, die durch die Umrandung erstellt wird. Ändern Sie die Rahmengröße, und der Inhalt wird ihr folgen.

{{EmbedGHLiveSample("css-examples/shapes/box/border-box.html", '100%', 800)}}

### padding-box

Der `padding-box`-Wert definiert die Form, die durch die äußere Auffüllungskante eingeschlossen wird. Diese Form folgt allen normalen Regeln zur Rahmenschaffung für die Innenseite des Rahmens. Wenn Sie keine Auffüllung haben, ist `padding-box` dasselbe wie `content-box`.

{{EmbedGHLiveSample("css-examples/shapes/box/padding-box.html", '100%', 800)}}

### content-box

Der `content-box`-Wert definiert die Form, die durch die äußere Inhaltskante eingeschlossen wird. Jeder Eckradius dieser Box ist das `border-radius` minus der `border-width` und `padding`, oder `0`, je nachdem, welcher Wert größer ist. Das bedeutet, dass es unmöglich ist, hier einen negativen Wert zu haben.

{{EmbedGHLiveSample("css-examples/shapes/box/content-box.html", '100%', 800)}}

## Wann Box-Werte verwenden

Die Verwendung von Box-Werten ist eine einfache Möglichkeit, Formen zu erstellen; naturgemäß funktioniert dies jedoch nur mit sehr einfachen Formen, die mit der gut unterstützten Eigenschaft `border-radius` definiert werden können. Die oben gezeigten Beispiele zeigen einen solchen Anwendungsfall. Sie können eine kreisförmige Form mit `border-radius` erstellen und dann Text darum herum krümmen.

Mit dieser einfachen Technik können Sie einige interessante Effekte erzielen. In meinem letzten Beispiel in diesem Abschnitt habe ich zwei Elemente links und rechts schweben lassen, wobei ich jedem eine Abrundung von 100% in Richtung des nächstgelegenen Textes gegeben habe.

{{EmbedGHLiveSample("css-examples/shapes/box/bottom-margin-box.html", '100%', 800)}}

Für komplexere Formen müssen Sie einen der [grundlegenden Formen](/de/docs/Web/CSS/CSS_shapes/Basic_shapes) als Wert verwenden oder Ihre Form aus einem Bild definieren, wie in anderen Leitfäden in diesem Abschnitt behandelt.
