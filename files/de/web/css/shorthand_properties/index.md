---
title: Kurzschreibweisen
slug: Web/CSS/Shorthand_properties
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

**_Kurzschreibweisen_** sind CSS-Eigenschaften, die es ermöglichen, die Werte mehrerer anderer CSS-Eigenschaften gleichzeitig zu setzen. Mit einer Kurzschreibweise können Sie prägnantere (und oft lesbarere) Stylesheets verfassen, was Zeit und Energie spart.

Die CSS-Spezifikation definiert Kurzschreibweisen, um die Definition gängiger Eigenschaften zu gruppieren, die auf dasselbe Thema wirken. Zum Beispiel ist die CSS-Eigenschaft {{cssxref("background")}} eine Kurzschreibweise, die die Werte von {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-repeat")}} und {{cssxref("background-position")}} definieren kann. Ebenso können die am häufigsten genutzten schriftbezogenen Eigenschaften mit der Kurzform {{cssxref("font")}} definiert werden, und die verschiedenen Abstände um eine Box herum können mit der Kurzschreibweise {{cssxref("margin")}} definiert werden.

## Schwierige Randfälle

Es gibt einige Randfälle, die bei der Verwendung von Kurzschreibweisen zu beachten sind.

### Eigenschaften weglassen

Ein nicht spezifizierter Wert wird auf seinen Initialwert gesetzt. Das bedeutet, dass er zuvor gesetzte Werte **überschreibt**. Zum Beispiel:

```css
p {
  background-color: red;
  background: url(images/bg.gif) no-repeat left top;
}
```

Dies setzt die Hintergrundfarbe nicht auf `red`, sondern auf den Standardwert von {{cssxref("background-color")}}, nämlich `transparent`.

Nur die Werte der individuellen Eigenschaften können erben. Da fehlende Werte durch ihren Initialwert ersetzt werden, ist es unmöglich, die Vererbung individueller Eigenschaften durch das Weglassen zuzulassen. Das Schlüsselwort `inherit` kann auf eine Eigenschaft angewendet werden, jedoch nur als Ganzes und nicht als Schlüsselwort für einen bestimmten Wert. Das bedeutet, dass der einzige Weg, um einen spezifischen Wert zu erben, darin besteht, die Langform der Eigenschaft mit dem Schlüsselwort `inherit` zu verwenden.

### Reihenfolge der Eigenschaften

Kurzschreibweisen versuchen, keine spezifische Reihenfolge für die Werte der Eigenschaften, die sie ersetzen, zu erzwingen. Dies funktioniert gut, wenn diese Eigenschaften Werte unterschiedlicher Typen verwenden, da die Reihenfolge keine Bedeutung hat, aber es funktioniert nicht so einfach, wenn mehrere Eigenschaften identische Werte haben können.

Zwei wichtige Fälle hier sind:

- Eigenschaften, die sich auf die Kanten einer Box beziehen, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}
- Eigenschaften, die sich auf die Ecken einer Box beziehen, wie {{cssxref("border-radius")}}

#### Kanten einer Box

Kurzschreibweisen, die sich auf die Kanten einer Box beziehen, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}, verwenden immer eine konsistente 1-zu-4-Werte-Syntax, die diese Kanten darstellt:

- **1-Werte-Syntax:** `border-width: 1em` — Der einzelne Wert steht für alle Kanten: ![Kanten einer Box mit Ein-Wert-Syntax](border1.png)

- **2-Werte-Syntax:** `border-width: 1em 2em` — Der erste Wert steht für die vertikalen, d.h. oberen und unteren, Kanten, der zweite für die horizontalen, d.h. linken und rechten: ![Kanten einer Box mit Zwei-Werte-Syntax](border2.png)

- **3-Werte-Syntax:** `border-width: 1em 2em 3em` — Der erste Wert steht für die obere Kante, der zweite für die horizontalen, d.h. linken und rechten, und der dritte Wert für die untere Kante: ![Kanten einer Box mit Drei-Werte-Syntax](border3.png)

- **4-Werte-Syntax:** `border-width: 1em 2em 3em 4em` — Die vier Werte stehen für die obere, rechte, untere und linke Kante, immer in dieser Reihenfolge, das heißt im Uhrzeigersinn beginnend oben: ![Kanten einer Box mit Vier-Werte-Syntax](border4.png) Die Anfangsbuchstaben von Oben-Rechts-Unten-Links stimmen mit der Reihenfolge der Konsonanten des Wortes _trouble_ (Problem) überein: TRBL. Sie können es sich auch als die Reihenfolge merken, in der die Zeiger einer Uhr rotieren würden: `1em` beginnt in der 12-Uhr-Position, dann `2em` in der 3-Uhr-Position, dann `3em` in der 6-Uhr-Position und `4em` in der 9-Uhr-Position.

#### Ecken einer Box

Ähnlich verwenden Kurzschreibweisen, die sich auf die Ecken einer Box beziehen, wie {{cssxref("border-radius")}}, immer eine konsistente 1-zu-4-Werte-Syntax, die diese Ecken darstellt:

- **1-Werte-Syntax:** `border-radius: 1em` — Der eine Wert steht für alle Ecken: ![Ecken einer Box mit Ein-Wert-Syntax](corner1.png)

- **2-Werte-Syntax:** `border-radius: 1em 2em` — Der erste Wert steht für die obere linke und die untere rechte Ecke, der zweite für die obere rechte und die untere linke: ![Ecken einer Box mit Zwei-Werte-Syntax](corner2.png)

- **3-Werte-Syntax:** `border-radius: 1em 2em 3em` — Der erste Wert steht für die obere linke Ecke, der zweite für die obere rechte und die untere linke, und der dritte Wert für die untere rechte Ecke: ![Ecken einer Box mit Drei-Werte-Syntax](corner3.png)

- **4-Werte-Syntax:** `border-radius: 1em 2em 3em 4em` — Die vier Werte stehen für die obere linke, obere rechte, untere rechte und untere linke Ecke, immer in dieser Reihenfolge, das heißt im Uhrzeigersinn beginnend mit der oberen linken: ![Ecken einer Box mit Vier-Werte-Syntax](corner4.png)

## Hintergrund-Eigenschaften

Betrachten Sie einen Hintergrund mit den folgenden Eigenschaften:

```css
background-color: #000;
background-image: url(images/bg.gif);
background-repeat: no-repeat;
background-position: left top;
```

Diese vier Deklarationen können zu nur einer verkürzt werden:

```css
background: #000 url(images/bg.gif) no-repeat left top;
```

(Die Kurzform ist tatsächlich gleichwertig mit den Langform-Eigenschaften oben sowie `background-attachment: scroll` und, in CSS3, einigen zusätzlichen Eigenschaften.)

Lesen Sie {{cssxref("background")}} für detailliertere Informationen, einschließlich CSS3-Eigenschaften.

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

Diese Kurzform-Deklaration ist tatsächlich gleichwertig mit den oben genannten Langform-Deklarationen sowie `font-variant: normal`, `font-size-adjust: none` und `font-stretch: normal`.

## Rahmen-Eigenschaften

Bei Rahmen können Breite, Farbe und Stil in einer Deklaration vereinfacht werden. Zum Beispiel, berücksichtigen Sie das folgende CSS:

```css
border-width: 1px;
border-style: solid;
border-color: #000;
```

Dies kann vereinfacht werden zu:

```css
border: 1px solid #000;
```

## Margin- und Padding-Eigenschaften

Kurzformen von Margin- und Padding-Werten funktionieren ähnlich; die Margin-Eigenschaft ermöglicht es, Kurzformwerte mit einem, zwei, drei oder vier Werten anzugeben. Betrachten Sie die folgenden CSS-Deklarationen:

```css
margin-top: 10px;
margin-right: 5px;
margin-bottom: 10px;
margin-left: 5px;
```

Diese sind gleichbedeutend mit der folgenden Deklaration, die die Vier-Werte-Kurzform verwendet. Beachten Sie, dass die Werte im Uhrzeigersinn sind, beginnend oben: oben, rechts, unten, dann links (TRBL, die Konsonanten in "trouble").

```css
margin: 10px 5px 10px 5px;
```

Die Kurzformregeln für Margin, wenn ein, zwei, drei und vier Werte angegeben sind, sind:

- Wenn **ein** Wert angegeben ist, wird er auf **alle vier Seiten** angewendet.
- Wenn **zwei** Werte angegeben sind, wird die erste Margin auf **oben und unten** angewendet, die zweite auf **links und rechts**.
- Wenn **drei** Werte angegeben sind, wird die erste Margin auf **oben** angewendet, die zweite auf **links und rechts**, die dritte auf **unten**.
- Wenn **vier** Werte angegeben sind, werden die Margins auf **oben**, **rechts**, **unten** und **links** in dieser Reihenfolge (im Uhrzeigersinn) angewendet.

## Positions-Eigenschaften

Bei der Position können die Kurzformversionen von oben, rechts, unten und links in einer Deklaration vereinfacht werden. Zum Beispiel betrachten Sie das folgende CSS:

```css
top: 0;
right: 20px;
bottom: 0;
left: 20px;
```

Dies kann vereinfacht werden zu:

```css
inset: 0 20px 0 20px;
```

Genau wie bei Margins und Paddings sind die Einsetzwerten im Uhrzeigersinn geordnet - oben, rechts, unten, dann links (TRBL).

## Die universelle Kurzform-Eigenschaft

CSS bietet eine universelle Kurzform-Eigenschaft, {{cssxref("all")}}, die ihren Wert auf alle Eigenschaften im Dokument anwendet. Ihr Zweck ist es, das Vererbungsmodell der Eigenschaften zu ändern.

Lesen Sie [Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) oder [Einführung in den CSS Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade) für weitere Informationen darüber, wie Vererbung in CSS funktioniert.

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

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [At-Rules](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Einführung in den CSS-Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Lernen: Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade)-Modul
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
- [Initiale](/de/docs/Web/CSS/CSS_cascade/initial_value), [berechnete](/de/docs/Web/CSS/CSS_cascade/computed_value), [genutzte](/de/docs/Web/CSS/CSS_cascade/used_value) und [tatsächliche](/de/docs/Web/CSS/CSS_cascade/actual_value) Werte
- [Wertedefinitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
