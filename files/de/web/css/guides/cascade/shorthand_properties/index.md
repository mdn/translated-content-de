---
title: Kurzschreibweise von Eigenschaften
slug: Web/CSS/Guides/Cascade/Shorthand_properties
l10n:
  sourceCommit: d92aebec475ed317eeb327a75aa875362a6daea1
---

**_Kurzschreibweiseneigenschaften_** sind CSS-Eigenschaften, die es Ihnen ermöglichen, die Werte mehrerer anderer CSS-Eigenschaften in einer Deklaration festzulegen. Mit einer Kurzschreibweise können Sie stilistische Definitionen prägnanter (und oft besser lesbar) schreiben, was Zeit und Mühe spart.

Die CSS-Spezifikation definiert Kurzschreibweiseneigenschaften, um die Definition von gemeinsamen Eigenschaften, die auf dasselbe Thema wirken, zu gruppieren. Zum Beispiel ist die CSS-Eigenschaft {{cssxref("background")}} eine Kurzschreibweiseneigenschaft, die es ermöglicht, die Werte von {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-repeat")}} und {{cssxref("background-position")}} festzulegen.

## Schwierige Spezialfälle

Es gibt einige Spezialfälle, die Sie beachten sollten, wenn Sie Kurzschreibweiseneigenschaften verwenden.

### Eigenschaften Auslassen

Ein Wert, der nicht angegeben ist, wird auf einen Standardwert gesetzt, der durch die Kurzschreibweise definiert ist und vom Anfangswert der Eigenschaft abweichen kann.

Das bedeutet, dass er zuvor festgelegte Werte **überschreibt**. Zum Beispiel:

```css
p {
  background-color: red;
  background: url("images/bg.gif") no-repeat left top;
}
```

Dies wird die Farbe des Hintergrunds nicht auf `red` setzen, sondern auf den Standardwert für {{cssxref("background-color")}}, der `transparent` ist.

Nur die Werte von individuellen Eigenschaften können vererbt werden. Da fehlende Werte durch ihre Anfangswerte ersetzt werden, ist es unmöglich, die Vererbung von individuellen Eigenschaften zuzulassen, indem sie ausgelassen werden. Das Schlüsselwort `inherit` kann auf eine Eigenschaft angewendet werden, jedoch nur auf die gesamte Eigenschaft, nicht als Schlüsselwort für einen bestimmten Wert. Das bedeutet, dass der einzige Weg, um sicherzustellen, dass ein bestimmter Wert vererbt wird, darin besteht, die Langform-Eigenschaft mit dem Schlüsselwort `inherit` zu verwenden.

### Reihenfolge der Eigenschaften

Kurzschreibweiseneigenschaften versuchen, keine spezifische Reihenfolge für die Werte der Eigenschaften, die sie ersetzen, zu erzwingen. Dies funktioniert gut, wenn diese Eigenschaften Werte verschiedener Typen verwenden, da die Reihenfolge keine Rolle spielt, aber es funktioniert nicht so gut, wenn mehrere Eigenschaften identische Werte haben können.

Zwei wichtige Fälle sind:

- Eigenschaften, die sich auf die Kanten eines Kastens beziehen, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}
- Eigenschaften, die sich auf die Ecken eines Kastens beziehen, wie {{cssxref("border-radius")}}

#### Kanten eines Kastens

Kurzschreibweisen, die Eigenschaften im Zusammenhang mit den Kanten eines Kastens behandeln, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}, verwenden immer eine konsistente 1-bis-4-Wert-Syntax, die diese Kanten darstellt:

- **1-Wert-Syntax:** `border-width: 1em` — Der Einzelwert repräsentiert alle Kanten: ![Boxkanten mit Ein-Wert-Syntax](border1.png)

- **2-Wert-Syntax:** `border-width: 1em 2em` — Der erste Wert repräsentiert die vertikalen, also oberen und unteren Kanten, der zweite die horizontalen, also die linken und rechten: ![Boxkanten mit Zwei-Wert-Syntax](border2.png)

- **3-Wert-Syntax:** `border-width: 1em 2em 3em` — Der erste Wert repräsentiert die obere Kante, der zweite die horizontalen, also die linken und rechten, und der dritte Wert die untere Kante: ![Boxkanten mit Drei-Wert-Syntax](border3.png)

- **4-Wert-Syntax:** `border-width: 1em 2em 3em 4em` — Die vier Werte repräsentieren die obere, rechte, untere und linke Kante, jeweils in dieser Reihenfolge, das heißt im Uhrzeigersinn beginnend von oben: ![Boxkanten mit Vier-Wert-Syntax](border4.png) Das Anfangsbuchstaben von Top-Right-Bottom-Left entspricht der Reihenfolge der Konsonanten des Wortes _trouble_: TRBL. Sie können es sich auch als die Reihenfolge merken, in der sich die Zeiger einer Uhr drehen: `1em` beginnt in der 12-Uhr-Position, dann `2em` in der 3-Uhr-Position, `3em` in der 6-Uhr-Position und `4em` in der 9-Uhr-Position.

#### Ecken eines Kastens

Ähnlich verwenden Kurzschreibweisen, die Eigenschaften im Zusammenhang mit den Ecken eines Kastens behandeln, wie {{cssxref("border-radius")}}, immer eine konsistente 1-bis-4-Wert-Syntax, die diese Ecken darstellt:

- **1-Wert-Syntax:** `border-radius: 1em` — Der Einzelwert repräsentiert alle Ecken: ![Boxecken mit Ein-Wert-Syntax](corner1.png)

- **2-Wert-Syntax:** `border-radius: 1em 2em` — Der erste Wert repräsentiert die obere linke und untere rechte Ecke, der zweite die obere rechte und untere linke: ![Boxecken mit Zwei-Wert-Syntax](corner2.png)

- **3-Wert-Syntax:** `border-radius: 1em 2em 3em` — Der erste Wert repräsentiert die obere linke Ecke, der zweite die obere rechte und untere linke, und der dritte Wert die untere rechte Ecke: ![Boxecken mit Drei-Wert-Syntax](corner3.png)

- **4-Wert-Syntax:** `border-radius: 1em 2em 3em 4em` — Die vier Werte repräsentieren die obere linke, obere rechte, untere rechte und untere linke Ecke, jeweils in dieser Reihenfolge, das heißt im Uhrzeigersinn beginnend von oben links: ![Boxecken mit Vier-Wert-Syntax](corner4.png)

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

(Die Kurzschreibform ist tatsächlich eine Entsprechung der Langform-Eigenschaften oben plus `background-attachment: scroll` und, in CSS3, einige zusätzliche Eigenschaften.)

Sehen Sie {{cssxref("background")}} für detailliertere Informationen, einschließlich CSS3-Eigenschaften.

## Schrift-Eigenschaften

Betrachten Sie die folgenden Deklarationen:

```css
font-style: italic;
font-weight: bold;
font-size: 0.8em;
line-height: 1.2;
font-family: "Arial", sans-serif;
```

Diese 5 Anweisungen können wie folgt verkürzt werden:

```css
font:
  italic bold 0.8em/1.2 "Arial",
  sans-serif;
```

Diese Kurzdeklaration entspricht tatsächlich den oben genannten Langform-Deklarationen plus `font-variant: normal`, `font-size-adjust: none` und `font-stretch: normal`.

## Rahmen-Eigenschaften

Bei Rahmen können Breite, Farbe und Stil in eine Deklaration vereinfacht werden. Zum Beispiel betrachten Sie das folgende CSS:

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

Kurzschreibversionen der Werte von Rand und Auffüllung funktionieren ähnlich; die Rand-Eigenschaft erlaubt es, Kurzformwerte mit einem, zwei, drei oder vier Werten anzugeben. Betrachten Sie die folgenden CSS-Deklarationen:

```css
margin-top: 10px;
margin-right: 5px;
margin-bottom: 10px;
margin-left: 5px;
```

Sie entsprechen der folgenden Deklaration, die die Vier-Wert-Kurzschreibweise verwendet. Beachten Sie, dass die Werte im Uhrzeigersinn sortiert sind, beginnend oben: oben, rechts, unten, dann links (TRBL, die Konsonanten in "trouble").

```css
margin: 10px 5px 10px 5px;
```

Die Regeln der Rand-Kurzschreibung für Ein-, Zwei-, Drei- und Vier-Wert-Deklarationen sind:

- Wenn **ein** Wert angegeben ist, gilt dieser für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben sind, gilt der erste Wert für **oben und unten**, der zweite für **links und rechts**.
- Wenn **drei** Werte angegeben sind, gilt der erste Wert für **oben**, der zweite für **links und rechts**, der dritte für **unten**.
- Wenn **vier** Werte angegeben sind, gelten sie für **oben**, **rechts**, **unten** und **links** in dieser Reihenfolge (im Uhrzeigersinn).

## Positions-Eigenschaften

Bei der Position können die Kurzschreibversionen von oben, rechts, unten und links in eine Deklaration vereinfacht werden. Betrachten Sie zum Beispiel das folgende CSS:

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

Genau wie bei Rändern und Auffüllungen sind die Einsetzwert im Uhrzeigersinn sortiert - oben, rechts, unten, dann links (TRBL).

## Die universale Kurzschreibweiseigenschaft

CSS bietet eine universelle Kurzschreibweiseigenschaft, {{cssxref("all")}}, die ihren Wert auf jede Eigenschaft im Dokument anwendet. Ihr Zweck ist es, das Vererbungsmuster der Eigenschaften zu ändern.

Siehe [Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) oder [Einführung in die CSS-Cascade](/de/docs/Web/CSS/Guides/Cascade/Introduction) für weitere Informationen darüber, wie Vererbung in CSS funktioniert.

## Kurzschreibweiseigenschaften

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

- [Modul zu CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade)
- [Einführung in die CSS-Syntax: Deklarationen, Regelsets und Anweisungen](/de/docs/Web/CSS/Guides/Syntax/Introduction)
- [At-Rules](/de/docs/Web/CSS/Guides/Syntax/At-rules)
- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction)
- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model)
- Werte: [anfängliche](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value), [berechnete](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value), [verwendete](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value) und [tatsächliche](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value)
- [Syntax zur Wertedefinition](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
