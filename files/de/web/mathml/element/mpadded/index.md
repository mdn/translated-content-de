---
title: <mpadded>
slug: Web/MathML/Element/mpadded
l10n:
  sourceCommit: 4f263d8dfb90fa2253e090ee339ae14d1907fa63
---

{{MathMLRef}}

Das **`<mpadded>`** [MathML](/de/docs/Web/MathML)-Element wird verwendet, um zusätzlichen Abstand hinzuzufügen und die allgemeine Anpassung der Position und Größe der eingeschlossenen Inhalte festzulegen.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes) sowie die folgenden Attribute:

- `depth`
  - : Eine {{cssxref("length-percentage")}}-Angabe, die die gewünschte Tiefe (unterhalb der Basislinie) des `<mpadded>`-Elements angibt.
- `height`
  - : Eine {{cssxref("length-percentage")}}-Angabe, die die gewünschte Höhe (oberhalb der Basislinie) des `<mpadded>`-Elements angibt.
- `lspace`
  - : Eine {{cssxref("length-percentage")}}-Angabe, die die horizontale Position des Positionierungspunktes des Kinderinhalts in Bezug auf den Positionierungspunkt des `<mpadded>`-Elements angibt.
- `voffset`
  - : Eine {{cssxref("length-percentage")}}-Angabe, die die vertikale Position des Positionierungspunktes des Kinderinhalts in Bezug auf den Positionierungspunkt des `<mpadded>`-Elements angibt.
- `width`
  - : Eine {{cssxref("length-percentage")}}-Angabe, die die gewünschte horizontale Länge des `<mpadded>`-Elements angibt.

### Veraltete Syntax

Für die Attribute `depth`, `height`, `lspace`, `voffset` und `width` können einige Browser stattdessen eine komplexere Syntax akzeptieren:

1. Ein optionales `+` oder `-` Zeichen als Präfix, das eine Erhöhung oder Verringerung der entsprechenden Dimension angibt (wenn nicht vorhanden, wird die entsprechende Dimension direkt auf den angegebenen Wert gesetzt).
2. Gefolgt von einer [`<unsigned-number>`](/de/docs/Web/MathML/Values#mathml-specific_types) (wir nennen sie α unten).
3. Optional gefolgt von einem Wert (wenn nicht vorhanden, wird der angegebene Wert als "100 mal α Prozent" interpretiert).
   - Eine [Einheit](/de/docs/Web/MathML/Values#units). Der angegebene Wert wird wie bei [veralteten MathML-Längen](/de/docs/Web/MathML/Values#legacy_mathml_lengths) interpretiert.
   - Eine [namedspace Konstante](/de/docs/Web/MathML/Values#constants). Der angegebene Wert wird als α mal der Konstanten interpretiert.
   - Eine Pseudo-Einheit `width`, `height` oder `depth`. Der angegebene Wert wird als α mal der entsprechenden Dimension des Inhalts interpretiert.
   - Ein Prozentzeichen gefolgt von einer Pseudo-Einheit `width`, `height` oder `depth`. Der angegebene Wert wird als α% der entsprechenden Dimension des Inhalts interpretiert.

## Beispiele

### Dimensionen und Abstände

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ MathMLElement("mphantom") }}
- {{ MathMLElement("mspace") }}
