---
title: DedicatedWorkerGlobalScope
slug: Web/API/DedicatedWorkerGlobalScope
l10n:
  sourceCommit: e6457c34ac16790d4e62bc9ba21e899ac560089c
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("dedicated")}}

Das **`DedicatedWorkerGlobalScope`**-Objekt (der globale Gültigkeitsbereich des {{domxref("Worker")}}) ist über das Schlüsselwort {{domxref("WorkerGlobalScope.self","self")}} zugänglich. Einige zusätzliche globale Funktionen, Namensräume und Konstruktoren, die normalerweise nicht mit dem globalen Worker-Gültigkeitsbereich in Verbindung stehen, aber verfügbar sind, sind im [JavaScript Reference](/de/docs/Web/JavaScript/Reference) aufgeführt. Siehe auch: [Funktionen, die für Worker verfügbar sind](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt Eigenschaften von der {{domxref("WorkerGlobalScope")}}-Schnittstelle und ihrem Elternteil {{domxref("EventTarget")}}._

- {{domxref("DedicatedWorkerGlobalScope.name")}} {{ReadOnlyInline}}
  - : Der Name, der dem {{domxref("Worker")}} (optional) bei seiner Erstellung durch den {{domxref("Worker.Worker", "Worker()")}}-Konstruktor gegeben wurde. Dies ist hauptsächlich für Debugging-Zwecke nützlich.

## Instanz-Methoden

_Diese Schnittstelle erbt Methoden von der {{domxref("WorkerGlobalScope")}}-Schnittstelle und ihrem Elternteil {{domxref("EventTarget")}}._

- {{domxref("DedicatedWorkerGlobalScope.close()")}}
  - : Verwirft alle Aufgaben, die in der Ereignisschleife des `WorkerGlobalScope`-Bereichs eingereiht sind, und schließt diesen Bereich effektiv.
- {{domxref("DedicatedWorkerGlobalScope.postMessage()")}}
  - : Sendet eine Nachricht — die aus einem beliebigen JavaScript-Objekt bestehen kann — an das übergeordnete Dokument, das den Worker ursprünglich erstellt hat.
- {{domxref("DedicatedWorkerGlobalScope.cancelAnimationFrame()")}}
  - : Bricht eine bereits geplante Animation Frame-Anforderung ab, die zuvor durch einen Aufruf von {{domxref("DedicatedWorkerGlobalScope.requestAnimationFrame()", "requestAnimationFrame()")}} geplant wurde.
- {{domxref("DedicatedWorkerGlobalScope.requestAnimationFrame()")}}
  - : Führt eine Animation Frame-Anforderung aus und ruft eine vom Benutzer bereitgestellte Rückruffunktion vor dem nächsten Neuzeichnen auf.

## Ereignisse

Hören Sie dieses Ereignis mit {{domxref("EventTarget/addEventListener()", "addEventListener()")}} oder indem Sie einen Ereignislistener der `oneventname`-Eigenschaft dieser Schnittstelle zuweisen.

- {{domxref("DedicatedWorkerGlobalScope/message_event", "message")}}
  - : Wird ausgelöst, wenn der Worker eine Nachricht von seinem Elternteil erhält.
- {{domxref("DedicatedWorkerGlobalScope/messageerror_event", "messageerror")}}
  - : Wird ausgelöst, wenn ein Worker eine Nachricht erhält, die nicht deserialisiert werden kann.
- {{domxref("DedicatedWorkerGlobalScope/rtctransform_event", "rtctransform")}}
  - : Wird ausgelöst, wenn ein codiertes Video- oder Audio-Frame zur Verarbeitung durch eine {{domxref("WebRTC API/Using Encoded Transforms", "WebRTC Encoded Transform", "", "nocode")}} eingereiht wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Worker")}}
- {{domxref("WorkerGlobalScope")}}
- [Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Funktionen, die für Worker verfügbar sind](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
