---
title: Kurzschreibweisen
slug: Web/CSS/Guides/Cascade/Shorthand_properties
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**_Kurzschreibweisen_** sind CSS-Eigenschaften, die es Ihnen ermöglichen, die Werte mehrerer anderer CSS-Eigenschaften gleichzeitig festzulegen. Mit einer Kurzschreibweise können Sie präzisere (und oft lesbarere) Stylesheets schreiben und dabei Zeit und Energie sparen.

Die CSS-Spezifikation definiert Kurzschreibweisen, um die Definitionen von gemeinsamen Eigenschaften, die auf dasselbe Thema wirken, zu gruppieren. Zum Beispiel ist die CSS-{{cssxref("background")}}-Eigenschaft eine Kurzschreibweise, die die Werte von {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-repeat")}} und {{cssxref("background-position")}} definieren kann. In ähnlicher Weise können die häufigsten schriftbezogenen Eigenschaften mit der Kurzschreibweise {{cssxref("font")}} und die verschiedenen Ränder um ein Feld mit der Kurzschreibweise {{cssxref("margin")}} definiert werden.

## Schwierige Grenzfälle

Bei der Verwendung von Kurzschreibweisen gibt es einige Grenzfälle zu beachten.

### Eigenschaftsauslassungen

Ein Wert, der nicht spezifiziert ist, wird auf seinen Anfangswert gesetzt. Das bedeutet, dass er zuvor gesetzte Werte **überschreibt**. Zum Beispiel:

```css
p {
  background-color: red;
  background: url("images/bg.gif") no-repeat left top;
}
```

Hierbei wird die Hintergrundfarbe nicht auf `red`, sondern auf den Standardwert für {{cssxref("background-color")}}, der `transparent` ist, gesetzt.

Nur die individuellen Eigenschaftswerte können vererbt werden. Da fehlende Werte durch ihre Startwerte ersetzt werden, ist es unmöglich, die Vererbung von individuellen Eigenschaften durch Auslassung zuzulassen. Das Schlüsselwort `inherit` kann auf eine Eigenschaft angewendet werden, aber nur als Ganzes, nicht als Schlüsselwort für einen einzelnen Wert oder einen anderen. Das bedeutet, dass der einzige Weg, um einen bestimmten Wert vererben zu lassen, darin besteht, die Langform mit dem Schlüsselwort `inherit` zu verwenden.

### Reihenfolge der Eigenschaften

Kurzschreibweisen versuchen, keine spezifische Reihenfolge für die Werte der Eigenschaften, die sie ersetzen, zu erzwingen. Dies funktioniert gut, wenn diese Eigenschaften Werte unterschiedlicher Typen verwenden, da die Reihenfolge keine Bedeutung hat, aber es funktioniert nicht so einfach, wenn mehrere Eigenschaften identische Werte haben können.

Zwei wichtige Fälle sind:

- Eigenschaften im Zusammenhang mit den Kanten eines Feldes, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}
- Eigenschaften im Zusammenhang mit den Ecken eines Feldes, wie {{cssxref("border-radius")}}

#### Kanten eines Feldes

Kurzschreibweisen, die Eigenschaften im Zusammenhang mit den Kanten eines Feldes bearbeiten, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}, verwenden immer eine konsistente 1-bis-4-Wert-Syntax, die diese Kanten darstellt:

- **1-Wert-Syntax:** `border-width: 1em` — Der einzelne Wert repräsentiert alle Kanten: ![Boxkanten mit Ein-Wert-Syntax](border1.png)

- **2-Wert-Syntax:** `border-width: 1em 2em` — Der erste Wert repräsentiert die vertikalen, also obere und untere, Kanten, der zweite die horizontalen, also die linken und rechten Kanten: ![Boxkanten mit Zwei-Wert-Syntax](border2.png)

- **3-Wert-Syntax:** `border-width: 1em 2em 3em` — Der erste Wert repräsentiert die obere Kante, der zweite die horizontalen, also linke und rechte, und der dritte Wert die untere Kante: ![Boxkanten mit Drei-Wert-Syntax](border3.png)

- **4-Wert-Syntax:** `border-width: 1em 2em 3em 4em` — Die vier Werte repräsentieren die oberen, rechten, unteren und linken Kanten jeweils in dieser Reihenfolge, das heißt im Uhrzeigersinn beginnend bei oben: ![Boxkanten mit Vier-Wert-Syntax](border4.png) Die Anfangsbuchstaben von Top-Right-Bottom-Left entsprechen der Reihenfolge der Konsonanten des Wortes _trouble_: TRBL. Sie können sich auch merken, dass die Reihenfolge der Rotation der Uhrzeiger einer Uhr folgt: `1em` beginnt in der 12-Uhr-Position, dann `2em` in der 3-Uhr-Position, dann `3em` in der 6-Uhr-Position und `4em` in der 9-Uhr-Position.

#### Ecken eines Feldes

Ebenso verwenden Kurzschreibweisen, die Eigenschaften im Zusammenhang mit den Ecken eines Feldes bearbeiten, wie {{cssxref("border-radius")}}, immer eine konsistente 1-bis-4-Wert-Syntax, die diese Ecken darstellt:

- **1-Wert-Syntax:** `border-radius: 1em` — Der einzelne Wert repräsentiert alle Ecken: ![Boxecken mit Ein-Wert-Syntax](corner1.png)

- **2-Wert-Syntax:** `border-radius: 1em 2em` — Der erste Wert repräsentiert die obere linke und untere rechte Ecke, der zweite die obere rechte und untere linke Ecke: ![Boxecken mit Zwei-Wert-Syntax](corner2.png)

- **3-Wert-Syntax:** `border-radius: 1em 2em 3em` — Der erste Wert repräsentiert die obere linke Ecke, der zweite die obere rechte und untere linke, und der dritte Wert die untere rechte Ecke: ![Boxecken mit Drei-Wert-Syntax](corner3.png)

- **4-Wert-Syntax:** `border-radius: 1em 2em 3em 4em` — Die vier Werte repräsentieren die obere linke, obere rechte, untere rechte und untere linke Ecken jeweils in dieser Reihenfolge, das heißt im Uhrzeigersinn beginnend bei oben links: ![Boxecken mit Vier-Wert-Syntax](corner4.png)

## Hintergrundeigenschaften

Betrachten Sie einen Hintergrund mit den folgenden Eigenschaften

```css
background-color: black;
background-image: url("images/bg.gif");
background-repeat: no-repeat;
background-position: left top;
```

Diese vier Deklarationen können zu einer verkürzt werden:

```css
background: black url("images/bg.gif") no-repeat left top;
```

(Die Kurzform ist tatsächlich das Äquivalent der langen Eigenschaften oben plus `background-attachment: scroll` und, in CSS3, einige zusätzliche Eigenschaften.)

Siehe {{cssxref("background")}}, um detailliertere Informationen zu erhalten, einschließlich CSS3-Eigenschaften.

## Schrifteigenschaften

Betrachten Sie die folgenden Deklarationen:

```css
font-style: italic;
font-weight: bold;
font-size: 0.8em;
line-height: 1.2;
font-family: "Arial", sans-serif;
```

Diese 5 Anweisungen können verkürzt auf die folgende Weise spezifiziert werden:

```css
font:
  italic bold 0.8em/1.2 "Arial",
  sans-serif;
```

Diese Kurzform-Deklaration ist tatsächlich gleichbedeutend mit den oben genannten Langform-Deklarationen plus `font-variant: normal`, `font-size-adjust: none` und `font-stretch: normal`.

## Rahmeneigenschaften

Mit Rahmen können Breite, Farbe und Stil in eine Deklaration vereinfacht werden. Betrachten Sie zum Beispiel das folgende CSS:

```css
border-width: 1px;
border-style: solid;
border-color: black;
```

Es kann vereinfacht werden zu:

```css
border: 1px solid black;
```

## Margin- und Padding-Eigenschaften

Kurzfassungen der margin- und padding-Werte funktionieren ähnlich; die margin-Eigenschaft erlaubt es, Kurzwerte unter Verwendung von einem, zwei, drei oder vier Werten anzugeben. Betrachten Sie die folgenden CSS-Deklarationen:

```css
margin-top: 10px;
margin-right: 5px;
margin-bottom: 10px;
margin-left: 5px;
```

Sie entsprechen der folgenden Deklaration mit der Vier-Wert-Kurzform. Beachten Sie, dass die Werte im Uhrzeigersinn in der Reihenfolge Anfang oben, rechts, unten und dann links angegeben sind (TRBL, die Konsonanten in "trouble").

```css
margin: 10px 5px 10px 5px;
```

Die Regeln für die Margin-Kurzform bei einer, zwei, drei und vier Wert-Deklarationen sind:

- Wenn **ein** Wert angegeben ist, gilt dieser Wert für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben sind, gilt der erste für den **Oben und Unten**, der zweite für **Links und Rechts**.
- Wenn **drei** Werte angegeben sind, gilt der erste für den **Oben**, der zweite für **Links und Rechts** und der dritte für den **Unten**.
- Wenn **vier** Werte angegeben sind, gelten diese im **Oben**, **Rechts**, **Unten** und **Links** in dieser Reihenfolge (im Uhrzeigersinn).

## Positions-Eigenschaften

Bei der Position können die Kurzformen für oben, rechts, unten und links in eine Deklaration vereinfacht werden. Betrachten Sie zum Beispiel das folgende CSS:

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

Genauso wie bei Margins und Paddings sind die Werte der Einfügung im Uhrzeigersinn angeordnet - oben, rechts, unten, dann links (TRBL).

## Die universelle Kurzschreibweise

CSS bietet eine universelle Kurzschreibweise, {{cssxref("all")}}, die ihren Wert auf jede Eigenschaft im Dokument anwendet. Ihr Zweck ist es, das Vererbungsschema der Eigenschaften zu ändern.

Für weitere Informationen darüber, wie Vererbung in CSS funktioniert, siehe [Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) oder [Einführung in das CSS-Cascade](/de/docs/Web/CSS/Guides/Cascade/Introduction).

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
- [At-Rules](/de/docs/Web/CSS/Guides/Syntax/At-rules)
- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
- [Einführung in das CSS-Cascade](/de/docs/Web/CSS/Guides/Cascade/Introduction)
- [Lernen: Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Cascading-Schichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Cascade und Vererbung](/de/docs/Web/CSS/Guides/Cascade)-Modul
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model)
- [Initial](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value), [berechnet](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value), [verwendet](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value) und [tatsächliche](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value) Werte
- [Wertdefinitionssyntax](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
