---
title: "Headers: entries() Methode"
short-title: entries()
slug: Web/API/Headers/entries
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

Die **`Headers.entries()`** Methode gibt einen
{{jsxref("Iteration_protocols","Iterator")}} zurück, der es Ihnen ermöglicht, alle Schlüssel/Wert-Paare in diesem Objekt zu durchlaufen. Sowohl der Schlüssel als auch der Wert jedes Paares sind
{{jsxref("String")}} Objekte.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
