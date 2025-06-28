---
title: "TextEncoder: encode() Methode"
short-title: encode()
slug: Web/API/TextEncoder/encode
l10n:
  sourceCommit: ccd1540ad8c51242b318bf437dfabe2e5315b3fa
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Die **`TextEncoder.encode()`** Methode nimmt einen String als Eingabe und gibt ein {{jsxref("Global_Objects/Uint8Array", "Uint8Array")}} zurück, das den String enthält, kodiert mit {{Glossary("UTF-8", "UTF-8")}}.

## Syntax

```js-nolint
encode(string)
```

### Parameter

- `string`
  - : Ein String, der den zu kodierenden Text enthält.

### Rückgabewert

Ein {{jsxref("Uint8Array")}} Objekt, das die UTF-8-Kodierung des Eingabestrings enthält.

## Beispiele

```html
<p class="source">Sample paragraph.</p>
<p class="result">Encoded result:</p>
```

```js
const sourcePara = document.querySelector(".source");
const resultPara = document.querySelector(".result");
const string = sourcePara.textContent;

const textEncoder = new TextEncoder();

const encoded = textEncoder.encode(string);
resultPara.textContent = `${resultPara.textContent} ${encoded}`;
```

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`TextEncoder`](/de/docs/Web/API/TextEncoder) Interface, zu dem es gehört.
