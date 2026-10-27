---
title: "SharedWorkerGlobalScope: connect-Ereignis"
short-title: connect
slug: Web/API/SharedWorkerGlobalScope/connect_event
l10n:
  sourceCommit: ded0a8bc0b6622b4a95253e358c6a58a77ad2387
---

{{APIRef("Web Workers API")}}

Das **`connect`**-Ereignis wird in Shared Workers in deren [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) ausgelöst, wenn sich ein neuer Client verbindet.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("connect", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) des Interfaces einen Wert zuweisen:

```js-nolint
onconnect = (event) => { }
```

## Ereignistyp

Ein [`MessageEvent`](/de/docs/Web/API/MessageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MessageEvent")}}

## Beispiele

Dieses Beispiel zeigt eine Shared-Worker-Datei: Wenn über einen [`MessagePort`](/de/docs/Web/API/MessagePort) eine Verbindung von einem Haupt-Thread zum Worker hergestellt wird, wird der `onconnect`-Event-Handler ausgelöst. Das Ereignisobjekt ist ein [`MessageEvent`](/de/docs/Web/API/MessageEvent).

Auf den verbindenden Port kann über den `ports`-Parameter des Ereignisobjekts zugegriffen werden. Dieser Referenz kann ein `onmessage`-Handler zugewiesen werden, um über den Port eingehende Nachrichten zu verarbeiten. Mit ihrer `postMessage()`-Methode können über den Worker Nachrichten an den Haupt-Thread zurückgesendet werden.

Bei Verwendung der `onconnect`-Event-Handler-Eigenschaft (beachten Sie jedoch, dass dadurch gegebenenfalls andere mit `onconnect` hinzugefügte Event-Listener ersetzt werden):

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

Ein vollständiges, lauffähiges Beispiel finden Sie in unserem [einfachen Shared-Worker-Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([Shared Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)).

### Verwendung von addEventListener()

Sie können einen Event-Handler auch mit der Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) einrichten:

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

- [Web Workers verwenden](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope)
