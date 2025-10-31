---
title: corner-start-start-shape
slug: Web/CSS/Reference/Properties/corner-start-start-shape
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{SeeCompatTable}}

Die **`corner-start-start-shape`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert die Form der Ecken am block-start und inline-start einer Box innerhalb des {{cssxref("border-radius")}} Bereichs.

Für eine vollständige Beschreibung des Verhaltens von Eckenformen und mehreren Beispielen, siehe die Seite der {{cssxref("corner-shape")}} Kurzschreibweise.

## Syntax

```css
/* Keyword values */
corner-start-start-shape: notch;
corner-start-start-shape: squircle;

/* superellipse() function values */
corner-start-start-shape: superellipse(3);
corner-start-start-shape: superellipse(-1.5);

/* Global values */
corner-start-start-shape: inherit;
corner-start-start-shape: initial;
corner-start-start-shape: revert;
corner-start-start-shape: revert-layer;
corner-start-start-shape: unset;
```

### Werte

Die `corner-start-start-shape` Eigenschaft wird mit einem {{cssxref("&lt;corner-shape-value>")}} Wert angegeben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Weitere verwandte Beispiele finden Sie auf der {{cssxref("corner-shape")}} Referenzseite.

### Grundlegende Nutzung von `corner-start-start-shape`

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}} Element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Wir geben der Box einige grundlegende Stile, die wir der Kürze halber verborgen haben. Außerdem wenden wir einen {{cssxref("box-shadow")}}, einen `border-radius` von `40% 10px 10px` und eine `corner-start-start-shape` von `scoop` an.

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
  border-radius: 40% 10px 10px;
  corner-start-start-shape: scoop;
}
```

#### Ergebnis

Das gerenderte Ergebnis sieht wie folgt aus:

{{EmbedLiveSample("basic-usage", "100%", "240")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("corner-shape")}} Kurzschreibweise
- {{cssxref("corner-start-end-shape")}}, {{cssxref("corner-end-start-shape")}}, und {{cssxref("corner-end-end-shape")}}
- {{cssxref("corner-top-left-shape")}}, {{cssxref("corner-top-right-shape")}}, {{cssxref("corner-bottom-left-shape")}}, und {{cssxref("corner-bottom-right-shape")}}
- {{cssxref("border-radius")}} Kurzschreibweise
- {{cssxref("border-start-start-radius")}}
- [CSS borders and box decorations](/de/docs/Web/CSS/CSS_borders_and_box_decorations) Modul
- [CSS backgrounds and borders](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
