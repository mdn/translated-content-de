---
title: scriptlevel
slug: Web/MathML/Reference/Global_attributes/scriptlevel
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Das **`scriptlevel`** [globale Attribut](/de/docs/Web/MathML/Reference/Global_attributes) legt die [math-depth](/de/docs/Web/CSS/math-depth) eines MathML-Elements fest. Es ermöglicht das Überschreiben von Regeln aus dem [User-Agent-Stylesheet](/de/docs/Web/CSS/CSS_cascade/Cascade#user-agent_stylesheets), die die automatische Berechnung der [Schriftgröße](/de/docs/Web/CSS/font-size) innerhalb von MathML-Formeln definieren.

## Beispiel

```css hidden
html,
body {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
}
```

```html
<!-- math-depth defaults to 0 on the <math> root. -->
<math style="font-size: 24px">
  <msubsup>
    <!-- math-depth and font-size remain unchanged on the base. -->
    <mtext>base</mtext>
    <!-- math-depth defaults to add(1) within the subscript, so it
         is incremented by 1 and the font-size is scaled down once. -->
    <mtext>subscript</mtext>
    <!-- math-depth defaults to add(1) within the superscript too, but
         the scriptlevel attribute tells to increment it by 2 instead,
         so the font-size is actually scaled down twice. -->
    <mtext scriptlevel="+2">superscript</mtext>
  </msubsup>
</math>
```

## Syntax

```html-nolint
<math scriptlevel="-1"> <!-- decrease math-depth by 1 -->
<math scriptlevel="+2"> <!-- increase math-depth by 2 -->
<math scriptlevel="0"> <!-- reset math-depth to 0 -->
```

### Werte

Wenn `<U>` eine nicht signierte [Ganzzahl](/de/docs/Web/CSS/integer) ist (d.h. ohne vorangestelltes Vorzeichen), dann sind die akzeptierten Werte:

- `<U>`
  - : Setzt die `math-depth` auf den Wert `<U>`. Dies setzt die `font-size` des Elements auf denselben Wert wie die der Elemente in der angegebenen Tiefe.
- `+<U>`
  - : Setzt die `math-depth` auf den Wert `add(<U>)`. Dadurch wird die `font-size` des Elements um `<U>`-mal verkleinert.
- `-<U>`
  - : Setzt die `math-depth` auf den Wert `add(-<U>)`. Dadurch wird die `font-size` des Elements um `<U>`-mal vergrößert.

{{EmbedLiveSample("Example", "", 150)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/MathML/Reference/Global_attributes).
- Das [displaystyle](/de/docs/Web/MathML/Reference/Global_attributes/displaystyle) globale Attribut.
- {{cssxref("font-size")}}
- {{cssxref("math-depth")}}
- {{cssxref("math-style")}}
