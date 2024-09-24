---
title: <Position>
slug: Web/CSS/position_value
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Der **`<position>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) bezeichnet eine zweidimensionale Koordinate, die verwendet wird, um eine Position relativ zu einer Elementbox festzulegen. Er wird in den Eigenschaften {{cssxref("background-position")}}, {{cssxref("object-position")}}, {{cssxref("mask-position")}}, {{cssxref("offset-position")}}, {{cssxref("offset-anchor")}} und {{cssxref("transform-origin")}} verwendet.

> [!NOTE]
> Die durch den `<position>`-Wert beschriebene endgültige Position muss sich nicht innerhalb der Box des Elements befinden.

## Syntax

![Raster, das die Platzierung verschiedener Werte zeigt. 0 0 ist die obere linke Ecke. Die vier Werte, rechts, rechts zentriert, Mitte links 100% und oben 50% links 100%, sind alle gleichwertig und befinden sich am rechten Rand in der Mitte vertikal. Die beiden Werte, oben 75px links 100px und links 100px oben 75px, sind identisch. Unten links 25% entspricht oben 100% links 25%.](position_type.png)

Der `<position>`-Datentyp wird mit einem oder zwei Schlüsselwörtern angegeben, mit optionalen Versätzen.

Die Schlüsselwortwerte sind `center`, `top`, `right`, `bottom` und `left`. Jedes Schlüsselwort repräsentiert entweder eine Kante der Elementbox oder die Mittellinie zwischen zwei Kanten. Je nach Kontext repräsentiert `center` entweder die Mitte zwischen den linken und rechten Kanten oder die Mitte zwischen den oberen und unteren Kanten.

Falls angegeben, kann ein Offset entweder ein relatives {{cssxref("&lt;percentage&gt;")}}-Wert oder ein absoluter {{cssxref("&lt;length&gt;")}}-Wert sein. Positive Werte werden nach rechts oder unten verschoben, je nach dem, was zutrifft. Negative Werte werden in die entgegengesetzten Richtungen verschoben.

Wenn nur ein einzelner Offset-Wert angegeben wird, definiert er die x-Koordinate, wobei der Wert für die andere Achse standardmäßig auf `center` gesetzt wird.

```css
/* 1-Wert-Syntax */
keyword                  /* Entweder die horizontale oder vertikale Position; die andere Achse standardisiert auf center */
value                    /* Die Position auf der x-Achse; die y-Achse standardisiert auf 50% */

/* 2-Wert-Syntax */
keyword keyword          /* Ein Schlüsselwort für jede Richtung (die Reihenfolge ist irrelevant) */
keyword value            /* Ein Schlüsselwort für die horizontale Position, Wert für die vertikale Position */
value keyword            /* Ein Wert für die horizontale Position, Schlüsselwort für die vertikale Position */
value value              /* Ein Wert für jede Richtung (horizontal dann vertikal) */

/* 4-Wert-Syntax */
keyword value keyword value /* Jeder Wert ist ein Offset von dem vorhergehenden Schlüsselwort */
```

> [!NOTE]
> Die {{cssxref("background-position")}} Eigenschaft akzeptiert auch eine Drei-Wert-Syntax. Diese ist in anderen Eigenschaften, die `<position>` verwenden, nicht erlaubt.

## Interpolation

Wenn animiert, werden die Abszissen- und Ordinatenwerte eines Punktes unabhängig voneinander interpoliert. Da jedoch die Geschwindigkeit der Interpolation durch eine einzige [Easing-Funktion](/de/docs/Web/CSS/easing-function) für beide Koordinaten bestimmt wird, bewegt sich der Punkt in einer geraden Linie.

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units)
- [Einführung in CSS-Werte und Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units)
- {{cssxref("background-position")}}
- {{cssxref("gradient/radial-gradient", "radial-gradient()")}}
- {{cssxref("gradient/conic-gradient", "conic-gradient()")}}
