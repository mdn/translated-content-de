---
title: mathcolor
slug: Web/MathML/Reference/Global_attributes/mathcolor
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

{{Deprecated_Header}}

Das **`mathcolor`** [Globale Attribut](/de/docs/Web/MathML/Reference/Global_attributes) setzt die [Farbe](/de/docs/Web/CSS/color) eines MathML-Elements.

> [!NOTE]
> Verwenden Sie wann immer möglich CSS für die Gestaltung von MathML. Das `mathcolor`-Attribut sollte nur in Anwendungen verwendet werden, die CSS nicht unterstützen, und es wird von der CSS-Eigenschaft `color` überschrieben, wenn diese gesetzt ist.

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
  - : Setzt die Farbe der textuellen und dekorativen Teile des Elements, einschließlich z.B. Bruchstriche oder Radikalsymbole.

## Spezifikationen

{{Specifications}}

- In MathML 3 und früheren Versionen wurde ein begrenzteres Set an Werten unterstützt. Seit MathML Core entspricht die Syntax den CSS {{cssxref("&lt;color&gt;")}}-Werten.

- Dieses Attribut wurde für MathML-Anwendungen entwickelt, die CSS nicht unterstützen. Seit MathML Core wird stattdessen die Verwendung von äquivalentem CSS empfohlen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/MathML/Reference/Global_attributes).
- {{cssxref("color")}}
