---
title: mathsize
slug: Web/MathML/Global_attributes/mathsize
l10n:
  sourceCommit: 34c43aca36f776c824e698dfd07e3ece34cc6f00
---

{{MathMLRef}}{{Deprecated_Header}}

Das **`mathsize`** [globale Attribut](/de/docs/Web/MathML/Global_attributes) setzt die [Schriftgröße](/de/docs/Web/CSS/font-size) eines MathML-Elements.

> [!NOTE]
> Verwenden Sie nach Möglichkeit CSS, um MathML zu stylen. Das `mathsize`-Attribut sollte nur in Anwendungen verwendet werden, die CSS nicht unterstützen, und wird durch die CSS-Eigenschaft `font-size` überschrieben, falls diese gesetzt ist.

## Syntax

```html-nolint
<!-- <length> values -->
<math mathsize="12px">
<math mathsize="0.8em">

<!-- <percentage> values -->
<math mathsize="80%">
```

### Werte

- {{cssxref("&lt;length&gt;")}}

  - : Ein positiver {{cssxref("&lt;length&gt;")}}-Wert. Bei den meisten schriftartbezogenen Einheiten (wie `em` und `ex`) ist die Schriftgröße relativ zur Schriftgröße des Elternelements.

- {{cssxref("&lt;percentage&gt;")}}
  - : Ein positiver {{cssxref("&lt;percentage&gt;")}}-Wert, relativ zur Schriftgröße des Elternelements.

> [!NOTE]
> Einige Browser akzeptieren möglicherweise auch [veraltete MathML-Längen](/de/docs/Web/MathML/Values#legacy_mathml_lengths).

## Spezifikationen

{{Specifications}}

- In MathML 3 und früheren Versionen wurden die Schlüsselwörter `small`, `normal` und `big` sowie die MathML3-spezifische Syntax für Längen unterstützt. Seit MathML Core entspricht die Syntax den CSS
  {{cssxref("&lt;length-percentage&gt;")}}-Werten.

- Dieses Attribut wurde für MathML-Anwendungen entwickelt, die CSS nicht unterstützen. Seit MathML Core wird die Verwendung von äquivalentem CSS stattdessen empfohlen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/MathML/Global_attributes).
- {{cssxref("font-size")}}
