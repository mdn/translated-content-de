---
title: Uint8Array.prototype.setFromBase64()
short-title: setFromBase64()
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array/setFromBase64
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`setFromBase64()`** von {{jsxref("Uint8Array")}}-Instanzen füllt dieses `Uint8Array`-Objekt mit Bytes aus einem {{Glossary("Base64", "base64")}}-kodierten String und gibt ein Objekt zurück, das angibt, wie viele Zeichen gelesen und wie viele Bytes geschrieben wurden.

Diese Methode eignet sich besonders zum Füllen eines vorab zugewiesenen Array-Buffers. Wenn Sie lediglich ein neues `Uint8Array`-Objekt aus einem base64-kodierten String erstellen möchten, verwenden Sie stattdessen die statische Methode {{jsxref("Uint8Array.fromBase64()")}}.

## Syntax

```js-nolint
setFromBase64(string)
setFromBase64(string, options)
```

### Parameter

- `string`
  - : Ein base64-String, der die Bytes kodiert, die in ein `Uint8Array` geschrieben werden sollen. Für ihn gelten dieselben Anforderungen wie für den [Parameter `string` von `Uint8Array.fromBase64()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/fromBase64#string). Beachten Sie, dass der String nur bis zu der Stelle gelesen wird, an der das Array gefüllt ist. Ungültige base64-Syntax nach dieser Stelle wird daher ignoriert.
- `options` {{optional_inline}}
  - : Ein Objekt, mit dem sich die Interpretation des base64-Strings anpassen lässt. Für dieses Objekt gelten dieselben Anforderungen wie für den [Parameter `options` von `Uint8Array.fromBase64()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/fromBase64#options).

### Rückgabewert

Ein Objekt mit den folgenden Eigenschaften:

- `read`
  - : Die Anzahl der aus dem Eingabe-String gelesenen base64-Zeichen. Wenn die dekodierten Daten in das Array passen, entspricht sie der Länge des Eingabe-Strings (einschließlich Padding). Andernfalls entspricht sie der Länge bis einschließlich des letzten vollständigen Blocks aus vier Zeichen, der in das Array passt. Blöcke werden niemals aufgeteilt (da sich die übrigen Bits nicht teilweise in den base64-String „zurücklegen“ lassen, ohne ihn vollständig neu zu kodieren). Wenn der nächste Block nicht in den verbleibenden Platz des Arrays passt, wird er überhaupt nicht gelesen. Dadurch bleiben die letzten ein oder zwei Bytes des Arrays unbeschrieben.
- `written`
  - : Die Anzahl der in das `Uint8Array` geschriebenen Bytes. Sie ist niemals größer als die {{jsxref("TypedArray/byteLength", "byteLength")}} dieses `Uint8Array`.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn der Eingabe-String Zeichen außerhalb des angegebenen Alphabets enthält oder der letzte Block die Option `lastChunkHandling` nicht erfüllt.
- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Der Eingabewert ist kein String.
    - `options` ist weder ein Objekt noch `undefined`.
    - Die Optionen haben weder die erwarteten Werte noch den Wert `undefined`.

## Beispiele

### Einen base64-String dekodieren

Dieses Beispiel verwendet die Standardoptionen für `alphabet` und `lastChunkHandling`, um einen base64-String in ein vorhandenes `Uint8Array` zu dekodieren.

```js
const uint8Array = new Uint8Array(16);
const result = uint8Array.setFromBase64("PGI+ TURO PC9i Pg==");
console.log(result); // { read: 19, written: 10 }
console.log(uint8Array);
// Uint8Array(16) [60, 98, 62, 77, 68, 78, 60, 47, 98, 62, 0, 0, 0, 0, 0, 0]
```

### Einen großen String in ein kleines Array dekodieren

Wenn der String mehr Daten enthält, als das Array aufnehmen kann, schreibt die Methode nur so viele Bytes, wie in das Array passen, ohne Bits zu verwerfen.

```js
const uint8Array = new Uint8Array(8);
const result = uint8Array.setFromBase64("PGI+ TURO PC9i Pg==");
console.log(result); // { read: 9, written: 6 }
console.log(uint8Array);
// Uint8Array(8) [60, 98, 62, 77, 68, 78, 0, 0]
```

Beachten Sie, dass die letzten beiden Bytes des Arrays nicht beschrieben werden. Um diese beiden Bytes zu dekodieren, müssen mindestens drei weitere base64-Zeichen gelesen werden, die 18 Bits darstellen. Diese passen nicht in die verbleibenden zwei Bytes des Arrays. Daher können nur zwei Blöcke beziehungsweise sechs Bytes geschrieben werden.

### Daten an einem bestimmten Offset schreiben

Die Methode `setFromBase64()` beginnt immer am Anfang des `Uint8Array` zu schreiben. Wenn Sie in die Mitte des Arrays schreiben möchten, können Sie stattdessen in ein mit {{jsxref("TypedArray.prototype.subarray()")}} erstelltes Teilarray schreiben.

```js
const uint8Array = new Uint8Array(16);
// Start writing at offset 2
const result = uint8Array.subarray(2).setFromBase64("PGI+ TURO PC9i Pg==");
console.log(result); // { read: 19, written: 10 }
console.log(uint8Array);
// Uint8Array(16) [0, 0, 60, 98, 62, 77, 68, 78, 60, 47, 98, 62, 0, 0, 0, 0]
```

### Stream-Dekodierung

Dieses Beispiel wurde vom [ursprünglichen Vorschlag](https://github.com/tc39/proposal-arraybuffer-base64/blob/main/stream.mjs) übernommen und angepasst. Es ahmt die [`TextDecoder`](/de/docs/Web/API/TextDecoder)-API mit der Option `stream` nach. Beachten Sie die Verwendung von `lastChunkHandling: "stop-before-partial"` zur Behandlung unvollständiger Blöcke.

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

- [Polyfill für `Uint8Array.prototype.setFromBase64` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- [es-shims-Polyfill für `Uint8Array.prototype.setFromBase64`](https://www.npmjs.com/package/es-arraybuffer-base64)
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8Array.fromBase64()")}}
- {{jsxref("Uint8Array.prototype.toBase64()")}}
- [`Window.atob()`](/de/docs/Web/API/Window/atob)
