---
title: "TextEncoder: encode() Methode"
short-title: encode()
slug: Web/API/TextEncoder/encode
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("Encoding API")}}

Die **`TextEncoder.encode()`**-Methode nimmt einen String als Eingabe und gibt ein {{jsxref("Global_Objects/Uint8Array", "Uint8Array")}} zurück, das den im Parameter angegebenen Text enthält, kodiert mit der spezifischen Methode für dieses {{domxref("TextEncoder")}}-Objekt.

## Syntax

```js-nolint
encode(string)
```

### Parameter

- `string`
  - : Ein String, der den zu kodierenden Text enthält.

### Rückgabewert

Ein {{jsxref("Uint8Array")}}-Objekt.

## Beispiele

```html
<p class="source">This is a sample paragraph.</p>
<p class="result">Encoded result:</p>
```

```js
const sourcePara = document.querySelector(".source");
const resultPara = document.querySelector(".result");
const string = sourcePara.textContent;

const textEncoder = new TextEncoder();

let encoded = textEncoder.encode(string);
resultPara.textContent += encoded;
```

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{DOMxRef("TextEncoder")}}-Interface, zu dem es gehört.
