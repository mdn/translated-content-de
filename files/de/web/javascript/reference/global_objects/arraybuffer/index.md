---
title: ArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Das **`ArrayBuffer`**-Objekt wird verwendet, um einen generischen Rohdatenpuffer zu repräsentieren.

Es handelt sich um ein Array von Bytes, das in anderen Sprachen oft als „Byte Array“ bezeichnet wird. Sie können den Inhalt eines `ArrayBuffer` nicht direkt manipulieren; stattdessen erstellen Sie eines der [typisierten Array-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) oder ein {{jsxref("DataView")}}-Objekt, das den Puffer in einem bestimmten Format repräsentiert, und verwenden dieses, um den Inhalt des Puffers zu lesen und zu schreiben.

Der [`ArrayBuffer()`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer)-Konstruktor erstellt einen neuen `ArrayBuffer` der angegebenen Länge in Bytes. Sie können auch einen Array-Puffer aus vorhandenen Daten erhalten, beispielsweise aus einem [Base64](/de/docs/Glossary/Base64)-String oder [aus einer lokalen Datei](/de/docs/Web/API/FileReader/readAsArrayBuffer).

`ArrayBuffer` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

## Beschreibung

### ArrayBuffers anpassen

`ArrayBuffer`-Objekte können durch Einschließen der `maxByteLength`-Option beim Aufruf des {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer()")}}-Konstruktors anpassbar gemacht werden. Sie können abfragen, ob ein `ArrayBuffer` anpassbar ist und wie seine maximale Größe ist, indem Sie auf seine {{jsxref("ArrayBuffer/resizable", "resizable")}}- und {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}}-Eigenschaften zugreifen. Sie können einem anpassbaren `ArrayBuffer` mit einem Aufruf von {{jsxref("ArrayBuffer/resize", "resize()")}} eine neue Größe zuweisen. Neue Bytes werden auf 0 initialisiert.

Diese Funktionen machen das Anpassen von `ArrayBuffer`s effizienter – andernfalls müssen Sie eine Kopie des Puffers mit neuer Größe erstellen. Dies bringt JavaScript in dieser Hinsicht mit WebAssembly in Einklang (Wasm lineare Speicher können mit [`WebAssembly.Memory.prototype.grow()`](/de/docs/WebAssembly/JavaScript_interface/Memory/grow) angepasst werden).

### ArrayBuffers übertragen

`ArrayBuffer`-Objekte können zwischen verschiedenen Ausführungskontexten, wie [Web Workers](/de/docs/Web/API/Web_Workers_API) oder [Service Workers](/de/docs/Web/API/Service_Worker_API), unter Verwendung des [strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) übertragen werden. Dies geschieht, indem der `ArrayBuffer` als [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects) in einem Aufruf von {{domxref("Worker.postMessage()")}} oder {{domxref("ServiceWorker.postMessage()")}} übergeben wird. In reinem JavaScript können Sie auch den Speicherbesitz von einem `ArrayBuffer` auf einen anderen übertragen, indem Sie dessen {{jsxref("ArrayBuffer/transfer", "transfer()")}} oder {{jsxref("ArrayBuffer/transferToFixedLength", "transferToFixedLength()")}}-Methode verwenden.

Wenn ein `ArrayBuffer` übertragen wird, wird seine ursprüngliche Kopie _abgetrennt_ – dies bedeutet, dass sie nicht mehr verwendbar ist. Zu jedem Zeitpunkt wird es nur eine Kopie des `ArrayBuffer` geben, die tatsächlich Zugriff auf den zugrunde liegenden Speicher hat. Abgetrennte Puffer zeigen die folgenden Verhaltensweisen:

- {{jsxref("ArrayBuffer/byteLength", "byteLength")}} wird 0 (sowohl im Puffer als auch in den zugehörigen typed array views).
- Methoden wie {{jsxref("ArrayBuffer/resize", "resize()")}} und {{jsxref("ArrayBuffer/slice", "slice()")}} werfen eine {{jsxref("TypeError")}}, wenn sie aufgerufen werden. Die Methoden der zugehörigen typed array views werfen ebenfalls einen `TypeError`.

Sie können überprüfen, ob ein `ArrayBuffer` abgetrennt ist, anhand seiner {{jsxref("ArrayBuffer/detached", "detached")}}-Eigenschaft.

## Konstruktor

- {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer()")}}
  - : Erstellt ein neues `ArrayBuffer`-Objekt.

## Statische Eigenschaften

- [`ArrayBuffer[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/Symbol.species)
  - : Die Konstruktorfunktion, die verwendet wird, um abgeleitete Objekte zu erstellen.

## Statische Methoden

- {{jsxref("ArrayBuffer.isView()")}}
  - : Gibt `true` zurück, wenn `arg` eine der ArrayBuffer-Ansichten ist, wie beispielsweise [typisierte Array-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) oder ein {{jsxref("DataView")}}. Gibt andernfalls `false` zurück.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `ArrayBuffer.prototype` definiert und werden von allen `ArrayBuffer`-Instanzen geteilt.

- {{jsxref("ArrayBuffer.prototype.byteLength")}}
  - : Die Größe, in Bytes, des `ArrayBuffer`. Diese wird festgelegt, wenn das Array erstellt wird und kann nur mit der {{jsxref("ArrayBuffer.prototype.resize()")}}-Methode geändert werden, wenn der `ArrayBuffer` anpassbar ist.
- {{jsxref("Object/constructor", "ArrayBuffer.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `ArrayBuffer`-Instanzen ist der Anfangswert der {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer")}}-Konstruktor.
- {{jsxref("ArrayBuffer.prototype.detached")}}
  - : Nur-Lesen. Gibt `true` zurück, wenn der `ArrayBuffer` abgetrennt (übertragen) wurde, oder `false`, wenn nicht.
- {{jsxref("ArrayBuffer.prototype.maxByteLength")}}
  - : Die nur lesbare maximale Länge, in Bytes, auf die das `ArrayBuffer` angepasst werden kann. Diese wird festgelegt, wenn das Array erstellt wird und kann nicht geändert werden.
- {{jsxref("ArrayBuffer.prototype.resizable")}}
  - : Nur-Lesen. Gibt `true` zurück, wenn das `ArrayBuffer` anpassbar ist, oder `false`, wenn nicht.
- `ArrayBuffer.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"ArrayBuffer"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("ArrayBuffer.prototype.resize()")}}
  - : Passt das `ArrayBuffer` an die angegebene Größe in Bytes an.
- {{jsxref("ArrayBuffer.prototype.slice()")}}
  - : Gibt ein neues `ArrayBuffer` zurück, dessen Inhalt eine Kopie der Bytes dieses `ArrayBuffer` ist, von `begin` (einschließlich) bis `end` (ausschließlich). Wenn `begin` oder `end` negativ ist, bezieht es sich auf einen Index vom Ende des Arrays, im Gegensatz zum Anfang.
- {{jsxref("ArrayBuffer.prototype.transfer()")}}
  - : Erstellt ein neues `ArrayBuffer` mit demselben Byte-Inhalt wie dieser Puffer und trennt dann diesen Puffer ab.
- {{jsxref("ArrayBuffer.prototype.transferToFixedLength()")}}
  - : Erstellt ein neues nicht anpassbares `ArrayBuffer` mit demselben Byte-Inhalt wie dieser Puffer und trennt dann diesen Puffer ab.

## Beispiele

### Erstellen eines ArrayBuffer

In diesem Beispiel erstellen wir einen 8-Byte-Puffer mit einer {{jsxref("Int32Array")}}-Sicht auf den Puffer:

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
