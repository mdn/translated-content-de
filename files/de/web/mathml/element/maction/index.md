---
title: <maction>
slug: Web/MathML/Element/maction
l10n:
  sourceCommit: a9a6b72518fa068991c95e8c1a5ba224533e53ee
---

{{MathMLRef}}{{Deprecated_Header}}

Das **`<maction>`** [MathML](/de/docs/Web/MathML)-Element ermöglicht es, Aktionen an mathematische Ausdrücke zu binden. Standardmäßig wird nur das erste Kind gerendert, aber einige Browser können die `actiontype`- und `selection`-Attribute berücksichtigen, um benutzerdefiniertes Verhalten zu implementieren.

> [!NOTE]
> Historisch gesehen bot dieses Element einen Mechanismus, um MathML-Formeln interaktiv zu gestalten. Heutzutage wird empfohlen, [JavaScript](/de/docs/Web/JavaScript) und andere Webtechnologien zu verwenden, um diesen Anwendungsfall zu implementieren.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes) sowie die folgenden Attribute:

- `actiontype` {{Deprecated_Inline}} {{Non-standard_Inline}}

  - : Die Aktion, die angibt, was für dieses Element passiert. Besonderes Verhalten für folgende Werte wurde von einigen Browsern implementiert:

    - `statusline`: Wenn auf den _Ausdruck_ geklickt wird oder der Leser den Zeiger darüber bewegt, wird die _Nachricht_ an die Statusleiste des Browsers gesendet. Die Syntax lautet: `<maction actiontype="statusline"> expression message </maction>`.
    - `toggle`: Wenn auf die Subexpressions geklickt wird, wechselt die Darstellung zwischen den ausgewählten Subexpressions. Daher erhöht jeder Klick den `selection`-Wert.
      Die Syntax lautet: `<maction actiontype="toggle" selection="positive-integer" > expression1 expression2 expressionN </maction>`.

- `selection` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Das aktuell sichtbare Kindelement, das nur für `actiontype="toggle"` oder nicht standardisierte `actiontype`-Werte berücksichtigt wird. Der Standardwert ist `1`, was das erste Kindelement ist.

## Beispiele

Das folgende Beispiel verwendet den "toggle" `actiontype`:

```html
<p>
  Try clicking this formula several times:

  <math display="block">
    <maction actiontype="toggle">
      <mfrac>
        <mn>6</mn>
        <mn>8</mn>
      </mfrac>

      <mfrac>
        <mrow>
          <mn>3</mn>
          <mo>×</mo>
          <mn>2</mn>
        </mrow>
        <mrow>
          <mn>4</mn>
          <mo>×</mo>
          <mn>2</mn>
        </mrow>
      </mfrac>

      <mfrac>
        <mn>3</mn>
        <mn>4</mn>
      </mfrac>
    </maction>
  </math>
</p>
```

{{EmbedLiveSample('Examples', 700, 200)}}

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
