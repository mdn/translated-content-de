---
title: <mrow>
slug: Web/MathML/Element/mrow
l10n:
  sourceCommit: 67cbfbf7a408e7180137b286247025bc40716642
---

{{MathMLRef}}

Das **`<mrow>`** [MathML](/de/docs/Web/MathML)-Element wird verwendet, um Subausdrücke zu gruppieren, die normalerweise einen oder mehrere [Operatoren](/de/docs/Web/MathML/Element/mo) mit ihren jeweiligen Operanden (wie {{ MathMLElement("mi") }} und {{ MathMLElement("mn") }}) enthalten. Dieses Element wird als horizontale Reihe dargestellt, die seine Argumente enthält.

Wenn Sie einen MathML-Ausdruck schreiben, sollten Sie Elemente innerhalb eines `<mrow>` in der gleichen Weise gruppieren, wie sie in der mathematischen Interpretation des Ausdrucks gruppiert sind. Eine ordnungsgemäße Gruppierung unterstützt das Rendering des Ausdrucks auf verschiedene Weise:

- Sie kann die Anzeige verbessern, indem sie möglicherweise den Abstand beeinflusst und Zeilenumbrüche verhindert.
- Sie vereinfacht die Interpretation des Ausdrucks durch automatisierte Systeme wie Computeralgebra-Systeme und Audio-Renderer.

## Attribute

Dieses Element akzeptiert die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes).

## Beispiele

```html
<math display="block">
  <mfrac>
    <mrow>
      <!-- Zählerinhalt in einem mrow gruppiert -->
      <mn>1</mn>
      <mo>+</mo>
      <mi>K</mi>
    </mrow>
    <mrow>
      <!-- Nennerinhalt in einem mrow gruppiert -->
      <mn>3</mn>
      <mrow>
        <!-- Eingefasster Ausdruck in einem mrow gruppiert -->
        <mo>(</mo>
        <mrow>
          <!-- Eingefasster Inhalt in einem mrow gruppiert -->
          <mi>x</mi>
          <mo>+</mo>
          <mi>y</mi>
        </mrow>
        <mo>)</mo>
      </mrow>
    </mrow>
  </mfrac>
</math>
```

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Gruppierung von HTML-Elementen: {{ HTMLElement("div") }}
