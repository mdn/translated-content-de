---
title: <maction>
slug: Web/MathML/Reference/Element/maction
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{Deprecated_Header}}

Das **`<maction>`** [MathML](/de/docs/Web/MathML)-Element ermöglicht es, Aktionen an mathematische Ausdrücke zu binden. Standardmäßig wird nur das erste Kind gerendert, aber einige Browser berücksichtigen möglicherweise die Attribute `actiontype` und `selection`, um benutzerdefinierte Verhaltensweisen zu implementieren.

> [!NOTE]
> Historisch gesehen bot dieses Element einen Mechanismus, um MathML-Formeln interaktiv zu gestalten. Heutzutage wird empfohlen, sich auf [JavaScript](/de/docs/Web/JavaScript) und andere Webtechnologien zu verlassen, um diesen Anwendungsfall zu realisieren.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Reference/Global_attributes) sowie die folgenden Attribute:

- `actiontype` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Die Aktion, die angibt, was für dieses Element geschieht. Spezielles Verhalten für die folgenden Werte wurde von einigen Browsern implementiert:
    - `statusline`: Wenn auf den _Ausdruck_ geklickt wird oder der Leser den Zeiger darüber bewegt, wird die _Nachricht_ an die Statusleiste des Browsers gesendet. Die Syntax lautet: `<maction actiontype="statusline"> expression message </maction>`.
    - `toggle`: Bei einem Klick auf den Unterausdruck wechselt die Anzeige der ausgewählten Unterausdrücke. Daher erhöht jeder Klick den `selection`-Wert.
      Die Syntax lautet: `<maction actiontype="toggle" selection="positive-integer" > expression1 expression2 expressionN </maction>`.

- `selection` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Das derzeit sichtbare Kind-Element, das nur für `actiontype="toggle"` oder nicht standardmäßige `actiontype`-Werte berücksichtigt wird. Der Standardwert ist `1`, was dem ersten Kind-Element entspricht.

## Beispiele

Das folgende Beispiel verwendet den "toggle" `actiontype`:

```css hidden
html,
body {
  height: 100%;
}

body {
  display: grid;
  place-content: center;
}

math {
  font-size: 1.5em;
}

maction {
  padding: 0.5em;
  cursor: pointer;
}
```

```html
<p>Try clicking this formula several times:</p>
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
```

Beispielhafte Darstellung:

![MathML Toggle-Action-Beispiel](toggle.gif)

Darstellung in Ihrem Browser:

{{EmbedLiveSample('Examples', 700, 200)}}

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
