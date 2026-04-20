---
title: "`corner-bottom-right-shape` CSS property"
short-title: corner-bottom-right-shape
slug: Web/CSS/Reference/Properties/corner-bottom-right-shape
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{SeeCompatTable}}

Die **`corner-bottom-right-shape`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert die Form der unteren rechten Ecke eines Kastens innerhalb seines {{cssxref("border-radius")}} Bereichs.

Eine vollständige Beschreibung des Verhaltens von Eckeformen und mehrere Beispiele finden Sie auf der Seite der {{cssxref("corner-shape")}} Kurzschreibweise.

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

Die Eigenschaft `corner-bottom-right-shape` wird unter Verwendung eines {{cssxref("&lt;corner-shape-value>")}} Werts angegeben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Weitere damit zusammenhängende Beispiele finden Sie auf der {{cssxref("corner-shape")}} Referenzseite.

### Grundlegende Verwendung von `corner-bottom-right-shape`

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}}-Element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Wir geben dem Kasten einige grundlegende Stile, die wir der Kürze halber ausgeblendet haben. Wir wenden auch einen {{cssxref("box-shadow")}}, einen `border-radius` von `30% / 20%` und eine `corner-bottom-right-shape` von `notch` an.

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

Das gerenderte Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample("basic-usage", "100%", "240")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("corner-shape")}} Kurzschreibweise
- {{cssxref("corner-top-left-shape")}}, {{cssxref("corner-top-right-shape")}}, und {{cssxref("corner-bottom-left-shape")}}
- {{cssxref("corner-start-start-shape")}}, {{cssxref("corner-start-end-shape")}}, {{cssxref("corner-end-start-shape")}}, und {{cssxref("corner-end-end-shape")}}
- {{cssxref("border-radius")}} Kurzschreibweise
- {{cssxref("border-bottom-right-radius")}}
- [CSS-Module für Rahmen und Box-Dekorationen](/de/docs/Web/CSS/Guides/Borders_and_box_decorations)
- [CSS-Module für Hintergründe und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders)
