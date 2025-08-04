---
title: CSS-Hintergründe und -Ränder
slug: Web/CSS/CSS_backgrounds_and_borders
l10n:
  sourceCommit: bc761c19c07b875eb889d4aad87b18d8443da339
---

Das **CSS-Hintergründe und -Ränder** Modul bietet Eigenschaften zum Hinzufügen von Hintergründen, Rändern, abgerundeten Ecken und Box-Schatten zu Elementen.

Sie können verschiedene Arten von Randstilen hinzufügen, einschließlich Ränder aus Bildern jeglichen Bildtyps, von Rasterbildern bis hin zu CSS-Verläufen. Ränder können eckig oder abgerundet sein, und ein unterschiedlicher Radius kann für jede Ecke festgelegt werden. Elemente können abgerundet sein, unabhängig davon, ob sie einen sichtbaren Rand haben oder nicht.

Box-Schatten umfassen eingefügte und herausragende Schatten, einfache oder mehrere Schatten, und können solide oder bis zur Transparenz auslaufen. Ein äußerer Box-Schatten wirft einen Schatten, als ob das Border-Box-Element undurchsichtig wäre. Ein innerer Box-Schatten wirft einen Schatten, als ob alles außerhalb der Padding-Kante undurchsichtig wäre. Der Schatten kann solide sein oder einen Ausbreitungsabstand mit dem Schattenfarbverlauf zur Transparenz einschließen.

Die Eigenschaften in diesem Modul ermöglichen es Ihnen auch, zu definieren, ob Zellen in einem {{HTMLElement("table")}} gemeinsame oder separate Ränder haben sollen.

### Hintergründe, Ränder und Box-Schatten in Aktion

Dieses Beispiel von Rändern, Hintergründen und Box-Schatten besteht aus zentrierten Hintergrundbildern, die aus linearen und radialen Verläufen bestehen. Eine Reihe von Box-Schatten sorgt dafür, dass der Rand zu „poppen“ scheint. Das Element links hat ein Randbild gesetzt. Das Element rechts hat einen abgerundeten gepunkteten Rand.

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

Die Hintergrundbilder werden mit {{cssxref("background-image")}} definiert. Die Bilder werden mit {{cssxref("background-position")}} zentriert. Verschiedene Werte der {{cssxref("background-clip")}} Eigenschaft für die mehrere Hintergrundbilder werden verwendet, um die Hintergrundbilder innerhalb der Content-Box zu halten. Die Hintergrundfarbe wird auf die Padding-Box zugeschnitten, um zu verhindern, dass der Hintergrund durch die transparenten Bereiche für das {{cssxref("border-image")}} und den {{cssxref("border-style", "dotted")}} {{cssxref("border")}} erscheint. Die abgerundeten Ecken des rechten Elements werden mit der {{cssxref("border-radius")}} Eigenschaft erstellt. Eine einzige {{cssxref("box-shadow")}} Deklaration wird verwendet, um alle Schatten, sowohl eingefügte als auch herausragende, festzulegen.

Klicken Sie auf „Play“ im obigen Beispiel, um den Code für die Animation im MDN Playground zu sehen oder zu bearbeiten.

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

Das CSS-Hintergründe-Modul Level 4 führt auch die `background-position-block`, `background-position-inline`, `background-repeat-block`, `background-repeat-inline`, `background-repeat-x`, `background-repeat-y` und `background-tbd` Eigenschaften ein. Derzeit unterstützen keine Browser diese Funktionen.

### Datentypen

- {{cssxref("line-style")}} aufzählbarer Typ

## Leitfäden

- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
  - : Festlegen von einem oder mehreren Hintergründen auf einem Element.
- [Hintergrundbilder skalieren](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images)
  - : Ändern der Größe und des Wiederholungsverhaltens von Hintergrundbildern.
- [Skalieren von SVG-Hintergründen](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Scaling_of_SVG_backgrounds)
  - : Wie das SVG-Seitenverhältnis, die SVG-Dimensionen und die CSS `background-size` Eigenschaft die Skalierung von SVG-Hintergrundbildern beeinflussen.
- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
  - : Erstellen von CSS-Verläufen und deren Verwendung als Hintergrundbilder.
- [Lernen Sie CSS: Hintergrund und Ränder](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
  - : Lernen Sie, wie Sie dekorative Bilder mithilfe von CSS-Hintergrundbildern implementieren.
- [Lernen Sie CSS: das Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)
  - : Lernen Sie, wie sich Ränder und andere Box-Model-Eigenschaften auf das CSS-Box-Modell auswirken.

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
- [Anwenden von Farben auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)
- [Randbildgenerator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-image_generator)
- [Randradiusgenerator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-radius_generator)
