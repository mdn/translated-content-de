---
title: SharedWorker
slug: Web/API/SharedWorker
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{APIRef("Web Workers API")}}

Das **`SharedWorker`**-Interface repräsentiert eine spezielle Art von Worker, der von mehreren Browsing-Kontexten, wie mehreren Fenstern, iframes oder sogar Workern, _zugänglich_ ist. Sie implementieren ein anderes Interface als dedizierte Worker und haben einen anderen globalen Bereich, [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope).

> [!NOTE]
> Wenn auf SharedWorker von mehreren Browsing-Kontexten aus zugegriffen werden kann, müssen alle diese Browsing-Kontexte genau den gleichen Ursprung (gleiches Protokoll, gleicher Host und Port) teilen.

{{InheritanceDiagram}}

## Konstruktoren

- [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker)
  - : Erstellt einen geteilten Web Worker, der das Skript an der angegebenen URL ausführt.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SharedWorker.port`](/de/docs/Web/API/SharedWorker/port) {{ReadOnlyInline}}
  - : Gibt ein [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekt zurück, das zur Kommunikation mit und Steuerung des geteilten Workers verwendet wird.

## Ereignisse

- [`error`](/de/docs/Web/API/SharedWorker/error_event)
  - : Wird ausgelöst, wenn ein Fehler im geteilten Worker auftritt.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Beispiel

In unserem [einfachen Beispiel eines geteilten Workers](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([geteilten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)), haben wir zwei HTML-Seiten, von denen jede ein JavaScript verwendet, um eine einfache Berechnung durchzuführen. Die verschiedenen Skripte verwenden die gleiche Worker-Datei, um die Berechnung durchzuführen – sie können beide darauf zugreifen, auch wenn ihre Seiten in verschiedenen Fenstern ausgeführt werden.

Der folgende Codeausschnitt zeigt die Erstellung eines `SharedWorker`-Objekts mit dem [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker)-Konstruktor. Beide Skripte enthalten dies:

```js
const myWorker = new SharedWorker("worker.js");
```

> [!NOTE]
> Sobald ein Shared Worker erstellt wurde, kann jedes Skript, das im gleichen Ursprung ausgeführt wird, eine Referenz auf diesen Worker erhalten und mit ihm kommunizieren. Der shared worker bleibt so lange am Leben, wie die Besitzer-Menge seines globalen Bereichs (eine Menge von `Document`- und `WorkerGlobalScope`-Objekten) nicht leer ist (zum Beispiel, wenn es eine offene Seite gibt, die eine Referenz darauf hält, vielleicht durch `new SharedWorker()`). Um mehr über die Lebensdauer von Shared Workern zu erfahren, siehe den Abschnitt [The worker's lifetime](https://html.spec.whatwg.org/multipage/workers.html#the-worker's-lifetime) in der HTML-Spezifikation.

Beide Skripte greifen dann über ein [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekt auf den Worker zu, das mithilfe der [`SharedWorker.port`](/de/docs/Web/API/SharedWorker/port)-Eigenschaft erstellt wurde. Wenn das `onmessage`-Ereignis mit `addEventListener` angehängt wird, wird der Port manuell mit der `start()`-Methode gestartet:

```js
myWorker.port.start();
```

Wenn der Port gestartet ist, senden beide Skripte Nachrichten an den Worker und verarbeiten Nachrichten, die von ihm gesendet werden, mit `port.postMessage()` und `port.onmessage`, jeweils:

> [!NOTE]
> Sie können die Devtools Ihres Browsers verwenden, um Ihren SharedWorker zu debuggen, indem Sie eine URL in die Adressleiste Ihres Browsers eingeben, um auf das Devtools-Workers-Inspektor zuzugreifen; zum Beispiel in Chrome die URL `chrome://inspect/#workers` und in Firefox die URL `about:debugging#workers`.

```js
first.onchange = () => {
  myWorker.port.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};

second.onchange = () => {
  myWorker.port.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};

myWorker.port.onmessage = (e) => {
  result1.textContent = e.data;
  console.log("Message received from worker");
};
```

Im Worker verwenden wir den [`onconnect`](/de/docs/Web/API/SharedWorkerGlobalScope/connect_event)-Handler, um denselben oben besprochenen Port zu verbinden. Die diesem Worker zugeordneten Ports sind im `ports`-Eigentum des [`connect`](/de/docs/Web/API/SharedWorkerGlobalScope/connect_event)-Ereignisses zugänglich – wir verwenden dann die [`MessagePort`](/de/docs/Web/API/MessagePort)-`start()`-Methode, um den Port zu starten, und den `onmessage`-Handler, um Nachrichten zu verarbeiten, die von den Hauptthreads gesendet werden.

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
