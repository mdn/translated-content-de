---
title: "Headers: get() Methode"
short-title: get()
slug: Web/API/Headers/get
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

Die **`get()`** Methode der [`Headers`](/de/docs/Web/API/Headers) Schnittstelle
gibt einen Byte-String aller Werte eines Headers innerhalb eines `Headers`-Objekts
mit einem gegebenen Namen zurück. Existiert der angeforderte Header nicht im `Headers`-Objekt, gibt sie `null` zurück.

Aus Sicherheitsgründen können einige Header nur vom Benutzeragent gesteuert werden. Zu diesen
Headern gehören die {{Glossary("Forbidden_request_header", "verbotenen Anforderungsheader")}}
und {{Glossary("Forbidden_response_header_name", "verbotenen Antwortheader-Namen")}}.

## Syntax

```js-nolint
get(name)
```

### Parameter

- `name`
  - : Der Name des HTTP-Headers, dessen Werte Sie vom
    `Headers`-Objekt abrufen möchten. Wenn der angegebene Name nicht der Name eines HTTP-Headers ist, löst diese
    Methode einen {{jsxref("TypeError")}} aus. Der Name ist nicht case-sensitiv.

### Rückgabewert

Eine {{jsxref("String")}}-Sequenz, die die Werte des abgerufenen Headers darstellt, oder
`null`, wenn dieser Header nicht gesetzt ist.

## Beispiele

Ein leeres `Headers`-Objekt zu erstellen ist einfach:

```js
const myHeaders = new Headers(); // Currently empty
myHeaders.get("Not-Set"); // Returns null
```

Sie könnten einen Header mit [`Headers.append`](/de/docs/Web/API/Headers/append) hinzufügen und ihn dann mit `get()` abrufen:

```js
myHeaders.append("Content-Type", "image/jpeg");
myHeaders.get("Content-Type"); // Returns "image/jpeg"
```

Wenn der Header mehrere Werte damit verknüpft hat, wird der Byte-String alle
diese Werte enthalten, in der Reihenfolge, in der sie dem Headers-Objekt hinzugefügt wurden:

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
