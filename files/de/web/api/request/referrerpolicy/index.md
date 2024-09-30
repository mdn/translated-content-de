---
title: "Request: referrerPolicy-Eigenschaft"
short-title: referrerPolicy
slug: Web/API/Request/referrerPolicy
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("Fetch API")}}

Die schreibgeschützte Eigenschaft **`referrerPolicy`** der
[`Request`](/de/docs/Web/API/Request)-Schnittstelle gibt die Referrer-Policy zurück, die bestimmt, welche
Referrer-Informationen, die im {{HTTPHeader("Referer")}}-Header gesendet werden, mit der Anfrage
eingeschlossen werden sollen.

## Wert

Ein Zeichenfolgenwert, der die `referrerPolicy` der Anfrage darstellt. Für
weitere Informationen und mögliche Werte siehe die Seite zum {{HTTPHeader("Referrer-Policy")}}-HTTP-Header.

## Beispiele

Im folgenden Beispiel erstellen wir eine neue Anfrage mit dem
[`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor (für eine Bilddatei im gleichen Verzeichnis wie
das Skript) und speichern die Anfrage-Referrer-Policy in einer Variablen:

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
