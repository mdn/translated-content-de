---
title: SharedWorker
slug: Web/API/SharedWorker
l10n:
  sourceCommit: 26fb7eaa7b398a35c2463fa15ab6ccfa46a9e06d
---

{{APIRef("Web Workers API")}}

Das **`SharedWorker`**-Interface steht für eine bestimmte Art von Worker, der von mehreren Browserkontexten, wie etwa mehreren Fenstern oder iframes, _genutzt_ werden kann.
Shared Worker implementieren ein anderes Interface als dedizierte Worker, haben einen anderen globalen Gültigkeitsbereich ([`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope)), und ihr Konstruktor ist im [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) nicht verfügbar, daher können sie nicht von dedizierten Workern instanziiert werden.

> [!NOTE]
> Wenn auf SharedWorker von mehreren Browserkontexten zugegriffen werden kann, müssen alle diese Browserkontexte denselben Ursprung teilen (dasselbe Protokoll, denselben Host und denselben Port).

{{InheritanceDiagram}}

## Konstruktoren

- [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker)
  - : Erstellt einen gemeinsamen Web-Worker, der das Skript an der angegebenen URL ausführt.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SharedWorker.port`](/de/docs/Web/API/SharedWorker/port) {{ReadOnlyInline}}
  - : Gibt ein [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekt zurück, das verwendet wird, um mit dem Shared Worker zu kommunizieren und ihn zu steuern.

## Ereignisse

- [`error`](/de/docs/Web/API/SharedWorker/error_event)
  - : Wird ausgelöst, wenn im Shared Worker ein Fehler auftritt.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Beispiel

### Grundlegende Verwendung

In unserem [Beispiel für einen einfachen Shared Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([Shared Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)) haben wir zwei HTML-Seiten, die jeweils JavaScript verwenden, um eine einfache Berechnung durchzuführen. Die verschiedenen Skripte nutzen dasselbe Worker-File, um die Berechnung durchzuführen — beide können darauf zugreifen, auch wenn ihre Seiten in verschiedenen Fenstern ausgeführt werden.

Der folgende Codeausschnitt zeigt die Erstellung eines `SharedWorker`-Objekts mit dem [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker)-Konstruktor.
Beide Skripte enthalten dies:

```js
const myWorker = new SharedWorker("worker.js");
```

> [!NOTE]
> Sobald ein Shared Worker erstellt wurde, kann jedes Skript, das im gleichen Ursprung ausgeführt wird, eine Referenz zu diesem Worker erhalten und mit ihm kommunizieren.
>
> Ein Shared Worker bleibt so lange aktiv, wie eine offene Seite eine Referenz darauf hält.
> Die Konstruktoroption [`extendedLifetime`](/de/docs/Web/API/SharedWorker/SharedWorker#extendedlifetime) kann eingestellt werden, um einen Shared Worker für eine kurze Zeit am Leben zu erhalten, nachdem alle Referenzen geschlossen wurden.
> Dies ermöglicht dem Worker, Aufräumaufgaben durchzuführen, wie zum Beispiel das Schreiben von Statusinformationen auf Speichermedien oder das Zurücksenden von Analysedaten an Server.
> Weitere Informationen finden Sie unter [Shared Worker Lebensdauer](/de/docs/Web/API/Web_Workers_API/Using_web_workers#shared_worker_lifetime) in _Using web workers_.

Beide Skripte greifen dann über ein [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekt, das mit der Eigenschaft [`SharedWorker.port`](/de/docs/Web/API/SharedWorker/port) erstellt wurde, auf den Worker zu.
Wenn das `onmessage`-Ereignis mit `addEventListener` verbunden ist, wird der Port mit seiner `start()`-Methode manuell gestartet:

```js
myWorker.port.start();
```

Wenn der Port gestartet ist, senden beide Skripte Nachrichten an den Worker und verarbeiten Nachrichten, die von ihm gesendet werden, mit `port.postMessage()` und `port.onmessage`, jeweils:

> [!NOTE]
> Sie können Entwickler-Tools des Browsers verwenden, um Ihren Shared Worker zu debuggen, indem Sie eine URL in die Adressleiste Ihres Browsers eingeben, um die Entwickler-Tools-Worker-Inspektoren zu öffnen; beispielsweise in Chrome die URL `chrome://inspect/#workers`, und in Firefox die URL `about:debugging#workers`.

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

Innerhalb des Workers verwenden wir den [`onconnect`](/de/docs/Web/API/SharedWorkerGlobalScope/connect_event)-Handler, um auf denselben oben besprochenen Port zuzugreifen. Die mit diesem Worker verbundenen Ports sind in der `ports`-Eigenschaft des [`connect`](/de/docs/Web/API/SharedWorkerGlobalScope/connect_event)-Ereignisses zugänglich — wir verwenden dann die `start()`-Methode von [`MessagePort`](/de/docs/Web/API/MessagePort), um den Port zu starten, und den `onmessage`-Handler, um mit Nachrichten umzugehen, die von den Hauptthreads gesendet werden.

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
