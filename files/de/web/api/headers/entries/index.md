---
title: "Headers: entries() Methode"
short-title: entries()
slug: Web/API/Headers/entries
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

Die **`Headers.entries()`**-Methode gibt einen
{{jsxref("Iteration_protocols",'Iterator')}} zurück, der es ermöglicht, alle Schlüssel/Wert-Paare, die in diesem Objekt enthalten sind, zu durchlaufen. Sowohl der Schlüssel als auch der Wert jedes Paares sind
{{jsxref("String")}}-Objekte.

## Syntax

```js-nolint
entries()
```

### Parameter

Keine.

### Rückgabewert

Gibt einen {{jsxref("Iteration_protocols","Iterator")}} zurück.

## Beispiele

```js
// Create a test Headers object
const myHeaders = new Headers();
myHeaders.append("Content-Type", "text/xml");
myHeaders.append("Vary", "Accept-Language");

// Display the key/value pairs
for (const pair of myHeaders.entries()) {
  console.log(`${pair[0]}: ${pair[1]}`);
}
```

Das Ergebnis ist:

```plain
content-type: text/xml
vary: Accept-Language
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
