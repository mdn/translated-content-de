---
title: corner-start-start-shape
slug: Web/CSS/corner-start-start-shape
l10n:
  sourceCommit: 28a0409af150dc6d13584302f2e53664fb4ad02f
---

Die **`corner-start-start-shape`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt die Form der Ecke an der blockstart- und inlinestart-Seite eines Kastens innerhalb seines {{cssxref("border-radius")}} Bereichs.

Für eine vollständige Beschreibung des Verhaltens von Ecken und mehrere Beispiele, sehen Sie sich die Seite der {{cssxref("corner-shape")}} Kurzform-Eigenschaft an.

## Syntax

```css
/* Keyword values */
corner-start-start-shape: notch;
corner-start-start-shape: squircle;

/* superellipse() function values */
corner-start-start-shape: superellipse(3);
corner-start-start-shape: superellipse(-1.5);

/* Global values */
corner-start-start-shape: inherit;
corner-start-start-shape: initial;
corner-start-start-shape: revert;
corner-start-start-shape: revert-layer;
corner-start-start-shape: unset;
```

### Werte

Die Eigenschaft `corner-start-start-shape` wird unter Verwendung eines {{cssxref("&lt;corner-shape-value>")}} Werts spezifiziert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Sie können weitere verwandte Beispiele auf der {{cssxref("corner-shape")}} Referenzseite finden.

### Grundlegende Verwendung von `corner-start-start-shape`

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}} Element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Wir geben dem Kasten einige grundlegende Stile, die wir der Übersichtlichkeit halber ausgeblendet haben. Wir wenden auch einen {{cssxref("box-shadow")}}, einen `border-radius` von `40% 10px 10px` und einen `corner-start-start-shape` von `scoop` an.

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
  border-radius: 40% 10px 10px;
  corner-start-start-shape: scoop;
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
- {{cssxref("corner-start-end-shape")}}, {{cssxref("corner-end-start-shape")}}, und {{cssxref("corner-end-end-shape")}}
- {{cssxref("corner-top-left-shape")}}, {{cssxref("corner-top-right-shape")}}, {{cssxref("corner-bottom-left-shape")}}, und {{cssxref("corner-bottom-right-shape")}}
- {{cssxref("border-radius")}} Kurzform-Eigenschaft
- {{cssxref("border-start-start-radius")}}
- [CSS borders and box decorations](/de/docs/Web/CSS/CSS_borders_and_box_decorations) Modul
- [CSS backgrounds and borders](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
