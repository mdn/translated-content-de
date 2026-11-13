---
title: "`corner-inline-end-shape` CSS property"
short-title: corner-inline-end-shape
slug: Web/CSS/Reference/Properties/corner-inline-end-shape
l10n:
  sourceCommit: 25abd448c8a088e9f333360dea0adbe8143e6b86
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`corner-inline-end-shape`** legt die Form der beiden Ecken an der Inline-End-Kante einer Box innerhalb ihres {{cssxref("border-radius")}}-Bereichs fest.

Eine vollständige Beschreibung des Verhaltens von Eckformen und mehrere Beispiele finden Sie auf der Seite zur Kurzschreibweise {{cssxref("corner-shape")}}.

## Enthaltene Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden logischen Eigenschaften:

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

Die Eigenschaft `corner-inline-end-shape` wird mit einem oder zwei {{cssxref("&lt;corner-shape-value>")}}-Werten angegeben:

- Bei **einem Wert** legt dieser die Form **beider Ecken an der Inline-End-Kante** fest.
- Bei **zwei Werten** legt der erste die Form der **Block-Start-/Inline-End-Ecke** und der zweite die Form der **Block-End-/Inline-End-Ecke** fest.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Weitere Beispiele finden Sie auf der Referenzseite zu {{cssxref("corner-shape")}}.

### Grundlegende Verwendung von `corner-inline-end-shape`

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}}-Element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Wir geben der Box einige grundlegende Styles, die wir der Kürze halber ausgeblendet haben. Außerdem wenden wir einen {{cssxref("box-shadow")}}, einen `border-radius` von `15% 30%` und einen `corner-inline-end-shape`-Wert von `bevel squircle` an.

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

Das gerenderte Ergebnis sieht so aus:

{{EmbedLiveSample("basic-usage", "100%", "240")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Kurzschreibweise {{cssxref("corner-shape")}}
- {{cssxref("corner-block-start-shape")}}, {{cssxref("corner-block-end-shape")}} und {{cssxref("corner-inline-start-shape")}}
- {{cssxref("corner-top-shape")}}, {{cssxref("corner-bottom-shape")}}, {{cssxref("corner-left-shape")}} und {{cssxref("corner-right-shape")}}
- Kurzschreibweise {{cssxref("border-radius")}}
- {{cssxref("border-start-end-radius")}} und {{cssxref("border-end-end-radius")}}
- Modul [CSS-Rahmen und Box-Dekorationen](/de/docs/Web/CSS/Guides/Borders_and_box_decorations)
- Modul [CSS-Hintergründe und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders)
