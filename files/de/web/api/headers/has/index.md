---
title: "Headers: has() Methode"
short-title: has()
slug: Web/API/Headers/has
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

Die **`has()`** Methode des [`Headers`](/de/docs/Web/API/Headers) Interfaces
gibt einen boolean zurück, der angibt, ob ein `Headers` Objekt einen bestimmten
Header enthält.

Aus Sicherheitsgründen können einige Header nur vom Benutzeragenten gesteuert werden. Diese
Header umfassen die {{Glossary("Forbidden_request_header", "verbotenen Anfrage-Header")}}
und {{Glossary("Forbidden_response_header_name", "verbotene Antwort-Header-Namen")}}.

## Syntax

```js-nolint
has(name)
```

### Parameter

- `name`
  - : Der Name des HTTP-Headers, den Sie überprüfen möchten. Wenn der angegebene Name kein gültiger
    HTTP-Header-Name ist, wirft diese Methode einen {{jsxref("TypeError")}}.

### Rückgabewert

Ein boolescher Wert.

## Beispiele

Das Erstellen eines leeren `Headers` Objekts ist einfach:

```js
const myHeaders = new Headers(); // Currently empty
```

Sie könnten einen Header hinzufügen, indem Sie [`Headers.append`](/de/docs/Web/API/Headers/append) verwenden, und dann das Vorhandensein mit `has()` prüfen:

```js
myHeaders.append("Content-Type", "image/jpeg");
myHeaders.has("Content-Type"); // Returns true
myHeaders.has("Accept-Encoding"); // Returns false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
