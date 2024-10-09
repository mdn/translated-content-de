---
title: "Request: Eigenschaft referrer"
short-title: referrer
slug: Web/API/Request/referrer
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`referrer`**-Schreibgeschützte-Eigenschaft des [`Request`](/de/docs/Web/API/Request)-Interfaces wird vom Benutzeragenten festgelegt, um den Referrer der Anforderung anzugeben. (z.B. `client`, `no-referrer` oder eine URL.)

> [!NOTE]
> Wenn der Wert von `referrer` `no-referrer` ist,
> gibt er eine leere Zeichenkette zurück.

## Wert

Eine Zeichenkette, die den Referrer der Anfrage darstellt.

## Beispiele

Im folgenden Beispiel erstellen wir eine neue Anfrage mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor (für eine Bilddatei im selben Verzeichnis wie das Skript) und speichern dann den Referrer der Anfrage in einer Variablen:

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
