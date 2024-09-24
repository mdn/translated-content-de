---
title: CSS-Hintergründe und Ränder
slug: Web/CSS/CSS_backgrounds_and_borders
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

Das **CSS-Modul für Hintergründe und Ränder** bietet Eigenschaften zum Hinzufügen von Rändern, abgerundeten Ecken und Box-Schatten zu Elementen.

Sie können verschiedene Arten von Randstilen hinzufügen, einschließlich Rändern, die aus Bildern jeglichen Bildtyps, von Rasterbildern bis zu CSS-Gradienten, bestehen. Ränder können quadratisch oder abgerundet sein, und ein unterschiedlicher Radius kann für jede Ecke festgelegt werden. Elemente können abgerundet sein, unabhängig davon, ob sie einen sichtbaren Rand haben oder nicht.

Box-Schatten umfassen eingefügte und ausgeführte Schatten, einzelne oder mehrere Schatten, und können solide oder verlaufend zu transparent sein. Ein äußerer Box-Schatten wirft einen Schatten, als ob die Border-Box des Elements undurchsichtig wäre. Ein innerer Box-Schatten wirft einen Schatten, als ob alles außerhalb der Padding-Kante undurchsichtig wäre. Der Schatten kann solide sein oder eine Streuungsentfernung enthalten, bei der die Schattenfarbe zu transparent wird.

Die Eigenschaften in diesem Modul lassen Sie auch definieren, ob Zellen innerhalb einer {{HTMLElement("table")}} gemeinsame oder separate Ränder haben sollen.

### Hintergründe, Ränder und Box-Schatten in Aktion

Dieses Beispiel von Rändern, Hintergründen und Box-Schatten besteht aus zentrierten Hintergrundbildern, die aus linearen und radialen Verläufen bestehen. Eine Reihe von Box-Schatten lässt den Rand "herausspringen". Das Element auf der linken Seite hat ein gesetztes Randbild. Das Element auf der rechten Seite hat einen abgerundeten gepunkteten Rand.

{{EmbedGHLiveSample("css-examples/modules/backgrounds.html", '100%', 430)}}

Die Hintergrundbilder werden mit {{cssxref("background-image")}} definiert. Die Bilder sind mit {{cssxref("background-position")}} zentriert. Unterschiedliche Werte der {{cssxref("background-clip")}}-Eigenschaft für die verschiedenen Hintergrundbilder werden verwendet, um die Hintergrundbilder innerhalb der Inhaltsbox zu halten. Die Hintergrundfarbe wird auf die Padding-Box zugeschnitten, um zu verhindern, dass der Hintergrund durch die transparenten Abschnitte für das {{cssxref("border-image")}} und den {{cssxref("border-style", "dotted")}} {{cssxref("border")}} erscheint. Die abgerundeten Ecken im Element auf der rechten Seite werden mit der {{cssxref("border-radius")}}-Eigenschaft erstellt. Eine einzige {{cssxref("box-shadow")}}-Deklaration wird verwendet, um alle Schatten, sowohl eingefügt als auch ausgeführt, zu setzen.

Um den Code für dieses Beispiel zu sehen, [sehen Sie sich den Quellcode auf GitHub an](https://github.com/mdn/css-examples/blob/main/modules/backgrounds.html).

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
- {{cssxref("background")}} shorthand
- {{cssxref("background-position-x")}}
- {{cssxref("background-position-y")}}
- {{cssxref("background-position-inline")}}
- {{cssxref("background-position-block")}}

- {{cssxref("border-bottom-color")}}
- {{cssxref("border-bottom-style")}}
- {{cssxref("border-bottom-width")}}
- {{cssxref("border-bottom")}} shorthand
- {{cssxref("border-left-color")}}
- {{cssxref("border-left-style")}}
- {{cssxref("border-left-width")}}
- {{cssxref("border-left")}} shorthand
- {{cssxref("border-right-color")}}
- {{cssxref("border-right-style")}}
- {{cssxref("border-right-width")}}
- {{cssxref("border-right")}} shorthand
- {{cssxref("border-top-color")}}
- {{cssxref("border-top-style")}}
- {{cssxref("border-top-width")}}
- {{cssxref("border-top")}} shorthand
- {{cssxref("border-color")}} shorthand
- {{cssxref("border-style")}} shorthand
- {{cssxref("border-width")}} shorthand
- {{cssxref("border")}} shorthand

- {{cssxref("border-collapse")}}

- {{cssxref("border-bottom-left-radius")}}
- {{cssxref("border-bottom-right-radius")}}
- {{cssxref("border-top-left-radius")}}
- {{cssxref("border-top-right-radius")}}
- {{cssxref("border-radius")}} shorthand

- {{cssxref("border-image-outset")}}
- {{cssxref("border-image-repeat")}}
- {{cssxref("border-image-slice")}}
- {{cssxref("border-image-source")}}
- {{cssxref("border-image-width")}}
- {{cssxref("border-image")}} shorthand

- {{cssxref("box-shadow")}}

### Datentypen

- {{cssxref("line-style")}} enumerated type

## Leitfäden

- [Lernen Sie CSS: Hintergrund und Ränder](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
  - : Erklärt, wie dekorative Bilder mit CSS-Hintergrundbildern implementiert werden.
- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
  - : Erklärt, wie man ein oder mehrere Hintergründe auf einem Element setzt.
- [Größe von Hintergrundbildern ändern](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images)
  - : Beschreibt, wie man die Größe und das Wiederholungsverhalten von Hintergrundbildern ändert.
- [Lernen Sie CSS: das Box-Modell](/de/docs/Learn/CSS/Building_blocks/The_box_model)
  - : Erklärt, wie Ränder zusammen mit anderen Eigenschaften des Box-Modells das CSS-Box-Modell beeinflussen.
- [CSS-Gradienten verwenden](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
  - : Erklärt, wie man CSS-Gradient-Hintergrundbilder erstellt.

## Verwandte Konzepte

- {{cssxref("border-block-end-color")}} property
- {{cssxref("border-block-start-color")}} property
- {{cssxref("border-inline-end-color")}} property
- {{cssxref("border-inline-start-color")}} property
- {{cssxref("border-block-end-style")}} property
- {{cssxref("border-block-start-style")}} property
- {{cssxref("border-inline-end-style")}} property
- {{cssxref("border-inline-start-style")}} property
- {{cssxref("border-block-end-width")}} property
- {{cssxref("border-block-start-width")}} property
- {{cssxref("border-inline-end-width")}} property
- {{cssxref("border-inline-start-width")}} property

- {{cssxref("border-start-start-radius")}} property
- {{cssxref("border-start-end-radius")}} property
- {{cssxref("border-end-start-radius")}} property
- {{cssxref("border-end-end-radius")}} property

- {{cssxref("box-sizing")}} property
- {{cssxref("box-decoration-break")}} property
- {{cssxref("text-shadow")}} property

- {{cssxref("url_value", "&lt;url&gt;")}} CSS type
- [`<color>`](/de/docs/Web/CSS/color) data type
- [`<image>`](/de/docs/Web/CSS/image) data type
- [`<position>`](/de/docs/Web/CSS/position) data type

- [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) keyword

## Spezifikationen

{{Specifications}}

## Siehe auch

- Interaktive Werkzeuge, die Ihnen helfen, Ränderbilder, abgerundete Ecken und Box-Schatten visuell zu erstellen:
  - [Randbild-Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-image_generator)
  - [Radius-Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-radius_generator)
  - [Box-Schatten-Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Box-shadow_generator)
- [Anwendung von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color), einschließlich für Ränder.
- Die [`drop-shadow()`](/de/docs/Web/CSS/filter-function/drop-shadow) Filterfunktion, die einen Schlagschatteneffekt auf das Eingabebild anwendet. Die Funktion wird von den Eigenschaften {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} verwendet.
