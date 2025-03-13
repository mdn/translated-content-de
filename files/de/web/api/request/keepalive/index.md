---
title: "Anforderung: keepalive-Eigenschaft"
short-title: keepalive
slug: Web/API/Request/keepalive
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}

Die schreibgeschützte **`keepalive`**-Eigenschaft der [`Request`](/de/docs/Web/API/Request)-Schnittstelle enthält die `keepalive`-Einstellung der Anfrage (`true` oder `false`), die angibt, ob der Browser die zugehörige Anfrage weiterführt, wenn die Seite, die sie initiiert hat, vor Abschluss der Anfrage entladen wird.

Dies ermöglicht es einer [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage, zum Beispiel am Ende einer Sitzung Analysen zu senden, selbst wenn der Benutzer die Seite verlässt oder schließt. Dies hat einige Vorteile gegenüber der Verwendung von [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) für denselben Zweck, einschließlich der Möglichkeit, HTTP-Methoden außer [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST) zu verwenden, Anfrageeigenschaften anzupassen und auf die Serverantwort über die Erfüllung des fetch {{jsxref("Promise")}} zuzugreifen. Es ist auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verfügbar.

## Wert

Ein boolescher Wert, der den `keepalive`-Status der Anfrage angibt.

## Beispiele

### Erstellen einer Anfrage mit keepalive

Im folgenden Beispiel erstellen wir eine neue Anfrage mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor, wobei `keepalive` auf `true` gesetzt ist, und speichern dann den `keepalive`-Wert der Anfrage in einer Variablen:

```js
const options = {
  keepalive: true,
};

const myRequest = new Request("flowers.jpg", options);
let myKeepAlive = myRequest.keepalive; // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
