---
title: Worker
slug: Web/API/Worker
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

Das **`Worker`**-Interface der [Web Workers API](/de/docs/Web/API/Web_Workers_API) repräsentiert eine Hintergrundaufgabe, die über Skripte erstellt werden kann und die in der Lage ist, Nachrichten an ihren Ersteller zurückzusenden.

Ein Worker wird durch den Aufruf des Konstruktors `Worker("path/to/worker/script")` erstellt.

Worker können selbst neue Worker starten, vorausgesetzt, diese Worker befinden sich im gleichen [Origin](/de/docs/Web/Security/Same-origin_policy) wie die übergeordnete Seite.

Beachten Sie, dass nicht alle Schnittstellen und Funktionen für Web Worker verfügbar sind. Weitere Details finden Sie unter [Funktionen und Klassen, die Web Workern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

{{InheritanceDiagram}}

## Konstruktoren

- [`Worker()`](/de/docs/Web/API/Worker/Worker)
  - : Erstellt einen dedizierten Web Worker, der das Skript an der angegebenen URL ausführt. Dies funktioniert auch für [Blob URLs](/de/docs/Web/API/Blob).

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem übergeordneten Objekt, [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Instanz-Methoden

_Erbt Methoden von seinem übergeordneten Objekt, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage)
  - : Sendet eine Nachricht — bestehend aus einem beliebigen JavaScript-Objekt — an den internen Bereich des Workers.
- [`Worker.terminate()`](/de/docs/Web/API/Worker/terminate)
  - : Beendet den Worker sofort. Dies ermöglicht es dem Worker nicht, seine Operationen abzuschließen; er wird sofort gestoppt. [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Instanzen unterstützen diese Methode nicht.

## Ereignisse

- [`error`](/de/docs/Web/API/Worker/error_event)
  - : Wird ausgelöst, wenn ein Fehler im Worker auftritt.
- [`message`](/de/docs/Web/API/Worker/message_event)
  - : Wird ausgelöst, wenn der übergeordnete Worker eine Nachricht von diesem Worker erhält.
- [`messageerror`](/de/docs/Web/API/Worker/messageerror_event)
  - : Wird ausgelöst, wenn ein `Worker`-Objekt eine Nachricht erhält, die nicht [deserialisiert](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) werden kann.

## Beispiel

Der folgende Code-Schnipsel erstellt ein `Worker`-Objekt mit dem [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktor und verwendet dann das Worker-Objekt:

```js
const myWorker = new Worker("/worker.js");
const first = document.querySelector("input#number1");
const second = document.querySelector("input#number2");

first.onchange = () => {
  myWorker.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};
```

Für ein vollständiges Beispiel siehe unser [Grundlegendes Beispiel für dedizierte Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([dedizierten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Die Unterstützung variiert für unterschiedliche Arten von Workern. Siehe die Seite jedes Worker-Typs für spezifische Informationen.

{{Compat}}

### Cross-Origin-Worker-Fehlerverhalten

In frühen Versionen der Spezifikation warf das Laden eines Cross-Origin-Worker-Skripts einen `SecurityError`. Heutzutage wird stattdessen ein [`error`](/de/docs/Web/API/Worker/error_event)-Ereignis ausgelöst.

## Siehe auch

- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Funktionen und Klassen, die Web Workern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
- Andere Arten von Workern: [`SharedWorker`](/de/docs/Web/API/SharedWorker) und [Service Worker](/de/docs/Web/API/Service_Worker_API).
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Interface
