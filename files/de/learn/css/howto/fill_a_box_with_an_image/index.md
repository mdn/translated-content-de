---
title: Wie man eine Box mit einem Bild füllt, ohne es zu verzerren
slug: Learn/CSS/Howto/Fill_a_box_with_an_image
l10n:
  sourceCommit: 7e97f3c5ada65b6638909bde92881a4b8d46a2b8
---

{{LearnSidebar}}

In diesem Leitfaden können Sie eine Technik lernen, um ein HTML-Bild vollständig eine Box füllen zu lassen.

## Verwendung von object-fit

Wenn Sie ein Bild mit dem HTML-{{htmlelement("img")}}-Element zu einer Seite hinzufügen, behält das Bild die Größe und das [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) der Bilddatei oder der HTML-Attribute [`width`](/de/docs/Web/HTML/Element/img#width) oder [`height`](/de/docs/Web/HTML/Element/img#height) bei. Manchmal möchten Sie, dass das Bild die Box vollständig ausfüllt, in die Sie es platziert haben. In diesem Fall müssen Sie zuerst entscheiden, was passiert, wenn das Bild im falschen Seitenverhältnis für den Container vorliegt.

1. Das Bild sollte die Box vollständig ausfüllen, das Seitenverhältnis beibehalten und den überschüssigen Teil beschneiden, der zu groß ist, um zu passen.
2. Das Bild soll in die Box passen, wobei der Hintergrund als Balken auf der zu kleinen Seite durchscheint.
3. Das Bild sollte die Box füllen und sich strecken, was bedeuten kann, dass es im falschen Seitenverhältnis angezeigt wird.

Die {{cssxref("object-fit")}}-Eigenschaft macht jede dieser Herangehensweisen möglich. Im folgenden Beispiel können Sie sehen, wie verschiedene Werte von `object-fit` funktionieren, wenn dasselbe Bild verwendet wird. Wählen Sie den Ansatz, der am besten für Ihr Design geeignet ist.

{{EmbedGHLiveSample("css-examples/howto/object-fit.html", '100%', 800)}}
