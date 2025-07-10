---
title: ArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Das **`ArrayBuffer`**-Objekt wird verwendet, um einen generischen rohen Binärdatenpuffer darzustellen.

Es ist ein Byte-Array, das in anderen Programmiersprachen oft als "Byte Array" bezeichnet wird. Sie können den Inhalt eines `ArrayBuffer` nicht direkt manipulieren; stattdessen erstellen Sie eines der [typisierten Array-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) oder ein {{jsxref("DataView")}}-Objekt, das den Puffer in einem bestimmten Format darstellt und verwenden dieses, um den Inhalt des Puffers zu lesen und zu schreiben.

Der [`ArrayBuffer()`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer)-Konstruktor erstellt einen neuen `ArrayBuffer` mit der angegebenen Länge in Bytes. Sie können auch einen Array-Puffer aus vorhandenen Daten erhalten, beispielsweise aus einem {{Glossary("Base64", "Base64")}}-String oder [aus einer lokalen Datei](/de/docs/Web/API/FileReader/readAsArrayBuffer).

`ArrayBuffer` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

## Beschreibung

### Ändern der Größe von ArrayBuffers

`ArrayBuffer`-Objekte können durch Einbeziehen der `maxByteLength`-Option beim Aufruf des {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer()")}}-Konstruktors größenänderbar gemacht werden. Sie können abfragen, ob ein `ArrayBuffer` größenänderbar ist und welche maximale Größe es hat, indem Sie auf seine {{jsxref("ArrayBuffer/resizable", "resizable")}}- und {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}}-Eigenschaften zugreifen. Sie können einem größenänderbaren `ArrayBuffer` eine neue Größe zuweisen, indem Sie einen {{jsxref("ArrayBuffer/resize", "resize()")}}-Aufruf durchführen. Neue Bytes werden auf 0 initialisiert.

Diese Funktionen machen das Ändern der Größe von `ArrayBuffer`s effizienter — andernfalls müssen Sie eine Kopie des Puffers mit neuer Größe erstellen. Es gibt JavaScript auch Gleichwertigkeit mit WebAssembly in dieser Hinsicht (Wasm lineares Gedächtnis kann mit [`WebAssembly.Memory.prototype.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow) erweitert werden).

### Übertragen von ArrayBuffers

`ArrayBuffer`-Objekte können zwischen verschiedenen Ausführungskontexten, wie [Web Workers](/de/docs/Web/API/Web_Workers_API) oder [Service Workers](/de/docs/Web/API/Service_Worker_API), unter Verwendung des [Structured-Clone-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) übertragen werden. Dies geschieht, indem der `ArrayBuffer` als [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects) in einem Aufruf von [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage) oder [`ServiceWorker.postMessage()`](/de/docs/Web/API/ServiceWorker/postMessage) übergeben wird. In reinem JavaScript können Sie auch die Besitzrechte des Speichers von einem `ArrayBuffer` zu einem anderen unter Verwendung seiner {{jsxref("ArrayBuffer/transfer", "transfer()")}}- oder {{jsxref("ArrayBuffer/transferToFixedLength", "transferToFixedLength()")}}-Methode übertragen.

Wenn ein `ArrayBuffer` übertragen wird, wird seine ursprüngliche Kopie _abgetrennt_ — das bedeutet, sie ist nicht mehr verwendbar. Zu jedem Zeitpunkt wird es nur eine Kopie des `ArrayBuffer` geben, die tatsächlich Zugriff auf den zugrunde liegenden Speicher hat. Abgetrennte Puffer haben folgende Verhalten:

- {{jsxref("ArrayBuffer/byteLength", "byteLength")}} wird 0 (sowohl im Puffer als auch in den zugehörigen typisierten Array-Ansichten).
- Methoden wie {{jsxref("ArrayBuffer/resize", "resize()")}} und {{jsxref("ArrayBuffer/slice", "slice()")}} werfen einen {{jsxref("TypeError")}}, wenn sie aufgerufen werden. Die zugehörigen Methoden der typisierten Array-Ansichten werfen ebenfalls einen `TypeError`.

Sie können überprüfen, ob ein `ArrayBuffer` abgetrennt ist, indem Sie seine {{jsxref("ArrayBuffer/detached", "detached")}}-Eigenschaft abfragen.

## Konstruktor

- {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer()")}}
  - : Erstellt ein neues `ArrayBuffer`-Objekt.

## Statische Eigenschaften

- [`ArrayBuffer[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/Symbol.species)
  - : Die Konstruktionsfunktion, die zum Erstellen von abgeleiteten Objekten verwendet wird.

## Statische Methoden

- {{jsxref("ArrayBuffer.isView()")}}
  - : Gibt `true` zurück, wenn `arg` eine der ArrayBuffer-Ansichten ist, wie beispielsweise [typisierte Array-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) oder ein {{jsxref("DataView")}}. Gibt andernfalls `false` zurück.

## Instanzeigenschaften

Diese Eigenschaften sind auf `ArrayBuffer.prototype` definiert und werden von allen `ArrayBuffer`-Instanzen geteilt.

- {{jsxref("ArrayBuffer.prototype.byteLength")}}
  - : Die Größe, in Bytes, des `ArrayBuffer`. Diese wird bei der Konstruktion des Arrays festgelegt und kann nur mithilfe der {{jsxref("ArrayBuffer.prototype.resize()")}}-Methode geändert werden, wenn der `ArrayBuffer` größenänderbar ist.
- {{jsxref("Object/constructor", "ArrayBuffer.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanzobjekt erstellt hat. Für `ArrayBuffer`-Instanzen ist der anfängliche Wert der {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer")}}-Konstruktor.
- {{jsxref("ArrayBuffer.prototype.detached")}}
  - : Nur lesbar. Gibt `true` zurück, wenn der `ArrayBuffer` abgetrennt (übertragen) wurde, oder `false`, wenn nicht.
- {{jsxref("ArrayBuffer.prototype.maxByteLength")}}
  - : Die nur-lesbare maximale Länge, in Bytes, auf die der `ArrayBuffer` geändert werden kann. Diese wird bei der Konstruktion des Arrays festgelegt und kann nicht geändert werden.
- {{jsxref("ArrayBuffer.prototype.resizable")}}
  - : Nur lesbar. Gibt `true` zurück, wenn der `ArrayBuffer` größenänderbar ist, oder `false`, wenn nicht.
- `ArrayBuffer.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"ArrayBuffer"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("ArrayBuffer.prototype.resize()")}}
  - : Ändert die Größe des `ArrayBuffer` auf die angegebene Größe, in Bytes.
- {{jsxref("ArrayBuffer.prototype.slice()")}}
  - : Gibt einen neuen `ArrayBuffer` zurück, dessen Inhalt eine Kopie der Bytes dieses `ArrayBuffer` von `begin` (einschließlich) bis `end` (ausschließlich) ist. Wenn `begin` oder `end` negativ ist, bezieht es sich auf einen Index vom Ende des Arrays, anstatt vom Anfang.
- {{jsxref("ArrayBuffer.prototype.transfer()")}}
  - : Erstellt einen neuen `ArrayBuffer` mit demselben Byteinhalt wie dieser Puffer, trennt dann diesen Puffer ab.
- {{jsxref("ArrayBuffer.prototype.transferToFixedLength()")}}
  - : Erstellt einen neuen nicht größenänderbaren `ArrayBuffer` mit demselben Byteinhalt wie dieser Puffer, trennt dann diesen Puffer ab.

## Beispiele

### Erstellen eines ArrayBuffer

In diesem Beispiel erstellen wir einen 8-Byte-Puffer mit einer {{jsxref("Int32Array")}}-Ansicht, die auf diesen Puffer verweist:

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
- [Leitfaden zu JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("SharedArrayBuffer")}}
- [RangeError: ungültige Array-Länge](/de/docs/Web/JavaScript/Reference/Errors/Invalid_array_length)
