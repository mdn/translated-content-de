---
title: <mtable>
slug: Web/MathML/Element/mtable
l10n:
  sourceCommit: 34c43aca36f776c824e698dfd07e3ece34cc6f00
---

{{MathMLRef}}

Das **`<mtable>`** [MathML](/de/docs/Web/MathML)-Element ermöglicht die Erstellung von Tabellen oder Matrizen. Seine Kinder sind {{ MathMLElement("mtr") }}-Elemente (die Zeilen darstellen), von denen jedes {{ MathMLElement("mtd") }}-Elemente als Kinder hat (die Zellen darstellen). Diese Elemente sind den {{ HTMLElement("table") }}, {{ HTMLElement("tr") }} und {{ HTMLElement("td") }}-Elementen von [HTML](/de/docs/Web/HTML) ähnlich.

## Attribute

Zu den Attributen dieses Elements gehören die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes). Einige Browser unterstützen möglicherweise auch die folgenden Attribute:

- `align` {{Non-standard_Inline}}

  - : Gibt die **vertikale** Ausrichtung der Tabelle in Bezug auf ihre Umgebung an. Mögliche Werte sind:

    - `axis` (Standard): Das vertikale Zentrum der Tabelle richtet sich an der Achse der Umgebung aus (typischerweise das Minuszeichen).
    - `baseline`: Das vertikale Zentrum der Tabelle richtet sich an der Grundlinie der Umgebung aus.
    - `bottom`: Der untere Rand der Tabelle richtet sich an der Grundlinie der Umgebung aus.
    - `center`: Siehe baseline.
    - `top`: Der obere Rand der Tabelle richtet sich an der Grundlinie der Umgebung aus.

    Darüber hinaus können Werte des `align`-Attributs mit einer _Zeilennummer_ enden (z.B. `align="center 3"`). Dies ermöglicht das Ausrichten der angegebenen Zeile der Tabelle anstelle der gesamten Tabelle. Ein negativer Ganzzahlwert zählt Zeilen von unten in der Tabelle.

- `columnalign` {{Non-standard_Inline}}
  - : Bestimmt die horizontale Ausrichtung der Zellen. Mehrere durch Leerzeichen getrennte Werte sind zulässig und gelten für die entsprechenden Spalten (z.B. `columnalign="left right center"`). Mögliche Werte sind: `left`, `center` (Standard) und `right`.
- `columnlines` {{Non-standard_Inline}}
  - : Gibt Spaltenränder an. Mehrere durch Leerzeichen getrennte Werte sind zulässig und gelten für die entsprechenden Spalten (z.B. `columnlines="none none solid"`). Mögliche Werte sind: `none` (Standard), `solid` und `dashed`.
- `columnspacing` {{Non-standard_Inline}}
  - : Bestimmt den Abstand zwischen den Tabellenspalten. Mehrere durch Leerzeichen getrennte Werte sind zulässig und gelten für die entsprechenden Spalten (z.B. `columnspacing="1em 2em"`). Mögliche Werte sind {{cssxref("length-percentage")}}.
- `frame` {{Non-standard_Inline}}
  - : Gibt Rahmen der gesamten Tabelle an. Mögliche Werte sind: `none` (Standard), `solid` und `dashed`.
- `framespacing` {{Non-standard_Inline}}
  - : Gibt zusätzlichen Abstand zwischen der Tabelle und dem Rahmen an. Der erste Wert gibt den Abstand rechts und links an; der zweite Wert oben und unten. Mögliche Werte sind {{cssxref("length-percentage")}}.
- `rowalign` {{Non-standard_Inline}}
  - : Bestimmt die vertikale Ausrichtung der Zellen. Mehrere durch Leerzeichen getrennte Werte sind zulässig und gelten für die entsprechenden Zeilen (z.B. `rowalign="top bottom axis"`). Mögliche Werte sind: `axis`, `baseline` (Standard), `bottom`, `center` und `top`.
- `rowlines` {{Non-standard_Inline}}
  - : Gibt Zeilenränder an. Mehrere durch Leerzeichen getrennte Werte sind zulässig und gelten für die entsprechenden Zeilen (z.B. `rowlines="none none solid"`). Mögliche Werte sind: `none` (Standard), `solid` und `dashed`.
- `rowspacing` {{Non-standard_Inline}}
  - : Bestimmt den Abstand zwischen den Tabellenzeilen. Mehrere durch Leerzeichen getrennte Werte sind zulässig und gelten für die entsprechenden Zeilen (z.B. `rowspacing="1em 2em"`). Mögliche Werte sind {{cssxref("length-percentage")}}.
- `width` {{Non-standard_Inline}}
  - : Ein {{cssxref("length-percentage")}}, das die Breite der gesamten Tabelle angibt.

> [!NOTE]
> Beim `width`-Attribut können einige Browser auch [veraltete MathML-Längen](/de/docs/Web/MathML/Values#legacy_mathml_lengths) akzeptieren.

## Beispiele

### Ausrichtung mit Zeilennummer

```html
<math display="block">
  <mi>X</mi>
  <mo>=</mo>
  <mtable frame="solid" rowlines="solid" align="axis 3">
    <mtr>
      <mtd><mi>A</mi></mtd>
      <mtd><mi>B</mi></mtd>
    </mtr>
    <mtr>
      <mtd><mi>C</mi></mtd>
      <mtd><mi>D</mi></mtd>
    </mtr>
    <mtr>
      <mtd><mi>E</mi></mtd>
      <mtd><mi>F</mi></mtd>
    </mtr>
  </mtable>
</math>
```

{{EmbedLiveSample('Alignment with row number')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ MathMLElement("mtd") }} (Tabellenzelle)
- {{ MathMLElement("mtr") }} (Tabellenzeile)
