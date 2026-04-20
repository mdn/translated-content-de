---
title: "`corner-top-shape` CSS property"
short-title: corner-top-shape
slug: Web/CSS/Reference/Properties/corner-top-shape
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{SeeCompatTable}}

Die **`corner-top-shape`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert die Form beider Ecken an der oberen Kante eines Rahmens innerhalb ihres {{cssxref("border-radius")}} Bereichs.

Für eine vollständige Beschreibung des Verhaltens der Eckformen und mehrere Beispiele, siehe die {{cssxref("corner-shape")}} Kurzschreibweise-Seite.

## Zusammengesetzte Eigenschaften

Die `corner-top-shape` Eigenschaft ist eine Kurzschreibweise für die folgenden physischen Eigenschaften:

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

Die `corner-top-shape` Eigenschaft wird unter Verwendung von einem oder zwei {{cssxref("&lt;corner-shape-value>")}} Werten spezifiziert:

- Wenn **ein Wert** verwendet wird, spezifiziert er die Form **beider oberer Ecken**.
- Wenn **zwei Werte** verwendet werden, spezifiziert der erste die Form der **oberen linken** Ecke, und der zweite die Form der **oberen rechten** Ecke.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Weitere verwandte Beispiele finden Sie auf der {{cssxref("corner-shape")}} Referenzseite.

### Grundlegende Verwendung von `corner-top-shape`

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}} Element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Wir geben dem Rahmen einige grundlegende Stile, die wir aus Gründen der Kürze verborgen haben. Wir wenden auch einen {{cssxref("box-shadow")}}, einen `border-radius` von 60 Pixel und eine `corner-top-shape` von `scoop notch` an.

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

- {{cssxref("corner-shape")}} Kurzschreibweise-Eigenschaft
- {{cssxref("corner-bottom-shape")}}, {{cssxref("corner-left-shape")}}, und {{cssxref("corner-right-shape")}}
- {{cssxref("corner-block-start-shape")}}, {{cssxref("corner-block-end-shape")}}, {{cssxref("corner-inline-start-shape")}}, und {{cssxref("corner-inline-end-shape")}}
- {{cssxref("border-radius")}} Kurzschreibweise-Eigenschaft
- {{cssxref("border-top-left-radius")}} und {{cssxref("border-top-right-radius")}}
- [CSS-Rahmen und Box-Dekorationen](/de/docs/Web/CSS/Guides/Borders_and_box_decorations) Modul
- [CSS-Hintergründe und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
