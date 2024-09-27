---
title: "SharedWorkerGlobalScope: connect-Ereignis"
short-title: connect
slug: Web/API/SharedWorkerGlobalScope/connect_event
l10n:
  sourceCommit: e6457c34ac16790d4e62bc9ba21e899ac560089c
---

{{APIRef("Web Workers API")}}

Das **`connect`**-Ereignis wird in freigegebenen Workern in ihrem [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) ausgelöst, wenn ein neuer Client eine Verbindung herstellt.

Dieses Ereignis kann nicht abgebrochen werden und löst keine Ereignisblase aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

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
  - : Die Daten, die vom Nachrichtensender gesendet wurden.
- [`MessageEvent.origin`](/de/docs/Web/API/MessageEvent/origin) {{ReadOnlyInline}}
  - : Ein String, der den Ursprung des Nachrichtensenders darstellt.
- [`MessageEvent.lastEventId`](/de/docs/Web/API/MessageEvent/lastEventId) {{ReadOnlyInline}}
  - : Ein String, der eine eindeutige ID für das Ereignis darstellt.
- [`MessageEvent.source`](/de/docs/Web/API/MessageEvent/source) {{ReadOnlyInline}}
  - : Ein `MessageEventSource` (welches ein [WindowProxy](/de/docs/Glossary/WindowProxy), [`MessagePort`](/de/docs/Web/API/MessagePort) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt sein kann) das den Nachrichtensender darstellt.
- [`MessageEvent.ports`](/de/docs/Web/API/MessageEvent/ports) {{ReadOnlyInline}}
  - : Ein Array von [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekten, die die mit dem Kanal verbundenen Ports darstellen, durch den die Nachricht gesendet wird (falls zutreffend, z. B. bei Nachrichtenübertragung im Kanal oder beim Senden einer Nachricht an einen freigegebenen Worker).

## Beispiele

Dieses Beispiel zeigt eine Datei eines freigegebenen Workers — wenn eine Verbindung zum Worker aus einem Haupt-Thread über einen [`MessagePort`](/de/docs/Web/API/MessagePort) erfolgt, wird der `onconnect`-Ereignis-Handler ausgelöst. Das Ereignisobjekt ist ein [`MessageEvent`](/de/docs/Web/API/MessageEvent).

Der verbundene Port kann über den `ports`-Parameter des Ereignisobjekts referenziert werden; dieser Referenz kann ein `onmessage`-Handler zugeordnet werden, um eingehende Nachrichten über den Port zu verarbeiten, und die Methode `postMessage()` kann verwendet werden, um Nachrichten über den Worker an den Haupt-Thread zurückzusenden.

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

Für ein vollständiges laufendes Beispiel sehen Sie sich unser [Einfaches Beispiel für einen freigegebenen Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([freigegebenen Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/).)

### addEventListener-Äquivalent

Sie könnten auch einen Ereignis-Handler mithilfe der [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Methode einrichten:

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
