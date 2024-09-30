---
title: perspective-origin
slug: Web/CSS/perspective-origin
l10n:
  sourceCommit: fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{CSSRef}}

Die **`perspective-origin`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt die Position, von der aus der Betrachter schaut. Sie wird als _Fluchtpunkt_ von der {{cssxref("perspective")}} Eigenschaft verwendet.

{{EmbedInteractiveExample("pages/css/perspective-origin.html")}}

Die **`perspective-origin`** und {{cssxref('perspective')}} Eigenschaften sind an das Elternteil eines in 3D-Raum transformierten Kindes gebunden, im Gegensatz zur [`perspective()`](/de/docs/Web/CSS/transform-function/perspective) Transformationsfunktion, die auf das zu transformierende Element angewendet wird.

## Syntax

```css
/* One-value syntax */
perspective-origin: x-position;

/* Two-value syntax */
perspective-origin: x-position y-position;

/* When both x-position and y-position are keywords,
   the following is also valid */
perspective-origin: y-position x-position;

/* Global values */
perspective-origin: inherit;
perspective-origin: initial;
perspective-origin: revert;
perspective-origin: revert-layer;
perspective-origin: unset;
```

### Werte

- _x-position_

  - : Gibt die Position der Abszisse des _Fluchtpunkts_ an. Kann einen der folgenden Werte haben:

    - {{cssxref("&lt;length-percentage&gt;")}}, was die Position als absoluten Längenwert oder relativ zur Breite des Elements angibt. Der Wert kann negativ sein.
    - `left`, ein Schlüsselwort als Abkürzung für den Wert `0`.
    - `center`, ein Schlüsselwort als Abkürzung für den Wert `50%`.
    - `right`, ein Schlüsselwort als Abkürzung für den Wert `100%`.

- _y-position_

  - : Gibt die Position der Ordinate des _Fluchtpunkts_ an. Kann einen der folgenden Werte haben:

    - {{cssxref("&lt;length-percentage&gt;")}}, was die Position als absoluten Längenwert oder relativ zur Höhe des Elements angibt. Der Wert kann negativ sein.
    - `top`, ein Schlüsselwort als Abkürzung für den Wert `0`.
    - `center`, ein Schlüsselwort als Abkürzung für den Wert `50%`.
    - `bottom`, ein Schlüsselwort als Abkürzung für den Wert `100%`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ändern des Perspektivursprungs

Ein Beispiel, wie man `perspective-origin` ändert, finden Sie unter [Verwendung von CSS-Transformen > Änderung des Perspektivursprungs](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms#changing_the_perspective_origin).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Transformen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
- {{cssxref('transform-style')}}
- {{cssxref('transform-function')}}
- {{cssxref('perspective')}}
- [`transform: perspective()`](/de/docs/Web/CSS/transform-function/perspective) Funktion
