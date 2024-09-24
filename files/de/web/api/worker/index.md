---
title: Worker
slug: Web/API/Worker
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

Die **`Worker`**-Schnittstelle der [Web Workers API](/de/docs/Web/API/Web_Workers_API) repräsentiert einen Hintergrundprozess, der über ein Skript erstellt werden kann und Nachrichten an seinen Ersteller senden kann.

Ein Worker wird durch Aufruf des `Worker("path/to/worker/script")`-Konstruktors erstellt.

Worker können selbst neue Worker erzeugen, solange diese am gleichen [Origin](/de/docs/Web/Security/Same-origin_policy) wie die übergeordnete Seite gehostet werden.

Beachten Sie, dass nicht alle Schnittstellen und Funktionen für Web Worker verfügbar sind. Weitere Details finden Sie unter [Funktionen und Klassen, die Web Workern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

{{InheritanceDiagram}}

## Konstruktoren

- {{domxref("Worker.Worker", "Worker()")}}
  - : Erstellt einen dedizierten Web Worker, der das Skript an der angegebenen URL ausführt. Dies funktioniert auch für [Blob-URLs](/de/docs/Web/API/Blob).

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref("EventTarget")}}._

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, {{domxref("EventTarget")}}._

- {{domxref("Worker.postMessage()")}}
  - : Sendet eine Nachricht — die aus einem beliebigen JavaScript-Objekt besteht — an den inneren Bereich des Workers.
- {{domxref("Worker.terminate()")}}
  - : Beendet sofort den Worker. Dadurch kann der Worker seine Operationen nicht abschließen; er wird sofort angehalten. [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Instanzen unterstützen diese Methode nicht.

## Ereignisse

- [`error`](/de/docs/Web/API/Worker/error_event)
  - : Wird ausgelöst, wenn ein Fehler im Worker auftritt.
- [`message`](/de/docs/Web/API/Worker/message_event)
  - : Wird ausgelöst, wenn der Elternteil des Workers eine Nachricht von diesem Worker erhält.
- [`messageerror`](/de/docs/Web/API/Worker/messageerror_event)
  - : Wird ausgelöst, wenn ein `Worker`-Objekt eine Nachricht erhält, die nicht [deserialisiert](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) werden kann.

## Beispiel

Der folgende Codeausschnitt erstellt ein `Worker`-Objekt mithilfe des {{domxref("Worker.Worker", "Worker()")}}-Konstruktors und nutzt dann das Worker-Objekt:

```js
const myWorker = new Worker("/worker.js");
const first = document.querySelector("input#number1");
const second = document.querySelector("input#number2");

first.onchange = () => {
  myWorker.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};
```

Für ein vollständiges Beispiel, siehe unser [Grundlegendes Beispiel für einen dedizierten Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([dedizierten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)).

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

Die Unterstützung variiert für verschiedene Arten von Workern. Siehe die Seite für jeden Worker-Typ für spezifische Informationen.

{{Compat}}

### Fehlverhalten bei Cross-Origin-Workern

In frühen Versionen der Spezifikation warf das Laden eines Cross-Origin-Worker-Skripts einen `SecurityError`. Heutzutage wird stattdessen ein {{domxref("Worker/error_event", "Fehler")}}-Ereignis ausgelöst.

## Siehe auch

- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Funktionen und Klassen, die Web Workern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
- Andere Arten von Workern: {{domxref("SharedWorker")}} und [Service Worker](/de/docs/Web/API/Service_Worker_API).
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Schnittstelle
