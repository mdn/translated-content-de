---
title: ArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Das **`ArrayBuffer`**-Objekt wird verwendet, um einen generischen, rohen binären Datenpuffer darzustellen.

Es ist ein Array von Bytes, das in anderen Sprachen oft als "Byte-Array" bezeichnet wird. Sie können den Inhalt eines `ArrayBuffer` nicht direkt manipulieren; stattdessen erstellen Sie eines der [typisierten Array-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) oder ein {{jsxref("DataView")}}-Objekt, das den Puffer in einem bestimmten Format darstellt, und verwenden dieses, um den Inhalt des Puffers zu lesen und zu schreiben.

Der [`ArrayBuffer()`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer)-Konstruktor erstellt einen neuen `ArrayBuffer` mit der angegebenen Länge in Bytes. Sie können auch einen Array-Puffer aus bestehenden Daten erhalten, z. B. aus einem {{Glossary("Base64", "Base64")}}-String oder [aus einer lokalen Datei](/de/docs/Web/API/FileReader/readAsArrayBuffer).

`ArrayBuffer` ist ein [transferierbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

## Beschreibung

### Resizing von ArrayBuffers

`ArrayBuffer`-Objekte können durch Hinzufügen der Option `maxByteLength` beim Aufruf des {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer()")}}-Konstruktors vergrößerbar gemacht werden. Sie können abfragen, ob ein `ArrayBuffer` vergrößerbar ist und wie groß seine maximale Größe ist, indem Sie auf seine {{jsxref("ArrayBuffer/resizable", "resizable")}}- und {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}}-Eigenschaften zugreifen. Sie können einem vergrößerbaren `ArrayBuffer` mit einem Aufruf von {{jsxref("ArrayBuffer/resize", "resize()")}} eine neue Größe zuweisen. Neue Bytes werden auf 0 initialisiert.

Diese Funktionen machen das Vergrößern von `ArrayBuffer`s effizienter — andernfalls müssten Sie eine Kopie des Puffers mit neuer Größe erstellen. Außerdem wird JavaScript in dieser Hinsicht mit WebAssembly gleichgestellt (Wasm lineare Speicher können mit [`WebAssembly.Memory.prototype.grow()`](/de/docs/WebAssembly/JavaScript_interface/Memory/grow) vergrößert werden).

### Übertragen von ArrayBuffers

`ArrayBuffer`-Objekte können zwischen verschiedenen Ausführungskontexten, wie [Web Workers](/de/docs/Web/API/Web_Workers_API) oder [Service Workers](/de/docs/Web/API/Service_Worker_API), unter Verwendung des [strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) übertragen werden. Dies erfolgt durch die Übergabe des `ArrayBuffer` als [transferierbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects) in einem Aufruf von [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage) oder [`ServiceWorker.postMessage()`](/de/docs/Web/API/ServiceWorker/postMessage). In purem JavaScript können Sie auch das Eigentum des Speichers von einem `ArrayBuffer` zu einem anderen mit seinen {{jsxref("ArrayBuffer/transfer", "transfer()")}} oder {{jsxref("ArrayBuffer/transferToFixedLength", "transferToFixedLength()")}}-Methoden übertragen.

Wenn ein `ArrayBuffer` übertragen wird, wird seine ursprüngliche Kopie _abgetrennt_ — das bedeutet, sie ist nicht mehr nutzbar. Zu jedem Zeitpunkt wird es nur eine Kopie des `ArrayBuffer` geben, die tatsächlich Zugriff auf den zugrunde liegenden Speicher hat. Abgetrennte Buffer verhalten sich folgendermaßen:

- {{jsxref("ArrayBuffer/byteLength", "byteLength")}} wird 0 (sowohl im Puffer als auch in den zugehörigen typisierten Array-Ansichten).
- Methoden, wie {{jsxref("ArrayBuffer/resize", "resize()")}} und {{jsxref("ArrayBuffer/slice", "slice()")}}, lösen einen {{jsxref("TypeError")}} aus, wenn sie aufgerufen werden. Die Methoden der assoziierten typisierten Array-Ansichten werfen ebenfalls einen `TypeError`.

Sie können überprüfen, ob ein `ArrayBuffer` abgetrennt ist, anhand seiner {{jsxref("ArrayBuffer/detached", "detached")}}-Eigenschaft.

## Konstruktor

- {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer()")}}
  - : Erstellt ein neues `ArrayBuffer`-Objekt.

## Statische Eigenschaften

- [`ArrayBuffer[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/Symbol.species)
  - : Die Konstruktionsfunktion, die verwendet wird, um abgeleitete Objekte zu erstellen.

## Statische Methoden

- {{jsxref("ArrayBuffer.isView()")}}
  - : Gibt `true` zurück, wenn `arg` eine der ArrayBuffer-Ansichten ist, wie z. B. [typisierte Array-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) oder ein {{jsxref("DataView")}}. Gibt ansonsten `false` zurück.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `ArrayBuffer.prototype` definiert und werden von allen `ArrayBuffer`-Instanzen geteilt.

- {{jsxref("ArrayBuffer.prototype.byteLength")}}
  - : Die Größe, in Bytes, des `ArrayBuffer`. Diese wird beim Erstellen des Arrays festgelegt und kann nur geändert werden, wenn der `ArrayBuffer` vergrößerbar ist, mit der Methode {{jsxref("ArrayBuffer.prototype.resize()")}}.
- {{jsxref("Object/constructor", "ArrayBuffer.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanzobjekt erstellt hat. Für `ArrayBuffer`-Instanzen ist der Anfangswert der {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer")}}-Konstruktor.
- {{jsxref("ArrayBuffer.prototype.detached")}}
  - : Nur-Lesen. Gibt `true` zurück, wenn der `ArrayBuffer` abgetrennt (übertragen) wurde, ansonsten `false`.
- {{jsxref("ArrayBuffer.prototype.maxByteLength")}}
  - : Die nur-lesbare maximale Länge, in Bytes, auf die der `ArrayBuffer` vergrößert werden kann. Diese wird beim Erstellen des Arrays festgelegt und kann nicht geändert werden.
- {{jsxref("ArrayBuffer.prototype.resizable")}}
  - : Nur-Lesen. Gibt `true` zurück, wenn der `ArrayBuffer` vergrößerbar ist, ansonsten `false`.
- `ArrayBuffer.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"ArrayBuffer"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("ArrayBuffer.prototype.resize()")}}
  - : Ändert die Größe des `ArrayBuffer` auf die angegebene Größe, in Bytes.
- {{jsxref("ArrayBuffer.prototype.slice()")}}
  - : Gibt einen neuen `ArrayBuffer` zurück, dessen Inhalt eine Kopie der Bytes dieses `ArrayBuffer` von `begin` (inclusive) bis `end` (exklusiv) ist. Wenn entweder `begin` oder `end` negativ ist, bezieht es sich auf einen Index vom Ende des Arrays, im Gegensatz zum Anfang.
- {{jsxref("ArrayBuffer.prototype.transfer()")}}
  - : Erstellt einen neuen `ArrayBuffer` mit demselben Byteinhalt wie dieser Puffer und trennt dann diesen Puffer ab.
- {{jsxref("ArrayBuffer.prototype.transferToFixedLength()")}}
  - : Erstellt einen neuen, nicht vergrößerbaren `ArrayBuffer` mit demselben Byteinhalt wie dieser Puffer und trennt dann diesen Puffer ab.

## Beispiele

### Erstellen eines ArrayBuffers

In diesem Beispiel erstellen wir einen 8-Byte-Puffer mit einer {{jsxref("Int32Array")}}-Ansicht, die sich auf den Puffer bezieht:

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
