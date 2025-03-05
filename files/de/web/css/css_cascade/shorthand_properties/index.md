---
title: Kurzschreibweise-Eigenschaften
slug: Web/CSS/CSS_cascade/Shorthand_properties
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

**_Kurzschreibweise-Eigenschaften_** sind CSS-Eigenschaften, mit denen Sie die Werte mehrerer anderer CSS-Eigenschaften gleichzeitig festlegen können. Durch die Verwendung einer Eigenschaft in Kurzschreibweise können Sie kürzere (und oft besser lesbare) Stylesheets schreiben und Zeit und Energie sparen.

Die CSS-Spezifikation definiert Kurzschreibweise-Eigenschaften, um die Definition gemeinsamer Eigenschaften zu gruppieren, die das gleiche Thema betreffen. Zum Beispiel ist die CSS {{cssxref("background")}}-Eigenschaft eine Kurzschreibweise-Eigenschaft, die in der Lage ist, die Werte von {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-repeat")}} und {{cssxref("background-position")}} zu definieren. Ebenso können die am häufigsten verwendeten schriftbezogenen Eigenschaften mittels der Kurzform {{cssxref("font")}} definiert werden, und die verschiedenen Ränder um eine Box können mit der {{cssxref("margin")}}-Kurzform definiert werden.

## Schwierige Randfälle

Es gibt einige Randfälle, die Sie bei der Verwendung von Kurzschreibweise-Eigenschaften beachten sollten.

### Eigenschaften auslassen

Ein Wert, der nicht spezifiziert ist, wird auf seinen Initialwert gesetzt. Das bedeutet, dass er zuvor gesetzte Werte **überschreibt**. Zum Beispiel:

```css
p {
  background-color: red;
  background: url(images/bg.gif) no-repeat left top;
}
```

Dies setzt die Farbe des Hintergrunds nicht auf `red`, sondern auf den Standardwert für {{cssxref("background-color")}}, welcher `transparent` ist.

Nur die individuellen Eigenschaftswerte können vererbt werden. Da fehlende Werte durch ihren Initialwert ersetzt werden, ist es unmöglich, die Vererbung einzelner Eigenschaften zu ermöglichen, indem man sie weglässt. Das Schlüsselwort `inherit` kann auf eine Eigenschaft angewendet werden, jedoch nur als Ganzes, nicht als Schlüsselwort für einen bestimmten Wert oder einen anderen. Das bedeutet, dass der einzige Weg, um einen spezifischen Wert vererben zu lassen, darin besteht, die Langform-Eigenschaft mit dem Schlüsselwort `inherit` zu verwenden.

### Reihenfolge der Eigenschaften

Kurzschreibweise-Eigenschaften versuchen, keine spezifische Reihenfolge für die Werte der Eigenschaften, die sie ersetzen, zu erzwingen. Dies funktioniert gut, wenn diese Eigenschaften Werte unterschiedlicher Typen verwenden, da die Reihenfolge keine Bedeutung hat, aber dies funktioniert nicht so einfach, wenn mehrere Eigenschaften identische Werte haben können.

Zwei wichtige Fälle hier sind:

- Eigenschaften, die sich auf die Ränder einer Box beziehen, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}
- Eigenschaften, die sich auf die Ecken einer Box beziehen, wie {{cssxref("border-radius")}}

#### Ränder einer Box

Kurzformen, die Eigenschaften im Zusammenhang mit den Rändern einer Box handhaben, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}, verwenden immer eine konsistente 1-bis-4-Werte-Syntax, die diese Ränder darstellt:

- **1-Wert-Syntax:** `border-width: 1em` — Der einzelne Wert steht für alle Ränder: ![Ränder mit Ein-Wert-Syntax](border1.png)

- **2-Wert-Syntax:** `border-width: 1em 2em` — Der erste Wert steht für die vertikalen, also oberen und unteren Ränder, der zweite für die horizontalen, also linken und rechten Ränder: ![Ränder mit Zwei-Wert-Syntax](border2.png)

- **3-Wert-Syntax:** `border-width: 1em 2em 3em` — Der erste Wert steht für den oberen Rand, der zweite für die horizontalen, also linken und rechten, und der dritte Wert für den unteren Rand: ![Ränder mit Drei-Wert-Syntax](border3.png)

- **4-Wert-Syntax:** `border-width: 1em 2em 3em 4em` — Die vier Werte stehen für den oberen, rechten, unteren und linken Rand, immer in dieser Reihenfolge, also im Uhrzeigersinn beginnend oben: ![Ränder mit Vier-Wert-Syntax](border4.png) Der Anfangsbuchstabe von Oben-Rechts-Unten-Links entspricht der Reihenfolge der Konsonanten des Wortes _trouble_: TRBL. Sie können es sich auch merken als die Reihenfolge, in der die Zeiger einer Uhr rotieren: `1em` beginnt in der 12-Uhr-Position, dann `2em` in der 3-Uhr-Position, dann `3em` in der 6-Uhr-Position und `4em` in der 9-Uhr-Position.

#### Ecken einer Box

Ebenso verwenden Kurzformen, die Eigenschaften im Zusammenhang mit den Ecken einer Box handhaben, wie {{cssxref("border-radius")}}, immer eine konsistente 1-bis-4-Werte-Syntax, die diese Ecken darstellt:

- **1-Wert-Syntax:** `border-radius: 1em` — Der einzelne Wert steht für alle Ecken: ![Ecken mit Ein-Wert-Syntax](corner1.png)

- **2-Wert-Syntax:** `border-radius: 1em 2em` — Der erste Wert steht für die obere linke und untere rechte Ecke, der zweite für die obere rechte und untere linke: ![Ecken mit Zwei-Wert-Syntax](corner2.png)

- **3-Wert-Syntax:** `border-radius: 1em 2em 3em` — Der erste Wert steht für die obere linke Ecke, der zweite für die obere rechte und untere linke, und der dritte Wert für die untere rechte Ecke: ![Ecken mit Drei-Wert-Syntax](corner3.png)

- **4-Wert-Syntax:** `border-radius: 1em 2em 3em 4em` — Die vier Werte stehen für die obere linke, obere rechte, untere rechte und untere linke Ecke, immer in dieser Reihenfolge, also im Uhrzeigersinn beginnend oben links: ![Ecken mit Vier-Wert-Syntax](corner4.png)

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

(Die Kurzform ist eigentlich das Äquivalent der Langform-Eigenschaften oben plus `background-attachment: scroll` und in CSS3 einige zusätzliche Eigenschaften.)

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

Diese 5 Anweisungen können auf die folgende Weise verkürzt werden:

```css
font:
  italic bold 0.8em/1.2 Arial,
  sans-serif;
```

Diese Kurzform-Deklaration ist tatsächlich gleichwertig mit den oben genannten Langform-Deklarationen plus `font-variant: normal`, `font-size-adjust: none` und `font-stretch: normal`.

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

## Rand- und Polster-Eigenschaften

Kurzformen von Rand- und Polsterwerten funktionieren ähnlich; die Rand-Eigenschaft erlaubt es, Kurzformwerte mit einem, zwei, drei oder vier Werten anzugeben. Betrachten Sie die folgenden CSS-Deklarationen:

```css
margin-top: 10px;
margin-right: 5px;
margin-bottom: 10px;
margin-left: 5px;
```

Sie sind gleichbedeutend mit der folgenden Deklaration, die die Vier-Wert-Kurzform verwendet. Beachten Sie, dass die Werte im Uhrzeigersinn angeordnet sind, beginnend oben: oben, rechts, unten, dann links (TRBL, die Konsonanten in "trouble").

```css
margin: 10px 5px 10px 5px;
```

Die Kurzform-Regeln für eine, zwei, drei und vier Werte bei Rändern sind:

- Wenn **ein** Wert angegeben ist, wird derselbe Rand auf **alle vier Seiten** angewendet.
- Wenn **zwei** Werte angegeben sind, gilt der erste Rand für **oben und unten**, der zweite für **links und rechts**.
- Wenn **drei** Werte angegeben sind, gilt der erste Rand für **oben**, der zweite für **links und rechts**, der dritte für **unten**.
- Wenn **vier** Werte angegeben sind, gelten die Ränder in der Reihenfolge **oben**, **rechts**, **unten** und **links** (im Uhrzeigersinn).

## Positionseigenschaften

Bei der Position können die Kurzformversionen von oben, rechts, unten und links in einer Deklaration vereinfacht werden. Betrachten Sie zum Beispiel das folgende CSS:

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

Genau wie bei Rändern und Polsterungen sind die Einfügewerte im Uhrzeigersinn angeordnet - oben, rechts, unten und dann links (TRBL).

## Die universelle Kurzschreibweise-Eigenschaft

CSS bietet eine universelle Kurzschreibweise-Eigenschaft, {{cssxref("all")}}, die ihren Wert auf jede Eigenschaft im Dokument anwendet. Ihr Zweck ist es, das Vererbungsmodell der Eigenschaften zu ändern.

Siehe [Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) oder [Einführung in den CSS Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade) für weitere Informationen darüber, wie Vererbung in CSS funktioniert.

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

- [CSS Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Einführung in den CSS Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadierungsschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
- [Initial](/de/docs/Web/CSS/CSS_cascade/initial_value), [berechnet](/de/docs/Web/CSS/CSS_cascade/computed_value), [verwendet](/de/docs/Web/CSS/CSS_cascade/used_value), und [tatsächlich](/de/docs/Web/CSS/CSS_cascade/actual_value) Werte
- [Wertedefinitions-Syntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
