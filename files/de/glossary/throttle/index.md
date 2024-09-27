---
title: Throttle
slug: Glossary/Throttle
l10n:
  sourceCommit: 7b393063694605c366ff4721a5db1cb1b43a5185
---

{{GlossarySidebar}}

**Drosselung** bedeutete ursprünglich das Verlangsamen des Durchflusses von Flüssigkeiten mittels eines Hindernisses. Im Kontext der Programmierung bezieht es sich darauf, einen Prozess zu verlangsamen, sodass eine Operation nur mit einer bestimmten Rate durchgeführt werden kann.

Die Drosselung ist der [Entprellung](/de/docs/Glossary/debounce) sehr ähnlich. Der Hauptunterschied besteht darin, dass bei kontinuierlichen Aufrufen die Drosselung sicherstellt, dass die Operation mit einer bestimmten maximalen Rate durchgeführt wird, während die Entprellung endlos wartet, bis die Aufrufe für eine bestimmte Zeitspanne aufhören.

Ein typischer Anwendungsfall der Drosselung ist die Synchronisierung mit einem anderen ständig aktualisierenden Zustand. Betrachten Sie eine Funktion `onScrolled`, die dem [`scroll`](/de/docs/Web/API/Document/scroll_event)-Event lauscht. Das `scroll`-Event kann so häufig ausgelöst werden, wie bei jedem gescrollten Pixel, sodass die Funktion in sehr kurzen Intervallen aufgerufen wird. Falls `onScrolled` rechnerisch aufwendig ist, könnten frühere Aufrufe spätere Aufrufe daran hindern, rechtzeitig zu erfolgen, oder andere Dinge daran hindern, in der Zwischenzeit ausgeführt zu werden, was zu einem merklichen [Ruckeln](/de/docs/Glossary/jank) führen könnte. In diesem Fall können wir `onScrolled` drosseln, sodass es höchstens einmal alle 10 Millisekunden aufgerufen werden kann:

1. Der erste Aufruf von `onScrolled` wird als _leading edge_ bezeichnet.
2. Für jeden weiteren Aufruf von `onScrolled`, wenn er innerhalb von 10 Millisekunden nach dem ersten Aufruf erfolgt, befindet er sich in der gleichen „Charge“ wie der erste Aufruf.
3. Nachdem 10 Millisekunden seit dem ersten Aufruf von `onScrolled` vergangen sind, haben wir die _trailing edge_ erreicht.

Normalerweise wird `onScrolled` nur einmal an der leading edge ausgeführt, obwohl es manchmal an der trailing edge oder sogar an beiden Edges ausgeführt werden kann, abhängig vom spezifischen Anwendungsfall. Wenn es an beiden Edges ausgeführt wird, stellt die Drosselungsimplementierung normalerweise auch sicher, dass der nächste Aufruf an der leading edge frühestens 10 Millisekunden nach dem vorherigen Aufruf an der trailing edge erfolgt.

Durch Drosselung wird die Wirkung von `onScrolled` dennoch kontinuierlich aktualisiert und angewendet — zum Beispiel, wenn es ein anderes DOM-Element basierend auf der Scroll-Position des Dokuments bewegt, wird dieses DOM-Element weiterhin kontinuierlich verschoben, während die Seite scrollt — jedoch wird es nicht öfter als nötig ausgeführt.

[Netzwerkdrosselung](/de/docs/Glossary/Network_throttling) bedeutet, eine langsamere Netzwerkverbindung zu simulieren, indem nur eine bestimmte Datenmenge gleichzeitig übertragen wird. _Drosselung eines Timers_ bedeutet, die Genauigkeit des Timers zu verringern, sodass beim kontinuierlichen Ablesen des Timers (wie {{jsxref("Date.now()")}}) sich dessen Wert nur mit einer bestimmten maximalen Rate ändert. Beide sind spezifische Anwendungen des allgemeinen Konzepts der Drosselung.

## Siehe auch

- Glossarbegriffe:
  - [Entprellung](/de/docs/Glossary/Debounce)
  - [Rate limit](/de/docs/Glossary/Rate_limit)
- [Debouncing and Throttling Explained Through Examples](https://css-tricks.com/debouncing-throttling-explained-examples/) auf CSS-Tricks (6. April 2016)
