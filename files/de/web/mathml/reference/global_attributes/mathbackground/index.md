---
title: mathbackground
slug: Web/MathML/Reference/Global_attributes/mathbackground
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

{{Deprecated_Header}}

Das **`mathbackground`** [globale Attribut](/de/docs/Web/MathML/Reference/Global_attributes) legt die [Hintergrundfarbe](/de/docs/Web/CSS/background-color) eines MathML-Elements fest.

> [!NOTE]
> Verwenden Sie CSS zum Stylen von MathML wann immer möglich. Das `mathbackground`-Attribut sollte nur in Anwendungen verwendet werden, die CSS nicht unterstützen, und wird durch den CSS-Wert der `background-color`-Eigenschaft überschrieben, falls gesetzt.

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

- In MathML 3 und früheren Versionen wurde eine begrenzte Menge an Werten unterstützt.
  Seit MathML Core entspricht die Syntax den CSS-{{cssxref("&lt;color&gt;")}}
  Werten.

- Dieses Attribut wurde für MathML-Anwendungen entwickelt, die CSS nicht unterstützen.
  Seit MathML Core wird stattdessen die Verwendung von äquivalentem CSS empfohlen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/MathML/Reference/Global_attributes).
- {{cssxref("background-color")}}
