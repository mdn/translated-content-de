---
title: Wie man eine Box mit einem Bild füllt, ohne es zu verzerren
slug: Learn_web_development/Howto/Solve_CSS_problems/Fill_a_box_with_an_image
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

In diesem Leitfaden können Sie eine Technik erlernen, um ein HTML-Bild vollständig in eine Box einzufügen.

## Verwendung von object-fit

Wenn Sie ein Bild mit dem HTML-Element {{htmlelement("img")}} zu einer Seite hinzufügen, behält das Bild die Größe und das {{Glossary("aspect_ratio", "Seitenverhältnis")}} der Bilddatei oder der HTML-Attribute [`width`](/de/docs/Web/HTML/Element/img#width) oder [`height`](/de/docs/Web/HTML/Element/img#height) bei. Manchmal möchten Sie, dass das Bild die Box, in die Sie es platziert haben, komplett ausfüllt. In diesem Fall müssen Sie zuerst entscheiden, was passiert, wenn das Bild das falsche Seitenverhältnis für den Container hat.

1. Das Bild sollte die Box vollständig ausfüllen, das Seitenverhältnis beibehalten und den Überschuss auf der zu großen Seite abschneiden.
2. Das Bild sollte innerhalb der Box passen, wobei der Hintergrund als Streifen auf der zu kleinen Seite sichtbar wird.
3. Das Bild sollte die Box ausfüllen und sich dehnen, was bedeuten könnte, dass es im falschen Seitenverhältnis angezeigt wird.

Die Eigenschaft {{cssxref("object-fit")}} macht jede dieser Herangehensweisen möglich. Im nachstehenden Beispiel können Sie sehen, wie unterschiedliche Werte von `object-fit` funktionieren, wenn dasselbe Bild verwendet wird. Wählen Sie den Ansatz, der am besten zu Ihrem Design passt.

```html live-sample___object-fit
<div class="wrapper">
  <div class="box box1">
    <img
      alt="a colorful hot air balloon against a clear sky"
      src="https://mdn.github.io/shared-assets/images/examples/balloon.jpg" />
  </div>
  <div class="box box2">
    <img
      alt="a colorful hot air balloon against a clear sky"
      src="https://mdn.github.io/shared-assets/images/examples/balloon.jpg" />
  </div>
  <div class="box box3">
    <img
      alt="a colorful hot air balloon against a clear sky"
      src="https://mdn.github.io/shared-assets/images/examples/balloon.jpg" />
  </div>
</div>
```

```css live-sample___object-fit
.wrapper {
  height: 200px;
  display: flex;
  gap: 20px;
}

.box {
  border: 5px solid #000;
}

.box img {
  width: 100%;
  height: 100%;
}

.box1 img {
  object-fit: cover;
}

.box2 img {
  object-fit: contain;
}

.box3 img {
  object-fit: fill;
}
```

{{EmbedLiveSample("object-fit", "", "220px")}}
