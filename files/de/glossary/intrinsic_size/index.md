---
title: Intrinsische Größe
slug: Glossary/Intrinsic_Size
l10n:
  sourceCommit: c0daf1f038fdbdb62d71bfdeaf3a0a083660792c
---

{{GlossarySidebar}}

In CSS ist die _intrinsische Größe_ eines Elements die Größe, die es aufgrund seines Inhalts hätte, ohne die Auswirkungen des Kontexts zu berücksichtigen, in dem es erscheint. Zum Beispiel die Größenanpassung, die durch CSS-[Box-Modell](/de/docs/Learn/CSS/Building_blocks/The_box_model)-Eigenschaften angewendet wird. Die intrinsischen Größen eines Elements werden durch seine {{cssxref("min-content")}} und {{cssxref("max-content")}} Größen dargestellt.

Inline-Elemente werden intrinsisch dimensioniert: [Sizing](/de/docs/Web/CSS/CSS_box_sizing) und [Box](/de/docs/Web/CSS/CSS_box_model)-Eigenschaften wie {{cssxref("height")}}, {{cssxref("width")}}, {{cssxref("block-size")}}, {{cssxref("inline-size")}}, sowie {{cssxref("padding-block")}} und {{cssxref("margin-block")}} haben keinen Einfluss auf sie (obwohl {{cssxref("margin-inline")}} und {{cssxref("padding-inline")}} dies tun).

Zum Beispiel ist die minimale intrinsische Größe des Inline-{{htmlelement("span")}}-Elements die minimale Größe, die es hätte, wenn es gefloatet wäre (ohne andere CSS-Box-Eigenschaften anzuwenden), in einem Container mit einer Inline-Größe von `0px`. Die maximale intrinsische Größe ist das Gegenteil. Es ist die Größe, die das gleiche `<span>` hätte, wenn die Inline-Größe seines Containers unendlich wäre.

Intrinsische Größe hat für Bilder die gleiche Bedeutung wie für Text — die Größe, in der die Bilder angezeigt werden, wenn kein CSS angewendet wird, um das Rendering zu ändern.

Pixeldichte und Auflösung beeinflussen die intrinsische Größe. Standardmäßig wird angenommen, dass Bilder eine "1x"-Pixeldichte haben (1 Gerätepixel = 1 CSS-Pixel). In diesem Fall ist die intrinsische Größe einfach die Pixelhöhe und -breite. Eine Bildgröße und Auflösung können explizit in ihren {{Glossary("EXIF", "EXIF")}}-Daten angegeben werden. Die Pixeldichte kann auch für Bilder mit dem [`srcset`](/de/docs/Web/HTML/Element/img#srcset)-Attribut festgelegt werden. Beachten Sie, dass, wenn beide Mechanismen verwendet werden, der `srcset`-Wert "über" dem EXIF-Wert angewendet wird.

Intrinsische Größen und deren Berechnungen sind im [CSS-Sizing-Modul](/de/docs/Web/CSS/CSS_box_sizing) definiert.

#### Minimale intrinsische Größe

Um ein Element gemäß seiner minimalen intrinsischen Größe festzulegen, setzen Sie die {{cssxref("inline-size")}} (oder {{cssxref("width")}} in horizontale Schreibrichtungen, wie Englisch und Hebräisch) auf {{cssxref("min-content")}}. Dies setzt das Element auf die Größe, die es hätte, wenn der Text so klein wie möglich in Inline-Richtung umbrochen würde, ohne einen Überlauf zu verursachen, mit so viel soft-wrapping wie möglich. Bei einem Kasten, der einen Textstring enthält, wäre die minimale intrinsische Größe durch das längste Wort definiert.

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

#### Maximale intrinsische Größe

Die maximale intrinsische Größe ist das Gegenteil. Sie ist die Größe des Elements, wenn die Inline-Größe des Containers unendlich wäre. Der Textinhalt würde so breit wie möglich angezeigt werden, ohne soft-wrapping, selbst wenn er seinen Container überschreiten würde. Der Stichwortwert {{cssxref("max-content")}} setzt dieses Verhalten.

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

Das Gegenteil von _intrinsischer Größe_ ist **_extrinsische Größe_**, die auf dem Kontext eines Elements basiert, ohne Rücksicht auf seinen Inhalt. Extrinsische Größenanpassung wird durch Box-Modell-Eigenschaftswerte bestimmt. Bei extrinsischer Größenanpassung geben Prozentsätze die Größe eines Kastens im Verhältnis zum enthaltenden Block des Kastens an.

## Siehe auch

- CSS {{cssxref("min-content")}}, {{cssxref("max-content")}} und {{cssxref("fit-content")}} Eigenschaftswerte.
- {{cssxref("interpolate-size")}}
- {{cssxref("aspect-ratio")}}
- {{cssxref("calc-size()")}}
- [CSS Box Sizing](/de/docs/Web/CSS/CSS_box_sizing)-Modul
- [CSS-Spezifikation zur Größenanpassung: intrinsische Größen](https://www.w3.org/TR/css-sizing-3/#intrinsic-sizes)
