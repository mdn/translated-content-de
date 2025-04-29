---
title: Anleitung, wie man eine Box mit einem Bild füllt, ohne es zu verzerren
short-title: Eine Box mit einem Bild füllen
slug: Learn_web_development/Howto/Solve_CSS_problems/Fill_a_box_with_an_image
l10n:
  sourceCommit: 479ea4c8bff4b900a7968413287c77dde2b0c20f
---

In diesem Leitfaden erfahren Sie, wie Sie ein HTML-Bild so einstellen, dass es eine Box vollständig ausfüllt.

## Verwendung von object-fit

Wenn Sie ein Bild mit dem HTML-{{htmlelement("img")}}-Element zu einer Seite hinzufügen, behält das Bild die Größe und das {{Glossary("aspect_ratio", "Seitenverhältnis")}} der Bilddatei bei, oder das der HTML-Attribute [`width`](/de/docs/Web/HTML/Reference/Elements/img#width) oder [`height`](/de/docs/Web/HTML/Reference/Elements/img#height). Manchmal möchten Sie jedoch, dass das Bild die Box, in der Sie es platziert haben, vollständig ausfüllt. In diesem Fall müssen Sie zuerst entscheiden, was passieren soll, wenn das Bild nicht das richtige Seitenverhältnis für den Container hat.

1. Das Bild sollte die Box vollständig ausfüllen, das Seitenverhältnis beibehalten und überschüssige Teile auf der Seite, die zu groß ist, um zu passen, abschneiden.
2. Das Bild sollte in die Box passen, wobei der Hintergrund als Streifen auf der zu kleinen Seite sichtbar ist.
3. Das Bild sollte die Box ausfüllen und sich strecken, was bedeuten kann, dass es im falschen Seitenverhältnis angezeigt wird.

Die Eigenschaft {{cssxref("object-fit")}} ermöglicht all diese Ansätze. Im folgenden Beispiel können Sie sehen, wie unterschiedliche Werte von `object-fit` funktionieren, wenn dasselbe Bild verwendet wird. Wählen Sie den Ansatz, der am besten zu Ihrem Design passt.

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
