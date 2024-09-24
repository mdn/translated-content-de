---
title: mathbackground
slug: Web/MathML/Global_attributes/mathbackground
l10n:
  sourceCommit: 34c43aca36f776c824e698dfd07e3ece34cc6f00
---

{{MathMLRef}}{{Deprecated_Header}}

Das **`mathbackground`** [globale Attribut](/de/docs/Web/MathML/Global_attributes) legt die [Hintergrundfarbe](/de/docs/Web/CSS/background-color) eines MathML-Elements fest.

> [!NOTE]
> Verwenden Sie wann immer möglich CSS, um MathML zu stylen. Das `mathbackground`-Attribut sollte nur in Anwendungen benutzt werden, die CSS nicht unterstützen. Es wird durch den CSS-Wert der `background-color`-Eigenschaft überschrieben, wenn dieser gesetzt ist.

## Syntax

```html-nolint
<!-- Keyword-Werte -->
<math mathbackground="red">
<math mathbackground="indigo">

<!-- Hexadezimalwert -->
<math mathbackground="#bbff00"> <!-- Vollständig deckend -->
<math mathbackground="#bf0"> <!-- Vollständig deckendes Kurzformat -->
<math mathbackground="#11ffee00"> <!-- Vollständig transparent -->
<math mathbackground="#1fe0"> <!-- Vollständig transparentes Kurzformat -->
<math mathbackground="#11ffeeff"> <!-- Vollständig deckend -->
<math mathbackground="#1fef"> <!-- Vollständig deckendes Kurzformat -->

<!-- RGB-Wert -->
<math mathbackground="rgb(255 255 128)"> <!-- Vollständig deckend -->
<math mathbackground="rgb(117 190 218 / 50%)"> <!-- 50% transparent -->

<!-- HSL-Wert -->
<math mathbackground="hsl(50 33% 25%)"> <!-- Vollständig deckend -->
<math mathbackground="hsl(50 33% 25% / 75%)"> <!-- 75% deckend, d.h. 25% transparent -->
```

### Werte

- {{cssxref("&lt;color&gt;")}}
  - : Die gleichmäßige Farbe des Hintergrunds.

## Spezifikationen

{{Specifications}}

- In MathML 3 und früheren Versionen wurde nur eine begrenzte Menge an Werten unterstützt. Seit MathML Core entspricht die Syntax den CSS {{cssxref("&lt;color&gt;")}} Werten.

- Dieses Attribut wurde für MathML-Anwendungen entworfen, die CSS nicht unterstützen. Seit MathML Core wird stattdessen die Verwendung von äquivalentem CSS empfohlen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/MathML/Global_attributes).
- {{cssxref("background-color")}}
