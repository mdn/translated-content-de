---
title: <maction>
slug: Web/MathML/Element/maction
l10n:
  sourceCommit: 34c43aca36f776c824e698dfd07e3ece34cc6f00
---

{{MathMLRef}}{{Deprecated_Header}}

Das **`<maction>`** [MathML](/de/docs/Web/MathML)-Element ermöglicht es, Aktionen an mathematische Ausdrücke zu binden. Standardmäßig wird nur das erste Kind gerendert, aber einige Browser können die Attribute `actiontype` und `selection` berücksichtigen, um benutzerdefinierte Verhaltensweisen zu implementieren.

> [!NOTE]
> Historisch gesehen bot dieses Element einen Mechanismus, um MathML-Formeln interaktiv zu machen. Heutzutage wird empfohlen, sich auf [JavaScript](/de/docs/Web/JavaScript) und andere Webtechnologien zu verlassen, um diesen Anwendungsfall zu implementieren.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes) sowie die folgenden Attribute:

- `actiontype` {{Deprecated_Inline}} {{Non-standard_Inline}}

  - : Die Aktion, die angibt, was mit diesem Element passiert. Besonderes Verhalten
    für die folgenden Werte wurde von einigen Browsern implementiert:

    - `statusline`: Wenn es einen Klick auf den _Ausdruck_ gibt oder der Leser den Zeiger darüber bewegt, wird die _Nachricht_ an die Statusleiste des Browsers gesendet. Die Syntax ist: `<maction actiontype="statusline"> expression message </maction>`.
    - `toggle`: Wenn es einen Klick auf den Teilausdruck gibt, wird die Anzeige der ausgewählten Teilausdrücke abwechselnd angezeigt. Daher wird bei jedem Klick der `selection`-Wert inkrementiert.
      Die Syntax ist: `<maction actiontype="toggle" selection="positive-integer" > expression1 expression2 expressionN </maction>`.

- `selection` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Das aktuell sichtbare Kindelement, das nur für `actiontype="toggle"` oder nicht standardmäßige `actiontype`-Werte berücksichtigt wird. Der Standardwert ist `1`, was dem ersten Kindelement entspricht.

## Beispiele

Das folgende Beispiel verwendet den `actiontype` "toggle":

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
