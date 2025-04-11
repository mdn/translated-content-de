---
title: Intrinsische Größe
slug: Glossary/Intrinsic_Size
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{GlossarySidebar}}

In CSS ist die _intrinsische Größe_ eines Elements die Größe, die es basierend auf seinem Inhalt hätte, ohne die Auswirkungen des Kontextes zu berücksichtigen, in dem es erscheint. Dazu gehört zum Beispiel die Größenregelung durch die Eigenschaften des [Box-Modells](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) in CSS. Die intrinsischen Größen eines Elements werden durch seine {{cssxref("min-content")}}- und {{cssxref("max-content")}}-Größen dargestellt.

Inline-Elemente sind intrinsisch dimensioniert: [Größen](/de/docs/Web/CSS/CSS_box_sizing) und [Box](/de/docs/Web/CSS/CSS_box_model) Eigenschaften wie {{cssxref("height")}}, {{cssxref("width")}}, {{cssxref("block-size")}}, {{cssxref("inline-size")}}, und {{cssxref("padding-block")}} und {{cssxref("margin-block")}} haben keinen Einfluss auf sie (obwohl {{cssxref("margin-inline")}} und {{cssxref("padding-inline")}} dies tun).

Zum Beispiel ist die minimale intrinsische Größe des inline {{htmlelement("span")}}-Elements die minimale Größe, die es hätte, wenn es gefloatet wäre (ohne dass andere CSS-Boxen-Eigenschaften angewendet werden), in einem Container mit einer Inline-Größe von `0px`. Die maximale intrinsische Größe ist das Gegenteil. Es ist die Größe, die das gleiche `<span>` hätte, wenn die Inline-Größe seines Containers unendlich wäre.

Die intrinsische Größe hat für Bilder die gleiche Bedeutung wie für Text — die Größe, in der die Bilder angezeigt werden, wenn kein CSS angewendet wird, um die Darstellung zu ändern.

Pixeldichte und Auflösung beeinflussen die intrinsische Größe. Standardmäßig wird angenommen, dass Bilder eine "1x" Pixeldichte haben (1 Gerätepixel = 1 CSS-Pixel), in welchem Fall die intrinsische Größe einfach der Pixelhöhe und -breite entspricht. Die intrinsische Größe und Auflösung eines Bildes kann explizit in seinen {{Glossary("EXIF", "EXIF")}} Daten angegeben werden. Die Pixeldichte von Bildern kann auch mit dem [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) Attribut festgelegt werden. Beachten Sie, dass, wenn beide Mechanismen verwendet werden, der `srcset` Wert "über" dem EXIF-Wert angewendet wird.

Intrinsische Größen und ihre Berechnung sind im [CSS Sizing-Modul](/de/docs/Web/CSS/CSS_box_sizing) definiert.

#### Minimale intrinsische Größe

Um ein Element nach seiner minimalen intrinsischen Größe festzulegen, setzen Sie die {{cssxref("inline-size")}} (oder {{cssxref("width")}} in horizontalen Schreibmodi wie Englisch und Hebräisch) auf {{cssxref("min-content")}}. Dies setzt das Element auf die Größe, die es hätte, wenn der Text in der Inline-Richtung so klein wie möglich umbrochen wäre, ohne Überlauf zu verursachen, mit so viel weichem Umbruch wie möglich. Für eine Box, die eine Zeichenfolge von Text enthält, würde die minimale intrinsische Größe durch das längste Wort definiert werden.

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

Die maximale intrinsische Größe ist das Gegenteil. Es ist die Größe des Elements, wenn die Inline-Größe des Containers unendlich wäre. Textinhalt würde so breit wie möglich angezeigt, ohne weichen Umbruch, selbst wenn er seinen Container überfluten würde. Der Schlüsselwortwert {{cssxref("max-content")}} setzt dieses Verhalten.

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

## Extrinsische Größe

Das Gegenteil der _intrinsischen Größe_ ist die **_extrinsische Größe_**, die auf dem Kontext eines Elements beruht, ohne Rücksicht auf seinen Inhalt. Extrinsische Größenbestimmung wird durch die Box-Modell-Eigenschaften bestimmt. Bei der extrinsischen Größenbestimmung geben Prozentsätze die Größe einer Box in Bezug auf den enthaltenen Block der Box an.

## Siehe auch

- CSS {{cssxref("min-content")}}, {{cssxref("max-content")}}, und {{cssxref("fit-content")}} Eigenschaftswerte.
- {{cssxref("interpolate-size")}}
- {{cssxref("aspect-ratio")}}
- {{cssxref("calc-size()")}}
- [CSS Box Sizing](/de/docs/Web/CSS/CSS_box_sizing) Modul
- [CSS Sizing-Spezifikation: intrinsische Größen](https://www.w3.org/TR/css-sizing-3/#intrinsic-sizes)
