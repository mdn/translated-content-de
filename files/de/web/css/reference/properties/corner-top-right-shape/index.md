---
title: "`corner-top-right-shape` CSS property"
short-title: corner-top-right-shape
slug: Web/CSS/Reference/Properties/corner-top-right-shape
l10n:
  sourceCommit: 25abd448c8a088e9f333360dea0adbe8143e6b86
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`corner-top-right-shape`** legt die Form der oberen rechten Ecke einer Box innerhalb ihres {{cssxref("border-radius")}}-Bereichs fest.

Eine ausführliche Beschreibung des Verhaltens von Eckenformen und mehrere Beispiele finden Sie auf der Seite zur Kurzschreibweise {{cssxref("corner-shape")}}.

## Syntax

```css
/* Keyword values */
corner-top-right-shape: scoop;
corner-top-right-shape: square;

/* superellipse() function values */
corner-top-right-shape: superellipse(2.2);
corner-top-right-shape: superellipse(-2.5);

/* Global values */
corner-top-right-shape: inherit;
corner-top-right-shape: initial;
corner-top-right-shape: revert;
corner-top-right-shape: revert-layer;
corner-top-right-shape: unset;
```

### Werte

Die Eigenschaft `corner-top-right-shape` wird mit einem {{cssxref("&lt;corner-shape-value>")}}-Wert angegeben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Weitere Beispiele finden Sie auf der Referenzseite zu {{cssxref("corner-shape")}}.

### Grundlegende Verwendung von `corner-top-right-shape`

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}}-Element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Wir geben der Box einige grundlegende Formatierungen, die wir der Kürze halber ausgeblendet haben. Außerdem wenden wir einen {{cssxref("box-shadow")}}, einen `border-radius` von 60 Pixeln und einen `corner-top-right-shape`-Wert von `bevel` an.

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
  corner-top-right-shape: bevel;
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
- {{cssxref("corner-top-left-shape")}}, {{cssxref("corner-bottom-left-shape")}} und {{cssxref("corner-bottom-right-shape")}}
- {{cssxref("corner-start-start-shape")}}, {{cssxref("corner-start-end-shape")}}, {{cssxref("corner-end-start-shape")}} und {{cssxref("corner-end-end-shape")}}
- Kurzschreibweise {{cssxref("border-radius")}}
- {{cssxref("border-top-right-radius")}}
- Modul [CSS-Rahmen und Box-Dekorationen](/de/docs/Web/CSS/Guides/Borders_and_box_decorations)
- Modul [CSS-Hintergründe und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders)
