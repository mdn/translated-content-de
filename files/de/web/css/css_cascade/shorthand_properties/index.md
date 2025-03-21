---
title: Kurzschreibweisen
slug: Web/CSS/CSS_cascade/Shorthand_properties
l10n:
  sourceCommit: 95edea913e7f0726243aff3f47b85cfd6f02d995
---

{{CSSRef}}

**_Kurzschreibweisen_** sind CSS-Eigenschaften, die es Ihnen ermöglichen, die Werte mehrerer anderer CSS-Eigenschaften gleichzeitig festzulegen. Mit einer Kurzschreibweise können Sie kompaktere (und oft lesbarere) Stylesheets schreiben, was Zeit und Aufwand spart.

Die CSS-Spezifikation definiert Kurzschreibweisen, um die Definition von gemeinsamen Eigenschaften zu gruppieren, die auf dasselbe Thema wirken. So ist beispielsweise die CSS-Eigenschaft {{cssxref("background")}} eine Kurzschreibweise, die in der Lage ist, die Werte von {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-repeat")}} und {{cssxref("background-position")}} zu definieren. Ebenso können die am häufigsten verwendeten schriftbezogenen Eigenschaften mithilfe der Kurzschreibweise {{cssxref("font")}} definiert werden, und die verschiedenen Ränder eines Kastens können mit der Kurzschreibweise {{cssxref("margin")}} definiert werden.

## Schwierige Sonderfälle

Es gibt einige Sonderfälle, die zu beachten sind, wenn Sie Kurzschreibweisen verwenden.

### Eigenschaften weglassen

Ein Wert, der nicht angegeben wird, wird auf seinen Anfangswert gesetzt. Das bedeutet, dass er zuvor festgelegte Werte **überschreibt**. Zum Beispiel:

```css
p {
  background-color: red;
  background: url(images/bg.gif) no-repeat left top;
}
```

Hierdurch wird die Hintergrundfarbe nicht auf `red` gesetzt, sondern auf den Standardwert für {{cssxref("background-color")}}, der `transparent` ist.

Nur die Einzelwerte von Eigenschaften können vererbt werden. Da fehlende Werte durch ihre Anfangswerte ersetzt werden, ist es unmöglich, das Vererben von Einzelwerten durch Weglassen zu erlauben. Das Schlüsselwort `inherit` kann auf eine Eigenschaft angewendet werden, aber nur als Ganzes, nicht als Schlüsselwort für einen bestimmten Wert oder einen anderen. Das bedeutet, dass die einzige Möglichkeit, einen bestimmten Wert erben zu lassen, darin besteht, die Einzelwert-Eigenschaft mit dem Schlüsselwort `inherit` zu verwenden.

### Reihenfolge der Eigenschaften

Kurzschreibweisen versuchen, keine bestimmte Reihenfolge für die Werte der ersetzten Eigenschaften zu erzwingen. Dies funktioniert gut, wenn diese Eigenschaften Werte unterschiedlichen Typs verwenden, da die Reihenfolge keine Bedeutung hat, aber es funktioniert nicht so einfach, wenn mehrere Eigenschaften identische Werte haben können.

Zwei wichtige Fälle sind hier:

- Eigenschaften, die sich auf die Kanten eines Kastens beziehen, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}
- Eigenschaften, die sich auf die Ecken eines Kastens beziehen, wie {{cssxref("border-radius")}}

#### Kanten eines Kastens

Kurzschreibweisen, die sich auf Eigenschaften beziehen, die die Kanten eines Kastens betreffen, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}, verwenden immer eine konsistente 1-bis-4-Werte-Syntax, die diese Kanten darstellt:

- **1-Wert-Syntax:** `border-width: 1em` — Der einzelne Wert steht für alle Kanten: ![Kanten eines Kastens mit einer Wert-Syntax](border1.png)

- **2-Wert-Syntax:** `border-width: 1em 2em` — Der erste Wert repräsentiert die vertikalen Kanten, das heißt obere und untere, der zweite die horizontalen, das heißt linke und rechte: ![Kanten eines Kastens mit zwei Wert-Syntax](border2.png)

- **3-Wert-Syntax:** `border-width: 1em 2em 3em` — Der erste Wert repräsentiert die obere Kante, der zweite die horizontalen, das heißt linke und rechte, und der dritte Wert die untere Kante: ![Kanten eines Kastens mit drei Wert-Syntax](border3.png)

- **4-Wert-Syntax:** `border-width: 1em 2em 3em 4em` — Die vier Werte repräsentieren die obere, rechte, untere und linke Kante in dieser Reihenfolge, das heißt im Uhrzeigersinn beginnend oben: ![Kanten eines Kastens mit vier Wert-Syntax](border4.png) Der Anfangsbuchstabe von Oben-Rechts-Unten-Links passt zur Reihenfolge der Konsonanten des Wortes _trouble_: TRBL. Sie können sich das auch als die Reihenfolge merken, in der die Zeiger einer Uhr rotieren würden: `1em` beginnt auf der 12-Uhr-Position, dann `2em` auf der 3-Uhr-Position, dann `3em` auf der 6-Uhr-Position, und `4em` auf der 9-Uhr-Position.

#### Ecken eines Kastens

Ähnlich verwenden Kurzschreibweisen, die sich auf die Ecken eines Kastens beziehen, wie {{cssxref("border-radius")}}, immer eine konsistente 1-bis-4-Werte-Syntax, die diese Ecken darstellt:

- **1-Wert-Syntax:** `border-radius: 1em` — Der einzelne Wert steht für alle Ecken: ![Ecken eines Kastens mit einer Wert-Syntax](corner1.png)

- **2-Wert-Syntax:** `border-radius: 1em 2em` — Der erste Wert repräsentiert die obere linke und die untere rechte Ecke, der zweite die obere rechte und untere linke: ![Ecken eines Kastens mit zwei Wert-Syntax](corner2.png)

- **3-Wert-Syntax:** `border-radius: 1em 2em 3em` — Der erste Wert repräsentiert die obere linke Ecke, der zweite die obere rechte und untere linke, und der dritte Wert die untere rechte Ecke: ![Ecken eines Kastens mit drei Wert-Syntax](corner3.png)

- **4-Wert-Syntax:** `border-radius: 1em 2em 3em 4em` — Die vier Werte repräsentieren die obere linke, obere rechte, untere rechte und untere linke Ecke in dieser Reihenfolge, das heißt im Uhrzeigersinn beginnend oben links: ![Ecken eines Kastens mit vier Wert-Syntax](corner4.png)

## Hintergrund-Eigenschaften

Betrachten Sie einen Hintergrund mit folgenden Eigenschaften

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

(Die Kurzform ist tatsächlich das Äquivalent der Langform-Eigenschaften oben plus `background-attachment: scroll` und, in CSS3, einige zusätzliche Eigenschaften.)

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

Diese Kurzform-Deklaration ist tatsächlich äquivalent zu den obigen Langform-Deklarationen plus `font-variant: normal`, `font-size-adjust: none` und `font-stretch: normal`.

## Rand-Eigenschaften

Bei Rändern können die Breite, Farbe und der Stil in eine Deklaration vereinfacht werden. Betrachten Sie zum Beispiel folgendes CSS:

```css
border-width: 1px;
border-style: solid;
border-color: #000;
```

Es kann vereinfacht werden zu:

```css
border: 1px solid #000;
```

## Rand- und Abstands-Eigenschaften

Kurzschreibweisen von Rand- und Abstandswerten funktionieren ähnlich; die Rand-Eigenschaft ermöglicht es, Kurzschriftwerte mit einem, zwei, drei oder vier Werten anzugeben. Betrachten Sie die folgenden CSS-Deklarationen:

```css
margin-top: 10px;
margin-right: 5px;
margin-bottom: 10px;
margin-left: 5px;
```

Sie sind dasselbe wie die folgende Deklaration mit der Vier-Wert-Kurzschrift. Beachten Sie, dass die Werte im Uhrzeigersinn angeordnet sind, beginnend oben: oben, rechts, unten, dann links (TRBL, die Konsonanten von "trouble").

```css
margin: 10px 5px 10px 5px;
```

Regeln für die Kurzschrift von Rändern bei einer, zwei, drei und vier Wert-Deklarationen sind:

- Wenn **ein** Wert angegeben ist, gilt der gleiche Rand für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben sind, gilt der erste Rand für **oben und unten**, der zweite für **links und rechts**.
- Wenn **drei** Werte angegeben sind, gilt der erste Rand für **oben**, der zweite für **links und rechts**, der dritte für **unten**.
- Wenn **vier** Werte angegeben sind, gelten die Ränder für **oben**, **rechts**, **unten** und **links** in dieser Reihenfolge (im Uhrzeigersinn).

## Positions-Eigenschaften

Bei Positionen können die Kurzschreibweisen von oben, rechts, unten und links in eine Deklaration vereinfacht werden. Betrachten Sie zum Beispiel folgendes CSS:

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

Genau wie bei Rändern und Abständen sind die Einfügewert in Uhrzeigersinn geordnet - oben, rechts, unten, dann links (TRBL).

## Die universelle Kurzschreibweise

CSS bietet eine universelle Kurzschreibweise, {{cssxref("all")}}, die ihren Wert auf jede Eigenschaft im Dokument anwendet. Ihr Zweck ist es, das Vererbungsmodell der Eigenschaften zu ändern.

Siehe [Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) oder [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) für weitere Informationen darüber, wie Vererbung in CSS funktioniert.

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
- [Anweisungen](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadierungsschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [Visuelle Modell-Formatierung](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
- [Anfangs-](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial-value), [berechnete](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed-value), [verwendete](/de/docs/Web/CSS/CSS_cascade/Value_processing#used-value) und [aktuelle](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual-value) Werte
- [Wertedefinitions-Syntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
