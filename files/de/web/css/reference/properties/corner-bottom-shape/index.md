---
title: corner-bottom-shape
slug: Web/CSS/Reference/Properties/corner-bottom-shape
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

Die **`corner-bottom-shape`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt die Form beider Ecken an der unteren Kante eines Kastens innerhalb ihres {{cssxref("border-radius")}} Bereichs an.

Für eine vollständige Beschreibung des Verhaltens der Eckformen und mehrere Beispiele siehe die Seite der {{cssxref("corner-shape")}} Kurzeigenschaft.

## Zusammengesetzte Eigenschaften

Die `corner-bottom-shape` Eigenschaft ist eine Kurzschreibweise für die folgenden physischen Eigenschaften:

- {{cssxref("corner-bottom-left-shape")}}
- {{cssxref("corner-bottom-right-shape")}}

## Syntax

```css
/* Single keyword value set for both corners */
corner-bottom-shape: scoop;
corner-bottom-shape: square;

/* Single superellipse() value set for both corners */
corner-bottom-shape: superellipse(0.7);
corner-bottom-shape: superellipse(-2.8);

/* Left-hand corner, right-hand corner */
corner-bottom-shape: scoop square;
corner-bottom-shape: scoop superellipse(0.7);

/* Global values */
corner-bottom-shape: inherit;
corner-bottom-shape: initial;
corner-bottom-shape: revert;
corner-bottom-shape: revert-layer;
corner-bottom-shape: unset;
```

### Werte

Die `corner-bottom-shape` Eigenschaft wird unter Verwendung von einem oder zwei {{cssxref("&lt;corner-shape-value>")}} Werten angegeben:

- Wenn **ein Wert** verwendet wird, gibt er die Form **beider unterer Ecken** an.
- Wenn **zwei Werte** verwendet werden, gibt der erste die Form der **unten-links** Ecke an und der zweite die Form der **unten-rechts** Ecke.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Sie können weitere verwandte Beispiele auf der {{cssxref("corner-shape")}} Referenzseite finden.

### Grundlegende Verwendung von `corner-bottom-shape`

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}} Element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Wir geben dem Kasten einige grundlegende Stile, die wir der Kürze halber ausgeblendet haben. Wir wenden auch einen {{cssxref("box-shadow")}} an, einen `border-radius` von `60px 30px 20% 40%` und einen `corner-bottom-shape` von `square squircle`.

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
  border-radius: 60px 30px 20% 40%;
  corner-bottom-shape: square squircle;
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

- {{cssxref("corner-shape")}} Kurzeigenschaft
- {{cssxref("corner-top-shape")}}, {{cssxref("corner-left-shape")}}, und {{cssxref("corner-right-shape")}}
- {{cssxref("corner-block-start-shape")}}, {{cssxref("corner-block-end-shape")}}, {{cssxref("corner-inline-start-shape")}}, und {{cssxref("corner-inline-end-shape")}}
- {{cssxref("border-radius")}} Kurzeigenschaft
- {{cssxref("border-bottom-left-radius")}} und {{cssxref("border-bottom-right-radius")}}
- [CSS Rahmen und Box-Dekorationen](/de/docs/Web/CSS/Guides/Borders_and_box_decorations) Modul
- [CSS Hintergründe und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
