---
title: "EventSource: url-Eigenschaft"
short-title: url
slug: Web/API/EventSource/url
l10n:
  sourceCommit: a166ba48ceb8bccb37c67a0a8856b0e5b12e0135
---

{{APIRef("Server Sent Events")}}{{AvailableInWorkers}}

Die schreibgeschützte **`url`**-Eigenschaft des [`EventSource`](/de/docs/Web/API/EventSource)-Interfaces gibt einen String zurück, der die URL der Quelle darstellt.

## Wert

Ein String, der die URL der Quelle darstellt.

## Beispiele

```js
const evtSource = new EventSource("sse.php");
console.log(evtSource.url);
```

> [!NOTE]
> Ein vollständiges Beispiel finden Sie auf GitHub — siehe [Einfaches SSE-Demo mit PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`EventSource`](/de/docs/Web/API/EventSource)
