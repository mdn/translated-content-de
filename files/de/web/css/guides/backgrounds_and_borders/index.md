---
title: CSS-Hintergründe und Rahmen
short-title: Hintergründe und Rahmen
slug: Web/CSS/Guides/Backgrounds_and_borders
l10n:
  sourceCommit: f9761309e0fe3f22822e63903439d8d6130b535f
---

Das **CSS backgrounds and borders** Modul stellt Eigenschaften zur Verfügung, um Elementen Hintergründe, Rahmen, abgerundete Ecken und Box-Schatten hinzuzufügen.

Sie können verschiedene Arten von Rahmenstilen hinzufügen, einschließlich Rahmen aus Bildern jeglichen Bildtyps, von Rasterbildern bis hin zu CSS-Verläufen. Rahmen können eckig oder abgerundet sein, und für jede Ecke kann ein anderer Radius festgelegt werden. Elemente können abgerundet sein, unabhängig davon, ob sie einen sichtbaren Rahmen haben.

Box-Schatten beinhalten innere und äußere Schatten, einzelne oder mehrere Schatten, und sie können fest oder mit einem Farbverlauf zu transparent sein. Ein äußerer Box-Schatten wirft einen Schatten, als ob das border-box des Elements undurchsichtig wäre. Ein innerer Box-Schatten wirft einen Schatten, als ob alles außerhalb der padding-Kante undurchsichtig wäre. Der Schatten kann fest sein oder eine Ausdehnungsdistanz beinhalten, bei der der Schattenfarbverlauf zu transparent übergeht.

Die Eigenschaften in diesem Modul lassen Sie außerdem definieren, ob Zellen innerhalb eines {{HTMLElement("table")}} gemeinsame oder getrennte Rahmen haben sollen.

## Hintergründe, Rahmen und Box-Schatten in Aktion

Dieses Beispiel von Rahmen, Hintergründen und Box-Schatten besteht aus zentrierten Hintergrundbildern, die aus linearen und radialen Verläufen bestehen. Eine Reihe von Box-Schatten lässt den Rahmen "herausspringen". Das Element auf der linken Seite hat ein Rahmenbild gesetzt. Das Element auf der rechten Seite hat einen abgerundeten gepunkteten Rahmen.

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

Die Hintergrundbilder werden mit {{cssxref("background-image")}} definiert. Die Bilder werden mit {{cssxref("background-position")}} zentriert. Verschiedene Werte der {{cssxref("background-clip")}}-Eigenschaft werden für die mehreren Hintergrundbilder verwendet, um sie innerhalb der Inhaltsbox zu halten. Die Hintergrundfarbe wird auf die padding-Box zugeschnitten, um zu verhindern, dass der Hintergrund durch die transparenten Abschnitte für das {{cssxref("border-image")}} und das {{cssxref("border-style", "dotted")}} {{cssxref("border")}} erscheint. Die abgerundeten Ecken im Element auf der rechten Seite werden mit der {{cssxref("border-radius")}}-Eigenschaft erstellt. Eine einzelne {{cssxref("box-shadow")}}-Deklaration wird verwendet, um alle Schatten, sowohl innen als auch außen, festzulegen.

## Referenz

### Eigenschaften

- {{cssxref("background-attachment")}}
- {{cssxref("background-clip")}}
- {{cssxref("background-color")}}
- {{cssxref("background-image")}}
- {{cssxref("background-origin")}}
- {{cssxref("background-position")}}
- {{cssxref("background-repeat-x")}}
- {{cssxref("background-repeat-y")}}
- {{cssxref("background-repeat")}} Shorthand
- {{cssxref("background-size")}}
- {{cssxref("background")}} Shorthand
- {{cssxref("background-position-x")}}
- {{cssxref("background-position-y")}}
- {{cssxref("border-bottom-color")}}
- {{cssxref("border-bottom-style")}}
- {{cssxref("border-bottom-width")}}
- {{cssxref("border-bottom")}} Shorthand
- {{cssxref("border-left-color")}}
- {{cssxref("border-left-style")}}
- {{cssxref("border-left-width")}}
- {{cssxref("border-left")}} Shorthand
- {{cssxref("border-right-color")}}
- {{cssxref("border-right-style")}}
- {{cssxref("border-right-width")}}
- {{cssxref("border-right")}} Shorthand
- {{cssxref("border-top-color")}}
- {{cssxref("border-top-style")}}
- {{cssxref("border-top-width")}}
- {{cssxref("border-top")}} Shorthand
- {{cssxref("border-color")}} Shorthand
- {{cssxref("border-style")}} Shorthand
- {{cssxref("border-width")}} Shorthand
- {{cssxref("border")}} Shorthand
- {{cssxref("border-bottom-left-radius")}}
- {{cssxref("border-bottom-right-radius")}}
- {{cssxref("border-top-left-radius")}}
- {{cssxref("border-top-right-radius")}}
- {{cssxref("border-radius")}} Shorthand
- {{cssxref("border-image-outset")}}
- {{cssxref("border-image-repeat")}}
- {{cssxref("border-image-slice")}}
- {{cssxref("border-image-source")}}
- {{cssxref("border-image-width")}}
- {{cssxref("border-image")}} Shorthand
- {{cssxref("box-shadow")}}

Das CSS backgrounds Modul Level 4 führt auch die `background-position-block`, `background-position-inline`, `background-repeat-block`, `background-repeat-inline` und `background-tbd` Eigenschaften ein. Derzeit werden diese Funktionen von keinem Browser unterstützt.

### Datentypen

- {{cssxref("line-style")}} aufgezählter Typ

## Leitfäden

- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
  - : Ein oder mehrere Hintergründe auf ein Element setzen.
- [Größe von Hintergrundbildern ändern](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Resizing_background_images)
  - : Ändert das Größen- und Wiederholungsverhalten von Hintergrundbildern.
- [SVG-Hintergründe skalieren](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Scaling_SVG_backgrounds)
  - : Wie svg-Seitenverhältnis, SVG-Dimensionswerte und die CSS-Eigenschaft `background-size` die Skalierung von SVG-Hintergrundbildern beeinflussen.
- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients)
  - : Erstellen von CSS-Verläufen und deren Verwendung als Hintergrundbilder.
- [CSS lernen: Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
  - : Lernen Sie, wie Sie dekorative Bilder mit CSS-Hintergrundbildern implementieren.
- [CSS lernen: das Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)
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
- [Anwenden von Farben auf HTML-Elemente mit CSS](/de/docs/Web/CSS/Guides/Colors/Applying_color)
- Tools:
  - [Border-Image Generator](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-image_generator)
  - [Border-Radius Generator](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-radius_generator)
  - [Box-Shadow Generator](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Box-shadow_generator)
