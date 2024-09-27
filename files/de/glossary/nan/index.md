---
title: NaN
slug: Glossary/NaN
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

NaN (Not a Number) ist ein numerischer [Datentyp](/de/docs/Glossary/Type), der einen undefinierten Wert oder einen nicht darstellbaren Wert bedeutet, insbesondere Ergebnisse von Gleitkommaberechnungen.

Zum Beispiel können NaNs Unendlichkeit, das Ergebnis einer Division durch Null, einen fehlenden Wert oder die Quadratwurzel einer negativen Zahl (die imaginär ist, während eine Gleitkommazahl real ist) darstellen.

Praktisch gesehen, wenn ich zwei Variablen in einem [JavaScript](/de/docs/Glossary/JavaScript)-Programm dividiere, kann das Ergebnis NaN sein, was in JavaScript als "undefiniert" vordefiniert ist. Daher kann diese Division das Programm unterbrechen. Wenn diese Berechnung jedoch nur ein kleiner Teil eines viel größeren Algorithmus wäre, wäre es wirklich mühsam herauszufinden, wo der Fehler tatsächlich auftritt. Glücklicherweise, da das Ergebnis NaN sein wird und ich weiß, dass mein Divisor 0 sein kann, kann ich Testbedingungen einrichten, die solche Berechnungen von vornherein verhindern oder mich darüber informieren, wo sie auftreten.

## Siehe auch

- [NaN](https://en.wikipedia.org/wiki/NaN) auf Wikipedia
- [NaN in JavaScript](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN)
