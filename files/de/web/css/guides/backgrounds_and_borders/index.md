---
title: CSS-Hintergründe und -Rahmen
short-title: Hintergründe und Rahmen
slug: Web/CSS/Guides/Backgrounds_and_borders
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

Das **CSS-Hintergründe und -Rahmen**-Modul bietet Eigenschaften, um Elementen Hintergründe, Rahmen, abgerundete Ecken und Schatten hinzuzufügen.

Sie können verschiedene Arten von Rahmenstilen hinzufügen, einschließlich Rahmen, die aus Bildern jeder Bildart, von Rasterbildern bis hin zu CSS-Verläufen, bestehen. Rahmen können quadratisch oder abgerundet sein, und für jede Ecke kann ein unterschiedlicher Radius festgelegt werden. Elemente können unabhängig davon abgerundet werden, ob sie einen sichtbaren Rahmen haben oder nicht.

Box-Schatten umfassen eingefügte und herausgesetzte Schatten, einzelne oder mehrere Schatten, die fest oder erlaubt sind, auf transparent zu verblassen. Ein äußerer Box-Schatten wirft einen Schatten, als ob der Rahmenkasten des Elements undurchsichtig wäre. Ein innerer Box-Schatten wirft einen Schatten, als ob alles außerhalb der Polsterkante undurchsichtig wäre. Der Schatten kann fest sein oder eine Ausbreitungsdistanz umfassen, mit der Schattenfarbe, die zu transparent übergeht.

Die Eigenschaften in diesem Modul ermöglichen es Ihnen auch zu definieren, ob Zellen innerhalb eines {{HTMLElement("table")}} gemeinsame oder separate Rahmen haben sollen.

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
- {{cssxref("background")}} Kurzschrift
- {{cssxref("background-position-x")}}
- {{cssxref("background-position-y")}}
- {{cssxref("border-bottom-color")}}
- {{cssxref("border-bottom-style")}}
- {{cssxref("border-bottom-width")}}
- {{cssxref("border-bottom")}} Kurzschrift
- {{cssxref("border-left-color")}}
- {{cssxref("border-left-style")}}
- {{cssxref("border-left-width")}}
- {{cssxref("border-left")}} Kurzschrift
- {{cssxref("border-right-color")}}
- {{cssxref("border-right-style")}}
- {{cssxref("border-right-width")}}
- {{cssxref("border-right")}} Kurzschrift
- {{cssxref("border-top-color")}}
- {{cssxref("border-top-style")}}
- {{cssxref("border-top-width")}}
- {{cssxref("border-top")}} Kurzschrift
- {{cssxref("border-color")}} Kurzschrift
- {{cssxref("border-style")}} Kurzschrift
- {{cssxref("border-width")}} Kurzschrift
- {{cssxref("border")}} Kurzschrift
- {{cssxref("border-bottom-left-radius")}}
- {{cssxref("border-bottom-right-radius")}}
- {{cssxref("border-top-left-radius")}}
- {{cssxref("border-top-right-radius")}}
- {{cssxref("border-radius")}} Kurzschrift
- {{cssxref("border-image-outset")}}
- {{cssxref("border-image-repeat")}}
- {{cssxref("border-image-slice")}}
- {{cssxref("border-image-source")}}
- {{cssxref("border-image-width")}}
- {{cssxref("border-image")}} Kurzschrift
- {{cssxref("box-shadow")}}

Das CSS-Hintergründe-Modul Level 4 führt auch die Eigenschaften `background-position-block`, `background-position-inline`, `background-repeat-block`, `background-repeat-inline`, `background-repeat-x`, `background-repeat-y` und `background-tbd` ein. Derzeit werden diese Funktionen von keinen Browsern unterstützt.

### Datentypen

- {{cssxref("line-style")}} aufgezählter Typ

## Leitfäden

- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
  - : Festlegung von einem oder mehreren Hintergründen auf einem Element.
- [Hintergrundbilder skalieren](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Resizing_background_images)
  - : Ändern der Größe und des Wiederholungsverhaltens von Hintergrundbildern.
- [SVG-Hintergründe skalieren](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Scaling_SVG_backgrounds)
  - : Wie das SVG-Seitenverhältnis, die SVG-Dimensionen und die CSS-`background-size`-Eigenschaft die Skalierung von SVG-Hintergrundbildern beeinflussen.
- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients)
  - : Erstellen von CSS-Verläufen und deren Verwendung als Hintergrundbilder.
- [CSS lernen: Hintergrund und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
  - : Lernen, wie dekorative Bilder mit CSS-Hintergrundbildern implementiert werden.
- [CSS lernen: das Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)
  - : Lernen, wie Rahmen und andere Box-Modell-Eigenschaften das CSS-Box-Modell beeinflussen.

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

Dieses Beispiel von Rahmen, Hintergründen und Box-Schatten besteht aus zentrierten Hintergrundbildern, die aus linearen und radialen Verläufen bestehen. Eine Serie von Box-Schatten lässt den Rahmen "herauspoppen". Das Element links hat ein Rahmenbild gesetzt. Das Element rechts hat einen abgerundeten gepunkteten Rahmen.

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

Die Hintergrundbilder sind mit {{cssxref("background-image")}} definiert. Die Bilder sind mit {{cssxref("background-position")}} zentriert. Verschiedene Werte der {{cssxref("background-clip")}}-Eigenschaft für die mehreren Hintergrundbilder werden verwendet, um die Hintergrundbilder innerhalb des Inhaltskastens zu halten. Die Hintergrundfarbe wird auf die Polsterbox geklippt, um zu verhindern, dass der Hintergrund durch die transparenten Abschnitte für das {{cssxref("border-image")}} und den {{cssxref("border-style", "dotted")}} {{cssxref("border")}} erscheint. Die abgerundeten Ecken im Element rechts werden mit der Eigenschaft {{cssxref("border-radius")}} erstellt. Eine einzelne {{cssxref("box-shadow")}}-Deklaration wird verwendet, um alle Schatten einzustellen, sowohl eingefügt als auch herausgesetzt.

Klicken Sie auf "Play" im obigen Beispiel, um den Code für die Animation im MDN Playground zu sehen oder zu bearbeiten.

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{cssxref("filter")}}
- {{cssxref("backdrop-filter")}}
- [`drop-shadow()`](/de/docs/Web/CSS/Reference/Values/filter-function/drop-shadow) Filterfunktion
- [Farbe auf HTML-Elemente anwenden mit CSS](/de/docs/Web/CSS/Guides/Colors/Applying_color)
- [Rahmenbilderzeuger](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-image_generator)
- [Radius-Erzeuger für Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-radius_generator)
- [Box-Schatten-Erzeuger](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Box-shadow_generator)
