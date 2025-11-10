---
title: mathbackground
slug: Web/MathML/Reference/Global_attributes/mathbackground
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{Deprecated_Header}}

Das **`mathbackground`** [globale Attribut](/de/docs/Web/MathML/Reference/Global_attributes) legt die [Hintergrundfarbe](/de/docs/Web/CSS/Reference/Properties/background-color) eines MathML-Elements fest.

> [!NOTE]
> Verwenden Sie wann immer möglich CSS zur Gestaltung von MathML. Das `mathbackground`-Attribut sollte nur für Anwendungen verwendet werden, die CSS nicht verstehen. Falls gesetzt, wird es durch den Wert der CSS-Eigenschaft `background-color` überschrieben.

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
<math display="block" mathbackground="wheat">
  <msqrt>
    <mi>x</mi>
  </msqrt>
</math>
```

{{EmbedLiveSample("Example", "", 150)}}

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

- In MathML 3 und früheren Versionen wurde nur eine begrenzte Menge an Werten unterstützt.
  Seit MathML Core entspricht die Syntax den CSS {{cssxref("&lt;color&gt;")}} Werten.

- Dieses Attribut wurde für MathML-Anwendungen entworfen, die CSS nicht verstehen. Seit MathML Core wird die Verwendung des entsprechenden CSS empfohlen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/MathML/Reference/Global_attributes).
- {{cssxref("background-color")}}
