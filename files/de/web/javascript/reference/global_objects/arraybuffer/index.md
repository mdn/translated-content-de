---
title: ArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Das **`ArrayBuffer`**-Objekt wird verwendet, um einen generischen Puffer für rohe Binärdaten darzustellen.

Es handelt sich um ein Bytefeld, das in anderen Sprachen oft als "byte array" bezeichnet wird. Sie können die Inhalte eines `ArrayBuffer` nicht direkt manipulieren; stattdessen erstellen Sie eines der [typisierten Array-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) oder ein {{jsxref("DataView")}}-Objekt, das den Puffer in einem spezifischen Format darstellt, und verwenden dieses, um die Inhalte des Puffers zu lesen und zu schreiben.

Der [`ArrayBuffer()`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer)-Konstruktor erstellt einen neuen `ArrayBuffer` mit der angegebenen Länge in Bytes. Sie können auch einen Arraypuffer aus vorhandenen Daten erhalten, zum Beispiel aus einem [Base64](/de/docs/Glossary/Base64)-String oder [aus einer lokalen Datei](/de/docs/Web/API/FileReader/readAsArrayBuffer).

`ArrayBuffer` ist ein [transferierbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

## Beschreibung

### ArrayBuffers anpassen

`ArrayBuffer`-Objekte können vergrößert werden, indem die `maxByteLength`-Option beim Aufruf des {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer()")}}-Konstruktors angegeben wird. Sie können abfragen, ob ein `ArrayBuffer` vergrößerbar ist und welche maximale Größe es hat, indem Sie auf seine {{jsxref("ArrayBuffer/resizable", "resizable")}}- und {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} Eigenschaften zugreifen. Sie können einem vergrößerbaren `ArrayBuffer` mit einem {{jsxref("ArrayBuffer/resize", "resize()")}}-Aufruf eine neue Größe zuweisen. Neue Bytes werden auf 0 initialisiert.

Diese Funktionen machen das Anpassen von `ArrayBuffer`s effizienter — andernfalls müssten Sie eine Kopie des Puffers mit einer neuen Größe erstellen. Es gibt JavaScript auch in dieser Hinsicht Parität mit WebAssembly (Wasm-Speicher kann mit [`WebAssembly.Memory.prototype.grow()`](/de/docs/WebAssembly/JavaScript_interface/Memory/grow) vergrößert werden).

### ArrayBuffers übertragen

`ArrayBuffer`-Objekte können zwischen verschiedenen Ausführungskontexten, wie [Web Workers](/de/docs/Web/API/Web_Workers_API) oder [Service Workers](/de/docs/Web/API/Service_Worker_API), unter Verwendung des [strukturieren Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) übertragen werden. Dies geschieht, indem der `ArrayBuffer` als [transferierbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects) in einem Aufruf von [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage) oder [`ServiceWorker.postMessage()`](/de/docs/Web/API/ServiceWorker/postMessage) übergeben wird. In reinem JavaScript können Sie auch das Eigentum des Speichers von einem `ArrayBuffer` auf einen anderen übertragen, indem Sie dessen {{jsxref("ArrayBuffer/transfer", "transfer()")}}- oder {{jsxref("ArrayBuffer/transferToFixedLength", "transferToFixedLength()")}}-Methode verwenden.

Wenn ein `ArrayBuffer` übertragen wird, wird seine ursprüngliche Kopie _abgetrennt_ — das bedeutet, dass es nicht mehr verwendbar ist. Es gibt immer nur eine Kopie des `ArrayBuffer`, die tatsächlich Zugang zum zugrunde liegenden Speicher hat. Abgetrennte Puffer haben folgende Verhaltensweisen:

- {{jsxref("ArrayBuffer/byteLength", "byteLength")}} wird 0 (sowohl im Puffer als auch in den zugehörigen typisierten Array-Ansichten).
- Methoden wie {{jsxref("ArrayBuffer/resize", "resize()")}} und {{jsxref("ArrayBuffer/slice", "slice()")}} werfen einen {{jsxref("TypeError")}}, wenn sie aufgerufen werden. Auch die Methoden der zugehörigen typisierten Array-Ansichten werfen einen `TypeError`.

Sie können feststellen, ob ein `ArrayBuffer` abgetrennt ist, anhand seiner {{jsxref("ArrayBuffer/detached", "detached")}} Eigenschaft.

## Konstruktor

- {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer()")}}
  - : Erstellt ein neues `ArrayBuffer`-Objekt.

## Statische Eigenschaften

- [`ArrayBuffer[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/Symbol.species)
  - : Die Konstruktorfunktion, die verwendet wird, um abgeleitete Objekte zu erstellen.

## Statische Methoden

- {{jsxref("ArrayBuffer.isView()")}}
  - : Gibt `true` zurück, wenn `arg` eine der ArrayBuffer-Ansichten ist, wie [typisierte Array-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) oder ein {{jsxref("DataView")}}. Gibt andernfalls `false` zurück.

## Instanzeigenschaften

Diese Eigenschaften sind auf `ArrayBuffer.prototype` definiert und werden von allen `ArrayBuffer`-Instanzen geteilt.

- {{jsxref("ArrayBuffer.prototype.byteLength")}}
  - : Die Größe des `ArrayBuffer` in Bytes. Diese wird beim Erstellen des Arrays festgelegt und kann nur geändert werden, indem die {{jsxref("ArrayBuffer.prototype.resize()")}}-Methode verwendet wird, falls der `ArrayBuffer` vergrößerbar ist.
- {{jsxref("Object/constructor", "ArrayBuffer.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `ArrayBuffer`-Instanzen ist der anfängliche Wert der {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer")}}-Konstruktor.
- {{jsxref("ArrayBuffer.prototype.detached")}}
  - : Schreibgeschützt. Gibt `true` zurück, wenn der `ArrayBuffer` abgetrennt (übertragen) wurde, oder `false`, wenn nicht.
- {{jsxref("ArrayBuffer.prototype.maxByteLength")}}
  - : Die schreibgeschützte maximale Länge in Bytes, zu welcher der `ArrayBuffer` vergrößert werden kann. Diese wird beim Erstellen des Arrays festgelegt und kann nicht geändert werden.
- {{jsxref("ArrayBuffer.prototype.resizable")}}
  - : Schreibgeschützt. Gibt `true` zurück, wenn der `ArrayBuffer` vergrößerbar ist, oder `false`, wenn nicht.
- `ArrayBuffer.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"ArrayBuffer"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("ArrayBuffer.prototype.resize()")}}
  - : Ändert die Größe des `ArrayBuffer` auf die angegebene Größe in Bytes.
- {{jsxref("ArrayBuffer.prototype.slice()")}}
  - : Gibt einen neuen `ArrayBuffer` zurück, dessen Inhalt eine Kopie der Bytes dieses `ArrayBuffer` ist, von `begin` (einschließlich) bis `end` (ausschließlich). Wenn `begin` oder `end` negativ ist, bezieht sich dies auf einen Index vom Ende des Arrays, im Gegensatz zum Anfang.
- {{jsxref("ArrayBuffer.prototype.transfer()")}}
  - : Erstellt einen neuen `ArrayBuffer` mit dem gleichen Byte-Inhalt wie dieser Puffer und trennt dann diesen Puffer.
- {{jsxref("ArrayBuffer.prototype.transferToFixedLength()")}}
  - : Erstellt einen neuen nicht vergrößerbaren `ArrayBuffer` mit dem gleichen Byte-Inhalt wie dieser Puffer und trennt dann diesen Puffer.

## Beispiele

### Erstellen eines ArrayBuffer

In diesem Beispiel erstellen wir einen 8-Byte-Puffer mit einer {{jsxref("Int32Array")}}-Ansicht, die den Puffer referenziert:

```js
const buffer = new ArrayBuffer(8);
const view = new Int32Array(buffer);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `ArrayBuffer` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("SharedArrayBuffer")}}
- [RangeError: ungültige Array-Länge](/de/docs/Web/JavaScript/Reference/Errors/Invalid_array_length)
