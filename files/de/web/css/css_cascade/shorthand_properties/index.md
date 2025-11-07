---
title: Kurzschreibweisen
slug: Web/CSS/CSS_cascade/Shorthand_properties
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

**_Kurzschreibweisen_** sind CSS-Eigenschaften, die es Ihnen ermöglichen, die Werte mehrerer anderer CSS-Eigenschaften gleichzeitig festzulegen. Durch die Verwendung einer Kurzschreibweise können Sie kompaktere (und oft lesbarere) Stylesheets schreiben, was Zeit und Energie spart.

Die CSS-Spezifikation definiert Kurzschreibweisen, um die Definition allgemeiner Eigenschaften, die auf das gleiche Thema wirken, zu gruppieren. Beispielsweise ist die CSS-Eigenschaft {{cssxref("background")}} eine Kurzschreibweise, die in der Lage ist, die Werte von {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-repeat")}} und {{cssxref("background-position")}} zu definieren. Ebenso können die am häufigsten verwendeten schriftbezogenen Eigenschaften mithilfe der Kurzschreibweise {{cssxref("font")}} definiert werden, und die unterschiedlichen Ränder um eine Box können mithilfe der Kurzschreibweise {{cssxref("margin")}} definiert werden.

## Knifflige Sonderfälle

Es gibt einige Sonderfälle, die Sie bei der Verwendung von Kurzschreibweisen beachten sollten.

### Weglassen von Eigenschaften

Ein nicht angegebener Wert wird auf seinen Anfangswert gesetzt. Das bedeutet, dass er zuvor gesetzte Werte **überschreibt**. Zum Beispiel:

```css
p {
  background-color: red;
  background: url("images/bg.gif") no-repeat left top;
}
```

Dies wird die Hintergrundfarbe nicht auf `rot` setzen, sondern auf den Standardwert für {{cssxref("background-color")}}, welcher `transparent` ist.

Nur die Werte der einzelnen Eigenschaften können vererbt werden. Da fehlende Werte durch ihren Anfangswert ersetzt werden, ist es unmöglich, die Vererbung einzelner Eigenschaften zuzulassen, indem man sie weglässt. Das Schlüsselwort `inherit` kann auf eine Eigenschaft angewendet werden, aber nur als Ganzes, nicht als Schlüsselwort für einen bestimmten Wert oder einen anderen. Das bedeutet, dass der einzige Weg, einen bestimmten Wert vererbbar zu machen, darin besteht, die Langform-Eigenschaft mit dem Schlüsselwort `inherit` zu verwenden.

### Reihenfolge der Eigenschaften

Kurzschreibweisen versuchen, keine bestimmte Reihenfolge für die Werte der Eigenschaften, die sie ersetzen, vorzuschreiben. Dies funktioniert gut, wenn diese Eigenschaften Werte unterschiedlicher Typen verwenden, da die Reihenfolge keine Bedeutung hat, aber dies funktioniert nicht so einfach, wenn mehrere Eigenschaften identische Werte haben können.

Zwei wichtige Fälle sind hier:

- Eigenschaften, die sich auf die Kanten einer Box beziehen, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}
- Eigenschaften, die sich auf die Ecken einer Box beziehen, wie {{cssxref("border-radius")}}

#### Kanten einer Box

Kurzschreibweisen, die sich mit Eigenschaften im Zusammenhang mit den Kanten einer Box befassen, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}, verwenden immer eine konsistente 1-zu-4-Wert-Syntax, die diese Kanten repräsentiert:

- **1-Wert-Syntax:** `border-width: 1em` — Der einzelne Wert repräsentiert alle Kanten: ![Boxkanten mit Ein-Wert-Syntax](border1.png)

- **2-Wert-Syntax:** `border-width: 1em 2em` — Der erste Wert repräsentiert die vertikalen, also oberen und unteren, Kanten, der zweite die horizontalen, also links und rechts: ![Boxkanten mit Zwei-Wert-Syntax](border2.png)

- **3-Wert-Syntax:** `border-width: 1em 2em 3em` — Der erste Wert repräsentiert die obere Kante, der zweite die horizontalen, also links und rechts, und der dritte Wert die untere Kante: ![Boxkanten mit Drei-Wert-Syntax](border3.png)

- **4-Wert-Syntax:** `border-width: 1em 2em 3em 4em` — Die vier Werte repräsentieren die oberen, rechten, unteren und linken Kanten in dieser Reihenfolge, also im Uhrzeigersinn beginnend oben: ![Boxkanten mit Vier-Wert-Syntax](border4.png) Der Anfangsbuchstabe von Oben-Rechts-Unten-Links entspricht der Reihenfolge der Konsonanten des Wortes _trouble_: TRBL. Sie können sich dies auch als die Reihenfolge merken, in der sich die Zeiger einer Uhr drehen würden: `1em` beginnt in der 12-Uhr-Position, dann `2em` in der 3-Uhr-Position, dann `3em` in der 6-Uhr-Position und `4em` in der 9-Uhr-Position.

#### Ecken einer Box

Ähnlich verwenden Kurzschreibweisen, die sich mit den Ecken einer Box befassen, wie {{cssxref("border-radius")}}, immer eine konsistente 1-zu-4-Wert-Syntax, die diese Ecken repräsentiert:

- **1-Wert-Syntax:** `border-radius: 1em` — Der einzelne Wert repräsentiert alle Ecken: ![Boxecken mit Ein-Wert-Syntax](corner1.png)

- **2-Wert-Syntax:** `border-radius: 1em 2em` — Der erste Wert repräsentiert die obere linke und untere rechte Ecke, der zweite die obere rechte und untere linke Ecke: ![Boxecken mit Zwei-Wert-Syntax](corner2.png)

- **3-Wert-Syntax:** `border-radius: 1em 2em 3em` — Der erste Wert repräsentiert die obere linke Ecke, der zweite die obere rechte und untere linke, und der dritte Wert die untere rechte Ecke: ![Boxecken mit Drei-Wert-Syntax](corner3.png)

- **4-Wert-Syntax:** `border-radius: 1em 2em 3em 4em` — Die vier Werte repräsentieren die obere linke, obere rechte, untere rechte und untere linke Ecke jeweils in dieser Reihenfolge, also im Uhrzeigersinn beginnend oben links: ![Boxecken mit Vier-Wert-Syntax](corner4.png)

## Hintergrundeigenschaften

Betrachten Sie einen Hintergrund mit den folgenden Eigenschaften

```css
background-color: black;
background-image: url("images/bg.gif");
background-repeat: no-repeat;
background-position: left top;
```

Diese vier Deklarationen können auf nur eine gekürzt werden:

```css
background: black url("images/bg.gif") no-repeat left top;
```

(Die Kurzform entspricht tatsächlich den Langform-Eigenschaften oben plus `background-attachment: scroll` und in CSS3 einigen zusätzlichen Eigenschaften.)

Siehe {{cssxref("background")}} für detailliertere Informationen, einschließlich CSS3-Eigenschaften.

## Schriftarteigenschaften

Betrachten Sie die folgenden Deklarationen:

```css
font-style: italic;
font-weight: bold;
font-size: 0.8em;
line-height: 1.2;
font-family: "Arial", sans-serif;
```

Diese 5 Anweisungen können wie folgt gekürzt werden:

```css
font:
  italic bold 0.8em/1.2 "Arial",
  sans-serif;
```

Diese Kurzschreibweise entspricht tatsächlich den obigen Langform-Deklarationen plus `font-variant: normal`, `font-size-adjust: none` und `font-stretch: normal`.

## Rahmen-Eigenschaften

Bei Rahmen können Breite, Farbe und Stil in einer Deklaration vereinfacht werden. Betrachten Sie zum Beispiel das folgende CSS:

```css
border-width: 1px;
border-style: solid;
border-color: black;
```

Es kann vereinfacht werden zu:

```css
border: 1px solid black;
```

## Rand- und Abstands-Eigenschaften

Kurzschreibweisen für Rand- und Abstands-Werte funktionieren ähnlich; die `margin`-Eigenschaft erlaubt es, Kurzschreibwerte anzugeben, indem ein, zwei, drei oder vier Werte verwendet werden. Betrachten Sie die folgenden CSS-Deklarationen:

```css
margin-top: 10px;
margin-right: 5px;
margin-bottom: 10px;
margin-left: 5px;
```

Sie entsprechen der folgenden Deklaration, die die Vier-Wert-Kurzschreibweise verwendet. Beachten Sie, dass die Werte im Uhrzeigersinn angeordnet sind, beginnend oben: oben, rechts, unten, dann links (TRBL, die Konsonanten in "trouble").

```css
margin: 10px 5px 10px 5px;
```

Regeln für die Rand-Kurzschreibung bei einer, zwei, drei und vier Wert-Deklarationen sind:

- Wenn **ein** Wert angegeben wird, gilt derselbe Rand für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben werden, gilt der erste Rand für **oben und unten**, der zweite für **links und rechts**.
- Wenn **drei** Werte angegeben werden, gilt der erste Rand für **oben**, der zweite für **links und rechts**, der dritte für **unten**.
- Wenn **vier** Werte angegeben werden, gelten die Ränder in dieser Reihenfolge für **oben**, **rechts**, **unten** und **links** (im Uhrzeigersinn).

## Positionseigenschaften

Bei Positionseigenschaften können die Kurzschreibversionen von oben, rechts, unten und links in einer Deklaration vereinfacht werden. Betrachten Sie zum Beispiel das folgende CSS:

```css
top: 0;
right: 20px;
bottom: 0;
left: 20px;
```

Es kann vereinfacht werden zu:

```css
inset: 0 20px 0 20px;
```

Genau wie Ränder und Abstände werden die Einfügewerte im Uhrzeigersinn geordnet - oben, rechts, unten, dann links (TRBL).

## Die universelle Kurzschreibweise

CSS bietet eine universelle Kurzschreibweise, {{cssxref("all")}}, die ihren Wert auf jede Eigenschaft im Dokument anwendet. Sein Zweck ist es, das Vererbungsmodell der Eigenschaften zu ändern.

Siehe [Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) oder [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction) für weitere Informationen darüber, wie Vererbung in CSS funktioniert.

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

- [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax/Introduction)
- [At-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules)
- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction)
- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Kaskade und Vererbung](/de/docs/Web/CSS/Guides/Cascade) Modul
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model)
- [Initial](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value), [errechnet](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value), [verwendet](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value), und [tatsächliche](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value) Werte
- [Wertedefinitionssyntax](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
