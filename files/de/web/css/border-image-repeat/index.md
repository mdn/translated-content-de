---
title: border-image-repeat
slug: Web/CSS/border-image-repeat
l10n:
  sourceCommit: fb3ef3857ca1d77cc720deba0c12d7a3313b85b4
---

{{CSSRef}}

Die **`border-image-repeat`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert, wie die [Randbereiche](/de/docs/Web/CSS/border-image-slice#edge-regions) und der [mittlere Bereich](/de/docs/Web/CSS/border-image-slice#middle-region) eines Quellbildes angepasst werden, um den Abmessungen des [Randbildes](/de/docs/Web/CSS/border-image) eines Elements zu entsprechen. Der mittlere Bereich kann angezeigt werden, indem das Schlüsselwort "fill" in der border-image-slice-Eigenschaft verwendet wird.

{{EmbedInteractiveExample("pages/css/border-image-repeat.html")}}

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

Die `border-image-repeat` Eigenschaft kann mit einem oder zwei Werten aus der untenstehenden Liste angegeben werden.

- Wenn **ein** Wert angegeben wird, gilt das gleiche Verhalten für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben werden, gilt der erste für **oben, Mitte und unten**, der zweite für **links und rechts**.

### Werte

- `stretch`
  - : Die Randbereiche des Quellbildes werden gestreckt, um den Abstand zwischen jedem Rand auszufüllen.
- `repeat`
  - : Die Randbereiche des Quellbildes werden gekachelt (wiederholt), um den Abstand zwischen jedem Rand auszufüllen. Kacheln können abgeschnitten werden, um die richtige Passform zu erreichen.
- `round`
  - : Die Randbereiche des Quellbildes werden gekachelt (wiederholt), um den Abstand zwischen jedem Rand auszufüllen. Kacheln können gestreckt werden, um die richtige Passform zu erreichen.
- `space`
  - : Die Randbereiche des Quellbildes werden gekachelt (wiederholt), um den Abstand zwischen jedem Rand auszufüllen. Extra Platz wird zwischen den Kacheln verteilt, um die richtige Passform zu erreichen.

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

- [Hintergründe und Ränder](/de/docs/Web/CSS/CSS_backgrounds_and_borders)
- [CSS lernen: Hintergründe und Ränder](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
- [Randbilder in CSS: Ein Schwerpunktbereich für Interop 2023](/en-US/blog/border-images-interop-2023/) im MDN-Blog (2023)
