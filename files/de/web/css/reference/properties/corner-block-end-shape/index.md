---
title: corner-block-end-shape
slug: Web/CSS/Reference/Properties/corner-block-end-shape
l10n:
  sourceCommit: 133c1628ead5b32660a0096ea7b3881637dc355c
---

{{SeeCompatTable}}

Die **`corner-block-end-shape`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt die Form beider Ecken an der Block-Endkante einer Box innerhalb ihres {{cssxref("border-radius")}}-Bereichs an.

Eine vollständige Beschreibung des Verhaltens von Eckenformen und mehrere Beispiele finden Sie auf der Seite der {{cssxref("corner-shape")}}-Kurzschreibweise.

## Bestandteilseigenschaften

Die `corner-block-end-shape` Eigenschaft ist eine Kurzschreibweise für die folgenden logischen Eigenschaften:

- {{cssxref("corner-end-start-shape")}}
- {{cssxref("corner-end-end-shape")}}

## Syntax

```css
/* Single keyword value set for both corners */
corner-block-end-shape: square;
corner-block-end-shape: scoop;

/* Single superellipse() value set for both corners */
corner-block-end-shape: superellipse(3.5);
corner-block-end-shape: superellipse(-1.9);

/* Block-end/inline-start corner, block-end/inline-end corner */
corner-block-end-shape: square scoop;
corner-block-end-shape: square superellipse(-1.9);

/* Global values */
corner-block-end-shape: inherit;
corner-block-end-shape: initial;
corner-block-end-shape: revert;
corner-block-end-shape: revert-layer;
corner-block-end-shape: unset;
```

### Werte

Die `corner-block-end-shape` Eigenschaft wird mit einem oder zwei {{cssxref("&lt;corner-shape-value>")}}-Werten angegeben:

- Wenn **ein Wert** verwendet wird, bestimmt er die Form beider **Block-Ende**-Ecken.
- Wenn **zwei Werte** verwendet werden, bestimmt der erste die Form der Ecke **Block-Ende/Inline-Anfang**, und der zweite Wert bestimmt die Form der Ecke **Block-Ende/Inline-Ende**.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Weitere zugehörige Beispiele finden Sie auf der {{cssxref("corner-shape")}}-Referenzseite.

### Grundlegende Verwendung von `corner-block-end-shape`

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}}-Element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Wir geben der Box einige grundlegende Stile, die wir der Kürze halber ausgeblendet haben. Wir wenden auch einen {{cssxref("box-shadow")}}, einen `border-radius` von `80px / 40px` und eine `corner-block-end-shape` von `notch square` an.

```css hidden live-sample___basic-usage
body {
  font-family: "Helvetica", "Arial", sans-serif;
  width: 240px;
  margin: 20px auto;
}

div {
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: cyan;
  background-image: linear-gradient(
    to bottom,
    rgb(255 255 255 / 0),
    rgb(255 255 255 / 0.5)
  );
}
```

```css live-sample___basic-usage
div {
  box-shadow: 1px 1px 3px gray;
  border-radius: 80px / 40px;
  corner-block-end-shape: notch square;
}
```

#### Ergebnis

Das gerenderte Ergebnis sieht so aus:

{{EmbedLiveSample("basic-usage", "100%", "240")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("corner-shape")}} Kurzschreibweise
- {{cssxref("corner-block-start-shape")}}, {{cssxref("corner-inline-start-shape")}}, und {{cssxref("corner-inline-end-shape")}}
- {{cssxref("corner-top-shape")}}, {{cssxref("corner-bottom-shape")}}, {{cssxref("corner-left-shape")}}, und {{cssxref("corner-right-shape")}}
- {{cssxref("border-radius")}} Kurzschreibweise
- {{cssxref("border-end-start-radius")}} und {{cssxref("border-end-end-radius")}}
- [CSS Rahmen und Boxdekorationen](/de/docs/Web/CSS/Guides/Borders_and_box_decorations) Modul
- [CSS Hintergründe und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
