---
title: <maction>
slug: Web/MathML/Reference/Element/maction
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

{{Deprecated_Header}}

Das **`<maction>`** [MathML](/de/docs/Web/MathML)-Element ermöglicht es, Aktionen an mathematische Ausdrücke zu binden. Standardmäßig wird nur das erste Kind gerendert, aber einige Browser können die Attribute `actiontype` und `selection` berücksichtigen, um benutzerdefinierte Verhaltensweisen zu implementieren.

> [!NOTE]
> Historisch gesehen bot dieses Element einen Mechanismus, um MathML-Formeln interaktiv zu gestalten. Heutzutage wird empfohlen, auf [JavaScript](/de/docs/Web/JavaScript) und andere Webtechnologien zu setzen, um diesen Anwendungsfall zu realisieren.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Reference/Global_attributes) sowie die folgenden Attribute:

- `actiontype` {{Deprecated_Inline}} {{Non-standard_Inline}}

  - : Die Aktion, die festlegt, was für dieses Element geschieht. Besonderes Verhalten für die folgenden Werte wurde von einigen Browsern implementiert:

    - `statusline`: Bei einem Klick auf den _Ausdruck_ oder wenn der Leser den Mauszeiger darüber bewegt, wird die _Nachricht_ in die Statusleiste des Browsers gesendet. Die Syntax ist: `<maction actiontype="statusline"> Ausdruck Nachricht </maction>`.
    - `toggle`: Bei einem Klick auf den Teilausdruck wechselt die Anzeige zwischen den ausgewählten Teilausdrücken. Jeder Klick erhöht daher den `selection`-Wert. Die Syntax ist: `<maction actiontype="toggle" selection="positive-integer" > Ausdruck1 Ausdruck2 AusdruckN </maction>`.

- `selection` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Das derzeit sichtbare Kindelement, das nur für `actiontype="toggle"` oder nicht standardmäßige `actiontype`-Werte berücksichtigt wird. Der Standardwert ist `1`, was dem ersten Kindelement entspricht.

## Beispiele

Das folgende Beispiel verwendet den "toggle"-`actiontype`:

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

Musteranzeige:

![Beispiel für MathML-Toggle-Aktion](toggle.gif)

Anzeige in Ihrem Browser:

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
