---
title: ArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

{{JSRef}}

Das **`ArrayBuffer`**-Objekt wird verwendet, um einen generischen, rohen Binärdatenpuffer darzustellen.

Es ist ein Array von Bytes, das in anderen Sprachen oft als "Byte-Array" bezeichnet wird. Sie können den Inhalt eines `ArrayBuffer` nicht direkt manipulieren; stattdessen erstellen Sie eines der [typed array objects](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) oder ein {{jsxref("DataView")}}-Objekt, das den Puffer in einem spezifischen Format darstellt, und verwenden dieses, um den Inhalt des Puffers zu lesen und zu schreiben.

Der [`ArrayBuffer()`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer)-Konstruktor erzeugt einen neuen `ArrayBuffer` mit der angegebenen Länge in Bytes. Sie können auch einen Array-Puffer aus bestehenden Daten erhalten, zum Beispiel von einem {{Glossary("Base64", "Base64")}}-String oder [von einer lokalen Datei](/de/docs/Web/API/FileReader/readAsArrayBuffer).

`ArrayBuffer` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

## Beschreibung

### Resizing von ArrayBuffers

`ArrayBuffer`-Objekte können durch das Hinzufügen der Option `maxByteLength` beim Aufruf des {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer()")}}-Konstruktors vergrößerbar gemacht werden. Sie können abfragen, ob ein `ArrayBuffer` vergrößerbar ist und welche maximale Größe es hat, indem Sie auf seine {{jsxref("ArrayBuffer/resizable", "resizable")}}- und {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}}-Eigenschaften zugreifen. Sie können einem vergrößerbaren `ArrayBuffer` mit einem {{jsxref("ArrayBuffer/resize", "resize()")}}-Aufruf eine neue Größe zuweisen. Neue Bytes werden auf 0 gesetzt.

Diese Funktionen machen das Vergrößern von `ArrayBuffer`s effizienter – andernfalls müssten Sie eine Kopie des Puffers mit einer neuen Größe erstellen. Es gibt JavaScript auch Parität mit WebAssembly in dieser Hinsicht (das lineare Speicher von Wasm kann mit [`WebAssembly.Memory.prototype.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow) vergrößert werden).

### Übertragung von ArrayBuffers

`ArrayBuffer`-Objekte können zwischen verschiedenen Ausführungskontexten, wie [Web Workers](/de/docs/Web/API/Web_Workers_API) oder [Service Workers](/de/docs/Web/API/Service_Worker_API), unter Verwendung des [strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) übertragen werden. Dies erfolgt durch das Übergeben des `ArrayBuffer` als [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects) in einem Aufruf von [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage) oder [`ServiceWorker.postMessage()`](/de/docs/Web/API/ServiceWorker/postMessage). In reinem JavaScript können Sie auch das Eigentum des Speichers von einem `ArrayBuffer` zu einem anderen übertragen, indem Sie dessen {{jsxref("ArrayBuffer/transfer", "transfer()")}}- oder {{jsxref("ArrayBuffer/transferToFixedLength", "transferToFixedLength()")}}-Methode verwenden.

Wenn ein `ArrayBuffer` übertragen wird, wird seine ursprüngliche Kopie _losgelöst_ — das bedeutet, dass es nicht mehr verwendbar ist. Zu jeder Zeit wird es nur eine Kopie des `ArrayBuffer` geben, die tatsächlich Zugriff auf den zugrunde liegenden Speicher hat. Losgelöste Puffer haben das folgende Verhalten:

- {{jsxref("ArrayBuffer/byteLength", "byteLength")}} wird 0 (sowohl im Puffer als auch in den zugehörigen typisierten Array-Ansichten).
- Methoden wie {{jsxref("ArrayBuffer/resize", "resize()")}} und {{jsxref("ArrayBuffer/slice", "slice()")}} werfen einen {{jsxref("TypeError")}}, wenn sie aufgerufen werden. Auch die Methoden der zugehörigen typisierten Array-Ansichten werfen einen `TypeError`.

Sie können überprüfen, ob ein `ArrayBuffer` losgelöst ist, indem Sie seine {{jsxref("ArrayBuffer/detached", "detached")}}-Eigenschaft abfragen.

## Konstruktor

- {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer()")}}
  - : Erzeugt ein neues `ArrayBuffer`-Objekt.

## Statische Eigenschaften

- [`ArrayBuffer[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/Symbol.species)
  - : Die Konstruktorfunktion, die zum Erstellen abgeleiteter Objekte verwendet wird.

## Statische Methoden

- {{jsxref("ArrayBuffer.isView()")}}
  - : Gibt `true` zurück, wenn `arg` eine der ArrayBuffer-Ansichten ist, wie z.B. [typed array objects](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) oder ein {{jsxref("DataView")}}. Gibt andernfalls `false` zurück.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `ArrayBuffer.prototype` definiert und werden von allen `ArrayBuffer`-Instanzen geteilt.

- {{jsxref("ArrayBuffer.prototype.byteLength")}}
  - : Die Größe des `ArrayBuffer` in Bytes. Diese wird festgelegt, wenn das Array konstruiert wird und kann nur geändert werden, wenn der `ArrayBuffer` vergrößerbar ist, durch die Methode {{jsxref("ArrayBuffer.prototype.resize()")}}.
- {{jsxref("Object/constructor", "ArrayBuffer.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanz-Objekt erstellt hat. Für `ArrayBuffer`-Instanzen ist der Anfangswert der {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer")}}-Konstruktor.
- {{jsxref("ArrayBuffer.prototype.detached")}}
  - : Nur-lesend. Gibt `true` zurück, wenn der `ArrayBuffer` losgelöst (übertragen) wurde, oder `false`, wenn nicht.
- {{jsxref("ArrayBuffer.prototype.maxByteLength")}}
  - : Die nur-lesbare maximale Länge in Bytes, auf die der `ArrayBuffer` vergrößert werden kann. Diese wird festgelegt, wenn das Array konstruiert wird und kann nicht geändert werden.
- {{jsxref("ArrayBuffer.prototype.resizable")}}
  - : Nur-lesend. Gibt `true` zurück, wenn der `ArrayBuffer` vergrößerbar ist, oder `false`, wenn nicht.
- `ArrayBuffer.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"ArrayBuffer"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("ArrayBuffer.prototype.resize()")}}
  - : Vergrößert den `ArrayBuffer` auf die angegebene Größe in Bytes.
- {{jsxref("ArrayBuffer.prototype.slice()")}}
  - : Gibt einen neuen `ArrayBuffer` zurück, dessen Inhalt eine Kopie von den Bytes dieses `ArrayBuffer` von `begin` (einschließlich) bis `end` (ausschließlich) ist. Wenn `begin` oder `end` negativ ist, bezieht es sich auf einen Index vom Ende des Arrays, im Gegensatz zum Anfang.
- {{jsxref("ArrayBuffer.prototype.transfer()")}}
  - : Erzeugt einen neuen `ArrayBuffer` mit demselben Byte-Inhalt wie dieser Puffer und löst dann diesen Puffer los.
- {{jsxref("ArrayBuffer.prototype.transferToFixedLength()")}}
  - : Erzeugt einen neuen, nicht-vergrößerbaren `ArrayBuffer` mit demselben Byte-Inhalt wie dieser Puffer und löst dann diesen Puffer los.

## Beispiele

### Erstellen eines ArrayBuffer

In diesem Beispiel erstellen wir einen 8-Byte-Puffer mit einer {{jsxref("Int32Array")}}-Ansicht, die auf den Puffer verweist:

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
