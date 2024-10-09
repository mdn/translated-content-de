---
title: "EventSource: withCredentials-Eigenschaft"
short-title: withCredentials
slug: Web/API/EventSource/withCredentials
l10n:
  sourceCommit: a166ba48ceb8bccb37c67a0a8856b0e5b12e0135
---

{{APIRef("Server Sent Events")}}{{AvailableInWorkers}}

Die **`withCredentials`** schreibgeschützte Eigenschaft des
[`EventSource`](/de/docs/Web/API/EventSource)-Interfaces gibt einen booleschen Wert zurück, der anzeigt, ob
das `EventSource`-Objekt mit CORS-Zugangsdaten initialisiert wurde.

## Wert

Ein boolescher Wert, der angibt, ob das `EventSource`-Objekt
mit CORS-Zugangsdaten initialisiert wurde (`true`) oder nicht (`false`,
der Standard).

## Beispiele

```js
const evtSource = new EventSource("sse.php");
console.log(evtSource.withCredentials);
```

> [!NOTE]
> Ein vollständiges Beispiel finden Sie auf GitHub – siehe [Einfaches SSE-Demonstrationsbeispiel mit PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`EventSource`](/de/docs/Web/API/EventSource)
