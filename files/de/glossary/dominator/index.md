---
title: Dominator
slug: Glossary/Dominator
l10n:
  sourceCommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

{{GlossarySidebar}}

In der Graphentheorie **dominiert** Knoten A Knoten B, wenn jeder Pfad vom Wurzelknoten zu B durch A führt.

Dieses Konzept ist für die {{Glossary("garbage collection")}} wichtig, da es bedeutet, dass B nur über A erreichbar ist. Wenn der Garbage Collector feststellt, dass A nicht erreichbar ist und zum Freigeben berechtigt ist, wäre auch B nicht erreichbar und zum Freigeben berechtigt. Objekte, die A dominiert, tragen also zur zurückbehaltenen Größe von A bei: das heißt, zur gesamten Menge des Speichers, die freigegeben werden könnte, wenn A selbst freigegeben würde.

## Siehe auch

- [Dominator](<https://en.wikipedia.org/wiki/Dominator_(graph_theory)>) auf Wikipedia
- [Dominators](https://firefox-source-docs.mozilla.org/devtools-user/memory/dominators/index.html)
- [Garbage collection](/de/docs/Web/JavaScript/Memory_management#garbage_collection)
