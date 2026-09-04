---
title: "Anfrage: textStream() Methode"
short-title: textStream()
slug: Web/API/Request/textStream
l10n:
  sourceCommit: 1bfa4c3f7895d734df516d2bc61240313397a63c
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`textStream()`**-Methode des [`Request`](/de/docs/Web/API/Request)-Interfaces gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück, der verwendet werden kann, um den Inhalt des Anfragekörpers in UTF-8-Chunks zu lesen.

Dies bietet einen einfacheren Mechanismus zum Streamen des Anfragekörpers als das Piping des [`Request.body`](/de/docs/Web/API/Request/body)-Bytestreams durch einen [`TextDecoderStream`](/de/docs/Web/API/TextDecoderStream).

> [!NOTE]
> Wenn sie auf einem `Request` mit einem Nullkörper aufgerufen wird, zum Beispiel bei einer {{httpmethod("GET")}}-Anfrage, gibt `textStream()` einen gültigen leeren Stream zurück.

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
  - : Wird ausgelöst, wenn der Anfragekörper [gestört oder gesperrt](/de/docs/Web/API/Fetch_API/Using_Fetch#locked_and_disturbed_streams) ist.

## Beispiele

### Lesen des Inhalts des Anfragekörpers als Textstream

Dieses Beispiel zeigt, wie man einen Anfragekörper als Textstream liest.

Wir erstellen eine Beispiel-`Request`, erhalten einen `ReadableStream` ihres Körpers mit `textStream()` und lesen dann den Text über einen Leser, der mit [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) erstellt wurde.

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
