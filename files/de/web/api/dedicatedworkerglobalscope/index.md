---
title: DedicatedWorkerGlobalScope
slug: Web/API/DedicatedWorkerGlobalScope
l10n:
  sourceCommit: e6457c34ac16790d4e62bc9ba21e899ac560089c
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("dedicated")}}

Das **`DedicatedWorkerGlobalScope`** Objekt (der globale Gültigkeitsbereich von [`Worker`](/de/docs/Web/API/Worker)) ist über das Schlüsselwort [`self`](/de/docs/Web/API/WorkerGlobalScope/self) zugänglich. Einige zusätzliche globale Funktionen, Namensraumobjekte und Konstruktoren, die nicht typischerweise mit dem globalen Gültigkeitsbereich von Workern assoziiert sind, aber dort verfügbar sind, werden im [JavaScript-Referenzführer](/de/docs/Web/JavaScript/Reference) aufgelistet. Siehe auch: [Funktionen, die Arbeitern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

{{InheritanceDiagram}}

## Instanzeigenschaften

_Diese Schnittstelle erbt Eigenschaften von der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) Schnittstelle und deren übergeordnetem [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`DedicatedWorkerGlobalScope.name`](/de/docs/Web/API/DedicatedWorkerGlobalScope/name) {{ReadOnlyInline}}
  - : Der Name, der dem [`Worker`](/de/docs/Web/API/Worker) (optional) gegeben wurde, als er mit dem [`Worker()`](/de/docs/Web/API/Worker/Worker) Konstruktor erzeugt wurde. Dies ist hauptsächlich für Debugging-Zwecke nützlich.

## Instanzmethoden

_Diese Schnittstelle erbt Methoden von der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) Schnittstelle und deren übergeordnetem [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`DedicatedWorkerGlobalScope.close()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/close)
  - : Verwirft alle Aufgaben, die in der Ereignisschleife des `WorkerGlobalScope` eingereiht sind, und schließt effektiv diesen speziellen Gültigkeitsbereich.
- [`DedicatedWorkerGlobalScope.postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage)
  - : Sendet eine Nachricht — die aus `any` JavaScript-Objekt bestehen kann — an das übergeordnete Dokument, das den Worker zuerst gestartet hat.
- [`DedicatedWorkerGlobalScope.cancelAnimationFrame()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/cancelAnimationFrame)
  - : Bricht eine zuvor durch einen Aufruf von [`requestAnimationFrame()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame) geplante Animationsbildanforderung ab.
- [`DedicatedWorkerGlobalScope.requestAnimationFrame()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame)
  - : Führt eine Animationsbildanforderung durch und ruft eine vom Benutzer bereitgestellte Rückruffunktion vor dem nächsten Neuzeichnen auf.

## Ereignisse

Hören Sie dieses Ereignis mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisen eines Ereignis-Listeners zur `oneventname`-Eigenschaft dieser Schnittstelle.

- [`message`](/de/docs/Web/API/DedicatedWorkerGlobalScope/message_event)
  - : Wird ausgelöst, wenn der Worker eine Nachricht von seinem übergeordneten Element erhält.
- [`messageerror`](/de/docs/Web/API/DedicatedWorkerGlobalScope/messageerror_event)
  - : Wird ausgelöst, wenn ein Worker eine Nachricht erhält, die nicht deserialisiert werden kann.
- [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)
  - : Wird ausgelöst, wenn ein kodiertes Video- oder Audiobild zur Verarbeitung durch einen [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) eingereiht wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Worker`](/de/docs/Web/API/Worker)
- [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)
- [Verwendung von Webworkern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Funktionen, die Arbeitern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
