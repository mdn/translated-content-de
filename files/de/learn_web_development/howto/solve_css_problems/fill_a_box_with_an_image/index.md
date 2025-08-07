---
title: Wie man eine Box mit einem Bild füllt, ohne es zu verzerren
short-title: Eine Box mit einem Bild füllen
slug: Learn_web_development/Howto/Solve_CSS_problems/Fill_a_box_with_an_image
l10n:
  sourceCommit: 451c6b58988664128473a881871707c5ec9737f2
---

In diesem Leitfaden können Sie eine Technik erlernen, mit der ein HTML-Bild eine Box vollständig ausfüllt.

## Verwendung von object-fit

Wenn Sie ein Bild mittels des HTML-{{htmlelement("img")}}-Elements zu einer Seite hinzufügen, wird das Bild die Größe und das {{Glossary("aspect_ratio", "Seitenverhältnis")}} der Bilddatei beibehalten oder das der HTML-Attribute [`width`](/de/docs/Web/HTML/Reference/Elements/img#width) oder [`height`](/de/docs/Web/HTML/Reference/Elements/img#height). Manchmal möchten Sie, dass das Bild die Box, in die Sie es gesetzt haben, vollständig ausfüllt. In diesem Fall müssen Sie zuerst entscheiden, was passiert, wenn das Bild das falsche Seitenverhältnis für die Box hat.

1. Das Bild sollte die Box vollständig ausfüllen, das Seitenverhältnis beibehalten und jeglichen Überstand auf der Seite abschneiden, die zu groß ist, um zu passen.
2. Das Bild sollte in die Box passen, wobei der Hintergrund als Balken auf der zu kleinen Seite hindurchscheint.
3. Das Bild sollte die Box ausfüllen und sich strecken, was bedeuten kann, dass es im falschen Seitenverhältnis dargestellt wird.

Die {{cssxref("object-fit")}}-Eigenschaft macht jede dieser Herangehensweisen möglich. Im folgenden Beispiel können Sie sehen, wie unterschiedliche Werte von `object-fit` funktionieren, wenn dasselbe Bild verwendet wird. Wählen Sie den Ansatz, der am besten zu Ihrem Design passt.

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
  border: 5px solid black;
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
