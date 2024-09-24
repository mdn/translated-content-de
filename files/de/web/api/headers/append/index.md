---
title: "Headers: append()-Methode"
short-title: append()
slug: Web/API/Headers/append
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

Die **`append()`**-Methode des {{domxref("Headers")}} Interfaces fügt einen neuen Wert zu einem vorhandenen Header in einem `Headers`-Objekt hinzu oder fügt den Header hinzu, wenn er noch nicht existiert.

Der Unterschied zwischen {{domxref("Headers.set", "set()")}} und `append()` besteht darin, dass `set()` den vorhandenen Wert durch den neuen ersetzt, wenn der angegebene Header bereits existiert und mehrere Werte akzeptiert, während `append()` den neuen Wert an das Ende der vorhandenen Wertemenge anfügt.

Aus Sicherheitsgründen können einige Header nur durch den Benutzeragenten gesteuert werden. Diese Header umfassen die {{Glossary("Forbidden_header_name", "verbotenen Header-Namen")}} und {{Glossary("Forbidden_response_header_name", "verbotenen Antwort-Header-Namen")}}.

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

Das Erstellen eines leeren `Headers`-Objekts ist einfach:

```js
const myHeaders = new Headers(); // Derzeit leer
```

Sie könnten einen Header mit `append()` hinzufügen:

```js
myHeaders.append("Content-Type", "image/jpeg");
myHeaders.get("Content-Type"); // Gibt 'image/jpeg' zurück
```

Wenn der angegebene Header bereits existiert, wird `append()` seinen Wert auf den angegebenen Wert ändern. Wenn der angegebene Header bereits existiert und mehrere Werte akzeptiert, wird `append()` den neuen Wert an das Ende der Wertemenge anfügen:

```js
myHeaders.append("Accept-Encoding", "deflate");
myHeaders.append("Accept-Encoding", "gzip");
myHeaders.get("Accept-Encoding"); // Gibt 'deflate, gzip' zurück
```

Um den alten Wert durch einen neuen zu ersetzen, verwenden Sie {{domxref("Headers.set")}}.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
