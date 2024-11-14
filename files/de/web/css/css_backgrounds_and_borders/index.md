---
title: CSS Hintergründe und Rahmen
slug: Web/CSS/CSS_backgrounds_and_borders
l10n:
  sourceCommit: 5755d6dfbac15abc29ddcd924cee110c4139b073
---

{{CSSRef}}

Das **CSS-Hintergründe und Rahmen** Modul bietet Eigenschaften zum Hinzufügen von Rändern, abgerundeten Ecken und Box-Schatten zu Elementen.

Sie können verschiedene Arten von Rahmenstilen hinzufügen, einschließlich Rahmen, die aus Bildern jeder Bildart bestehen, von Rasterbildern bis zu CSS-Verläufen. Rahmen können eckig oder abgerundet sein, und ein unterschiedlicher Radius kann für jede Ecke festgelegt werden. Elemente können abgerundet werden, unabhängig davon, ob sie einen sichtbaren Rahmen haben oder nicht.

Box-Schatten umfassen ein- und auswärts gerichtete Schatten, einzelne oder mehrere Schatten, die fest oder transparent verlaufen können. Ein äußerer Box-Schatt wirft einen Schatten, als ob die Rahmen-box des Elements undurchsichtig wäre. Ein innerer Box-Schatt wirft einen Schatten, als ob alles außerhalb der Polsterungskante undurchsichtig wäre. Der Schatten kann fest sein oder einen Ausbreitungsabstand einschließen, wobei die Schattenfarbe in die Transparenz übergeht.

Die Eigenschaften in diesem Modul ermöglichen es Ihnen auch, festzulegen, ob Zellen in einem {{HTMLElement("table")}} gemeinsame oder separate Rahmen haben sollen.

### Hintergründe, Rahmen und Box-Schatten in Aktion

Dieses Beispiel von Rahmen, Hintergründen und Box-Schatten besteht aus zentrierten Hintergrundbildern, die aus linearen und radialen Verläufen bestehen. Eine Reihe von Box-Schatten lässt den Rahmen "hervorstehen". Das Element auf der linken Seite hat ein Rahmenbild gesetzt. Das Element auf der rechten Seite hat einen abgerundeten gepunkteten Rahmen.

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
  background-image: radial-gradient(
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

Die Hintergrundbilder sind mit {{cssxref("background-image")}} definiert. Die Bilder sind mit {{cssxref("background-position")}} zentriert. Verschiedene Werte der {{cssxref("background-clip")}} Eigenschaft für die mehreren Hintergrundbilder werden verwendet, um die Hintergrundbilder innerhalb der Inhaltsbox zu halten. Die Hintergrundfarbe wird auf die Polsterbox zugeschnitten, um zu verhindern, dass der Hintergrund durch die transparenten Bereiche für das {{cssxref("border-image")}} und den {{cssxref("border-style", "dotted")}} {{cssxref("border")}} erscheint. Die abgerundeten Ecken im Element auf der rechten Seite werden mit der {{cssxref("border-radius")}} Eigenschaft erzeugt. Eine einzelne {{cssxref("box-shadow")}} Deklaration wird verwendet, um alle Schatten einzustellen, sowohl innen als auch außen.

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
- {{cssxref("background")}} Kurzschreibweise
- {{cssxref("background-position-x")}}
- {{cssxref("background-position-y")}}
- {{cssxref("background-position-inline")}}
- {{cssxref("background-position-block")}}

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

- {{cssxref("border-collapse")}}

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

### Datentypen

- {{cssxref("line-style")}} Aufzählungstyp

## Leitfäden

- [CSS lernen: Hintergründe und Rahmen](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
  - : Erklärt, wie man dekorative Bilder mit CSS-Hintergrundbildern implementiert.
- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
  - : Erklärt, wie man ein oder mehrere Hintergründe auf ein Element setzt.
- [Anpassen der Größe von Hintergrundbildern](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images)
  - : Beschreibt, wie man das Verhalten der Größe und Wiederholung bei Hintergrundbildern ändert.
- [CSS lernen: das Box-Modell](/de/docs/Learn/CSS/Building_blocks/The_box_model)
  - : Erklärt, wie Rahmen, zusammen mit anderen Box-Modell-Eigenschaften, das CSS-Box-Modell beeinflussen.
- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
  - : Erklärt, wie man CSS-Verlaufshintergrundbilder erstellt.

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

- Interaktive Werkzeuge, die es Ihnen ermöglichen, visuell Rahmenbilder, abgerundete Ecken und Box-Schatten zu erstellen:
  - [Rahmenbild-Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-image_generator)
  - [Rahmenradius-Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-radius_generator)
  - [Box-Schatten-Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Box-shadow_generator)
- [Anwenden von Farbe auf HTML-Elemente mittels CSS](/de/docs/Web/CSS/CSS_colors/Applying_color), einschließlich für Rahmen.
- Die [`drop-shadow()`](/de/docs/Web/CSS/filter-function/drop-shadow) Filterfunktion, die einen Schlagschatteneffekt auf das Eingabebild anwendet. Die Funktion wird von den {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} Eigenschaften verwendet.
