---
title: NaN (Nicht eine Zahl)
slug: Glossary/NaN
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

NaN (Nicht eine Zahl) ist ein numerischer {{Glossary("Type", "Datentyp")}}, der einen undefinierten Wert oder einen Wert darstellt, der nicht dargestellt werden kann, insbesondere Ergebnisse von Fließkomma-Berechnungen.

Zum Beispiel können NaNs Unendlichkeit darstellen, das Ergebnis einer Division durch Null, einen fehlenden Wert oder die Quadratwurzel einer negativen Zahl (die imaginär ist, während eine Fließkommazahl real ist).

Praktisch betrachtet, wenn ich zwei Variablen in einem {{glossary("JavaScript")}} Programm dividiere, kann das Ergebnis NaN sein, das in JavaScript als "undefiniert" voreingestellt ist. Diese Division kann das Programm zum Absturz bringen. Wenn diese Berechnung jedoch nur ein kleiner Teil eines viel größeren Algorithmus ist, wäre es wirklich mühsam herauszufinden, wo der Fehler tatsächlich auftritt. Glücklicherweise, da das Ergebnis NaN sein wird und ich weiß, dass mein Divisor 0 sein könnte, kann ich Testbedingungen einrichten, die solche Berechnungen von vornherein verhindern oder mich darüber informieren, wo sie auftreten.

## Siehe auch

- [NaN](https://en.wikipedia.org/wiki/NaN) auf Wikipedia
- [NaN in JavaScript](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN)
