---
title: "`corner-bottom-shape` CSS property"
short-title: corner-bottom-shape
slug: Web/CSS/Reference/Properties/corner-bottom-shape
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

{{SeeCompatTable}}

Die **`corner-bottom-shape`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert die Form beider Ecken an der unteren Kante eines Kastens, innerhalb ihrer {{cssxref("border-radius")}}-Fläche.

Für eine umfassende Beschreibung des Verhaltens der Eckform und mehrere Beispiele, siehe die Seite zur {{cssxref("corner-shape")}}-Kurzschreibweise.

## Zusammenfassende Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden physischen Eigenschaften:

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

Die `corner-bottom-shape`-Eigenschaft wird durch ein oder zwei {{cssxref("&lt;corner-shape-value>")}} Werte spezifiziert:

- Wenn **ein Wert** verwendet wird, spezifiziert er die Form **beider unteren Ecken**.
- Wenn **zwei Werte** verwendet werden, spezifiziert der erste die Form der **unten-links** Ecke und der zweite die Form der **unten-rechts** Ecke.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Weitere verwandte Beispiele finden Sie auf der {{cssxref("corner-shape")}} Referenzseite.

### Grundlegende Nutzung von `corner-bottom-shape`

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}}-Element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Wir geben dem Kasten einige grundlegende Stile, die wir der Übersichtlichkeit halber ausgeblendet haben. Wir wenden auch einen {{cssxref("box-shadow")}}, einen `border-radius` von `60px 30px 20% 40%` und eine `corner-bottom-shape` von `square squircle` an.

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

Das gerenderte Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample("basic-usage", "100%", "240")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("corner-shape")}} Kurzschreibweise
- {{cssxref("corner-top-shape")}}, {{cssxref("corner-left-shape")}} und {{cssxref("corner-right-shape")}}
- {{cssxref("corner-block-start-shape")}}, {{cssxref("corner-block-end-shape")}}, {{cssxref("corner-inline-start-shape")}} und {{cssxref("corner-inline-end-shape")}}
- {{cssxref("border-radius")}} Kurzschreibweise
- {{cssxref("border-bottom-left-radius")}} und {{cssxref("border-bottom-right-radius")}}
- [CSS borders and box decorations](/de/docs/Web/CSS/Guides/Borders_and_box_decorations) Modul
- [CSS backgrounds and borders](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
