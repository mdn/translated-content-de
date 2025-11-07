---
title: corner-top-left-shape
slug: Web/CSS/Reference/Properties/corner-top-left-shape
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

Die **`corner-top-left-shape`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Form der oberen linken Ecke eines Kastens innerhalb seines {{cssxref("border-radius")}}-Bereiches fest.

Eine vollständige Beschreibung des Verhaltens von Eckformen und mehrere Beispiele finden Sie auf der Seite der {{cssxref("corner-shape")}} Kurzschreibweise.

## Syntax

```css
/* Keyword values */
corner-top-left-shape: notch;
corner-top-left-shape: squircle;

/* superellipse() function values */
corner-top-left-shape: superellipse(3);
corner-top-left-shape: superellipse(-1.5);

/* Global values */
corner-top-left-shape: inherit;
corner-top-left-shape: initial;
corner-top-left-shape: revert;
corner-top-left-shape: revert-layer;
corner-top-left-shape: unset;
```

### Werte

Die `corner-top-left-shape`-Eigenschaft wird unter Verwendung eines {{cssxref("&lt;corner-shape-value>")}} Wertes spezifiziert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Weitere verwandte Beispiele finden Sie auf der {{cssxref("corner-shape")}} Referenzseite.

### Grundlegende Verwendung von `corner-top-left-shape`

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}}-Element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Wir geben dem Kasten einige grundlegende Stile, die wir der Kürze halber ausgeblendet haben. Wir wenden auch einen {{cssxref("box-shadow")}}, einen `border-radius` von `25% 100px` und eine `corner-top-left-shape` von `scoop` an.

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
  border-radius: 25% 100px;
  corner-top-left-shape: scoop;
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
- {{cssxref("corner-top-right-shape")}}, {{cssxref("corner-bottom-left-shape")}}, und {{cssxref("corner-bottom-right-shape")}}
- {{cssxref("corner-start-start-shape")}}, {{cssxref("corner-start-end-shape")}}, {{cssxref("corner-end-start-shape")}}, und {{cssxref("corner-end-end-shape")}}
- {{cssxref("border-radius")}} Kurzschreibweise
- {{cssxref("border-top-left-radius")}}
- [CSS-Ränder und Kastendekorationen](/de/docs/Web/CSS/Guides/Borders_and_box_decorations) Modul
- [CSS Hintergründe und Ränder](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
