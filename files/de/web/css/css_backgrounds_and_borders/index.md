---
title: CSS Hintergründe und Ränder
slug: Web/CSS/CSS_backgrounds_and_borders
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

Das **CSS Hintergründe und Ränder** Modul bietet Eigenschaften, um Ränder, abgerundete Ecken und Schatten für Elemente hinzuzufügen.

Sie können verschiedene Arten von Randstilen hinzufügen, einschließlich Ränder aus Bildern jeder Bildart, von Rasterbildern bis hin zu CSS-Verläufen. Ränder können eckig oder abgerundet sein, und ein unterschiedlicher Radius kann für jede Ecke festgelegt werden. Elemente können unabhängig davon, ob sie einen sichtbaren Rand haben oder nicht, abgerundet werden.

Box-Schatten umfassen innere und äußere Schatten, einzelne oder mehrere Schatten, und können voll oder von der Farbe zu transparent verblassen. Ein äußerer Box-Schatten wirft einen Schatten, als ob die Rahmenbox des Elements undurchsichtig wäre. Ein innerer Box-Schatten wirft einen Schatten, als ob alles außerhalb der Polsterungskante undurchsichtig wäre. Der Schatten kann fest sein oder eine Verbreitungsdistanz enthalten, bei der sich die Schattenfarbe zu transparent ändert.

Die Eigenschaften in diesem Modul erlauben es Ihnen auch zu definieren, ob Zellen innerhalb einer {{HTMLElement("table")}} gemeinsame oder separate Ränder haben sollen.

### Hintergründe, Ränder und Box-Schatten in Aktion

Dieses Beispiel von Rändern, Hintergründen und Box-Schatten besteht aus zentrierten Hintergrundbildern, die aus linearen und radialen Verläufen bestehen. Eine Serie von Box-Schatten lässt den Rand "hervortreten". Das Element links hat ein Bild als Rand gesetzt. Das Element rechts hat einen abgerundeten gepunkteten Rand.

{{EmbedGHLiveSample("css-examples/modules/backgrounds.html", '100%', 430)}}

Die Hintergrundbilder werden mit {{cssxref("background-image")}} definiert. Die Bilder werden mit {{cssxref("background-position")}} zentriert. Verschiedene Werte der {{cssxref("background-clip")}} Eigenschaft für die mehreren Hintergrundbilder werden verwendet, um die Hintergrundbilder innerhalb der Inhaltbox zu halten. Die Hintergrundfarbe wird auf die Polsterungskiste zugeschnitten, um zu verhindern, dass der Hintergrund durch die transparenten Abschnitte für das {{cssxref("border-image")}} und den {{cssxref("border-style", "dotted")}} {{cssxref("border")}} erscheint. Die abgerundeten Ecken im Element rechts werden mit der {{cssxref("border-radius")}} Eigenschaft erstellt. Eine einzelne {{cssxref("box-shadow")}} Deklaration wird verwendet, um alle Schatten festzulegen, sowohl innenliegende als auch außenliegende.

Um den Code für dieses Beispiel zu sehen, [sehen Sie den Quellcode auf GitHub](https://github.com/mdn/css-examples/blob/main/modules/backgrounds.html).

## Referenz

### Eigenschaften

- {{cssxref("background-attachment")}}
- {{cssxref("background-clip")}}
- {{cssxref("background-color")}}
- {{cssxref("background-image")}}
- {{cssxref("background-origin")}}
- {{cssxref("background-position")}}
- {{cssxref("background-repeat")}}
- {{cssxref("background-size")}}
- {{cssxref("background")}} Kurzform
- {{cssxref("background-position-x")}}
- {{cssxref("background-position-y")}}
- {{cssxref("background-position-inline")}}
- {{cssxref("background-position-block")}}

- {{cssxref("border-bottom-color")}}
- {{cssxref("border-bottom-style")}}
- {{cssxref("border-bottom-width")}}
- {{cssxref("border-bottom")}} Kurzform
- {{cssxref("border-left-color")}}
- {{cssxref("border-left-style")}}
- {{cssxref("border-left-width")}}
- {{cssxref("border-left")}} Kurzform
- {{cssxref("border-right-color")}}
- {{cssxref("border-right-style")}}
- {{cssxref("border-right-width")}}
- {{cssxref("border-right")}} Kurzform
- {{cssxref("border-top-color")}}
- {{cssxref("border-top-style")}}
- {{cssxref("border-top-width")}}
- {{cssxref("border-top")}} Kurzform
- {{cssxref("border-color")}} Kurzform
- {{cssxref("border-style")}} Kurzform
- {{cssxref("border-width")}} Kurzform
- {{cssxref("border")}} Kurzform

- {{cssxref("border-collapse")}}

- {{cssxref("border-bottom-left-radius")}}
- {{cssxref("border-bottom-right-radius")}}
- {{cssxref("border-top-left-radius")}}
- {{cssxref("border-top-right-radius")}}
- {{cssxref("border-radius")}} Kurzform

- {{cssxref("border-image-outset")}}
- {{cssxref("border-image-repeat")}}
- {{cssxref("border-image-slice")}}
- {{cssxref("border-image-source")}}
- {{cssxref("border-image-width")}}
- {{cssxref("border-image")}} Kurzform

- {{cssxref("box-shadow")}}

### Datentypen

- {{cssxref("line-style")}} Aufzählungstyp

## Leitfäden

- [CSS lernen: Hintergrund und Ränder](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
  - : Erklärt, wie dekorative Bilder mit CSS-Hintergrundbildern implementiert werden.
- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
  - : Erklärt, wie man ein oder mehrere Hintergründe auf einem Element setzt.
- [Ändern der Größe von Hintergrundbildern](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images)
  - : Beschreibt, wie man die Größe und das Wiederholungsverhalten von Hintergrundbildern ändert.
- [CSS lernen: das Box-Modell](/de/docs/Learn/CSS/Building_blocks/The_box_model)
  - : Erklärt, wie Ränder zusammen mit anderen Eigenschaften des Box-Modells das CSS-Box-Modell beeinflussen.
- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
  - : Erklärt, wie man CSS-Verlaufs-Hintergrundbilder erstellt.

## Verwandte Konzepte

- {{cssxref("border-block-end-color")}} Eigenschaft
- {{cssxref("border-block-start-color")}} Eigenschaft
- {{cssxref("border-inline-end-color")}} Eigenschaft
- {{cssxref("border-inline-start-color")}} Eigenschaft
- {{cssxref("border-block-end-style")}} Eigenschaft
- {{cssxref("border-block-start-style")}} Eigenschaft
- {{cssxref("border-inline-end-style")}} Eigenschaft
- {{cssxref("border-inline-start-style")}} Eigenschaft
- {{cssxref("border-block-end-width")}} Eigenschaft
- {{cssxref("border-block-start-width")}} Eigenschaft
- {{cssxref("border-inline-end-width")}} Eigenschaft
- {{cssxref("border-inline-start-width")}} Eigenschaft

- {{cssxref("border-start-start-radius")}} Eigenschaft
- {{cssxref("border-start-end-radius")}} Eigenschaft
- {{cssxref("border-end-start-radius")}} Eigenschaft
- {{cssxref("border-end-end-radius")}} Eigenschaft

- {{cssxref("box-sizing")}} Eigenschaft
- {{cssxref("box-decoration-break")}} Eigenschaft
- {{cssxref("text-shadow")}} Eigenschaft

- {{cssxref("url_value", "&lt;url&gt;")}} CSS Typ
- [`<color>`](/de/docs/Web/CSS/color) Datentyp
- [`<image>`](/de/docs/Web/CSS/image) Datentyp
- [`<position>`](/de/docs/Web/CSS/position) Datentyp

- [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) Schlüsselwort

## Spezifikationen

{{Specifications}}

## Siehe auch

- Interaktive Werkzeuge, die Ihnen ermöglichen, Randbilder, abgerundete Ecken und Box-Schatten visuell zu erstellen:
  - [Border-image Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-image_generator)
  - [Border-radius Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-radius_generator)
  - [Box-shadow Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Box-shadow_generator)
- [Farbe auf HTML-Elemente anwenden mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color), einschließlich für Ränder.
- Die [`drop-shadow()`](/de/docs/Web/CSS/filter-function/drop-shadow) Filterfunktion, die einen Schlagschatteneffekt auf das Eingangsbild anwendet. Die Funktion wird von den {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} Eigenschaften verwendet.
