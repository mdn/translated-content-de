---
title: "`corner-bottom-shape` CSS property"
short-title: corner-bottom-shape
slug: Web/CSS/Reference/Properties/corner-bottom-shape
l10n:
  sourceCommit: 25abd448c8a088e9f333360dea0adbe8143e6b86
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`corner-bottom-shape`** legt die Form der beiden Ecken an der unteren Kante einer Box innerhalb ihrer durch {{cssxref("border-radius")}} definierten Bereiche fest.

Eine ausführliche Beschreibung des Verhaltens von Eckenformen und mehrere Beispiele finden Sie auf der Seite zur Kurzschreibweise {{cssxref("corner-shape")}}.

## Zugehörige Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden physischen Eigenschaften:

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

Die Eigenschaft `corner-bottom-shape` wird mit einem oder zwei {{cssxref("&lt;corner-shape-value>")}}-Werten angegeben:

- Bei **einem Wert** legt dieser die Form **beider unteren Ecken** fest.
- Bei **zwei Werten** legt der erste die Form der **unteren linken** Ecke und der zweite die Form der **unteren rechten** Ecke fest.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Weitere Beispiele finden Sie auf der Referenzseite zu {{cssxref("corner-shape")}}.

### Grundlegende Verwendung von `corner-bottom-shape`

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}}-Element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Wir geben der Box einige grundlegende Stile, die hier der Kürze halber nicht gezeigt werden. Außerdem wenden wir einen {{cssxref("box-shadow")}}, einen `border-radius` von `60px 30px 20% 40%` und einen `corner-bottom-shape` von `square squircle` an.

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

- Kurzschreibweise {{cssxref("corner-shape")}}
- {{cssxref("corner-top-shape")}}, {{cssxref("corner-left-shape")}} und {{cssxref("corner-right-shape")}}
- {{cssxref("corner-block-start-shape")}}, {{cssxref("corner-block-end-shape")}}, {{cssxref("corner-inline-start-shape")}} und {{cssxref("corner-inline-end-shape")}}
- Kurzschreibweise {{cssxref("border-radius")}}
- {{cssxref("border-bottom-left-radius")}} und {{cssxref("border-bottom-right-radius")}}
- Modul [CSS-Rahmen und Box-Dekorationen](/de/docs/Web/CSS/Guides/Borders_and_box_decorations)
- Modul [CSS-Hintergründe und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders)
