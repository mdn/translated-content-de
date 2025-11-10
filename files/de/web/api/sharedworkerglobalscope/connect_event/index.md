---
title: "SharedWorkerGlobalScope: connect-Ereignis"
short-title: connect
slug: Web/API/SharedWorkerGlobalScope/connect_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Web Workers API")}}

Das **`connect`**-Ereignis wird in geteilten Workern in ihrem [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) ausgelöst, wenn ein neuer Client verbindet.

Dieses Ereignis ist nicht abbrechbar und breitet sich nicht aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("connect", (event) => { })

onconnect = (event) => { }
```

## Ereignis-Typ

Ein [`MessageEvent`](/de/docs/Web/API/MessageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MessageEvent")}}

## Ereignis-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`MessageEvent.data`](/de/docs/Web/API/MessageEvent/data) {{ReadOnlyInline}}
  - : Die vom Nachrichtenemitter gesendeten Daten.
- [`MessageEvent.origin`](/de/docs/Web/API/MessageEvent/origin) {{ReadOnlyInline}}
  - : Ein String, der den Ursprung des Nachrichtenemitters darstellt.
- [`MessageEvent.lastEventId`](/de/docs/Web/API/MessageEvent/lastEventId) {{ReadOnlyInline}}
  - : Ein String, der eine eindeutige ID für das Ereignis darstellt.
- [`MessageEvent.source`](/de/docs/Web/API/MessageEvent/source) {{ReadOnlyInline}}
  - : Eine `MessageEventSource` (die ein {{Glossary("WindowProxy", "WindowProxy")}}, [`MessagePort`](/de/docs/Web/API/MessagePort) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt sein kann) repräsentiert den Nachrichtenemitter.
- [`MessageEvent.ports`](/de/docs/Web/API/MessageEvent/ports) {{ReadOnlyInline}}
  - : Ein Array von [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekten, die die Ports darstellen, die mit dem Kanal assoziiert sind, über den die Nachricht gesendet wird (wo dies angemessen ist, z. B. im Kanal-Messaging oder beim Senden einer Nachricht an einen geteilten Worker).

## Beispiele

Dieses Beispiel zeigt eine Datei eines geteilten Workers – wenn eine Verbindung zum Worker von einem Hauptthread über einen [`MessagePort`](/de/docs/Web/API/MessagePort) erfolgt, wird der `onconnect`-Ereignishandler ausgelöst. Das Ereignisobjekt ist ein [`MessageEvent`](/de/docs/Web/API/MessageEvent).

Der verbindende Port kann über den `ports`-Parameter des Ereignisobjekts referenziert werden; an diese Referenz kann ein `onmessage`-Handler angehängt werden, um eingehende Nachrichten über den Port zu verarbeiten, und die `postMessage()`-Methode kann verwendet werden, um Nachrichten zurück an den Hauptthread unter Verwendung des Workers zu senden.

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

Für ein komplettes laufendes Beispiel, siehe unser [Einfaches Shared-Worker-Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([geteilten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/).)

### Äquivalent zu addEventListener

Sie könnten auch einen Ereignishandler mithilfe der [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Methode einrichten:

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

- [Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope)
