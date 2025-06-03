---
title: scriptlevel
slug: Web/MathML/Reference/Global_attributes/scriptlevel
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

Das **`scriptlevel`** [Globale Attribut](/de/docs/Web/MathML/Reference/Global_attributes) legt die [math-depth](/de/docs/Web/CSS/math-depth) eines MathML-Elements fest. Es erlaubt das Überschreiben von Regeln aus dem [Benutzeragenten-Stylesheet](/de/docs/Web/CSS/CSS_cascade/Cascade#user-agent_stylesheets), die eine automatische Berechnung der [Schriftgröße](/de/docs/Web/CSS/font-size) innerhalb von MathML-Formeln definieren.

## Syntax

```html-nolint
<math scriptlevel="-1"> <!-- decrease math-depth by 1 -->
<math scriptlevel="+2"> <!-- increase math-depth by 2 -->
<math scriptlevel="0"> <!-- reset math-depth to 0 -->
```

### Werte

Wenn `<U>` eine vorzeichenlose [Ganzzahl](/de/docs/Web/CSS/integer) ist (d.h. das Vorzeichen wurde entfernt), dann sind die akzeptierten Werte:

- `<U>`
  - : Setzt die `math-depth` auf den Wert `<U>`. Dies setzt die `Schriftgröße` des Elements auf denselben Wert wie der von Elementen in der angegebenen Tiefe.
- `+<U>`
  - : Setzt die `math-depth` auf den Wert `add(<U>)`. Dies verkleinert die `Schriftgröße` des Elements um das `<U>`-Fache.
- `-<U>`
  - : Setzt die `math-depth` auf den Wert `add(-<U>)`. Dies vergrößert die `Schriftgröße` des Elements um das `<U>`-Fache.

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
