---
title: Intrinsic size
slug: Glossary/Intrinsic_Size
l10n:
  sourceCommit: 726f971467b4cdd339e29ee10403fce5b3e87f42
---

{{GlossarySidebar}}

Im CSS bezeichnet die _intrinsische Größe_ eines Elements die Größe, die es basierend ausschließlich auf seinem Inhalt hätte, ohne die Auswirkungen des Kontexts zu berücksichtigen, in dem es erscheint. Zum Beispiel die Größenbestimmung durch CSS [Box-Modell](/de/docs/Learn/CSS/Building_blocks/The_box_model)-Eigenschaften. Die intrinsischen Größen eines Elements werden durch dessen {{cssxref("min-content")}} und {{cssxref("max-content")}} Größen dargestellt.

Inline-Elemente werden intrinsisch dimensioniert: [Größenbestimmung](/de/docs/Web/CSS/CSS_box_sizing) und [Box](/de/docs/Web/CSS/CSS_box_model) Eigenschaften einschließlich {{cssxref("height")}}, {{cssxref("width")}}, {{cssxref("block-size")}}, {{cssxref("inline-size")}}, und {{cssxref("padding-block")}} und {{cssxref("margin-block")}} haben keinen Einfluss auf sie (wenngleich {{cssxref("margin-inline")}} und {{cssxref("padding-inline")}} dies tun).

Zum Beispiel ist die minimale intrinsische Größe des inline {{htmlelement("span")}} Elements die minimale Größe, die es hätte, wenn es gefloatet wäre (ohne andere CSS Box-Eigenschaften angewendet), innerhalb eines Containers mit einer Inline-Größe von `0px`. Die maximale intrinsische Größe ist das Gegenteil. Es ist die Größe, die dasselbe `<span>` hätte, wenn die Inline-Größe seines Containers unendlich wäre.

Intrinsische Größe hat dieselbe Bedeutung für Bilder wie für Text — die Größe, in der die Bilder angezeigt werden, wenn kein CSS angewendet wird, um das Rendering zu ändern.

Pixeldichte und Auflösung beeinflussen die intrinsische Größe. Standardmäßig wird angenommen, dass Bilder eine "1x" Pixeldichte haben (1 Gerätepixel = 1 CSS-Pixel), in diesem Fall ist die intrinsische Größe einfach die Pixelhöhe und -breite. Die intrinsische Größe und Auflösung eines Bildes können explizit in seinen [EXIF](/de/docs/Glossary/EXIF)-Daten festgelegt werden. Die Pixeldichte von Bildern kann auch für Bilder mit dem [`srcset`](/de/docs/Web/HTML/Element/img#srcset) Attribut eingestellt werden. Beachten Sie, dass, wenn beide Mechanismen verwendet werden, der `srcset`-Wert "über" dem EXIF-Wert angewendet wird.

Intrinsische Größen und deren Berechnung werden im [CSS Größenmodul](/de/docs/Web/CSS/CSS_box_sizing) definiert.

#### minimale intrinsische Größe

Um ein Element gemäß seiner minimalen intrinsischen Größe festzulegen, setzen Sie die {{cssxref("inline-size")}} (oder {{cssxref("width")}} in horizontalen Schreibrichtungen wie Englisch und Hebräisch) auf {{cssxref("min-content")}}. Dies setzt das Element auf die Größe, die es hätte, wenn der Text so klein wie möglich in der Inline-Richtung umbrochen würde, ohne dass ein Überlauf entsteht, mit möglichst viel Soft-Wrapping. Für eine Box, die eine Zeichenkette von Text enthält, würde die minimale intrinsische Größe durch das längste Wort definiert.

```html hidden
<p>Text wraps, making the element only as wide as its longest word.</p>
```

```css
p {
  inline-size: min-content;
  background-color: palegoldenrod;
}
```

{{ EmbedLiveSample('minimum intrinsic size', '100%', '220') }}

#### maximale intrinsische Größe

Die maximale intrinsische Größe ist das Gegenteil. Es ist die Größe des Elements, wenn die Inline-Größe des Containers unendlich wäre. Textinhalt würde so breit wie möglich angezeigt werden, ohne Soft-Wrapping, auch wenn er seinen Container überfluten würde. Der Schlüsselwortwert {{cssxref("max-content")}} stellt dieses Verhalten ein.

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

{{ EmbedLiveSample('maximum intrinsic size', '100%', '200') }}

## Extrinsische Größenbestimmung

Das Gegenteil von _intrinsischer Größe_ ist **_extrinsische Größe_**, die auf dem Kontext eines Elements basiert, ohne Rücksicht auf dessen Inhalte. Extrinsische Größenbestimmung wird durch Box-Modell-Eigenschaftenwerte bestimmt. Bei der extrinsischen Größenbestimmung geben Prozentsätze die Größe einer Box im Verhältnis zum umgebenden Block der Box an.

## Siehe auch

- CSS {{cssxref("min-content")}}, {{cssxref("max-content")}}, und {{cssxref("fit-content")}} Eigenschaftswerte.
- CSS {{cssxref("aspect-ratio")}} Eigenschaft
- [CSS Box-Dimensionierung](/de/docs/Web/CSS/CSS_box_sizing) Modul
- [CSS Größen-Spezifikation: intrinsische Größen](https://www.w3.org/TR/css-sizing-3/#intrinsic-sizes)
