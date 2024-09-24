---
title: Entprellen
slug: Glossary/Debounce
l10n:
  sourceCommit: 332bbd7d5079f418175e68a13db8c38f4636cee9
---

{{GlossarySidebar}}

**Entprellen**, im Kontext der Programmierung, bedeutet, alle während eines bestimmten Intervalls angeforderten Operationen in einem einzigen Aufruf zu bündeln.

Entprellung ist sehr ähnlich zum {{glossary("throttle", "Drosseln")}}. Der wesentliche Unterschied besteht darin, dass das Drosseln Grenzen für kontinuierliche Operationen festlegt, während das Entprellen darauf wartet, dass Aufrufe für eine bestimmte Zeit aufhören, um viele störende Aufrufe in einen einzigen Aufruf zu konsolidieren.

Ein typischer Anwendungsfall für Entprellung ist die Reaktion auf Benutzereingaben. Wenn der Benutzer tippt, sollten keine anderen Aktionen durchgeführt werden, um zu vermeiden, dass die Benutzeroberfläche träge wird. Wenn der Benutzer das Tippen pausiert, können wir beginnen, die Eingaben zu verarbeiten, wie z. B. Ergebnisse zu filtern, Vorschläge zu geben, usw. Wenn die Funktion `search` um 10 Millisekunden entprellt wird, bedeutet dies:

1. Der erste Aufruf von `search` wird als _Leading Edge_ bezeichnet.
2. Jeder nächste Aufruf von `search`, wenn er innerhalb von 10 Millisekunden nach dem vorherigen Aufruf erfolgt, gehört zur gleichen "Batch" wie der vorherige Aufruf.
3. Nachdem 10 Millisekunden seit dem letzten `search`-Aufruf vergangen sind und keine weiteren Aufrufe erfolgt sind, haben wir die _Trailing Edge_ erreicht.

In der Regel wird `search` nur auf der Trailing Edge ausgeführt, obwohl es manchmal auch auf der Leading Edge oder sogar auf beiden Kanten, abhängig vom spezifischen Anwendungsfall, ausgeführt werden kann. Wenn es auf beiden Kanten ausgeführt wird, stellt die Entprellungsimplementierung normalerweise auch sicher, dass der nächste Leading Edge-Aufruf mindestens 10 Millisekunden nach der vorherigen Trailing Edge nicht ausgeführt wird.

## Siehe auch

- Glossarbegriffe:
  - {{Glossary("Throttle")}}
  - {{Glossary("Rate limit")}}
- [Debouncing and Throttling Explained Through Examples](https://css-tricks.com/debouncing-throttling-explained-examples/) auf CSS-Tricks (6. April 2016)
