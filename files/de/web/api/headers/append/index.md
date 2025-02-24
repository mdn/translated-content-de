---
title: "Headers: append() Methode"
short-title: append()
slug: Web/API/Headers/append
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

Die **`append()`**-Methode des [`Headers`](/de/docs/Web/API/Headers)-Interfaces fügt einem existierenden Header innerhalb eines `Headers`-Objekts einen neuen Wert hinzu oder fügt den Header hinzu, falls er noch nicht existiert.

Der Unterschied zwischen [`set()`](/de/docs/Web/API/Headers/set) und `append()` besteht darin, dass `set()` den existierenden Wert mit dem neuen überschreibt, wenn der angegebene Header bereits existiert und mehrere Werte akzeptiert, während `append()` den neuen Wert am Ende der Wertemenge anfügt.

Aus Sicherheitsgründen können einige Header nur durch den User-Agent gesteuert werden. Zu diesen Headern gehören die {{Glossary("Forbidden_request_header", "verbotenen Anforderungsheader")}} und die {{Glossary("Forbidden_response_header_name", "verbotenen Antwortheader-Namen")}}.

## Syntax

```js-nolint
append(name, value)
```

### Parameter

- `name`
  - : Der Name des HTTP-Headers, den Sie dem `Headers`-Objekt hinzufügen möchten.
- `value`
  - : Der Wert des HTTP-Headers, den Sie hinzufügen möchten.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Ein leeres `Headers`-Objekt zu erstellen ist einfach:

```js
const myHeaders = new Headers(); // Currently empty
```

Sie könnten diesem mit `append()` einen Header hinzufügen:

```js
myHeaders.append("Content-Type", "image/jpeg");
myHeaders.get("Content-Type"); // Returns 'image/jpeg'
```

Wenn der angegebene Header bereits existiert, wird `append()` seinen Wert in den angegebenen Wert ändern. Wenn der angegebene Header bereits existiert und mehrere Werte akzeptieren kann, wird `append()` den neuen Wert am Ende der Wertemenge anfügen:

```js
myHeaders.append("Accept-Encoding", "deflate");
myHeaders.append("Accept-Encoding", "gzip");
myHeaders.get("Accept-Encoding"); // Returns 'deflate, gzip'
```

Um den alten Wert durch einen neuen zu überschreiben, verwenden Sie [`Headers.set`](/de/docs/Web/API/Headers/set).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
