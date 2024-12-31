---
title: SharedWorker
slug: Web/API/SharedWorker
l10n:
  sourceCommit: 875215de95e76ff145fc85902d32c1142a1ccf53
---

{{APIRef("Web Workers API")}}

Das **`SharedWorker`**-Interface repräsentiert eine spezielle Art von Worker, der von mehreren Browsing-Kontexten, wie z.B. mehreren Fenstern, iframes oder sogar Workern, _zugänglich_ gemacht werden kann. Sie implementieren eine andere Schnittstelle als dedizierte Worker und verfügen über einen anderen globalen Geltungsbereich, [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope).

> [!NOTE]
> Wenn auf einen SharedWorker von mehreren Browsing-Kontexten zugegriffen werden kann, müssen alle diese Browsing-Kontexte genau den gleichen Ursprung teilen (gleiches Protokoll, Host und Port).

{{InheritanceDiagram}}

## Konstruktoren

- [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker)
  - : Erstellt einen gemeinsam genutzten Web-Worker, der das Skript an der angegebenen URL ausführt.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SharedWorker.port`](/de/docs/Web/API/SharedWorker/port) {{ReadOnlyInline}}
  - : Gibt ein [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekt zurück, das zur Kommunikation und Steuerung des gemeinsam genutzten Workers verwendet wird.

## Ereignisse

- [`error`](/de/docs/Web/API/SharedWorker/error_event)
  - : Wird ausgelöst, wenn ein Fehler im gemeinsam genutzten Worker auftritt.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Beispiel

In unserem [einfachen Beispiel für einen gemeinsam genutzten Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([run shared worker](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)), haben wir zwei HTML-Seiten, von denen jede ein JavaScript verwendet, um eine einfache Berechnung durchzuführen. Die verschiedenen Skripte verwenden dieselbe Worker-Datei für die Berechnung — sie können beide auf sie zugreifen, selbst wenn ihre Seiten in verschiedenen Fenstern laufen.

Der folgende Code-Snippet zeigt die Erstellung eines `SharedWorker`-Objekts mit dem [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker)-Konstruktor. Beide Skripte enthalten dies:

```js
const myWorker = new SharedWorker("worker.js");
```

> [!NOTE]
> Sobald ein gemeinsam genutzter Worker erstellt wurde, kann jedes Skript, das im gleichen Ursprung ausgeführt wird, eine Referenz auf diesen Worker erhalten und mit ihm kommunizieren. Der gemeinsam genutzte Worker bleibt so lange aktiv, wie die Eigentümermenge seines globalen Bereichs (eine Menge von `Document`- und `WorkerGlobalScope`-Objekten) nicht leer ist (zum Beispiel, wenn es eine lebende Seite gibt, die eine Referenz darauf hält, vielleicht durch `new SharedWorker()`). Weitere Informationen über die Lebensdauer von gemeinsam genutzten Workern finden Sie im Abschnitt [Die Lebensdauer des Workers](https://html.spec.whatwg.org/multipage/workers.html#the-worker's-lifetime) der HTML-Spezifikation.

Beide Skripte greifen dann über ein [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekt, das mit der [`SharedWorker.port`](/de/docs/Web/API/SharedWorker/port)-Eigenschaft erstellt wurde, auf den Worker zu. Wenn das `onmessage`-Ereignis mit `addEventListener` angehängt wird, wird der Port manuell mithilfe seiner `start()`-Methode gestartet:

```js
myWorker.port.start();
```

Wenn der Port gestartet ist, senden beide Skripte Nachrichten an den Worker und verarbeiten Nachrichten, die von ihm gesendet werden, mithilfe von `port.postMessage()` und `port.onmessage`:

> [!NOTE]
> Sie können die Entwicklertools des Browsers verwenden, um Ihren SharedWorker zu debuggen, indem Sie eine URL in die Adressleiste Ihres Browsers eingeben, um auf den Workers-Inspector der Entwicklertools zuzugreifen; zum Beispiel in Chrome die URL `chrome://inspect/#workers` und in Firefox die URL `about:debugging#workers`.

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

Innerhalb des Workerkontextes verwenden wir den [`onconnect`](/de/docs/Web/API/SharedWorkerGlobalScope/connect_event)-Handler, um eine Verbindung zum gleichen oben erwähnten Port herzustellen. Die mit diesem Worker verknüpften Ports sind in der `ports`-Eigenschaft des [`connect`](/de/docs/Web/API/SharedWorkerGlobalScope/connect_event)-Ereignisses zugänglich — wir verwenden dann die `start()`-Methode von [`MessagePort`](/de/docs/Web/API/MessagePort), um den Port zu starten und den `onmessage`-Handler, um mit den Nachrichten umzugehen, die von den Haupt-Threads gesendet werden.

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
