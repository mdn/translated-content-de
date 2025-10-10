---
title: Kurzschreibweisen
slug: Web/CSS/CSS_cascade/Shorthand_properties
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

**_Kurzschreibweisen_** sind CSS-Eigenschaften, die es Ihnen ermöglichen, die Werte mehrerer anderer CSS-Eigenschaften gleichzeitig festzulegen. Durch die Verwendung einer Kurzschreibweise können Sie prägnantere (und oft lesbarere) Stylesheets schreiben, was Zeit und Energie spart.

Die CSS-Spezifikation definiert Kurzschreibweisen, um die Definition von gemeinsamen Eigenschaften, die auf dasselbe Thema wirken, zu gruppieren. Beispielsweise ist die CSS-{{cssxref("background")}}-Eigenschaft eine Kurzschreibweise, die die Werte von {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-repeat")}} und {{cssxref("background-position")}} definieren kann. Ähnlich können die häufigsten schriftbezogenen Eigenschaften mit der Kurzschreibweise {{cssxref("font")}} definiert werden, und die verschiedenen Ränder um eine Box können mit der {{cssxref("margin")}}-Kurzschreibweise definiert werden.

## Schwierige Sonderfälle

Es gibt einige Sonderfälle, die Sie im Auge behalten sollten, wenn Sie Kurzschreibweisen verwenden.

### Weglassen von Eigenschaften

Ein Wert, der nicht angegeben ist, wird auf seinen Anfangswert gesetzt. Das bedeutet, dass er **über vorher festgelegte Werte** überschreibt. Zum Beispiel:

```css
p {
  background-color: red;
  background: url("images/bg.gif") no-repeat left top;
}
```

Dies wird die Hintergrundfarbe nicht auf `red` setzen, sondern auf den Standardwert für {{cssxref("background-color")}}, der `transparent` ist.

Nur die Werte der einzelnen Eigenschaften können erben. Da fehlende Werte durch ihre Anfangswerte ersetzt werden, ist es unmöglich, die Vererbung von einzelnen Eigenschaften durch Weglassen zu ermöglichen. Das Schlüsselwort `inherit` kann auf eine Eigenschaft angewendet werden, aber nur als Ganzes, nicht als Schlüsselwort für einen bestimmten Wert oder einen anderen. Das bedeutet, dass die einzige Möglichkeit, einen bestimmten Wert erben zu lassen, darin besteht, die Langschreibweise mit dem Schlüsselwort `inherit` zu verwenden.

### Reihenfolge der Eigenschaften

Kurzschreibweisen versuchen nicht, eine spezifische Reihenfolge für die Werte der Eigenschaften, die sie ersetzen, zu erzwingen. Dies funktioniert gut, wenn diese Eigenschaften Werte unterschiedlichen Typs verwenden, da die Reihenfolge keine Bedeutung hat, aber das funktioniert nicht so einfach, wenn mehrere Eigenschaften identische Werte haben können.

Zwei wichtige Fälle hier sind:

- Eigenschaften, die sich auf die Kanten einer Box beziehen, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}
- Eigenschaften, die sich auf die Ecken einer Box beziehen, wie {{cssxref("border-radius")}}

#### Kanten einer Box

Kurzschreibweisen, die sich auf Eigenschaften an den Kanten einer Box beziehen, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}, verwenden immer eine konsistente 1-bis-4-Werte-Syntax, die diese Kanten repräsentiert:

- **1-Wert-Syntax:** `border-width: 1em` — Der einzelne Wert repräsentiert alle Kanten: ![Boxkanten mit Ein-Wert-Syntax](border1.png)

- **2-Werte-Syntax:** `border-width: 1em 2em` — Der erste Wert repräsentiert die vertikalen, also die oberen und unteren Kanten, der zweite die horizontalen, also die linken und rechten: ![Boxkanten mit Zwei-Werte-Syntax](border2.png)

- **3-Werte-Syntax:** `border-width: 1em 2em 3em` — Der erste Wert repräsentiert die obere Kante, der zweite die horizontalen, also die linken und rechten, und der dritte Wert die untere Kante: ![Boxkanten mit Drei-Werte-Syntax](border3.png)

- **4-Werte-Syntax:** `border-width: 1em 2em 3em 4em` — Die vier Werte repräsentieren die obere, rechte, untere und linke Kante jeweils in dieser Reihenfolge, das heißt im Uhrzeigersinn beginnend oben: ![Boxkanten mit Vier-Werte-Syntax](border4.png) Der Anfangsbuchstabe der Top-Right-Bottom-Left entspricht der Reihenfolge der Konsonanten des Wortes _trouble_: TRBL. Sie können es sich auch als die Reihenfolge merken, in der die Zeiger auf einer Uhr rotieren würden: `1em` beginnt in der 12-Uhr-Position, dann `2em` in der 3-Uhr-Position, dann `3em` in der 6-Uhr-Position und `4em` in der 9-Uhr-Position.

#### Ecken einer Box

Ähnlich verwenden Kurzschreibweisen, die sich auf Eigenschaften an den Ecken einer Box beziehen, wie {{cssxref("border-radius")}}, immer eine konsistente 1-bis-4-Werte-Syntax, die diese Ecken repräsentiert:

- **1-Wert-Syntax:** `border-radius: 1em` — Der einzelne Wert repräsentiert alle Ecken: ![Boxecken mit Ein-Wert-Syntax](corner1.png)

- **2-Werte-Syntax:** `border-radius: 1em 2em` — Der erste Wert repräsentiert die obere linke und die untere rechte Ecke, der zweite die obere rechte und die untere linke: ![Boxecken mit Zwei-Werte-Syntax](corner2.png)

- **3-Werte-Syntax:** `border-radius: 1em 2em 3em` — Der erste Wert repräsentiert die obere linke Ecke, der zweite die obere rechte und untere linke, und der dritte Wert die untere rechte Ecke: ![Boxecken mit Drei-Werte-Syntax](corner3.png)

- **4-Werte-Syntax:** `border-radius: 1em 2em 3em 4em` — Die vier Werte repräsentieren die obere linke, obere rechte, untere rechte und untere linke Ecke jeweils in dieser Reihenfolge, das heißt im Uhrzeigersinn beginnend in der oberen linken Ecke: ![Boxecken mit Vier-Werte-Syntax](corner4.png)

## Hintergrund-Eigenschaften

Betrachten Sie einen Hintergrund mit den folgenden Eigenschaften

```css
background-color: black;
background-image: url("images/bg.gif");
background-repeat: no-repeat;
background-position: left top;
```

Diese vier Deklarationen können auf nur eine verkürzt werden:

```css
background: black url("images/bg.gif") no-repeat left top;
```

(Die Kurzschreibform entspricht tatsächlich den oben stehenden Langschreibweisen plus `background-attachment: scroll` und, in CSS3, einigen zusätzlichen Eigenschaften.)

Siehe {{cssxref("background")}} für detailliertere Informationen, einschließlich CSS3-Eigenschaften.

## Schrift-Eigenschaften

Betrachten Sie die folgenden Deklarationen:

```css
font-style: italic;
font-weight: bold;
font-size: 0.8em;
line-height: 1.2;
font-family: Arial, sans-serif;
```

Diese 5 Anweisungen können wie folgt verkürzt werden:

```css
font:
  italic bold 0.8em/1.2 Arial,
  sans-serif;
```

Diese Kurzschreibdeklaration entspricht tatsächlich den oben stehenden Langschreibe-Deklarationen plus `font-variant: normal`, `font-size-adjust: none` und `font-stretch: normal`.

## Rahmen-Eigenschaften

Bei Rahmen können Breite, Farbe und Stil in einer einzigen Deklaration vereinfacht werden. Betrachten Sie beispielsweise das folgende CSS:

```css
border-width: 1px;
border-style: solid;
border-color: black;
```

Es kann vereinfacht werden als:

```css
border: 1px solid black;
```

## Rand- und Auffüllungseigenschaften

Kurzschreibversionen von Rand- und Auffüllungswerten funktionieren ähnlich; die Eigenschaft `margin` ermöglicht es, Kurzschreibwerte anzugeben, die ein, zwei, drei oder vier Werte verwenden. Betrachten Sie die folgenden CSS-Deklarationen:

```css
margin-top: 10px;
margin-right: 5px;
margin-bottom: 10px;
margin-left: 5px;
```

Sie entsprechen der folgenden Deklaration unter Verwendung der Vier-Werte-Kurzschreibweise. Beachten Sie, dass die Werte im Uhrzeigersinn in der Reihenfolge: oben, rechts, unten, dann links (TRBL, die Konsonanten in "trouble") angegeben sind.

```css
margin: 10px 5px 10px 5px;
```

Kurzschreibregeln für Randangaben mit einem, zwei, drei und vier Werten sind:

- Wenn **ein** Wert angegeben wird, gilt der gleiche Rand für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben werden, gilt der erste Rand für **oben und unten**, der zweite für **links und rechts**.
- Wenn **drei** Werte angegeben werden, gilt der erste Rand für **oben**, der zweite für **links und rechts**, der dritte für **unten**.
- Wenn **vier** Werte angegeben werden, gelten die Ränder in der Reihenfolge (im Uhrzeigersinn): **oben**, **rechts**, **unten** und **links**.

## Positions-Eigenschaften

Bei Positionen können die Kurzschreibversionen von oben, rechts, unten und links zu einer Deklaration vereinfacht werden. Betrachten Sie beispielsweise das folgende CSS:

```css
top: 0;
right: 20px;
bottom: 0;
left: 20px;
```

Es kann vereinfacht werden als:

```css
inset: 0 20px 0 20px;
```

Genau wie bei Rändern und Auffüllungen sind die Einfügewertwerte im Uhrzeigersinn geordnet - oben, rechts, unten, dann links (TRBL).

## Die universelle Kurzschreibweise

CSS bietet eine universelle Kurzschreibweise, {{cssxref("all")}}, die ihren Wert auf jede Eigenschaft im Dokument anwendet. Ihr Zweck ist es, das Vererbung-Modell der Eigenschaften zu ändern.

Siehe [Konflikte handhaben](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) oder [Einführung in den CSS-Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade) für weitere Informationen darüber, wie Vererbung in CSS funktioniert.

## Kurzschreibweisen

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

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [At-rules](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Einführung in den CSS-Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Lernen: Konflikte handhaben](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadierungsebenen](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- Modul [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade)
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
- [Anfangs](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value), [berechnet](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value), [verwendet](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value), und [tatsächliche](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value) Werte
- [Wertedefinitionssyntax](/de/docs/Web/CSS/CSS_values_and_units/Value_definition_syntax)
