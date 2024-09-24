---
title: "EventSource: url-Eigenschaft"
short-title: url
slug: Web/API/EventSource/url
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef('WebSockets API')}}

Die schreibgeschützte **`url`**-Eigenschaft des {{domxref("EventSource")}}-Interfaces gibt einen String zurück, der die URL der Quelle darstellt.

## Wert

Ein String, der die URL der Quelle darstellt.

## Beispiele

```js
const evtSource = new EventSource("sse.php");
console.log(evtSource.url);
```

> [!NOTE]
> Sie finden ein vollständiges Beispiel auf GitHub — siehe [Einfaches SSE-Demo mit PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("EventSource")}}
