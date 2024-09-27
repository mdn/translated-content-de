---
title: Übertragbare Objekte
slug: Web/API/Web_Workers_API/Transferable_objects
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{DefaultAPISidebar("Web Workers API")}}

**Übertragbare Objekte** sind Objekte, die Ressourcen besitzen, die von einem Kontext in einen anderen _übertragen_ werden können, wodurch sichergestellt wird, dass die Ressourcen nur in einem Kontext gleichzeitig verfügbar sind.
Nach einer Übertragung ist das ursprüngliche Objekt nicht mehr nutzbar; es verweist nicht mehr auf die übertragene Ressource, und jeder Versuch, das Objekt zu lesen oder zu schreiben, führt zu einer Ausnahme.

_Übertragbare Objekte_ werden häufig verwendet, um Ressourcen zu teilen, die nur sicher einem einzelnen JavaScript-Thread gleichzeitig ausgesetzt werden können.
Ein Beispiel ist ein {{jsxref("ArrayBuffer")}}, ein übertragbares Objekt, das einen Speicherblock besitzt.
Wenn ein solcher Puffer zwischen Threads übertragen wird, wird die zugehörige Speicherressource vom ursprünglichen Puffer losgelöst und dem neuen Thread hinzugefügt.
Das Pufferobjekt im ursprünglichen Thread ist nicht mehr nutzbar, da es keine Speicherressource mehr besitzt.

Das Übertragen kann auch verwendet werden, wenn tiefgehende Kopien von Objekten mit [`structuredClone()`](/de/docs/Web/API/WorkerGlobalScope/structuredClone) erstellt werden.
Nach der Klonoperation werden die übertragenen Ressourcen verschoben, anstatt sie in das geklonte Objekt zu kopieren.

Für `postMessage()` und `structuredClone()` müssen übertragene Ressourcen an das Datenobjekt angehängt werden, da sie sonst am Empfangsende nicht verfügbar wären. Die übertragbare Liste gibt lediglich an, wie bestimmte Ressourcen gesendet werden sollen, ohne sie tatsächlich zu senden (obwohl sie immer getrennt würden).

Der Mechanismus, der verwendet wird, um die Ressourcen eines Objekts zu übertragen, hängt vom Objekt ab.
Zum Beispiel wird beim Übertragen eines {{jsxref("ArrayBuffer")}} zwischen Threads die Speicherressource, auf die es verweist, in einem schnellen und effizienten Zero-Copy-Verfahren _wörtlich_ zwischen Kontexten verschoben.
Andere Objekte können durch Kopieren der zugehörigen Ressource und anschließendem Löschen aus dem alten Kontext übertragen werden.

Nicht alle Objekte sind übertragbar.
Eine Liste übertragbarer Objekte wird [unten bereitgestellt](#unterstützte_objekte).

## Übertragung von Objekten zwischen Threads

Der folgende Code demonstriert, wie die Übertragung funktioniert, wenn eine Nachricht von einem Hauptthread an einen [Web Worker-Thread](/de/docs/Web/API/Web_Workers_API) gesendet wird.
Das {{jsxref("Uint8Array")}} wird im Worker kopiert (dupliziert), während sein Puffer übertragen wird.
Nach der Übertragung löst jeder Versuch, auf `uInt8Array` vom Hauptthread aus zuzugreifen oder es zu schreiben, eine Ausnahme aus, aber Sie können immer noch die `byteLength` überprüfen, um zu bestätigen, dass sie jetzt null ist.

```js
// Create an 8MB "file" and fill it. 8MB = 1024 * 1024 * 8 B
const uInt8Array = new Uint8Array(1024 * 1024 * 8).map((v, i) => i);
console.log(uInt8Array.byteLength); // 8388608

// Transfer the underlying buffer to a worker
worker.postMessage(uInt8Array, [uInt8Array.buffer]);
console.log(uInt8Array.byteLength); // 0
```

> **Hinweis:** [Typisierte Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) wie {{jsxref("Int32Array")}} und {{jsxref("Uint8Array")}} sind [serialisierbar](/de/docs/Glossary/serializable_object), aber nicht übertragbar.
> Ihr zugrundeliegender Puffer ist jedoch ein {{jsxref("ArrayBuffer")}}, der ein übertragbares Objekt ist.
> Wir hätten `uInt8Array.buffer` im Datenparameter senden können, aber nicht `uInt8Array` in der Übertragungsliste.

## Übertragung während einer Klonoperation

Der folgende Code zeigt eine `structuredClone()`-Operation, bei der der zugrundeliegende Puffer vom ursprünglichen Objekt in das Klon kopiert wird.

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

Die Gegenstände, die laut verschiedenen Spezifikationen _übertragen_ werden können, sind:

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

Die Browser-Unterstützung sollte in den Kompatibilitätsinformationen des jeweiligen Objekts durch die `transferable` Unterfunktion angegeben werden (siehe [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel#browser_compatibility) als Beispiel).
Zum Zeitpunkt des Schreibens wurden nicht alle übertragbaren Objekte mit diesen Informationen aktualisiert.

> [!NOTE]
> Übertragbare Objekte werden in [Web IDL-Dateien](https://github.com/w3c/webref/tree/main/ed/idl) mit dem Attribut `[Transferable]` gekennzeichnet.

## Siehe auch

- [Transferable Objects: Lightning Fast!](https://developer.chrome.com/blog/transferable-objects-lightning-fast/)
- [Verwendung von Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Übertragbare Objekte in der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/structured-data.html#transferable-objects)
- [`DedicatedWorkerGlobalScope.postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage)
