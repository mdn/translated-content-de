---
title: ArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Das **`ArrayBuffer`**-Objekt repräsentiert einen generischen Puffer für rohe Binärdaten.

Es handelt sich um ein Array aus Bytes, das in anderen Sprachen häufig als „Byte-Array“ bezeichnet wird. Sie können den Inhalt eines `ArrayBuffer` nicht direkt verändern. Stattdessen erstellen Sie eines der [Typed-Array-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) oder ein {{jsxref("DataView")}}-Objekt, das den Puffer in einem bestimmten Format darstellt, und verwenden es, um den Pufferinhalt zu lesen und zu schreiben.

Der Konstruktor [`ArrayBuffer()`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer) erstellt einen neuen `ArrayBuffer` mit der angegebenen Länge in Bytes. Sie können einen Array-Puffer auch aus vorhandenen Daten erhalten, beispielsweise aus einem {{Glossary("Base64", "Base64")}}-String oder [aus einer lokalen Datei](/de/docs/Web/API/FileReader/readAsArrayBuffer).

`ArrayBuffer` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

## Beschreibung

### Größe von ArrayBuffers ändern

`ArrayBuffer`-Objekte können größenveränderbar gemacht werden, indem beim Aufruf des Konstruktors {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer()")}} die Option `maxByteLength` angegeben wird. Über die Eigenschaften {{jsxref("ArrayBuffer/resizable", "resizable")}} und {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} können Sie abfragen, ob ein `ArrayBuffer` größenveränderbar ist und wie groß er maximal sein kann. Mit einem Aufruf von {{jsxref("ArrayBuffer/resize", "resize()")}} können Sie einem größenveränderbaren `ArrayBuffer` eine neue Größe zuweisen. Neue Bytes werden mit 0 initialisiert.

Diese Funktionen machen die Größenänderung von `ArrayBuffer`-Objekten effizienter – andernfalls müssten Sie eine Kopie des Puffers mit einer neuen Größe erstellen. Damit bietet JavaScript in dieser Hinsicht auch dieselben Möglichkeiten wie WebAssembly (der lineare Speicher von Wasm kann mit [`WebAssembly.Memory.prototype.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow) vergrößert werden).

### ArrayBuffers übertragen

`ArrayBuffer`-Objekte können mithilfe des [Algorithmus für strukturiertes Klonen](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) zwischen verschiedenen Ausführungskontexten wie [Web Workers](/de/docs/Web/API/Web_Workers_API) oder [Service Workers](/de/docs/Web/API/Service_Worker_API) übertragen werden. Dazu wird der `ArrayBuffer` bei einem Aufruf von [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage) oder [`ServiceWorker.postMessage()`](/de/docs/Web/API/ServiceWorker/postMessage) als [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects) übergeben. In reinem JavaScript können Sie die Eigentümerschaft am Speicher außerdem mit der Methode {{jsxref("ArrayBuffer/transfer", "transfer()")}} oder {{jsxref("ArrayBuffer/transferToFixedLength", "transferToFixedLength()")}} von einem `ArrayBuffer` auf einen anderen übertragen.

Wenn ein `ArrayBuffer` übertragen wird, wird seine ursprüngliche Kopie _abgetrennt_ – das bedeutet, dass sie nicht mehr verwendet werden kann. Zu jedem Zeitpunkt gibt es nur eine Kopie des `ArrayBuffer`, die tatsächlich Zugriff auf den zugrunde liegenden Speicher hat. Abgetrennte Puffer verhalten sich wie folgt:

- {{jsxref("ArrayBuffer/byteLength", "byteLength")}} wird zu 0 (sowohl für den Puffer als auch für die zugehörigen Typed-Array-Ansichten).
- Methoden wie {{jsxref("ArrayBuffer/resize", "resize()")}} und {{jsxref("ArrayBuffer/slice", "slice()")}} lösen bei einem Aufruf einen {{jsxref("TypeError")}} aus. Auch die Methoden der zugehörigen Typed-Array-Ansichten lösen einen `TypeError` aus.

Anhand der Eigenschaft {{jsxref("ArrayBuffer/detached", "detached")}} können Sie prüfen, ob ein `ArrayBuffer` abgetrennt wurde.

## Konstruktor

- {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer()")}}
  - : Erstellt ein neues `ArrayBuffer`-Objekt.

## Statische Eigenschaften

- [`ArrayBuffer[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/Symbol.species)
  - : Die Konstruktorfunktion, mit der abgeleitete Objekte erstellt werden.

## Statische Methoden

- {{jsxref("ArrayBuffer.isView()")}}
  - : Gibt `true` zurück, wenn `arg` eine der ArrayBuffer-Ansichten ist, beispielsweise eines der [Typed-Array-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) oder ein {{jsxref("DataView")}}. Andernfalls wird `false` zurückgegeben.

## Instanzeigenschaften

Diese Eigenschaften sind auf `ArrayBuffer.prototype` definiert und werden von allen `ArrayBuffer`-Instanzen gemeinsam genutzt.

- {{jsxref("ArrayBuffer.prototype.byteLength")}}
  - : Die Größe des `ArrayBuffer` in Bytes. Sie wird beim Erstellen des Arrays festgelegt und kann nur mit der Methode {{jsxref("ArrayBuffer.prototype.resize()")}} geändert werden, wenn der `ArrayBuffer` größenveränderbar ist.
- {{jsxref("Object/constructor", "ArrayBuffer.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `ArrayBuffer`-Instanzen ist der Anfangswert der Konstruktor {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer")}}.
- {{jsxref("ArrayBuffer.prototype.detached")}}
  - : Schreibgeschützt. Gibt `true` zurück, wenn der `ArrayBuffer` abgetrennt (übertragen) wurde, andernfalls `false`.
- {{jsxref("ArrayBuffer.prototype.maxByteLength")}}
  - : Die schreibgeschützte maximale Länge in Bytes, auf die der `ArrayBuffer` vergrößert werden kann. Sie wird beim Erstellen des Arrays festgelegt und kann nicht geändert werden.
- {{jsxref("ArrayBuffer.prototype.resizable")}}
  - : Schreibgeschützt. Gibt `true` zurück, wenn die Größe des `ArrayBuffer` geändert werden kann, andernfalls `false`.
- `ArrayBuffer.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der Eigenschaft [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) ist der String `"ArrayBuffer"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("ArrayBuffer.prototype.resize()")}}
  - : Ändert die Größe des `ArrayBuffer` auf die angegebene Anzahl von Bytes.
- {{jsxref("ArrayBuffer.prototype.slice()")}}
  - : Gibt einen neuen `ArrayBuffer` zurück, dessen Inhalt eine Kopie der Bytes dieses `ArrayBuffer` von `begin` (einschließlich) bis `end` (ausschließlich) ist. Ist `begin` oder `end` negativ, bezeichnet der Wert einen Index vom Ende des Arrays aus statt von dessen Anfang.
- {{jsxref("ArrayBuffer.prototype.transfer()")}}
  - : Erstellt einen neuen `ArrayBuffer` mit demselben Byte-Inhalt wie dieser Puffer und trennt anschließend diesen Puffer ab.
- {{jsxref("ArrayBuffer.prototype.transferToFixedLength()")}}
  - : Erstellt einen neuen, nicht größenveränderbaren `ArrayBuffer` mit demselben Byte-Inhalt wie dieser Puffer und trennt anschließend diesen Puffer ab.

## Beispiele

### Einen ArrayBuffer erstellen

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

- [Polyfill für `ArrayBuffer` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- [Leitfaden zu JavaScript-Typed-Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("SharedArrayBuffer")}}
- [RangeError: ungültige Array-Länge](/de/docs/Web/JavaScript/Reference/Errors/Invalid_array_length)
