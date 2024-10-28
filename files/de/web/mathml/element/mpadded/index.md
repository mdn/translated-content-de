---
title: <mpadded>
slug: Web/MathML/Element/mpadded
l10n:
  sourceCommit: a9a6b72518fa068991c95e8c1a5ba224533e53ee
---

{{MathMLRef}}

Das **`<mpadded>`** [MathML](/de/docs/Web/MathML)-Element wird verwendet, um zusätzliche Abstände hinzuzufügen und die allgemeine Anpassung von Position und Größe der eingeschlossenen Inhalte festzulegen.

## Attribute

Dieses Element enthält die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes) sowie die folgenden spezifischen Attribute:

- `depth`
  - : Eine {{cssxref("length-percentage")}} zur Angabe der gewünschten Tiefe (unterhalb der Grundlinie) des `<mpadded>`-Elements.
- `height`
  - : Eine {{cssxref("length-percentage")}} zur Angabe der gewünschten Höhe (oberhalb der Grundlinie) des `<mpadded>`-Elements.
- `lspace`
  - : Eine {{cssxref("length-percentage")}} zur Angabe der horizontalen Position des Positionierungspunktes des Kindelements in Bezug auf den Positionierungspunkt des `<mpadded>`-Elements.
- `voffset`
  - : Eine {{cssxref("length-percentage")}} zur Angabe der vertikalen Position des Positionierungspunktes des Kindelements in Bezug auf den Positionierungspunkt des `<mpadded>`-Elements.
- `width`
  - : Eine {{cssxref("length-percentage")}} zur Angabe der gewünschten horizontalen Länge des `<mpadded>`-Elements.

### Veraltete Syntax

Für die Attribute `depth`, `height`, `lspace`, `voffset` und `width` können einige Browser stattdessen eine komplexere Syntax akzeptieren:

1. Ein optionales `+`- oder `-`-Zeichen als Präfix, das eine Erhöhung oder Verringerung der entsprechenden Dimension angibt (falls nicht vorhanden, wird die entsprechende Dimension direkt auf den angegebenen Wert gesetzt).
2. Gefolgt von einer [`<unsigned-number>`](/de/docs/Web/MathML/Values#mathml-specific_types) (wir nennen es α im Folgenden).
3. Optional gefolgt von einem Wert (falls nicht vorhanden, wird der angegebene Wert als "100 mal α Prozent" interpretiert).
   - Eine [Einheit](/de/docs/Web/MathML/Values#units). Der angegebene Wert wird wie [veraltete MathML-Längen](/de/docs/Web/MathML/Values#legacy_mathml_lengths) interpretiert.
   - Eine [Konstante im benannten Raum](/de/docs/Web/MathML/Values#constants). Der angegebene Wert wird als α mal die Konstante interpretiert.
   - Eine Pseudo-Einheit `width`, `height` oder `depth`. Der angegebene Wert wird als α mal die entsprechende Dimension des Inhalts interpretiert.
   - Ein Prozentzeichen gefolgt von einer Pseudo-Einheit `width`, `height` oder `depth`. Der angegebene Wert wird als α% der entsprechenden Dimension des Inhalts interpretiert.

## Beispiele

### Dimensionen und Versätze

```html
<math display="block">
  <mpadded
    width="400px"
    height="5em"
    depth="4em"
    lspace="300px"
    voffset="-2em"
    style="background: lightblue">
    <mi>x</mi>
    <mo>+</mo>
    <mi>y</mi>
  </mpadded>
</math>
```

{{ EmbedLiveSample('dimensions_and_offsets_example', 700, 200, "", "") }}

### Veraltete Syntax

```html
<math display="block">
  <!-- increment by a length -->
  <mpadded width="+20px" style="background: lightblue">
    <mtext>+20px</mtext>
  </mpadded>

  <!-- set to a pseudo-unit -->
  <mpadded width="2width" style="background: lightgreen">
    <mtext>2width</mtext>
  </mpadded>

  <!-- increment by a percent of a pseudo-unit -->
  <mpadded width="+400%height" style="background: lightyellow">
    <mtext>+400%height</mtext>
  </mpadded>

  <!-- decrement to a multiple of a namedspace -->
  <mpadded width="-1thickmathspace" style="background: pink">
    <mtext>-.5thickmathspace</mtext>
  </mpadded>
</math>
```

{{ EmbedLiveSample('legacy_syntax_example', 700, 200, "", "") }}

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

- {{ MathMLElement("mphantom") }}
- {{ MathMLElement("mspace") }}
