---
title: <position>
slug: Web/CSS/position_value
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`<position>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) bezeichnet ein zweidimensionales Koordinatensystem, das verwendet wird, um eine Position relativ zu einem Elementrahmen festzulegen. Es wird in den Eigenschaften {{cssxref("background-position")}}, {{cssxref("object-position")}}, {{cssxref("mask-position")}}, {{cssxref("offset-position")}}, {{cssxref("offset-anchor")}} und {{cssxref("transform-origin")}} verwendet.

> [!NOTE]
> Die durch den `<position>` Wert beschriebene Endposition muss sich nicht innerhalb des Elementrahmens befinden.

## Syntax

![Raster zeigt die Platzierung verschiedener Werte. 0 0 ist die obere linke Ecke. Die vier Werte, right, right center, center left 100%, und top 50% left 100%, sind alle gleichwertig, da sie sich an der rechten Kante in der Mitte vertikal befinden. Die beiden Werte, top 75px left 100px und left 100px top 75px, sind identisch. Bottom left 25% ist gleich wie top 100% left 25%.](position_type.png)

Der `<position>` Datentyp wird mit einem oder zwei Schlüsselwörtern und optionalen Versätzen angegeben.

Die Schlüsselwortwerte sind `center`, `top`, `right`, `bottom` und `left`. Jedes Schlüsselwort repräsentiert entweder eine Kante des Elementrahmens oder die Mittellinie zwischen zwei Kanten. Je nach Kontext repräsentiert `center` entweder die Mitte zwischen den linken und rechten Kanten oder die Mitte zwischen den oberen und unteren Kanten.

Falls angegeben, kann ein Versatz entweder ein relativer {{cssxref("&lt;percentage&gt;")}} Wert oder ein absoluter {{cssxref("&lt;length&gt;")}} Wert sein. Positive Werte werden in Richtung rechts oder unten versetzt, je nachdem, was angemessen ist. Negative Werte werden in die entgegengesetzten Richtungen versetzt.

Wenn nur ein einziger Versatzwert angegeben ist, definiert er die x-Koordinate, wobei der Wert für die andere Achse standardmäßig auf `center` gesetzt wird.

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
> Die {{cssxref("background-position")}} Eigenschaft akzeptiert auch eine dreiwertige Syntax. Dies ist bei anderen Eigenschaften, die `<position>` verwenden, nicht erlaubt.

## Interpolation

Bei der Animation werden die Abszisse und Ordinate eines Punktes unabhängig voneinander interpoliert. Da jedoch die Geschwindigkeit der Interpolation durch eine einzelne [Easing-Funktion](/de/docs/Web/CSS/easing-function) für beide Koordinaten bestimmt wird, wird sich der Punkt in einer geraden Linie bewegen.

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

- [CSS Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
- [Lernen: CSS Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- {{cssxref("background-position")}}
- {{cssxref("gradient/radial-gradient", "radial-gradient()")}}
- {{cssxref("gradient/conic-gradient", "conic-gradient()")}}
