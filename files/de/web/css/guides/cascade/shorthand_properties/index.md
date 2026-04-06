---
title: Kurzschreibweise-Eigenschaften
slug: Web/CSS/Guides/Cascade/Shorthand_properties
l10n:
  sourceCommit: 82f81b39d2a3fb0d944c79ff98343d98d02b7eab
---

**_Kurzschreibweise-Eigenschaften_** sind CSS-Eigenschaften, die es Ihnen ermöglichen, die Werte mehrerer anderer CSS-Eigenschaften in einer Deklaration festzulegen. Mit einer Kurzschreibweise-Eigenschaft können Sie prägnantere (und oft lesbarere) Stylesheets schreiben, was Zeit und Energie spart.

Die CSS-Spezifikation definiert Kurzschreibweise-Eigenschaften, um häufig verwendete Eigenschaften zu gruppieren, die auf dasselbe Thema wirken. Zum Beispiel ist die CSS-Eigenschaft {{cssxref("background")}} eine Kurzschreibweise-Eigenschaft, die die Werte von {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-repeat")}} und {{cssxref("background-position")}} definieren kann.

## Schwierige Randfälle

Es gibt ein paar Randfälle, die Sie bei der Verwendung von Kurzschreibweise-Eigenschaften beachten sollten.

### Weglassen von Eigenschaften

Ein nicht spezifizierter Wert wird auf einen Standardwert gesetzt, der durch die Kurzschreibweise definiert ist, und der vom Ausgangswert der Eigenschaft abweichen kann.

Das bedeutet, dass er zuvor gesetzte Werte **überschreibt**. Zum Beispiel:

```css
p {
  background-color: red;
  background: url("images/bg.gif") no-repeat left top;
}
```

Dies setzt die Hintergrundfarbe nicht auf `red`, sondern auf den Standardwert von {{cssxref("background-color")}}, der `transparent` ist.

Nur die Werte einzelner Eigenschaften können geerbt werden. Da fehlende Werte durch ihren Ausgangswert ersetzt werden, ist es unmöglich, das Erben einzelner Eigenschaften durch Weglassen zu ermöglichen. Das Schlüsselwort `inherit` kann auf eine Eigenschaft angewendet werden, aber nur als Ganzes, nicht als Schlüsselwort für einen oder einen anderen Wert. Das bedeutet, dass die einzige Möglichkeit, einen bestimmten Wert erben zu lassen, darin besteht, die ausgeschriebene Eigenschaft mit dem Schlüsselwort `inherit` zu verwenden.

### Reihenfolge der Eigenschaften

Kurzschreibweise-Eigenschaften versuchen, keine bestimmte Reihenfolge für die Werte der Eigenschaften, die sie ersetzen, zu erzwingen. Dies funktioniert gut, wenn diese Eigenschaften Werte unterschiedlicher Typen verwenden, da die Reihenfolge keine Bedeutung hat, aber das funktioniert nicht so einfach, wenn mehrere Eigenschaften identische Werte haben können.

Zwei wichtige Fälle sind hier:

- Eigenschaften, die mit den Seiten der Box zu tun haben, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}
- Eigenschaften, die mit den Ecken der Box zu tun haben, wie {{cssxref("border-radius")}}

#### Seiten der Box

Kurzschreibweisen, die Eigenschaften im Zusammenhang mit den Seiten der Box bearbeiten, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}, verwenden immer eine konsistente 1-zu-4-Wert-Syntax, die diese Seiten repräsentiert:

- **1-Wert-Syntax:** `border-width: 1em` — Ein einzelner Wert repräsentiert alle Seiten: ![Boxkanten mit Ein-Wert-Syntax](border1.png)

- **2-Wert-Syntax:** `border-width: 1em 2em` — Der erste Wert repräsentiert die oberen und unteren Kanten, und der zweite Wert repräsentiert die linken und rechten Kanten: ![Boxkanten mit Zwei-Wert-Syntax](border2.png)

- **3-Wert-Syntax:** `border-width: 1em 2em 3em` — Der erste Wert repräsentiert die obere Kante, der zweite Wert repräsentiert die linken und rechten Kanten, und der dritte Wert repräsentiert die untere Kante: ![Boxkanten mit Drei-Wert-Syntax](border3.png)

- **4-Wert-Syntax:** `border-width: 1em 2em 3em 4em` — Die vier Werte repräsentieren die oberen, rechten, unteren und linken Seiten in genau dieser Reihenfolge; also im Uhrzeigersinn beginnend an der Oberseite: ![Boxkanten mit Vier-Wert-Syntax](border4.png) Der Anfangsbuchstabe von Oben-Rechts-Unten-Links entspricht der Reihenfolge der Konsonanten des Wortes _trouble_: TRBL. Sie können es sich auch als die Reihenfolge merken, in der die Zeiger einer Uhr rotieren: `1em` beginnt an der 12-Uhr-Position, dann `2em` an der 3-Uhr-Position, dann `3em` an der 6-Uhr-Position und `4em` an der 9-Uhr-Position.

#### Ecken der Box

Ähnlich verwenden Kurzschreibweisen, die Eigenschaften im Zusammenhang mit den Ecken der Box bearbeiten, wie {{cssxref("border-radius")}}, immer eine konsistente 1-zu-4-Wert-Syntax, die diese Ecken repräsentiert:

- **1-Wert-Syntax:** `border-radius: 1em` — Ein einzelner Wert repräsentiert alle Ecken: ![Boxecken mit Ein-Wert-Syntax](corner1.png)

- **2-Wert-Syntax:** `border-radius: 1em 2em` — Der erste Wert repräsentiert die oberen linken und unteren rechten Ecken, und der zweite Wert repräsentiert die oberen rechten und unteren linken Ecken: ![Boxecken mit Zwei-Wert-Syntax](corner2.png)

- **3-Wert-Syntax:** `border-radius: 1em 2em 3em` — Der erste Wert repräsentiert die obere linke Ecke, der zweite Wert repräsentiert die oberen rechten und unteren linken Ecken, und der dritte Wert repräsentiert die untere rechte Ecke: ![Boxecken mit Drei-Wert-Syntax](corner3.png)

- **4-Wert-Syntax:** `border-radius: 1em 2em 3em 4em` — Die vier Werte repräsentieren die oberen linken, oberen rechten, unteren rechten und unteren linken Ecken in der Reihenfolge, immer in dieser Reihenfolge; im Uhrzeigersinn beginnend an der oberen linken Ecke: ![Boxecken mit Vier-Wert-Syntax](corner4.png)

## Hintergrund-Eigenschaften

Betrachten Sie einen Hintergrund mit den folgenden Eigenschaften

```css
background-color: black;
background-image: url("images/bg.gif");
background-repeat: no-repeat;
background-position: left top;
```

Diese vier Deklarationen können zu einer einzigen gekürzt werden:

```css
background: black url("images/bg.gif") no-repeat left top;
```

(Die Kurzschreibweise ist eigentlich äquivalent zu den obigen ausgeschriebenen Eigenschaften plus `background-attachment: scroll` und in CSS3 einige zusätzliche Eigenschaften.)

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

Diese 5 Anweisungen können wie folgt verkürzt werden:

```css
font:
  italic bold 0.8em/1.2 "Arial",
  sans-serif;
```

Diese Kurzschreibweise ist tatsächlich äquivalent zu den oben ausgeschriebenen Deklarationen plus `font-variant: normal`, `font-size-adjust: none`, und `font-stretch: normal`.

## Rahmen-Eigenschaften

Bei Rahmen können Breite, Farbe und Stil in einer Deklaration vereinfacht werden. Betrachten Sie zum Beispiel das folgende CSS:

```css
border-width: 1px;
border-style: solid;
border-color: black;
```

Es kann wie folgt vereinfacht werden:

```css
border: 1px solid black;
```

## Rand- und Auffüllungseigenschaften

Kurzschreibweise-Versionen von Rand- und Auffüllungswerten funktionieren ähnlich; die Rand-Eigenschaft erlaubt es, Kurzschreibwerte mithilfe von einem, zwei, drei oder vier Werten zu spezifizieren. Betrachten Sie die folgenden CSS-Deklarationen:

```css
margin-top: 10px;
margin-right: 5px;
margin-bottom: 10px;
margin-left: 5px;
```

Sie sind dieselben wie die folgende Deklaration unter Verwendung der Vier-Wert-Kurzschreibweise. Beachten Sie, dass die Werte im Uhrzeigersinn geordnet sind, beginnend oben: oben, rechts, unten und dann links (TRBL, die Konsonanten in "trouble").

```css
margin: 10px 5px 10px 5px;
```

Rand-Kurzschreibregeln für Ein-, Zwei-, Drei- und Vier-Wert-Deklarationen sind:

- Wenn **ein** Wert spezifiziert ist, gilt derselbe Rand für **alle vier Seiten**.
- Wenn **zwei** Werte spezifiziert sind, gilt der erste Rand für **oben und unten**, der zweite für **links und rechts**.
- Wenn **drei** Werte spezifiziert sind, gilt der erste Rand für **oben**, der zweite für **links und rechts**, der dritte für **unten**.
- Wenn **vier** Werte spezifiziert sind, gelten die Ränder in folgender Reihenfolge: **oben**, **rechts**, **unten** und **links** (im Uhrzeigersinn).

## Positions-Eigenschaften

Bei der Position können die Kurzschreibversionen von oben, rechts, unten und links in einer Deklaration vereinfacht werden. Betrachten Sie zum Beispiel das folgende CSS:

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

Genau wie bei Rändern und Auffüllungen sind die Einfügungswerte im Uhrzeigersinn geordnet - oben, rechts, unten, dann links (TRBL).

## Die universelle Kurzschreibweise-Eigenschaft

CSS bietet eine universelle Kurzschreibweise-Eigenschaft, {{cssxref("all")}}, die ihren Wert auf jede Eigenschaft im Dokument anwendet. Ihr Zweck besteht darin, das Vererbungsmodell der Eigenschaften zu ändern.

Siehe [Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) oder [Einführung in den CSS-Cascade](/de/docs/Web/CSS/Guides/Cascade/Introduction) für weitere Informationen darüber, wie Vererbung in CSS funktioniert.

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

- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade) Modul
- [Einführung in CSS-Syntax: Deklarationen, Regelmengen und Anweisungen](/de/docs/Web/CSS/Guides/Syntax/Introduction)
- [At-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules)
- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction)
- [Lernen: Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenebenen](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model)
- Werte: [initial](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value), [berechnet](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value), [verwendet](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value), und [tatsächlicher Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value)
- [Wertdefinition Syntax](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
