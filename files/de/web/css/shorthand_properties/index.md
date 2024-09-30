---
title: Shorthand-Eigenschaften
slug: Web/CSS/Shorthand_properties
l10n:
  sourceCommit: ec64bbd66dab1ce079768708b5da8c50abc4a957
---

{{CSSRef}}

**_Shorthand-Eigenschaften_** sind CSS-Eigenschaften, die es Ihnen ermöglichen, die Werte mehrerer anderer CSS-Eigenschaften gleichzeitig festzulegen. Durch die Verwendung einer Shorthand-Eigenschaft können Sie kompaktere (und oft besser lesbare) Stylesheets schreiben, was Zeit und Energie spart.

Die CSS-Spezifikation definiert Shorthand-Eigenschaften, um die Definition gemeinsamer Eigenschaften, die auf dasselbe Thema wirken, zu gruppieren. Zum Beispiel ist die CSS-{{cssxref("background")}}-Eigenschaft eine Shorthand-Eigenschaft, die in der Lage ist, die Werte von {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-repeat")}} und {{cssxref("background-position")}} zu definieren. Ebenso können die am häufigsten genutzten schriftbezogenen Eigenschaften mittels der Shorthand-Eigenschaft {{cssxref("font")}} definiert werden, und die verschiedenen Ränder um einen Kasten können mit der Shorthand-Eigenschaft {{cssxref("margin")}} festgelegt werden.

## Schwierige Sonderfälle

Es gibt einige Sonderfälle, die bei der Verwendung von Shorthand-Eigenschaften zu beachten sind.

### Auslassen von Eigenschaften

Ein Wert, der nicht angegeben wird, wird auf seinen Standardwert gesetzt. Das bedeutet, dass er zuvor festgelegte Werte **überschreibt**. Zum Beispiel:

```css
p {
  background-color: red;
  background: url(images/bg.gif) no-repeat left top;
}
```

Dies wird die Hintergrundfarbe nicht auf `red` setzen, sondern auf den Standardwert für {{cssxref("background-color")}}, der `transparent` ist.

Nur die individuellen Eigenschaftswerte können erben. Da fehlende Werte durch ihre Standardwerte ersetzt werden, ist es unmöglich, die Vererbung einzelner Eigenschaften durch deren Auslassen zuzulassen. Das Schlüsselwort `inherit` kann auf eine Eigenschaft angewendet werden, aber nur als Ganzes, nicht als Schlüsselwort für einen Wert oder einen anderen. Das bedeutet, dass der einzige Weg, einen bestimmten Wert erben zu lassen, darin besteht, die Langform-Eigenschaft mit dem Schlüsselwort `inherit` zu verwenden.

### Anordnung der Eigenschaften

Shorthand-Eigenschaften versuchen, keine spezifische Reihenfolge für die Werte der Eigenschaften, die sie ersetzen, zu erzwingen. Dies funktioniert gut, wenn diese Eigenschaften Werte unterschiedlicher Typen verwenden, da die Reihenfolge keine Bedeutung hat, doch dies funktioniert nicht so einfach, wenn mehrere Eigenschaften gleiche Werte haben können.

Zwei wichtige Fälle hierbei sind:

- Eigenschaften, die sich auf die Kanten eines Kastens beziehen, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}
- Eigenschaften, die sich auf die Ecken eines Kastens beziehen, wie {{cssxref("border-radius")}}

#### Kanten eines Kastens

Shorthands, die Eigenschaften im Zusammenhang mit den Kanten eines Kastens handhaben, wie {{cssxref("border-style")}}, {{cssxref("margin")}} oder {{cssxref("padding")}}, verwenden immer eine konsistente 1-zu-4-Wert-Syntax, die sich auf diese Kanten bezieht:

- **1-Wert-Syntax:** `border-width: 1em` — Der Einzelwert bezieht sich auf alle Kanten: ![Box-Kanten mit einer Wert-Syntax](border1.png)

- **2-Wert-Syntax:** `border-width: 1em 2em` — Der erste Wert bezieht sich auf die vertikalen, das heißt obere und untere, Kanten, der zweite auf die horizontalen, das heißt linke und rechte: ![Box-Kanten mit zwei Wert-Syntax](border2.png)

- **3-Wert-Syntax:** `border-width: 1em 2em 3em` — Der erste Wert bezieht sich auf die obere Kante, der zweite auf die horizontalen, das heißt linke und rechte, und der dritte Wert auf die untere Kante: ![Box-Kanten mit drei Wert-Syntax](border3.png)

- **4-Wert-Syntax:** `border-width: 1em 2em 3em 4em` — Die vier Werte beziehen sich auf die obere, rechte, untere und linke Kante in dieser Reihenfolge, das heißt im Uhrzeigersinn beginnend oben: ![Box-Kanten mit vier Wert-Syntax](border4.png) Die Anfangsbuchstaben von Oben-Rechts-Unten-Links entsprechen der Reihenfolge der Konsonanten im Wort _trouble_: TRBL. Sie können sich das auch als die Reihenfolge merken, in der die Zeiger einer Uhr rotieren: `1em` beginnt in der 12-Uhr-Position, dann `2em` in der 3-Uhr-Position, dann `3em` in der 6-Uhr-Position und `4em` in der 9-Uhr-Position.

#### Ecken eines Kastens

Ähnlich verwenden Shorthands, die Eigenschaften im Zusammenhang mit den Ecken eines Kastens handhaben, wie {{cssxref("border-radius")}}, immer eine konsistente 1-zu-4-Wert-Syntax, die sich auf diese Ecken bezieht:

- **1-Wert-Syntax:** `border-radius: 1em` — Der Einzelwert bezieht sich auf alle Ecken: ![Box-Ecken mit einer Wert-Syntax](corner1.png)

- **2-Wert-Syntax:** `border-radius: 1em 2em` — Der erste Wert bezieht sich auf die obere linke und untere rechte Ecke, der zweite auf die obere rechte und untere linke: ![Box-Ecken mit zwei Wert-Syntax](corner2.png)

- **3-Wert-Syntax:** `border-radius: 1em 2em 3em` — Der erste Wert bezieht sich auf die obere linke Ecke, der zweite auf die obere rechte und untere linke, und der dritte Wert auf die untere rechte Ecke: ![Box-Ecken mit drei Wert-Syntax](corner3.png)

- **4-Wert-Syntax:** `border-radius: 1em 2em 3em 4em` — Die vier Werte beziehen sich auf die obere linke, obere rechte, untere rechte und untere linke Ecke in dieser Reihenfolge, das heißt im Uhrzeigersinn beginnend oben links: ![Box-Ecken mit vier Wert-Syntax](corner4.png)

## Hintergrund-Eigenschaften

Betrachten Sie einen Hintergrund mit den folgenden Eigenschaften:

```css
background-color: #000;
background-image: url(images/bg.gif);
background-repeat: no-repeat;
background-position: left top;
```

Diese vier Deklarationen können auf eine einzige verkürzt werden:

```css
background: #000 url(images/bg.gif) no-repeat left top;
```

(Die Shorthand-Form ist tatsächlich das Äquivalent der Langform-Eigenschaften oben plus `background-attachment: scroll` und, in CSS3, einige zusätzliche Eigenschaften.)

Sehen Sie {{cssxref("background")}} für detailliertere Informationen, einschließlich CSS3-Eigenschaften.

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

Diese Shorthand-Deklaration entspricht tatsächlich den Langform-Deklarationen oben plus `font-variant: normal`, `font-size-adjust: none` und `font-stretch: normal`.

## Rahmen-Eigenschaften

Bei Rahmen können Breite, Farbe und Stil in einer Deklaration vereinfacht werden. Betrachten Sie zum Beispiel das folgende CSS:

```css
border-width: 1px;
border-style: solid;
border-color: #000;
```

Es kann vereinfacht werden als:

```css
border: 1px solid #000;
```

## Rand- und Auffüllungseigenschaften

Shorthand-Versionen von Rand- und Auffüllungswerten funktionieren ähnlich; die Randeigenschaft ermöglicht es, Shorthand-Werte mit einem, zwei, drei oder vier Werten anzugeben. Betrachten Sie die folgenden CSS-Deklarationen:

```css
margin-top: 10px;
margin-right: 5px;
margin-bottom: 10px;
margin-left: 5px;
```

Sie sind gleichbedeutend mit der folgenden Deklaration unter Verwendung der Vier-Wert-Shorthand. Beachten Sie, dass die Werte im Uhrzeigersinn angeordnet sind und oben beginnen: oben, rechts, unten, dann links (TRBL, die Konsonanten in "trouble").

```css
margin: 10px 5px 10px 5px;
```

Rand-Shorthand-Regeln für Ein-, Zwei-, Drei- und Vier-Wert-Deklarationen sind:

- Wird **ein** Wert angegeben, gilt derselbe Rand für **alle vier Seiten**.
- Werden **zwei** Werte angegeben, gilt der erste Rand für **oben und unten**, der zweite für **links und rechts**.
- Werden **drei** Werte angegeben, gilt der erste Rand für **oben**, der zweite für **links und rechts**, der dritte für **unten**.
- Werden **vier** Werte angegeben, gelten die Ränder in der Reihenfolge **oben**, **rechts**, **unten** und **links** (im Uhrzeigersinn).

## Positions-Eigenschaften

Bei Positionierung können die Shorthand-Versionen von oben, rechts, unten und links in einer Deklaration vereinfacht werden. Betrachten Sie zum Beispiel das folgende CSS:

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

Ähnlich wie bei Rändern und Auffüllungen sind die Inset-Werte im Uhrzeigersinn angeordnet - oben, rechts, unten und links (TRBL).

## Die universelle Shorthand-Eigenschaft

CSS bietet eine universelle Shorthand-Eigenschaft, {{cssxref("all")}}, die ihren Wert auf jede Eigenschaft im Dokument anwendet. Ihr Zweck besteht darin, das Vererbungsmodell der Eigenschaften zu ändern.

Siehe [Kaskade und Vererbung](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance) oder [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/Cascade) für weitere Informationen darüber, wie Vererbung im CSS funktioniert.

## Shorthand-Eigenschaften

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
- [Lernen: Kaskade, Spezifität und Vererbung](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- [Lernen: Kaskadenschichten](/de/docs/Learn/CSS/Building_blocks/Cascade_layers)
- [CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
- [Initial](/de/docs/Web/CSS/initial_value), [berechnet](/de/docs/Web/CSS/computed_value), [angewandt](/de/docs/Web/CSS/used_value), und [tatsächliche](/de/docs/Web/CSS/actual_value) Werte
- [Wertedefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
