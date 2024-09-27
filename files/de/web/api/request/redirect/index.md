---
title: "Request: redirect-Eigenschaft"
short-title: redirect
slug: Web/API/Request/redirect
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("Fetch API")}}

Die **`redirect`** schreibgeschützte Eigenschaft des [`Request`](/de/docs/Web/API/Request)-Interfaces enthält den Modus, wie Umleitungen gehandhabt werden.

## Wert

Ein `RequestRedirect`-Enum-Wert, der einer der folgenden Strings sein kann:

- `follow`
- `error`
- `manual`

Falls nicht spezifiziert, wenn die Anfrage erstellt wird, erhält er den Standardwert `follow`.

## Beispiele

Im folgenden Beispiel erstellen wir eine neue Anfrage mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor (für eine Bilddatei im gleichen Verzeichnis wie das Skript) und speichern dann den `redirect`-Wert der Anfrage in einer Variablen:

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
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
