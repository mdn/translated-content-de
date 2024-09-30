---
title: "DedicatedWorkerGlobalScope: postMessage() Methode"
short-title: postMessage()
slug: Web/API/DedicatedWorkerGlobalScope/postMessage
l10n:
  sourceCommit: e0310b3f565d3147fa80d9e63ace41e0fc244fa6
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("dedicated")}}

Die **`postMessage()`** Methode der [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Schnittstelle sendet eine Nachricht an den Haupt-Thread, der sie erstellt hat.

Diese akzeptiert einen Datenparameter, der Daten enthält, die vom Worker an den Haupt-Thread kopiert werden sollen. Die Daten können jeden Wert oder JavaScript-Objekt enthalten, das vom [structured clone](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)-Algorithmus verarbeitet werden kann, einschließlich zyklischer Referenzen.

Die Methode akzeptiert außerdem ein optionales Array von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), die an den Haupt-Thread _übertragen_ werden sollen; Anders als beim Datenparameter können übertragene Objekte im Worker-Thread nicht mehr verwendet werden. (Wenn möglich, werden Objekte mit einer leistungsstarken Zero-Copy-Operation übertragen).

Der Hauptscope, der den Worker erstellt hat, kann über die [`Worker.postMessage`](/de/docs/Web/API/Worker/postMessage)-Methode Informationen an den Thread zurücksenden, der ihn erstellt hat.

## Syntax

```js-nolint
postMessage(message)
postMessage(message, transfer)
postMessage(message, options)
```

### Parameter

- `message`

  - : Das Objekt, das an den Haupt-Thread übermittelt werden soll; dies wird im Datenfeld des Ereignisses geliefert, das an das [`message`](/de/docs/Web/API/Window/message_event)-Ereignis gesendet wird.
    Dies kann jeden Wert oder JavaScript-Objekt enthalten, das vom [structured clone](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)-Algorithmus verarbeitet werden kann, einschließlich zyklischer Referenzen.

- `transfer` {{optional_inline}}
  - : Ein optionales [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), deren Besitz übertragen werden soll. Der Besitz dieser Objekte wird der Empfängerseite gegeben und sie sind auf der sendenden Seite nicht mehr verwendbar. Diese übertragbaren Objekte sollten an die Nachricht angehängt werden; andernfalls würden sie verschoben, aber tatsächlich nicht auf der Empfangsseite zugänglich sein.
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das die folgenden Eigenschaften enthält:
    - `transfer` {{optional_inline}}
      - : Hat die gleiche Bedeutung wie der `transfer` Parameter.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Der folgende Codeausschnitt zeigt `worker.js`, in dem ein `onmessage`-Handler verwendet wird, um Nachrichten vom Hauptskript zu verarbeiten. Innerhalb des Handlers wird eine Berechnung durchgeführt, aus der eine Ergebnisnachricht erstellt wird; diese wird dann mit `postMessage(workerResult);` an den Haupt-Thread zurückgesendet.

```js
onmessage = (e) => {
  console.log("Message received from main script");
  const workerResult = `Result: ${e.data[0] * e.data[1]}`;
  console.log("Posting message back to main script");
  postMessage(workerResult);
};
```

Im Hauptskript müsste `onmessage` auf einem `Worker Objekt` aufgerufen werden, während Sie im Worker-Skript nur `onmessage` benötigen, da der Worker effektiv der globale Scope ist ([`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)).

Für ein vollständiges Beispiel sehen Sie unser [Grundlegendes Beispiel für einen dedizierten Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([dedizierten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)).

> **Note:** `postMessage()` kann nur ein einzelnes Objekt auf einmal senden. Wie oben gezeigt, können Sie, wenn Sie mehrere Werte übergeben möchten, ein Array senden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

Die [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Schnittstelle, zu der sie gehört.
