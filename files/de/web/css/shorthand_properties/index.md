---
title: Kurzschreib-Eigenschaften
slug: Web/CSS/Shorthand_properties
l10n:
  sourceCommit: ec64bbd66dab1ce079768708b5da8c50abc4a957
---

{{CSSRef}}

**_Kurzschreib-Eigenschaften_** sind CSS-Eigenschaften, die es Ihnen ermöglichen, die Werte mehrerer anderer CSS-Eigenschaften gleichzeitig festzulegen. Durch die Verwendung einer Kurzschreib-Eigenschaft können Sie prägnantere (und oft besser lesbare) Stylesheets erstellen, was Zeit und Energie spart.

Die CSS-Spezifikation definiert Kurzschreib-Eigenschaften, um die Definition gängiger Eigenschaften, die auf demselben Thema wirken, zu gruppieren. Zum Beispiel ist die CSS-{{cssxref("background")}}-Eigenschaft eine Kurzschreib-Eigenschaft, die die Werte von {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-repeat")}} und {{cssxref("background-position")}} festlegen kann. Ebenso können die häufigsten schriftbezogenen Eigenschaften mit der Kurzschreib-Eigenschaft {{cssxref("font")}} definiert werden, und die unterschiedlichen Abstände um ein Kästchen können mit der {{cssxref("margin")}} Kurzschreib-Eigenschaft definiert werden.

## Schwierige Sonderfälle

Es gibt einige Sonderfälle, die beim Verwenden von Kurzschreib-Eigenschaften zu beachten sind.

### Weglassen von Eigenschaften

Ein Wert, der nicht angegeben wird, wird auf seinen Anfangswert gesetzt. Das bedeutet, dass er zuvor festgelegte Werte **überschreibt**. Zum Beispiel:

```css
p {
  background-color: red;
  background: url(images/bg.gif) no-repeat left top;
}
```

Dies setzt die Hintergrundfarbe nicht auf `red`, sondern auf den Standardwert für {{cssxref("background-color")}}, welcher `transparent` ist.

Nur die Werte der einzelnen Eigenschaften können erben. Da fehlende Werte durch ihren Anfangswert ersetzt werden, ist es unmöglich, die Vererbung von einzelnen Eigenschaften durch Weglassen zu erlauben. Das Schlüsselwort `inherit` kann auf eine Eigenschaft angewendet werden, jedoch nur auf das Ganze und nicht als Schlüsselwort für einen oder anderen Wert. Das bedeutet, dass der einzige Weg, einen bestimmten Wert vererben zu lassen, darin besteht, die Langschreib-Eigenschaft mit dem Schlüsselwort `inherit` zu verwenden.

### Anordnung der Eigenschaften

Kurzschreib-Eigenschaften versuchen nicht, eine bestimmte Reihenfolge für die Werte der Eigenschaften, die sie ersetzen, zu erzwingen. Dies funktioniert gut, wenn diese Eigenschaften unterschiedlich typisierte Werte verwenden, da die Reihenfolge keine Bedeutung hat. Es funktioniert jedoch nicht so leicht, wenn mehrere Eigenschaften identische Werte haben können.

Zwei wichtige Fälle hier sind:

- Eigenschaften, die sich auf die Kanten eines Kästchens beziehen, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}
- Eigenschaften, die sich auf die Ecken eines Kästchens beziehen, wie {{cssxref("border-radius")}}

#### Kanten eines Kästchens

Kurzschreibweisen, die Eigenschaften bezüglich der Kanten eines Kästchens behandeln, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}, verwenden immer eine konsistente 1-bis-4-Werte-Syntax, die diese Kanten darstellt:

- **1-Wert-Syntax:** `border-width: 1em` — Der einzelne Wert steht für alle Kanten: ![Kanten eines Kästchens mit Ein-Wert-Syntax](border1.png)

- **2-Wert-Syntax:** `border-width: 1em 2em` — Der erste Wert steht für die vertikalen Kanten, also oben und unten, der zweite für die horizontalen, also links und rechts: ![Kanten eines Kästchens mit Zwei-Wert-Syntax](border2.png)

- **3-Wert-Syntax:** `border-width: 1em 2em 3em` — Der erste Wert steht für die obere Kante, der zweite für die horizontalen, also links und rechts, und der dritte Wert für die untere Kante: ![Kanten eines Kästchens mit Drei-Wert-Syntax](border3.png)

- **4-Wert-Syntax:** `border-width: 1em 2em 3em 4em` — Die vier Werte stehen für die obere, rechte, untere und linke Kante jeweils in dieser Reihenfolge, also im Uhrzeigersinn beginnend von oben: ![Kanten eines Kästchens mit Vier-Wert-Syntax](border4.png) Der Anfangsbuchstabe von Oben-Rechts-Unten-Links entspricht der Reihenfolge der Konsonanten des Wortes _trouble_: TRBL. Sie können es sich auch als die Reihenfolge merken, in der die Zeiger einer Uhrrotieren: `1em` beginnt in der 12-Uhr-Position, dann `2em` in der 3-Uhr-Position, dann `3em` in der 6-Uhr-Position und `4em` in der 9-Uhr-Position.

#### Ecken eines Kästchens

Ähnlich verwenden Kurzschreibweisen, die Eigenschaften in Bezug auf die Ecken eines Kästchens behandeln, wie {{cssxref("border-radius")}}, immer eine konsistente 1-bis-4-Werte-Syntax, die diese Ecken darstellt:

- **1-Wert-Syntax:** `border-radius: 1em` — Der einzelne Wert steht für alle Ecken: ![Ecken eines Kästchens mit Ein-Wert-Syntax](corner1.png)

- **2-Wert-Syntax:** `border-radius: 1em 2em` — Der erste Wert steht für die obere linke und die untere rechte Ecke, der zweite für die obere rechte und die untere linke: ![Ecken eines Kästchens mit Zwei-Wert-Syntax](corner2.png)

- **3-Wert-Syntax:** `border-radius: 1em 2em 3em` — Der erste Wert steht für die obere linke Ecke, der zweite für die obere rechte und die untere linke, und der dritte Wert für die untere rechte Ecke: ![Ecken eines Kästchens mit Drei-Wert-Syntax](corner3.png)

- **4-Wert-Syntax:** `border-radius: 1em 2em 3em 4em` — Die vier Werte stehen für die obere linke, obere rechte, untere rechte und untere linke Ecken jeweils in dieser Reihenfolge, also im Uhrzeigersinn beginnend von der oberen linken: ![Ecken eines Kästchens mit Vier-Wert-Syntax](corner4.png)

## Hintergrund-Eigenschaften

Betrachten Sie einen Hintergrund mit den folgenden Eigenschaften:

```css
background-color: #000;
background-image: url(images/bg.gif);
background-repeat: no-repeat;
background-position: left top;
```

Diese vier Deklarationen können auf nur eine verkürzt werden:

```css
background: #000 url(images/bg.gif) no-repeat left top;
```

(Die Kurzform ist tatsächlich äquivalent zu den obigen Langschreib-Eigenschaften plus `background-attachment: scroll` und in CSS3 einige zusätzliche Eigenschaften.)

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

Diese Kurzschreib-Deklaration entspricht tatsächlich den obigen Langschreib-Deklarationen plus `font-variant: normal`, `font-size-adjust: none`, und `font-stretch: normal`.

## Rahmen-Eigenschaften

Bei Rahmen kann die Breite, die Farbe und der Stil in einer Deklaration vereinfacht werden. Zum Beispiel betrachten Sie folgendes CSS:

```css
border-width: 1px;
border-style: solid;
border-color: #000;
```

Es kann vereinfacht werden als:

```css
border: 1px solid #000;
```

## Rand- und Auffüllungs-Eigenschaften

Kurzschreibvarianten von Rand- und Auffüllungswerten funktionieren ähnlich; die `margin`-Eigenschaft ermöglicht, dass Kurzschreibwerte mit einem, zwei, drei oder vier Werten angegeben werden. Betrachten Sie die folgenden CSS-Deklarationen:

```css
margin-top: 10px;
margin-right: 5px;
margin-bottom: 10px;
margin-left: 5px;
```

Sie sind gleichbedeutend mit der folgenden Deklaration, die die Vier-Wert-Kurzschreibweise verwendet. Beachten Sie, dass die Werte im Uhrzeigersinn angeordnet sind, beginnend oben: oben, rechts, unten, dann links (TRBL, die Konsonanten in "trouble").

```css
margin: 10px 5px 10px 5px;
```

Rand-Kurzschreibregeln für ein-, zwei-, drei- und vier-Wert-Deklarationen sind:

- Wenn **ein** Wert angegeben ist, gilt dieser für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben sind, wird der erste Rand auf **oben und unten** angewendet, der zweite auf **links und rechts**.
- Wenn **drei** Werte angegeben sind, gilt der erste Rand für **oben**, der zweite für **links und rechts**, der dritte für **unten**.
- Wenn **vier** Werte angegeben sind, gelten die Ränder in der Reihenfolge **oben**, **rechts**, **unten** und **links** (im Uhrzeigersinn).

## Positionseigenschaften

Bei der Position können die Kurzschreibvarianten von oben, rechts, unten und links in eine Deklaration vereinfacht werden. Beispielsweise betrachten Sie das folgende CSS:

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

Genau wie bei Rändern und Auffüllungen sind die `inset`-Werte im Uhrzeigersinn geordnet - oben, rechts, unten, dann links (TRBL).

## Die universelle Kurzschreib-Eigenschaft

CSS bietet eine universelle Kurzschreib-Eigenschaft, {{cssxref("all")}}, die ihren Wert auf jede Eigenschaft im Dokument anwendet. Ihr Zweck besteht darin, das Vererbungsmodell der Eigenschaften zu ändern.

Siehe [Cascade und Vererbung](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance) oder [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/Cascade) für weitere Informationen darüber, wie Vererbung in CSS funktioniert.

## Kurzschreib-Eigenschaften

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
- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/Cascade)
- [Lernen: Kaskade, Spezifität und Vererbung](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- [Lernen: Kaskadenebenen](/de/docs/Learn/CSS/Building_blocks/Cascade_layers)
- [Modul: CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade)
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
- [Initiale](/de/docs/Web/CSS/initial_value), [berechnete](/de/docs/Web/CSS/computed_value), [verwendete](/de/docs/Web/CSS/used_value) und [tatsächliche](/de/docs/Web/CSS/actual_value) Werte
- [Wertedefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
