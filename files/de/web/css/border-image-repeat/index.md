---
title: border-image-repeat
slug: Web/CSS/border-image-repeat
l10n:
  sourceCommit: 5c5ee35d66ac24bc6513c14f120750c74d779d20
---

{{CSSRef}}

Die **`border-image-repeat`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert, wie die Bilder für die Seiten und den mittleren Teil des [border image](/de/docs/Web/CSS/border-image) skaliert und gekachelt werden. Der mittlere Bereich kann angezeigt werden, indem das Schlüsselwort "fill" in der {{cssxref("border-image-slice")}} Eigenschaft verwendet wird.

{{InteractiveExample("CSS Demo: border-image-repeat")}}

```css interactive-example-choice
border-image-repeat: stretch;
```

```css interactive-example-choice
border-image-repeat: repeat;
```

```css interactive-example-choice
border-image-repeat: round;
```

```css interactive-example-choice
border-image-repeat: space;
```

```css interactive-example-choice
border-image-repeat: round stretch;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">This is a box with a border around it.</div>
</section>
```

```css interactive-example
#example-element {
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background: #fff3d4;
  color: #000;
  border: 30px solid;
  border-image: url("/shared-assets/images/examples/border-diamonds.png") 30
    round;
  font-size: 1.2em;
}
```

## Syntax

```css
/* Keyword value */
border-image-repeat: stretch;
border-image-repeat: repeat;
border-image-repeat: round;
border-image-repeat: space;

/* top and bottom | left and right */
border-image-repeat: round stretch;

/* Global values */
border-image-repeat: inherit;
border-image-repeat: initial;
border-image-repeat: revert;
border-image-repeat: revert-layer;
border-image-repeat: unset;
```

Die `border-image-repeat` Eigenschaft kann unter Verwendung eines oder zweier Werte aus der unten stehenden Liste angegeben werden.

- Wenn **ein** Wert angegeben wird, gilt das gleiche Verhalten für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben werden, gilt der erste für **oben, Mitte und unten** und der zweite für **links und rechts**.

### Werte

- `stretch`
  - : Die Randbereiche des Quellbildes werden gestreckt, um den Abstand zwischen den einzelnen Rändern auszufüllen.
- `repeat`
  - : Die Randbereiche des Quellbildes werden gekachelt (wiederholt), um den Abstand zwischen den einzelnen Rändern auszufüllen. Kacheln können zugeschnitten werden, um die richtige Passform zu erreichen.
- `round`
  - : Die Randbereiche des Quellbildes werden gekachelt (wiederholt), um den Abstand zwischen den einzelnen Rändern auszufüllen. Kacheln können gestreckt werden, um die richtige Passform zu erreichen.
- `space`
  - : Die Randbereiche des Quellbildes werden gekachelt (wiederholt), um den Abstand zwischen den einzelnen Rändern auszufüllen. Zusätzliches Leerzeichen wird zwischen den Kacheln verteilt, um die richtige Passform zu erreichen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wiederholende Rahmenbilder

#### CSS

```css
#bordered {
  width: 12rem;
  margin-bottom: 1rem;
  padding: 1rem;
  border: 40px solid;
  border-image: url("border.png") 27;
  border-image-repeat: stretch; /* Can be changed in the live sample */
}
```

```html hidden
<div id="bordered">You can try out various border repetition rules on me!</div>

<select id="repetition">
  <option value="stretch">stretch</option>
  <option value="repeat">repeat</option>
  <option value="round">round</option>
  <option value="space">space</option>
  <option value="stretch repeat">stretch repeat</option>
  <option value="space round">space round</option>
</select>
```

```js hidden
const repetition = document.getElementById("repetition");
repetition.addEventListener("change", (evt) => {
  document.getElementById("bordered").style.borderImageRepeat =
    evt.target.value;
});
```

#### Ergebnisse

{{EmbedLiveSample("Repeating_border_images", "auto", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders)
- [CSS lernen: Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
- [Rahmenbilder in CSS: Ein Schlüsselfokusbereich für Interop 2023](/en-US/blog/border-images-interop-2023/) auf dem MDN-Blog (2023)
