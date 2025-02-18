---
title: CSS-Hintergründe und -Rahmen
slug: Web/CSS/CSS_backgrounds_and_borders
l10n:
  sourceCommit: f43b5c153a3cc028e7bc7a4f631b1b057b9e369d
---

{{CSSRef}}

Das Modul **CSS backgrounds and borders** stellt Eigenschaften bereit, mit denen Sie Hintergründe, Rahmen, abgerundete Ecken und Box-Schatten zu Elementen hinzufügen können.

Sie können verschiedene Arten von Rahmenstilen hinzufügen, einschließlich Rahmen, die aus Bildern beliebigen Bildtyps bestehen, von Rasterbildern bis hin zu CSS-Verläufen. Rahmen können eckig oder abgerundet sein, und es kann ein unterschiedlicher Radius für jede Ecke festgelegt werden. Elemente können abgerundet sein, unabhängig davon, ob sie sichtbare Rahmen haben oder nicht.

Box-Schatten umfassen innere und äußere Schatten, einzelne oder mehrere Schatten sowie durchgehend oder verlaufend zu transparent. Ein äußerer Box-Schatten wirft einen Schatten, als ob der `border-box` des Elements undurchsichtig wäre. Ein innerer Box-Schatten wirft einen Schatten, als ob alles außerhalb des `padding`-Randes undurchsichtig wäre. Der Schatten kann durchgehend sein oder eine Ausbreitungsdistanz enthalten, wobei die Schattenfarbe in Transparent übergeht.

Die Eigenschaften dieses Moduls ermöglichen es auch, zu definieren, ob Zellen in einer {{HTMLElement("table")}} gemeinsame oder getrennte Rahmen haben sollen.

### Hintergründe, Rahmen und Box-Schatten in Aktion

Dieses Beispiel von Rahmen, Hintergründen und Box-Schatten enthält zentrierte Hintergrundbilder, die aus linearen und radialen Verläufen erstellt wurden. Eine Reihe von Box-Schatten lassen den Rahmen "hervortreten". Das linke Element hat ein Bild als Rahmen festgelegt. Das rechte Element hat einen abgerundeten, gepunkteten Rahmen.

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

Die Hintergrundbilder werden mit {{cssxref("background-image")}} definiert. Die Bilder werden mit {{cssxref("background-position")}} zentriert. Verschiedene Werte der Eigenschaft {{cssxref("background-clip")}} für die mehreren Hintergrundbilder werden verwendet, um die Hintergrundbilder innerhalb der `content-box` zu halten. Die Hintergrundfarbe wird auf die `padding-box` zugeschnitten, um zu verhindern, dass die Hintergrundfarbe durch die transparenten Bereiche des {{cssxref("border-image")}} und der {{cssxref("border-style", "dotted")}} {{cssxref("border")}} sichtbar wird. Die abgerundeten Ecken beim Element rechts werden mit der Eigenschaft {{cssxref("border-radius")}} erstellt. Ein einzelnes {{cssxref("box-shadow")}}-Deklaration wird verwendet, um alle Schatten, sowohl innen als auch außen, festzulegen.

Klicken Sie oben auf „Play“, um den Code für die Animation im MDN Playground anzuzeigen oder zu bearbeiten.

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

> [!NOTE]
> Das Modul CSS Backgrounds Module Level 4 führt die Eigenschaften `background-position-block`, `background-position-inline`, `background-repeat-block`, `background-repeat-inline`, `background-repeat-x`, `background-repeat-y` und `background-tbd` ein. Diese wurden jedoch noch nicht implementiert.

### Datentypen

- {{cssxref("line-style")}} Enumerierter Typ

## Leitfäden

- [CSS lernen: Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
  - : Erklärt, wie dekorative Bilder mit Hilfe von CSS-Hintergrundbildern implementiert werden können.
- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
  - : Erklärt, wie Sie einem Element einen oder mehrere Hintergründe hinzufügen können.
- [Größenanpassung von Hintergrundbildern](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images)
  - : Beschreibt, wie die Größe und das Wiederholungsverhalten von Hintergrundbildern geändert werden können.
- [CSS lernen: das Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)
  - : Erklärt, wie Rahmen zusammen mit anderen Eigenschaften des Box-Modells das CSS-Box-Modell beeinflussen.
- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
  - : Erklärt, wie CSS-Verlaufs-Hintergrundbilder erstellt werden können.

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

- Interaktive Werkzeuge, mit denen Sie visuell Rahmenbilder, abgerundete Ecken und Schatten erstellen können:
  - [Generator für Rahmenbilder](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-image_generator)
  - [Generator für abgerundete Ecken](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-radius_generator)
  - [Box-Schatten-Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Box-shadow_generator)
- [Anwenden von Farben auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color), einschließlich für Rahmen.
- Die [`drop-shadow()`](/de/docs/Web/CSS/filter-function/drop-shadow) Filterfunktion, die einen Schlagschatteneffekt auf das Eingabebild anwendet. Die Funktion wird von den {{cssxref("filter")}}- und {{cssxref("backdrop-filter")}}-Eigenschaften verwendet.
