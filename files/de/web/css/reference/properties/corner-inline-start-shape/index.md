---
title: corner-inline-start-shape
slug: Web/CSS/Reference/Properties/corner-inline-start-shape
l10n:
  sourceCommit: 133c1628ead5b32660a0096ea7b3881637dc355c
---

{{SeeCompatTable}}

Die **`corner-inline-start-shape`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Form beider Ecken an der inline-start Kante einer Box innerhalb ihres {{cssxref("border-radius")}} Bereichs fest.

Für eine vollständige Beschreibung des Verhaltens von Eckenformen und mehrere Beispiele, siehe die Seite zur {{cssxref("corner-shape")}} Kurzschreibweise.

## Bestandteileigenschaften

Die Eigenschaft `corner-inline-start-shape` ist eine Kurzform für die folgenden logischen Eigenschaften:

- {{cssxref("corner-start-start-shape")}}
- {{cssxref("corner-end-start-shape")}}

## Syntax

```css
/* Single keyword value set for both corners */
corner-inline-start-shape: round;
corner-inline-start-shape: bevel;

/* Single superellipse() value set for both corners */
corner-inline-start-shape: superellipse(0.5);
corner-inline-start-shape: superellipse(-3);

/* Block-start/inline-start corner, block-end/inline-start corner */
corner-inline-start-shape: round bevel;
corner-inline-start-shape: round superellipse(0.5);

/* Global values */
corner-inline-start-shape: inherit;
corner-inline-start-shape: initial;
corner-inline-start-shape: revert;
corner-inline-start-shape: revert-layer;
corner-inline-start-shape: unset;
```

### Werte

Die Eigenschaft `corner-inline-start-shape` wird mit einem oder zwei {{cssxref("&lt;corner-shape-value>")}} Werten angegeben:

- Wird **ein Wert** verwendet, gibt er die Form beider **inline-start** Ecken an.
- Werden **zwei Werte** verwendet, gibt der erste die Form der **block-start/inline-start** Ecke an, und der zweite die Form der **block-end/inline-start** Ecke.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Andere verwandte Beispiele finden Sie auf der {{cssxref("corner-shape")}} Referenzseite.

### Grundlegende Verwendung von `corner-inline-start-shape`

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}} Element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Wir geben der Box einige grundlegende Stile, die wir der Kürze halber verborgen haben. Wir wenden auch einen {{cssxref("box-shadow")}}, einen `border-radius` von 60 Pixeln und eine `corner-inline-start-shape` von `square bevel` an.

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
  border-radius: 60px;
  corner-inline-start-shape: square bevel;
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
- {{cssxref("corner-block-start-shape")}}, {{cssxref("corner-block-end-shape")}}, und {{cssxref("corner-inline-end-shape")}}
- {{cssxref("corner-top-shape")}}, {{cssxref("corner-bottom-shape")}}, {{cssxref("corner-left-shape")}}, und {{cssxref("corner-right-shape")}}
- {{cssxref("border-radius")}} Kurzschreibweise
- {{cssxref("border-start-start-radius")}} und {{cssxref("border-end-start-radius")}}
- [CSS borders and box decorations](/de/docs/Web/CSS/Guides/Borders_and_box_decorations) Modul
- [CSS backgrounds and borders](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
