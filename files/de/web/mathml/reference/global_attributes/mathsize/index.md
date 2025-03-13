---
title: mathsize
slug: Web/MathML/Reference/Global_attributes/mathsize
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

{{Deprecated_Header}}

Das **`mathsize`** [globale Attribut](/de/docs/Web/MathML/Reference/Global_attributes) legt die [Schriftgröße](/de/docs/Web/CSS/font-size) eines MathML-Elements fest.

> [!NOTE]
> Verwenden Sie wann immer möglich CSS, um MathML zu stylen. Das `mathsize`-Attribut sollte nur für Anwendungen verwendet werden, die CSS nicht unterstützen und wird von der CSS `font-size`-Eigenschaft überschrieben, falls festgelegt.

## Beispiel

```css hidden
html,
body {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
}
```

```html
<math display="block">
  <msup mathsize="16px">
    <mi>a</mi>
    <mn>2</mn>
  </msup>
  <mo>+</mo>
  <msup mathsize="24px">
    <mi>b</mi>
    <mn>2</mn>
  </msup>
  <mo>=</mo>
  <msup mathsize="32px">
    <mi>c</mi>
    <mn>2</mn>
  </msup>
</math>
```

{{EmbedLiveSample("Example", "", 150)}}

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

  - : Ein positiver {{cssxref("&lt;length&gt;")}}-Wert. Für die meisten schriftrelativen Einheiten (wie `em` und `ex`) ist die Schriftgröße relativ zur Schriftgröße des Elternelements.

- {{cssxref("&lt;percentage&gt;")}}
  - : Ein positiver {{cssxref("&lt;percentage&gt;")}}-Wert, relativ zur Schriftgröße des Elternelements.

> [!NOTE]
> Einige Browser können auch [Legacy MathML-Längen](/de/docs/Web/MathML/Reference/Values#legacy_mathml_lengths) akzeptieren.

## Spezifikationen

{{Specifications}}

- In MathML 3 und früheren Versionen wurden die Schlüsselwörter `small`, `normal` und `big`, sowie die MathML3-spezifische Syntax für Längen unterstützt. Seit MathML Core entspricht die Syntax den CSS {{cssxref("&lt;length-percentage&gt;")}}-Werten.

- Dieses Attribut wurde für MathML-Anwendungen entwickelt, die nicht CSS-kompatibel sind. Seit MathML Core wird stattdessen die Verwendung von äquivalentem CSS empfohlen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/MathML/Reference/Global_attributes).
- {{cssxref("font-size")}}
