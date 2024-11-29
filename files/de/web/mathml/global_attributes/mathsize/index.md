---
title: mathsize
slug: Web/MathML/Global_attributes/mathsize
l10n:
  sourceCommit: 56a27a0d3cf032771a715fee27ce5325ba859606
---

{{MathMLRef}}{{Deprecated_Header}}

Das **`mathsize`** [globale Attribut](/de/docs/Web/MathML/Global_attributes) legt die [Schriftgröße](/de/docs/Web/CSS/font-size) eines MathML-Elements fest.

> [!NOTE]
> Verwenden Sie nach Möglichkeit CSS, um MathML zu gestalten. Das Attribut `mathsize` sollte nur in Anwendungen verwendet werden, die CSS nicht unterstützen, und wird von der CSS-Eigenschaft `font-size` überschrieben, falls sie gesetzt ist.

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

  - : Ein positiver {{cssxref("&lt;length&gt;")}}-Wert. Für die meisten schriftbezogenen Einheiten (wie `em` und `ex`) ist die Schriftgröße relativ zur Schriftgröße des Elternelements.

- {{cssxref("&lt;percentage&gt;")}}
  - : Ein positiver {{cssxref("&lt;percentage&gt;")}}-Wert, relativ zur Schriftgröße des Elternelements.

> [!NOTE]
> Einige Browser akzeptieren möglicherweise auch [veraltete MathML-Längen](/de/docs/Web/MathML/Values#legacy_mathml_lengths).

## Spezifikationen

{{Specifications}}

- In MathML 3 und früheren Versionen wurden Schlüsselwörter wie `small`, `normal` und `big` sowie die MathML3-spezifische Syntax für Längen unterstützt. Seit MathML Core entspricht die Syntax den CSS
  {{cssxref("&lt;length-percentage&gt;")}}-Werten.

- Dieses Attribut wurde für MathML-Anwendungen entwickelt, die CSS nicht unterstützen. Seit MathML Core wird die Verwendung von äquivalentem CSS stattdessen empfohlen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/MathML/Global_attributes).
- {{cssxref("font-size")}}
