---
title: Kurzschreibweise von Eigenschaften
slug: Web/CSS/Guides/Cascade/Shorthand_properties
l10n:
  sourceCommit: c3a6279f3905349df86484bc4a5c931d973d1935
---

**_Kurzschreibweise von Eigenschaften_** sind CSS-Eigenschaften, die es Ihnen ermöglichen, die Werte mehrerer anderer CSS-Eigenschaften in einer Deklaration festzulegen. Durch die Verwendung einer Kurzschreibweise können Sie prägnantere (und oft besser lesbare) Stylesheets schreiben, was Zeit und Mühe spart.

In der CSS-Spezifikation werden Kurzschreibweisen definiert, um die Definition häufiger Eigenschaften zu gruppieren, die auf das gleiche Thema abzielen. Zum Beispiel ist die CSS-Eigenschaft {{cssxref("background")}} eine Kurzschreibweise, die in der Lage ist, die Werte von {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-repeat")}} und {{cssxref("background-position")}} zu definieren. Ebenso können die häufigsten schriftbezogenen Eigenschaften mit der Kurzschreibweise {{cssxref("font")}} definiert werden, und die verschiedenen Abstände um ein Kästchen herum können mit der Kurzschreibweise {{cssxref("margin")}} definiert werden.

## Knifflige Sonderfälle

Es gibt einige Sonderfälle, die beim Verwenden von Kurzschreibweisen berücksichtigt werden müssen.

### Eigenschaften auslassen

Ein Wert, der nicht angegeben ist, wird auf einen Standardwert gesetzt, der durch die Kurzschreibweise definiert ist und der sich vom Anfangswert der Eigenschaft unterscheiden kann.

Das bedeutet, dass er zuvor festgelegte Werte **überschreibt**. Zum Beispiel:

```css
p {
  background-color: red;
  background: url("images/bg.gif") no-repeat left top;
}
```

Dies wird die Hintergrundfarbe nicht auf `red` setzen, sondern auf den Standardwert für {{cssxref("background-color")}}, der `transparent` ist.

Nur die Werte der einzelnen Eigenschaften können vererbt werden. Da fehlende Werte durch ihren Anfangswert ersetzt werden, ist es unmöglich, die Vererbung einzelner Eigenschaften durch deren Auslassung zu ermöglichen. Das Schlüsselwort `inherit` kann auf eine Eigenschaft angewendet werden, jedoch nur auf die gesamte Eigenschaft, nicht als Schlüsselwort für einen oder einen anderen Wert. Das bedeutet, dass der einzige Weg, um einen spezifischen Wert vererbbar zu machen, darin besteht, die Langform der Eigenschaft mit dem Schlüsselwort `inherit` zu verwenden.

### Reihenfolge der Eigenschaften

Kurzschreibweisen versuchen, keine bestimmte Reihenfolge für die Werte der von ihnen ersetzten Eigenschaften zu erzwingen. Dies funktioniert gut, wenn diese Eigenschaften Werte unterschiedlicher Typen verwenden, da die Reihenfolge keine Bedeutung hat. Dies funktioniert jedoch nicht so einfach, wenn mehrere Eigenschaften identische Werte haben können.

Zwei wichtige Fälle sind hier:

- Eigenschaften, die sich auf die Kanten eines Kastens beziehen, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}
- Eigenschaften, die sich auf die Ecken eines Kastens beziehen, wie {{cssxref("border-radius")}}

#### Kanten eines Kastens

Kurzschreibweisen, die sich mit Eigenschaften beschäftigen, die sich auf die Kanten eines Kastens beziehen, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}, verwenden immer eine konsistente 1-zu-4-Wert-Syntax, die diese Kanten darstellt:

- **1-Wert-Syntax:** `border-width: 1em` — Der Einzelwert repräsentiert alle Kanten: ![Box edges with one-value syntax](border1.png)

- **2-Wert-Syntax:** `border-width: 1em 2em` — Der erste Wert repräsentiert die vertikalen, also oberen und unteren Kanten, der zweite die horizontalen, also die linken und rechten Kanten: ![Box edges with two-value syntax](border2.png)

- **3-Wert-Syntax:** `border-width: 1em 2em 3em` — Der erste Wert repräsentiert die obere Kante, der zweite die horizontalen, also linken und rechten, und der dritte Wert die untere Kante: ![Box edges with three-value syntax](border3.png)

- **4-Wert-Syntax:** `border-width: 1em 2em 3em 4em` — Die vier Werte repräsentieren die oberen, rechten, unteren und linken Kanten in dieser Reihenfolge, also im Uhrzeigersinn beginnend oben: ![Box edges with four-value syntax](border4.png) Der Anfangsbuchstabe von Top-Right-Bottom-Left entspricht der Reihenfolge der Konsonanten des Wortes "trouble": TRBL. Sie können sich dies auch als die Reihenfolge merken, in der die Zeiger einer Uhr rotieren: `1em` beginnt in der 12-Uhr-Position, dann `2em` in der 3-Uhr-Position, dann `3em` in der 6-Uhr-Position, und `4em` in der 9-Uhr-Position.

#### Ecken eines Kastens

Ebenso verwenden Kurzschreibweisen, die sich mit Eigenschaften beschäftigen, die sich auf die Ecken eines Kastens beziehen, wie {{cssxref("border-radius")}}, immer eine konsistente 1-zu-4-Wert-Syntax, die diese Ecken darstellt:

- **1-Wert-Syntax:** `border-radius: 1em` — Der Einzelwert repräsentiert alle Ecken: ![Box corners with one-value syntax](corner1.png)

- **2-Wert-Syntax:** `border-radius: 1em 2em` — Der erste Wert repräsentiert die obere linke und die untere rechte Ecke, der zweite die obere rechte und die untere linke Ecke: ![Box corners with two-value syntax](corner2.png)

- **3-Wert-Syntax:** `border-radius: 1em 2em 3em` — Der erste Wert repräsentiert die obere linke Ecke, der zweite die obere rechte und die untere linke Ecke, und der dritte Wert die untere rechte Ecke: ![Box corners with three-value syntax](corner3.png)

- **4-Wert-Syntax:** `border-radius: 1em 2em 3em 4em` — Die vier Werte repräsentieren die obere linke, obere rechte, untere rechte und untere linke Ecke in dieser Reihenfolge, also im Uhrzeigersinn beginnend oben links: ![Box corners with four-value syntax](corner4.png)

## Hintergrund-Eigenschaften

Betrachten Sie einen Hintergrund mit den folgenden Eigenschaften:

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

(Die Kurzschreibform ist eigentlich das Äquivalent der obigen Langform-Eigenschaften plus `background-attachment: scroll` und in CSS3 einige zusätzliche Eigenschaften.)

Siehe {{cssxref("background")}} für detailliertere Informationen, einschließlich CSS3-Eigenschaften.

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

Diese Kurzschreibdeklaration entspricht tatsächlich den obigen Langform-Deklarationen plus `font-variant: normal`, `font-size-adjust: none` und `font-stretch: normal`.

## Rahmen-Eigenschaften

Bei Rahmen können Breite, Farbe und Stil zu einer Deklaration vereinfacht werden. Betrachten Sie zum Beispiel folgendes CSS:

```css
border-width: 1px;
border-style: solid;
border-color: black;
```

Es kann wie folgt vereinfacht werden:

```css
border: 1px solid black;
```

## Rand- und Auffüllungseigenschaften

Kurzschreibweisen für Rand- und Auffüllungswerte funktionieren ähnlich; die Randeigenschaft ermöglicht es, Kurzschreibwerte mit einem, zwei, drei oder vier Werten anzugeben. Betrachten Sie die folgenden CSS-Deklarationen:

```css
margin-top: 10px;
margin-right: 5px;
margin-bottom: 10px;
margin-left: 5px;
```

Sie sind dasselbe wie die folgende Deklaration unter Verwendung der Vier-Wert-Kurzschreibweise. Beachten Sie, dass die Werte in Uhrzeigerreihenfolge angegeben werden, beginnend oben: oben, rechts, unten, dann links (TRBL, die Konsonanten in "trouble").

```css
margin: 10px 5px 10px 5px;
```

Kurzschreibregeln für Randeigenschaften mit ein, zwei, drei und vier Wertdeklarationen sind:

- Wenn **ein** Wert angegeben ist, gilt er für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben sind, gilt der erste Rand für **oben und unten**, der zweite für **links und rechts**.
- Wenn **drei** Werte angegeben sind, gilt der erste Rand für **oben**, der zweite für **links und rechts**, der dritte für **unten**.
- Wenn **vier** Werte angegeben sind, gelten die Ränder in der Reihenfolge **oben**, **rechts**, **unten** und **links** (im Uhrzeigersinn).

## Positions-Eigenschaften

Bei Positionen können die Kurzschreibversionen von oben, rechts, unten und links zu einer Deklaration vereinfacht werden. Betrachten Sie zum Beispiel folgendes CSS:

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

Ähnlich wie bei Rändern und Auffüllungen sind die Werte für Einfügungen im Uhrzeigersinn geordnet - oben, rechts, unten, dann links (TRBL).

## Die universelle Kurzschreibweise

CSS bietet eine universelle Kurzschreibweise, {{cssxref("all")}}, die ihren Wert auf jede Eigenschaft im Dokument anwendet. Ihr Zweck ist es, das Vererbungsmodell der Eigenschaften zu ändern.

Siehe [Handling conflicts](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) oder [Introducing the CSS Cascade](/de/docs/Web/CSS/Guides/Cascade/Introduction) für weitere Informationen darüber, wie Vererbung in CSS funktioniert.

## Kurzschreibweise von Eigenschaften

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

- [CSS cascading and inheritance](/de/docs/Web/CSS/Guides/Cascade) Modul
- [Einführung in die CSS-Syntax: Deklarationen, Regelmengen und Anweisungen](/de/docs/Web/CSS/Guides/Syntax/Introduction)
- [At-rules](/de/docs/Web/CSS/Guides/Syntax/At-rules)
- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction)
- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model)
- Werte: [Initialwert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value), [berechneter Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value), [verwendeter Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value), und [tatsächlicher Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value)
- [Wertdefinierungssyntax](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
