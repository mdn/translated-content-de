---
title: "Request: redirect Eigenschaft"
short-title: redirect
slug: Web/API/Request/redirect
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`redirect`** Eigenschaft der [`Request`](/de/docs/Web/API/Request) Schnittstelle enthält den Modus, wie Weiterleitungen gehandhabt werden.

## Wert

Ein `RequestRedirect` Aufzählungswert, der einer der folgenden Strings sein kann:

- `follow`
- `error`
- `manual`

Wenn bei der Erstellung der Anfrage nicht angegeben, nimmt es den Standardwert `follow` an.

## Beispiele

Im folgenden Beispiel erstellen wir eine neue Anfrage mit dem [`Request()`](/de/docs/Web/API/Request/Request) Konstruktor (für eine Bilddatei im selben Verzeichnis wie das Skript) und speichern dann den `redirect` Wert der Anfrage in einer Variablen:

```js
const myRequest = new Request("flowers.jpg");
const myCred = myRequest.redirect;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
