---
title: "Headers: append() Methode"
short-title: append()
slug: Web/API/Headers/append
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

Die **`append()`** Methode der [`Headers`](/de/docs/Web/API/Headers)-Schnittstelle fügt einen neuen Wert zu einem existierenden Header innerhalb eines `Headers`-Objekts hinzu oder fügt den Header hinzu, wenn er noch nicht existiert.

Der Unterschied zwischen [`set()`](/de/docs/Web/API/Headers/set) und `append()` besteht darin, dass `set()` den existierenden Wert überschreibt, wenn der angegebene Header bereits existiert und mehrere Werte akzeptiert, während `append()` den neuen Wert an das Ende der vorhandenen Wertemenge anhängt.

Aus Sicherheitsgründen können einige Header nur durch den User-Agent kontrolliert werden. Diese Header umfassen die {{Glossary("Forbidden_request_header", "verbotenen Anforderungsheader")}} und {{Glossary("Forbidden_response_header_name", "verbotenen Antwortheadernamen")}}.

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

Ein leeres `Headers`-Objekt zu erstellen, ist einfach:

```js
const myHeaders = new Headers(); // Currently empty
```

Sie könnten mit `append()` einen Header hinzufügen:

```js
myHeaders.append("Content-Type", "image/jpeg");
myHeaders.get("Content-Type"); // Returns 'image/jpeg'
```

Wenn der angegebene Header bereits existiert, ändert `append()` seinen Wert zu dem angegebenen Wert. Wenn der angegebene Header bereits existiert und mehrere Werte akzeptiert, hängt `append()` den neuen Wert an das Ende der Wertemenge an:

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
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
