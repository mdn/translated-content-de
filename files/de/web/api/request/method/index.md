---
title: "Request: method-Eigenschaft"
short-title: method
slug: Web/API/Request/method
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`method`**-Eigenschaft des [`Request`](/de/docs/Web/API/Request)-Interfaces enthält die Methode des Requests (`GET`, `POST`, etc.)

## Wert

Ein {{jsxref("String")}}, der die Methode des Requests angibt.

## Beispiele

Im folgenden Codeausschnitt erstellen wir einen neuen Request mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor (für eine Bilddatei im gleichen Verzeichnis wie das Skript) und speichern die Methode des Requests in einer Variable:

```js
const myRequest = new Request("flowers.jpg");
const myMethod = myRequest.method; // GET
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
