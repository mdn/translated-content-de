---
title: "Headers: values()-Methode"
short-title: values()
slug: Web/API/Headers/values
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

Die **`Headers.values()`**-Methode gibt einen
{{jsxref("Iteration_protocols", 'iterator')}} zurück, der es ermöglicht, alle in diesem Objekt enthaltenen Werte zu durchlaufen. Die Werte sind {{jsxref("String")}}-Objekte.

## Syntax

```js-nolint
values()
```

### Parameter

Keine.

### Rückgabewert

Gibt einen {{jsxref("Iteration_protocols", "iterator")}} zurück.

## Beispiele

```js
// Erstellen eines Test-Headers-Objekts
const myHeaders = new Headers();
myHeaders.append("Content-Type", "text/xml");
myHeaders.append("Vary", "Accept-Language");

// Anzeigen der Werte
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
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
