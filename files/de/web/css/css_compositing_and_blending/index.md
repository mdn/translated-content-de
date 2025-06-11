---
title: CSS Compositing und Blending
slug: Web/CSS/CSS_compositing_and_blending
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

{{CSSRef}}

Das **CSS Compositing und Blending** Modul definiert, wie die Hintergrundschichten eines Elements miteinander vermischt werden können, wie ein Element mit seinem Container vermischt werden kann und ob das Element einen neuen [Stacking Context](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context) erstellen muss.

Die Eigenschaften in diesem CSS-Modul können verwendet werden, um den Blending-Modus zu definieren, der angewendet werden soll, um die Hintergrundbilder und -farben eines Elements zu einem einzigen Hintergrundbild zu kombinieren. Dieses Modul bietet 16 Blending-Modi. Darüber hinaus können Sie definieren, wie die Rahmen, Hintergründe und Inhalte eines Elements, einschließlich Text, Emojis und Bilder, mit dem Hintergrund seines Containers vermischt werden sollen.

### Compositing und Blending in Aktion

In diesem Beispiel hat jede Box einen Rahmen, zwei gestreifte Hintergrundbilder und einen einfarbigen Hintergrund. Der gemeinsame Hintergrund für alle Boxen enthält ein Muster aus Kreisen. Die drei Boxen in der zweiten Reihe sind so eingestellt, dass sie mit dem Hintergrund des Containers vermischt werden.

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

Beachten Sie, wie der Hintergrund, der Rahmen und der Inhalt alle durch das Blending beeinflusst werden.
Klicken Sie oben im Beispiel auf "Play", um den Code für die Animation im MDN Playground zu sehen oder zu bearbeiten.

## Referenz

### Eigenschaften

- {{cssxref("background-blend-mode")}}
- {{cssxref("isolation")}}
- {{cssxref("mix-blend-mode")}}

## Verwandte Konzepte

- {{cssxref("blend-mode")}} Datentyp
- {{cssxref("backdrop-filter")}} CSS Eigenschaft
- {{cssxref("filter")}} CSS Eigenschaft
- {{cssxref("mask-composite")}} CSS Eigenschaft
- {{cssxref("background-color")}} CSS Eigenschaft
- {{cssxref("background-image")}} CSS Eigenschaft
- {{Glossary("stacking_context", "Stacking Context")}} Glossareintrag
- {{ SVGElement("feBlend")}} SVG Filterprimitive
- {{ SVGElement("feComposite")}} SVG Filterprimitive

## Spezifikationen

{{Specifications}}

## Siehe auch

- Eigenschaften im [CSS Filter Effects](/de/docs/Web/CSS/CSS_filter_effects) Modul ermöglichen das Anwenden von Filtereffekten wie Weichzeichnen und Ändern der Farbintensität auf Bilder, Hintergründe und Rahmen.
- [Compositing And Blending In CSS](https://www.sarasoueidan.com/blog/compositing-and-blending-in-css/) (2015)
- [Editing Images in CSS: Blend Modes](https://webdesign.tutsplus.com/editing-images-in-css-blend-modes--cms-26058t) (2022)
- [web.dev: blend modes](https://web.dev/learn/css/blend-modes) (2021)
