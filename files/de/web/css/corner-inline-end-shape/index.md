---
title: corner-inline-end-shape
slug: Web/CSS/corner-inline-end-shape
l10n:
  sourceCommit: 28a0409af150dc6d13584302f2e53664fb4ad02f
---

Die **`corner-inline-end-shape`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Form beider Ecken auf der Inline-End-Kante eines Kastens innerhalb ihres {{cssxref("border-radius")}} Bereichs fest.

Für eine vollständige Beschreibung des Verhaltens von Eckenformen und mehrere Beispiele siehe die Seite der {{cssxref("corner-shape")}} Kurzschreibweise.

## Bestandteilseigenschaften

Die `corner-inline-end-shape` Eigenschaft ist eine Kurzschreibweise für die folgenden physischen Eigenschaften:

- {{cssxref("corner-start-end-shape")}}
- {{cssxref("corner-end-end-shape")}}

## Syntax

```css
/* Single keyword value set for both corners */
corner-inline-end-shape: squircle;
corner-inline-end-shape: scoop;

/* Single superellipse() value set for both corners */
corner-inline-end-shape: superellipse(1.5);
corner-inline-end-shape: superellipse(-0.8);

/* Block-start/inline-end corner, block-end/inline-end corner */
corner-inline-end-shape: squircle scoop;
corner-inline-end-shape: squircle superellipse(-0.8);

/* Global values */
corner-inline-end-shape: inherit;
corner-inline-end-shape: initial;
corner-inline-end-shape: revert;
corner-inline-end-shape: revert-layer;
corner-inline-end-shape: unset;
```

### Werte

Die `corner-inline-end-shape` Eigenschaft wird mit einem oder zwei {{cssxref("&lt;corner-shape-value>")}} Werten angegeben:

- Wenn **ein Wert** verwendet wird, legt er die Form beider **Inline-End**-Ecken fest.
- Wenn **zwei Werte** verwendet werden, legt der erste die Form der **Block-Start/Inline-End**-Ecke fest, und der zweite legt die Form der **Block-End/Inline-End**-Ecke fest.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Weitere verwandte Beispiele finden Sie auf der {{cssxref("corner-shape")}} Referenzseite.

### Grundlegende Verwendung von `corner-inline-end-shape`

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}} Element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Wir geben dem Kasten einige grundlegende Stilarten, die wir der Kürze halber ausgeblendet haben. Wir wenden auch einen {{cssxref("box-shadow")}}, einen `border-radius` von `15% 30%` und eine `corner-inline-end-shape` von `bevel squircle` an.

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
  background-color: green;
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
  border-radius: 15% 30%;
  corner-inline-end-shape: bevel squircle;
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
- {{cssxref("corner-block-start-shape")}}, {{cssxref("corner-block-end-shape")}}, und {{cssxref("corner-inline-start-shape")}}
- {{cssxref("corner-top-shape")}}, {{cssxref("corner-bottom-shape")}}, {{cssxref("corner-left-shape")}}, und {{cssxref("corner-right-shape")}}
- {{cssxref("border-radius")}} Kurzschreibweise
- {{cssxref("border-start-end-radius")}} und {{cssxref("border-end-end-radius")}}
- [CSS borders and box decorations](/de/docs/Web/CSS/CSS_borders_and_box_decorations) Modul
- [CSS backgrounds and borders](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
