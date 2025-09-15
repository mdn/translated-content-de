---
title: corner-right-shape
slug: Web/CSS/corner-right-shape
l10n:
  sourceCommit: 2a64c5583a2c61c729ffe1ee1e7709a5898f57b0
---

{{SeeCompatTable}}

Die **`corner-right-shape`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Form beider Ecken am rechten Rand eines Kastens innerhalb ihres {{cssxref("border-radius")}} Bereichs fest.

Für eine vollständige Beschreibung des Verhaltens von Eckenformen und mehrere Beispiele siehe die Seite der Kurzform-Eigenschaft {{cssxref("corner-shape")}}.

## Zusammengesetzte Eigenschaften

Die `corner-right-shape` Eigenschaft ist eine Kurzform für die folgenden physischen Eigenschaften:

- {{cssxref("corner-top-right-shape")}}
- {{cssxref("corner-bottom-right-shape")}}

## Syntax

```css
/* Single keyword value set for both corners */
corner-right-shape: bevel;
corner-right-shape: notch;

/* Single superellipse() value set for both corners */
corner-right-shape: superellipse(4);
corner-right-shape: superellipse(-0.9);

/* Top corner, bottom corner */
corner-right-shape: bevel notch;
corner-right-shape: notch superellipse(-0.9);

/* Global values */
corner-right-shape: inherit;
corner-right-shape: initial;
corner-right-shape: revert;
corner-right-shape: revert-layer;
corner-right-shape: unset;
```

### Werte

Die `corner-right-shape` Eigenschaft wird unter Verwendung von einem oder zwei {{cssxref("&lt;corner-shape-value>")}} Werten angegeben:

- Wenn ein **Wert** verwendet wird, gibt er die Form beider **rechten Ecken** an.
- Wenn **zwei Werte** verwendet werden, gibt der erste die Form der **oberen rechten** Ecke und der zweite die Form der **unteren rechten** Ecke an.

## Formaler Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Andere verwandte Beispiele finden Sie auf der Referenzseite {{cssxref("corner-shape")}}.

### Grundlegende Nutzung von `corner-right-shape`

#### HTML

Das Markup für dieses Beispiel enthält ein einziges {{htmlelement("div")}} Element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Wir geben dem Kasten einige grundlegende Stile, die wir der Kürze halber verborgen haben. Wir wenden auch einen {{cssxref("box-shadow")}}, einen `border-radius` von `20% 30% / 50% 40%`, und eine `corner-right-shape` von `square scoop` an.

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
  border-radius: 20% 30% / 50% 40%;
  corner-right-shape: square scoop;
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

- {{cssxref("corner-shape")}} Kurzform-Eigenschaft
- {{cssxref("corner-top-shape")}}, {{cssxref("corner-bottom-shape")}}, und {{cssxref("corner-left-shape")}}
- {{cssxref("corner-block-start-shape")}}, {{cssxref("corner-block-end-shape")}}, {{cssxref("corner-inline-start-shape")}}, und {{cssxref("corner-inline-end-shape")}}
- {{cssxref("border-radius")}} Kurzform-Eigenschaft
- {{cssxref("border-top-right-radius")}} und {{cssxref("border-bottom-right-radius")}}
- [CSS borders and box decorations](/de/docs/Web/CSS/CSS_borders_and_box_decorations) Modul
- [CSS backgrounds and borders](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
