---
title: "Request: keepalive-Eigenschaft"
short-title: keepalive
slug: Web/API/Request/keepalive
l10n:
  sourceCommit: 7a2d87c54eb8d51586602b703f33328ae878b928
---

{{APIRef("Fetch API")}}

Die schreibgeschützte **`keepalive`**-Eigenschaft der [`Request`](/de/docs/Web/API/Request)-Schnittstelle enthält die `keepalive`-Einstellung der Anfrage (`true` oder `false`). Sie gibt an, ob der Browser die zugehörige Anfrage am Leben hält, wenn die Seite, die sie initiiert hat, entladen wird, bevor die Anfrage abgeschlossen ist.

Dies ermöglicht einer [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage, als Alternative zu [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) zum Senden von Analysedaten am Ende einer Sitzung zu fungieren. Es bietet einige Vorteile (es können andere HTTP-Methoden als [`POST`](/de/docs/Web/HTTP/Methods/POST) verwendet, Anfrageeigenschaften angepasst und die Serverantwort über die Erfüllung des Fetch-{{jsxref("Promise")}} abgerufen werden). Es ist auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verfügbar.

## Wert

Ein boolescher Wert, der den `keepalive`-Status der Anfrage anzeigt.

## Beispiele

Im folgenden Beispiel erstellen wir eine neue Anfrage mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor, bei der `keepalive` auf `true` gesetzt ist, und speichern dann den `keepalive`-Wert der Anfrage in einer Variablen:

```js
const options = {
  keepalive: true,
};

const myRequest = new Request("flowers.jpg", options);
let mykeepalive = myRequest.keepalive; // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker-API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
