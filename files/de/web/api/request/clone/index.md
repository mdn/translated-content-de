---
title: "Anfrage: clone()-Methode"
short-title: clone()
slug: Web/API/Request/clone
l10n:
  sourceCommit: c1f184af3cf40beadd723ebb8dae67eeeabc78cb
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`clone()`**-Methode der [`Request`](/de/docs/Web/API/Request) Schnittstelle erstellt eine Kopie des aktuellen `Request`-Objekts.

Ähnlich wie die zugrunde liegende [`ReadableStream.tee`](/de/docs/Web/API/ReadableStream/tee)-API signalisiert der [`body`](/de/docs/Web/API/Request/body) eines geklonten `Request` Rückstau mit der Geschwindigkeit des _schnelleren_ Verbrauchers der beiden `body`-Elemente, und ungelesene Daten werden intern im langsamer konsumierten `body` ohne jegliche Begrenzung oder Rückstau eingereiht. Seien Sie vorsichtig, wenn Sie einen `Request` aus einem Stream konstruieren und ihn dann `clone`.

`clone()` wirft einen {{jsxref("TypeError")}}, wenn der Anforderungskörper bereits verwendet wurde. Tatsächlich existiert `clone()` hauptsächlich, um mehrere Verwendungen von `body`-Objekten zu ermöglichen (falls sie nur einmal verwendet werden können).

Wenn Sie die Anfrage ändern möchten, ziehen Sie es vor, den [`Request`](/de/docs/Web/API/Request)-Konstruktor zu verwenden.

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

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP Access Control (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
