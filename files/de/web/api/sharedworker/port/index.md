---
title: "SharedWorker: port-Eigenschaft"
short-title: port
slug: Web/API/SharedWorker/port
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Web Workers API")}}

Die **`port`**-Eigenschaft des [`SharedWorker`](/de/docs/Web/API/SharedWorker)-Interfaces gibt ein [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekt zurück, das zur Kommunikation und Steuerung des Shared Workers verwendet wird.

## Wert

Ein [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekt.

## Beispiele

Der folgende Codeabschnitt zeigt die Erstellung eines `SharedWorker`-Objekts mit dem [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker)-Konstruktor. Mehrere Skripte können dann auf den Worker über ein [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekt zugreifen, das über die `SharedWorker.port`-Eigenschaft abgerufen wird — der Port wird mit seiner `start()`-Methode gestartet:

```js
const myWorker = new SharedWorker("worker.js");
myWorker.port.start();
```

Für ein vollständiges Beispiel siehe unser [einfaches Beispiel für einen Shared Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([Shared Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/).)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SharedWorker`](/de/docs/Web/API/SharedWorker)
