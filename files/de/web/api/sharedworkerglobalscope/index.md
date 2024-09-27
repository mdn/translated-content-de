---
title: SharedWorkerGlobalScope
slug: Web/API/SharedWorkerGlobalScope
l10n:
  sourceCommit: e76119da66eebf2d8ea5f572ab5dd8e1698ae414
---

{{APIRef("Web Workers API")}}

Das **`SharedWorkerGlobalScope`**-Objekt (der globale Geltungsbereich [`SharedWorker`](/de/docs/Web/API/SharedWorker)) ist über das Schlüsselwort [`self`](/de/docs/Web/API/Window/self) zugänglich. Einige zusätzliche globale Funktionen, Namensraumobjekte und Konstruktoren, die nicht typischerweise mit dem Worker-Globalbereich assoziiert sind, aber darauf verfügbar sind, sind im [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) gelistet. Sehen Sie die vollständige Liste der [für Worker verfügbaren Funktionen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt Eigenschaften von der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Schnittstelle und ihrem übergeordneten [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SharedWorkerGlobalScope.name`](/de/docs/Web/API/SharedWorkerGlobalScope/name) {{ReadOnlyInline}}
  - : Der Name, den der [`SharedWorker`](/de/docs/Web/API/SharedWorker) (optional) bei seiner Erstellung mit dem [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker)-Konstruktor erhalten hat. Dies ist hauptsächlich für Debugging-Zwecke nützlich.

## Instanz-Methoden

_Diese Schnittstelle erbt Methoden von der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Schnittstelle und ihrem übergeordneten [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SharedWorkerGlobalScope.close()`](/de/docs/Web/API/SharedWorkerGlobalScope/close)
  - : Verwirft alle Aufgaben, die in der Ereignisschleife des `SharedWorkerGlobalScope`-Bereichs eingereiht sind, und schließt diesen speziellen Bereich effektiv.

## Ereignisse

Hören Sie dieses Ereignis mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisen eines Ereignis-Listeners zur `oneventname`-Eigenschaft dieser Schnittstelle.

- [`connect`](/de/docs/Web/API/SharedWorkerGlobalScope/connect_event)
  - : Wird bei gemeinsamen Workern ausgelöst, wenn ein neuer Client eine Verbindung herstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SharedWorker`](/de/docs/Web/API/SharedWorker)
- [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)
- [Verwendung von Webarbeitern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Für Worker verfügbare Funktionen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
