---
title: Kurzschreibweise für Eigenschaften
slug: Web/CSS/Guides/Cascade/Shorthand_properties
l10n:
  sourceCommit: 41d437c9dfc5417430d9632ce7196f5817048cbc
---

**_Kurzschreibweise für Eigenschaften_** sind CSS-Eigenschaften, die es Ihnen ermöglichen, die Werte mehrerer anderer CSS-Eigenschaften gleichzeitig festzulegen. Durch die Verwendung einer Kurzformeigenschaft können Sie kürzere (und oft lesbarere) Stylesheets erstellen und dabei Zeit und Aufwand sparen.

Die CSS-Spezifikation definiert Kurzformeigenschaften, um die Definition von gemeinsamen Eigenschaften, die auf dasselbe Thema wirken, zusammenzufassen. Beispielsweise ist die CSS {{cssxref("background")}} Eigenschaft eine Kurzformeigenschaft, mit der die Werte von {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-repeat")}} und {{cssxref("background-position")}} definiert werden können. In ähnlicher Weise können die häufigsten schriftbezogenen Eigenschaften mit der Kurzschreibweise {{cssxref("font")}} und die verschiedenen Abstände um eine Box herum mit der {{cssxref("margin")}} Kurzschreibweise definiert werden.

## Schwierige Sonderfälle

Es gibt einige Sonderfälle, die Sie bei der Verwendung von Kurzformeigenschaften beachten sollten.

### Auslassen von Eigenschaften

Ein Wert, der nicht angegeben ist, wird auf einen Standardwert gesetzt, der durch die Kurzschreibweise definiert ist und vom Initialwert der Eigenschaft abweichen kann.

Das bedeutet, dass er zuvor gesetzte Werte **überschreibt**. Zum Beispiel:

```css
p {
  background-color: red;
  background: url("images/bg.gif") no-repeat left top;
}
```

Dies setzt die Hintergrundfarbe nicht auf `red`, sondern auf den Standardwert für {{cssxref("background-color")}}, nämlich `transparent`.

Nur die Werte einzelner Eigenschaften können vererben. Da fehlende Werte durch ihren Anfangswert ersetzt werden, ist es unmöglich, die Vererbung einzelner Eigenschaften durch das Auslassen von Werten zu ermöglichen. Das Schlüsselwort `inherit` kann auf eine Eigenschaft angewendet werden, aber nur als Ganzes, nicht als Schlüsselwort für einen Wert oder einen anderen. Das bedeutet, dass der einzige Weg, um zu machen, dass ein bestimmter Wert vererbt wird, darin besteht, die Langschreibweise mit dem Schlüsselwort `inherit` zu verwenden.

### Reihenfolge der Eigenschaften

Kurzformeigenschaften versuchen, keine bestimmte Reihenfolge für die Werte der Eigenschaften, die sie ersetzen, zu erzwingen. Dies funktioniert gut, wenn diese Eigenschaften Werte verschiedener Typen verwenden, da die Reihenfolge keine Bedeutung hat. Dies funktioniert jedoch nicht so einfach, wenn mehrere Eigenschaften identische Werte haben können.

Zwei wichtige Fälle hier sind:

- Eigenschaften, die sich auf die Kanten einer Box beziehen, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}
- Eigenschaften, die sich auf die Ecken einer Box beziehen, wie {{cssxref("border-radius")}}

#### Kanten einer Box

Kurzschreibweisen für Eigenschaften, die sich auf die Kanten einer Box beziehen, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}, verwenden immer eine konsistente 1-zu-4-Wert Syntax, die diese Kanten repräsentiert:

- **1-Wert Syntax:** `border-width: 1em` — Der einzelne Wert repräsentiert alle Kanten: ![Boxkanten mit Ein-Wert Syntax](border1.png)

- **2-Wert Syntax:** `border-width: 1em 2em` — Der erste Wert repräsentiert die vertikalen Kanten, also oben und unten, der zweite die horizontalen, also links und rechts: ![Boxkanten mit Zwei-Wert Syntax](border2.png)

- **3-Wert Syntax:** `border-width: 1em 2em 3em` — Der erste Wert repräsentiert die obere Kante, der zweite die horizontalen, also links und rechts, und der dritte Wert die untere Kante: ![Boxkanten mit Drei-Wert Syntax](border3.png)

- **4-Wert Syntax:** `border-width: 1em 2em 3em 4em` — Die vier Werte repräsentieren die obere, rechte, untere und linke Kante in dieser Reihenfolge, also im Uhrzeigersinn beginnend oben: ![Boxkanten mit Vier-Wert Syntax](border4.png) Der Anfangsbuchstabe von Oben-Rechts-Unten-Links entspricht der Reihenfolge der Konsonanten des Wortes _trouble_: TRBL. Sie können sich dies auch als die Reihenfolge merken, in der sich die Zeiger einer Uhr drehen: `1em` beginnt auf der 12-Uhr-Position, dann `2em` auf der 3-Uhr-Position, dann `3em` auf der 6-Uhr-Position und `4em` auf der 9-Uhr-Position.

#### Ecken einer Box

In ähnlicher Weise verwenden Kurzschreibweisen für Eigenschaften, die sich auf die Ecken einer Box beziehen, wie {{cssxref("border-radius")}}, immer eine konsistente 1-zu-4-Wert Syntax, die diese Ecken repräsentiert:

- **1-Wert Syntax:** `border-radius: 1em` — Der einzelne Wert repräsentiert alle Ecken: ![Boxecken mit Ein-Wert Syntax](corner1.png)

- **2-Wert Syntax:** `border-radius: 1em 2em` — Der erste Wert repräsentiert die obere linke und untere rechte Ecke, der zweite die obere rechte und untere linke: ![Boxecken mit Zwei-Wert Syntax](corner2.png)

- **3-Wert Syntax:** `border-radius: 1em 2em 3em` — Der erste Wert repräsentiert die obere linke Ecke, der zweite die obere rechte und untere linke, und der dritte Wert die untere rechte Ecke: ![Boxecken mit Drei-Wert Syntax](corner3.png)

- **4-Wert Syntax:** `border-radius: 1em 2em 3em 4em` — Die vier Werte repräsentieren die obere linke, obere rechte, untere rechte und untere linke Ecke in dieser Reihenfolge, also im Uhrzeigersinn beginnend oben links: ![Boxecken mit Vier-Wert Syntax](corner4.png)

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

(Die Kurzform ist eigentlich das Äquivalent der oben genannten Langformeigenschaften plus `background-attachment: scroll` und in CSS3 einige zusätzliche Eigenschaften.)

Weitere detaillierte Informationen, einschließlich der CSS3-Eigenschaften, finden Sie unter {{cssxref("background")}}.

## Schrift-Eigenschaften

Betrachten Sie die folgenden Deklarationen:

```css
font-style: italic;
font-weight: bold;
font-size: 0.8em;
line-height: 1.2;
font-family: "Arial", sans-serif;
```

Diese 5 Anweisungen können wie folgt abgekürzt werden:

```css
font:
  italic bold 0.8em/1.2 "Arial",
  sans-serif;
```

Diese Kurzdeklaration entspricht eigentlich den obigen Langformdeklarationen plus `font-variant: normal`, `font-size-adjust: none` und `font-stretch: normal`.

## Rahmen-Eigenschaften

Bei Rahmen können Breite, Farbe und Stil in einer Deklaration vereinfacht werden. Betrachten Sie zum Beispiel das folgende CSS:

```css
border-width: 1px;
border-style: solid;
border-color: black;
```

Es kann wie folgt vereinfacht werden:

```css
border: 1px solid black;
```

## Rand- und Füllungseigenschaften

Kurzformen der Rand- und Füllungswerte funktionieren ähnlich; die Rand-Eigenschaft erlaubt es, Kurzanweisungen mit einem, zwei, drei oder vier Werten anzugeben. Betrachten Sie die folgenden CSS-Deklarationen:

```css
margin-top: 10px;
margin-right: 5px;
margin-bottom: 10px;
margin-left: 5px;
```

Sie sind gleichbedeutend mit der folgenden Deklaration unter Verwendung der vier Wert Kurzform. Beachten Sie, dass die Werte in Uhrzeigersinn angegeben werden, beginnend oben: oben, rechts, unten, dann links (TRBL, die Konsonanten in "trouble").

```css
margin: 10px 5px 10px 5px;
```

Die Kurzformregeln für Ränder für Ein-, Zwei-, Drei- und Vier-Wert-Deklarationen sind:

- Wenn **ein** Wert angegeben ist, gilt er für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben sind, gilt der erste Rand für **oben und unten**, der zweite für **links und rechts**.
- Wenn **drei** Werte angegeben sind, gilt der erste Rand für **oben**, der zweite für **links und rechts**, der dritte für **unten**.
- Wenn **vier** Werte angegeben sind, gelten die Ränder in dieser Reihenfolge (im Uhrzeigersinn): **oben**, **rechts**, **unten** und **links**.

## Positions-Eigenschaften

Bei Positionen können die Kurzformen von oben, rechts, unten und links in eine Deklaration vereinfacht werden. Betrachten Sie zum Beispiel das folgende CSS:

```css
top: 0;
right: 20px;
bottom: 0;
left: 20px;
```

Es kann wie folgt vereinfacht werden:

```css
inset: 0 20px 0 20px;
```

Genau wie Ränder und Füllungen sind die Einfügewerte im Uhrzeigersinn geordnet - oben, rechts, unten, dann links (TRBL).

## Die universelle Kurzschreibweise

CSS bietet eine universelle Kurzschreibweise, {{cssxref("all")}}, die ihren Wert auf jede Eigenschaft im Dokument anwendet. Ihr Zweck ist es, das Vererbungsmodell der Eigenschaften zu ändern.

Weitere Informationen darüber, wie Vererbung in CSS funktioniert, finden Sie unter [Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) oder [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction).

## Kurzschreibweise für Eigenschaften

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

- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade) Modul
- [Einführung in die CSS-Syntax: Deklarationen, Regelsets und Anweisungen](/de/docs/Web/CSS/Guides/Syntax/Introduction)
- [At-Rules](/de/docs/Web/CSS/Guides/Syntax/At-rules)
- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction)
- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model)
- Werte: [initial](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value), [computed](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value), [used](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value), und [actual](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value)
- [Wertdefinitionssyntax](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
