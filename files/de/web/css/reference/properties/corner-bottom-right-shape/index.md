---
title: corner-bottom-right-shape
slug: Web/CSS/Reference/Properties/corner-bottom-right-shape
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

Die **`corner-bottom-right-shape`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt die Form der unteren rechten Ecke einer Box innerhalb ihres {{cssxref("border-radius")}} Bereichs an.

Für eine vollständige Beschreibung des Verhaltens von Eckenformen und mehrere Beispiele siehe die Seite zur Kurzform-Eigenschaft {{cssxref("corner-shape")}}.

## Syntax

```css
/* Keyword values */
corner-bottom-right-shape: notch;
corner-bottom-right-shape: scoop;

/* superellipse() function values */
corner-bottom-right-shape: superellipse(1.7);
corner-bottom-right-shape: superellipse(-3);

/* Global values */
corner-bottom-right-shape: inherit;
corner-bottom-right-shape: initial;
corner-bottom-right-shape: revert;
corner-bottom-right-shape: revert-layer;
corner-bottom-right-shape: unset;
```

### Werte

Die `corner-bottom-right-shape` Eigenschaft wird mit einem {{cssxref("&lt;corner-shape-value>")}} Wert angegeben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Weitere verwandte Beispiele finden Sie auf der Referenzseite {{cssxref("corner-shape")}}.

### Grundlegende Nutzung von `corner-bottom-right-shape`

#### HTML

Das Markup für dieses Beispiel enthält ein einziges {{htmlelement("div")}} Element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Wir geben der Box einige grundlegende Stile, die wir der Kürze halber ausgelassen haben. Wir wenden auch einen {{cssxref("box-shadow")}}, einen `border-radius` von `30% / 20%` und eine `corner-bottom-right-shape` von `notch` an.

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
  border-radius: 30% / 20%;
  corner-bottom-right-shape: notch;
}
```

#### Ergebnis

Das gerenderte Ergebnis sieht wie folgt aus:

{{EmbedLiveSample("basic-usage", "100%", "240")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("corner-shape")}} Kurzform-Eigenschaft
- {{cssxref("corner-top-left-shape")}}, {{cssxref("corner-top-right-shape")}}, und {{cssxref("corner-bottom-left-shape")}}
- {{cssxref("corner-start-start-shape")}}, {{cssxref("corner-start-end-shape")}}, {{cssxref("corner-end-start-shape")}}, und {{cssxref("corner-end-end-shape")}}
- {{cssxref("border-radius")}} Kurzform-Eigenschaft
- {{cssxref("border-bottom-right-radius")}}
- [CSS-Ränder und Box-Dekorationen](/de/docs/Web/CSS/Guides/Borders_and_box_decorations) Modul
- [CSS-Hintergründe und Ränder](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
