---
title: "Request: referrerPolicy-Eigenschaft"
short-title: referrerPolicy
slug: Web/API/Request/referrerPolicy
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`referrerPolicy`** des [`Request`](/de/docs/Web/API/Request)-Interfaces gibt die Referrer-Richtlinie zurück, die bestimmt, welche Referrer-Informationen in der {{HTTPHeader("Referer")}}-Header mit der Anfrage gesendet werden sollen.

## Wert

Ein String, der die `referrerPolicy` der Anfrage repräsentiert. Weitere Informationen und mögliche Werte finden Sie auf der Seite zum {{HTTPHeader("Referrer-Policy")}} HTTP-Header.

## Beispiele

Im folgenden Ausschnitt erstellen wir eine neue Anfrage mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor (für eine Bilddatei im gleichen Verzeichnis wie das Skript) und speichern dann die Referrer-Richtlinie der Anfrage in einer Variablen:

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
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
