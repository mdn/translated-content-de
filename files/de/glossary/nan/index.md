---
title: NaN
slug: Glossary/NaN
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

NaN (Not a Number) ist ein numerischer {{Glossary("Type", "Datentyp")}}, der einen undefinierten Wert oder einen Wert bedeutet, der nicht dargestellt werden kann, insbesondere Ergebnisse von Gleitkommaberechnungen.

Zum Beispiel können NaNs Unendlichkeit darstellen, das Ergebnis einer Division durch Null, einen fehlenden Wert oder die Quadratwurzel einer negativen Zahl (die imaginär ist, während eine Gleitkommazahl real ist).

Praktisch gesehen, wenn ich zwei Variablen in einem {{Glossary("JavaScript", "JavaScript")}}-Programm dividiere, kann das Ergebnis NaN sein, das in JavaScript als "undefiniert" vordefiniert ist. Daher kann diese Division das Programm unterbrechen. Wenn diese Berechnung ein kleiner Teil eines viel größeren Algorithmus war, wäre es wirklich mühsam herauszufinden, wo der Fehler tatsächlich auftritt. Glücklicherweise, da das Ergebnis NaN sein wird und ich weiß, dass mein Divisor möglicherweise 0 wird, kann ich Testbedingungen einrichten, die solche Berechnungen von vornherein verhindern oder mich informieren, wo sie auftreten.

## Siehe auch

- [NaN](https://en.wikipedia.org/wiki/NaN) auf Wikipedia
- [NaN in JavaScript](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN)
