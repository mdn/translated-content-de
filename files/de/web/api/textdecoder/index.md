---
title: TextDecoder
slug: Web/API/TextDecoder
l10n:
  sourceCommit: ccd1540ad8c51242b318bf437dfabe2e5315b3fa
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Die **`TextDecoder`**-Schnittstelle repräsentiert einen Decoder für eine spezifische Textkodierung, wie z.B. `UTF-8`, `ISO-8859-2` oder `GBK`. Ein Decoder nimmt ein Byte-Array als Eingabe und gibt einen JavaScript-String zurück.

## Konstruktor

- [`TextDecoder()`](/de/docs/Web/API/TextDecoder/TextDecoder)
  - : Erstellt und gibt einen neuen `TextDecoder` zurück.

## Instanz-Eigenschaften

_Die `TextDecoder`-Schnittstelle erbt keine Eigenschaften._

- [`TextDecoder.encoding`](/de/docs/Web/API/TextDecoder/encoding) {{ReadOnlyInline}}
  - : Ein String, der den Namen des Zeichencodierungssystems enthält, das dieser `TextDecoder` verwenden wird.
- [`TextDecoder.fatal`](/de/docs/Web/API/TextDecoder/fatal) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob der Fehlermodus fatal ist.
- [`TextDecoder.ignoreBOM`](/de/docs/Web/API/TextDecoder/ignoreBOM) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die [Byte-Order-Markierung](https://www.w3.org/International/questions/qa-byte-order-mark) ignoriert wird.

## Instanz-Methoden

_Die `TextDecoder`-Schnittstelle erbt keine Methoden._

- [`TextDecoder.decode()`](/de/docs/Web/API/TextDecoder/decode)
  - : Dekodiert die gegebenen Bytes in einen JavaScript-String und gibt ihn zurück.

## Beispiele

### Dekodieren von UTF-8-Text

Dieses Beispiel zeigt, wie die UTF-8-Kodierung des Zeichens "𠮷" dekodiert wird.

```html
<button id="decode">Decode</button>
<button id="reset">Reset</button>
<div id="output"></div>
```

```css hidden
div {
  margin: 1rem 0;
}
```

```js
const utf8decoder = new TextDecoder(); // default 'utf-8'
const encodedText = new Uint8Array([240, 160, 174, 183]);

const output = document.querySelector("#output");
const decodeButton = document.querySelector("#decode");
decodeButton.addEventListener("click", () => {
  output.textContent = utf8decoder.decode(encodedText);
});

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
  window.location.reload();
});
```

{{embedlivesample("Decoding UTF-8 text")}}

### Dekodieren von nicht-UTF8-Text

In diesem Beispiel dekodieren wir den russischen Text "Привет, мир!", was "Hallo, Welt." bedeutet. In unserem [`TextDecoder()`](/de/docs/Web/API/TextDecoder/TextDecoder)-Konstruktor spezifizieren wir die Windows-1251-Zeichencodierung.

```html
<button id="decode">Decode</button>
<button id="reset">Reset</button>
<div id="decoded"></div>
```

```css hidden
div {
  margin: 1rem 0;
}
```

```js
const win1251decoder = new TextDecoder("windows-1251");
const encodedText = new Uint8Array([
  207, 240, 232, 226, 229, 242, 44, 32, 236, 232, 240, 33,
]);

const decoded = document.querySelector("#decoded");
const decodeButton = document.querySelector("#decode");
decodeButton.addEventListener("click", () => {
  decoded.textContent = win1251decoder.decode(encodedText);
});

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
  window.location.reload();
});
```

{{embedlivesample("Decoding non-UTF8 text")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`TextEncoder`](/de/docs/Web/API/TextEncoder)-Schnittstelle, die die umgekehrte Operation beschreibt.
