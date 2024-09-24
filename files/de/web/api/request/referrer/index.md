---
title: "Request: referrer-Eigenschaft"
short-title: referrer
slug: Web/API/Request/referrer
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Fetch API")}}

Die schreibgeschützte **`referrer`**-Eigenschaft der
{{domxref("Request")}}-Schnittstelle wird vom User-Agent festgelegt und gibt den Referrer der Anfrage an (z.B. `client`, `no-referrer` oder eine URL).

> [!NOTE]
> Wenn der Wert von `referrer` `no-referrer` ist,
> gibt er einen leeren String zurück.

## Wert

Ein String, der den Referrer der Anfrage darstellt.

## Beispiele

Im folgenden Beispiel erstellen wir eine neue Anfrage mit dem
{{domxref("Request.Request", "Request()")}}-Konstruktor (für eine Bilddatei im selben Verzeichnis wie das Skript) und speichern dann den Request-Referrer in einer Variablen:

```js
const myRequest = new Request("flowers.jpg");
const myReferrer = myRequest.referrer; // gibt standardmäßig "about:client" zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker-API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
