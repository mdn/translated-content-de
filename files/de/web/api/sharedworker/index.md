---
title: SharedWorker
slug: Web/API/SharedWorker
l10n:
  sourceCommit: 03e3379cbad4f98a74021ad0753a41cd38d547fd
---

{{APIRef("Web Workers API")}}

Die **`SharedWorker`**-Schnittstelle repräsentiert eine spezielle Art von Worker, auf die von mehreren Browsing-Kontexten, wie mehreren Fenstern oder iframes, _zugegriffen_ werden kann. Shared Worker implementieren eine andere Schnittstelle als dedizierte Worker, haben einen anderen globalen Gültigkeitsbereich ([`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope)) und ihr Konstruktor ist im [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) nicht verfügbar, sodass sie nicht von dedizierten Workern instanziiert werden können.

> [!NOTE]
> Wenn auf SharedWorker von mehreren Browsing-Kontexten zugegriffen werden kann, müssen all diese Browsing-Kontexte den exakt gleichen Ursprung teilen (gleiches Protokoll, Host und Port).

{{InheritanceDiagram}}

## Konstruktoren

- [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker)
  - : Erstellt einen Shared Web Worker, der das Skript unter der angegebenen URL ausführt.

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SharedWorker.port`](/de/docs/Web/API/SharedWorker/port) {{ReadOnlyInline}}
  - : Gibt ein [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekt zurück, das zur Kommunikation und Steuerung des Shared Workers verwendet wird.

## Ereignisse

- [`error`](/de/docs/Web/API/SharedWorker/error_event)
  - : Wird ausgelöst, wenn ein Fehler im Shared Worker auftritt.

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Beispiel

### Grundlegende Verwendung

In unserem [Grundlegenden Shared Worker Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([Shared Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)), haben wir zwei HTML-Seiten, die jeweils mithilfe von JavaScript eine einfache Berechnung durchführen. Die verschiedenen Skripte verwenden die gleiche Worker-Datei, um die Berechnung durchzuführen – sie können beide darauf zugreifen, selbst wenn ihre Seiten in unterschiedlichen Fenstern laufen.

Der folgende Codeausschnitt zeigt die Erstellung eines `SharedWorker`-Objekts unter Verwendung des [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker)-Konstruktors. Beide Skripte enthalten Folgendes:

```js
const myWorker = new SharedWorker("worker.js");
```

> [!NOTE]
> Sobald ein Shared Worker erstellt wurde, kann jedes Skript, das im gleichen Ursprung ausgeführt wird, eine Referenz zu diesem Worker erhalten und mit ihm kommunizieren.
>
> Ein Shared Worker bleibt so lange aktiv, wie eine offene Seite eine Referenz zu ihm hält. Die [`extendedLifetime`](/de/docs/Web/API/SharedWorker/SharedWorker#extendedlifetime)-Konstruktoroption kann gesetzt werden, um einen Shared Worker für eine kurze Zeit am Leben zu halten, nachdem alle Referenzen geschlossen wurden. Dies ermöglicht es dem Worker, Aufräumaufgaben auszuführen, wie das Speichern von Zustandsinformationen oder das Senden von Analysedaten an Server. Weitere Informationen finden Sie unter [Lebensdauer des Shared Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers#shared_worker_lifetime) in _Verwendung von Web Workern_.

Beide Skripte greifen dann über ein [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekt auf den Worker zu, das mit der [`SharedWorker.port`](/de/docs/Web/API/SharedWorker/port)-Eigenschaft erstellt wurde. Wenn das `onmessage`-Ereignis mit `addEventListener` angebunden wird, wird der Port manuell mit seiner `start()`-Methode gestartet:

```js
myWorker.port.start();
```

Wenn der Port gestartet ist, senden beide Skripte Nachrichten an den Worker und bearbeiten Nachrichten, die von ihm gesendet werden, mit `port.postMessage()` und `port.onmessage`:

> [!NOTE]
> Sie können die Browser-Entwicklungstools nutzen, um Ihren SharedWorker zu debuggen, indem Sie eine URL in die Adressleiste Ihres Browsers eingeben, um den Entwicklungswerkzeugarbeiter-Inspektor zu öffnen; zum Beispiel in Chrome die URL `chrome://inspect/#workers`, und in Firefox die URL `about:debugging#workers`.

```js
[first, second].forEach((input) => {
  input.onchange = () => {
    myWorker.port.postMessage([first.value, second.value]);
    console.log("Message posted to worker");
  };
});

myWorker.port.onmessage = (e) => {
  result1.textContent = e.data;
  console.log("Message received from worker");
};
```

Innerhalb des Workers verwenden wir den [`onconnect`](/de/docs/Web/API/SharedWorkerGlobalScope/connect_event)-Handler, um uns mit dem oben diskutierten Port zu verbinden. Die mit diesem Worker verbundenen Ports sind über die `ports`-Eigenschaft des [`connect`](/de/docs/Web/API/SharedWorkerGlobalScope/connect_event)-Ereignisses zugänglich – wir verwenden dann die [`MessagePort`](/de/docs/Web/API/MessagePort)-`start()`-Methode, um den Port zu starten, und den `onmessage`-Handler, um Nachrichten zu verarbeiten, die von den Haupt-Threads gesendet werden.

```js
onconnect = (e) => {
  const port = e.ports[0];

  port.addEventListener("message", (e) => {
    const workerResult = `Result: ${e.data[0] * e.data[1]}`;
    port.postMessage(workerResult);
  });

  port.start(); // Required when using addEventListener. Otherwise called implicitly by onmessage setter.
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Worker`](/de/docs/Web/API/Worker)
