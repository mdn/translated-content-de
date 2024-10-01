---
title: Immutable
slug: Glossary/Immutable
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Ein **immutable** Wert ist ein Wert, dessen Inhalt nicht geändert werden kann, ohne einen völlig neuen Wert zu erstellen, im Vergleich zu {{Glossary("mutable", "mutablen Werten")}}.

In {{Glossary("JavaScript", "JavaScript")}} sind {{Glossary("primitive", "primitive Werte")}} unveränderlich — nachdem ein primitiver Wert erstellt wurde, kann er nicht geändert werden, obwohl die Variable, die ihn hält, eine andere Zuweisung erhalten kann. Im Gegensatz dazu sind {{Glossary("Object", "Objekte")}} und {{Glossary("Array", "Arrays")}} standardmäßig veränderlich — ihre Eigenschaften und Elemente können geändert werden, ohne dass ein neuer Wert zugewiesen wird.

Es kann vorteilhaft sein, unveränderliche Objekte aus mehreren Gründen zu verwenden:

- Um die Leistung zu verbessern (kein Planen zukünftiger Änderungen des Objekts)
- Um den Speicherverbrauch zu reduzieren (Erstellen von {{Glossary("object_reference", "Objektreferenzen")}} anstatt das ganze Objekt zu klonen)
- Thread-Sicherheit (mehrere Threads können dasselbe Objekt referenzieren, ohne sich gegenseitig zu beeinträchtigen)
- Geringere geistige Belastung für Entwickler (der Zustand des Objekts ändert sich nicht und sein Verhalten bleibt konsistent)

Beachten Sie, dass Sie die Änderbarkeit leicht beweisen können: Ein Objekt ist veränderlich, solange es eine Möglichkeit bietet, seine Eigenschaften zu ändern. Andererseits ist _Unveränderlichkeit_ schwer zu beweisen, wenn es keine Sprachsemantik gibt, um sie zu sichern — es ist eine Frage der Vereinbarung unter Entwicklern. Zum Beispiel ist {{jsxref("Object.freeze()")}} eine Methode auf Sprachebene, um ein Objekt in JavaScript unveränderlich zu machen.

## Siehe auch

- [Immutable object](https://en.wikipedia.org/wiki/Immutable_object) auf Wikipedia
- Verwandte Glossarbegriffe:
  - {{Glossary("Mutable", "Mutable")}}
