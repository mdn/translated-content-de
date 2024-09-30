---
title: CSS Hintergründe und Rahmen
slug: Web/CSS/CSS_backgrounds_and_borders
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

Das Modul **CSS Hintergründe und Rahmen** bietet Eigenschaften zum Hinzufügen von Rahmen, abgerundeten Ecken und Box-Schatten zu Elementen.

Sie können verschiedene Arten von Rahmenstilen hinzufügen, einschließlich Rahmen, die aus Bildern eines beliebigen Bildtyps bestehen, von Rastergrafiken bis hin zu CSS-Verläufen. Rahmen können eckig oder abgerundet sein, und ein unterschiedlicher Radius kann für jede Ecke festgelegt werden. Elemente können abgerundet sein, unabhängig davon, ob sie einen sichtbaren Rahmen haben oder nicht.

Box-Schatten umfassen Innen- und Außenschatten, einzelne oder mehrere Schatten, und können solide sein oder allmählich zu transparent verblassen. Ein äußerer Box-Schatten wirft einen Schatten, als ob die Rahmenbox des Elements undurchsichtig wäre. Ein innerer Box-Schatten wirft einen Schatten, als ob alles außerhalb der Polsterkante undurchsichtig wäre. Der Schatten kann solide sein oder eine Ausbreitungsdistanz beinhalten, bei der die Schattenfarbe zu transparent übergeht.

Die Eigenschaften in diesem Modul ermöglichen es Ihnen auch zu definieren, ob Zellen innerhalb eines {{HTMLElement("table")}} gemeinsame oder separate Rahmen haben sollen.

### Hintergründe, Rahmen und Box-Schatten in Aktion

Dieses Beispiel von Rahmen, Hintergründen und Box-Schatten besteht aus zentrierten Hintergrundbildern, die aus linearen und radialen Verläufen bestehen. Eine Serie von Box-Schatten lässt den Rahmen „poppen“. Das Element auf der linken Seite hat ein Rahmenbild gesetzt. Das Element auf der rechten Seite hat einen abgerundeten, gepunkteten Rahmen.

{{EmbedGHLiveSample("css-examples/modules/backgrounds.html", '100%', 430)}}

Die Hintergrundbilder werden mit {{cssxref("background-image")}} definiert. Die Bilder werden mit {{cssxref("background-position")}} zentriert. Unterschiedliche Werte der {{cssxref("background-clip")}}-Eigenschaft für die mehreren Hintergrundbilder werden verwendet, um die Hintergrundbilder innerhalb der Inhaltsbox zu halten. Die Hintergrundfarbe wird zur Polsterbox zugeschnitten, um zu verhindern, dass der Hintergrund durch die transparenten Bereiche für das {{cssxref("border-image")}} und den {{cssxref("border-style", "dotted")}} {{cssxref("border")}} erscheint. Die abgerundeten Ecken im Element auf der rechten Seite werden mit der {{cssxref("border-radius")}}-Eigenschaft erstellt. Eine einzige {{cssxref("box-shadow")}}-Deklaration wird verwendet, um alle Schatten festzulegen, sowohl Innen- als auch Außenschatten.

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

- [CSS lernen: Hintergründe und Rahmen](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
  - : Erklärt, wie dekorative Bilder mit CSS-Hintergrundbildern implementiert werden.
- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
  - : Erklärt, wie man ein oder mehrere Hintergründe auf ein Element setzt.
- [Hintergrundbilder skalieren](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images)
  - : Beschreibt, wie Sie die Größe und das Wiederholverhalten von Hintergrundbildern ändern können.
- [CSS lernen: das Box-Modell](/de/docs/Learn/CSS/Building_blocks/The_box_model)
  - : Erklärt, wie Rahmen zusammen mit anderen Box-Modell-Eigenschaften das CSS-Box-Modell beeinflussen.
- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
  - : Erklärt, wie CSS-Verlaufs-Hintergrundbilder erstellt werden.

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

- Interaktive Werkzeuge, mit denen Sie visuell Rahmenbilder, abgerundete Ecken und Box-Schatten erstellen können:
  - [Border-Image-Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-image_generator)
  - [Border-Radius-Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-radius_generator)
  - [Box-Shadow-Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Box-shadow_generator)
- [Farbe auf HTML-Elemente mit CSS anwenden](/de/docs/Web/CSS/CSS_colors/Applying_color), einschließlich für Rahmen.
- Die [`drop-shadow()`](/de/docs/Web/CSS/filter-function/drop-shadow) Filterfunktion, die einen Schlagschatteneffekt auf das Eingabebild anwendet. Die Funktion wird durch die {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} Eigenschaften verwendet.
