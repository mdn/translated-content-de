---
title: "SharedWorkerGlobalScope: connect Ereignis"
short-title: connect
slug: Web/API/SharedWorkerGlobalScope/connect_event
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Web Workers API")}}

Das **`connect`** Ereignis wird in Shared Workers in ihrem [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) ausgelöst, wenn ein neuer Client eine Verbindung herstellt.

Dieses Ereignis ist nicht abbruchbar und wird nicht weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("connect", (event) => {});

onconnect = (event) => {};
```

## Ereignistyp

Ein [`MessageEvent`](/de/docs/Web/API/MessageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MessageEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`MessageEvent.data`](/de/docs/Web/API/MessageEvent/data) {{ReadOnlyInline}}
  - : Die von dem Nachrichtenemitter gesendeten Daten.
- [`MessageEvent.origin`](/de/docs/Web/API/MessageEvent/origin) {{ReadOnlyInline}}
  - : Ein String, der den Ursprung des Nachrichtenemitters darstellt.
- [`MessageEvent.lastEventId`](/de/docs/Web/API/MessageEvent/lastEventId) {{ReadOnlyInline}}
  - : Ein String, der eine eindeutige ID für das Ereignis darstellt.
- [`MessageEvent.source`](/de/docs/Web/API/MessageEvent/source) {{ReadOnlyInline}}
  - : Eine `MessageEventSource` (die ein {{Glossary("WindowProxy", "WindowProxy")}}, ein [`MessagePort`](/de/docs/Web/API/MessagePort) oder ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Objekt sein kann), die den Nachrichtenemitter darstellt.
- [`MessageEvent.ports`](/de/docs/Web/API/MessageEvent/ports) {{ReadOnlyInline}}
  - : Ein Array von [`MessagePort`](/de/docs/Web/API/MessagePort) Objekten, die die mit dem Kanal assoziierten Ports repräsentieren, durch den die Nachricht gesendet wird (wo zutreffend, z.B. in der Kanalnachrichtübermittlung oder beim Senden einer Nachricht an einen Shared Worker).

## Beispiele

Dieses Beispiel zeigt eine Shared Worker-Datei – wenn über einen Hauptthread über einen [`MessagePort`](/de/docs/Web/API/MessagePort) eine Verbindung zum Worker hergestellt wird, wird der `onconnect` Ereignishandler ausgelöst. Das Ereignisobjekt ist ein [`MessageEvent`](/de/docs/Web/API/MessageEvent).

Der verbindende Port kann über den `ports` Parameter des Ereignisobjekts referenziert werden; dieser Verweis kann einen `onmessage` Handler daran angehängt haben, um Nachrichten zu verarbeiten, die durch den Port hereinkommen, und seine `postMessage()` Methode kann verwendet werden, um Nachrichten zurück an den Hauptthread über den Worker zu senden.

```js
self.onconnect = (e) => {
  const port = e.ports[0];

  port.onmessage = (e) => {
    const workerResult = `Result: ${e.data[0] * e.data[1]}`;
    port.postMessage(workerResult);
  };

  port.start();
};
```

Für ein vollständiges laufendes Beispiel sehen Sie unser [Einfaches Shared Worker-Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([Shared Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/).)

### addEventListener Äquivalent

Sie könnten auch einen Ereignishandler einrichten, indem Sie die [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) Methode verwenden:

```js
self.addEventListener("connect", (e) => {
  const port = e.ports[0];

  port.onmessage = (e) => {
    const workerResult = `Result: ${e.data[0] * e.data[1]}`;
    port.postMessage(workerResult);
  };
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Worker verwenden](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope)
