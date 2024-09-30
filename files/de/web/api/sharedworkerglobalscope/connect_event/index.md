---
title: "SharedWorkerGlobalScope: connect-Ereignis"
short-title: connect
slug: Web/API/SharedWorkerGlobalScope/connect_event
l10n:
  sourceCommit: e6457c34ac16790d4e62bc9ba21e899ac560089c
---

{{APIRef("Web Workers API")}}

Das **`connect`**-Ereignis wird in Shared Workern in ihrem [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) ausgelöst, wenn ein neuer Client eine Verbindung herstellt.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

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
  - : Die vom Nachrichtensender gesendeten Daten.
- [`MessageEvent.origin`](/de/docs/Web/API/MessageEvent/origin) {{ReadOnlyInline}}
  - : Ein String, der den Ursprung des Nachrichtensenders darstellt.
- [`MessageEvent.lastEventId`](/de/docs/Web/API/MessageEvent/lastEventId) {{ReadOnlyInline}}
  - : Ein String, der eine eindeutige ID für das Ereignis darstellt.
- [`MessageEvent.source`](/de/docs/Web/API/MessageEvent/source) {{ReadOnlyInline}}
  - : Eine `MessageEventSource` (die ein [WindowProxy](/de/docs/Glossary/WindowProxy), ein [`MessagePort`](/de/docs/Web/API/MessagePort) oder ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt sein kann), die den Nachrichtensender repräsentiert.
- [`MessageEvent.ports`](/de/docs/Web/API/MessageEvent/ports) {{ReadOnlyInline}}
  - : Ein Array von [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekten, die die mit dem Kanal assoziierten Ports darstellen, über die die Nachricht gesendet wird (wo zutreffend, z. B. bei der Kanalnachrichtenübermittlung oder beim Senden einer Nachricht an einen Shared Worker).

## Beispiele

Dieses Beispiel zeigt eine Shared Worker-Datei – wenn eine Verbindung zum Worker von einem Hauptthread über einen [`MessagePort`](/de/docs/Web/API/MessagePort) hergestellt wird, wird der `onconnect`-Event-Handler ausgelöst. Das Ereignisobjekt ist ein [`MessageEvent`](/de/docs/Web/API/MessageEvent).

Der verbindende Port kann über den `ports`-Parameter des Ereignisobjekts referenziert werden; auf diese Referenz kann ein `onmessage`-Handler angewendet werden, um eingehende Nachrichten über den Port zu verarbeiten, und die Methode `postMessage()` kann verwendet werden, um Nachrichten über den Worker zurück an den Hauptthread zu senden.

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

### addEventListener-Äquivalent

Sie könnten auch einen Ereignishandler mit der Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) einrichten:

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
