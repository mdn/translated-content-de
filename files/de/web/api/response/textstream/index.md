---
title: "Antwort: textStream() Methode"
short-title: textStream()
slug: Web/API/Response/textStream
l10n:
  sourceCommit: 1bfa4c3f7895d734df516d2bc61240313397a63c
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`textStream()`** Methode der [`Response`](/de/docs/Web/API/Response) Schnittstelle gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück, der verwendet werden kann, um die Inhalte des Antwortkörpers in UTF-8-Blöcken zu lesen.

Dies bietet einen einfacheren Mechanismus zum Streamen des Antwortkörpers als das Durchleiten des [`Response.body`](/de/docs/Web/API/Response/body) Bytestreams durch einen [`TextDecoderStream`](/de/docs/Web/API/TextDecoderStream).

> [!NOTE]
> Wenn die Methode bei einer `Response` mit einem Nullkörper aufgerufen wird, beispielsweise bei einer {{httpstatus(204)}} Antwort, gibt `textStream()` einen gültigen leeren Stream zurück.

## Syntax

```js-nolint
textStream()
```

### Parameter

Keine.

### Rückgabewert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn der Antwortkörper [gestört oder gesperrt](/de/docs/Web/API/Fetch_API/Using_Fetch#locked_and_disturbed_streams) ist.

## Beispiele

### Lesen des Inhalts des Antwortkörpers als Textstrom

Dieses Beispiel zeigt, wie man einen Antwortkörper als Textstrom liest.

Wir verwenden [`fetch()`](/de/docs/Web/API/Window/fetch), um eine URL abzurufen und eine `Response` zu erhalten. Anschließend erhalten wir einen `ReadableStream` von dessen Körper mit `textStream()` und lesen den Text über einen Leser, der mit [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) erstellt wurde.

```js
const pElem = document.querySelector("p");

async function streamResponseText(url) {
  const response = await fetch(url);
  const textStream = response.textStream();
  // instead of
  // const textStream = response.body.pipeThrough(new TextDecoderStream());

  const reader = textStream.getReader();

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    pElem.textContent += value;
  }
}

streamResponseText("https://www.example.com");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ReadableStream`](/de/docs/Web/API/ReadableStream)
- [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader)
- [`Request.body`](/de/docs/Web/API/Request/body)
- [`Request.textStream()`](/de/docs/Web/API/Request/textStream)
