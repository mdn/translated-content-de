---
title: Intrinsische Größe
slug: Glossary/Intrinsic_Size
l10n:
  sourceCommit: 726f971467b4cdd339e29ee10403fce5b3e87f42
---

{{GlossarySidebar}}

In CSS ist die _intrinsische Größe_ eines Elements die Größe, basierend rein auf seinem Inhalt, ohne die Auswirkungen des Kontexts zu berücksichtigen, in dem es erscheint. Zum Beispiel die Größenanpassungen, die durch CSS [Boxmodell](/de/docs/Learn/CSS/Building_blocks/The_box_model) Eigenschaften angewendet werden. Die intrinsischen Größen eines Elements werden durch seine {{cssxref("min-content")}} und {{cssxref("max-content")}} Größen repräsentiert.

Inline-Elemente werden intrinsisch dimensioniert: [Größenanpassung](/de/docs/Web/CSS/CSS_box_sizing) und [Box](/de/docs/Web/CSS/CSS_box_model) Eigenschaften einschließlich {{cssxref("height")}}, {{cssxref("width")}}, {{cssxref("block-size")}}, {{cssxref("inline-size")}}, und {{cssxref("padding-block")}}, sowie {{cssxref("margin-block")}} haben keinen Einfluss auf sie (obwohl {{cssxref("margin-inline")}} und {{cssxref("padding-inline")}} dies tun).

Beispielsweise ist die minimale intrinsische Größe des inline {{htmlelement("span")}} Elements die minimale Größe, die es hätte, wenn es gefloatet wäre (ohne andere CSS-Box-Eigenschaften anzuwenden), innerhalb eines Containers mit einer Inline-Größe von `0px`. Die maximale intrinsische Größe ist das Gegenteil. Es ist die Größe, die das gleiche `<span>` hätte, wenn die Inline-Größe seines Containers unendlich wäre.

Intrinsische Größe hat die gleiche Bedeutung für Bilder wie für Text — die Größe, in der die Bilder angezeigt werden, wenn kein CSS angewendet wird, um das Rendering zu ändern.

Pixeldichte und Auflösung beeinflussen die intrinsische Größe. Standardmäßig wird angenommen, dass Bilder eine "1x" Pixeldichte haben (1 Gerätepixel = 1 CSS-Pixel), in welchem Fall die intrinsische Größe einfach die Pixelhöhe und -breite ist. Die intrinsische Größe und Auflösung eines Bildes können explizit in seinen {{Glossary("EXIF")}} Daten angegeben werden. Die Pixeldichte von Bildern kann auch für Bilder mit dem [`srcset`](/de/docs/Web/HTML/Element/img#srcset) Attribut festgelegt werden. Beachten Sie, dass, wenn beide Mechanismen verwendet werden, der `srcset` Wert "über" dem EXIF-Wert angewendet wird.

Intrinsische Größen und wie sie berechnet werden, sind im [CSS Sizing Modul](/de/docs/Web/CSS/CSS_box_sizing) definiert.

#### minimale intrinsische Größe

Um ein Element entsprechend seiner minimalen intrinsischen Größe zu setzen, setzen Sie die {{cssxref("inline-size")}} (oder {{cssxref("width")}} in horizontalen Schreibrichtungen, wie Englisch und Hebräisch) auf {{cssxref("min-content")}}. Dies setzt das Element auf die Größe, die es hätte, wenn der Text in Bezug auf die Inline-Richtung so klein wie möglich umbrochen würde, ohne Überlauf zu verursachen, mit möglichst viel weichem Umbruch. Für ein Box, die eine Zeichenkette aus Text enthält, würde die minimale intrinsische Größe durch das längste Wort definiert.

```html hidden
<p>Textumbruch, wodurch das Element nur so breit wie das längste Wort ist.</p>
```

```css
p {
  inline-size: min-content;
  background-color: palegoldenrod;
}
```

{{ EmbedLiveSample('minimum intrinsic size', '100%', '220') }}

#### maximale intrinsische Größe

Die maximale intrinsische Größe ist das Gegenteil. Es ist die Größe des Elements, wenn die Inline-Größe des Containers unendlich wäre. Textinhalt würde so breit wie möglich angezeigt, ohne weichen Umbruch, selbst wenn er seinen Container überlaufen würde. Der Schlüsselwortwert {{cssxref("max-content")}} setzt dieses Verhalten.

```html hidden
<p>Element wächst, da der Text nicht umbrochen wird.</p>
<p>
  Dieser Absatz könnte breiter sein als die gesamte Seite und würde dennoch nicht
  umgebrochen, da <code>width: max-content</code> gesetzt ist. Dadurch könnte er
  seinen Container überlaufen.
</p>
```

```css
p {
  width: max-content;
  background-color: palegoldenrod;
}
```

{{ EmbedLiveSample('maximum intrinsic size', '100%', '200') }}

## Extrinsische Größenanpassung

Das Gegenteil von _intrinsischer Größe_ ist **_extrinsische Größe_**, welche auf der Grundlage des Kontexts eines Elements erfolgt, ohne Rücksicht auf seine Inhalte. Extrinsische Größenanpassung wird durch Werte der Boxmodell-Eigenschaften bestimmt. Bei der extrinsischen Größenanpassung spezifizieren Prozentsätze die Größe einer Box in Bezug auf den enthaltenden Block der Box.

## Siehe auch

- CSS {{cssxref("min-content")}}, {{cssxref("max-content")}}, und {{cssxref("fit-content")}} Eigenschaftswerte.
- CSS {{cssxref("aspect-ratio")}} Eigenschaft
- [CSS Box Sizing](/de/docs/Web/CSS/CSS_box_sizing) Modul
- [CSS Sizing Spezifikation: intrinsische Größen](https://www.w3.org/TR/css-sizing-3/#intrinsic-sizes)
