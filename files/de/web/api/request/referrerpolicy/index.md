---
title: "Request: referrerPolicy-Eigenschaft"
short-title: referrerPolicy
slug: Web/API/Request/referrerPolicy
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("Fetch API")}}

Die **`referrerPolicy`** schreibgeschützte Eigenschaft der
[`Request`](/de/docs/Web/API/Request)-Schnittstelle gibt die Referrer-Policy zurück, die bestimmt, welche
Referrer-Informationen im {{HTTPHeader("Referer")}}-Header mit der Anfrage gesendet werden sollen.

## Wert

Ein String, der die `referrerPolicy` der Anfrage repräsentiert. Für
weitere Informationen und mögliche Werte siehe die Seite zum {{HTTPHeader("Referrer-Policy")}} HTTP-Header.

## Beispiele

Im folgenden Beispiel erstellen wir eine neue Anfrage mithilfe des
[`Request()`](/de/docs/Web/API/Request/Request)-Konstruktors (für eine Bilddatei im selben Verzeichnis wie
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
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
