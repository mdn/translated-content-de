---
title: DedicatedWorkerGlobalScope
slug: Web/API/DedicatedWorkerGlobalScope
l10n:
  sourceCommit: e6457c34ac16790d4e62bc9ba21e899ac560089c
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("dedicated")}}

Das **`DedicatedWorkerGlobalScope`**-Objekt (der globale [`Worker`](/de/docs/Web/API/Worker)-Bereich) ist über das Schlüsselwort [`self`](/de/docs/Web/API/WorkerGlobalScope/self) zugänglich. Einige zusätzliche globale Funktionen, Namespace-Objekte und Konstruktoren, die normalerweise nicht mit dem globalen Worker-Bereich in Verbindung gebracht werden, aber darauf verfügbar sind, werden in der [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) aufgeführt. Siehe auch: [Funktionen, die Arbeitern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

{{InheritanceDiagram}}

## Instanzeigenschaften

_Diese Schnittstelle erbt Eigenschaften von der Schnittstelle [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) und deren Elternschnittstelle [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`DedicatedWorkerGlobalScope.name`](/de/docs/Web/API/DedicatedWorkerGlobalScope/name) {{ReadOnlyInline}}
  - : Der Name, der dem [`Worker`](/de/docs/Web/API/Worker) (optional) gegeben wurde, als er mit dem [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktor erstellt wurde. Dies ist hauptsächlich für Debugging-Zwecke nützlich.

## Instanzmethoden

_Diese Schnittstelle erbt Methoden von der Schnittstelle [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) und deren Elternschnittstelle [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`DedicatedWorkerGlobalScope.close()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/close)
  - : Verwirft alle Aufgaben, die in der Ereignisschleife des `WorkerGlobalScope` eingereiht sind, und schließt diesen bestimmten Bereich effektiv.
- [`DedicatedWorkerGlobalScope.postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage)
  - : Sendet eine Nachricht – die aus einem beliebigen JavaScript-Objekt bestehen kann – an das übergeordnete Dokument, das den Worker ursprünglich gestartet hat.
- [`DedicatedWorkerGlobalScope.cancelAnimationFrame()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/cancelAnimationFrame)
  - : Hebt eine zuvor durch einen Aufruf von [`requestAnimationFrame()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame) geplante Animationsframe-Anforderung auf.
- [`DedicatedWorkerGlobalScope.requestAnimationFrame()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame)
  - : Führt eine Animationsframe-Anforderung aus und ruft eine benutzerdefinierte Callback-Funktion vor der nächsten Neudarstellung auf.

## Ereignisse

Hören Sie auf dieses Ereignis, indem Sie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden oder einen Ereignis-Listener der `oneventname`-Eigenschaft dieser Schnittstelle zuweisen.

- [`message`](/de/docs/Web/API/DedicatedWorkerGlobalScope/message_event)
  - : Wird ausgelöst, wenn der Worker eine Nachricht von seinem übergeordneten Element empfängt.
- [`messageerror`](/de/docs/Web/API/DedicatedWorkerGlobalScope/messageerror_event)
  - : Wird ausgelöst, wenn ein Worker eine Nachricht empfängt, die nicht deserialisiert werden kann.
- [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)
  - : Wird ausgelöst, wenn ein codierter Video- oder Audio-Frame zur Verarbeitung durch eine [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) eingereiht wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Worker`](/de/docs/Web/API/Worker)
- [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)
- [Verwendung von Webarbeitern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Funktionen, die Arbeitern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
