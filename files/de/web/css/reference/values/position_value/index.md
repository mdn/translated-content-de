---
title: <position>
slug: Web/CSS/Reference/Values/position_value
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Der **`<position>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) bezeichnet eine zweidimensionale Koordinate, die verwendet wird, um eine Position relativ zu einem Element-Box festzulegen. Er wird in den Eigenschaften {{cssxref("background-position")}}, {{cssxref("object-position")}}, {{cssxref("mask-position")}}, {{cssxref("offset-position")}}, {{cssxref("offset-anchor")}} und {{cssxref("transform-origin")}} genutzt.

> [!NOTE]
> Die endgültige Position, die durch den `<position>`-Wert beschrieben wird, muss sich nicht innerhalb der Box des Elements befinden.

## Syntax

![Gitter, das die Platzierung verschiedener Werte zeigt. 0 0 ist die obere linke Ecke. Die vier Werte, right, right center, center left 100% und top 50% left 100%, sind alle gleichwertig und befinden sich an der rechten Kante in der Mitte vertikal. Die beiden Werte, top 75px left 100px und left 100px top 75px, sind identisch. Bottom left 25% entspricht top 100% left 25%.](position_type.png)

Der `<position>`-Datentyp wird mit einem oder zwei Schlüsselwörtern und optionalen Versätzen angegeben.

Die Schlüsselwortwerte sind `center`, `top`, `right`, `bottom` und `left`. Jedes Schlüsselwort repräsentiert entweder eine Kante der Box des Elements oder die Mittellinie zwischen zwei Kanten. Abhängig vom Kontext repräsentiert `center` entweder die Mitte zwischen den linken und rechten Kanten oder die Mitte zwischen den oberen und unteren Kanten.

Falls angegeben, kann ein Versatz entweder ein relativer {{cssxref("&lt;percentage&gt;")}}-Wert oder ein absoluter {{cssxref("&lt;length&gt;")}}-Wert sein. Positive Werte verschieben sich entsprechend nach rechts oder unten. Negative Werte verschieben sich in die entgegengesetzten Richtungen.

Wird nur ein einziger Versatzwert angegeben, definiert dieser die x-Koordinate, wobei der Wert für die andere Achse standardmäßig `center` ist.

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

Bei Animationen werden die Abszissen- und Ordinatenwerte eines Punktes unabhängig voneinander interpoliert. Da jedoch die Geschwindigkeit der Interpolation für beide Koordinaten durch eine einzelne [Easing-Funktion](/de/docs/Web/CSS/Reference/Values/easing-function) bestimmt wird, bewegt sich der Punkt in einer geraden Linie.

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

- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_values_and_units)-Modul
- [Lernen: CSS-Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- {{cssxref("background-position")}}
- {{cssxref("gradient/radial-gradient", "radial-gradient()")}}
- {{cssxref("gradient/conic-gradient", "conic-gradient()")}}
