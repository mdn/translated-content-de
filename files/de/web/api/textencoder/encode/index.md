---
title: "TextEncoder: encode() Methode"
short-title: encode()
slug: Web/API/TextEncoder/encode
l10n:
  sourceCommit: 4094b9256ace2d7d805abb6b536e23079aaf9170
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Die **`TextEncoder.encode()`** Methode nimmt einen String als Eingabe und gibt ein {{jsxref("Global_Objects/Uint8Array", "Uint8Array")}} zurück, das den im Parameter angegebenen Text enthält und mit der spezifischen Methode für das [`TextEncoder`](/de/docs/Web/API/TextEncoder) Objekt kodiert ist.

## Syntax

```js-nolint
encode(string)
```

### Parameter

- `string`
  - : Ein String, der den zu kodierenden Text enthält.

### Rückgabewert

Ein {{jsxref("Uint8Array")}} Objekt.

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

- Die [`TextEncoder`](/de/docs/Web/API/TextEncoder) Schnittstelle, zu der es gehört.
