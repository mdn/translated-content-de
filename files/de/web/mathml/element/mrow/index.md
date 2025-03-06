---
title: <mrow>
slug: Web/MathML/Element/mrow
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{MathMLRef}}

Das **`<mrow>`** [MathML](/de/docs/Web/MathML)-Element wird verwendet, um Unterausdrücke zu gruppieren, die normalerweise einen oder mehrere [Operatoren](/de/docs/Web/MathML/Element/mo) mit ihren jeweiligen Operanden (wie {{ MathMLElement("mi") }} und {{ MathMLElement("mn") }}) enthalten. Dieses Element wird als eine horizontale Zeile dargestellt, die seine Argumente enthält.

Beim Schreiben eines MathML-Ausdrucks sollten Sie Elemente in einem `<mrow>` auf die gleiche Weise gruppieren, wie sie in der mathematischen Interpretation des Ausdrucks gruppiert sind. Eine ordnungsgemäße Gruppierung unterstützt die Darstellung des Ausdrucks in mehrfacher Hinsicht:

- Sie kann die Anzeige verbessern, indem sie möglicherweise die Abstände beeinflusst und Zeilenumbrüche verhindert.
- Sie vereinfacht die Interpretation des Ausdrucks durch automatisierte Systeme wie Computeralgebrasysteme und Audiowiedergabesysteme.

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
