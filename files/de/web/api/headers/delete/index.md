---
title: "Headers: delete()-Methode"
short-title: delete()
slug: Web/API/Headers/delete
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

Die **`delete()`**-Methode der [`Headers`](/de/docs/Web/API/Headers)-Schnittstelle entfernt einen Header aus dem aktuellen `Headers`-Objekt.

Aus Sicherheitsgründen können einige Header nur durch den User-Agent gesteuert werden. Diese Header umfassen die {{Glossary("Forbidden_request_header", "verbotenen Anforderungs-Header")}} und {{Glossary("Forbidden_response_header_name", "verbotenen Antwort-Header-Namen")}}.

## Syntax

```js-nolint
delete(name)
```

### Parameter

- `name`
  - : Der Name des HTTP-Headers, den Sie aus dem `Headers`-Objekt löschen möchten.

### Rückgabewert

Kein ({{jsxref("undefined")}}).

## Beispiele

Ein leeres `Headers`-Objekt zu erstellen ist einfach:

```js
const myHeaders = new Headers(); // Currently empty
```

Sie könnten einen Header hinzufügen, indem Sie [`Headers.append`](/de/docs/Web/API/Headers/append) verwenden:

```js
myHeaders.append("Content-Type", "image/jpeg");
myHeaders.get("Content-Type"); // Returns 'image/jpeg'
```

Sie können ihn dann wieder löschen:

```js
myHeaders.delete("Content-Type");
myHeaders.get("Content-Type"); // Returns null, as it has been deleted
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker-API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
