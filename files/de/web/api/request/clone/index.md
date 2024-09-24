---
title: "Request: clone()-Methode"
short-title: clone()
slug: Web/API/Request/clone
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("Fetch API")}}

Die **`clone()`**-Methode der {{domxref("Request")}}-Schnittstelle erstellt eine Kopie des aktuellen `Request`-Objekts.

Ähnlich wie die zugrunde liegende {{domxref("ReadableStream.tee")}}-API,
signalisiert der {{domxref("Request.body", "body")}} eines geklonten `Response`
Rückstau mit der Geschwindigkeit des _schnelleren_ Verbrauchers der beiden Bodies,
und ungelesene Daten werden intern in dem langsamer konsumierten `body`
ohne jegliche Begrenzung oder Rückstau in die Warteschlange gestellt.
Seien Sie vorsichtig, wenn Sie einen `Request` aus einem Stream erstellen und ihn dann `klonen`.

`clone()` löst einen {{jsxref("TypeError")}} aus, wenn der Anforderungskörper bereits verwendet wurde. Tatsächlich ist der Hauptgrund, warum `clone()` existiert, die mehrfache Verwendung von Body-Objekten zu ermöglichen (wenn diese nur einmal verwendet werden dürfen).

Wenn Sie beabsichtigen, die Anforderung zu ändern, ziehen Sie den {{domxref("Request")}}-Konstruktor in Betracht.

## Syntax

```js-nolint
clone()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("Request")}}-Objekt, das eine exakte Kopie des `Request` ist, auf dem `clone()` aufgerufen wurde.

## Beispiele

Im folgenden Code-Snippet erstellen wir eine neue Anforderung mit dem {{domxref("Request.Request", "Request()")}}-Konstruktor (für eine Bilddatei im gleichen Verzeichnis wie das Skript) und klonen dann die Anforderung.

```js
const myRequest = new Request("flowers.jpg");
const newRequest = myRequest.clone(); // eine Kopie der Anforderung wird jetzt in newRequest gespeichert
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
