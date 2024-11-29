---
title: "Anforderung: clone()-Methode"
short-title: clone()
slug: Web/API/Request/clone
l10n:
  sourceCommit: 5045ba92ac9503b2a00ec85efae4b7d613a64b58
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`clone()`**-Methode der [`Request`](/de/docs/Web/API/Request)-Schnittstelle erstellt eine Kopie des aktuellen `Request`-Objekts.

Ähnlich wie die zugrunde liegende [`ReadableStream.tee`](/de/docs/Web/API/ReadableStream/tee)-API wird das [`body`](/de/docs/Web/API/Request/body) einer geklonten `Response` den `backpressure`-Rückstau mit der Geschwindigkeit des _schnelleren_ Verbrauchers der beiden Bodies signalisieren, und nicht gelesene Daten werden intern beim langsamer verbrauchten `body` eingereiht, ohne jegliche Begrenzung oder Rückstau. Seien Sie vorsichtig, wenn Sie einen `Request` aus einem Stream erstellen und ihn dann `clone`.

`clone()` wirft einen {{jsxref("TypeError")}}, wenn der Anforderungskörper bereits verwendet wurde. Tatsächlich existiert `clone()` hauptsächlich, um die mehrfache Verwendung von Body-Objekten zu ermöglichen (wenn diese nur einmal verwendet werden dürfen).

Wenn Sie beabsichtigen, die Anforderung zu ändern, ziehen Sie möglicherweise den [`Request`](/de/docs/Web/API/Request)-Konstruktor vor.

## Syntax

```js-nolint
clone()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Request`](/de/docs/Web/API/Request)-Objekt, das eine genaue Kopie des `Request` ist, auf dem `clone()` aufgerufen wurde.

## Beispiele

Im folgenden Ausschnitt erstellen wir eine neue Anfrage mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor (für eine Bilddatei im selben Verzeichnis wie das Skript) und klonen dann die Anfrage.

```js
const myRequest = new Request("flowers.jpg");
const newRequest = myRequest.clone(); // a copy of the request is now stored in newRequest
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
