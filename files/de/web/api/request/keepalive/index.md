---
title: "Anforderung: keepalive-Eigenschaft"
short-title: keepalive
slug: Web/API/Request/keepalive
l10n:
  sourceCommit: 0f7f70e7fd76f8e32cd02261bc10630d753fbf0b
---

{{APIRef("Fetch API")}}

Die schreibgeschützte **`keepalive`**-Eigenschaft der [`Request`](/de/docs/Web/API/Request)-Schnittstelle enthält die `keepalive`-Einstellung der Anfrage (`true` oder `false`). Diese zeigt an, ob der Browser die zugehörige Anfrage weiter am Leben hält, wenn die Seite, die sie initiiert hat, vor Abschluss der Anfrage entladen wird.

Dies ermöglicht, dass eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage als Alternative zu [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) fungiert, wenn Analysedaten am Ende einer Sitzung gesendet werden. Dies hat einige Vorteile (Sie können HTTP-Methoden außer [`POST`](/de/docs/Web/HTTP/Methods/POST) verwenden, Anfrageeigenschaften anpassen und auf die Serverantwort über die Erfüllung des fetch-{{jsxref("Promise")}} zugreifen). Es ist auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verfügbar.

## Wert

Ein boolescher Wert, der den `keepalive`-Status der Anfrage angibt.

## Beispiele

Im folgenden Beispiel erstellen wir eine neue Anfrage mithilfe des [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktors mit `keepalive` auf `true` gesetzt und speichern dann den `keepalive`-Wert der Anfrage in einer Variable:

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
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
