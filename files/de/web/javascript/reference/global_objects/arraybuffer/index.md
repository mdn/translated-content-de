---
title: ArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Das **`ArrayBuffer`**-Objekt wird verwendet, um einen generischen Puffer für rohe binäre Daten darzustellen.

Es handelt sich um ein Byte-Array, das in anderen Sprachen oft als "Byte Array" bezeichnet wird. Sie können den Inhalt eines `ArrayBuffer` nicht direkt manipulieren; stattdessen erstellen Sie eines der [typisierten Array-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) oder ein {{jsxref("DataView")}} Objekt, das den Puffer in einem spezifischen Format darstellt und verwenden dies, um den Inhalt des Puffers zu lesen und zu schreiben.

Der [`ArrayBuffer()`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer)-Konstruktor erstellt ein neues `ArrayBuffer` mit der angegebenen Länge in Bytes. Sie können auch einen Array-Puffer aus bestehenden Daten erhalten, zum Beispiel aus einem {{Glossary("Base64", "Base64")}}-String oder [aus einer lokalen Datei](/de/docs/Web/API/FileReader/readAsArrayBuffer).

`ArrayBuffer` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

## Beschreibung

### Ändern der Größe von ArrayBuffers

`ArrayBuffer`-Objekte können durch die Angabe der Option `maxByteLength` beim Aufrufen des {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer()")}} Konstruktors vergrößerbar gemacht werden. Sie können abfragen, ob ein `ArrayBuffer` vergrößerbar ist und welche maximale Größe es hat, indem Sie auf seine {{jsxref("ArrayBuffer/resizable", "resizable")}} und {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} Eigenschaften zugreifen. Sie können einem vergrößerbaren `ArrayBuffer` mit einem {{jsxref("ArrayBuffer/resize", "resize()")}} Aufruf eine neue Größe zuweisen. Neue Bytes werden auf 0 initialisiert.

Diese Funktionen machen das Ändern der Größe von `ArrayBuffer`s effizienter — andernfalls müssen Sie eine Kopie des Puffers mit neuer Größe erstellen. Dies gibt JavaScript in dieser Hinsicht Parität mit WebAssembly (Wasm lineare Speicher können mit [`WebAssembly.Memory.prototype.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow) vergrößert werden).

### Übertragen von ArrayBuffers

`ArrayBuffer`-Objekte können zwischen verschiedenen Ausführungskontexten, wie [Web Workers](/de/docs/Web/API/Web_Workers_API) oder [Service Workers](/de/docs/Web/API/Service_Worker_API), unter Verwendung des [strukturierten Klonalalgorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) übertragen werden. Dies geschieht, indem das `ArrayBuffer` als [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects) in einem Aufruf von [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage) oder [`ServiceWorker.postMessage()`](/de/docs/Web/API/ServiceWorker/postMessage) übergeben wird. In reinem JavaScript können Sie auch die Speicherübertragung von einem `ArrayBuffer` zu einem anderen mit seinen {{jsxref("ArrayBuffer/transfer", "transfer()")}} oder {{jsxref("ArrayBuffer/transferToFixedLength", "transferToFixedLength()")}} Methoden durchführen.

Wenn ein `ArrayBuffer` übertragen wird, wird seine ursprüngliche Kopie _getrennt_ — das bedeutet, es ist nicht mehr verwendbar. Zu jedem Zeitpunkt gibt es nur eine Kopie des `ArrayBuffer`, die tatsächlich Zugriff auf den zugrunde liegenden Speicher hat. Getrennte Puffer haben die folgenden Verhaltensweisen:

- {{jsxref("ArrayBuffer/byteLength", "byteLength")}} wird 0 (sowohl im Puffer als auch in den zugehörigen typisierten Array-Ansichten).
- Methoden, wie {{jsxref("ArrayBuffer/resize", "resize()")}} und {{jsxref("ArrayBuffer/slice", "slice()")}}, werfen einen {{jsxref("TypeError")}}, wenn sie aufgerufen werden. Die Methoden der zugehörigen typisierten Array-Ansichten werfen ebenfalls einen `TypeError`.

Sie können überprüfen, ob ein `ArrayBuffer` getrennt ist, indem Sie seine {{jsxref("ArrayBuffer/detached", "detached")}} Eigenschaft prüfen.

## Konstruktor

- {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer()")}}
  - : Erstellt ein neues `ArrayBuffer`-Objekt.

## Statische Eigenschaften

- [`ArrayBuffer[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/Symbol.species)
  - : Die Konstruktionsfunktion, die verwendet wird, um abgeleitete Objekte zu erstellen.

## Statische Methoden

- {{jsxref("ArrayBuffer.isView()")}}
  - : Gibt `true` zurück, wenn `arg` eine der ArrayBuffer-Ansichten ist, wie [typisierte Array-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) oder ein {{jsxref("DataView")}}. Gibt andernfalls `false` zurück.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `ArrayBuffer.prototype` definiert und werden von allen `ArrayBuffer`-Instanzen geteilt.

- {{jsxref("ArrayBuffer.prototype.byteLength")}}
  - : Die Größe des `ArrayBuffer` in Bytes. Dies wird beim Erstellen des Arrays festgelegt und kann nur geändert werden, wenn der `ArrayBuffer` vergrößerbar ist, durch die Verwendung der {{jsxref("ArrayBuffer.prototype.resize()")}} Methode.
- {{jsxref("Object/constructor", "ArrayBuffer.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanzobjekt erstellt hat. Für `ArrayBuffer`-Instanzen ist der Initialwert der {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer")}} Konstruktor.
- {{jsxref("ArrayBuffer.prototype.detached")}}
  - : Schreibgeschützt. Gibt `true` zurück, wenn das `ArrayBuffer` getrennt (übertragen) wurde, oder `false`, wenn nicht.
- {{jsxref("ArrayBuffer.prototype.maxByteLength")}}
  - : Die schreibgeschützte maximale Länge, in Bytes, in die das `ArrayBuffer` vergrößert werden kann. Dies wird beim Erstellen des Arrays festgelegt und kann nicht geändert werden.
- {{jsxref("ArrayBuffer.prototype.resizable")}}
  - : Schreibgeschützt. Gibt `true` zurück, wenn das `ArrayBuffer` vergrößerbar ist, oder `false`, wenn nicht.
- `ArrayBuffer.prototype[Symbol.toStringTag]`
  - : Der Ausgangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"ArrayBuffer"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("ArrayBuffer.prototype.resize()")}}
  - : Ändert die Größe des `ArrayBuffer` auf die angegebene Größe in Bytes.
- {{jsxref("ArrayBuffer.prototype.slice()")}}
  - : Gibt ein neues `ArrayBuffer` zurück, dessen Inhalt eine Kopie der Bytes dieses `ArrayBuffer` von `begin` (einschließlich) bis `end` (ausschließlich) ist. Wenn entweder `begin` oder `end` negativ ist, bezieht es sich auf einen Index vom Ende des Arrays, im Gegensatz zu vom Anfang.
- {{jsxref("ArrayBuffer.prototype.transfer()")}}
  - : Erstellt ein neues `ArrayBuffer` mit demselben Byte-Inhalt wie dieser Puffer und trennt dann diesen Puffer.
- {{jsxref("ArrayBuffer.prototype.transferToFixedLength()")}}
  - : Erstellt ein neues nicht-vergrößerbares `ArrayBuffer` mit demselben Byte-Inhalt wie dieser Puffer und trennt dann diesen Puffer.

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
- [RangeError: Ungültige Array-Länge](/de/docs/Web/JavaScript/Reference/Errors/Invalid_array_length)
