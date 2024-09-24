---
title: "Headers: has() Methode"
short-title: has()
slug: Web/API/Headers/has
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

Die **`has()`** Methode der {{domxref("Headers")}} Schnittstelle gibt einen booleschen Wert zurück, der angibt, ob ein `Headers` Objekt einen bestimmten Header enthält.

Aus Sicherheitsgründen können einige Header nur vom User Agent kontrolliert werden. Diese Header umfassen die {{Glossary("Forbidden_header_name", "verbotenen Header-Namen")}} und {{Glossary("Forbidden_response_header_name", "verbotenen Antwort-Header-Namen")}}.

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

Ein leeres `Headers` Objekt zu erstellen, ist einfach:

```js
const myHeaders = new Headers(); // Derzeit leer
```

Sie könnten dieser mit {{domxref("Headers.append")}} einen Header hinzufügen und dann mit `has()` testen, ob er existiert:

```js
myHeaders.append("Content-Type", "image/jpeg");
myHeaders.has("Content-Type"); // Gibt true zurück
myHeaders.has("Accept-Encoding"); // Gibt false zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
