---
title: "EventSource: withCredentials-Eigenschaft"
short-title: withCredentials
slug: Web/API/EventSource/withCredentials
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef('WebSockets API')}}

Die **`withCredentials`**-Eigenschaft des [`EventSource`](/de/docs/Web/API/EventSource)-Interfaces, die nur lesbar ist, gibt einen booleschen Wert zurück, der angibt, ob das `EventSource`-Objekt mit CORS-Berechtigungen instanziiert wurde.

## Wert

Ein boolescher Wert, der angibt, ob das `EventSource`-Objekt mit CORS-Berechtigungen instanziiert wurde (`true`) oder nicht (`false`, der Standardwert).

## Beispiele

```js
const evtSource = new EventSource("sse.php");
console.log(evtSource.withCredentials);
```

> [!NOTE]
> Ein vollständiges Beispiel finden Sie auf GitHub — siehe [Simple SSE demo using PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`EventSource`](/de/docs/Web/API/EventSource)
