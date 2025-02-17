---
title: Kurzschreibweise-Eigenschaften
slug: Web/CSS/Shorthand_properties
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

**_Kurzschreibweise-Eigenschaften_** sind CSS-Eigenschaften, mit denen Sie die Werte mehrerer anderer CSS-Eigenschaften gleichzeitig festlegen können. Durch die Verwendung einer Kurzschreibweise können Sie kürzere (und oft lesbarere) Stylesheets schreiben, was Zeit und Mühe spart.

Die CSS-Spezifikation definiert Kurzschreibweise-Eigenschaften, um die Festlegung von häufig zusammengehörigen Eigenschaften, die auf dem gleichen Thema basieren, zu gruppieren. Zum Beispiel ist die CSS-{{cssxref("background")}}-Eigenschaft eine Kurzform, die die Werte von {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-repeat")}} und {{cssxref("background-position")}} festlegen kann. Ebenso können die meisten Schriftbezogenen Eigenschaften mit der Kurzform {{cssxref("font")}} definiert werden, und die verschiedenen Ränder um eine Box können mit der {{cssxref("margin")}}-Kurzform definiert werden.

## Knifflige Randfälle

Es gibt einige Randfälle, die Sie bei der Verwendung von Kurzschreibweise-Eigenschaften beachten sollten.

### Auslassen von Eigenschaften

Ein Wert, der nicht spezifiziert ist, wird auf seinen Initialwert gesetzt. Das bedeutet, dass er zuvor festgelegte Werte **überschreibt**. Zum Beispiel:

```css
p {
  background-color: red;
  background: url(images/bg.gif) no-repeat left top;
}
```

Dies setzt die Hintergrundfarbe nicht auf `red`, sondern auf den Standardwert von {{cssxref("background-color")}}, welcher `transparent` ist.

Nur die individuellen Werte der Eigenschaften können vererbt werden. Da fehlende Werte durch ihren Initialwert ersetzt werden, ist es nicht möglich, die Vererbung einzelner Eigenschaften durch das Weglassen zu erlauben. Das Schlüsselwort `inherit` kann auf eine Eigenschaft angewendet werden, aber nur als Ganzes, nicht als Schlüsselwort für einen einzelnen Wert. Das bedeutet, dass der einzige Weg, einen spezifischen Wert zu erben, darin besteht, die Langform der Eigenschaft zusammen mit dem Schlüsselwort `inherit` zu verwenden.

### Reihenfolge der Eigenschaften

Kurzschreibweise-Eigenschaften versuchen, keine spezifische Reihenfolge der Werte der Eigenschaften zu erzwingen, die sie ersetzen. Dies funktioniert gut, wenn diese Eigenschaften Werte unterschiedlicher Typen verwenden, da die Reihenfolge keine Bedeutung hat. Es funktioniert jedoch nicht so einfach, wenn mehrere Eigenschaften identische Werte haben können.

Zwei wichtige Fälle hierbei sind:

- Eigenschaften, die sich auf die Ränder einer Box beziehen, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}
- Eigenschaften, die sich auf die Ecken einer Box beziehen, wie {{cssxref("border-radius")}}

#### Ränder einer Box

Kurzschreibweisen für Eigenschaften, die sich auf die Ränder einer Box beziehen, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}, verwenden immer eine konsistente 1-bis-4-Werte-Syntax, die diese Ränder repräsentiert:

- **1-Wert-Syntax:** `border-width: 1em` — Der einzelne Wert repräsentiert alle Ränder: ![Ränder einer Box mit 1-Wert-Syntax](border1.png)

- **2-Wert-Syntax:** `border-width: 1em 2em` — Der erste Wert repräsentiert die vertikalen Ränder (oben und unten), der zweite die horizontalen (links und rechts): ![Ränder einer Box mit 2-Wert-Syntax](border2.png)

- **3-Wert-Syntax:** `border-width: 1em 2em 3em` — Der erste Wert repräsentiert den oberen Rand, der zweite die horizontalen (links und rechts) und der dritte den unteren Rand: ![Ränder einer Box mit 3-Wert-Syntax](border3.png)

- **4-Wert-Syntax:** `border-width: 1em 2em 3em 4em` — Die vier Werte repräsentieren den oberen, rechten, unteren und linken Rand in genau dieser Reihenfolge, also im Uhrzeigersinn beginnend oben: ![Ränder einer Box mit 4-Wert-Syntax](border4.png) Die Anfangsbuchstaben von Oben-Rechts-Unten-Links (engl. Top-Right-Bottom-Left) entsprechen der Reihenfolge der Konsonanten im Wort _trouble_: TRBL. Sie können sich das auch als die Reihenfolge merken, in der die Zeiger einer Uhr rotieren: `1em` startet in der 12-Uhr-Position, `2em` in der 3-Uhr-Position, `3em` in der 6-Uhr-Position und `4em` in der 9-Uhr-Position.

#### Ecken einer Box

Ebenso verwenden Kurzschreibweisen für Eigenschaften, die sich auf die Ecken einer Box beziehen, wie {{cssxref("border-radius")}}, immer eine konsistente 1-bis-4-Werte-Syntax, die diese Ecken repräsentiert:

- **1-Wert-Syntax:** `border-radius: 1em` — Der einzelne Wert repräsentiert alle Ecken: ![Ecken einer Box mit 1-Wert-Syntax](corner1.png)

- **2-Wert-Syntax:** `border-radius: 1em 2em` — Der erste Wert repräsentiert die obere linke und untere rechte Ecke, der zweite die obere rechte und untere linke Ecke: ![Ecken einer Box mit 2-Wert-Syntax](corner2.png)

- **3-Wert-Syntax:** `border-radius: 1em 2em 3em` — Der erste Wert repräsentiert die obere linke Ecke, der zweite die obere rechte und untere linke Ecke, und der dritte die untere rechte Ecke: ![Ecken einer Box mit 3-Wert-Syntax](corner3.png)

- **4-Wert-Syntax:** `border-radius: 1em 2em 3em 4em` — Die vier Werte repräsentieren die obere linke, obere rechte, untere rechte und untere linke Ecke in genau dieser Reihenfolge, also im Uhrzeigersinn beginnend oben links: ![Ecken einer Box mit 4-Wert-Syntax](corner4.png)

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

(Die Kurzform entspricht den obigen Langform-Eigenschaften plus `background-attachment: scroll` und, in CSS3, einigen zusätzlichen Eigenschaften.)

Details finden Sie unter {{cssxref("background")}}, einschließlich CSS3-Eigenschaften.

## Schriftart-Eigenschaften

Betrachten Sie die folgenden Deklarationen:

```css
font-style: italic;
font-weight: bold;
font-size: 0.8em;
line-height: 1.2;
font-family: Arial, sans-serif;
```

Diese fünf Anweisungen können wie folgt verkürzt werden:

```css
font:
  italic bold 0.8em/1.2 Arial,
  sans-serif;
```

Diese Kurzschreibweise ist tatsächlich äquivalent zu den obigen Langform-Deklarationen plus `font-variant: normal`, `font-size-adjust: none` und `font-stretch: normal`.

## Rahmen-Eigenschaften

Bei Rahmen können Breite, Farbe und Stil in einer Deklaration zusammengefasst werden. Betrachten Sie zum Beispiel das folgende CSS:

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

Die Kurzschreibweise der Rand- und Auffüllungswerte funktioniert ähnlich; die Rand-Eigenschaft erlaubt es, Kurzformwerte zu spezifizieren, indem ein, zwei, drei oder vier Werte angegeben werden. Betrachten Sie die folgenden CSS-Deklarationen:

```css
margin-top: 10px;
margin-right: 5px;
margin-bottom: 10px;
margin-left: 5px;
```

Sie sind identisch mit der folgenden Erklärung mit der Vier-Wert-Kurzschreibweise. Beachten Sie, dass die Werte im Uhrzeigersinn angegeben werden, beginnend oben: oben, rechts, unten, dann links (TRBL, die Konsonanten in "trouble").

```css
margin: 10px 5px 10px 5px;
```

Die Regeln für die Rand-Kurzschreibweise bei ein, zwei, drei und vier Werten lauten:

- Wenn **ein** Wert angegeben ist, gilt der gleiche Rand für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben sind, gilt der erste Rand für **oben und unten**, der zweite für **links und rechts**.
- Wenn **drei** Werte angegeben sind, gilt der erste Rand für **oben**, der zweite für **links und rechts**, der dritte für **unten**.
- Wenn **vier** Werte angegeben sind, gelten die Ränder für **oben**, **rechts**, **unten** und **links** in dieser Reihenfolge (im Uhrzeigersinn).

## Positionseigenschaften

Bei der Position können die Kurzschreibweisen von oben, rechts, unten und links zu einer Deklaration zusammengefasst werden. Betrachten Sie zum Beispiel das folgende CSS:

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

Genau wie bei Rändern und Abständen sind die Einfügewert-Reihenfolgen im Uhrzeigersinn geordnet - oben, rechts, unten, dann links (TRBL).

## Die universelle Kurzschreibweise-Eigenschaft

CSS bietet eine universelle Kurzschreibweise-Eigenschaft, {{cssxref("all")}}, die ihren Wert auf jede Eigenschaft im Dokument anwendet. Ihr Zweck ist es, das Vererbungsmodell von Eigenschaften zu ändern.

Siehe [Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) oder [Einführung in das CSS-Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade) für weitere Informationen darüber, wie Vererbung in CSS funktioniert.

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

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Einführung in das CSS-Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Lernen: Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- Modul [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade)
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
- [Initialwert](/de/docs/Web/CSS/CSS_cascade/initial_value), [berechneter Wert](/de/docs/Web/CSS/CSS_cascade/computed_value), [verwendeter Wert](/de/docs/Web/CSS/CSS_cascade/used_value), und [tatsächlicher Wert](/de/docs/Web/CSS/CSS_cascade/actual_value)
- [Wertedefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
