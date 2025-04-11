---
title: Anleitung, wie man eine Box mit einem Bild füllt, ohne es zu verzerren
slug: Learn_web_development/Howto/Solve_CSS_problems/Fill_a_box_with_an_image
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}

In diesem Leitfaden können Sie eine Technik erlernen, um ein HTML-Bild vollständig in eine Box einzufügen.

## Verwendung von object-fit

Wenn Sie ein Bild mithilfe des HTML-{{htmlelement("img")}}-Elements zu einer Seite hinzufügen, behält das Bild die Größe und das {{Glossary("aspect_ratio", "Seitenverhältnis")}} der Bilddatei bei, oder das eines HTML-Attributs wie [`width`](/de/docs/Web/HTML/Reference/Elements/img#width) oder [`height`](/de/docs/Web/HTML/Reference/Elements/img#height). Manchmal möchten Sie, dass das Bild die Box, in die Sie es platziert haben, vollständig ausfüllt. In diesem Fall müssen Sie zuerst entscheiden, was passiert, wenn das Bild das falsche Seitenverhältnis für den Container hat.

1. Das Bild sollte die Box vollständig ausfüllen, das Seitenverhältnis beibehalten und den Überschuss auf der Seite abschneiden, der zu groß ist, um hineinzupassen.
2. Das Bild sollte in die Box passen, wobei der Hintergrund als Balken auf der zu kleinen Seite durchscheint.
3. Das Bild sollte die Box ausfüllen und sich strecken, was bedeuten kann, dass es im falschen Seitenverhältnis angezeigt wird.

Die {{cssxref("object-fit")}}-Eigenschaft macht jede dieser Herangehensweisen möglich. Im Beispiel unten können Sie sehen, wie verschiedene Werte von `object-fit` beim gleichen Bild funktionieren. Wählen Sie den Ansatz, der am besten zu Ihrem Design passt.

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
