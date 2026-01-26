---
title: CSS-Hintergrund und -Ränder
short-title: Hintergründe und Ränder
slug: Web/CSS/Guides/Backgrounds_and_borders
l10n:
  sourceCommit: d8022a15df88029e3ff0cd7b7474bd3c43a2e25e
---

Das **CSS-Hintergrund und -Ränder** Modul bietet Eigenschaften zum Hinzufügen von Hintergründen, Rändern, abgerundeten Ecken und Box-Schatten zu Elementen.

Sie können verschiedene Arten von Randstilen hinzufügen, einschließlich Rändern, die aus Bildern jeder Bildart bestehen, von Rasterbildern bis hin zu CSS-Verläufen. Ränder können quadratisch oder abgerundet sein, und ein unterschiedlicher Radius kann für jede Ecke festgelegt werden. Elemente können abgerundet werden, unabhängig davon, ob sie einen sichtbaren Rand haben oder nicht.

Box-Schatten umfassen innere und äußere Schatten, einzelne oder mehrere Schatten, und können solide oder allmählich transparent werden. Ein äußerer Box-Schatten wirft einen Schatten, als ob die Border-Box des Elements opak wäre. Ein innerer Box-Schatten wirft einen Schatten, als ob alles außerhalb des Polsterrands opak wäre. Der Schatten kann solide sein oder eine Ausbreitungsdistanz mit einer Farbüberblendung zum Transparenten enthalten.

Die Eigenschaften in diesem Modul erlauben es Ihnen auch zu definieren, ob Zellen innerhalb eines {{HTMLElement("table")}} gemeinsame oder separate Ränder haben sollen.

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
- {{cssxref("background-repeat")}} Kurzform
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

Das CSS-Hintergrund Modul Level 4 führt auch die Eigenschaften `background-position-block`, `background-position-inline`, `background-repeat-block`, `background-repeat-inline` und `background-tbd` ein. Derzeit unterstützen keine Browser diese Funktionen.

### Datentypen

- {{cssxref("line-style")}} Aufzähldatentyp

## Leitfäden

- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
  - : Ein oder mehrere Hintergründe auf einem Element einstellen.
- [Hintergrundbilder skalieren](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Resizing_background_images)
  - : Die Größe und das Wiederholverhalten von Hintergrundbildern ändern.
- [SVG-Hintergründe skalieren](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Scaling_SVG_backgrounds)
  - : Wie das SVG-Seitenverhältnis, SVG-Dimensionen und die CSS-Eigenschaft `background-size` das Skalieren von SVG-Hintergrundbildern beeinflussen.
- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients)
  - : CSS-Verläufe erstellen und als Hintergrundbilder verwenden.
- [Lernen Sie CSS: Hintergrund und Ränder](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
  - : Lernen Sie, wie Sie dekorative Bilder mit CSS-Hintergrundbildern implementieren.
- [Lernen Sie CSS: das Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)
  - : Lernen Sie, wie Ränder und andere Boxmodell-Eigenschaften das CSS-Box-Modell beeinflussen.

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

### Hintergründe, Ränder und Box-Schatten im Einsatz

Dieses Beispiel von Rändern, Hintergründen und Box-Schatten besteht aus zentrierten Hintergrundbildern aus linearen und radialen Verläufen. Eine Reihe von Box-Schatten lässt den Rand hervortreten. Das Element links hat ein Randbild eingestellt. Das Element rechts hat einen abgerundeten gepunkteten Rand.

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

Die Hintergrundbilder werden mit {{cssxref("background-image")}} definiert. Die Bilder sind mit {{cssxref("background-position")}} zentriert. Verschiedene Werte der {{cssxref("background-clip")}} Eigenschaft für die mehreren Hintergrundbilder werden verwendet, um die Hintergrundbilder innerhalb der Inhaltsbox zu halten. Die Hintergrundfarbe wird auf die Polsterbox zugeschnitten, um zu verhindern, dass der Hintergrund durch die transparenten Abschnitte für das {{cssxref("border-image")}} und der {{cssxref("border-style", "dotted")}} {{cssxref("border")}} erscheint. Die abgerundeten Ecken im rechten Element werden mit der {{cssxref("border-radius")}} Eigenschaft erstellt. Eine einzige {{cssxref("box-shadow")}} Deklaration wird verwendet, um alle Schatten einzustellen, sowohl inneren als auch äußeren.

Klicken Sie im obigen Beispiel auf "Play", um den Code für die Animation im MDN Playground zu sehen oder zu bearbeiten.

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{cssxref("filter")}}
- {{cssxref("backdrop-filter")}}
- [`drop-shadow()`](/de/docs/Web/CSS/Reference/Values/filter-function/drop-shadow) Filterfunktion
- [Farbe auf HTML-Elemente mit CSS anwenden](/de/docs/Web/CSS/Guides/Colors/Applying_color)
- Tools:
  - [Randbild-Generator](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-image_generator)
  - [Randradius-Generator](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-radius_generator)
  - [Box-Schatten-Generator](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Box-shadow_generator)
