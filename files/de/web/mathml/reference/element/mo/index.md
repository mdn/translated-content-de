---
title: <mo>
slug: Web/MathML/Reference/Element/mo
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

Das **`<mo>`** [MathML](/de/docs/Web/MathML)-Element repräsentiert einen **Operator** in einem umfassenden Sinn. Neben Operatoren im strengen mathematischen Sinne umfasst dieses Element auch "Operatoren" wie Klammern, Trennzeichen wie Komma und Semikolon oder "Betragsstriche".

## Attribute

Zusätzlich zu den [globalen MathML-Attributen](/de/docs/Web/MathML/Reference/Global_attributes) akzeptiert dieses Element die folgenden Attribute [deren Standardwerte von der Form und dem Inhalt des Operators abhängen](https://w3c.github.io/mathml-core/#algorithm-for-determining-the-properties-of-an-embellished-operator):

- `accent` {{Non-standard_Inline}}
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Reference/Values#mathml-specific_types), der angibt, ob der Operator als Akzent behandelt werden soll, wenn er als [unter](/de/docs/Web/MathML/Reference/Element/munder)- oder [Überstrich](/de/docs/Web/MathML/Reference/Element/mover) verwendet wird (d. h. größer und näher an dem Basisausdruck gezeichnet wird).
- `fence`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Reference/Values#mathml-specific_types), der angibt, ob der Operator eine Begrenzung ist (wie Klammern). Für dieses Attribut gibt es keinen visuellen Effekt.
- `form`
  - : Ein {{Glossary("Enumerated", "enumeriertes")}} Attribut, das angibt, wie der Operator dargestellt werden soll. Je nach Wert kann beispielsweise eine unterschiedliche Menge an Raum auf beiden Seiten des Operators dargestellt werden. Es kann einen der folgenden Werte haben:
    - `prefix`: Der Operator erscheint vor seinen Operanden. Beispielsweise ist im Ausdruck `+ a` das `+` ein Präfix-Operator.
    - `infix`: Der Operator erscheint zwischen seinen Operanden. Im Ausdruck `a + b` ist das `+` ein Infix-Operator.
    - `postfix`: Der Operator erscheint nach seinen Operanden. Beispielsweise ist im Ausdruck `a +` das `+` ein Postfix-Operator.
- `largeop`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Reference/Values#mathml-specific_types), der angibt, ob der Operator größer gezeichnet werden soll, wenn [`math-style`](/de/docs/Web/CSS/math-style) auf `normal` gesetzt ist.
- `lspace`
  - : Ein {{cssxref("length-percentage")}}, der die Menge an Raum vor dem Operator angibt.
- `maxsize`
  - : Ein {{cssxref("length-percentage")}}, der die maximale Größe des Operators angibt, wenn er dehnbar ist.
- `minsize`
  - : Ein {{cssxref("length-percentage")}}, der die minimale Größe des Operators angibt, wenn er dehnbar ist.
- `movablelimits`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Reference/Values#mathml-specific_types), der angibt, ob angehängte Unter- und Überstriche in Tief- und Hochstellungspositionen verschoben werden, wenn [`math-style`](/de/docs/Web/CSS/math-style) auf `compact` gesetzt ist.
- `rspace`
  - : Ein {{cssxref("length-percentage")}}, der die Menge an Raum nach dem Operator angibt.
- `separator`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Reference/Values#mathml-specific_types), der angibt, ob der Operator ein Trennzeichen ist (wie Kommas). Für dieses Attribut gibt es keinen visuellen Effekt.
- `stretchy`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Reference/Values#mathml-specific_types), der angibt, ob der Operator sich auf die Größe des angrenzenden Elements erstreckt.
- `symmetric`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Reference/Values#mathml-specific_types), der angibt, ob ein dehnbarer Operator vertikal symmetrisch um die imaginäre Mathematik-Achse (zentrierte Bruchlinie) sein sollte.

> [!NOTE]
> Für die Attribute `lspace`, `maxsize`, `minsize` und `rspace` können einige Browser auch [veraltete MathML-Längen](/de/docs/Web/MathML/Reference/Values#legacy_mathml_lengths) akzeptieren.

## Beispiele

```html-nolint
<math display="block">
  <mrow>
    <mn>5</mn>
    <mo>+</mo>
    <mn>5</mn>
  </mrow>
</math>

<math display="block">
  <mrow>
    <mo>[</mo> <!-- default form value: prefix -->
    <mrow>
      <mn>0</mn>
      <mo>;</mo> <!-- default form value: infix -->
      <mn>1</mn>
    </mrow>
    <mo>)</mo> <!-- default form value: postfix -->
  </mrow>
</math>
```

{{ EmbedLiveSample('mo_example', 700, 200, "", "") }}

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
