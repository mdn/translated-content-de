---
title: CSS Hintergründe und Rahmen
short-title: Hintergründe und Rahmen
slug: Web/CSS/Guides/Backgrounds_and_borders
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **CSS-Hintergründe und Rahmen** Modul bietet Eigenschaften zum Hinzufügen von Hintergründen, Rahmen, abgerundeten Ecken und Box-Schatten zu Elementen.

Sie können verschiedene Arten von Rahmenstilen hinzufügen, einschließlich Rahmen, die aus Bildern jedes Bildtyps bestehen können, von Rasterbildern bis zu CSS-Verläufen. Rahmen können eckig oder abgerundet sein, und für jede Ecke kann ein anderer Radius festgelegt werden. Elemente können abgerundet werden, unabhängig davon, ob sie einen sichtbaren Rahmen haben oder nicht.

Box-Schatten umfassen ein- und ausgehende Schatten, einzelne oder mehrfache Schatten, entweder solide oder sie verblassen zu transparent. Ein äußerer Box-Schatten wirft einen Schatten, als ob der Border-Box des Elements undurchsichtig wäre. Ein innerer Box-Schatten wirft einen Schatten, als ob alles außerhalb der Padding-Kante undurchsichtig wäre. Der Schatten kann solide sein oder eine Ausbreitungsdistanz einschließen, bei der die Schattenfarbe zu transparent übergeht.

Die Eigenschaften in diesem Modul erlauben es Ihnen auch zu definieren, ob Zellen in einer {{HTMLElement("table")}} gemeinsame oder separate Rahmen haben sollen.

### Hintergründe, Rahmen und Box-Schatten in Aktion

Dieses Beispiel von Rahmen, Hintergründen und Box-Schatten besteht aus zentrierten Hintergrundbildern, die aus linearen und radialen Verläufen bestehen. Eine Reihe von Box-Schatten lässt den Rahmen hervorstechen. Das Element links hat ein Rahmenbild gesetzt. Das Element rechts hat einen abgerundeten, gepunkteten Rahmen.

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
  border: dotted 15px; /* defaults to `currentColor` */
  border-radius: 100px 0;
  background-image:
    radial-gradient(
      circle,
      transparent 60%,
      currentColor 60% 70%,
      transparent 70%
    ),
    linear-gradient(45deg, currentColor, white),
    linear-gradient(transparent, transparent);
  /* the third transparent background image was added to provide space for the background color to show through */
  background-color: currentColor;
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

Die Hintergrundbilder sind mit {{cssxref("background-image")}} definiert. Die Bilder sind mit {{cssxref("background-position")}} zentriert. Verschiedene Werte der {{cssxref("background-clip")}}-Eigenschaft für die mehreren Hintergrundbilder werden verwendet, um sicherzustellen, dass die Hintergrundbilder im Inhaltsfeld bleiben. Die Hintergrundfarbe wird auf die Padding-Box abgeschnitten, um zu verhindern, dass der Hintergrund durch die transparenten Bereiche für das {{cssxref("border-image")}} und den {{cssxref("border-style", "dotted")}} {{cssxref("border")}} erscheint. Die abgerundeten Ecken im Element rechts werden mit der {{cssxref("border-radius")}}-Eigenschaft erstellt. Eine einzelne {{cssxref("box-shadow")}}-Deklaration wird verwendet, um alle Schatten, sowohl ein- als auch ausgehend, zu setzen.

Klicken Sie auf "Play" im obigen Beispiel, um den Code für die Animation im MDN Playground anzuzeigen oder zu bearbeiten.

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

Das CSS-Hintergründe-Modul Level 4 führt auch die Eigenschaften `background-position-block`, `background-position-inline`, `background-repeat-block`, `background-repeat-inline`, `background-repeat-x`, `background-repeat-y` und `background-tbd` ein. Derzeit unterstützen keine Browser diese Funktionen.

### Datentypen

- {{cssxref("line-style")}} enumerierter Typ

## Leitfäden

- [Verwenden mehrerer Hintergründe](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
  - : Ein oder mehrere Hintergründe auf ein Element setzen.
- [Größenanpassung von Hintergrundbildern](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Resizing_background_images)
  - : Größe und Wiederholungsverhalten von Hintergrundbildern ändern.
- [Skalierung von SVG-Hintergründen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Scaling_SVG_backgrounds)
  - : Wie das SVG-Seitenverhältnis, SVG-Dimensionierungswerte und die CSS `background-size`-Eigenschaft die Skalierung von SVG-Hintergrundbildern beeinflussen.
- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients)
  - : Erstellen von CSS-Verläufen und deren Verwendung als Hintergrundbilder.
- [Lernen Sie CSS: Hintergrund und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
  - : Lernen Sie, wie Sie dekorative Bilder mit CSS-Hintergrundbildern umsetzen.
- [Lernen Sie CSS: Das Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)
  - : Lernen Sie, wie Rahmen und andere Box-Modell-Eigenschaften das CSS-Box-Modell beeinflussen.

## Verwandte Konzepte

- {{cssxref("border-block-end-color")}}
- {{cssxref("border-block-start-color")}}
- {{cssxref("border-inline-end-color")}}
- {{cssxref("border-inline-start-color")}}
- {{cssxref("border-block-end-style")}}
- {{cssxref("border-block-start-style")}}
- {{cssxref("border-inline-end-style")}}
- {{cssxref("border-inline-start-style")}}
- {{cssxref("border-block-end-width")}}
- {{cssxref("border-block-start-width")}}
- {{cssxref("border-inline-end-width")}}
- {{cssxref("border-inline-start-width")}}
- {{cssxref("border-start-start-radius")}}
- {{cssxref("border-start-end-radius")}}
- {{cssxref("border-end-start-radius")}}
- {{cssxref("border-end-end-radius")}}
- {{cssxref("box-sizing")}}
- {{cssxref("box-decoration-break")}}
- {{cssxref("text-shadow")}}
- {{cssxref("url_value", "&lt;url&gt;")}} Datentyp
- {{cssxref("url")}} Datentyp
- {{cssxref("image")}} Datentyp
- {{cssxref("position")}} Datentyp
- [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword) Schlüsselwort

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{cssxref("filter")}}
- {{cssxref("backdrop-filter")}}
- [`drop-shadow()`](/de/docs/Web/CSS/Reference/Values/filter-function/drop-shadow) Filterfunktion
- [Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/Guides/Colors/Applying_color)
- [Border-Image-Generator](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-image_generator)
- [Border-Radius-Generator](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-radius_generator)
