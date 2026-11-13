---
title: "`corner-end-start-shape` CSS property"
short-title: corner-end-start-shape
slug: Web/CSS/Reference/Properties/corner-end-start-shape
l10n:
  sourceCommit: 25abd448c8a088e9f333360dea0adbe8143e6b86
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`corner-end-start-shape`** legt die Form der Ecke eines Kastens am Block-Ende und Inline-Anfang innerhalb des durch {{cssxref("border-radius")}} definierten Bereichs fest.

Eine vollständige Beschreibung des Verhaltens von Eckenformen und mehrere Beispiele finden Sie auf der Seite zur Kurzschreibweise {{cssxref("corner-shape")}}.

## Syntax

```css
/* Keyword values */
corner-end-start-shape: round;
corner-end-start-shape: scoop;

/* superellipse() function values */
corner-end-start-shape: superellipse(0.2);
corner-end-start-shape: superellipse(-5);

/* Global values */
corner-end-start-shape: inherit;
corner-end-start-shape: initial;
corner-end-start-shape: revert;
corner-end-start-shape: revert-layer;
corner-end-start-shape: unset;
```

### Werte

Die Eigenschaft `corner-end-start-shape` wird mit einem {{cssxref("&lt;corner-shape-value>")}}-Wert angegeben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Weitere zugehörige Beispiele finden Sie auf der Referenzseite zu {{cssxref("corner-shape")}}.

### Grundlegende Verwendung von `corner-end-start-shape`

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}}-Element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Wir geben dem Kasten einige grundlegende Stile, die hier der Kürze halber ausgeblendet sind. Außerdem wenden wir einen {{cssxref("box-shadow")}}, einen `border-radius` von `60px / 20%` und einen `corner-end-start-shape`-Wert von `bevel` an.

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
  border-radius: 60px / 20%;
  corner-end-start-shape: bevel;
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
- {{cssxref("corner-start-start-shape")}}, {{cssxref("corner-start-end-shape")}} und {{cssxref("corner-end-end-shape")}}
- {{cssxref("corner-top-left-shape")}}, {{cssxref("corner-top-right-shape")}}, {{cssxref("corner-bottom-left-shape")}} und {{cssxref("corner-bottom-right-shape")}}
- Kurzschreibweise {{cssxref("border-radius")}}
- {{cssxref("border-end-start-radius")}}
- Modul [CSS-Rahmen und Kastendekorationen](/de/docs/Web/CSS/Guides/Borders_and_box_decorations)
- Modul [CSS-Hintergründe und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders)
