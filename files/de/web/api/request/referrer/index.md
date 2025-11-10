---
title: "Anfrage: referrer-Eigenschaft"
short-title: referrer
slug: Web/API/Request/referrer
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`referrer`** schreibgeschützte Eigenschaft des [`Request`](/de/docs/Web/API/Request)-Interfaces wird vom Benutzeragenten festgelegt, um der Referrer der Anfrage zu sein (z.B. `client`, `no-referrer` oder eine URL).

> [!NOTE]
> Wenn der Wert von `referrer` `no-referrer` ist,
> wird ein leerer String zurückgegeben.

## Wert

Ein String, der den Referrer der Anfrage repräsentiert.

## Beispiele

Im folgenden Code-Schnipsel erstellen wir eine neue Anfrage mithilfe des [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktors (für eine Bilddatei im gleichen Verzeichnis wie das Skript) und speichern dann den Anfrage-Referrer in einer Variablen:

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
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
