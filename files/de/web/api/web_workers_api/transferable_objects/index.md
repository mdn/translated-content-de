---
title: Übertragbare Objekte
slug: Web/API/Web_Workers_API/Transferable_objects
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{DefaultAPISidebar("Web Workers API")}}

**Übertragbare Objekte** sind Objekte, die Ressourcen besitzen, die von einem Kontext in einen anderen _übertragen_ werden können, wobei sichergestellt wird, dass die Ressourcen jeweils nur in einem Kontext verfügbar sind.
Nach einer Übertragung ist das ursprüngliche Objekt nicht mehr verwendbar; es verweist nicht mehr auf die übertragene Ressource, und jeder Versuch, das Objekt zu lesen oder zu schreiben, wird eine Ausnahme auslösen.

_Übertragbare Objekte_ werden häufig verwendet, um Ressourcen zu teilen, die jeweils nur sicher einem einzelnen JavaScript-Thread zugänglich gemacht werden können.
Ein Beispiel ist ein {{jsxref("ArrayBuffer")}}, ein übertragbares Objekt, das einen Speicherblock besitzt.
Wenn ein solcher Puffer zwischen Threads übertragen wird, wird die zugehörige Speicherressource vom ursprünglichen Puffer getrennt und dem Pufferobjekt zugewiesen, das im neuen Thread erstellt wird.
Das Pufferobjekt im ursprünglichen Thread ist nicht mehr verwendbar, weil es keine Speicherressource mehr besitzt.

Übertragungen können auch genutzt werden, wenn tiefe Kopien von Objekten mit [`structuredClone()`](/de/docs/Web/API/WorkerGlobalScope/structuredClone) erstellt werden.
Nach dem Klonvorgang werden die übertragenen Ressourcen verschoben, anstatt sie auf das geklonte Objekt zu kopieren.

Für sowohl `postMessage()` als auch `structuredClone()` müssen übertragene Ressourcen an das Datenobjekt gebunden sein. Andernfalls wären sie auf der Empfängerseite nicht verfügbar, weil das übertragbare Array nur angibt, wie bestimmte Ressourcen gesendet werden sollen, sie jedoch nicht tatsächlich sendet (obwohl sie stets getrennt werden würden).

Der Mechanismus, mit dem die Ressourcen eines Objekts übertragen werden, hängt vom Objekt ab.
Zum Beispiel wird bei der Übertragung eines {{jsxref("ArrayBuffer")}} zwischen Threads die von ihm referenzierte Speicherressource _wortwörtlich_ in einer schnellen und effizienten Zero-Copy-Operation zwischen den Kontexten bewegt.
Andere Objekte könnten übertragen werden, indem die zugehörige Ressource kopiert und dann aus dem alten Kontext gelöscht wird.

Nicht alle Objekte sind übertragbar.
Eine Liste der übertragbaren Objekte wird [unten bereitgestellt](#unterstützte_objekte).

## Übertragen von Objekten zwischen Threads

Der untenstehende Code zeigt, wie das Übertragen funktioniert, wenn eine Nachricht von einem Hauptthread an einen [Web Worker Thread](/de/docs/Web/API/Web_Workers_API) gesendet wird.
Der {{jsxref("Uint8Array")}} wird im Worker kopiert (dupliziert), während sein Puffer übertragen wird.
Nach der Übertragung führt jeder Versuch, `uInt8Array` aus dem Hauptthread zu lesen oder zu schreiben, zu einem Fehler, aber Sie können die `byteLength` überprüfen, um zu bestätigen, dass sie jetzt null ist.

```js
// Create an 8MB "file" and fill it. 8MB = 1024 * 1024 * 8 B
const uInt8Array = new Uint8Array(1024 * 1024 * 8).map((v, i) => i);
console.log(uInt8Array.byteLength); // 8388608

// Transfer the underlying buffer to a worker
worker.postMessage(uInt8Array, [uInt8Array.buffer]);
console.log(uInt8Array.byteLength); // 0
```

> **Note:** [Typed Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) wie {{jsxref("Int32Array")}} und {{jsxref("Uint8Array")}}, sind {{Glossary("serializable_object", "serialisierbar")}}, aber nicht übertragbar.
> Ihr zugrunde liegender Puffer ist jedoch ein {{jsxref("ArrayBuffer")}}, der ein übertragbares Objekt ist.
> Wir hätten `uInt8Array.buffer` im Datenparameter senden können, aber nicht `uInt8Array` im Übertragungsarray.

## Übertragung während eines Klonvorgangs

Der untenstehende Code zeigt eine `structuredClone()`-Operation, bei der der zugrunde liegende Puffer vom ursprünglichen Objekt auf den Klon kopiert wird.

```js
const original = new Uint8Array(1024);
const clone = structuredClone(original);
console.log(original.byteLength); // 1024
console.log(clone.byteLength); // 1024

original[0] = 1;
console.log(clone[0]); // 0

// Transferring the Uint8Array would throw an exception as it is not a transferable object
// const transferred = structuredClone(original, {transfer: [original]});

// We can transfer Uint8Array.buffer.
const transferred = structuredClone(original, { transfer: [original.buffer] });
console.log(transferred.byteLength); // 1024
console.log(transferred[0]); // 1

// After transferring Uint8Array.buffer cannot be used.
console.log(original.byteLength); // 0
```

## Unterstützte Objekte

Die Elemente, die laut verschiedenen Spezifikationen _übertragen_ werden können, sind:

- {{jsxref("ArrayBuffer")}}
- [`MessagePort`](/de/docs/Web/API/MessagePort)
- [`ReadableStream`](/de/docs/Web/API/ReadableStream)
- [`WritableStream`](/de/docs/Web/API/WritableStream)
- [`TransformStream`](/de/docs/Web/API/TransformStream)
- [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream)
- [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream)
- [`AudioData`](/de/docs/Web/API/AudioData)
- [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)
- [`VideoFrame`](/de/docs/Web/API/VideoFrame)
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)

Die Browser-Unterstützung sollte in den Kompatibilitätsinformationen des jeweiligen Objekts durch die `transferable`-Unterfunktion angezeigt werden (siehe [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel#browser_compatibility) als Beispiel).
Zum Zeitpunkt des Schreibens wurden nicht alle übertragbaren Objekte mit dieser Information aktualisiert.

> [!NOTE]
> Übertragbare Objekte sind in [Web IDL Dateien](https://github.com/w3c/webref/tree/main/ed/idl) mit dem Attribut `[Transferable]` markiert.

## Siehe auch

- [Transferable Objects: Lightning Fast!](https://developer.chrome.com/blog/transferable-objects-lightning-fast/)
- [Using Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Übertragbare Objekte in der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/structured-data.html#transferable-objects)
- [`DedicatedWorkerGlobalScope.postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage)
