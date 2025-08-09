---
title: Kurzschreibweise für Eigenschaften
slug: Web/CSS/CSS_cascade/Shorthand_properties
l10n:
  sourceCommit: 39a17e10bc078c6e76717683b26a5b20d9d9c574
---

**_Kurzschreibweise für Eigenschaften_** sind CSS-Eigenschaften, mit denen Sie die Werte mehrerer anderer CSS-Eigenschaften gleichzeitig festlegen können. Mit einer Kurzschreibweise können Sie prägnantere (und oft besser lesbare) Stylesheets erstellen, was Zeit und Energie spart.

Die CSS-Spezifikation definiert Kurzschreibweisen für Eigenschaften, um die Definition häufiger Eigenschaften, die auf das gleiche Thema wirken, zu gruppieren. Beispielsweise ist die CSS-{{cssxref("background")}}-Eigenschaft eine Kurzschreibweise, mit der die Werte von {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-repeat")}} und {{cssxref("background-position")}} definiert werden können. Ebenso können die gängigsten schriftbezogenen Eigenschaften mit der Kurzschreibweise {{cssxref("font")}} definiert werden, und die verschiedenen Ränder um ein Kästchen können mit der Kurzschreibweise {{cssxref("margin")}} definiert werden.

## Schwierige Randfälle

Es gibt einige Randfälle, die Sie im Auge behalten sollten, wenn Sie Kurzschreibweisen verwenden.

### Auslassen von Eigenschaften

Ein Wert, der nicht angegeben wird, wird auf seinen Anfangswert gesetzt. Das bedeutet, dass zuvor festgelegte Werte **überschrieben** werden. Zum Beispiel:

```css
p {
  background-color: red;
  background: url("images/bg.gif") no-repeat left top;
}
```

Dies wird die Hintergrundfarbe nicht auf `red` setzen, sondern auf den Standardwert für {{cssxref("background-color")}}, der `transparent` ist.

Nur die Werte der einzelnen Eigenschaften können vererbt werden. Da fehlende Werte durch ihren Anfangswert ersetzt werden, ist es unmöglich, die Vererbung einzelner Eigenschaften zuzulassen, indem sie weggelassen werden. Das Schlüsselwort `inherit` kann auf eine Eigenschaft angewendet werden, jedoch nur auf diese als Ganzes und nicht als Schlüsselwort für einen bestimmten Wert. Das bedeutet, dass der einzige Weg, einen bestimmten Wert vererben zu lassen, die Verwendung der Langform der Eigenschaft mit dem Schlüsselwort `inherit` ist.

### Reihenfolge der Eigenschaften

Kurzschreibweisen versuchen, keine bestimmte Reihenfolge für die Werte der Eigenschaften, die sie ersetzen, zu erzwingen. Das funktioniert gut, wenn diese Eigenschaften Werte unterschiedlichen Typs verwenden, da die Reihenfolge keine Bedeutung hat. Es funktioniert jedoch nicht so einfach, wenn mehrere Eigenschaften identische Werte haben können.

Zwei wichtige Fälle sind:

- Eigenschaften, die sich auf die Kanten eines Kästchens beziehen, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}
- Eigenschaften, die sich auf die Ecken eines Kästchens beziehen, wie {{cssxref("border-radius")}}

#### Kanten eines Kästchens

Kurzschreibweisen, die Eigenschaften für Kanten eines Kästchens darstellen, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}, verwenden immer eine konsistente 1-bis-4-Wert-Syntax, die diese Kanten darstellt:

- **1-Wert-Syntax:** `border-width: 1em` — Der einzelne Wert steht für alle Kanten: ![Kanten eines Kästchens mit einer Wert-Syntax](border1.png)

- **2-Wert-Syntax:** `border-width: 1em 2em` — Der erste Wert steht für die vertikalen, also oberen und unteren, Kanten, der zweite für die horizontalen, also linken und rechten: ![Kanten eines Kästchens mit Zwei-Wert-Syntax](border2.png)

- **3-Wert-Syntax:** `border-width: 1em 2em 3em` — Der erste Wert steht für die obere Kante, der zweite für die horizontalen, also linken und rechten, Kanten und der dritte Wert für die untere Kante: ![Kanten eines Kästchens mit Drei-Wert-Syntax](border3.png)

- **4-Wert-Syntax:** `border-width: 1em 2em 3em 4em` — Die vier Werte stehen für die oberste, rechte, unterste und linke Kante in dieser Reihenfolge, also im Uhrzeigersinn beginnend oben: ![Kanten eines Kästchens mit Vier-Wert-Syntax](border4.png) Der Anfangsbuchstabe von Top-Right-Bottom-Left entspricht der Reihenfolge der Konsonanten des Wortes _trouble_: TRBL. Sie können es sich auch merken als die Reihenfolge, in der die Zeiger auf einer Uhr rotieren würden: `1em` beginnt in der 12-Uhr-Position, dann `2em` in der 3-Uhr-Position, dann `3em` in der 6-Uhr-Position und `4em` in der 9-Uhr-Position.

#### Ecken eines Kästchens

Ähnlich verwenden Kurzschreibweisen, die Eigenschaften für Ecken eines Kästchens darstellen, wie {{cssxref("border-radius")}}, immer eine konsistente 1-bis-4-Wert-Syntax, die diese Ecken darstellt:

- **1-Wert-Syntax:** `border-radius: 1em` — Der einzelne Wert steht für alle Ecken: ![Ecken eines Kästchens mit einer Wert-Syntax](corner1.png)

- **2-Wert-Syntax:** `border-radius: 1em 2em` — Der erste Wert steht für die obere linke und untere rechte Ecke, der zweite für die obere rechte und untere linke: ![Ecken eines Kästchens mit Zwei-Wert-Syntax](corner2.png)

- **3-Wert-Syntax:** `border-radius: 1em 2em 3em` — Der erste Wert steht für die obere linke Ecke, der zweite für die obere rechte und untere linke, und der dritte Wert für die untere rechte Ecke: ![Ecken eines Kästchens mit Drei-Wert-Syntax](corner3.png)

- **4-Wert-Syntax:** `border-radius: 1em 2em 3em 4em` — Die vier Werte stehen für die obere linke, obere rechte, untere rechte und untere linke Ecke in dieser Reihenfolge, also im Uhrzeigersinn beginnend oben links: ![Ecken eines Kästchens mit Vier-Wert-Syntax](corner4.png)

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

(Die Kurzform entspricht tatsächlich den oben genannten Langformeneigenschaften plus `background-attachment: scroll` und in CSS3 einigen zusätzlichen Eigenschaften.)

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

Diese Kurzschreibdeclaration entspricht tatsächlich den obigen Langformdeclarations plus `font-variant: normal`, `font-size-adjust: none` und `font-stretch: normal`.

## Rahmen-Eigenschaften

Mit Rahmen können Breite, Farbe und Stil in einer Declaration vereinfacht werden. Betrachten Sie zum Beispiel das folgende CSS:

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

Kurzschreibversionen von Rand- und Auffüllungswerten funktionieren ähnlich; die Randeigenschaft erlaubt es, Kurzschreibwerte mit einem, zwei, drei oder vier Werten anzugeben. Betrachten Sie die folgenden CSS-Deklarationen:

```css
margin-top: 10px;
margin-right: 5px;
margin-bottom: 10px;
margin-left: 5px;
```

Sie sind gleichbedeutend mit der folgenden Declaration, die die Vier-Wert-Kurzschreibweise verwendet. Beachten Sie, dass die Werte im Uhrzeigersinn sind, beginnend oben: oben, rechts, unten, dann links (TRBL, die Konsonanten in "trouble").

```css
margin: 10px 5px 10px 5px;
```

Regeln für die Randschriftschrift für ein-, zwei-, drei- und vier-Wert-Deklarationen sind:

- Wenn **ein** Wert angegeben ist, gilt der gleiche Rand für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben sind, gilt der erste Rand für **oben und unten**, der zweite für **links und rechts**.
- Wenn **drei** Werte angegeben sind, gilt der erste Rand für **oben**, der zweite für **links und rechts**, der dritte für **unten**.
- Wenn **vier** Werte angegeben sind, gelten die Ränder für **oben**, **rechts**, **unten** und **links** in dieser Reihenfolge (im Uhrzeigersinn).

## Positions-Eigenschaften

Mit Position können die Kurzschreibversionen von oben, rechts, unten und links in einer Declaration vereinfacht werden. Betrachten Sie zum Beispiel das folgende CSS:

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

Genau wie bei Rändern und Auffüllungen sind die Einfügewerte im Uhrzeigersinn geordnet – oben, rechts, unten, dann links (TRBL).

## Die universelle Kurzschreibweise für Eigenschaften

CSS bietet eine universelle Kurzschreibweise für Eigenschaften, {{cssxref("all")}}, die ihren Wert auf jede Eigenschaft im Dokument anwendet. Ihr Zweck besteht darin, das Vererbungsmodell der Eigenschaften zu ändern.

Weitere Informationen darüber, wie Vererbung in CSS funktioniert, finden Sie unter [Handling conflicts](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) oder [Introducing the CSS Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade).

## Kurzschreibweisen für Eigenschaften

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
- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Lernen: Konflikte verwalten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade)-Modul
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
- [Anfangs-,](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) [berechnete,](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) [verwendete](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value) und [tatsächliche](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value) Werte
- [Wertedefinitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
