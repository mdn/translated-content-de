---
title: <position>
slug: Web/CSS/position_value
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Der **`<position>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types) bezeichnet eine zweidimensionale Koordinate, die verwendet wird, um eine Position relativ zu einem Elementkasten festzulegen. Er wird in den Eigenschaften {{cssxref("background-position")}}, {{cssxref("object-position")}}, {{cssxref("mask-position")}} {{cssxref("offset-position")}}, {{cssxref("offset-anchor")}} und {{cssxref("transform-origin")}} verwendet.

> [!NOTE]
> Die durch den `<position>`-Wert beschriebene Endposition muss sich nicht innerhalb des Elements befinden.

## Syntax

![Gitter, das die Platzierung verschiedener Werte zeigt. 0 0 ist die obere linke Ecke. Die vier Werte, right, right center, center left 100%, und top 50% left 100%, sind alle gleichwertig, da sie am rechten Rand in der Mitte vertikal liegen. Die beiden Werte, top 75px left 100px und left 100px top 75px, sind identisch. Bottom left 25% ist dasselbe wie top 100% left 25%.](position_type.png)

Der `<position>`-Datentyp wird mit ein oder zwei Schlüsselwörtern angegeben, mit optionalen Versätzen.

Die Schlüsselwortwerte sind `center`, `top`, `right`, `bottom` und `left`. Jedes Schlüsselwort repräsentiert entweder eine Kante des Elementkastens oder die Mittellinie zwischen zwei Kanten. Abhängig vom Kontext repräsentiert `center` entweder die Mitte zwischen der linken und rechten Kante oder die Mitte zwischen der oberen und unteren Kante.

Falls spezifiziert, kann ein Versatz entweder ein relatives {{cssxref("&lt;percentage&gt;")}} oder ein absolutes {{cssxref("&lt;length&gt;")}} sein. Positive Werte sind Versätze nach rechts oder unten, je nachdem, was zutrifft. Negative Werte sind Versätze in die entgegengesetzten Richtungen.

Wenn nur ein einzelner Versatzwert angegeben wird, definiert er die x-Koordinate, wobei der Wert für die andere Achse standardmäßig `center` ist.

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
> Die {{cssxref("background-position")}}-Eigenschaft akzeptiert auch eine Syntax mit drei Werten. Dies ist in anderen Eigenschaften, die `<position>` verwenden, nicht erlaubt.

## Interpolation

Bei Animationen werden die Abszissen- und Ordinatenwerte eines Punktes unabhängig voneinander interpoliert. Da jedoch die Geschwindigkeit der Interpolation durch eine einzelne [Easing-Funktion](/de/docs/Web/CSS/easing-function) für beide Koordinaten bestimmt wird, bewegt sich der Punkt in einer geraden Linie.

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

- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_values_and_units) Modul
- [Lernen: CSS-Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- {{cssxref("background-position")}}
- {{cssxref("gradient/radial-gradient", "radial-gradient()")}}
- {{cssxref("gradient/conic-gradient", "conic-gradient()")}}
