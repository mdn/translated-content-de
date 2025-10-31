---
title: corner-end-end-shape
slug: Web/CSS/Reference/Properties/corner-end-end-shape
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{SeeCompatTable}}

Die **`corner-end-end-shape`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Form der Ecke eines Blocks am Blockende und Inline-Ende innerhalb seines {{cssxref("border-radius")}}-Bereichs fest.

Für eine vollständige Beschreibung des Verhaltens von Eckenformen und mehrere Beispiele, siehe die {{cssxref("corner-shape")}} Kurzschreibweise-Seite.

## Syntax

```css
/* Keyword values */
corner-end-end-shape: scoop;
corner-end-end-shape: notch;

/* superellipse() function values */
corner-end-end-shape: superellipse(4);
corner-end-end-shape: superellipse(-0.5);

/* Global values */
corner-end-end-shape: inherit;
corner-end-end-shape: initial;
corner-end-end-shape: revert;
corner-end-end-shape: revert-layer;
corner-end-end-shape: unset;
```

### Werte

Die `corner-end-end-shape` Eigenschaft wird mithilfe eines {{cssxref("&lt;corner-shape-value>")}}-Wertes angegeben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Sie können weitere verwandte Beispiele auf der {{cssxref("corner-shape")}} Referenzseite finden.

### Grundlegende Verwendung von `corner-end-end-shape`

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}}-Element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Wir geben der Box einige grundlegende Stile, die wir der Übersichtlichkeit halber ausgeblendet haben. Wir wenden auch einen {{cssxref("box-shadow")}}, einen `border-radius` von 60 Pixeln und eine `corner-end-end-shape`-Einstellung von `squircle` an.

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
  corner-end-end-shape: squircle;
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

- {{cssxref("corner-shape")}} Kurzschreibweise-Eigenschaft
- {{cssxref("corner-start-start-shape")}}, {{cssxref("corner-start-end-shape")}}, und {{cssxref("corner-end-start-shape")}}
- {{cssxref("corner-top-left-shape")}}, {{cssxref("corner-top-right-shape")}}, {{cssxref("corner-bottom-left-shape")}}, und {{cssxref("corner-bottom-right-shape")}}
- {{cssxref("border-radius")}} Kurzschreibweise-Eigenschaft
- {{cssxref("border-end-end-radius")}}
- [CSS borders and box decorations](/de/docs/Web/CSS/CSS_borders_and_box_decorations) Modul
- [CSS backgrounds and borders](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
