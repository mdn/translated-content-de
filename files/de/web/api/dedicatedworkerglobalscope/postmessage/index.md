---
title: "DedicatedWorkerGlobalScope: postMessage()-Methode"
short-title: postMessage()
slug: Web/API/DedicatedWorkerGlobalScope/postMessage
l10n:
  sourceCommit: ff81a4e4cb740060aca2df256ce2e07d1e2c0b4e
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("dedicated")}}

Die **`postMessage()`**-Methode des [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Interfaces sendet eine Nachricht an den Hauptthread, der ihn erzeugt hat.

Diese Methode akzeptiert einen Datenparameter, der Daten enthält, die vom Worker an den Hauptthread kopiert werden sollen. Die Daten können jeden Wert oder jedes JavaScript-Objekt umfassen, das vom [structured clone](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)-Algorithmus behandelt wird, einschließlich zyklischer Referenzen.

Die Methode akzeptiert auch ein optionales Array von [transferierbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), die an den Hauptthread _übertragen_ werden sollen; Im Gegensatz zu dem Datenparameter sind übertragene Objekte im Worker-Thread nicht mehr verwendbar. (Wo möglich, werden Objekte mittels einer leistungsstarken Zero-Copy-Operation übertragen).

Der Haupt-Scope, der den Worker erzeugt hat, kann mithilfe der [`Worker.postMessage`](/de/docs/Web/API/Worker/postMessage)-Methode Informationen an den Thread, der ihn erzeugt hat, zurücksenden.

## Syntax

```js-nolint
postMessage(message)
postMessage(message, transfer)
postMessage(message, options)
```

### Parameter

- `message`
  - : Das Objekt, das an den Hauptthread übermittelt werden soll; dieses wird im Datenfeld im Event, das an das [`message`](/de/docs/Web/API/Window/message_event)-Event geliefert wird, enthalten sein. Dies kann jeden Wert oder jedes JavaScript-Objekt umfassen, das vom [structured clone](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)-Algorithmus behandelt wird, einschließlich zyklischer Referenzen.

- `transfer` {{optional_inline}}
  - : Ein optionales [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von [transferierbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), deren Eigentum übertragen werden soll. Das Eigentum dieser Objekte wird der Empfängerseite übertragen und sie sind auf der sendenden Seite nicht mehr verwendbar. Diese transferierbaren Objekte werden nicht automatisch gesendet; sie müssen entweder in der Nachricht enthalten sein oder dem Empfänger auf andere Weise zugänglich gemacht werden, z. B. über [`MessagePort`](/de/docs/Web/API/MessagePort) via [`MessageEvent.ports`](/de/docs/Web/API/MessageEvent/ports).
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das die folgenden Eigenschaften enthält:
    - `transfer` {{optional_inline}}
      - : Hat die gleiche Bedeutung wie der `transfer`-Parameter.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Der folgende Codeausschnitt zeigt `worker.js`, in dem ein `onmessage`-Handler verwendet wird, um Nachrichten vom Hauptskript zu verarbeiten. Innerhalb des Handlers wird eine Berechnung durchgeführt, aus der eine Ergebnisnachricht erstellt wird; diese wird dann mithilfe von `postMessage(workerResult);` an den Hauptthread zurückgesendet.

```js
onmessage = (e) => {
  console.log("Message received from main script");
  const workerResult = `Result: ${e.data[0] * e.data[1]}`;
  console.log("Posting message back to main script");
  postMessage(workerResult);
};
```

Im Hauptskript müsste `onmessage` an einem `Worker-Objekt` aufgerufen werden, während Sie im Worker-Skript nur `onmessage` benötigen, da der Worker effektiv der globale Scope ([`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)) ist.

Ein vollständiges Beispiel finden Sie in unserem [einfachen dedizierten Worker-Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([dedizierten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)).

> [!NOTE]
> `postMessage()` kann nur ein einzelnes Objekt gleichzeitig senden. Wie oben gezeigt, können Sie, wenn Sie mehrere Werte übergeben möchten, ein Array senden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

Das [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Interface, zu dem es gehört.
