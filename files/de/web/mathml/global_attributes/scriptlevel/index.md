---
title: scriptlevel
slug: Web/MathML/Global_attributes/scriptlevel
l10n:
  sourceCommit: 8eece0b998c23e8ea35f936d7371a169974130f5
---

{{MathMLRef}}

Das **`scriptlevel`** [Globale Attribut](/de/docs/Web/MathML/Global_attributes) setzt die [math-depth](/de/docs/Web/CSS/math-depth) eines MathML-Elements. Es ermöglicht das Überschreiben von Regeln des [Benutzeragenten-Stylesheets](/de/docs/Web/CSS/Cascade#user-agent_stylesheets), die die automatische Berechnung der [Schriftgröße](/de/docs/Web/CSS/font-size) in MathML-Formeln definieren.

## Beispiel

```html
<!-- math-depth ist standardmäßig auf 0 auf der <math>-Wurzel. -->
<math style="font-size: 64pt">
  <msubsup>
    <!-- math-depth und font-size bleiben auf der Basis unverändert. -->
    <mtext>BASE</mtext>
    <!-- math-depth erhöht sich standardmäßig um 1 innerhalb des Subskripts,
         daher wird es um 1 erhöht und die Schriftgröße einmal verkleinert. -->
    <mtext>SUBSCRIPT</mtext>
    <!-- math-depth erhöht sich standardmäßig auch um 1 innerhalb des Superskripts,
         aber das scriptlevel-Attribut gibt an, es um 2 zu erhöhen,
         sodass die Schriftgröße tatsächlich zweimal verkleinert wird. -->
    <mtext scriptlevel="+2">SUPERSCRIPT</mtext>
  </msubsup>
</math>
```

## Syntax

```html-nolint
<math scriptlevel="-1"> <!-- verringert math-depth um 1 -->
<math scriptlevel="+2"> <!-- erhöht math-depth um 2 -->
<math scriptlevel="0"> <!-- setzt math-depth auf 0 zurück -->
```

### Werte

Wenn `<U>` eine vorzeichenlose [Ganzzahl](/de/docs/Web/CSS/integer) ist (d.h. ohne Vorzeichen), dann sind die akzeptierten Werte:

- `<U>`
  - : Setzt die `math-depth` auf den Wert `<U>`. Dadurch wird die `font-size` des Elements auf den gleichen Wert wie bei Elementen in der angegebenen Tiefe gesetzt.
- `+<U>`
  - : Setzt die `math-depth` auf den Wert `add(<U>)`. Dadurch wird die `font-size` des Elements `<U>`-mal verkleinert.
- `-<U>`
  - : Setzt die `math-depth` auf den Wert `add(-<U>)`. Dadurch wird die `font-size` des Elements `<U>`-mal vergrößert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/MathML/Global_attributes).
- Das [displaystyle](/de/docs/Web/MathML/Global_attributes/displaystyle) globale Attribut.
- {{cssxref("font-size")}}
- {{cssxref("math-depth")}}
- {{cssxref("math-style")}}
