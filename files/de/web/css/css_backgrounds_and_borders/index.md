---
title: CSS Hintergründe und Rahmen
slug: Web/CSS/CSS_backgrounds_and_borders
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

Das **CSS-Hintergründe und Rahmen**-Modul bietet Eigenschaften zum Hinzufügen von Hintergründen, Rahmen, abgerundeten Ecken und Box-Schattierungen zu Elementen.

Sie können verschiedene Arten von Rahmenstilen hinzufügen, einschließlich Rahmen, die aus Bildern jeglichen Bildtyps bestehen, von Rasterbildern bis hin zu CSS-Verläufen. Rahmen können eckig oder abgerundet sein, und es kann ein unterschiedlicher Radius für jede Ecke festgelegt werden. Elemente können abgerundet sein, unabhängig davon, ob sie einen sichtbaren Rahmen haben oder nicht.

Box-Schattierungen umfassen Innen- und Außenschattierungen, einzelne oder mehrere Schattierungen und können solide sein oder mit Transparenz verblassen. Ein äußerer Box-Schatten wirft einen Schatten, als ob die Rahmenbox des Elements undurchsichtig wäre. Ein innerer Box-Schatten wirft einen Schatten, als ob alles außerhalb des Polsterrands undurchsichtig wäre. Der Schatten kann solide sein oder eine Ausbreitungsdistanz mit der Schattenfarbe beinhalten, die in Transparent übergeht.

Die Eigenschaften in diesem Modul ermöglichen es Ihnen auch zu definieren, ob Zellen innerhalb eines {{HTMLElement("table")}} gemeinsame oder separate Rahmen haben sollen.

### Hintergründe, Rahmen und Box-Schattierungen in Aktion

Dieses Beispiel von Rahmen, Hintergründen und Box-Schattierungen besteht aus zentrierten Hintergrundbildern, die aus linearen und radialen Verläufen erstellt wurden. Eine Serie von Box-Schattierungen lässt den Rahmen "hervorstehen". Das Element auf der linken Seite hat ein Rahmenbild gesetzt. Das Element auf der rechten Seite hat einen abgerundeten punktierten Rahmen.

```html hidden live-sample___backgrounds
<article>
  <div></div>
  <div></div>
</article>
```

```css hidden live-sample___backgrounds
article {
  display: flex;
  gap: 10px;
}
div {
  color: #58ade3;
  height: 320px;
  width: 240px;
  padding: 20px;
  margin: 10px;
  border: dotted 15px; /* defaults to `currentcolor` */
  border-radius: 100px 0;
  background-image:
    radial-gradient(
      circle,
      transparent 60%,
      currentcolor 60% 70%,
      transparent 70%
    ),
    linear-gradient(45deg, currentcolor, white),
    linear-gradient(transparent, transparent);
  /* the third transparent background image was added to provide space for the background color to show through */
  background-color: currentcolor;
  background-position: center;
  background-size:
    60px 60px,
    120px 120px;
  background-clip: content-box, content-box, padding-box;
  box-shadow:
    inset 5px 5px 5px rgb(0 0 0 / 0.4),
    inset -5px -5px 5px rgb(0 0 0 / 0.4),
    5px 5px 5px rgb(0 0 0 / 0.4),
    -5px -5px 5px rgb(0 0 0 / 0.4);
}
div:first-of-type {
  border-radius: 0;
  border-image-source: repeating-conic-gradient(
    from 3deg at 25% 25%,
    currentColor 0 3deg,
    transparent 3deg 6deg
  );
  border-image-slice: 30;
}
```

{{EmbedLiveSample("backgrounds", "", "450px")}}

Die Hintergrundbilder werden mit {{cssxref("background-image")}} definiert. Die Bilder sind mit {{cssxref("background-position")}} zentriert. Verschiedene Werte der {{cssxref("background-clip")}}-Eigenschaft für die mehrfachen Hintergrundbilder werden verwendet, um die Hintergrundbilder innerhalb des Inhaltsbereichs zu halten. Die Hintergrundfarbe wird auf die Polsterbox zugeschnitten, um zu verhindern, dass der Hintergrund durch die transparenten Bereiche für das {{cssxref("border-image")}} und das {{cssxref("border-style", "dotted")}} {{cssxref("border")}} erscheint. Die abgerundeten Ecken im Element auf der rechten Seite werden mit der {{cssxref("border-radius")}}-Eigenschaft erstellt. Eine einzige {{cssxref("box-shadow")}}-Deklaration wird verwendet, um alle Schattierungen festzulegen, sowohl innen als auch außen.

Klicken Sie auf "Play" im obigen Beispiel, um den Code für die Animation im MDN Playground zu sehen oder zu bearbeiten.

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

> [!NOTE]
> Das CSS Hintergründe Modul Ebene 4 führt die Eigenschaften `background-position-block`, `background-position-inline`, `background-repeat-block`, `background-repeat-inline`, `background-repeat-x`, `background-repeat-y` und `background-tbd` ein. Diese sind noch nicht implementiert.

### Datentypen

- {{cssxref("line-style")}} enumerierter Typ

## Leitfäden

- [Verwenden von mehreren Hintergründen](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
  - : Festlegen eines oder mehrerer Hintergründe auf einem Element.
- [Größe von Hintergrundbildern ändern](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images)
  - : Ändern der Größe und Wiederholungsverhalten von Hintergrundbildern.
- [Skalierung von SVG-Hintergründen](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Scaling_of_SVG_backgrounds)
  - : Wie das Seitenverhältnis von SVG, SVG-Abmessungswerte und die CSS-Eigenschaft `background-size` die Skalierung von SVG-Hintergrundbildern beeinflussen.
- [Verwenden von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
  - : Erstellen von CSS-Verläufen und deren Verwendung als Hintergrundbilder.
- [Lernen Sie CSS: Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
  - : Lernen Sie, wie Sie dekorative Bilder mit CSS-Hintergrundbildern implementieren.
- [Lernen Sie CSS: Das Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)
  - : Lernen Sie, wie Rahmen und andere Boxmodell-Eigenschaften das CSS-Boxmodell beeinflussen.

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

- {{cssxref("url_value", "&lt;url&gt;")}} CSS-Typ
- [`<color>`](/de/docs/Web/CSS/color) Datentyp
- [`<image>`](/de/docs/Web/CSS/image) Datentyp
- [`<position>`](/de/docs/Web/CSS/position) Datentyp

- [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) Schlüsselwort

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{cssxref("filter")}}
- {{cssxref("backdrop-filter")}}
- [`drop-shadow()`](/de/docs/Web/CSS/filter-function/drop-shadow) Filterfunktion
- [Anwendung von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)
- [Randbild-Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-image_generator)
- [Randradius-Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-radius_generator)
