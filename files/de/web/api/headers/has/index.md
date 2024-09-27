---
title: "Headers: has() Methode"
short-title: has()
slug: Web/API/Headers/has
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

Die **`has()`** Methode der [`Headers`](/de/docs/Web/API/Headers) Schnittstelle gibt einen booleschen Wert zurück, der angibt, ob ein `Headers`-Objekt einen bestimmten Header enthält.

Aus Sicherheitsgründen können einige Header nur vom Benutzeragenten gesteuert werden. Dazu gehören die [verbotenen Headernamen](/de/docs/Glossary/Forbidden_header_name) und [verbotenen Antwortheadernamen](/de/docs/Glossary/Forbidden_response_header_name).

## Syntax

```js-nolint
has(name)
```

### Parameter

- `name`
  - : Der Name des HTTP-Headers, dessen Vorhandensein getestet werden soll. Wenn der angegebene Name kein gültiger HTTP-Header-Name ist, wirft diese Methode einen {{jsxref("TypeError")}}.

### Rückgabewert

Ein boolescher Wert.

## Beispiele

Das Erstellen eines leeren `Headers`-Objekts ist einfach:

```js
const myHeaders = new Headers(); // Currently empty
```

Sie könnten diesem einen Header hinzufügen, indem Sie [`Headers.append`](/de/docs/Web/API/Headers/append) verwenden, und dann mit `has()` das Vorhandensein testen:

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
