---
title: corner-bottom-shape
slug: Web/CSS/Reference/Properties/corner-bottom-shape
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{SeeCompatTable}}

Die **`corner-bottom-shape`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Form beider Ecken an der unteren Kante eines Kastens innerhalb ihres {{cssxref("border-radius")}} Bereichs fest.

Für eine vollständige Beschreibung des Verhaltens von Eckformen und mehrere Beispiele, siehe die Seite zur {{cssxref("corner-shape")}} Kurzschreibweise.

## Bestandteileigenschaften

Die `corner-bottom-shape` Eigenschaft ist eine Kurzschreibweise für die folgenden physischen Eigenschaften:

- {{cssxref("corner-bottom-left-shape")}}
- {{cssxref("corner-bottom-right-shape")}}

## Syntax

```css
/* Single keyword value set for both corners */
corner-bottom-shape: scoop;
corner-bottom-shape: square;

/* Single superellipse() value set for both corners */
corner-bottom-shape: superellipse(0.7);
corner-bottom-shape: superellipse(-2.8);

/* Left-hand corner, right-hand corner */
corner-bottom-shape: scoop square;
corner-bottom-shape: scoop superellipse(0.7);

/* Global values */
corner-bottom-shape: inherit;
corner-bottom-shape: initial;
corner-bottom-shape: revert;
corner-bottom-shape: revert-layer;
corner-bottom-shape: unset;
```

### Werte

Die `corner-bottom-shape` Eigenschaft wird mit einem oder zwei {{cssxref("&lt;corner-shape-value>")}} Werten angegeben:

- Wenn **ein Wert** verwendet wird, spezifiziert dieser die Form **beider unterer Ecken**.
- Wenn **zwei Werte** verwendet werden, spezifiziert der erste die Form der **unten-links** Ecke, und der zweite spezifiziert die Form der **unten-rechts** Ecke.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Weitere verwandte Beispiele finden Sie auf der {{cssxref("corner-shape")}} Referenzseite.

### Grundlegende Verwendung von `corner-bottom-shape`

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}} Element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Wir geben dem Kasten einige grundlegende Stile, die wir der Kürze halber ausgeblendet haben. Wir wenden außerdem einen {{cssxref("box-shadow")}}, einen `border-radius` von `60px 30px 20% 40%`, und eine `corner-bottom-shape` von `square squircle` an.

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
  border-radius: 60px 30px 20% 40%;
  corner-bottom-shape: square squircle;
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
- {{cssxref("corner-top-shape")}}, {{cssxref("corner-left-shape")}}, und {{cssxref("corner-right-shape")}}
- {{cssxref("corner-block-start-shape")}}, {{cssxref("corner-block-end-shape")}}, {{cssxref("corner-inline-start-shape")}}, und {{cssxref("corner-inline-end-shape")}}
- {{cssxref("border-radius")}} Kurzschreibweise
- {{cssxref("border-bottom-left-radius")}} und {{cssxref("border-bottom-right-radius")}}
- [CSS borders and box decorations](/de/docs/Web/CSS/CSS_borders_and_box_decorations) Modul
- [CSS backgrounds and borders](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
