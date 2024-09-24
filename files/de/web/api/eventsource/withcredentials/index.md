---
title: "EventSource: withCredentials-Eigenschaft"
short-title: withCredentials
slug: Web/API/EventSource/withCredentials
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef('WebSockets API')}}

Die schreibgeschützte Eigenschaft **`withCredentials`** der
{{domxref("EventSource")}}-Schnittstelle gibt einen booleschen Wert zurück, der angibt, ob das `EventSource`-Objekt mit festgelegten CORS-Anmeldeinformationen instanziiert wurde.

## Wert

Ein boolescher Wert, der angibt, ob das `EventSource`-Objekt
mit festgelegten CORS-Anmeldeinformationen instanziiert wurde (`true`) oder nicht (`false`, der Standardwert).

## Beispiele

```js
const evtSource = new EventSource("sse.php");
console.log(evtSource.withCredentials);
```

> [!NOTE]
> Ein vollständiges Beispiel finden Sie auf GitHub — siehe [Einfaches SSE-Demo mit PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("EventSource")}}
