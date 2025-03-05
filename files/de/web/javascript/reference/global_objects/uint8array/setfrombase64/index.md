---
title: Uint8Array.prototype.setFromBase64()
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array/setFromBase64
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{JSRef}}

Die **`setFromBase64()`** Methode von {{jsxref("Uint8Array")}} Instanzen füllt dieses `Uint8Array` Objekt mit Bytes aus einem {{Glossary("Base64", "base64")}}-codierten String und gibt ein Objekt zurück, das angibt, wie viele Bytes gelesen und geschrieben wurden.

Diese Methode eignet sich am besten zum Füllen eines vorab zugewiesenen Array-Puffers. Wenn Sie einfach nur ein neues `Uint8Array` Objekt aus einem base64-codierten String erstellen möchten, verwenden Sie stattdessen die statische Methode {{jsxref("Uint8Array.fromBase64()")}}.

## Syntax

```js-nolint
setFromBase64(string)
setFromBase64(string, options)
```

### Parameter

- `string`
  - : Ein base64-codierter String, der Bytes kodiert, die in ein `Uint8Array` geschrieben werden sollen. Er hat die gleichen Anforderungen wie der [`string` Parameter von `Uint8Array.fromBase64()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/fromBase64#string). Beachten Sie, dass der String nur bis zu dem Punkt gelesen wird, an dem das Array gefüllt ist, sodass ungültige base64-Syntax danach ignoriert wird.
- `options` {{optional_inline}}
  - : Ein Objekt, das den Interpretationsprozess des base64-Strings anpasst. Es hat die gleichen Anforderungen wie der [`options` Parameter von `Uint8Array.fromBase64()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/fromBase64#options).

### Rückgabewert

Ein Objekt, das die folgenden Eigenschaften enthält:

- `read`
  - : Die Anzahl der base64-Zeichen, die aus dem Eingabestring gelesen wurden. Wenn die dekodierten Daten in das Array passen, ist dies die Länge des Eingabestrings (einschließlich Auffüllung); andernfalls ist es die Länge bis zum letzten vollständigen 4-Zeichen-Block, der in das Array passt. Blöcke werden niemals aufgeteilt (weil die verbleibenden Bits nicht teilweise "zurückgegeben" werden können, ohne sie vollständig neu zu codieren); wenn der nächste Block nicht in den verbleibenden Teil des Arrays passt, wird er vollständig nicht gelesen, was zur Folge hat, dass die letzten ein oder zwei Bytes des Arrays nicht geschrieben werden.
- `written`
  - : Die Anzahl der Bytes, die in das `Uint8Array` geschrieben wurden. Wird niemals größer sein als die {{jsxref("TypedArray/byteLength", "byteLength")}} dieses `Uint8Array`.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn der Eingabestring Zeichen enthält, die außerhalb des angegebenen Alphabets liegen, oder wenn der letzte Block die Option `lastChunkHandling` nicht erfüllt.
- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Der Eingabestring ist kein String.
    - Das `options` Objekt ist kein Objekt oder `undefined`.
    - Die Optionen sind nicht von den erwarteten Werten oder `undefined`.

## Beispiele

### Dekodierung eines base64-Strings

Dieses Beispiel verwendet die Standardoptionen `alphabet` und `lastChunkHandling`, um einen base64-String in ein bestehendes `Uint8Array` zu dekodieren.

```js
const uint8Array = new Uint8Array(16);
const result = uint8Array.setFromBase64("PGI+ TURO PC9i Pg==");
console.log(result); // { read: 19, written: 10 }
console.log(uint8Array);
// Uint8Array(16) [60, 98, 62, 77, 68, 78, 60, 47, 98, 62, 0, 0, 0, 0, 0, 0]
```

### Dekodierung eines großen Strings in ein kleines Array

Wenn der String mehr Daten enthält, als das Array aufnehmen kann, wird die Methode nur so viele Bytes schreiben, wie das Array aufnehmen kann, ohne Bits zu verwerfen.

```js
const uint8Array = new Uint8Array(8);
const result = uint8Array.setFromBase64("PGI+ TURO PC9i Pg==");
console.log(result); // { read: 9, written: 6 }
console.log(uint8Array);
// Uint8Array(8) [60, 98, 62, 77, 68, 78, 0, 0]
```

Beachten Sie, wie die letzten zwei Bytes des Arrays nicht geschrieben werden. Um diese beiden Bytes zu dekodieren, müssen wir mindestens drei weitere base64-Zeichen lesen, die 18 Bits darstellen. Diese passen nicht in die verbleibenden zwei Bytes des Arrays, sodass wir nur 2 Blöcke oder 6 Bytes schreiben können.

### Setzen von Daten an einem bestimmten Offset

Die `setFromBase64()` Methode beginnt immer mit dem Schreiben am Anfang des `Uint8Array`. Wenn Sie in die Mitte des Arrays schreiben möchten, können Sie stattdessen zu einem {{jsxref("TypedArray.prototype.subarray()")}} schreiben.

```js
const uint8Array = new Uint8Array(16);
// Start writing at offset 2
const result = uint8Array.subarray(2).setFromBase64("PGI+ TURO PC9i Pg==");
console.log(result); // { read: 19, written: 10 }
console.log(uint8Array);
// Uint8Array(16) [0, 0, 60, 98, 62, 77, 68, 78, 60, 47, 98, 62, 0, 0, 0, 0]
```

### Stream-Dekodierung

Dieses Beispiel ist an den [ursprünglichen Vorschlag](https://github.com/tc39/proposal-arraybuffer-base64/blob/main/stream.mjs) angepasst. Es imitiert die [`TextDecoder`](/de/docs/Web/API/TextDecoder) API mit der `stream` Option. Beachten Sie die Verwendung von `lastChunkHandling: "stop-before-partial"`, um unvollständige Blöcke zu behandeln.

```js
class Base64Decoder {
  #extra = "";

  decode(chunk = "", options = {}) {
    const opts = { ...options };
    // match TextEncoder API
    if (opts.stream) {
      opts.lastChunkHandling = "stop-before-partial";
    }
    chunk = this.#extra + chunk;
    this.#extra = "";
    // For simplicity, allocate new memory every time
    // the calculation below is guaranteed to be enough,
    // but may be too much if there is whitespace
    // if you're really concerned about memory, a TextDecoder style API is a bad choice
    let buffer = new Uint8Array(Math.ceil((chunk.length * 3) / 4));
    const { read, written } = buffer.setFromBase64(chunk, opts);
    buffer = buffer.subarray(0, written);
    this.#extra = chunk.slice(read);
    return buffer;
  }
}

const decoder = new Base64Decoder();

console.log(decoder.decode("SG Vsb ", { stream: true }));
// Uint8Array(3) [72, 101, 108]
console.log(decoder.decode("G8gV29ybGR ", { stream: true }));
// Uint8Array(6) [108, 111, 32, 87, 111, 114]
console.log(decoder.decode(""));
// Uint8Array(2) [108, 100]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Uint8Array.prototype.setFromBase64` in `core-js`](https://github.com/zloirock/core-js#uint8array-to--from-base64-and-hex)
- [es-shims Polyfill von `Uint8Array.prototype.setFromBase64`](https://www.npmjs.com/package/es-arraybuffer-base64)
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8Array.fromBase64()")}}
- {{jsxref("Uint8Array.prototype.toBase64()")}}
- [`Window.atob()`](/de/docs/Web/API/Window/atob)
