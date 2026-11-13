---
title: "`corner-start-end-shape` CSS property"
short-title: corner-start-end-shape
slug: Web/CSS/Reference/Properties/corner-start-end-shape
l10n:
  sourceCommit: 25abd448c8a088e9f333360dea0adbe8143e6b86
---

Die **CSS-Eigenschaft `corner-start-end-shape`** legt die Form der Ecke eines Kastens an der Block-Startseite und der Inline-Endseite innerhalb des durch {{cssxref("border-radius")}} definierten Bereichs fest.

Eine ausführliche Beschreibung des Verhaltens von Eckenformen und mehrere Beispiele finden Sie auf der Seite zur Kurzschreibweise {{cssxref("corner-shape")}}.

## Syntax

```css
/* Keyword values */
corner-start-end-shape: square;
corner-start-end-shape: bevel;

/* superellipse() function values */
corner-start-end-shape: superellipse(1.5);
corner-start-end-shape: superellipse(-2.2);

/* Global values */
corner-start-end-shape: inherit;
corner-start-end-shape: initial;
corner-start-end-shape: revert;
corner-start-end-shape: revert-layer;
corner-start-end-shape: unset;
```

### Werte

Die Eigenschaft `corner-start-end-shape` wird mit einem Wert vom Typ {{cssxref("&lt;corner-shape-value>")}} angegeben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Weitere Beispiele finden Sie auf der Referenzseite zu {{cssxref("corner-shape")}}.

### Grundlegende Verwendung von `corner-start-end-shape`

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}}-Element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Wir versehen den Kasten mit einigen grundlegenden Stilen, die hier der Kürze halber nicht gezeigt werden. Außerdem wenden wir einen {{cssxref("box-shadow")}}, einen `border-radius` von `20px 40px 60px 80px` und einen `corner-start-end-shape` von `notch` an.

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
  border-radius: 20px 40px 60px 80px;
  corner-start-end-shape: notch;
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
- {{cssxref("corner-start-start-shape")}}, {{cssxref("corner-end-start-shape")}} und {{cssxref("corner-end-end-shape")}}
- {{cssxref("corner-top-left-shape")}}, {{cssxref("corner-top-right-shape")}}, {{cssxref("corner-bottom-left-shape")}} und {{cssxref("corner-bottom-right-shape")}}
- Kurzschreibweise {{cssxref("border-radius")}}
- {{cssxref("border-start-end-radius")}}
- Modul [CSS-Rahmen und Kastendekorationen](/de/docs/Web/CSS/Guides/Borders_and_box_decorations)
- Modul [CSS-Hintergründe und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders)
