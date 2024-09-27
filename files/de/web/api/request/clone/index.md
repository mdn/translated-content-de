---
title: "Request: clone() Methode"
short-title: clone()
slug: Web/API/Request/clone
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("Fetch API")}}

Die **`clone()`** Methode der [`Request`](/de/docs/Web/API/Request) Schnittstelle erstellt eine Kopie des aktuellen `Request` Objekts.

Wie die zugrundeliegende [`ReadableStream.tee`](/de/docs/Web/API/ReadableStream/tee) API,
signalisiert der [`body`](/de/docs/Web/API/Request/body) eines geklonten `Response`
Rückstaudruck mit der Geschwindigkeit des _schnelleren_ Verbrauchers der beiden bodies,
und nicht gelesene Daten werden intern im langsamer verbrauchten `body`
ohne jegliche Begrenzung oder Rückstaudruck in eine Warteschlange gestellt.
Seien Sie vorsichtig, wenn Sie einen `Request` aus einem Stream konstruieren und ihn dann `clone`.

`clone()` löst einen {{jsxref("TypeError")}} aus, wenn der Anforderungskörper bereits verwendet wurde. Tatsächlich besteht der Hauptgrund für die Existenz von `clone()` darin, die mehrfache Verwendung von body-Objekten zu ermöglichen (wenn sie nur einmal verwendet werden können).

Wenn Sie beabsichtigen, die Anforderung zu ändern, sollten Sie den [`Request`](/de/docs/Web/API/Request) Konstruktor bevorzugen.

## Syntax

```js-nolint
clone()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Request`](/de/docs/Web/API/Request) Objekt, das eine exakte Kopie des `Request` ist, auf dem `clone()` aufgerufen wurde.

## Beispiele

Im folgenden Beispiel erstellen wir eine neue Anfrage mit dem [`Request()`](/de/docs/Web/API/Request/Request) Konstruktor (für eine Bilddatei im selben Verzeichnis wie das Skript), und klonen dann die Anfrage.

```js
const myRequest = new Request("flowers.jpg");
const newRequest = myRequest.clone(); // a copy of the request is now stored in newRequest
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
