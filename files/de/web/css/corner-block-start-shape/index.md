---
title: corner-block-start-shape
slug: Web/CSS/corner-block-start-shape
l10n:
  sourceCommit: 28a0409af150dc6d13584302f2e53664fb4ad02f
---

Die **`corner-block-start-shape`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert die Form beider Ecken an der Block-Start-Kante eines Kastens innerhalb ihrer {{cssxref("border-radius")}} Fläche.

Für eine vollständige Beschreibung des Verhaltens von Eckenformen und mehrere Beispiele siehe die Seite der {{cssxref("corner-shape")}} Kurzschreibweise.

## Bestandteileigenschaften

Die `corner-block-start-shape` Eigenschaft ist eine Kurzform für die folgenden physikalischen Eigenschaften:

- {{cssxref("corner-start-start-shape")}}
- {{cssxref("corner-start-end-shape")}}

## Syntax

```css
/* Single keyword value set for both corners */
corner-block-start-shape: notch;
corner-block-start-shape: squircle;

/* Single superellipse() value set for both corners */
corner-block-start-shape: superellipse(2.7);
corner-block-start-shape: superellipse(-2.5);

/* Block-start/inline-start corner, block-start/inline-end corner */
corner-block-start-shape: notch squircle;
corner-block-start-shape: notch superellipse(-2.5);

/* Global values */
corner-block-start-shape: inherit;
corner-block-start-shape: initial;
corner-block-start-shape: revert;
corner-block-start-shape: revert-layer;
corner-block-start-shape: unset;
```

### Werte

Die `corner-block-start-shape` Eigenschaft wird mit einem oder zwei {{cssxref("&lt;corner-shape-value>")}} Werten angegeben:

- Wenn **ein Wert** verwendet wird, spezifiziert er die Form beider **Block-Start** Ecken.
- Wenn **zwei Werte** verwendet werden, spezifiziert der erste die Form der **Block-Start/Inline-Start** Ecke und der zweite die Form der **Block-Start/Inline-Ende** Ecke.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Sie finden weitere verwandte Beispiele auf der {{cssxref("corner-shape")}} Referenzseite.

### Grundlegende Verwendung von `corner-block-start-shape`

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}} Element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Wir geben dem Kasten einige grundlegende Stile, die wir der Übersichtlichkeit halber ausgeblendet haben. Wir wenden auch einen {{cssxref("box-shadow")}}, einen `border-radius` von `40px 60px` und eine `corner-block-start-shape` von `scoop notch` an.

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
  border-radius: 40px 60px;
  corner-block-start-shape: scoop notch;
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
- {{cssxref("corner-block-end-shape")}}, {{cssxref("corner-inline-start-shape")}}, und {{cssxref("corner-inline-end-shape")}}
- {{cssxref("corner-top-shape")}}, {{cssxref("corner-bottom-shape")}}, {{cssxref("corner-left-shape")}}, und {{cssxref("corner-right-shape")}}
- {{cssxref("border-radius")}} Kurzschreibweise
- {{cssxref("border-start-start-radius")}} und {{cssxref("border-start-end-radius")}}
- [CSS Ränder und Kastenverzierungen](/de/docs/Web/CSS/CSS_borders_and_box_decorations) Modul
- [CSS Hintergründe und Ränder](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
