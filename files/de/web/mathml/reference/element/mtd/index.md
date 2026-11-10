---
title: <mtd>
slug: Web/MathML/Reference/Element/mtd
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Das **`<mtd>`**-Element von [MathML](/de/docs/Web/MathML) stellt eine Zelle in einer Tabelle oder Matrix dar. Es darf nur innerhalb eines {{ MathMLElement("mtr") }}-Elements vorkommen. Dieses Element ähnelt dem {{ HTMLElement("td") }}-Element von [HTML](/de/docs/Web/HTML).

## Attribute

Zu den Attributen dieses Elements gehören die [globalen MathML-Attribute](/de/docs/Web/MathML/Reference/Global_attributes) sowie die folgenden Attribute:

- `columnspan`
  - : Ein nicht negativer ganzzahliger Wert, der angibt, über wie viele Spalten sich die Zelle erstreckt.
- `rowspan`
  - : Ein nicht negativer ganzzahliger Wert, der angibt, über wie viele Zeilen sich die Zelle erstreckt.

Einige Browser unterstützen möglicherweise auch die folgenden Attribute:

- `columnalign` {{Non-standard_Inline}}
  - : Legt die horizontale Ausrichtung dieser Zelle fest und überschreibt Werte, die durch {{ MathMLElement("mtable") }} oder {{ MathMLElement("mtr") }} festgelegt wurden.
    Mögliche Werte sind `left`, `center` und `right`.
- `rowalign` {{Non-standard_Inline}}
  - : Legt die vertikale Ausrichtung dieser Zelle fest und überschreibt Werte, die durch {{ MathMLElement("mtable") }} oder {{ MathMLElement("mtr") }} festgelegt wurden.
    Mögliche Werte sind `axis`, `baseline`, `bottom`, `center` und `top`.

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

{{EmbedLiveSample('matrix_using_mtable_mrow_mtr_and_mtd')}}

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

## Siehe auch

- {{ MathMLElement("mtable") }}
- {{ MathMLElement("mtr") }}
