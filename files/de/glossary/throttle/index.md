---
title: Throttling
slug: Glossary/Throttle
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Throttling** bedeutete ursprünglich, die Durchflussrate einer Flüssigkeit durch ein Hindernis zu verringern. Im Programmierkontext bezieht es sich darauf, einen Prozess zu verlangsamen, sodass eine Operation nur in einer bestimmten Frequenz durchgeführt werden kann.

Throttling ist dem {{Glossary("debounce", "Debouncing")}} sehr ähnlich. Der entscheidende Unterschied besteht darin, dass bei kontinuierlichen Aufrufen Throttling sicherstellt, dass die Operation weiterhin mit einer bestimmten maximalen Rate ausgeführt wird, während Debouncing unendlich wartet, bis die Aufrufe für eine bestimmte Zeitspanne aufhören.

Ein typischer Anwendungsfall von Throttling ist die Synchronisation mit einem sich ständig aktualisierenden Zustand. Betrachten Sie eine Funktion `onScrolled`, die auf das [`scroll`](/de/docs/Web/API/Document/scroll_event)-Ereignis hört. Das `scroll`-Ereignis kann so oft wie bei jedem gescrollten Pixel ausgelöst werden, sodass die Funktion in sehr kurzen Abständen aufgerufen wird. Wenn `onScrolled` rechenintensiv ist, könnten frühere Aufrufe spätere Aufrufe daran hindern, rechtzeitig zu erfolgen, oder andere Dinge am Ausführen hindern, was zu einem spürbaren {{Glossary("jank", "Ruckeln")}} führt. In diesem Fall können wir `onScrolled` so drosseln, dass es höchstens alle 10 Millisekunden aufgerufen werden kann:

1. Der erste Aufruf von `onScrolled` wird als _Leading Edge_ bezeichnet.
2. Jeder weitere Aufruf von `onScrolled`, der innerhalb von 10 Millisekunden nach dem ersten Aufruf erfolgt, gehört zum selben "Batch" wie der erste Aufruf.
3. Nachdem 10 Millisekunden seit dem ersten Aufruf von `onScrolled` vergangen sind, haben wir die _Trailing Edge_ erreicht.

Normalerweise wird `onScrolled` nur beim Leading Edge einmal ausgeführt, obwohl es manchmal beim Trailing Edge oder sogar bei beiden Kanten ausgeführt werden kann, je nach spezifischem Anwendungsfall. Wenn es an beiden Kanten ausgeführt wird, stellt die Throttling-Implementierung normalerweise auch sicher, dass der nächste Leading Edge-Aufruf mindestens 10 Millisekunden nach dem vorherigen Trailing Edge nicht erfolgt.

Durch Throttling wird der Effekt von `onScrolled` weiterhin kontinuierlich aktualisiert und angewendet — beispielsweise, wenn ein anderes DOM-Element basierend auf der Scrollposition des Dokuments bewegt wird, wird dieses DOM-Element weiterhin kontinuierlich bewegt, während die Seite scrollt — jedoch wird es nicht öfter als nötig ausgeführt.

{{Glossary("Network_throttling", "Netzwerk-Throttling")}} bedeutet, eine langsamere Netzwerkverbindung zu simulieren, indem nur eine bestimmte Datenmenge gleichzeitig übertragen werden darf. _Throttling eines Timers_ bedeutet, die Genauigkeit des Timers zu verringern, sodass beim kontinuierlichen Ablesen des Timers (wie {{jsxref("Date.now()")}}) sich der Timerwert nur mit einer bestimmten maximalen Rate ändert. Beide sind spezifische Anwendungen des allgemeinen Throttling-Konzepts.

## Siehe auch

- Glossarbegriffe:
  - {{Glossary("Debounce", "Debounce")}}
  - {{Glossary("Rate_limit", "Rate Limit")}}
- [Debouncing und Throttling anhand von Beispielen erklärt](https://css-tricks.com/debouncing-throttling-explained-examples/) auf CSS-Tricks (6. April 2016)
