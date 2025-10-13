---
title: Kurzschreibweisen
slug: Web/CSS/CSS_cascade/Shorthand_properties
l10n:
  sourceCommit: bb52c01c1534149f1e3e4755e2576ef7828ecc0f
---

**_Kurzschreibweisen_** sind CSS-Eigenschaften, mit denen Sie die Werte mehrerer anderer CSS-Eigenschaften gleichzeitig festlegen können. Durch die Verwendung einer Kurzschreibweise können Sie prägnantere (und oft übersichtlichere) Stylesheets schreiben, was Zeit und Energie spart.

Die CSS-Spezifikation definiert Kurzschreibweisen, um die Definition gängiger Eigenschaften, die auf das gleiche Thema angewandt werden, zu gruppieren. Beispielsweise ist die CSS-{{cssxref("background")}}-Eigenschaft eine Kurzschreibweise, mit der die Werte von {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-repeat")}} und {{cssxref("background-position")}} definiert werden können. In ähnlicher Weise können die am häufigsten verwendeten schriftbezogenen Eigenschaften mit der Kurzschreibweise {{cssxref("font")}} definiert werden und die verschiedenen Ränder um eine Box können mit der Kurzschreibweise {{cssxref("margin")}} definiert werden.

## Schwierige Grenzfälle

Es gibt einige Grenzfälle, die bei der Verwendung von Kurzschreibweisen zu beachten sind.

### Auslassen von Eigenschaften

Ein Wert, der nicht angegeben wird, wird auf seinen Anfangswert gesetzt. Das bedeutet, dass er zuvor festgelegte Werte **überschreibt**. Zum Beispiel:

```css
p {
  background-color: red;
  background: url("images/bg.gif") no-repeat left top;
}
```

Dies setzt die Hintergrundfarbe nicht auf `red`, sondern auf den Standardwert für {{cssxref("background-color")}}, der `transparent` ist.

Nur die Werte einzelner Eigenschaften können vererben. Da fehlende Werte durch ihren Anfangswert ersetzt werden, ist es unmöglich, die Vererbung einzelner Eigenschaften durch deren Auslassung zu erlauben. Das Schlüsselwort `inherit` kann auf eine Eigenschaft angewendet werden, jedoch nur als Ganzes und nicht als Schlüsselwort für einen oder andere Werte. Das bedeutet, dass der einzige Weg, um einen bestimmten Wert erben zu lassen, darin besteht, die Langschreibweise der Eigenschaft mit dem Schlüsselwort `inherit` zu verwenden.

### Anordnung der Eigenschaften

Kurzschreibweisen versuchen, keine spezifische Reihenfolge für die Werte der Eigenschaften, die sie ersetzen, vorzuschreiben. Dies funktioniert gut, wenn diese Eigenschaften Werte unterschiedlicher Typen verwenden, da die Reihenfolge keine Rolle spielt, aber es funktioniert nicht so einfach, wenn mehrere Eigenschaften identische Werte haben können.

Zwei wichtige Fälle hier sind:

- Eigenschaften, die sich auf die Kanten einer Box beziehen, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}
- Eigenschaften, die sich auf die Ecken einer Box beziehen, wie {{cssxref("border-radius")}}

#### Kanten einer Box

Kurzschreibweisen, die sich mit Eigenschaften zu den Kanten einer Box beschäftigen, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}, verwenden immer eine konsistente 1-bis-4-Wert-Syntax, die diese Kanten repräsentiert:

- **1-Wert-Syntax:** `border-width: 1em` — Der Einzelwert steht für alle Kanten: ![Boxkanten mit einwertiger Syntax](border1.png)

- **2-Wert-Syntax:** `border-width: 1em 2em` — Der erste Wert steht für die vertikalen Kanten, also oben und unten, der zweite für die horizontalen, also links und rechts: ![Boxkanten mit zweiwertiger Syntax](border2.png)

- **3-Wert-Syntax:** `border-width: 1em 2em 3em` — Der erste Wert steht für die obere Kante, der zweite für die horizontalen, also links und rechts, und der dritte Wert für die untere Kante: ![Boxkanten mit dreiwertiger Syntax](border3.png)

- **4-Wert-Syntax:** `border-width: 1em 2em 3em 4em` — Die vier Werte repräsentieren die obere, rechte, untere und linke Kante in dieser Reihenfolge, also im Uhrzeigersinn beginnend oben: ![Boxkanten mit vierwertiger Syntax](border4.png) Die Anfangsbuchstaben von Oben-Rechts-Unten-Links entsprechen der Reihenfolge der Konsonanten des englischen Wortes _trouble_: TRBL. Sie können es sich auch als die Reihenfolge merken, in der die Zeiger einer Uhr rotieren würden: `1em` beginnt in der 12-Uhr-Position, dann `2em` in der 3-Uhr-Position, dann `3em` in der 6-Uhr-Position und `4em` in der 9-Uhr-Position.

#### Ecken einer Box

Ähnlich verwenden Kurzschreibweisen, die sich mit Eigenschaften zu den Ecken einer Box beschäftigen, wie {{cssxref("border-radius")}}, immer eine konsistente 1-bis-4-Wert-Syntax, die diese Ecken repräsentiert:

- **1-Wert-Syntax:** `border-radius: 1em` — Der Einzelwert steht für alle Ecken: ![Boxecken mit einwertiger Syntax](corner1.png)

- **2-Wert-Syntax:** `border-radius: 1em 2em` — Der erste Wert steht für die obere linke und untere rechte Ecke, der zweite für die obere rechte und untere linke: ![Boxecken mit zweiwertiger Syntax](corner2.png)

- **3-Wert-Syntax:** `border-radius: 1em 2em 3em` — Der erste Wert steht für die obere linke Ecke, der zweite für die obere rechte und untere linke, und der dritte Wert für die untere rechte Ecke: ![Boxecken mit dreiwertiger Syntax](corner3.png)

- **4-Wert-Syntax:** `border-radius: 1em 2em 3em 4em` — Die vier Werte repräsentieren die obere linke, obere rechte, untere rechte und untere linke Ecke in dieser Reihenfolge, also im Uhrzeigersinn beginnend oben links: ![Boxecken mit vierwertiger Syntax](corner4.png)

## Hintergrund-Eigenschaften

Betrachten Sie einen Hintergrund mit den folgenden Eigenschaften

```css
background-color: black;
background-image: url("images/bg.gif");
background-repeat: no-repeat;
background-position: left top;
```

Diese vier Deklarationen können auf nur eine verkürzt werden:

```css
background: black url("images/bg.gif") no-repeat left top;
```

(Die Kurzschreibform ist tatsächlich gleichbedeutend mit den oben genannten Langform-Eigenschaften plus `background-attachment: scroll` und in CSS3 einige zusätzliche Eigenschaften.)

Siehe {{cssxref("background")}} für detailliertere Informationen, einschließlich CSS3-Eigenschaften.

## Schrift-Eigenschaften

Betrachten Sie die folgenden Deklarationen:

```css
font-style: italic;
font-weight: bold;
font-size: 0.8em;
line-height: 1.2;
font-family: "Arial", sans-serif;
```

Diese 5 Anweisungen können zu folgendem verkürzt werden:

```css
font:
  italic bold 0.8em/1.2 "Arial",
  sans-serif;
```

Diese Kurzschreibweise entspricht tatsächlich den oben genannten Langform-Eigenschaften plus `font-variant: normal`, `font-size-adjust: none` und `font-stretch: normal`.

## Rahmen-Eigenschaften

Bei Rahmen können die Breite, Farbe und der Stil in eine Deklaration vereinfacht werden. Betrachten Sie zum Beispiel das folgende CSS:

```css
border-width: 1px;
border-style: solid;
border-color: black;
```

Es kann vereinfacht werden als:

```css
border: 1px solid black;
```

## Margin- und Padding-Eigenschaften

Kurzschreibweisen von Margin- und Padding-Werten funktionieren ähnlich; die Margin-Eigenschaft erlaubt es, Kurzschreibwerte mithilfe von einem, zwei, drei oder vier Werten anzugeben. Betrachten Sie die folgenden CSS-Deklarationen:

```css
margin-top: 10px;
margin-right: 5px;
margin-bottom: 10px;
margin-left: 5px;
```

Sie sind dasselbe wie die folgende Deklaration, die die vierwertige Kurzschreibweise verwendet. Beachten Sie, dass die Werte in Uhrzeigersinn-Reihenfolge angegeben werden, beginnend am oberen Rand: oben, rechts, unten, dann links (TRBL, die Konsonanten von "trouble").

```css
margin: 10px 5px 10px 5px;
```

Die Regeln für die Margin-Kurzschreibweise bei der Angabe von einem, zwei, drei und vier Werten sind:

- Wenn **ein** Wert angegeben ist, gilt dieser für alle **vier Seiten**.
- Wenn **zwei** Werte angegeben sind, gilt der erste Margin für **oben und unten**, der zweite für **links und rechts**.
- Wenn **drei** Werte angegeben sind, gilt der erste Margin für **oben**, der zweite für **links und rechts**, der dritte für **unten**.
- Wenn **vier** Werte angegeben sind, gelten die Margins für **oben**, **rechts**, **unten** und **links** in dieser Reihenfolge (im Uhrzeigersinn).

## Positions-Eigenschaften

Bei der Position können die Kurzschreibversionen von oben, rechts, unten und links in eine Deklaration vereinfacht werden. Betrachten Sie zum Beispiel das folgende CSS:

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

Genau wie bei Margins und Paddings werden die Einsatzzahlen im Uhrzeigersinn angeordnet - oben, rechts, unten, dann links (TRBL).

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
- [At-Rules](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenebenen](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
- [Initial](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value), [Berechnet](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value), [Verwendet](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value) und [Tatsächlich](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value) Werte
- [Wertedefinitionssyntax](/de/docs/Web/CSS/CSS_values_and_units/Value_definition_syntax)
