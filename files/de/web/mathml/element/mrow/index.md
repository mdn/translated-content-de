---
title: <mrow>
slug: Web/MathML/Element/mrow
l10n:
  sourceCommit: a9a6b72518fa068991c95e8c1a5ba224533e53ee
---

{{MathMLRef}}

Das **`<mrow>`** [MathML](/de/docs/Web/MathML)-Element wird verwendet, um Teil-Ausdrücke zu gruppieren, die normalerweise einen oder mehrere [Operatoren](/de/docs/Web/MathML/Element/mo) mit ihren jeweiligen Operanden (wie {{ MathMLElement("mi") }} und {{ MathMLElement("mn") }}) enthalten. Dieses Element wird als horizontale Zeile mit seinen Argumenten dargestellt.

Beim Schreiben eines MathML-Ausdrucks sollten Sie Elemente innerhalb eines `<mrow>` so gruppieren, wie sie in der mathematischen Interpretation des Ausdrucks gruppiert sind. Eine korrekte Gruppierung unterstützt die Darstellung des Ausdrucks in verschiedener Hinsicht:

- Sie kann die Anzeige verbessern, indem sie möglicherweise den Abstand beeinflusst und Zeilenumbrüche verhindert.
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
      <a href="/de/docs/Web/Accessibility/ARIA/Roles">Implizite ARIA-Rolle</a>
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

- Gruppieren von HTML-Elementen: {{ HTMLElement("div") }}
