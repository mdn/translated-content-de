---
title: <mpadded>
slug: Web/MathML/Element/mpadded
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{MathMLRef}}

Das **`<mpadded>`** [MathML](/de/docs/Web/MathML)-Element wird verwendet, um zusätzlichen Abstand hinzuzufügen und die allgemeine Anpassung der Position und Größe des umschlossenen Inhalts festzulegen.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes) sowie die folgenden Attribute:

- `depth`
  - : Ein {{cssxref("length-percentage")}}, das die gewünschte Tiefe (unterhalb der Basislinie) des `<mpadded>`-Elements angibt.
- `height`
  - : Ein {{cssxref("length-percentage")}}, das die gewünschte Höhe (oberhalb der Basislinie) des `<mpadded>`-Elements angibt.
- `lspace`
  - : Ein {{cssxref("length-percentage")}}, das die horizontale Lage des Positionierungspunktes des Kindinhalts im Verhältnis zum Positionierungspunkt des `<mpadded>`-Elements angibt.
- `voffset`
  - : Ein {{cssxref("length-percentage")}}, das die vertikale Lage des Positionierungspunktes des Kindinhalts im Verhältnis zum Positionierungspunkt des `<mpadded>`-Elements angibt.
- `width`
  - : Ein {{cssxref("length-percentage")}}, das die gewünschte horizontale Länge des `<mpadded>`-Elements angibt.

### Veraltete Syntax

Für die Attribute `depth`, `height`, `lspace`, `voffset` und `width` können einige Browser stattdessen eine komplexere Syntax akzeptieren:

1. Ein optionales `+` oder `-` Zeichen als Präfix, das eine Erhöhung oder Verringerung des entsprechenden Maßes angibt (wenn es fehlt, wird das entsprechende Maß direkt auf den angegebenen Wert gesetzt).
2. Gefolgt von einer [`<unsigned-number>`](/de/docs/Web/MathML/Values#mathml-specific_types) (wir nennen es α unten).
3. Optional gefolgt von einem Wert (wenn nicht vorhanden, wird der angegebene Wert als "100 mal α Prozent" interpretiert).
   - Eine [Einheit](/de/docs/Web/MathML/Values#units). Der angegebene Wert wird wie [veraltete MathML-Längen](/de/docs/Web/MathML/Values#legacy_mathml_lengths) interpretiert.
   - Eine [namedspace-Konstante](/de/docs/Web/MathML/Values#constants). Der angegebene Wert wird als α mal die Konstante interpretiert.
   - Eine Pseudo-Einheit `width`, `height` oder `depth`. Der angegebene Wert wird als α mal das entsprechende Maß des Inhalts interpretiert.
   - Ein Prozentzeichen gefolgt von einer Pseudo-Einheit `width`, `height` oder `depth`. Der angegebene Wert wird als α% des entsprechenden Maßes des Inhalts interpretiert.

## Beispiele

### Maße und Versätze

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

- {{ MathMLElement("mphantom") }}
- {{ MathMLElement("mspace") }}
