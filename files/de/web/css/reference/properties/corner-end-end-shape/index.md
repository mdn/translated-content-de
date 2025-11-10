---
title: corner-end-end-shape
slug: Web/CSS/Reference/Properties/corner-end-end-shape
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

Die **`corner-end-end-shape`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert die Form der block-end und inline-end Ecke eines Kastens innerhalb seines {{cssxref("border-radius")}} Bereichs.

Für eine vollständige Beschreibung des Verhaltens der Eckform und mehrere Beispiele, siehe die Seite zur Kurzform der {{cssxref("corner-shape")}} Eigenschaft.

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

Die `corner-end-end-shape` Eigenschaft wird unter Verwendung eines {{cssxref("&lt;corner-shape-value>")}} Wertes spezifiziert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Weitere verwandte Beispiele finden Sie auf der Referenzseite von {{cssxref("corner-shape")}}.

### Grundlegende Verwendung von `corner-end-end-shape`

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}} Element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Wir geben dem Kasten einige grundlegende Stile, die wir der Kürze halber ausgeblendet haben. Wir wenden auch einen {{cssxref("box-shadow")}}, einen `border-radius` von 60 Pixeln und eine `corner-end-end-shape` von `squircle` an.

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

Das gerenderte Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample("basic-usage", "100%", "240")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("corner-shape")}} Kurzform-Eigenschaft
- {{cssxref("corner-start-start-shape")}}, {{cssxref("corner-start-end-shape")}}, und {{cssxref("corner-end-start-shape")}}
- {{cssxref("corner-top-left-shape")}}, {{cssxref("corner-top-right-shape")}}, {{cssxref("corner-bottom-left-shape")}}, und {{cssxref("corner-bottom-right-shape")}}
- {{cssxref("border-radius")}} Kurzform-Eigenschaft
- {{cssxref("border-end-end-radius")}}
- [CSS borders and box decorations](/de/docs/Web/CSS/Guides/Borders_and_box_decorations) Modul
- [CSS backgrounds and borders](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
