---
title: <mpadded>
slug: Web/MathML/Reference/Element/mpadded
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

Das **`<mpadded>`** [MathML](/de/docs/Web/MathML) Element wird verwendet, um zusätzlichen Abstand hinzuzufügen und die allgemeine Anpassung von Position und Größe der eingeschlossenen Inhalte festzulegen.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Reference/Global_attributes) sowie die folgenden Attribute:

- `depth`
  - : Ein {{cssxref("length-percentage")}}, das die gewünschte Tiefe (unterhalb der Grundlinie) des `<mpadded>` Elements angibt.
- `height`
  - : Ein {{cssxref("length-percentage")}}, das die gewünschte Höhe (oberhalb der Grundlinie) des `<mpadded>` Elements angibt.
- `lspace`
  - : Ein {{cssxref("length-percentage")}}, das die horizontale Position des Positionierungspunkts des Kindinhalts in Bezug auf den Positionierungspunkt des `<mpadded>` Elements angibt.
- `voffset`
  - : Ein {{cssxref("length-percentage")}}, das die vertikale Position des Positionierungspunkts des Kindinhalts in Bezug auf den Positionierungspunkt des `<mpadded>` Elements angibt.
- `width`
  - : Ein {{cssxref("length-percentage")}}, das die gewünschte horizontale Länge des `<mpadded>` Elements angibt.

### Veraltete Syntax

Für die Attribute `depth`, `height`, `lspace`, `voffset` und `width` akzeptieren einige Browser möglicherweise stattdessen eine komplexere Syntax:

1. Ein optionales `+` oder `-` Zeichen als Präfix, das eine Erhöhung oder Verringerung der entsprechenden Dimension angibt (wenn nicht vorhanden, wird die entsprechende Dimension direkt auf den angegebenen Wert gesetzt).
2. Gefolgt von einer [`<unsigned-number>`](/de/docs/Web/MathML/Reference/Values#mathml-specific_types) (wir nennen es α unten).
3. Optional gefolgt von einem Wert (wenn nicht vorhanden, wird der angegebene Wert als "100 mal α Prozent" interpretiert).
   - Eine [Einheit](/de/docs/Web/MathML/Reference/Values#units). Der angegebene Wert wird wie [veraltete MathML-Längen](/de/docs/Web/MathML/Reference/Values#legacy_mathml_lengths) interpretiert.
   - Eine [namedspace Konstante](/de/docs/Web/MathML/Reference/Values#constants). Der angegebene Wert wird als α mal die Konstante interpretiert.
   - Eine Pseudo-Einheit `width`, `height` oder `depth`. Der angegebene Wert wird als α mal die entsprechende Dimension des Inhalts interpretiert.
   - Ein Prozentzeichen gefolgt von einer Pseudo-Einheit `width`, `height` oder `depth`. Der angegebene Wert wird als α% der entsprechenden Dimension des Inhalts interpretiert.

## Beispiele

### Dimensionen und Versätze

```html
<math display="block">
  <mpadded width="400px" height="5em" depth="4em" lspace="300px" voffset="-2em">
    <mi>x</mi>
    <mo>+</mo>
    <mi>y</mi>
  </mpadded>
</math>
```

```css
mpadded {
  background: lightblue;
}
```

{{ EmbedLiveSample('dimensions_and_offsets_example', 700, 200, "", "") }}

### Veraltete Syntax

```html
<math display="block">
  <!-- increment by a length -->
  <mpadded width="+20px">
    <mtext>+20px</mtext>
  </mpadded>

  <!-- set to a pseudo-unit -->
  <mpadded width="2width">
    <mtext>2width</mtext>
  </mpadded>

  <!-- increment by a percent of a pseudo-unit -->
  <mpadded width="+400%height">
    <mtext>+400%height</mtext>
  </mpadded>

  <!-- decrement to a multiple of a namedspace -->
  <mpadded width="-1thickmathspace">
    <mtext>-1thickmathspace</mtext>
  </mpadded>
</math>
```

```css
mpadded:nth-child(1) {
  background: lightblue;
}
mpadded:nth-child(2) {
  background: lightgreen;
}
mpadded:nth-child(3) {
  background: lightyellow;
}
mpadded:nth-child(4) {
  background: pink;
}
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
