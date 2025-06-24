---
title: Übertragbare Objekte
slug: Web/API/Web_Workers_API/Transferable_objects
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{DefaultAPISidebar("Web Workers API")}}

**Übertragbare Objekte** sind Objekte, die Ressourcen besitzen, die von einem Kontext auf einen anderen _übertragen_ werden können, um sicherzustellen, dass die Ressourcen jeweils nur in einem Kontext zur Verfügung stehen.
Nach einer Übertragung ist das ursprüngliche Objekt nicht mehr nutzbar; es verweist nicht mehr auf die übertragene Ressource, und jeder Versuch, das Objekt zu lesen oder zu beschreiben, führt zu einer Ausnahme.

_Übertragbare Objekte_ werden häufig verwendet, um Ressourcen zu teilen, die nur sicher einem einzigen JavaScript-Thread zugänglich gemacht werden können.
Zum Beispiel ist ein {{jsxref("ArrayBuffer")}} ein übertragbares Objekt, das einen Speicherblock besitzt.
Wenn ein solcher Puffer zwischen Threads übertragen wird, wird die zugehörige Speicherressource vom ursprünglichen Puffer getrennt und dem im neuen Thread erstellten Pufferobjekt zugeordnet.
Das Pufferobjekt im ursprünglichen Thread ist nicht mehr verwendbar, da es keine Speicherressource mehr besitzt.

Die Übertragung kann auch verwendet werden, um tiefe Kopien von Objekten mit [`structuredClone()`](/de/docs/Web/API/WorkerGlobalScope/structuredClone) zu erstellen.
Nach dem Klonvorgang werden die übertragenen Ressourcen verschoben, anstatt in das geklonte Objekt kopiert zu werden.

Sowohl für `postMessage()` als auch `structuredClone()` müssen die übertragenen Ressourcen am Datenobjekt angehängt sein, ansonsten wären sie auf der Empfängerseite nicht verfügbar, da das übertragbare Array nur angibt, wie bestimmte Ressourcen gesendet werden sollen, sie jedoch nicht tatsächlich sendet (obwohl sie immer getrennt werden).

Der Mechanismus, der zur Übertragung der Ressourcen eines Objekts verwendet wird, hängt vom Objekt ab.
Beispielsweise wird, wenn ein {{jsxref("ArrayBuffer")}} zwischen Threads übertragen wird, die Speicherressource, auf die er zeigt, _im wahrsten Sinne_ zwischen Kontexten in einer schnellen und effizienten Zero-Copy-Operation verschoben.
Andere Objekte können durch Kopieren der zugehörigen Ressource übertragen und dann aus dem alten Kontext gelöscht werden.

Nicht alle Objekte sind übertragbar.
Eine Liste der übertragbaren Objekte wird [unten zur Verfügung gestellt](#unterstützte_objekte).

## Übertragung von Objekten zwischen Threads

Der folgende Code zeigt, wie die Übertragung funktioniert, wenn eine Nachricht von einem Haupt-Thread an einen [Web-Worker-Thread](/de/docs/Web/API/Web_Workers_API) gesendet wird.
Das {{jsxref("Uint8Array")}} wird im Worker kopiert (dupliziert), während sein Puffer übertragen wird.
Nach der Übertragung führt jeder Versuch, `uInt8Array` vom Haupt-Thread aus zu lesen oder zu schreiben, zu einem Fehler, aber Sie können weiterhin die `byteLength` überprüfen, um zu bestätigen, dass sie jetzt null ist.

```js
// Create an 8MB "file" and fill it. 8MB = 1024 * 1024 * 8 B
const uInt8Array = new Uint8Array(1024 * 1024 * 8).map((v, i) => i);
console.log(uInt8Array.byteLength); // 8388608

// Transfer the underlying buffer to a worker
worker.postMessage(uInt8Array, [uInt8Array.buffer]);
console.log(uInt8Array.byteLength); // 0
```

> [!NOTE] > [Typed Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) wie {{jsxref("Int32Array")}} und {{jsxref("Uint8Array")}}, sind {{Glossary("serializable_object", "serialisierbar")}}, aber nicht übertragbar.
> Ihr zugrunde liegender Puffer ist jedoch ein {{jsxref("ArrayBuffer")}}, der ein übertragbares Objekt ist.
> Wir hätten `uInt8Array.buffer` im Datenparameter senden können, aber nicht `uInt8Array` im Übertragsarray.

## Übertragung während eines Klonvorgangs

Der folgende Code zeigt eine `structuredClone()`-Operation, bei der der zugrunde liegende Puffer aus dem ursprünglichen Objekt in den Klon kopiert wird.

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

Einige der Elemente, die von verschiedenen Spezifikationen als _übertragbar_ angegeben werden, sind unten aufgeführt (diese Liste ist möglicherweise nicht erschöpfend!):

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
> Die Browser-Unterstützung kann in den Kompatibilitätsinformationen des jeweiligen Objekts durch die `transferable`-Unterfunktion angezeigt werden (siehe [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel#browser_compatibility) für ein Beispiel).

## Siehe auch

- [Übertragbare Objekte: Blitzschnell!](https://developer.chrome.com/blog/transferable-objects-lightning-fast/)
- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Übertragbare Objekte in der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/structured-data.html#transferable-objects)
- [`DedicatedWorkerGlobalScope.postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage)
