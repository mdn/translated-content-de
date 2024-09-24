---
title: Mixin
slug: Glossary/Mixin
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Ein _Mixin_ ist eine {{Glossary("class", "Klasse")}} (Schnittstelle, in WebAPI-Spezifikationsbegriffen), in der einige oder alle ihrer {{Glossary("method", "Methoden")}} und/oder {{Glossary("property", "Eigenschaften")}} nicht implementiert sind, wobei eine andere {{Glossary("class", "Klasse")}} oder {{Glossary("interface", "Schnittstelle")}} die fehlenden Implementierungen bereitstellen muss.

Die neue Klasse oder Schnittstelle enthält dann sowohl die Eigenschaften und Methoden des Mixins als auch diejenigen, die sie selbst definiert. Alle Methoden und Eigenschaften werden genau gleich verwendet, unabhängig davon, ob sie im Mixin oder in der Schnittstelle oder Klasse implementiert sind, die das Mixin implementiert.

Der Vorteil von Mixins besteht darin, dass sie verwendet werden können, um das Design von APIs zu vereinfachen, in denen mehrere Schnittstellen die gleichen Methoden und Eigenschaften enthalten müssen.

Zum Beispiel wird das `WindowOrWorkerGlobalScope`-Mixin verwendet, um Methoden und Eigenschaften bereitzustellen, die sowohl für die {{domxref("Window")}}- als auch die {{domxref("WorkerGlobalScope")}}-Schnittstellen verfügbar sein müssen. Das Mixin wird von beiden Schnittstellen implementiert.

## Siehe auch

- [Mixin](https://en.wikipedia.org/wiki/Mixin) auf Wikipedia
