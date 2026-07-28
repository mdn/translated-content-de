---
title: "SharedWorkerGlobalScope: connect-Ereignis"
short-title: connect
slug: Web/API/SharedWorkerGlobalScope/connect_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Web Workers API")}}

Das **`connect`**-Ereignis wird in Shared Workers bei ihrem [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) ausgelöst, wenn ein neuer Client sich verbindet.

Dieses Ereignis ist nicht abbruchfähig und verbreitet sich nicht in der Ereigniskette.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("connect", (event) => { })

onconnect = (event) => { }
```

## Ereignistyp

Ein [`MessageEvent`](/de/docs/Web/API/MessageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MessageEvent")}}

## Beispiele

Dieses Beispiel zeigt eine Shared Worker-Datei – wenn eine Verbindung zum Worker von einem Hauptthread über einen [`MessagePort`](/de/docs/Web/API/MessagePort) hergestellt wird, wird der `onconnect`-Ereignishandler ausgelöst. Das Ereignisobjekt ist ein [`MessageEvent`](/de/docs/Web/API/MessageEvent).

Der verbindende Port kann über den `ports`-Parameter des Ereignisobjekts referenziert werden; diese Referenz kann einen `onmessage`-Handler angefügt bekommen, um Nachrichten zu bearbeiten, die über den Port hereinkommen, und seine `postMessage()`-Methode kann verwendet werden, um Nachrichten vom Worker an den Hauptthread zurückzusenden.

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

Für ein vollständiges, laufendes Beispiel siehe unser [Einfaches Shared Worker-Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([run shared worker](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/).)

### Gleichwertig zu addEventListener

Sie könnten auch einen Ereignishandler mit der [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Methode einrichten:

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

- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope)
