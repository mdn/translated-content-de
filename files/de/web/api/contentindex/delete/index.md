---
title: "ContentIndex: delete()-Methode"
short-title: delete()
slug: Web/API/ContentIndex/delete
l10n:
  sourceCommit: 6c3bed9bcd275fd4ad714c4df0ed874e9bf87681
---

{{APIRef("Content Index API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`delete()`**-Methode der
{{domxref("ContentIndex")}}-Schnittstelle hebt die Registrierung eines Elements aus den derzeit indexierten Inhalten auf.

> [!NOTE]
> Der Aufruf von `delete()` betrifft nur den Index. Es wird nichts aus dem {{domxref('Cache')}} gelöscht.

## Syntax

```js-nolint
delete(id)
```

### Parameter

- `id`
  - : Der eindeutige Bezeichner des indexierten Inhalts, den das {{domxref("ContentIndex")}}-Objekt entfernen soll.

### Rückgabewert

Gibt ein {{jsxref("Promise")}} zurück, das mit `undefined` aufgelöst wird.

### Ausnahmen

Es werden keine Ausnahmen ausgelöst.

## Beispiele

Unten ist eine asynchrone Funktion, die ein Element aus dem [Content Index](/de/docs/Web/API/Content_Index_API) entfernt. Wir erhalten eine Referenz zur aktuellen
{{domxref('ServiceWorkerRegistration')}}, die es uns ermöglicht, auf die
{{domxref('ServiceWorkerRegistration.index','index')}}-Eigenschaft zuzugreifen und somit die
`delete`-Methode zu nutzen.

```js
async function unregisterContent(article) {
  // Referenzregistrierung
  const registration = await navigator.serviceWorker.ready;

  // Feature-Detect für Content Index
  if (!registration.index) return;

  // Inhalt aus dem Index entfernen
  await registration.index.delete(article.id);
}
```

Die `delete`-Methode kann auch innerhalb des
[Service Worker](/de/docs/Web/API/ServiceWorker)-Kontextes verwendet werden.

```js
self.registration.index.delete("my-id");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein einführender Artikel zur Content Index API](https://developer.chrome.com/docs/capabilities/web-apis/content-indexing-api)
- [Service Worker API, zusammen mit Informationen über Cache und CacheStorage](/de/docs/Web/API/Service_Worker_API)
