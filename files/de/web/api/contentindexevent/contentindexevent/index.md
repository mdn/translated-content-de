---
title: "ContentIndexEvent: ContentIndexEvent() Konstruktor"
short-title: ContentIndexEvent()
slug: Web/API/ContentIndexEvent/ContentIndexEvent
l10n:
  sourceCommit: 6c3bed9bcd275fd4ad714c4df0ed874e9bf87681
---

{{APIRef("Content Index API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Der **`ContentIndexEvent()`** Konstruktor erstellt ein neues {{domxref("ContentIndexEvent")}}-Objekt,
dessen Typ und andere Optionen wie angegeben konfiguriert sind.

## Syntax

```js-nolint
new ContentIndexEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist groß- und kleinschreibungssensitiv und Browser setzen ihn immer auf `contentdelete`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in {{domxref("ExtendableEvent/ExtendableEvent", "ExtendableEvent()")}} definierten Eigenschaften_ die folgenden Eigenschaften hat:
    - `id`
      - : Die ID des indizierten Inhalts, den Sie aus dem {{domxref("ContentIndex")}}-Objekt entfernen möchten.

### Rückgabewert

Ein neues {{domxref("ContentIndexEvent")}}-Objekt, das mit den angegebenen Optionen konfiguriert wurde.

## Beispiele

Dieses Beispiel erstellt ein neues {{domxref('ContentIndexEvent')}} mit der relevanten ID.

```js
const removeData = {
  id: "unique-content-id",
};

const ciEvent = new ContentIndexEvent("contentdelete", removeData);

ciEvent.id; // sollte 'unique-content-id' zurückgeben
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein einführender Artikel zur Content Index API](https://developer.chrome.com/docs/capabilities/web-apis/content-indexing-api)
- [Service Worker API, zusammen mit Informationen über Cache und CacheStorage](/de/docs/Web/API/Service_Worker_API)
