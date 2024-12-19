---
title: Kurzschreibweisen
slug: Web/CSS/Shorthand_properties
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

**_Kurzschreibweisen_** sind CSS-Eigenschaften, die es Ihnen ermöglichen, die Werte von mehreren anderen CSS-Eigenschaften gleichzeitig festzulegen. Durch die Verwendung einer Kurzschreibweise können Sie prägnantere (und oft lesbarere) Stylesheets schreiben, die Zeit und Mühe sparen.

Die CSS-Spezifikation definiert Kurzschreibweisen, um die Definition von gemeinsamen Eigenschaften, die zu demselben Thema gehören, zu gruppieren. Zum Beispiel ist die CSS-Eigenschaft {{cssxref("background")}} eine Kurzschreibweise, mit der sich die Werte von {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-repeat")}} und {{cssxref("background-position")}} festlegen lassen. Ebenso können die gängigsten schriftbezogenen Eigenschaften mit der Kurzschreibweise {{cssxref("font")}} definiert werden, und die verschiedenen Außenabstände eines Rahmens können mit der Kurzschreibweise {{cssxref("margin")}} definiert werden.

## Schwierige Sonderfälle

Es gibt einige Sonderfälle, die Sie bei der Verwendung von Kurzschreibweisen beachten sollten.

### Auslassung von Eigenschaften

Ein Wert, der nicht angegeben ist, wird auf seinen Anfangswert gesetzt. Das bedeutet, dass er vorher festgelegte Werte **überschreibt**. Zum Beispiel:

```css
p {
  background-color: red;
  background: url(images/bg.gif) no-repeat left top;
}
```

Dies wird die Hintergrundfarbe nicht auf `red` setzen, sondern auf den Standardwert für {{cssxref("background-color")}}, der `transparent` ist.

Nur die Werte einzelner Eigenschaften können erben. Da fehlende Werte durch ihren Anfangswert ersetzt werden, ist es unmöglich, die Vererbung einzelner Eigenschaften durch deren Auslassung zu ermöglichen. Das Schlüsselwort `inherit` kann auf eine Eigenschaft angewendet werden, aber nur insgesamt, nicht als Schlüsselwort für einen Wert oder einen anderen. Das bedeutet, dass der einzige Weg, einen bestimmten Wert vererbar zu machen, darin besteht, die Einzelangabe der Eigenschaft mit dem Schlüsselwort `inherit` zu verwenden.

### Reihenfolge der Eigenschaften

Kurzschreibweisen versuchen, keine bestimmte Reihenfolge für die Werte der Eigenschaften festzulegen, die sie ersetzen. Dies funktioniert gut, wenn diese Eigenschaften Werte verschiedener Typen verwenden, da die Reihenfolge keine Bedeutung hat, aber dies funktioniert nicht so einfach, wenn mehrere Eigenschaften identische Werte haben können.

Zwei wichtige Fälle sind hier:

- Eigenschaften, die sich auf die Kanten eines Rahmens beziehen, wie z.B. {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}
- Eigenschaften, die sich auf die Ecken eines Rahmens beziehen, wie z.B. {{cssxref("border-radius")}}

#### Kanten eines Rahmens

Kurzschreibweisen, die Eigenschaften in Bezug auf die Kanten eines Rahmens behandeln, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}, verwenden stets eine konsistente 1-bis-4-Wert-Syntax, die diese Kanten darstellt:

- **1-Wert-Syntax:** `border-width: 1em` — Der einzelne Wert steht für alle Kanten: ![Rahmenkanten mit Ein-Wert-Syntax](border1.png)

- **2-Wert-Syntax:** `border-width: 1em 2em` — Der erste Wert steht für die vertikalen, also oberen und unteren Kanten, der zweite für die horizontalen, also linken und rechten Kanten: ![Rahmenkanten mit Zwei-Wert-Syntax](border2.png)

- **3-Wert-Syntax:** `border-width: 1em 2em 3em` — Der erste Wert steht für die obere Kante, der zweite für die horizontalen, also linken und rechten Kanten, und der dritte Wert für die untere Kante: ![Rahmenkanten mit Drei-Wert-Syntax](border3.png)

- **4-Wert-Syntax:** `border-width: 1em 2em 3em 4em` — Die vier Werte repräsentieren die obere, rechte, untere und linke Kante respektive, immer in dieser Reihenfolge, also im Uhrzeigersinn beginnend oben: ![Rahmenkanten mit Vier-Wert-Syntax](border4.png) Der Anfangsbuchstabe von Oben-Rechts-Unten-Links entspricht der Reihenfolge der Konsonanten des Wortes _trouble_: TRBL. Sie können sich das auch so merken, wie sich die Zeiger auf einer Uhr drehen: `1em` beginnt an der 12-Uhr-Position, dann `2em` an der 3-Uhr-Position, dann `3em` an der 6-Uhr-Position und `4em` an der 9-Uhr-Position.

#### Ecken eines Rahmens

Ebenso verwenden Kurzschreibweisen, die sich auf die Ecken eines Rahmens beziehen, wie z.B. {{cssxref("border-radius")}}, stets eine konsistente 1-bis-4-Wert-Syntax, die diese Ecken darstellt:

- **1-Wert-Syntax:** `border-radius: 1em` — Der einzelne Wert steht für alle Ecken: ![Rahmenecken mit Ein-Wert-Syntax](corner1.png)

- **2-Wert-Syntax:** `border-radius: 1em 2em` — Der erste Wert steht für die obere linke und untere rechte Ecke, der zweite für die obere rechte und untere linke: ![Rahmenecken mit Zwei-Wert-Syntax](corner2.png)

- **3-Wert-Syntax:** `border-radius: 1em 2em 3em` — Der erste Wert steht für die obere linke Ecke, der zweite für die obere rechte und untere linke, und der dritte Wert für die untere rechte Ecke: ![Rahmenecken mit Drei-Wert-Syntax](corner3.png)

- **4-Wert-Syntax:** `border-radius: 1em 2em 3em 4em` — Die vier Werte repräsentieren die obere linke, obere rechte, untere rechte und untere linke Ecke respektive, immer in dieser Reihenfolge, also im Uhrzeigersinn beginnend bei der oberen linken: ![Rahmenecken mit Vier-Wert-Syntax](corner4.png)

## Hintergrund-Eigenschaften

Betrachten Sie einen Hintergrund mit den folgenden Eigenschaften:

```css
background-color: #000;
background-image: url(images/bg.gif);
background-repeat: no-repeat;
background-position: left top;
```

Diese vier Deklarationen können auf eine reduziert werden:

```css
background: #000 url(images/bg.gif) no-repeat left top;
```

(Die Kurzform entspricht tatsächlich der der oben genannten Langform-Eigenschaften plus `background-attachment: scroll` und, in CSS3, einigen zusätzlichen Eigenschaften.)

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

Diese 5 Anweisungen können als folgende Kurzform geschrieben werden:

```css
font:
  italic bold 0.8em/1.2 Arial,
  sans-serif;
```

Diese Kurzschreibweise entspricht tatsächlich den oben genannten Langform-Deklarationen plus `font-variant: normal`, `font-size-adjust: none`, und `font-stretch: normal`.

## Rahmen-Eigenschaften

Bei Rahmen können die Breite, Farbe und Art in eine Deklaration vereinfacht werden. Zum Beispiel, betrachten Sie das folgende CSS:

```css
border-width: 1px;
border-style: solid;
border-color: #000;
```

Dies kann vereinfacht werden als:

```css
border: 1px solid #000;
```

## Margin- und Padding-Eigenschaften

Kurzschreibversionen von Margin- und Padding-Werten funktionieren ähnlich; die Margin-Eigenschaft erlaubt es, Kurzform-Werte mit einem, zwei, drei oder vier Werten anzugeben. Betrachten Sie die folgenden CSS-Deklarationen:

```css
margin-top: 10px;
margin-right: 5px;
margin-bottom: 10px;
margin-left: 5px;
```

Diese entsprechen der folgenden Deklaration in der Vier-Wert-Kurzschreibweise. Beachten Sie, dass die Werte in Uhrzeigersinn-Reihenfolge sind, beginnend oben: oben, rechts, unten, dann links (TRBL, die Konsonanten in "trouble").

```css
margin: 10px 5px 10px 5px;
```

Regeln für die Margin-Kurzschreibweise für ein-, zwei-, drei- und vierwertige Deklarationen sind:

- Wenn **ein** Wert angegeben ist, gilt er für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben sind, gilt der erste Margin für **oben und unten**, der zweite für **links und rechts**.
- Wenn **drei** Werte angegeben sind, gilt der erste Margin für **oben**, der zweite für **links und rechts**, der dritte für **unten**.
- Wenn **vier** Werte angegeben sind, gelten die Margins für **oben**, **rechts**, **unten** und **links** in dieser Reihenfolge (im Uhrzeigersinn).

## Positionseigenschaften

Bei der Position können die Kurzschreibversionen der Eigenschaften oben, rechts, unten und links in eine einzige Deklaration vereinfacht werden. Zum Beispiel, betrachten Sie das folgende CSS:

```css
top: 0;
right: 20px;
bottom: 0;
left: 20px;
```

Dies kann vereinfacht werden als:

```css
inset: 0 20px 0 20px;
```

Wie bei Margins und Paddings sind die Eingabewerte im Uhrzeigersinn angeordnet - oben, rechts, unten, dann links (TRBL).

## Die universelle Kurzschreibweise

CSS bietet eine universelle Kurzschreibweise, {{cssxref("all")}}, mit der der Wert auf jede Eigenschaft im Dokument angewendet wird. Ihr Zweck ist es, das Vererbungsmodell der Eigenschaften zu ändern.

Siehe [Konfliktbehandlung](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) oder [Einführung in die CSS-Cascade](/de/docs/Web/CSS/Cascade) für weitere Informationen darüber, wie Vererbung in CSS funktioniert.

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
- {{cssxref("text-decoration")}}
- {{cssxref("text-emphasis")}}
- {{cssxref("text-wrap")}}
- {{cssxref("transition")}}
- {{cssxref("view-timeline")}}
- {{cssxref("-webkit-text-stroke")}}
- {{cssxref("-webkit-border-before")}}
- {{cssxref("-webkit-mask-box-image")}}

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/Syntax)
- [At-Regeln](/de/docs/Web/CSS/At-rule)
- [Spezifität](/de/docs/Web/CSS/Specificity)
- [Vererbung](/de/docs/Web/CSS/Inheritance)
- [Einführung in die CSS-Cascade](/de/docs/Web/CSS/Cascade)
- [Lernen: Konfliktbehandlung](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadierende Schichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [Modul zur CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade)
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
- [Anfangs-,](/de/docs/Web/CSS/initial_value) [berechnete,](/de/docs/Web/CSS/computed_value) [benutzte,](/de/docs/Web/CSS/used_value) und [tatsächliche](/de/docs/Web/CSS/actual_value) Werte
- [Wertdefinition Syntax](/de/docs/Web/CSS/Value_definition_syntax)
