---
title: Mixin
slug: Glossary/Mixin
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Ein _Mixin_ ist eine [Klasse](/de/docs/Glossary/class) (Interface, in WebAPI-Spezifikationsbegriffen), bei der einige oder alle ihrer [Methoden](/de/docs/Glossary/method) und/oder [Eigenschaften](/de/docs/Glossary/property) nicht implementiert sind, wodurch eine andere [Klasse](/de/docs/Glossary/class) oder ein [Interface](/de/docs/Glossary/interface) die fehlenden Implementierungen bereitstellen muss.

Die neue Klasse oder das Interface enthält dann sowohl die Eigenschaften und Methoden des Mixins als auch die, die es selbst definiert. Alle Methoden und Eigenschaften werden genau gleich verwendet, unabhängig davon, ob sie im Mixin oder im Interface oder der Klasse implementiert sind, die das Mixin implementiert.

Der Vorteil von Mixins besteht darin, dass sie verwendet werden können, um das Design von APIs zu vereinfachen, bei denen mehrere Interfaces dieselben Methoden und Eigenschaften enthalten müssen.

Zum Beispiel wird das `WindowOrWorkerGlobalScope` Mixin verwendet, um Methoden und Eigenschaften bereitzustellen, die sowohl in den [`Window`](/de/docs/Web/API/Window)- als auch in den [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Interfaces verfügbar sein müssen. Das Mixin wird von beiden Interfaces implementiert.

## Siehe auch

- [Mixin](https://en.wikipedia.org/wiki/Mixin) auf Wikipedia
