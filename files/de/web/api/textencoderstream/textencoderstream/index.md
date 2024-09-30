---
title: "TextEncoderStream: TextEncoderStream() Konstruktor"
short-title: TextEncoderStream()
slug: Web/API/TextEncoderStream/TextEncoderStream
l10n:
  sourceCommit: 4094b9256ace2d7d805abb6b536e23079aaf9170
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Der **`TextEncoderStream()`** Konstruktor erstellt ein neues [`TextEncoderStream`](/de/docs/Web/API/TextEncoderStream) Objekt, das verwendet wird, um einen Strom von Zeichenketten in Bytes umzuwandeln, wobei die UTF-8-Kodierung verwendet wird.

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
