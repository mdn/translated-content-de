---
title: Immutable
slug: Glossary/Immutable
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Ein **unveränderlicher** Wert ist einer, dessen Inhalt nicht geändert werden kann, ohne einen völlig neuen Wert zu erzeugen, im Vergleich zu [veränderlichen Werten](/de/docs/Glossary/mutable).

In [JavaScript](/de/docs/Glossary/JavaScript) sind [primitive Werte](/de/docs/Glossary/primitive) unveränderlich – sobald ein primitiver Wert erstellt wird, kann er nicht mehr geändert werden, obwohl die Variable, die ihn enthält, einem anderen Wert zugewiesen werden kann. Im Gegensatz dazu sind [Objekte](/de/docs/Glossary/Object) und [Arrays](/de/docs/Glossary/Array) standardmäßig veränderlich – ihre Eigenschaften und Elemente können geändert werden, ohne dass ein neuer Wert zugewiesen wird.

Es kann aus mehreren Gründen vorteilhaft sein, unveränderliche Objekte zu verwenden:

- Um die Leistung zu verbessern (keine Planung für zukünftige Änderungen des Objekts)
- Um den Speicherverbrauch zu verringern (Erstellen von [Objektreferenzen](/de/docs/Glossary/object_reference) anstelle des Klonens des gesamten Objekts)
- Thread-Sicherheit (mehrere Threads können dasselbe Objekt referenzieren, ohne sich gegenseitig zu stören)
- Reduzierte geistige Belastung für Entwickler (der Zustand des Objekts ändert sich nicht und sein Verhalten bleibt konsistent)

Beachten Sie, dass Sie die Veränderlichkeit leicht nachweisen können: Ein Objekt ist veränderlich, solange es eine Möglichkeit bietet, seine Eigenschaften zu ändern. Andererseits ist _Unveränderlichkeit_ schwer zu beweisen, wenn es keine Sprachsemantik gibt, die sie sichert – es ist eine Frage des Entwicklervertrags. Beispielsweise ist {{jsxref("Object.freeze()")}} eine Methode auf Sprach-Ebene, um ein Objekt in JavaScript unveränderlich zu machen.

## Siehe auch

- [Immutable object](https://en.wikipedia.org/wiki/Immutable_object) auf Wikipedia
- Verwandte Glossarbegriffe:
  - [Mutable](/de/docs/Glossary/Mutable)
