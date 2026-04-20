---
title: "`border-image-repeat` CSS property"
short-title: border-image-repeat
slug: Web/CSS/Reference/Properties/border-image-repeat
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`border-image-repeat`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert, wie die Bilder für die Seiten und den mittleren Teil des [Randbildes](/de/docs/Web/CSS/Reference/Properties/border-image) skaliert und gekachelt werden. Der mittlere Bereich kann durch die Verwendung des Schlüsselworts "fill" in der {{cssxref("border-image-slice")}} Eigenschaft angezeigt werden.

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
  color: black;
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

Die `border-image-repeat` Eigenschaft kann mittels eines oder zweier Werte spezifiziert werden, die aus der untenstehenden Werteliste ausgewählt werden.

- Wenn **ein** Wert angegeben wird, gilt er für **alle vier Seiten** gleich.
- Wenn **zwei** Werte angegeben werden, gilt der erste für **oben, Mitte und unten**, der zweite für **links und rechts**.

### Werte

- `stretch`
  - : Die Randbereiche des Quellbildes werden gedehnt, um den Abstand zwischen jedem Rand zu füllen.
- `repeat`
  - : Die Randbereiche des Quellbildes werden gekachelt (wiederholt), um den Abstand zwischen jedem Rand zu füllen. Kacheln können zugeschnitten werden, um die richtige Passform zu erreichen.
- `round`
  - : Die Randbereiche des Quellbildes werden gekachelt (wiederholt), um den Abstand zwischen jedem Rand zu füllen. Kacheln können gedehnt werden, um die richtige Passform zu erreichen.
- `space`
  - : Die Randbereiche des Quellbildes werden gekachelt (wiederholt), um den Abstand zwischen jedem Rand zu füllen. Extra Platz wird zwischen den Kacheln verteilt, um die richtige Passform zu erreichen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wiederholende Randbilder

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

- [Hintergründe und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders)
- [CSS Lernen: Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
- [Randbilder in CSS: Ein Schlüsselbereich für Interop 2023](/en-US/blog/border-images-interop-2023/) im MDN-Blog (2023)
