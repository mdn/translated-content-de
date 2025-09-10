---
title: corner-inline-start-shape
slug: Web/CSS/corner-inline-start-shape
l10n:
  sourceCommit: 28a0409af150dc6d13584302f2e53664fb4ad02f
---

Die **`corner-inline-start-shape`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Form beider Ecken an der `inline-start`-Kante eines Rahmens innerhalb ihrer {{cssxref("border-radius")}}-Fläche fest.

Für eine vollständige Beschreibung des Verhaltens der Eckform und mehrere Beispiele siehe die Seite über die Abkürzungs-Eigenschaft {{cssxref("corner-shape")}}.

## Bestandteileigenschaften

Die `corner-inline-start-shape` Eigenschaft ist eine Abkürzung für die folgenden physischen Eigenschaften:

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

Die `corner-inline-start-shape` Eigenschaft wird mit einem oder zwei {{cssxref("&lt;corner-shape-value>")}} Werten angegeben:

- Wenn **ein Wert** verwendet wird, spezifiziert er die Form beider `inline-start`-Ecken.
- Wenn **zwei Werte** verwendet werden, spezifiziert der erste die Form der **block-start/inline-start**-Ecke und der zweite die Form der **block-end/inline-start**-Ecke.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Sie finden weitere verwandte Beispiele auf der {{cssxref("corner-shape")}} Referenzseite.

### Grundlegende Verwendung von `corner-inline-start-shape`

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}} Element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Wir geben dem Kasten einige grundlegende Stile, die wir aus Gründen der Kürze ausgeblendet haben. Wir wenden auch einen {{cssxref("box-shadow")}}, einen `border-radius` von 60 Pixeln und ein `corner-inline-start-shape` von `square bevel` an.

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

Das gerenderte Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample("basic-usage", "100%", "240")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("corner-shape")}} Abkürzungs-Eigenschaft
- {{cssxref("corner-block-start-shape")}}, {{cssxref("corner-block-end-shape")}}, und {{cssxref("corner-inline-end-shape")}}
- {{cssxref("corner-top-shape")}}, {{cssxref("corner-bottom-shape")}}, {{cssxref("corner-left-shape")}}, und {{cssxref("corner-right-shape")}}
- {{cssxref("border-radius")}} Abkürzungs-Eigenschaft
- {{cssxref("border-start-start-radius")}} und {{cssxref("border-end-start-radius")}}
- [CSS borders and box decorations](/de/docs/Web/CSS/CSS_borders_and_box_decorations) Modul
- [CSS backgrounds and borders](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
