---
title: Kurzschreibweise-Eigenschaften
slug: Web/CSS/Guides/Cascade/Shorthand_properties
l10n:
  sourceCommit: ca5d9f9e63b460fc0c9e15ac57d9739e10e4ea0d
---

**_Kurzschreibweise-Eigenschaften_** sind CSS-Eigenschaften, die es Ihnen ermöglichen, die Werte mehrerer anderer CSS-Eigenschaften gleichzeitig festzulegen. Durch die Verwendung einer Kurzschreibweise-Eigenschaft können Sie prägnantere (und oft besser lesbare) Stylesheets schreiben und dabei Zeit und Energie sparen.

Die CSS-Spezifikation definiert Kurzschreibweise-Eigenschaften, um die Definition gängiger Eigenschaften zu gruppieren, die auf dasselbe Thema wirken. Beispielsweise ist die CSS-Eigenschaft {{cssxref("background")}} eine Kurzschreibweise-Eigenschaft, die es ermöglicht, die Werte von {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-repeat")}} und {{cssxref("background-position")}} zu definieren. Ebenso können die häufigsten schriftbezogenen Eigenschaften mit der Kurzschreibweise {{cssxref("font")}} definiert werden, und die verschiedenen Ränder um eine Box können mit der {{cssxref("margin")}}-Kurzschreibweise definiert werden.

## Schwierige Grenzfälle

Es gibt einige Grenzfälle, die beim Einsatz von Kurzschreibweise-Eigenschaften beachtet werden sollten.

### Eigenschaften auslassen

Ein Wert, der nicht angegeben wird, wird auf seinen Anfangswert gesetzt. Das bedeutet, dass er zuvor gesetzte Werte **überschreibt**. Zum Beispiel:

```css
p {
  background-color: red;
  background: url("images/bg.gif") no-repeat left top;
}
```

Dies wird die Hintergrundfarbe nicht auf `red` setzen, sondern auf den Standardwert für {{cssxref("background-color")}}, welcher `transparent` ist.

Nur die individuellen Eigenschaftenwerte können vererben. Da fehlende Werte durch ihren Anfangswert ersetzt werden, ist es unmöglich, die Vererbung von individuellen Eigenschaften zu erlauben, indem man sie weglässt. Das Schlüsselwort `inherit` kann auf eine Eigenschaft angewendet werden, jedoch nur als Ganzes, nicht als Schlüsselwort für einen bestimmten Wert oder einen anderen. Das bedeutet, dass der einzige Weg, um einen bestimmten Wert vererben zu lassen, die langfassige Eigenschaft mit dem Schlüsselwort `inherit` zu verwenden.

### Reihenfolge der Eigenschaften

Kurzschreibweise-Eigenschaften versuchen, keine bestimmte Reihenfolge für die Werte der Eigenschaften vorzuschreiben, die sie ersetzen. Dies funktioniert gut, wenn diese Eigenschaften Werte unterschiedlicher Typen verwenden, da die Reihenfolge keine Wichtigkeit hat, aber es funktioniert nicht so leicht, wenn mehrere Eigenschaften identische Werte haben können.

Zwei wichtige Fälle sind hier:

- Eigenschaften, die sich auf die Kanten eines Kastens beziehen, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}
- Eigenschaften, die sich auf die Ecken eines Kastens beziehen, wie {{cssxref("border-radius")}}

#### Kanten eines Kastens

Kurzschreibweisen, die Eigenschaften in Bezug auf Kanten eines Kastens behandeln, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}, verwenden immer eine konsistente 1-zu-4-Wert-Syntax, die diese Kanten darstellt:

- **1-Wert-Syntax:** `border-width: 1em` — Der Einzelwert repräsentiert alle Kanten: ![Kanten eines Kastens mit Ein-Wert-Syntax](border1.png)

- **2-Wert-Syntax:** `border-width: 1em 2em` — Der erste Wert repräsentiert die vertikalen, das heißt oben und unten, Kanten, der zweite die horizontalen Kanten, das heißt die linken und rechten: ![Kanten eines Kastens mit Zwei-Wert-Syntax](border2.png)

- **3-Wert-Syntax:** `border-width: 1em 2em 3em` — Der erste Wert repräsentiert die obere Kante, der zweite die horizontalen, das heißt die linken und rechten, und der dritte Wert die untere Kante: ![Kanten eines Kastens mit Drei-Wert-Syntax](border3.png)

- **4-Wert-Syntax:** `border-width: 1em 2em 3em 4em` — Die vier Werte repräsentieren die obere, rechte, untere und linke Kante jeweils in dieser Reihenfolge, das heißt im Uhrzeigersinn beginnend oben: ![Kanten eines Kastens mit Vier-Wert-Syntax](border4.png) Der Anfangsbuchstabe von Oben-Rechts-Unten-Links entspricht der Reihenfolge der Konsonanten im Wort _trouble_: TRBL. Sie können es sich auch als die Reihenfolge merken, in der die Zeiger auf einer Uhr rotieren würden: `1em` beginnt auf der 12 Uhr Position, dann `2em` auf der 3 Uhr Position, dann `3em` auf der 6 Uhr Position und `4em` auf der 9 Uhr Position.

#### Ecken eines Kastens

Ähnlich verwenden Kurzschreibweisen, die sich auf die Ecken eines Kastens beziehen, wie {{cssxref("border-radius")}}, immer eine konsistente 1-zu-4-Wert-Syntax, die diese Ecken darstellt:

- **1-Wert-Syntax:** `border-radius: 1em` — Der Einzelwert repräsentiert alle Ecken: ![Ecken eines Kastens mit Ein-Wert-Syntax](corner1.png)

- **2-Wert-Syntax:** `border-radius: 1em 2em` — Der erste Wert repräsentiert die obere linke und untere rechte Ecke, der zweite die obere rechte und untere linke Ecke: ![Ecken eines Kastens mit Zwei-Wert-Syntax](corner2.png)

- **3-Wert-Syntax:** `border-radius: 1em 2em 3em` — Der erste Wert repräsentiert die obere linke Ecke, der zweite die obere rechte und untere linke Ecke, und der dritte Wert die untere rechte Ecke: ![Ecken eines Kastens mit Drei-Wert-Syntax](corner3.png)

- **4-Wert-Syntax:** `border-radius: 1em 2em 3em 4em` — Die vier Werte repräsentieren die obere linke, obere rechte, untere rechte und untere linke Ecke jeweils in dieser Reihenfolge, das heißt im Uhrzeigersinn beginnend oben links: ![Ecken eines Kastens mit Vier-Wert-Syntax](corner4.png)

## Hintergrund-Eigenschaften

Betrachten Sie einen Hintergrund mit den folgenden Eigenschaften

```css
background-color: black;
background-image: url("images/bg.gif");
background-repeat: no-repeat;
background-position: left top;
```

Diese vier Deklarationen können auf eine einzige verkürzt werden:

```css
background: black url("images/bg.gif") no-repeat left top;
```

(Die Kurzform entspricht eigentlich den ausführlichen Eigenschaften oben plus `background-attachment: scroll` und, in CSS3, einige zusätzliche Eigenschaften.)

Siehe {{cssxref("background")}} für detailliertere Informationen, einschließlich der CSS3-Eigenschaften.

## Schrift-Eigenschaften

Betrachten Sie die folgenden Deklarationen:

```css
font-style: italic;
font-weight: bold;
font-size: 0.8em;
line-height: 1.2;
font-family: "Arial", sans-serif;
```

Diese 5 Anweisungen können auf die folgende verkürzt werden:

```css
font:
  italic bold 0.8em/1.2 "Arial",
  sans-serif;
```

Diese Kurzform-Deklaration entspricht eigentlich den ausführlichen Deklarationen oben plus `font-variant: normal`, `font-size-adjust: none` und `font-stretch: normal`.

## Rahmen-Eigenschaften

Bei Rahmen können die Breite, die Farbe und der Stil in einer Deklaration vereinfacht werden. Betrachten Sie zum Beispiel die folgende CSS:

```css
border-width: 1px;
border-style: solid;
border-color: black;
```

Sie kann vereinfacht werden auf:

```css
border: 1px solid black;
```

## Rand- und Innenabstand-Eigenschaften

Kurzfassungen von Rand- und Innenabstandswerten funktionieren ähnlich; die Margin-Eigenschaft erlaubt, Kurzformen mit einem, zwei, drei oder vier Werten anzugeben. Betrachten Sie die folgenden CSS-Deklarationen:

```css
margin-top: 10px;
margin-right: 5px;
margin-bottom: 10px;
margin-left: 5px;
```

Sie sind identisch mit der folgenden Deklaration unter Verwendung der Vier-Wert-Kurzform. Beachten Sie, dass die Werte im Uhrzeigersinn angeordnet sind, beginnend oben: oben, rechts, unten, dann links (TRBL, die Konsonanten in "trouble").

```css
margin: 10px 5px 10px 5px;
```

Die Kurzform-Regeln für einen, zwei, drei und vier Wert-Deklarationen sind:

- Wenn **ein** Wert angegeben wird, gilt dieser Rand für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben werden, gilt der erste Rand für **oben und unten**, der zweite für **links und rechts**.
- Wenn **drei** Werte angegeben werden, gilt der erste Rand für **oben**, der zweite für **links und rechts**, der dritte für **unten**.
- Wenn **vier** Werte angegeben werden, gelten die Ränder in der Reihenfolge (im Uhrzeigersinn) für **oben**, **rechts**, **unten** und **links**.

## Positions-Eigenschaften

Bei Position können die Kurzformen von oben, rechts, unten und links in einer Deklaration vereinfacht werden. Betrachten Sie zum Beispiel die folgende CSS:

```css
top: 0;
right: 20px;
bottom: 0;
left: 20px;
```

Sie kann vereinfacht werden auf:

```css
inset: 0 20px 0 20px;
```

Genau wie Ränder und Innenabstände sind die Einfügewerte im Uhrzeigersinn angeordnet - oben, rechts, unten, dann links (TRBL).

## Die universelle Kurzschreibweise-Eigenschaft

CSS bietet eine universelle Kurzschreibweise-Eigenschaft, {{cssxref("all")}}, die ihren Wert auf jede Eigenschaft im Dokument anwendet. Ihr Zweck ist es, das Vererbungsmodell der Eigenschaften zu ändern.

Siehe [Konflikte verwalten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) oder [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction) für weitere Informationen darüber, wie Vererbung in CSS funktioniert.

## Kurzschreibweise-Eigenschaften

- {{cssxref("all")}}
- {{cssxref("animation")}}
- {{cssxref("animation-range")}}
- {{cssxref("background")}}
- {{cssxref("border")}}
- {{cssxref("border-block")}}
- {{cssxref("border-block-end")}}
- {{cssxref("border-block-start")}}
- {{cssxref("border-bottom")}}
- {{cssxref("border-color")}}
- {{cssxref("border-image")}}
- {{cssxref("border-inline")}}
- {{cssxref("border-inline-end")}}
- {{cssxref("border-inline-start")}}
- {{cssxref("border-left")}}
- {{cssxref("border-radius")}}
- {{cssxref("border-right")}}
- {{cssxref("border-style")}}
- {{cssxref("border-top")}}
- {{cssxref("border-width")}}
- {{cssxref("column-rule")}}
- {{cssxref("columns")}}
- {{cssxref("contain-intrinsic-size")}}
- {{cssxref("container")}}
- {{cssxref("flex")}}
- {{cssxref("flex-flow")}}
- {{cssxref("font")}}
- {{cssxref("font-synthesis")}}
- {{cssxref("font-variant")}}
- {{cssxref("gap")}}
- {{cssxref("grid")}}
- {{cssxref("grid-area")}}
- {{cssxref("grid-column")}}
- {{cssxref("grid-row")}}
- {{cssxref("grid-template")}}
- {{cssxref("inset")}}
- {{cssxref("inset-block")}}
- {{cssxref("inset-inline")}}
- {{cssxref("list-style")}}
- {{cssxref("margin")}}
- {{cssxref("margin-block")}}
- {{cssxref("margin-inline")}}
- {{cssxref("mask")}}
- {{cssxref("mask-border")}}
- {{cssxref("offset")}}
- {{cssxref("outline")}}
- {{cssxref("overflow")}}
- {{cssxref("overscroll-behavior")}}
- {{cssxref("padding")}}
- {{cssxref("padding-block")}}
- {{cssxref("padding-inline")}}
- {{cssxref("place-content")}}
- {{cssxref("place-items")}}
- {{cssxref("place-self")}}
- {{cssxref("position-try")}}
- {{cssxref("scroll-margin")}}
- {{cssxref("scroll-margin-block")}}
- {{cssxref("scroll-margin-inline")}}
- {{cssxref("scroll-padding")}}
- {{cssxref("scroll-padding-block")}}
- {{cssxref("scroll-padding-inline")}}
- {{cssxref("scroll-timeline")}}
- {{cssxref("text-box")}}
- {{cssxref("text-decoration")}}
- {{cssxref("text-emphasis")}}
- {{cssxref("text-wrap")}}
- {{cssxref("transition")}}
- {{cssxref("view-timeline")}}
- {{cssxref("-webkit-text-stroke")}}
- {{cssxref("-webkit-border-before")}}
- {{cssxref("-webkit-mask-box-image")}}

## Siehe auch

- [Modul für CSS-Kaskade und Vererbung](/de/docs/Web/CSS/Guides/Cascade)
- [Einführung in die CSS-Syntax: Deklarationen, Regelsets, und Anweisungen](/de/docs/Web/CSS/Guides/Syntax/Introduction)
- [At-Rules](/de/docs/Web/CSS/Guides/Syntax/At-rules)
- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction)
- [Lernen: Konflikte verwalten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model)
- Werte: [initial](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value), [berechnet](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value), [verwendet](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value), und [tatsächlich](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value)
- [Wertdefinierungssyntax](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
