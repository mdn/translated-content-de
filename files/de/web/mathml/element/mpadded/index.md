---
title: <mpadded>
slug: Web/MathML/Element/mpadded
l10n:
  sourceCommit: 4f263d8dfb90fa2253e090ee339ae14d1907fa63
---

{{MathMLRef}}

Das **`<mpadded>`** [MathML](/de/docs/Web/MathML) Element wird verwendet, um zusätzliche Polsterung hinzuzufügen und die allgemeine Anpassung der Position und Größe des enthaltenen Inhalts festzulegen.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes) sowie die folgenden Attribute:

- `depth`
  - : Ein {{cssxref("length-percentage")}}, das die gewünschte Tiefe (unter der Basislinie) des `<mpadded>` Elements angibt.
- `height`
  - : Ein {{cssxref("length-percentage")}}, das die gewünschte Höhe (über der Basislinie) des `<mpadded>` Elements angibt.
- `lspace`
  - : Ein {{cssxref("length-percentage")}}, das die horizontale Position des Positionierungspunktes des Inhalts im Vergleich zum Positionierungspunkt des `<mpadded>` Elements angibt.
- `voffset`
  - : Ein {{cssxref("length-percentage")}}, das die vertikale Position des Positionierungspunktes des Inhalts im Vergleich zum Positionierungspunkt des `<mpadded>` Elements angibt.
- `width`
  - : Ein {{cssxref("length-percentage")}}, das die gewünschte horizontale Länge des `<mpadded>` Elements angibt.

### Syntax der älteren Versionen

Für die Attribute `depth`, `height`, `lspace`, `voffset` und `width` könnten einige Browser stattdessen eine komplexere Syntax akzeptieren:

1. Ein optionales `+` oder `-` Zeichen als Präfix, das eine Erhöhung oder Verringerung der entsprechenden Dimension angibt (wenn es nicht vorhanden ist, wird die entsprechende Dimension direkt auf den angegebenen Wert gesetzt).
2. Gefolgt von einer [`<unsigned-number>`](/de/docs/Web/MathML/Values#mathml-specific_types) (wir nennen es hier α).
3. Optional gefolgt von einem Wert (wenn es fehlt, wird der angegebene Wert als "100 mal α Prozent" interpretiert).
   - Eine [Einheit](/de/docs/Web/MathML/Values#units). Der angegebene Wert wird genauso interpretiert wie [MathML-Längen der älteren Versionen](/de/docs/Web/MathML/Values#legacy_mathml_lengths).
   - Eine [namedspace Konstante](/de/docs/Web/MathML/Values#constants). Der angegebene Wert wird als α mal die Konstante interpretiert.
   - Eine Pseudo-Einheit `width`, `height` oder `depth`. Der angegebene Wert wird als α mal die entsprechende Dimension des Inhalts interpretiert.
   - Ein Prozentzeichen gefolgt von einer Pseudo-Einheit `width`, `height` oder `depth`. Der angegebene Wert wird als α% der entsprechenden Dimension des Inhalts interpretiert.

## Beispiele

### Dimensionen und Offsets

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

### Syntax der älteren Versionen

```html
<math display="block">
  <!-- Erhöhung um eine Länge -->
  <mpadded width="+20px" style="background: lightblue">
    <mtext>+20px</mtext>
  </mpadded>

  <!-- Setzen auf eine Pseudo-Einheit -->
  <mpadded width="2width" style="background: lightgreen">
    <mtext>2width</mtext>
  </mpadded>

  <!-- Erhöhung um einen Prozentsatz einer Pseudo-Einheit -->
  <mpadded width="+400%height" style="background: lightyellow">
    <mtext>+400%height</mtext>
  </mpadded>

  <!-- Verringerung auf ein Vielfaches eines namedspace -->
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
