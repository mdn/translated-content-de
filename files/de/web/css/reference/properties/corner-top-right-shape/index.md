---
title: "`corner-top-right-shape` CSS property"
short-title: corner-top-right-shape
slug: Web/CSS/Reference/Properties/corner-top-right-shape
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{SeeCompatTable}}

Die **`corner-top-right-shape`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Form der oberen rechten Ecke eines Kastens innerhalb seines {{cssxref("border-radius")}}-Bereichs fest.

Eine vollständige Beschreibung des Verhaltens von Eckformen und mehrere Beispiele finden Sie auf der Seite zur {{cssxref("corner-shape")}}-Kurzschreibweise.

## Syntax

```css
/* Keyword values */
corner-top-right-shape: scoop;
corner-top-right-shape: square;

/* superellipse() function values */
corner-top-right-shape: superellipse(2.2);
corner-top-right-shape: superellipse(-2.5);

/* Global values */
corner-top-right-shape: inherit;
corner-top-right-shape: initial;
corner-top-right-shape: revert;
corner-top-right-shape: revert-layer;
corner-top-right-shape: unset;
```

### Werte

Die `corner-top-right-shape`-Eigenschaft wird mit einem {{cssxref("&lt;corner-shape-value>")}}-Wert spezifiziert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Sie finden weitere verwandte Beispiele auf der {{cssxref("corner-shape")}}-Referenzseite.

### Grundlegende Verwendung von `corner-top-right-shape`

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}}-Element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Wir geben dem Kasten einige grundlegende Stile, die wir aus Gründen der Übersichtlichkeit weggelassen haben. Wir wenden auch einen {{cssxref("box-shadow")}}, einen `border-radius` von 60 Pixeln und eine `corner-top-right-shape` von `bevel` an.

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
  border-radius: 60px;
  corner-top-right-shape: bevel;
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
- {{cssxref("corner-top-left-shape")}}, {{cssxref("corner-bottom-left-shape")}}, und {{cssxref("corner-bottom-right-shape")}}
- {{cssxref("corner-start-start-shape")}}, {{cssxref("corner-start-end-shape")}}, {{cssxref("corner-end-start-shape")}}, und {{cssxref("corner-end-end-shape")}}
- {{cssxref("border-radius")}} Kurzschreibweise
- {{cssxref("border-top-right-radius")}}
- [CSS-Kanten und Box-Dekorationen](/de/docs/Web/CSS/Guides/Borders_and_box_decorations)-Modul
- [CSS-Hintergründe und Kanten](/de/docs/Web/CSS/Guides/Backgrounds_and_borders)-Modul
