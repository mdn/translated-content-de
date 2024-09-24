---
title: Übertragbare Objekte
slug: Web/API/Web_Workers_API/Transferable_objects
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("Web Workers API")}}

**Übertragbare Objekte** sind Objekte, die Ressourcen besitzen, die von einem Kontext zu einem anderen _übertragen_ werden können, wobei sichergestellt wird, dass die Ressourcen zu einem bestimmten Zeitpunkt nur in einem Kontext verfügbar sind. Nach einer Übertragung ist das ursprüngliche Objekt nicht mehr verwendbar; es verweist nicht mehr auf die übertragene Ressource, und jeder Versuch, das Objekt zu lesen oder zu schreiben, führt zu einer Ausnahme.

_Übertragbare Objekte_ werden häufig verwendet, um Ressourcen zu teilen, die nur sicher in einem einzigen JavaScript-Thread gleichzeitig verfügbar gemacht werden können. Beispielsweise ist ein {{jsxref("ArrayBuffer")}} ein übertragbares Objekt, das einen Speicherblock besitzt. Wenn ein solcher Puffer zwischen Threads übertragen wird, wird die zugehörige Speicherressource vom ursprünglichen Puffer gelöst und dem Pufferobjekt im neuen Thread zugeordnet. Das Pufferobjekt im ursprünglichen Thread ist nicht mehr verwendbar, da es keine Speicherressource mehr besitzt.

Das Übertragen kann auch genutzt werden, um beim Erstellen von tiefen Kopien von Objekten mit {{domxref("structuredClone()")}}. Nach der Klonoperation werden die übertragenen Ressourcen verschoben, anstatt in das geklonte Objekt kopiert zu werden.

Für sowohl `postMessage()` als auch `structuredClone()` müssen übertragene Ressourcen an das Datenobjekt angehängt werden, andernfalls wären sie auf der Empfangsseite nicht verfügbar, da das übertragbare Array nur angibt, wie bestimmte Ressourcen gesendet werden sollen, aber sie nicht tatsächlich sendet (obwohl sie immer abgetrennt würden).

Der Mechanismus, der verwendet wird, um die Ressourcen eines Objekts zu übertragen, hängt vom jeweiligen Objekt ab. Zum Beispiel, wenn ein {{jsxref("ArrayBuffer")}} zwischen Threads übertragen wird, wird die Speicherressource, auf die es verweist, _wörtlich_ zwischen den Kontexten in einer schnellen und effizienten Zero-Copy-Operation verschoben. Andere Objekte können übertragen werden, indem die zugehörige Ressource kopiert und dann aus dem alten Kontext gelöscht wird.

Nicht alle Objekte sind übertragbar. Eine Liste der übertragbaren Objekte wird [unten bereitgestellt](#unterstützte_objekte).

## Übertragen von Objekten zwischen Threads

Der folgende Code zeigt, wie das Übertragen funktioniert, wenn eine Nachricht von einem Hauptthread an einen {{domxref("Web Workers API", "Web Worker Thread","","true")}} gesendet wird. Der {{jsxref("Uint8Array")}} wird im Worker kopiert (dupliziert), während sein Puffer übertragen wird. Nach der Übertragung führt jeder Versuch, `uInt8Array` aus dem Hauptthread zu lesen oder zu schreiben, zu einer Ausnahme, aber Sie können immer noch die `byteLength` prüfen, um zu bestätigen, dass sie nun null ist.

```js
// Erstellen Sie eine 8MB "Datei" und füllen Sie sie. 8MB = 1024 * 1024 * 8 B
const uInt8Array = new Uint8Array(1024 * 1024 * 8).map((v, i) => i);
console.log(uInt8Array.byteLength); // 8388608

// Übertragen Sie den zugrundeliegenden Puffer an einen Worker
worker.postMessage(uInt8Array, [uInt8Array.buffer]);
console.log(uInt8Array.byteLength); // 0
```

> **Note:** [Typisierte Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) wie {{jsxref("Int32Array")}} und {{jsxref("Uint8Array")}}, sind {{Glossary("serializable object","serialisierbare")}}, aber nicht übertragbar. Allerdings ist ihr zugrundeliegender Puffer ein {{jsxref("ArrayBuffer")}}, der ein übertragbares Objekt ist. Wir hätten `uInt8Array.buffer` im Datenparameter senden können, aber nicht `uInt8Array` im Übertragungsarray.

## Übertragen während einer Klonoperation

Der folgende Code zeigt eine {{domxref("structuredClone()")}}-Operation, bei der der zugrundeliegende Puffer vom ursprünglichen Objekt zum Klon kopiert wird.

```js
const original = new Uint8Array(1024);
const clone = structuredClone(original);
console.log(original.byteLength); // 1024
console.log(clone.byteLength); // 1024

original[0] = 1;
console.log(clone[0]); // 0

// Die Übertragung des Uint8Array würde eine Ausnahme werfen, da es kein übertragbares Objekt ist
// const transferred = structuredClone(original, {transfer: [original]});

// Wir können Uint8Array.buffer übertragen.
const transferred = structuredClone(original, { transfer: [original.buffer] });
console.log(transferred.byteLength); // 1024
console.log(transferred[0]); // 1

// Nach der Übertragung von Uint8Array.buffer kann dieses nicht mehr verwendet werden.
console.log(original.byteLength); // 0
```

## Unterstützte Objekte

Die in verschiedenen Spezifikationen aufgeführten Elemente, die _übertragen_ werden können, sind:

- {{jsxref("ArrayBuffer")}}
- {{domxref("MessagePort")}}
- {{domxref("ReadableStream")}}
- {{domxref("WritableStream")}}
- {{domxref("TransformStream")}}
- {{domxref("WebTransportReceiveStream")}}
- {{domxref("WebTransportSendStream")}}
- {{domxref("AudioData")}}
- {{domxref("ImageBitmap")}}
- {{domxref("VideoFrame")}}
- {{domxref("OffscreenCanvas")}}
- {{domxref("RTCDataChannel")}}

Die Browserunterstützung sollte in den jeweiligen Kompatibilitätsinformationen des Objekts durch die `transferable`-Teilfunktion angegeben werden (siehe [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel#browser_compatibility) als Beispiel). Zum Zeitpunkt des Schreibens wurden nicht alle übertragbaren Objekte mit diesen Informationen aktualisiert.

> [!NOTE]
> Übertragbare Objekte sind in [Web IDL-Dateien](https://github.com/w3c/webref/tree/main/ed/idl) mit dem Attribut `[Transferable]` markiert.

## Siehe auch

- [Übertragbare Objekte: Blitzschnell!](https://developer.chrome.com/blog/transferable-objects-lightning-fast/)
- [Verwendung von Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Übertragbare Objekte in der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/structured-data.html#transferable-objects)
- {{domxref("DedicatedWorkerGlobalScope.postMessage()")}}
