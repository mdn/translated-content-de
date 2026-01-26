---
title: corner-inline-end-shape
slug: Web/CSS/Reference/Properties/corner-inline-end-shape
l10n:
  sourceCommit: 133c1628ead5b32660a0096ea7b3881637dc355c
---

{{SeeCompatTable}}

Die **`corner-inline-end-shape`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Form beider Ecken an der Inline-Endkante eines Kastens innerhalb ihres {{cssxref("border-radius")}} Bereichs fest.

Für eine vollständige Beschreibung des Eckverhaltens und mehrere Beispiele sehen Sie bitte die Seite der Kurzschrift-Eigenschaft {{cssxref("corner-shape")}}.

## Zusammengesetzte Eigenschaften

Die `corner-inline-end-shape` Eigenschaft ist eine Kurzschrift für die folgenden logischen Eigenschaften:

- {{cssxref("corner-start-end-shape")}}
- {{cssxref("corner-end-end-shape")}}

## Syntax

```css
/* Single keyword value set for both corners */
corner-inline-end-shape: squircle;
corner-inline-end-shape: scoop;

/* Single superellipse() value set for both corners */
corner-inline-end-shape: superellipse(1.5);
corner-inline-end-shape: superellipse(-0.8);

/* Block-start/inline-end corner, block-end/inline-end corner */
corner-inline-end-shape: squircle scoop;
corner-inline-end-shape: squircle superellipse(-0.8);

/* Global values */
corner-inline-end-shape: inherit;
corner-inline-end-shape: initial;
corner-inline-end-shape: revert;
corner-inline-end-shape: revert-layer;
corner-inline-end-shape: unset;
```

### Werte

Die `corner-inline-end-shape` Eigenschaft wird mit einem oder zwei {{cssxref("&lt;corner-shape-value>")}} Werten spezifiziert:

- Wenn **ein Wert** verwendet wird, spezifiziert er die Form beider **inline-end** Ecken.
- Wenn **zwei Werte** verwendet werden, gibt der erste die Form der **block-start/inline-end** Ecke an, und der zweite die Form der **block-end/inline-end** Ecke.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Sie können weitere verwandte Beispiele auf der {{cssxref("corner-shape")}} Referenzseite finden.

### Grundlegende Verwendung von `corner-inline-end-shape`

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}} Element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Wir geben der Box einige grundlegende Stile, die wir aus Platzgründen ausgeblendet haben. Wir verwenden außerdem einen {{cssxref("box-shadow")}}, einen `border-radius` von `15% 30%` und eine `corner-inline-end-shape` von `bevel squircle`.

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
  border-radius: 15% 30%;
  corner-inline-end-shape: bevel squircle;
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

- {{cssxref("corner-shape")}} Kurzschrift-Eigenschaft
- {{cssxref("corner-block-start-shape")}}, {{cssxref("corner-block-end-shape")}} und {{cssxref("corner-inline-start-shape")}}
- {{cssxref("corner-top-shape")}}, {{cssxref("corner-bottom-shape")}}, {{cssxref("corner-left-shape")}} und {{cssxref("corner-right-shape")}}
- {{cssxref("border-radius")}} Kurzschrift-Eigenschaft
- {{cssxref("border-start-end-radius")}} und {{cssxref("border-end-end-radius")}}
- [CSS Rahmen und Boxdekorationen](/de/docs/Web/CSS/Guides/Borders_and_box_decorations) Modul
- [CSS Hintergründe und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
