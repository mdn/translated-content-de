---
title: Mixin
slug: Glossary/Mixin
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein _Mixin_ ist eine {{Glossary("class", "Klasse")}} (Schnittstelle, in den WebAPI-Spezifikationsbegriffen), in der einige oder alle ihrer {{Glossary("method", "Methoden")}} und/oder {{Glossary("property", "Eigenschaften")}} nicht implementiert sind. Dadurch wird erfordert, dass eine andere {{Glossary("class", "Klasse")}} oder {{Glossary("interface", "Schnittstelle")}} die fehlenden Implementierungen bereitstellt.

Die neue Klasse oder Schnittstelle umfasst dann sowohl die Eigenschaften und Methoden des Mixins als auch diejenigen, die sie selbst definiert. Alle Methoden und Eigenschaften werden genau gleich verwendet, unabhängig davon, ob sie im Mixin oder in der Schnittstelle oder Klasse implementiert sind, die das Mixin implementiert.

Der Vorteil von Mixins besteht darin, dass sie das Design von APIs vereinfachen können, in denen mehrere Schnittstellen dieselben Methoden und Eigenschaften enthalten müssen.

Zum Beispiel wird das `WindowOrWorkerGlobalScope`-Mixin verwendet, um Methoden und Eigenschaften bereitzustellen, die sowohl in den [`Window`](/de/docs/Web/API/Window)- als auch in den [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Schnittstellen verfügbar sein müssen. Das Mixin wird von beiden Schnittstellen implementiert.

## Siehe auch

- [Mixin](https://en.wikipedia.org/wiki/Mixin) auf Wikipedia
