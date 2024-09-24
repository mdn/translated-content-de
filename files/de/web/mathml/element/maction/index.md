---
title: <maction>
slug: Web/MathML/Element/maction
l10n:
  sourceCommit: 34c43aca36f776c824e698dfd07e3ece34cc6f00
---

{{MathMLRef}}{{Deprecated_Header}}

Das **`<maction>`** [MathML](/de/docs/Web/MathML)-Element ermöglicht es, Aktionen an mathematische Ausdrücke zu binden. Standardmäßig wird nur das erste Kindelement gerendert, aber einige Browser können die Attribute `actiontype` und `selection` berücksichtigen, um benutzerdefinierte Verhaltensweisen zu implementieren.

> [!NOTE]
> Historisch gesehen bot dieses Element einen Mechanismus, um MathML-Formeln interaktiv zu gestalten. Heutzutage wird empfohlen, [JavaScript](/de/docs/Web/JavaScript) und andere Webtechnologien zu verwenden, um diesen Anwendungsfall zu realisieren.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes) sowie die folgenden Attribute:

- `actiontype` {{Deprecated_Inline}} {{Non-standard_Inline}}

  - : Die Aktion, die angibt, was für dieses Element passiert. Spezielles Verhalten für die folgenden Werte wurde von einigen Browsern implementiert:

    - `statusline`: Wenn auf den _Ausdruck_ geklickt wird oder der Leser den Zeiger darüber bewegt, wird die _Nachricht_ zur Statuszeile des Browsers gesendet. Die Syntax ist: `<maction actiontype="statusline"> expression message </maction>`.
    - `toggle`: Wenn auf den Teilausdruck geklickt wird, wechselt die Darstellung zwischen den ausgewählten Teilausdrücken. Daher erhöht sich der `selection`-Wert bei jedem Klick.
      Die Syntax ist: `<maction actiontype="toggle" selection="positive-integer"> expression1 expression2 expressionN </maction>`.

- `selection` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Das aktuell sichtbare Kindelement, das nur für `actiontype="toggle"` oder nicht standardmäßige `actiontype`-Werte berücksichtigt wird. Der Standardwert ist `1`, was das erste Kindelement ist.

## Beispiele

Das folgende Beispiel verwendet den "toggle" `actiontype`:

```html
<p>
  Versuchen Sie, mehrmals auf diese Formel zu klicken:

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
