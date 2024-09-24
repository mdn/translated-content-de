---
title: mathsize
slug: Web/MathML/Global_attributes/mathsize
l10n:
  sourceCommit: 34c43aca36f776c824e698dfd07e3ece34cc6f00
---

{{MathMLRef}}{{Deprecated_Header}}

Das **`mathsize`** [Globale Attribut](/de/docs/Web/MathML/Global_attributes) setzt die [Schriftgröße](/de/docs/Web/CSS/font-size) eines MathML-Elements.

> [!NOTE]
> Verwenden Sie wann immer möglich CSS für die Stilgestaltung von MathML. Das `mathsize`-Attribut sollte nur für Anwendungen genutzt werden, die CSS nicht unterstützen, und es wird überschrieben, wenn die CSS-Eigenschaft `font-size` gesetzt ist.

## Syntax

```html-nolint
<!-- <length>-Werte -->
<math mathsize="12px">
<math mathsize="0.8em">

<!-- <percentage>-Werte -->
<math mathsize="80%">
```

### Werte

- {{cssxref("&lt;length&gt;")}}

  - : Ein positiver {{cssxref("&lt;length&gt;")}}-Wert. Für die meisten schriftbezogenen Einheiten (wie `em` und `ex`) ist die Schriftgröße relativ zur Schriftgröße des Elternelements.

- {{cssxref("&lt;percentage&gt;")}}
  - : Ein positiver {{cssxref("&lt;percentage&gt;")}}-Wert, relativ zur Schriftgröße des Elternelements.

> [!NOTE]
> Einige Browser akzeptieren möglicherweise auch [veraltete MathML-Längen](/de/docs/Web/MathML/Values#legacy_mathml_lengths).

## Spezifikationen

{{Specifications}}

- In MathML 3 und früheren Versionen wurden die Schlüsselwörter `small`, `normal` und `big` sowie die MathML3-spezifische Syntax für Längen unterstützt.
  Seit MathML Core entspricht die Syntax den CSS
  {{cssxref("&lt;length-percentage&gt;")}}-Werten.

- Dieses Attribut wurde für MathML-Anwendungen, die nicht CSS-fähig sind, entwickelt.
  Seit MathML Core wird stattdessen die Verwendung von äquivalentem CSS empfohlen.

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/MathML/Global_attributes).
- {{cssxref("font-size")}}
