---
title: "ContentIndexEvent: ContentIndexEvent() Konstruktor"
short-title: ContentIndexEvent()
slug: Web/API/ContentIndexEvent/ContentIndexEvent
l10n:
  sourceCommit: 6c3bed9bcd275fd4ad714c4df0ed874e9bf87681
---

{{APIRef("Content Index API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Der **`ContentIndexEvent()`** Konstruktor erstellt ein neues [`ContentIndexEvent`](/de/docs/Web/API/ContentIndexEvent) Objekt,
dessen Typ und andere Optionen wie angegeben konfiguriert sind.

## Syntax

```js-nolint
new ContentIndexEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist Groß-/Kleinschreibung-empfindlich und Browser setzen es immer auf `contentdelete`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in [`ExtendableEvent()`](/de/docs/Web/API/ExtendableEvent/ExtendableEvent) definierten Eigenschaften_ die folgenden Eigenschaften hat:
    - `id`
      - : Die ID des indexierten Inhalts, den Sie vom [`ContentIndex`](/de/docs/Web/API/ContentIndex) Objekt entfernen möchten.

### Rückgabewert

Ein neues [`ContentIndexEvent`](/de/docs/Web/API/ContentIndexEvent) Objekt, das mit den angegebenen Optionen konfiguriert ist.

## Beispiele

Dieses Beispiel erstellt ein neues [`ContentIndexEvent`](/de/docs/Web/API/ContentIndexEvent) mit der relevanten ID.

```js
const removeData = {
  id: "unique-content-id",
};

const ciEvent = new ContentIndexEvent("contentdelete", removeData);

ciEvent.id; // should return 'unique-content-id'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein einführender Artikel zur Content Index API](https://developer.chrome.com/docs/capabilities/web-apis/content-indexing-api)
- [Service Worker API, zusammen mit Informationen über Cache und CacheStorage](/de/docs/Web/API/Service_Worker_API)
