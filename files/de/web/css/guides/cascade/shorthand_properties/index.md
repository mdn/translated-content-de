---
title: Kurzschreibweise von Eigenschaften
slug: Web/CSS/Guides/Cascade/Shorthand_properties
l10n:
  sourceCommit: 9dad06197b9a4c09d7c1e03b5aac47458a30cb2e
---

**_Kurzschreibweise von Eigenschaften_** sind CSS-Eigenschaften, die es ermöglichen, die Werte mehrerer anderer CSS-Eigenschaften in einer einzigen Deklaration festzulegen. Mit einer Kurzschreibweise können Sie kürzere (und oft lesbarere) Stylesheets schreiben, was Zeit und Mühe spart.

Die CSS-Spezifikation definiert Kurzschreibweisen, um die Definition häufiger Eigenschaften zu gruppieren, die sich auf dasselbe Thema beziehen. Zum Beispiel ist die CSS-Eigenschaft {{cssxref("background")}} eine Kurzschreibweise, die in der Lage ist, die Werte von {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-repeat")}} und {{cssxref("background-position")}} festzulegen.

## Schwierige Grenzfälle

Es gibt einige Grenzfälle, die bei der Verwendung von Kurzschreibweisen zu beachten sind.

### Auslassen von Eigenschaften

Ein Wert, der nicht angegeben wird, wird auf einen Standardwert gesetzt, der durch die Kurzschreibweise definiert ist und sich möglicherweise von dem Anfangswert der Eigenschaft unterscheidet.

Das bedeutet, dass er zuvor gesetzte Werte **überschreibt**. Zum Beispiel:

```css
p {
  background-color: red;
  background: url("images/bg.gif") no-repeat left top;
}
```

Dies wird die Hintergrundfarbe nicht auf `red` setzen, sondern auf den Standardwert für {{cssxref("background-color")}}, nämlich `transparent`.

Nur die Werte einzelner Eigenschaften können vererbt werden. Da fehlende Werte durch ihren Anfangswert ersetzt werden, ist es unmöglich, die Vererbung einzelner Eigenschaften zuzulassen, indem man sie auslässt. Das Schlüsselwort `inherit` kann auf eine Eigenschaft angewendet werden, jedoch nur als Ganzes und nicht als Schlüsselwort für einen oder einen anderen Wert. Das bedeutet, dass der einzige Weg, einen bestimmten Wert erben zu lassen, darin besteht, die Langform der Eigenschaft mit dem Schlüsselwort `inherit` zu verwenden.

### Reihenfolge der Eigenschaften

Kurzschreibweisen versuchen, keine spezifische Reihenfolge für die Werte der Eigenschaften, die sie ersetzen, zu erzwingen. Dies funktioniert gut, wenn diese Eigenschaften Werte verschiedener Typen verwenden, da die Reihenfolge keine Bedeutung hat, aber dies funktioniert nicht so gut, wenn mehrere Eigenschaften identische Werte haben können.

Zwei wichtige Fälle sind hier:

- Eigenschaften, die sich auf die Seiten des Kastens beziehen, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}
- Eigenschaften, die sich auf die Ecken des Kastens beziehen, wie {{cssxref("border-radius")}}

#### Seiten des Kastens

Kurzschreibweisen, die sich auf Eigenschaften beziehen, die die Seiten des Kastens betreffen, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}, verwenden stets eine konsistente 1-zu-4-Wert-Syntax, die diese Seiten darstellt:

- **1-Wert-Syntax:** `border-width: 1em` — Ein einzelner Wert repräsentiert alle Seiten: ![Kanten des Kastens mit Ein-Wert-Syntax](border1.png)

- **2-Wert-Syntax:** `border-width: 1em 2em` — Der erste Wert repräsentiert die obere und untere Seite, und der zweite Wert repräsentiert die linke und rechte Seite: ![Kanten des Kastens mit Zwei-Wert-Syntax](border2.png)

- **3-Wert-Syntax:** `border-width: 1em 2em 3em` — Der erste Wert repräsentiert die obere Seite, der zweite Wert repräsentiert die linken und rechten Seiten, und der dritte Wert repräsentiert die untere Seite: ![Kanten des Kastens mit Drei-Wert-Syntax](border3.png)

- **4-Wert-Syntax:** `border-width: 1em 2em 3em 4em` — Die vier Werte repräsentieren die obere, rechte, untere und linke Seite, jeweils in dieser Reihenfolge, d.h. im Uhrzeigersinn beginnend oben: ![Kanten des Kastens mit Vier-Wert-Syntax](border4.png) Der Anfangsbuchstabe von Top-Right-Bottom-Left entspricht der Reihenfolge des Wortes _trouble_: TRBL. Sie können es auch als die Reihenfolge merken, in der die Zeiger auf einer Uhr rotieren würden: `1em` beginnt in der 12-Uhr-Position, dann `2em` in der 3-Uhr-Position, danach `3em` in der 6-Uhr-Position und `4em` in der 9-Uhr-Position.

#### Ecken des Kastens

Ähnlich verwenden Kurzschreibweisen, die sich auf Eigenschaften beziehen, die die Ecken des Kastens betreffen, wie {{cssxref("border-radius")}}, stets eine konsistente 1-zu-4-Wert-Syntax, die diese Ecken darstellt:

- **1-Wert-Syntax:** `border-radius: 1em` — Ein einzelner Wert repräsentiert alle Ecken: ![Ecken des Kastens mit Ein-Wert-Syntax](corner1.png)

- **2-Wert-Syntax:** `border-radius: 1em 2em` — Der erste Wert repräsentiert die oberen linken und unteren rechten Ecken, und der zweite Wert repräsentiert die oberen rechten und unteren linken Ecken: ![Ecken des Kastens mit Zwei-Wert-Syntax](corner2.png)

- **3-Wert-Syntax:** `border-radius: 1em 2em 3em` — Der erste Wert repräsentiert die obere linke Ecke, der zweite Wert die oberen rechten und unteren linken Ecken, und der dritte Wert die untere rechte Ecke: ![Ecken des Kastens mit Drei-Wert-Syntax](corner3.png)

- **4-Wert-Syntax:** `border-radius: 1em 2em 3em 4em` — Die vier Werte repräsentieren die obere linke, obere rechte, untere rechte und untere linke Ecke, jeweils in dieser Reihenfolge, d.h. im Uhrzeigersinn beginnend oben links: ![Ecken des Kastens mit Vier-Wert-Syntax](corner4.png)

## Hintergrundeigenschaften

Berücksichtigen Sie einen Hintergrund mit den folgenden Eigenschaften:

```css
background-color: black;
background-image: url("images/bg.gif");
background-repeat: no-repeat;
background-position: left top;
```

Diese vier Deklarationen können auf eine einzige verkürzt werden:

```css
background: black url("images/bg.gif") no-repeat left top;
```

(Die Kurzform entspricht tatsächlich den obigen Langform-Eigenschaften plus `background-attachment: scroll` und, in CSS3, einigen zusätzlichen Eigenschaften.)

Siehe {{cssxref("background")}} für detailliertere Informationen, einschließlich CSS3-Eigenschaften.

## Schriftsatzeigenschaften

Betrachten Sie die folgenden Deklarationen:

```css
font-style: italic;
font-weight: bold;
font-size: 0.8em;
line-height: 1.2;
font-family: "Arial", sans-serif;
```

Diese fünf Anweisungen können wie folgt verkürzt werden:

```css
font:
  italic bold 0.8em/1.2 "Arial",
  sans-serif;
```

Diese Kurzform-Deklaration entspricht tatsächlich den obigen Langform-Deklarationen plus `font-variant: normal`, `font-size-adjust: none` und `font-stretch: normal`.

## Rand- und Fülleigenschaften

Mit Rändern können Breite, Farbe und Stil in einer Deklaration vereinfacht werden. Beispielsweise betrachten Sie das folgende CSS:

```css
border-width: 1px;
border-style: solid;
border-color: black;
```

Es kann wie folgt vereinfacht werden:

```css
border: 1px solid black;
```

## Eigenschaften für Außen- und Innenabstände

Kurzschreibversionen von Werten für Außen- und Innenabstände funktionieren ähnlich; die Eigenschaft `margin` erlaubt es, Kurzwerte mit einem, zwei, drei oder vier Werten anzugeben. Betrachten Sie die folgenden CSS-Deklarationen:

```css
margin-top: 10px;
margin-right: 5px;
margin-bottom: 10px;
margin-left: 5px;
```

Sie entsprechen der folgenden Deklaration mit der Vier-Wert-Kurzform. Beachten Sie, dass die Werte im Uhrzeigersinn in der Reihenfolge stehen, beginnend oben: oben, rechts, unten und dann links (TRBL, die Konsonanten in "trouble").

```css
margin: 10px 5px 10px 5px;
```

Regeln für die Kurzform der Randeigenschaften bei ein, zwei, drei und vier Wertdeklarationen sind:

- Wenn **ein** Wert angegeben ist, gilt der gleiche Rand für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben sind, gilt der erste Rand für **oben und unten**, der zweite für **links und rechts**.
- Wenn **drei** Werte angegeben sind, gilt der erste Rand für **oben**, der zweite für **links und rechts**, der dritte für **unten**.
- Wenn **vier** Werte angegeben sind, gelten die Ränder in der Reihenfolge **oben**, **rechts**, **unten** und **links** (im Uhrzeigersinn).

## Positionseigenschaften

Bei der Position können die Kurzschreibversionen von oben, rechts, unten und links in einer Deklaration vereinfacht werden. Beispielsweise betrachten Sie das folgende CSS:

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

Ähnlich wie bei Rändern und Füllungen sind die Kantenwerte im Uhrzeigersinn angeordnet - oben, rechts, unten, dann links (TRBL).

## Die universelle Kurzschreibweise

CSS bietet eine universelle Kurzschreibweise, {{cssxref("all")}}, die ihren Wert auf jede Eigenschaft im Dokument anwendet. Ihr Zweck ist es, das Vererbungsmodell der Eigenschaften zu ändern.

Siehe [Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) oder [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction) für weitere Informationen darüber, wie Vererbung in CSS funktioniert.

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

- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade) Modul
- [Einführung in die CSS-Syntax: Deklarationen, Regelmengen und Anweisungen](/de/docs/Web/CSS/Guides/Syntax/Introduction)
- [At-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules)
- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction)
- [Lernen: Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model)
- Werte: [initial](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value), [computed](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value), [used](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value), und [actual](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value)
- [Wertdefinition-Syntax](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
