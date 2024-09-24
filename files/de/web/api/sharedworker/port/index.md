---
title: "SharedWorker: port-Eigenschaft"
short-title: port
slug: Web/API/SharedWorker/port
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Web Workers API")}}

Die **`port`**-Eigenschaft der {{domxref("SharedWorker")}}-Schnittstelle gibt ein {{domxref("MessagePort")}}-Objekt zurück, das zur Kommunikation und Steuerung des SharedWorker verwendet wird.

## Wert

Ein {{domxref("MessagePort")}}-Objekt.

## Beispiele

Der folgende Codeausschnitt zeigt die Erstellung eines `SharedWorker`-Objekts mit dem {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}}-Konstruktor. Mehrere Skripte können dann auf den Worker über ein {{domxref("MessagePort")}}-Objekt zugreifen, das über die `SharedWorker.port`-Eigenschaft zugänglich ist – der Port wird mithilfe seiner `start()`-Methode gestartet:

```js
const myWorker = new SharedWorker("worker.js");
myWorker.port.start();
```

Ein vollständiges Beispiel finden Sie in unserem [Grundlegendes Beispiel für einen SharedWorker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([SharedWorker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/).)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("SharedWorker")}}
