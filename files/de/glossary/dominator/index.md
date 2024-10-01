---
title: Dominator
slug: Glossary/Dominator
l10n:
  sourceCommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

{{GlossarySidebar}}

In der Graphentheorie dominiert der Knoten A den Knoten B, wenn jeder Pfad vom Wurzelknoten zu B durch A führt.

Dieses Konzept ist wichtig für die {{Glossary("garbage_collection", "Garbage Collection")}}, da es bedeutet, dass B nur über A erreichbar ist. Wenn der Garbage Collector feststellt, dass A unerreichbar und für die Rückgewinnung berechtigt ist, wäre auch B unerreichbar und für die Rückgewinnung berechtigt. Objekte, die von A dominiert werden, tragen zur gehaltenen Größe von A bei, das heißt, zur gesamten Menge an Speicher, die freigegeben werden könnte, wenn A selbst freigegeben würde.

## Siehe auch

- [Dominator](<https://en.wikipedia.org/wiki/Dominator_(graph_theory)>) auf Wikipedia
- [Dominators](https://firefox-source-docs.mozilla.org/devtools-user/memory/dominators/index.html)
- [Garbage Collection](/de/docs/Web/JavaScript/Memory_management#garbage_collection)
