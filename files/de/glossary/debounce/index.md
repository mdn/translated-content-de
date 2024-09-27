---
title: Debounce
slug: Glossary/Debounce
l10n:
  sourceCommit: 332bbd7d5079f418175e68a13db8c38f4636cee9
---

{{GlossarySidebar}}

**Debouncing** bedeutet im Kontext der Programmierung, dass alle während eines bestimmten Intervalls angeforderten Operationen zu einem einzigen Aufruf zusammengefasst werden.

Debouncing ist dem [Throttling](/de/docs/Glossary/throttle) sehr ähnlich. Der wesentliche Unterschied besteht darin, dass Throttling kontinuierliche Operationen begrenzt, während Debouncing wartet, bis Aufrufe für eine bestimmte Zeit aufhören, um viele störende Aufrufe in einen einzigen zusammenzufassen.

Ein typischer Anwendungsfall für Debouncing ist die Reaktion auf Benutzereingaben. Während der Benutzer tippt, sollten keine anderen Aktionen durchgeführt werden, um zu vermeiden, dass die Benutzeroberfläche träge wird. Wenn der Benutzer das Tippen pausiert, können wir mit der Verarbeitung der Eingaben beginnen, z. B. durch Filtern von Ergebnissen, Vorschläge geben usw. Wenn die Funktion `search` um 10 Millisekunden entprellt wird, bedeutet das:

1. Der erste Aufruf von `search` wird als _leading edge_ bezeichnet.
2. Für jeden folgenden Aufruf von `search`, falls dieser innerhalb von 10 Millisekunden nach dem vorherigen Aufruf erfolgt, gehört er zur gleichen "Gruppe" wie der vorherige Aufruf.
3. Wenn 10 Millisekunden seit dem letzten Aufruf von `search` vergangen sind und keine weiteren Aufrufe stattgefunden haben, haben wir die _trailing edge_ erreicht.

Normalerweise wird `search` nur einmal an der trailing edge ausgeführt, obwohl es manchmal am leading edge oder sogar an beiden Kanten ausgeführt werden kann, abhängig vom spezifischen Anwendungsfall. Wenn es an beiden Kanten ausgeführt wird, sorgt die Debouncing-Implementierung normalerweise auch dafür, dass der nächste leading edge-Aufruf mindestens 10 Millisekunden nach der vorherigen trailing edge nicht ausgelöst wird.

## Siehe auch

- Glossarbegriffe:
  - [Throttle](/de/docs/Glossary/Throttle)
  - [Rate limit](/de/docs/Glossary/Rate_limit)
- [Debouncing and Throttling Explained Through Examples](https://css-tricks.com/debouncing-throttling-explained-examples/) auf CSS-Tricks (6. April 2016)
