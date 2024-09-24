---
title: "Headers: entries()-Methode"
short-title: entries()
slug: Web/API/Headers/entries
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

Die **`Headers.entries()`**-Methode gibt einen
{{jsxref("Iteration_protocols",'Iterator')}} zurück, der es ermöglicht, alle in diesem Objekt enthaltenen Schlüssel/Wert-Paare zu durchlaufen. Sowohl der Schlüssel als auch der Wert jedes Paars sind {{jsxref("String")}}-Objekte.

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
// Erstellen Sie ein Test-Headers-Objekt
const myHeaders = new Headers();
myHeaders.append("Content-Type", "text/xml");
myHeaders.append("Vary", "Accept-Language");

// Anzeigen der Schlüssel/Wert-Paare
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
