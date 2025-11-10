---
title: Übertragbare Objekte
slug: Web/API/Web_Workers_API/Transferable_objects
l10n:
  sourceCommit: ae801dd2331e159f1abc812b40ef0a57507596f3
---

{{DefaultAPISidebar("Web Workers API")}}

**Übertragbare Objekte** sind Objekte, die Ressourcen besitzen, die von einem Kontext in einen anderen _übertragen_ werden können. Dies stellt sicher, dass die Ressourcen jeweils nur in einem Kontext verfügbar sind.
Nach einer Übertragung ist das ursprüngliche Objekt nicht mehr verwendbar; es verweist nicht mehr auf die übertragene Ressource, und ein Versuch, das Objekt zu lesen oder zu schreiben, führt zu einer Ausnahme.

_Übertragbare Objekte_ werden häufig verwendet, um Ressourcen zu teilen, die nur sicher einem einzigen JavaScript-Thread gleichzeitig zugänglich gemacht werden können.
Zum Beispiel ist ein {{jsxref("ArrayBuffer")}} ein übertragbares Objekt, das einen Speicherblock besitzt.
Wenn ein solches Puffer zwischen Threads übertragen wird, wird die zugehörige Speicherressource vom ursprünglichen Puffer getrennt und an das im neuen Thread erstellte Pufferobjekt angehängt.
Das Pufferobjekt im ursprünglichen Thread ist nicht mehr verwendbar, da es keine Speicherressource mehr besitzt.

Das Übertragen kann auch genutzt werden, wenn tiefe Kopien von Objekten mit [`structuredClone()`](/de/docs/Web/API/WorkerGlobalScope/structuredClone) erstellt werden.
Nach dem Klonvorgang werden die übertragenen Ressourcen bewegt, anstatt kopiert zu werden, zu dem geklonten Objekt.

Sowohl für `postMessage()` als auch `structuredClone()` müssen übertragene Ressourcen an das Datenobjekt angehängt werden, da sie andernfalls auf der Empfängerseite nicht verfügbar wären, da das übertragbare Array nur angibt, wie bestimmte Ressourcen gesendet werden sollen, jedoch diese nicht tatsächlich sendet (obwohl sie immer getrennt werden würden).

Der Mechanismus, der verwendet wird, um die Ressourcen eines Objekts zu übertragen, hängt vom Objekt ab.
Zum Beispiel wird bei der Übertragung eines {{jsxref("ArrayBuffer")}} zwischen Threads die Speicherressource, auf die es verweist, buchstäblich zwischen Kontexte in einem schnellen und effizienten Zero-Copy-Vorgang verschoben.
Andere Objekte können durch Kopieren der zugehörigen Ressource und anschließendes Löschen aus dem alten Kontext übertragen werden.

Nicht alle Objekte sind übertragbar.
Eine Liste der übertragbaren Objekte wird [unten bereitgestellt](#unterstützte_objekte).

## Übertragen von Objekten zwischen Threads

Der folgende Code demonstriert, wie Übertragung funktioniert, wenn eine Nachricht von einem Hauptthread zu einem [Web-Worker-Thread](/de/docs/Web/API/Web_Workers_API) gesendet wird.
Die {{jsxref("Uint8Array")}} wird im Worker kopiert (dupliziert), während ihr Puffer übertragen wird.
Nach der Übertragung führt jeder Versuch, `uInt8Array` vom Hauptthread zu lesen oder zu schreiben, zu einem Fehler, aber Sie können immer noch die `byteLength` überprüfen, um zu bestätigen, dass sie jetzt null ist.

```js
// Create an 8MB "file" and fill it. 8MB = 1024 * 1024 * 8 B
const uInt8Array = new Uint8Array(1024 * 1024 * 8).map((v, i) => i);
console.log(uInt8Array.byteLength); // 8388608

// Transfer the underlying buffer to a worker
worker.postMessage(uInt8Array, [uInt8Array.buffer]);
console.log(uInt8Array.byteLength); // 0
```

> [!NOTE]
> [Typisierte Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) wie {{jsxref("Int32Array")}} und {{jsxref("Uint8Array")}} sind {{Glossary("serializable_object", "serialisierbar")}}, aber nicht übertragbar.
> Ihr zugrundeliegender Puffer ist jedoch ein {{jsxref("ArrayBuffer")}}, ein übertragbares Objekt.
> Wir hätten `uInt8Array.buffer` im Datenparameter senden können, aber nicht `uInt8Array` im Transfer-Array.

## Übertragen während einer Klonoperation

Der folgende Code zeigt eine `structuredClone()`-Operation, bei der der zugrunde liegende Puffer vom ursprünglichen Objekt auf den Klon kopiert wird.

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

Schnittstellen, die übertragen werden können, sollten diese Information in ihrer Einführung enthalten.

Einige der Elemente, die laut verschiedenen Spezifikationen _übertragen_ werden können, sind unten aufgelistet (diese Liste ist möglicherweise nicht erschöpfend!):

- {{jsxref("ArrayBuffer")}}
- [`AudioData`](/de/docs/Web/API/AudioData)
- [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)
- [`MediaSourceHandle`](/de/docs/Web/API/MediaSourceHandle)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
- [`MessagePort`](/de/docs/Web/API/MessagePort)
- [`MIDIAccess`](/de/docs/Web/API/MIDIAccess)
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
- [`ReadableStream`](/de/docs/Web/API/ReadableStream)
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)
- [`TransformStream`](/de/docs/Web/API/TransformStream)
- [`VideoFrame`](/de/docs/Web/API/VideoFrame)
- [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream)
- [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream)
- [`WritableStream`](/de/docs/Web/API/WritableStream)

> [!NOTE]
> Übertragbare Objekte sind in [Web IDL-Dateien](https://github.com/w3c/webref/tree/main/ed/idl) mit dem Attribut `[Transferable]` gekennzeichnet.
> Die Unterstützung durch Browser kann in den jeweiligen Kompatibilitätsinformationen des Objekts durch die Unterfunktion `transferable` angegeben werden (siehe [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel#browser_compatibility) für ein Beispiel).

## Siehe auch

- [Transferable Objects: Lightning Fast!](https://developer.chrome.com/blog/transferable-objects-lightning-fast/)
- [Web Workers Verwenden](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Übertragbare Objekte in der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/structured-data.html#transferable-objects)
- [`DedicatedWorkerGlobalScope.postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage)
