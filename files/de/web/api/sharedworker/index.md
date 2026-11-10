---
title: SharedWorker
slug: Web/API/SharedWorker
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("Web Workers API")}}

Die **`SharedWorker`**-Schnittstelle repräsentiert eine bestimmte Art von Worker, auf den aus mehreren Browsing-Kontexten, beispielsweise mehreren Fenstern oder iframes, _zugegriffen_ werden kann.
Shared Workers implementieren eine andere Schnittstelle als Dedicated Workers, haben einen anderen globalen Gültigkeitsbereich ([`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope)), und ihr Konstruktor ist in [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) nicht verfügbar. Daher können sie nicht aus Dedicated Workers heraus instanziiert werden.

> [!NOTE]
> Damit aus mehreren Browsing-Kontexten auf einen SharedWorker zugegriffen werden kann, müssen alle diese Kontexte exakt denselben Origin haben (dasselbe Protokoll, denselben Host und denselben Port).

{{InheritanceDiagram}}

## Konstruktoren

- [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker)
  - : Erstellt einen Shared Web Worker, der das Skript unter der angegebenen URL ausführt.

## Instanzeigenschaften

_Erbt Eigenschaften von der übergeordneten Schnittstelle [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SharedWorker.port`](/de/docs/Web/API/SharedWorker/port) {{ReadOnlyInline}}
  - : Gibt ein [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekt zurück, das zur Kommunikation mit dem Shared Worker und zu dessen Steuerung verwendet wird.

## Instanzmethoden

_Erbt Methoden von der übergeordneten Schnittstelle [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Ereignisse

- [`error`](/de/docs/Web/API/SharedWorker/error_event)
  - : Wird ausgelöst, wenn im Shared Worker ein Fehler auftritt.

## Beispiel

### Grundlegende Verwendung

In unserem [einfachen Beispiel für einen Shared Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([Shared Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)) gibt es zwei HTML-Seiten, die jeweils JavaScript für eine einfache Berechnung verwenden. Die verschiedenen Skripte verwenden dieselbe Worker-Datei für die Berechnung – beide können darauf zugreifen, selbst wenn ihre Seiten in unterschiedlichen Fenstern ausgeführt werden.

Der folgende Codeausschnitt zeigt, wie mit dem Konstruktor [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker) ein `SharedWorker`-Objekt erstellt wird.
Beide Skripte enthalten Folgendes:

```js
const myWorker = new SharedWorker("worker.js");
```

> [!NOTE]
> Sobald ein Shared Worker erstellt wurde, kann jedes Skript, das auf demselben Origin ausgeführt wird, eine Referenz auf diesen Worker erhalten und mit ihm kommunizieren.
>
> Ein Shared Worker bleibt aktiv, solange eine geöffnete Seite eine Referenz auf ihn hält.
> Die Konstruktoroption [`extendedLifetime`](/de/docs/Web/API/SharedWorker/SharedWorker#extendedlifetime) kann festgelegt werden, damit ein Shared Worker noch kurze Zeit aktiv bleibt, nachdem alle Referenzen geschlossen wurden.
> So kann der Worker Aufräumarbeiten durchführen, beispielsweise Zustandsinformationen in einem Speicher ablegen oder Analysedaten an Server senden.
> Weitere Informationen finden Sie unter [Lebensdauer eines Shared Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers#shared_worker_lifetime) in _Web Worker verwenden_.

Anschließend greifen beide Skripte über ein [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekt auf den Worker zu, das über die Eigenschaft [`SharedWorker.port`](/de/docs/Web/API/SharedWorker/port) bereitgestellt wird.
Wenn der `onmessage`-Event-Handler mit `addEventListener` registriert wird, muss der Port manuell mit seiner Methode `start()` gestartet werden:

```js
myWorker.port.start();
```

Sobald der Port gestartet ist, senden beide Skripte mit `port.postMessage()` Nachrichten an den Worker und verarbeiten mit `port.onmessage` die von ihm gesendeten Nachrichten:

> [!NOTE]
> Sie können Ihren SharedWorker mit den Entwicklerwerkzeugen des Browsers debuggen. Geben Sie dazu in die Adressleiste Ihres Browsers eine URL ein, über die Sie die Worker-Ansicht der Entwicklerwerkzeuge erreichen: in Chrome beispielsweise `chrome://inspect/#workers` und in Firefox `about:debugging#workers`.

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

Innerhalb des Workers verwenden wir den [`onconnect`](/de/docs/Web/API/SharedWorkerGlobalScope/connect_event)-Handler, um eine Verbindung zu dem oben beschriebenen Port herzustellen. Die diesem Worker zugeordneten Ports sind über die Eigenschaft `ports` des [`connect`](/de/docs/Web/API/SharedWorkerGlobalScope/connect_event)-Ereignisses zugänglich. Anschließend starten wir den Port mit der Methode `start()` von [`MessagePort`](/de/docs/Web/API/MessagePort) und verarbeiten mit dem `onmessage`-Handler Nachrichten, die von den Haupt-Threads gesendet werden.

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
