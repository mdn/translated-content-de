---
title: corner-end-start-shape
slug: Web/CSS/Reference/Properties/corner-end-start-shape
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{SeeCompatTable}}

Die **`corner-end-start-shape`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt die Form der Block-Ende- und Inline-Start-Ecke eines Kastens an, innerhalb seines {{cssxref("border-radius")}} Bereichs.

Eine vollständige Beschreibung des Verhaltens von Eckformen und mehrere Beispiele finden Sie auf der Seite der {{cssxref("corner-shape")}}-Kurzschreibweise.

## Syntax

```css
/* Keyword values */
corner-end-start-shape: round;
corner-end-start-shape: scoop;

/* superellipse() function values */
corner-end-start-shape: superellipse(0.2);
corner-end-start-shape: superellipse(-5);

/* Global values */
corner-end-start-shape: inherit;
corner-end-start-shape: initial;
corner-end-start-shape: revert;
corner-end-start-shape: revert-layer;
corner-end-start-shape: unset;
```

### Werte

Die `corner-end-start-shape` Eigenschaft wird mit einem {{cssxref("&lt;corner-shape-value>")}} Wert spezifiziert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Weitere verwandte Beispiele finden Sie auf der {{cssxref("corner-shape")}} Referenzseite.

### Grundlegende Verwendung von `corner-end-start-shape`

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}} Element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Wir geben dem Kasten einige grundlegende Stile, die wir aus Gründen der Übersichtlichkeit ausgeblendet haben. Wir wenden auch einen {{cssxref("box-shadow")}}, einen `border-radius` von `60px / 20%` und eine `corner-end-start-shape` von `bevel` an.

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
  border-radius: 60px / 20%;
  corner-end-start-shape: bevel;
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
- {{cssxref("corner-start-start-shape")}}, {{cssxref("corner-start-end-shape")}}, und {{cssxref("corner-end-end-shape")}}
- {{cssxref("corner-top-left-shape")}}, {{cssxref("corner-top-right-shape")}}, {{cssxref("corner-bottom-left-shape")}}, und {{cssxref("corner-bottom-right-shape")}}
- {{cssxref("border-radius")}} Kurzschreibweise
- {{cssxref("border-end-start-radius")}}
- [CSS Borders und Box-Dekorationen](/de/docs/Web/CSS/CSS_borders_and_box_decorations) Modul
- [CSS Hintergründe und Border](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
