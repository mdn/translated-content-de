---
title: "SharedWorkerGlobalScope: Verbindungsevent"
short-title: Verbindung
slug: Web/API/SharedWorkerGlobalScope/connect_event
l10n:
  sourceCommit: e6457c34ac16790d4e62bc9ba21e899ac560089c
---

{{APIRef("Web Workers API")}}

Das **`connect`**-Ereignis wird in Shared Workers in ihrem {{domxref("SharedWorkerGlobalScope")}} ausgelöst, wenn ein neuer Client verbunden wird.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("connect", (event) => {});

onconnect = (event) => {};
```

## Ereignistyp

Ein {{domxref("MessageEvent")}}, das von {{domxref("Event")}} erbt.

{{InheritanceDiagram("MessageEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, {{domxref("Event")}}._

- {{domxref("MessageEvent.data")}} {{ReadOnlyInline}}
  - : Die vom Nachrichtensender gesendeten Daten.
- {{domxref("MessageEvent.origin")}} {{ReadOnlyInline}}
  - : Ein String, der den Ursprung des Nachrichtensenders repräsentiert.
- {{domxref("MessageEvent.lastEventId")}} {{ReadOnlyInline}}
  - : Ein String, der eine eindeutige ID für das Ereignis darstellt.
- {{domxref("MessageEvent.source")}} {{ReadOnlyInline}}
  - : Ein `MessageEventSource` (das ein {{glossary("WindowProxy")}}, {{domxref("MessagePort")}} oder {{domxref("ServiceWorker")}} Objekt sein kann), das den Nachrichtensender repräsentiert.
- {{domxref("MessageEvent.ports")}} {{ReadOnlyInline}}
  - : Ein Array von {{domxref("MessagePort")}}-Objekten, die die mit dem Kanal verknüpften Ports darstellen, über den die Nachricht gesendet wird (soweit zutreffend, z.B. bei Kanalnachrichten oder beim Senden einer Nachricht an einen Shared Worker).

## Beispiele

Dieses Beispiel zeigt eine Shared Worker-Datei — wenn eine Verbindung zum Worker von einem Haupt-Thread über einen {{domxref("MessagePort")}} erfolgt, wird der `onconnect` Event-Handler ausgelöst. Das Ereignisobjekt ist ein {{domxref("MessageEvent")}}.

Der verbindende Port kann über den `ports`-Parameter des Ereignisobjekts referenziert werden; auf diese Referenz kann ein `onmessage`-Handler gesetzt werden, um Nachrichten zu bearbeiten, die über den Port hereinkommen, und seine `postMessage()`-Methode kann verwendet werden, um Nachrichten zurück an den Haupt-Thread unter Verwendung des Workers zu senden.

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

Für ein vollständiges laufendes Beispiel siehe unser [Grundlegendes Shared Worker Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([Shared Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/).)

### addEventListener Äquivalent

Sie könnten auch einen Event-Handler mit der Methode {{domxref("EventTarget/addEventListener", "addEventListener()")}} einrichten:

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
- {{domxref("SharedWorkerGlobalScope")}}
