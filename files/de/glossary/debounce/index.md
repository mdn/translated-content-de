---
title: Debounce
slug: Glossary/Debounce
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Debouncing**, im Kontext der Programmierung, bedeutet, Vorgänge zu verwerfen, die innerhalb eines bestimmten Intervalls zu nah beieinander liegen, und diese in einem einzigen Aufruf zu konsolidieren.

Debouncing ist dem {{Glossary("throttle", "Throttling")}} sehr ähnlich. Der Hauptunterschied besteht darin, dass Throttling Grenzen für kontinuierliche Vorgänge setzt, während Debouncing darauf wartet, dass Aufrufe für eine bestimmte Zeit aufhören, um viele störende Aufrufe in einen einzigen Aufruf zu konsolidieren.

Ein typischer Anwendungsfall von Debouncing ist die Reaktion auf Benutzereingaben. Wenn der Benutzer tippt, sollten keine anderen Aktionen vorgenommen werden, um zu vermeiden, dass die Benutzeroberfläche träge wird. Wenn der Benutzer eine Schreibpause einlegt, können wir mit der Verarbeitung der Eingaben beginnen, wie z.B. dem Filtern von Ergebnissen, dem Erstellen von Vorschlägen usw. Wenn die Funktion `search` um 10 Millisekunden entprellt wird, bedeutet dies:

1. Der erste Aufruf von `search` ist als _leading edge_ bekannt.
2. Bei jedem weiteren Aufruf von `search` innerhalb von 10 Millisekunden nach dem vorherigen Aufruf gehört dieser zum gleichen "Batch" wie der vorherige Aufruf.
3. Wenn 10 Millisekunden seit dem letzten Aufruf von `search` vergangen sind und keine weiteren Aufrufe erfolgt sind, haben wir die _trailing edge_ erreicht.

In der Regel wird `search` nur einmal am trailing edge ausgeführt, obwohl es je nach Anwendungsfall manchmal am leading edge oder sogar an beiden Edges ausgeführt werden kann. Wenn es an beiden Kanten ausgeführt wird, stellt die Debounce-Implementierung normalerweise auch sicher, dass der nächste Leading-Edge-Aufruf nicht mindestens 10 Millisekunden nach dem vorherigen Trailing-Edge-Aufruf ausgelöst wird.

## Siehe auch

- Glossarbegriffe:
  - {{Glossary("Throttle", "Throttle")}}
  - {{Glossary("Rate_limit", "Rate limit")}}
- [Debouncing and Throttling Explained Through Examples](https://css-tricks.com/debouncing-throttling-explained-examples/) auf CSS-Tricks (6. April 2016)
