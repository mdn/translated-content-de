---
title: CSS Compositing und Blending
slug: Web/CSS/CSS_compositing_and_blending
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{CSSRef}}

Das **CSS Compositing und Blending**-Modul definiert, wie die Hintergrundebenen eines Elements miteinander vermischt werden können, wie ein Element mit seinem Container vermischt werden kann und ob das Element einen neuen [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context) erstellen muss.

Die Eigenschaften in diesem CSS-Modul können verwendet werden, um den Blending-Modus festzulegen, der gegebenenfalls verwendet werden soll, um die Hintergrundbilder und -farben eines Elements zu einem einzigen Hintergrundbild zu vermischen. Dieses Modul bietet 16 Blending-Modi. Sie können auch festlegen, wie die Ränder, der Hintergrund und der Inhalt eines Elements, einschließlich Text, Emojis und Bilder, mit dem Hintergrund seines Containers vermischt werden sollen.

### Compositing und Blending in Aktion

In diesem Beispiel hat jede Box einen Rand, zwei gestreifte Hintergrundbilder und einen einfarbigen Hintergrund. Der gemeinsame Hintergrund für alle Boxen enthält ein Muster aus Kreisen. Die drei Boxen in der zweiten Reihe sind so eingestellt, dass sie mit dem Hintergrund des Containers vermischt werden.

{{EmbedGHLiveSample("css-examples/modules/compositing.html", '100%', 460)}}

Beachten Sie, wie der Hintergrund, der Rand und der Inhalt durch das Blending beeinflusst werden. Um den Code für dieses Beispiel zu sehen, [sehen Sie den Quellcode auf GitHub an](https://github.com/mdn/css-examples/blob/main/modules/compositing.html).

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
- [stacking context](/de/docs/Glossary/stacking_context) Glossarbegriff
- {{ SVGElement("feBlend")}} SVG-Filterprimitive
- {{ SVGElement("feComposite")}} SVG-Filterprimitive

## Spezifikationen

{{Specifications}}

## Siehe auch

- Eigenschaften im [CSS Filter Effects](/de/docs/Web/CSS/CSS_filter_effects)-Modul ermöglichen das Anwenden von Filtereffekten, wie z. B. das Verwischen und Ändern der Farbintensität, auf Bilder, Hintergründe und Ränder.
- [Compositing And Blending In CSS](https://www.sarasoueidan.com/blog/compositing-and-blending-in-css/) (2015)
- [Editing Images in CSS: Blend Modes](https://webdesign.tutsplus.com/editing-images-in-css-blend-modes--cms-26058t) (2022)
- [web.dev: blend modes](https://web.dev/learn/css/blend-modes) (2021)
