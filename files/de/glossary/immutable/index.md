---
title: Unveränderlich
slug: Glossary/Immutable
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Ein **unveränderlicher** Wert ist einer, dessen Inhalt nicht geändert werden kann, ohne einen völlig neuen Wert zu schaffen, im Vergleich zu {{Glossary("mutable", "veränderlichen Werten")}}.

In {{glossary("JavaScript")}} sind {{Glossary("primitive", "primitive Werte")}} unveränderlich — sobald ein primitiver Wert erstellt wurde, kann er nicht geändert werden, obwohl die Variable, die ihn hält, einem anderen Wert neu zugewiesen werden kann. Im Gegensatz dazu sind {{Glossary("Object","Objekte")}} und {{Glossary("Array","Arrays")}} standardmäßig veränderlich — ihre Eigenschaften und Elemente können geändert werden, ohne einen neuen Wert zuzuweisen.

Es kann aus mehreren Gründen vorteilhaft sein, unveränderliche Objekte zu verwenden:

- Um die Leistung zu verbessern (keine Planung für zukünftige Änderungen des Objekts)
- Um den Speicherverbrauch zu reduzieren (Erstellung von {{glossary("object reference","Objektverweisen")}} anstelle der vollständigen Kopie des Objekts)
- Thread-Sicherheit (mehrere Threads können dasselbe Objekt referenzieren, ohne sich gegenseitig zu stören)
- Geringere mentale Belastung für Entwickler (der Zustand des Objekts ändert sich nicht und sein Verhalten ist immer konsistent)

Beachten Sie, dass Sie die Veränderbarkeit leicht beweisen können: ein Objekt ist veränderlich, solange es eine Möglichkeit bietet, seine Eigenschaften zu ändern. Andererseits ist _Unveränderlichkeit_ schwer zu beweisen, wenn es keine Sprachsemantiken gibt, um sie zu sichern — es ist eine Frage des Entwicklervertrags. Zum Beispiel ist {{jsxref("Object.freeze()")}} eine Sprachmethode, um ein Objekt in JavaScript unveränderlich zu machen.

## Siehe auch

- [Unveränderliches Objekt](https://en.wikipedia.org/wiki/Immutable_object) auf Wikipedia
- Verwandte Glossarbegriffe:
  - {{glossary("Mutable")}}
