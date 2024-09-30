---
title: "ContentIndex: delete() Methode"
short-title: delete()
slug: Web/API/ContentIndex/delete
l10n:
  sourceCommit: 6c3bed9bcd275fd4ad714c4df0ed874e9bf87681
---

{{APIRef("Content Index API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`delete()`** Methode der [`ContentIndex`](/de/docs/Web/API/ContentIndex) Schnittstelle entfernt ein Element aus dem derzeit indexierten Inhalt.

> [!NOTE]
> Ein Aufruf von `delete()` betrifft nur den Index. Es wird nichts aus dem [`Cache`](/de/docs/Web/API/Cache) gelöscht.

## Syntax

```js-nolint
delete(id)
```

### Parameter

- `id`
  - : Der eindeutige Bezeichner des indexierten Inhalts, den das [`ContentIndex`](/de/docs/Web/API/ContentIndex) Objekt entfernen soll.

### Rückgabewert

Gibt ein {{jsxref("Promise")}} zurück, das mit `undefined` aufgelöst wird.

### Ausnahmen

Es werden keine Ausnahmen ausgelöst.

## Beispiele

Unten ist eine asynchrone Funktion, die ein Element aus dem [Inhaltsindex](/de/docs/Web/API/Content_Index_API) entfernt. Wir erhalten eine Referenz auf die aktuelle [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration), die es uns ermöglicht, auf die [`index`](/de/docs/Web/API/ServiceWorkerRegistration/index) Eigenschaft zuzugreifen und somit die `delete` Methode zu verwenden.

```js
async function unregisterContent(article) {
  // reference registration
  const registration = await navigator.serviceWorker.ready;

  // feature detect Content Index
  if (!registration.index) return;

  // unregister content from index
  await registration.index.delete(article.id);
}
```

Die `delete` Methode kann auch im [Service Worker](/de/docs/Web/API/ServiceWorker) Bereich verwendet werden.

```js
self.registration.index.delete("my-id");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein einführender Artikel über die Content Index API](https://developer.chrome.com/docs/capabilities/web-apis/content-indexing-api)
- [Service Worker API, zusammen mit Informationen über Cache und CacheStorage](/de/docs/Web/API/Service_Worker_API)
