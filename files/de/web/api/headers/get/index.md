---
title: "Headers: get() Methode"
short-title: get()
slug: Web/API/Headers/get
l10n:
  sourceCommit: 93bf38a7f79a39cf5ec50ecbb5c3ddfedf2f1e81
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

Die **`get()`** Methode der [`Headers`](/de/docs/Web/API/Headers) Schnittstelle
gibt einen Byte-String aller Werte eines Headers innerhalb eines `Headers`-Objekts
mit einem gegebenen Namen zurück. Wenn der angeforderte Header im `Headers`-Objekt
nicht existiert, gibt er `null` zurück.

Aus Sicherheitsgründen können einige Header nur vom Benutzeragenten kontrolliert werden. Zu diesen Headern gehören die {{Glossary("Forbidden_request_header", "forbidden request headers")}}
und {{Glossary("Forbidden_response_header_name", "forbidden response header names")}}.

## Syntax

```js-nolint
get(name)
```

### Parameter

- `name`
  - : Der Name des HTTP-Headers, dessen Werte Sie aus dem
    `Headers`-Objekt abrufen möchten. Wenn der angegebene Name nicht mit der
    [field-name](https://httpwg.org/specs/rfc9110.html#fields.names)
    Produktion in der HTTP-Spezifikation übereinstimmt, löst diese Methode einen {{jsxref("TypeError")}} aus.
    Der Name ist nicht case-sensitiv.

### Rückgabewert

Eine {{jsxref("String")}}-Sequenz, die die Werte des abgerufenen Headers oder
`null` darstellt, wenn dieser Header nicht gesetzt ist.

## Beispiele

Ein leeres `Headers`-Objekt zu erstellen ist einfach:

```js
const myHeaders = new Headers(); // Currently empty
myHeaders.get("Not-Set"); // Returns null
```

Sie könnten mit [`Headers.append`](/de/docs/Web/API/Headers/append) einen Header hinzufügen und diesen dann mit `get()` abrufen:

```js
myHeaders.append("Content-Type", "image/jpeg");
myHeaders.get("Content-Type"); // Returns "image/jpeg"
```

Wenn der Header mehrere damit verbundene Werte hat, wird der Byte-String alle
Werte in der Reihenfolge enthalten, in der sie dem Headers-Objekt hinzugefügt wurden:

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
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
