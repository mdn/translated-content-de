---
title: corner-end-start-shape
slug: Web/CSS/Reference/Properties/corner-end-start-shape
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

Die **`corner-end-start-shape`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt die Form der block-end und inline-start Ecke eines Kastens innerhalb seines {{cssxref("border-radius")}} Bereichs an.

Für eine vollständige Beschreibung des Eckverhaltens und mehrere Beispiele siehe die Seite zur {{cssxref("corner-shape")}} Kurzschreibweise.

## Syntax

```css
/* Keyword values */
corner-end-start-shape: round;
corner-end-start-shape: scoop;

/* superellipse() function values */
corner-end-start-shape: superellipse(0.2);
corner-end-start-shape: superellipse(-5);

/* Global values */
corner-end-start-shape: inherit;
corner-end-start-shape: initial;
corner-end-start-shape: revert;
corner-end-start-shape: revert-layer;
corner-end-start-shape: unset;
```

### Werte

Die Eigenschaft `corner-end-start-shape` wird mit einem {{cssxref("&lt;corner-shape-value>")}} Wert angegeben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Weitere verwandte Beispiele finden Sie auf der {{cssxref("corner-shape")}} Referenzseite.

### Grundlegende Nutzung von `corner-end-start-shape`

#### HTML

Das Markup für dieses Beispiel enthält ein einziges {{htmlelement("div")}} Element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Wir geben dem Kasten einige grundlegende Stile, die wir der Kürze halber weggelassen haben. Wir wenden außerdem ein {{cssxref("box-shadow")}}, ein `border-radius` von `60px / 20%` und ein `corner-end-start-shape` von `bevel` an.

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
  background-color: orange;
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
  border-radius: 60px / 20%;
  corner-end-start-shape: bevel;
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
- {{cssxref("corner-start-start-shape")}}, {{cssxref("corner-start-end-shape")}}, und {{cssxref("corner-end-end-shape")}}
- {{cssxref("corner-top-left-shape")}}, {{cssxref("corner-top-right-shape")}}, {{cssxref("corner-bottom-left-shape")}}, und {{cssxref("corner-bottom-right-shape")}}
- {{cssxref("border-radius")}} Kurzschreibweise
- {{cssxref("border-end-start-radius")}}
- [CSS borders and box decorations](/de/docs/Web/CSS/Guides/Borders_and_box_decorations) Modul
- [CSS backgrounds and borders](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
