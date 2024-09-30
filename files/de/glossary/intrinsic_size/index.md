---
title: Intrinsic size
slug: Glossary/Intrinsic_Size
l10n:
  sourceCommit: 726f971467b4cdd339e29ee10403fce5b3e87f42
---

{{GlossarySidebar}}

Im CSS beschreibt die _intrinsische Größe_ eines Elements die Größe, die es rein basierend auf seinem Inhalt hätte, ohne die Auswirkungen des Kontexts, in dem es erscheint, zu berücksichtigen. Zum Beispiel die von den CSS-[Box-Modell](/de/docs/Learn/CSS/Building_blocks/The_box_model)-Eigenschaften angewandte Größenbestimmung. Die intrinsischen Größen eines Elements werden durch seine {{cssxref("min-content")}}- und {{cssxref("max-content")}}-Größen dargestellt.

Inline-Elemente sind intrinsisch dimensioniert: [Größenbestimmung](/de/docs/Web/CSS/CSS_box_sizing) und [Box](/de/docs/Web/CSS/CSS_box_model)-Eigenschaften einschließlich {{cssxref("height")}}, {{cssxref("width")}}, {{cssxref("block-size")}}, {{cssxref("inline-size")}}, und {{cssxref("padding-block")}} und {{cssxref("margin-block")}} haben keine Auswirkungen auf sie (obwohl {{cssxref("margin-inline")}} und {{cssxref("padding-inline")}} dies tun).

Beispielsweise ist die minimale intrinsische Größe des inline {{htmlelement("span")}}-Elements die minimale Größe, die es hätte, wenn es gefloatet würde (ohne andere CSS-Box-Eigenschaften angewendet zu haben), innerhalb eines Containers mit einer Inline-Größe von `0px`. Die maximale intrinsische Größe ist das Gegenteil. Es ist die Größe, die das gleiche `<span>`-Element hätte, wenn die Inline-Größe seines Containers unendlich wäre.

Die intrinsische Größe hat für Bilder die gleiche Bedeutung wie für Text — die Größe, in der die Bilder angezeigt werden, wenn kein CSS angewendet wird, um das Rendering zu ändern.

Pixeldichte und Auflösung beeinflussen die intrinsische Größe. Standardmäßig wird bei Bildern von einer "1x"-Pixeldichte ausgegangen (1 Gerät-Pixel = 1 CSS-Pixel), in diesem Fall ist die intrinsische Größe einfach die Pixelhöhe und -breite. Die intrinsische Größe und Auflösung eines Bildes kann explizit in seinen [EXIF](/de/docs/Glossary/EXIF)-Daten angegeben werden. Die Pixeldichte von Bildern kann auch für Bilder mit dem [`srcset`](/de/docs/Web/HTML/Element/img#srcset)-Attribut festgelegt werden. Beachten Sie, dass, wenn beide Mechanismen verwendet werden, der `srcset`-Wert "über" dem EXIF-Wert angewendet wird.

Die intrinsischen Größen und deren Berechnungsweise sind im [CSS-Sizing-Modul](/de/docs/Web/CSS/CSS_box_sizing) definiert.

#### minimale intrinsische Größe

Um ein Element entsprechend seiner minimalen intrinsischen Größe zu setzen, verwenden Sie {{cssxref("inline-size")}} (oder {{cssxref("width")}} in horizontalen Schreibmodi, wie Englisch und Hebräisch) auf {{cssxref("min-content")}}. Dies setzt das Element auf die Größe, die es hätte, wenn der Text so klein wie möglich in der Inline-Richtung umbrochen würde, ohne einen Überlauf zu verursachen, mit so viel weichem Umbruch wie möglich. Für ein Feld, das eine Zeichenkette enthält, wird die minimale intrinsische Größe durch das längste Wort definiert.

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

Die maximale intrinsische Größe ist das Gegenteil. Sie ist die Größe des Elements, wenn die Inline-Größe des Containers unendlich wäre. Textinhalt würde so breit wie möglich angezeigt, ohne weichen Umbruch, selbst wenn es seinen Container überläuft. Der Schlüsselwortwert {{cssxref("max-content")}} setzt dieses Verhalten.

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

## Extrinsische Größenbestimmung

Das Gegenteil von _intrinsischer Größe_ ist **_extrinsische Größe_**, die auf dem Kontext eines Elements basiert, ohne Rücksicht auf seinen Inhalt. Die extrinsische Größenbestimmung wird durch die Box-Modell-Eigenschaftenwerte bestimmt. Bei extrinsischer Größenbestimmung geben Prozentsätze die Größe eines Feldes in Bezug auf den enthaltenden Block des Feldes an.

## Siehe auch

- CSS {{cssxref("min-content")}}, {{cssxref("max-content")}}, und {{cssxref("fit-content")}} Werteigenschaften.
- CSS {{cssxref("aspect-ratio")}} Eigenschaft
- [CSS-Box-Sizing](/de/docs/Web/CSS/CSS_box_sizing) Modul
- [CSS-Sizing-Spezifikation: Intrinsische Größen](https://www.w3.org/TR/css-sizing-3/#intrinsic-sizes)
