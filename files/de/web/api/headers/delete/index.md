---
title: "Headers: delete()-Methode"
short-title: delete()
slug: Web/API/Headers/delete
l10n:
  sourceCommit: 7b21121cd93f9f967248d53c6fd24db2af42b314
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

Die **`delete()`**-Methode der {{domxref("Headers")}}-Schnittstelle löscht einen Header aus dem aktuellen `Headers`-Objekt.

Aus Sicherheitsgründen können einige Header nur durch den User Agent kontrolliert werden. Zu diesen
Headern gehören die {{Glossary("Forbidden_header_name", "verbotenen Header-Namen")}} und {{Glossary("Forbidden_response_header_name", "verbotenen Antwort-Header-Namen")}}.

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

Ein leeres `Headers`-Objekt zu erstellen, ist einfach:

```js
const myHeaders = new Headers(); // Derzeit leer
```

Sie können einen Header hinzufügen, indem Sie {{domxref("Headers.append")}} verwenden:

```js
myHeaders.append("Content-Type", "image/jpeg");
myHeaders.get("Content-Type"); // Gibt 'image/jpeg' zurück
```

Sie können ihn dann wieder löschen:

```js
myHeaders.delete("Content-Type");
myHeaders.get("Content-Type"); // Gibt null zurück, da er gelöscht wurde
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
