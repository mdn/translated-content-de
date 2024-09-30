---
title: "Headers: delete() Methode"
short-title: delete()
slug: Web/API/Headers/delete
l10n:
  sourceCommit: 7b21121cd93f9f967248d53c6fd24db2af42b314
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

Die **`delete()`**-Methode der [`Headers`](/de/docs/Web/API/Headers)-Schnittstelle entfernt einen Header aus dem aktuellen `Headers`-Objekt.

Aus Sicherheitsgründen können einige Header nur vom Benutzeragenten gesteuert werden. Diese Header umfassen die [verbotenen Header-Namen](/de/docs/Glossary/Forbidden_header_name) und [verbotenen Antwort-Header-Namen](/de/docs/Glossary/Forbidden_response_header_name).

## Syntax

```js-nolint
delete(name)
```

### Parameter

- `name`
  - : Der Name des HTTP-Headers, den Sie aus dem `Headers`-Objekt löschen möchten.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Ein leeres `Headers`-Objekt zu erstellen ist einfach:

```js
const myHeaders = new Headers(); // Currently empty
```

Sie könnten diesem mit [`Headers.append`](/de/docs/Web/API/Headers/append) einen Header hinzufügen:

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

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
