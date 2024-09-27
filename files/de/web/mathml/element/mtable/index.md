---
title: <mtable>
slug: Web/MathML/Element/mtable
l10n:
  sourceCommit: 34c43aca36f776c824e698dfd07e3ece34cc6f00
---

{{MathMLRef}}

Das **`<mtable>`** [MathML](/de/docs/Web/MathML)-Element ermöglicht es Ihnen, Tabellen oder Matrizen zu erstellen. Seine Kinder sind {{ MathMLElement("mtr") }}-Elemente (die Zeilen darstellen), wobei jedes von ihnen {{ MathMLElement("mtd") }}-Elemente als Kinder hat (die Zellen darstellen). Diese Elemente sind ähnlich den {{ HTMLElement("table") }}, {{ HTMLElement("tr") }} und {{ HTMLElement("td") }}-Elementen von [HTML](/de/docs/Web/HTML).

## Attribute

Die Attribute dieses Elements schließen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes) ein. Einige Browser können auch die folgenden Attribute unterstützen:

- `align` {{Non-standard_Inline}}

  - : Gibt die **vertikale** Ausrichtung der Tabelle im Verhältnis zu ihrer Umgebung an.
    Mögliche Werte sind:

    - `axis` (Standard): Das vertikale Zentrum der Tabelle richtet sich an der Achse der Umgebung (typisch das Minuszeichen) aus.
    - `baseline`: Das vertikale Zentrum der Tabelle richtet sich an der Grundlinie der Umgebung aus.
    - `bottom`: Der Boden der Tabelle richtet sich an der Grundlinie der Umgebung aus.
    - `center`: Siehe Grundlinie.
    - `top`: Die Spitze der Tabelle richtet sich an der Grundlinie der Umgebung aus.

    Zusätzlich können Werte des `align`-Attributs mit einer _Reihennummer_ enden (z.B. `align="center 3"`). Dies ermöglicht es Ihnen, die angegebene Reihe der Tabelle statt der ganzen Tabelle auszurichten. Ein negativer Ganzzahlenwert zählt Reihen vom unteren Ende der Tabelle.

- `columnalign` {{Non-standard_Inline}}
  - : Gibt die horizontale Ausrichtung der Zellen an. Mehrere durch Leerzeichen getrennte Werte sind erlaubt und gelten für die entsprechenden Spalten (z.B. `columnalign="left right center"`). Mögliche Werte sind: `left`, `center` (Standard) und `right`.
- `columnlines` {{Non-standard_Inline}}
  - : Gibt die Spaltengrenzen an. Mehrere durch Leerzeichen getrennte Werte sind erlaubt und gelten für die entsprechenden Spalten (z.B. `columnlines="none none solid"`). Mögliche Werte sind: `none` (Standard), `solid` und `dashed`.
- `columnspacing` {{Non-standard_Inline}}
  - : Gibt den Abstand zwischen den Tabellenspalten an. Mehrere durch Leerzeichen getrennte Werte sind erlaubt und gelten für die entsprechenden Spalten (z.B. `columnspacing="1em 2em"`). Mögliche Werte sind {{cssxref("length-percentage")}}.
- `frame` {{Non-standard_Inline}}
  - : Gibt die Grenzen der gesamten Tabelle an. Mögliche Werte sind: `none` (Standard), `solid` und `dashed`.
- `framespacing` {{Non-standard_Inline}}
  - : Gibt zusätzlichen Raum zwischen der Tabelle und dem Rahmen an. Der erste Wert gibt den Abstand rechts und links an; der zweite Wert gibt den Abstand oben und unten an. Mögliche Werte sind {{cssxref("length-percentage")}}.
- `rowalign` {{Non-standard_Inline}}
  - : Gibt die vertikale Ausrichtung der Zellen an. Mehrere durch Leerzeichen getrennte Werte sind erlaubt und gelten für die entsprechenden Zeilen (z.B. `rowalign="top bottom axis"`). Mögliche Werte sind: `axis`, `baseline` (Standard), `bottom`, `center` und `top`.
- `rowlines` {{Non-standard_Inline}}
  - : Gibt die Zeilengrenzen an. Mehrere durch Leerzeichen getrennte Werte sind erlaubt und gelten für die entsprechenden Zeilen (z.B. `rowlines="none none solid"`). Mögliche Werte sind: `none` (Standard), `solid` und `dashed`.
- `rowspacing` {{Non-standard_Inline}}
  - : Gibt den Abstand zwischen den Tabellenzeilen an. Mehrere durch Leerzeichen getrennte Werte sind erlaubt und gelten für die entsprechenden Zeilen (z.B. `rowspacing="1em 2em"`). Mögliche Werte sind {{cssxref("length-percentage")}}.
- `width` {{Non-standard_Inline}}
  - : Eine {{cssxref("length-percentage")}}, die die Breite der gesamten Tabelle angibt.

> [!NOTE]
> Für das `width`-Attribut können einige Browser auch [veraltete MathML-Längen](/de/docs/Web/MathML/Values#legacy_mathml_lengths) akzeptieren.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ MathMLElement("mtd") }} (Tabellenzelle)
- {{ MathMLElement("mtr") }} (Tabellenzeile)
