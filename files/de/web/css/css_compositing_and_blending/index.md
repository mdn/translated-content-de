---
title: Komposition und Mischmodus in CSS
slug: Web/CSS/CSS_compositing_and_blending
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{CSSRef}}

Das **CSS-Kompositions- und Mischmodul** definiert, wie die Hintergrundschichten eines Elements miteinander vermischt werden können, wie ein Element mit seinem Container vermischt werden kann und ob das Element einen neuen [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context) erstellen muss.

Die Eigenschaften in diesem CSS-Modul können verwendet werden, um den Mischmodus zu definieren, der verwendet werden soll, um die Hintergrundbilder und -farben eines Elements in ein einzelnes Hintergrundbild zu mischen, falls dies gewünscht ist. Dieses Modul bietet 16 Mischmodi. Sie können auch festlegen, wie die Ränder, der Hintergrund und der Inhalt eines Elements, einschließlich Text, Emojis und Bilder, mit dem Hintergrund seines Containers vermischt werden sollen.

### Komposition und Mischmodus in Aktion

In diesem Beispiel hat jeder Kasten einen Rand, zwei gestreifte Hintergrundbilder und einen einfarbigen Hintergrund. Der gemeinsame Hintergrund für alle Kästen enthält ein Muster aus Kreisen. Die drei Kästen in der zweiten Reihe sind so eingestellt, dass sie mit dem Hintergrund des Containers vermischt werden.

{{EmbedGHLiveSample("css-examples/modules/compositing.html", '100%', 460)}}

Beachten Sie, wie der Hintergrund, der Rand und der Inhalt alle durch das Mischen beeinflusst werden. Um den Code für dieses Beispiel zu sehen, [sehen Sie sich den Quellcode auf GitHub an](https://github.com/mdn/css-examples/blob/main/modules/compositing.html).

## Referenz

### Eigenschaften

- {{cssxref("background-blend-mode")}}
- {{cssxref("isolation")}}
- {{cssxref("mix-blend-mode")}}

## Verwandte Konzepte

- {{cssxref("blend-mode")}} Datentyp
- {{cssxref("backdrop-filter")}} CSS-Eigenschaft
- {{cssxref("filter")}} CSS-Eigenschaft
- {{cssxref("mask-composite")}} CSS-Eigenschaft
- {{cssxref("background-color")}} CSS-Eigenschaft
- {{cssxref("background-image")}} CSS-Eigenschaft
- {{glossary("stacking context")}} Glossarbegriff
- {{ SVGElement("feBlend")}} SVG-Filterprimitiv
- {{ SVGElement("feComposite")}} SVG-Filterprimitiv

## Spezifikationen

{{Specifications}}

## Siehe auch

- Eigenschaften im [CSS-Filtereffekt](/de/docs/Web/CSS/CSS_filter_effects) Modul ermöglichen das Anwenden von Filtereffekten, wie zum Beispiel Unschärfe und Änderung der Farbintensität, auf Bilder, Hintergründe und Ränder.
- [Compositing And Blending In CSS](https://www.sarasoueidan.com/blog/compositing-and-blending-in-css/) (2015)
- [Editing Images in CSS: Blend Modes](https://webdesign.tutsplus.com/editing-images-in-css-blend-modes--cms-26058t) (2022)
- [web.dev: blend modes](https://web.dev/learn/css/blend-modes) (2021)
