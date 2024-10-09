---
title: "Request: clone()-Methode"
short-title: clone()
slug: Web/API/Request/clone
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`clone()`**-Methode der [`Request`](/de/docs/Web/API/Request)-Schnittstelle erstellt eine Kopie des aktuellen `Request`-Objekts.

Ähnlich der zugrunde liegenden [`ReadableStream.tee`](/de/docs/Web/API/ReadableStream/tee)-API,
wird der [`body`](/de/docs/Web/API/Request/body) einer geklonten `Response` den Rückdruck in der Geschwindigkeit des _schnelleren_ Verbrauchers der beiden Bodies signalisieren, und nicht gelesene Daten werden intern im langsamer konsumierten `body` ohne Begrenzung oder Rückdruck in die Warteschlange gestellt.
Vorsicht beim Erstellen eines `Request` aus einem Stream und dessen anschließenden `clone`.

`clone()` wirft einen {{jsxref("TypeError")}}, wenn der Anfragetext bereits verwendet wurde. Tatsächlich besteht der Hauptgrund für die Existenz von `clone()` darin, eine mehrfache Verwendung von Body-Objekten zu ermöglichen (wenn sie nur einmal verwendet werden können).

Wenn Sie beabsichtigen, die Anfrage zu ändern, ziehen Sie möglicherweise den [`Request`](/de/docs/Web/API/Request)-Konstruktor vor.

## Syntax

```js-nolint
clone()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Request`](/de/docs/Web/API/Request)-Objekt, das eine exakte Kopie des `Request` ist, auf dem `clone()` aufgerufen wurde.

## Beispiele

Im folgenden Beispiel erstellen wir eine neue Anfrage mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor (für eine Bilddatei im selben Verzeichnis wie das Skript) und klonen dann die Anfrage.

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
