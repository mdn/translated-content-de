---
title: perspective-origin
slug: Web/CSS/perspective-origin
l10n:
  sourceCommit: fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{CSSRef}}

Die **`perspective-origin`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt die Position, aus der der Betrachter schaut. Sie wird als _Fluchtpunkt_ von der {{cssxref("perspective")}} Eigenschaft verwendet.

{{EmbedInteractiveExample("pages/css/perspective-origin.html")}}

Die **`perspective-origin`** und {{cssxref('perspective')}} Eigenschaften sind an das übergeordnete Element eines untergeordneten Elements gebunden, das im dreidimensionalen Raum transformiert wird, im Gegensatz zur [`perspective()`](/de/docs/Web/CSS/transform-function/perspective) Transformationsfunktion, die auf das zu transformierende Element angewendet wird.

## Syntax

```css
/* Ein-Wert-Syntax */
perspective-origin: x-position;

/* Zwei-Werte-Syntax */
perspective-origin: x-position y-position;

/* Wenn sowohl x-position als auch y-position Schlüsselwörter sind,
   ist auch das folgende gültig */
perspective-origin: y-position x-position;

/* Globale Werte */
perspective-origin: inherit;
perspective-origin: initial;
perspective-origin: revert;
perspective-origin: revert-layer;
perspective-origin: unset;
```

### Werte

- _x-position_

  - : Gibt die Position der Abszisse des _Fluchtpunkts_ an. Es kann einen der folgenden Werte haben:

    - {{cssxref("&lt;length-percentage&gt;")}} gibt die Position als absoluten Längenwert oder relativ zur Breite des Elements an. Der Wert kann negativ sein.
    - `left`, ein Schlüsselwort als Abkürzung für den Längenwert `0`.
    - `center`, ein Schlüsselwort als Abkürzung für den Prozentwert `50%`.
    - `right`, ein Schlüsselwort als Abkürzung für den Prozentwert `100%`.

- _y-position_

  - : Gibt die Position der Ordinate des _Fluchtpunkts_ an. Es kann einen der folgenden Werte haben:

    - {{cssxref("&lt;length-percentage&gt;")}} gibt die Position als absoluten Längenwert oder relativ zur Höhe des Elements an. Der Wert kann negativ sein.
    - `top`, ein Schlüsselwort als Abkürzung für den Längenwert `0`.
    - `center`, ein Schlüsselwort als Abkürzung für den Prozentwert `50%`.
    - `bottom`, ein Schlüsselwort als Abkürzung für den Prozentwert `100%`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ändern des Perspektivursprungs

Ein Beispiel, das zeigt, wie man `perspective-origin` ändert, finden Sie unter [Verwendung von CSS-Transformationen > Ändern des Perspektivursprungs](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms#changing_the_perspective_origin).

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
- {{cssxref('transform-style')}}
- {{cssxref('transform-function')}}
- {{cssxref('perspective')}}
- [`transform: perspective()`](/de/docs/Web/CSS/transform-function/perspective) Funktion
