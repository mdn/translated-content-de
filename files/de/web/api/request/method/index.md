---
title: "Request: method-Eigenschaft"
short-title: method
slug: Web/API/Request/method
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`method`**-Eigenschaft des
[`Request`](/de/docs/Web/API/Request)-Interfaces enthält die Methode der Anfrage (`GET`,
`POST`, etc.).

## Wert

Ein {{jsxref("String")}}, der die Methode der Anfrage angibt.

## Beispiele

Im folgenden Beispiel erstellen wir eine neue Anfrage mit dem
[`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor (für eine Bilddatei im selben Verzeichnis wie
das Skript) und speichern dann die Methode der Anfrage in einer Variable:

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
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
