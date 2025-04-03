---
title: <mo>
slug: Web/MathML/Reference/Element/mo
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Das **`<mo>`** [MathML](/de/docs/Web/MathML) Element repräsentiert einen **Operator** in einem weiten Sinne. Neben Operatoren im strengen mathematischen Sinne umfasst dieses Element auch „Operatoren“ wie Klammern, Trennzeichen wie Komma und Semikolon oder „Betragsstriche“.

## Attribute

Zusätzlich zu den [globalen MathML-Attributen](/de/docs/Web/MathML/Reference/Global_attributes) akzeptiert dieses Element die folgenden Attribute [deren Standardwerte von der Form und dem Inhalt des Operators abhängen](https://w3c.github.io/mathml-core/#algorithm-for-determining-the-properties-of-an-embellished-operator):

- `accent` {{Non-standard_Inline}}
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Reference/Values#mathml-specific_types), das angibt, ob der Operator als Akzent behandelt werden soll, wenn er als [unter](/de/docs/Web/MathML/Reference/Element/munder)- oder [Überschrift](/de/docs/Web/MathML/Reference/Element/mover) verwendet wird (d.h. größer und näher zur Basis ausgedrückt wird).
- `fence`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Reference/Values#mathml-specific_types), das angibt, ob der Operator eine Begrenzung (wie Klammern) ist. Es gibt keinen visuellen Effekt für dieses Attribut.
- `form`
  - : Ein {{Glossary("Enumerated", "enumerated")}} Attribut, das angibt, wie der Operator dargestellt werden soll. Abhängig vom Wert könnte zum Beispiel eine unterschiedliche Menge an Platz auf beiden Seiten des Operators dargestellt werden. Es kann folgende Werte haben:
    - `prefix`: Der Operator erscheint vor seinen Operanden. Zum Beispiel im Ausdruck `+ a` ist das `+` ein Präfix-Operator.
    - `infix`: Der Operator erscheint zwischen seinen Operanden. Im Ausdruck `a + b` ist das `+` ein Infix-Operator.
    - `postfix`: Der Operator erscheint nach seinen Operanden. Zum Beispiel im Ausdruck `a +` ist das `+` ein Postfix-Operator.
- `largeop`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Reference/Values#mathml-specific_types), das angibt, ob der Operator größer gezeichnet werden soll, wenn [`math-style`](/de/docs/Web/CSS/math-style) auf `normal` eingestellt ist.
- `lspace`
  - : Ein {{cssxref("length-percentage")}}, das die Menge an Platz vor dem Operator angibt.
- `maxsize`
  - : Ein {{cssxref("length-percentage")}}, das die maximale Größe des Operators angibt, wenn er dehnbar ist.
- `minsize`
  - : Ein {{cssxref("length-percentage")}}, das die minimale Größe des Operators angibt, wenn er dehnbar ist.
- `movablelimits`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Reference/Values#mathml-specific_types), das angibt, ob angehängte Unter- und Überschriften in Sub- und Superskriptpositionen verschoben werden, wenn [`math-style`](/de/docs/Web/CSS/math-style) auf `compact` eingestellt ist.
- `rspace`
  - : Ein {{cssxref("length-percentage")}}, das die Menge an Platz nach dem Operator angibt.
- `separator`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Reference/Values#mathml-specific_types), das angibt, ob der Operator ein Trennzeichen (wie Kommas) ist. Es gibt keinen visuellen Effekt für dieses Attribut.
- `stretchy`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Reference/Values#mathml-specific_types), das angibt, ob der Operator sich an die Größe des angrenzenden Elements anpasst.
- `symmetric`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Reference/Values#mathml-specific_types), das angibt, ob ein dehnbarer Operator vertikal symmetrisch um die gedachte Achse der Mathematik (mittige Bruchlinie) sein sollte.

> [!NOTE]
> Für die Attribute `lspace`, `maxsize`, `minsize` und `rspace` können einige Browser auch [veraltete MathML-Größen](/de/docs/Web/MathML/Reference/Values#legacy_mathml_lengths) akzeptieren.

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
