---
title: SharedWorker
slug: Web/API/SharedWorker
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Web Workers API")}}

Die **`SharedWorker`**-Schnittstelle repräsentiert eine spezielle Art von Worker, die von mehreren Browsing-Kontexten, wie mehreren Fenstern, iframes oder sogar Workern, _angesprochen_ werden kann. Sie implementieren eine andere Schnittstelle als dedizierte Worker und haben einen anderen globalen Scope, [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope).

> [!NOTE]
> Wenn `SharedWorker` von mehreren Browsing-Kontexten angesprochen werden kann, müssen all diese Browsing-Kontexte denselben Ursprung teilen (dasselbe Protokoll, Host und Port).

{{InheritanceDiagram}}

## Konstruktoren

- [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker)
  - : Erstellt einen geteilten Web Worker, der das Skript an der angegebenen URL ausführt.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SharedWorker.port`](/de/docs/Web/API/SharedWorker/port) {{ReadOnlyInline}}
  - : Gibt ein [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekt zurück, das zur Kommunikation mit und zur Steuerung des geteilten Workers verwendet wird.

## Ereignisse

- [`error`](/de/docs/Web/API/SharedWorker/error_event)
  - : Wird ausgelöst, wenn im geteilten Worker ein Fehler auftritt.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Beispiel

In unserem [Einfaches SharedWorker-Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([geteilten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)) haben wir zwei HTML-Seiten, von denen jede einige JavaScript verwendet, um eine einfache Berechnung durchzuführen. Die verschiedenen Skripte verwenden dieselbe Worker-Datei, um die Berechnung durchzuführen – sie können beide darauf zugreifen, auch wenn ihre Seiten in verschiedenen Fenstern ausgeführt werden.

Der folgende Codeausschnitt zeigt die Erstellung eines `SharedWorker`-Objekts mit dem [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker)-Konstruktor. Beide Skripte enthalten dies:

```js
const myWorker = new SharedWorker("worker.js");
```

> [!NOTE]
> Sobald ein SharedWorker erstellt wird, kann jedes Skript, das im selben Ursprung läuft, eine Referenz auf diesen Worker erhalten und mit ihm kommunizieren. Der geteilte Worker bleibt so lange am Leben, wie das Besitzerset seines globalen Scopes (eine Menge von `Document`- und `WorkerGlobalScope`-Objekten) nicht leer ist (zum Beispiel, wenn es eine aktive Seite gibt, die eine Referenz darauf hält, vielleicht durch `new SharedWorker()`). Um mehr über die Lebensdauer von SharedWorkern zu erfahren, lesen Sie den Abschnitt [The worker's lifetime](https://html.spec.whatwg.org/multipage/workers.html#the-worker's-lifetime) der HTML-Spezifikation.

Beide Skripte greifen dann über ein [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekt, das unter Verwendung der [`SharedWorker.port`](/de/docs/Web/API/SharedWorker/port)-Eigenschaft erstellt wurde, auf den Worker zu. Wenn das onmessage-Ereignis mit addEventListener angehängt wird, wird der Port manuell mit seiner `start()`-Methode gestartet:

```js
myWorker.port.start();
```

Wenn der Port gestartet ist, senden beide Skripte Nachrichten an den Worker und bearbeiten Nachrichten, die von ihm gesendet werden, unter Verwendung von `port.postMessage()` und `port.onmessage`, entsprechend:

> [!NOTE]
> Sie können die Entwicklertools des Browsers verwenden, um Ihren SharedWorker zu debuggen, indem Sie eine URL in Ihre Browser-Adressleiste eingeben, um auf den Entwicklertools-Worker-Inspektor zuzugreifen; zum Beispiel, in Chrome die URL `chrome://inspect/#workers`, und in FireFox die URL `about:debugging#workers`.

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

Im Worker verwenden wir den [`onconnect`](/de/docs/Web/API/SharedWorkerGlobalScope/connect_event)-Handler, um sich mit dem oben besprochenen Port zu verbinden. Die mit diesem Worker verbundenen Ports sind in der `ports`-Eigenschaft des [`connect`](/de/docs/Web/API/SharedWorkerGlobalScope/connect_event)-Ereignisses zugänglich – wir verwenden dann die `start()`-Methode von [`MessagePort`](/de/docs/Web/API/MessagePort), um den Port zu starten, und den `onmessage`-Handler, um mit Nachrichten umzugehen, die von den Haupt-Threads gesendet werden.

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
