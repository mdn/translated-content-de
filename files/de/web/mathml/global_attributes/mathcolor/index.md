---
title: mathcolor
slug: Web/MathML/Global_attributes/mathcolor
l10n:
  sourceCommit: 34c43aca36f776c824e698dfd07e3ece34cc6f00
---

{{MathMLRef}}{{Deprecated_Header}}

Das **`mathcolor`** [globale Attribut](/de/docs/Web/MathML/Global_attributes) setzt die [Farbe](/de/docs/Web/CSS/color) eines MathML-Elements.

> [!NOTE]
> Verwenden Sie wann immer möglich CSS zur Gestaltung von MathML. Das `mathcolor`-Attribut sollte nur für Anwendungen einbezogen werden, die CSS nicht kennen, und wird von der CSS-`color`-Eigenschaft überschrieben, falls diese gesetzt ist.

## Syntax

```html-nolint
<!-- Schlüsselwort-Werte -->
<math mathcolor="currentcolor">

<!-- <named-color> Werte -->
<math mathcolor="red">
<math mathcolor="orange">
<math mathcolor="tan">
<math mathcolor="rebeccapurple">

<!-- <hex-color> Werte -->
<math mathcolor="#090">
<math mathcolor="#009900">
<math mathcolor="#090a">
<math mathcolor="#009900aa">

<!-- <rgb()> Werte -->
<math mathcolor="rgb(34, 12, 64, 0.6)">
<math mathcolor="rgb(34 12 64 / 0.6)">
<math mathcolor="rgb(34.6 12 64 / 60%)">

<!-- <hsl()> Werte -->
<math mathcolor="hsl(30, 100%, 50%, 0.6)">
<math mathcolor="hsl(30 100% 50% / 0.6)">
<math mathcolor="hsl(30.2 100% 50% / 60%)">

<!-- <hwb()> Werte -->
<math mathcolor="hwb(90 10% 10%)">
<math mathcolor="hwb(90 10% 10% / 0.5)">
<math mathcolor="hwb(90deg 10% 10%)">
<math mathcolor="hwb(1.5708rad 60% 0%)">
<math mathcolor="hwb(.25turn 0% 40% / 50%)">
```

### Werte

- {{cssxref("&lt;color&gt;")}}
  - : Setzt die Farbe der textuellen und dekorativen Teile des Elements,
    einschließlich z.B. Bruchstrichen oder Wurzelsymbolen.

## Spezifikationen

{{Specifications}}

- In MathML 3 und früheren Versionen wurde ein eingeschränkter Satz von Werten unterstützt. Seit MathML Core entspricht die Syntax den CSS-{{cssxref("&lt;color&gt;")}}-Werten.

- Dieses Attribut wurde für MathML-Anwendungen konzipiert, die CSS nicht kennen. Seit MathML Core wird stattdessen die Verwendung von äquivalentem CSS empfohlen.

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/MathML/Global_attributes).
- {{cssxref("color")}}
