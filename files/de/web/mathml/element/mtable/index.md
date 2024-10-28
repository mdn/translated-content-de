---
title: <mtable>
slug: Web/MathML/Element/mtable
l10n:
  sourceCommit: a9a6b72518fa068991c95e8c1a5ba224533e53ee
---

{{MathMLRef}}

Das **`<mtable>`** [MathML](/de/docs/Web/MathML)-Element ermöglicht es Ihnen, Tabellen oder Matrizen zu erstellen. Seine Kinder sind {{ MathMLElement("mtr") }}-Elemente (die Zeilen darstellen), von denen jedes wiederum {{ MathMLElement("mtd") }}-Elemente als Kinder hat (die Zellen darstellen). Diese Elemente sind ähnlich den {{ HTMLElement("table") }}, {{ HTMLElement("tr") }} und {{ HTMLElement("td") }} Elementen von [HTML](/de/docs/Web/HTML).

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes). Einige Browser unterstützen möglicherweise auch die folgenden Attribute:

- `align` {{Non-standard_Inline}}

  - : Gibt die **vertikale** Ausrichtung der Tabelle in Bezug auf ihre Umgebung an.
    Mögliche Werte sind:

    - `axis` (Standard): Das vertikale Zentrum der Tabelle richtet sich an der Achse der Umgebung aus (typischerweise das Minuszeichen).
    - `baseline`: Das vertikale Zentrum der Tabelle richtet sich an der Grundlinie der Umgebung aus.
    - `bottom`: Der untere Rand der Tabelle richtet sich an der Grundlinie der Umgebung aus.
    - `center`: Siehe baseline.
    - `top`: Der obere Rand der Tabelle richtet sich an der Grundlinie der Umgebung aus.

    Zusätzlich können die Werte des `align`-Attributs mit einer _Reihennummer_ enden (z.B. `align="center 3"`). Dies ermöglicht es Ihnen, die angegebene Zeile der Tabelle anstelle der gesamten Tabelle auszurichten. Ein negativer Ganzzahlenwert zählt die Zeilen vom unteren Rand der Tabelle aus.

- `columnalign` {{Non-standard_Inline}}
  - : Gibt die horizontale Ausrichtung der Zellen an. Mehrere durch Leerzeichen getrennte Werte sind erlaubt und gelten für die entsprechenden Spalten (z.B. `columnalign="left right center"`). Mögliche Werte sind: `left`, `center` (Standard) und `right`.
- `columnlines` {{Non-standard_Inline}}
  - : Gibt Spaltengrenzen an. Mehrere durch Leerzeichen getrennte Werte sind erlaubt und gelten für die entsprechenden Spalten (z.B. `columnlines="none none solid"`). Mögliche Werte sind: `none` (Standard), `solid` und `dashed`.
- `columnspacing` {{Non-standard_Inline}}
  - : Gibt den Abstand zwischen Tabellenspalten an. Mehrere durch Leerzeichen getrennte Werte sind erlaubt und gelten für die entsprechenden Spalten (z.B. `columnspacing="1em 2em"`). Mögliche Werte sind {{cssxref("length-percentage")}}.
- `frame` {{Non-standard_Inline}}
  - : Gibt die Grenzen der gesamten Tabelle an. Mögliche Werte sind: `none` (Standard), `solid` und `dashed`.
- `framespacing` {{Non-standard_Inline}}
  - : Gibt zusätzlichen Raum zwischen der Tabelle und dem Rahmen an. Der erste Wert gibt den Abstand rechts und links an; der zweite Wert gibt den Abstand oben und unten an. Mögliche Werte sind {{cssxref("length-percentage")}}.
- `rowalign` {{Non-standard_Inline}}
  - : Gibt die vertikale Ausrichtung der Zellen an. Mehrere durch Leerzeichen getrennte Werte sind erlaubt und gelten für die entsprechenden Zeilen (z.B. `rowalign="top bottom axis"`). Mögliche Werte sind: `axis`, `baseline` (Standard), `bottom`, `center` und `top`.
- `rowlines` {{Non-standard_Inline}}
  - : Gibt Zeilengrenzen an. Mehrere durch Leerzeichen getrennte Werte sind erlaubt und gelten für die entsprechenden Zeilen (z.B. `rowlines="none none solid"`). Mögliche Werte sind: `none` (Standard), `solid` und `dashed`.
- `rowspacing` {{Non-standard_Inline}}
  - : Gibt den Abstand zwischen Tabellenzeilen an. Mehrere durch Leerzeichen getrennte Werte sind erlaubt und gelten für die entsprechenden Zeilen (z.B. `rowspacing="1em 2em"`). Mögliche Werte sind {{cssxref("length-percentage")}}.
- `width` {{Non-standard_Inline}}
  - : Ein {{cssxref("length-percentage")}}, das die Breite der gesamten Tabelle angibt.

> [!NOTE]
> Für das `width`-Attribut können einige Browser auch [Legacy-MathML-Längen](/de/docs/Web/MathML/Values#legacy_mathml_lengths) akzeptieren.

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
      <a href="/de/docs/Web/Accessibility/ARIA/Roles">Implizite ARIA-Rolle</a>
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
- {{ MathMLElement("mtr") }} (Tabellenzeile)
