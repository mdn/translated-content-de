---
title: "Response: Methode textStream()"
short-title: textStream()
slug: Web/API/Response/textStream
l10n:
  sourceCommit: ad1fac9d8dd0c9ab8f560e98c5c923559617ba54
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die Methode **`textStream()`** des Interfaces [`Response`](/de/docs/Web/API/Response) gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück, der verwendet werden kann, um den Inhalt des Response-Body in UTF-8-Abschnitten zu lesen.

Dies bietet einen einfacheren Mechanismus zum Streamen des Response-Body, als den Byte-Stream [`Response.body`](/de/docs/Web/API/Response/body) durch einen [`TextDecoderStream`](/de/docs/Web/API/TextDecoderStream) zu leiten.

> [!NOTE]
> Wenn die Methode für eine `Response` mit einem null-Body aufgerufen wird, beispielsweise für eine {{httpstatus(204)}}-Response, gibt `textStream()` einen gültigen leeren Stream zurück.

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
  - : Wird ausgelöst, wenn der Response-Body [gestört oder gesperrt](/de/docs/Web/API/Fetch_API/Using_Fetch#locked_and_disturbed_streams) ist.

## Beispiele

### Inhalte des Response-Body als Text-Stream lesen

Dieses Beispiel zeigt, wie ein Response-Body als Text-Stream gelesen wird.

Wir verwenden [`fetch()`](/de/docs/Web/API/Window/fetch) für eine URL, um eine `Response` zu erhalten, rufen mit `textStream()` einen `ReadableStream` ihres Body ab und lesen den Text anschließend über einen Reader, der mit [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) erstellt wurde.

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
