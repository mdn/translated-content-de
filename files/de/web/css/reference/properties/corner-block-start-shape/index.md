---
title: "`corner-block-start-shape` CSS property"
short-title: corner-block-start-shape
slug: Web/CSS/Reference/Properties/corner-block-start-shape
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{SeeCompatTable}}

Die **`corner-block-start-shape`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Form beider Ecken an der Block-Startkante eines Rahmens innerhalb ihres {{cssxref("border-radius")}}-Bereichs fest.

Für eine vollständige Beschreibung des Verhaltens von Eckformen und mehrere Beispiele siehe die Seite zur {{cssxref("corner-shape")}}-Kurzeigenschaft.

## Zusammengesetzte Eigenschaften

Die Eigenschaft `corner-block-start-shape` ist eine Kurzform für die folgenden logischen Eigenschaften:

- {{cssxref("corner-start-start-shape")}}
- {{cssxref("corner-start-end-shape")}}

## Syntax

```css
/* Single keyword value set for both corners */
corner-block-start-shape: notch;
corner-block-start-shape: squircle;

/* Single superellipse() value set for both corners */
corner-block-start-shape: superellipse(2.7);
corner-block-start-shape: superellipse(-2.5);

/* Block-start/inline-start corner, block-start/inline-end corner */
corner-block-start-shape: notch squircle;
corner-block-start-shape: notch superellipse(-2.5);

/* Global values */
corner-block-start-shape: inherit;
corner-block-start-shape: initial;
corner-block-start-shape: revert;
corner-block-start-shape: revert-layer;
corner-block-start-shape: unset;
```

### Werte

Die Eigenschaft `corner-block-start-shape` wird mit einem oder zwei {{cssxref("&lt;corner-shape-value>")}}-Werten angegeben:

- Wenn **ein Wert** benutzt wird, legt er die Form beider **Block-Start**-Ecken fest.
- Wenn **zwei Werte** benutzt werden, gibt der erste die Form der **Block-Start/Inline-Start**-Ecke und der zweite die Form der **Block-Start/Inline-Ende**-Ecke an.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Weitere verwandte Beispiele finden Sie auf der {{cssxref("corner-shape")}}-Referenzseite.

### Grundlegende Verwendung von `corner-block-start-shape`

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}}-Element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Wir geben dem Kasten einige grundlegende Stile, die wir zur Kürze ausgeblendet haben. Wir wenden auch einen {{cssxref("box-shadow")}}, einen `border-radius` von `40px 60px` und eine `corner-block-start-shape` von `scoop notch` an.

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
  border-radius: 40px 60px;
  corner-block-start-shape: scoop notch;
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

- {{cssxref("corner-shape")}} Kurzform-Eigenschaft
- {{cssxref("corner-block-end-shape")}}, {{cssxref("corner-inline-start-shape")}}, und {{cssxref("corner-inline-end-shape")}}
- {{cssxref("corner-top-shape")}}, {{cssxref("corner-bottom-shape")}}, {{cssxref("corner-left-shape")}}, und {{cssxref("corner-right-shape")}}
- {{cssxref("border-radius")}} Kurzform-Eigenschaft
- {{cssxref("border-start-start-radius")}} und {{cssxref("border-start-end-radius")}}
- [CSS-Einfassungen und Kastenverzierungen](/de/docs/Web/CSS/Guides/Borders_and_box_decorations) Modul
- [CSS-Hintergründe und -Einfassungen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
