---
title: <position>
slug: Web/CSS/position_value
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Der **`<position>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) bezeichnet eine zweidimensionale Koordinate, die verwendet wird, um eine Position relativ zu einem Element-Box festzulegen. Er wird in den Eigenschaften {{cssxref("background-position")}}, {{cssxref("object-position")}}, {{cssxref("mask-position")}}, {{cssxref("offset-position")}}, {{cssxref("offset-anchor")}} und {{cssxref("transform-origin")}} verwendet.

> [!NOTE]
> Die durch den `<position>`-Wert beschriebene endgültige Position muss sich nicht innerhalb der Box des Elements befinden.

## Syntax

![Raster, das die Platzierung verschiedener Werte zeigt. 0 0 ist die obere linke Ecke. Die vier Werte, right, right center, center left 100%, und top 50% left 100% sind alle äquivalent und befinden sich am rechten Rand in der Mitte vertikal. Die beiden Werte, top 75px left 100px und left 100px top 75px, sind gleich. Bottom left 25% ist gleichbedeutend mit top 100% left 25%.](position_type.png)

Der `<position>`-Datentyp wird mit einem oder zwei Schlüsselwörtern angegeben, mit optionalen Versatzangaben.

Die Schlüsselwortwerte sind `center`, `top`, `right`, `bottom` und `left`. Jedes Schlüsselwort repräsentiert entweder einen Rand der Box des Elements oder die Mittellinie zwischen zwei Rändern. Abhängig vom Kontext repräsentiert `center` entweder die Mitte zwischen dem linken und rechten Rand oder die Mitte zwischen dem oberen und unteren Rand.

Falls angegeben, kann ein Versatz entweder ein relatives {{cssxref("&lt;percentage&gt;")}}-Wert oder ein absolutes {{cssxref("&lt;length&gt;")}}-Wert sein. Positive Werte bewirken einen Versatz nach rechts oder unten, je nachdem, was zutrifft. Negative Werte bewirken einen Versatz in die entgegengesetzten Richtungen.

Wenn nur ein einzelner Versatzwert angegeben wird, definiert dieser die x-Koordinate, während der Wert für die andere Achse auf `center` voreingestellt wird.

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
> Die Eigenschaft {{cssxref("background-position")}} akzeptiert auch eine Dreiwert-Syntax. Diese ist bei anderen Eigenschaften, die `<position>` verwenden, nicht erlaubt.

## Interpolation

Bei der Animation werden die Abszisse- und Ordinatenwerte eines Punktes unabhängig voneinander interpoliert. Da die Geschwindigkeit der Interpolation jedoch durch eine einzige [Easing-Funktion](/de/docs/Web/CSS/easing-function) für beide Koordinaten bestimmt wird, bewegt sich der Punkt in einer geraden Linie.

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
- [Learn: CSS Values and units](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- {{cssxref("background-position")}}
- {{cssxref("gradient/radial-gradient", "radial-gradient()")}}
- {{cssxref("gradient/conic-gradient", "conic-gradient()")}}
