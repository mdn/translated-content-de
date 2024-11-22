---
title: border-image-repeat
slug: Web/CSS/border-image-repeat
l10n:
  sourceCommit: b692821c494fd3a25dd883b6fe14998fa2621f7b
---

{{CSSRef}}

Die **`border-image-repeat`** [CSS](/de/docs/Web/CSS) -Eigenschaft definiert, wie die [Randbereiche](/de/docs/Web/CSS/border-image-slice#edge-regions) und der [Mittelbereich](/de/docs/Web/CSS/border-image-slice#middle-region) eines Quellbildes angepasst werden, um die Abmessungen eines Elements mit einem [Rahmenbild](/de/docs/Web/CSS/border-image) zu füllen. Der Mittelbereich kann angezeigt werden, indem das Schlüsselwort "fill" in der {{cssxref("border-image-slice")}} Eigenschaft verwendet wird.

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

Die `border-image-repeat` Eigenschaft kann mit einem oder zwei Werten aus der unten stehenden Werteliste angegeben werden.

- Wenn **ein** Wert angegeben wird, gilt das gleiche Verhalten für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben werden, gilt der erste für **oben, Mitte und unten**, der zweite für **links und rechts**.

### Werte

- `stretch`
  - : Die Randbereiche des Quellbildes werden gedehnt, um den Abstand zwischen den jeweiligen Rahmen zu füllen.
- `repeat`
  - : Die Randbereiche des Quellbildes werden gekachelt (wiederholt), um den Abstand zwischen den jeweiligen Rahmen zu füllen. Kacheln können beschnitten werden, um die richtige Passform zu erreichen.
- `round`
  - : Die Randbereiche des Quellbildes werden gekachelt (wiederholt), um den Abstand zwischen den jeweiligen Rahmen zu füllen. Kacheln können gedehnt werden, um die richtige Passform zu erreichen.
- `space`
  - : Die Randbereiche des Quellbildes werden gekachelt (wiederholt), um den Abstand zwischen den jeweiligen Rahmen zu füllen. Zusätzlicher Platz wird zwischen den Kacheln verteilt, um die richtige Passform zu erreichen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wiederkehrende Rahmenbilder

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
- [CSS lernen: Hintergründe und Rahmen](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
- [Rahmenbilder in CSS: Ein Schwerpunktbereich für Interop 2023](/en-US/blog/border-images-interop-2023/) im MDN-Blog (2023)
