---
title: CSS-Hintergründe und Rahmen
short-title: Hintergründe und Rahmen
slug: Web/CSS/Guides/Backgrounds_and_borders
l10n:
  sourceCommit: ca5d9f9e63b460fc0c9e15ac57d9739e10e4ea0d
---

Das **CSS backgrounds and borders**-Modul bietet Eigenschaften zum Hinzufügen von Hintergründen, Rahmen, abgerundeten Ecken und Box-Schatten zu Elementen.

Sie können verschiedene Arten von Rahmenstilen hinzufügen, einschließlich Rahmen, die aus Bildern beliebigen Typs bestehen, von Rasterbildern bis hin zu CSS-Verläufen. Rahmen können quadratisch oder abgerundet sein, und für jede Ecke kann ein anderer Radius festgelegt werden. Elemente können abgerundet sein, unabhängig davon, ob sie einen sichtbaren Rahmen haben oder nicht.

Box-Schatten umfassen Ein- und Aus-Schattierungen, einzelne oder mehrere Schatten, und können solid oder mit Übergang zu transparent gestaltet sein. Ein äußerer Box-Schatten wirft einen Schatten, als ob der border-box des Elements undurchsichtig wäre. Ein innerer Box-Schatten wirft einen Schatten, als ob alles außerhalb der padding-Kante undurchsichtig wäre. Der Schatten kann solid sein oder eine Ausbreitungsdistanz enthalten, bei der die Schattenfarbe zu transparent übergeht.

Die Eigenschaften in diesem Modul ermöglichen es Ihnen auch zu definieren, ob Zellen innerhalb einer {{HTMLElement("table")}} gemeinsame oder separate Rahmen haben sollten.

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
- {{cssxref("background")}} Kurzschreibweise
- {{cssxref("background-position-x")}}
- {{cssxref("background-position-y")}}
- {{cssxref("border-bottom-color")}}
- {{cssxref("border-bottom-style")}}
- {{cssxref("border-bottom-width")}}
- {{cssxref("border-bottom")}} Kurzschreibweise
- {{cssxref("border-left-color")}}
- {{cssxref("border-left-style")}}
- {{cssxref("border-left-width")}}
- {{cssxref("border-left")}} Kurzschreibweise
- {{cssxref("border-right-color")}}
- {{cssxref("border-right-style")}}
- {{cssxref("border-right-width")}}
- {{cssxref("border-right")}} Kurzschreibweise
- {{cssxref("border-top-color")}}
- {{cssxref("border-top-style")}}
- {{cssxref("border-top-width")}}
- {{cssxref("border-top")}} Kurzschreibweise
- {{cssxref("border-color")}} Kurzschreibweise
- {{cssxref("border-style")}} Kurzschreibweise
- {{cssxref("border-width")}} Kurzschreibweise
- {{cssxref("border")}} Kurzschreibweise
- {{cssxref("border-bottom-left-radius")}}
- {{cssxref("border-bottom-right-radius")}}
- {{cssxref("border-top-left-radius")}}
- {{cssxref("border-top-right-radius")}}
- {{cssxref("border-radius")}} Kurzschreibweise
- {{cssxref("border-image-outset")}}
- {{cssxref("border-image-repeat")}}
- {{cssxref("border-image-slice")}}
- {{cssxref("border-image-source")}}
- {{cssxref("border-image-width")}}
- {{cssxref("border-image")}} Kurzschreibweise
- {{cssxref("box-shadow")}}

Das CSS backgrounds-Modul Level 4 führt auch die Eigenschaften `background-position-block`, `background-position-inline`, `background-repeat-block`, `background-repeat-inline`, `background-repeat-x`, `background-repeat-y` und `background-tbd` ein. Derzeit unterstützen keine Browser diese Funktionen.

### Datentypen

- {{cssxref("line-style")}} enumerierter Typ

## Leitfäden

- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
  - : Festlegen eines oder mehrerer Hintergründe für ein Element.
- [Hintergrundbilder skalieren](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Resizing_background_images)
  - : Ändern der Größe und Wiederholungsverhalten von Hintergrundbildern.
- [Skalierung von SVG-Hintergründen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Scaling_SVG_backgrounds)
  - : Wie das SVG-Seitenverhältnis, SVG-Dimensionen und die CSS-Eigenschaft `background-size` die Skalierung von SVG-Hintergrundbildern beeinflussen.
- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients)
  - : Erstellung von CSS-Verläufen und deren Verwendung als Hintergrundbilder.
- [Lernen Sie CSS: Hintergrund und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
  - : Lernen Sie, wie Sie dekorative Bilder mit CSS-Hintergrundbildern implementieren.
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

## Beispiele

### Hintergründe, Rahmen und Box-Schatten in Aktion

Dieses Beispiel von Rahmen, Hintergründen und Box-Schatten besteht aus zentrierten Hintergrundbildern, die aus linearen und radialen Verläufen bestehen. Eine Reihe von Box-Schatten lässt den Rahmen "herausspringen". Das Element links hat ein Rahmenbild gesetzt. Das Element rechts hat einen abgerundeten gepunkteten Rahmen.

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

Die Hintergrundbilder sind mit {{cssxref("background-image")}} definiert. Die Bilder sind mit {{cssxref("background-position")}} zentriert. Verschiedene Werte der Eigenschaft {{cssxref("background-clip")}} für die mehreren Hintergrundbilder werden verwendet, um die Hintergrundbilder innerhalb des content-box zu halten. Die Hintergrundfarbe wird zum padding-box abgeschnitten, um zu verhindern, dass der Hintergrund durch die transparenten Bereiche für die {{cssxref("border-image")}} und den {{cssxref("border-style", "dotted")}} {{cssxref("border")}} erscheint. Die abgerundeten Ecken im Element rechts werden mit der Eigenschaft {{cssxref("border-radius")}} erstellt. Eine einzelne {{cssxref("box-shadow")}}-Deklaration wird verwendet, um alle Schatten sowohl einwärts als auch auswärts festzulegen.

Klicken Sie im obigen Beispiel auf "Play", um den Code für die Animation im MDN Playground anzuzeigen oder zu bearbeiten.

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{cssxref("filter")}}
- {{cssxref("backdrop-filter")}}
- [`drop-shadow()`](/de/docs/Web/CSS/Reference/Values/filter-function/drop-shadow) Filterfunktion
- [Anwenden von Farben auf HTML-Elemente mit CSS](/de/docs/Web/CSS/Guides/Colors/Applying_color)
- Werkzeuge:
  - [Border-Image-Generator](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-image_generator)
  - [Border-Radius-Generator](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-radius_generator)
  - [Box-Shadow-Generator](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Box-shadow_generator)
