---
title: corner-right-shape
slug: Web/CSS/Reference/Properties/corner-right-shape
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{SeeCompatTable}}

Die **`corner-right-shape`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert die Form beider Ecken an der rechten Kante eines Kastens innerhalb ihres {{cssxref("border-radius")}} Bereichs.

Für eine vollständige Beschreibung des Verhaltens der Eckenform und mehrere Beispiele, siehe die {{cssxref("corner-shape")}} Shorthand-Eigenschaftsseite.

## Bestandteilige Eigenschaften

Die `corner-right-shape` Eigenschaft ist ein Shorthand für die folgenden physischen Eigenschaften:

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

Die `corner-right-shape` Eigenschaft wird unter Verwendung eines oder zweier {{cssxref("&lt;corner-shape-value>")}} Werte spezifiziert:

- Wenn **ein Wert** verwendet wird, legt er die Form **beider rechten Ecken** fest.
- Wenn **zwei Werte** verwendet werden, spezifiziert der erste die Form der **oberen rechten** Ecke, und der zweite die Form der **unteren rechten** Ecke.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Sie können weitere verwandte Beispiele auf der {{cssxref("corner-shape")}} Referenzseite finden.

### Grundlegende Verwendung von `corner-right-shape`

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}} Element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Wir geben dem Kasten einige grundlegende Stile, die wir der Übersichtlichkeit halber ausgeblendet haben. Wir wenden auch einen {{cssxref("box-shadow")}}, einen `border-radius` von `20% 30% / 50% 40%`, und eine `corner-right-shape` von `square scoop` an.

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
  border-radius: 20% 30% / 50% 40%;
  corner-right-shape: square scoop;
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

- {{cssxref("corner-shape")}} Shorthand-Eigenschaft
- {{cssxref("corner-top-shape")}}, {{cssxref("corner-bottom-shape")}}, und {{cssxref("corner-left-shape")}}
- {{cssxref("corner-block-start-shape")}}, {{cssxref("corner-block-end-shape")}}, {{cssxref("corner-inline-start-shape")}}, und {{cssxref("corner-inline-end-shape")}}
- {{cssxref("border-radius")}} Shorthand-Eigenschaft
- {{cssxref("border-top-right-radius")}} und {{cssxref("border-bottom-right-radius")}}
- [CSS borders and box decorations](/de/docs/Web/CSS/CSS_borders_and_box_decorations) Modul
- [CSS backgrounds and borders](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
