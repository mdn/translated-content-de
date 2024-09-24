---
title: <frequency-percentage>
slug: Web/CSS/frequency-percentage
l10n:
  sourceCommit: 66944f622b6b51bc9c24bebbbea242138d910600
---

{{CSSRef}}

Der **`<frequency-percentage>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert einen Wert, der entweder eine {{Cssxref("frequency")}} oder ein {{Cssxref("percentage")}} sein kann. Frequenzwerte, z.B. die Tonhöhe einer Sprechstimme, werden derzeit in keiner CSS-Eigenschaft verwendet.

## Syntax

Der Wert eines `<frequency-percentage>` ist entweder eine {{Cssxref("frequency")}} oder ein {{Cssxref("percentage")}}; Details zu ihren Syntaxen finden Sie auf den jeweiligen Referenzseiten.

## Beschreibung

### Verwendung in calc()

Wo ein `<frequency-percentage>` als zulässiger Typ angegeben ist, bedeutet dies, dass der Prozentsatz in eine Frequenz aufgelöst wird und daher in einem [`calc()`](/de/docs/Web/CSS/calc)-Ausdruck verwendet werden kann.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Gültige Prozentwerte

```plain example-good
90% Positiver Prozentsatz
+90% Positiver Prozentsatz mit führendem +
-90% Negativer Prozentsatz — nicht gültig für alle Eigenschaften, die Prozentwerte verwenden
```

### Ungültige Prozentwerte

```plain example-bad
90 % Kein Leerzeichen zwischen der Zahl und der Einheit erlaubt
```

### Gültige Frequenzwerte

```plain example-good
12Hz     Positive Ganzzahl
4.3Hz    Nicht-Ganzzahl
14KhZ    Die Einheit ist nicht groß-/klein-schreibungssensitiv, obwohl nicht-SI-Kapitalisierungen nicht empfohlen werden.
+0Hz     Null, mit einem führenden + und einer Einheit
-0kHz    Null, mit einem führenden - und einer Einheit
```

### Ungültige Frequenzwerte

```plain example-bad
12.0     Dies ist eine <number>, keine <frequency>, da eine Einheit fehlt.
7 Hz     Kein Leerzeichen zwischen der Zahl und der Einheit erlaubt.
0        Obwohl einheitliche Null ein zulässiger <length> ist, ist es eine ungültige <frequency>.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Datentypen](/de/docs/Web/CSS/CSS_Types)
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units)
- Verwandte CSS-Datentypen:

  - {{cssxref("frequency", "&lt;frequency&gt;")}}
  - {{cssxref("percentage", "&lt;percentage&gt;")}}
