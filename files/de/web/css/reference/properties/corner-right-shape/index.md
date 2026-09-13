---
title: "`corner-right-shape` CSS property"
short-title: corner-right-shape
slug: Web/CSS/Reference/Properties/corner-right-shape
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

{{SeeCompatTable}}

Die **`corner-right-shape`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Form beider Ecken an der rechten Kante eines Kastens innerhalb ihres {{cssxref("border-radius")}} Bereichs fest.

Für eine vollständige Beschreibung des Verhaltens der Eckformen und mehrere Beispiele siehe die Seite der {{cssxref("corner-shape")}} Kurzschreibweise.

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden physischen Eigenschaften:

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

Die Eigenschaft `corner-right-shape` wird mit einem oder zwei {{cssxref("&lt;corner-shape-value>")}} Werten angegeben:

- Wenn **ein Wert** verwendet wird, wird die Form beider **rechten Ecken** festgelegt.
- Wenn **zwei Werte** verwendet werden, gibt der erste die Form der **oberen rechten** Ecke und der zweite die Form der **unteren rechten** Ecke an.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Weitere verwandte Beispiele finden Sie auf der {{cssxref("corner-shape")}} Referenzseite.

### Grundlegende Nutzung von `corner-right-shape`

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}} Element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Wir geben der Box einige grundlegende Stile, die wir der Kürze wegen weggelassen haben. Wir wenden auch einen {{cssxref("box-shadow")}}, einen `border-radius` von `20% 30% / 50% 40%` und eine `corner-right-shape` von `square scoop` an.

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

Das gerenderte Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample("basic-usage", "100%", "240")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("corner-shape")}} Kurzschreibweise
- {{cssxref("corner-top-shape")}}, {{cssxref("corner-bottom-shape")}}, und {{cssxref("corner-left-shape")}}
- {{cssxref("corner-block-start-shape")}}, {{cssxref("corner-block-end-shape")}}, {{cssxref("corner-inline-start-shape")}}, und {{cssxref("corner-inline-end-shape")}}
- {{cssxref("border-radius")}} Kurzschreibweise
- {{cssxref("border-top-right-radius")}} und {{cssxref("border-bottom-right-radius")}}
- [CSS Rahmen und Box-Dekorationen](/de/docs/Web/CSS/Guides/Borders_and_box_decorations) Modul
- [CSS Hintergründe und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
