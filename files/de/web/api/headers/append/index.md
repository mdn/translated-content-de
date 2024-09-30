---
title: "Headers: append() Methode"
short-title: append()
slug: Web/API/Headers/append
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

Die **`append()`** Methode des [`Headers`](/de/docs/Web/API/Headers)-Interfaces fügt einen neuen Wert zu einem vorhandenen Header innerhalb eines `Headers`-Objekts hinzu oder fügt den Header hinzu, wenn er noch nicht existiert.

Der Unterschied zwischen [`set()`](/de/docs/Web/API/Headers/set) und `append()` besteht darin, dass, wenn der angegebene Header bereits existiert und mehrere Werte akzeptiert, `set()` den bestehenden Wert mit dem neuen überschreibt, während `append()` den neuen Wert an das Ende der vorhandenen Werte anhängt.

Aus Sicherheitsgründen können einige Header nur vom Benutzeragenten kontrolliert werden. Diese Header umfassen die [verbotenen Header-Namen](/de/docs/Glossary/Forbidden_header_name) und die [verbotenen Antwort-Header-Namen](/de/docs/Glossary/Forbidden_response_header_name).

## Syntax

```js-nolint
append(name, value)
```

### Parameter

- `name`
  - : Der Name des HTTP-Headers, den Sie zum `Headers`-Objekt hinzufügen möchten.
- `value`
  - : Der Wert des HTTP-Headers, den Sie hinzufügen möchten.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Ein leeres `Headers`-Objekt zu erstellen ist einfach:

```js
const myHeaders = new Headers(); // Currently empty
```

Sie könnten einen Header mit `append()` hinzufügen:

```js
myHeaders.append("Content-Type", "image/jpeg");
myHeaders.get("Content-Type"); // Returns 'image/jpeg'
```

Wenn der angegebene Header bereits existiert, ändert `append()` seinen Wert auf den angegebenen Wert. Wenn der angegebene Header bereits existiert und mehrere Werte akzeptiert, fügt `append()` den neuen Wert an das Ende der Wertmenge an:

```js
myHeaders.append("Accept-Encoding", "deflate");
myHeaders.append("Accept-Encoding", "gzip");
myHeaders.get("Accept-Encoding"); // Returns 'deflate, gzip'
```

Um den alten Wert mit einem neuen zu überschreiben, verwenden Sie [`Headers.set`](/de/docs/Web/API/Headers/set).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
