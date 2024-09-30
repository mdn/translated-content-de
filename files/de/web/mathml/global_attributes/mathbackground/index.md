---
title: mathbackground
slug: Web/MathML/Global_attributes/mathbackground
l10n:
  sourceCommit: 34c43aca36f776c824e698dfd07e3ece34cc6f00
---

{{MathMLRef}}{{Deprecated_Header}}

Das **`mathbackground`** [globale Attribut](/de/docs/Web/MathML/Global_attributes) setzt die [Hintergrundfarbe](/de/docs/Web/CSS/background-color) eines MathML-Elements.

> [!NOTE]
> Verwenden Sie nach Möglichkeit CSS, um MathML zu stylen. Das `mathbackground`-Attribut sollte nur für Anwendungen einbezogen werden, die CSS nicht unterstützen, und wird durch den CSS-Wert der `background-color`-Eigenschaft überschrieben, falls gesetzt.

## Syntax

```html-nolint
<!-- Keyword values -->
<math mathbackground="red">
<math mathbackground="indigo">

<!-- Hexadecimal value -->
<math mathbackground="#bbff00"> <!-- Fully opaque -->
<math mathbackground="#bf0"> <!-- Fully opaque shorthand -->
<math mathbackground="#11ffee00"> <!-- Fully transparent -->
<math mathbackground="#1fe0"> <!-- Fully transparent shorthand -->
<math mathbackground="#11ffeeff"> <!-- Fully opaque -->
<math mathbackground="#1fef"> <!-- Fully opaque shorthand -->

<!-- RGB value -->
<math mathbackground="rgb(255 255 128)"> <!-- Fully opaque -->
<math mathbackground="rgb(117 190 218 / 50%)"> <!-- 50% transparent -->

<!-- HSL value -->
<math mathbackground="hsl(50 33% 25%)"> <!-- Fully opaque -->
<math mathbackground="hsl(50 33% 25% / 75%)"> <!-- 75% opaque, i.e. 25% transparent -->
```

### Werte

- {{cssxref("&lt;color&gt;")}}
  - : Die einheitliche Farbe des Hintergrunds.

## Spezifikationen

{{Specifications}}

- In MathML 3 und früheren Versionen wurde ein begrenzteres Set von Werten unterstützt. Seit MathML Core entspricht die Syntax den CSS-{{cssxref("&lt;color&gt;")}}-Werten.

- Dieses Attribut wurde für MathML-Anwendungen entworfen, die CSS nicht unterstützen. Seit MathML Core wird stattdessen die Verwendung des entsprechenden CSS empfohlen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/MathML/Global_attributes).
- {{cssxref("background-color")}}
