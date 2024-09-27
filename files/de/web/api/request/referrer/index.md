---
title: "Request: referrer-Eigenschaft"
short-title: referrer
slug: Web/API/Request/referrer
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Fetch API")}}

Die **`referrer`** schreibgeschützte Eigenschaft des
[`Request`](/de/docs/Web/API/Request)-Interfaces wird vom User-Agent als Referrer der
Anfrage festgelegt (z.B. `client`, `no-referrer` oder eine URL).

> [!NOTE]
> Wenn der Wert von `referrer` `no-referrer` ist,
> gibt er einen leeren String zurück.

## Wert

Ein String, der den Referrer der Anfrage darstellt.

## Beispiele

Im folgenden Ausschnitt erstellen wir eine neue Anfrage mit dem
[`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor (für eine Bilddatei im selben Verzeichnis wie das Skript), dann speichert das Skript den Referrer der Anfrage in einer Variable:

```js
const myRequest = new Request("flowers.jpg");
const myReferrer = myRequest.referrer; // returns "about:client" by default
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
