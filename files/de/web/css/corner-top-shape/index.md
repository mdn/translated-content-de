---
title: corner-top-shape
slug: Web/CSS/corner-top-shape
l10n:
  sourceCommit: 2a64c5583a2c61c729ffe1ee1e7709a5898f57b0
---

{{SeeCompatTable}}

Die **`corner-top-shape`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert die Form beider Ecken an der oberen Kante eines Kastens, innerhalb ihres {{cssxref("border-radius")}} Bereichs.

Eine vollständige Beschreibung des Verhaltens von Eckenformen und mehrere Beispiele finden Sie auf der Seite der {{cssxref("corner-shape")}} Kurzschreibungseigenschaft.

## Bestandteileigenschaften

Die `corner-top-shape` Eigenschaft ist eine Kurzform für die folgenden physikalischen Eigenschaften:

- {{cssxref("corner-top-left-shape")}}
- {{cssxref("corner-top-right-shape")}}

## Syntax

```css
/* Single keyword value set for both corners */
corner-top-shape: notch;
corner-top-shape: squircle;

/* Single superellipse() value set for both corners */
corner-top-shape: superellipse(3);
corner-top-shape: superellipse(-1.5);

/* Left-hand corner, right-hand corner */
corner-top-shape: notch squircle;
corner-top-shape: notch superellipse(-1.5);

/* Global values */
corner-top-shape: inherit;
corner-top-shape: initial;
corner-top-shape: revert;
corner-top-shape: revert-layer;
corner-top-shape: unset;
```

### Werte

Die `corner-top-shape` Eigenschaft wird durch einen oder zwei {{cssxref("&lt;corner-shape-value>")}} Werte spezifiziert:

- Wenn **ein Wert** verwendet wird, gibt dieser die Form **beider oberer Ecken** an.
- Wenn **zwei Werte** verwendet werden, gibt der erste die Form der **oben-links** Ecke und der zweite die Form der **oben-rechts** Ecke an.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Sie finden weitere verwandte Beispiele auf der {{cssxref("corner-shape")}} Referenzseite.

### Grundlegende Verwendung von `corner-top-shape`

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}} Element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Wir geben der Box einige grundlegende Stile, die wir aus Kürze versteckt haben. Wir wenden auch einen {{cssxref("box-shadow")}}, einen `border-radius` von 60 Pixeln und einen `corner-top-shape` von `scoop notch` an.

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
  background-color: goldenrod;
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
  border-radius: 60px;
  corner-top-shape: scoop notch;
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

- {{cssxref("corner-shape")}} Kurzschreibungseigenschaft
- {{cssxref("corner-bottom-shape")}}, {{cssxref("corner-left-shape")}} und {{cssxref("corner-right-shape")}}
- {{cssxref("corner-block-start-shape")}}, {{cssxref("corner-block-end-shape")}}, {{cssxref("corner-inline-start-shape")}} und {{cssxref("corner-inline-end-shape")}}
- {{cssxref("border-radius")}} Kurzschreibungseigenschaft
- {{cssxref("border-top-left-radius")}} und {{cssxref("border-top-right-radius")}}
- [CSS Umrandungen und Dekorationen von Boxen](/de/docs/Web/CSS/CSS_borders_and_box_decorations) Modul
- [CSS Hintergründe und Ränder](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
