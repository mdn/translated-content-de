---
title: Shorthand-Eigenschaften
slug: Web/CSS/CSS_cascade/Shorthand_properties
l10n:
  sourceCommit: 6d55eec58e38583da60aa635d41393ad051d1c6d
---

{{CSSRef}}

**_Shorthand-Eigenschaften_** sind CSS-Eigenschaften, die es ermöglichen, die Werte mehrerer anderer CSS-Eigenschaften gleichzeitig festzulegen. Mit einer Shorthand-Eigenschaft können Sie prägnantere (und oft besser lesbare) Stylesheets schreiben und dabei Zeit und Energie sparen.

Die CSS-Spezifikation definiert Shorthand-Eigenschaften zur Gruppierung der Definition von gemeinsamen Eigenschaften, die auf dasselbe Thema wirken. Zum Beispiel ist die CSS-{{cssxref("background")}}-Eigenschaft eine Shorthand-Eigenschaft, die die Werte von {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-repeat")}} und {{cssxref("background-position")}} festlegen kann. Ebenso können die gebräuchlichsten schriftbezogenen Eigenschaften mithilfe der Shorthand-{{cssxref("font")}} definiert werden, und die verschiedenen Abstände um eine Box können mit der {{cssxref("margin")}}-Shorthand definiert werden.

## Knifflige Randfälle

Es gibt einige Randfälle, die bei der Verwendung von Shorthand-Eigenschaften zu beachten sind.

### Eigenschaften weglassen

Ein Wert, der nicht angegeben ist, wird auf seinen Anfangswert gesetzt. Das bedeutet, dass er zuvor festgelegte Werte **überschreibt**. Zum Beispiel:

```css
p {
  background-color: red;
  background: url(images/bg.gif) no-repeat left top;
}
```

Dies wird die Farbe des Hintergrunds nicht auf `red` setzen, sondern auf den Standardwert für {{cssxref("background-color")}}, der `transparent` ist.

Nur die Werte der individuellen Eigenschaften können vererbt werden. Da fehlende Werte durch ihren Anfangswert ersetzt werden, ist es unmöglich, eine Vererbung der einzelnen Eigenschaften zuzulassen, indem man sie weglässt. Das Schlüsselwort `inherit` kann auf eine Eigenschaft angewendet werden, aber nur als Ganzes, nicht als Schlüsselwort für einen bestimmten Wert. Das bedeutet, dass der einzige Weg, einen bestimmten Wert erben zu lassen, darin besteht, die Langform der Eigenschaft mit dem Schlüsselwort `inherit` zu verwenden.

### Reihenfolge der Eigenschaften

Shorthand-Eigenschaften versuchen nicht, eine bestimmte Reihenfolge für die Werte der Eigenschaften, die sie ersetzen, zu erzwingen. Dies funktioniert gut, wenn diese Eigenschaften Werte unterschiedlichen Typs verwenden, da die Reihenfolge keine Bedeutung hat. Dies funktioniert jedoch nicht so einfach, wenn mehrere Eigenschaften identische Werte haben können.

Zwei wichtige Fälle hierbei sind:

- Eigenschaften, die sich auf die Kanten einer Box beziehen, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}
- Eigenschaften, die sich auf die Ecken einer Box beziehen, wie {{cssxref("border-radius")}}

#### Kanten einer Box

Shorthands, die Eigenschaften behandeln, die sich auf die Kanten einer Box beziehen, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}, verwenden immer eine konsistente 1-zu-4-Wert-Syntax zur Darstellung dieser Kanten:

- **1-Wert-Syntax:** `border-width: 1em` — Der Einzelwert repräsentiert alle Kanten: ![Box-Kanten mit Ein-Wert-Syntax](border1.png)

- **2-Wert-Syntax:** `border-width: 1em 2em` — Der erste Wert repräsentiert die vertikalen, also obere und untere Kanten, der zweite die horizontalen, also die linken und rechten: ![Box-Kanten mit Zwei-Wert-Syntax](border2.png)

- **3-Wert-Syntax:** `border-width: 1em 2em 3em` — Der erste Wert repräsentiert die obere Kante, der zweite die horizontalen, also linke und rechte, und der dritte Wert die untere Kante: ![Box-Kanten mit Drei-Wert-Syntax](border3.png)

- **4-Wert-Syntax:** `border-width: 1em 2em 3em 4em` — Die vier Werte stehen für die obere, rechte, untere und linke Kante jeweils in dieser Reihenfolge, also im Uhrzeigersinn beginnend oben: ![Box-Kanten mit Vier-Wert-Syntax](border4.png) Der Anfangsbuchstabe von Oben-Rechts-Unten-Links entspricht der Reihenfolge der Konsonanten des Wortes _trouble_: TRBL. Man kann sich dies auch als die Reihenfolge vorstellen, in der die Zeiger einer Uhr rotieren würden: `1em` beginnt auf der 12-Uhr-Position, dann `2em` auf der 3-Uhr-Position, dann `3em` auf der 6-Uhr-Position, und `4em` auf der 9-Uhr-Position.

#### Ecken einer Box

Ebenso verwenden Shorthands, die Eigenschaften behandeln, die sich auf die Ecken einer Box beziehen, wie {{cssxref("border-radius")}}, immer eine konsistente 1-zu-4-Wert-Syntax zur Darstellung dieser Ecken:

- **1-Wert-Syntax:** `border-radius: 1em` — Der Einzelwert repräsentiert alle Ecken: ![Box-Ecken mit Ein-Wert-Syntax](corner1.png)

- **2-Wert-Syntax:** `border-radius: 1em 2em` — Der erste Wert repräsentiert die obere linke und untere rechte Ecke, der zweite die obere rechte und untere linke Ecke: ![Box-Ecken mit Zwei-Wert-Syntax](corner2.png)

- **3-Wert-Syntax:** `border-radius: 1em 2em 3em` — Der erste Wert repräsentiert die obere linke Ecke, der zweite die oberen rechten und unteren linken, und der dritte Wert die untere rechte Ecke: ![Box-Ecken mit Drei-Wert-Syntax](corner3.png)

- **4-Wert-Syntax:** `border-radius: 1em 2em 3em 4em` — Die vier Werte repräsentieren die obere linke, obere rechte, untere rechte und untere linke Ecke jeweils in dieser Reihenfolge, also im Uhrzeigersinn beginnend bei der oberen linken Ecke: ![Box-Ecken mit Vier-Wert-Syntax](corner4.png)

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

(Die Shorthand-Form entspricht eigentlich den Langform-Eigenschaften oben plus `background-attachment: scroll` und, in CSS3, einigen zusätzlichen Eigenschaften.)

Siehe {{cssxref("background")}} für ausführlichere Informationen, einschließlich CSS3-Eigenschaften.

## Schriftarten-Eigenschaften

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

Diese Shorthand-Deklaration entspricht tatsächlich den Langform-Deklarationen oben plus `font-variant: normal`, `font-size-adjust: none` und `font-stretch: normal`.

## Rand-Eigenschaften

Bei Rändern können Breite, Farbe und Stil in einer Deklaration vereinfacht werden. Zum Beispiel wird das folgende CSS:

```css
border-width: 1px;
border-style: solid;
border-color: #000;
```

vereinfacht zu:

```css
border: 1px solid #000;
```

## Rand- und Auffüllungs-Eigenschaften

Shorthand-Versionen von Rand- und Auffüllungswerten funktionieren ähnlich; die Randeigenschaft erlaubt die Angabe von Shorthand-Werten unter Verwendung von einem, zwei, drei oder vier Werten. Betrachten Sie die folgenden CSS-Deklarationen:

```css
margin-top: 10px;
margin-right: 5px;
margin-bottom: 10px;
margin-left: 5px;
```

Sie entsprechen der folgenden Deklaration mit der Vier-Wert-Shorthand. Beachten Sie, dass die Werte in Uhrzeigersinn-Reihenfolge sind, beginnend oben: oben, rechts, unten, dann links (TRBL, die Konsonanten in „trouble“).

```css
margin: 10px 5px 10px 5px;
```

Shorthand-Regeln für eine, zwei, drei und vier Wert Deklarationen bei Margin sind:

- Wenn **ein** Wert angegeben ist, gilt er als derselbe Margin für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben sind, gilt der erste Margin für **oben und unten**, der zweite für **links und rechts**.
- Wenn **drei** Werte angegeben sind, gilt der erste Margin für **oben**, der zweite für **links und rechts**, der dritte für **unten**.
- Wenn **vier** Werte angegeben sind, gelten die Margins für **oben**, **rechts**, **unten** und **links** in dieser Reihenfolge (im Uhrzeigersinn).

## Positions-Eigenschaften

Mit Position können die Shorthand-Versionen von oben, rechts, unten und links in einer Deklaration vereinfacht werden. Zum Beispiel kann das folgende CSS:

```css
top: 0;
right: 20px;
bottom: 0;
left: 20px;
```

vereinfacht werden zu:

```css
inset: 0 20px 0 20px;
```

Genauso wie bei Margins und Paddings sind die Einsatzwerte im Uhrzeigersinn geordnet - oben, rechts, unten, dann links (TRBL).

## Die universelle Shorthand-Eigenschaft

CSS bietet eine universelle Shorthand-Eigenschaft, {{cssxref("all")}}, die ihren Wert auf jede Eigenschaft im Dokument anwendet. Ihr Zweck ist es, das Vererbungsmodell der Eigenschaften zu ändern.

Siehe [Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) oder [Einführung in den CSS-Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade) für weitere Informationen darüber, wie Vererbung in CSS funktioniert.

## Shorthand-Eigenschaften

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
- [Leitfaden: Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Leitfaden: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
- [Initiale](/de/docs/Web/CSS/CSS_cascade/initial_value), [berechnete](/de/docs/Web/CSS/CSS_cascade/computed_value), [verwendete](/de/docs/Web/CSS/CSS_cascade/used_value) und [tatsächliche](/de/docs/Web/CSS/CSS_cascade/actual_value) Werte
- [Definitionssyntax von Werten](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
