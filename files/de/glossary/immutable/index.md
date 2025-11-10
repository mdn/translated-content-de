---
title: Immutable
slug: Glossary/Immutable
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein **unveränderlicher** Wert ist einer, dessen Inhalt nicht geändert werden kann, ohne einen vollständig neuen Wert zu erstellen, im Vergleich zu {{Glossary("mutable", "veränderlichen Werten")}}.

In {{Glossary("JavaScript", "JavaScript")}} sind {{Glossary("primitive", "primitive Werte")}} unveränderlich — sobald ein primitiver Wert erstellt wurde, kann er nicht geändert werden, obwohl die Variable, die ihn hält, einem anderen Wert zugewiesen werden kann. Im Gegensatz dazu sind {{Glossary("Object", "Objekte")}} und {{Glossary("Array", "Arrays")}} standardmäßig veränderlich — ihre Eigenschaften und Elemente können geändert werden, ohne einen neuen Wert zuzuweisen.

Es kann aus mehreren Gründen vorteilhaft sein, unveränderliche Objekte zu verwenden:

- Zur Leistungsverbesserung (kein Planen zukünftiger Änderungen des Objekts)
- Zur Reduzierung der Speichernutzung (Erstellen von {{Glossary("object_reference", "Objektreferenzen")}} anstelle der vollständigen Klonung des Objekts)
- Thread-Sicherheit (mehrere Threads können auf dasselbe Objekt verweisen, ohne sich gegenseitig zu stören)
- Weniger geistige Belastung für Entwickler (der Zustand des Objekts ändert sich nicht und sein Verhalten ist immer konsistent)

Beachten Sie, dass Sie die Veränderlichkeit leicht nachweisen können: Ein Objekt ist veränderlich, solange es eine Möglichkeit bietet, seine Eigenschaften zu ändern. Im Gegensatz dazu ist _Unveränderlichkeit_ schwer zu beweisen, wenn es keine Sprachsemantiken gibt, um sie sicherzustellen — es ist eine Frage des Entwicklervertrags. Beispielsweise ist {{jsxref("Object.freeze()")}} eine Methode auf Sprachebene, um ein Objekt in JavaScript unveränderlich zu machen.

## Siehe auch

- [Unveränderliches Objekt](https://en.wikipedia.org/wiki/Immutable_object) auf Wikipedia
- Verwandte Glossarbegriffe:
  - {{Glossary("Mutable", "Veränderlich")}}
