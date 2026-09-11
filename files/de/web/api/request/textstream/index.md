---
title: Methode textStream()
short-title: textStream()
slug: Web/API/Request/textStream
l10n:
  sourceCommit: ad1fac9d8dd0c9ab8f560e98c5c923559617ba54
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die Methode **`textStream()`** der Schnittstelle [`Request`](/de/docs/Web/API/Request) gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück, der verwendet werden kann, um den Inhalt des Request-Bodys stückweise als UTF-8 zu lesen.

Dies bietet einen einfacheren Mechanismus zum Streamen des Request-Bodys, als den Bytestream [`Request.body`](/de/docs/Web/API/Request/body) durch einen [`TextDecoderStream`](/de/docs/Web/API/TextDecoderStream) zu leiten.

> [!NOTE]
> Wenn `textStream()` bei einem `Request` mit einem null-Body aufgerufen wird, beispielsweise bei einer {{httpmethod("GET")}}-Request, gibt `textStream()` einen gültigen leeren Stream zurück.

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
  - : Wird ausgelöst, wenn der Request-Body [gestört oder gesperrt](/de/docs/Web/API/Fetch_API/Using_Fetch#locked_and_disturbed_streams) ist.

## Beispiele

### Inhalte des Request-Bodys als Textstream lesen

Dieses Beispiel zeigt, wie ein Request-Body als Textstream gelesen wird.

Wir erstellen einen Beispiel-`Request`, rufen mithilfe von `textStream()` einen `ReadableStream` seines Bodys ab und lesen anschließend den Text über einen mit [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) erstellten Reader.

```js
const pElem = document.querySelector("p");

const req = new Request("https://example.com", {
  method: "POST",
  body: '{"hello": "world"}',
});

async function streamRequestText(request) {
  const textStream = request.textStream();
  // instead of
  // const textStream = request.body.pipeThrough(new TextDecoderStream());

  const reader = textStream.getReader();

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    pElem.textContent += value;
  }
}

streamRequestText(req);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ReadableStream`](/de/docs/Web/API/ReadableStream)
- [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader)
- [`Response.body`](/de/docs/Web/API/Response/body)
- [`Response.textStream()`](/de/docs/Web/API/Response/textStream)
