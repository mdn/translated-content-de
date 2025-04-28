---
title: <mtable>
slug: Web/MathML/Reference/Element/mtable
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

Das **`<mtable>`** [MathML](/de/docs/Web/MathML) Element ermöglicht Ihnen die Erstellung von Tabellen oder Matrizen. Seine Kinder sind {{ MathMLElement("mtr") }} Elemente (die Reihen darstellen), wobei jede von ihnen {{ MathMLElement("mtd") }} Elemente als ihre Kinder hat (die Zellen darstellen). Diese Elemente sind ähnlich den {{ HTMLElement("table") }}, {{ HTMLElement("tr") }} und {{ HTMLElement("td") }} Elementen von [HTML](/de/docs/Web/HTML).

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML Attribute](/de/docs/Web/MathML/Reference/Global_attributes). Einige Browser können auch die folgenden Attribute unterstützen:

- `align` {{Non-standard_Inline}}

  - : Gibt die **vertikale** Ausrichtung der Tabelle in Bezug auf ihre Umgebung an. Mögliche Werte sind:

    - `axis` (Standard): Der vertikale Mittelpunkt der Tabelle richtet sich an der Achse der Umgebung aus (typischerweise das Minuszeichen).
    - `baseline`: Der vertikale Mittelpunkt der Tabelle richtet sich an der Grundlinie der Umgebung aus.
    - `bottom`: Der Boden der Tabelle richtet sich an der Grundlinie der Umgebung aus.
    - `center`: Siehe base-line.
    - `top`: Die Oberseite der Tabelle richtet sich an der Grundlinie der Umgebung aus.

    Zusätzlich können Werte des `align` Attributs mit einer _Reihennummer_ enden (z.B. `align="center 3"`). Dies ermöglicht es, die angegebene Reihe der Tabelle anstatt der gesamten Tabelle auszurichten. Ein negativer Ganzzahlwert zählt Reihen von unten der Tabelle.

- `columnalign` {{Non-standard_Inline}}
  - : Gibt die horizontale Ausrichtung der Zellen an. Mehrere durch Leerzeichen getrennte Werte sind erlaubt und gelten für die entsprechenden Spalten (z.B. `columnalign="left right center"`). Mögliche Werte sind: `left`, `center` (Standard) und `right`.
- `columnlines` {{Non-standard_Inline}}
  - : Gibt die Spaltengrenzen an. Mehrere durch Leerzeichen getrennte Werte sind erlaubt und gelten für die entsprechenden Spalten (z.B. `columnlines="none none solid"`). Mögliche Werte sind: `none` (Standard), `solid` und `dashed`.
- `columnspacing` {{Non-standard_Inline}}
  - : Gibt den Abstand zwischen Tabellenspalten an. Mehrere durch Leerzeichen getrennte Werte sind erlaubt und gelten für die entsprechenden Spalten (z.B. `columnspacing="1em 2em"`). Mögliche Werte sind {{cssxref("length-percentage")}}.
- `frame` {{Non-standard_Inline}}
  - : Gibt die Grenzen der gesamten Tabelle an. Mögliche Werte sind: `none` (Standard), `solid` und `dashed`.
- `framespacing` {{Non-standard_Inline}}
  - : Gibt zusätzlichen Raum an, der zwischen der Tabelle und dem Rahmen hinzugefügt wird. Der erste Wert gibt den Abstand rechts und links an; der zweite Wert gibt den Abstand oben und unten an. Mögliche Werte sind {{cssxref("length-percentage")}}.
- `rowalign` {{Non-standard_Inline}}
  - : Gibt die vertikale Ausrichtung der Zellen an. Mehrere durch Leerzeichen getrennte Werte sind erlaubt und gelten für die entsprechenden Reihen (z.B. `rowalign="top bottom axis"`). Mögliche Werte sind: `axis`, `baseline` (Standard), `bottom`, `center` und `top`.
- `rowlines` {{Non-standard_Inline}}
  - : Gibt die Reihengrenzen an. Mehrere durch Leerzeichen getrennte Werte sind erlaubt und gelten für die entsprechenden Reihen (z.B. `rowlines="none none solid"`). Mögliche Werte sind: `none` (Standard), `solid` und `dashed`.
- `rowspacing` {{Non-standard_Inline}}
  - : Gibt den Abstand zwischen Tabellenreihen an. Mehrere durch Leerzeichen getrennte Werte sind erlaubt und gelten für die entsprechenden Reihen (z.B. `rowspacing="1em 2em"`). Mögliche Werte sind {{cssxref("length-percentage")}}.
- `width` {{Non-standard_Inline}}
  - : Ein {{cssxref("length-percentage")}}, das die Breite der gesamten Tabelle angibt.

> [!NOTE]
> Für das `width` Attribut können einige Browser auch [veraltete MathML Längen](/de/docs/Web/MathML/Reference/Values#legacy_mathml_lengths) akzeptieren.

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
      <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles">Implizite ARIA Rolle</a>
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
