---
title: corner-bottom-left-shape
slug: Web/CSS/Reference/Properties/corner-bottom-left-shape
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

Die **`corner-bottom-left-shape`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt die Form der unteren linken Ecke eines Rahmens innerhalb des {{cssxref("border-radius")}} Bereichs an.

Eine vollständige Beschreibung des Verhaltens von Eckformen und mehrere Beispiele finden Sie auf der Seite zur Kurzform-Eigenschaft {{cssxref("corner-shape")}}.

## Syntax

```css
/* Keyword values */
corner-bottom-left-shape: bevel;
corner-bottom-left-shape: round;

/* superellipse() function values */
corner-bottom-left-shape: superellipse(0.7);
corner-bottom-left-shape: superellipse(-1.9);

/* Global values */
corner-bottom-left-shape: inherit;
corner-bottom-left-shape: initial;
corner-bottom-left-shape: revert;
corner-bottom-left-shape: revert-layer;
corner-bottom-left-shape: unset;
```

### Werte

Die `corner-bottom-left-shape` Eigenschaft wird mit einem {{cssxref("&lt;corner-shape-value>")}} Wert angegeben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Weitere verwandte Beispiele finden Sie auf der {{cssxref("corner-shape")}} Referenzseite.

### Grundlegende Verwendung von `corner-bottom-left-shape`

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}} Element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Wir geben dem Kasten einige grundlegende Stile, die wir der Kürze halber ausgeblendet haben. Wir wenden auch einen {{cssxref("box-shadow")}}, einen `border-radius` von `80px 40% 60px 20%` und eine `corner-bottom-left-shape` von `squircle` an.

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
  border-radius: 80px 40% 60px 20%;
  corner-bottom-left-shape: squircle;
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
- {{cssxref("corner-top-left-shape")}}, {{cssxref("corner-top-right-shape")}}, und {{cssxref("corner-bottom-right-shape")}}
- {{cssxref("corner-start-start-shape")}}, {{cssxref("corner-start-end-shape")}}, {{cssxref("corner-end-start-shape")}}, und {{cssxref("corner-end-end-shape")}}
- {{cssxref("border-radius")}} Kurzform-Eigenschaft
- {{cssxref("border-bottom-left-radius")}}
- [CSS-Ränder und -Rahmenverzierungen](/de/docs/Web/CSS/Guides/Borders_and_box_decorations) Modul
- [CSS-Hintergründe und -Ränder](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
