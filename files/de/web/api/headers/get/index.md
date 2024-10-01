---
title: "Headers: get()-Methode"
short-title: get()
slug: Web/API/Headers/get
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

Die **`get()`**-Methode des [`Headers`](/de/docs/Web/API/Headers)-Interfaces
liefert einen Byte-String aller Werte eines Headers innerhalb eines `Headers`-Objekts
mit einem gegebenen Namen. Existiert der angeforderte Header nicht im `Headers`-Objekt,
gibt sie `null` zurück.

Aus Sicherheitsgründen können einige Header nur vom User-Agent kontrolliert werden. Diese
Header umfassen die {{Glossary("Forbidden_header_name", "verbotenen Header-Namen")}}
und {{Glossary("Forbidden_response_header_name", "verbotenen Antwort-Header-Namen")}}.

## Syntax

```js-nolint
get(name)
```

### Parameter

- `name`
  - : Der Name des HTTP-Headers, dessen Werte Sie aus dem `Headers`-Objekt abrufen möchten.
    Wenn der angegebene Name nicht der Name eines HTTP-Headers ist, löst diese Methode einen {{jsxref("TypeError")}} aus. Der Name ist nicht case-sensitiv.

### Rückgabewert

Eine {{jsxref("String")}}-Sequenz, die die Werte des abgerufenen Headers darstellt, oder `null`, wenn dieser Header nicht gesetzt ist.

## Beispiele

Ein leeres `Headers`-Objekt zu erstellen ist einfach:

```js
const myHeaders = new Headers(); // Currently empty
myHeaders.get("Not-Set"); // Returns null
```

Sie könnten diesem mit [`Headers.append`](/de/docs/Web/API/Headers/append) einen Header hinzufügen und ihn dann mit `get()` abrufen:

```js
myHeaders.append("Content-Type", "image/jpeg");
myHeaders.get("Content-Type"); // Returns "image/jpeg"
```

Falls der Header mehrere Werte enthält, wird der Byte-String alle Werte in der Reihenfolge enthalten, in der sie dem Headers-Objekt hinzugefügt wurden:

```js
myHeaders.append("Accept-Encoding", "deflate");
myHeaders.append("Accept-Encoding", "gzip");
myHeaders.get("Accept-Encoding"); // Returns "deflate, gzip"
myHeaders
  .get("Accept-Encoding")
  .split(",")
  .map((v) => v.trimStart()); // Returns [ "deflate", "gzip" ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
