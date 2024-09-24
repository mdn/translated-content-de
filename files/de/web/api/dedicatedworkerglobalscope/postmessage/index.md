---
title: "DedicatedWorkerGlobalScope: postMessage()-Methode"
short-title: postMessage()
slug: Web/API/DedicatedWorkerGlobalScope/postMessage
l10n:
  sourceCommit: e0310b3f565d3147fa80d9e63ace41e0fc244fa6
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("dedicated")}}

Die **`postMessage()`**-Methode der {{domxref("DedicatedWorkerGlobalScope")}}-Schnittstelle sendet eine Nachricht an den Hauptthread, der sie gestartet hat.

Sie akzeptiert einen Datenparameter, der Daten enthält, die vom Worker an den Hauptthread kopiert werden sollen.
Die Daten können jeden Wert oder jedes JavaScript-Objekt enthalten, das vom [structured clone](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)-Algorithmus verarbeitet wird, einschließlich zyklischer Referenzen.

Die Methode akzeptiert auch ein optionales Array von [transferable objects](/de/docs/Web/API/Web_Workers_API/Transferable_objects), die _übertragen_ werden sollen;
Im Gegensatz zum Datenparameter sind übertragene Objekte im Worker-Thread nicht mehr nutzbar.
(Wo möglich, werden Objekte mit einer leistungsstarken Zero-Copy-Operation übertragen).

Der Hauptbereich, der den Worker gestartet hat, kann mithilfe der {{domxref("Worker.postMessage")}}-Methode Informationen an den Thread zurücksenden, der ihn gestartet hat.

## Syntax

```js-nolint
postMessage(message)
postMessage(message, transfer)
postMessage(message, options)
```

### Parameter

- `message`

  - : Das Objekt, das an den Hauptthread übermittelt werden soll; dies wird im Datenfeld im Event, das an das {{domxref("Window/message_event", "message")}}-Event geliefert wird, enthalten sein.
    Dies kann jeden Wert oder jedes JavaScript-Objekt enthalten, das vom [structured clone](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)-Algorithmus verarbeitet wird, einschließlich zyklischer Referenzen.

- `transfer` {{optional_inline}}
  - : Ein optionales [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von [transferable objects](/de/docs/Web/API/Web_Workers_API/Transferable_objects), deren Besitz übertragen werden soll. Der Besitz dieser Objekte wird an die Empfängerseite übergeben und sie sind auf der sendenden Seite nicht mehr nutzbar. Diese übertragbaren Objekte sollten an die Nachricht angehängt werden; andernfalls würden sie verschoben, wären auf der Empfangsseite jedoch nicht tatsächlich zugänglich.
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das die folgenden Eigenschaften enthält:
    - `transfer` {{optional_inline}}
      - : Hat die gleiche Bedeutung wie der `transfer`-Parameter.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Der folgende Codeausschnitt zeigt `worker.js`, in dem ein `onmessage`-Handler verwendet wird, um Nachrichten vom Hauptskript zu bearbeiten.
Innerhalb des Handlers wird eine Berechnung durchgeführt, aus der eine Ergebnisnachricht erstellt wird; diese wird dann mit `postMessage(workerResult);` an den Hauptthread zurückgesendet.

```js
onmessage = (e) => {
  console.log("Message received from main script");
  const workerResult = `Result: ${e.data[0] * e.data[1]}`;
  console.log("Posting message back to main script");
  postMessage(workerResult);
};
```

Im Hauptskript müsste `onmessage` bei einem `Worker-Objekt` aufgerufen werden, während innerhalb des Workerkontexts einfach `onmessage` verwendet wird, da der Worker effektiv der globale Gültigkeitsbereich ({{domxref("DedicatedWorkerGlobalScope")}}) ist.

Ein vollständiges Beispiel finden Sie in unserem [Einfachen Beispiel für einen dedizierten Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([dedizierten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)).

> **Note:** `postMessage()` kann nur ein einziges Objekt auf einmal senden. Wie oben gezeigt, können Sie, wenn Sie mehrere Werte übergeben möchten, ein Array senden.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

Die {{domxref("DedicatedWorkerGlobalScope")}}-Schnittstelle, zu der sie gehört.
