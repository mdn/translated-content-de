---
title: mathcolor
slug: Web/MathML/Reference/Global_attributes/mathcolor
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

Das **`mathcolor`** [globale Attribut](/de/docs/Web/MathML/Reference/Global_attributes) legt die [Farbe](/de/docs/Web/CSS/Reference/Properties/color) eines MathML-Elements fest.

> [!NOTE]
> Verwenden Sie wann immer möglich CSS, um MathML zu stylen. Das `mathcolor`-Attribut sollte nur für Anwendungen verwendet werden, die CSS nicht kennen, und es wird durch die CSS-Eigenschaft `color` überschrieben, falls diese gesetzt ist.

## Beispiel

```css hidden
html,
body {
  height: 100%;
}

body {
  display: grid;
  align-items: center;
  font-size: 1.5rem;
}
```

```html
<math display="block">
  <msqrt mathcolor="tomato">
    <mi mathcolor="darkgreen">x</mi>
  </msqrt>
</math>
```

{{EmbedLiveSample("Example", "", 150)}}

## Syntax

```html-nolint
<!-- Keyword values -->
<math mathcolor="currentColor">

<!-- <named-color> values -->
<math mathcolor="red">
<math mathcolor="orange">
<math mathcolor="tan">
<math mathcolor="rebeccapurple">

<!-- <hex-color> values -->
<math mathcolor="#090">
<math mathcolor="#009900">
<math mathcolor="#090a">
<math mathcolor="#009900aa">

<!-- <rgb()> values -->
<math mathcolor="rgb(34, 12, 64, 0.6)">
<math mathcolor="rgb(34 12 64 / 0.6)">
<math mathcolor="rgb(34.6 12 64 / 60%)">

<!-- <hsl()> values -->
<math mathcolor="hsl(30, 100%, 50%, 0.6)">
<math mathcolor="hsl(30 100% 50% / 0.6)">
<math mathcolor="hsl(30.2 100% 50% / 60%)">

<!-- <hwb()> values -->
<math mathcolor="hwb(90 10% 10%)">
<math mathcolor="hwb(90 10% 10% / 0.5)">
<math mathcolor="hwb(90deg 10% 10%)">
<math mathcolor="hwb(1.5708rad 60% 0%)">
<math mathcolor="hwb(.25turn 0% 40% / 50%)">
```

### Werte

- {{cssxref("&lt;color&gt;")}}
  - : Setzt die Farbe der textuellen und dekorativen Teile des Elements, einschließlich z.B. Bruchstrichen oder Wurzelzeichen.

## Spezifikationen

{{Specifications}}

- In MathML 3 und früheren Versionen wurde eine begrenztere Menge an Werten unterstützt. Seit MathML Core stimmt die Syntax mit den CSS-{{cssxref("&lt;color&gt;")}}-Werten überein.

- Dieses Attribut wurde für MathML-Anwendungen entwickelt, die CSS nicht kennen. Seit MathML Core wird empfohlen, stattdessen äquivalentes CSS zu verwenden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/MathML/Reference/Global_attributes).
- {{cssxref("color")}}
