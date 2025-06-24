---
title: "DedicatedWorkerGlobalScope: postMessage()-Methode"
short-title: postMessage()
slug: Web/API/DedicatedWorkerGlobalScope/postMessage
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("dedicated")}}

Die **`postMessage()`**-Methode der [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Schnittstelle sendet eine Nachricht an den Hauptthread, der sie erstellt hat.

Diese akzeptiert einen Datenparameter, der die zu kopierenden Daten vom Worker zum Haupt-Thread enthält.
Die Daten können jeden Wert oder jedes JavaScript-Objekt enthalten, das vom [Structured Clone](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)-Algorithmus behandelt wird, der zirkuläre Verweise einschließt.

Die Methode akzeptiert auch ein optionales Array von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), um sie an den Haupt-Thread zu _übertragen_; im Gegensatz zum Datenparameter sind übertragene Objekte im Worker-Thread nicht mehr nutzbar.
(Wenn möglich, werden Objekte mit einer leistungsstarken Zero-Copy-Operation übertragen).

Der Hauptbereich, der den Worker erzeugt hat, kann mit der [`Worker.postMessage`](/de/docs/Web/API/Worker/postMessage)-Methode Informationen an den Thread zurücksenden, der ihn erzeugt hat.

## Syntax

```js-nolint
postMessage(message)
postMessage(message, transfer)
postMessage(message, options)
```

### Parameter

- `message`

  - : Das Objekt, das an den Haupt-Thread übermittelt werden soll; dies wird im Datenfeld des an das [`message`](/de/docs/Web/API/Window/message_event)-Event übermittelten Events vorhanden sein.
    Dies kann jeden Wert oder jedes JavaScript-Objekt enthalten, das vom [Structured Clone](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)-Algorithmus behandelt wird, der zirkuläre Verweise einschließt.

- `transfer` {{optional_inline}}
  - : Ein optionales [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), deren Eigentum übertragen werden soll. Das Eigentum dieser Objekte wird auf die Zielseite übertragen und sie sind auf der sendenden Seite nicht mehr nutzbar. Diese übertragbaren Objekte sollten an die Nachricht angehängt werden; andernfalls würden sie verschoben, aber tatsächlich nicht zugänglich auf der empfangenden Seite sein.
- `options` {{optional_inline}}
  - : Ein optionales Objekt mit den folgenden Eigenschaften:
    - `transfer` {{optional_inline}}
      - : Hat die gleiche Bedeutung wie der `transfer`-Parameter.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Der folgende Codeausschnitt zeigt `worker.js`, in dem ein `onmessage`-Handler verwendet wird, um Nachrichten aus dem Hauptskript zu bearbeiten.
Innerhalb des Handlers wird eine Berechnung durchgeführt, aus der eine Ergebnisnachricht erzeugt wird; diese wird dann mit `postMessage(workerResult);` an den Haupt-Thread zurückgesendet.

```js
onmessage = (e) => {
  console.log("Message received from main script");
  const workerResult = `Result: ${e.data[0] * e.data[1]}`;
  console.log("Posting message back to main script");
  postMessage(workerResult);
};
```

Im Hauptskript müsste `onmessage` auf einem `Worker-Objekt` aufgerufen werden, während im Worker-Skript nur `onmessage` benötigt wird, da der Worker effektiv der globale Bereich ([`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)) ist.

Für ein vollständiges Beispiel siehe unser [Einfaches dedicatetes Worker-Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([ausführen dedicateten Worker](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)).

> [!NOTE] > `postMessage()` kann nur ein einziges Objekt gleichzeitig senden. Wie oben zu sehen, können Sie, wenn Sie mehrere Werte übergeben möchten, ein Array senden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

Die [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Schnittstelle, zu der es gehört.
