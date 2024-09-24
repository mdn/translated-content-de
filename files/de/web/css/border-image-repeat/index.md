---
title: border-image-repeat
slug: Web/CSS/border-image-repeat
l10n:
  sourceCommit: fb3ef3857ca1d77cc720deba0c12d7a3313b85b4
---

{{CSSRef}}

Die **`border-image-repeat`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt, wie die [Randbereiche](/de/docs/Web/CSS/border-image-slice#edge-regions) und der [mittelbereich](/de/docs/Web/CSS/border-image-slice#middle-region) eines Ausgangsbildes angepasst werden, um die Dimensionen eines [Randbilds](/de/docs/Web/CSS/border-image) eines Elements zu passen. Der Mittelbereich kann angezeigt werden, indem das Schlüsselwort "fill" in der border-image-slice Eigenschaft verwendet wird.

{{EmbedInteractiveExample("pages/css/border-image-repeat.html")}}

## Syntax

```css
/* Schlüsselwort Wert */
border-image-repeat: stretch;
border-image-repeat: repeat;
border-image-repeat: round;
border-image-repeat: space;

/* oben und unten | links und rechts */
border-image-repeat: round stretch;

/* Globale Werte */
border-image-repeat: inherit;
border-image-repeat: initial;
border-image-repeat: revert;
border-image-repeat: revert-layer;
border-image-repeat: unset;
```

Die `border-image-repeat` Eigenschaft kann unter Verwendung von einem oder zwei Werten aus der untenstehenden Liste angegeben werden.

- Wenn **ein** Wert angegeben wird, gilt das gleiche Verhalten für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben werden, gilt der erste für **oben, Mitte und unten**, der zweite für **links und rechts**.

### Werte

- `stretch`
  - : Die Randbereiche des Ausgangsbildes werden gestreckt, um die Lücke zwischen jedem Rand zu füllen.
- `repeat`
  - : Die Randbereiche des Ausgangsbildes werden gekachelt (wiederholt), um die Lücke zwischen jedem Rand zu füllen. Kacheln können beschnitten werden, um die richtige Passform zu erreichen.
- `round`
  - : Die Randbereiche des Ausgangsbildes werden gekachelt (wiederholt), um die Lücke zwischen jedem Rand zu füllen. Kacheln können gestreckt werden, um die richtige Passform zu erreichen.
- `space`
  - : Die Randbereiche des Ausgangsbildes werden gekachelt (wiederholt), um die Lücke zwischen jedem Rand zu füllen. Zusätzlicher Raum wird zwischen den Kacheln verteilt, um die richtige Passform zu erreichen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wiederholte Randbilder

#### CSS

```css
#bordered {
  width: 12rem;
  margin-bottom: 1rem;
  padding: 1rem;
  border: 40px solid;
  border-image: url("border.png") 27;
  border-image-repeat: stretch; /* Kann im Live-Beispiel geändert werden */
}
```

```html hidden
<div id="bordered">Sie können verschiedene Regeln zur Randwiederholung an mir ausprobieren!</div>

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

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- [Hintergründe und Ränder](/de/docs/Web/CSS/CSS_backgrounds_and_borders)
- [CSS Lernen: Hintergründe und Ränder](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
- [Randbilder in CSS: Ein Schlüsselbereich für Interop 2023](/en-US/blog/border-images-interop-2023/) im MDN-Blog (2023)
