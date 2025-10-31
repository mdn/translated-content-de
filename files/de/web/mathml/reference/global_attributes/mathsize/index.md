---
title: mathsize
slug: Web/MathML/Reference/Global_attributes/mathsize
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{Deprecated_Header}}

Das **`mathsize`** [globales Attribut](/de/docs/Web/MathML/Reference/Global_attributes) setzt die [Schriftgröße](/de/docs/Web/CSS/Reference/Properties/font-size) eines MathML-Elements.

> [!NOTE]
> Verwenden Sie wann immer möglich CSS, um MathML zu stylen. Das `mathsize`-Attribut sollte nur für Anwendungen verwendet werden, die CSS nicht unterstützen, und wird von der CSS-Eigenschaft `font-size` überschrieben, wenn sie gesetzt ist.

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
  - : Ein positiver {{cssxref("&lt;length&gt;")}}-Wert. Für die meisten schriftgrößenbezogenen Einheiten (wie `em` und `ex`) ist die Schriftgröße relativ zur Schriftgröße des Elternelements.

- {{cssxref("&lt;percentage&gt;")}}
  - : Ein positiver {{cssxref("&lt;percentage&gt;")}}-Wert, relativ zur Schriftgröße des Elternelements.

> [!NOTE]
> Einige Browser akzeptieren möglicherweise auch [veraltete MathML-Größen](/de/docs/Web/MathML/Reference/Values#legacy_mathml_lengths).

## Spezifikationen

{{Specifications}}

- In MathML 3 und früheren Versionen wurden die Schlüsselwörter `small`, `normal` und `big` sowie die MathML3-spezifische Syntax für Längen unterstützt. Seit MathML Core entspricht die Syntax den CSS {{cssxref("&lt;length-percentage&gt;")}}-Werten.

- Dieses Attribut wurde für MathML-Anwendungen entworfen, die CSS nicht unterstützen. Seit MathML Core wird stattdessen die Verwendung des entsprechenden CSS empfohlen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/MathML/Reference/Global_attributes).
- {{cssxref("font-size")}}
