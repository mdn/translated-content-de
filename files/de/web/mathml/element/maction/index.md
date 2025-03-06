---
title: <maction>
slug: Web/MathML/Element/maction
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{MathMLRef}}{{Deprecated_Header}}

Das **`<maction>`** [MathML](/de/docs/Web/MathML) Element ermöglicht es, Aktionen an mathematische Ausdrücke zu binden. Standardmäßig wird nur das erste Kind gerendert, aber einige Browser können die `actiontype`- und `selection`-Attribute berücksichtigen, um benutzerdefinierte Verhaltensweisen zu implementieren.

> [!NOTE]
> Historisch gesehen bot dieses Element einen Mechanismus, um MathML-Formeln interaktiv zu gestalten. Heutzutage wird empfohlen, sich auf [JavaScript](/de/docs/Web/JavaScript) und andere Webtechnologien zu verlassen, um diesen Anwendungsfall zu implementieren.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes) sowie die folgenden Attribute:

- `actiontype` {{Deprecated_Inline}} {{Non-standard_Inline}}

  - : Die Aktion, die spezifiziert, was für dieses Element passiert. Spezielles Verhalten für die folgenden Werte wurde von einigen Browsern implementiert:

    - `statusline`: Wenn auf den _Ausdruck_ geklickt wird oder der Leser den Zeiger darüber bewegt, wird die _Nachricht_ an die Statuszeile des Browsers gesendet. Die Syntax lautet: `<maction actiontype="statusline"> Ausdruck Nachricht </maction>`.
    - `toggle`: Bei einem Klick auf den Subausdruck wechselt die Darstellung zwischen ausgewählten Subausdrücken. Daher erhöht jeder Klick den `selection`-Wert. Die Syntax lautet: `<maction actiontype="toggle" selection="positive-integer" > Ausdruck1 Ausdruck2 AusdruckN </maction>`.

- `selection` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Das aktuell sichtbare Kindelement, das nur bei `actiontype="toggle"` oder nicht standardmäßigen `actiontype`-Werten berücksichtigt wird. Der Standardwert ist `1`, was das erste Kindelement ist.

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

Beispiel-Rendering:

![MathML Toggle-Aktionsbeispiel](toggle.gif)

Rendering in Ihrem Browser:

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
