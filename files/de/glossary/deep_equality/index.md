---
title: Tiefe Gleichheit
slug: Glossary/Deep_equality
l10n:
  sourceCommit: b7c5617fc1d8eb00c6884a708983da21ad61b228
---

**Tiefe Gleichheit** ist ein Vergleich von zusammengesetzten Werten, wie Objekten oder Arrays, der deren Inhalte rekursiv vergleicht. Zwei separate Objekte können tief gleich sein, auch wenn sie nicht dasselbe Objekt sind. Im Gegensatz dazu fragt ein Vergleich der Identität, ob zwei Referenzen auf dasselbe Objekt verweisen.

Implementierungen der tiefen Gleichheit vergleichen in der Regel zwei Objekte rekursiv wie folgt:

1. Die beiden Objekte haben denselben Typ. Die Prototyp-Objekte können tief verglichen werden oder auch nicht (und in der Regel werden sie es nicht), aber zum Beispiel sollte ein {{jsxref("Array")}} niemals tief gleich zu einem einfachen Objekt sein.
2. Für jede eigene Eigenschaft eines Objekts existiert eine Eigenschaft mit demselben Schlüssel im anderen Objekt, mit tief gleichen Werten. Wenn die Werte primitive sind, sind sie wertgleich.
3. Alle Daten, die nicht als Eigenschaften zugänglich sind, wie zum Beispiel {{jsxref("Map")}}, werden tief verglichen, vorausgesetzt, dass die Implementierung den Objekttyp erkennt und weiß, wie die Daten abgerufen werden.
4. Normalerweise gibt es Unterstützung für zirkuläre Referenzen.

Beachten Sie, dass, da JavaScript keinen eingebauten Mechanismus zur tiefen Gleichheit hat, Bibliotheksimplementierungen oftmals in technischen Details abweichen, wie zum Beispiel:

- Ob der Vergleich empfindlich auf die Reihenfolge der Eigenschaften ist
- Welche Regeln für die Primitive-Gleichheit sie verwenden, einschließlich wie sie `NaN` und unterschiedenes Null behandeln
- Ob nicht aufzählbare oder Symbol-Eigenschaften verglichen werden
- Ob Eigenschaftsdeskriptoren verglichen werden
- Ob Zugriffs-Eigenschaften als Zugriffe verglichen werden oder ob sie Getter auslösen und die Rückgabewerte vergleichen
- Ob Prototyp-Ketten durch Identität verglichen werden
- Welche Datenstrukturen unterstützen die Rückgabe von nicht als Eigenschaft vorhandenen Daten

Zum Beispiel bietet Node.js [`assert.deepEqual()`](https://nodejs.org/api/assert.html#assertdeepequalactual-expected-message) und [`assert.deepStrictEqual()`](https://nodejs.org/api/assert.html#assertdeepstrictequalactual-expected-message), deren Vergleichsregeln unterschiedlich sind. Prüfen Sie die dokumentierten Regeln eines Dienstprogramms, bevor Sie sich auf dessen Daten verlassen.

Eine {{Glossary("deep_copy", "tiefe Kopie")}} soll die Daten eines Objekts reproduzieren, ohne veränderbare verschachtelte Objekte zu teilen; ob eine Kopie gleichwertig ist, hängt von den Kopier- und Vergleichsregeln ab.

Das Vergleichen der Ergebnisse von {{jsxref("JSON.stringify()")}} ist kein zuverlässiger Check für tiefe Gleichheit. Die Serialisierung kann Eigenschaften auslassen oder Werte umwandeln, die Reihenfolge der Eigenschaften beeinflusst den resultierenden String, und zirkuläre Referenzen verursachen einen Fehler.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Deep_copy", "Tiefe Kopie")}}
- [Gleichheitsvergleiche und Gleichheit](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness)
