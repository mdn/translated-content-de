---
title: Debounce
slug: Glossary/Debounce
l10n:
  sourceCommit: 986f2096b273c6cc6827380426ea106410f67d54
---

{{GlossarySidebar}}

**Debouncing** bedeutet im Kontext der Programmierung, dass Operationen, die in einem bestimmten Intervall zu nah beieinander auftreten, verworfen und zu einem einzelnen Aufruf konsolidiert werden.

Debouncing ist dem {{Glossary("throttle", "Throttling")}} sehr ähnlich. Der Hauptunterschied besteht darin, dass Throttling Begrenzungen für kontinuierliche Operationen erzwingt, während Debouncing darauf wartet, dass Aufrufe für eine bestimmte Zeitspanne aufhören, um viele unruhige Aufrufe zu einem einzigen Aufruf zusammenzuführen.

Ein typisches Einsatzgebiet von Debouncing ist die Reaktion auf Benutzereingaben. Während der Benutzer tippt, sollten keine weiteren Aktionen ausgeführt werden, um zu vermeiden, dass die Benutzeroberfläche träge wird. Wenn der Benutzer das Tippen unterbricht, kann die Verarbeitung der Eingabe beginnen, wie z. B. das Filtern von Ergebnissen oder das Geben von Vorschlägen. Wenn die Funktion `search` um 10 Millisekunden debounced wird, bedeutet dies:

1. Der erste Aufruf von `search` wird als _leading edge_ bezeichnet.
2. Jeder weitere Aufruf von `search`, der innerhalb von 10 Millisekunden nach dem vorherigen Aufruf erfolgt, gehört zur gleichen "Gruppe" wie der vorherige Aufruf.
3. Nachdem 10 Millisekunden seit dem letzten Aufruf von `search` vergangen sind, und kein weiterer Aufruf erfolgt ist, haben wir die _trailing edge_ erreicht.

Normalerweise wird `search` nur einmal bei der trailing edge ausgeführt, obwohl es gelegentlich auch auf der leading edge oder sogar auf beiden Kanten ausgeführt werden kann, je nach spezifischem Anwendungsfall. Wenn es auf beiden Kanten ausgeführt wird, stellt die Debouncing-Implementierung in der Regel sicher, dass der nächste Aufruf an der leading edge mindestens 10 Millisekunden nach der vorherigen trailing edge erfolgt.

## Siehe auch

- Glossarbegriffe:
  - {{Glossary("Throttle", "Throttle")}}
  - {{Glossary("Rate_limit", "Rate limit")}}
- [Debouncing and Throttling Explained Through Examples](https://css-tricks.com/debouncing-throttling-explained-examples/) auf CSS-Tricks (6. April 2016)
