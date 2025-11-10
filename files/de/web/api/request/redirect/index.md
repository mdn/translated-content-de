---
title: "Anfrage: redirect-Eigenschaft"
short-title: redirect
slug: Web/API/Request/redirect
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`redirect`**-Eigenschaft der [`Request`](/de/docs/Web/API/Request)-Schnittstelle enthält den Modus, wie Weiterleitungen behandelt werden.

## Wert

Ein `RequestRedirect`-Enum-Wert, der einer der folgenden Strings sein kann:

- `follow`
- `error`
- `manual`

Wenn beim Erstellen der Anfrage nicht angegeben, erhält sie den Standardwert `follow`.

## Beispiele

Im folgenden Beispiel erstellen wir eine neue Anfrage mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor (für eine Bilddatei im selben Verzeichnis wie das Skript), dann speichern wir den `redirect`-Wert der Anfrage in einer Variablen:

```js
const myRequest = new Request("flowers.jpg");
const myCred = myRequest.redirect;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker-API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
