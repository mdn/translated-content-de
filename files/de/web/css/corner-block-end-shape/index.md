---
title: corner-block-end-shape
slug: Web/CSS/corner-block-end-shape
l10n:
  sourceCommit: 28a0409af150dc6d13584302f2e53664fb4ad02f
---

Die **`corner-block-end-shape`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt die Form der beiden Ecken an der Block-Ende-Kante eines Kastens innerhalb ihres {{cssxref("border-radius")}} Bereichs an.

Für eine vollständige Beschreibung des Verhaltens von Eckenformen und mehrere Beispiele, siehe die Seite der Kurzform-Eigenschaft {{cssxref("corner-shape")}}.

## Bestandteile der Eigenschaften

Die Eigenschaft `corner-block-end-shape` ist eine Kurzform für die folgenden physikalischen Eigenschaften:

- {{cssxref("corner-end-start-shape")}}
- {{cssxref("corner-end-end-shape")}}

## Syntax

```css
/* Single keyword value set for both corners */
corner-block-end-shape: square;
corner-block-end-shape: scoop;

/* Single superellipse() value set for both corners */
corner-block-end-shape: superellipse(3.5);
corner-block-end-shape: superellipse(-1.9);

/* Block-end/inline-start corner, block-end/inline-end corner */
corner-block-end-shape: square scoop;
corner-block-end-shape: square superellipse(-1.9);

/* Global values */
corner-block-end-shape: inherit;
corner-block-end-shape: initial;
corner-block-end-shape: revert;
corner-block-end-shape: revert-layer;
corner-block-end-shape: unset;
```

### Werte

Die Eigenschaft `corner-block-end-shape` wird mit einem oder zwei {{cssxref("&lt;corner-shape-value>")}} Werten angegeben:

- Wenn **ein Wert** verwendet wird, gibt er die Form der **beiden Block-Ende**-Ecken an.
- Wenn **zwei Werte** verwendet werden, gibt der erste die Form der **Block-Ende/Inline-Start**-Ecke an, und der zweite gibt die Form der **Block-Ende/Inline-Ende**-Ecke an.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Weitere verwandte Beispiele finden Sie auf der Referenzseite {{cssxref("corner-shape")}}.

### Grundlegende Verwendung von `corner-block-end-shape`

#### HTML

Das Markup für dieses Beispiel enthält ein einziges {{htmlelement("div")}} Element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Wir geben dem Kasten einige grundlegende Stile, die wir der Kürze halber weggelassen haben. Wir wenden auch einen {{cssxref("box-shadow")}}, einen `border-radius` von `80px / 40px` und eine `corner-block-end-shape` von `notch square` an.

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
  border-radius: 80px / 40px;
  corner-block-end-shape: notch square;
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
- {{cssxref("corner-block-start-shape")}}, {{cssxref("corner-inline-start-shape")}}, und {{cssxref("corner-inline-end-shape")}}
- {{cssxref("corner-top-shape")}}, {{cssxref("corner-bottom-shape")}}, {{cssxref("corner-left-shape")}}, und {{cssxref("corner-right-shape")}}
- {{cssxref("border-radius")}} Kurzform-Eigenschaft
- {{cssxref("border-end-start-radius")}} und {{cssxref("border-end-end-radius")}}
- [CSS Ränder und Kastenverzierungen](/de/docs/Web/CSS/CSS_borders_and_box_decorations) Modul
- [CSS Hintergründe und Ränder](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
