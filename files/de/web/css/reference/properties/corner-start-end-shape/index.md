---
title: "`corner-start-end-shape` CSS property"
short-title: corner-start-end-shape
slug: Web/CSS/Reference/Properties/corner-start-end-shape
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{SeeCompatTable}}

Die **`corner-start-end-shape`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Form der Ecke eines Elements am Blockbeginn und Inlinende innerhalb seines {{cssxref("border-radius")}}-Bereichs fest.

Eine vollständige Beschreibung des Verhaltens der Eckenform und mehrere Beispiele finden Sie auf der Seite der {{cssxref("corner-shape")}}-Kurzschreibweise.

## Syntax

```css
/* Keyword values */
corner-start-end-shape: square;
corner-start-end-shape: bevel;

/* superellipse() function values */
corner-start-end-shape: superellipse(1.5);
corner-start-end-shape: superellipse(-2.2);

/* Global values */
corner-start-end-shape: inherit;
corner-start-end-shape: initial;
corner-start-end-shape: revert;
corner-start-end-shape: revert-layer;
corner-start-end-shape: unset;
```

### Werte

Die `corner-start-end-shape`-Eigenschaft wird mit einem {{cssxref("&lt;corner-shape-value>")}}-Wert angegeben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Andere verwandte Beispiele finden Sie auf der {{cssxref("corner-shape")}}-Referenzseite.

### Grundlegende Verwendung von `corner-start-end-shape`

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}}-Element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Wir geben der Box einige grundlegende Stile, die wir der Kürze halber ausgeblendet haben. Wir wenden auch einen {{cssxref("box-shadow")}}, einen `border-radius` von `20px 40px 60px 80px` und eine `corner-start-end-shape`-Form von `notch` an.

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
  border-radius: 20px 40px 60px 80px;
  corner-start-end-shape: notch;
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

- {{cssxref("corner-shape")}}-Kurzschreibweise
- {{cssxref("corner-start-start-shape")}}, {{cssxref("corner-end-start-shape")}}, und {{cssxref("corner-end-end-shape")}}
- {{cssxref("corner-top-left-shape")}}, {{cssxref("corner-top-right-shape")}}, {{cssxref("corner-bottom-left-shape")}}, und {{cssxref("corner-bottom-right-shape")}}
- {{cssxref("border-radius")}}-Kurzschreibweise
- {{cssxref("border-start-end-radius")}}
- [CSS-Ränder und Box-Dekorationen](/de/docs/Web/CSS/Guides/Borders_and_box_decorations) Modul
- [CSS-Hintergründe und -Ränder](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
