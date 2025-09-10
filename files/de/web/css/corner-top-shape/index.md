---
title: corner-top-shape
slug: Web/CSS/corner-top-shape
l10n:
  sourceCommit: 28a0409af150dc6d13584302f2e53664fb4ad02f
---

Die **`corner-top-shape`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Form beider Ecken an der oberen Kante eines Kastens innerhalb ihres {{cssxref("border-radius")}}-Bereiches fest.

Für eine vollständige Beschreibung des Verhaltens von Eckenformen und mehrere Beispiele siehe die {{cssxref("corner-shape")}} Kurzschreibweise-Seite.

## Teil-Eigenschaften

Die `corner-top-shape`-Eigenschaft ist eine Kurzschreibweise für die folgenden physischen Eigenschaften:

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

Die `corner-top-shape`-Eigenschaft wird mit einem oder zwei {{cssxref("&lt;corner-shape-value>")}} Werten spezifiziert:

- Wenn **ein Wert** verwendet wird, gibt dieser die Form **beider oberen Ecken** an.
- Wenn **zwei Werte** verwendet werden, gibt der erste die Form der **oberen linken** Ecke an und der zweite die Form der **oberen rechten** Ecke.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Sie finden weitere verwandte Beispiele auf der {{cssxref("corner-shape")}} Referenzseite.

### Grundlegende Nutzung von `corner-top-shape`

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}} Element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Wir geben dem Kasten einige grundlegende Stile, die wir der Kürze halber weggelassen haben. Wir wenden auch einen {{cssxref("box-shadow")}}, einen `border-radius` von 60 Pixeln und eine `corner-top-shape` von `scoop notch` an.

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

Das gerenderte Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample("basic-usage", "100%", "240")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("corner-shape")}} Kurzschreibweise
- {{cssxref("corner-bottom-shape")}}, {{cssxref("corner-left-shape")}}, und {{cssxref("corner-right-shape")}}
- {{cssxref("corner-block-start-shape")}}, {{cssxref("corner-block-end-shape")}}, {{cssxref("corner-inline-start-shape")}}, und {{cssxref("corner-inline-end-shape")}}
- {{cssxref("border-radius")}} Kurzschreibweise
- {{cssxref("border-top-left-radius")}} und {{cssxref("border-top-right-radius")}}
- [CSS borders and box decorations](/de/docs/Web/CSS/CSS_borders_and_box_decorations) Modul
- [CSS backgrounds and borders](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
