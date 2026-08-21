---
title: <maction>
slug: Web/MathML/Reference/Element/maction
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

Das **`<maction>`** [MathML](/de/docs/Web/MathML)-Element ermöglicht das Binden von Aktionen an mathematische Ausdrücke. Standardmäßig wird nur das erste Kind gerendert, aber einige Browser könnten die Attribute `actiontype` und `selection` berücksichtigen, um benutzerdefinierte Verhaltensweisen zu implementieren.

> [!NOTE]
> Historisch gesehen bot dieses Element eine Möglichkeit, MathML-Formeln interaktiv zu gestalten. Heutzutage wird empfohlen, auf [JavaScript](/de/docs/Web/JavaScript) und andere Web-Technologien zurückzugreifen, um diesen Anwendungsfall zu implementieren.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Reference/Global_attributes) sowie die folgenden Attribute:

- `actiontype` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Die Aktion, die angibt, was für dieses Element passiert. Spezielles Verhalten
    für die folgenden Werte wurde von einigen Browsern implementiert:
    - `statusline`: Wenn auf die _Expression_ geklickt wird oder der Leser den Zeiger darüber bewegt, wird die _Nachricht_ an die Statuszeile des Browsers gesendet. Die Syntax ist: `<maction actiontype="statusline"> expression message </maction>`.
    - `toggle`: Wenn auf den Unterausdruck geklickt wird, wechselt die Darstellung zwischen den ausgewählten Unterausdrücken. Jeder Klick erhöht somit den `selection`-Wert.
      Die Syntax ist: `<maction actiontype="toggle" selection="positive-integer" > expression1 expression2 expressionN </maction>`.

- `selection` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Das momentan sichtbare Kindelement, das nur bei `actiontype="toggle"` oder nicht standardmäßigen `actiontype`-Werten berücksichtigt wird. Der Standardwert ist `1`, was das erste Kindelement ist.

## Beispiele

Das folgende Beispiel verwendet das "toggle" `actiontype`:

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

Beispielwiedergabe:

![MathML toggle action example](toggle.gif)

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
