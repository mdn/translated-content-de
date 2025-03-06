---
title: Dominator
slug: Glossary/Dominator
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{GlossarySidebar}}

In der Graphentheorie dominiert Knoten A den Knoten B, wenn jeder Pfad vom Wurzelknoten zu B durch A verläuft.

Dieses Konzept ist wichtig für die {{Glossary("garbage_collection", "Garbage Collection")}}, da es bedeutet, dass B nur über A erreichbar ist. Wenn der Garbage Collector feststellt, dass A nicht erreichbar und zur Rückgewinnung geeignet ist, dann wäre auch B nicht erreichbar und zur Rückgewinnung geeignet. Objekte, die von A dominiert werden, tragen zur gehaltenen Größe von A bei: das heißt, die gesamte Menge an Speicher, die freigegeben werden könnte, wenn A selbst freigegeben würde.

## Siehe auch

- [Dominator](<https://en.wikipedia.org/wiki/Dominator_(graph_theory)>) auf Wikipedia
- [Dominators](https://firefox-source-docs.mozilla.org/devtools-user/memory/dominators/index.html)
- [Garbage Collection](/de/docs/Web/JavaScript/Guide/Memory_management#garbage_collection)
