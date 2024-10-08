---
title: <mtd>
slug: Web/MathML/Element/mtd
l10n:
  sourceCommit: a66ead0df0c9c0fd615ce926e459d7c4e279f8e1
---

{{MathMLRef}}

Das **`<mtd>`** [MathML](/de/docs/Web/MathML) Element repräsentiert eine Zelle in einer Tabelle oder einer Matrix. Es darf nur in einem {{ MathMLElement("mtr") }} Element erscheinen. Dieses Element ist dem {{ HTMLElement("td") }} Element von [HTML](/de/docs/Web/HTML) ähnlich.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes) sowie die folgenden Attribute:

- `columnspan`
  - : Ein nicht-negativer ganzzahliger Wert, der angibt, über wie viele Spalten sich die Zelle erstreckt.
- `rowspan`
  - : Ein nicht-negativer ganzzahliger Wert, der angibt, über wie viele Zeilen sich die Zelle erstreckt.

Einige Browser können auch die folgenden Attribute unterstützen:

- `columnalign` {{Non-standard_Inline}}
  - : Gibt die horizontale Ausrichtung dieser Zelle an und überschreibt die durch {{ MathMLElement("mtable") }} oder {{ MathMLElement("mtr") }} festgelegten Werte.
    Mögliche Werte sind: `left`, `center` und `right`.
- `rowalign` {{Non-standard_Inline}}
  - : Gibt die vertikale Ausrichtung dieser Zelle an und überschreibt die durch {{ MathMLElement("mtable") }} oder {{ MathMLElement("mtr") }} festgelegten Werte.
    Mögliche Werte sind: `axis`, `baseline`, `bottom`, `center` und `top`.

## Beispiele

### Matrix mit mtable, mrow, mtr und mtd

```html
<math display="block">
  <mfrac>
    <mi>A</mi>
    <mn>2</mn>
  </mfrac>
  <mo>=</mo>
  <mrow>
    <mo>(</mo>
    <mtable>
      <mtr>
        <mtd><mn>1</mn></mtd>
        <mtd><mn>2</mn></mtd>
        <mtd><mn>3</mn></mtd>
      </mtr>
      <mtr>
        <mtd><mn>4</mn></mtd>
        <mtd><mn>5</mn></mtd>
        <mtd><mn>6</mn></mtd>
      </mtr>
      <mtr>
        <mtd><mn>7</mn></mtd>
        <mtd><mn>8</mn></mtd>
        <mtd><mn>9</mn></mtd>
      </mtr>
    </mtable>
    <mo>)</mo>
  </mrow>
</math>
```

{{EmbedLiveSample('Ausrichtung mit Zeilennummer')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ MathMLElement("mtable") }}
- {{ MathMLElement("mtr") }}
