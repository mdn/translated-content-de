---
title: "DedicatedWorkerGlobalScope: postMessage() Methode"
short-title: postMessage()
slug: Web/API/DedicatedWorkerGlobalScope/postMessage
l10n:
  sourceCommit: e0310b3f565d3147fa80d9e63ace41e0fc244fa6
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("dedicated")}}

Die **`postMessage()`**-Methode der [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Schnittstelle sendet eine Nachricht an den Hauptthread, der sie erstellt hat.

Diese Methode akzeptiert einen Datenparameter, der Daten enthält, die vom Worker zum Hauptthread kopiert werden sollen. Die Daten können beliebige Werte oder JavaScript-Objekte sein, die vom [structured clone](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)-Algorithmus behandelt werden, einschließlich zyklischer Referenzen.

Die Methode akzeptiert auch ein optionales Array von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), um sie an den Hauptthread zu _übertragen_. Im Gegensatz zu den Datenparameter sind übertragene Objekte im Worker-Thread nicht mehr nutzbar. (Wo möglich, werden Objekte mit einer leistungsstarken, kopierfreien Operation übertragen).

Der Hauptbereich, der den Worker erstellt hat, kann mithilfe der [`Worker.postMessage`](/de/docs/Web/API/Worker/postMessage)-Methode Informationen an den Ersteller zurücksenden.

## Syntax

```js-nolint
postMessage(message)
postMessage(message, transfer)
postMessage(message, options)
```

### Parameter

- `message`

  - : Das Objekt, das an den Hauptthread übermittelt werden soll; dies wird im Datenfeld des an das [`message`](/de/docs/Web/API/Window/message_event)-Ereignis gelieferten Ereignisses enthalten sein. Dies kann ein beliebiger Wert oder ein JavaScript-Objekt sein, das vom [structured clone](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)-Algorithmus behandelt wird, einschließlich zyklischer Referenzen.

- `transfer` {{optional_inline}}
  - : Ein optionales [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), deren Besitz übertragen werden soll. Der Besitz dieser Objekte wird auf die Zielseite übertragen und sie sind auf der sendenden Seite nicht mehr nutzbar. Diese übertragbaren Objekte sollten an die Nachricht angehängt werden; andernfalls würden sie bewegt, aber nicht tatsächlich am empfangenden Ende zugänglich sein.
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das die folgenden Eigenschaften enthält:
    - `transfer` {{optional_inline}}
      - : Hat die gleiche Bedeutung wie der `transfer`-Parameter.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Der folgende Code-Schnipsel zeigt `worker.js`, in dem ein `onmessage`-Handler verwendet wird, um Nachrichten aus dem Hauptskript zu behandeln. Im Handler wird eine Berechnung durchgeführt, aus der eine Ergebnisnachricht erstellt wird; diese wird dann mit `postMessage(workerResult);` an den Hauptthread zurückgesendet.

```js
onmessage = (e) => {
  console.log("Message received from main script");
  const workerResult = `Result: ${e.data[0] * e.data[1]}`;
  console.log("Posting message back to main script");
  postMessage(workerResult);
};
```

Im Hauptskript müsste `onmessage` bei einem `Worker-Objekt` aufgerufen werden, während im Worker-Skript nur `onmessage` benötigt wird, da der Worker im Wesentlichen der globale Bereich ([`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)) ist.

Für ein vollständiges Beispiel siehe unser [Einfaches dediziertes Worker-Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([dedizierten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)).

> **Note:** `postMessage()` kann nur ein einzelnes Objekt gleichzeitig senden. Wie oben gezeigt, können Sie, wenn Sie mehrere Werte übergeben möchten, ein Array senden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

Die [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Schnittstelle, zu der sie gehört.
