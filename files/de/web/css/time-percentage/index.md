---
title: <time-percentage>
slug: Web/CSS/time-percentage
l10n:
  sourceCommit: b82ff59aab7883b7bb2222cf9f9f9b6eed818e08
---

{{CSSRef}}

Der **`<time-percentage>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert einen Wert, der entweder eine {{Cssxref("time")}} oder ein {{Cssxref("percentage")}} sein kann.

## Syntax

Verweisen Sie auf die Dokumentation für {{Cssxref("time")}} und {{Cssxref("percentage")}}, um Details zu den einzelnen erlaubten Syntaxen dieses Typs zu erhalten.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung in calc()

Wenn ein `<time-percentage>` als zulässiger Typ angegeben ist, bedeutet dies, dass der Prozentsatz in eine Zeit aufgelöst wird und daher in einem {{Cssxref("calc", "calc()")}}-Ausdruck verwendet werden kann.

### Gültige Prozentsätze

```plain example-good
50%
+50%        Optionales Pluszeichen
-50%        Negative Prozentsätze sind nicht für alle Eigenschaften gültig, die Prozentsätze akzeptieren
```

### Ungültige Prozentsätze

```plain example-bad
50 %        Kein Leerzeichen zwischen Zahl und Prozentzeichen erlaubt
```

### Gültige Zeiten

```plain example-good
12s         Positive Ganzzahl
-456ms      Negative Ganzzahl
4.3ms       Nicht-Ganzzahl
14mS        Die Einheit ist nicht groß-/kleinschreibungssensitiv, obwohl Großbuchstaben nicht empfohlen werden.
+0s         Null mit führendem + und Einheit
-0ms        Null mit führendem - und Einheit
```

### Ungültige Zeiten

```plain example-bad
0           Obwohl einheitsloses Null für <length>s erlaubt ist, ist es für <time>s ungültig.
12.0        Dies ist eine <number>, nicht eine <time>, da eine Einheit fehlt.
7 ms        Kein Leerzeichen zwischen Zahl und Einheit erlaubt.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("&lt;percentage&gt;")}}
- {{cssxref("&lt;time&gt;")}}
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units)
