---
title: "Request: method Eigenschaft"
short-title: method
slug: Web/API/Request/method
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("Fetch API")}}

Die **`method`** schreibgeschützte Eigenschaft des
[`Request`](/de/docs/Web/API/Request) Interface enthält die Methode der Anfrage (`GET`, `POST`, etc.)

## Wert

Ein {{jsxref("String")}}, der die Methode der Anfrage angibt.

## Beispiele

Im folgenden Beispiel erstellen wir eine neue Anfrage mit dem
[`Request()`](/de/docs/Web/API/Request/Request) Konstruktor (für eine Bilddatei im selben Verzeichnis wie das Skript) und speichern dann die Methode der Anfrage in einer Variablen:

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
