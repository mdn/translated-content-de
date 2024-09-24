---
title: "Headers: keys()-Methode"
short-title: keys()
slug: Web/API/Headers/keys
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

Die **`Headers.keys()`**-Methode gibt einen {{jsxref("Iteration_protocols",'iterator')}} zurück, der es ermöglicht, alle in diesem Objekt enthaltenen Schlüssel zu durchlaufen. Die Schlüssel sind {{jsxref("String")}}-Objekte.

## Syntax

```js-nolint
keys()
```

### Parameter

Keine.

### Rückgabewert

Gibt einen {{jsxref("Iteration_protocols","iterator")}} zurück.

## Beispiele

```js
// Erstellen eines Test-Headers Objekts
const myHeaders = new Headers();
myHeaders.append("Content-Type", "text/xml");
myHeaders.append("Vary", "Accept-Language");

// Anzeige der Schlüssel
for (const key of myHeaders.keys()) {
  console.log(key);
}
```

Das Ergebnis ist:

```plain
content-type
vary
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
