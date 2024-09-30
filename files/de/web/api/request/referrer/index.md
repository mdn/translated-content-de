---
title: "Request: referrer-Eigenschaft"
short-title: referrer
slug: Web/API/Request/referrer
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Fetch API")}}

Die schreibgeschützte **`referrer`**-Eigenschaft der [`Request`](/de/docs/Web/API/Request)-Schnittstelle wird vom Benutzeragenten als der Referrer der Anfrage festgelegt (z. B. `client`, `no-referrer` oder eine URL).

> [!NOTE]
> Wenn der Wert von `referrer` `no-referrer` ist,
> wird eine leere Zeichenkette zurückgegeben.

## Wert

Eine Zeichenkette, die den Referrer der Anfrage darstellt.

## Beispiele

Im folgenden Beispiel erstellen wir eine neue Anfrage mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor (für eine Bilddatei im gleichen Verzeichnis wie das Skript), und speichern dann den Referrer der Anfrage in einer Variablen:

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
