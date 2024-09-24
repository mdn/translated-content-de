---
title: "TextEncoderStream: TextEncoderStream()-Konstruktor"
short-title: TextEncoderStream()
slug: Web/API/TextEncoderStream/TextEncoderStream
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("Encoding API")}}

Der **`TextEncoderStream()`**-Konstruktor erstellt ein neues {{domxref("TextEncoderStream")}}-Objekt, das verwendet wird, um einen Strom von Zeichenfolgen in Bytes unter Verwendung der UTF-8-Codierung zu konvertieren.

## Syntax

```js-nolint
new TextEncoderStream()
```

### Parameter

Keine.

## Beispiele

In diesem Beispiel wird ein `TextEncoderStream` erstellt und verwendet, um einen Textstrom hochzuladen.

```js
const body = textStream.pipeThrough(new TextEncoderStream());
fetch("/dest", {
  method: "POST",
  body,
  headers: { "Content-Type": "text/plain; charset=UTF-8" },
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
