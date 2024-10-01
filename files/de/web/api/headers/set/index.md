---
title: "Headers: set()-Methode"
short-title: set()
slug: Web/API/Headers/set
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

Die **`set()`**-Methode der [`Headers`](/de/docs/Web/API/Headers)-Schnittstelle
legt einen neuen Wert für einen vorhandenen Header in einem `Headers`-Objekt fest oder fügt
den Header hinzu, wenn er noch nicht existiert.

Der Unterschied zwischen `set()` und [`Headers.append`](/de/docs/Web/API/Headers/append) besteht darin, dass, wenn
der angegebene Header bereits existiert und mehrere Werte akzeptiert, `set()`
den vorhandenen Wert mit dem neuen überschreibt, während [`Headers.append`](/de/docs/Web/API/Headers/append)
den neuen Wert an das Ende der Wertemenge anhängt.

Aus Sicherheitsgründen können einige Header nur vom Benutzeragenten gesteuert werden. Diese
Header umfassen die {{Glossary("Forbidden_header_name", "verbotenen Header-Namen")}}
und {{Glossary("Forbidden_response_header_name", "verbotenen Antwort-Header-Namen")}}.

## Syntax

```js-nolint
set(name, value)
```

### Parameter

- `name`
  - : Der Name des HTTP-Headers, den Sie auf einen neuen Wert setzen möchten. Wenn der angegebene Name nicht
    der Name eines HTTP-Headers ist, wirft diese Methode einen {{jsxref("TypeError")}}.
- `value`
  - : Der neue Wert, den Sie setzen möchten.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das Erstellen eines leeren `Headers`-Objekts ist einfach:

```js
const myHeaders = new Headers(); // Currently empty
```

Sie könnten diesem einen Header hinzufügen, indem Sie [`Headers.append`](/de/docs/Web/API/Headers/append) verwenden, und dann einen neuen
Wert für diesen Header mit `set()` festlegen:

```js
myHeaders.append("Content-Type", "image/jpeg");
myHeaders.set("Content-Type", "text/html");
```

Wenn der angegebene Header noch nicht existiert, erstellt `set()` ihn und
setzt seinen Wert auf den angegebenen Wert. Wenn der angegebene Header bereits existiert und
mehrere Werte akzeptiert, wird `set()` den vorhandenen Wert mit
dem neuen überschreiben:

```js
myHeaders.set("Accept-Encoding", "deflate");
myHeaders.set("Accept-Encoding", "gzip");
myHeaders.get("Accept-Encoding"); // Returns 'gzip'
```

Sie müssten [`Headers.append`](/de/docs/Web/API/Headers/append) verwenden, um den neuen Wert an die Werte anzuhängen, ohne
ihn zu überschreiben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
