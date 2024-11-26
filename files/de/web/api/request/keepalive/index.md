---
title: "Anforderung: keepalive-Eigenschaft"
short-title: keepalive
slug: Web/API/Request/keepalive
l10n:
  sourceCommit: 0ffc63a13598470ddb4a4d3281800eeb2bf6ae2b
---

{{APIRef("Fetch API")}}

Die **`keepalive`** schreibgeschützte Eigenschaft des [`Request`](/de/docs/Web/API/Request)-Interfaces enthält die `keepalive`-Einstellung der Anfrage (`true` oder `false`), die angibt, ob der Browser die zugehörige Anfrage weiterleben lässt, wenn die Seite, die sie initiiert hat, entladen wird, bevor die Anfrage abgeschlossen ist.

Dies ermöglicht einer [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage beispielsweise, Analysedaten am Ende einer Sitzung zu senden, selbst wenn der Benutzer die Seite verlässt oder schließt. Dies bietet einige Vorteile gegenüber der Verwendung von [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) zu demselben Zweck, einschließlich der Möglichkeit, HTTP-Methoden außer [`POST`](/de/docs/Web/HTTP/Methods/POST) zu verwenden, Anfrageeigenschaften anzupassen und auf die Serverantwort über die fetch-{{jsxref("Promise")}}-Erfüllung zuzugreifen. Es steht auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) zur Verfügung.

## Wert

Ein boolescher Wert, der den `keepalive`-Status der Anfrage angibt.

## Beispiele

### Erstellen einer Anfrage mit keepalive

Im folgenden Codeausschnitt erstellen wir eine neue Anfrage mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor, bei der `keepalive` auf `true` gesetzt ist, und speichern dann den `keepalive`-Wert der Anfrage in einer Variablen:

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
