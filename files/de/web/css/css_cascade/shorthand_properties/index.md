---
title: Kurzschreibweisen
slug: Web/CSS/CSS_cascade/Shorthand_properties
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**_Kurzschreibweisen_** sind CSS-Eigenschaften, die es Ihnen ermöglichen, die Werte mehrerer anderer CSS-Eigenschaften gleichzeitig festzulegen. Durch die Verwendung einer Kurzschreibweise können Sie prägnantere (und oft lesbarere) Style-Sheets erstellen, was Zeit und Energie spart.

Die CSS-Spezifikation definiert Kurzschreibweisen, um die Definition von gemeinsamen Eigenschaften, die auf das gleiche Thema wirken, zu gruppieren. Zum Beispiel ist die CSS-Eigenschaft {{cssxref("background")}} eine Kurzschreibweise, die in der Lage ist, die Werte von {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-repeat")}} und {{cssxref("background-position")}} zu definieren. Ebenso können die häufigsten schriftbezogenen Eigenschaften mit der Kurzschreibweise {{cssxref("font")}} definiert werden, und die verschiedenen Ränder um ein Kästchen können mit der Kurzschreibweise {{cssxref("margin")}} definiert werden.

## Knifflige Grenzfälle

Es gibt einige Grenzfälle, die bei der Verwendung von Kurzschreibweisen berücksichtigt werden müssen.

### Auslassung von Eigenschaften

Ein nicht spezifizierter Wert wird auf seinen Anfangswert gesetzt. Das bedeutet, dass er zuvor gesetzte Werte **überschreibt**. Zum Beispiel:

```css
p {
  background-color: red;
  background: url(images/bg.gif) no-repeat left top;
}
```

Dadurch wird die Hintergrundfarbe nicht auf `red` gesetzt, sondern auf den Standardwert für {{cssxref("background-color")}}, der `transparent` ist.

Nur die individuellen Eigenschaftswerte können vererbt werden. Da fehlende Werte durch ihren Anfangswert ersetzt werden, ist es unmöglich, die Vererbung von einzelnen Eigenschaften zu ermöglichen, indem man sie auslässt. Das Schlüsselwort `inherit` kann auf eine Eigenschaft angewendet werden, aber nur als Ganzes, nicht als Schlüsselwort für einen Wert oder einen anderen. Das bedeutet, dass der einzige Weg, einen bestimmten Wert zu vererben, darin besteht, die Langschreibweise mit dem Schlüsselwort `inherit` zu verwenden.

### Reihenfolge der Eigenschaften

Kurzschreibweisen versuchen, keine spezifische Reihenfolge für die Werte der Eigenschaften, die sie ersetzen, zu erzwingen. Dies funktioniert gut, wenn diese Eigenschaften Werte unterschiedlicher Typen verwenden, da die Reihenfolge keine Bedeutung hat. Es funktioniert jedoch nicht so gut, wenn mehrere Eigenschaften identische Werte haben können.

Zwei wichtige Fälle sind hier:

- Eigenschaften, die sich auf die Kanten eines Kästchens beziehen, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}
- Eigenschaften, die sich auf die Ecken eines Kästchens beziehen, wie {{cssxref("border-radius")}}

#### Kanten eines Kastens

Kurzschreibweisen, die sich auf die Kanten eines Kastens beziehen, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}, verwenden immer eine konsistente 1-bis-4-Werte-Syntax, die diese Kanten darstellt:

- **1-Wert-Syntax:** `border-width: 1em` — Der einzelne Wert repräsentiert alle Kanten: ![Kanten eines Kastens mit Ein-Wert-Syntax](border1.png)

- **2-Wert-Syntax:** `border-width: 1em 2em` — Der erste Wert repräsentiert die vertikalen, das heißt obere und untere Kanten, der zweite die horizontalen, das heißt die linken und rechten: ![Kanten eines Kastens mit Zwei-Wert-Syntax](border2.png)

- **3-Wert-Syntax:** `border-width: 1em 2em 3em` — Der erste Wert repräsentiert die obere Kante, der zweite die horizontalen, das heißt linken und rechten, und der dritte Wert die untere Kante: ![Kanten eines Kastens mit Drei-Wert-Syntax](border3.png)

- **4-Wert-Syntax:** `border-width: 1em 2em 3em 4em` — Die vier Werte repräsentieren die obere, rechte, untere und linke Kante jeweils, immer in dieser Reihenfolge, das heißt im Uhrzeigersinn beginnend oben: ![Kanten eines Kastens mit Vier-Wert-Syntax](border4.png) Der Anfangsbuchstabe von Oben-Rechts-Unten-Links passt zur Reihenfolge der Konsonanten des Wortes _trouble_: TRBL. Sie können es sich auch als die Reihenfolge merken, in der sich die Zeiger auf einer Uhr drehen würden: `1em` beginnt um 12 Uhr, dann `2em` um 3 Uhr, dann `3em` um 6 Uhr und `4em` um 9 Uhr.

#### Ecken eines Kastens

In ähnlicher Weise verwenden Kurzschreibweisen, die sich auf die Ecken eines Kastens beziehen, wie {{cssxref("border-radius")}}, immer eine konsistente 1-bis-4-Werte-Syntax, die diese Ecken darstellt:

- **1-Wert-Syntax:** `border-radius: 1em` — Der einzelne Wert repräsentiert alle Ecken: ![Ecken eines Kastens mit Ein-Wert-Syntax](corner1.png)

- **2-Wert-Syntax:** `border-radius: 1em 2em` — Der erste Wert repräsentiert die obere linke und untere rechte Ecke, der zweite die obere rechte und untere linke Ecke: ![Ecken eines Kastens mit Zwei-Wert-Syntax](corner2.png)

- **3-Wert-Syntax:** `border-radius: 1em 2em 3em` — Der erste Wert repräsentiert die obere linke Ecke, der zweite die obere rechte und untere linke Ecke, und der dritte Wert die untere rechte Ecke: ![Ecken eines Kastens mit Drei-Wert-Syntax](corner3.png)

- **4-Wert-Syntax:** `border-radius: 1em 2em 3em 4em` — Die vier Werte repräsentieren die obere linke, obere rechte, untere rechte und untere linke Ecke jeweils, immer in dieser Reihenfolge, das heißt im Uhrzeigersinn beginnend oben links: ![Ecken eines Kastens mit Vier-Wert-Syntax](corner4.png)

## Hintergrund-Eigenschaften

Betrachten Sie einen Hintergrund mit den folgenden Eigenschaften:

```css
background-color: #000;
background-image: url(images/bg.gif);
background-repeat: no-repeat;
background-position: left top;
```

Diese vier Deklarationen können zu einer einzigen verkürzt werden:

```css
background: #000 url(images/bg.gif) no-repeat left top;
```

(Die Kurzform entspricht tatsächlich den oben genannten Langform-Eigenschaften plus `background-attachment: scroll` und, in CSS3, einigen zusätzlichen Eigenschaften.)

Weitere detaillierte Informationen, einschließlich der CSS3-Eigenschaften, finden Sie unter {{cssxref("background")}}.

## Schriftart-Eigenschaften

Betrachten Sie die folgenden Deklarationen:

```css
font-style: italic;
font-weight: bold;
font-size: 0.8em;
line-height: 1.2;
font-family: Arial, sans-serif;
```

Diese 5 Anweisungen können folgendermaßen verkürzt werden:

```css
font:
  italic bold 0.8em/1.2 Arial,
  sans-serif;
```

Diese Kurzschriftdeklaration entspricht tatsächlich den oben genannten Langschriftdeklarationen plus `font-variant: normal`, `font-size-adjust: none`, und `font-stretch: normal`.

## Rahmen-Eigenschaften

Bei Rahmen können Breite, Farbe und Stil in eine einzige Deklaration vereinfacht werden. Betrachten Sie zum Beispiel das folgende CSS:

```css
border-width: 1px;
border-style: solid;
border-color: #000;
```

Es kann vereinfacht werden als:

```css
border: 1px solid #000;
```

## Rand- und Abstands-Eigenschaften

Kurzschreibweisen für Rand- und Abstands-Werte funktionieren ähnlich; die Rand-Eigenschaft erlaubt die Angabe von Kurzschriftwerten mit einem, zwei, drei oder vier Werten. Betrachten Sie die folgenden CSS-Deklarationen:

```css
margin-top: 10px;
margin-right: 5px;
margin-bottom: 10px;
margin-left: 5px;
```

Diese entsprechen der folgenden Deklaration mit der Vier-Wert-Kurzschrift. Beachten Sie, dass die Werte in Uhrzeigersinn-Reihenfolge sind, beginnend oben: oben, rechts, unten, dann links (TRBL, die Konsonanten in "trouble").

```css
margin: 10px 5px 10px 5px;
```

Die Kurzschriftregeln für Ränder bei ein-, zwei-, drei- und vierwertigen Deklarationen sind:

- Wenn **ein** Wert angegeben ist, gilt der gleiche Rand für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben sind, gilt der erste Rand für **oben und unten**, der zweite für **links und rechts**.
- Wenn **drei** Werte angegeben sind, gilt der erste Rand für **oben**, der zweite für **links und rechts**, der dritte für **unten**.
- Wenn **vier** Werte angegeben sind, gelten die Ränder in der Reihenfolge **oben**, **rechts**, **unten** und **links** im Uhrzeigersinn.

## Positions-Eigenschaften

Mit Position können die Kurzschreibversionen von oben, rechts, unten und links in eine einzige Deklaration vereinfacht werden. Betrachten Sie zum Beispiel das folgende CSS:

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

Genau wie Ränder und Abstände sind auch die Einsatzwerte im Uhrzeigersinn angeordnet - oben, rechts, unten, dann links (TRBL).

## Die universelle Kurzschreib-Eigenschaft

CSS bietet eine universelle Kurzschreib-Eigenschaft, {{cssxref("all")}}, die ihren Wert auf jede Eigenschaft im Dokument anwendet. Ihr Zweck ist es, das Vererbungsmuster der Eigenschaften zu ändern.

Weitere Informationen darüber, wie Vererbung in CSS funktioniert, finden Sie unter [Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) oder [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade).

## Kurzschreib-Properties

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
- [Lernen: Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
- [Anfangs-](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value), [berechnete](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value), [verwendete](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value) und [tatsächliche](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value) Werte
- [Syntax der Wertedefinition](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
