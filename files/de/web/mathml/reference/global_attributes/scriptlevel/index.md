---
title: scriptlevel
slug: Web/MathML/Reference/Global_attributes/scriptlevel
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Das **`scriptlevel`** [globale Attribut](/de/docs/Web/MathML/Reference/Global_attributes) setzt die [math-depth](/de/docs/Web/CSS/Reference/Properties/math-depth) eines MathML-Elements. Es ermöglicht das Überschreiben von Regeln aus dem [User-Agent-Stylesheet](/de/docs/Web/CSS/CSS_cascade/Cascade#user-agent_stylesheets), die die automatische Berechnung der [Schriftgröße](/de/docs/Web/CSS/Reference/Properties/font-size) innerhalb von MathML-Formeln definieren.

## Syntax

```html-nolint
<math scriptlevel="-1"> <!-- decrease math-depth by 1 -->
<math scriptlevel="+2"> <!-- increase math-depth by 2 -->
<math scriptlevel="0"> <!-- reset math-depth to 0 -->
```

### Werte

Wenn `<U>` eine nicht negative [Ganzzahl](/de/docs/Web/CSS/Reference/Values/integer) ist (d.h. das Vorzeichenzeichen wurde entfernt), dann sind die akzeptierten Werte:

- `<U>`
  - : Setzt die `math-depth` auf den Wert `<U>`. Dies wird die `Schriftgröße` des Elements auf denselben Wert setzen wie die von Elementen in der angegebenen Tiefe.
- `+<U>`
  - : Setzt die `math-depth` auf den Wert `add(<U>)`. Dies wird die `Schriftgröße` des Elements `<U>`-mal verkleinern.
- `-<U>`
  - : Setzt die `math-depth` auf den Wert `add(-<U>)`. Dies wird die `Schriftgröße` des Elements `<U>`-mal vergrößern.

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

math {
  font-size: 24px;
}
```

```html
<!-- math-depth defaults to 0 on the <math> root. -->
<math>
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

{{EmbedLiveSample("Example", "", 150)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/MathML/Reference/Global_attributes).
- Das globale Attribut [displaystyle](/de/docs/Web/MathML/Reference/Global_attributes/displaystyle).
- {{cssxref("font-size")}}
- {{cssxref("math-depth")}}
- {{cssxref("math-style")}}
