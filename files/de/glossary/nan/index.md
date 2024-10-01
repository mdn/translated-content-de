---
title: NaN
slug: Glossary/NaN
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

NaN (Not a Number) ist ein numerischer {{Glossary("Type", "Datentyp")}}, der einen undefinierten Wert oder einen Wert darstellt, der nicht repräsentiert werden kann, insbesondere Ergebnisse von Gleitkommaberechnungen.

Zum Beispiel können NaNs Unendlichkeit darstellen, das Ergebnis einer Division durch Null, einen fehlenden Wert oder die Quadratwurzel einer negativen Zahl (die imaginär ist, während eine Gleitkommazahl real ist).

Praktisch gesehen, wenn ich in einem {{Glossary("JavaScript", "JavaScript")}}-Programm zwei Variablen dividiere, kann das Ergebnis NaN sein, das in JavaScript als "undefiniert" vordefiniert ist. Daher kann diese Division das Programm zum Absturz bringen. Wenn diese Berechnung jedoch nur ein kleiner Teil eines viel größeren Algorithmus war, wäre es äußerst schmerzhaft, herauszufinden, wo der Fehler tatsächlich auftritt. Glücklicherweise, da das Ergebnis NaN sein wird und ich weiß, dass mein Divisor möglicherweise 0 ist, kann ich Testbedingungen einrichten, die solche Berechnungen von vornherein verhindern oder mich benachrichtigen, wo sie auftreten.

## Siehe auch

- [NaN](https://en.wikipedia.org/wiki/NaN) auf Wikipedia
- [NaN in JavaScript](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN)
