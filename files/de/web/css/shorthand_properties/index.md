---
title: Kurzschreibweise-Eigenschaften
slug: Web/CSS/Shorthand_properties
l10n:
  sourceCommit: ec64bbd66dab1ce079768708b5da8c50abc4a957
---

{{CSSRef}}

**_Kurzschreibweise-Eigenschaften_** sind CSS-Eigenschaften, mit denen Sie die Werte mehrerer anderer CSS-Eigenschaften gleichzeitig festlegen können. Durch die Verwendung einer Kurzschreibweise-Eigenschaft können Sie kompaktere (und oft lesbarere) Stylesheets schreiben, was Zeit und Mühe spart.

Die CSS-Spezifikation definiert Kurzschreibweise-Eigenschaften, um die Definition gängiger Eigenschaften zu gruppieren, die auf dasselbe Thema wirken. Beispielsweise ist die CSS-{{cssxref("background")}}-Eigenschaft eine Kurzschreibweise-Eigenschaft, die in der Lage ist, die Werte von {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-repeat")}} und {{cssxref("background-position")}} zu definieren. Ebenso können die gebräuchlichsten schriftbezogenen Eigenschaften mit der Kurzschreibweise {{cssxref("font")}} definiert werden, und die verschiedenen Ränder um eine Box können mit der Kurzschreibweise {{cssxref("margin")}} definiert werden.

## Schwierige Randfälle

Beim Einsatz von Kurzschreibweise-Eigenschaften gibt es einige Randfälle, die es zu beachten gilt.

### Eigenschaften weglassen

Ein Wert, der nicht angegeben ist, wird auf seinen Anfangswert gesetzt. Das bedeutet, dass er zuvor festgelegte Werte **überschreibt**. Zum Beispiel:

```css
p {
  background-color: red;
  background: url(images/bg.gif) no-repeat left top;
}
```

Dies wird die Hintergrundfarbe nicht auf `red` setzen, sondern auf den Standardwert für {{cssxref("background-color")}}, welcher `transparent` ist.

Nur die Werte einzelner Eigenschaften können vererben. Da fehlende Werte durch ihren Anfangswert ersetzt werden, ist es unmöglich, die Vererbung einzelner Eigenschaften durch Weglassen zu ermöglichen. Das Schlüsselwort `inherit` kann auf eine Eigenschaft angewendet werden, jedoch nur als Ganzes, nicht als Schlüsselwort für einen bestimmten Wert. Das bedeutet, dass der einzige Weg, um einen bestimmten Wert zu erben, darin besteht, die Langform der Eigenschaft mit dem Schlüsselwort `inherit` zu verwenden.

### Reihenfolge der Eigenschaften

Kurzschreibweise-Eigenschaften versuchen, keine spezifische Reihenfolge für die Werte der Eigenschaften, die sie ersetzen, zu erzwingen. Dies funktioniert gut, wenn diese Eigenschaften Werte unterschiedlichen Typs verwenden, da die Reihenfolge keine Bedeutung hat, jedoch funktioniert dies nicht so einfach, wenn mehrere Eigenschaften identische Werte haben können.

Zwei wichtige Fälle sind hier:

- Eigenschaften, die sich auf die Kanten einer Box beziehen, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}
- Eigenschaften, die sich auf die Ecken einer Box beziehen, wie {{cssxref("border-radius")}}

#### Kanten einer Box

Kurzschreibweise-Eigenschaften, die sich auf die Kanten einer Box beziehen, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}, verwenden immer eine konsistente 1-bis-4-Wert-Syntax, die diese Kanten darstellt:

- **1-Wert-Syntax:** `border-width: 1em` — Der einzelne Wert steht für alle Kanten: ![Boxkanten mit einer Wert-Syntax](border1.png)

- **2-Wert-Syntax:** `border-width: 1em 2em` — Der erste Wert steht für die vertikalen Kanten, also oben und unten, der zweite für die horizontalen, also links und rechts: ![Boxkanten mit zwei Wert-Syntax](border2.png)

- **3-Wert-Syntax:** `border-width: 1em 2em 3em` — Der erste Wert steht für die obere Kante, der zweite für die horizontalen, also links und rechts, und der dritte Wert für die untere Kante: ![Boxkanten mit drei Wert-Syntax](border3.png)

- **4-Wert-Syntax:** `border-width: 1em 2em 3em 4em` — Die vier Werte stehen respektive für die obere, rechte, untere und linke Kante, immer in dieser Reihenfolge, also im Uhrzeigersinn beginnend oben: ![Boxkanten mit vier Wert-Syntax](border4.png) Der Anfangsbuchstabe von Top-Right-Bottom-Left passt zur Reihenfolge der Konsonanten des Wortes _trouble_: TRBL. Sie können es sich auch als die Reihenfolge vorstellen, in der sich die Uhrzeiger drehen würden: `1em` beginnt in der 12-Uhr-Position, dann `2em` in der 3-Uhr-Position, dann `3em` in der 6-Uhr-Position und `4em` in der 9-Uhr-Position.

#### Ecken einer Box

Ähnlich verwenden Kurzschreibweise-Eigenschaften, die sich auf die Ecken einer Box beziehen, wie {{cssxref("border-radius")}}, immer eine konsistente 1-bis-4-Wert-Syntax, die diese Ecken darstellt:

- **1-Wert-Syntax:** `border-radius: 1em` — Der einzelne Wert steht für alle Ecken: ![Boxecken mit einer Wert-Syntax](corner1.png)

- **2-Wert-Syntax:** `border-radius: 1em 2em` — Der erste Wert steht für die obere linke und untere rechte Ecke, der zweite für die obere rechte und untere linke: ![Boxecken mit zwei Wert-Syntax](corner2.png)

- **3-Wert-Syntax:** `border-radius: 1em 2em 3em` — Der erste Wert steht für die obere linke Ecke, der zweite für die obere rechte und untere linke, und der dritte Wert für die untere rechte: ![Boxecken mit drei Wert-Syntax](corner3.png)

- **4-Wert-Syntax:** `border-radius: 1em 2em 3em 4em` — Die vier Werte stehen respektive für die obere linke, obere rechte, untere rechte und untere linke Ecke, immer in dieser Reihenfolge, also im Uhrzeigersinn beginnend oben links: ![Boxecken mit vier Wert-Syntax](corner4.png)

## Hintergrund-Eigenschaften

Betrachten Sie einen Hintergrund mit den folgenden Eigenschaften

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

(Die Kurzschreibform entspricht tatsächlich den obigen Langform-Eigenschaften plus `background-attachment: scroll` und in CSS3 einigen zusätzlichen Eigenschaften.)

Siehe {{cssxref("background")}} für ausführlichere Informationen, einschließlich CSS3-Eigenschaften.

## Schriftart-Eigenschaften

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

Diese Kurzschreibdeklaration entspricht tatsächlich den oben genannten Langformdeklarationen plus `font-variant: normal`, `font-size-adjust: none`, und `font-stretch: normal`.

## Rahmen-Eigenschaften

Bei Rahmen können Breite, Farbe und Stil in einer Deklaration vereinfacht werden. Betrachten Sie zum Beispiel das folgende CSS:

```css
border-width: 1px;
border-style: solid;
border-color: #000;
```

Es kann vereinfacht werden zu:

```css
border: 1px solid #000;
```

## Rand- und Auffüllungseigenschaften

Kurzschreibversionen der Rand- und Auffüllungswerte funktionieren ähnlich; die Eigenschaft `margin` ermöglicht es, Kurzformwerte mit einem, zwei, drei oder vier Werten zu spezifizieren. Betrachten Sie die folgenden CSS-Deklarationen:

```css
margin-top: 10px;
margin-right: 5px;
margin-bottom: 10px;
margin-left: 5px;
```

Sie sind die gleichen wie die folgende Deklaration mit der vierwertigen Kurzform. Beachten Sie, dass die Werte im Uhrzeigersinn geordnet sind, beginnend oben: oben, rechts, unten, dann links (TRBL, die Konsonanten in "trouble").

```css
margin: 10px 5px 10px 5px;
```

Rand-Kurzschreibregeln für Deklarationen mit einem, zwei, drei und vier Werten sind:

- Wenn **ein** Wert angegeben wird, gilt der gleiche Rand für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben werden, gilt der erste Rand für **oben und unten**, der zweite für **links und rechts**.
- Wenn **drei** Werte angegeben werden, gilt der erste Rand für **oben**, der zweite für **links und rechts**, der dritte für **unten**.
- Wenn **vier** Werte angegeben werden, gelten die Ränder für **oben**, **rechts**, **unten** und **links** in dieser Reihenfolge (im Uhrzeigersinn).

## Positionseigenschaften

Bei Positionsangaben können die Kurzversionen von oben, rechts, unten und links in einer Deklaration vereinfacht werden. Betrachten Sie zum Beispiel das folgende CSS:

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

Genau wie bei Abständen und Auffüllungen sind die Eingabewerte im Uhrzeigersinn geordnet - oben, rechts, unten, dann links (TRBL).

## Die universelle Kurzschreibweise-Eigenschaft

CSS bietet eine universelle Kurzschreibweise-Eigenschaft, {{cssxref("all")}}, die ihren Wert auf jede Eigenschaft im Dokument anwendet. Ihre Aufgabe ist es, das Vererbungsmodell der Eigenschaften zu ändern.

Siehe [Cascade und Vererbung](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance) oder [Einführung in die CSS Cascade](/de/docs/Web/CSS/Cascade) für weitere Informationen darüber, wie Vererbung in CSS funktioniert.

## Kurzschreibweise-Eigenschaften

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

- [CSS Syntax](/de/docs/Web/CSS/Syntax)
- [Regeln](/de/docs/Web/CSS/At-rule)
- [Spezifität](/de/docs/Web/CSS/Specificity)
- [Vererbung](/de/docs/Web/CSS/Inheritance)
- [Einführung in die CSS Cascade](/de/docs/Web/CSS/Cascade)
- [Lernen: Cascade, Spezifität und Vererbung](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- [Lernen: Cascade-Schichten](/de/docs/Learn/CSS/Building_blocks/Cascade_layers)
- Modul für [CSS-Cascade und Vererbung](/de/docs/Web/CSS/CSS_cascade)
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
- [Anfangs-](/de/docs/Web/CSS/initial_value), [berechnete](/de/docs/Web/CSS/computed_value), [verwendete](/de/docs/Web/CSS/used_value) und [tatsächliche](/de/docs/Web/CSS/actual_value) Werte
- [Wertedefinitions-Syntax](/de/docs/Web/CSS/Value_definition_syntax)
