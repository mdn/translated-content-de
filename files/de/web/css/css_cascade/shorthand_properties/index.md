---
title: Kurzschreib-Eigenschaften
slug: Web/CSS/CSS_cascade/Shorthand_properties
l10n:
  sourceCommit: 6cffcbc7e7bdb3ac43d03e8bbc5a73c868274b05
---

{{CSSRef}}

**_Kurzschreib-Eigenschaften_** sind CSS-Eigenschaften, die es Ihnen ermöglichen, die Werte mehrerer anderer CSS-Eigenschaften gleichzeitig festzulegen. Durch die Verwendung einer Kurzschreib-Eigenschaft können Sie konsistentere (und oft lesbarere) Stylesheets schreiben und dabei Zeit und Energie sparen.

Die CSS-Spezifikation definiert Kurzschreib-Eigenschaften, um die Definition der häufig zusammenhängenden Eigenschaften zu gruppieren, die auf dasselbe Thema wirken. Zum Beispiel ist die CSS-Eigenschaft {{cssxref("background")}} eine Kurzschreib-Eigenschaft, die in der Lage ist, die Werte von {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-repeat")}} und {{cssxref("background-position")}} zu definieren. Ebenso können die gebräuchlichsten schriftbezogenen Eigenschaften mit der Kurzschreib-Eigenschaft {{cssxref("font")}} definiert werden, und die verschiedenen Ränder um eine Box können mit der Kurzschreib-Eigenschaft {{cssxref("margin")}} definiert werden.

## Schwierige Sonderfälle

Es gibt einige Sonderfälle, die Sie im Auge behalten sollten, wenn Sie Kurzschreib-Eigenschaften verwenden.

### Auslassen von Eigenschaften

Ein Wert, der nicht angegeben wird, wird auf seinen Anfangswert gesetzt. Das bedeutet, dass er zuvor festgelegte Werte **überschreibt**. Zum Beispiel:

```css
p {
  background-color: red;
  background: url(images/bg.gif) no-repeat left top;
}
```

Dies wird die Hintergrundfarbe nicht auf `red` setzen, sondern auf den Standardwert für {{cssxref("background-color")}}, der `transparent` ist.

Nur die Werte der einzelnen Eigenschaften können vererben. Da fehlende Werte durch ihren Anfangswert ersetzt werden, ist es unmöglich, die Vererbung einzelner Eigenschaften durch Auslassen zuzulassen. Das Schlüsselwort `inherit` kann auf eine Eigenschaft angewendet werden, aber nur als Ganzes, nicht als Schlüsselwort für einen Wert oder einen anderen. Das bedeutet, dass der einzige Weg, einen bestimmten Wert erben zu lassen, darin besteht, die Langform-Eigenschaft mit dem Schlüsselwort `inherit` zu verwenden.

### Anordnung der Eigenschaften

Kurzschreib-Eigenschaften versuchen, keine spezifische Reihenfolge für die Werte der Eigenschaften, die sie ersetzen, zu erzwingen. Dies funktioniert gut, wenn diese Eigenschaften Werte verschiedener Typen verwenden, da die Reihenfolge keine Bedeutung hat, aber dies funktioniert nicht so leicht, wenn mehrere Eigenschaften ähnliche Werte haben können.

Zwei wichtige Fälle sind hier:

- Eigenschaften, die sich auf die Ränder einer Box beziehen, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}
- Eigenschaften, die sich auf die Ecken einer Box beziehen, wie {{cssxref("border-radius")}}

#### Ränder einer Box

Kurze Schreibweisen von Eigenschaften, die sich auf die Ränder einer Box beziehen, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}, verwenden immer eine konsistente 1-zu-4-Wert-Syntax, die diese Ränder darstellt:

- **1-Wert-Syntax:** `border-width: 1em` — Der einzelne Wert repräsentiert alle Ränder: ![Box-Ränder mit 1-Wert-Syntax](border1.png)

- **2-Wert-Syntax:** `border-width: 1em 2em` — Der erste Wert repräsentiert die vertikalen Ränder, also oben und unten, der zweite die horizontalen, also die linken und rechten Ränder: ![Box-Ränder mit 2-Wert-Syntax](border2.png)

- **3-Wert-Syntax:** `border-width: 1em 2em 3em` — Der erste Wert repräsentiert den oberen Rand, der zweite die horizontalen, also die linken und rechten, und der dritte Wert den unteren Rand: ![Box-Ränder mit 3-Wert-Syntax](border3.png)

- **4-Wert-Syntax:** `border-width: 1em 2em 3em 4em` — Die vier Werte repräsentieren die oberen, rechten, unteren und linken Ränder in dieser respektiven Reihenfolge, d.h. im Uhrzeigersinn, beginnend oben: ![Box-Ränder mit 4-Wert-Syntax](border4.png) Der Anfangsbuchstabe von Oben-Rechts-Unten-Links entspricht der Reihenfolge der Konsonanten im Wort _trouble_: TRBL. Sie können sich dies auch als die Reihenfolge merken, in der sich die Hände auf einer Uhr bewegen: `1em` beginnt in der 12-Uhr-Position, dann `2em` in der 3-Uhr-Position, dann `3em` in der 6-Uhr-Position und `4em` in der 9-Uhr-Position.

#### Ecken einer Box

Ähnlich verwenden Kurzschreibweisen, die sich auf die Ecken einer Box beziehen, wie {{cssxref("border-radius")}}, immer eine konsistente 1-zu-4-Wert-Syntax, die diese Ecken darstellt:

- **1-Wert-Syntax:** `border-radius: 1em` — Der einzelne Wert repräsentiert alle Ecken: ![Box-Ecken mit 1-Wert-Syntax](corner1.png)

- **2-Wert-Syntax:** `border-radius: 1em 2em` — Der erste Wert repräsentiert die obere linke und die untere rechte Ecke, die zweite die oberen rechten und unteren linken Ecken: ![Box-Ecken mit 2-Wert-Syntax](corner2.png)

- **3-Wert-Syntax:** `border-radius: 1em 2em 3em` — Der erste Wert repräsentiert die obere linke Ecke, der zweite die oberen rechten und unteren linken Ecken, und der dritte Wert die untere rechte Ecke: ![Box-Ecken mit 3-Wert-Syntax](corner3.png)

- **4-Wert-Syntax:** `border-radius: 1em 2em 3em 4em` — Die vier Werte repräsentieren die obere linke, die obere rechte, die untere rechte und die untere linke Ecke in dieser Reihenfolge, d.h. im Uhrzeigersinn, beginnend oben links: ![Box-Ecken mit 4-Wert-Syntax](corner4.png)

## Hintergrund-Eigenschaften

Betrachten Sie einen Hintergrund mit den folgenden Eigenschaften

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

(Die Kurzform ist eigentlich gleichwertig zu den obenstehenden Langform-Eigenschaften plus `background-attachment: scroll` und, in CSS3, einige zusätzliche Eigenschaften.)

Siehe {{cssxref("background")}} für detailliertere Informationen, einschließlich der CSS3-Eigenschaften.

## Schrift-Eigenschaften

Betrachten Sie die folgenden Deklarationen:

```css
font-style: italic;
font-weight: bold;
font-size: 0.8em;
line-height: 1.2;
font-family: Arial, sans-serif;
```

Diese 5 Anweisungen können auf Folgendes verkürzt werden:

```css
font:
  italic bold 0.8em/1.2 Arial,
  sans-serif;
```

Diese Kurzform-Deklaration entspricht tatsächlich den obenstehenden Langform-Deklarationen plus `font-variant: normal`, `font-size-adjust: none` und `font-stretch: normal`.

## Rand-Eigenschaften

Bei Rändern können Breite, Farbe und Stil zu einer einzigen Deklaration vereinfacht werden. Zum Beispiel, betrachten Sie das folgende CSS:

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

Kurzformen von Rand- und Abstands-Werten funktionieren ähnlich; die Eigenschaft margin erlaubt Kurzform-Werte, die mit einem, zwei, drei oder vier Werten spezifiziert werden können. Betrachten Sie die folgenden CSS-Deklarationen:

```css
margin-top: 10px;
margin-right: 5px;
margin-bottom: 10px;
margin-left: 5px;
```

Sie sind gleichbedeutend mit der folgenden Deklaration mithilfe der Vier-Wert-Kurzform. Beachten Sie, dass die Werte im Uhrzeigersinn angegeben werden, beginnend oben: oben, rechts, unten, dann links (TRBL, die Konsonanten in "trouble").

```css
margin: 10px 5px 10px 5px;
```

Regeln für margin-Kurzformen für ein-, zwei-, drei- und vier-Wert-Deklarationen sind:

- Wenn **ein** Wert angegeben ist, gilt derselbe margin-Wert für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben sind, gilt der erste margin-Wert für **oben und unten**, der zweite für **links und rechts**.
- Wenn **drei** Werte angegeben sind, gilt der erste margin-Wert für **oben**, der zweite für **links und rechts**, der dritte für **unten**.
- Wenn **vier** Werte angegeben sind, gelten die margins in der Reihenfolge für **oben**, **rechts**, **unten** und **links** (im Uhrzeigersinn).

## Positions-Eigenschaften

Bei Positionen können die Kurzform-Versionen von oben, rechts, unten und links zu einer einzigen Deklaration vereinfacht werden. Zum Beispiel, betrachten Sie das folgende CSS:

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

Genau wie bei Rändern und Abständen sind die inset-Werte im Uhrzeigersinn geordnet - oben, rechts, unten, dann links (TRBL).

## Die universelle Kurzschreib-Eigenschaft

CSS bietet eine universelle Kurzschreib-Eigenschaft, {{cssxref("all")}}, die ihren Wert auf jede Eigenschaft im Dokument anwendet. Ihr Zweck ist es, das Vererbungsmodell der Eigenschaften zu ändern.

Weitere Informationen darüber, wie Vererbung in CSS funktioniert, finden Sie unter [Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) oder [Einführung in den CSS-Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade).

## Kurzschreib-Eigenschaften

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
- [Einführung in den CSS-Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Cascade-Schichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Cascading und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
- [Initial](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value), [computed](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value), [used](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value), und [actual](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value) Werte
- [Wertedefinitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
