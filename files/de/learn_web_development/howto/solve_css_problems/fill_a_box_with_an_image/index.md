---
title: Wie man eine Box mit einem Bild füllt, ohne es zu verzerren
slug: Learn_web_development/Howto/Solve_CSS_problems/Fill_a_box_with_an_image
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

In diesem Leitfaden können Sie eine Technik kennenlernen, um ein HTML-Bild dazu zu bringen, eine Box vollständig auszufüllen.

## Verwendung von object-fit

Wenn Sie ein Bild mit dem HTML-{{htmlelement("img")}}-Element zu einer Seite hinzufügen, behält das Bild die Größe und das {{Glossary("aspect_ratio", "Seitenverhältnis")}} der Bilddatei oder das eines HTML-[`width`](/de/docs/Web/HTML/Reference/Elements/img#width) oder [`height`](/de/docs/Web/HTML/Reference/Elements/img#height)-Attributs bei. Manchmal möchten Sie, dass das Bild die Box, in der Sie es platziert haben, vollständig ausfüllt. In diesem Fall müssen Sie zuerst entscheiden, was passiert, wenn das Bild das falsche Seitenverhältnis für den Container hat.

1. Das Bild sollte die Box vollständig ausfüllen, das Seitenverhältnis beibehalten und den überschüssigen Teil auf der zu großen Seite zuschneiden.
2. Das Bild sollte in die Box passen, wobei der Hintergrund als Streifen auf der zu kleinen Seite durchscheint.
3. Das Bild sollte die Box ausfüllen und sich strecken, was bedeuten kann, dass es im falschen Seitenverhältnis angezeigt wird.

Die {{cssxref("object-fit")}}-Eigenschaft ermöglicht alle diese Ansätze. Im folgenden Beispiel können Sie sehen, wie unterschiedliche Werte von `object-fit` mit dem gleichen Bild funktionieren. Wählen Sie den Ansatz, der am besten zu Ihrem Design passt.

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
