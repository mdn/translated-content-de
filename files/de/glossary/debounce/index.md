---
title: Debounce
slug: Glossary/Debounce
l10n:
  sourceCommit: 332bbd7d5079f418175e68a13db8c38f4636cee9
---

{{GlossarySidebar}}

**Debouncing** bedeutet im Programmierkontext, alle während eines bestimmten Zeitraums angeforderten Operationen zu einer einzigen Ausführung zusammenzufassen.

Debouncing ist dem {{Glossary("throttle", "Throttling")}} sehr ähnlich. Der Hauptunterschied besteht darin, dass Throttling Beschränkungen für kontinuierliche Operationen durchsetzt, während Debouncing darauf wartet, dass Aufrufe für eine bestimmte Zeit aufhören, um viele störende Aufrufe zu einer einzigen Ausführung zu konsolidieren.

Ein typisches Anwendungsbeispiel für Debouncing ist die Reaktion auf Benutzereingaben. Wenn der Benutzer tippt, sollte keine andere Aktion durchgeführt werden, um zu vermeiden, dass die Benutzeroberfläche träge wird. Wenn der Benutzer das Tippen unterbricht, können wir beginnen, die Eingabe zu verarbeiten, wie z.B. Ergebnisse zu filtern, Vorschläge zu geben usw. Wenn die Funktion `search` um 10 Millisekunden gedebounced ist, bedeutet das:

1. Der erste Aufruf von `search` wird als _leading edge_ bezeichnet.
2. Jeder weitere Aufruf von `search`, der innerhalb von 10 Millisekunden nach dem vorherigen Aufruf erfolgt, befindet sich in derselben „Charge“ wie der vorherige Aufruf.
3. Nachdem 10 Millisekunden seit dem letzten Aufruf von `search` vergangen sind, ohne dass weitere Aufrufe erfolgt sind, haben wir die _trailing edge_ erreicht.

Üblicherweise wird `search` nur einmal am trailing edge ausgeführt, obwohl es manchmal auch am leading edge oder sogar an beiden Kanten ausgeführt werden kann, je nach spezifischem Anwendungsfall. Wenn es an beiden Kanten ausgeführt wird, stellt die Debouncing-Implementierung normalerweise auch sicher, dass der nächste leading edge-Aufruf mindestens 10 Millisekunden nach der vorherigen trailing edge nicht ausgelöst wird.

## Siehe auch

- Glossarbegriffe:
  - {{Glossary("Throttle", "Throttle")}}
  - {{Glossary("Rate_limit", "Rate limit")}}
- [Debouncing and Throttling Explained Through Examples](https://css-tricks.com/debouncing-throttling-explained-examples/) auf CSS-Tricks (6. April 2016)
