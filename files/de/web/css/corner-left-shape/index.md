---
title: corner-left-shape
slug: Web/CSS/corner-left-shape
l10n:
  sourceCommit: 2a64c5583a2c61c729ffe1ee1e7709a5898f57b0
---

{{SeeCompatTable}}

Die **`corner-left-shape`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Form beider Ecken an der linken Kante eines Kastens innerhalb ihres {{cssxref("border-radius")}}-Bereichs fest.

Für eine vollständige Beschreibung des Eckformenverhaltens und mehrere Beispiele, siehe die Seite zur {{cssxref("corner-shape")}} Kurzschreibweise.

## Bestandteilseigenschaften

Die `corner-left-shape` Eigenschaft ist eine Kurzschreibweise für die folgenden physikalischen Eigenschaften:

- {{cssxref("corner-top-left-shape")}}
- {{cssxref("corner-bottom-left-shape")}}

## Syntax

```css
/* Single keyword value set for both corners */
corner-left-shape: round;
corner-left-shape: bevel;

/* Single superellipse() value set for both corners */
corner-left-shape: superellipse(1.2);
corner-left-shape: superellipse(-2.5);

/* Top corner, bottom corner */
corner-left-shape: round bevel;
corner-left-shape: bevel superellipse(1.2);

/* Global values */
corner-left-shape: inherit;
corner-left-shape: initial;
corner-left-shape: revert;
corner-left-shape: revert-layer;
corner-left-shape: unset;
```

### Werte

Die `corner-left-shape` Eigenschaft wird unter Verwendung von einem oder zwei {{cssxref("&lt;corner-shape-value>")}} Werten angegeben:

- Wird **ein Wert** verwendet, spezifiziert er die Form **beider linken Ecken**.
- Werden **zwei Werte** verwendet, spezifiziert der erste die Form der **oberen linken** Ecke und der zweite die Form der **unteren linken** Ecke.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Weitere verwandte Beispiele finden Sie auf der {{cssxref("corner-shape")}} Referenzseite.

### Grundlegende Verwendung von `corner-left-shape`

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}}-Element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Wir geben dem Kasten einige grundlegende Stile, die wir der Kürze halber versteckt haben. Wir setzen auch einen {{cssxref("box-shadow")}}, einen `border-radius` von `20px 40px / 60px 80px` und eine `corner-left-shape` von `notch bevel`.

```css hidden live-sample___basic-usage
body {
  font-family: Arial, Helvetica, sans-serif;
  width: 240px;
  margin: 20px auto;
}

div {
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
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
  border-radius: 20px 40px / 60px 80px;
  corner-left-shape: notch bevel;
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
- {{cssxref("corner-top-shape")}}, {{cssxref("corner-bottom-shape")}}, und {{cssxref("corner-right-shape")}}
- {{cssxref("corner-block-start-shape")}}, {{cssxref("corner-block-end-shape")}}, {{cssxref("corner-inline-start-shape")}}, und {{cssxref("corner-inline-end-shape")}}
- {{cssxref("border-radius")}} Kurzschreibweise
- {{cssxref("border-top-left-radius")}} und {{cssxref("border-bottom-left-radius")}}
- [CSS borders and box decorations](/de/docs/Web/CSS/CSS_borders_and_box_decorations) Modul
- [CSS backgrounds and borders](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
