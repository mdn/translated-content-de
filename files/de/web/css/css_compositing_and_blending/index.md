---
title: CSS Compositing und Blending
slug: Web/CSS/CSS_compositing_and_blending
l10n:
  sourceCommit: 9b9086cf753e2d5721fe1229ff6f767ccf512f97
---

{{CSSRef}}

Das Modul **CSS Compositing und Blending** definiert, wie die Hintergrundebenen eines Elements zusammen gemischt werden können, wie ein Element mit seinem Container gemischt werden kann und ob das Element einen neuen [stapelnden Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context) erstellen muss.

Die Eigenschaften in diesem CSS-Modul können verwendet werden, um den Mischmodus zu definieren, der gegebenenfalls verwendet werden soll, um die Hintergrundbilder und -farben eines Elements zu einem einzigen Hintergrundbild zu mischen. Dieses Modul bietet 16 Mischmodi. Sie können auch definieren, wie die Ränder, der Hintergrund und der Inhalt eines Elements, einschließlich Text, Emojis und Bilder, mit dem Hintergrund seines Containers gemischt werden sollen.

### Compositing und Blending in Aktion

In diesem Beispiel hat jedes Feld einen Rand, zwei gestreifte Hintergrundbilder und einen einfarbigen Hintergrund. Der gemeinsame Hintergrund für alle Felder enthält ein Kreismuster. Die drei Felder in der zweiten Reihe sind so eingestellt, dass sie mit dem Hintergrund des Containers gemischt werden.

```html hidden live-sample___compositing
<section>
  <div><span>Normal, with no blending</span></div>
  <div><span>Multiplies colors</span></div>
  <div><span>Multiplies based on background color</span></div>
  <div>Normal, with no blending</div>
  <div>Multiplies colors</div>
  <div>Multiplies based on background color</div>
</section>
```

```css hidden live-sample___compositing
/* Creates a div with two offset striped background images and a background color. */
div {
  width: 200px;
  height: 200px;
  background-image:
    repeating-linear-gradient(45deg, red 0 15px, pink 15px 30px),
    repeating-linear-gradient(-45deg, blue 0 15px, lightblue 15px 30px);
  background-size: 150px 150px;
  background-repeat: no-repeat;
  background-position:
    top left,
    bottom right;
  background-color: palegoldenrod;
  text-align: center;
  padding-top: 150px;
  font-family: sans-serif;
  box-sizing: border-box;
  border: 5px solid black;
}
div:nth-of-type(3n + 1) {
  background-blend-mode: normal;
}
div:nth-of-type(3n + 2) {
  background-blend-mode: multiply;
}
div:nth-of-type(3n + 3) {
  background-blend-mode: overlay;
}
div:nth-of-type(n + 4) {
  mix-blend-mode: difference;
}
/* Put a pink background with transparent round holes that covers the 
  entire element, and lay the examples in two rows with three columns each */
section {
  padding: 0.75em;
  background: radial-gradient(
    circle,
    transparent 0 20px,
    rgb(255 200 200) 20px
  );
  background-size: 60px 60px;
  background-position: center;
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1em;
}
/* Make some of the text more legible */
span {
  background-color: #ffffff99;
}
```

{{EmbedLiveSample("compositing", "", "450px")}}

Beachten Sie, wie der Hintergrund, der Rand und der Inhalt alle als Ergebnis des Blendens beeinflusst werden. Klicken Sie im obigen Beispiel auf "Play", um den Code für die Animation im MDN Playground anzuzeigen oder zu bearbeiten.

## Referenz

### Eigenschaften

- {{cssxref("background-blend-mode")}}
- {{cssxref("isolation")}}
- {{cssxref("mix-blend-mode")}}

## Verwandte Konzepte

- {{cssxref("blend-mode")}} Datentyp
- {{cssxref("backdrop-filter")}} CSS-Eigenschaft
- {{cssxref("filter")}} CSS-Eigenschaft
- {{cssxref("mask-composite")}} CSS-Eigenschaft
- {{cssxref("background-color")}} CSS-Eigenschaft
- {{cssxref("background-image")}} CSS-Eigenschaft
- [stapelnder Kontext](/de/docs/Glossary/stacking_context) Glossarbegriff
- {{ SVGElement("feBlend")}} SVG-Filter-Primitiv
- {{ SVGElement("feComposite")}} SVG-Filter-Primitiv

## Spezifikationen

{{Specifications}}

## Siehe auch

- Eigenschaften im Modul [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects) ermöglichen das Anwenden von Filtereffekten, wie das Verwischen und Ändern der Farbintensität, auf Bilder, Hintergründe und Ränder.
- [Compositing And Blending In CSS](https://www.sarasoueidan.com/blog/compositing-and-blending-in-css/) (2015)
- [Bilder in CSS bearbeiten: Blend-Modi](https://webdesign.tutsplus.com/editing-images-in-css-blend-modes--cms-26058t) (2022)
- [web.dev: Blend-Modi](https://web.dev/learn/css/blend-modes) (2021)
