---
title: <mphantom>
slug: Web/MathML/Element/mphantom
l10n:
  sourceCommit: 67cbfbf7a408e7180137b286247025bc40716642
---

{{MathMLRef}}

Das **`<mphantom>`** [MathML](/de/docs/Web/MathML) Element wird unsichtbar gerendert, aber die Dimensionen (wie Höhe, Breite und Basislinienposition) werden dennoch beibehalten.

## Attribute

Dieses Element akzeptiert die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes).

## Beispiele

```html
<math display="block">
  <mrow>
    <mi>x</mi>
    <mo>+</mo>
    <mphantom>
      <mi>y</mi>
      <mo>+</mo>
    </mphantom>
    <mi>z</mi>
  </mrow>
</math>
```

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ MathMLElement("mspace") }}
- {{ MathMLElement("mpadded") }}
