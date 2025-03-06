---
title: <mtable>
slug: Web/MathML/Element/mtable
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{MathMLRef}}

Das **`<mtable>`** [MathML](/de/docs/Web/MathML)-Element erlaubt es, Tabellen oder Matrizen zu erstellen. Seine Kinder sind {{ MathMLElement("mtr") }}-Elemente (repräsentiert Zeilen), die jeweils {{ MathMLElement("mtd") }}-Elemente als Kinder haben (repräsentiert Zellen). Diese Elemente ähneln den {{ HTMLElement("table") }}, {{ HTMLElement("tr") }} und {{ HTMLElement("td") }}-Elementen von [HTML](/de/docs/Web/HTML).

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes). Einige Browser unterstützen möglicherweise auch die folgenden Attribute:

- `align` {{Non-standard_Inline}}

  - : Gibt die **vertikale** Ausrichtung der Tabelle im Verhältnis zu ihrer Umgebung an.
    Mögliche Werte sind:

    - `axis` (Standard): Das vertikale Zentrum der Tabelle richtet sich an der Achse der Umgebung aus (typischerweise das Minuszeichen).
    - `baseline`: Das vertikale Zentrum der Tabelle richtet sich an der Grundlinie der Umgebung aus.
    - `bottom`: Der untere Rand der Tabelle richtet sich an der Grundlinie der Umgebung aus.
    - `center`: Siehe baseline.
    - `top`: Der obere Rand der Tabelle richtet sich an der Grundlinie der Umgebung aus.

    Zusätzlich können Werte des `align`-Attributs mit einer _Reihennummer_ enden (z. B. `align="center 3"`). Dies ermöglicht es, die angegebene Reihe der Tabelle auszurichten, anstatt der gesamten Tabelle. Ein negativer Ganzzahlenwert zählt Reihen vom unteren Rand der Tabelle aus.

- `columnalign` {{Non-standard_Inline}}
  - : Gibt die horizontale Ausrichtung der Zellen an. Mehrere durch Leerzeichen getrennte Werte sind erlaubt und gelten für die entsprechenden Spalten (z. B. `columnalign="left right center"`). Mögliche Werte sind: `left`, `center` (Standard) und `right`.
- `columnlines` {{Non-standard_Inline}}
  - : Gibt Spaltenränder an. Mehrere durch Leerzeichen getrennte Werte sind erlaubt und gelten für die entsprechenden Spalten (z. B. `columnlines="none none solid"`). Mögliche Werte sind: `none` (Standard), `solid` und `dashed`.
- `columnspacing` {{Non-standard_Inline}}
  - : Gibt den Abstand zwischen Tabellenspalten an. Mehrere durch Leerzeichen getrennte Werte sind erlaubt und gelten für die entsprechenden Spalten (z. B. `columnspacing="1em 2em"`). Mögliche Werte sind {{cssxref("length-percentage")}}.
- `frame` {{Non-standard_Inline}}
  - : Gibt die Ränder der gesamten Tabelle an. Mögliche Werte sind: `none` (Standard), `solid` und `dashed`.
- `framespacing` {{Non-standard_Inline}}
  - : Gibt zusätzlichen Raum zwischen der Tabelle und dem Rahmen an. Der erste Wert bestimmt den Abstand rechts und links; der zweite Wert den Abstand oben und unten. Mögliche Werte sind {{cssxref("length-percentage")}}.
- `rowalign` {{Non-standard_Inline}}
  - : Gibt die vertikale Ausrichtung der Zellen an. Mehrere durch Leerzeichen getrennte Werte sind erlaubt und gelten für die entsprechenden Reihen (z. B. `rowalign="top bottom axis"`). Mögliche Werte sind: `axis`, `baseline` (Standard), `bottom`, `center` und `top`.
- `rowlines` {{Non-standard_Inline}}
  - : Gibt Reihenränder an. Mehrere durch Leerzeichen getrennte Werte sind erlaubt und gelten für die entsprechenden Reihen (z. B. `rowlines="none none solid"`). Mögliche Werte sind: `none` (Standard), `solid` und `dashed`.
- `rowspacing` {{Non-standard_Inline}}
  - : Gibt den Abstand zwischen Tabellenreihen an. Mehrere durch Leerzeichen getrennte Werte sind erlaubt und gelten für die entsprechenden Reihen (z. B. `rowspacing="1em 2em"`). Mögliche Werte sind {{cssxref("length-percentage")}}.
- `width` {{Non-standard_Inline}}
  - : Eine {{cssxref("length-percentage")}}, die die Breite der gesamten Tabelle angibt.

> [!NOTE]
> Für das `width`-Attribut akzeptieren einige Browser möglicherweise auch [veraltete MathML-Längen](/de/docs/Web/MathML/Values#legacy_mathml_lengths).

## Beispiele

### Ausrichtung mit Reihennummer

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

- {{ MathMLElement("mtd") }} (Tabellenzelle)
- {{ MathMLElement("mtr") }} (Tabellenreihe)
