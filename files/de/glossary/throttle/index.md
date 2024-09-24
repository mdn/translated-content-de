---
title: Drosselung
slug: Glossary/Throttle
l10n:
  sourceCommit: 7b393063694605c366ff4721a5db1cb1b43a5185
---

{{GlossarySidebar}}

**Drosselung** bedeutete ursprünglich, die Flussrate einer Flüssigkeit mittels eines Hindernisses zu verlangsamen. Im Kontext der Programmierung bezieht sich dies darauf, einen Prozess zu verlangsamen, sodass eine Operation nur mit einer bestimmten Rate durchgeführt werden kann.

Die Drosselung ist der {{glossary("debounce", "Entprellung")}} sehr ähnlich. Der Hauptunterschied besteht darin, dass beim kontinuierlichen Auftreten von Aufrufen die Drosselung sicherstellt, dass die Operation trotzdem mit einer bestimmten maximalen Rate ausgeführt wird, während die Entprellung unbegrenzt wartet, bis die Aufrufe für eine bestimmte Zeit stoppen.

Ein typisches Anwendungsbeispiel für die Drosselung ist die Synchronisierung mit einem anderen ständig aktualisierten Zustand. Betrachten Sie eine Funktion `onScrolled`, die auf das [`scroll`](/de/docs/Web/API/Document/scroll_event)-Ereignis hört. Das `scroll`-Ereignis kann so häufig wie bei jedem Pixel, der gescrollt wird, ausgelöst werden, sodass die Funktion in sehr kurzen Intervallen aufgerufen wird. Wenn `onScrolled` rechentechnisch aufwendig ist, könnten frühere Aufrufe spätere Aufrufe daran hindern, rechtzeitig zu erfolgen, oder andere Dinge daran hindern, in der Zwischenzeit ausgeführt zu werden, was zu einem merklichen {{glossary("jank")}} führen kann. In diesem Fall können wir `onScrolled` drosseln, sodass es höchstens einmal alle 10 Millisekunden aufgerufen wird:

1. Der erste Aufruf von `onScrolled` wird als _Leading Edge_ bezeichnet.
2. Für jeden weiteren Aufruf von `onScrolled`, der innerhalb von 10 Millisekunden nach dem ersten Aufruf erfolgt, befindet er sich in derselben "Gruppe" wie der erste Aufruf.
3. Nach 10 Millisekunden nach dem ersten Aufruf von `onScrolled` haben wir die _Trailing Edge_ erreicht.

In der Regel wird `onScrolled` nur einmal auf der Leading Edge ausgeführt, obwohl es manchmal auf der Trailing Edge oder sogar auf beiden Edges ausgeführt werden könnte, je nach spezifischem Anwendungsfall. Wenn es auf beiden Edges ausgeführt wird, stellt die Drosselungsimplementierung normalerweise auch sicher, dass der nächste Leading Edge-Aufruf nicht mindestens 10 Millisekunden nach der vorherigen Trailing Edge ausgelöst wird.

Durch Drosselung wird der Effekt von `onScrolled` trotzdem kontinuierlich aktualisiert und angewendet — zum Beispiel, wenn es ein anderes DOM-Element basierend auf der Scrollposition des Dokuments bewegt, wird dieses DOM-Element während des Scrollens der Seite kontinuierlich bewegt — aber es wird nicht häufiger ausgeführt als nötig.

{{glossary("Network throttling")}} bedeutet, eine langsamere Netzwerkverbindung zu simulieren, indem nur eine bestimmte Menge an Daten zu einem Zeitpunkt übertragen wird. _Einen Timer drosseln_ bedeutet, die Präzision des Timers zu verringern, sodass beim kontinuierlichen Lesen des Timers (wie {{jsxref("Date.now()")}}) sich der Wert des Timers nur mit einer bestimmten maximalen Rate ändert. Beide sind spezifische Anwendungen des allgemeinen Drosselungskonzepts.

## Siehe auch

- Glossarbegriffe:
  - {{Glossary("Debounce")}}
  - {{Glossary("Rate limit")}}
- [Debouncing and Throttling Explained Through Examples](https://css-tricks.com/debouncing-throttling-explained-examples/) auf CSS-Tricks (6. April 2016)
