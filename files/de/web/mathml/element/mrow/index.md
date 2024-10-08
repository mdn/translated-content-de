---
title: <mrow>
slug: Web/MathML/Element/mrow
l10n:
  sourceCommit: 67cbfbf7a408e7180137b286247025bc40716642
---

{{MathMLRef}}

Das **`<mrow>`** [MathML](/de/docs/Web/MathML)-Element wird verwendet, um Unterausdrücke zu gruppieren, die normalerweise einen oder mehrere [Operatoren](/de/docs/Web/MathML/Element/mo) mit ihren jeweiligen Operanden (wie {{ MathMLElement("mi") }} und {{ MathMLElement("mn") }}) enthalten. Dieses Element wird als horizontale Reihe dargestellt, die seine Argumente enthält.

Beim Schreiben eines MathML-Ausdrucks sollten Sie Elemente innerhalb eines `<mrow>` genauso gruppieren, wie sie in der mathematischen Interpretation des Ausdrucks gruppiert sind. Eine korrekte Gruppierung verbessert die Darstellung des Ausdrucks in mehreren Aspekten:

- Sie kann die Anzeige verbessern, indem möglicherweise Abstände beeinflusst und Zeilenumbrüche verhindert werden.
- Sie vereinfacht die Interpretation des Ausdrucks durch automatisierte Systeme wie Computeralgebrasysteme und Audiowiedergabegeräte.

## Attribute

Dieses Element akzeptiert die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes).

## Beispiele

```html
<math display="block">
  <mfrac>
    <mrow>
      <!-- numerator content grouped in one mrow -->
      <mn>1</mn>
      <mo>+</mo>
      <mi>K</mi>
    </mrow>
    <mrow>
      <!-- denominator content grouped in one mrow -->
      <mn>3</mn>
      <mrow>
        <!-- fenced expression grouped in one mrow -->
        <mo>(</mo>
        <mrow>
          <!-- fenced content grouped in one mrow -->
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
