---
title: "Headers: Methode entries()"
short-title: entries()
slug: Web/API/Headers/entries
l10n:
  sourceCommit: e81cf36acffe197d01b1ad282c3582ebd7b0b54d
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

Die Methode **`Headers.entries()`** gibt einen
{{jsxref("Iteration_protocols",'Iterator')}} zurück, der erlaubt, alle Schlüssel/Wert-Paare, die in diesem Objekt enthalten sind, durchzugehen. Sowohl der Schlüssel als auch der Wert jedes Paares sind
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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
