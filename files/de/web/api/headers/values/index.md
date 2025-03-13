---
title: "Headers: values() Methode"
short-title: values()
slug: Web/API/Headers/values
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

Die **`Headers.values()`** Methode gibt einen
{{jsxref("Iteration_protocols",'iterator')}} zurück, der es ermöglicht, alle in diesem Objekt enthaltenen Werte durchzugehen. Die Werte sind {{jsxref("String")}} Objekte.

## Syntax

```js-nolint
values()
```

### Parameter

Keine.

### Rückgabewert

Gibt einen {{jsxref("Iteration_protocols","iterator")}} zurück.

## Beispiele

```js
// Create a test Headers object
const myHeaders = new Headers();
myHeaders.append("Content-Type", "text/xml");
myHeaders.append("Vary", "Accept-Language");

// Display the values
for (const value of myHeaders.values()) {
  console.log(value);
}
```

Das Ergebnis ist:

```plain
text/xml
Accept-Language
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
