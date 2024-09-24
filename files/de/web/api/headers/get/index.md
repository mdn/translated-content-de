---
title: "Headers: get()-Methode"
short-title: get()
slug: Web/API/Headers/get
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

Die **`get()`**-Methode der {{domxref("Headers")}}-Schnittstelle gibt einen Byte-String aller Werte eines Headers innerhalb eines `Headers`-Objekts mit einem gegebenen Namen zurück. Wenn der angeforderte Header nicht im `Headers`-Objekt vorhanden ist, wird `null` zurückgegeben.

Aus Sicherheitsgründen können einige Header nur vom Benutzeragenten gesteuert werden. Diese Header umfassen die {{Glossary("Forbidden_header_name", "verbotenen Header-Namen")}} und {{Glossary("Forbidden_response_header_name", "verbotenen Antwort-Header-Namen")}}.

## Syntax

```js-nolint
get(name)
```

### Parameter

- `name`
  - : Der Name des HTTP-Headers, dessen Werte Sie aus dem `Headers`-Objekt abrufen möchten. Wenn der gegebene Name nicht der Name eines HTTP-Headers ist, wirft diese Methode einen {{jsxref("TypeError")}}. Der Name ist nicht case-sensitiv.

### Rückgabewert

Eine {{jsxref("String")}}-Sequenz, die die Werte des abgerufenen Headers darstellt, oder `null`, wenn dieser Header nicht gesetzt ist.

## Beispiele

Ein leeres `Headers`-Objekt zu erstellen ist einfach:

```js
const myHeaders = new Headers(); // Aktuell leer
myHeaders.get("Not-Set"); // Gibt null zurück
```

Sie könnten einen Header mit {{domxref("Headers.append")}} hinzufügen und ihn dann mit `get()` abrufen:

```js
myHeaders.append("Content-Type", "image/jpeg");
myHeaders.get("Content-Type"); // Gibt "image/jpeg" zurück
```

Wenn der Header mit mehreren Werten verknüpft ist, wird der Byte-String alle Werte in der Reihenfolge enthalten, in der sie dem Headers-Objekt hinzugefügt wurden:

```js
myHeaders.append("Accept-Encoding", "deflate");
myHeaders.append("Accept-Encoding", "gzip");
myHeaders.get("Accept-Encoding"); // Gibt "deflate, gzip" zurück
myHeaders
  .get("Accept-Encoding")
  .split(",")
  .map((v) => v.trimStart()); // Gibt [ "deflate", "gzip" ] zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
