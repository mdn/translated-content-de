---
title: "Headers: has() Methode"
short-title: has()
slug: Web/API/Headers/has
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

Die **`has()`**-Methode des [`Headers`](/de/docs/Web/API/Headers)-Interfaces gibt einen booleschen Wert zurück, der angibt, ob ein `Headers`-Objekt einen bestimmten Header enthält.

Aus Sicherheitsgründen können einige Header nur vom User Agent kontrolliert werden. Diese Headers umfassen die {{Glossary("Forbidden_request_header", "verbotenen Anfrage-Header")}} und die {{Glossary("Forbidden_response_header_name", "verbotenen Antwort-Header-Namen")}}.

## Syntax

```js-nolint
has(name)
```

### Parameter

- `name`
  - : Der Name des HTTP-Headers, den Sie testen möchten. Wenn der angegebene Name kein gültiger HTTP-Header-Name ist, wirft diese Methode einen {{jsxref("TypeError")}}.

### Rückgabewert

Ein boolescher Wert.

## Beispiele

Ein leeres `Headers`-Objekt zu erstellen ist einfach:

```js
const myHeaders = new Headers(); // Currently empty
```

Sie könnten diesem einen Header hinzufügen, indem Sie [`Headers.append`](/de/docs/Web/API/Headers/append) verwenden und dann mit `has()` auf dessen Existenz testen:

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
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
