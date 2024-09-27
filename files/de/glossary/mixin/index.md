---
title: Mixin
slug: Glossary/Mixin
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Ein _Mixin_ ist eine [Klasse](/de/docs/Glossary/class) (Interface, in WebAPI-Spezifikationsbegriffen), in der einige oder alle ihrer [Methoden](/de/docs/Glossary/method) und/oder [Eigenschaften](/de/docs/Glossary/property) nicht implementiert sind. Eine andere [Klasse](/de/docs/Glossary/class) oder [Schnittstelle](/de/docs/Glossary/interface) muss die fehlenden Implementierungen bereitstellen.

Die neue Klasse oder Schnittstelle enthält dann sowohl die Eigenschaften und Methoden des Mixins als auch diejenigen, die sie selbst definiert. Alle Methoden und Eigenschaften werden auf die gleiche Weise verwendet, unabhängig davon, ob sie im Mixin oder in der Schnittstelle oder Klasse implementiert sind, die das Mixin implementiert.

Der Vorteil von Mixins besteht darin, dass sie verwendet werden können, um das Design von APIs zu vereinfachen, in denen mehrere Schnittstellen die gleichen Methoden und Eigenschaften enthalten müssen.

Zum Beispiel wird das `WindowOrWorkerGlobalScope`-Mixin genutzt, um Methoden und Eigenschaften bereitzustellen, die sowohl in den [`Window`](/de/docs/Web/API/Window)- als auch in den [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Schnittstellen verfügbar sein müssen. Das Mixin wird von beiden Schnittstellen implementiert.

## Siehe auch

- [Mixin](https://en.wikipedia.org/wiki/Mixin) auf Wikipedia
