---
title: SharedWorker
slug: Web/API/SharedWorker
l10n:
  sourceCommit: 46aa67be3c4210db13e1daa9a5f3b53c6f588142
---

{{APIRef("Web Workers API")}}

Das **`SharedWorker`**-Interface repräsentiert eine spezielle Art von Worker, der von mehreren Browser-Kontexten, wie beispielsweise mehreren Fenstern oder iframes, _zugänglich_ ist. Shared Workers implementieren eine andere Schnittstelle als dedizierte Worker, haben einen anderen globalen Geltungsbereich ([`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope)), und ihr Konstruktor ist nicht im [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) verfügbar, sodass sie nicht von dedizierten Workern instanziiert werden können.

> [!NOTE]
> Wenn auf SharedWorker von mehreren Browser-Kontexten zugegriffen werden kann, müssen alle diese Browser-Kontexte denselben Ursprung teilen (gleiches Protokoll, Host und Port).

{{InheritanceDiagram}}

## Konstruktoren

- [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker)
  - : Erstellt einen gemeinsamen Webworker, der das Skript unter der angegebenen URL ausführt.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SharedWorker.port`](/de/docs/Web/API/SharedWorker/port) {{ReadOnlyInline}}
  - : Gibt ein [`MessagePort`](/de/docs/Web/API/MessagePort) Objekt zurück, das zur Kommunikation und Steuerung des Shared Workers verwendet wird.

## Ereignisse

- [`error`](/de/docs/Web/API/SharedWorker/error_event)
  - : Wird ausgelöst, wenn ein Fehler im Shared Worker auftritt.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Beispiel

In unserem [einfachen Beispiel für einen Shared Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([Shared Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)), haben wir zwei HTML-Seiten, von denen jede ein JavaScript verwendet, um eine einfache Berechnung durchzuführen. Die verschiedenen Skripte verwenden die gleiche Worker-Datei, um die Berechnung durchzuführen – sie können beide darauf zugreifen, selbst wenn ihre Seiten in verschiedenen Fenstern laufen.

Der folgende Codeausschnitt zeigt die Erstellung eines `SharedWorker`-Objekts mit dem [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker)-Konstruktor. Beide Skripte enthalten dies:

```js
const myWorker = new SharedWorker("worker.js");
```

> [!NOTE]
> Sobald ein Shared Worker erstellt wurde, kann jedes Skript, das im gleichen Ursprung ausgeführt wird, eine Referenz zu diesem Worker erhalten und mit ihm kommunizieren. Der Shared Worker bleibt so lange am Leben, wie sein globaler Bereich-Eigentümer-Set (eine Menge von `Document`- und `WorkerGlobalScope`-Objekten) nicht leer ist (zum Beispiel, wenn es eine lebende Seite gibt, die eine Referenz zu ihm hält, vielleicht über `new SharedWorker()`). Um mehr über die Lebensdauer von Shared Workern zu erfahren, siehe den Abschnitt [The worker's lifetime](https://html.spec.whatwg.org/multipage/workers.html#the-worker's-lifetime) der HTML-Spezifikation.

Beide Skripte greifen dann über ein [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekt, das mit der [`SharedWorker.port`](/de/docs/Web/API/SharedWorker/port)-Eigenschaft erstellt wurde, auf den Worker zu. Wenn das `onmessage`-Ereignis mit `addEventListener` angehängt wird, wird der Port manuell mit seiner `start()`-Methode gestartet:

```js
myWorker.port.start();
```

Wenn der Port gestartet wird, senden beide Skripte Nachrichten an den Worker und verarbeiten Nachrichten, die von ihm gesendet wurden, mit `port.postMessage()` und `port.onmessage`, jeweils:

> [!NOTE]
> Sie können Entwickler-Tools im Browser verwenden, um Ihren Shared Worker zu debuggen, indem Sie eine URL in die Adressleiste des Browsers eingeben, um den Inspector der Entwickler-Tools aufzurufen; zum Beispiel in Chrome die URL `chrome://inspect/#workers` und in Firefox die URL `about:debugging#workers`.

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

Innerhalb des Workers verwenden wir den [`onconnect`](/de/docs/Web/API/SharedWorkerGlobalScope/connect_event)-Handler, um sich mit dem oben diskutierten Port zu verbinden. Die mit diesem Worker verbundenen Ports sind in der `ports`-Eigenschaft des [`connect`](/de/docs/Web/API/SharedWorkerGlobalScope/connect_event)-Ereignisses zugänglich — wir verwenden dann die `start()`-Methode von [`MessagePort`](/de/docs/Web/API/MessagePort), um den Port zu starten, und den `onmessage`-Handler, um mit Nachrichten umzugehen, die von den Haupt-Threads gesendet werden.

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
