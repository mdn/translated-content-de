---
title: CSS-Hintergründe und -Rahmen
slug: Web/CSS/CSS_backgrounds_and_borders
l10n:
  sourceCommit: 004b2bf06dd74ef7baa6cb0979889b08619ab312
---

{{CSSRef}}

Das **CSS backgrounds and borders** Modul bietet Eigenschaften zum Hinzufügen von Hintergründen, Rahmen, abgerundeten Ecken und Box-Schatten zu Elementen.

Sie können verschiedene Arten von Rahmenstilen hinzufügen, einschließlich Rahmen, die aus Bildern jeglichen Bildtyps bestehen, von Rasterbildern bis zu CSS-Verläufen. Rahmen können eckig oder abgerundet sein, und ein unterschiedlicher Radius kann für jede Ecke festgelegt werden. Elemente können abgerundet werden, unabhängig davon, ob sie einen sichtbaren Rahmen haben oder nicht.

Box-Schatten umfassen innere und äußere Schatten, einzelne oder mehrere Schatten, und können fest oder bis zu transparenten Bereichen verblassend sein. Ein äußerer Box-Schatten wirft einen Schatten, als ob die border-box des Elements undurchsichtig wäre. Ein innerer Box-Schatten wirft einen Schatten, als ob alles außerhalb des padding-Randes undurchsichtig wäre. Der Schatten kann fest sein oder eine Ausbreitungsdistanz mit dem Schattenfarbübergang zu transparent einbeziehen.

Die Eigenschaften in diesem Modul ermöglichen es Ihnen auch zu definieren, ob Zellen innerhalb eines {{HTMLElement("table")}} gemeinsame oder separate Rahmen haben sollen.

### Hintergründe, Rahmen und Box-Schatten im Einsatz

Dieses Beispiel von Rahmen, Hintergründen und Box-Schatten besteht aus zentrierten Hintergrundbildern, die aus linearen und radialen Verläufen bestehen. Eine Reihe von Box-Schatten lässt den Rahmen "hervortreten". Das Element links hat ein Rahmenbild gesetzt. Das Element rechts hat einen abgerundeten gepunkteten Rahmen.

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

Die Hintergrundbilder werden mit {{cssxref("background-image")}} definiert. Die Bilder sind mit {{cssxref("background-position")}} zentriert. Verschiedene Werte der {{cssxref("background-clip")}} Eigenschaft für die mehreren Hintergrundbilder werden verwendet, um die Hintergrundbilder im Inhaltsbereich zu halten. Die Hintergrundfarbe wird auf den padding-Bereich beschnitten, wodurch verhindert wird, dass der Hintergrund durch die transparenten Abschnitte für die {{cssxref("border-image")}} und den {{cssxref("border-style", "dotted")}} {{cssxref("border")}} erscheint. Die abgerundeten Ecken im Element rechts werden mit der {{cssxref("border-radius")}} Eigenschaft erzeugt. Eine einzelne {{cssxref("box-shadow")}} Deklaration wird verwendet, um alle Schatten, sowohl innen als auch außen, zu setzen.

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

- {{cssxref("line-style")}} aufgezählter Typ

## Leitfaden

- [Learn CSS: background and borders](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
  - : Erklärt, wie dekorative Bilder mit CSS-Hintergrundbildern umgesetzt werden.
- [Using multiple backgrounds](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
  - : Erläutert, wie man einem Element ein oder mehrere Hintergründe hinzufügt.
- [Resizing background images](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images)
  - : Beschreibt, wie man die Größe und das Wiederholungsverhalten von Hintergrundbildern ändert.
- [Learn CSS: the box model](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)
  - : Erklärt, wie Rahmen zusammen mit anderen Box-Modell-Eigenschaften das CSS-Box-Modell beeinflussen.
- [Using CSS gradients](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
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

- Interaktive Tools, die Ihnen erlauben, visuell Rahmenbilder, abgerundete Ecken und Box-Schatten zu erstellen:
  - [Border-image generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-image_generator)
  - [Border-radius generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-radius_generator)
  - [Box-shadow generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Box-shadow_generator)
- [Farben auf HTML-Elemente anwenden mittels CSS](/de/docs/Web/CSS/CSS_colors/Applying_color), einschließlich für Rahmen.
- Die [`drop-shadow()`](/de/docs/Web/CSS/filter-function/drop-shadow) Filterfunktion, die einen Schlagschatteneffekt auf das Eingabebild anwendet. Die Funktion wird von den {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} Eigenschaften verwendet.
