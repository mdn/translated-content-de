---
title: <mpadded>
slug: Web/MathML/Reference/Element/mpadded
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Das **`<mpadded>`**-Element von [MathML](/de/docs/Web/MathML) wird verwendet, um zusätzlichen Abstand hinzuzufügen und die Position und Größe des eingeschlossenen Inhalts anzupassen.

## Attribute

Zu den Attributen dieses Elements gehören die [globalen MathML-Attribute](/de/docs/Web/MathML/Reference/Global_attributes) sowie die folgenden Attribute:

- `depth`
  - : Eine {{cssxref("length-percentage")}}, die die gewünschte Tiefe (unterhalb der Grundlinie) des `<mpadded>`-Elements angibt.
- `height`
  - : Eine {{cssxref("length-percentage")}}, die die gewünschte Höhe (oberhalb der Grundlinie) des `<mpadded>`-Elements angibt.
- `lspace`
  - : Eine {{cssxref("length-percentage")}}, die die horizontale Lage des Positionierungspunkts des untergeordneten Inhalts relativ zum Positionierungspunkt des `<mpadded>`-Elements angibt.
- `voffset`
  - : Eine {{cssxref("length-percentage")}}, die die vertikale Lage des Positionierungspunkts des untergeordneten Inhalts relativ zum Positionierungspunkt des `<mpadded>`-Elements angibt.
- `width`
  - : Eine {{cssxref("length-percentage")}}, die die gewünschte horizontale Ausdehnung des `<mpadded>`-Elements angibt.

### Veraltete Syntax

Für die Attribute `depth`, `height`, `lspace`, `voffset` und `width` akzeptieren manche Browser stattdessen möglicherweise eine komplexere Syntax:

1. Optional ein vorangestelltes `+`- oder `-`-Zeichen, das eine Vergrößerung oder Verkleinerung der entsprechenden Abmessung festlegt. Fehlt das Zeichen, wird die entsprechende Abmessung direkt auf den angegebenen Wert gesetzt.
2. Darauf folgt eine [`<unsigned-number>`](/de/docs/Web/MathML/Reference/Values#mathml-specific_types) (im Folgenden α genannt).
3. Optional folgt darauf eine Angabe. Fehlt sie, wird der angegebene Wert als „100 × α Prozent“ interpretiert.
   - Eine [Einheit](/de/docs/Web/MathML/Reference/Values#units). Der angegebene Wert wird wie bei [veralteten MathML-Längenangaben](/de/docs/Web/MathML/Reference/Values#legacy_mathml_lengths) interpretiert.
   - Eine [namedspace-Konstante](/de/docs/Web/MathML/Reference/Values#constants). Der angegebene Wert wird als α-faches der Konstante interpretiert.
   - Eine Pseudoeinheit `width`, `height` oder `depth`. Der angegebene Wert wird als α-faches der entsprechenden Abmessung des Inhalts interpretiert.
   - Ein Prozentzeichen, gefolgt von einer Pseudoeinheit `width`, `height` oder `depth`. Der angegebene Wert wird als α % der entsprechenden Abmessung des Inhalts interpretiert.

## Beispiele

### Abmessungen und Versatz

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

{{ EmbedLiveSample('dimensions_and_offsets', 700, 200, "", "") }}

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

{{ EmbedLiveSample('legacy_syntax_2', 700, 200, "", "") }}

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
