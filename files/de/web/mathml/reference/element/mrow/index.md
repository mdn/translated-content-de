---
title: <mrow>
slug: Web/MathML/Reference/Element/mrow
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

Das **`<mrow>`**-Element in [MathML](/de/docs/Web/MathML) wird verwendet, um Unterausdrücke zu gruppieren, die normalerweise einen oder mehrere [Operatoren](/de/docs/Web/MathML/Reference/Element/mo) mit ihren jeweiligen Operanden (wie {{ MathMLElement("mi") }} und {{ MathMLElement("mn") }}) enthalten. Dieses Element wird als horizontale Reihe dargestellt, die seine Argumente enthält.

Beim Schreiben eines MathML-Ausdrucks sollten Sie Elemente innerhalb eines `<mrow>` in der gleichen Weise gruppieren, wie sie in der mathematischen Interpretation des Ausdrucks gruppiert werden. Eine ordnungsgemäße Gruppierung verbessert die Darstellung des Ausdrucks auf mehrere Arten:

- Sie kann die Darstellung verbessern, indem sie möglicherweise den Abstand beeinflusst und Zeilenumbrüche verhindert.
- Sie vereinfacht die Interpretation des Ausdrucks durch automatisierte Systeme wie Computeralgebrasysteme und Audio-Renderer.

## Attribute

Dieses Element akzeptiert die [globalen MathML-Attribute](/de/docs/Web/MathML/Reference/Global_attributes).

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

## Technische Zusammenfassung

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles">Implizite ARIA-Rolle</a>
    </th>
    <td>
      Keine
    </td>
  </tr>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Gruppierung von HTML-Elementen: {{ HTMLElement("div") }}
