---
title: <maction>
slug: Web/MathML/Element/maction
l10n:
  sourceCommit: 34c43aca36f776c824e698dfd07e3ece34cc6f00
---

{{MathMLRef}}{{Deprecated_Header}}

Das **`<maction>`** [MathML](/de/docs/Web/MathML)-Element ermöglicht das Binden von Aktionen an mathematische Ausdrücke. Standardmäßig wird nur das erste Kind gerendert, aber einige Browser können die Attribute `actiontype` und `selection` berücksichtigen, um benutzerdefinierte Verhaltensweisen zu implementieren.

> [!NOTE]
> Historisch gesehen bot dieses Element einen Mechanismus, um MathML-Formeln interaktiv zu gestalten. Heutzutage wird empfohlen, auf [JavaScript](/de/docs/Web/JavaScript) und andere Webtechnologien zurückzugreifen, um diesen Anwendungsfall zu realisieren.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes) sowie die folgenden Attribute:

- `actiontype` {{Deprecated_Inline}} {{Non-standard_Inline}}

  - : Die Aktion, die spezifiziert, was für dieses Element geschieht. Ein spezielles Verhalten für die folgenden Werte wurde von einigen Browsern implementiert:

    - `statusline`: Wenn auf den _Ausdruck_ geklickt wird oder der Leser den Zeiger darüber bewegt, wird die _Nachricht_ an die Statuszeile des Browsers gesendet. Die Syntax lautet: `<maction actiontype="statusline"> expression message </maction>`.
    - `toggle`: Wenn auf den Unterausdruck geklickt wird, wechselt die Anzeige zwischen den ausgewählten Unterausdrücken. Daher erhöht jeder Klick den `selection`-Wert.
      Die Syntax lautet: `<maction actiontype="toggle" selection="positive-integer" > expression1 expression2 expressionN </maction>`.

- `selection` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Das aktuell sichtbare Kindelement, das nur für `actiontype="toggle"` oder nicht-standardisierte `actiontype`-Werte berücksichtigt wird. Der Standardwert ist `1`, was dem ersten Kindelement entspricht.

## Beispiele

Das folgende Beispiel verwendet das "toggle" `actiontype`:

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
