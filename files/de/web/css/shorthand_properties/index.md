---
title: Kurzschreibweisen
slug: Web/CSS/Shorthand_properties
l10n:
  sourceCommit: c9c86abc12c3bdd3fdb07c73a0d1cf88cdd0e1bc
---

{{CSSRef}}

**_Kurzschreibweisen_** sind CSS-Eigenschaften, mit denen Sie die Werte mehrerer anderer CSS-Eigenschaften gleichzeitig festlegen können. Mit einer Kurzschreibweise können Sie prägnantere (und oft besser lesbare) Stylesheets schreiben und so Zeit und Energie sparen.

Die CSS-Spezifikation definiert Kurzschreibweisen, um die Definition gängiger Eigenschaften zu gruppieren, die auf dasselbe Thema wirken. Zum Beispiel ist die CSS-Eigenschaft {{cssxref("background")}} eine Kurzschreibweise, mit der die Werte von {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-repeat")}} und {{cssxref("background-position")}} definiert werden können. Ebenso können die häufigsten schriftbezogenen Eigenschaften mit der Kurzschreibweise {{cssxref("font")}} definiert werden, und die verschiedenen Ränder um ein Element können mit der Kurzschreibweise {{cssxref("margin")}} definiert werden.

## Knifflige Grenzfälle

Es gibt einige Grenzfälle, die beim Verwenden von Kurzschreibweisen zu beachten sind.

### Auslassen von Eigenschaften

Ein Wert, der nicht angegeben wird, wird auf seinen Anfangswert gesetzt. Das bedeutet, dass er zuvor gesetzte Werte **überschreibt**. Zum Beispiel:

```css
p {
  background-color: red;
  background: url(images/bg.gif) no-repeat left top;
}
```

Dies wird die Hintergrundfarbe nicht auf `red` setzen, sondern auf den Standardwert für {{cssxref("background-color")}}, nämlich `transparent`.

Nur die Werte der einzelnen Eigenschaften können erben. Da fehlende Werte durch ihre Anfangswerte ersetzt werden, ist es unmöglich, das Erben einzelner Eigenschaften durch Auslassen zuzulassen. Das Schlüsselwort `inherit` kann auf eine Eigenschaft angewendet werden, aber nur als Ganzes, nicht als Schlüsselwort für einen bestimmten Wert oder einen anderen. Das bedeutet, dass die einzige Möglichkeit, einen spezifischen Wert erben zu lassen, darin besteht, die Langform der Eigenschaft mit dem Schlüsselwort `inherit` zu verwenden.

### Reihenfolge der Eigenschaften

Kurzschreibweisen versuchen, keine spezifische Reihenfolge für die Werte der Eigenschaften, die sie ersetzen, zu erzwingen. Dies funktioniert gut, wenn diese Eigenschaften Werte unterschiedlicher Typen verwenden, da die Reihenfolge keine Bedeutung hat, aber dies funktioniert nicht so einfach, wenn mehrere Eigenschaften identische Werte haben können.

Zwei wichtige Fälle hier sind:

- Eigenschaften, die sich auf die Ränder eines Kastens beziehen, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}
- Eigenschaften, die sich auf die Ecken eines Kastens beziehen, wie {{cssxref("border-radius")}}

#### Ränder eines Kastens

Kurzschreibweisen, die Eigenschaften in Bezug auf die Ränder eines Kastens behandeln, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}, verwenden immer eine konsistente 1-bis-4-Wert-Syntax, die diese Ränder darstellt:

- **1-Wert-Syntax:** `border-width: 1em` — Der einzelne Wert repräsentiert alle Ränder: ![Box edges with one-value syntax](border1.png)

- **2-Wert-Syntax:** `border-width: 1em 2em` — Der erste Wert repräsentiert die vertikalen, also obere und untere Ränder, der zweite die horizontalen, also die linken und rechten: ![Box edges with two-value syntax](border2.png)

- **3-Wert-Syntax:** `border-width: 1em 2em 3em` — Der erste Wert repräsentiert den oberen Rand, der zweite die horizontalen, also linken und rechten, und der dritte Wert den unteren Rand: ![Box edges with three-value syntax](border3.png)

- **4-Wert-Syntax:** `border-width: 1em 2em 3em 4em` — Die vier Werte repräsentieren die oberen, rechten, unteren und linken Ränder in dieser Reihenfolge, also im Uhrzeigersinn beginnend am oberen Rand: ![Box edges with four-value syntax](border4.png) Der Anfangsbuchstabe von Oben-Rechts-Unten-Links entspricht der Reihenfolge der Konsonanten des Wortes _trouble_: TRBL. Sie können es sich auch als die Reihenfolge merken, in der die Zeiger einer Uhr rotieren: `1em` beginnt in der 12-Uhr-Position, dann `2em` in der 3-Uhr-Position, dann `3em` in der 6-Uhr-Position und `4em` in der 9-Uhr-Position.

#### Ecken eines Kastens

In ähnlicher Weise verwenden Kurzschreibweisen, die sich auf die Ecken eines Kastens beziehen, wie {{cssxref("border-radius")}}, immer eine konsistente 1-bis-4-Wert-Syntax, die diese Ecken darstellt:

- **1-Wert-Syntax:** `border-radius: 1em` — Der einzelne Wert steht für alle Ecken: ![Box corners with one-value syntax](corner1.png)

- **2-Wert-Syntax:** `border-radius: 1em 2em` — Der erste Wert steht für die obere linke und untere rechte Ecke, der zweite für die obere rechte und untere linke: ![Box corners with two-value syntax](corner2.png)

- **3-Wert-Syntax:** `border-radius: 1em 2em 3em` — Der erste Wert steht für die obere linke Ecke, der zweite für die obere rechte und untere linke, und der dritte Wert für die untere rechte Ecke: ![Box corners with three-value syntax](corner3.png)

- **4-Wert-Syntax:** `border-radius: 1em 2em 3em 4em` — Die vier Werte stehen für die obere linke, obere rechte, untere rechte und untere linke Ecke in dieser Reihenfolge, also im Uhrzeigersinn beginnend an der oberen linken Ecke: ![Box corners with four-value syntax](corner4.png)

## Hintergrundeigenschaften

Betrachten Sie einen Hintergrund mit den folgenden Eigenschaften

```css
background-color: #000;
background-image: url(images/bg.gif);
background-repeat: no-repeat;
background-position: left top;
```

Diese vier Deklarationen können auf nur eine gekürzt werden:

```css
background: #000 url(images/bg.gif) no-repeat left top;
```

(Die Kurzform entspricht in Wirklichkeit den obigen Langform-Eigenschaften plus `background-attachment: scroll` und in CSS3 einigen zusätzlichen Eigenschaften.)

Siehe {{cssxref("background")}} für detailliertere Informationen, einschließlich der CSS3-Eigenschaften.

## Schrifteigenschaften

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

Diese Kurzdeklaration entspricht in Wirklichkeit den obigen Langdeklarationen plus `font-variant: normal`, `font-size-adjust: none` und `font-stretch: normal`.

## Randeigenschaften

Bei Rändern können Breite, Farbe und Stil in einer Deklaration vereinfacht werden. Betrachten Sie zum Beispiel das folgende CSS:

```css
border-width: 1px;
border-style: solid;
border-color: #000;
```

Es kann wie folgt vereinfacht werden:

```css
border: 1px solid #000;
```

## Rand- und Abstands-Eigenschaften

Kurzschreibweisen von Rand- und Abstands-Werten funktionieren ähnlich; die Rand-Eigenschaft ermöglicht es, Kurzformen mit einem, zwei, drei oder vier Werten zu spezifizieren. Betrachten Sie die folgenden CSS-Deklarationen:

```css
margin-top: 10px;
margin-right: 5px;
margin-bottom: 10px;
margin-left: 5px;
```

Sie sind gleichbedeutend mit der folgenden Deklaration unter Verwendung der Vier-Wert-Kurzform. Beachten Sie, dass die Werte im Uhrzeigersinn angeordnet sind, beginnend oben: oben, rechts, unten, dann links (TRBL, die Konsonanten in "trouble").

```css
margin: 10px 5px 10px 5px;
```

Regeln für die Kurzschreibweise von Rändern mit einem, zwei, drei und vier Wertangaben sind:

- Wenn **ein** Wert angegeben wird, wird derselbe Rand auf **allen vier Seiten** angewendet.
- Wenn **zwei** Werte angegeben werden, wird der erste Rand auf **oben und unten** angewendet, der zweite auf **links und rechts**.
- Wenn **drei** Werte angegeben werden, wird der erste Rand auf **oben**, der zweite auf **links und rechts**, der dritte auf **unten** angewendet.
- Wenn **vier** Werte angegeben werden, gelten die Ränder in der Reihenfolge von **oben**, **rechts**, **unten** und **links** (im Uhrzeigersinn).

## Positonseigenschaften

Bei der Position können die Kurzformen von oben, rechts, unten und links in eine Deklaration vereinfacht werden. Betrachten Sie zum Beispiel das folgende CSS:

```css
top: 0;
right: 20px;
bottom: 0;
left: 20px;
```

Es kann wie folgt vereinfacht werden:

```css
inset: 0 20px 0 20px;
```

Genau wie Ränder und Abstände sind auch die Inset-Werte im Uhrzeigersinn angeordnet - oben, rechts, unten, dann links (TRBL).

## Die universelle Kurzschreibweise

CSS bietet eine universelle Kurzschreibweise, {{cssxref("all")}}, die seinen Wert auf jede Eigenschaft im Dokument anwendet. Ihr Zweck ist es, das Vererbungsmuster der Eigenschaften zu ändern.

Siehe [Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) oder [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/Cascade) für mehr Informationen darüber, wie Vererbung in CSS funktioniert.

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

- [CSS-Syntax](/de/docs/Web/CSS/Syntax)
- [At-Regeln](/de/docs/Web/CSS/At-rule)
- [Spezifität](/de/docs/Web/CSS/Specificity)
- [Vererbung](/de/docs/Web/CSS/Inheritance)
- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/Cascade)
- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Kaskaden- und Vererbungsmodul](/de/docs/Web/CSS/CSS_cascade)
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
- [Initiale](/de/docs/Web/CSS/initial_value), [berechnete](/de/docs/Web/CSS/computed_value), [verwendete](/de/docs/Web/CSS/used_value), und [tatsächliche](/de/docs/Web/CSS/actual_value) Werte
- [Wertdefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
