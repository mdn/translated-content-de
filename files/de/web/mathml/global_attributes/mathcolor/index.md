---
title: mathcolor
slug: Web/MathML/Global_attributes/mathcolor
l10n:
  sourceCommit: 56a27a0d3cf032771a715fee27ce5325ba859606
---

{{MathMLRef}}{{Deprecated_Header}}

Das **`mathcolor`** [Globalattribut](/de/docs/Web/MathML/Global_attributes) legt die [Farbe](/de/docs/Web/CSS/color) eines MathML-Elements fest.

> [!NOTE]
> Verwenden Sie CSS für das Styling von MathML, wann immer möglich. Das `mathcolor`-Attribut sollte nur für Anwendungen verwendet werden, die CSS nicht unterstützen, und wird durch die CSS-Eigenschaft `color` überschrieben, falls vorhanden.

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
<math mathcolor="currentcolor">

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
  - : Legt die Farbe der Text- und Dekorationsteile des Elements fest,
    einschließlich z.B. Bruchstriche oder Wurzelsymbole.

## Spezifikationen

{{Specifications}}

- In MathML 3 und früheren Versionen wurde ein begrenzter Satz von Werten unterstützt.
  Seit MathML Core entspricht die Syntax den CSS {{cssxref("&lt;color&gt;")}}
  Werten.

- Dieses Attribut wurde für MathML-Anwendungen entwickelt, die CSS nicht unterstützen. Seit MathML Core wird stattdessen die Verwendung von äquivalentem CSS empfohlen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [Globalattribute](/de/docs/Web/MathML/Global_attributes).
- {{cssxref("color")}}
