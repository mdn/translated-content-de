---
title: "Headers: set()-Methode"
short-title: set()
slug: Web/API/Headers/set
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

Die **`set()`**-Methode der [`Headers`](/de/docs/Web/API/Headers)-Schnittstelle
legt einen neuen Wert für einen vorhandenen Header in einem `Headers`-Objekt fest oder fügt
den Header hinzu, wenn er noch nicht existiert.

Der Unterschied zwischen `set()` und [`Headers.append`](/de/docs/Web/API/Headers/append) besteht darin, dass, wenn
der angegebene Header bereits existiert und mehrere Werte akzeptiert, `set()`
den vorhandenen Wert mit dem neuen überschreibt, während [`Headers.append`](/de/docs/Web/API/Headers/append)
den neuen Wert am Ende der Wertmenge anhängt.

Aus Sicherheitsgründen können einige Header nur vom Benutzeragenten kontrolliert werden. Diese
Header umfassen die {{Glossary("Forbidden_request_header", "verbotenen Anforderungsheader")}}
und {{Glossary("Forbidden_response_header_name", "verbotenen Antwortheadernamen")}}.

## Syntax

```js-nolint
set(name, value)
```

### Parameter

- `name`
  - : Der Name des HTTP-Headers, den Sie auf einen neuen Wert setzen möchten. Wenn der angegebene Name
    nicht der Name eines HTTP-Headers ist, wirft diese Methode einen {{jsxref("TypeError")}}.
- `value`
  - : Der neue Wert, den Sie setzen möchten.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Ein leeres `Headers`-Objekt zu erstellen, ist einfach:

```js
const myHeaders = new Headers(); // Currently empty
```

Sie könnten einen Header mit [`Headers.append`](/de/docs/Web/API/Headers/append) hinzufügen und dann einen neuen
Wert für diesen Header mit `set()` festlegen:

```js
myHeaders.append("Content-Type", "image/jpeg");
myHeaders.set("Content-Type", "text/html");
```

Wenn der angegebene Header noch nicht existiert, erstellt `set()` ihn und
setzt seinen Wert auf den angegebenen Wert. Wenn der angegebene Header bereits existiert und
mehrere Werte akzeptiert, überschreibt `set()` den vorhandenen Wert mit
dem neuen:

```js
myHeaders.set("Accept-Encoding", "deflate");
myHeaders.set("Accept-Encoding", "gzip");
myHeaders.get("Accept-Encoding"); // Returns 'gzip'
```

Sie müssten [`Headers.append`](/de/docs/Web/API/Headers/append) verwenden, um den neuen Wert an die Werte anzuhängen, nicht
um ihn zu überschreiben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
