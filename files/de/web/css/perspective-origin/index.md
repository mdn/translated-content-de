---
title: perspective-origin
slug: Web/CSS/perspective-origin
l10n:
  sourceCommit: fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{CSSRef}}

Die **`perspective-origin`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt die Position, von der der Betrachter schaut. Sie wird vom {{cssxref("perspective")}} verwendet als _Fluchtpunkt_.

{{EmbedInteractiveExample("pages/css/perspective-origin.html")}}

Die Eigenschaften **`perspective-origin`** und {{cssxref('perspective')}} sind dem Elternteil eines Kindes zugeordnet, das in einem dreidimensionalen Raum transformiert ist, im Gegensatz zur [`perspective()`](/de/docs/Web/CSS/transform-function/perspective) Transformationsfunktion, die auf das zu transformierende Element angewendet wird.

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

  - : Gibt die Position der Abszisse des _Fluchtpunkts_ an. Sie kann einen der folgenden Werte annehmen:

    - {{cssxref("&lt;length-percentage&gt;")}} zeigt die Position als absoluten Längenwert oder relativ zur Breite des Elements an. Der Wert darf negativ sein.
    - `left`, ein Schlüsselwort als Abkürzung für den `0` Längenwert.
    - `center`, ein Schlüsselwort als Abkürzung für den `50%` Prozentwert.
    - `right`, ein Schlüsselwort als Abkürzung für den `100%` Prozentwert.

- _y-position_

  - : Gibt die Position der Ordinate des _Fluchtpunkts_ an. Sie kann einen der folgenden Werte annehmen:

    - {{cssxref("&lt;length-percentage&gt;")}} zeigt die Position als absoluten Längenwert oder relativ zur Höhe des Elements an. Der Wert darf negativ sein.
    - `top`, ein Schlüsselwort als Abkürzung für den `0` Längenwert.
    - `center`, ein Schlüsselwort als Abkürzung für den `50%` Prozentwert.
    - `bottom`, ein Schlüsselwort als Abkürzung für den `100%` Prozentwert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ändern des Perspektivursprungs

Ein Beispiel, wie `perspective-origin` geändert wird, finden Sie in [Using CSS transforms > Changing the perspective origin](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms#changing_the_perspective_origin).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using CSS Transforms](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
- {{cssxref('transform-style')}}
- {{cssxref('transform-function')}}
- {{cssxref('perspective')}}
- [`transform: perspective()`](/de/docs/Web/CSS/transform-function/perspective) Funktion
