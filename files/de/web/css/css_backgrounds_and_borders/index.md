---
title: CSS-Hintergründe und -Rahmen
slug: Web/CSS/CSS_backgrounds_and_borders
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Das **CSS backgrounds and borders** Modul bietet Eigenschaften zum Hinzufügen von Hintergründen, Rahmen, abgerundeten Ecken und Box-Schattierungen zu Elementen.

Sie können verschiedene Arten von Rahmenstilen hinzufügen, einschließlich Rahmen aus Bildern jeglichen Bildtyps, von Rasterbildern bis hin zu CSS-Verläufen. Die Rahmen können eckig oder abgerundet sein, und ein unterschiedlicher Radius kann für jede Ecke festgelegt werden. Elemente können abgerundet werden, unabhängig davon, ob sie einen sichtbaren Rahmen haben oder nicht.

Box-Schattierungen umfassen innere und äußere Schatten, einzelne oder mehrere Schatten, und festen oder sich zu transparent verblassenden Schatten. Ein äußerer Box-Schatten wirft einen Schatten, als ob die Border-Box des Elements undurchsichtig wäre. Ein innerer Box-Schatten wirft einen Schatten, als ob alles außerhalb der Polsterkante undurchsichtig wäre. Der Schatten kann fest sein oder eine Verbreitungsdistanz enthalten, bei der die Schattenfarbe zu transparent übergeht.

Die Eigenschaften in diesem Modul erlauben es Ihnen auch zu definieren, ob Zellen innerhalb eines {{HTMLElement("table")}} gemeinsame oder getrennte Rahmen haben sollen.

### Hintergründe, Rahmen und Box-Schattierungen in Aktion

Dieses Beispiel von Rahmen, Hintergründen und Box-Schattierungen besteht aus zentrierten Hintergrundbildern, die aus linearen und radialen Verläufen bestehen. Eine Reihe von Box-Schattierungen lässt den Rahmen "herausspringen". Das Element auf der linken Seite hat ein Rahmenbild gesetzt. Das Element rechts hat einen abgerundeten, gepunkteten Rahmen.

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

Die Hintergrundbilder werden mit {{cssxref("background-image")}} definiert. Die Bilder sind mit {{cssxref("background-position")}} zentriert. Verschiedene Werte der {{cssxref("background-clip")}}-Eigenschaft für die mehrfachen Hintergrundbilder werden verwendet, um die Hintergrundbilder innerhalb des Inhaltsbereichs zu halten. Die Hintergrundfarbe wird auf die Polsterbox beschnitten, was verhindert, dass der Hintergrund durch die transparenten Abschnitte für das {{cssxref("border-image")}} und den {{cssxref("border-style", "gepunkteten")}} {{cssxref("border")}} erscheint. Die abgerundeten Ecken im Element auf der rechten Seite werden mit der {{cssxref("border-radius")}}-Eigenschaft erstellt. Eine einzige {{cssxref("box-shadow")}}-Deklaration wird verwendet, um alle Schatten festzulegen, sowohl innen als auch außen.

Klicken Sie im obigen Beispiel auf "Abspielen", um den Code für die Animation im MDN Playground zu sehen oder zu bearbeiten.

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

Das CSS backgrounds module level 4 führt auch die Eigenschaften `background-position-block`, `background-position-inline`, `background-repeat-block`, `background-repeat-inline`, `background-repeat-x`, `background-repeat-y` und `background-tbd` ein. Derzeit unterstützt kein Browser diese Funktionen.

### Datentypen

- {{cssxref("line-style")}} aufgezählter Typ

## Leitfäden

- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
  - : Ein oder mehrere Hintergründe auf einem Element einstellen.
- [Größe von Hintergrundbildern anpassen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Resizing_background_images)
  - : Änderung der Größe und des Wiederholungsverhaltens von Hintergrundbildern.
- [Skalierung von SVG-Hintergründen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Scaling_SVG_backgrounds)
  - : Wie das SVG-Seitenverhältnis, SVG-Dimensionswerte und die CSS-`background-size`-Eigenschaft die Skalierung von SVG-Hintergrundbildern beeinflussen.
- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients)
  - : Erstellen von CSS-Verläufen und deren Verwendung als Hintergrundbilder.
- [CSS lernen: Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
  - : Lernen, wie dekorative Bilder mit CSS-Hintergrundbildern implementiert werden.
- [CSS lernen: das Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)
  - : Erfahren Sie, wie Rahmen und andere Box-Modell-Eigenschaften das CSS-Box-Modell beeinflussen.

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
- [Farbe auf HTML-Elemente mit CSS anwenden](/de/docs/Web/CSS/Guides/Colors/Applying_color)
- [Rahmenbild-Generator](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-image_generator)
- [Rahmenradius-Generator](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-radius_generator)
