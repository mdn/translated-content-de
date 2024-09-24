---
title: Wie man eine Box mit einem Bild füllt, ohne es zu verzerren
slug: Learn/CSS/Howto/Fill_a_box_with_an_image
l10n:
  sourceCommit: 7e97f3c5ada65b6638909bde92881a4b8d46a2b8
---

{{LearnSidebar}}

In diesem Leitfaden lernen Sie eine Technik, um ein HTML-Bild vollständig in eine Box einzufügen.

## Verwendung von object-fit

Wenn Sie ein Bild mit dem HTML-{{htmlelement("img")}}-Element zu einer Seite hinzufügen, behält das Bild die Größe und das {{glossary("Seitenverhältnis")}} der Bilddatei bei, oder das der HTML-Attribute [`width`](/de/docs/Web/HTML/Element/img#width) oder [`height`](/de/docs/Web/HTML/Element/img#height). Manchmal möchten Sie, dass das Bild die Box, in die Sie es platziert haben, vollständig ausfüllt. In diesem Fall müssen Sie zuerst entscheiden, was passiert, wenn das Bild das falsche Seitenverhältnis für den Container hat.

1. Das Bild sollte die Box vollständig ausfüllen, das Seitenverhältnis beibehalten und überschüssige Teile an der zu großen Seite zuschneiden.
2. Das Bild sollte in die Box passen, wobei der Hintergrund als Leisten auf der zu kleinen Seite durchscheint.
3. Das Bild sollte die Box ausfüllen und sich strecken, was bedeuten kann, dass es im falschen Seitenverhältnis angezeigt wird.

Die {{cssxref("object-fit")}}-Eigenschaft macht jede dieser Herangehensweisen möglich. Im folgenden Beispiel sehen Sie, wie unterschiedliche Werte von `object-fit` wirken, wenn dasselbe Bild verwendet wird. Wählen Sie den Ansatz, der am besten zu Ihrem Design passt.

{{EmbedGHLiveSample("css-examples/howto/object-fit.html", '100%', 800)}}
