---
title: <position>
slug: Web/CSS/position_value
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Der **`<position>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) bezeichnet eine zweidimensionale Koordinate, die verwendet wird, um einen Ort relativ zu einem Elementrahmen festzulegen. Er wird in den Eigenschaften {{cssxref("background-position")}}, {{cssxref("object-position")}}, {{cssxref("mask-position")}}, {{cssxref("offset-position")}}, {{cssxref("offset-anchor")}} und {{cssxref("transform-origin")}} verwendet.

> [!NOTE]
> Die durch den `<position>`-Wert beschriebene Endposition muss sich nicht innerhalb des Elementrahmens befinden.

## Syntax

![Raster, das die Platzierung verschiedener Werte zeigt. 0 0 ist die obere linke Ecke. Die vier Werte, right, right center, center left 100% und top 50% left 100%, sind alle gleichwertig und befinden sich am rechten Rand in der vertikalen Mitte. Die zwei Werte, top 75px left 100px und left 100px top 75px, sind gleich. Bottom left 25% ist dasselbe wie top 100% left 25%.](position_type.png)

Der `<position>`-Datentyp wird mit einem oder zwei Schlüsselwörtern angegeben, mit optionalen Offsets.

Die Schlüsselwortwerte sind `center`, `top`, `right`, `bottom` und `left`. Jedes Schlüsselwort repräsentiert entweder eine Kante des Elementrahmens oder die Mittellinie zwischen zwei Kanten. Je nach Kontext steht `center` entweder für das Zentrum zwischen den linken und rechten Kanten oder das Zentrum zwischen den oberen und unteren Kanten.

Falls angegeben, kann ein Offset entweder ein relatives {{cssxref("&lt;percentage&gt;")}}-Wert oder ein absoluter {{cssxref("&lt;length&gt;")}}-Wert sein. Positive Werte sind nach rechts oder unten versetzt, je nachdem, was zutrifft. Negative Werte sind in die entgegengesetzten Richtungen versetzt.

Wenn nur ein einzelner Offsetwert angegeben wird, definiert er die x-Koordinate, und der Wert für die andere Achse wird standardmäßig auf `center` gesetzt.

```css
/* 1-value syntax */
keyword                  /* Either the horizontal or vertical position; the other axis defaults to center */
value                    /* The position on the x-axis; the y-axis defaults to 50% */

/* 2-value syntax */
keyword keyword          /* A keyword for each direction (the order is irrelevant) */
keyword value            /* A keyword for horizontal position, value for vertical position */
value keyword            /* A value for horizontal position, keyword for vertical position */
value value              /* A value for each direction (horizontal then vertical) */

/* 4-value syntax */
keyword value keyword value /* Each value is an offset from the keyword that precedes it */
```

> [!NOTE]
> Die Eigenschaft {{cssxref("background-position")}} akzeptiert auch eine Syntax mit drei Werten. Dies ist in anderen Eigenschaften, die `<position>` verwenden, nicht zulässig.

## Interpolation

Bei Animationen werden die Abszissen- und Ordinatenwerte eines Punktes unabhängig voneinander interpoliert. Da die Geschwindigkeit der Interpolation jedoch durch eine einzige [Easing-Funktion](/de/docs/Web/CSS/easing-function) für beide Koordinaten bestimmt wird, bewegt sich der Punkt auf einer geraden Linie.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Gültige Positionen

```plain example-good
center
left
center top

right 8.5%
bottom 12vmin right -6px

10% 20%
8rem 14px
```

### Ungültige Positionen

```plain example-bad
left right
bottom top
10px 15px 20px 15px
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Values and Units](/de/docs/Web/CSS/CSS_Values_and_Units)
- [Einführung in CSS-Werte und -Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units)
- {{cssxref("background-position")}}
- {{cssxref("gradient/radial-gradient", "radial-gradient()")}}
- {{cssxref("gradient/conic-gradient", "conic-gradient()")}}
