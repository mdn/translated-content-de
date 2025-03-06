---
title: <mo>
slug: Web/MathML/Element/mo
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{MathMLRef}}

Das **`<mo>`** [MathML](/de/docs/Web/MathML)-Element repräsentiert einen **Operator** im weiteren Sinne. Neben Operatoren im strengen mathematischen Sinne umfasst dieses Element auch "Operatoren" wie Klammern, Trennzeichen wie Komma und Semikolon oder "Absolutwert"-Striche.

## Attribute

Neben den [globalen MathML-Attributen](/de/docs/Web/MathML/Global_attributes) akzeptiert dieses Element die folgenden Attribute [deren Standardwerte von der Form und dem Inhalt des Operators abhängen](https://w3c.github.io/mathml-core/#algorithm-for-determining-the-properties-of-an-embellished-operator):

- `accent` {{Non-standard_Inline}}
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Values#mathml-specific_types), das angibt, ob der Operator als Akzent behandelt werden soll, wenn er als [unter-](/de/docs/Web/MathML/Element/munder) oder [Überschrift](/de/docs/Web/MathML/Element/mover) verwendet wird (d. h. größer und näher an der Basisausdruck gezeichnet wird).
- `fence`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Values#mathml-specific_types), das angibt, ob der Operator eine Umklammerung ist (wie Klammern). Es gibt keinen visuellen Effekt für dieses Attribut.
- `form`
  - : Ein {{Glossary("Enumerated", "aufgezähltes")}} Attribut, das spezifiziert, wie der Operator dargestellt werden soll. Zum Beispiel könnte je nach Wert eine unterschiedliche Menge an Platz auf beiden Seiten des Operators dargestellt werden. Es kann einen der folgenden Werte haben:
    - `prefix`: Der Operator steht vor seinen Operanden. Beispielsweise ist im Ausdruck `+ a` das `+` ein Präfix-Operator.
    - `infix`: Der Operator steht zwischen seinen Operanden. Im Ausdruck `a + b` ist das `+` ein Infix-Operator.
    - `postfix`: Der Operator steht nach seinen Operanden. Beispielsweise ist im Ausdruck `a +` das `+` ein Postfix-Operator.
- `largeop`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Values#mathml-specific_types), das angibt, ob der Operator größer gezeichnet werden soll, wenn [`math-style`](/de/docs/Web/CSS/math-style) auf `normal` gesetzt ist.
- `lspace`
  - : Ein {{cssxref("length-percentage")}}, das die Menge an Platz vor dem Operator angibt.
- `maxsize`
  - : Ein {{cssxref("length-percentage")}}, das die maximale Größe des Operators angibt, wenn dieser dehnbar ist.
- `minsize`
  - : Ein {{cssxref("length-percentage")}}, das die minimale Größe des Operators angibt, wenn dieser dehnbar ist.
- `movablelimits`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Values#mathml-specific_types), das angibt, ob angehängte Unter- und Überschriften in die Positionen von Sub- und Superschrift verschoben werden, wenn [`math-style`](/de/docs/Web/CSS/math-style) auf `compact` gesetzt ist.
- `rspace`
  - : Ein {{cssxref("length-percentage")}}, das die Menge an Platz nach dem Operator angibt.
- `separator`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Values#mathml-specific_types), das angibt, ob der Operator ein Trennzeichen (wie Kommas) ist. Es gibt keinen visuellen Effekt für dieses Attribut.
- `stretchy`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Values#mathml-specific_types), das angibt, ob der Operator auf die Größe des angrenzenden Elements gestreckt wird.
- `symmetric`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Values#mathml-specific_types), das angibt, ob ein dehnbarer Operator vertikal symmetrisch um die imaginäre Mathematikachse (mittlere Bruchlinie) zentriert sein soll.

> [!NOTE]
> Für die Attribute `lspace`, `maxsize`, `minsize` und `rspace` können einige Browser auch [veraltete MathML-Längen](/de/docs/Web/MathML/Values#legacy_mathml_lengths) akzeptieren.

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
