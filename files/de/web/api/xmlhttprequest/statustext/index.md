---
title: "XMLHttpRequest: statusText-Eigenschaft"
short-title: statusText
slug: Web/API/XMLHttpRequest/statusText
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die schreibgeschützte **`XMLHttpRequest.statusText`**-Eigenschaft gibt eine Zeichenkette zurück, die die Statusmeldung der Antwort enthält, wie sie vom HTTP-Server zurückgegeben wird. Im Gegensatz zu [`XMLHTTPRequest.status`](/de/docs/Web/API/XMLHttpRequest/status), das einen numerischen Statuscode angibt, enthält diese Eigenschaft den _Text_ des Antwortstatus, wie "OK" oder "Not Found". Befindet sich der [`readyState`](/de/docs/Web/API/XMLHttpRequest/readyState) der Anfrage im `UNSENT`- oder `OPENED`-Zustand, wird der Wert von `statusText` eine leere Zeichenkette sein.

Wenn die Serverantwort keinen Status-Text explizit angibt, nimmt `statusText` den Standardwert "OK" an.

> [!NOTE]
> Antworten über eine HTTP/2-Verbindung werden immer eine leere Zeichenkette als Statusnachricht haben, da HTTP/2 diese nicht unterstützt.

## Wert

Eine Zeichenkette.

## Beispiele

```js
const xhr = new XMLHttpRequest();
console.log("0 UNSENT", xhr.statusText);

xhr.open("GET", "/server", true);
console.log("1 OPENED", xhr.statusText);

xhr.onprogress = () => {
  console.log("3 LOADING", xhr.statusText);
};

xhr.onload = () => {
  console.log("4 DONE", xhr.statusText);
};

xhr.send(null);

/**
 * Outputs the following:
 *
 * 0 UNSENT
 * 1 OPENED
 * 3 LOADING OK
 * 4 DONE OK
 */
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Liste der [HTTP-Status](/de/docs/Web/HTTP/Status)
- [HTTP](/de/docs/Web/HTTP)
- [WHATWG Fetch Living Standard](https://fetch.spec.whatwg.org/#concept-response-status-message)
