---
title: SharedWorkerGlobalScope
slug: Web/API/SharedWorkerGlobalScope
l10n:
  sourceCommit: e76119da66eebf2d8ea5f572ab5dd8e1698ae414
---

{{APIRef("Web Workers API")}}

Das **`SharedWorkerGlobalScope`** Objekt (der globale Bereich des [`SharedWorker`](/de/docs/Web/API/SharedWorker)) ist über das Schlüsselwort [`self`](/de/docs/Web/API/Window/self) zugänglich. Einige zusätzliche globale Funktionen, Namensraumobjekte und Konstruktoren, die normalerweise nicht mit dem globalen Bereich von Workern in Verbindung gebracht werden, aber darauf verfügbar sind, sind im [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) aufgeführt. Sehen Sie die vollständige Liste der [Funktionen, die für Worker verfügbar sind](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt Eigenschaften von der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Schnittstelle und deren Elternteil [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SharedWorkerGlobalScope.name`](/de/docs/Web/API/SharedWorkerGlobalScope/name) {{ReadOnlyInline}}
  - : Der Name, der dem [`SharedWorker`](/de/docs/Web/API/SharedWorker) (optional) gegeben wurde, als er mithilfe des [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker)-Konstruktors erstellt wurde. Dies ist hauptsächlich für Debugging-Zwecke nützlich.

## Instanz-Methoden

_Diese Schnittstelle erbt Methoden von der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Schnittstelle und deren Elternteil [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SharedWorkerGlobalScope.close()`](/de/docs/Web/API/SharedWorkerGlobalScope/close)
  - : Verwirft alle im `SharedWorkerGlobalScope` Ereignisschleife eingereihten Aufgaben und schließt diesen bestimmten Bereich effektiv.

## Ereignisse

Hören Sie dieses Ereignis mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener auf die `oneventname`-Eigenschaft dieser Schnittstelle zuweisen.

- [`connect`](/de/docs/Web/API/SharedWorkerGlobalScope/connect_event)
  - : Wird in gemeinsamen Workern ausgelöst, wenn ein neuer Client eine Verbindung herstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SharedWorker`](/de/docs/Web/API/SharedWorker)
- [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)
- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Funktionen, die für Worker verfügbar sind](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
