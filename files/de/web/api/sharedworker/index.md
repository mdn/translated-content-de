---
title: SharedWorker
slug: Web/API/SharedWorker
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Web Workers API")}}

Das **`SharedWorker`**-Interface repräsentiert eine spezielle Art von Worker, die von mehreren Browsing-Kontexten wie mehreren Fenstern, iframes oder sogar Workern _zugegriffen_ werden kann. Sie implementieren ein anderes Interface als dedizierte Worker und haben einen anderen globalen Gültigkeitsbereich, {{domxref("SharedWorkerGlobalScope")}}.

> [!NOTE]
> Wenn auf SharedWorker von mehreren Browsing-Kontexten zugegriffen werden kann, müssen all diese Browsing-Kontexte den exakt gleichen Ursprung (gleiches Protokoll, Host und Port) teilen.

{{InheritanceDiagram}}

## Konstruktoren

- {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}}
  - : Erstellt einen gemeinsamen Web-Worker, der das Skript unter der angegebenen URL ausführt.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem übergeordneten Objekt, {{domxref("EventTarget")}}._

- {{domxref("SharedWorker.port")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("MessagePort")}}-Objekt zurück, das verwendet wird, um mit dem gemeinsamen Worker zu kommunizieren und ihn zu steuern.

## Ereignisse

- {{domxref("SharedWorker.error_event", "error")}}
  - : Wird ausgelöst, wenn ein Fehler im gemeinsamen Worker auftritt.

## Instanz-Methoden

_Erbt Methoden von seinem übergeordneten Objekt, {{domxref("EventTarget")}}._

## Beispiel

In unserem [Grundlegendes Beispiel für geteilte Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([geteilten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)) haben wir zwei HTML-Seiten, jede verwendet etwas JavaScript, um eine einfache Berechnung durchzuführen. Die verschiedenen Skripte verwenden dieselbe Worker-Datei, um die Berechnung durchzuführen – sie können beide darauf zugreifen, auch wenn ihre Seiten in unterschiedlichen Fenstern laufen.

Der folgende Code-Schnipsel zeigt die Erstellung eines `SharedWorker`-Objekts mit dem {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}}-Konstruktor. Beide Skripte enthalten dies:

```js
const myWorker = new SharedWorker("worker.js");
```

> [!NOTE]
> Sobald ein SharedWorker erstellt wurde, kann jedes Skript im gleichen Ursprung eine Referenz zu diesem Worker erhalten und mit ihm kommunizieren. Der SharedWorker bleibt so lange aktiv, wie die Owner-Set seines globalen Gültigkeitsbereichs (eine Menge von `Document` und `WorkerGlobalScope` Objekten) nicht leer ist (zum Beispiel, wenn es eine lebende Seite gibt, die eine Referenz darauf hält, vielleicht durch `new SharedWorker()`). Mehr über die Lebensdauer eines SharedWorkers erfahren Sie im Abschnitt [Die Lebensdauer des Workers](https://html.spec.whatwg.org/multipage/workers.html#the-worker's-lifetime) der HTML-Spezifikation.

Beide Skripte greifen dann über ein {{domxref("MessagePort")}}-Objekt auf den Worker zu, das mit der {{domxref("SharedWorker.port")}}-Eigenschaft erstellt wurde. Wenn das `onmessage`-Ereignis mit `addEventListener` angehängt wird, wird der Port manuell mit seiner `start()`-Methode gestartet:

```js
myWorker.port.start();
```

Wenn der Port gestartet ist, senden beide Skripte Nachrichten an den Worker und verarbeiten Nachrichten, die von ihm gesendet werden, indem sie `port.postMessage()` und `port.onmessage` verwenden:

> [!NOTE]
> Sie können die Entwicklertools des Browsers verwenden, um Ihren SharedWorker zu debuggen, indem Sie eine URL in die Adressleiste Ihres Browsers eingeben, um auf die Inspektoransicht der Workern zuzugreifen; zum Beispiel in Chrome die URL `chrome://inspect/#workers`, und in Firefox die URL `about:debugging#workers`.

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

Im Worker verwenden wir den {{domxref("SharedWorkerGlobalScope.connect_event", "onconnect")}}-Handler, um sich mit dem oben besprochenen Port zu verbinden. Die Ports, die mit diesem Worker verbunden sind, sind in der `ports`-Eigenschaft des {{domxref("SharedWorkerGlobalScope/connect_event", "connect")}}-Ereignisses zugänglich – wir verwenden dann die `start()` Methode von {{domxref("MessagePort")}}, um den Port zu starten, und den `onmessage`-Handler, um mit Nachrichten umzugehen, die von den Haupt-Threads gesendet werden.

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

- {{domxref("Worker")}}
