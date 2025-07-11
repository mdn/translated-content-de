---
title: Dominator
slug: Glossary/Dominator
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

In der Graphentheorie **dominiert** Knoten A den Knoten B, wenn jeder Pfad vom Wurzelknoten zu B durch A führt.

Dieses Konzept ist wichtig für die {{Glossary("garbage_collection", "Garbage Collection")}}, da es bedeutet, dass B nur über A erreichbar ist. Wenn der Garbage Collector feststellt, dass A nicht erreichbar ist und freigegeben werden kann, dann wäre auch B nicht erreichbar und freigegeben. Objekte, die von A dominiert werden, tragen also zur zurückgehaltenen Größe von A bei: das ist die Gesamtmenge an Speicher, die freigegeben werden könnte, wenn A selbst freigegeben würde.

## Siehe auch

- [Dominator](<https://en.wikipedia.org/wiki/Dominator_(graph_theory)>) auf Wikipedia
- [Dominatoren](https://firefox-source-docs.mozilla.org/devtools-user/memory/dominators/index.html)
- [Garbage Collection](/de/docs/Web/JavaScript/Guide/Memory_management#garbage_collection)
