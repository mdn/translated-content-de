---
title: <mo>
slug: Web/MathML/Reference/Element/mo
l10n:
  sourceCommit: 6b01bafc68dffb3a50f70882d2ba24cd6f9d886f
---

Das **`<mo>`** [MathML](/de/docs/Web/MathML)-Element repräsentiert einen **Operator** im weitesten Sinne. Neben den Operatoren im streng mathematischen Sinne umfasst dieses Element auch „Operatoren“ wie Klammern, Trennzeichen wie Komma und Semikolon oder „Betragsstriche“.

## Attribute

Zusätzlich zu den [globalen MathML-Attributen](/de/docs/Web/MathML/Reference/Global_attributes) akzeptiert dieses Element die folgenden Attribute [deren Standardwerte von der Form und dem Inhalt des Operators abhängen](https://w3c.github.io/mathml-core/#algorithm-for-determining-the-properties-of-an-embellished-operator):

- `accent` {{Non-standard_Inline}}
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Reference/Values#mathml-specific_types), das angibt, ob der Operator als Akzent behandelt werden soll, wenn er als [Unter](/de/docs/Web/MathML/Reference/Element/munder)- oder [Überschrift](/de/docs/Web/MathML/Reference/Element/mover) verwendet wird (d.h. größer und näher an der Basis ausgedrückt wird).
- `fence`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Reference/Values#mathml-specific_types), das angibt, ob der Operator eine Begrenzung (z.B. Klammern) ist. Es gibt keinen visuellen Effekt für dieses Attribut.
- `form`
  - : Ein {{Glossary("Enumerated", "enumeriertes")}} Attribut, das angibt, wie der Operator dargestellt werden soll. Je nach Wert kann beispielsweise eine unterschiedliche Menge an Platz auf beiden Seiten des Operators bereitgestellt werden. Es kann einen der folgenden Werte haben:
    - `prefix`: Der Operator erscheint vor seinen Operanden. Zum Beispiel ist im Ausdruck `+ a` das `+` ein Präfixoperator.
    - `infix`: Der Operator erscheint zwischen seinen Operanden. Im Ausdruck `a + b` ist das `+` ein Infixoperator.
    - `postfix`: Der Operator erscheint nach seinen Operanden. Zum Beispiel ist im Ausdruck `a +` das `+` ein Postfixoperator.
- `largeop`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Reference/Values#mathml-specific_types), das angibt, ob der Operator größer gezeichnet werden soll, wenn {{cssxref("math-style")}} auf `normal` gesetzt ist.
- `lspace`
  - : Eine {{cssxref("length-percentage")}}, die die Menge an Platz vor dem Operator angibt.
- `maxsize`
  - : Eine {{cssxref("length-percentage")}}, die die maximale Größe des Operators angibt, wenn er dehnbar ist.
- `minsize`
  - : Eine {{cssxref("length-percentage")}}, die die minimale Größe des Operators angibt, wenn er dehnbar ist.
- `movablelimits`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Reference/Values#mathml-specific_types), das angibt, ob angehängte Unter- und Überschriften in Unter- und Hochstellung verschoben werden, wenn {{cssxref("math-style")}} auf `compact` gesetzt ist.
- `rspace`
  - : Eine {{cssxref("length-percentage")}}, die die Menge an Platz nach dem Operator angibt.
- `separator`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Reference/Values#mathml-specific_types), das angibt, ob der Operator ein Trennzeichen (z.B. Kommas) ist. Es gibt keinen visuellen Effekt für dieses Attribut.
- `stretchy`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Reference/Values#mathml-specific_types), das angibt, ob der Operator sich auf die Größe des angrenzenden Elements streckt.
- `symmetric`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Reference/Values#mathml-specific_types), das angibt, ob ein dehnbarer Operator vertikal symmetrisch um die imaginäre mathematische Achse (zentrierte Bruchlinie) sein soll.

> [!NOTE]
> Für die Attribute `lspace`, `maxsize`, `minsize` und `rspace` können einige Browser auch [Legacy-MathML-Längen](/de/docs/Web/MathML/Reference/Values#legacy_mathml_lengths) akzeptieren.

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
