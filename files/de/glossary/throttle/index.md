---
title: Throttle
slug: Glossary/Throttle
l10n:
  sourceCommit: 7b393063694605c366ff4721a5db1cb1b43a5185
---

{{GlossarySidebar}}

**Throttling** bedeutete ursprünglich, die Strömungsgeschwindigkeit einer Flüssigkeit mittels eines Hindernisses zu verlangsamen. Im Programmierkontext bezieht es sich darauf, einen Prozess so zu verlangsamen, dass eine Operation nur mit einer bestimmten Rate ausgeführt werden kann.

Throttling ist dem [Debouncing](/de/docs/Glossary/debounce) sehr ähnlich. Der Hauptunterschied besteht darin, dass Throttling bei kontinuierlichen Aufrufen sicherstellt, dass die Operation weiterhin mit einer bestimmten maximalen Rate ausgeführt wird, während Debouncing unendlich wartet, bis die Aufrufe für eine gewisse Zeit aufhören.

Ein typischer Anwendungsfall für Throttling ist die Synchronisation mit einem anderen ständig aktualisierten Zustand. Betrachten Sie eine Funktion `onScrolled`, die auf das [`scroll`](/de/docs/Web/API/Document/scroll_event)-Ereignis hört. Das `scroll`-Ereignis kann so oft wie bei jedem gescrollten Pixel ausgelöst werden, sodass die Funktion in sehr kurzen Abständen aufgerufen wird. Wenn `onScrolled` rechnerisch aufwendig ist, könnten frühere Aufrufe spätere Aufrufe daran hindern, rechtzeitig stattzufinden, oder andere Aufgaben daran hindern, in der Zwischenzeit ausgeführt zu werden, was zu einem spürbaren [Jank](/de/docs/Glossary/jank) führt. In diesem Fall können wir `onScrolled` drosseln, sodass es höchstens alle 10 Millisekunden aufgerufen werden kann:

1. Der erste Aufruf von `onScrolled` wird als _Leading Edge_ bezeichnet.
2. Bei jedem weiteren Aufruf von `onScrolled`, wenn dieser innerhalb von 10 Millisekunden nach dem ersten Aufruf liegt, befindet er sich in derselben "Gruppe" wie der erste Aufruf.
3. Nachdem 10 Millisekunden seit dem ersten Aufruf von `onScrolled` vergangen sind, haben wir die _Trailing Edge_ erreicht.

Üblicherweise wird `onScrolled` nur einmal an der Leading Edge ausgeführt, obwohl es manchmal an der Trailing Edge oder sogar an beiden Rändern ausgeführt werden kann, abhängig vom spezifischen Anwendungsfall. Wenn es an beiden Rändern ausgeführt wird, sorgt die Throttling-Implementierung normalerweise auch dafür, dass der nächste Aufruf der Leading Edge nicht mindestens 10 Millisekunden nach dem vorherigen Aufruf der Trailing Edge stattfindet.

Durch Throttling wird der Effekt von `onScrolled` weiterhin kontinuierlich aktualisiert und angewendet — beispielsweise wird, wenn es ein anderes DOM-Element basierend auf der Scrollposition des Dokuments bewegt, dieses DOM-Element weiterhin kontinuierlich bewegt, während die Seite scrollt — aber es wird nicht häufiger als nötig ausgeführt.

[Netzwerk-Throttling](/de/docs/Glossary/Network_throttling) bedeutet, eine langsamere Netzwerkverbindung zu simulieren, indem nur eine bestimmte Datenmenge gleichzeitig übertragen werden darf. _Das Drosseln eines Timers_ bedeutet, die Auflösung des Timers zu reduzieren, sodass beim kontinuierlichen Lesen des Timers (wie z.B. {{jsxref("Date.now()")}}) sich der Timerwert nur mit einer bestimmten maximalen Rate ändert. Beide sind spezielle Anwendungen des allgemeinen Konzepts des Throttling.

## Siehe auch

- Glossarbegriffe:
  - [Debounce](/de/docs/Glossary/Debounce)
  - [Rate limit](/de/docs/Glossary/Rate_limit)
- [Debouncing und Throttling erklärt an Beispielen](https://css-tricks.com/debouncing-throttling-explained-examples/) auf CSS-Tricks (6. April 2016)
