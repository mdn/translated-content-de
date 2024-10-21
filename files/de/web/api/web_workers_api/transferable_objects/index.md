---
title: Übertragbare Objekte
slug: Web/API/Web_Workers_API/Transferable_objects
l10n:
  sourceCommit: 47c461a1ebc95289543ea2962c6dbc8d57ee76d9
---

{{DefaultAPISidebar("Web Workers API")}}

**Übertragbare Objekte** sind Objekte, die Ressourcen besitzen, die von einem Kontext in einen anderen _übertragen_ werden können, wobei sichergestellt wird, dass die Ressourcen immer nur in einem Kontext verfügbar sind. Nach einer Übertragung ist das ursprüngliche Objekt nicht mehr verwendbar; es verweist nicht mehr auf die übertragene Ressource und jeder Versuch, das Objekt zu lesen oder zu schreiben, löst eine Ausnahme aus.

_Übertragbare Objekte_ werden häufig verwendet, um Ressourcen zu teilen, die nur sicher einem einzelnen JavaScript-Thread zugänglich gemacht werden können. Zum Beispiel ist ein {{jsxref("ArrayBuffer")}} ein übertragbares Objekt, das einen Speicherblock besitzt. Wenn ein solcher Puffer zwischen Threads übertragen wird, wird die zugehörige Speicherressource vom ursprünglichen Puffer getrennt und an das Pufferobjekt angehängt, das im neuen Thread erstellt wurde. Das Pufferobjekt im ursprünglichen Thread ist nicht mehr verwendbar, da es keine Speicherressource mehr besitzt.

Übertragung kann auch verwendet werden, wenn tiefe Kopien von Objekten mit [`structuredClone()`](/de/docs/Web/API/WorkerGlobalScope/structuredClone) erstellt werden. Nach der Klonoperation werden die übertragenen Ressourcen verschoben, anstatt zum geklonten Objekt kopiert zu werden.

Für sowohl `postMessage()` als auch `structuredClone()` müssen übertragene Ressourcen an das Datenobjekt angehängt werden, da sie ansonsten am empfangenden Ende nicht verfügbar wären, weil das übertragbare Array nur anzeigt, wie bestimmte Ressourcen gesendet werden sollen, aber sie nicht tatsächlich sendet (obwohl sie immer abgetrennt würden).

Der Mechanismus, der verwendet wird, um die Ressourcen eines Objekts zu übertragen, hängt vom Objekt ab. Zum Beispiel, wenn ein {{jsxref("ArrayBuffer")}} zwischen Threads übertragen wird, wird die Speicherressource, auf die er verweist, buchstäblich zwischen den Kontexten in einem schnellen und effizienten Zero-Copy-Verfahren bewegt. Andere Objekte können durch Kopieren der zugehörigen Ressource und anschließendes Löschen aus dem alten Kontext übertragen werden.

Nicht alle Objekte sind übertragbar. Eine Liste übertragbarer Objekte wird [nachfolgend bereitgestellt](#unterstützte_objekte).

## Übertragung von Objekten zwischen Threads

Der folgende Code demonstriert, wie die Übertragung funktioniert, wenn eine Nachricht von einem Hauptthread an einen [Web Worker-Thread](/de/docs/Web/API/Web_Workers_API) gesendet wird. Das {{jsxref("Uint8Array")}} wird im Worker kopiert (dupliziert), während sein Puffer übertragen wird. Nach der Übertragung wird jeder Versuch, `uInt8Array` vom Hauptthread zu lesen oder zu schreiben, eine Ausnahme auslösen, aber Sie können immer noch die `byteLength` überprüfen, um zu bestätigen, dass diese jetzt null ist.

```js
// Create an 8MB "file" and fill it. 8MB = 1024 * 1024 * 8 B
const uInt8Array = new Uint8Array(1024 * 1024 * 8).map((v, i) => i);
console.log(uInt8Array.byteLength); // 8388608

// Transfer the underlying buffer to a worker
worker.postMessage(uInt8Array, [uInt8Array.buffer]);
console.log(uInt8Array.byteLength); // 0
```

> **Hinweis:** [Typed Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) wie {{jsxref("Int32Array")}} und {{jsxref("Uint8Array")}} sind {{Glossary("serializable_object", "serialisierbar")}}, aber nicht übertragbar. Ihr zugrunde liegender Puffer ist jedoch ein {{jsxref("ArrayBuffer")}}, der ein übertragbares Objekt ist. Wir könnten `uInt8Array.buffer` im Datenparameter senden, aber nicht `uInt8Array` im Übertragungsarray.

## Übertragung während einer Klonoperation

Der folgende Code zeigt eine `structuredClone()`-Operation, bei der der zugrunde liegende Puffer vom Originalobjekt in den Klon kopiert wird.

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

Schnittstellen, die übertragbar sind, sollten diese Information in ihrer Einführung enthalten.

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

> [!NOTE]
> Übertragbare Objekte sind in [Web IDL-Dateien](https://github.com/w3c/webref/tree/main/ed/idl) mit dem Attribut `[Transferable]` gekennzeichnet. Browser-Unterstützung kann in den jeweiligen Angaben zur Browser-Kompatibilität des Objekts durch das `transferable` Untermerkmal angegeben sein (siehe [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel#browser_compatibility) für ein Beispiel).

## Siehe auch

- [Transferable Objects: Lightning Fast!](https://developer.chrome.com/blog/transferable-objects-lightning-fast/)
- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Übertragbare Objekte in der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/structured-data.html#transferable-objects)
- [`DedicatedWorkerGlobalScope.postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage)
