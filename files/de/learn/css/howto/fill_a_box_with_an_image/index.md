---
title: Wie Sie eine Box mit einem Bild füllen, ohne es zu verzerren
slug: Learn/CSS/Howto/Fill_a_box_with_an_image
l10n:
  sourceCommit: 7e97f3c5ada65b6638909bde92881a4b8d46a2b8
---

{{LearnSidebar}}

In diesem Leitfaden erfahren Sie eine Technik, um ein HTML-Bild vollständig in einer Box auszufüllen.

## Verwendung von object-fit

Wenn Sie ein Bild auf einer Seite mit dem HTML-Element {{htmlelement("img")}} hinzufügen, wird das Bild die Größe und das [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) der Bilddatei oder der HTML-Attribute [`width`](/de/docs/Web/HTML/Element/img#width) oder [`height`](/de/docs/Web/HTML/Element/img#height) beibehalten. Manchmal möchten Sie, dass das Bild die Box, in die es eingefügt wurde, vollständig ausfüllt. In diesem Fall müssen Sie zunächst entscheiden, was passiert, wenn das Bild das falsche Seitenverhältnis für den Container hat.

1. Das Bild sollte die Box vollständig ausfüllen, das Seitenverhältnis beibehalten und den Überschuss auf der zu großen Seite abschneiden.
2. Das Bild sollte in die Box passen, wobei der Hintergrund als Balken auf der zu kleinen Seite durchscheint.
3. Das Bild sollte die Box füllen und sich dehnen, was bedeuten kann, dass es mit dem falschen Seitenverhältnis angezeigt wird.

Die CSS-Eigenschaft {{cssxref("object-fit")}} macht jede dieser Herangehensweisen möglich. Im folgenden Beispiel können Sie sehen, wie verschiedene Werte von `object-fit` funktionieren, wenn dasselbe Bild verwendet wird. Wählen Sie den Ansatz, der am besten zu Ihrem Design passt.

{{EmbedGHLiveSample("css-examples/howto/object-fit.html", '100%', 800)}}
