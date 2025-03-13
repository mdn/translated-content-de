---
title: "Anfrage: referrerPolicy-Eigenschaft"
short-title: referrerPolicy
slug: Web/API/Request/referrerPolicy
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`referrerPolicy`**-Eigenschaft (schreibgeschützt) des
[`Request`](/de/docs/Web/API/Request)-Interfaces gibt die Referrer-Policy zurück, die festlegt, welche
Referrer-Informationen im {{HTTPHeader("Referer")}}-Header mit der Anfrage gesendet werden sollen.

## Wert

Ein String, der die `referrerPolicy` der Anfrage repräsentiert. Für
weitere Informationen und mögliche Werte siehe die Seite zum {{HTTPHeader("Referrer-Policy")}} HTTP-Header.

## Beispiele

Im folgenden Beispiel erstellen wir eine neue Anfrage mit dem
[`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor (für eine Bilddatei im gleichen Verzeichnis wie
das Skript) und speichern dann die Referrer-Policy der Anfrage in einer Variablen:

```js
const myRequest = new Request("flowers.jpg");
const myReferrer = myRequest.referrerPolicy; // returns "" by default
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
