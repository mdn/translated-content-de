---
title: Übertragbare Objekte
slug: Web/API/Web_Workers_API/Transferable_objects
l10n:
  sourceCommit: 62e6088450ab10db4697d190dd54d09dd9a0791a
---

{{DefaultAPISidebar("Web Workers API")}}

**Übertragbare Objekte** sind Objekte, die Ressourcen besitzen, die von einem Kontext in einen anderen _übertragen_ werden können, wobei sichergestellt wird, dass die Ressourcen jeweils nur in einem Kontext verfügbar sind.
Nach einer Übertragung ist das ursprüngliche Objekt nicht mehr verwendbar; es zeigt nicht mehr auf die übertragene Ressource und jeder Versuch, auf das Objekt zuzugreifen, löst eine Ausnahme aus.

_Übertragbare Objekte_ werden häufig verwendet, um Ressourcen zu teilen, die nur sicher in einem einzelnen JavaScript-Thread verwendet werden können.
Zum Beispiel ist ein {{jsxref("ArrayBuffer")}} ein übertragbares Objekt, das einen Speicherblock besitzt.
Wenn ein solcher Puffer zwischen Threads übertragen wird, wird die zugehörige Speicherressource vom ursprünglichen Puffer abgelöst und dem Pufferobjekt zugewiesen, das im neuen Thread erstellt wurde.
Das Pufferobjekt im ursprünglichen Thread ist nicht mehr verwendbar, da es keine Speicherressource mehr besitzt.

Das Übertragen kann auch verwendet werden, um tiefe Kopien von Objekten mit [`structuredClone()`](/de/docs/Web/API/WorkerGlobalScope/structuredClone) zu erstellen.
Nach dem Klonvorgang werden die übertragenen Ressourcen verschoben, anstatt sie in das geklonte Objekt zu kopieren.

Für sowohl `postMessage()` als auch `structuredClone()` müssen die übertragenen Ressourcen am Datenobjekt angehängt werden, da sie sonst am Empfangspunkt nicht zur Verfügung stünden, weil das übertragbare Array nur angibt, wie bestimmte Ressourcen gesendet werden sollen, sie jedoch nicht tatsächlich sendet (obwohl sie immer getrennt werden würden).

Der Mechanismus, der verwendet wird, um die Ressourcen eines Objekts zu übertragen, hängt vom Objekt ab.
Zum Beispiel wird, wenn ein {{jsxref("ArrayBuffer")}} zwischen Threads übertragen wird, die Speicherressource, auf die es verweist, in einer schnellen und effizienten Zero-Copy-Operation _buchstäblich_ zwischen den Kontexten verschoben.
Andere Objekte können durch Kopieren der zugehörigen Ressource übertragen werden und anschließend aus dem alten Kontext gelöscht werden.

Nicht alle Objekte sind übertragbar.
Eine Liste der übertragbaren Objekte wird [unten bereitgestellt](#unterstützte_objekte).

## Übertragung von Objekten zwischen Threads

Der folgende Code zeigt, wie die Übertragung funktioniert, wenn eine Nachricht von einem Haupt-Thread an einen [Web Worker-Thread](/de/docs/Web/API/Web_Workers_API) gesendet wird.
Das {{jsxref("Uint8Array")}} wird im Worker kopiert (dupliziert), während sein Puffer übertragen wird.
Nach der Übertragung löst jeder Versuch, `uInt8Array` aus dem Haupt-Thread zu lesen oder zu schreiben, einen Fehler aus, Sie können jedoch weiterhin die `byteLength` überprüfen, um zu bestätigen, dass diese jetzt null ist.

```js
// Create an 8MB "file" and fill it. 8MB = 1024 * 1024 * 8 B
const uInt8Array = new Uint8Array(1024 * 1024 * 8).map((v, i) => i);
console.log(uInt8Array.byteLength); // 8388608

// Transfer the underlying buffer to a worker
worker.postMessage(uInt8Array, [uInt8Array.buffer]);
console.log(uInt8Array.byteLength); // 0
```

> **Hinweis:** [Typisierte Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray), wie {{jsxref("Int32Array")}} und {{jsxref("Uint8Array")}}, sind {{Glossary("serializable_object", "serialisierbar")}}, aber nicht übertragbar.
> Ihr zugrunde liegender Puffer ist jedoch ein {{jsxref("ArrayBuffer")}}, das ein übertragbares Objekt ist.
> Wir hätten `uInt8Array.buffer` im Datenparameter senden können, aber nicht `uInt8Array` im Übertragungsarray.

## Übertragung während einer Klonoperation

Der folgende Code zeigt eine `structuredClone()`-Operation, bei der der zugrunde liegende Puffer vom ursprünglichen Objekt zum Klon kopiert wird.

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

Schnittstellen, die übertragen werden können, sollten diese Informationen in ihrer Einführung enthalten.

Einige der Elemente, die von verschiedenen Spezifikationen als _übertragbar_ angegeben werden, sind unten aufgeführt (diese Liste ist möglicherweise nicht vollständig!):

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
- [`MediaSourceHandle`](/de/docs/Web/API/MediaSourceHandle)
- [`MIDIAccess`](/de/docs/Web/API/MIDIAccess)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)

> [!NOTE]
> Übertragbare Objekte sind in [Web IDL-Dateien](https://github.com/w3c/webref/tree/main/ed/idl) mit dem Attribut `[Transferable]` markiert.
> Die Browser-Unterstützung kann in den Kompatibilitätsinformationen des jeweiligen Objekts durch das Feature `transferable` angegeben werden (sehen Sie sich zum Beispiel [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel#browser_compatibility) an).

## Siehe auch

- [Transferable Objects: Lightning Fast!](https://developer.chrome.com/blog/transferable-objects-lightning-fast/)
- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Übertragbare Objekte in der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/structured-data.html#transferable-objects)
- [`DedicatedWorkerGlobalScope.postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage)
