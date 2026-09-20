---
title: "Request: redirect-Eigenschaft"
short-title: redirect
slug: Web/API/Request/redirect
l10n:
  sourceCommit: 6e2806da0f8202df37c0ca641eab4d53a3797950
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`redirect`** des [`Request`](/de/docs/Web/API/Request)-Interfaces enthält den Modus dafür, wie Weiterleitungen behandelt werden.

## Wert

Ein `RequestRedirect`-Enum-Wert, der einer der folgenden Strings sein kann:

- `follow`
- `error`
- `manual`

Wenn beim Erstellen der Anfrage kein Wert angegeben wird, verwendet sie den Standardwert `follow`.

## Beispiele

Im folgenden Snippet erstellen wir mit dem Konstruktor [`Request()`](/de/docs/Web/API/Request/Request) eine neue Anfrage (für eine Bilddatei im selben Verzeichnis wie das Skript) und speichern dann den Wert von `redirect` der Anfrage in einer Variablen:

```js
const myRequest = new Request("flowers.jpg");
const myCred = myRequest.redirect;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffssteuerung (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
