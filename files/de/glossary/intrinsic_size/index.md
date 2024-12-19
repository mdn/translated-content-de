---
title: Intrinsische Größe
slug: Glossary/Intrinsic_Size
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{GlossarySidebar}}

In CSS ist die _intrinsische Größe_ eines Elements die Größe, die es basierend rein auf seinem Inhalt hätte, ohne die Auswirkungen des Kontexts zu berücksichtigen, in dem es erscheint. Zum Beispiel die Größenanpassung, die durch CSS-[Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)-Eigenschaften angewendet wird. Die intrinsischen Größen eines Elements werden durch seine {{cssxref("min-content")}} und {{cssxref("max-content")}} Größen dargestellt.

Inline-Elemente sind intrinsisch dimensioniert: [Größenanpassung](/de/docs/Web/CSS/CSS_box_sizing) und [Box](/de/docs/Web/CSS/CSS_box_model)-Eigenschaften einschließlich {{cssxref("height")}}, {{cssxref("width")}}, {{cssxref("block-size")}}, {{cssxref("inline-size")}}, sowie {{cssxref("padding-block")}} und {{cssxref("margin-block")}} haben keinen Einfluss auf sie (obwohl {{cssxref("margin-inline")}} und {{cssxref("padding-inline")}} dies tun).

Zum Beispiel ist die minimale intrinsische Größe des inline {{htmlelement("span")}}-Elements die minimale Größe, die es hätte, wenn es gefloatet wäre (ohne andere CSS-Box-Eigenschaften anzuwenden), in einem Container mit einer Inline-Größe von `0px`. Die maximale intrinsische Größe ist das Gegenteil. Es ist die Größe, die das gleiche `<span>`-Element hätte, wenn die Inline-Größe seines Containers unendlich wäre.

Intrinsische Größe hat für Bilder dieselbe Bedeutung wie für Text – die Größe, in der die Bilder angezeigt werden, wenn kein CSS angewendet wird, um die Darstellung zu ändern.

Pixeldichte und Auflösung beeinflussen die intrinsische Größe. Standardmäßig wird angenommen, dass Bilder eine "1x"-Pixeldichte haben (1 Geräte-Pixel = 1 CSS-Pixel), in welchem Fall die intrinsische Größe einfach die Pixelhöhe und -breite ist. Die intrinsische Größe und Auflösung eines Bildes kann explizit in seinen {{Glossary("EXIF", "EXIF")}}-Daten angegeben werden. Die Pixeldichte eines Bildes kann auch mit dem [`srcset`](/de/docs/Web/HTML/Element/img#srcset)-Attribut festgelegt werden. Beachten Sie, dass, wenn beide Mechanismen verwendet werden, der `srcset`-Wert "über" dem EXIF-Wert angewendet wird.

Intrinsische Größen und wie sie berechnet werden, sind im [CSS Sizing Module](/de/docs/Web/CSS/CSS_box_sizing) definiert.

#### minimale intrinsische Größe

Um ein Element entsprechend seiner minimalen intrinsischen Größe festzulegen, setzen Sie die {{cssxref("inline-size")}} (oder {{cssxref("width")}} in horizontalen Schreibrichtungen wie Englisch und Hebräisch) auf {{cssxref("min-content")}}. Dies setzt das Element auf die Größe, die es hätte, wenn der Text so klein wie möglich in der Inline-Richtung ohne Überlauf umgebrochen wäre, mit so viel weichem Umbruch wie möglich. Für eine Box, die eine Textzeichenkette enthält, wäre die minimale intrinsische Größe durch das längste Wort definiert.

```html hidden
<p>Text wraps, making the element only as wide as its longest word.</p>
```

```css
p {
  inline-size: min-content;
  background-color: palegoldenrod;
}
```

{{ EmbedLiveSample('minimale intrinsische Größe', '100%', '220') }}

#### maximale intrinsische Größe

Die maximale intrinsische Größe ist das Gegenteil. Es ist die Größe des Elements, wenn die Inline-Größe des Containers unendlich wäre. Textinhalt würde so breit wie möglich angezeigt, ohne weichen Umbruch, selbst wenn er den Container überläuft. Der Schlüsselwert {{cssxref("max-content")}} legt dieses Verhalten fest.

```html hidden
<p>Element grows as text doesn't wrap.</p>
<p>
  This paragraph may be wider than the width of the entire page and yet it won't
  wrap because <code>width: max-content</code> is set. It therefore may overflow
  its container.
</p>
```

```css
p {
  width: max-content;
  background-color: palegoldenrod;
}
```

{{ EmbedLiveSample('maximale intrinsische Größe', '100%', '200') }}

## Extrinsische Größenanpassung

Das Gegenteil von _intrinsischer Größe_ ist **_extrinsische Größe_**, die auf dem Kontext eines Elements basiert, ohne Rücksicht auf seinen Inhalt. Extrinsische Größenanpassung wird durch Boxmodell-Eigenschaftenwerte bestimmt. Bei extrinsischer Größenanpassung geben Prozentsätze die Größe einer Box in Bezug auf den enthaltenden Block der Box an.

## Siehe auch

- CSS {{cssxref("min-content")}}, {{cssxref("max-content")}}, und {{cssxref("fit-content")}} Eigenschaftswerte.
- {{cssxref("interpolate-size")}}
- {{cssxref("aspect-ratio")}}
- {{cssxref("calc-size()")}}
- [CSS Box Sizing](/de/docs/Web/CSS/CSS_box_sizing) Modul
- [CSS Sizing Specification: Intrinsic Sizes](https://www.w3.org/TR/css-sizing-3/#intrinsic-sizes)
