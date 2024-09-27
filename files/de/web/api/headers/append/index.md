---
title: "Headers: append() Methode"
short-title: append()
slug: Web/API/Headers/append
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

Die **`append()`**-Methode der [`Headers`](/de/docs/Web/API/Headers)-Schnittstelle fügt einen neuen Wert zu einem bestehenden Header in einem `Headers`-Objekt hinzu oder fügt den Header hinzu, falls er noch nicht existiert.

Der Unterschied zwischen [`set()`](/de/docs/Web/API/Headers/set) und `append()` besteht darin, dass `set()`, wenn der angegebene Header bereits existiert und mehrere Werte akzeptiert, den bestehenden Wert durch den neuen überschreibt, während `append()` den neuen Wert am Ende der Werteliste anhängt.

Aus Sicherheitsgründen können einige Header nur vom Benutzeragenten kontrolliert werden. Zu diesen Headern gehören die [verbotenen Header-Namen](/de/docs/Glossary/Forbidden_header_name) und [verbotenen Antwort-Header-Namen](/de/docs/Glossary/Forbidden_response_header_name).

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

Wenn der angegebene Header bereits existiert, wird `append()` seinen Wert in den angegebenen Wert ändern. Wenn der angegebene Header bereits existiert und mehrere Werte akzeptiert, wird `append()` den neuen Wert am Ende der Werteliste anhängen:

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
